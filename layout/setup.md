---
title: 기초 준비
---

<section id="setup" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>기초 준비</h2>
          <p>처음 시작할 때 필요한 것들을 간단하게 정리했습니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>리소스 팩</h3>
            <p>JSON UI는 리소스 팩 안에 넣어야 게임에서 읽습니다.</p>
          </div>
          <div class="card">
            <h3>UI 폴더</h3>
            <p>UI 파일은 보통 <code>ui</code> 폴더에 둡니다.</p>
          </div>
          <div class="card">
            <h3>화면 파일</h3>
            <p>HUD, 서버 폼, 인벤토리 같은 화면마다 파일이 다릅니다.</p>
          </div>
          <div class="card">
            <h3>테스트 습관</h3>
            <p>한 번에 많이 바꾸지 말고, 한 줄씩 바꾸고 바로 테스트합니다.</p>
          </div>
        </div>
        <div class="callout tip">
          처음에는 HUD 화면만 수정해 보는 것이 가장 빠르게 결과를 확인하는 방법입니다.
        </div>
        <div class="code-block">
          <div class="code-title">아주 기본적인 파일 뼈대</div>
          <pre><code>{
  // 네임스페이스: 이 파일의 이름표
  "namespace": "hello",

  // 화면에 넣을 패널
  "hello_root": {
    "type": "panel",
    "size": ["100%", "100%"]
  }
}</code></pre>
        </div>
      </section>