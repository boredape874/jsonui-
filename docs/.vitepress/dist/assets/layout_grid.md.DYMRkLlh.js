import { _ as _export_sfc, c as createElementBlock, o as openBlock, ae as createStaticVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"그리드","description":"","frontmatter":{"title":"그리드"},"headers":[],"relativePath":"layout/grid.md","filePath":"layout/grid.md"}');
const _sfc_main = { name: "layout/grid.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="grid" tabindex="-1">그리드 <a class="header-anchor" href="#grid" aria-label="Permalink to &quot;그리드 {#grid}&quot;">​</a></h2><p>칸칸이 배치하는 방식입니다. 인벤토리 슬롯처럼 일정한 배열이 필요할 때 씁니다.</p><p>3x3 그리드 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;my_grid&quot;: {</span></span>\n<span class="line"><span>  &quot;type&quot;: &quot;grid&quot;,</span></span>\n<span class="line"><span>  &quot;grid_dimensions&quot;: [3, 3],</span></span>\n<span class="line"><span>  &quot;controls&quot;: [</span></span>\n<span class="line"><span>    { &quot;slot_0@common.button&quot;: { &quot;grid_position&quot;: [0, 0] } },</span></span>\n<span class="line"><span>    { &quot;slot_1@common.button&quot;: { &quot;grid_position&quot;: [1, 0] } },</span></span>\n<span class="line"><span>    { &quot;slot_2@common.button&quot;: { &quot;grid_position&quot;: [2, 0] } }</span></span>\n<span class="line"><span>  ]</span></span>\n<span class="line"><span>}</span></span></code></pre></div><ul><li><code>grid_dimensions</code> 가로/세로 칸 수</li><li><code>grid_position</code> 각 요소의 위치 [x, y]</li><li>칸을 넘기면 화면 밖으로 밀립니다</li></ul>', 5)
  ])]);
}
const grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  grid as default
};
