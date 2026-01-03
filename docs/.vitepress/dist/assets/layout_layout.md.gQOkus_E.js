import{_ as o,c as a,o as e,ag as n}from"./chunks/framework.dvv-DFtf.js";const _=JSON.parse('{"title":"크기와 앵커","description":"","frontmatter":{"title":"크기와 앵커"},"headers":[],"relativePath":"layout/layout.md","filePath":"layout/layout.md"}'),p={name:"layout/layout.md"};function s(l,t,i,c,d,r){return e(),a("div",null,[...t[0]||(t[0]=[n(`<h2 id="layout" tabindex="-1">크기와 앵커 <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;크기와 앵커 {#layout}&quot;">​</a></h2><p>퍼센트/픽셀/콘텐츠 기반 크기를 혼합하고, 9-포인트 앵커로 정밀 배치합니다.</p><pre><code>        ### 크기 표현식
</code></pre><ul><li><p><code>100%</code> 부모 기준</p></li><li><p><code>100% - 8px</code> 계산식</p></li><li><p><code>100%c</code> 콘텐츠 기준</p></li><li><p><code>100%y</code> 높이 기준 비율 유지</p></li><li><p><code>100%x</code> 너비 기준 비율 유지</p></li><li><p><code>fill</code> stack_panel에서만 남은 공간 채움</p></li><li><p><code>[32, 32]</code> 고정 픽셀</p><pre><code>      ### Anchor 9-Point


        top_left
        top_middle
        top_right
        left_middle
        center
        right_middle
        bottom_left
        bottom_middle
        bottom_right


      anchor와 offset을 함께 써서 반응형 배치를 만듭니다.
</code></pre></li></ul><p>앵커 배치 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;close_button&quot;: {</span></span>
<span class="line"><span>  &quot;anchor_from&quot;: &quot;top_right&quot;,</span><span> // 어디에서 시작할지</span></span>
<span class="line"><span>  &quot;anchor_to&quot;: &quot;top_right&quot;,</span><span>   // 어디에 붙일지</span></span>
<span class="line"><span>  &quot;offset&quot;: [-3, 3]</span><span>           // 살짝 이동</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)])])}const h=o(p,[["render",s]]);export{_ as __pageData,h as default};
