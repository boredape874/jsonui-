---
title: 플랫폼/입력 차이
---


## 플랫폼/입력 차이 {#platform}





모바일은 터치, 콘솔은 패드, PC는 키보드/마우스입니다. 같은 화면도 크기와 이동 방식이 달라집니다.







### 자주 쓰는 플랫폼 변수

- `$touch` 터치 입력 가능
- `$console_edition` 콘솔 플랫폼
- `$is_pregame` 메인 메뉴/로그인
- `$screen_size_x` 화면 너비






### 안전 영역

콘솔은 가장자리가 잘릴 수 있어 여백이 필요합니다.




```
"safe_panel": {
  "size": ["90%", "90%"],
  "anchor_from": "center",
  "anchor_to": "center"
}
```







### 터치/패드 대응

터치는 버튼을 크게, 패드는 포커스 이동을 꼭 설정하세요.








터치/PC 크기 바꾸기


```
"start_button": {
  "variables": [
    { "requires": "$touch", "$btn_size": [60, 60] },
    { "$btn_size": [44, 44] }
  ],
  "size": "$btn_size"
}
```





콘솔에서는 `focus_identifier`와 `focus_change_*`를 꼭 넣어주세요.


      
