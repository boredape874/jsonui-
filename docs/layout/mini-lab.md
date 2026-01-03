---
title: 초보 실습 10분
---

<section id="mini-lab" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>초보 실습 10분</h2>
          <p>아래 3가지를 복사해서 붙여보면, 기본 구조를 빠르게 이해할 수 있습니다.</p>
        </div>
        <div class="step-grid">
          <div class="step-card">
            <span class="step-num">1</span>
            <h3>글씨 하나 붙이기</h3>
            <p>label만 화면에 붙입니다. 가장 안전한 시작입니다.</p>
          </div>
          <div class="step-card">
            <span class="step-num">2</span>
            <h3>배경 상자 만들기</h3>
            <p>image를 사용해 반투명 배경을 만듭니다.</p>
          </div>
          <div class="step-card">
            <span class="step-num">3</span>
            <h3>기본 버튼 쓰기</h3>
            <p>기본 템플릿 버튼을 가져와 텍스트만 바꿉니다.</p>
          </div>
        </div>
        <div class="code-block compact">
          <div class="code-title">미니 1: 글씨 하나</div>
          <pre><code>"mini_text": {
  "type": "label", // 글씨 스티커
  "text": "처음 시작!", // 보여줄 문장
  "anchor_from": "center",
  "anchor_to": "center"
}</code></pre>
        </div>
        <div class="code-block compact">
          <div class="code-title">미니 2: 배경 상자</div>
          <pre><code>"mini_box": {
  "type": "image", // 그림 판넬
  "texture": "textures/ui/White", // 흰색 텍스처
  "color": [0, 0, 0, 0.4], // 반투명 검정
  "size": [200, 60]
}</code></pre>
        </div>
        <div class="code-block compact">
          <div class="code-title">미니 3: 기본 버튼</div>
          <pre><code>"mini_button@common_buttons.light_text_button": {
  // 기본 버튼 템플릿 사용
  "$button_text": "눌러요"
}</code></pre>
        </div>
        <div class="callout info">
          이 코드는 <code>controls</code> 배열 안에 “조각”으로 넣어서 사용합니다.
        </div>
      </section>