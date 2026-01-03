---
title: Molang
---


## Molang {#molang}





Molang은 간단한 계산과 조건을 적는 언어입니다. 어렵게 생각하지 말고 짧게 쓰는 것이 좋습니다.







            ### 기본 연산

- `(#value / 20)` 나눗셈
- `(not (#texture = ''))` 빈 값 검사
- `(#title_text - 'customUI_')` 문자열 빼기 (없으면 그대로)
- `((#a = 'x') and (#b > 5))` 논리 연산






            ### 문자열 슬라이싱

실제 예제는 텍스트를 잘라서 여러 데이터를 분리합니다.




```
// #dialogue_data에서 200자만 남기기
"source_property_name": "(('%.200s' * #dialogue_data) - '\t')"
```











            ### 초보 규칙 3가지

- 괄호로 감싸서 안전하게
- 문자열은 작은따옴표 사용
- 짧게 쓰고 하나씩 테스트






            ### 자주 쓰는 비교

- `(#value > 0)` 양수인지
- `(#text = '')` 비어있는지
- `(not (#visible))` 반대 조건








          customUI 감지는 `((#title_text - 'customUI_') = #title_text)` 패턴을 사용합니다.
          이 식이 true면 “접두어가 없다”는 뜻입니다.




          `* 1`은 true/false 값을 1/0으로 바꾸는 간단한 변환입니다.


      