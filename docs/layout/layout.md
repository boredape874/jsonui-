---
title: 크기와 앵커
---


## 크기와 앵커 {#layout}





퍼센트/픽셀/콘텐츠 기반 크기를 혼합하고, 9-포인트 앵커로 정밀 배치합니다.







            ### 크기 표현식

- `100%` 부모 기준
- `100% - 8px` 계산식
- `100%c` 콘텐츠 기준
- `100%y` 높이 기준 비율 유지
- `100%x` 너비 기준 비율 유지
- `fill` stack_panel에서만 남은 공간 채움
- `[32, 32]` 고정 픽셀






            ### Anchor 9-Point


              top_left
              top_middle
              top_right
              left_middle
              center
              right_middle
              bottom_left
              bottom_middle
              bottom_right


            anchor와 offset을 함께 써서 반응형 배치를 만듭니다.







앵커 배치 예시


```
"close_button": {
  "anchor_from": "top_right", // 어디에서 시작할지
  "anchor_to": "top_right",   // 어디에 붙일지
  "offset": [-3, 3]           // 살짝 이동
}
```



      