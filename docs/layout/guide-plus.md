---
title: 초보자 가이드 더보기
---

<section id="guide-plus" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>초보자 가이드 더보기</h2>
          <p>작은 성공을 반복하는 방식으로 배우면 실패가 줄어듭니다.</p>
        </div>
        <div class="step-grid">
          <div class="step-card">
            <span class="step-num">1</span>
            <h3>기본 틀 복사</h3>
            <p>panel + label 조합으로 시작합니다.</p>
          </div>
          <div class="step-card">
            <span class="step-num">2</span>
            <h3>이름표 바꾸기</h3>
            <p>namespace와 컨트롤 이름만 바꿔도 충돌이 줄어듭니다.</p>
          </div>
          <div class="step-card">
            <span class="step-num">3</span>
            <h3>위치만 먼저 맞추기</h3>
            <p>anchor/offset을 고정하고 크기는 나중에 조정합니다.</p>
          </div>
          <div class="step-card">
            <span class="step-num">4</span>
            <h3>보이기 조건 추가</h3>
            <p>#visible로 표시/숨김만 먼저 테스트합니다.</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">작은 알림 박스 만들기</div>
          <pre><code>"simple_notice": {
  "type": "panel", // 투명한 상자
  "size": [220, 48],
  "anchor_from": "top_middle",
  "anchor_to": "top_middle",
  "offset": [0, 8],
  "controls": [
    {
      "bg": {
        "type": "image", // 배경 그림
        "texture": "textures/ui/White",
        "color": [0, 0, 0, 0.5], // 반투명 배경
        "size": ["100%", "100%"]
      }
    },
    {
      "text": {
        "type": "label", // 글씨 스티커
        "text": "여기에 한 줄 메시지",
        "anchor_from": "center",
        "anchor_to": "center",
        "shadow": true
      }
    }
  ]
}</code></pre>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>자주 쓰는 규칙</h3>
            <ul class="nested-list">
              <li>보이기/숨기기
                <ul>
                  <li><code>#visible</code> 값으로 켜고 끄기</li>
                  <li>view 바인딩으로 조건 붙이기</li>
                </ul>
              </li>
              <li>글씨 바꾸기
                <ul>
                  <li><code>#text</code> 또는 <code>#title_text</code> 사용</li>
                  <li>정말 필요할 때만 Molang 추가</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="card">
            <h3>실수 방지 체크</h3>
            <ul class="token-list">
              <li>패널 size가 0인지 확인</li>
              <li>anchor가 화면 밖인지 확인</li>
              <li>텍스처 경로 오타 확인</li>
              <li>collection_details 누락 확인</li>
            </ul>
          </div>
        </div>
      </section>