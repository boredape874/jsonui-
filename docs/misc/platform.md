---
title: 플랫폼/입력 차이
---

<section id="platform" class="section reveal" data-section data-group="misc">
        <div class="section-head">
          <h2>플랫폼/입력 차이</h2>
          <p>모바일은 터치, 콘솔은 패드, PC는 키보드/마우스입니다. 같은 화면도 크기와 이동 방식이 달라집니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>자주 쓰는 플랫폼 변수</h3>
            <ul class="token-list">
              <li><code>$touch</code> 터치 입력 가능</li>
              <li><code>$console_edition</code> 콘솔 플랫폼</li>
              <li><code>$is_pregame</code> 메인 메뉴/로그인</li>
              <li><code>$screen_size_x</code> 화면 너비</li>
            </ul>
          </div>
          <div class="card">
            <h3>안전 영역</h3>
            <p>콘솔은 가장자리가 잘릴 수 있어 여백이 필요합니다.</p>
            <div class="code-block compact">
              <pre><code>"safe_panel": {
  "size": ["90%", "90%"],
  "anchor_from": "center",
  "anchor_to": "center"
}</code></pre>
            </div>
          </div>
          <div class="card">
            <h3>터치/패드 대응</h3>
            <p>터치는 버튼을 크게, 패드는 포커스 이동을 꼭 설정하세요.</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">터치/PC 크기 바꾸기</div>
          <pre><code>"start_button": {
  "variables": [
    { "requires": "$touch", "$btn_size": [60, 60] },
    { "$btn_size": [44, 44] }
  ],
  "size": "$btn_size"
}</code></pre>
        </div>
        <div class="callout tip">
          콘솔에서는 <code>focus_identifier</code>와 <code>focus_change_*</code>를 꼭 넣어주세요.
        </div>
      </section>