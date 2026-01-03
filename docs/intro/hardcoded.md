---
title: 하드코딩된 요소
---


## 하드코딩된 요소 {#hardcoded}





게임이 이미 정해둔 이름/규칙이 있습니다. 이건 바꾸면 연결이 끊깁니다.







### 고정 바인딩 이름

- `#visible`, `#enabled`, `#text`
- `#title_text`, `#texture`
- `#collection_length`, `#clip_ratio`
- `#item_id_aux` (아이템 렌더용)






### 고정 화면 이름

- `hud_screen`, `server_form`
- `npc_interact`, `chat_screen`
- `inventory_screen` 등


이 이름을 바꾸면 화면이 안 붙습니다.




### 고정 렌더러 이름

- `gradient_renderer`
- `live_player_renderer`
- `inventory_item_renderer`






### 고정 버튼 ID

- `button.menu_select`
- `button.menu_ok`
- `button.menu_cancel`


버튼 ID는 게임이 미리 정해둔 값입니다.






일부 화면은 Ore UI로 이동 중이라 변경이 제한될 수 있습니다. 이름을 바꾸기보다 안쪽 내용만 바꾸는 것이 안전합니다.


      
