import { _ as _export_sfc, c as createElementBlock, o as openBlock, ae as createStaticVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"입력 매핑","description":"","frontmatter":{"title":"입력 매핑"},"headers":[],"relativePath":"practice/input-mappings.md","filePath":"practice/input-mappings.md"}');
const _sfc_main = { name: "practice/input-mappings.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="input-mappings" tabindex="-1">입력 매핑 <a class="header-anchor" href="#input-mappings" aria-label="Permalink to &quot;입력 매핑 {#input-mappings}&quot;">​</a></h2><p>버튼이 눌리는 이유는 button_mappings 덕분입니다. 입력을 버튼 동작에 연결합니다.</p><p>기본 매핑 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;my_button&quot;: {</span></span>\n<span class="line"><span>  &quot;type&quot;: &quot;button&quot;,</span></span>\n<span class="line"><span>  &quot;button_mappings&quot;: [</span></span>\n<span class="line"><span>    {</span></span>\n<span class="line"><span>      &quot;from_button_id&quot;: &quot;button.menu_select&quot;,</span></span>\n<span class="line"><span>      &quot;to_button_id&quot;: &quot;button.menu_ok&quot;,</span></span>\n<span class="line"><span>      &quot;mapping_type&quot;: &quot;pressed&quot;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>  ]</span></span>\n<span class="line"><span>}</span></span></code></pre></div><h3 id="자주-쓰는-from-button-id" tabindex="-1">자주 쓰는 from_button_id <a class="header-anchor" href="#자주-쓰는-from-button-id" aria-label="Permalink to &quot;자주 쓰는 from_button_id&quot;">​</a></h3><ul><li>button.menu_select (기본 선택)</li><li>button.menu_ok (확인)</li><li>button.menu_cancel (취소)</li><li>button.menu_tab_left / right</li></ul><h3 id="mapping-type" tabindex="-1">mapping_type <a class="header-anchor" href="#mapping-type" aria-label="Permalink to &quot;mapping_type&quot;">​</a></h3><ul><li>pressed: 눌렀을 때</li><li>focused: 포커스될 때</li><li>global: 포커스 없이 동작</li></ul>', 8)
  ])]);
}
const inputMappings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  inputMappings as default
};
