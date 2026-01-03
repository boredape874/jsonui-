---
title: 바인딩
---


## 바인딩 {#binding}





바인딩은 “게임 데이터 → 화면”으로 연결하는 선입니다. 아래 4가지를 먼저 익히면 대부분 해결됩니다.







### global

게임에서 주는 값. 예: #title_text, #visible





### view

값을 바꾸거나 조건을 걸 때 사용합니다.





### collection

여러 개 버튼이나 목록을 반복 생성할 때 사용합니다.





### collection_details

현재 항목 번호/정보를 알려주는 바인딩입니다.





### 변수형 binding_type

예: `$visible_binding_type`처럼 변수로 저장해 재사용.









### 바인딩 흐름

- binding_name: 원래 값
- binding_name_override: 바꿀 속성
- binding_type: global/view/collection/collection_details






### 초보자 팁

- collection은 collection_details도 같이
- 조건이 복잡하면 view를 최소화
- binding_condition으로 갱신 타이밍 제어










### 자주 쓰는 binding_condition

- `once` 한 번만 계산
- `always` 항상 갱신
- `visible` 보일 때만 갱신
- `visibility_changed` 보임 상태가 바뀔 때만

### 전체 바인딩 목록

전체 바인딩 목록은 [바인딩 목록](../binding/index.html#binding-index)에서 확인할 수 있습니다.









초보자용 바인딩 예시


```
{
  "bindings": [
    {
      // 게임에서 주는 제목을 내 텍스트에 연결
      "binding_name": "#title_text",
      "binding_name_override": "#text",
      "binding_type": "global"
    },
    {
      // 텍스트가 비어있지 않을 때만 보이기
      "binding_type": "view",
      "source_property_name": "(not (#text = ''))",
      "target_property_name": "#visible"
    }
  ]
}
```





바인딩이 너무 복잡해지면 먼저 #visible과 size만 남기고 하나씩 다시 붙이세요.





collection_details 포함 예시


```
"button_factory": {
  "type": "factory",
  "control_ids": {
    "button": "@custom.simple_button"
  },
  "collection_details": {
    "collection_name": "form_buttons",
    "collection_index_binding": "#index"
  },
  "bindings": [
    {
      "binding_type": "collection",
      "binding_collection_name": "form_buttons"
    }
  ]
}
```





collection_details를 빼면 #index 같은 “현재 번호”가 비어서 버튼/목록이 엉켜 보일 수 있습니다.


      
