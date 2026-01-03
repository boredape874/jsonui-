---
title: 🔘 버튼과 토글 완벽 가이드
---

# 🔘 버튼과 토글 완벽 가이드 {#buttons-toggles}

> ???: 중급

<div class="term-box">
<div class="term-title">버튼(Button)과 토글(Toggle)의 차이</div>
<div class="term-content">
<ul>
<li><strong>버튼</strong> - 클릭하면 한 번 실행되는 요소 (확인, 취소 등)</li>
<li><strong>토글</strong> - ON/OFF 상태를 가지는 스위치 (설정 켜기/끄기 등)</li>
</ul>
</div>
</div>

<h3>버튼 기본 구조</h3>

<div class="code-block">
<div class="code-header">버튼의 4가지 상태</div>
<pre><code>{
  <span style="color: #79c0ff;">"my_button@common.button"</span>: {
    <span style="color: #8b949e;">/* ============================================
       버튼은 4가지 상태를 가집니다
    ============================================ */</span>
    <span style="color: #8b949e;">// 1. default: 평소 상태</span>
    <span style="color: #79c0ff;">"$default_button_texture"</span>: <span style="color: #a5d6ff;">"textures/ui/button_borderless_light"</span>,
    <span style="color: #8b949e;">// 2. hover: 마우스를 올렸을 때</span>
    <span style="color: #79c0ff;">"$hover_button_texture"</span>: <span style="color: #a5d6ff;">"textures/ui/button_borderless_lighthover"</span>,
    <span style="color: #8b949e;">// 3. pressed: 클릭했을 때</span>
    <span style="color: #79c0ff;">"$pressed_button_texture"</span>: <span style="color: #a5d6ff;">"textures/ui/button_borderless_lightpressed"</span>,
    <span style="color: #8b949e;">// 4. locked: 비활성화 (클릭 불가)</span>
    <span style="color: #79c0ff;">"$locked_button_texture"</span>: <span style="color: #a5d6ff;">"textures/ui/button_borderless_locked"</span>,
    <span style="color: #8b949e;">// 버튼 텍스트</span>
    <span style="color: #79c0ff;">"$button_text"</span>: <span style="color: #a5d6ff;">"클릭하세요"</span>,
    <span style="color: #8b949e;">// 버튼 크기</span>
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">150</span>, <span style="color: #79c0ff;">40</span>]
  }
}</code></pre>
</div>

<h3>버튼 매핑 (Button Mapping)</h3>
<p>
버튼을 클릭했을 때 <strong>무슨 일</strong>이 일어날지 정하는 것이 버튼 매핑입니다.
</p>

<div class="code-block">
<div class="code-header">버튼 매핑 예제</div>
<pre><code>{
  <span style="color: #79c0ff;">"close_button@common_buttons.light_text_button"</span>: {
    <span style="color: #79c0ff;">"$button_text"</span>: <span style="color: #a5d6ff;">"닫기"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">100</span>, <span style="color: #79c0ff;">30</span>],
    <span style="color: #8b949e;">/* ============================================
       버튼 매핑 설정
       - 버튼을 클릭하면 실행될 액션 ID
    ============================================ */</span>
    <span style="color: #79c0ff;">"$pressed_button_name"</span>: <span style="color: #a5d6ff;">"button.menu_exit"</span>,
    <span style="color: #8b949e;">// 또는 button_mappings 배열로 설정</span>
    <span style="color: #79c0ff;">"button_mappings"</span>: [
      {
        <span style="color: #8b949e;">// 버튼에서: 클릭했을 때</span>
        <span style="color: #79c0ff;">"from_button_id"</span>: <span style="color: #a5d6ff;">"button.menu_select"</span>,
        <span style="color: #8b949e;">// 이걸로: 화면 닫기</span>
        <span style="color: #79c0ff;">"to_button_id"</span>: <span style="color: #a5d6ff;">"button.menu_exit"</span>,
        <span style="color: #8b949e;">// 매핑 타입</span>
        <span style="color: #79c0ff;">"mapping_type"</span>: <span style="color: #a5d6ff;">"pressed"</span>
      }
    ]
  }
}</code></pre>
</div>

<div class="term-box">
<div class="term-title">주요 버튼 ID 목록</div>
<div class="term-content">
<ul>
<li><code>button.menu_exit</code> - 현재 화면 닫기</li>
<li><code>button.menu_ok</code> - 확인 (폼 제출)</li>
<li><code>button.menu_cancel</code> - 취소</li>
<li><code>button.menu_select</code> - 일반 선택</li>
<li><code>button.menu_secondary_select</code> - 보조 선택</li>
</ul>
</div>
</div>

<h3>토글 (Toggle) 사용하기</h3>

<div class="code-block">
<div class="code-header">토글 기본 예제</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     토글 버튼 정의
  ============================================ */</span>
  <span style="color: #79c0ff;">"sound_toggle@common_toggles.light_text_toggle"</span>: {
    <span style="color: #8b949e;">// 토글 라벨 텍스트</span>
    <span style="color: #79c0ff;">"$button_text"</span>: <span style="color: #a5d6ff;">"소리 켜기"</span>,
    <span style="color: #8b949e;">// 토글 이름 (다른 요소에서 참조할 때 사용)</span>
    <span style="color: #79c0ff;">"$toggle_view_binding_name"</span>: <span style="color: #a5d6ff;">"sound_enabled"</span>,
    <span style="color: #8b949e;">// 기본 상태 (true = ON, false = OFF)</span>
    <span style="color: #79c0ff;">"$toggle_default_state"</span>: <span style="color: #79c0ff;">true</span>
  },
  <span style="color: #8b949e;">/* ============================================
     토글 상태에 따라 보이는 이미지
  ============================================ */</span>
  <span style="color: #79c0ff;">"sound_icon"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/sound_glyph"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">16</span>, <span style="color: #79c0ff;">16</span>],
    <span style="color: #8b949e;">// 토글 상태 바인딩</span>
    <span style="color: #79c0ff;">"bindings"</span>: [
      {
        <span style="color: #79c0ff;">"binding_type"</span>: <span style="color: #a5d6ff;">"view"</span>,
        <span style="color: #8b949e;">// 어떤 토글을 참조할지</span>
        <span style="color: #79c0ff;">"source_control_name"</span>: <span style="color: #a5d6ff;">"sound_enabled"</span>,
        <span style="color: #8b949e;">// 토글의 ON/OFF 상태 가져오기</span>
        <span style="color: #79c0ff;">"source_property_name"</span>: <span style="color: #a5d6ff;">"#toggle_state"</span>,
        <span style="color: #8b949e;">// visible에 연결 (ON이면 보임)</span>
        <span style="color: #79c0ff;">"target_property_name"</span>: <span style="color: #a5d6ff;">"#visible"</span>
      }
    ]
  }
}</code></pre>
</div>

<h3>Content 버튼 (호버 텍스트)</h3>
<p>
마우스를 올리면 설명 텍스트가 나타나는 버튼입니다.
</p>

<div class="code-block">
<div class="code-header">Content 버튼 예제</div>
<pre><code>{
  <span style="color: #79c0ff;">"help_button@common.button"</span>: {
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">20</span>, <span style="color: #79c0ff;">20</span>],
    <span style="color: #8b949e;">/* ============================================
       호버 텍스트 설정
    ============================================ */</span>
    <span style="color: #79c0ff;">"$button_content"</span>: <span style="color: #a5d6ff;">"common.tooltip_text"</span>,
    <span style="color: #79c0ff;">"$hover_panel_text"</span>: <span style="color: #a5d6ff;">"도움말: 이 버튼을 클릭하면 안내가 표시됩니다"</span>,
    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #79c0ff;">"icon"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/help_glyph"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>]
        }
      }
    ]
  }
}</code></pre>
</div>

<div class="alert-box alert-tip">
<strong>핵심 포인트:</strong><br>
• 버튼은 4가지 상태(default, hover, pressed, locked)를 가짐<br>
• 토글은 ON/OFF 상태를 유지하며 다른 요소에서 참조 가능<br>
• 버튼 매핑으로 클릭 시 동작 정의<br>
• Content 버튼으로 호버 텍스트 표시
</div>
