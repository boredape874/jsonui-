---
title: 레이어 (겹침 순서)
---


## 레이어 (겹침 순서) {#layers}





레이어는 “위/아래 순서표”입니다. 숫자가 클수록 위에 보입니다.







### 기본 규칙

- 기본값은 0
- 큰 숫자가 위
- 같은 layer면 controls 순서가 우선






### 초보자 팁

- 0~10 안에서만 써도 충분
- 배경 1, 내용 5, 강조 10









레이어로 겹침 순서 정하기


```
"background": {
  "type": "image",
  "texture": "textures/ui/Black",
  "layer": 1
},
"content": {
  "type": "panel",
  "layer": 5
},
"tooltip": {
  "type": "label",
  "text": "도움말",
  "layer": 10
}
```





layer가 같을 때는 controls 배열에서 뒤에 있는 것이 위에 보입니다.


      
