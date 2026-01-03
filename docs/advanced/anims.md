---
title: 사용 가능한 애니메이션
---


## 사용 가능한 애니메이션 {#anims}





실제 파일에서 확인된 anim_type 목록입니다. 필요한 것만 골라 쓰세요.







            ### alpha

투명도 변화 (페이드 인/아웃)





            ### size

크기 변화 (커졌다가 작아짐)





            ### offset

위치 이동 (슬라이드)





            ### color

색상 변화 (토글 강조)





            ### wait

잠시 멈춤 (다음 애니메이션 대기)





            ### flip_book

전통적인 프레임 애니메이션 (간단한 로딩용)





            ### aseprite_flip_book

Aseprite 내보내기용 프레임 애니메이션








애니메이션 연결 예시


```
"fade_in": {
  "anim_type": "alpha", // 투명도
  "from": 0,
  "to": 1,
  "duration": 0.4,
  "next": "@demo.wait" // 다음 애니메이션
},
"wait": {
  "anim_type": "wait", // 잠시 대기
  "duration": 0.6,
  "next": "@demo.slide"
},
"slide": {
  "anim_type": "offset", // 위치 이동
  "from": [0, 0],
  "to": [8, 0],
  "duration": 0.3
}
```





          애니메이션은 1~2개만 써도 충분히 예쁘게 보입니다.


      