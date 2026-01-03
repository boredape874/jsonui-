---
title: Molang
---

<section id="molang" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>Molang</h2>
          <p>Molang은 간단한 계산과 조건을 적는 언어입니다. 어렵게 생각하지 말고 짧게 쓰는 것이 좋습니다.</p>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>기본 연산</h3>
            <ul class="token-list">
              <li><code>(#value / 20)</code> 나눗셈</li>
              <li><code>(not (#texture = ''))</code> 빈 값 검사</li>
              <li><code>(#title_text - 'customUI_')</code> 문자열 빼기 (없으면 그대로)</li>
              <li><code>((#a = 'x') and (#b &gt; 5))</code> 논리 연산</li>
            </ul>
          </div>
          <div class="card">
            <h3>문자열 슬라이싱</h3>
            <p>실제 예제는 텍스트를 잘라서 여러 데이터를 분리합니다.</p>
            <div class="code-block compact">
              <pre><code>// #dialogue_data에서 200자만 남기기
"source_property_name": "(('%.200s' * #dialogue_data) - '\t')"</code></pre>
            </div>
          </div>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>초보 규칙 3가지</h3>
            <ul class="token-list">
              <li>괄호로 감싸서 안전하게</li>
              <li>문자열은 작은따옴표 사용</li>
              <li>짧게 쓰고 하나씩 테스트</li>
            </ul>
          </div>
          <div class="card">
            <h3>자주 쓰는 비교</h3>
            <ul class="token-list">
              <li><code>(#value &gt; 0)</code> 양수인지</li>
              <li><code>(#text = '')</code> 비어있는지</li>
              <li><code>(not (#visible))</code> 반대 조건</li>
            </ul>
          </div>
        </div>
        <div class="callout tip">
          customUI 감지는 <code>((#title_text - 'customUI_') = #title_text)</code> 패턴을 사용합니다.
          이 식이 true면 “접두어가 없다”는 뜻입니다.
        </div>
        <div class="callout info">
          <code>* 1</code>은 true/false 값을 1/0으로 바꾸는 간단한 변환입니다.
        </div>
      </section>