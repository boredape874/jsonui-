---
title: StarLib 예제
---

<section id="starlib" class="section reveal" data-section data-group="practice">
        <div class="section-head">
          <h2>StarLib 예제</h2>
          <p>StarLib 예제는 템플릿을 활용해 UI를 빠르게 바꾸는 방식을 보여줍니다.</p>
        </div>
        <div class="example-grid">
          <article class="example-card">
            <div class="example-head">
              <h3>템플릿 기반 화면</h3>
              <span class="tag">template</span>
            </div>
            <p>템플릿 화면을 가져오고 텍스처/버튼 스타일만 바꿔서 전체 UI를 바꿉니다.</p>
            <div class="code-block compact">
              <pre><code>"long_form@starlib_pkg_screen_template.screen": {
  // 템플릿 설정 값만 바꿔서 전체 화면 스타일 변경
  "$FORM_TEMPLATE_background_texture": "textures/example/background",
  "$BUTTON_STYLE_default_texture": "textures/example/button"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>쉬운 설명:</strong> 기본 틀을 가져오고 색/그림만 갈아끼움</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>멀티 폼 화면</h3>
              <span class="tag">multi-form</span>
            </div>
            <p>여러 폼을 한 화면에 묶어서 보여주는 구조입니다.</p>
            <div class="code-block compact">
              <pre><code>"$forms_holder_controls": [
  {
    // 제목을 뒤집어 비교하는 바인딩으로 폼을 분기
    "form@global.reverse_title_binding": {
      "$form_size": [280, 225], // 폼 카드 크기
      "$scrolling_content": "server_form.buttons_grid" // 버튼 리스트 연결
    }
  }
]</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>쉬운 설명:</strong> 작은 창을 여러 개 붙여놓은 느낌</li>
            </ul>
          </article>

          <article class="example-card">
            <div class="example-head">
              <h3>동적 버튼 크기</h3>
              <span class="tag">dynamic</span>
            </div>
            <p>문자열 키(§m, §p)를 사용해 버튼 크기와 배치를 자동으로 조정합니다.</p>
            <div class="code-block compact">
              <pre><code>"advanced_dynamic_button": {
  // 왼쪽 버튼 크기 규칙
  "$BUTTON_SIZER_left_half": "§m§1§1",
  // 오른쪽 버튼 크기 규칙
  "$BUTTON_SIZER_right_half": "§m§2§1",
  // 높이 규칙이 없을 때의 처리
  "$VERTICAL_PROCESSING_no_height_key": "§m§0§0"
}</code></pre>
            </div>
            <ul class="learn-list">
              <li><strong>쉬운 설명:</strong> 버튼 크기를 자동으로 계산해주는 룰</li>
              <li><strong>주의:</strong> 키 문자열 규칙을 바꾸면 전체 구조가 깨짐</li>
            </ul>
          </article>
        </div>
        <div class="callout info">
          StarLib 예제는 고급 기능이 많습니다. 처음에는 템플릿을 쓰는 방식만 이해해도 충분합니다.
        </div>
      </section>