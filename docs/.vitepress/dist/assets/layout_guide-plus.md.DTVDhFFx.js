import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.dvv-DFtf.js";const r=JSON.parse('{"title":"초보자 가이드 더보기","description":"","frontmatter":{"title":"초보자 가이드 더보기"},"headers":[],"relativePath":"layout/guide-plus.md","filePath":"layout/guide-plus.md"}'),t={name:"layout/guide-plus.md"};function o(l,s,i,u,c,q){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="guide-plus" tabindex="-1">초보자 가이드 더보기 <a class="header-anchor" href="#guide-plus" aria-label="Permalink to &quot;초보자 가이드 더보기 {#guide-plus}&quot;">​</a></h2><p>작은 성공을 반복하는 방식으로 배우면 실패가 줄어듭니다.</p><pre><code>        1
        ### 기본 틀 복사
</code></pre><p>panel + label 조합으로 시작합니다.</p><pre><code>        2
        ### 이름표 바꾸기
</code></pre><p>namespace와 컨트롤 이름만 바꿔도 충돌이 줄어듭니다.</p><pre><code>        3
        ### 위치만 먼저 맞추기
</code></pre><p>anchor/offset을 고정하고 크기는 나중에 조정합니다.</p><pre><code>        4
        ### 보이기 조건 추가
</code></pre><p>#visible로 표시/숨김만 먼저 테스트합니다.</p><p>작은 알림 박스 만들기</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;simple_notice&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;panel&quot;,</span><span> // 투명한 상자</span></span>
<span class="line"><span>  &quot;size&quot;: [220, 48],</span></span>
<span class="line"><span>  &quot;anchor_from&quot;: &quot;top_middle&quot;,</span></span>
<span class="line"><span>  &quot;anchor_to&quot;: &quot;top_middle&quot;,</span></span>
<span class="line"><span>  &quot;offset&quot;: [0, 8],</span></span>
<span class="line"><span>  &quot;controls&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;bg&quot;: {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;image&quot;,</span><span> // 배경 그림</span></span>
<span class="line"><span>        &quot;texture&quot;: &quot;textures/ui/White&quot;,</span></span>
<span class="line"><span>        &quot;color&quot;: [0, 0, 0, 0.5],</span><span> // 반투명 배경</span></span>
<span class="line"><span>        &quot;size&quot;: [&quot;100%&quot;, &quot;100%&quot;]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;text&quot;: {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;label&quot;,</span><span> // 글씨 스티커</span></span>
<span class="line"><span>        &quot;text&quot;: &quot;여기에 한 줄 메시지&quot;,</span></span>
<span class="line"><span>        &quot;anchor_from&quot;: &quot;center&quot;,</span></span>
<span class="line"><span>        &quot;anchor_to&quot;: &quot;center&quot;,</span></span>
<span class="line"><span>        &quot;shadow&quot;: true</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>        ### 자주 쓰는 규칙
</code></pre><ul><li><p>보이기/숨기기 <code>#visible</code> 값으로 켜고 끄기</p></li><li><p>view 바인딩으로 조건 붙이기</p><pre><code>        글씨 바꾸기
</code></pre></li><li><p><code>#text</code> 또는 <code>#title_text</code> 사용</p></li><li><p>정말 필요할 때만 Molang 추가</p><pre><code>      ### 실수 방지 체크
</code></pre></li><li><p>패널 size가 0인지 확인</p></li><li><p>anchor가 화면 밖인지 확인</p></li><li><p>텍스처 경로 오타 확인</p></li><li><p>collection_details 누락 확인</p></li></ul>`,14)])])}const _=n(t,[["render",o]]);export{r as __pageData,_ as default};
