import{_ as p,c as a,o as t,ag as s}from"./chunks/framework.dvv-DFtf.js";const d=JSON.parse('{"title":"입력 매핑","description":"","frontmatter":{"title":"입력 매핑"},"headers":[],"relativePath":"practice/input-mappings.md","filePath":"practice/input-mappings.md"}'),e={name:"practice/input-mappings.md"};function i(o,n,l,u,c,r){return t(),a("div",null,[...n[0]||(n[0]=[s(`<h2 id="input-mappings" tabindex="-1">입력 매핑 <a class="header-anchor" href="#input-mappings" aria-label="Permalink to &quot;입력 매핑 {#input-mappings}&quot;">​</a></h2><p>버튼이 눌리는 이유는 button_mappings 덕분입니다. 입력을 버튼 동작에 연결합니다.</p><p>기본 매핑 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;my_button&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;button&quot;,</span></span>
<span class="line"><span>  &quot;button_mappings&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;from_button_id&quot;: &quot;button.menu_select&quot;,</span></span>
<span class="line"><span>      &quot;to_button_id&quot;: &quot;button.menu_ok&quot;,</span></span>
<span class="line"><span>      &quot;mapping_type&quot;: &quot;pressed&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>        ### 자주 쓰는 from_button_id
</code></pre><ul><li><p>button.menu_select (기본 선택)</p></li><li><p>button.menu_ok (확인)</p></li><li><p>button.menu_cancel (취소)</p></li><li><p>button.menu_tab_left / right</p><pre><code>      ### mapping_type
</code></pre></li><li><p>pressed: 눌렀을 때</p></li><li><p>focused: 포커스될 때</p></li><li><p>global: 포커스 없이 동작</p></li></ul>`,6)])])}const m=p(e,[["render",i]]);export{d as __pageData,m as default};
