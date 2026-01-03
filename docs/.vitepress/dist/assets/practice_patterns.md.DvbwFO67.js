import{_ as a,c as e,o as s,ag as p}from"./chunks/framework.dvv-DFtf.js";const _=JSON.parse('{"title":"실전 패턴","description":"","frontmatter":{"title":"실전 패턴"},"headers":[],"relativePath":"practice/patterns.md","filePath":"practice/patterns.md"}'),t={name:"practice/patterns.md"};function o(r,n,i,c,l,d){return s(),e("div",null,[...n[0]||(n[0]=[p(`<h2 id="patterns" tabindex="-1">실전 패턴 <a class="header-anchor" href="#patterns" aria-label="Permalink to &quot;실전 패턴 {#patterns}&quot;">​</a></h2><p>실제 예제에서 자주 등장하는 패턴을 쉬운 설명으로 정리했습니다.</p><pre><code>        ### 텍스트 프로토콜
</code></pre><p>채팅/액션바 텍스트에 접두어를 넣고 데이터를 전달합니다.</p><pre><code>        ### 보존 텍스트
</code></pre><p>이전 값을 저장해 변화가 있을 때만 갱신합니다.</p><pre><code>        ### 입력 모드 분기
</code></pre><p>게임패드인지 키보드인지에 따라 UI를 나눕니다.</p><pre><code>        ### 컬렉션 인덱스
</code></pre><p>버튼 리스트에서 특정 위치만 보여줄 때 사용합니다.</p><pre><code>        ### 메시지 필터
</code></pre><p>특정 문자열은 숨기고, 나머지만 보여줍니다.</p><pre><code>        ### 렌더러 패널
</code></pre><p>player_renderer로 캐릭터를 UI에 띄웁니다.</p><p>렌더러 기본 예시 (아이템 아이콘)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;item_icon&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;custom&quot;,</span><span> // 특수 렌더러</span></span>
<span class="line"><span>  &quot;renderer&quot;: &quot;inventory_item_renderer&quot;,</span><span> // 아이템 그림</span></span>
<span class="line"><span>  &quot;size&quot;: [16, 16],</span></span>
<span class="line"><span>  &quot;bindings&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;binding_name&quot;: &quot;#item_id_aux&quot;,</span></span>
<span class="line"><span>      &quot;binding_type&quot;: &quot;global&quot;</span><span> // 아이템 ID가 들어와야 그림이 보임</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      아이템 렌더러는 보통 컬렉션에서 #item_id_aux 값을 받아옵니다. 값이 비면 빈칸으로 보입니다.
</code></pre>`,17)])])}const q=a(t,[["render",o]]);export{_ as __pageData,q as default};
