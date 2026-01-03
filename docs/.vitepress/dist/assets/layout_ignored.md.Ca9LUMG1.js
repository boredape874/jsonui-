import{_ as n,c as e,o as s,ag as t}from"./chunks/framework.dvv-DFtf.js";const _=JSON.parse('{"title":"ignored와 visible 차이","description":"","frontmatter":{"title":"ignored와 visible 차이"},"headers":[],"relativePath":"layout/ignored.md","filePath":"layout/ignored.md"}'),o={name:"layout/ignored.md"};function p(i,a,l,r,d,c){return s(),e("div",null,[...a[0]||(a[0]=[t(`<h2 id="ignored" tabindex="-1">ignored와 visible 차이 <a class="header-anchor" href="#ignored" aria-label="Permalink to &quot;ignored와 visible 차이 {#ignored}&quot;">​</a></h2><p>둘 다 숨기는 것처럼 보이지만 동작이 다릅니다. 초보자라면 꼭 구분하세요.</p><pre><code>        ### ignored
</code></pre><p>요소를 완전히 제거합니다. 공간도 차지하지 않습니다.</p><pre><code>        ### visible
</code></pre><p>보이기만 숨깁니다. 공간은 그대로 유지됩니다.</p><p>조건부 숨김 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;pc_only_button&quot;: {</span></span>
<span class="line"><span>  &quot;ignored&quot;: &quot;$touch&quot;</span><span> // 터치면 아예 제거</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;ghost_button&quot;: {</span></span>
<span class="line"><span>  &quot;visible&quot;: false</span><span> // 공간은 남기고 숨김</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,8)])])}const g=n(o,[["render",p]]);export{_ as __pageData,g as default};
