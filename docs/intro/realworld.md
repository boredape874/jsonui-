---
title: 실제 파일에서 많이 쓰는 것
---

<section id="realworld" class="section reveal" data-section data-group="intro">
        <div class="section-head">
          <h2>실제 파일에서 많이 쓰는 것</h2>
          <p>프로젝트 안 JSON UI 파일을 모두 훑어보고, 자주 나오는 것만 아주 쉽게 요약했습니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>가장 많이 보이는 상자</h3>
            <ul class="token-list">
              <li><code>panel</code> 큰 상자</li>
              <li><code>stack_panel</code> 줄맞춤 상자</li>
              <li><code>image</code> 그림 상자</li>
            </ul>
          </div>
          <div class="card">
            <h3>바인딩 3형제</h3>
            <ul class="token-list">
              <li><code>view</code> 조건/계산</li>
              <li><code>collection</code> 반복 목록</li>
              <li><code>global</code> 게임이 주는 값</li>
            </ul>
            <p class="muted">collection에는 <code>collection_details</code>가 자주 붙습니다.</p>
          </div>
          <div class="card">
            <h3>자주 쓰는 바인딩 이름</h3>
            <ul class="token-list">
              <li><code>#visible</code> 보이기/숨기기</li>
              <li><code>#texture</code> 그림 바꾸기</li>
              <li><code>#enabled</code> 버튼 활성화</li>
              <li><code>#text</code> 글씨 변경</li>
              <li><code>#collection_length</code> 목록 길이</li>
            </ul>
          </div>
          <div class="card">
            <h3>애니메이션 4형제</h3>
            <ul class="token-list">
              <li><code>offset</code> 위치 이동</li>
              <li><code>alpha</code> 투명도</li>
              <li><code>size</code> 크기 변화</li>
              <li><code>wait</code> 잠시 대기</li>
            </ul>
          </div>
          <div class="card">
            <h3>자주 쓰는 렌더러</h3>
            <ul class="token-list">
              <li><code>gradient_renderer</code> 그라데이션</li>
              <li><code>live_player_renderer</code> 캐릭터 모델</li>
              <li><code>inventory_item_renderer</code> 아이템 렌더</li>
            </ul>
          </div>
          <div class="card">
            <h3>자주 쓰는 목록 이름</h3>
            <ul class="token-list">
              <li><code>form_buttons</code> 버튼 목록</li>
              <li><code>container_items</code> 아이템 칸</li>
              <li><code>hotbar_items</code> 핫바 슬롯</li>
            </ul>
          </div>
          <div class="card">
            <h3>자주 바꾸는 화면</h3>
            <ul class="token-list">
              <li><code>hud_screen</code> 화면 위 표시</li>
              <li><code>server_form</code> 서버 폼</li>
              <li><code>npc_interact</code> NPC 대화</li>
            </ul>
          </div>
        </div>
        <div class="callout tip">
          이 6가지를 먼저 익히면, 화면을 읽고 고치는 속도가 훨씬 빨라집니다.
        </div>
      </section>