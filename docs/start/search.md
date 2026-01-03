---
title: 검색
---

<section id="search" class="section reveal" data-section data-group="global">
        <div class="section-head">
          <h2>검색</h2>
          <p>궁금한 단어를 입력하면 관련 섹션을 빠르게 찾을 수 있습니다.</p>
        </div>
        <div class="search-box">
          <input id="searchInput" type="search" placeholder="예: 버튼, 바인딩, 애니메이션" aria-label="문서 검색">
          <span class="search-hint">2글자 이상 입력</span>
        </div>
        <div class="search-results" id="searchResults" aria-live="polite">
          <div class="search-count" id="searchCount">검색 결과가 여기에 표시됩니다.</div>
          <ul id="searchList"></ul>
        </div>
      </section>