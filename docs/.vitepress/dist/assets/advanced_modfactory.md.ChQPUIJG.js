import{_ as s,c as a,o as p,ag as o}from"./chunks/framework.dvv-DFtf.js";const q=JSON.parse('{"title":"수정과 팩토리","description":"","frontmatter":{"title":"수정과 팩토리"},"headers":[],"relativePath":"advanced/modfactory.md","filePath":"advanced/modfactory.md"}'),t={name:"advanced/modfactory.md"};function e(l,n,c,i,u,d){return p(),a("div",null,[...n[0]||(n[0]=[o(`<h2 id="modfactory" tabindex="-1">수정과 팩토리 <a class="header-anchor" href="#modfactory" aria-label="Permalink to &quot;수정과 팩토리 {#modfactory}&quot;">​</a></h2><p>기존 화면을 직접 바꾸기보다 “추가”와 “교체”를 활용하는 방식이 안전합니다.</p><pre><code>        ### modifications 핵심
</code></pre><ul><li><p><code>insert_front</code> 앞에 추가</p></li><li><p><code>insert_back</code> 뒤에 추가</p></li><li><p><code>remove</code> 조건 기반 삭제</p><pre><code>      ### 팩토리 기본 구조
</code></pre></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;server_form_factory&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;factory&quot;,</span><span> // 반복 생성기</span></span>
<span class="line"><span>  &quot;control_ids&quot;: {</span></span>
<span class="line"><span>    &quot;long_form&quot;: &quot;@custom.long_form_replacement&quot;,</span></span>
<span class="line"><span>    &quot;custom_form&quot;: &quot;@custom.custom_form_replacement&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;factory_control_name&quot;: &quot;#form_type&quot;</span><span> // 어떤 템플릿을 쓸지 결정</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>modifications 완전 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;hud_screen@hud.hud_screen&quot;: {</span></span>
<span class="line"><span>  &quot;modifications&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;array_name&quot;: &quot;controls&quot;,</span></span>
<span class="line"><span>      &quot;operation&quot;: &quot;insert_front&quot;,</span></span>
<span class="line"><span>      &quot;value&quot;: [</span></span>
<span class="line"><span>        { &quot;my_hud_panel@custom.hud_panel&quot;: {} }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;array_name&quot;: &quot;controls&quot;,</span></span>
<span class="line"><span>      &quot;operation&quot;: &quot;remove&quot;,</span></span>
<span class="line"><span>      &quot;control_name&quot;: &quot;vanilla_button&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>collection_details 포함 팩토리</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;button_factory&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;factory&quot;,</span></span>
<span class="line"><span>  &quot;control_ids&quot;: {</span></span>
<span class="line"><span>    &quot;button&quot;: &quot;@custom.simple_button&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;collection_details&quot;: {</span></span>
<span class="line"><span>    &quot;collection_name&quot;: &quot;form_buttons&quot;,</span></span>
<span class="line"><span>    &quot;collection_index_binding&quot;: &quot;#index&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;bindings&quot;: [</span></span>
<span class="line"><span>    { &quot;binding_type&quot;: &quot;collection&quot;, &quot;binding_collection_name&quot;: &quot;form_buttons&quot; }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>      실제 예제는 title_text로 서로 다른 패널을 보여주는 방식을 자주 사용합니다. 원본은 남겨두고 필요한 부분만 추가하는 것이 안전합니다.
</code></pre>`,10)])])}const _=s(t,[["render",e]]);export{q as __pageData,_ as default};
