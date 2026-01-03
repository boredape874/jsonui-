---
title: 성능과 디버깅
---


## 성능과 디버깅 {#performance}





JSON UI는 성능 비용이 큰 편입니다. 문제를 줄이는 습관이 중요합니다.







            ### 최적화 체크

- 불필요한 bindings 제거
- Molang 표현식 단순화
- 컨트롤 계층 얕게 유지
- 텍스처 아틀라스 활용






            ### 자주 발생하는 실수

- collection_details 누락
- anchor 조합 오류
- 변수 기본값 누락
- 레이어 충돌






            ### 디버깅 루틴

우선 #visible / size / anchor를 확인하고, 바인딩 값을 최소화한 뒤 다시 확장하세요.









            ### content_log 활용



```
"debug_panel": {
  "type": "panel",
  "content_log_enabled": true,
  "bindings": [
    { "binding_name": "#title_text" }
  ]
}
```







            ### 자주 나오는 오류

- Control not found → namespace/이름 확인
- Binding failed → binding_name 오타 확인
- Circular reference → 상속 체인 확인








          JSON UI는 엔티티 다음으로 성능 비용이 높습니다. 특히 모바일/콘솔에서 주의가 필요합니다.


      