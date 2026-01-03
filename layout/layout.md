---
title: 크기와 앵커
---

<section id="layout" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>크기와 앵커</h2>
          <p>퍼센트/픽셀/콘텐츠 기반 크기를 혼합하고, 9-포인트 앵커로 정밀 배치합니다.</p>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>크기 표현식</h3>
            <ul class="token-list">
              <li><code>100%</code> 부모 기준</li>
              <li><code>100% - 8px</code> 계산식</li>
              <li><code>100%c</code> 콘텐츠 기준</li>
              <li><code>100%y</code> 높이 기준 비율 유지</li>
              <li><code>100%x</code> 너비 기준 비율 유지</li>
              <li><code>fill</code> stack_panel에서만 남은 공간 채움</li>
              <li><code>[32, 32]</code> 고정 픽셀</li>
            </ul>
          </div>
          <div class="card">
            <h3>Anchor 9-Point</h3>
            <div class="anchor-grid">
              <span>top_left</span>
              <span>top_middle</span>
              <span>top_right</span>
              <span>left_middle</span>
              <span>center</span>
              <span>right_middle</span>
              <span>bottom_left</span>
              <span>bottom_middle</span>
              <span>bottom_right</span>
            </div>
            <p class="muted">anchor와 offset을 함께 써서 반응형 배치를 만듭니다.</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">앵커 배치 예시</div>
          <pre><code>"close_button": {
  "anchor_from": "top_right", // 어디에서 시작할지
  "anchor_to": "top_right",   // 어디에 붙일지
  "offset": [-3, 3]           // 살짝 이동
}</code></pre>
        </div>
      </section>