---
title: 마인크래프트 베드락 에디션 JSON UI 통합 가이드
---

<header class="hero" id="overview" data-section>
    <div class="hero-inner">
      <div class="hero-copy">
        <div class="eyebrow">Minecraft Bedrock Edition ? JSON UI Guide ? 2026-01</div>
        <h1>마인크래프트 베드락 에디션 JSON UI 통합 가이드</h1>
        <p>
          코딩이 처음이라도 이해할 수 있게, JSON과 UI의 최소 규칙만 알려드립니다.
        </p>
        <div class="hero-actions">
          <a class="btn primary" href="intro/quickstart.html#quickstart">빠른 시작</a>
          <a class="btn ghost" href="practice/case-studies.html#examples">실전 케이스 스터디</a>
        </div>
        <div class="hero-chips">
          <span class="chip">초보 입문</span><span class="chip">레이아웃/연결</span><span class="chip">확장/애니메이션</span><span class="chip">실전 적용</span><span class="chip">바인딩</span>
          <span class="chip">ScriptAPI</span>
        </div>
      </div>
      <div class="hero-card">
        <h2>시작 안내</h2>
        <ul>
          <li>개요</li><li>검색</li><li>리소스</li>
        </ul>
        <div class="hero-divider"></div>
        <h3>초보 입문</h3>
        <ul>
          <li>완전 기초 0단계</li><li>빠른 시작</li><li>기초 개념</li>
        </ul>
        <div class="hero-stats">
          <div>
            <span class="stat-label">작성</span>
            <span class="stat-value">보드</span>
          </div>
          <div>
            <span class="stat-label">버전</span>
            <span class="stat-value">2026-01</span>
          </div>
        </div>
      </div>
    </div>
  </header>
<section id="home-map" class="section reveal" data-section data-group="global">
  <div class="section-head">
    <h2>문서 지도</h2>
    <p>코드를 이해하기 쉽게 설명을 덧붙였습니다.</p>
  </div>
  <div class="card-grid"><div class="card">
  <h3>시작 안내</h3>
  <ul class="nested-list"><li><a href="index.html#overview">개요</a></li>
<li><a href="start/search.html#search">검색</a></li>
<li><a href="start/resources.html#resources">리소스</a></li>
<li><a href="start/showcase.html#showcase">실제 사례 미리보기</a></li>
<li><a href="start/videos.html#videos">영상으로 배우기</a></li>
<li><a href="examples/examples.html#example-map">예제 지도</a></li>
<li><a href="examples/examples.html#example-index">예제 전체 목록</a></li>
<li><a href="examples/examples.html#example-view">예제 미리보기</a></li></ul></div>
<div class="card">
  <h3>초보 입문</h3>
  <ul class="nested-list"><li><a href="intro/zero.html#zero">완전 기초 0단계</a></li>
<li><a href="intro/quickstart.html#quickstart">빠른 시작</a></li>
<li><a href="intro/basics.html#basics">기초 개념</a></li>
<li><a href="intro/controls.html#controls">컨트롤 아주 쉽게</a></li>
<li><a href="intro/realworld.html#realworld">실제 파일에서 많이 쓰는 것</a></li>
<li><a href="intro/syntax.html#syntax">문법과 규칙</a></li>
<li><a href="intro/hardcoded.html#hardcoded">하드코딩된 요소</a></li></ul></div>
<div class="card">
  <h3>레이아웃/연결</h3>
  <ul class="nested-list"><li><a href="layout/setup.html#setup">기초 준비</a></li>
<li><a href="layout/first-ui.html#first-ui">첫 UI 만들기</a></li>
<li><a href="layout/mini-lab.html#mini-lab">초보 실습 10분</a></li>
<li><a href="layout/guide-plus.html#guide-plus">초보자 가이드 더보기</a></li>
<li><a href="layout/layout.html#layout">크기와 앵커</a></li>
<li><a href="layout/grid.html#grid">그리드</a></li>
<li><a href="layout/textures.html#textures">텍스처와 나인슬라이스</a></li>
<li><a href="layout/layers.html#layers">레이어</a></li>
<li><a href="layout/binding.html#binding">바인딩</a></li>
<li><a href="layout/molang.html#molang">Molang</a></li>
<li><a href="layout/variables.html#variables">변수 &amp; 메모장</a></li>
<li><a href="layout/ignored.html#ignored">ignored와 visible</a></li></ul></div>
<div class="card">
  <h3>확장/애니메이션</h3>
  <ul class="nested-list"><li><a href="advanced/modfactory.html#modfactory">수정과 팩토리</a></li>
<li><a href="advanced/animation.html#animation">애니메이션</a></li>
<li><a href="advanced/anims.html#anims">사용 가능한 애니메이션</a></li></ul></div>
<div class="card">
  <h3>실전 적용</h3>
  <ul class="nested-list"><li><a href="practice/patterns.html#patterns">실전 패턴</a></li>
<li><a href="practice/input-mappings.html#input-mappings">입력 매핑</a></li>
<li><a href="practice/focus.html#focus">포커스 이동</a></li>
<li><a href="practice/case-studies.html#examples">실전 케이스 스터디</a></li>
<li><a href="practice/starlib.html#starlib">StarLib 예제</a></li>
<li><a href="practice/scriptapi.html#scriptapi">ScriptAPI 연동</a></li></ul></div>
<div class="card">
  <h3>관리/기타</h3>
  <ul class="nested-list"><li><a href="misc/platform.html#platform">플랫폼/입력 차이</a></li>
<li><a href="misc/performance.html#performance">성능과 디버깅</a></li>
<li><a href="misc/faq.html#faq">자주 묻는 질문</a></li>
<li><a href="misc/glossary.html#glossary">용어</a></li>
<li><a href="misc/checklist.html#checklist">체크리스트</a></li></ul></div>
  </div>
  <div class="callout tip">
    실제 예제 분석을 기반으로 구성되었습니다.
  </div>
</section>
