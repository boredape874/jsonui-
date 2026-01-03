---
title: 실전 패턴
---

<section id="patterns" class="section reveal" data-section data-group="practice">
        <div class="section-head">
          <h2>실전 패턴</h2>
          <p>실제 예제에서 자주 등장하는 패턴을 쉬운 설명으로 정리했습니다.</p>
        </div>
        <div class="pattern-grid">
          <div class="pattern-card">
            <h3>텍스트 프로토콜</h3>
            <p>채팅/액션바 텍스트에 접두어를 넣고 데이터를 전달합니다.</p>
          </div>
          <div class="pattern-card">
            <h3>보존 텍스트</h3>
            <p>이전 값을 저장해 변화가 있을 때만 갱신합니다.</p>
          </div>
          <div class="pattern-card">
            <h3>입력 모드 분기</h3>
            <p>게임패드인지 키보드인지에 따라 UI를 나눕니다.</p>
          </div>
          <div class="pattern-card">
            <h3>컬렉션 인덱스</h3>
            <p>버튼 리스트에서 특정 위치만 보여줄 때 사용합니다.</p>
          </div>
          <div class="pattern-card">
            <h3>메시지 필터</h3>
            <p>특정 문자열은 숨기고, 나머지만 보여줍니다.</p>
          </div>
          <div class="pattern-card">
            <h3>렌더러 패널</h3>
            <p>player_renderer로 캐릭터를 UI에 띄웁니다.</p>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">렌더러 기본 예시 (아이템 아이콘)</div>
          <pre><code>"item_icon": {
  "type": "custom", // 특수 렌더러
  "renderer": "inventory_item_renderer", // 아이템 그림
  "size": [16, 16],
  "bindings": [
    {
      "binding_name": "#item_id_aux",
      "binding_type": "global" // 아이템 ID가 들어와야 그림이 보임
    }
  ]
}</code></pre>
        </div>
        <div class="callout info">
          아이템 렌더러는 보통 컬렉션에서 #item_id_aux 값을 받아옵니다. 값이 비면 빈칸으로 보입니다.
        </div>
      </section>