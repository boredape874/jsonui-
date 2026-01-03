import{_ as n,c as s,o as t,ag as p}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"초보 실습 10분","description":"","frontmatter":{"title":"초보 실습 10분"},"headers":[],"relativePath":"layout/mini-lab.md","filePath":"layout/mini-lab.md"}'),e={name:"layout/mini-lab.md"};function o(i,a,l,c,u,r){return t(),s("div",null,[...a[0]||(a[0]=[p(`<h2 id="mini-lab" tabindex="-1">초보 실습 10분 <a class="header-anchor" href="#mini-lab" aria-label="Permalink to &quot;초보 실습 10분 {#mini-lab}&quot;">​</a></h2><p>아래 3가지를 복사해서 붙여보면, 기본 구조를 빠르게 이해할 수 있습니다.</p><pre><code>        1
        ### 글씨 하나 붙이기
</code></pre><p>label만 화면에 붙입니다. 가장 안전한 시작입니다.</p><pre><code>        2
        ### 배경 상자 만들기
</code></pre><p>image를 사용해 반투명 배경을 만듭니다.</p><pre><code>        3
        ### 기본 버튼 쓰기
</code></pre><p>기본 템플릿 버튼을 가져와 텍스트만 바꿉니다.</p><p>미니 1: 글씨 하나</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;mini_text&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;label&quot;,</span><span> // 글씨 스티커</span></span>
<span class="line"><span>  &quot;text&quot;: &quot;처음 시작!&quot;,</span><span> // 보여줄 문장</span></span>
<span class="line"><span>  &quot;anchor_from&quot;: &quot;center&quot;,</span></span>
<span class="line"><span>  &quot;anchor_to&quot;: &quot;center&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>미니 2: 배경 상자</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;mini_box&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;image&quot;,</span><span> // 그림 판넬</span></span>
<span class="line"><span>  &quot;texture&quot;: &quot;textures/ui/White&quot;,</span><span> // 흰색 텍스처</span></span>
<span class="line"><span>  &quot;color&quot;: [0, 0, 0, 0.4],</span><span> // 반투명 검정</span></span>
<span class="line"><span>  &quot;size&quot;: [200, 60]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>미니 3: 기본 버튼</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;mini_button@common_buttons.light_text_button&quot;: {</span></span>
<span class="line"><span>  // 기본 버튼 템플릿 사용</span></span>
<span class="line"><span>  &quot;$button_text&quot;: &quot;눌러요&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      이 코드는 \`controls\` 배열 안에 “조각”으로 넣어서 사용합니다.
</code></pre>`,15)])])}const h=n(e,[["render",o]]);export{q as __pageData,h as default};
