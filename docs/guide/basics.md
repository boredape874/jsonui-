---
title: 기초 개념 이해하기
---

# 기초 개념 이해하기 {#basics}

> 난이도: 초급

<p>JSON UI를 만들기 전에 꼭 알아야 할 핵심 개념들을 배워봅시다.</p>

<h3>1. 네임스페이스 (Namespace)</h3>
<div class="term-box">
<div class="term-title">네임스페이스란?</div>
<div class="term-content">
<p>
<strong>네임스페이스</strong>는 JSON UI 파일의 <strong>이름표</strong>같은 것입니다.<br>
각 파일은 자신만의 네임스페이스를 가지고 있어요.
</p>
<p>
예를 들어, <code>hud_screen.json</code> 파일의 네임스페이스는 보통 <code>"hud"</code>입니다.
</p>
</div>
<div class="term-example">
<strong>왜 필요한가요?</strong>
<p>
다른 파일에서 이 파일의 요소를 사용하고 싶을 때,<br>
"어느 파일에 있는 요소야?"라고 알려주기 위해서입니다.
</p>
<div class="code-header">네임스페이스 예시</div>
<pre><code>{
  <span style="color: #8b949e;">// 이 파일의 이름표(네임스페이스)는 "hud"입니다</span>
  <span style="color: #79c0ff;">"namespace"</span>: <span style="color: #a5d6ff;">"hud"</span>,
  <span style="color: #8b949e;">// 이 파일에서 만든 요소</span>
  <span style="color: #79c0ff;">"my_text"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"안녕하세요!"</span>
  }
}</code></pre>
</div>
</div>

<h3>2. 요소 (Elements 또는 Controls)</h3>
<div class="term-box">
<div class="term-title">요소란?</div>
<div class="term-content">
<p>
<strong>요소</strong>는 화면에 표시되는 각각의 부품입니다.<br>
레고 블록처럼 여러 요소를 조합해서 화면을 만듭니다.
</p>
</div>
</div>

<h4>주요 요소 타입</h4>
<div class="table-container">
<table>
<thead>
<tr>
<th>요소 타입</th>
<th>쉬운 설명</th>
<th>비유</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>panel</code></td>
<td>다른 요소를 담는 상자</td>
<td> 포장 상자</td>
</tr>
<tr>
<td><code>label</code></td>
<td>글자를 표시</td>
<td> 메모지</td>
</tr>
<tr>
<td><code>image</code></td>
<td>그림/이미지를 표시</td>
<td> 액자</td>
</tr>
<tr>
<td><code>button</code></td>
<td>클릭할 수 있는 버튼</td>
<td> 스위치</td>
</tr>
<tr>
<td><code>stack_panel</code></td>
<td>요소들을 세로/가로로 정렬</td>
<td> 책꽂이</td>
</tr>
</tbody>
</table>
</div>

<h3>3. 프로퍼티 (Properties)</h3>
<div class="term-box">
<div class="term-title">프로퍼티란?</div>
<div class="term-content">
<p>
<strong>프로퍼티</strong>는 요소의 <strong>설정값</strong>입니다.<br>
요소의 크기, 위치, 색깔 등을 정하는 것들이에요.
</p>
</div>
<div class="term-example">
<div class="code-header">프로퍼티 예시</div>
<pre><code>{
  <span style="color: #79c0ff;">"my_label"</span>: {
    <span style="color: #8b949e;">// ↓ type은 "이게 무슨 종류의 요소야?"를 정하는 프로퍼티</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #8b949e;">// ↓ text는 "무슨 글자를 보여줘?"를 정하는 프로퍼티</span>
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"안녕!"</span>,
    <span style="color: #8b949e;">// ↓ size는 "얼마나 크게 만들어?"를 정하는 프로퍼티</span>
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">100</span>, <span style="color: #79c0ff;">50</span>]
  }
}</code></pre>
</div>
</div>

<h3>4. 앵커 (Anchor)</h3>
<div class="term-box">
<div class="term-title">앵커란?</div>
<div class="term-content">
<p>
<strong>앵커</strong>는 요소를 <strong>어디에 붙일지</strong> 정하는 것입니다.<br>
마치 냉장고에 자석으로 메모를 붙이듯이, 화면의 특정 위치에 요소를 붙입니다.
</p>
</div>
</div>

<h4>앵커 포인트 9개</h4>
<div class="lecture-note">
<div class="lecture-note-title">앵커 위치</div>
<p>화면(또는 부모 요소)을 9개 구역으로 나눕니다:</p>
<div class="code-header">앵커 포인트</div>
<pre><code><span style="color: #a5d6ff;">top_left</span>       <span style="color: #a5d6ff;">top_middle</span>       <span style="color: #a5d6ff;">top_right</span>
(좌상)          (상단)           (우상)
<span style="color: #a5d6ff;">left_middle</span>    <span style="color: #a5d6ff;">center</span>          <span style="color: #a5d6ff;">right_middle</span>
(좌측)          (중앙)           (우측)
<span style="color: #a5d6ff;">bottom_left</span>    <span style="color: #a5d6ff;">bottom_middle</span>   <span style="color: #a5d6ff;">bottom_right</span>
(좌하)          (하단)           (우하)</code></pre>
</div>

<h4>앵커 사용 예시</h4>
<div class="comparison-container">
<div class="comparison-good">
<p><strong>화면 중앙에 배치</strong></p>
<div class="code-header">중앙 정렬</div>
<pre><code>{
  <span style="color: #8b949e;">// 부모의 중앙에</span>
  <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"center"</span>,
  <span style="color: #8b949e;">// 내 중앙을 붙여</span>
  <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"center"</span>
}</code></pre>
</div>
<div class="comparison-good">
<p><strong>왼쪽 위에 배치</strong></p>
<div class="code-header">좌상단 정렬</div>
<pre><code>{
  <span style="color: #8b949e;">// 부모의 왼쪽 위에</span>
  <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
  <span style="color: #8b949e;">// 내 왼쪽 위를 붙여</span>
  <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_left"</span>
}</code></pre>
</div>
</div>

<div class="alert-box alert-tip">
<strong>팁:</strong> 대부분의 경우 <code>anchor_from</code>과 <code>anchor_to</code>를 같은 값으로 설정합니다!
</div>

