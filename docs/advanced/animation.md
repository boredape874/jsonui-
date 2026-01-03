---
title: 애니메이션
---

<section id="animation" class="section reveal" data-section data-group="advanced">
        <div class="section-head">
          <h2>애니메이션</h2>
          <p>애니메이션은 화면 전환이나 강조 표현에 사용합니다. 너무 많이 쓰면 성능에 부담이 됩니다.</p>
        </div>
        <div class="code-block">
          <div class="code-title">로딩 애니메이션 체인</div>
          <pre><code>"loading_animation_alpha_in": {
  "anim_type": "alpha", // 투명도 애니메이션
  "easing": "out_cubic", // 부드럽게 멈춤
  "duration": 0.5,
  "from": 0,
  "to": 1,
  // 다음 애니메이션으로 연결
  "next": "@hud.loading_animation_wait"
}</code></pre>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>자주 쓰는 anim_type</h3>
            <ul class="token-list">
              <li>alpha, size, offset</li>
              <li>wait (연결 대기)</li>
              <li>color (토글 강조)</li>
              <li>flip_book, aseprite_flip_book</li>
            </ul>
          </div>
          <div class="card">
            <h3>적절한 사용</h3>
            <p>작게 움직이거나 천천히 페이드하는 정도가 안정적입니다.</p>
          </div>
          <div class="card">
            <h3>중요 팁</h3>
            <p>작은 애니메이션 하나로도 UI가 훨씬 깔끔해 보입니다.</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">anims 배열 예시</div>
          <pre><code>"anims": [
  "@demo.fade_in",
  {
    "anim_type": "color",
    "duration": 0.4,
    "from": [0.6, 0.3, 0.3, 0.0],
    "to": [0.3, 0.6, 0.3, 1.0]
  }
]</code></pre>
        </div>
        <div class="callout info">
          어떤 파일은 anims 안에 이름을 붙여 넣기도 합니다. 이름은 “별칭”이라 필수는 아닙니다.
        </div>
        <div class="two-col">
          <div class="card">
            <h3>초보자 추천 값</h3>
            <ul class="token-list">
              <li>duration 0.2 ~ 0.6</li>
              <li>easing: out_cubic, in_out_quad</li>
            </ul>
          </div>
          <div class="card">
            <h3>주의할 점</h3>
            <ul class="token-list">
              <li>동시에 너무 많이 움직이지 않기</li>
              <li>반복 애니메이션은 짧게</li>
            </ul>
          </div>
        </div>
      </section>