import{_ as t,c as a,o,ag as l}from"./chunks/framework.dvv-DFtf.js";const _=JSON.parse('{"title":"Molang","description":"","frontmatter":{"title":"Molang"},"headers":[],"relativePath":"layout/molang.md","filePath":"layout/molang.md"}'),n={name:"layout/molang.md"};function p(i,e,c,d,s,r){return o(),a("div",null,[...e[0]||(e[0]=[l(`<h2 id="molang" tabindex="-1">Molang <a class="header-anchor" href="#molang" aria-label="Permalink to &quot;Molang {#molang}&quot;">​</a></h2><p>Molang은 간단한 계산과 조건을 적는 언어입니다. 어렵게 생각하지 말고 짧게 쓰는 것이 좋습니다.</p><pre><code>        ### 기본 연산
</code></pre><ul><li><p><code>(#value / 20)</code> 나눗셈</p></li><li><p><code>(not (#texture = &#39;&#39;))</code> 빈 값 검사</p></li><li><p><code>(#title_text - &#39;customUI_&#39;)</code> 문자열 빼기 (없으면 그대로)</p></li><li><p><code>((#a = &#39;x&#39;) and (#b &gt; 5))</code> 논리 연산</p><pre><code>      ### 문자열 슬라이싱
</code></pre></li></ul><p>실제 예제는 텍스트를 잘라서 여러 데이터를 분리합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// #dialogue_data에서 200자만 남기기</span></span>
<span class="line"><span>&quot;source_property_name&quot;: &quot;((&#39;%.200s&#39; * #dialogue_data) - &#39;\\t&#39;)&quot;</span></span></code></pre></div><pre><code>        ### 초보 규칙 3가지
</code></pre><ul><li><p>괄호로 감싸서 안전하게</p></li><li><p>문자열은 작은따옴표 사용</p></li><li><p>짧게 쓰고 하나씩 테스트</p><pre><code>      ### 자주 쓰는 비교
</code></pre></li><li><p><code>(#value &gt; 0)</code> 양수인지</p></li><li><p><code>(#text = &#39;&#39;)</code> 비어있는지</p></li><li><p><code>(not (#visible))</code> 반대 조건</p><pre><code>    customUI 감지는 \`((#title_text - &#39;customUI_&#39;) = #title_text)\` 패턴을 사용합니다.
    이 식이 true면 “접두어가 없다”는 뜻입니다.




    \`* 1\`은 true/false 값을 1/0으로 바꾸는 간단한 변환입니다.
</code></pre></li></ul>`,8)])])}const g=t(n,[["render",p]]);export{_ as __pageData,g as default};
