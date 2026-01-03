---
title: 🚀 첫 번째 JSON UI 만들기
---

# 🚀 첫 번째 JSON UI 만들기 {#getting-started}

> ???: 초급

<p>이제 실제로 JSON UI를 만들어 봅시다! 단계별로 천천히 따라해 보세요.</p>

<div class="alert-box alert-info">
이 튜토리얼을 따라하면 게임 화면에 "안녕하세요!"라는 노란색 텍스트가 표시됩니다.
</div>

<div class="step-guide">
<div class="step-item">
<div class="step-number">1</div>
<div class="step-content">
<h4>리소스 팩 폴더 만들기</h4>
<p>먼저 리소스 팩을 저장할 폴더를 만듭니다.</p>
<div class="alert-box alert-tip">
<strong>폴더 위치:</strong><br>
Windows: <code>C:\Users\사용자명\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\resource_packs\</code><br>
Android: <code>내부저장소/games/com.mojang/resource_packs/</code>
</div>
<p>이 위치에 <code>MyFirstUI</code> 같은 이름으로 폴더를 만드세요.</p>
</div>
</div>

<div class="step-item">
<div class="step-number">2</div>
<div class="step-content">
<h4>manifest.json 파일 만들기</h4>
<p>리소스 팩의 정보를 담는 파일입니다. 메모장으로 만들 수 있어요.</p>
<div class="code-header">MyFirstUI/manifest.json</div>
<pre><code>{
  <span style="color: #8b949e;">// 파일 형식 버전 (항상 2로 설정)</span>
  <span style="color: #79c0ff;">"format_version"</span>: <span style="color: #79c0ff;">2</span>,
  <span style="color: #8b949e;">// 리소스 팩 기본 정보</span>
  <span style="color: #79c0ff;">"header"</span>: {
    <span style="color: #8b949e;">// 팩 이름 (게임 내에서 표시됨)</span>
    <span style="color: #79c0ff;">"name"</span>: <span style="color: #a5d6ff;">"나의 첫 JSON UI"</span>,
    <span style="color: #8b949e;">// 팩 설명</span>
    <span style="color: #79c0ff;">"description"</span>: <span style="color: #a5d6ff;">"HUD에 텍스트 추가하기"</span>,
    <span style="color: #8b949e;">// 고유 ID (온라인에서 UUID 생성기로 만들기)</span>
    <span style="color: #79c0ff;">"uuid"</span>: <span style="color: #a5d6ff;">"12345678-1234-1234-1234-123456789abc"</span>,
    <span style="color: #8b949e;">// 버전 [큰버전, 중간버전, 작은버전]</span>
    <span style="color: #79c0ff;">"version"</span>: [<span style="color: #79c0ff;">1</span>, <span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">0</span>],
    <span style="color: #8b949e;">// 필요한 최소 게임 버전</span>
    <span style="color: #79c0ff;">"min_engine_version"</span>: [<span style="color: #79c0ff;">1</span>, <span style="color: #79c0ff;">19</span>, <span style="color: #79c0ff;">0</span>]
  },
  <span style="color: #8b949e;">// 모듈 정보 (리소스 팩임을 알림)</span>
  <span style="color: #79c0ff;">"modules"</span>: [
    {
      <span style="color: #8b949e;">// 타입: resources (리소스 팩)</span>
      <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"resources"</span>,
      <span style="color: #8b949e;">// 모듈의 고유 ID (위의 uuid와 달라야 함!)</span>
      <span style="color: #79c0ff;">"uuid"</span>: <span style="color: #a5d6ff;">"87654321-4321-4321-4321-cba987654321"</span>,
      <span style="color: #8b949e;">// 모듈 버전</span>
      <span style="color: #79c0ff;">"version"</span>: [<span style="color: #79c0ff;">1</span>, <span style="color: #79c0ff;">0</span>, <span style="color: #79c0ff;">0</span>]
    }
  ]
}</code></pre>
<div class="alert-box alert-warning">
<strong>중요!</strong> UUID는 온라인 UUID 생성기(<code>uuidgenerator.net</code>)에서 생성하세요.
위의 예시 UUID를 그대로 사용하면 안 됩니다!
</div>
</div>
</div>

<div class="step-item">
<div class="step-number">3</div>
<div class="step-content">
<h4>ui 폴더 만들기</h4>
<p>리소스 팩 폴더 안에 <code>ui</code> 폴더를 만듭니다.</p>
<div class="code-header">폴더 구조</div>
<pre><code>MyFirstUI/
├── manifest.json  <span style="color: #8b949e;">← 방금 만든 파일</span>
└── ui/            <span style="color: #8b949e;">← 새로 만들 폴더</span></code></pre>
</div>
</div>

<div class="step-item">
<div class="step-number">4</div>
<div class="step-content">
<h4>_ui_defs.json 파일 만들기</h4>
<p>이 파일은 어떤 UI 파일들을 로드할지 알려줍니다.</p>
<div class="code-header">MyFirstUI/ui/_ui_defs.json</div>
<pre><code>{
  <span style="color: #8b949e;">// 로드할 UI 파일 목록</span>
  <span style="color: #79c0ff;">"ui_defs"</span>: [
    <span style="color: #8b949e;">// hud_screen.json 파일을 로드</span>
    <span style="color: #a5d6ff;">"ui/hud_screen.json"</span>
  ]
}</code></pre>
</div>
</div>

<div class="step-item">
<div class="step-number">5</div>
<div class="step-content">
<h4>hud_screen.json 파일 만들기</h4>
<p>실제 UI를 만드는 파일입니다!</p>
<div class="code-header">MyFirstUI/ui/hud_screen.json</div>
<pre><code>{
  <span style="color: #8b949e;">// ===== 파일의 네임스페이스 (이름표) =====</span>
  <span style="color: #79c0ff;">"namespace"</span>: <span style="color: #a5d6ff;">"hud"</span>,
  <span style="color: #8b949e;">// ===== 우리가 만들 텍스트 요소 =====</span>
  <span style="color: #79c0ff;">"hello_text"</span>: {
    <span style="color: #8b949e;">// 요소 타입: label = 글자 표시</span>
    <span style="color: #79c0ff;">"type"</span>: <span style="color: #a5d6ff;">"label"</span>,
    <span style="color: #8b949e;">// 표시할 글자</span>
    <span style="color: #79c0ff;">"text"</span>: <span style="color: #a5d6ff;">"안녕하세요!"</span>,
    <span style="color: #8b949e;">// 글자 색상 [빨강, 초록, 파랑] - 0.0~1.0 사이 값</span>
    <span style="color: #8b949e;">// 1.0, 1.0, 0.0 = 노란색</span>
    <span style="color: #79c0ff;">"color"</span>: [<span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">1.0</span>, <span style="color: #79c0ff;">0.0</span>],
    <span style="color: #8b949e;">// 글자에 그림자 넣기</span>
    <span style="color: #79c0ff;">"shadow"</span>: <span style="color: #79c0ff;">true</span>,
    <span style="color: #8b949e;">// 부모 화면의 왼쪽 위 모서리에</span>
    <span style="color: #79c0ff;">"anchor_from"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #8b949e;">// 이 요소의 왼쪽 위 모서리를 붙임</span>
    <span style="color: #79c0ff;">"anchor_to"</span>: <span style="color: #a5d6ff;">"top_left"</span>,
    <span style="color: #8b949e;">// 위치 조정 [오른쪽으로 10픽셀, 아래로 10픽셀]</span>
    <span style="color: #79c0ff;">"offset"</span>: [<span style="color: #79c0ff;">10</span>, <span style="color: #79c0ff;">10</span>]
  },
  <span style="color: #8b949e;">// ===== HUD의 최상위 패널 수정 =====</span>
  <span style="color: #79c0ff;">"root_panel"</span>: {
    <span style="color: #8b949e;">// modifications: 기존 UI를 수정하는 부분</span>
    <span style="color: #79c0ff;">"modifications"</span>: [
      {
        <span style="color: #8b949e;">// controls 배열을 수정할 거예요</span>
        <span style="color: #79c0ff;">"array_name"</span>: <span style="color: #a5d6ff;">"controls"</span>,
        <span style="color: #8b949e;">// insert_back: 배열 끝에 추가</span>
        <span style="color: #8b949e;">// (insert_front: 배열 앞에 추가도 가능)</span>
        <span style="color: #79c0ff;">"operation"</span>: <span style="color: #a5d6ff;">"insert_back"</span>,
        <span style="color: #8b949e;">// 추가할 요소들</span>
        <span style="color: #79c0ff;">"value"</span>: [
          {
            <span style="color: #8b949e;">// "hello_label"이라는 이름으로</span>
            <span style="color: #8b949e;">// @hud.hello_text 요소를 사용</span>
            <span style="color: #8b949e;">// (@네임스페이스.요소이름 형식)</span>
            <span style="color: #79c0ff;">"hello_label@hud.hello_text"</span>: {}
          }
        ]
      }
    ]
  }
}</code></pre>
</div>
</div>

<div class="step-item">
<div class="step-number">6</div>
<div class="step-content">
<h4>게임에서 확인하기</h4>
<p>이제 마인크래프트를 실행하고 확인해봅시다!</p>
<ol>
<li>마인크래프트 베드락 에디션을 실행</li>
<li>설정 → 전역 리소스 팩</li>
<li>"나의 첫 JSON UI" 활성화</li>
<li>월드에 입장하면 화면 왼쪽 위에 노란색 "안녕하세요!" 표시!</li>
</ol>
<div class="alert-box alert-success">
축하합니다! 첫 번째 JSON UI를 성공적으로 만들었습니다! 🎉
</div>
</div>
</div>
</div>
