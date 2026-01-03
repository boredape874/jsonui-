---
title: 💬 NPC 대화창 커스터마이징
---

# 💬 NPC 대화창 커스터마이징 {#npc-dialog}

> ???: 중급

<div class="term-box">
<div class="term-title">NPC 대화창이란?</div>
<div class="term-content">
<p>
NPC(Non-Player Character)와 상호작용할 때 표시되는 대화 인터페이스입니다.
<strong>npc_interact_screen.json</strong> 파일을 수정하여 NPC 이름, 메시지, 선택지 버튼 등의 스타일을 변경할 수 있습니다.
</p>
</div>
</div>

<h3 id="npc-basics">📁 파일 위치 및 네임스페이스</h3>
<p>
NPC 대화창 UI는 리소스팩의 <code>ui/npc_interact_screen.json</code> 파일에 있습니다.
모든 요소는 <strong>npc_interact</strong> 네임스페이스를 사용합니다.
</p>

<div class="code-block">
<div class="code-header">RP/ui/npc_interact_screen.json - 기본 구조</div>
                    <pre><code>{
  <span style="color: #79c0ff;">"namespace"</span>: <span style="color: #a5d6ff;">"npc_interact"</span>,

  <span style="color: #8b949e;">// NPC 이름, 메시지, 버튼 등을 여기서 수정</span>
}</code></pre>
</div>

<h3 id="npc-name">✏️ NPC 이름 스타일 변경</h3>
<p>
NPC 이름의 색상, 폰트, 크기를 변경할 수 있습니다.
</p>

<div class="code-block">
<div class="code-header">NPC 이름을 금색으로 크게 표시</div>
                    <pre><code><span style="color: #79c0ff;">"basic_stack_panel/name_label"</span>: {
  <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.84</span>, <span style="color: #79c0ff;">0.0</span>],   <span style="color: #8b949e;">// 금색 (RGB)</span>
  <span style="color: #79c0ff;">"font_type"</span>: <span style="color: #a5d6ff;">"smooth"</span>,                <span style="color: #8b949e;">// 부드러운 폰트</span>
  <span style="color: #79c0ff;">"font_scale_factor"</span>: <span style="color: #79c0ff;">1.5</span>,            <span style="color: #8b949e;">// 크기 150%</span>
  <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>,                      <span style="color: #8b949e;">// 그림자 활성화</span>
  <span style="color: #79c0ff;">"text_alignment"</span>: <span style="color: #a5d6ff;">"center"</span>           <span style="color: #8b949e;">// 중앙 정렬</span>
}</code></pre>
</div>

<h3 id="npc-message">💬 대화 메시지 스타일 변경</h3>
<p>
NPC가 말하는 메시지 텍스트의 스타일을 수정합니다.
</p>

<div class="code-block">
<div class="code-header">대화 메시지 커스터마이징</div>
                    <pre><code><span style="color: #79c0ff;">"npc_message/label"</span>: {
  <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>],       <span style="color: #8b949e;">// 일반 상태: 흰색</span>
  <span style="color: #79c0ff;">"locked_color"</span>: [<span style="color: #79c0ff;">0.5</span>, <span style="color: #79c0ff;">0.5</span>, <span style="color: #79c0ff;">0.5</span>],  <span style="color: #8b949e;">// 잠긴 상태: 회색</span>
  <span style="color: #79c0ff;">"font_type"</span>: <span style="color: #a5d6ff;">"smooth"</span>,
  <span style="color: #79c0ff;">"font_scale_factor"</span>: <span style="color: #79c0ff;">1.0</span>,
  <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>,
  <span style="color: #79c0ff;">"line_padding"</span>: <span style="color: #79c0ff;">2</span>,                   <span style="color: #8b949e;">// 줄 간격</span>
  <span style="color: #79c0ff;">"text_alignment"</span>: <span style="color: #a5d6ff;">"left"</span>             <span style="color: #8b949e;">// 왼쪽 정렬</span>
}</code></pre>
</div>

<div class="alert-box alert-info">
<strong>두 가지 상태:</strong><br>
• <code>color</code> - NPC와 상호작용 가능할 때<br>
• <code>locked_color</code> - 조건 미충족으로 대화가 잠겨있을 때
</div>

<h3 id="npc-bubble">💭 말풍선 배경 수정</h3>
<p>
대화 말풍선의 배경 이미지와 투명도를 변경할 수 있습니다.
</p>

<div class="code-block">
<div class="code-header">말풍선 배경 커스터마이징</div>
                    <pre><code><span style="color: #79c0ff;">"student_message_bubble"</span>: {
  <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
  <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/custom_bubble"</span>,  <span style="color: #8b949e;">// 커스텀 배경 이미지</span>
  <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.8</span>,                                  <span style="color: #8b949e;">// 투명도 80%</span>
  <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%c + 10px"</span>]              <span style="color: #8b949e;">// 크기 조정</span>
}

<span style="color: #8b949e;">// 말풍선 화살표 제거하기</span>
<span style="color: #79c0ff;">"student_message_section/point"</span>: {
  <span style="color: #79c0ff;">"ignored"</span>: <span style="color: #79c0ff;">true</span>   <span style="color: #8b949e;">// true면 숨김, false면 표시</span>
}</code></pre>
</div>

<h3 id="npc-model">🎭 NPC 3D 모델 위치 조정</h3>
<p>
대화창에 표시되는 NPC의 3D 모델 위치와 크기를 조정합니다.
</p>

<div class="code-block">
<div class="code-header">NPC 모델 커스터마이징</div>
                    <pre><code><span style="color: #8b949e;">// NPC 모델 위치</span>
<span style="color: #79c0ff;">"message_model/model"</span>: {
  <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">20</span>],      <span style="color: #8b949e;">// [X, Y] X:좌우, Y:상하</span>
  <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">100</span>, <span style="color: #79c0ff;">100</span>]        <span style="color: #8b949e;">// 모델 크기</span>
}

<span style="color: #8b949e;">// 모델 배경창 스타일</span>
<span style="color: #79c0ff;">"message_model_window"</span>: {
  <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
  <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/White"</span>,
  <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.3</span>,                    <span style="color: #8b949e;">// 투명도</span>
  <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.2</span>, <span style="color: #79c0ff;">0.2</span>, <span style="color: #79c0ff;">0.3</span>]     <span style="color: #8b949e;">// 어두운 파란색 배경</span>
}</code></pre>
</div>

<h3 id="npc-buttons">🔘 대화 선택지 버튼 스타일</h3>
<p>
플레이어가 선택할 수 있는 대화 옵션 버튼을 커스터마이징합니다.
</p>

<div class="code-block">
<div class="code-header">버튼 스타일 변경</div>
                    <pre><code><span style="color: #8b949e;">// 버튼 텍스트 스타일</span>
<span style="color: #79c0ff;">"student_button_label"</span>: {
  <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>],
  <span style="color: #79c0ff;">"font_type"</span>: <span style="color: #a5d6ff;">"smooth"</span>,
  <span style="color: #79c0ff;">"font_scale_factor"</span>: <span style="color: #79c0ff;">1.0</span>,
  <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
}

<span style="color: #8b949e;">// 버튼 디자인</span>
<span style="color: #79c0ff;">"student_button@common_buttons.light_text_button"</span>: {
  <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #79c0ff;">24</span>],

  <span style="color: #8b949e;">// 상태별 텍스처</span>
  <span style="color: #79c0ff;">"$default_texture"</span>: <span style="color: #a5d6ff;">"textures/ui/button_default"</span>,
  <span style="color: #79c0ff;">"$hover_texture"</span>: <span style="color: #a5d6ff;">"textures/ui/button_hover"</span>,
  <span style="color: #79c0ff;">"$pressed_texture"</span>: <span style="color: #a5d6ff;">"textures/ui/button_pressed"</span>,

  <span style="color: #8b949e;">// 상태별 색상</span>
  <span style="color: #79c0ff;">"$default_color"</span>: [<span style="color: #79c0ff;">0.3</span>, <span style="color: #79c0ff;">0.3</span>, <span style="color: #79c0ff;">0.4</span>],   <span style="color: #8b949e;">// 기본</span>
  <span style="color: #79c0ff;">"$hover_color"</span>: [<span style="color: #79c0ff;">0.4</span>, <span style="color: #79c0ff;">0.4</span>, <span style="color: #79c0ff;">0.5</span>],     <span style="color: #8b949e;">// 마우스 오버</span>
  <span style="color: #79c0ff;">"$pressed_color"</span>: [<span style="color: #79c0ff;">0.2</span>, <span style="color: #79c0ff;">0.2</span>, <span style="color: #79c0ff;">0.3</span>]    <span style="color: #8b949e;">// 클릭</span>
}</code></pre>
</div>

<h3 id="npc-examples">🎨 실전 예제 - 테마별 NPC 대화창</h3>

<h4 id="npc-merchant">예제 1: 고급 상인 NPC (금색 테마)</h4>
<div class="code-block">
<div class="code-header">RP/ui/npc_interact_screen.json</div>
                    <pre><code>{
  <span style="color: #79c0ff;">"namespace"</span>: <span style="color: #a5d6ff;">"npc_interact"</span>,

  <span style="color: #8b949e;">// 금색 이름</span>
  <span style="color: #79c0ff;">"basic_stack_panel/name_label"</span>: {
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.84</span>, <span style="color: #79c0ff;">0.0</span>],
    <span style="color: #79c0ff;">"font_type"</span>: <span style="color: #a5d6ff;">"smooth"</span>,
    <span style="color: #79c0ff;">"font_scale_factor"</span>: <span style="color: #79c0ff;">1.5</span>,
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
  },

  <span style="color: #8b949e;">// 따뜻한 베이지색 메시지</span>
  <span style="color: #79c0ff;">"npc_message/label"</span>: {
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.9</span>, <span style="color: #79c0ff;">0.9</span>, <span style="color: #79c0ff;">0.7</span>],
    <span style="color: #79c0ff;">"font_type"</span>: <span style="color: #a5d6ff;">"smooth"</span>,
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
  },

  <span style="color: #8b949e;">// 금색 말풍선</span>
  <span style="color: #79c0ff;">"student_message_bubble"</span>: {
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/gold_bubble"</span>,
    <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.9</span>
  }
}</code></pre>
</div>

<h4 id="npc-enemy">예제 2: 적대적 NPC (빨간색 테마)</h4>
<div class="code-block">
<div class="code-header">위험한 NPC 스타일</div>
                    <pre><code>{
  <span style="color: #79c0ff;">"namespace"</span>: <span style="color: #a5d6ff;">"npc_interact"</span>,

  <span style="color: #8b949e;">// 빨간색 이름</span>
  <span style="color: #79c0ff;">"basic_stack_panel/name_label"</span>: {
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">0.0</span>],
    <span style="color: #79c0ff;">"font_scale_factor"</span>: <span style="color: #79c0ff;">1.3</span>,
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
  },

  <span style="color: #8b949e;">// 연한 빨강 메시지</span>
  <span style="color: #79c0ff;">"npc_message/label"</span>: {
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.3</span>, <span style="color: #79c0ff;">0.3</span>],
    <span style="color: #79c0ff;">"locked_color"</span>: [<span style="color: #79c0ff;">0.5</span>, <span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">0.0</span>]
  },

  <span style="color: #8b949e;">// 어두운 빨강 배경</span>
  <span style="color: #79c0ff;">"message_model_window"</span>: {
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/White"</span>,
    <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.4</span>,
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.5</span>, <span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">0.0</span>]
  }
}</code></pre>
</div>

<h4 id="npc-wizard">예제 3: 신비로운 마법사 NPC (보라색 테마)</h4>
<div class="code-block">
<div class="code-header">마법사 NPC 스타일</div>
                    <pre><code>{
  <span style="color: #79c0ff;">"namespace"</span>: <span style="color: #a5d6ff;">"npc_interact"</span>,

  <span style="color: #8b949e;">// 보라색 룬 문자 이름</span>
  <span style="color: #79c0ff;">"basic_stack_panel/name_label"</span>: {
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.5</span>, <span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">1.0</span>],
    <span style="color: #79c0ff;">"font_type"</span>: <span style="color: #a5d6ff;">"rune"</span>,          <span style="color: #8b949e;">// 룬 문자 폰트!</span>
    <span style="color: #79c0ff;">"font_scale_factor"</span>: <span style="color: #79c0ff;">1.4</span>,
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
  },

  <span style="color: #8b949e;">// 연보라색 메시지</span>
  <span style="color: #79c0ff;">"npc_message/label"</span>: {
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.8</span>, <span style="color: #79c0ff;">0.6</span>, <span style="color: #79c0ff;">1.0</span>],
    <span style="color: #79c0ff;">"font_type"</span>: <span style="color: #a5d6ff;">"smooth"</span>
  },

  <span style="color: #8b949e;">// 마법 말풍선</span>
  <span style="color: #79c0ff;">"student_message_bubble"</span>: {
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/magic_bubble"</span>,
    <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.85</span>
  },

  <span style="color: #8b949e;">// 어두운 보라 배경</span>
  <span style="color: #79c0ff;">"message_model_window"</span>: {
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/White"</span>,
    <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.3</span>,
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.2</span>, <span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">0.4</span>]
  }
}</code></pre>
</div>

<h3 id="npc-tips">💡 NPC 대화창 커스터마이징 팁</h3>

<div class="lecture-note">
<div class="lecture-note-title">색상 활용 가이드</div>
<ul>
<li><strong>금색 [1.0, 0.84, 0.0]</strong> - 고급 상인, 중요한 NPC</li>
<li><strong>빨간색 [1.0, 0.0, 0.0]</strong> - 적대적 NPC, 경고</li>
<li><strong>파란색 [0.3, 0.6, 1.0]</strong> - 조력자, 퀘스트 제공자</li>
<li><strong>보라색 [0.5, 0.0, 1.0]</strong> - 마법사, 신비로운 캐릭터</li>
<li><strong>녹색 [0.0, 1.0, 0.0]</strong> - 치료사, 자연 관련 NPC</li>
</ul>
</div>

<div class="lecture-note">
<div class="lecture-note-title">폰트 타입 종류</div>
<ul>
<li><code>"default"</code> - 기본 마인크래프트 폰트</li>
<li><code>"smooth"</code> - 부드러운 폰트 (읽기 편함)</li>
<li><code>"rune"</code> - 룬 문자 폰트 (마법진 느낌)</li>
<li><code>"MinecraftTen"</code> - 마인크래프트 텐 폰트</li>
</ul>
</div>

<div class="alert-box alert-warning">
<strong>텍스처 경로 주의:</strong><br>
• 텍스처 파일은 PNG 형식으로 저장<br>
• 경로에 확장자 없이 작성: <code>"textures/ui/bubble"</code><br>
• 실제 파일 위치: <code>RP/textures/ui/bubble.png</code><br>
• 빈 문자열 <code>""</code>을 사용하면 투명(배경 없음)
</div>

<div class="alert-box alert-success">
<strong>완성!</strong> 이제 NPC마다 다른 테마의 대화창을 만들 수 있습니다!
상인은 금색, 적은 빨간색, 마법사는 보라색으로 구분해보세요!
</div>
