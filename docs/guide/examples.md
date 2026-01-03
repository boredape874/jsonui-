---
title: 📂 실전 예제 모음
---

# 📂 실전 예제 모음 {#examples}

> ???: 중급

<h3>예제 1: 사용자 정의 HUD (체력, 허기, 좌표)</h3>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json</div>
                    <pre><code>{
  <span style="color: #8b949e;">/* ============================================
     커스텀 HUD 패널
  ============================================ */</span>
  <span style="color: #79c0ff;">"custom_hud_panel"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"stack_panel"</span>,
    <span style="color: #79c0ff;">"orientation"</span>: <span style="color: #a5d6ff;">"vertical"</span>,

    <span style="color: #8b949e;">// 왼쪽 상단 배치</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">10</span>, <span style="color: #79c0ff;">10</span>],

    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #8b949e;">// 체력 표시</span>
        <span style="color: #79c0ff;">"health_label"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
          <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"❤ #health"</span>,
          <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">0.0</span>],
          <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
        }
      },
      {
        <span style="color: #8b949e;">// 허기 표시</span>
        <span style="color: #79c0ff;">"hunger_label"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
          <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"🍖 #hunger"</span>,
          <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.7</span>, <span style="color: #79c0ff;">0.0</span>],
          <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
        }
      },
      {
        <span style="color: #8b949e;">// 좌표 표시</span>
        <span style="color: #79c0ff;">"position_label"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
          <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"📍 X:#x Y:#y Z:#z"</span>,
          <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>],
          <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
        }
      }
    ]
  },

  <span style="color: #8b949e;">// root_panel에 추가</span>
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [{
      <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
      <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_front"</span>,
      <span style="color: #79c0ff;">"value"</span>: [
        { <span style="color: #79c0ff;">"custom_hud@hud.custom_hud_panel"</span>: {} }
      ]
    }]
  }
}</code></pre>
</div>

<h3>예제 2: 알림 시스템 (토스트 메시지)</h3>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json - 슬라이드 알림</div>
                    <pre><code>{
  <span style="color: #8b949e;">/* ============================================
     페이드 인 애니메이션
  ============================================ */</span>
  <span style="color: #79c0ff;">"notification_fade_in"</span>: {
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"alpha"</span>,
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">0.3</span>,
    <span style="color: #79c0ff;">"from"</span>: <span style="color: #79c0ff;">0.0</span>,
    <span style="color: #79c0ff;">"to"</span>: <span style="color: #79c0ff;">1.0</span>,
    <span style="color: #79c0ff;">"easing"</span>: <span style="color: #a5d6ff;">"out_quad"</span>,
    <span style="color: #79c0ff;">"next"</span>: <span style="color: #a5d6ff;">"@hud.notification_slide_up"</span>
  },

  <span style="color: #79c0ff;">"notification_slide_up"</span>: {
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"offset"</span>,
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">0.3</span>,
    <span style="color: #79c0ff;">"from"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">20</span>],
    <span style="color: #79c0ff;">"to"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">0</span>],
    <span style="color: #79c0ff;">"easing"</span>: <span style="color: #a5d6ff;">"out_bounce"</span>
  },

  <span style="color: #8b949e;">/* ============================================
     알림 패널
  ============================================ */</span>
  <span style="color: #79c0ff;">"notification_panel"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">250</span>, <span style="color: #79c0ff;">50</span>],

    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_middle"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_middle"</span>,
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">30</span>],

    <span style="color: #8b949e;">// 애니메이션 적용</span>
    <span style="color: #79c0ff;">"anims"</span>: [
      <span style="color: #a5d6ff;">"@hud.notification_fade_in"</span>
    ],

    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #79c0ff;">"bg"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/Black"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
          <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.8</span>
        }
      },
      {
        <span style="color: #79c0ff;">"message@preserved_title_display"</span>: {
          <span style="color: #79c0ff;">"$update_string"</span>: <span style="color: #a5d6ff;">"notify:"</span>,
          <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"center"</span>,
          <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"center"</span>,
          <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.0</span>],
          <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>,
          <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">1</span>
        }
      }
    ]
  }
}</code></pre>
</div>

<div class="lecture-note">
<div class="lecture-note-title">사용 방법</div>
<div class="lecture-note-content">
<code>/title @a title notify:아이템을 획득했습니다!</code>
</div>
</div>

<h3>예제 3: 미니맵 (간단한 버전)</h3>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json - 미니맵 UI</div>
                    <pre><code>{
  <span style="color: #79c0ff;">"minimap_panel"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">150</span>, <span style="color: #79c0ff;">150</span>],

    <span style="color: #8b949e;">// 우측 상단 배치</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_right"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_right"</span>,
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">-10</span>, <span style="color: #79c0ff;">10</span>],

    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #8b949e;">// 배경 (원형)</span>
        <span style="color: #79c0ff;">"bg"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/Black"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
          <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.7</span>
        }
      },
      {
        <span style="color: #8b949e;">// 플레이어 마커 (중앙)</span>
        <span style="color: #79c0ff;">"player_marker"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/White"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">5</span>, <span style="color: #79c0ff;">5</span>],
          <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"center"</span>,
          <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"center"</span>,
          <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.0</span>],
          <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">2</span>
        }
      },
      {
        <span style="color: #8b949e;">// 방향 표시</span>
        <span style="color: #79c0ff;">"compass_label"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
          <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"N"</span>,
          <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_middle"</span>,
          <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_middle"</span>,
          <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">5</span>],
          <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>],
          <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>,
          <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">3</span>
        }
      },
      {
        <span style="color: #8b949e;">// 좌표 표시</span>
        <span style="color: #79c0ff;">"coords_label"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
          <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"#coords"</span>,
          <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
          <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
          <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">-5</span>],
          <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.8</span>, <span style="color: #79c0ff;">0.8</span>, <span style="color: #79c0ff;">0.8</span>],
          <span style="color: #79c0ff;">"font_size"</span>: <span style="color: #a5d6ff;">"small"</span>,
          <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>,
          <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">3</span>
        }
      }
    ]
  }
}</code></pre>
</div>

<div class="alert-box alert-info">
<strong>참고:</strong> 실제 미니맵을 만들려면 애드온 스크립트와 함께 사용하여
주변 블록 정보를 전달받아야 합니다.
</div>
