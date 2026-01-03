---
title: 수정과 팩토리
---


## 수정과 팩토리 {#modfactory}





기존 화면을 직접 바꾸기보다 “추가”와 “교체”를 활용하는 방식이 안전합니다.







            ### modifications 핵심

- `insert_front` 앞에 추가
- `insert_back` 뒤에 추가
- `remove` 조건 기반 삭제






            ### 팩토리 기본 구조



```
"server_form_factory": {
  "type": "factory", // 반복 생성기
  "control_ids": {
    "long_form": "@custom.long_form_replacement",
    "custom_form": "@custom.custom_form_replacement"
  },
  "factory_control_name": "#form_type" // 어떤 템플릿을 쓸지 결정
}
```










modifications 완전 예시


```
"hud_screen@hud.hud_screen": {
  "modifications": [
    {
      "array_name": "controls",
      "operation": "insert_front",
      "value": [
        { "my_hud_panel@custom.hud_panel": {} }
      ]
    },
    {
      "array_name": "controls",
      "operation": "remove",
      "control_name": "vanilla_button"
    }
  ]
}
```






collection_details 포함 팩토리


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
    { "binding_type": "collection", "binding_collection_name": "form_buttons" }
  ]
}
```





          실제 예제는 title_text로 서로 다른 패널을 보여주는 방식을 자주 사용합니다. 원본은 남겨두고 필요한 부분만 추가하는 것이 안전합니다.


      