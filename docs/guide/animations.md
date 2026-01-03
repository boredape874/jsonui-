---
title: 🎬 애니메이션 완벽 이해
---

# 🎬 애니메이션 완벽 이해 {#animations}

> ???: 고급

<div class="term-box">
<div class="term-title">애니메이션(Animation)이란?</div>
<div class="term-content">
<p>
<strong>애니메이션</strong>은 UI 요소에 움직임을 주는 기능입니다.
위치, 크기, 투명도 등을 시간에 따라 변화시켜 화면이 더 역동적으로 보이게 만듭니다.
</p>
<p>예시:</p>
<ul>
<li>텍스트가 서서히 나타남 (투명도 0 → 1)</li>
<li>버튼이 아래에서 위로 올라옴 (위치 변경)</li>
<li>이미지가 점점 커짐 (크기 변경)</li>
</ul>
</div>
</div>

<h3 id="anim-types">애니메이션 타입</h3>

<table>
<thead>
<tr>
<th>타입</th>
<th>설명</th>
<th>변경되는 속성</th>
</tr>
</thead>
<tbody>
<tr id="anim-alpha">
<td><code>alpha</code></td>
<td>투명도 애니메이션</td>
<td>alpha (0.0 ~ 1.0)</td>
</tr>
<tr id="anim-offset">
<td><code>offset</code></td>
<td>위치 이동 애니메이션</td>
<td>offset [x, y]</td>
</tr>
<tr id="anim-size">
<td><code>size</code></td>
<td>크기 변경 애니메이션</td>
<td>size [width, height]</td>
</tr>
<tr id="anim-color">
<td><code>color</code></td>
<td>색상 변경 애니메이션</td>
<td>color [r, g, b]</td>
</tr>
<tr id="anim-flip">
<td><code>flip_book</code></td>
<td>이미지 프레임 애니메이션<br>(만화책 넘기듯이)</td>
<td>texture UV</td>
</tr>
<tr>
<td><code>wait</code></td>
<td>대기 (아무것도 안 함)</td>
<td>없음</td>
</tr>
</tbody>
</table>

<h3>이징 함수 (Easing Function)</h3>
<p>
애니메이션이 <strong>어떤 속도로 진행될지</strong>를 정하는 것입니다.
</p>

<table>
<thead>
<tr>
<th>이징</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>linear</code></td>
<td>일정한 속도 (등속 운동)</td>
</tr>
<tr>
<td><code>in_quad</code></td>
<td>점점 빨라짐 (가속)</td>
</tr>
<tr>
<td><code>out_quad</code></td>
<td>점점 느려짐 (감속)</td>
</tr>
<tr>
<td><code>in_out_quad</code></td>
<td>처음엔 빨라지다가 나중엔 느려짐</td>
</tr>
<tr>
<td><code>in_bounce</code></td>
<td>통통 튀는 효과 (시작)</td>
</tr>
<tr>
<td><code>out_bounce</code></td>
<td>통통 튀는 효과 (끝)</td>
</tr>
<tr>
<td><code>spring</code></td>
<td>용수철처럼 흔들리는 효과</td>
</tr>
</tbody>
</table>

<h3>애니메이션 기본 구조</h3>

<div class="code-block">
<div class="code-header">애니메이션 정의 방법</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     애니메이션 정의
  ============================================ */</span>
  <span style="color: #79c0ff;">"my_animation@namespace.element_name"</span>: {
    <span style="color: #8b949e;">// 애니메이션 타입 (alpha/offset/size/color/flip_book/wait)</span>
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"alpha"</span>,
    <span style="color: #8b949e;">// 애니메이션 시간 (초 단위)</span>
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">1.0</span>,
    <span style="color: #8b949e;">// 시작 값</span>
    <span style="color: #79c0ff;">"from"</span>: <span style="color: #79c0ff;">0.0</span>,
    <span style="color: #8b949e;">// 끝 값</span>
    <span style="color: #79c0ff;">"to"</span>: <span style="color: #79c0ff;">1.0</span>,
    <span style="color: #8b949e;">// 이징 함수</span>
    <span style="color: #79c0ff;">"easing"</span>: <span style="color: #a5d6ff;">"linear"</span>
  }
}</code></pre>
</div>

<h3>실전 예제 1: 페이드 인 (서서히 나타남)</h3>

<div class="code-block">
<div class="code-header">RP/ui/custom_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     1단계: 페이드 인 애니메이션 정의
  ============================================ */</span>
  <span style="color: #79c0ff;">"fade_in_anim"</span>: {
    <span style="color: #8b949e;">// 투명도 애니메이션</span>
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"alpha"</span>,
    <span style="color: #8b949e;">// 2초 동안 진행</span>
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">2.0</span>,
    <span style="color: #8b949e;">// 투명(0.0)에서 시작</span>
    <span style="color: #79c0ff;">"from"</span>: <span style="color: #79c0ff;">0.0</span>,
    <span style="color: #8b949e;">// 불투명(1.0)으로 끝</span>
    <span style="color: #79c0ff;">"to"</span>: <span style="color: #79c0ff;">1.0</span>,
    <span style="color: #8b949e;">// 일정한 속도</span>
    <span style="color: #79c0ff;">"easing"</span>: <span style="color: #a5d6ff;">"linear"</span>
  },
  <span style="color: #8b949e;">/* ============================================
     2단계: 애니메이션을 적용할 요소
  ============================================ */</span>
  <span style="color: #79c0ff;">"my_text"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"안녕하세요!"</span>,
    <span style="color: #8b949e;">// 애니메이션 적용 (배열로 여러 개 가능)</span>
    <span style="color: #79c0ff;">"anims"</span>: [
      <span style="color: #a5d6ff;">"@custom.fade_in_anim"</span>
    ]
  }
}</code></pre>
</div>

<div class="lecture-note">
<div class="lecture-note-title">작동 방식</div>
<div class="lecture-note-content">
<ol>
<li>화면이 열리면 텍스트가 투명한 상태로 시작 (alpha = 0.0)</li>
<li>2초 동안 서서히 불투명해짐 (alpha = 0.0 → 1.0)</li>
<li>최종적으로 완전히 보이는 상태가 됨</li>
</ol>
</div>
</div>

<h3>실전 예제 2: 슬라이드 업 (아래에서 위로)</h3>

<div class="code-block">
<div class="code-header">RP/ui/custom_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     아래에서 위로 올라오는 애니메이션
  ============================================ */</span>
  <span style="color: #79c0ff;">"slide_up_anim"</span>: {
    <span style="color: #8b949e;">// 위치 이동 애니메이션</span>
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"offset"</span>,
    <span style="color: #8b949e;">// 1.5초 동안 진행</span>
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">1.5</span>,
    <span style="color: #8b949e;">// 시작 위치: 아래쪽 (y = 100)</span>
    <span style="color: #79c0ff;">"from"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">100</span>],
    <span style="color: #8b949e;">// 끝 위치: 원래 위치 (y = 0)</span>
    <span style="color: #79c0ff;">"to"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">0</span>],
    <span style="color: #8b949e;">// 점점 느려지며 도착</span>
    <span style="color: #79c0ff;">"easing"</span>: <span style="color: #a5d6ff;">"out_quad"</span>
  },
  <span style="color: #8b949e;">/* ============================================
     애니메이션 적용
  ============================================ */</span>
  <span style="color: #79c0ff;">"my_panel"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">200</span>, <span style="color: #79c0ff;">100</span>],
    <span style="color: #79c0ff;">"anims"</span>: [
      <span style="color: #a5d6ff;">"@custom.slide_up_anim"</span>
    ]
  }
}</code></pre>
</div>

<h3>실전 예제 3: 연속 애니메이션 (순차 실행)</h3>

<div class="code-block">
<div class="code-header">RP/ui/custom_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     1단계: 페이드 인 (0.5초)
  ============================================ */</span>
  <span style="color: #79c0ff;">"anim_1_fade"</span>: {
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"alpha"</span>,
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">0.5</span>,
    <span style="color: #79c0ff;">"from"</span>: <span style="color: #79c0ff;">0.0</span>,
    <span style="color: #79c0ff;">"to"</span>: <span style="color: #79c0ff;">1.0</span>,
    <span style="color: #79c0ff;">"easing"</span>: <span style="color: #a5d6ff;">"linear"</span>,
    <span style="color: #8b949e;">// 이 애니메이션이 끝나면 다음 애니메이션 실행</span>
    <span style="color: #79c0ff;">"next"</span>: <span style="color: #a5d6ff;">"@custom.anim_2_scale"</span>
  },
  <span style="color: #8b949e;">/* ============================================
     2단계: 크기 변화 (1초)
  ============================================ */</span>
  <span style="color: #79c0ff;">"anim_2_scale"</span>: {
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"size"</span>,
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">1.0</span>,
    <span style="color: #79c0ff;">"from"</span>: [<span style="color: #79c0ff;">50</span>, <span style="color: #79c0ff;">50</span>],
    <span style="color: #79c0ff;">"to"</span>: [<span style="color: #79c0ff;">100</span>, <span style="color: #79c0ff;">100</span>],
    <span style="color: #79c0ff;">"easing"</span>: <span style="color: #a5d6ff;">"out_bounce"</span>,
    <span style="color: #8b949e;">// 3단계로 이동</span>
    <span style="color: #79c0ff;">"next"</span>: <span style="color: #a5d6ff;">"@custom.anim_3_wait"</span>
  },
  <span style="color: #8b949e;">/* ============================================
     3단계: 대기 (2초)
  ============================================ */</span>
  <span style="color: #79c0ff;">"anim_3_wait"</span>: {
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"wait"</span>,
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">2.0</span>,
    <span style="color: #8b949e;">// 대기 후 다시 1단계로 (무한 반복)</span>
    <span style="color: #79c0ff;">"next"</span>: <span style="color: #a5d6ff;">"@custom.anim_1_fade"</span>
  },
  <span style="color: #8b949e;">/* ============================================
     애니메이션 적용 요소
  ============================================ */</span>
  <span style="color: #79c0ff;">"animated_image"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/items/diamond"</span>,
    <span style="color: #8b949e;">// 첫 번째 애니메이션만 적용 (나머지는 자동으로 연결됨)</span>
    <span style="color: #79c0ff;">"anims"</span>: [
      <span style="color: #a5d6ff;">"@custom.anim_1_fade"</span>
    ]
  }
}</code></pre>
</div>

<div class="lecture-note">
<div class="lecture-note-title">연속 애니메이션 작동 순서</div>
<div class="lecture-note-content">
<ol>
<li><strong>0.5초:</strong> 투명 → 불투명 (페이드 인)</li>
<li><strong>1.0초:</strong> 작은 크기 → 큰 크기 (통통 튀며 커짐)</li>
<li><strong>2.0초:</strong> 그대로 유지 (대기)</li>
<li><strong>반복:</strong> 다시 1번으로 돌아가서 무한 반복</li>
</ol>
</div>
</div>

<h3>버튼 클릭으로 애니메이션 실행</h3>

<div class="code-block">
<div class="code-header">RP/ui/custom_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     애니메이션 정의 (버튼 ID로 실행)
  ============================================ */</span>
  <span style="color: #79c0ff;">"button_click_anim"</span>: {
    <span style="color: #79c0ff;">"anim_type"</span>: <span style="color: #a5d6ff;">"offset"</span>,
    <span style="color: #79c0ff;">"duration"</span>: <span style="color: #79c0ff;">0.3</span>,
    <span style="color: #79c0ff;">"from"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">0</span>],
    <span style="color: #79c0ff;">"to"</span>: [<span style="color: #79c0ff;">-50</span>, <span style="color: #79c0ff;">0</span>],
    <span style="color: #79c0ff;">"easing"</span>: <span style="color: #a5d6ff;">"out_quad"</span>,
    <span style="color: #8b949e;">// 버튼을 누를 때 실행 (버튼 ID와 일치해야 함)</span>
    <span style="color: #79c0ff;">"play_event"</span>: <span style="color: #a5d6ff;">"button.my_animation_trigger"</span>
  },
  <span style="color: #8b949e;">/* ============================================
     버튼 정의
  ============================================ */</span>
  <span style="color: #79c0ff;">"trigger_button@common_buttons.light_text_button"</span>: {
    <span style="color: #79c0ff;">"$button_text"</span>: <span style="color: #a5d6ff;">"애니메이션 실행"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">100</span>, <span style="color: #79c0ff;">30</span>],
    <span style="color: #8b949e;">// 버튼을 누르면 이 ID가 실행됨</span>
    <span style="color: #79c0ff;">"$pressed_button_name"</span>: <span style="color: #a5d6ff;">"button.my_animation_trigger"</span>
  },
  <span style="color: #8b949e;">/* ============================================
     애니메이션이 적용될 요소
  ============================================ */</span>
  <span style="color: #79c0ff;">"animated_label"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"움직일 텍스트"</span>,
    <span style="color: #8b949e;">// 애니메이션 연결</span>
    <span style="color: #79c0ff;">"anims"</span>: [
      <span style="color: #a5d6ff;">"@custom.button_click_anim"</span>
    ]
  }
}</code></pre>
</div>

<div class="alert-box alert-tip">
<strong>핵심 포인트:</strong><br>
• 애니메이션의 <code>play_event</code> = 버튼의 <code>$pressed_button_name</code> (같아야 함)<br>
• 버튼을 클릭하면 해당 ID를 가진 모든 애니메이션이 실행됨<br>
• 여러 요소에 같은 <code>play_event</code>를 사용하면 동시에 애니메이션됨
</div>

<div class="alert-box alert-warning">
<strong>주의사항:</strong><br>
• 애니메이션은 게임 성능에 영향을 줄 수 있으므로 과도하게 사용하지 마세요<br>
• 일부 애니메이션은 특정 화면에서만 작동할 수 있습니다<br>
• <code>next</code>로 무한 반복 시 멈출 방법이 없으니 주의하세요
</div>
