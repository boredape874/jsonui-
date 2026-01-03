---
title: HUD 커스터마이징 실전 튜토리얼
---

# HUD 커스터마이징 실전 튜토리얼 {#hud-tutorial}

> 난이도: 중급

<div class="term-box">
<div class="term-title">HUD(Head-Up Display)란?</div>
<div class="term-content">
<p>
<strong>HUD</strong>는 게임 화면에 항상 표시되는 정보들을 말합니다.
체력바, 허기바, 핫바(단축바), 좌표 등이 모두 HUD에 속합니다.
</p>
<p>
마인크래프트에서 HUD는 <code>hud_screen.json</code> 파일에서 관리됩니다.
</p>
</div>
</div>

<h3 id="hud-add-element">HUD에 요소 추가하는 방법</h3>
<p>
HUD에 새로운 요소를 추가하려면 <code>root_panel</code>을 수정해야 합니다.
root_panel은 HUD의 모든 요소를 담고 있는 가장 큰 컨테이너입니다.
</p>

<div class="lecture-note">
<div class="lecture-note-title">수정(Modification) 방식</div>
<div class="lecture-note-content">
<p>
바닐라 UI를 직접 수정하지 않고, <strong>modifications</strong>를 사용하여
기존 요소에 새로운 요소를 추가합니다. 이렇게 하면 다른 리소스 팩과 호환성이 좋아집니다.
</p>
</div>
</div>

<h3 id="hud-health-bar">실전 예제 1: 간단한 텍스트 추가</h3>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     1단계: 표시할 텍스트 요소 정의
  ============================================ */</span>
  <span style="color: #79c0ff;">"my_custom_text"</span>: {
    <span style="color: #8b949e;">// 텍스트 요소</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #8b949e;">// 표시할 텍스트 내용</span>
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"환영합니다!"</span>,
    <span style="color: #8b949e;">// 화면 상단 중앙에 배치</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_middle"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_middle"</span>,
    <span style="color: #8b949e;">// 위에서 5픽셀 아래로</span>
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">5</span>],
    <span style="color: #8b949e;">// 텍스트 색상 (금색)</span>
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.84</span>, <span style="color: #79c0ff;">0.0</span>],
    <span style="color: #8b949e;">// 텍스트 그림자 (true = 그림자 있음)</span>
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>
  },
  <span style="color: #8b949e;">/* ============================================
     2단계: root_panel에 요소 추가
  ============================================ */</span>
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #8b949e;">// modifications: 기존 요소를 수정</span>
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #8b949e;">// 어떤 배열을 수정할지 (controls = 자식 요소 목록)</span>
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
        <span style="color: #8b949e;">// 어떻게 수정할지 (insert_front = 맨 앞에 추가)</span>
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_front"</span>,
        <span style="color: #8b949e;">// 추가할 요소들</span>
        <span style="color: #79c0ff;">"value"</span>: [
          {
            <span style="color: #8b949e;">// 위에서 정의한 요소 참조</span>
            <span style="color: #79c0ff;">"my_custom_text@hud.my_custom_text"</span>: {}
          }
        ]
      }
    ]
  }
}</code></pre>
</div>

<div class="term-box">
<div class="term-title">operation 종류</div>
<div class="term-content">
<ul>
<li><code>insert_front</code> - 배열의 맨 앞에 추가 (다른 요소 위에 표시됨)</li>
<li><code>insert_back</code> - 배열의 맨 뒤에 추가 (다른 요소 아래에 표시됨)</li>
</ul>
<p>대부분의 경우 <code>insert_front</code>를 사용합니다.</p>
</div>
</div>

<h3 id="hud-hotbar">실전 예제 2: 이미지 추가하기</h3>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     사과 이미지를 HUD에 표시
  ============================================ */</span>
  <span style="color: #79c0ff;">"apple_icon"</span>: {
    <span style="color: #8b949e;">// 이미지 요소</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
    <span style="color: #8b949e;">// 사과 텍스처 (바닐라 리소스)</span>
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/items/apple"</span>,
    <span style="color: #8b949e;">// 이미지 크기 (16x16 픽셀)</span>
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">16</span>, <span style="color: #79c0ff;">16</span>],
    <span style="color: #8b949e;">// 화면 왼쪽 상단에 배치</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #8b949e;">// 왼쪽에서 10px, 위에서 10px</span>
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">10</span>, <span style="color: #79c0ff;">10</span>]
  },
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_front"</span>,
        <span style="color: #79c0ff;">"value"</span>: [
          {
            <span style="color: #79c0ff;">"apple_icon@hud.apple_icon"</span>: {}
          }
        ]
      }
    ]
  }
}</code></pre>
</div>

<h3>실전 예제 3: 속도계 만들기 (고급)</h3>
<p>
플레이어의 이동 속도를 실시간으로 표시하는 속도계를 만들어봅시다.
</p>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     속도계 패널 (배경 + 텍스트를 담는 컨테이너)
  ============================================ */</span>
  <span style="color: #79c0ff;">"speedometer_panel"</span>: {
    <span style="color: #8b949e;">// 패널 타입 (여러 요소를 담을 수 있음)</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #8b949e;">// 패널 크기</span>
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">120</span>, <span style="color: #79c0ff;">30</span>],
    <span style="color: #8b949e;">// 화면 하단 중앙에 배치</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
    <span style="color: #8b949e;">// 아래에서 60픽셀 위로 (핫바 위에 표시)</span>
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">-60</span>],
    <span style="color: #8b949e;">// 패널에 포함될 요소들</span>
    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #8b949e;">/* =====================================
           배경 이미지 (반투명 검은색)
        ===================================== */</span>
        <span style="color: #79c0ff;">"background"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #8b949e;">// 바닐라 검은색 텍스처</span>
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/Black"</span>,
          <span style="color: #8b949e;">// 부모(패널)의 크기를 그대로 사용</span>
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%"</span>, <span style="color: #a5d6ff;">"100%"</span>],
          <span style="color: #8b949e;">// 투명도 50% (반투명)</span>
          <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.5</span>
        }
      },
      {
        <span style="color: #8b949e;">/* =====================================
           속도 텍스트 라벨
        ===================================== */</span>
        <span style="color: #79c0ff;">"speed_label"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
          <span style="color: #8b949e;">// 기본 텍스트 (바인딩으로 변경됨)</span>
          <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"속도: 0.0"</span>,
          <span style="color: #8b949e;">// 패널 중앙에 배치</span>
          <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"center"</span>,
          <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"center"</span>,
          <span style="color: #8b949e;">// 텍스트 색상 (흰색)</span>
          <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>],
          <span style="color: #8b949e;">// 그림자 효과</span>
          <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>,
          <span style="color: #8b949e;">// 레이어 (배경보다 위에 표시)</span>
          <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">1</span>
        }
      }
    ]
  },
  <span style="color: #8b949e;">/* ============================================
     root_panel에 속도계 추가
  ============================================ */</span>
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_front"</span>,
        <span style="color: #79c0ff;">"value"</span>: [
          {
            <span style="color: #79c0ff;">"speedometer@hud.speedometer_panel"</span>: {}
          }
        ]
      }
    ]
  }
}</code></pre>
</div>

<div class="lecture-note">
<div class="lecture-note-title">속도계 작동 방식</div>
<div class="lecture-note-content">
<ol>
<li><strong>배경:</strong> 반투명 검은색 패널로 텍스트를 읽기 쉽게 만듦</li>
<li><strong>텍스트:</strong> 플레이어 속도를 표시 (바인딩으로 실시간 업데이트 가능)</li>
<li><strong>위치:</strong> 핫바 위쪽에 배치되어 게임 플레이에 방해되지 않음</li>
</ol>
<p>
<strong>참고:</strong> 실제 속도 값을 표시하려면 추가 바인딩이 필요하지만,
바닐라에서는 속도 바인딩을 제공하지 않으므로 애드온과 함께 사용해야 합니다.
</p>
</div>
</div>

<h3>여러 요소를 한 번에 추가하기</h3>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">// 요소 1: 텍스트</span>
  <span style="color: #79c0ff;">"element_1"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"요소 1"</span>
  },
  <span style="color: #8b949e;">// 요소 2: 이미지</span>
  <span style="color: #79c0ff;">"element_2"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/items/diamond"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">16</span>, <span style="color: #79c0ff;">16</span>]
  },
  <span style="color: #8b949e;">// 요소 3: 또 다른 텍스트</span>
  <span style="color: #79c0ff;">"element_3"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"요소 3"</span>
  },
  <span style="color: #8b949e;">/* ============================================
     모든 요소를 한 번에 추가
  ============================================ */</span>
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_front"</span>,
        <span style="color: #79c0ff;">"value"</span>: [
          { <span style="color: #79c0ff;">"element_1@hud.element_1"</span>: {} },
          { <span style="color: #79c0ff;">"element_2@hud.element_2"</span>: {} },
          { <span style="color: #79c0ff;">"element_3@hud.element_3"</span>: {} }
        ]
      }
    ]
  }
}</code></pre>
</div>

<div class="alert-box alert-tip">
<strong>정리된 방식 (권장):</strong><br>
여러 요소를 추가할 때는 패널로 묶어서 추가하는 것이 관리하기 좋습니다.
</div>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json (정리된 버전)</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     모든 커스텀 요소를 담는 패널
  ============================================ */</span>
  <span style="color: #79c0ff;">"my_custom_elements_panel"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #8b949e;">// 자식 요소들</span>
    <span style="color: #79c0ff;">"controls"</span>: [
      { <span style="color: #79c0ff;">"element_1@hud.element_1"</span>: {} },
      { <span style="color: #79c0ff;">"element_2@hud.element_2"</span>: {} },
      { <span style="color: #79c0ff;">"element_3@hud.element_3"</span>: {} }
    ]
  },
  <span style="color: #8b949e;">// root_panel에는 패널만 추가</span>
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_front"</span>,
        <span style="color: #79c0ff;">"value"</span>: [
          { <span style="color: #79c0ff;">"my_elements@hud.my_custom_elements_panel"</span>: {} }
        ]
      }
    ]
  }
}</code></pre>
</div>

<div class="alert-box alert-info">
<strong>장점:</strong><br>
• 코드가 더 깔끔하고 관리하기 쉬움<br>
• 나중에 전체 요소를 한 번에 숨기거나 보이게 할 수 있음<br>
• 다른 리소스 팩과의 충돌 가능성이 낮아짐
</div>

<div class="alert-box alert-warning">
<strong>주의사항:</strong><br>
• HUD는 게임 중 항상 표시되므로 성능을 고려해야 합니다<br>
• 너무 많은 요소를 추가하면 화면이 복잡해질 수 있습니다<br>
• 다른 플레이어도 사용할 리소스 팩이라면 위치를 신중히 선택하세요
</div>

