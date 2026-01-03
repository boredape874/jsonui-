---
title: 텍스처와 나인슬라이스
---

<section id="textures" class="section reveal" data-section data-group="layout">
        <div class="section-head">
          <h2>텍스처와 나인슬라이스</h2>
          <p>텍스처는 “그림 파일”이고, 나인슬라이스는 “모서리 모양을 유지한 채 늘리는 방법”입니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>기본 텍스처</h3>
            <ul class="token-list">
              <li><code>texture</code> 그림 경로</li>
              <li><code>size</code> 표시 크기</li>
              <li>확장자는 보통 생략</li>
            </ul>
          </div>
          <div class="card">
            <h3>나인슬라이스</h3>
            <p>모서리는 고정, 가운데만 늘려 찌그러짐을 줄입니다.</p>
            <ul class="token-list">
              <li><code>nineslice_size</code> [왼, 위, 오른, 아래]</li>
              <li><code>tiled</code> 반복 여부</li>
            </ul>
          </div>
          <div class="card">
            <h3>아틀라스</h3>
            <p>큰 그림에서 필요한 조각만 잘라 씁니다.</p>
            <ul class="token-list">
              <li><code>texture</code>에 <code>atlas.terrain</code></li>
              <li><code>uv</code>, <code>uv_size</code>로 조각 지정</li>
            </ul>
          </div>
          <div class="card">
            <h3>반복 패턴</h3>
            <p>배경을 바둑판처럼 반복할 때 사용합니다.</p>
            <ul class="token-list">
              <li><code>tiled</code> true</li>
              <li><code>tiled_scale</code>로 크기 조정</li>
            </ul>
          </div>
        </div>
        <div class="code-block">
          <div class="code-title">나인슬라이스 배경 예시</div>
          <pre><code>"panel_bg": {
  "type": "image", // 배경 그림
  "texture": "textures/ui/panel", // 그림 경로
  "nineslice_size": [4, 4, 4, 4], // 모서리 고정
  "tiled": false,
  "size": ["100% - 8px", 40]
}</code></pre>
        </div>
        <div class="code-block">
          <div class="code-title">아틀라스에서 아이콘 뽑기</div>
          <pre><code>"block_icon": {
  "type": "image",
  "texture": "atlas.terrain", // 큰 그림(아틀라스)
  "uv": [0, 0], // 시작 좌표
  "uv_size": [16, 16], // 잘라낼 크기
  "size": [16, 16]
}</code></pre>
        </div>
        <div class="callout info">
          아이콘이 흐리면 size를 딱 맞게 맞추고, nineslice 값을 너무 크게 주지 마세요.
        </div>
      </section>