---
title: 컨트롤 아주 쉽게
---

<section id="controls" class="section reveal" data-section data-group="intro">
        <div class="section-head">
          <h2>컨트롤 아주 쉽게</h2>
          <p>컨트롤은 “화면에 올리는 블록”입니다. 아래 8개만 먼저 익혀도 절반은 끝입니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>panel</h3>
            <p>아무것도 없는 투명 상자. 다른 블록을 담는 역할.</p>
          </div>
          <div class="card">
            <h3>stack_panel</h3>
            <p>자동으로 줄 맞춰 쌓는 선반. 가로/세로 정렬에 사용.</p>
          </div>
          <div class="card">
            <h3>grid</h3>
            <p>칸칸이 나뉜 서랍. 아이템 칸이나 슬롯에 사용.</p>
          </div>
          <div class="card">
            <h3>scroll_view</h3>
            <p>스크롤 가능한 창. 길게 늘어나는 목록에 사용.</p>
          </div>
          <div class="card">
            <h3>label</h3>
            <p>글씨 스티커. 텍스트를 보여줄 때 사용.</p>
          </div>
          <div class="card">
            <h3>image</h3>
            <p>그림 판넬. 배경이나 아이콘을 넣을 때 사용.</p>
          </div>
          <div class="card">
            <h3>custom</h3>
            <p>특수 그림(플레이어/아이템 등)을 그릴 때 사용.</p>
          </div>
          <div class="card">
            <h3>button</h3>
            <p>눌러보는 스위치. 클릭 이벤트를 만들 때 사용.</p>
          </div>
          <div class="card">
            <h3>edit_box</h3>
            <p>글자를 입력하는 칸. 이름 입력, 검색창에 사용.</p>
          </div>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>선택 기준</h3>
            <ul class="token-list">
              <li>정렬이 필요하면 <code>stack_panel</code></li>
              <li>칸이 필요하면 <code>grid</code></li>
              <li>길어지면 <code>scroll_view</code></li>
            </ul>
          </div>
          <div class="card">
            <h3>초보 조합 예시</h3>
            <p>panel → image(배경) → label(제목) → button(선택)</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">stack_panel로 줄 맞추기</div>
          <pre><code>"simple_row": {
  "type": "stack_panel", // 자동 정렬 선반
  "orientation": "horizontal", // 가로 정렬
  "size": ["100%", 28],
  "controls": [
    { "left": { "type": "label", "text": "왼쪽" } }, // 왼쪽 글씨
    { "right": { "type": "label", "text": "오른쪽" } } // 오른쪽 글씨
  ]
}</code></pre>
        </div>
        <div class="callout info">
          처음에는 <code>panel</code> + <code>label</code> + <code>image</code> 조합만 써도 충분합니다.
        </div>
      </section>