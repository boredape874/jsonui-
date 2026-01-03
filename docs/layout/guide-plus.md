---
title: 초보자 가이드 더보기
---


## 초보자 가이드 더보기 {#guide-plus}





작은 성공을 반복하는 방식으로 배우면 실패가 줄어듭니다.







            1
            ### 기본 틀 복사

panel + label 조합으로 시작합니다.





            2
            ### 이름표 바꾸기

namespace와 컨트롤 이름만 바꿔도 충돌이 줄어듭니다.





            3
            ### 위치만 먼저 맞추기

anchor/offset을 고정하고 크기는 나중에 조정합니다.





            4
            ### 보이기 조건 추가

#visible로 표시/숨김만 먼저 테스트합니다.








작은 알림 박스 만들기


```
"simple_notice": {
  "type": "panel", // 투명한 상자
  "size": [220, 48],
  "anchor_from": "top_middle",
  "anchor_to": "top_middle",
  "offset": [0, 8],
  "controls": [
    {
      "bg": {
        "type": "image", // 배경 그림
        "texture": "textures/ui/White",
        "color": [0, 0, 0, 0.5], // 반투명 배경
        "size": ["100%", "100%"]
      }
    },
    {
      "text": {
        "type": "label", // 글씨 스티커
        "text": "여기에 한 줄 메시지",
        "anchor_from": "center",
        "anchor_to": "center",
        "shadow": true
      }
    }
  ]
}
```







            ### 자주 쓰는 규칙

- 보이기/숨기기                                    `#visible` 값으로 켜고 끄기
- view 바인딩으로 조건 붙이기



              글씨 바꾸기

- `#text` 또는 `#title_text` 사용
- 정말 필요할 때만 Molang 추가








            ### 실수 방지 체크

- 패널 size가 0인지 확인
- anchor가 화면 밖인지 확인
- 텍스처 경로 오타 확인
- collection_details 누락 확인






      