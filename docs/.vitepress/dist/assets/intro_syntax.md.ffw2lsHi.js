import{_ as a,c as s,o as e,ag as p}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"문법과 규칙 (중요)","description":"","frontmatter":{"title":"문법과 규칙 (중요)"},"headers":[],"relativePath":"intro/syntax.md","filePath":"intro/syntax.md"}'),o={name:"intro/syntax.md"};function t(l,n,i,c,d,r){return e(),s("div",null,[...n[0]||(n[0]=[p(`<h2 id="syntax" tabindex="-1">문법과 규칙 (중요) <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;문법과 규칙 (중요) {#syntax}&quot;">​</a></h2><p>코딩을 몰라도 따라 할 수 있도록, 꼭 지켜야 하는 규칙만 모았습니다.</p><pre><code>        ### 파일 구조 3줄 요약
</code></pre><ul><li><p>namespace로 “이름표”를 만든다</p></li><li><p>컨트롤을 만든다 (panel, label 등)</p></li><li><p>화면에 붙인다 (hud_screen 등)</p><pre><code>      ### 자주 쓰는 키워드
</code></pre></li><li><p>모양/배치 <code>type</code>, <code>size</code>, <code>anchor_from</code>, <code>anchor_to</code>, <code>offset</code></p><pre><code>        보이기/숨기기
</code></pre></li><li><p><code>visible</code>, <code>enabled</code>, <code>layer</code></p><pre><code>        데이터 연결
</code></pre></li><li><p><code>bindings</code>, <code>binding_type</code>, <code>binding_name</code></p><pre><code>      ### 작업 순서 (초보용)
</code></pre></li><li><ol><li>작은 패널 하나만 만들기</li></ol></li><li><ol start="2"><li>위치/크기 확인</li></ol></li><li><ol start="3"><li>텍스트/이미지 붙이기</li></ol></li><li><ol start="4"><li><p>바인딩 추가</p><pre><code>   ### 문제 생겼을 때
</code></pre></li></ol></li><li><p>최근 수정한 줄을 먼저 복구</p></li><li><p>쉼표와 따옴표 다시 확인</p></li><li><p>controls 배열이 비었는지 확인</p></li></ul><p>기본 구조 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;namespace&quot;: &quot;demo&quot;,</span><span> // 파일 이름표</span></span>
<span class="line"><span>  &quot;demo_root&quot;: {</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;panel&quot;,</span><span> // 큰 상자</span></span>
<span class="line"><span>    &quot;size&quot;: [&quot;100%&quot;, &quot;100%&quot;],</span></span>
<span class="line"><span>    &quot;controls&quot;: [</span></span>
<span class="line"><span>      { &quot;title&quot;: { &quot;type&quot;: &quot;label&quot;, &quot;text&quot;: &quot;안녕!&quot; } } // 글씨</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;hud_screen&quot;: {</span></span>
<span class="line"><span>    // 화면에 붙이기</span></span>
<span class="line"><span>    &quot;$additional_screen_content&quot;: &quot;demo.demo_root&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>네임스페이스 참조 문법</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;my_panel@common.panel&quot;: {</span></span>
<span class="line"><span>  // common namespace의 panel을 가져옴</span></span>
<span class="line"><span>  &quot;size&quot;: [&quot;100%&quot;, 60]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      문법이 헷갈리면 “따옴표, 쉼표, 중괄호”만 먼저 확인하세요.
</code></pre>`,9)])])}const _=a(o,[["render",t]]);export{q as __pageData,_ as default};
