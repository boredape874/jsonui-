import { _ as _export_sfc, c as createElementBlock, o as openBlock, ae as createStaticVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"포커스 이동","description":"","frontmatter":{"title":"포커스 이동"},"headers":[],"relativePath":"practice/focus.md","filePath":"practice/focus.md"}');
const _sfc_main = { name: "practice/focus.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="focus" tabindex="-1">포커스 이동 <a class="header-anchor" href="#focus" aria-label="Permalink to &quot;포커스 이동 {#focus}&quot;">​</a></h2><p>컨트롤러/키보드에서 이동할 버튼 경로를 지정합니다.</p><p>포커스 네비게이션 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;start_button&quot;: {</span></span>\n<span class="line"><span>  &quot;type&quot;: &quot;button&quot;,</span></span>\n<span class="line"><span>  &quot;focus_identifier&quot;: &quot;start&quot;,</span></span>\n<span class="line"><span>  &quot;default_focus_precedence&quot;: 1,</span></span>\n<span class="line"><span>  &quot;focus_change_down&quot;: &quot;settings&quot;</span></span>\n<span class="line"><span>},</span></span>\n<span class="line"><span>&quot;settings_button&quot;: {</span></span>\n<span class="line"><span>  &quot;type&quot;: &quot;button&quot;,</span></span>\n<span class="line"><span>  &quot;focus_identifier&quot;: &quot;settings&quot;,</span></span>\n<span class="line"><span>  &quot;focus_change_up&quot;: &quot;start&quot;</span></span>\n<span class="line"><span>}</span></span></code></pre></div><p>포커스가 안 잡히면 <code>focus_enabled</code>나 버튼 가려짐 여부를 먼저 확인하세요.</p>', 5)
  ])]);
}
const focus = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  focus as default
};
