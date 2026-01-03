import { defineConfig } from 'vitepress'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.VITEPRESS_BASE ?? (repoName ? `/${repoName}/` : '/')

export default defineConfig({
  lang: 'ko-KR',
  title: '마인크래프트 베드락 에디션 JSON UI 통합 가이드',
  description: '초보자도 이해할 수 있도록 쉽게 풀어쓴 JSON UI 통합 가이드',
  cleanUrls: false,
  // Update this if the GitHub Pages repo name changes.
  base,
  appearance: false,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
      }
    ]
  ],
  themeConfig: {
    siteTitle: 'JSON UI 통합 가이드',
    outline: 'deep',
    outlineTitle: '이 페이지 목차',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '시작', link: '/#overview' },
      { text: '초보 입문', link: '/intro/zero#zero' },
      { text: '레이아웃', link: '/layout/setup#setup' },
      { text: '실전', link: '/practice/patterns#patterns' },
      { text: '예제', link: '/examples/examples#example-map' }
    ],
    sidebar: {
      '/': [
        {
          text: '시작 안내',
          items: [
            { text: '개요', link: '/#overview' },
            { text: '검색', link: '/start/search#search' },
            { text: '리소스', link: '/start/resources#resources' },
            { text: '실제 사례 미리보기', link: '/start/showcase#showcase' },
            { text: '영상으로 배우기', link: '/start/videos#videos' },
            { text: '예제 지도', link: '/examples/examples#example-map' },
            { text: '예제 전체 목록', link: '/examples/examples#example-index' },
            { text: '예제 미리보기', link: '/examples/examples#example-view' }
          ]
        },
        {
          text: '초보 입문',
          items: [
            { text: '완전 기초 0단계', link: '/intro/zero#zero' },
            { text: '빠른 시작', link: '/intro/quickstart#quickstart' },
            { text: '기초 개념', link: '/intro/basics#basics' },
            { text: '컨트롤 아주 쉽게', link: '/intro/controls#controls' },
            { text: '실제 파일에서 많이 쓰는 것', link: '/intro/realworld#realworld' },
            { text: '문법과 규칙', link: '/intro/syntax#syntax' },
            { text: '하드코딩된 요소', link: '/intro/hardcoded#hardcoded' }
          ]
        },
        {
          text: '레이아웃/연결',
          items: [
            { text: '기초 준비', link: '/layout/setup#setup' },
            { text: '첫 UI 만들기', link: '/layout/first-ui#first-ui' },
            { text: '초보 실습 10분', link: '/layout/mini-lab#mini-lab' },
            { text: '초보자 가이드 더보기', link: '/layout/guide-plus#guide-plus' },
            { text: '크기와 앵커', link: '/layout/layout#layout' },
            { text: '그리드', link: '/layout/grid#grid' },
            { text: '텍스처와 나인슬라이스', link: '/layout/textures#textures' },
            { text: '레이어', link: '/layout/layers#layers' },
            { text: '바인딩', link: '/layout/binding#binding' },
            { text: 'Molang', link: '/layout/molang#molang' },
            { text: '변수 & 메모장', link: '/layout/variables#variables' },
            { text: 'ignored와 visible', link: '/layout/ignored#ignored' }
          ]
        },
        {
          text: '확장/애니메이션',
          items: [
            { text: '수정과 팩토리', link: '/advanced/modfactory#modfactory' },
            { text: '애니메이션', link: '/advanced/animation#animation' },
            { text: '사용 가능한 애니메이션', link: '/advanced/anims#anims' }
          ]
        },
        {
          text: '실전 적용',
          items: [
            { text: '실전 패턴', link: '/practice/patterns#patterns' },
            { text: '입력 매핑', link: '/practice/input-mappings#input-mappings' },
            { text: '포커스 이동', link: '/practice/focus#focus' },
            { text: '실전 케이스 스터디', link: '/practice/case-studies#examples' },
            { text: 'StarLib 예제', link: '/practice/starlib#starlib' },
            { text: 'ScriptAPI 연동', link: '/practice/scriptapi#scriptapi' }
          ]
        },
        {
          text: '관리/기타',
          items: [
            { text: '플랫폼/입력 차이', link: '/misc/platform#platform' },
            { text: '성능과 디버깅', link: '/misc/performance#performance' },
            { text: '자주 묻는 질문', link: '/misc/faq#faq' },
            { text: '용어', link: '/misc/glossary#glossary' },
            { text: '체크리스트', link: '/misc/checklist#checklist' }
          ]
        }
      ]
    }
  }
})
