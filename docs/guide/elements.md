---
title: 🧩 요소 타입 완벽 가이드
---

# 🧩 요소 타입 완벽 가이드 {#elements}

> ???: 중급

<p>JSON UI에서 사용할 수 있는 모든 요소 타입을 자세히 알아봅시다.</p>

<h3 id="elements-panel">1. Panel (패널)</h3>
<div class="term-box">
<div class="term-title" id="panel-basic">Panel이란?</div>
<div class="term-content">
<p>
<strong>Panel</strong>은 다른 요소들을 담는 <strong>컨테이너</strong>입니다.<br>
HTML의 <code><div></code>와 비슷하다고 생각하면 됩니다.
</p>
</div>
<div class="term-example">
<div class="code-header">Panel 기본 예시</div>
                        <pre><code>{
  <span style="color: #79c0ff;">"my_panel"</span>: {
    <span style="color: #8b949e;">// 타입: panel</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,

    <span style="color: #8b949e;">// 크기 [너비, 높이]</span>
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">200</span>, <span style="color: #79c0ff;">100</span>],

    <span style="color: #8b949e;">// 자식 요소들</span>
    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #8b949e;">// 여기에 다른 요소들을 넣어요</span>
        <span style="color: #79c0ff;">"child_label@namespace.some_label"</span>: {}
      }
    ]
  }
}</code></pre>
</div>
</div>

<h3 id="elements-label">2. Label (레이블)</h3>
<div class="term-box">
<div class="term-title" id="label-basic">Label이란?</div>
<div class="term-content">
<p>
<strong>Label</strong>은 텍스트를 표시하는 요소입니다.<br>
게임 화면에 글자를 보여주고 싶을 때 사용합니다.
</p>
</div>
<div class="term-example">
<div class="code-header">Label 완전 예시</div>
                        <pre><code>{
  <span style="color: #79c0ff;">"my_label"</span>: {
    <span style="color: #8b949e;">// 타입: label</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,

    <span style="color: #8b949e;">// 표시할 텍스트</span>
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"점수: 100"</span>,

    <span style="color: #8b949e;">// 텍스트 색상 [빨강, 초록, 파랑] (0.0 ~ 1.0)</span>
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>],  <span style="color: #8b949e;">// 흰색</span>

    <span style="color: #8b949e;">// 텍스트 그림자 (true/false)</span>
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>,

    <span style="color: #8b949e;">// 폰트 크기 (기본값, small, large, extra-large)</span>
    <span style="color: #79c0ff;">"font_size"</span>: <span style="color: #a5d6ff;">"normal"</span>,

    <span style="color: #8b949e;">// 폰트 타입 (default, smooth, rune 등)</span>
    <span style="color: #79c0ff;">"font_type"</span>: <span style="color: #a5d6ff;">"default"</span>,

    <span style="color: #8b949e;">// 텍스트 정렬 (left, center, right)</span>
    <span style="color: #79c0ff;">"text_alignment"</span>: <span style="color: #a5d6ff;">"center"</span>,

    <span style="color: #8b949e;">// 크기</span>
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"default"</span>, <span style="color: #a5d6ff;">"default"</span>]
  }
}</code></pre>
</div>
</div>

<div class="alert-box alert-tip">
<strong>색상 값 이해하기:</strong><br>
색상은 [빨강, 초록, 파랑] 형식으로 0.0~1.0 사이 값을 사용합니다.<br>
• [1.0, 0.0, 0.0] = 빨간색<br>
• [0.0, 1.0, 0.0] = 초록색<br>
• [0.0, 0.0, 1.0] = 파란색<br>
• [1.0, 1.0, 0.0] = 노란색 (빨강 + 초록)<br>
• [1.0, 1.0, 1.0] = 흰색<br>
• [0.0, 0.0, 0.0] = 검정색
</div>

<h3 id="elements-image">3. Image (이미지)</h3>
<div class="term-box">
<div class="term-title" id="image-basic">Image란?</div>
<div class="term-content">
<p>
<strong>Image</strong>는 그림이나 텍스처를 표시하는 요소입니다.<br>
아이콘, 배경, 프로그레스 바 등을 만들 때 사용합니다.
</p>
</div>
<div class="term-example">
<div class="code-header">Image 기본 예시</div>
                        <pre><code>{
  <span style="color: #79c0ff;">"my_image"</span>: {
    <span style="color: #8b949e;">// 타입: image</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,

    <span style="color: #8b949e;">// 텍스처 경로</span>
    <span style="color: #8b949e;">// textures/ui/ 폴더 안의 이미지 파일</span>
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/ui/Black"</span>,

    <span style="color: #8b949e;">// 크기 [너비, 높이]</span>
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">64</span>, <span style="color: #79c0ff;">64</span>],

    <span style="color: #8b949e;">// 투명도 (0.0 = 완전 투명, 1.0 = 불투명)</span>
    <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">1.0</span>
  }
}</code></pre>
</div>
</div>

<h4 id="image-uv">Image 고급 기능: UV 매핑</h4>
<div class="lecture-note">
<div class="lecture-note-title">UV 매핑이란?</div>
<p>
<strong>UV</strong>는 큰 이미지에서 일부분만 잘라서 사용하는 기능입니다.<br>
예를 들어, 아이템 아이콘이 모여있는 큰 이미지에서 하나만 사용할 수 있어요.
</p>
<div class="code-header">UV 사용 예시</div>
                    <pre><code>{
  <span style="color: #79c0ff;">"item_icon"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/items/items"</span>,

    <span style="color: #8b949e;">// UV 시작 위치 [x, y] (픽셀 단위)</span>
    <span style="color: #79c0ff;">"uv"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">0</span>],

    <span style="color: #8b949e;">// UV 크기 [너비, 높이] (픽셀 단위)</span>
    <span style="color: #79c0ff;">"uv_size"</span>: [<span style="color: #79c0ff;">16</span>, <span style="color: #79c0ff;">16</span>],

    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">32</span>, <span style="color: #79c0ff;">32</span>]  <span style="color: #8b949e;">// 실제 표시 크기</span>
  }
}</code></pre>
</div>

<h3 id="elements-button">4. Button (버튼)</h3>
<div class="term-box">
<div class="term-title">Button이란?</div>
<div class="term-content">
<p>
<strong>Button</strong>은 클릭할 수 있는 버튼입니다.<br>
버튼은 4가지 상태를 가질 수 있어요: 기본, 마우스 올림, 클릭, 비활성화
</p>
</div>
<div class="term-example">
<div class="code-header">Button 예시</div>
                        <pre><code>{
  <span style="color: #79c0ff;">"my_button"</span>: {
    <span style="color: #8b949e;">// 타입: button</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"button"</span>,

    <span style="color: #8b949e;">// 크기</span>
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">100</span>, <span style="color: #79c0ff;">40</span>],

    <span style="color: #8b949e;">// 기본 상태 (평소)</span>
    <span style="color: #79c0ff;">"default_control"</span>: <span style="color: #a5d6ff;">"button_default_state"</span>,

    <span style="color: #8b949e;">// 마우스 올렸을 때</span>
    <span style="color: #79c0ff;">"hover_control"</span>: <span style="color: #a5d6ff;">"button_hover_state"</span>,

    <span style="color: #8b949e;">// 클릭했을 때</span>
    <span style="color: #79c0ff;">"pressed_control"</span>: <span style="color: #a5d6ff;">"button_pressed_state"</span>,

    <span style="color: #8b949e;">// 버튼 매핑 (어떤 동작을 할지)</span>
    <span style="color: #79c0ff;">"button_mappings"</span>: [
      {
        <span style="color: #8b949e;">// "button.menu_exit" = 화면 나가기</span>
        <span style="color: #79c0ff;">"to_button_id"</span>: <span style="color: #a5d6ff;">"button.menu_exit"</span>,
        <span style="color: #79c0ff;">"mapping_type"</span>: <span style="color: #a5d6ff;">"pressed"</span>
      }
    ]
  }
}</code></pre>
</div>
</div>

<h3 id="panel-stack">5. Stack Panel (스택 패널)</h3>
<div class="term-box">
<div class="term-title">Stack Panel이란?</div>
<div class="term-content">
<p>
<strong>Stack Panel</strong>은 자식 요소들을 자동으로 정렬해주는 패널입니다.<br>
세로 또는 가로로 요소들을 나란히 배치할 때 편리해요.
</p>
</div>
<div class="term-example">
<div class="code-header">Stack Panel 예시</div>
                        <pre><code>{
  <span style="color: #79c0ff;">"my_stack"</span>: {
    <span style="color: #8b949e;">// 타입: stack_panel</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"stack_panel"</span>,

    <span style="color: #8b949e;">// 정렬 방향</span>
    <span style="color: #8b949e;">// "vertical" = 세로 (위에서 아래로)</span>
    <span style="color: #8b949e;">// "horizontal" = 가로 (왼쪽에서 오른쪽으로)</span>
    <span style="color: #79c0ff;">"orientation"</span>: <span style="color: #a5d6ff;">"vertical"</span>,

    <span style="color: #8b949e;">// 자식 요소들</span>
    <span style="color: #79c0ff;">"controls"</span>: [
      { <span style="color: #79c0ff;">"item1@namespace.some_element"</span>: {} },
      { <span style="color: #79c0ff;">"item2@namespace.another_element"</span>: {} },
      { <span style="color: #79c0ff;">"item3@namespace.yet_another"</span>: {} }
      <span style="color: #8b949e;">// 이 세 요소가 세로로 자동 정렬됩니다!</span>
    ]
  }
}</code></pre>
</div>
</div>
