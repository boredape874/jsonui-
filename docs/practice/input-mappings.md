---
title: 입력 매핑
---


## 입력 매핑 {#input-mappings}





버튼이 눌리는 이유는 button_mappings 덕분입니다. 입력을 버튼 동작에 연결합니다.






기본 매핑 예시


```
"my_button": {
  "type": "button",
  "button_mappings": [
    {
      "from_button_id": "button.menu_select",
      "to_button_id": "button.menu_ok",
      "mapping_type": "pressed"
    }
  ]
}
```







            ### 자주 쓰는 from_button_id

- button.menu_select (기본 선택)
- button.menu_ok (확인)
- button.menu_cancel (취소)
- button.menu_tab_left / right






            ### mapping_type

- pressed: 눌렀을 때
- focused: 포커스될 때
- global: 포커스 없이 동작






      