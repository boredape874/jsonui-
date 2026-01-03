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

    const isLong = code.innerText.length > 600;
    if (isLong) {
      block.classList.add("collapsed");
      setToggleState(true);
    } else {
      setToggleState(false);
    }

    actions.appendChild(copyButton);
    actions.appendChild(toggleButton);
    title.appendChild(titleSpan);
    title.appendChild(actions);
  });
};

export const setupGuideInteractions = () => {
  setupCodeBlocks();
  setupSearch();
};
