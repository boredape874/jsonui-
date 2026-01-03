---
title: 레이아웃 시스템 완벽 이해
---

# 레이아웃 시스템 완벽 이해 {#layout}

> 난이도: 중급

<p>요소를 화면에 배치하는 모든 방법을 배워봅시다.</p>

<h3>앵커 시스템 심화</h3>
<div class="lecture-note">
<div class="lecture-note-title">앵커 작동 원리</div>
<p>
앵커는 두 개의 프로퍼티로 작동합니다:
</p>
<ul>
<li><code>anchor_from</code>: 부모 요소의 어느 지점을 기준으로 할까?</li>
<li><code>anchor_to</code>: 내 요소의 어느 지점을 그 기준점에 붙일까?</li>
</ul>
</div>

<h4>실전 앵커 예시들</h4>
<div class="step-guide">
<div class="step-item">
<div class="step-number">1</div>
<div class="step-content">
<h4>화면 중앙에 배치</h4>
<div class="code-header">중앙 정렬</div>
<pre><code>{
  <span style="color: #79c0ff;">"centered_element"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">100</span>, <span style="color: #79c0ff;">100</span>],
    <span style="color: #8b949e;">// 부모의 중앙 = 내 중앙</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"center"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"center"</span>
  }
}</code></pre>
</div>
</div>

<div class="step-item">
<div class="step-number">2</div>
<div class="step-content">
<h4>오른쪽 위 모서리 배치</h4>
<div class="code-header">우상단 정렬</div>
<pre><code>{
  <span style="color: #79c0ff;">"top_right_element"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"점수: 100"</span>,
    <span style="color: #8b949e;">// 부모의 오른쪽 위 = 내 오른쪽 위</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_right"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_right"</span>,
    <span style="color: #8b949e;">// 약간 안쪽으로 이동 (왼쪽으로 -10px, 아래로 10px)</span>
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">-10</span>, <span style="color: #79c0ff;">10</span>]
  }
}</code></pre>
</div>
</div>

<div class="step-item">
<div class="step-number">3</div>
<div class="step-content">
<h4>하단 중앙 배치</h4>
<div class="code-header">하단 중앙 정렬</div>
<pre><code>{
  <span style="color: #79c0ff;">"bottom_center_element"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">200</span>, <span style="color: #79c0ff;">50</span>],
    <span style="color: #8b949e;">// 부모의 하단 중앙 = 내 하단 중앙</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
    <span style="color: #8b949e;">// 위로 조금 올리기</span>
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">-20</span>]
  }
}</code></pre>
</div>
</div>
</div>

<div class="alert-box alert-tip">
<strong>offset 음수 값:</strong><br>
• X축: 음수 = 왼쪽, 양수 = 오른쪽<br>
• Y축: 음수 = 위, 양수 = 아래
</div>

