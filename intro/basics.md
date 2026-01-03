---
title: 기초 개념
---

<section id="basics" class="section reveal" data-section data-group="intro">
        <div class="section-head">
          <h2>기초 개념</h2>
          <p>처음 보는 사람도 이해할 수 있도록 쉬운 말로 정리했습니다.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <h3>JSON UI는 “화면 설계도”</h3>
            <p>텍스트 파일에 화면의 위치, 크기, 버튼을 적어두는 방식입니다.</p>
          </div>
          <div class="card">
            <h3>컨트롤은 “레고 블록”</h3>
            <p>panel, label, button 같은 블록을 쌓아서 화면을 만듭니다.</p>
          </div>
          <div class="card">
            <h3>바인딩은 “연결선”</h3>
            <p>게임 데이터와 화면을 이어주는 선입니다.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>아주 쉬운 설명</th>
                <th>실제 용어</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>투명한 상자</td>
                <td>panel</td>
                <td>다른 컨트롤을 담는 그릇</td>
              </tr>
              <tr>
                <td>스티커 글씨</td>
                <td>label</td>
                <td>텍스트 출력</td>
              </tr>
              <tr>
                <td>그림 판넬</td>
                <td>image</td>
                <td>텍스처 표시</td>
              </tr>
              <tr>
                <td>스위치</td>
                <td>button</td>
                <td>클릭 동작</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="two-col">
          <div class="card">
            <h3>읽는 순서</h3>
            <ul class="token-list">
              <li>namespace: 큰 폴더 이름</li>
              <li>type: 어떤 블록인지</li>
              <li>size/anchor: 크기와 위치</li>
              <li>controls: 안에 들어갈 것들</li>
            </ul>
          </div>
          <div class="card">
            <h3>초보자 실수 TOP 3</h3>
            <ul class="token-list">
              <li>쉼표 하나 누락</li>
              <li>따옴표를 빼먹기</li>
              <li>controls 배열을 비워둠</li>
            </ul>
          </div>
        </div>
        <div class="callout info">
          JSON UI는 주석을 사용할 수 있습니다. <code>//</code>로 왜 이렇게 작성했는지 설명을 남겨두면 좋아요.
        </div>
      </section>