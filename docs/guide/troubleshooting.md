---
title: 문제 해결 가이드
---

# 문제 해결 가이드 {#troubleshooting}

> 난이도: 초급

<h3>일반적인 문제와 해결 방법</h3>

<div class="term-box">
<div class="term-title">문제 1: UI가 표시되지 않음</div>
<div class="term-content">
<p><strong>가능한 원인:</strong></p>
<ul>
<li>_ui_defs.json에 파일이 등록되지 않음</li>
<li>네임스페이스가 잘못됨</li>
<li>visible이 false로 설정됨</li>
<li>요소가 화면 밖에 배치됨</li>
</ul>
<p><strong>해결 방법:</strong></p>
<ol>
<li>_ui_defs.json에서 <code>"ui/파일이름.json"</code> 확인</li>
<li>요소 참조 시 <code>@네임스페이스.요소이름</code> 형식 확인</li>
<li>visible 속성 제거 또는 true로 설정</li>
<li>offset 값을 [0, 0]으로 테스트</li>
</ol>
</div>
</div>

<div class="term-box">
<div class="term-title">문제 2: 텍스트가 깨지거나 표시되지 않음</div>
<div class="term-content">
<p><strong>가능한 원인:</strong></p>
<ul>
<li>바인딩 이름이 잘못됨</li>
<li>텍스트 크기가 0</li>
<li>색상이 배경과 같음</li>
</ul>
<p><strong>해결 방법:</strong></p>
<ol>
<li>바인딩 없이 고정 텍스트로 테스트: <code>"text": "테스트"</code></li>
<li>font_size 추가: <code>"font_size": "normal"</code></li>
<li>명확한 색상 설정: <code>"color": [1.0, 0.0, 0.0]</code></li>
<li>shadow 추가: <code>"shadow": true</code></li>
</ol>
</div>
</div>

<div class="term-box">
<div class="term-title">문제 3: 이미지가 표시되지 않음</div>
<div class="term-content">
<p><strong>가능한 원인:</strong></p>
<ul>
<li>텍스처 경로가 잘못됨</li>
<li>이미지 크기가 0</li>
<li>alpha가 0</li>
</ul>
<p><strong>해결 방법:</strong></p>
<ol>
<li>바닐라 텍스처로 테스트: <code>"texture": "textures/ui/White"</code></li>
<li>명확한 크기 설정: <code>"size": [32, 32]</code></li>
<li>alpha 제거 또는 1.0으로 설정</li>
<li>layer 값 증가: <code>"layer": 10</code></li>
</ol>
</div>
</div>

<div class="term-box">
<div class="term-title">문제 4: JSON 파싱 에러</div>
<div class="term-content">
<p><strong>가능한 원인:</strong></p>
<ul>
<li>쉼표 누락 또는 추가</li>
<li>중괄호 불일치</li>
<li>주석 형식 오류</li>
</ul>
<p><strong>해결 방법:</strong></p>
<ol>
<li>JSON 검증기 사용: <a href="https://jsonlint.com" target="_blank">jsonlint.com</a></li>
<li>마지막 항목 뒤 쉼표 제거</li>
<li>중괄호와 대괄호 짝 맞추기</li>
<li>주석은 <code>//</code> 또는 <code>/* */</code> 사용</li>
</ol>
</div>
</div>

<div class="term-box">
<div class="term-title">문제 5: 수정사항이 적용되지 않음</div>
<div class="term-content">
<p><strong>해결 방법:</strong></p>
<ol>
<li>게임을 완전히 종료하고 재시작</li>
<li>리소스 팩을 껐다가 다시 켜기</li>
<li>월드를 다시 로드</li>
<li>캐시 삭제 (Windows: %localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang)</li>
</ol>
</div>
</div>

<h3>디버깅 팁</h3>

<div class="lecture-note">
<div class="lecture-note-title">단계별 디버깅</div>
<div class="lecture-note-content">
<ol>
<li><strong>단순화하기</strong> - 복잡한 요소를 제거하고 기본만 남기기</li>
<li><strong>색상 확인</strong> - 배경을 밝은 색으로 설정하여 영역 확인</li>
<li><strong>로그 확인</strong> - 콘텐츠 로그에서 에러 메시지 찾기</li>
<li><strong>바닐라 비교</strong> - 바닐라 UI 파일과 비교하여 차이점 찾기</li>
<li><strong>점진적 추가</strong> - 하나씩 기능을 추가하며 테스트</li>
</ol>
</div>
</div>

<div class="alert-box alert-tip">
<strong>테스트용 코드:</strong><br>
문제를 찾을 때 이 간단한 빨간 박스를 추가해보세요:<br>
<code>{"type": "image", "texture": "textures/ui/White", "size": [100, 100], "color": [1, 0, 0]}</code>
</div>

