---
title: ignored와 visible 차이
---

<section id="ignored" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>ignored와 visible 차이</h2>
          <p>둘 다 숨기는 것처럼 보이지만 동작이 다릅니다. 초보자라면 꼭 구분하세요.</p>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>ignored</h3>
            <p>요소를 완전히 제거합니다. 공간도 차지하지 않습니다.</p>
          </div>
          <div class="card">
            <h3>visible</h3>
            <p>보이기만 숨깁니다. 공간은 그대로 유지됩니다.</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">조건부 숨김 예시</div>
          <pre><code>"pc_only_button": {
  "ignored": "$touch" // 터치면 아예 제거
},
"ghost_button": {
  "visible": false // 공간은 남기고 숨김
}</code></pre>
        </div>
      </section>