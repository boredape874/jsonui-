import{_ as a,c as e,o as n,ag as t}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"플랫폼/입력 차이","description":"","frontmatter":{"title":"플랫폼/입력 차이"},"headers":[],"relativePath":"misc/platform.md","filePath":"misc/platform.md"}'),p={name:"misc/platform.md"};function o(i,s,l,c,r,u){return n(),e("div",null,[...s[0]||(s[0]=[t(`<h2 id="platform" tabindex="-1">플랫폼/입력 차이 <a class="header-anchor" href="#platform" aria-label="Permalink to &quot;플랫폼/입력 차이 {#platform}&quot;">​</a></h2><p>모바일은 터치, 콘솔은 패드, PC는 키보드/마우스입니다. 같은 화면도 크기와 이동 방식이 달라집니다.</p><pre><code>        ### 자주 쓰는 플랫폼 변수
</code></pre><ul><li><p><code>$touch</code> 터치 입력 가능</p></li><li><p><code>$console_edition</code> 콘솔 플랫폼</p></li><li><p><code>$is_pregame</code> 메인 메뉴/로그인</p></li><li><p><code>$screen_size_x</code> 화면 너비</p><pre><code>      ### 안전 영역
</code></pre></li></ul><p>콘솔은 가장자리가 잘릴 수 있어 여백이 필요합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;safe_panel&quot;: {</span></span>
<span class="line"><span>  &quot;size&quot;: [&quot;90%&quot;, &quot;90%&quot;],</span></span>
<span class="line"><span>  &quot;anchor_from&quot;: &quot;center&quot;,</span></span>
<span class="line"><span>  &quot;anchor_to&quot;: &quot;center&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>        ### 터치/패드 대응
</code></pre><p>터치는 버튼을 크게, 패드는 포커스 이동을 꼭 설정하세요.</p><p>터치/PC 크기 바꾸기</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;start_button&quot;: {</span></span>
<span class="line"><span>  &quot;variables&quot;: [</span></span>
<span class="line"><span>    { &quot;requires&quot;: &quot;$touch&quot;, &quot;$btn_size&quot;: [60, 60] },</span></span>
<span class="line"><span>    { &quot;$btn_size&quot;: [44, 44] }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;size&quot;: &quot;$btn_size&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      콘솔에서는 \`focus_identifier\`와 \`focus_change_*\`를 꼭 넣어주세요.
</code></pre>`,11)])])}const _=a(p,[["render",o]]);export{q as __pageData,_ as default};
