import{_ as s,c as e,o as n,ag as p}from"./chunks/framework.dvv-DFtf.js";const _=JSON.parse('{"title":"기초 준비","description":"","frontmatter":{"title":"기초 준비"},"headers":[],"relativePath":"layout/setup.md","filePath":"layout/setup.md"}'),t={name:"layout/setup.md"};function o(l,a,c,i,u,r){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h2 id="setup" tabindex="-1">기초 준비 <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;기초 준비 {#setup}&quot;">​</a></h2><p>처음 시작할 때 필요한 것들을 간단하게 정리했습니다.</p><pre><code>        ### 리소스 팩
</code></pre><p>JSON UI는 리소스 팩 안에 넣어야 게임에서 읽습니다.</p><pre><code>        ### UI 폴더
</code></pre><p>UI 파일은 보통 <code>ui</code> 폴더에 둡니다.</p><pre><code>        ### 화면 파일
</code></pre><p>HUD, 서버 폼, 인벤토리 같은 화면마다 파일이 다릅니다.</p><pre><code>        ### 테스트 습관
</code></pre><p>한 번에 많이 바꾸지 말고, 한 줄씩 바꾸고 바로 테스트합니다.</p><pre><code>      처음에는 HUD 화면만 수정해 보는 것이 가장 빠르게 결과를 확인하는 방법입니다.
</code></pre><p>아주 기본적인 파일 뼈대</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  // 네임스페이스: 이 파일의 이름표</span></span>
<span class="line"><span>  &quot;namespace&quot;: &quot;hello&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 화면에 넣을 패널</span></span>
<span class="line"><span>  &quot;hello_root&quot;: {</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;panel&quot;,</span></span>
<span class="line"><span>    &quot;size&quot;: [&quot;100%&quot;, &quot;100%&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,13)])])}const q=s(t,[["render",o]]);export{_ as __pageData,q as default};
