import{_ as d,c as o,o as c,ag as r}from"./chunks/framework.dvv-DFtf.js";const u=JSON.parse('{"title":"하드코딩된 요소","description":"","frontmatter":{"title":"하드코딩된 요소"},"headers":[],"relativePath":"intro/hardcoded.md","filePath":"intro/hardcoded.md"}'),t={name:"intro/hardcoded.md"};function n(i,e,l,p,a,_){return c(),o("div",null,[...e[0]||(e[0]=[r(`<h2 id="hardcoded" tabindex="-1">하드코딩된 요소 <a class="header-anchor" href="#hardcoded" aria-label="Permalink to &quot;하드코딩된 요소 {#hardcoded}&quot;">​</a></h2><p>게임이 이미 정해둔 이름/규칙이 있습니다. 이건 바꾸면 연결이 끊깁니다.</p><pre><code>        ### 고정 바인딩 이름
</code></pre><ul><li><p><code>#visible</code>, <code>#enabled</code>, <code>#text</code></p></li><li><p><code>#title_text</code>, <code>#texture</code></p></li><li><p><code>#collection_length</code>, <code>#clip_ratio</code></p></li><li><p><code>#item_id_aux</code> (아이템 렌더용)</p><pre><code>      ### 고정 화면 이름
</code></pre></li><li><p><code>hud_screen</code>, <code>server_form</code></p></li><li><p><code>npc_interact</code>, <code>chat_screen</code></p></li><li><p><code>inventory_screen</code> 등</p><pre><code>      이 이름을 바꾸면 화면이 안 붙습니다.




      ### 고정 렌더러 이름
</code></pre></li><li><p><code>gradient_renderer</code></p></li><li><p><code>live_player_renderer</code></p></li><li><p><code>inventory_item_renderer</code></p><pre><code>      ### 고정 버튼 ID
</code></pre></li><li><p><code>button.menu_select</code></p></li><li><p><code>button.menu_ok</code></p></li><li><p><code>button.menu_cancel</code></p><pre><code>      버튼 ID는 게임이 미리 정해둔 값입니다.






    일부 화면은 Ore UI로 이동 중이라 변경이 제한될 수 있습니다. 이름을 바꾸기보다 안쪽 내용만 바꾸는 것이 안전합니다.
</code></pre></li></ul>`,4)])])}const h=d(t,[["render",n]]);export{u as __pageData,h as default};
