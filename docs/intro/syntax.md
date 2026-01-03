---
title: 문법과 규칙 (중요)
---


## 문법과 규칙 (중요) {#syntax}





코딩을 몰라도 따라 할 수 있도록, 꼭 지켜야 하는 규칙만 모았습니다.







            ### 파일 구조 3줄 요약

- namespace로 “이름표”를 만든다
- 컨트롤을 만든다 (panel, label 등)
- 화면에 붙인다 (hud_screen 등)






            ### 자주 쓰는 키워드

- 모양/배치                                    `type`, `size`, `anchor_from`, `anchor_to`, `offset`



              보이기/숨기기

- `visible`, `enabled`, `layer`



              데이터 연결

- `bindings`, `binding_type`, `binding_name`












            ### 작업 순서 (초보용)

- 1) 작은 패널 하나만 만들기
- 2) 위치/크기 확인
- 3) 텍스트/이미지 붙이기
- 4) 바인딩 추가






            ### 문제 생겼을 때

- 최근 수정한 줄을 먼저 복구
- 쉼표와 따옴표 다시 확인
- controls 배열이 비었는지 확인









기본 구조 예시


```
{
  "namespace": "demo", // 파일 이름표
  "demo_root": {
    "type": "panel", // 큰 상자
    "size": ["100%", "100%"],
    "controls": [
      { "title": { "type": "label", "text": "안녕!" } } // 글씨
    ]
  },
  "hud_screen": {
    // 화면에 붙이기
    "$additional_screen_content": "demo.demo_root"
  }
}
```






네임스페이스 참조 문법


```
"my_panel@common.panel": {
  // common namespace의 panel을 가져옴
  "size": ["100%", 60]
}
```





          문법이 헷갈리면 “따옴표, 쉼표, 중괄호”만 먼저 확인하세요.


      