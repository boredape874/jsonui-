import { _ as _export_sfc, c as createElementBlock, o as openBlock, ae as createStaticVNode } from "./chunks/framework.DfhncZPL.js";
const __pageData = JSON.parse('{"title":"기초 개념","description":"","frontmatter":{"title":"기초 개념"},"headers":[],"relativePath":"intro/basics.md","filePath":"intro/basics.md"}');
const _sfc_main = { name: "intro/basics.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="basics" tabindex="-1">기초 개념 <a class="header-anchor" href="#basics" aria-label="Permalink to &quot;기초 개념 {#basics}&quot;">​</a></h2><p>처음 보는 사람도 이해할 수 있도록 쉬운 말로 정리했습니다.</p><h3 id="json-ui는-화면-설계도" tabindex="-1">JSON UI는 “화면 설계도” <a class="header-anchor" href="#json-ui는-화면-설계도" aria-label="Permalink to &quot;JSON UI는 “화면 설계도”&quot;">​</a></h3><p>텍스트 파일에 화면의 위치, 크기, 버튼을 적어두는 방식입니다.</p><h3 id="컨트롤은-레고-블록" tabindex="-1">컨트롤은 “레고 블록” <a class="header-anchor" href="#컨트롤은-레고-블록" aria-label="Permalink to &quot;컨트롤은 “레고 블록”&quot;">​</a></h3><p>panel, label, button 같은 블록을 쌓아서 화면을 만듭니다.</p><h3 id="바인딩은-연결선" tabindex="-1">바인딩은 “연결선” <a class="header-anchor" href="#바인딩은-연결선" aria-label="Permalink to &quot;바인딩은 “연결선”&quot;">​</a></h3><p>게임 데이터와 화면을 이어주는 선입니다.</p><table tabindex="0"><thead><tr><th>아주 쉬운 설명</th><th>실제 용어</th><th>예시</th></tr></thead><tbody><tr><td>투명한 상자</td><td>panel</td><td>다른 컨트롤을 담는 그릇</td></tr><tr><td>스티커 글씨</td><td>label</td><td>텍스트 출력</td></tr><tr><td>그림 판넬</td><td>image</td><td>텍스처 표시</td></tr><tr><td>스위치</td><td>button</td><td>클릭 동작</td></tr></tbody></table><h3 id="읽는-순서" tabindex="-1">읽는 순서 <a class="header-anchor" href="#읽는-순서" aria-label="Permalink to &quot;읽는 순서&quot;">​</a></h3><ul><li>namespace: 큰 폴더 이름</li><li>type: 어떤 블록인지</li><li>size/anchor: 크기와 위치</li><li>controls: 안에 들어갈 것들</li></ul><h3 id="초보자-실수-top-3" tabindex="-1">초보자 실수 TOP 3 <a class="header-anchor" href="#초보자-실수-top-3" aria-label="Permalink to &quot;초보자 실수 TOP 3&quot;">​</a></h3><ul><li>쉼표 하나 누락</li><li>따옴표를 빼먹기</li><li>controls 배열을 비워둠</li></ul><p>JSON UI는 주석을 사용할 수 있습니다. <code>//</code>로 왜 이렇게 작성했는지 설명을 남겨두면 좋아요.</p>', 14)
  ])]);
}
const basics = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  basics as default
};
