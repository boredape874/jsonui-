import { _ as _export_sfc, c as createElementBlock, o as openBlock, ae as createStaticVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"레이어 (겹침 순서)","description":"","frontmatter":{"title":"레이어 (겹침 순서)"},"headers":[],"relativePath":"layout/layers.md","filePath":"layout/layers.md"}');
const _sfc_main = { name: "layout/layers.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="layers" tabindex="-1">레이어 (겹침 순서) <a class="header-anchor" href="#layers" aria-label="Permalink to &quot;레이어 (겹침 순서) {#layers}&quot;">​</a></h2><p>레이어는 “위/아래 순서표”입니다. 숫자가 클수록 위에 보입니다.</p><h3 id="기본-규칙" tabindex="-1">기본 규칙 <a class="header-anchor" href="#기본-규칙" aria-label="Permalink to &quot;기본 규칙&quot;">​</a></h3><ul><li>기본값은 0</li><li>큰 숫자가 위</li><li>같은 layer면 controls 순서가 우선</li></ul><h3 id="초보자-팁" tabindex="-1">초보자 팁 <a class="header-anchor" href="#초보자-팁" aria-label="Permalink to &quot;초보자 팁&quot;">​</a></h3><ul><li>0~10 안에서만 써도 충분</li><li>배경 1, 내용 5, 강조 10</li></ul><p>레이어로 겹침 순서 정하기</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;background&quot;: {</span></span>\n<span class="line"><span>  &quot;type&quot;: &quot;image&quot;,</span></span>\n<span class="line"><span>  &quot;texture&quot;: &quot;textures/ui/Black&quot;,</span></span>\n<span class="line"><span>  &quot;layer&quot;: 1</span></span>\n<span class="line"><span>},</span></span>\n<span class="line"><span>&quot;content&quot;: {</span></span>\n<span class="line"><span>  &quot;type&quot;: &quot;panel&quot;,</span></span>\n<span class="line"><span>  &quot;layer&quot;: 5</span></span>\n<span class="line"><span>},</span></span>\n<span class="line"><span>&quot;tooltip&quot;: {</span></span>\n<span class="line"><span>  &quot;type&quot;: &quot;label&quot;,</span></span>\n<span class="line"><span>  &quot;text&quot;: &quot;도움말&quot;,</span></span>\n<span class="line"><span>  &quot;layer&quot;: 10</span></span>\n<span class="line"><span>}</span></span></code></pre></div><p>layer가 같을 때는 controls 배열에서 뒤에 있는 것이 위에 보입니다.</p>', 9)
  ])]);
}
const layers = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  layers as default
};
