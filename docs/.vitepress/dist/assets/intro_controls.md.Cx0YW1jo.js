import{_ as o,c as p,o as n,ag as t}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"컨트롤 아주 쉽게","description":"","frontmatter":{"title":"컨트롤 아주 쉽게"},"headers":[],"relativePath":"intro/controls.md","filePath":"intro/controls.md"}'),a={name:"intro/controls.md"};function s(l,e,c,r,i,d){return n(),p("div",null,[...e[0]||(e[0]=[t(`<h2 id="controls" tabindex="-1">컨트롤 아주 쉽게 <a class="header-anchor" href="#controls" aria-label="Permalink to &quot;컨트롤 아주 쉽게 {#controls}&quot;">​</a></h2><p>컨트롤은 “화면에 올리는 블록”입니다. 아래 8개만 먼저 익혀도 절반은 끝입니다.</p><pre><code>        ### panel
</code></pre><p>아무것도 없는 투명 상자. 다른 블록을 담는 역할.</p><pre><code>        ### stack_panel
</code></pre><p>자동으로 줄 맞춰 쌓는 선반. 가로/세로 정렬에 사용.</p><pre><code>        ### grid
</code></pre><p>칸칸이 나뉜 서랍. 아이템 칸이나 슬롯에 사용.</p><pre><code>        ### scroll_view
</code></pre><p>스크롤 가능한 창. 길게 늘어나는 목록에 사용.</p><pre><code>        ### label
</code></pre><p>글씨 스티커. 텍스트를 보여줄 때 사용.</p><pre><code>        ### image
</code></pre><p>그림 판넬. 배경이나 아이콘을 넣을 때 사용.</p><pre><code>        ### custom
</code></pre><p>특수 그림(플레이어/아이템 등)을 그릴 때 사용.</p><pre><code>        ### button
</code></pre><p>눌러보는 스위치. 클릭 이벤트를 만들 때 사용.</p><pre><code>        ### edit_box
</code></pre><p>글자를 입력하는 칸. 이름 입력, 검색창에 사용.</p><pre><code>        ### 선택 기준
</code></pre><ul><li><p>정렬이 필요하면 <code>stack_panel</code></p></li><li><p>칸이 필요하면 <code>grid</code></p></li><li><p>길어지면 <code>scroll_view</code></p><pre><code>      ### 초보 조합 예시
</code></pre></li></ul><p>panel → image(배경) → label(제목) → button(선택)</p><p>stack_panel로 줄 맞추기</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;simple_row&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;stack_panel&quot;,</span><span> // 자동 정렬 선반</span></span>
<span class="line"><span>  &quot;orientation&quot;: &quot;horizontal&quot;,</span><span> // 가로 정렬</span></span>
<span class="line"><span>  &quot;size&quot;: [&quot;100%&quot;, 28],</span></span>
<span class="line"><span>  &quot;controls&quot;: [</span></span>
<span class="line"><span>    { &quot;left&quot;: { &quot;type&quot;: &quot;label&quot;, &quot;text&quot;: &quot;왼쪽&quot; } }, // 왼쪽 글씨</span></span>
<span class="line"><span>    { &quot;right&quot;: { &quot;type&quot;: &quot;label&quot;, &quot;text&quot;: &quot;오른쪽&quot; } } // 오른쪽 글씨</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      처음에는 \`panel\` + \`label\` + \`image\` 조합만 써도 충분합니다.
</code></pre>`,26)])])}const _=o(a,[["render",s]]);export{q as __pageData,_ as default};
