---
title: 변수 & 메모장
---


## 변수 & 메모장 {#variables}





변수는 “재사용 값”, property_bag은 “컨트롤 안에 저장하는 메모장”이라고 생각하면 쉽습니다.






변수 선언과 오버라이드


```
"$title_text|default": "My UI Title", // 기본값
"custom_panel@common.panel": {
  "$title_text": "Override Title", // 덮어쓰기
  "$title_color": [1, 0.6, 0.2]
}
```







            ### 조건부 변수

`variables` 배열로 조건에 따라 값을 교체할 수 있습니다.





            ### Property Bag 활용

진행 바 템플릿에서 이전 값과 배율을 저장하는 방식이 대표적입니다.




```
"property_bag": {
  // 이전 값을 저장해 변화를 감지
  "#prev_value": 0,
  // 진행 바 배율을 메모
  "#multiplier": "$multiplier"
            }
```










variables 배열 예시


```
"my_panel": {
  "variables": [
    {
      "requires": "$touch",
      "$panel_size": [360, 220]
    },
    {
      "requires": "(not $touch)",
      "$panel_size": [300, 180]
    }
  ],
  "size": "$panel_size"
}
```







            ### 초보자 팁

- 변수에는 default를 붙여 안전하게
- 색상은 0~1 범위(권장), 일부 값은 0~255도 보임






            ### 실수 줄이기

- 같은 값은 변수로 묶기
- 긴 값은 property_bag에 저장






      