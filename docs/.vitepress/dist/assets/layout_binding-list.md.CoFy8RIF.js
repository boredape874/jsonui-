import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"바인딩 목록","description":"","frontmatter":{"title":"바인딩 목록","outline":false},"headers":[],"relativePath":"layout/binding-list.md","filePath":"layout/binding-list.md"}');
const _sfc_main = { name: "layout/binding-list.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "binding-list",
      tabindex: "-1"
    }, [
      createTextVNode("바인딩 목록 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#binding-list",
        "aria-label": 'Permalink to "바인딩 목록 {#binding-list}"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "바인딩 목록을 분류별로 나눠 최적화했습니다.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("a", { href: "./../binding/index.html#binding-index" }, "분류별 바인딩 목록 열기")
    ], -1)
  ])]);
}
const bindingList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  bindingList as default
};
