---
title: 첫 UI 만들기
---

<section id="first-ui" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>첫 UI 만들기</h2>
          <p>가장 작은 형태의 UI를 만들어 보며 구조에 익숙해집니다.</p>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>핵심 순서</h3>
            <ol class="step-list">
              <li>namespace를 지정한다.</li>
              <li>panel 하나를 만든다.</li>
              <li>label을 추가한다.</li>
              <li>HUD 화면에 붙인다.</li>
            </ol>
          </div>
          <div class="card">
            <h3>주의할 점</h3>
            <ul class="token-list">
              <li>panel 크기가 0이면 아무것도 보이지 않습니다.</li>
              <li>anchor가 잘못되면 화면 밖으로 나갈 수 있습니다.</li>
              <li>#visible이 false이면 화면에 표시되지 않습니다.</li>
            </ul>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">가장 작은 HUD 예제</div>
          <pre><code>{
  "namespace": "hello", // 파일 이름표

  "hello_root": {
    "type": "panel", // 투명한 상자
    "size": ["100%", "100%"],
    "controls": [
      {
        "title": {
          "type": "label", // 스티커 글씨
          "text": "안녕하세요 JSON UI!",
          "anchor_from": "center",
          "anchor_to": "center",
          "shadow": true // 글자 그림자
        }
      }
    ]
  },

  "hud_screen": {
    // HUD 화면에 내 패널을 추가
    "$additional_screen_content": "hello.hello_root"
  }
}</code></pre>
        </div>
      </section>