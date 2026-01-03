const normalizeText = (value) => value.replace(/\s+/g, " ").trim().toLowerCase();

let cachedIndex = null;

const loadSearchIndex = async () => {
  if (cachedIndex) return cachedIndex;
  const base = import.meta.env.BASE_URL || "/";

  try {
    const response = await fetch(`${base}search-index.json`, { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data)) {
        cachedIndex = data;
        return cachedIndex;
      }
    }
  } catch (error) {
    // Ignore search index fetch errors.
  }

  cachedIndex = [];
  return cachedIndex;
};

const renderSearchResults = (items, term, searchResults, searchCount, searchList) => {
  if (!searchResults || !searchCount || !searchList) return;

  searchList.innerHTML = "";
  if (items.length === 0) {
    searchCount.textContent = `"${term}" 검색 결과가 없습니다.`;
    return;
  }

  searchCount.textContent = `${items.length}개의 결과가 있습니다.`;
  const base = import.meta.env.BASE_URL || "/";
  items.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    if (item.url) {
      const isExternal = /^https?:/i.test(item.url);
      link.href = isExternal ? item.url : `${base}${item.url}`;
    } else {
      link.href = `#${item.id}`;
    }
    link.textContent = item.title || "제목 없음";

    const snippet = document.createElement("p");
    const summaryText = item.summary || item.text || "";
    const shortText = summaryText.length > 140 ? `${summaryText.slice(0, 140)}...` : summaryText;
    snippet.textContent = shortText;

    li.appendChild(link);
    li.appendChild(snippet);
    searchList.appendChild(li);
  });
};

const setupSearch = () => {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchCount = document.getElementById("searchCount");
  const searchList = document.getElementById("searchList");

  if (!searchInput || !searchResults || !searchCount || !searchList) return;
  if (searchInput.dataset.bound === "true") return;
  searchInput.dataset.bound = "true";

  searchInput.addEventListener("input", async (event) => {
    const term = event.target.value.trim();

    if (term.length < 2) {
      searchResults.classList.remove("active");
      searchCount.textContent = "2글자 이상 입력하면 검색이 시작됩니다.";
      searchList.innerHTML = "";
      return;
    }

    const normalizedTerm = normalizeText(term);
    const index = await loadSearchIndex();
    const matches = index.filter((item) => (item.text || "").includes(normalizedTerm));
    searchResults.classList.add("active");
    renderSearchResults(matches, term, searchResults, searchCount, searchList);
  });

  if (searchList.dataset.bound !== "true") {
    searchList.dataset.bound = "true";
    searchList.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;
      searchResults.classList.remove("active");
    });
  }
};

const setupCodeBlocks = () => {
  const codeBlocks = document.querySelectorAll(".code-block");
  codeBlocks.forEach((block) => {
    if (block.dataset.codeReady === "true") return;
    block.dataset.codeReady = "true";

    const code = block.querySelector("code");
    if (!code) return;

    let title = block.querySelector(".code-title");
    if (!title) {
      title = document.createElement("div");
      title.className = "code-title";
      title.textContent = "코드 예시";
      block.prepend(title);
    }

    if (title.querySelector(".code-actions")) return;

    const titleText = title.textContent.trim() || "코드 예시";
    const rawText = code.textContent.replace(/^\n+|\n+$/g, "");
    if (rawText) {
      const firstLine = rawText.split("\n")[0].trim();
      if (!firstLine.startsWith("//")) {
        code.textContent = `// ${titleText} 예시\n${rawText}`;
      }
    }

    title.textContent = "";
    const titleSpan = document.createElement("span");
    titleSpan.textContent = titleText;

    const actions = document.createElement("div");
    actions.className = "code-actions";

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "code-action";
    copyButton.textContent = "복사";
    copyButton.setAttribute("aria-label", "코드 복사");

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "code-action";
    toggleButton.textContent = "접기";
    toggleButton.setAttribute("aria-label", "코드 접기");

    const setToggleState = (collapsed) => {
      toggleButton.textContent = collapsed ? "펼치기" : "접기";
      toggleButton.setAttribute("aria-label", collapsed ? "코드 펼치기" : "코드 접기");
      toggleButton.setAttribute("aria-expanded", collapsed ? "false" : "true");
    };

    const copyText = async () => {
      const text = code.innerText.trim();
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      copyButton.textContent = "복사됨";
      setTimeout(() => {
        copyButton.textContent = "복사";
      }, 1600);
    };

    copyButton.addEventListener("click", copyText);

    const toggleBlock = () => {
      block.classList.toggle("collapsed");
      setToggleState(block.classList.contains("collapsed"));
    };

    toggleButton.addEventListener("click", toggleBlock);

    block.classList.add("collapsed");
    setToggleState(true);

    actions.appendChild(copyButton);
    actions.appendChild(toggleButton);
    title.appendChild(titleSpan);
    title.appendChild(actions);
  });
};

const setupVitepressCodeBlocks = () => {
  const blocks = document.querySelectorAll(".vp-doc div[class*=\"language-\"]");
  blocks.forEach((block) => {
    if (block.dataset.codeFoldReady === "true") return;
    block.dataset.codeFoldReady = "true";

    const pre = block.querySelector("pre");
    if (!pre) return;

    block.classList.add("code-fold", "is-collapsed");

    let header = block.querySelector(".code-fold-header");
    if (!header) {
      header = document.createElement("div");
      header.className = "code-fold-header";
      block.prepend(header);
    }

    if (header.querySelector(".code-fold-toggle")) return;

    const langMatch = Array.from(block.classList).find((name) => name.startsWith("language-"));
    const langLabel = langMatch ? langMatch.replace("language-", "").toUpperCase() : "CODE";

    const label = document.createElement("span");
    label.className = "code-fold-label";
    label.textContent = langLabel;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "code-fold-toggle";
    toggle.textContent = "펼치기";
    toggle.setAttribute("aria-label", "코드 펼치기");
    toggle.setAttribute("aria-expanded", "false");

    const setState = (collapsed) => {
      block.classList.toggle("is-collapsed", collapsed);
      toggle.textContent = collapsed ? "펼치기" : "접기";
      toggle.setAttribute("aria-label", collapsed ? "코드 펼치기" : "코드 접기");
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
    };

    toggle.addEventListener("click", () => {
      const collapsed = block.classList.contains("is-collapsed");
      setState(!collapsed);
    });

    header.appendChild(label);
    header.appendChild(toggle);

    setState(true);
  });
};

const setupOutlineToggle = () => {
  const aside = document.querySelector(".VPDocAside");
  if (!aside || aside.dataset.outlineReady === "true") return;
  aside.dataset.outlineReady = "true";

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "outline-toggle";

  const storageKey = "vp-outline-collapsed";
  let collapsed = false;
  try {
    collapsed = window.localStorage.getItem(storageKey) === "true";
  } catch (error) {
    collapsed = false;
  }

  const setState = (next) => {
    collapsed = next;
    aside.classList.toggle("is-collapsed", collapsed);
    toggle.textContent = collapsed ? "목차 펼치기" : "목차 접기";
    toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
    try {
      window.localStorage.setItem(storageKey, collapsed ? "true" : "false");
    } catch (error) {
      // Ignore storage errors.
    }
  };

  toggle.addEventListener("click", () => setState(!collapsed));
  aside.prepend(toggle);
  setState(collapsed);
};

export const setupGuideInteractions = () => {
  setupCodeBlocks();
  setupVitepressCodeBlocks();
  setupSearch();
  setupOutlineToggle();
};
