---
title: 초보 실습 10분
---


## 초보 실습 10분 {#mini-lab}





아래 3가지를 복사해서 붙여보면, 기본 구조를 빠르게 이해할 수 있습니다.








### 1. 글씨 하나 붙이기

label만 화면에 붙입니다. 가장 안전한 시작입니다.





2
### 2. 배경 상자 만들기

image를 사용해 반투명 배경을 만듭니다.





3
### 3. 기본 버튼 쓰기

기본 템플릿 버튼을 가져와 텍스트만 바꿉니다.








미니 1: 글씨 하나


```
"mini_text": {
  "type": "label", // 글씨 스티커
  "text": "처음 시작!", // 보여줄 문장
  "anchor_from": "center",
  "anchor_to": "center"
}
```






미니 2: 배경 상자


```
"mini_box": {
  "type": "image", // 그림 판넬
  "texture": "textures/ui/White", // 흰색 텍스처
  "color": [0, 0, 0, 0.4], // 반투명 검정
  "size": [200, 60]
}
```






미니 3: 기본 버튼


```
"mini_button@common_buttons.light_text_button": {
  // 기본 버튼 템플릿 사용
  "$button_text": "눌러요"
}
```





이 코드는 `controls` 배열 안에 “조각”으로 넣어서 사용합니다.


      
