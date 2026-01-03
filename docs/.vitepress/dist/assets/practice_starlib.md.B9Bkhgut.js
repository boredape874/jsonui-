import{_ as a,c as n,o as p,ag as t}from"./chunks/framework.dvv-DFtf.js";const _=JSON.parse('{"title":"StarLib 예제","description":"","frontmatter":{"title":"StarLib 예제"},"headers":[],"relativePath":"practice/starlib.md","filePath":"practice/starlib.md"}'),e={name:"practice/starlib.md"};function l(o,s,i,r,c,u){return p(),n("div",null,[...s[0]||(s[0]=[t(`<h2 id="starlib" tabindex="-1">StarLib 예제 <a class="header-anchor" href="#starlib" aria-label="Permalink to &quot;StarLib 예제 {#starlib}&quot;">​</a></h2><p>StarLib 예제는 템플릿을 활용해 UI를 빠르게 바꾸는 방식을 보여줍니다.</p><pre><code>          ### 템플릿 기반 화면
          template
</code></pre><p>템플릿 화면을 가져오고 텍스처/버튼 스타일만 바꿔서 전체 UI를 바꿉니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;long_form@starlib_pkg_screen_template.screen&quot;: {</span></span>
<span class="line"><span>  // 템플릿 설정 값만 바꿔서 전체 화면 스타일 변경</span></span>
<span class="line"><span>  &quot;$FORM_TEMPLATE_background_texture&quot;: &quot;textures/example/background&quot;,</span></span>
<span class="line"><span>  &quot;$BUTTON_STYLE_default_texture&quot;: &quot;textures/example/button&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>쉬운 설명:</strong> 기본 틀을 가져오고 색/그림만 갈아끼움</p><pre><code>        ### 멀티 폼 화면
        multi-form
</code></pre></li></ul><p>여러 폼을 한 화면에 묶어서 보여주는 구조입니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;$forms_holder_controls&quot;: [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    // 제목을 뒤집어 비교하는 바인딩으로 폼을 분기</span></span>
<span class="line"><span>    &quot;form@global.reverse_title_binding&quot;: {</span></span>
<span class="line"><span>      &quot;$form_size&quot;: [280, 225],</span><span> // 폼 카드 크기</span></span>
<span class="line"><span>      &quot;$scrolling_content&quot;: &quot;server_form.buttons_grid&quot;</span><span> // 버튼 리스트 연결</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span></code></pre></div><ul><li><p><strong>쉬운 설명:</strong> 작은 창을 여러 개 붙여놓은 느낌</p><pre><code>        ### 동적 버튼 크기
        dynamic
</code></pre></li></ul><p>문자열 키(§m, §p)를 사용해 버튼 크기와 배치를 자동으로 조정합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;advanced_dynamic_button&quot;: {</span></span>
<span class="line"><span>  // 왼쪽 버튼 크기 규칙</span></span>
<span class="line"><span>  &quot;$BUTTON_SIZER_left_half&quot;: &quot;§m§1§1&quot;,</span></span>
<span class="line"><span>  // 오른쪽 버튼 크기 규칙</span></span>
<span class="line"><span>  &quot;$BUTTON_SIZER_right_half&quot;: &quot;§m§2§1&quot;,</span></span>
<span class="line"><span>  // 높이 규칙이 없을 때의 처리</span></span>
<span class="line"><span>  &quot;$VERTICAL_PROCESSING_no_height_key&quot;: &quot;§m§0§0&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>쉬운 설명:</strong> 버튼 크기를 자동으로 계산해주는 룰</p></li><li><p><strong>주의:</strong> 키 문자열 규칙을 바꾸면 전체 구조가 깨짐</p><pre><code>    StarLib 예제는 고급 기능이 많습니다. 처음에는 템플릿을 쓰는 방식만 이해해도 충분합니다.
</code></pre></li></ul>`,12)])])}const b=a(e,[["render",l]]);export{_ as __pageData,b as default};
