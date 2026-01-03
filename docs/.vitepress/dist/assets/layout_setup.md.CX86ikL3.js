import { _ as _export_sfc, c as createElementBlock, o as openBlock, ae as createStaticVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"기초 준비","description":"","frontmatter":{"title":"기초 준비"},"headers":[],"relativePath":"layout/setup.md","filePath":"layout/setup.md"}');
const _sfc_main = { name: "layout/setup.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="setup" tabindex="-1">기초 준비 <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;기초 준비 {#setup}&quot;">​</a></h2><p>처음 시작할 때 필요한 것들을 간단하게 정리했습니다.</p><h3 id="리소스-팩" tabindex="-1">리소스 팩 <a class="header-anchor" href="#리소스-팩" aria-label="Permalink to &quot;리소스 팩&quot;">​</a></h3><p>JSON UI는 리소스 팩 안에 넣어야 게임에서 읽습니다.</p><h3 id="ui-폴더" tabindex="-1">UI 폴더 <a class="header-anchor" href="#ui-폴더" aria-label="Permalink to &quot;UI 폴더&quot;">​</a></h3><p>UI 파일은 보통 <code>ui</code> 폴더에 둡니다.</p><h3 id="화면-파일" tabindex="-1">화면 파일 <a class="header-anchor" href="#화면-파일" aria-label="Permalink to &quot;화면 파일&quot;">​</a></h3><p>HUD, 서버 폼, 인벤토리 같은 화면마다 파일이 다릅니다.</p><h3 id="테스트-습관" tabindex="-1">테스트 습관 <a class="header-anchor" href="#테스트-습관" aria-label="Permalink to &quot;테스트 습관&quot;">​</a></h3><p>한 번에 많이 바꾸지 말고, 한 줄씩 바꾸고 바로 테스트합니다.</p><p>처음에는 HUD 화면만 수정해 보는 것이 가장 빠르게 결과를 확인하는 방법입니다.</p><p>아주 기본적인 파일 뼈대</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>\n<span class="line"><span>  // 네임스페이스: 이 파일의 이름표</span></span>\n<span class="line"><span>  &quot;namespace&quot;: &quot;hello&quot;,</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>  // 화면에 넣을 패널</span></span>\n<span class="line"><span>  &quot;hello_root&quot;: {</span></span>\n<span class="line"><span>    &quot;type&quot;: &quot;panel&quot;,</span></span>\n<span class="line"><span>    &quot;size&quot;: [&quot;100%&quot;, &quot;100%&quot;]</span></span>\n<span class="line"><span>  }</span></span>\n<span class="line"><span>}</span></span></code></pre></div>', 13)
  ])]);
}
const setup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  setup as default
};
