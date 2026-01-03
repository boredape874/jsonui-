---
title: ⚙️ 프로퍼티 완벽 가이드
---

# ⚙️ 프로퍼티 완벽 가이드 {#properties}

> ???: 중급

<p>요소의 모양과 동작을 제어하는 모든 프로퍼티를 알아봅시다.</p>

<h3 id="properties-size">크기와 위치 프로퍼티</h3>
<div class="table-container">
<table>
<thead>
<tr>
<th>프로퍼티</th>
<th>설명</th>
<th>예시</th>
</tr>
</thead>
<tbody>
<tr id="size-basic">
<td><code>size</code></td>
<td>요소의 크기 [너비, 높이]</td>
<td><code>[100, 50]</code><br><code>["50%", "100%"]</code></td>
</tr>
<tr id="properties-offset">
<td><code>offset</code></td>
<td>위치 이동 [x, y]</td>
<td><code>[10, 20]</code><br><code>["10%", 0]</code></td>
</tr>
<tr id="properties-anchor">
<td><code>anchor_from</code></td>
<td>부모의 앵커 포인트</td>
<td><code>"top_left"</code><br><code>"center"</code></td>
</tr>
<tr id="anchor-basic">
<td><code>anchor_to</code></td>
<td>요소의 앵커 포인트</td>
<td><code>"top_left"</code><br><code>"center"</code></td>
</tr>
<tr>
<td><code>max_size</code></td>
<td>최대 크기 제한</td>
<td><code>[200, 100]</code></td>
</tr>
<tr>
<td><code>min_size</code></td>
<td>최소 크기 제한</td>
<td><code>[50, 30]</code></td>
</tr>
</tbody>
</table>
</div>

<h3>크기 값의 모든 형식</h3>
<div class="lecture-note">
<div class="lecture-note-title">크기 지정 방법들</div>
<div class="table-container">
<table>
<thead>
<tr>
<th>형식</th>
<th>의미</th>
<th>예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>100</code></td>
<td>픽셀 단위 (숫자)</td>
<td><code>"size": [100, 50]</code></td>
</tr>
<tr>
<td><code>"100px"</code></td>
<td>픽셀 단위 (문자열)</td>
<td><code>"size": ["100px", "50px"]</code></td>
</tr>
<tr>
<td><code>"50%"</code></td>
<td>부모 크기의 퍼센트</td>
<td><code>"size": ["50%", "100%"]</code></td>
</tr>
<tr>
<td><code>"50%c"</code></td>
<td>자식 크기의 퍼센트</td>
<td><code>"size": ["100%c", "50%c"]</code></td>
</tr>
<tr>
<td><code>"50%cm"</code></td>
<td>가장 큰 자식 크기의 퍼센트</td>
<td><code>"size": ["100%cm", "default"]</code></td>
</tr>
<tr>
<td><code>"50%x"</code></td>
<td>이 요소 너비의 퍼센트</td>
<td><code>"offset": ["50%x", 0]</code></td>
</tr>
<tr>
<td><code>"50%y"</code></td>
<td>이 요소 높이의 퍼센트</td>
<td><code>"offset": [0, "50%y"]</code></td>
</tr>
<tr>
<td><code>"fill"</code></td>
<td>부모의 남은 공간 채우기</td>
<td><code>"size": ["fill", "fill"]</code></td>
</tr>
<tr>
<td><code>"default"</code></td>
<td>기본값 (대부분 100%)</td>
<td><code>"size": ["default", "default"]</code></td>
</tr>
<tr>
<td><code>"50% + 10px"</code></td>
<td>계산식 (퍼센트 + 픽셀)</td>
<td><code>"size": ["50% + 20px", "100%"]</code></td>
</tr>
<tr>
<td><code>"100% - 5px"</code></td>
<td>계산식 (퍼센트 - 픽셀)</td>
<td><code>"size": ["100% - 10px", "50%"]</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<h3>표시 관련 프로퍼티</h3>
<div class="table-container">
<table>
<thead>
<tr>
<th>프로퍼티</th>
<th>타입</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>visible</code></td>
<td>boolean</td>
<td>보이기/숨기기 (true/false)</td>
</tr>
<tr>
<td><code>alpha</code></td>
<td>number</td>
<td>투명도 (0.0 = 투명, 1.0 = 불투명)</td>
</tr>
<tr>
<td><code>layer</code></td>
<td>number</td>
<td>표시 순서 (숫자가 클수록 위에)</td>
</tr>
<tr>
<td><code>clips_children</code></td>
<td>boolean</td>
<td>자식이 경계 밖으로 나가면 잘라냄</td>
</tr>
<tr>
<td><code>clip_offset</code></td>
<td>array</td>
<td>클리핑 영역 오프셋 [x, y]</td>
</tr>
</tbody>
</table>
</div>

<div class="comparison-container">
<div class="comparison-good">
<p><strong>투명도 사용 예시</strong></p>
<div class="code-header">반투명 패널</div>
<pre><code>{
  <span style="color: #79c0ff;">"semi_transparent_panel"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #8b949e;">// 50% 투명하게</span>
    <span style="color: #79c0ff;">"alpha"</span>: <span style="color: #79c0ff;">0.5</span>
  }
}</code></pre>
</div>
<div class="comparison-good">
<p><strong>레이어 사용 예시</strong></p>
<div class="code-header">겹치는 요소</div>
<pre><code>{
  <span style="color: #79c0ff;">"background"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
    <span style="color: #8b949e;">// 맨 뒤에 표시</span>
    <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">1</span>
  },
  <span style="color: #79c0ff;">"foreground"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
    <span style="color: #8b949e;">// 앞에 표시</span>
    <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">2</span>
  }
}</code></pre>
</div>
</div>
