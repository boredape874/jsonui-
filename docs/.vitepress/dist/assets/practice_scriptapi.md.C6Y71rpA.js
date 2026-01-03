import{_ as a,c as n,o as p,ag as t}from"./chunks/framework.dvv-DFtf.js";const m=JSON.parse('{"title":"ScriptAPI 연동","description":"","frontmatter":{"title":"ScriptAPI 연동"},"headers":[],"relativePath":"practice/scriptapi.md","filePath":"practice/scriptapi.md"}'),e={name:"practice/scriptapi.md"};function i(c,s,l,o,r,d){return p(),n("div",null,[...s[0]||(s[0]=[t(`<h2 id="scriptapi" tabindex="-1">ScriptAPI 연동 <a class="header-anchor" href="#scriptapi" aria-label="Permalink to &quot;ScriptAPI 연동 {#scriptapi}&quot;">​</a></h2><p>customUI_ 프리픽스를 활용해 ScriptAPI 폼과 JSON UI를 연결할 수 있습니다.</p><p>ActionFormData 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import * as ui from &quot;@minecraft/server-ui&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const form = new ui.ActionFormData()</span></span>
<span class="line"><span>  .title(&quot;customUI_Config_&quot;)</span></span>
<span class="line"><span>  .body(&quot;Select an option:&quot;)</span></span>
<span class="line"><span>  .button(&quot;Option 1&quot;)</span></span>
<span class="line"><span>  .button(&quot;Option 2&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>player.show(form).then((response) =&gt; {</span></span>
<span class="line"><span>  if (response.canceled) return;</span></span>
<span class="line"><span>  if (response.selection === 0) {</span></span>
<span class="line"><span>    // handle option 1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>알림 메시지 연동 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>system.afterEvents.scriptEventReceive.subscribe((data) =&gt; {</span></span>
<span class="line"><span>  // 이벤트에서 필요한 정보만 꺼냄</span></span>
<span class="line"><span>  const { id, sourceEntity, message } = data;</span></span>
<span class="line"><span>  const dynamicToastEvent = (text) =&gt; \`[UI] \${text}\`;</span></span>
<span class="line"><span>  // 특정 이벤트 이름만 처리</span></span>
<span class="line"><span>  if (id === &quot;cn:main&quot;) {</span></span>
<span class="line"><span>    // 메시지를 UI 토스트로 전달</span></span>
<span class="line"><span>    sourceEntity.sendMessage(dynamicToastEvent(message));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre></div>`,6)])])}const h=a(e,[["render",i]]);export{m as __pageData,h as default};
