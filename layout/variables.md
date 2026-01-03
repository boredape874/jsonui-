---
title: 변수 & 메모장
---

<section id="variables" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>변수 &amp; 메모장</h2>
          <p>변수는 “재사용 값”, property_bag은 “컨트롤 안에 저장하는 메모장”이라고 생각하면 쉽습니다.</p>
        </div>
        <div class="code-block">
          <div class="code-title">변수 선언과 오버라이드</div>
          <pre><code>"$title_text|default": "My UI Title", // 기본값
"custom_panel@common.panel": {
  "$title_text": "Override Title", // 덮어쓰기
  "$title_color": [1, 0.6, 0.2]
}</code></pre>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>조건부 변수</h3>
            <p><code>variables</code> 배열로 조건에 따라 값을 교체할 수 있습니다.</p>
          </div>
          <div class="card">
            <h3>Property Bag 활용</h3>
            <p>진행 바 템플릿에서 이전 값과 배율을 저장하는 방식이 대표적입니다.</p>
            <div class="code-block compact">
              <pre><code>"property_bag": {
  // 이전 값을 저장해 변화를 감지
  "#prev_value": 0,
  // 진행 바 배율을 메모
  "#multiplier": "$multiplier"
            }</code></pre>
            </div>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">variables 배열 예시</div>
          <pre><code>"my_panel": {
  "variables": [
    {
      "requires": "$touch",
      "$panel_size": [360, 220]
    },
    {
      "requires": "(not $touch)",
      "$panel_size": [300, 180]
    }
  ],
  "size": "$panel_size"
}</code></pre>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>초보자 팁</h3>
            <ul class="token-list">
              <li>변수에는 default를 붙여 안전하게</li>
              <li>색상은 0~1 범위(권장), 일부 값은 0~255도 보임</li>
            </ul>
          </div>
          <div class="card">
            <h3>실수 줄이기</h3>
            <ul class="token-list">
              <li>같은 값은 변수로 묶기</li>
              <li>긴 값은 property_bag에 저장</li>
            </ul>
          </div>
        </div>
      </section>