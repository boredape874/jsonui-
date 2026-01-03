---
title: 실전 케이스 스터디
---

<section id="examples" class="section reveal" data-section data-group="practice">
        <div class="section-head">
          <h2>실전 케이스 스터디</h2>
          <p>실제 예제를 기반으로 핵심 패턴을 요약했습니다. 초보자는 구조만 이해해도 충분합니다.</p>
        </div>
        <div class="example-grid">
          <article class="example-card">
            <div class="example-head">
              <h3>커스텀 제작대 감지</h3>
              <span class="tag">UI 분기</span>
            </div>
            <p>제작대 이름에 특정 문자열이 있으면 기본 UI를 숨기고 커스텀 패널을 표시합니다.</p>
            <div class="code-block compact">
              <pre><code>{
  // 제작대 이름에 특정 문자열이 있으면
  "binding_type": "view",
  "source_property_name": "((#text - 'your_text_to_detect') = #text)",
  "target_property_name": "#visible"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> #crafting_label_text를 #text로 받아 문자열 검출</li>
              <li><strong>주의:</strong> 문자열이 바뀌면 감지 로직도 수정 필요</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>HUD 문자열 분해</h3>
              <span class="tag">문자열 파싱</span>
            </div>
            <p>HUD 타이틀 문자열에 데이터를 넣고 고정 길이로 분할해 여러 줄을 구성합니다.</p>
            <div class="code-block compact">
              <pre><code>{
  // prefix가 맞을 때만 보이기
  "binding_type": "view",
  "source_property_name": "(('%.6s' * #nperma) = 'nperma')",
  "target_property_name": "#visible"
},
{
  // 특정 길이만 잘라서 score1에 넣기
  "binding_type": "view",
  "source_property_name": "(('%.60s' * #komisi) - ('%.40s' * #komisi) - '\t')",
  "target_property_name": "#score1"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> prefix 체크 + 고정 길이 슬라이싱</li>
              <li><strong>주의:</strong> 텍스트 길이 변경 시 전체 규칙 수정</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>애니메이션 진행 바 템플릿</h3>
              <span class="tag">진행 바</span>
            </div>
            <p>이전 값과 현재 값을 비교해 증가/감소 애니메이션을 분리합니다.</p>
            <div class="code-block compact">
              <pre><code>"animated_bar_panel": {
  "property_bag": { "#prev_value": 0 }, // 이전 값을 기억
  "bindings": [
    { "binding_type": "view", "source_property_name": "(#changed_value > #prev_value)", "target_property_name": "#collection_length" }
  ]
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> property_bag + collection_panel 조합</li>
              <li><strong>주의:</strong> 텍스처 타입(fixed) 처리 분기 필요</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>가로 스크롤 메뉴</h3>
              <span class="tag">scroll_view</span>
            </div>
            <p>가로로 이동하는 스크롤을 만들어 아이콘 줄을 넘길 수 있습니다.</p>
            <div class="code-block compact">
              <pre><code>{
  "type": "scroll_view", // 스크롤 영역
  "scrolling_direction": "horizontal", // 가로 스크롤
  "scrolling_content": "my_row" // 실제로 움직일 패널
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> scrolling_direction을 horizontal로 지정</li>
              <li><strong>주의:</strong> scrolling_content의 가로 크기를 넉넉히 설정</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>애니메이션 토글 스위치</h3>
              <span class="tag">toggle</span>
            </div>
            <p>토글이 켜질 때 색이 변하면서 반짝이는 효과를 줄 수 있습니다.</p>
            <div class="code-block compact">
              <pre><code>"toggle_glow": {
  "type": "image", // 빛 효과 이미지
  "texture": "glow",
  "anims": [
    {
      "InCol": {
        "anim_type": "color", // 색 변화 애니메이션
        "duration": 0.4,
        "from": [0.6, 0.3, 0.3, 0.0],
        "to": [0.3, 0.6, 0.3, 1.0]
      }
    }
  ]
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> anim_type: color로 토글 느낌을 강조</li>
              <li><strong>주의:</strong> 과한 효과는 성능에 부담</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>로딩 오버레이 트리거</h3>
              <span class="tag">로딩 연출</span>
            </div>
            <p>채팅 텍스트에 특정 플래그가 포함되면 로딩 UI를 생성합니다.</p>
            <div class="code-block compact">
              <pre><code>{
  // 플래그가 있으면 컬렉션 생성
  "binding_type": "view",
  "source_property_name": "(not (#text_n - $flag_for_loading_anim = #text_n) * 1)",
  "target_property_name": "#collection_length"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> 텍스트 플래그 감지 + factory</li>
              <li><strong>주의:</strong> 채팅 화면에서는 동일 플래그를 숨김 처리</li>
            </ul>
          </article>
          <article class="example-card">
            <div class="example-head">
              <h3>채팅 알림 시스템</h3>
              <span class="tag">HUD 알림</span>
            </div>
            <p>채팅 문자열을 고정 길이로 나눠 제목/본문/아이콘 정보를 전달합니다.</p>
            <div class="code-block compact">
              <pre><code>{
  // 아이콘이 aux:로 시작하면 아이템 렌더러 사용
  "binding_type": "view",
  "source_property_name": "((#notification_icon_texture - 'aux:') * 1)",
  "target_property_name": "#item_id_aux"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> 센티넬 문자열로 알림 메시지 구분</li>
              <li><strong>주의:</strong> aux 아이템 렌더는 일부 상황에서 시각 문제 가능</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>서버 폼 교체 &amp; 제목 분기</h3>
              <span class="tag">server_form</span>
            </div>
            <p>long_form을 교체하고 title_text 값으로 서로 다른 패널을 보여줍니다.</p>
            <div class="code-block compact">
              <pre><code>{
  // 제목이 같을 때만 보이기
  "binding_type": "view",
  "source_property_name": "(#title_text = 'magic_learning_station.menu')",
  "target_property_name": "#visible"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> factory + title_text 기반 분기</li>
              <li><strong>주의:</strong> 제목 문자열은 스크립트와 반드시 일치</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>NPC 대화창 UI</h3>
              <span class="tag">NPC 인터랙션</span>
            </div>
            <p>라이브 렌더러와 form_buttons 컬렉션을 사용해 대화창과 선택지를 구성합니다.</p>
            <div class="code-block compact">
              <pre><code>"npc_model": {
  "type": "custom",
  "renderer": "live_player_renderer" // 캐릭터 표시
},
"buttons_stack": {
  "factory": { "name": "buttons", "control_name": "npc_interact.button_item" },
  "collection_name": "form_buttons"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> 스크롤 패널 + form_buttons 컬렉션</li>
              <li><strong>주의:</strong> 버튼 템플릿은 collection_details 필수</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>Actionbar 대화 프로토콜</h3>
              <span class="tag">텍스트 프로토콜</span>
            </div>
            <p>actionbar 텍스트에 접두어와 고정 길이 데이터를 넣어 배경/아이콘/대사를 분해합니다.</p>
            <div class="code-block compact">
              <pre><code>{
  // 접두어가 dialog:일 때만 표시
  "binding_type": "view",
  "source_property_name": "(('%.7s' * #actt) = 'dialog:')",
  "target_property_name": "#visible"
},
{
  // 데이터 슬라이스
  "binding_type": "view",
  "source_property_name": "(('%.200s' * #dialogue_data) - '\t')",
  "target_property_name": "#background"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> 접두어 체크 + 데이터 슬라이스</li>
              <li><strong>주의:</strong> 필드 길이를 늘리면 전체 파서 수정</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>클리어 채팅 필터</h3>
              <span class="tag">메시지 필터</span>
            </div>
            <p>특정 문자열을 가진 채팅 라인을 숨기고, 바인딩을 한 번만 실행합니다.</p>
            <div class="code-block compact">
              <pre><code>{
  "binding_type": "collection",
  "binding_collection_name": "chat_text_grid",
  "binding_condition": "once" // 한 번만 실행
},
{
  "binding_type": "view",
  "source_property_name": "(not (#text = 'clearchat-nperma'))",
  "target_property_name": "#visible"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>핵심:</strong> binding_condition으로 성능 최적화</li>
              <li><strong>주의:</strong> 센티넬 문자열 변경 시 동기화 필요</li>
            </ul>
          </article>
        </div>
      </section>