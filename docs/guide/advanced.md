---
title: 고급 기법 및 최적화
---

# 고급 기법 및 최적화 {#advanced}

> 난이도: 전문가

<h3>호환성 극대화하기</h3>

<div class="term-box">
<div class="term-title">왜 호환성이 중요한가?</div>
<div class="term-content">
<p>
JSON UI는 <strong>버전 관리가 없습니다</strong>.
Mojang이 UI를 업데이트하면 여러분의 커스텀 UI가 깨질 수 있습니다.
호환성을 고려한 코드 작성이 필수입니다.
</p>
</div>
</div>

<h4>1. 필요한 것만 수정하기</h4>

<div class="comparison-box">
<div class="comparison-bad">
<div class="comparison-header"> 나쁜 예</div>
<div class="comparison-content">
<pre><code>{
  <span style="color: #79c0ff;">"progress_text_label"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">false</span>,
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"#level_number"</span>,
    <span style="color: #79c0ff;">"color"</span>: <span style="color: #a5d6ff;">"$experience_text_color"</span>,
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_middle"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"bottom_middle"</span>,
    <span style="color: #79c0ff;">"bindings"</span>: [...]
  }
}</code></pre>
<p>→ 불필요한 속성까지 모두 포함. Mojang이 바꾸면 깨질 위험!</p>
</div>
</div>

<div class="comparison-good">
<div class="comparison-header"> 좋은 예</div>
<div class="comparison-content">
<pre><code>{
  <span style="color: #79c0ff;">"progress_text_label"</span>: {
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">false</span>
  }
}</code></pre>
<p>→ 그림자만 끄고 싶다면 shadow만 수정!</p>
</div>
</div>
</div>

<h4>2. Modifications 사용하기</h4>

<div class="comparison-box">
<div class="comparison-bad">
<div class="comparison-header"> 나쁜 예</div>
<div class="comparison-content">
<pre><code>{
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"controls"</span>: [
      { <span style="color: #79c0ff;">"my_ui@namespace.my_ui"</span>: {} },
      { <span style="color: #79c0ff;">"left_helpers@hud.left_helpers"</span>: {} },
      { <span style="color: #79c0ff;">"right_helpers@hud.right_helpers"</span>: {} }
      <span style="color: #8b949e;">// ... 바닐라 요소 모두 나열</span>
    ]
  }
}</code></pre>
<p>→ 바닐라 컨트롤 이름이 바뀌면 깨짐!</p>
</div>
</div>

<div class="comparison-good">
<div class="comparison-header"> 좋은 예</div>
<div class="comparison-content">
<pre><code>{
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_front"</span>,
        <span style="color: #79c0ff;">"value"</span>: [
          { <span style="color: #79c0ff;">"my_ui@namespace.my_ui"</span>: {} }
        ]
      }
    ]
  }
}</code></pre>
<p>→ 기존 요소에 영향 없이 추가!</p>
</div>
</div>
</div>

<h4>3. 중첩 트리 수정 피하기</h4>

<div class="code-block">
<div class="code-header">중첩된 컨트롤 수정 방법</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     슬래시(/)를 사용한 중첩 접근
  ============================================ */</span>
  <span style="color: #8b949e;">// 부모/자식 형식으로 접근</span>
  <span style="color: #79c0ff;">"panel_with_label_and_bg/bg_image"</span>: {
    <span style="color: #79c0ff;">"size"</span>: [<span style="color: #a5d6ff;">"100%c"</span>, <span style="color: #a5d6ff;">"100%c"</span>]
  },
  <span style="color: #8b949e;">// 부모/자식/손자 형식</span>
  <span style="color: #79c0ff;">"panel_with_label_and_bg/bg_image/label"</span>: {
    <span style="color: #79c0ff;">"layer"</span>: <span style="color: #79c0ff;">-5</span>
  }
}</code></pre>
</div>

<h4>4. 단일 진입점 사용</h4>

<div class="comparison-box">
<div class="comparison-bad">
<div class="comparison-header"> 여러 진입점</div>
<div class="comparison-content">
<pre><code>{
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [{
      <span style="color: #79c0ff;">"value"</span>: [{ <span style="color: #79c0ff;">"ui1@ns.ui1"</span>: {} }]
    }]
  },
  <span style="color: #79c0ff;">"hud_content"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [{
      <span style="color: #79c0ff;">"value"</span>: [{ <span style="color: #79c0ff;">"ui2@ns.ui2"</span>: {} }]
    }]
  }
}</code></pre>
</div>
</div>

<div class="comparison-good">
<div class="comparison-header"> 단일 진입점</div>
<div class="comparison-content">
<pre><code>{
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [{
      <span style="color: #79c0ff;">"value"</span>: [
        { <span style="color: #79c0ff;">"ui1@ns.ui1"</span>: {} },
        { <span style="color: #79c0ff;">"ui2@ns.ui2"</span>: {} }
      ]
    }]
  }
}</code></pre>
</div>
</div>
</div>

<h3>성능 최적화</h3>

<div class="alert-box alert-warning">
<strong>주의:</strong> JSON UI는 매우 무거운 시스템입니다.
인벤토리를 열면 FPS가 절반으로 떨어지는 이유가 바로 JSON UI 때문입니다.
</div>

<h4>1. 연산자 최소화</h4>

<div class="comparison-box">
<div class="comparison-bad">
<div class="comparison-header"> 비효율적</div>
<div class="comparison-content">
<code>"$var": "(2 * (-1 * $number))"</code>
<p>→ 연산 2번 수행</p>
</div>
</div>

<div class="comparison-good">
<div class="comparison-header"> 효율적</div>
<div class="comparison-content">
<code>"$var": "(-2 * $number)"</code>
<p>→ 연산 1번으로 단순화</p>
</div>
</div>
</div>

<h4>2. 바인딩 최소화</h4>
<p>
바인딩이 많을수록 성능이 떨어집니다. 불필요한 바인딩은 제거하세요.
</p>

<h4>3. 불필요한 컨트롤 제거</h4>

<div class="code-block">
<div class="code-header">invisible vs ignored</div>
<pre><code>{
  <span style="color: #8b949e;">/* ============================================
     visible: false - 안 보이지만 평가는 됨 (느림)
  ============================================ */</span>
  <span style="color: #79c0ff;">"hidden_element"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"visible"</span>: <span style="color: #79c0ff;">false</span>
  },
  <span style="color: #8b949e;">/* ============================================
     ignored: true - 완전히 무시됨 (빠름)
  ============================================ */</span>
  <span style="color: #79c0ff;">"ignored_element"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #79c0ff;">"ignored"</span>: <span style="color: #79c0ff;">true</span>
  }
}</code></pre>
</div>

<h4>4. 컨트롤 통합</h4>

<div class="comparison-box">
<div class="comparison-bad">
<div class="comparison-header"> 5개의 별도 이미지</div>
<div class="comparison-content">
<pre><code><span style="color: #79c0ff;">"image_1@template"</span>: { <span style="color: #79c0ff;">"$texture"</span>: <span style="color: #a5d6ff;">"textures/ui/1"</span> },
<span style="color: #79c0ff;">"image_2@template"</span>: { <span style="color: #79c0ff;">"$texture"</span>: <span style="color: #a5d6ff;">"textures/ui/2"</span> },
<span style="color: #79c0ff;">"image_3@template"</span>: { <span style="color: #79c0ff;">"$texture"</span>: <span style="color: #a5d6ff;">"textures/ui/3"</span> },
<span style="color: #79c0ff;">"image_4@template"</span>: { <span style="color: #79c0ff;">"$texture"</span>: <span style="color: #a5d6ff;">"textures/ui/4"</span> },
<span style="color: #79c0ff;">"image_5@template"</span>: { <span style="color: #79c0ff;">"$texture"</span>: <span style="color: #a5d6ff;">"textures/ui/5"</span> }</code></pre>
</div>
</div>

<div class="comparison-good">
<div class="comparison-header"> 1개로 통합</div>
<div class="comparison-content">
<pre><code>{
  <span style="color: #79c0ff;">"image"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
    <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"#texture"</span>,
    <span style="color: #79c0ff;">"bindings"</span>: [
      {
        <span style="color: #79c0ff;">"binding_name"</span>: <span style="color: #a5d6ff;">"#hud_title_text_string"</span>
      },
      {
        <span style="color: #8b949e;">// 텍스처 경로 동적 생성</span>
        <span style="color: #79c0ff;">"binding_type"</span>: <span style="color: #a5d6ff;">"view"</span>,
        <span style="color: #79c0ff;">"source_property_name"</span>: <span style="color: #a5d6ff;">"('textures/ui/' + #hud_title_text_string)"</span>,
        <span style="color: #79c0ff;">"target_property_name"</span>: <span style="color: #a5d6ff;">"#texture"</span>
      }
    ]
  }
}</code></pre>
</div>
</div>
</div>

<div class="alert-box alert-tip">
<strong>최적화 체크리스트:</strong><br>
 필요한 것만 수정했는가?<br>
 Modifications를 사용했는가?<br>
 연산자를 최대한 단순화했는가?<br>
 불필요한 바인딩을 제거했는가?<br>
 ignored를 사용하여 불필요한 요소를 제거했는가?
</div>

