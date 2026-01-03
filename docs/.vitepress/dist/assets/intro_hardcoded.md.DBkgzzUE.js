import { _ as _export_sfc, c as createElementBlock, o as openBlock, ae as createStaticVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"하드코딩된 요소","description":"","frontmatter":{"title":"하드코딩된 요소"},"headers":[],"relativePath":"intro/hardcoded.md","filePath":"intro/hardcoded.md"}');
const _sfc_main = { name: "intro/hardcoded.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="hardcoded" tabindex="-1">하드코딩된 요소 <a class="header-anchor" href="#hardcoded" aria-label="Permalink to &quot;하드코딩된 요소 {#hardcoded}&quot;">​</a></h2><p>게임이 이미 정해둔 이름/규칙이 있습니다. 이건 바꾸면 연결이 끊깁니다.</p><h3 id="고정-바인딩-이름" tabindex="-1">고정 바인딩 이름 <a class="header-anchor" href="#고정-바인딩-이름" aria-label="Permalink to &quot;고정 바인딩 이름&quot;">​</a></h3><ul><li><code>#visible</code>, <code>#enabled</code>, <code>#text</code></li><li><code>#title_text</code>, <code>#texture</code></li><li><code>#collection_length</code>, <code>#clip_ratio</code></li><li><code>#item_id_aux</code> (아이템 렌더용)</li></ul><h3 id="고정-화면-이름" tabindex="-1">고정 화면 이름 <a class="header-anchor" href="#고정-화면-이름" aria-label="Permalink to &quot;고정 화면 이름&quot;">​</a></h3><ul><li><code>hud_screen</code>, <code>server_form</code></li><li><code>npc_interact</code>, <code>chat_screen</code></li><li><code>inventory_screen</code> 등</li></ul><p>이 이름을 바꾸면 화면이 안 붙습니다.</p><h3 id="고정-렌더러-이름" tabindex="-1">고정 렌더러 이름 <a class="header-anchor" href="#고정-렌더러-이름" aria-label="Permalink to &quot;고정 렌더러 이름&quot;">​</a></h3><ul><li><code>gradient_renderer</code></li><li><code>live_player_renderer</code></li><li><code>inventory_item_renderer</code></li></ul><h3 id="고정-버튼-id" tabindex="-1">고정 버튼 ID <a class="header-anchor" href="#고정-버튼-id" aria-label="Permalink to &quot;고정 버튼 ID&quot;">​</a></h3><ul><li><code>button.menu_select</code></li><li><code>button.menu_ok</code></li><li><code>button.menu_cancel</code></li></ul><p>버튼 ID는 게임이 미리 정해둔 값입니다.</p><p>일부 화면은 Ore UI로 이동 중이라 변경이 제한될 수 있습니다. 이름을 바꾸기보다 안쪽 내용만 바꾸는 것이 안전합니다.</p>', 13)
  ])]);
}
const hardcoded = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  hardcoded as default
};
