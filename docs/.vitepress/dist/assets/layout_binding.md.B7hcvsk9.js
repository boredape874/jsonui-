import{_ as s,c as a,o as p,ag as e}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"바인딩","description":"","frontmatter":{"title":"바인딩"},"headers":[],"relativePath":"layout/binding.md","filePath":"layout/binding.md"}'),i={name:"layout/binding.md"};function o(t,n,l,c,d,u){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="binding" tabindex="-1">바인딩 <a class="header-anchor" href="#binding" aria-label="Permalink to &quot;바인딩 {#binding}&quot;">​</a></h2><p>바인딩은 “게임 데이터 → 화면”으로 연결하는 선입니다. 아래 4가지를 먼저 익히면 대부분 해결됩니다.</p><pre><code>        ### global
</code></pre><p>게임에서 주는 값. 예: #title_text, #visible</p><pre><code>        ### view
</code></pre><p>값을 바꾸거나 조건을 걸 때 사용합니다.</p><pre><code>        ### collection
</code></pre><p>여러 개 버튼이나 목록을 반복 생성할 때 사용합니다.</p><pre><code>        ### collection_details
</code></pre><p>현재 항목 번호/정보를 알려주는 바인딩입니다.</p><pre><code>        ### 변수형 binding_type
</code></pre><p>예: <code>$visible_binding_type</code>처럼 변수로 저장해 재사용.</p><pre><code>        ### 바인딩 흐름
</code></pre><ul><li><p>binding_name: 원래 값</p></li><li><p>binding_name_override: 바꿀 속성</p></li><li><p>binding_type: global/view/collection/collection_details</p><pre><code>      ### 초보자 팁
</code></pre></li><li><p>collection은 collection_details도 같이</p></li><li><p>조건이 복잡하면 view를 최소화</p></li><li><p>binding_condition으로 갱신 타이밍 제어</p><pre><code>      ### 자주 쓰는 binding_condition
</code></pre></li><li><p><code>once</code> 한 번만 계산</p></li><li><p><code>always</code> 항상 갱신</p></li><li><p><code>visible</code> 보일 때만 갱신</p></li><li><p><code>visibility_changed</code> 보임 상태가 바뀔 때만</p></li></ul><p>초보자용 바인딩 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;bindings&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      // 게임에서 주는 제목을 내 텍스트에 연결</span></span>
<span class="line"><span>      &quot;binding_name&quot;: &quot;#title_text&quot;,</span></span>
<span class="line"><span>      &quot;binding_name_override&quot;: &quot;#text&quot;,</span></span>
<span class="line"><span>      &quot;binding_type&quot;: &quot;global&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      // 텍스트가 비어있지 않을 때만 보이기</span></span>
<span class="line"><span>      &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>      &quot;source_property_name&quot;: &quot;(not (#text = &#39;&#39;))&quot;,</span></span>
<span class="line"><span>      &quot;target_property_name&quot;: &quot;#visible&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      바인딩이 너무 복잡해지면 먼저 #visible과 size만 남기고 하나씩 다시 붙이세요.
</code></pre><p>collection_details 포함 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;button_factory&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;factory&quot;,</span></span>
<span class="line"><span>  &quot;control_ids&quot;: {</span></span>
<span class="line"><span>    &quot;button&quot;: &quot;@custom.simple_button&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;collection_details&quot;: {</span></span>
<span class="line"><span>    &quot;collection_name&quot;: &quot;form_buttons&quot;,</span></span>
<span class="line"><span>    &quot;collection_index_binding&quot;: &quot;#index&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;bindings&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;binding_type&quot;: &quot;collection&quot;,</span></span>
<span class="line"><span>      &quot;binding_collection_name&quot;: &quot;form_buttons&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      collection_details를 빼면 #index 같은 “현재 번호”가 비어서 버튼/목록이 엉켜 보일 수 있습니다.
</code></pre>`,20)])])}const _=s(i,[["render",o]]);export{q as __pageData,_ as default};
