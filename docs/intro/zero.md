---
title: 완전 기초 0단계
---

<section id="zero" class="section reveal" data-section data-group="intro">
        <div class="section-head">
          <h2>완전 기초 0단계</h2>
          <p>코딩이 처음이라도 이해할 수 있게, JSON과 UI의 최소 규칙만 알려드립니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>JSON은 “이름표 있는 상자”</h3>
            <p>이름표(키)와 값이 쌍으로 들어갑니다. 예: <code>"text": "안녕"</code></p>
          </div>
          <div class="card">
            <h3>UI는 “화면 조립”</h3>
            <p>작은 블록(panel, label, image)을 모아 큰 화면을 만듭니다.</p>
          </div>
          <div class="card">
            <h3>파일은 텍스트</h3>
            <p>메모장처럼 쓰되, 쉼표와 따옴표 규칙을 지켜야 합니다.</p>
          </div>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>꼭 지켜야 하는 3가지</h3>
            <ul class="token-list">
              <li>문자열은 따옴표로 감싸기</li>
              <li>중괄호/대괄호 짝 맞추기</li>
              <li>마지막 줄에는 쉼표 빼기</li>
            </ul>
          </div>
          <div class="card">
            <h3>자주 쓰는 값</h3>
            <ul class="token-list">
              <li><code>"text"</code> 글씨</li>
              <li><code>[숫자, 숫자]</code> 크기</li>
              <li><code>true/false</code> 보이기/숨기기</li>
            </ul>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">JSON 3규칙만 기억</div>
          <pre><code>{
  // 1) 중괄호 { } 는 큰 상자
  "title": "안녕하세요", // 2) "이름": "값"
  "size": [100, 40], // 3) 대괄호 [ ] 는 목록
  "visible": true // true/false는 켜기/끄기
}</code></pre>
        </div>
        <div class="callout tip">
          한 줄을 바꿨으면 바로 저장하고 확인하세요. 작은 성공이 가장 빠른 공부입니다.
        </div>
      </section>