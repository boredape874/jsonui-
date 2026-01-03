import{_ as n,c as s,o as p,ag as e}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"사용 가능한 애니메이션","description":"","frontmatter":{"title":"사용 가능한 애니메이션"},"headers":[],"relativePath":"advanced/anims.md","filePath":"advanced/anims.md"}'),t={name:"advanced/anims.md"};function o(i,a,l,c,u,d){return p(),s("div",null,[...a[0]||(a[0]=[e(`<h2 id="anims" tabindex="-1">사용 가능한 애니메이션 <a class="header-anchor" href="#anims" aria-label="Permalink to &quot;사용 가능한 애니메이션 {#anims}&quot;">​</a></h2><p>실제 파일에서 확인된 anim_type 목록입니다. 필요한 것만 골라 쓰세요.</p><pre><code>        ### alpha
</code></pre><p>투명도 변화 (페이드 인/아웃)</p><pre><code>        ### size
</code></pre><p>크기 변화 (커졌다가 작아짐)</p><pre><code>        ### offset
</code></pre><p>위치 이동 (슬라이드)</p><pre><code>        ### color
</code></pre><p>색상 변화 (토글 강조)</p><pre><code>        ### wait
</code></pre><p>잠시 멈춤 (다음 애니메이션 대기)</p><pre><code>        ### flip_book
</code></pre><p>전통적인 프레임 애니메이션 (간단한 로딩용)</p><pre><code>        ### aseprite_flip_book
</code></pre><p>Aseprite 내보내기용 프레임 애니메이션</p><p>애니메이션 연결 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;fade_in&quot;: {</span></span>
<span class="line"><span>  &quot;anim_type&quot;: &quot;alpha&quot;,</span><span> // 투명도</span></span>
<span class="line"><span>  &quot;from&quot;: 0,</span></span>
<span class="line"><span>  &quot;to&quot;: 1,</span></span>
<span class="line"><span>  &quot;duration&quot;: 0.4,</span></span>
<span class="line"><span>  &quot;next&quot;: &quot;@demo.wait&quot;</span><span> // 다음 애니메이션</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;wait&quot;: {</span></span>
<span class="line"><span>  &quot;anim_type&quot;: &quot;wait&quot;,</span><span> // 잠시 대기</span></span>
<span class="line"><span>  &quot;duration&quot;: 0.6,</span></span>
<span class="line"><span>  &quot;next&quot;: &quot;@demo.slide&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;slide&quot;: {</span></span>
<span class="line"><span>  &quot;anim_type&quot;: &quot;offset&quot;,</span><span> // 위치 이동</span></span>
<span class="line"><span>  &quot;from&quot;: [0, 0],</span></span>
<span class="line"><span>  &quot;to&quot;: [8, 0],</span></span>
<span class="line"><span>  &quot;duration&quot;: 0.3</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      애니메이션은 1~2개만 써도 충분히 예쁘게 보입니다.
</code></pre>`,19)])])}const _=n(t,[["render",o]]);export{q as __pageData,_ as default};
