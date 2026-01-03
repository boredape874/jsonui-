import { _ as _export_sfc, c as createElementBlock, o as openBlock, ae as createStaticVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"크기와 앵커","description":"","frontmatter":{"title":"크기와 앵커"},"headers":[],"relativePath":"layout/layout.md","filePath":"layout/layout.md"}');
const _sfc_main = { name: "layout/layout.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="layout" tabindex="-1">크기와 앵커 <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;크기와 앵커 {#layout}&quot;">​</a></h2><p>퍼센트/픽셀/콘텐츠 기반 크기를 혼합하고, 9-포인트 앵커로 정밀 배치합니다.</p><h3 id="크기-표현식" tabindex="-1">크기 표현식 <a class="header-anchor" href="#크기-표현식" aria-label="Permalink to &quot;크기 표현식&quot;">​</a></h3><ul><li><code>100%</code> 부모 기준</li><li><code>100% - 8px</code> 계산식</li><li><code>100%c</code> 콘텐츠 기준</li><li><code>100%y</code> 높이 기준 비율 유지</li><li><code>100%x</code> 너비 기준 비율 유지</li><li><code>fill</code> stack_panel에서만 남은 공간 채움</li><li><code>[32, 32]</code> 고정 픽셀</li></ul><h3 id="anchor-9-point" tabindex="-1">Anchor 9-Point <a class="header-anchor" href="#anchor-9-point" aria-label="Permalink to &quot;Anchor 9-Point&quot;">​</a></h3><p>top_left top_middle top_right left_middle center right_middle bottom_left bottom_middle bottom_right</p><p>anchor와 offset을 함께 써서 반응형 배치를 만듭니다.</p><p>앵커 배치 예시</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;close_button&quot;: {</span></span>\n<span class="line"><span>  &quot;anchor_from&quot;: &quot;top_right&quot;,</span><span> // 어디에서 시작할지</span></span>\n<span class="line"><span>  &quot;anchor_to&quot;: &quot;top_right&quot;,</span><span>   // 어디에 붙일지</span></span>\n<span class="line"><span>  &quot;offset&quot;: [-3, 3]</span><span>           // 살짝 이동</span></span>\n<span class="line"><span>}</span></span></code></pre></div>', 9)
  ])]);
}
const layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  layout as default
};
