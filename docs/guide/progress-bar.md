---
title: 📊 프로그레스 바 만들기
---

# 📊 프로그레스 바 만들기 {#progress-bar}

> ???: 고급

<div class="term-box">
<div class="term-title">프로그레스 바(Progress Bar)란?</div>
<div class="term-content">
<p>
진행 상황을 시각적으로 표시하는 막대 그래프입니다.
체력바, 경험치 바, 로딩 바 등이 모두 프로그레스 바입니다.
</p>
</div>
</div>

<h3>기본 프로그레스 바</h3>

<div class="code-block">
<div class="code-header">RP/ui/custom_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     프로그레스 바 패널
  ============================================ */</span>
  <span style="color: #79c0ff;">"progress_bar_panel"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">200</span>, <span style="color: #79c0ff;">20</span>],
    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #8b949e;">/* =====================================
           배경 (빈 부분)
        ===================================== */</span>
        <span style="color: #79c0ff;">"background"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/Black"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
          <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.5</span>
        }
      },
      {
        <span style="color: #8b949e;">/* =====================================
           채워진 부분 (프로그레스)
        ===================================== */</span>
        <span style="color: #79c0ff;">"fill_panel"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
          <span style="color: #8b949e;">// 왼쪽 정렬</span>
          <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"left_middle"</span>,
          <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"left_middle"</span>,
          <span style="color: #8b949e;">/* =====================================
             크기 계산 방법:
             - 높이: 부모의 100%
             - 너비: 부모의 50% (진행률 50%)
          ===================================== */</span>
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"50%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
          <span style="color: #8b949e;">// 부모 영역을 벗어나지 않도록</span>
          <span style="color: #79c0ff;">"clips_children"</span>: <span style="color: #79c0ff;">true</span>,
          <span style="color: #79c0ff;">"controls"</span>: [
            {
              <span style="color: #79c0ff;">"fill_image"</span>: {
                <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
                <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/White"</span>,
                <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
                <span style="color: #8b949e;">// 녹색으로 표시</span>
                <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.0</span>],
                <span style="color: #8b949e;">// 배경보다 위에 표시</span>
                <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">2</span>
              }
            }
          ]
        }
      }
    ]
  }
}</code></pre>
</div>

<h3>동적 프로그레스 바 (바인딩 사용)</h3>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json - 체력바 예제</div>
<pre><code>{
  <span style="color: #79c0ff;">"custom_health_bar"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">200</span>, <span style="color: #79c0ff;">20</span>],
    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #79c0ff;">"background"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/hud_tip_text_background"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>]
        }
      },
      {
        <span style="color: #79c0ff;">"health_fill"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
          <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"left_middle"</span>,
          <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"left_middle"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"#health_percentage"</span>, <span style="color: #a5d6ff;">"100%"</span>],
          <span style="color: #79c0ff;">"clips_children"</span>: <span style="color: #79c0ff;">true</span>,
          <span style="color: #8b949e;">/* ============================================
             바인딩: 실시간 체력 퍼센트
          ============================================ */</span>
          <span style="color: #79c0ff;">"bindings"</span>: [
            {
              <span style="color: #79c0ff;">"binding_type"</span>: <span style="color: #a5d6ff;">"global"</span>,
              <span style="color: #8b949e;">// 현재 체력 / 최대 체력</span>
              <span style="color: #79c0ff;">"binding_name"</span>: <span style="color: #a5d6ff;">"(#player_health / #player_max_health)"</span>,
              <span style="color: #8b949e;">// 0.0 ~ 1.0을 0% ~ 100%로 변환</span>
              <span style="color: #79c0ff;">"binding_name_override"</span>: <span style="color: #a5d6ff;">"#health_percentage"</span>
            }
          ],
          <span style="color: #79c0ff;">"controls"</span>: [
            {
              <span style="color: #79c0ff;">"fill"</span>: {
                <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
                <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/White"</span>,
                <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
                <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">0.0</span>],
                <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">1</span>
              }
            }
          ]
        }
      }
    ]
  }
}</code></pre>
</div>

<h3>수직 프로그레스 바</h3>

<div class="code-block">
<div class="code-header">아래에서 위로 채워지는 프로그레스 바</div>
<pre><code>{
  <span style="color: #79c0ff;">"vertical_progress_bar"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">20</span>, <span style="color: #79c0ff;">100</span>],
    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #79c0ff;">"background"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/Black"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
          <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.5</span>
        }
      },
      {
        <span style="color: #79c0ff;">"fill_panel"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
          <span style="color: #8b949e;">// 하단 정렬 (아래에서 위로 채움)</span>
          <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
          <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
          <span style="color: #8b949e;">// 너비: 100%, 높이: 75% (진행률 75%)</span>
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"75%"</span>],
          <span style="color: #79c0ff;">"clips_children"</span>: <span style="color: #79c0ff;">true</span>,
          <span style="color: #79c0ff;">"controls"</span>: [
            {
              <span style="color: #79c0ff;">"fill"</span>: {
                <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
                <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/White"</span>,
                <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
                <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">0.0</span>, <span style="color: #79c0ff;">0.5</span>, <span style="color: #79c0ff;">1.0</span>],
                <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">1</span>
              }
            }
          ]
        }
      }
    ]
  }
}</code></pre>
</div>

<div class="alert-box alert-tip">
<strong>핵심 포인트:</strong><br>
• 배경 + 채워진 부분(fill) 구조 사용<br>
• anchor를 left/bottom으로 설정하여 채워지는 방향 결정<br>
• clips_children으로 영역 제한<br>
• 바인딩으로 실시간 데이터 연결 가능
</div>
