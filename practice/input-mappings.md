---
title: 입력 매핑
---

<section id="input-mappings" class="section reveal" data-section data-group="practice">
        <div class="section-head">
          <h2>입력 매핑</h2>
          <p>버튼이 눌리는 이유는 button_mappings 덕분입니다. 입력을 버튼 동작에 연결합니다.</p>
        </div>
        <div class="code-block">
          <div class="code-title">기본 매핑 예시</div>
          <pre><code>"my_button": {
  "type": "button",
  "button_mappings": [
    {
      "from_button_id": "button.menu_select",
      "to_button_id": "button.menu_ok",
      "mapping_type": "pressed"
    }
  ]
}</code></pre>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>자주 쓰는 from_button_id</h3>
            <ul class="token-list">
              <li>button.menu_select (기본 선택)</li>
              <li>button.menu_ok (확인)</li>
              <li>button.menu_cancel (취소)</li>
              <li>button.menu_tab_left / right</li>
            </ul>
          </div>
          <div class="card">
            <h3>mapping_type</h3>
            <ul class="token-list">
              <li>pressed: 눌렀을 때</li>
              <li>focused: 포커스될 때</li>
              <li>global: 포커스 없이 동작</li>
            </ul>
          </div>
        </div>
      </section>