---
title: ScriptAPI 연동
---

<section id="scriptapi" class="section reveal" data-section data-group="practice">
        <div class="section-head">
          <h2>ScriptAPI 연동</h2>
          <p>customUI_ 프리픽스를 활용해 ScriptAPI 폼과 JSON UI를 연결할 수 있습니다.</p>
        </div>
        <div class="code-block">
          <div class="code-title">ActionFormData 예시</div>
          <pre><code>import * as ui from "@minecraft/server-ui";

const form = new ui.ActionFormData()
  .title("customUI_Config_")
  .body("Select an option:")
  .button("Option 1")
  .button("Option 2");

player.show(form).then((response) =&gt; {
  if (response.canceled) return;
  if (response.selection === 0) {
    // handle option 1
  }
});</code></pre>
        </div>
        <div class="code-block">
          <div class="code-title">알림 메시지 연동 예시</div>
          <pre><code>system.afterEvents.scriptEventReceive.subscribe((data) =&gt; {
  // 이벤트에서 필요한 정보만 꺼냄
  const { id, sourceEntity, message } = data;
  const dynamicToastEvent = (text) =&gt; `[UI] ${text}`;
  // 특정 이벤트 이름만 처리
  if (id === "cn:main") {
    // 메시지를 UI 토스트로 전달
    sourceEntity.sendMessage(dynamicToastEvent(message));
  }
});</code></pre>
        </div>
      </section>