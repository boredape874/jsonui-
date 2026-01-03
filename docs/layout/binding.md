---
title: 바인딩
---

<section id="binding" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>바인딩</h2>
          <p>바인딩은 “게임 데이터 → 화면”으로 연결하는 선입니다. 아래 4가지를 먼저 익히면 대부분 해결됩니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>global</h3>
            <p>게임에서 주는 값. 예: #title_text, #visible</p>
          </div>
          <div class="card">
            <h3>view</h3>
            <p>값을 바꾸거나 조건을 걸 때 사용합니다.</p>
          </div>
          <div class="card">
            <h3>collection</h3>
            <p>여러 개 버튼이나 목록을 반복 생성할 때 사용합니다.</p>
          </div>
          <div class="card">
            <h3>collection_details</h3>
            <p>현재 항목 번호/정보를 알려주는 바인딩입니다.</p>
          </div>
          <div class="card">
            <h3>변수형 binding_type</h3>
            <p>예: <code>$visible_binding_type</code>처럼 변수로 저장해 재사용.</p>
          </div>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>바인딩 흐름</h3>
            <ul class="token-list">
              <li>binding_name: 원래 값</li>
              <li>binding_name_override: 바꿀 속성</li>
              <li>binding_type: global/view/collection/collection_details</li>
            </ul>
          </div>
          <div class="card">
            <h3>초보자 팁</h3>
            <ul class="token-list">
              <li>collection은 collection_details도 같이</li>
              <li>조건이 복잡하면 view를 최소화</li>
              <li>binding_condition으로 갱신 타이밍 제어</li>
            </ul>
          </div>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>자주 쓰는 binding_condition</h3>
            <ul class="token-list">
              <li><code>once</code> 한 번만 계산</li>
              <li><code>always</code> 항상 갱신</li>
              <li><code>visible</code> 보일 때만 갱신</li>
              <li><code>visibility_changed</code> 보임 상태가 바뀔 때만</li>
            </ul>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">초보자용 바인딩 예시</div>
          <pre><code>{
  "bindings": [
    {
      // 게임에서 주는 제목을 내 텍스트에 연결
      "binding_name": "#title_text",
      "binding_name_override": "#text",
      "binding_type": "global"
    },
    {
      // 텍스트가 비어있지 않을 때만 보이기
      "binding_type": "view",
      "source_property_name": "(not (#text = ''))",
      "target_property_name": "#visible"
    }
  ]
}</code></pre>
        </div>
        <div class="callout info">
          바인딩이 너무 복잡해지면 먼저 #visible과 size만 남기고 하나씩 다시 붙이세요.
        </div>
        <div class="code-block">
          <div class="code-title">collection_details 포함 예시</div>
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
    {
      "binding_type": "collection",
      "binding_collection_name": "form_buttons"
    }
  ]
}</code></pre>
        </div>
        <div class="callout warn">
          collection_details를 빼면 #index 같은 “현재 번호”가 비어서 버튼/목록이 엉켜 보일 수 있습니다.
        </div>
      </section>