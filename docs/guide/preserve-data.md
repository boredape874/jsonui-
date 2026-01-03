---
title: 💾 데이터 보존 기법
---

# 💾 데이터 보존 기법 {#preserve-data}

> ???: 전문가

<div class="term-box">
<div class="term-title">데이터 보존(Data Preservation)이란?</div>
<div class="term-content">
<p>
/title 명령어 등으로 전달된 데이터를 일시적으로 저장해두는 기법입니다.
예를 들어 "/title @a title update:플레이어123"을 실행하면,
"update:"라는 키워드를 감지하여 "플레이어123"을 저장하고 계속 표시합니다.
</p>
</div>
</div>

<h3>Property Bag 사용</h3>
<p>
<code>property_bag</code>는 요소의 로컬 변수를 만드는 기능입니다.
각 인스턴스마다 독립적인 데이터를 가질 수 있어 재사용 가능한 컴포넌트를 만들 수 있습니다.
</p>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json - 데이터 보존 컴포넌트</div>
                    <pre><code>{
  <span style="color: #8b949e;">/* ============================================
     재사용 가능한 데이터 보존 라벨
  ============================================ */</span>
  <span style="color: #79c0ff;">"preserved_title_display"</span>: {
    <span style="color: #8b949e;">// 감지할 키워드 (변수)</span>
    <span style="color: #79c0ff;">"$update_string"</span>: <span style="color: #a5d6ff;">"update"</span>,

    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"#text"</span>,

    <span style="color: #8b949e;">/* ============================================
       자식 컨트롤: 데이터 로직 처리
    ============================================ */</span>
    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #79c0ff;">"data_control"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">0</span>],

          <span style="color: #8b949e;">/* =====================================
             로컬 변수 정의 (property_bag)
             - 각 인스턴스마다 독립적인 메모리
          ===================================== */</span>
          <span style="color: #79c0ff;">"property_bag"</span>: {
            <span style="color: #79c0ff;">"#preserved_text"</span>: <span style="color: #a5d6ff;">""</span>
          },

          <span style="color: #79c0ff;">"bindings"</span>: [
            {
              <span style="color: #8b949e;">// 1. 제목 텍스트 가져오기</span>
              <span style="color: #79c0ff;">"binding_name"</span>: <span style="color: #a5d6ff;">"#hud_title_text_string"</span>
            },
            {
              <span style="color: #8b949e;">/* =====================================
                 2. 데이터 저장
                 - visibility_changed: 보임/안보임이 바뀔 때 실행
                 - 현재 제목을 #preserved_text에 저장
              ===================================== */</span>
              <span style="color: #79c0ff;">"binding_name"</span>: <span style="color: #a5d6ff;">"#hud_title_text_string"</span>,
              <span style="color: #79c0ff;">"binding_name_override"</span>: <span style="color: #a5d6ff;">"#preserved_text"</span>,
              <span style="color: #79c0ff;">"binding_condition"</span>: <span style="color: #a5d6ff;">"visibility_changed"</span>
            },
            {
              <span style="color: #8b949e;">/* =====================================
                 3. 언제 저장할지 조건 설정
                 - 새로운 제목 != 저장된 제목
                 - AND 새로운 제목에 키워드 포함
              ===================================== */</span>
              <span style="color: #79c0ff;">"binding_type"</span>: <span style="color: #a5d6ff;">"view"</span>,
              <span style="color: #79c0ff;">"source_property_name"</span>: <span style="color: #a5d6ff;">"(not (#hud_title_text_string = #preserved_text) and not ((#hud_title_text_string - $update_string) = #hud_title_text_string))"</span>,
              <span style="color: #79c0ff;">"target_property_name"</span>: <span style="color: #a5d6ff;">"#visible"</span>
            }
          ]
        }
      }
    ],

    <span style="color: #8b949e;">/* ============================================
       라벨 텍스트 바인딩
       - data_control에서 저장된 텍스트 가져오기
       - 키워드 제거 후 표시
    ============================================ */</span>
    <span style="color: #79c0ff;">"bindings"</span>: [
      {
        <span style="color: #79c0ff;">"binding_type"</span>: <span style="color: #a5d6ff;">"view"</span>,
        <span style="color: #79c0ff;">"source_control_name"</span>: <span style="color: #a5d6ff;">"data_control"</span>,

        <span style="color: #8b949e;">// 저장된 텍스트에서 키워드 제거</span>
        <span style="color: #79c0ff;">"source_property_name"</span>: <span style="color: #a5d6ff;">"(#preserved_text - $update_string)"</span>,
        <span style="color: #79c0ff;">"target_property_name"</span>: <span style="color: #a5d6ff;">"#text"</span>
      }
    ]
  }
}</code></pre>
</div>

<h3>작동 원리</h3>

<div class="lecture-note">
<div class="lecture-note-title">단계별 작동 순서</div>
<div class="lecture-note-content">
<ol>
<li>명령어 실행: <code>/title @a title update:안녕하세요</code></li>
<li>제목 변경 감지: <code>#hud_title_text_string</code> = "update:안녕하세요"</li>
<li>조건 검사:
<ul>
<li>저장된 텍스트와 다른가? ✓</li>
<li>"update:"가 포함되어 있나? ✓</li>
</ul>
</li>
<li>조건 충족 → <code>data_control</code>이 잠깐 visible됨</li>
<li><code>visibility_changed</code> 발동 → "update:안녕하세요"를 <code>#preserved_text</code>에 저장</li>
<li>라벨 표시: <code>(#preserved_text - "update")</code> = "안녕하세요"</li>
<li>저장된 텍스트는 다른 명령어가 올 때까지 계속 표시됨</li>
</ol>
</div>
</div>

<h3>여러 개의 보존 컴포넌트 사용</h3>

<div class="code-block">
<div class="code-header">RP/ui/hud_screen.json - 여러 데이터 보존</div>
                    <pre><code>{
  <span style="color: #8b949e;">/* ============================================
     플레이어 이름 표시 (키워드: "name:")
  ============================================ */</span>
  <span style="color: #79c0ff;">"player_name_display@preserved_title_display"</span>: {
    <span style="color: #79c0ff;">"$update_string"</span>: <span style="color: #a5d6ff;">"name:"</span>,
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">10</span>, <span style="color: #79c0ff;">10</span>]
  },

  <span style="color: #8b949e;">/* ============================================
     점수 표시 (키워드: "score:")
  ============================================ */</span>
  <span style="color: #79c0ff;">"player_score_display@preserved_title_display"</span>: {
    <span style="color: #79c0ff;">"$update_string"</span>: <span style="color: #a5d6ff;">"score:"</span>,
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">10</span>, <span style="color: #79c0ff;">30</span>]
  }
}</code></pre>
</div>

<div class="lecture-note">
<div class="lecture-note-title">사용 예제 (명령어)</div>
<div class="lecture-note-content">
                        <pre><code>/title @a title name:플레이어123
/title @a title score:1500점</code></pre>
<p>
→ 각각 독립적으로 저장되어 둘 다 계속 표시됩니다!
</p>
</div>
</div>

<div class="alert-box alert-tip">
<strong>핵심 포인트:</strong><br>
• <code>property_bag</code>로 로컬 변수 생성 (인스턴스마다 독립적)<br>
• <code>visibility_changed</code>로 데이터 저장 트리거<br>
• 조건식으로 저장 시점 제어<br>
• 재사용 가능한 컴포넌트 설계
</div>
