---
title: 애니메이션
---


## 애니메이션 {#animation}





애니메이션은 화면 전환이나 강조 표현에 사용합니다. 너무 많이 쓰면 성능에 부담이 됩니다.






로딩 애니메이션 체인


```
"loading_animation_alpha_in": {
  "anim_type": "alpha", // 투명도 애니메이션
  "easing": "out_cubic", // 부드럽게 멈춤
  "duration": 0.5,
  "from": 0,
  "to": 1,
  // 다음 애니메이션으로 연결
  "next": "@hud.loading_animation_wait"
}
```







### 자주 쓰는 anim_type

- alpha, size, offset
- wait (연결 대기)
- color (토글 강조)
- flip_book, aseprite_flip_book






### 적절한 사용

작게 움직이거나 천천히 페이드하는 정도가 안정적입니다.





### 중요 팁

작은 애니메이션 하나로도 UI가 훨씬 깔끔해 보입니다.








anims 배열 예시


```
"anims": [
  "@demo.fade_in",
  {
    "anim_type": "color",
    "duration": 0.4,
    "from": [0.6, 0.3, 0.3, 0.0],
    "to": [0.3, 0.6, 0.3, 1.0]
  }
]
```





어떤 파일은 anims 안에 이름을 붙여 넣기도 합니다. 이름은 “별칭”이라 필수는 아닙니다.






### 초보자 추천 값

- duration 0.2 ~ 0.6
- easing: out_cubic, in_out_quad






### 주의할 점

- 동시에 너무 많이 움직이지 않기
- 반복 애니메이션은 짧게






      
