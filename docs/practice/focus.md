---
title: 포커스 이동
---


## 포커스 이동 {#focus}





컨트롤러/키보드에서 이동할 버튼 경로를 지정합니다.






포커스 네비게이션 예시


```
"start_button": {
  "type": "button",
  "focus_identifier": "start",
  "default_focus_precedence": 1,
  "focus_change_down": "settings"
},
"settings_button": {
  "type": "button",
  "focus_identifier": "settings",
  "focus_change_up": "start"
}
```





          포커스가 안 잡히면 `focus_enabled`나 버튼 가려짐 여부를 먼저 확인하세요.


      