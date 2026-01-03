---
title: 성능과 디버깅
---

<section id="performance" class="section reveal" data-section data-group="misc">
        <div class="section-head">
          <h2>성능과 디버깅</h2>
          <p>JSON UI는 성능 비용이 큰 편입니다. 문제를 줄이는 습관이 중요합니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>최적화 체크</h3>
            <ul class="token-list">
              <li>불필요한 bindings 제거</li>
              <li>Molang 표현식 단순화</li>
              <li>컨트롤 계층 얕게 유지</li>
              <li>텍스처 아틀라스 활용</li>
            </ul>
          </div>
          <div class="card">
            <h3>자주 발생하는 실수</h3>
            <ul class="token-list">
              <li>collection_details 누락</li>
              <li>anchor 조합 오류</li>
              <li>변수 기본값 누락</li>
              <li>레이어 충돌</li>
            </ul>
          </div>
          <div class="card">
            <h3>디버깅 루틴</h3>
            <p>우선 #visible / size / anchor를 확인하고, 바인딩 값을 최소화한 뒤 다시 확장하세요.</p>
          </div>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>content_log 활용</h3>
            <div class="code-block compact">
              <pre><code>"debug_panel": {
  "type": "panel",
  "content_log_enabled": true,
  "bindings": [
    { "binding_name": "#title_text" }
  ]
}</code></pre>
            </div>
          </div>
          <div class="card">
            <h3>자주 나오는 오류</h3>
            <ul class="token-list">
              <li>Control not found → namespace/이름 확인</li>
              <li>Binding failed → binding_name 오타 확인</li>
              <li>Circular reference → 상속 체인 확인</li>
            </ul>
          </div>
        </div>
        <div class="callout danger">
          JSON UI는 엔티티 다음으로 성능 비용이 높습니다. 특히 모바일/콘솔에서 주의가 필요합니다.
        </div>
      </section>