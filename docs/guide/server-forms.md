---
title: 📋 서버 폼 커스터마이징
---

# 📋 서버 폼 커스터마이징 {#server-forms}

> ???: 전문가

<div class="term-box">
<div class="term-title">서버 폼(Server Form)이란?</div>
<div class="term-content">
<p>
<strong>서버 폼</strong>은 게임 내에서 명령어나 스크립트로 표시되는 UI 창입니다.
예를 들어 NPC 대화 창, 설정 메뉴, 상점 UI 등이 모두 서버 폼입니다.
</p>
<p>서버 폼에는 2가지 타입이 있습니다:</p>
<ul>
<li><strong>ActionForm</strong> - 버튼 목록이 있는 폼 (NPC 대화 선택지 등)</li>
<li><strong>ModalForm (Custom Form)</strong> - 입력 필드, 슬라이더 등이 있는 폼</li>
</ul>
</div>
</div>

<h3>Factory 패턴</h3>
<p>
서버 폼을 수정하려면 <strong>Factory 패턴</strong>을 사용해야 합니다.
Factory는 "공장"이라는 뜻으로, 같은 틀을 사용해서 여러 개의 폼을 만들어내는 시스템입니다.
</p>

<div class="term-box">
<div class="term-title">왜 Factory를 사용하나요?</div>
<div class="term-content">
<p>
게임에서는 여러 개의 서버 폼이 동시에 사용됩니다.
각 폼마다 별도로 요소를 만들면 코드가 너무 길어지므로,
Factory를 사용하여 하나의 틀(템플릿)을 만들고 필요할 때마다 복사해서 사용합니다.
</p>
</div>
</div>

<h3>ActionForm 커스터마이징 단계별 가이드</h3>

<div class="code-block">
<div class="code-header">RP/ui/server_form.json - 1단계: Factory 추가</div>
                    <pre><code>{
  <span style="color: #8b949e;">/* ============================================
     main_screen_content 수정
     서버 폼의 메인 컨테이너에 우리의 Factory 추가
  ============================================ */</span>
  <span style="color: #79c0ff;">"main_screen_content"</span>: {
    <span style="color: #8b949e;">// modifications: 기존 요소 수정</span>
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #8b949e;">// controls 배열에 추가</span>
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_back"</span>,
        <span style="color: #79c0ff;">"value"</span>: [
          {
            <span style="color: #8b949e;">// 우리의 Factory 패널 (이름은 "server_form_factory"와 달라야 함)</span>
            <span style="color: #79c0ff;">"my_custom_server_form_factory"</span>: {
              <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
              <span style="color: #79c0ff;">"factory"</span>: {
                <span style="color: #8b949e;">// 반드시 "server_form_factory"여야 함</span>
                <span style="color: #79c0ff;">"name"</span>: <span style="color: #a5d6ff;">"server_form_factory"</span>,
                <span style="color: #79c0ff;">"control_ids"</span>: {
                  <span style="color: #79c0ff;">"long_form"</span>: <span style="color: #a5d6ff;">"@server_form.my_action_form_panel"</span>
                }
              }
            }
          }
        ]
      }
    ]
  }
}</code></pre>
</div>

<div class="code-block">
<div class="code-header">RP/ui/server_form.json - 2단계: 커스텀 폼 정의</div>
                    <pre><code>{
  <span style="color: #79c0ff;">"my_action_form_panel"</span>: {
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"panel"</span>,
    <span style="color: #8b949e;">// 제목 텍스트 바인딩</span>
    <span style="color: #79c0ff;">"bindings"</span>: [
      { <span style="color: #79c0ff;">"binding_name"</span>: <span style="color: #a5d6ff;">"#title_text"</span> }
    ],
    <span style="color: #79c0ff;">"controls"</span>: [
      {
        <span style="color: #79c0ff;">"shop_icon"</span>: {
          <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"image"</span>,
          <span style="color: #79c0ff;">"texture"</span>: <span style="color: #a5d6ff;">"textures/items/apple"</span>,
          <span style="color: #79c0ff;">"size"</span>: [<span style="color: #79c0ff;">32</span>, <span style="color: #79c0ff;">32</span>],
          <span style="color: #79c0ff;">"$title_keyword"</span>: <span style="color: #a5d6ff;">"my_shop:"</span>,
          <span style="color: #79c0ff;">"bindings"</span>: [
            {
              <span style="color: #79c0ff;">"binding_type"</span>: <span style="color: #a5d6ff;">"view"</span>,
              <span style="color: #79c0ff;">"source_control_name"</span>: <span style="color: #a5d6ff;">"my_action_form_panel"</span>,
              <span style="color: #8b949e;">// 제목에 키워드가 포함되면 표시</span>
              <span style="color: #79c0ff;">"source_property_name"</span>: <span style="color: #a5d6ff;">"(not ((#title_text - $title_keyword) = #title_text))"</span>,
              <span style="color: #79c0ff;">"target_property_name"</span>: <span style="color: #a5d6ff;">"#visible"</span>
            }
          ]
        }
      }
    ]
  }
}</code></pre>
</div>

<div class="code-block">
<div class="code-header">RP/ui/server_form.json - 3단계: 바닐라 폼 충돌 방지</div>
                    <pre><code>{
  <span style="color: #79c0ff;">"long_form"</span>: {
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"bindings"</span>,
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_back"</span>,
        <span style="color: #79c0ff;">"value"</span>: [
          { <span style="color: #79c0ff;">"binding_name"</span>: <span style="color: #a5d6ff;">"#title_text"</span> },
          {
            <span style="color: #79c0ff;">"binding_type"</span>: <span style="color: #a5d6ff;">"view"</span>,
            <span style="color: #8b949e;">// 키워드가 없을 때만 바닐라 폼 표시</span>
            <span style="color: #79c0ff;">"source_property_name"</span>: <span style="color: #a5d6ff;">"((#title_text - 'my_shop:') = #title_text)"</span>,
            <span style="color: #79c0ff;">"target_property_name"</span>: <span style="color: #a5d6ff;">"#visible"</span>
          }
        ]
      }
    ]
  }
}</code></pre>
</div>

<div class="alert-box alert-info">
<strong>작동 방식:</strong><br>
1. 스크립트에서 "my_shop:아이템 상점"이라는 제목의 폼 열기<br>
2. Factory가 my_action_form_panel 생성<br>
3. 제목에 "my_shop:"이 포함되어 있으므로 커스텀 UI 표시<br>
4. 바닐라 폼은 키워드가 있으므로 숨김
</div>
