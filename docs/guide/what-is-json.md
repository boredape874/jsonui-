---
title: ❓ JSON이란? (완전 초보자용 설명)
---

# ❓ JSON이란? (완전 초보자용 설명) {#what-is-json}

> ???: 초급

<div class="term-box">
<div class="term-title">JSON의 의미</div>
<div class="term-content">
<p>
<strong>JSON</strong>은 "JavaScript Object Notation"의 약자입니다.
어렵게 들리지만, 쉽게 말하면 <strong>데이터를 정리해서 저장하는 방법</strong>입니다.
</p>
<p>
마치 메모장에 정보를 적듯이, 컴퓨터가 읽을 수 있는 형식으로 정보를 적는 것입니다.
</p>
</div>
<div class="term-example">
<strong>예시: 사람 정보를 JSON으로 표현하기</strong>
<div class="code-header">JSON 예시</div>
<pre><code>{
  "이름": "홍길동",
  "나이": 25,
  "직업": "학생"
}</code></pre>
</div>
</div>

<h3>JSON의 기본 규칙</h3>
<p>JSON을 작성할 때는 몇 가지 간단한 규칙만 지키면 됩니다:</p>

<div class="step-guide">
<div class="step-item">
<div class="step-number">1</div>
<div class="step-content">
<h4>중괄호 { } 사용</h4>
<p>
모든 JSON은 <code>{</code>로 시작해서 <code>}</code>로 끝납니다.
이 안에 데이터를 넣습니다.
</p>
<div class="code-header">예시</div>
<pre><code>{
  <span style="color: #8b949e;">// 여기에 데이터를 넣어요</span>
}</code></pre>
</div>
</div>

<div class="step-item">
<div class="step-number">2</div>
<div class="step-content">
<h4>"이름": 값 형식</h4>
<p>
데이터는 항상 <strong>"이름": 값</strong> 형식으로 씁니다.<br>
이름은 꼭 <code>"따옴표"</code>로 감싸야 합니다.
</p>
<div class="code-header">예시</div>
<pre><code>{
  <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
  <span style="color: #79c0ff;">"size"</span>: [100, 50]
}</code></pre>
</div>
</div>

<div class="step-item">
<div class="step-number">3</div>
<div class="step-content">
<h4>쉼표 , 사용</h4>
<p>
여러 데이터를 넣을 때는 <code>,</code>(쉼표)로 구분합니다.<br>
<strong>주의:</strong> 마지막 항목 뒤에는 쉼표를 붙이면 안 됩니다!
</p>
<div class="comparison-container">
<div class="comparison-good">
<div class="code-header">올바른 예시</div>
<pre><code>{
  <span style="color: #79c0ff;">"name"</span>: <span style="color: #a5d6ff;">"홍길동"</span>,
  <span style="color: #79c0ff;">"age"</span>: <span style="color: #79c0ff;">25</span>  <span style="color: #8b949e;">← 마지막이라 쉼표 없음</span>
}</code></pre>
</div>
<div class="comparison-bad">
<div class="code-header">잘못된 예시</div>
<pre><code>{
  <span style="color: #79c0ff;">"name"</span>: <span style="color: #a5d6ff;">"홍길동"</span>,
  <span style="color: #79c0ff;">"age"</span>: <span style="color: #79c0ff;">25</span>,  <span style="color: #f85149;">← 에러! 마지막 쉼표</span>
}</code></pre>
</div>
</div>
</div>
</div>

<div class="step-item">
<div class="step-number">4</div>
<div class="step-content">
<h4>값의 종류</h4>
<p>값에는 여러 종류가 있습니다:</p>
<div class="table-container">
<table>
<thead>
<tr>
<th>종류</th>
<th>설명</th>
<th>예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>문자열</strong></td>
<td>글자, 꼭 "따옴표" 필요</td>
<td><code>"안녕하세요"</code>, <code>"panel"</code></td>
</tr>
<tr>
<td><strong>숫자</strong></td>
<td>숫자, 따옴표 없음</td>
<td><code>100</code>, <code>3.14</code></td>
</tr>
<tr>
<td><strong>참/거짓</strong></td>
<td>true 또는 false</td>
<td><code>true</code>, <code>false</code></td>
</tr>
<tr>
<td><strong>배열</strong></td>
<td>여러 값을 [ ] 안에</td>
<td><code>[100, 50]</code>, <code>["a", "b"]</code></td>
</tr>
<tr>
<td><strong>객체</strong></td>
<td>{ } 안에 더 많은 데이터</td>
<td><code>{ "name": "value" }</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div class="alert-box alert-tip">
<strong>주석(설명) 쓰는 법:</strong><br>
JSON은 원래 주석을 지원하지 않지만, 마인크래프트 JSON UI에서는 <code>//</code>로 시작하는 주석을 쓸 수 있습니다!
<div class="code-header">주석 예시</div>
<pre><code>{
  <span style="color: #8b949e;">// 이것은 주석입니다. 게임은 이 줄을 무시해요.</span>
  <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>  <span style="color: #8b949e;">// 줄 끝에도 주석을 달 수 있어요</span>
}</code></pre>
</div>
