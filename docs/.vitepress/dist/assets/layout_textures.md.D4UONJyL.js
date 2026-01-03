import{_ as s,c as a,o as n,ag as p}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"텍스처와 나인슬라이스","description":"","frontmatter":{"title":"텍스처와 나인슬라이스"},"headers":[],"relativePath":"layout/textures.md","filePath":"layout/textures.md"}'),t={name:"layout/textures.md"};function o(l,e,i,c,u,d){return n(),a("div",null,[...e[0]||(e[0]=[p(`<h2 id="textures" tabindex="-1">텍스처와 나인슬라이스 <a class="header-anchor" href="#textures" aria-label="Permalink to &quot;텍스처와 나인슬라이스 {#textures}&quot;">​</a></h2><p>텍스처는 “그림 파일”이고, 나인슬라이스는 “모서리 모양을 유지한 채 늘리는 방법”입니다.</p><pre><code>        ### 기본 텍스처
</code></pre><ul><li><p><code>texture</code> 그림 경로</p></li><li><p><code>size</code> 표시 크기</p></li><li><p>확장자는 보통 생략</p><pre><code>      ### 나인슬라이스
</code></pre></li></ul><p>모서리는 고정, 가운데만 늘려 찌그러짐을 줄입니다.</p><ul><li><p><code>nineslice_size</code> [왼, 위, 오른, 아래]</p></li><li><p><code>tiled</code> 반복 여부</p><pre><code>      ### 아틀라스
</code></pre></li></ul><p>큰 그림에서 필요한 조각만 잘라 씁니다.</p><ul><li><p><code>texture</code>에 <code>atlas.terrain</code></p></li><li><p><code>uv</code>, <code>uv_size</code>로 조각 지정</p><pre><code>      ### 반복 패턴
</code></pre></li></ul><p>배경을 바둑판처럼 반복할 때 사용합니다.</p><ul><li><code>tiled</code> true</li><li><code>tiled_scale</code>로 크기 조정</li></ul><p>나인슬라이스 배경 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;panel_bg&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;image&quot;,</span><span> // 배경 그림</span></span>
<span class="line"><span>  &quot;texture&quot;: &quot;textures/ui/panel&quot;,</span><span> // 그림 경로</span></span>
<span class="line"><span>  &quot;nineslice_size&quot;: [4, 4, 4, 4],</span><span> // 모서리 고정</span></span>
<span class="line"><span>  &quot;tiled&quot;: false,</span></span>
<span class="line"><span>  &quot;size&quot;: [&quot;100% - 8px&quot;, 40]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>아틀라스에서 아이콘 뽑기</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;block_icon&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;image&quot;,</span></span>
<span class="line"><span>  &quot;texture&quot;: &quot;atlas.terrain&quot;,</span><span> // 큰 그림(아틀라스)</span></span>
<span class="line"><span>  &quot;uv&quot;: [0, 0],</span><span> // 시작 좌표</span></span>
<span class="line"><span>  &quot;uv_size&quot;: [16, 16],</span><span> // 잘라낼 크기</span></span>
<span class="line"><span>  &quot;size&quot;: [16, 16]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      아이콘이 흐리면 size를 딱 맞게 맞추고, nineslice 값을 너무 크게 주지 마세요.
</code></pre>`,15)])])}const _=s(t,[["render",o]]);export{q as __pageData,_ as default};
