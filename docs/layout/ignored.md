---
title: ignored와 visible 차이
---


## ignored와 visible 차이 {#ignored}





둘 다 숨기는 것처럼 보이지만 동작이 다릅니다. 초보자라면 꼭 구분하세요.







### ignored

요소를 완전히 제거합니다. 공간도 차지하지 않습니다.





### visible

보이기만 숨깁니다. 공간은 그대로 유지됩니다.








조건부 숨김 예시


```
"pc_only_button": {
  "ignored": "$touch" // 터치면 아예 제거
},
"ghost_button": {
  "visible": false // 공간은 남기고 숨김
}
```



      
