import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.dvv-DFtf.js";const d=JSON.parse('{"title":"레이어 (겹침 순서)","description":"","frontmatter":{"title":"레이어 (겹침 순서)"},"headers":[],"relativePath":"layout/layers.md","filePath":"layout/layers.md"}'),t={name:"layout/layers.md"};function l(o,a,i,u,r,c){return p(),n("div",null,[...a[0]||(a[0]=[e(`<h2 id="layers" tabindex="-1">레이어 (겹침 순서) <a class="header-anchor" href="#layers" aria-label="Permalink to &quot;레이어 (겹침 순서) {#layers}&quot;">​</a></h2><p>레이어는 “위/아래 순서표”입니다. 숫자가 클수록 위에 보입니다.</p><pre><code>        ### 기본 규칙
</code></pre><ul><li><p>기본값은 0</p></li><li><p>큰 숫자가 위</p></li><li><p>같은 layer면 controls 순서가 우선</p><pre><code>      ### 초보자 팁
</code></pre></li><li><p>0~10 안에서만 써도 충분</p></li><li><p>배경 1, 내용 5, 강조 10</p></li></ul><p>레이어로 겹침 순서 정하기</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;background&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;image&quot;,</span></span>
<span class="line"><span>  &quot;texture&quot;: &quot;textures/ui/Black&quot;,</span></span>
<span class="line"><span>  &quot;layer&quot;: 1</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;content&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;panel&quot;,</span></span>
<span class="line"><span>  &quot;layer&quot;: 5</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;tooltip&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;label&quot;,</span></span>
<span class="line"><span>  &quot;text&quot;: &quot;도움말&quot;,</span></span>
<span class="line"><span>  &quot;layer&quot;: 10</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      layer가 같을 때는 controls 배열에서 뒤에 있는 것이 위에 보입니다.
</code></pre>`,7)])])}const _=s(t,[["render",l]]);export{d as __pageData,_ as default};
