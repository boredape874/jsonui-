---
title: 바인딩 목록 - 개수/수량
outline: false
---

# 개수/수량 {#binding-category}

총 45개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#action_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
action의 개수

**자세한 설명**
이 바인딩은 'action'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: action 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "action_count_label": {
    "type": "label",
    "text": "#action_count",
    "bindings": [
      {
        "binding_name": "#action_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
npc interact screen (총 1개 파일)

</details>

<details>
<summary><strong>#addons_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
addons의 개수

**자세한 설명**
이 바인딩은 'addons'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: addons 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "addons_count_label": {
    "type": "label",
    "text": "#addons_count",
    "bindings": [
      {
        "binding_name": "#addons_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store inventory screen (총 1개 파일)

</details>

<details>
<summary><strong>#automation_repeat_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
automation repeat의 개수

**자세한 설명**
이 바인딩은 'automation repeat'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: automation repeat 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "automation repeat_count_label": {
    "type": "label",
    "text": "#automation repeat_count",
    "bindings": [
      {
        "binding_name": "#automation repeat_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#available_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
available의 개수

**자세한 설명**
이 바인딩은 'available'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: available 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "available_count_label": {
    "type": "label",
    "text": "#available_count",
    "bindings": [
      {
        "binding_name": "#available_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
resource packs screen (총 1개 파일)

</details>

<details>
<summary><strong>#button_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
button의 개수

**자세한 설명**
이 바인딩은 'button'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: button 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "button_count_label": {
    "type": "label",
    "text": "#button_count",
    "bindings": [
      {
        "binding_name": "#button_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
edu discovery dialog (총 1개 파일)

</details>

<details>
<summary><strong>#collection_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
collection의 개수

**자세한 설명**
이 바인딩은 'collection'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: collection 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "collection_count_label": {
    "type": "label",
    "text": "#collection_count",
    "bindings": [
      {
        "binding_name": "#collection_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store inventory screen (총 1개 파일)

</details>

<details>
<summary><strong>#feature_toggle_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
feature toggle의 개수

**자세한 설명**
이 바인딩은 'feature toggle'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: feature toggle 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "feature toggle_count_label": {
    "type": "label",
    "text": "#feature toggle_count",
    "bindings": [
      {
        "binding_name": "#feature toggle_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#filter_selected_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
filter selected의 개수

**자세한 설명**
이 바인딩은 'filter selected'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: filter selected 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "filter selected_count_label": {
    "type": "label",
    "text": "#filter selected_count",
    "bindings": [
      {
        "binding_name": "#filter selected_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store common (총 1개 파일)

</details>

<details>
<summary><strong>#friend_world_item_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
friend world item의 개수

**자세한 설명**
이 바인딩은 'friend world item'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: friend world item 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "friend world item_count_label": {
    "type": "label",
    "text": "#friend world item_count",
    "bindings": [
      {
        "binding_name": "#friend world item_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
play screen (총 1개 파일)

</details>

<details>
<summary><strong>#friends_with_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
friends with의 개수

**자세한 설명**
이 바인딩은 'friends with'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: friends with 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "friends with_count_label": {
    "type": "label",
    "text": "#friends with_count",
    "bindings": [
      {
        "binding_name": "#friends with_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pause screen, start screen (총 2개 파일)

</details>

<details>
<summary><strong>#info_additional_server_player_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
info additional server player의 개수

**자세한 설명**
이 바인딩은 'info additional server player'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: info additional server player 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "info additional server player_count_label": {
    "type": "label",
    "text": "#info additional server player_count",
    "bindings": [
      {
        "binding_name": "#info additional server player_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
play screen (총 1개 파일)

</details>

<details>
<summary><strong>#info_third_party_server_player_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
info third party server player의 개수

**자세한 설명**
이 바인딩은 'info third party server player'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: info third party server player 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "info third party server player_count_label": {
    "type": "label",
    "text": "#info third party server player_count",
    "bindings": [
      {
        "binding_name": "#info third party server player_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
play screen (총 1개 파일)

</details>

<details>
<summary><strong>#inventory_selected_item_stack_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
inventory selected item stack의 개수

**자세한 설명**
이 바인딩은 'inventory selected item stack'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: inventory selected item stack 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "inventory selected item stack_count_label": {
    "type": "label",
    "text": "#inventory selected item stack_count",
    "bindings": [
      {
        "binding_name": "#inventory selected item stack_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
ui common (총 1개 파일)

</details>

<details>
<summary><strong>#inventory_stack_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
inventory stack의 개수

**자세한 설명**
이 바인딩은 'inventory stack'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: inventory stack 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "inventory stack_count_label": {
    "type": "label",
    "text": "#inventory stack_count",
    "bindings": [
      {
        "binding_name": "#inventory stack_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
crafter screen pocket, hud screen, redstone screen
외 4개 (총 7개 파일)

</details>

<details>
<summary><strong>#item_stack_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
item stack의 개수

**자세한 설명**
이 바인딩은 'item stack'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: item stack 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "item stack_count_label": {
    "type": "label",
    "text": "#item stack_count",
    "bindings": [
      {
        "binding_name": "#item stack_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
stonecutter screen, trade screen, trade screen pocket (총 3개 파일)

</details>

<details>
<summary><strong>#left_helper_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
left helper의 개수

**자세한 설명**
이 바인딩은 'left helper'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: left helper 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "left helper_count_label": {
    "type": "label",
    "text": "#left helper_count",
    "bindings": [
      {
        "binding_name": "#left helper_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
hud screen (총 1개 파일)

</details>

<details>
<summary><strong>#marketplace_feature_toggle_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
marketplace feature toggle의 개수

**자세한 설명**
이 바인딩은 'marketplace feature toggle'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: marketplace feature toggle 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "marketplace feature toggle_count_label": {
    "type": "label",
    "text": "#marketplace feature toggle_count",
    "bindings": [
      {
        "binding_name": "#marketplace feature toggle_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#mashups_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
mashups의 개수

**자세한 설명**
이 바인딩은 'mashups'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: mashups 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "mashups_count_label": {
    "type": "label",
    "text": "#mashups_count",
    "bindings": [
      {
        "binding_name": "#mashups_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store inventory screen (총 1개 파일)

</details>

<details>
<summary><strong>#mock_http_rule_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
mock http rule의 개수

**자세한 설명**
이 바인딩은 'mock http rule'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: mock http rule 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "mock http rule_count_label": {
    "type": "label",
    "text": "#mock http rule_count",
    "bindings": [
      {
        "binding_name": "#mock http rule_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#network_world_player_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
network world player의 개수

**자세한 설명**
이 바인딩은 'network world player'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: network world player 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "network world player_count_label": {
    "type": "label",
    "text": "#network world player_count",
    "bindings": [
      {
        "binding_name": "#network world player_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
play screen (총 1개 파일)

</details>

<details>
<summary><strong>#output_stack_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
output stack의 개수

**자세한 설명**
이 바인딩은 'output stack'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: output stack 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "output stack_count_label": {
    "type": "label",
    "text": "#output stack_count",
    "bindings": [
      {
        "binding_name": "#output stack_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
crafter screen pocket, redstone screen (총 2개 파일)

</details>

<details>
<summary><strong>#promo_item_resource_pack_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
promo item resource pack의 개수

**자세한 설명**
이 바인딩은 'promo item resource pack'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: promo item resource pack 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "promo item resource pack_count_label": {
    "type": "label",
    "text": "#promo item resource pack_count",
    "bindings": [
      {
        "binding_name": "#promo item resource pack_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store promo timeline screen (총 1개 파일)

</details>

<details>
<summary><strong>#promo_item_skin_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
promo item skin의 개수

**자세한 설명**
이 바인딩은 'promo item skin'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: promo item skin 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "promo item skin_count_label": {
    "type": "label",
    "text": "#promo item skin_count",
    "bindings": [
      {
        "binding_name": "#promo item skin_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store promo timeline screen (총 1개 파일)

</details>

<details>
<summary><strong>#promo_item_world_template_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
promo item world template의 개수

**자세한 설명**
이 바인딩은 'promo item world template'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: promo item world template 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "promo item world template_count_label": {
    "type": "label",
    "text": "#promo item world template_count",
    "bindings": [
      {
        "binding_name": "#promo item world template_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store promo timeline screen (총 1개 파일)

</details>

<details>
<summary><strong>#realm_player_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
realm player의 개수

**자세한 설명**
이 바인딩은 'realm player'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: realm player 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "realm player_count_label": {
    "type": "label",
    "text": "#realm player_count",
    "bindings": [
      {
        "binding_name": "#realm player_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realms settings screen (총 1개 파일)

</details>

<details>
<summary><strong>#realms_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
realms의 개수

**자세한 설명**
이 바인딩은 'realms'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: realms 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "realms_count_label": {
    "type": "label",
    "text": "#realms_count",
    "bindings": [
      {
        "binding_name": "#realms_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
resource packs screen (총 1개 파일)

</details>

<details>
<summary><strong>#realms_feature_toggle_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
realms feature toggle의 개수

**자세한 설명**
이 바인딩은 'realms feature toggle'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: realms feature toggle 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "realms feature toggle_count_label": {
    "type": "label",
    "text": "#realms feature toggle_count",
    "bindings": [
      {
        "binding_name": "#realms feature toggle_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#realms_notification_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
realms notification의 개수

**자세한 설명**
이 바인딩은 'realms notification'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: realms notification 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "realms notification_count_label": {
    "type": "label",
    "text": "#realms notification_count",
    "bindings": [
      {
        "binding_name": "#realms notification_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
start screen (총 1개 파일)

</details>

<details>
<summary><strong>#realms_unread_story_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
realms unread story의 개수

**자세한 설명**
이 바인딩은 'realms unread story'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: realms unread story 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "realms unread story_count_label": {
    "type": "label",
    "text": "#realms unread story_count",
    "bindings": [
      {
        "binding_name": "#realms unread story_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pause screen, play screen, realms slots screen (총 3개 파일)

</details>

<details>
<summary><strong>#realms_world_player_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
realms world player의 개수

**자세한 설명**
이 바인딩은 'realms world player'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: realms world player 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "realms world player_count_label": {
    "type": "label",
    "text": "#realms world player_count",
    "bindings": [
      {
        "binding_name": "#realms world player_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
choose realm screen, play screen (총 2개 파일)

</details>

<details>
<summary><strong>#recipe_craftable_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
recipe craftable의 개수

**자세한 설명**
이 바인딩은 'recipe craftable'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: recipe craftable 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "recipe craftable_count_label": {
    "type": "label",
    "text": "#recipe craftable_count",
    "bindings": [
      {
        "binding_name": "#recipe craftable_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
inventory screen (총 1개 파일)

</details>

<details>
<summary><strong>#remaining_characters_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
remaining characters의 개수

**자세한 설명**
이 바인딩은 'remaining characters'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: remaining characters 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "remaining characters_count_label": {
    "type": "label",
    "text": "#remaining characters_count",
    "bindings": [
      {
        "binding_name": "#remaining characters_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
submit feedback screen (총 1개 파일)

</details>

<details>
<summary><strong>#right_helper_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
right helper의 개수

**자세한 설명**
이 바인딩은 'right helper'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: right helper 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "right helper_count_label": {
    "type": "label",
    "text": "#right helper_count",
    "bindings": [
      {
        "binding_name": "#right helper_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
hud screen (총 1개 파일)

</details>

<details>
<summary><strong>#sales_grid_item_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
sales grid item의 개수

**자세한 설명**
이 바인딩은 'sales grid item'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: sales grid item 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "sales grid item_count_label": {
    "type": "label",
    "text": "#sales grid item_count",
    "bindings": [
      {
        "binding_name": "#sales grid item_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store sales item list screen (총 1개 파일)

</details>

<details>
<summary><strong>#second_trade_item_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
second trade item의 개수

**자세한 설명**
이 바인딩은 'second trade item'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: second trade item 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "second trade item_count_label": {
    "type": "label",
    "text": "#second trade item_count",
    "bindings": [
      {
        "binding_name": "#second trade item_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
trade 2 screen (총 1개 파일)

</details>

<details>
<summary><strong>#selected_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
selected의 개수

**자세한 설명**
이 바인딩은 'selected'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: selected 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "selected_count_label": {
    "type": "label",
    "text": "#selected_count",
    "bindings": [
      {
        "binding_name": "#selected_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
resource packs screen (총 1개 파일)

</details>

<details>
<summary><strong>#server_player_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
server player의 개수

**자세한 설명**
이 바인딩은 'server player'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: server player 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "server player_count_label": {
    "type": "label",
    "text": "#server player_count",
    "bindings": [
      {
        "binding_name": "#server player_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
play screen (총 1개 파일)

</details>

<details>
<summary><strong>#server_world_item_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
server world item의 개수

**자세한 설명**
이 바인딩은 'server world item'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: server world item 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "server world item_count_label": {
    "type": "label",
    "text": "#server world item_count",
    "bindings": [
      {
        "binding_name": "#server world item_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
play screen (총 1개 파일)

</details>

<details>
<summary><strong>#skins_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
skins의 개수

**자세한 설명**
이 바인딩은 'skins'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: skins 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "skins_count_label": {
    "type": "label",
    "text": "#skins_count",
    "bindings": [
      {
        "binding_name": "#skins_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store inventory screen (총 1개 파일)

</details>

<details>
<summary><strong>#textures_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
textures의 개수

**자세한 설명**
이 바인딩은 'textures'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: textures 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "textures_count_label": {
    "type": "label",
    "text": "#textures_count",
    "bindings": [
      {
        "binding_name": "#textures_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store inventory screen (총 1개 파일)

</details>

<details>
<summary><strong>#trade_item_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
trade item의 개수

**자세한 설명**
이 바인딩은 'trade item'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: trade item 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "trade item_count_label": {
    "type": "label",
    "text": "#trade item_count",
    "bindings": [
      {
        "binding_name": "#trade item_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
trade 2 screen (총 1개 파일)

</details>

<details>
<summary><strong>#ui_feature_toggle_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
ui feature toggle의 개수

**자세한 설명**
이 바인딩은 'ui feature toggle'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: ui feature toggle 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "ui feature toggle_count_label": {
    "type": "label",
    "text": "#ui feature toggle_count",
    "bindings": [
      {
        "binding_name": "#ui feature toggle_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#unowned_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
unowned의 개수

**자세한 설명**
이 바인딩은 'unowned'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: unowned 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "unowned_count_label": {
    "type": "label",
    "text": "#unowned_count",
    "bindings": [
      {
        "binding_name": "#unowned_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
resource packs screen (총 1개 파일)

</details>

<details>
<summary><strong>#world_item_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
world item의 개수

**자세한 설명**
이 바인딩은 'world item'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: world item 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "world item_count_label": {
    "type": "label",
    "text": "#world item_count",
    "bindings": [
      {
        "binding_name": "#world item_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
play screen (총 1개 파일)

</details>

<details>
<summary><strong>#worlds_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
worlds의 개수

**자세한 설명**
이 바인딩은 'worlds'의 수량이나 개수를 나타내는 숫자입니다.

주로 아이템 개수, 플레이어 수, 메시지 개수 등
셀 수 있는 것들의 개수를 표시할 때 사용합니다.

**실제 사용 예**
예: worlds 개수 표시, 남은 수량 확인

**코드 예제**
```jsonc
{
  "worlds_count_label": {
    "type": "label",
    "text": "#worlds_count",
    "bindings": [
      {
        "binding_name": "#worlds_count",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store inventory screen (총 1개 파일)

</details>

