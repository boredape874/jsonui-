---
title: 수정과 팩토리
---

<section id="modfactory" class="section reveal" data-section data-group="advanced">
        <div class="section-head">
          <h2>수정과 팩토리</h2>
          <p>기존 화면을 직접 바꾸기보다 “추가”와 “교체”를 활용하는 방식이 안전합니다.</p>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>modifications 핵심</h3>
            <ul class="token-list">
              <li><code>insert_front</code> 앞에 추가</li>
              <li><code>insert_back</code> 뒤에 추가</li>
              <li><code>remove</code> 조건 기반 삭제</li>
            </ul>
          </div>
          <div class="card">
            <h3>팩토리 기본 구조</h3>
            <div class="code-block compact">
              <pre><code>"server_form_factory": {
  "type": "factory", // 반복 생성기
  "control_ids": {
    "long_form": "@custom.long_form_replacement",
    "custom_form": "@custom.custom_form_replacement"
  },
  "factory_control_name": "#form_type" // 어떤 템플릿을 쓸지 결정
}</code></pre>
            </div>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">modifications 완전 예시</div>
          <pre><code>"hud_screen@hud.hud_screen": {
  "modifications": [
    {
      "array_name": "controls",
      "operation": "insert_front",
      "value": [
        { "my_hud_panel@custom.hud_panel": {} }
      ]
    },
    {
      "array_name": "controls",
      "operation": "remove",
      "control_name": "vanilla_button"
    }
  ]
}</code></pre>
        </div>
        <div class="code-block">
          <div class="code-title">collection_details 포함 팩토리</div>
          <pre><code>"button_factory": {
  "type": "factory",
  "control_ids": {
    "button": "@custom.simple_button"
  },
  "collection_details": {
    "collection_name": "form_buttons",
    "collection_index_binding": "#index"
  },
  "bindings": [
    { "binding_type": "collection", "binding_collection_name": "form_buttons" }
  ]
}</code></pre>
        </div>
        <div class="callout info">
          실제 예제는 title_text로 서로 다른 패널을 보여주는 방식을 자주 사용합니다. 원본은 남겨두고 필요한 부분만 추가하는 것이 안전합니다.
        </div>
      </section>