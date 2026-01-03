import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"변수 & 메모장","description":"","frontmatter":{"title":"변수 & 메모장"},"headers":[],"relativePath":"layout/variables.md","filePath":"layout/variables.md"}'),t={name:"layout/variables.md"};function l(o,a,i,c,u,r){return p(),n("div",null,[...a[0]||(a[0]=[e(`<h2 id="variables" tabindex="-1">변수 &amp; 메모장 <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;변수 &amp; 메모장 {#variables}&quot;">​</a></h2><p>변수는 “재사용 값”, property_bag은 “컨트롤 안에 저장하는 메모장”이라고 생각하면 쉽습니다.</p><p>변수 선언과 오버라이드</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;$title_text|default&quot;: &quot;My UI Title&quot;,</span><span> // 기본값</span></span>
<span class="line"><span>&quot;custom_panel@common.panel&quot;: {</span></span>
<span class="line"><span>  &quot;$title_text&quot;: &quot;Override Title&quot;,</span><span> // 덮어쓰기</span></span>
<span class="line"><span>  &quot;$title_color&quot;: [1, 0.6, 0.2]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>        ### 조건부 변수
</code></pre><p><code>variables</code> 배열로 조건에 따라 값을 교체할 수 있습니다.</p><pre><code>        ### Property Bag 활용
</code></pre><p>진행 바 템플릿에서 이전 값과 배율을 저장하는 방식이 대표적입니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;property_bag&quot;: {</span></span>
<span class="line"><span>  // 이전 값을 저장해 변화를 감지</span></span>
<span class="line"><span>  &quot;#prev_value&quot;: 0,</span></span>
<span class="line"><span>  // 진행 바 배율을 메모</span></span>
<span class="line"><span>  &quot;#multiplier&quot;: &quot;$multiplier&quot;</span></span>
<span class="line"><span>            }</span></span></code></pre></div><p>variables 배열 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;my_panel&quot;: {</span></span>
<span class="line"><span>  &quot;variables&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;requires&quot;: &quot;$touch&quot;,</span></span>
<span class="line"><span>      &quot;$panel_size&quot;: [360, 220]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;requires&quot;: &quot;(not $touch)&quot;,</span></span>
<span class="line"><span>      &quot;$panel_size&quot;: [300, 180]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;size&quot;: &quot;$panel_size&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>        ### 초보자 팁
</code></pre><ul><li><p>변수에는 default를 붙여 안전하게</p></li><li><p>색상은 0~1 범위(권장), 일부 값은 0~255도 보임</p><pre><code>      ### 실수 줄이기
</code></pre></li><li><p>같은 값은 변수로 묶기</p></li><li><p>긴 값은 property_bag에 저장</p></li></ul>`,13)])])}const _=s(t,[["render",l]]);export{q as __pageData,_ as default};
