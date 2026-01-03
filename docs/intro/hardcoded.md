---
title: 하드코딩된 요소
---

<section id="hardcoded" class="section reveal" data-section data-group="intro">
        <div class="section-head">
          <h2>하드코딩된 요소</h2>
          <p>게임이 이미 정해둔 이름/규칙이 있습니다. 이건 바꾸면 연결이 끊깁니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>고정 바인딩 이름</h3>
            <ul class="nested-list">
              <li><code>#visible</code>, <code>#enabled</code>, <code>#text</code></li>
              <li><code>#title_text</code>, <code>#texture</code></li>
              <li><code>#collection_length</code>, <code>#clip_ratio</code></li>
              <li><code>#item_id_aux</code> (아이템 렌더용)</li>
            </ul>
          </div>
          <div class="card">
            <h3>고정 화면 이름</h3>
            <ul class="nested-list">
              <li><code>hud_screen</code>, <code>server_form</code></li>
              <li><code>npc_interact</code>, <code>chat_screen</code></li>
              <li><code>inventory_screen</code> 등</li>
            </ul>
            <p class="muted">이 이름을 바꾸면 화면이 안 붙습니다.</p>
          </div>
          <div class="card">
            <h3>고정 렌더러 이름</h3>
            <ul class="nested-list">
              <li><code>gradient_renderer</code></li>
              <li><code>live_player_renderer</code></li>
              <li><code>inventory_item_renderer</code></li>
            </ul>
          </div>
          <div class="card">
            <h3>고정 버튼 ID</h3>
            <ul class="nested-list">
              <li><code>button.menu_select</code></li>
              <li><code>button.menu_ok</code></li>
              <li><code>button.menu_cancel</code></li>
            </ul>
            <p class="muted">버튼 ID는 게임이 미리 정해둔 값입니다.</p>
          </div>
        </div>
        <div class="callout warn">
          일부 화면은 Ore UI로 이동 중이라 변경이 제한될 수 있습니다. 이름을 바꾸기보다 안쪽 내용만 바꾸는 것이 안전합니다.
        </div>
      </section>