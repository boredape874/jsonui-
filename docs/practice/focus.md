---
title: 포커스 이동
---

<section id="focus" class="section reveal" data-section data-group="practice">
        <div class="section-head">
          <h2>포커스 이동</h2>
          <p>컨트롤러/키보드에서 이동할 버튼 경로를 지정합니다.</p>
        </div>
        <div class="code-block">
          <div class="code-title">포커스 네비게이션 예시</div>
          <pre><code>"start_button": {
  "type": "button",
  "focus_identifier": "start",
  "default_focus_precedence": 1,
  "focus_change_down": "settings"
},
"settings_button": {
  "type": "button",
  "focus_identifier": "settings",
  "focus_change_up": "start"
}</code></pre>
        </div>
        <div class="callout tip">
          포커스가 안 잡히면 <code>focus_enabled</code>나 버튼 가려짐 여부를 먼저 확인하세요.
        </div>
      </section>