import{_ as a,c as n,o as t,ag as e}from"./chunks/framework.dvv-DFtf.js";const _=JSON.parse('{"title":"포커스 이동","description":"","frontmatter":{"title":"포커스 이동"},"headers":[],"relativePath":"practice/focus.md","filePath":"practice/focus.md"}'),o={name:"practice/focus.md"};function p(u,s,c,i,l,r){return t(),n("div",null,[...s[0]||(s[0]=[e(`<h2 id="focus" tabindex="-1">포커스 이동 <a class="header-anchor" href="#focus" aria-label="Permalink to &quot;포커스 이동 {#focus}&quot;">​</a></h2><p>컨트롤러/키보드에서 이동할 버튼 경로를 지정합니다.</p><p>포커스 네비게이션 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;start_button&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;button&quot;,</span></span>
<span class="line"><span>  &quot;focus_identifier&quot;: &quot;start&quot;,</span></span>
<span class="line"><span>  &quot;default_focus_precedence&quot;: 1,</span></span>
<span class="line"><span>  &quot;focus_change_down&quot;: &quot;settings&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;settings_button&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;button&quot;,</span></span>
<span class="line"><span>  &quot;focus_identifier&quot;: &quot;settings&quot;,</span></span>
<span class="line"><span>  &quot;focus_change_up&quot;: &quot;start&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      포커스가 안 잡히면 \`focus_enabled\`나 버튼 가려짐 여부를 먼저 확인하세요.
</code></pre>`,5)])])}const d=a(o,[["render",p]]);export{_ as __pageData,d as default};
