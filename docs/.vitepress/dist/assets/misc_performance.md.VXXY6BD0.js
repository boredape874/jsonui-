import{_ as n,c as a,o as p,ag as s}from"./chunks/framework.dvv-DFtf.js";const _=JSON.parse('{"title":"성능과 디버깅","description":"","frontmatter":{"title":"성능과 디버깅"},"headers":[],"relativePath":"misc/performance.md","filePath":"misc/performance.md"}'),i={name:"misc/performance.md"};function l(o,e,t,c,r,d){return p(),a("div",null,[...e[0]||(e[0]=[s(`<h2 id="performance" tabindex="-1">성능과 디버깅 <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;성능과 디버깅 {#performance}&quot;">​</a></h2><p>JSON UI는 성능 비용이 큰 편입니다. 문제를 줄이는 습관이 중요합니다.</p><pre><code>        ### 최적화 체크
</code></pre><ul><li><p>불필요한 bindings 제거</p></li><li><p>Molang 표현식 단순화</p></li><li><p>컨트롤 계층 얕게 유지</p></li><li><p>텍스처 아틀라스 활용</p><pre><code>      ### 자주 발생하는 실수
</code></pre></li><li><p>collection_details 누락</p></li><li><p>anchor 조합 오류</p></li><li><p>변수 기본값 누락</p></li><li><p>레이어 충돌</p><pre><code>      ### 디버깅 루틴
</code></pre></li></ul><p>우선 #visible / size / anchor를 확인하고, 바인딩 값을 최소화한 뒤 다시 확장하세요.</p><pre><code>        ### content_log 활용
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;debug_panel&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;panel&quot;,</span></span>
<span class="line"><span>  &quot;content_log_enabled&quot;: true,</span></span>
<span class="line"><span>  &quot;bindings&quot;: [</span></span>
<span class="line"><span>    { &quot;binding_name&quot;: &quot;#title_text&quot; }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>        ### 자주 나오는 오류
</code></pre><ul><li><p>Control not found → namespace/이름 확인</p></li><li><p>Binding failed → binding_name 오타 확인</p></li><li><p>Circular reference → 상속 체인 확인</p><pre><code>    JSON UI는 엔티티 다음으로 성능 비용이 높습니다. 특히 모바일/콘솔에서 주의가 필요합니다.
</code></pre></li></ul>`,9)])])}const m=n(i,[["render",l]]);export{_ as __pageData,m as default};
