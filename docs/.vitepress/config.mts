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
  appearance: true,
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
    outline: false,
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
          collapsed: true,
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
          text: '초보자 완벽 가이드',
          collapsed: true,
          items: [
            { text: '가이드 목차', link: '/guide/#beginner-guide' },
            {
              text: '초급',
              collapsed: true,
              items: [
                { text: '소개', link: '/guide/intro#intro' },
                { text: 'JSON이란?', link: '/guide/what-is-json#what-is-json' },
                { text: '기초 개념', link: '/guide/basics#basics' },
                { text: '첫 JSON UI 만들기', link: '/guide/getting-started#getting-started' },
                { text: '문제 해결 가이드', link: '/guide/troubleshooting#troubleshooting' },
                { text: '용어 사전', link: '/guide/glossary#glossary' }
              ]
            },
            {
              text: '중급',
              collapsed: true,
              items: [
                { text: '요소 타입 가이드', link: '/guide/elements#elements' },
                { text: '프로퍼티 가이드', link: '/guide/properties#properties' },
                { text: '레이아웃 시스템', link: '/guide/layout#layout' },
                { text: '데이터 바인딩', link: '/guide/bindings#bindings' },
                { text: 'HUD 튜토리얼', link: '/guide/hud-tutorial#hud-tutorial' },
                { text: 'NPC 대화창', link: '/guide/npc-dialog#npc-dialog' },
                { text: '버튼과 토글', link: '/guide/buttons-toggles#buttons-toggles' },
                { text: '실전 예제 모음', link: '/guide/examples#examples' }
              ]
            },
            {
              text: '고급',
              collapsed: true,
              items: [
                { text: '애니메이션', link: '/guide/animations#animations' },
                { text: '프로그레스 바', link: '/guide/progress-bar#progress-bar' }
              ]
            },
            {
              text: '전문가',
              collapsed: true,
              items: [
                { text: '서버 폼', link: '/guide/server-forms#server-forms' },
                { text: '데이터 보존', link: '/guide/preserve-data#preserve-data' },
                { text: '고급 기법/최적화', link: '/guide/advanced#advanced' }
              ]
            }
          ]
        },
        {
          text: '초보 입문',
          collapsed: true,
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
          collapsed: true,
          items: [
            { text: '기초 준비', link: '/layout/setup#setup' },
            { text: '첫 UI 만들기', link: '/layout/first-ui#first-ui' },
            { text: '초보 실습 10분', link: '/layout/mini-lab#mini-lab' },
            { text: '초보자 가이드 더보기', link: '/layout/guide-plus#guide-plus' },
            {
              text: '레이아웃 핵심',
              collapsed: true,
              items: [
                { text: '크기와 앵커', link: '/layout/layout#layout' },
                { text: '그리드', link: '/layout/grid#grid' },
                { text: '텍스처와 나인슬라이스', link: '/layout/textures#textures' },
                { text: '레이어', link: '/layout/layers#layers' },
                { text: 'Molang', link: '/layout/molang#molang' },
                { text: '변수 & 메모장', link: '/layout/variables#variables' },
                { text: 'ignored와 visible', link: '/layout/ignored#ignored' }
              ]
            },
            {
              text: '바인딩',
              collapsed: true,
              items: [
                { text: '바인딩 개요', link: '/layout/binding#binding' },
                { text: '바인딩 분류 목록', link: '/binding/#binding-index' },
                {
                  text: '분류별 바인딩',
                  collapsed: true,
                  items: [
                    { text: 'UI 표시/숨김', link: '/binding/category-01#binding-category' },
                    { text: 'UI 활성화/비활성화', link: '/binding/category-02#binding-category' },
                    { text: '가능 여부', link: '/binding/category-03#binding-category' },
                    { text: '개수/수량', link: '/binding/category-04#binding-category' },
                    { text: '기타', link: '/binding/category-05#binding-category' },
                    { text: '버튼', link: '/binding/category-06#binding-category' },
                    { text: '보유 여부', link: '/binding/category-07#binding-category' },
                    { text: '상태 확인', link: '/binding/category-08#binding-category' },
                    { text: '색상', link: '/binding/category-09#binding-category' },
                    { text: '아이템 정보', link: '/binding/category-10#binding-category' },
                    { text: '이름/식별자', link: '/binding/category-11#binding-category' },
                    { text: '이미지/텍스처', link: '/binding/category-12#binding-category' },
                    { text: '컬렉션/리스트', link: '/binding/category-13#binding-category' },
                    { text: '텍스트 표시', link: '/binding/category-14#binding-category' },
                    { text: '토글/스위치', link: '/binding/category-15#binding-category' },
                    { text: '포커스/네비게이션', link: '/binding/category-16#binding-category' },
                    { text: '플레이어 상태 - 경험치', link: '/binding/category-17#binding-category' },
                    { text: '플레이어 정보', link: '/binding/category-18#binding-category' }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: '확장/애니메이션',
          collapsed: true,
          items: [
            { text: '수정과 팩토리', link: '/advanced/modfactory#modfactory' },
            { text: '애니메이션', link: '/advanced/animation#animation' },
            { text: '사용 가능한 애니메이션', link: '/advanced/anims#anims' }
          ]
        },
        {
          text: '실전 적용',
          collapsed: true,
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
          collapsed: true,
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
