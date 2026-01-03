import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"검색","description":"","frontmatter":{"title":"검색"},"headers":[],"relativePath":"start/search.md","filePath":"start/search.md"}');
const _sfc_main = { name: "start/search.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h2", {
      id: "search",
      tabindex: "-1"
    }, [
      createTextVNode("검색 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#search",
        "aria-label": 'Permalink to "검색 {#search}"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "궁금한 단어를 입력하면 관련 섹션을 빠르게 찾을 수 있습니다.", -1),
    createBaseVNode("p", null, "2글자 이상 입력", -1),
    createBaseVNode("p", null, "검색 결과가 여기에 표시됩니다.", -1)
  ])]);
}
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  search as default
};
