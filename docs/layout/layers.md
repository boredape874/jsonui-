---
title: 레이어 (겹침 순서)
---

<section id="layers" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>레이어 (겹침 순서)</h2>
          <p>레이어는 “위/아래 순서표”입니다. 숫자가 클수록 위에 보입니다.</p>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>기본 규칙</h3>
            <ul class="token-list">
              <li>기본값은 0</li>
              <li>큰 숫자가 위</li>
              <li>같은 layer면 controls 순서가 우선</li>
            </ul>
          </div>
          <div class="card">
            <h3>초보자 팁</h3>
            <ul class="token-list">
              <li>0~10 안에서만 써도 충분</li>
              <li>배경 1, 내용 5, 강조 10</li>
            </ul>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">레이어로 겹침 순서 정하기</div>
          <pre><code>"background": {
  "type": "image",
  "texture": "textures/ui/Black",
  "layer": 1
},
"content": {
  "type": "panel",
  "layer": 5
},
"tooltip": {
  "type": "label",
  "text": "도움말",
  "layer": 10
}</code></pre>
        </div>
        <div class="callout tip">
          layer가 같을 때는 controls 배열에서 뒤에 있는 것이 위에 보입니다.
        </div>
      </section>