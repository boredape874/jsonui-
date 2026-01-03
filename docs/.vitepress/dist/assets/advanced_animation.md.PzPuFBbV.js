import{_ as n,c as s,o as p,ag as t}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"애니메이션","description":"","frontmatter":{"title":"애니메이션"},"headers":[],"relativePath":"advanced/animation.md","filePath":"advanced/animation.md"}'),i={name:"advanced/animation.md"};function e(o,a,l,c,u,d){return p(),s("div",null,[...a[0]||(a[0]=[t(`<h2 id="animation" tabindex="-1">애니메이션 <a class="header-anchor" href="#animation" aria-label="Permalink to &quot;애니메이션 {#animation}&quot;">​</a></h2><p>애니메이션은 화면 전환이나 강조 표현에 사용합니다. 너무 많이 쓰면 성능에 부담이 됩니다.</p><p>로딩 애니메이션 체인</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;loading_animation_alpha_in&quot;: {</span></span>
<span class="line"><span>  &quot;anim_type&quot;: &quot;alpha&quot;,</span><span> // 투명도 애니메이션</span></span>
<span class="line"><span>  &quot;easing&quot;: &quot;out_cubic&quot;,</span><span> // 부드럽게 멈춤</span></span>
<span class="line"><span>  &quot;duration&quot;: 0.5,</span></span>
<span class="line"><span>  &quot;from&quot;: 0,</span></span>
<span class="line"><span>  &quot;to&quot;: 1,</span></span>
<span class="line"><span>  // 다음 애니메이션으로 연결</span></span>
<span class="line"><span>  &quot;next&quot;: &quot;@hud.loading_animation_wait&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>        ### 자주 쓰는 anim_type
</code></pre><ul><li><p>alpha, size, offset</p></li><li><p>wait (연결 대기)</p></li><li><p>color (토글 강조)</p></li><li><p>flip_book, aseprite_flip_book</p><pre><code>      ### 적절한 사용
</code></pre></li></ul><p>작게 움직이거나 천천히 페이드하는 정도가 안정적입니다.</p><pre><code>        ### 중요 팁
</code></pre><p>작은 애니메이션 하나로도 UI가 훨씬 깔끔해 보입니다.</p><p>anims 배열 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;anims&quot;: [</span></span>
<span class="line"><span>  &quot;@demo.fade_in&quot;,</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;anim_type&quot;: &quot;color&quot;,</span></span>
<span class="line"><span>    &quot;duration&quot;: 0.4,</span></span>
<span class="line"><span>    &quot;from&quot;: [0.6, 0.3, 0.3, 0.0],</span></span>
<span class="line"><span>    &quot;to&quot;: [0.3, 0.6, 0.3, 1.0]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span></code></pre></div><pre><code>      어떤 파일은 anims 안에 이름을 붙여 넣기도 합니다. 이름은 “별칭”이라 필수는 아닙니다.






        ### 초보자 추천 값
</code></pre><ul><li><p>duration 0.2 ~ 0.6</p></li><li><p>easing: out_cubic, in_out_quad</p><pre><code>      ### 주의할 점
</code></pre></li><li><p>동시에 너무 많이 움직이지 않기</p></li><li><p>반복 애니메이션은 짧게</p></li></ul>`,13)])])}const _=n(i,[["render",e]]);export{q as __pageData,_ as default};
