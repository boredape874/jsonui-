import{_ as s,c as a,o as p,ag as t}from"./chunks/framework.dvv-DFtf.js";const d=JSON.parse('{"title":"실전 케이스 스터디","description":"","frontmatter":{"title":"실전 케이스 스터디"},"headers":[],"relativePath":"practice/case-studies.md","filePath":"practice/case-studies.md"}'),e={name:"practice/case-studies.md"};function o(l,n,i,u,c,r){return p(),a("div",null,[...n[0]||(n[0]=[t(`<h2 id="examples" tabindex="-1">실전 케이스 스터디 <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;실전 케이스 스터디 {#examples}&quot;">​</a></h2><p>실제 예제를 기반으로 핵심 패턴을 요약했습니다. 초보자는 구조만 이해해도 충분합니다.</p><pre><code>          ### 커스텀 제작대 감지
          UI 분기
</code></pre><p>제작대 이름에 특정 문자열이 있으면 기본 UI를 숨기고 커스텀 패널을 표시합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  // 제작대 이름에 특정 문자열이 있으면</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;((#text - &#39;your_text_to_detect&#39;) = #text)&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#visible&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> #crafting_label_text를 #text로 받아 문자열 검출</p></li><li><p><strong>주의:</strong> 문자열이 바뀌면 감지 로직도 수정 필요</p><pre><code>        ### HUD 문자열 분해
        문자열 파싱
</code></pre></li></ul><p>HUD 타이틀 문자열에 데이터를 넣고 고정 길이로 분할해 여러 줄을 구성합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  // prefix가 맞을 때만 보이기</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;((&#39;%.6s&#39; * #nperma) = &#39;nperma&#39;)&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#visible&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // 특정 길이만 잘라서 score1에 넣기</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;((&#39;%.60s&#39; * #komisi) - (&#39;%.40s&#39; * #komisi) - &#39;\\t&#39;)&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#score1&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> prefix 체크 + 고정 길이 슬라이싱</p></li><li><p><strong>주의:</strong> 텍스트 길이 변경 시 전체 규칙 수정</p><pre><code>        ### 애니메이션 진행 바 템플릿
        진행 바
</code></pre></li></ul><p>이전 값과 현재 값을 비교해 증가/감소 애니메이션을 분리합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;animated_bar_panel&quot;: {</span></span>
<span class="line"><span>  &quot;property_bag&quot;: { &quot;#prev_value&quot;: 0 },</span><span> // 이전 값을 기억</span></span>
<span class="line"><span>  &quot;bindings&quot;: [</span></span>
<span class="line"><span>    { &quot;binding_type&quot;: &quot;view&quot;, &quot;source_property_name&quot;: &quot;(#changed_value &gt; #prev_value)&quot;, &quot;target_property_name&quot;: &quot;#collection_length&quot; }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> property_bag + collection_panel 조합</p></li><li><p><strong>주의:</strong> 텍스처 타입(fixed) 처리 분기 필요</p><pre><code>        ### 가로 스크롤 메뉴
        scroll_view
</code></pre></li></ul><p>가로로 이동하는 스크롤을 만들어 아이콘 줄을 넘길 수 있습니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;scroll_view&quot;,</span><span> // 스크롤 영역</span></span>
<span class="line"><span>  &quot;scrolling_direction&quot;: &quot;horizontal&quot;,</span><span> // 가로 스크롤</span></span>
<span class="line"><span>  &quot;scrolling_content&quot;: &quot;my_row&quot;</span><span> // 실제로 움직일 패널</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> scrolling_direction을 horizontal로 지정</p></li><li><p><strong>주의:</strong> scrolling_content의 가로 크기를 넉넉히 설정</p><pre><code>        ### 애니메이션 토글 스위치
        toggle
</code></pre></li></ul><p>토글이 켜질 때 색이 변하면서 반짝이는 효과를 줄 수 있습니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;toggle_glow&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;image&quot;,</span><span> // 빛 효과 이미지</span></span>
<span class="line"><span>  &quot;texture&quot;: &quot;glow&quot;,</span></span>
<span class="line"><span>  &quot;anims&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;InCol&quot;: {</span></span>
<span class="line"><span>        &quot;anim_type&quot;: &quot;color&quot;,</span><span> // 색 변화 애니메이션</span></span>
<span class="line"><span>        &quot;duration&quot;: 0.4,</span></span>
<span class="line"><span>        &quot;from&quot;: [0.6, 0.3, 0.3, 0.0],</span></span>
<span class="line"><span>        &quot;to&quot;: [0.3, 0.6, 0.3, 1.0]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> anim_type: color로 토글 느낌을 강조</p></li><li><p><strong>주의:</strong> 과한 효과는 성능에 부담</p><pre><code>        ### 로딩 오버레이 트리거
        로딩 연출
</code></pre></li></ul><p>채팅 텍스트에 특정 플래그가 포함되면 로딩 UI를 생성합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  // 플래그가 있으면 컬렉션 생성</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;(not (#text_n - $flag_for_loading_anim = #text_n) * 1)&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#collection_length&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> 텍스트 플래그 감지 + factory</p></li><li><p><strong>주의:</strong> 채팅 화면에서는 동일 플래그를 숨김 처리</p><pre><code>        ### 채팅 알림 시스템
        HUD 알림
</code></pre></li></ul><p>채팅 문자열을 고정 길이로 나눠 제목/본문/아이콘 정보를 전달합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  // 아이콘이 aux:로 시작하면 아이템 렌더러 사용</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;((#notification_icon_texture - &#39;aux:&#39;) * 1)&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#item_id_aux&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> 센티넬 문자열로 알림 메시지 구분</p></li><li><p><strong>주의:</strong> aux 아이템 렌더는 일부 상황에서 시각 문제 가능</p><pre><code>        ### 서버 폼 교체 &amp; 제목 분기
        server_form
</code></pre></li></ul><p>long_form을 교체하고 title_text 값으로 서로 다른 패널을 보여줍니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  // 제목이 같을 때만 보이기</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;(#title_text = &#39;magic_learning_station.menu&#39;)&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#visible&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> factory + title_text 기반 분기</p></li><li><p><strong>주의:</strong> 제목 문자열은 스크립트와 반드시 일치</p><pre><code>        ### NPC 대화창 UI
        NPC 인터랙션
</code></pre></li></ul><p>라이브 렌더러와 form_buttons 컬렉션을 사용해 대화창과 선택지를 구성합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;npc_model&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;custom&quot;,</span></span>
<span class="line"><span>  &quot;renderer&quot;: &quot;live_player_renderer&quot;</span><span> // 캐릭터 표시</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;buttons_stack&quot;: {</span></span>
<span class="line"><span>  &quot;factory&quot;: { &quot;name&quot;: &quot;buttons&quot;, &quot;control_name&quot;: &quot;npc_interact.button_item&quot; },</span></span>
<span class="line"><span>  &quot;collection_name&quot;: &quot;form_buttons&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> 스크롤 패널 + form_buttons 컬렉션</p></li><li><p><strong>주의:</strong> 버튼 템플릿은 collection_details 필수</p><pre><code>        ### Actionbar 대화 프로토콜
        텍스트 프로토콜
</code></pre></li></ul><p>actionbar 텍스트에 접두어와 고정 길이 데이터를 넣어 배경/아이콘/대사를 분해합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  // 접두어가 dialog:일 때만 표시</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;((&#39;%.7s&#39; * #actt) = &#39;dialog:&#39;)&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#visible&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // 데이터 슬라이스</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;((&#39;%.200s&#39; * #dialogue_data) - &#39;\\t&#39;)&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#background&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p><strong>핵심:</strong> 접두어 체크 + 데이터 슬라이스</p></li><li><p><strong>주의:</strong> 필드 길이를 늘리면 전체 파서 수정</p><pre><code>        ### 클리어 채팅 필터
        메시지 필터
</code></pre></li></ul><p>특정 문자열을 가진 채팅 라인을 숨기고, 바인딩을 한 번만 실행합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;collection&quot;,</span></span>
<span class="line"><span>  &quot;binding_collection_name&quot;: &quot;chat_text_grid&quot;,</span></span>
<span class="line"><span>  &quot;binding_condition&quot;: &quot;once&quot;</span><span> // 한 번만 실행</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;binding_type&quot;: &quot;view&quot;,</span></span>
<span class="line"><span>  &quot;source_property_name&quot;: &quot;(not (#text = &#39;clearchat-nperma&#39;))&quot;,</span></span>
<span class="line"><span>  &quot;target_property_name&quot;: &quot;#visible&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>핵심:</strong> binding_condition으로 성능 최적화</li><li><strong>주의:</strong> 센티넬 문자열 변경 시 동기화 필요</li></ul>`,36)])])}const g=s(e,[["render",o]]);export{d as __pageData,g as default};
