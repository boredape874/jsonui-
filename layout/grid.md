---
title: 그리드
---

<section id="grid" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>그리드</h2>
          <p>칸칸이 배치하는 방식입니다. 인벤토리 슬롯처럼 일정한 배열이 필요할 때 씁니다.</p>
        </div>
        <div class="code-block">
          <div class="code-title">3x3 그리드 예시</div>
          <pre><code>"my_grid": {
  "type": "grid",
  "grid_dimensions": [3, 3],
  "controls": [
    { "slot_0@common.button": { "grid_position": [0, 0] } },
    { "slot_1@common.button": { "grid_position": [1, 0] } },
    { "slot_2@common.button": { "grid_position": [2, 0] } }
  ]
}</code></pre>
        </div>
        <ul class="token-list">
          <li><code>grid_dimensions</code> 가로/세로 칸 수</li>
          <li><code>grid_position</code> 각 요소의 위치 [x, y]</li>
          <li>칸을 넘기면 화면 밖으로 밀립니다</li>
        </ul>
      </section>