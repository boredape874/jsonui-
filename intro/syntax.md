---
title: 문법과 규칙 (중요)
---

<section id="syntax" class="section reveal" data-section data-group="intro">
        <div class="section-head">
          <h2>문법과 규칙 (중요)</h2>
          <p>코딩을 몰라도 따라 할 수 있도록, 꼭 지켜야 하는 규칙만 모았습니다.</p>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>파일 구조 3줄 요약</h3>
            <ul class="nested-list">
              <li>namespace로 “이름표”를 만든다</li>
              <li>컨트롤을 만든다 (panel, label 등)</li>
              <li>화면에 붙인다 (hud_screen 등)</li>
            </ul>
          </div>
          <div class="card">
            <h3>자주 쓰는 키워드</h3>
            <ul class="nested-list">
              <li>모양/배치
                <ul>
                  <li><code>type</code>, <code>size</code>, <code>anchor_from</code>, <code>anchor_to</code>, <code>offset</code></li>
                </ul>
              </li>
              <li>보이기/숨기기
                <ul>
                  <li><code>visible</code>, <code>enabled</code>, <code>layer</code></li>
                </ul>
              </li>
              <li>데이터 연결
                <ul>
                  <li><code>bindings</code>, <code>binding_type</code>, <code>binding_name</code></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>작업 순서 (초보용)</h3>
            <ul class="token-list">
              <li>1) 작은 패널 하나만 만들기</li>
              <li>2) 위치/크기 확인</li>
              <li>3) 텍스트/이미지 붙이기</li>
              <li>4) 바인딩 추가</li>
            </ul>
          </div>
          <div class="card">
            <h3>문제 생겼을 때</h3>
            <ul class="token-list">
              <li>최근 수정한 줄을 먼저 복구</li>
              <li>쉼표와 따옴표 다시 확인</li>
              <li>controls 배열이 비었는지 확인</li>
            </ul>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">기본 구조 예시</div>
          <pre><code>{
  "namespace": "demo", // 파일 이름표
  "demo_root": {
    "type": "panel", // 큰 상자
    "size": ["100%", "100%"],
    "controls": [
      { "title": { "type": "label", "text": "안녕!" } } // 글씨
    ]
  },
  "hud_screen": {
    // 화면에 붙이기
    "$additional_screen_content": "demo.demo_root"
  }
}</code></pre>
        </div>
        <div class="code-block">
          <div class="code-title">네임스페이스 참조 문법</div>
          <pre><code>"my_panel@common.panel": {
  // common namespace의 panel을 가져옴
  "size": ["100%", 60]
}</code></pre>
        </div>
        <div class="callout info">
          문법이 헷갈리면 “따옴표, 쉼표, 중괄호”만 먼저 확인하세요.
        </div>
      </section>