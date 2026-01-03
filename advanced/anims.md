---
title: 사용 가능한 애니메이션
---

<section id="anims" class="section reveal" data-section data-group="advanced">
        <div class="section-head">
          <h2>사용 가능한 애니메이션</h2>
          <p>실제 파일에서 확인된 anim_type 목록입니다. 필요한 것만 골라 쓰세요.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>alpha</h3>
            <p>투명도 변화 (페이드 인/아웃)</p>
          </div>
          <div class="card">
            <h3>size</h3>
            <p>크기 변화 (커졌다가 작아짐)</p>
          </div>
          <div class="card">
            <h3>offset</h3>
            <p>위치 이동 (슬라이드)</p>
          </div>
          <div class="card">
            <h3>color</h3>
            <p>색상 변화 (토글 강조)</p>
          </div>
          <div class="card">
            <h3>wait</h3>
            <p>잠시 멈춤 (다음 애니메이션 대기)</p>
          </div>
          <div class="card">
            <h3>flip_book</h3>
            <p>전통적인 프레임 애니메이션 (간단한 로딩용)</p>
          </div>
          <div class="card">
            <h3>aseprite_flip_book</h3>
            <p>Aseprite 내보내기용 프레임 애니메이션</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">애니메이션 연결 예시</div>
          <pre><code>"fade_in": {
  "anim_type": "alpha", // 투명도
  "from": 0,
  "to": 1,
  "duration": 0.4,
  "next": "@demo.wait" // 다음 애니메이션
},
"wait": {
  "anim_type": "wait", // 잠시 대기
  "duration": 0.6,
  "next": "@demo.slide"
},
"slide": {
  "anim_type": "offset", // 위치 이동
  "from": [0, 0],
  "to": [8, 0],
  "duration": 0.3
}</code></pre>
        </div>
        <div class="callout tip">
          애니메이션은 1~2개만 써도 충분히 예쁘게 보입니다.
        </div>
      </section>