---
title: 바인딩 목록 - UI 활성화/비활성화 (2/3)
outline: false
search: false
---

# UI 활성화/비활성화 {#binding-category}

UI 활성화/비활성화 2/3 (항목 201-400)

[분할 목록으로 돌아가기](category-02.html#binding-category)

<details>
<summary><strong>#fail_realms_purchase_fulfillment_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
fail realms purchase fulfillment의 활성화 여부

**자세한 설명**
이 바인딩은 'fail realms purchase fulfillment' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: fail realms purchase fulfillment를 클릭하거나 조작할 수 있습니다
- false일 때: fail realms purchase fulfillment가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: fail realms purchase fulfillment를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "fail realms purchase fulfillment_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#fail_realms_purchase_fulfillment_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#fancy_skies_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
fancy skies의 활성화 여부

**자세한 설명**
이 바인딩은 'fancy skies' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: fancy skies를 클릭하거나 조작할 수 있습니다
- false일 때: fancy skies가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: fancy skies를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "fancy skies_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#fancy_skies_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#feature_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
feature toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'feature toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: feature toggle를 클릭하거나 조작할 수 있습니다
- false일 때: feature toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: feature toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "feature toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#feature_toggle_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#field_of_view_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
field of view의 활성화 여부

**자세한 설명**
이 바인딩은 'field of view' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: field of view를 클릭하거나 조작할 수 있습니다
- false일 때: field of view가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: field of view를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "field of view_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#field_of_view_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#field_of_view_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
field of view toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'field of view toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: field of view toggle를 클릭하거나 조작할 수 있습니다
- false일 때: field of view toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: field of view toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "field of view toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#field_of_view_toggle_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#file_storage_location_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
file storage location의 활성화 여부

**자세한 설명**
이 바인딩은 'file storage location' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: file storage location를 클릭하거나 조작할 수 있습니다
- false일 때: file storage location가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: file storage location를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "file storage location_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#file_storage_location_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
storage management (총 1개 파일)

</details>
<details>
<summary><strong>#file_watcher_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
file watcher의 활성화 여부

**자세한 설명**
이 바인딩은 'file watcher' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: file watcher를 클릭하거나 조작할 수 있습니다
- false일 때: file watcher가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: file watcher를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "file watcher_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#file_watcher_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#filter_profanity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
filter profanity의 활성화 여부

**자세한 설명**
이 바인딩은 'filter profanity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: filter profanity를 클릭하거나 조작할 수 있습니다
- false일 때: filter profanity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: filter profanity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "filter profanity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#filter_profanity_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#filtering_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
filtering의 활성화 여부

**자세한 설명**
이 바인딩은 'filtering' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: filtering를 클릭하거나 조작할 수 있습니다
- false일 때: filtering가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: filtering를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "filtering_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#filtering_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#finalize_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
finalize button의 활성화 여부

**자세한 설명**
이 바인딩은 'finalize button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: finalize button를 클릭하거나 조작할 수 있습니다
- false일 때: finalize button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: finalize button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "finalize button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#finalize_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
book screen (총 1개 파일)

</details>
<details>
<summary><strong>#find_cross_platform_friends_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
find cross platform friends의 활성화 여부

**자세한 설명**
이 바인딩은 'find cross platform friends' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: find cross platform friends를 클릭하거나 조작할 수 있습니다
- false일 때: find cross platform friends가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: find cross platform friends를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "find cross platform friends_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#find_cross_platform_friends_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
invite screen (총 1개 파일)

</details>
<details>
<summary><strong>#fire_spreads_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
fire spreads의 활성화 여부

**자세한 설명**
이 바인딩은 'fire spreads' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: fire spreads를 클릭하거나 조작할 수 있습니다
- false일 때: fire spreads가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: fire spreads를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "fire spreads_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#fire_spreads_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#first_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
first의 활성화 여부

**자세한 설명**
이 바인딩은 'first' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: first를 클릭하거나 조작할 수 있습니다
- false일 때: first가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: first를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "first_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#first_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#flat_nether_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
flat nether의 활성화 여부

**자세한 설명**
이 바인딩은 'flat nether' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: flat nether를 클릭하거나 조작할 수 있습니다
- false일 때: flat nether가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: flat nether를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "flat nether_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#flat_nether_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#focus_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
focus의 활성화 여부

**자세한 설명**
이 바인딩은 'focus' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: focus를 클릭하거나 조작할 수 있습니다
- false일 때: focus가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: focus를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "focus_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#focus_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, realms settings screen, realms slots screen
외 6개 (총 9개 파일)

</details>
<details>
<summary><strong>#force_user_agreement_level_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
force user agreement level의 활성화 여부

**자세한 설명**
이 바인딩은 'force user agreement level' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: force user agreement level를 클릭하거나 조작할 수 있습니다
- false일 때: force user agreement level가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: force user agreement level를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "force user agreement level_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#force_user_agreement_level_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#frame_pacing_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
frame pacing의 활성화 여부

**자세한 설명**
이 바인딩은 'frame pacing' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: frame pacing를 클릭하거나 조작할 수 있습니다
- false일 때: frame pacing가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: frame pacing를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "frame pacing_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#frame_pacing_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#friends_drawer_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
friends drawer button의 활성화 여부

**자세한 설명**
이 바인딩은 'friends drawer button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: friends drawer button를 클릭하거나 조작할 수 있습니다
- false일 때: friends drawer button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: friends drawer button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "friends drawer button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#friends_drawer_button_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#full_screen_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
full screen의 활성화 여부

**자세한 설명**
이 바인딩은 'full screen' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: full screen를 클릭하거나 조작할 수 있습니다
- false일 때: full screen가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: full screen를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "full screen_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#full_screen_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#game_version_override_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
game version override의 활성화 여부

**자세한 설명**
이 바인딩은 'game version override' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: game version override를 클릭하거나 조작할 수 있습니다
- false일 때: game version override가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: game version override를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "game version override_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#game_version_override_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#game_version_override_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
game version override toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'game version override toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: game version override toggle를 클릭하거나 조작할 수 있습니다
- false일 때: game version override toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: game version override toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "game version override toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#game_version_override_toggle_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#gamepad_cursor_sensitivity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
gamepad cursor sensitivity의 활성화 여부

**자세한 설명**
이 바인딩은 'gamepad cursor sensitivity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: gamepad cursor sensitivity를 클릭하거나 조작할 수 있습니다
- false일 때: gamepad cursor sensitivity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: gamepad cursor sensitivity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "gamepad cursor sensitivity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#gamepad_cursor_sensitivity_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#gametips_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
gametips의 활성화 여부

**자세한 설명**
이 바인딩은 'gametips' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: gametips를 클릭하거나 조작할 수 있습니다
- false일 때: gametips가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: gametips를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "gametips_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#gametips_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#gamma_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
gamma의 활성화 여부

**자세한 설명**
이 바인딩은 'gamma' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: gamma를 클릭하거나 조작할 수 있습니다
- false일 때: gamma가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: gamma를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "gamma_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#gamma_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#gathering_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
gathering button의 활성화 여부

**자세한 설명**
이 바인딩은 'gathering button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: gathering button를 클릭하거나 조작할 수 있습니다
- false일 때: gathering button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: gathering button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "gathering button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#gathering_button_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#gathering_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
gathering의 활성화 여부

**자세한 설명**
이 바인딩은 'gathering' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: gathering를 클릭하거나 조작할 수 있습니다
- false일 때: gathering가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: gathering를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "gathering_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#gathering_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#generate_random_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
generate random button의 활성화 여부

**자세한 설명**
이 바인딩은 'generate random button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: generate random button를 클릭하거나 조작할 수 있습니다
- false일 때: generate random button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: generate random button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "generate random button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#generate_random_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
world templates screen (총 1개 파일)

</details>
<details>
<summary><strong>#gesture_control_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
gesture control의 활성화 여부

**자세한 설명**
이 바인딩은 'gesture control' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: gesture control를 클릭하거나 조작할 수 있습니다
- false일 때: gesture control가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: gesture control를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "gesture control_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#gesture_control_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#glint_speed_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
glint speed의 활성화 여부

**자세한 설명**
이 바인딩은 'glint speed' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: glint speed를 클릭하거나 조작할 수 있습니다
- false일 때: glint speed가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: glint speed를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "glint speed_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#glint_speed_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#glint_strength_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
glint strength의 활성화 여부

**자세한 설명**
이 바인딩은 'glint strength' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: glint strength를 클릭하거나 조작할 수 있습니다
- false일 때: glint strength가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: glint strength를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "glint strength_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#glint_strength_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#graphics_mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
graphics mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'graphics mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: graphics mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: graphics mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: graphics mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "graphics mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#graphics_mode_dropdown_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#graphics_mode_radio_deferred_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
graphics mode radio deferred의 활성화 여부

**자세한 설명**
이 바인딩은 'graphics mode radio deferred' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: graphics mode radio deferred를 클릭하거나 조작할 수 있습니다
- false일 때: graphics mode radio deferred가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: graphics mode radio deferred를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "graphics mode radio deferred_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#graphics_mode_radio_deferred_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#graphics_mode_radio_ray_traced_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
graphics mode radio ray traced의 활성화 여부

**자세한 설명**
이 바인딩은 'graphics mode radio ray traced' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: graphics mode radio ray traced를 클릭하거나 조작할 수 있습니다
- false일 때: graphics mode radio ray traced가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: graphics mode radio ray traced를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "graphics mode radio ray traced_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#graphics_mode_radio_ray_traced_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#graphics_mode_switch_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
graphics mode switch의 활성화 여부

**자세한 설명**
이 바인딩은 'graphics mode switch' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: graphics mode switch를 클릭하거나 조작할 수 있습니다
- false일 때: graphics mode switch가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: graphics mode switch를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "graphics mode switch_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#graphics_mode_switch_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#graphics_quality_preset_mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
graphics quality preset mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'graphics quality preset mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: graphics quality preset mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: graphics quality preset mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: graphics quality preset mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "graphics quality preset mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#graphics_quality_preset_mode_dropdown_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#graphics_upscaling_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
graphics upscaling의 활성화 여부

**자세한 설명**
이 바인딩은 'graphics upscaling' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: graphics upscaling를 클릭하거나 조작할 수 있습니다
- false일 때: graphics upscaling가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: graphics upscaling를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "graphics upscaling_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#graphics_upscaling_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#gui_accessibility_scaling_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
gui accessibility scaling의 활성화 여부

**자세한 설명**
이 바인딩은 'gui accessibility scaling' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: gui accessibility scaling를 클릭하거나 조작할 수 있습니다
- false일 때: gui accessibility scaling가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: gui accessibility scaling를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "gui accessibility scaling_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#gui_accessibility_scaling_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#gui_scale_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
gui scale의 활성화 여부

**자세한 설명**
이 바인딩은 'gui scale' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: gui scale를 클릭하거나 조작할 수 있습니다
- false일 때: gui scale가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: gui scale를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "gui scale_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#gui_scale_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#hdr_strength_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hdr strength의 활성화 여부

**자세한 설명**
이 바인딩은 'hdr strength' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hdr strength를 클릭하거나 조작할 수 있습니다
- false일 때: hdr strength가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hdr strength를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hdr strength_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hdr_strength_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
gamma calibration screen (총 1개 파일)

</details>
<details>
<summary><strong>#hide_gamepad_cursor_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hide gamepad cursor의 활성화 여부

**자세한 설명**
이 바인딩은 'hide gamepad cursor' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hide gamepad cursor를 클릭하거나 조작할 수 있습니다
- false일 때: hide gamepad cursor가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hide gamepad cursor를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hide gamepad cursor_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hide_gamepad_cursor_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#hide_hand_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hide hand의 활성화 여부

**자세한 설명**
이 바인딩은 'hide hand' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hide hand를 클릭하거나 조작할 수 있습니다
- false일 때: hide hand가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hide hand를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hide hand_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hide_hand_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#hide_hud_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hide hud의 활성화 여부

**자세한 설명**
이 바인딩은 'hide hud' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hide hud를 클릭하거나 조작할 수 있습니다
- false일 때: hide hud가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hide hud를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hide hud_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hide_hud_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#hide_paperdoll_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hide paperdoll의 활성화 여부

**자세한 설명**
이 바인딩은 'hide paperdoll' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hide paperdoll를 클릭하거나 조작할 수 있습니다
- false일 때: hide paperdoll가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hide paperdoll를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hide paperdoll_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hide_paperdoll_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#hint_toggles_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hint toggles의 활성화 여부

**자세한 설명**
이 바인딩은 'hint toggles' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hint toggles를 클릭하거나 조작할 수 있습니다
- false일 때: hint toggles가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hint toggles를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hint toggles_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hint_toggles_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#host_options_menu_not_open_and_tts_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
host options menu not open and tts의 활성화 여부

**자세한 설명**
이 바인딩은 'host options menu not open and tts' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: host options menu not open and tts를 클릭하거나 조작할 수 있습니다
- false일 때: host options menu not open and tts가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: host options menu not open and tts를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "host options menu not open and tts_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#host_options_menu_not_open_and_tts_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
chat screen (총 1개 파일)

</details>
<details>
<summary><strong>#hostile_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hostile volume의 활성화 여부

**자세한 설명**
이 바인딩은 'hostile volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hostile volume를 클릭하거나 조작할 수 있습니다
- false일 때: hostile volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hostile volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hostile volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hostile_volume_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#hotbar_only_touch_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hotbar only touch의 활성화 여부

**자세한 설명**
이 바인딩은 'hotbar only touch' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hotbar only touch를 클릭하거나 조작할 수 있습니다
- false일 때: hotbar only touch가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hotbar only touch를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hotbar only touch_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hotbar_only_touch_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#hud_text_background_opacity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
hud text background opacity의 활성화 여부

**자세한 설명**
이 바인딩은 'hud text background opacity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: hud text background opacity를 클릭하거나 조작할 수 있습니다
- false일 때: hud text background opacity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: hud text background opacity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "hud text background opacity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#hud_text_background_opacity_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#immediaterespawn_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
immediaterespawn의 활성화 여부

**자세한 설명**
이 바인딩은 'immediaterespawn' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: immediaterespawn를 클릭하거나 조작할 수 있습니다
- false일 때: immediaterespawn가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: immediaterespawn를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "immediaterespawn_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#immediaterespawn_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#import_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
import의 활성화 여부

**자세한 설명**
이 바인딩은 'import' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: import를 클릭하거나 조작할 수 있습니다
- false일 때: import가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: import를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "import_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#import_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#improved_input_response_options_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
improved input response options의 활성화 여부

**자세한 설명**
이 바인딩은 'improved input response options' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: improved input response options를 클릭하거나 조작할 수 있습니다
- false일 때: improved input response options가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: improved input response options를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "improved input response options_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#improved_input_response_options_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#inbox_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
inbox의 활성화 여부

**자세한 설명**
이 바인딩은 'inbox' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: inbox를 클릭하거나 조작할 수 있습니다
- false일 때: inbox가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: inbox를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "inbox_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#inbox_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
play screen, start screen (총 2개 파일)

</details>
<details>
<summary><strong>#include_entities_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
include entities의 활성화 여부

**자세한 설명**
이 바인딩은 'include entities' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: include entities를 클릭하거나 조작할 수 있습니다
- false일 때: include entities가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: include entities를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "include entities_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#include_entities_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#include_players_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
include players의 활성화 여부

**자세한 설명**
이 바인딩은 'include players' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: include players를 클릭하거나 조작할 수 있습니다
- false일 때: include players가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: include players를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "include players_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#include_players_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#infinite_link_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
infinite link의 활성화 여부

**자세한 설명**
이 바인딩은 'infinite link' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: infinite link를 클릭하거나 조작할 수 있습니다
- false일 때: infinite link가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: infinite link를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "infinite link_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#infinite_link_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realms invite link settings screen (총 1개 파일)

</details>
<details>
<summary><strong>#interation_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
interation button의 활성화 여부

**자세한 설명**
이 바인딩은 'interation button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: interation button를 클릭하거나 조작할 수 있습니다
- false일 때: interation button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: interation button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "interation button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#interation_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen (총 1개 파일)

</details>
<details>
<summary><strong>#interface_opacity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
interface opacity의 활성화 여부

**자세한 설명**
이 바인딩은 'interface opacity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: interface opacity를 클릭하거나 조작할 수 있습니다
- false일 때: interface opacity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: interface opacity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "interface opacity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#interface_opacity_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#invite_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
invite button의 활성화 여부

**자세한 설명**
이 바인딩은 'invite button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: invite button를 클릭하거나 조작할 수 있습니다
- false일 때: invite button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: invite button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "invite button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#invite_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pause screen (총 1개 파일)

</details>
<details>
<summary><strong>#is_claim_all_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
is claim all의 활성화 여부

**자세한 설명**
이 바인딩은 'is claim all' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: is claim all를 클릭하거나 조작할 수 있습니다
- false일 때: is claim all가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: is claim all를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "is claim all_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#is_claim_all_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#is_hardcore_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
is hardcore의 활성화 여부

**자세한 설명**
이 바인딩은 'is hardcore' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: is hardcore를 클릭하거나 조작할 수 있습니다
- false일 때: is hardcore가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: is hardcore를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "is hardcore_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#is_hardcore_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#is_none_option_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
is none option의 활성화 여부

**자세한 설명**
이 바인딩은 'is none option' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: is none option를 클릭하거나 조작할 수 있습니다
- false일 때: is none option가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: is none option를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "is none option_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#is_none_option_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL (총 1개 파일)

</details>
<details>
<summary><strong>#is_top_row_button_focus_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
is top row button focus의 활성화 여부

**자세한 설명**
이 바인딩은 'is top row button focus' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: is top row button focus를 클릭하거나 조작할 수 있습니다
- false일 때: is top row button focus가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: is top row button focus를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "is top row button focus_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#is_top_row_button_focus_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store data driven screen (총 1개 파일)

</details>
<details>
<summary><strong>#joint_type_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
joint type의 활성화 여부

**자세한 설명**
이 바인딩은 'joint type' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: joint type를 클릭하거나 조작할 수 있습니다
- false일 때: joint type가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: joint type를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "joint type_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#joint_type_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
jigsaw editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#joystick_visibility_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
joystick visibility dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'joystick visibility dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: joystick visibility dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: joystick visibility dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: joystick visibility dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "joystick visibility dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#joystick_visibility_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#keep_inventory_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
keep inventory의 활성화 여부

**자세한 설명**
이 바인딩은 'keep inventory' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: keep inventory를 클릭하거나 조작할 수 있습니다
- false일 때: keep inventory가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: keep inventory를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "keep inventory_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#keep_inventory_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#keyboard_mouse_autojump_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
keyboard mouse autojump의 활성화 여부

**자세한 설명**
이 바인딩은 'keyboard mouse autojump' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: keyboard mouse autojump를 클릭하거나 조작할 수 있습니다
- false일 때: keyboard mouse autojump가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: keyboard mouse autojump를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "keyboard mouse autojump_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#keyboard_mouse_autojump_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#keyboard_mouse_invert_y_axis_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
keyboard mouse invert y axis의 활성화 여부

**자세한 설명**
이 바인딩은 'keyboard mouse invert y axis' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: keyboard mouse invert y axis를 클릭하거나 조작할 수 있습니다
- false일 때: keyboard mouse invert y axis가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: keyboard mouse invert y axis를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "keyboard mouse invert y axis_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#keyboard_mouse_invert_y_axis_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#keyboard_mouse_sensitivity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
keyboard mouse sensitivity의 활성화 여부

**자세한 설명**
이 바인딩은 'keyboard mouse sensitivity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: keyboard mouse sensitivity를 클릭하거나 조작할 수 있습니다
- false일 때: keyboard mouse sensitivity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: keyboard mouse sensitivity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "keyboard mouse sensitivity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#keyboard_mouse_sensitivity_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#keyboard_mouse_toggle_crouch_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
keyboard mouse toggle crouch의 활성화 여부

**자세한 설명**
이 바인딩은 'keyboard mouse toggle crouch' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: keyboard mouse toggle crouch를 클릭하거나 조작할 수 있습니다
- false일 때: keyboard mouse toggle crouch가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: keyboard mouse toggle crouch를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "keyboard mouse toggle crouch_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#keyboard_mouse_toggle_crouch_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#keyboard_show_full_keyboard_options_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
keyboard show full keyboard options의 활성화 여부

**자세한 설명**
이 바인딩은 'keyboard show full keyboard options' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: keyboard show full keyboard options를 클릭하거나 조작할 수 있습니다
- false일 때: keyboard show full keyboard options가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: keyboard show full keyboard options를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "keyboard show full keyboard options_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#keyboard_show_full_keyboard_options_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#keyboard_smooth_rotation_speed_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
keyboard smooth rotation speed의 활성화 여부

**자세한 설명**
이 바인딩은 'keyboard smooth rotation speed' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: keyboard smooth rotation speed를 클릭하거나 조작할 수 있습니다
- false일 때: keyboard smooth rotation speed가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: keyboard smooth rotation speed를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "keyboard smooth rotation speed_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#keyboard_smooth_rotation_speed_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#kick_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
kick button의 활성화 여부

**자세한 설명**
이 바인딩은 'kick button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: kick button를 클릭하거나 조작할 수 있습니다
- false일 때: kick button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: kick button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "kick button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#kick_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
permissions screen (총 1개 파일)

</details>
<details>
<summary><strong>#leak_memory_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
leak memory의 활성화 여부

**자세한 설명**
이 바인딩은 'leak memory' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: leak memory를 클릭하거나 조작할 수 있습니다
- false일 때: leak memory가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: leak memory를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "leak memory_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#leak_memory_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#left_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
left button의 활성화 여부

**자세한 설명**
이 바인딩은 'left button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: left button를 클릭하거나 조작할 수 있습니다
- false일 때: left button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: left button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "left button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#left_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
trade screen (총 1개 파일)

</details>
<details>
<summary><strong>#left_color_cycle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
left color cycle의 활성화 여부

**자세한 설명**
이 바인딩은 'left color cycle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: left color cycle를 클릭하거나 조작할 수 있습니다
- false일 때: left color cycle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: left color cycle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "left color cycle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#left_color_cycle_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL (총 1개 파일)

</details>
<details>
<summary><strong>#left_handed_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
left handed의 활성화 여부

**자세한 설명**
이 바인딩은 'left handed' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: left handed를 클릭하거나 조작할 수 있습니다
- false일 때: left handed가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: left handed를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "left handed_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#left_handed_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#left_limb_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
left limb의 활성화 여부

**자세한 설명**
이 바인딩은 'left limb' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: left limb를 클릭하거나 조작할 수 있습니다
- false일 때: left limb가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: left limb를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "left limb_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#left_limb_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL (총 1개 파일)

</details>
<details>
<summary><strong>#legacy_invite_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
legacy invite button의 활성화 여부

**자세한 설명**
이 바인딩은 'legacy invite button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: legacy invite button를 클릭하거나 조작할 수 있습니다
- false일 때: legacy invite button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: legacy invite button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "legacy invite button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#legacy_invite_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pause screen (총 1개 파일)

</details>
<details>
<summary><strong>#load_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
load의 활성화 여부

**자세한 설명**
이 바인딩은 'load' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: load를 클릭하거나 조작할 수 있습니다
- false일 때: load가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: load를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "load_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#load_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#locator_bar_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
locator bar의 활성화 여부

**자세한 설명**
이 바인딩은 'locator bar' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: locator bar를 클릭하거나 조작할 수 있습니다
- false일 때: locator bar가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: locator bar를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "locator bar_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#locator_bar_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#main_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
main volume의 활성화 여부

**자세한 설명**
이 바인딩은 'main volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: main volume를 클릭하거나 조작할 수 있습니다
- false일 때: main volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: main volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "main volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#main_volume_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#manage_feed_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
manage feed button의 활성화 여부

**자세한 설명**
이 바인딩은 'manage feed button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: manage feed button를 클릭하거나 조작할 수 있습니다
- false일 때: manage feed button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: manage feed button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "manage feed button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#manage_feed_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section (총 1개 파일)

</details>
<details>
<summary><strong>#max_framerate_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
max framerate의 활성화 여부

**자세한 설명**
이 바인딩은 'max framerate' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: max framerate를 클릭하거나 조작할 수 있습니다
- false일 때: max framerate가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: max framerate를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "max framerate_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#max_framerate_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#members_list_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
members list의 활성화 여부

**자세한 설명**
이 바인딩은 'members list' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: members list를 클릭하거나 조작할 수 있습니다
- false일 때: members list가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: members list를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "members list_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#members_list_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realms allowlist (총 1개 파일)

</details>
<details>
<summary><strong>#minimum_template_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
minimum template의 활성화 여부

**자세한 설명**
이 바인딩은 'minimum template' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: minimum template를 클릭하거나 조작할 수 있습니다
- false일 때: minimum template가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: minimum template를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "minimum template_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#minimum_template_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#mirror_x_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
mirror x의 활성화 여부

**자세한 설명**
이 바인딩은 'mirror x' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: mirror x를 클릭하거나 조작할 수 있습니다
- false일 때: mirror x가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: mirror x를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "mirror x_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#mirror_x_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#mirror_z_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
mirror z의 활성화 여부

**자세한 설명**
이 바인딩은 'mirror z' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: mirror z를 클릭하거나 조작할 수 있습니다
- false일 때: mirror z가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: mirror z를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "mirror z_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#mirror_z_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#mob_griefing_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
mob griefing의 활성화 여부

**자세한 설명**
이 바인딩은 'mob griefing' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: mob griefing를 클릭하거나 조작할 수 있습니다
- false일 때: mob griefing가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: mob griefing를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "mob griefing_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#mob_griefing_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#mob_loot_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
mob loot의 활성화 여부

**자세한 설명**
이 바인딩은 'mob loot' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: mob loot를 클릭하거나 조작할 수 있습니다
- false일 때: mob loot가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: mob loot를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "mob loot_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#mob_loot_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#mob_spawn_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
mob spawn의 활성화 여부

**자세한 설명**
이 바인딩은 'mob spawn' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: mob spawn를 클릭하거나 조작할 수 있습니다
- false일 때: mob spawn가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: mob spawn를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "mob spawn_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#mob_spawn_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#mode_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#modify_layout_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
modify layout의 활성화 여부

**자세한 설명**
이 바인딩은 'modify layout' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: modify layout를 클릭하거나 조작할 수 있습니다
- false일 때: modify layout가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: modify layout를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "modify layout_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#modify_layout_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#msaa_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
msaa의 활성화 여부

**자세한 설명**
이 바인딩은 'msaa' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: msaa를 클릭하거나 조작할 수 있습니다
- false일 때: msaa가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: msaa를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "msaa_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#msaa_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#multiplayer_game_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
multiplayer game의 활성화 여부

**자세한 설명**
이 바인딩은 'multiplayer game' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: multiplayer game를 클릭하거나 조작할 수 있습니다
- false일 때: multiplayer game가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: multiplayer game를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "multiplayer game_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#multiplayer_game_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#multithreaded_rendering_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
multithreaded rendering의 활성화 여부

**자세한 설명**
이 바인딩은 'multithreaded rendering' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: multithreaded rendering를 클릭하거나 조작할 수 있습니다
- false일 때: multithreaded rendering가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: multithreaded rendering를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "multithreaded rendering_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#multithreaded_rendering_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#music_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
music volume의 활성화 여부

**자세한 설명**
이 바인딩은 'music volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: music volume를 클릭하거나 조작할 수 있습니다
- false일 때: music volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: music volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "music volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#music_volume_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#natural_regeneration_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
natural regeneration의 활성화 여부

**자세한 설명**
이 바인딩은 'natural regeneration' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: natural regeneration를 클릭하거나 조작할 수 있습니다
- false일 때: natural regeneration가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: natural regeneration를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "natural regeneration_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#natural_regeneration_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#network_world_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
network world button의 활성화 여부

**자세한 설명**
이 바인딩은 'network world button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: network world button를 클릭하거나 조작할 수 있습니다
- false일 때: network world button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: network world button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "network world button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#network_world_button_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#neutral_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
neutral volume의 활성화 여부

**자세한 설명**
이 바인딩은 'neutral volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: neutral volume를 클릭하거나 조작할 수 있습니다
- false일 때: neutral volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: neutral volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "neutral volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#neutral_volume_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#new_touch_control_schemes_preview_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
new touch control schemes preview의 활성화 여부

**자세한 설명**
이 바인딩은 'new touch control schemes preview' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: new touch control schemes preview를 클릭하거나 조작할 수 있습니다
- false일 때: new touch control schemes preview가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: new touch control schemes preview를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "new touch control schemes preview_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#new_touch_control_schemes_preview_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#next_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
next button의 활성화 여부

**자세한 설명**
이 바인딩은 'next button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: next button를 클릭하거나 조작할 수 있습니다
- false일 때: next button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: next button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "next button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#next_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
day one experience screen, invite screen (총 2개 파일)

</details>
<details>
<summary><strong>#next_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
next의 활성화 여부

**자세한 설명**
이 바인딩은 'next' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: next를 클릭하거나 조작할 수 있습니다
- false일 때: next가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: next를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "next_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#next_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#on_enter_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
on enter의 활성화 여부

**자세한 설명**
이 바인딩은 'on enter' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: on enter를 클릭하거나 조작할 수 있습니다
- false일 때: on enter가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: on enter를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "on enter_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#on_enter_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#on_exit_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
on exit의 활성화 여부

**자세한 설명**
이 바인딩은 'on exit' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: on exit를 클릭하거나 조작할 수 있습니다
- false일 때: on exit가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: on exit를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "on exit_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#on_exit_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#only_trusted_skins_allowed_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
only trusted skins allowed의 활성화 여부

**자세한 설명**
이 바인딩은 'only trusted skins allowed' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: only trusted skins allowed를 클릭하거나 조작할 수 있습니다
- false일 때: only trusted skins allowed가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: only trusted skins allowed를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "only trusted skins allowed_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#only_trusted_skins_allowed_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#opacity_option_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
opacity option의 활성화 여부

**자세한 설명**
이 바인딩은 'opacity option' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: opacity option를 클릭하거나 조작할 수 있습니다
- false일 때: opacity option가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: opacity option를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "opacity option_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#opacity_option_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#open_color_picker_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
open color picker button의 활성화 여부

**자세한 설명**
이 바인딩은 'open color picker button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: open color picker button를 클릭하거나 조작할 수 있습니다
- false일 때: open color picker button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: open color picker button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "open color picker button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#open_color_picker_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL (총 1개 파일)

</details>
<details>
<summary><strong>#party_invite_filter_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
party invite filter dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'party invite filter dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: party invite filter dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: party invite filter dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: party invite filter dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "party invite filter dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#party_invite_filter_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/social section (총 1개 파일)

</details>
<details>
<summary><strong>#party_invite_send_privileges_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
party invite send privileges dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'party invite send privileges dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: party invite send privileges dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: party invite send privileges dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: party invite send privileges dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "party invite send privileges dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#party_invite_send_privileges_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/social section (총 1개 파일)

</details>
<details>
<summary><strong>#party_privacy_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
party privacy dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'party privacy dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: party privacy dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: party privacy dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: party privacy dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "party privacy dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#party_privacy_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/social section (총 1개 파일)

</details>
<details>
<summary><strong>#party_visibility_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
party visibility dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'party visibility dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: party visibility dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: party visibility dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: party visibility dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "party visibility dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#party_visibility_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/social section (총 1개 파일)

</details>
<details>
<summary><strong>#pause_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
pause toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'pause toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: pause toggle를 클릭하거나 조작할 수 있습니다
- false일 때: pause toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: pause toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "pause toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#pause_toggle_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#perf_turtle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
perf turtle의 활성화 여부

**자세한 설명**
이 바인딩은 'perf turtle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: perf turtle를 클릭하거나 조작할 수 있습니다
- false일 때: perf turtle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: perf turtle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "perf turtle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#perf_turtle_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#persona_and_skins_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
persona and skins의 활성화 여부

**자세한 설명**
이 바인딩은 'persona and skins' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: persona and skins를 클릭하거나 조작할 수 있습니다
- false일 때: persona and skins가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: persona and skins를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "persona and skins_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#persona_and_skins_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#platform_broadcast_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
platform broadcast dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'platform broadcast dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: platform broadcast dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: platform broadcast dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: platform broadcast dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "platform broadcast dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#platform_broadcast_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#play_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
play button의 활성화 여부

**자세한 설명**
이 바인딩은 'play button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: play button를 클릭하거나 조작할 수 있습니다
- false일 때: play button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: play button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "play button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#play_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
add external server screen, realms settings screen (총 2개 파일)

</details>
<details>
<summary><strong>#player_game_mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
player game mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'player game mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: player game mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: player game mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: player game mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "player game mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#player_game_mode_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#player_permissions_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
player permissions dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'player permissions dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: player permissions dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: player permissions dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: player permissions dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "player permissions dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#player_permissions_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realms allowlist, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#player_sleep_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
player sleep의 활성화 여부

**자세한 설명**
이 바인딩은 'player sleep' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: player sleep를 클릭하거나 조작할 수 있습니다
- false일 때: player sleep가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: player sleep를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "player sleep_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#player_sleep_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#player_sleep_percentage_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
player sleep percentage의 활성화 여부

**자세한 설명**
이 바인딩은 'player sleep percentage' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: player sleep percentage를 클릭하거나 조작할 수 있습니다
- false일 때: player sleep percentage가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: player sleep percentage를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "player sleep percentage_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#player_sleep_percentage_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#player_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
player volume의 활성화 여부

**자세한 설명**
이 바인딩은 'player volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: player volume를 클릭하거나 조작할 수 있습니다
- false일 때: player volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: player volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "player volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#player_volume_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#playfab_token_refresh_threshold_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
playfab token refresh threshold의 활성화 여부

**자세한 설명**
이 바인딩은 'playfab token refresh threshold' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: playfab token refresh threshold를 클릭하거나 조작할 수 있습니다
- false일 때: playfab token refresh threshold가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: playfab token refresh threshold를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "playfab token refresh threshold_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#playfab_token_refresh_threshold_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#previous_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
previous button의 활성화 여부

**자세한 설명**
이 바인딩은 'previous button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: previous button를 클릭하거나 조작할 수 있습니다
- false일 때: previous button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: previous button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "previous button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#previous_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
invite screen (총 1개 파일)

</details>
<details>
<summary><strong>#purchase_buttons_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
purchase buttons의 활성화 여부

**자세한 설명**
이 바인딩은 'purchase buttons' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: purchase buttons를 클릭하거나 조작할 수 있습니다
- false일 때: purchase buttons가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: purchase buttons를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "purchase buttons_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#purchase_buttons_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen (총 1개 파일)

</details>
<details>
<summary><strong>#pvp_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
pvp의 활성화 여부

**자세한 설명**
이 바인딩은 'pvp' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: pvp를 클릭하거나 조작할 수 있습니다
- false일 때: pvp가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: pvp를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "pvp_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#pvp_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#quit_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
quit의 활성화 여부

**자세한 설명**
이 바인딩은 'quit' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: quit를 클릭하거나 조작할 수 있습니다
- false일 때: quit가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: quit를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "quit_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#quit_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
death screen (총 1개 파일)

</details>
<details>
<summary><strong>#random_tick_speed_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
random tick speed의 활성화 여부

**자세한 설명**
이 바인딩은 'random tick speed' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: random tick speed를 클릭하거나 조작할 수 있습니다
- false일 때: random tick speed가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: random tick speed를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "random tick speed_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#random_tick_speed_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#ratings_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
ratings button의 활성화 여부

**자세한 설명**
이 바인딩은 'ratings button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: ratings button를 클릭하거나 조작할 수 있습니다
- false일 때: ratings button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: ratings button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "ratings button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#ratings_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen (총 1개 파일)

</details>
<details>
<summary><strong>#raytracing_render_distance_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
raytracing render distance의 활성화 여부

**자세한 설명**
이 바인딩은 'raytracing render distance' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: raytracing render distance를 클릭하거나 조작할 수 있습니다
- false일 때: raytracing render distance가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: raytracing render distance를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "raytracing render distance_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#raytracing_render_distance_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#realm_default_permission_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
realm default permission dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'realm default permission dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: realm default permission dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: realm default permission dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: realm default permission dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "realm default permission dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#realm_default_permission_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realms allowlist (총 1개 파일)

</details>
<details>
<summary><strong>#realm_description_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
realm description의 활성화 여부

**자세한 설명**
이 바인딩은 'realm description' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: realm description를 클릭하거나 조작할 수 있습니다
- false일 때: realm description가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: realm description를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "realm description_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#realm_description_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section (총 1개 파일)

</details>
<details>
<summary><strong>#realm_name_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
realm name의 활성화 여부

**자세한 설명**
이 바인딩은 'realm name' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: realm name를 클릭하거나 조작할 수 있습니다
- false일 때: realm name가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: realm name를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "realm name_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#realm_name_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section (총 1개 파일)

</details>
<details>
<summary><strong>#realms_contentSub_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
realms contentsub의 활성화 여부

**자세한 설명**
이 바인딩은 'realms contentsub' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: realms contentsub를 클릭하거나 조작할 수 있습니다
- false일 때: realms contentsub가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: realms contentsub를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "realms contentsub_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#realms_contentsub_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realmsPlus sections/content section (총 1개 파일)

</details>
<details>
<summary><strong>#realms_difficulty_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
realms difficulty dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'realms difficulty dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: realms difficulty dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: realms difficulty dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: realms difficulty dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "realms difficulty dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#realms_difficulty_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section (총 1개 파일)

</details>
<details>
<summary><strong>#realms_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
realms의 활성화 여부

**자세한 설명**
이 바인딩은 'realms' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: realms를 클릭하거나 조작할 수 있습니다
- false일 때: realms가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: realms를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "realms_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#realms_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#realms_game_mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
realms game mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'realms game mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: realms game mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: realms game mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: realms game mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "realms game mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#realms_game_mode_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section (총 1개 파일)

</details>
<details>
<summary><strong>#recipes_unlock_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
recipes unlock의 활성화 여부

**자세한 설명**
이 바인딩은 'recipes unlock' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: recipes unlock를 클릭하거나 조작할 수 있습니다
- false일 때: recipes unlock가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: recipes unlock를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "recipes unlock_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#recipes_unlock_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#record_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
record volume의 활성화 여부

**자세한 설명**
이 바인딩은 'record volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: record volume를 클릭하거나 조작할 수 있습니다
- false일 때: record volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: record volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "record volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#record_volume_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#redstone_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
redstone dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'redstone dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: redstone dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: redstone dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: redstone dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "redstone dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#redstone_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
command block screen, structure editor screen (총 2개 파일)

</details>
<details>
<summary><strong>#remote_imgui_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
remote imgui의 활성화 여부

**자세한 설명**
이 바인딩은 'remote imgui' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: remote imgui를 클릭하거나 조작할 수 있습니다
- false일 때: remote imgui가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: remote imgui를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "remote imgui_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#remote_imgui_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#remove_blocks_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
remove blocks의 활성화 여부

**자세한 설명**
이 바인딩은 'remove blocks' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: remove blocks를 클릭하거나 조작할 수 있습니다
- false일 때: remove blocks가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: remove blocks를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "remove blocks_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#remove_blocks_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#render_clouds_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
render clouds의 활성화 여부

**자세한 설명**
이 바인딩은 'render clouds' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: render clouds를 클릭하거나 조작할 수 있습니다
- false일 때: render clouds가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: render clouds를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "render clouds_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#render_clouds_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#render_distance_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
render distance의 활성화 여부

**자세한 설명**
이 바인딩은 'render distance' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: render distance를 클릭하거나 조작할 수 있습니다
- false일 때: render distance가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: render distance를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "render distance_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#render_distance_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#rendering_profile_slider_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
rendering profile slider의 활성화 여부

**자세한 설명**
이 바인딩은 'rendering profile slider' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: rendering profile slider를 클릭하거나 조작할 수 있습니다
- false일 때: rendering profile slider가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: rendering profile slider를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "rendering profile slider_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#rendering_profile_slider_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#reset_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
reset button의 활성화 여부

**자세한 설명**
이 바인딩은 'reset button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: reset button를 클릭하거나 조작할 수 있습니다
- false일 때: reset button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: reset button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "reset button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#reset_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section (총 1개 파일)

</details>
<details>
<summary><strong>#reset_on_start_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
reset on start의 활성화 여부

**자세한 설명**
이 바인딩은 'reset on start' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: reset on start를 클릭하거나 조작할 수 있습니다
- false일 때: reset on start가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: reset on start를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "reset on start_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#reset_on_start_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#resizable_ui_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
resizable ui의 활성화 여부

**자세한 설명**
이 바인딩은 'resizable ui' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: resizable ui를 클릭하거나 조작할 수 있습니다
- false일 때: resizable ui가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: resizable ui를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "resizable ui_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#resizable_ui_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#resource_uri_done_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
resource uri done의 활성화 여부

**자세한 설명**
이 바인딩은 'resource uri done' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: resource uri done를 클릭하거나 조작할 수 있습니다
- false일 때: resource uri done가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: resource uri done를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "resource uri done_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#resource_uri_done_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
ui edu common (총 1개 파일)

</details>
<details>
<summary><strong>#respawn_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
respawn의 활성화 여부

**자세한 설명**
이 바인딩은 'respawn' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: respawn를 클릭하거나 조작할 수 있습니다
- false일 때: respawn가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: respawn를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "respawn_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#respawn_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
death screen (총 1개 파일)

</details>
<details>
<summary><strong>#respawn_radius_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
respawn radius의 활성화 여부

**자세한 설명**
이 바인딩은 'respawn radius' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: respawn radius를 클릭하거나 조작할 수 있습니다
- false일 때: respawn radius가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: respawn radius를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "respawn radius_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#respawn_radius_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#right_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
right button의 활성화 여부

**자세한 설명**
이 바인딩은 'right button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: right button를 클릭하거나 조작할 수 있습니다
- false일 때: right button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: right button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "right button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#right_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
trade screen (총 1개 파일)

</details>
<details>
<summary><strong>#right_color_cycle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
right color cycle의 활성화 여부

**자세한 설명**
이 바인딩은 'right color cycle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: right color cycle를 클릭하거나 조작할 수 있습니다
- false일 때: right color cycle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: right color cycle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "right color cycle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#right_color_cycle_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL (총 1개 파일)

</details>
<details>
<summary><strong>#right_limb_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
right limb의 활성화 여부

**자세한 설명**
이 바인딩은 'right limb' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: right limb를 클릭하거나 조작할 수 있습니다
- false일 때: right limb가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: right limb를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "right limb_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#right_limb_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL (총 1개 파일)

</details>
<details>
<summary><strong>#rotation_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
rotation의 활성화 여부

**자세한 설명**
이 바인딩은 'rotation' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: rotation를 클릭하거나 조작할 수 있습니다
- false일 때: rotation가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: rotation를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "rotation_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#rotation_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#safe_zone_all_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
safe zone all의 활성화 여부

**자세한 설명**
이 바인딩은 'safe zone all' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: safe zone all를 클릭하거나 조작할 수 있습니다
- false일 때: safe zone all가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: safe zone all를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "safe zone all_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#safe_zone_all_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
safe zone screen (총 1개 파일)

</details>
<details>
<summary><strong>#safe_zone_x_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
safe zone x의 활성화 여부

**자세한 설명**
이 바인딩은 'safe zone x' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: safe zone x를 클릭하거나 조작할 수 있습니다
- false일 때: safe zone x가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: safe zone x를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "safe zone x_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#safe_zone_x_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
safe zone screen (총 1개 파일)

</details>
<details>
<summary><strong>#safe_zone_y_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
safe zone y의 활성화 여부

**자세한 설명**
이 바인딩은 'safe zone y' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: safe zone y를 클릭하거나 조작할 수 있습니다
- false일 때: safe zone y가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: safe zone y를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "safe zone y_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#safe_zone_y_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
safe zone screen (총 1개 파일)

</details>
<details>
<summary><strong>#save_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
save button의 활성화 여부

**자세한 설명**
이 바인딩은 'save button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: save button를 클릭하거나 조작할 수 있습니다
- false일 때: save button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: save button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "save button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#save_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
add external server screen (총 1개 파일)

</details>
<details>
<summary><strong>#save_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
save의 활성화 여부

**자세한 설명**
이 바인딩은 'save' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: save를 클릭하거나 조작할 수 있습니다
- false일 때: save가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: save를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "save_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#save_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#saves_tab_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
saves tab의 활성화 여부

**자세한 설명**
이 바인딩은 'saves tab' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: saves tab를 클릭하거나 조작할 수 있습니다
- false일 때: saves tab가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: saves tab를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "saves tab_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#saves_tab_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#scale_option_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
scale option의 활성화 여부

**자세한 설명**
이 바인딩은 'scale option' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: scale option를 클릭하거나 조작할 수 있습니다
- false일 때: scale option가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: scale option를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "scale option_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#scale_option_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#screen_animations_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
screen animations의 활성화 여부

**자세한 설명**
이 바인딩은 'screen animations' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: screen animations를 클릭하거나 조작할 수 있습니다
- false일 때: screen animations가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: screen animations를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "screen animations_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#screen_animations_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#screen_position_x_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
screen position x의 활성화 여부

**자세한 설명**
이 바인딩은 'screen position x' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: screen position x를 클릭하거나 조작할 수 있습니다
- false일 때: screen position x가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: screen position x를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "screen position x_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#screen_position_x_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
safe zone screen (총 1개 파일)

</details>
<details>
<summary><strong>#screen_position_y_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
screen position y의 활성화 여부

**자세한 설명**
이 바인딩은 'screen position y' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: screen position y를 클릭하거나 조작할 수 있습니다
- false일 때: screen position y가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: screen position y를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "screen position y_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#screen_position_y_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
safe zone screen (총 1개 파일)

</details>
<details>
<summary><strong>#screenshots_gallery_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
screenshots gallery의 활성화 여부

**자세한 설명**
이 바인딩은 'screenshots gallery' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: screenshots gallery를 클릭하거나 조작할 수 있습니다
- false일 때: screenshots gallery가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: screenshots gallery를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "screenshots gallery_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#screenshots_gallery_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
storage management (총 1개 파일)

</details>
<details>
<summary><strong>#screenshots_showcase_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
screenshots showcase의 활성화 여부

**자세한 설명**
이 바인딩은 'screenshots showcase' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: screenshots showcase를 클릭하거나 조작할 수 있습니다
- false일 때: screenshots showcase가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: screenshots showcase를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "screenshots showcase_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#screenshots_showcase_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
storage management (총 1개 파일)

</details>
<details>
<summary><strong>#script_debugger_auto_attach_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script debugger auto attach의 활성화 여부

**자세한 설명**
이 바인딩은 'script debugger auto attach' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script debugger auto attach를 클릭하거나 조작할 수 있습니다
- false일 때: script debugger auto attach가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script debugger auto attach를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script debugger auto attach_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_debugger_auto_attach_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_debugger_auto_attach_timeout_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script debugger auto attach timeout의 활성화 여부

**자세한 설명**
이 바인딩은 'script debugger auto attach timeout' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script debugger auto attach timeout를 클릭하거나 조작할 수 있습니다
- false일 때: script debugger auto attach timeout가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script debugger auto attach timeout를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script debugger auto attach timeout_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_debugger_auto_attach_timeout_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_debugger_options_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script debugger options의 활성화 여부

**자세한 설명**
이 바인딩은 'script debugger options' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script debugger options를 클릭하거나 조작할 수 있습니다
- false일 때: script debugger options가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script debugger options를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script debugger options_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_debugger_options_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_debugger_passcode_required_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script debugger passcode required의 활성화 여부

**자세한 설명**
이 바인딩은 'script debugger passcode required' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script debugger passcode required를 클릭하거나 조작할 수 있습니다
- false일 때: script debugger passcode required가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script debugger passcode required를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script debugger passcode required_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_debugger_passcode_required_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_watchdog_hang_threshold_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script watchdog hang threshold의 활성화 여부

**자세한 설명**
이 바인딩은 'script watchdog hang threshold' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script watchdog hang threshold를 클릭하거나 조작할 수 있습니다
- false일 때: script watchdog hang threshold가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script watchdog hang threshold를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script watchdog hang threshold_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_watchdog_hang_threshold_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_watchdog_options_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script watchdog options의 활성화 여부

**자세한 설명**
이 바인딩은 'script watchdog options' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script watchdog options를 클릭하거나 조작할 수 있습니다
- false일 때: script watchdog options가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script watchdog options를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script watchdog options_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_watchdog_options_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_watchdog_slow_threshold_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script watchdog slow threshold의 활성화 여부

**자세한 설명**
이 바인딩은 'script watchdog slow threshold' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script watchdog slow threshold를 클릭하거나 조작할 수 있습니다
- false일 때: script watchdog slow threshold가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script watchdog slow threshold를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script watchdog slow threshold_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_watchdog_slow_threshold_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_watchdog_slow_warning_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script watchdog slow warning의 활성화 여부

**자세한 설명**
이 바인딩은 'script watchdog slow warning' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script watchdog slow warning를 클릭하거나 조작할 수 있습니다
- false일 때: script watchdog slow warning가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script watchdog slow warning를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script watchdog slow warning_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_watchdog_slow_warning_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_watchdog_spike_threshold_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script watchdog spike threshold의 활성화 여부

**자세한 설명**
이 바인딩은 'script watchdog spike threshold' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script watchdog spike threshold를 클릭하거나 조작할 수 있습니다
- false일 때: script watchdog spike threshold가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script watchdog spike threshold를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script watchdog spike threshold_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_watchdog_spike_threshold_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#script_watchdog_spike_warning_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
script watchdog spike warning의 활성화 여부

**자세한 설명**
이 바인딩은 'script watchdog spike warning' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: script watchdog spike warning를 클릭하거나 조작할 수 있습니다
- false일 때: script watchdog spike warning가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: script watchdog spike warning를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "script watchdog spike warning_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#script_watchdog_spike_warning_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#search_bar_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
search bar의 활성화 여부

**자세한 설명**
이 바인딩은 'search bar' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: search bar를 클릭하거나 조작할 수 있습니다
- false일 때: search bar가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: search bar를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "search bar_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#search_bar_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#search_screen_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
search screen의 활성화 여부

**자세한 설명**
이 바인딩은 'search screen' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: search screen를 클릭하거나 조작할 수 있습니다
- false일 때: search screen가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: search screen를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "search screen_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#search_screen_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#server_sim_distance_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
server sim distance의 활성화 여부

**자세한 설명**
이 바인딩은 'server sim distance' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: server sim distance를 클릭하거나 조작할 수 있습니다
- false일 때: server sim distance가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: server sim distance를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "server sim distance_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#server_sim_distance_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#server_visibility_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
server visibility의 활성화 여부

**자세한 설명**
이 바인딩은 'server visibility' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: server visibility를 클릭하거나 조작할 수 있습니다
- false일 때: server visibility가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: server visibility를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "server visibility_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#server_visibility_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>
<details>
<summary><strong>#serverbound_client_diagnostics_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
serverbound client diagnostics의 활성화 여부

**자세한 설명**
이 바인딩은 'serverbound client diagnostics' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: serverbound client diagnostics를 클릭하거나 조작할 수 있습니다
- false일 때: serverbound client diagnostics가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: serverbound client diagnostics를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "serverbound client diagnostics_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#serverbound_client_diagnostics_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#shadersdk_service_ip_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
shadersdk service ip의 활성화 여부

**자세한 설명**
이 바인딩은 'shadersdk service ip' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: shadersdk service ip를 클릭하거나 조작할 수 있습니다
- false일 때: shadersdk service ip가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: shadersdk service ip를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "shadersdk service ip_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#shadersdk_service_ip_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#shadersdk_service_port_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
shadersdk service port의 활성화 여부

**자세한 설명**
이 바인딩은 'shadersdk service port' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: shadersdk service port를 클릭하거나 조작할 수 있습니다
- false일 때: shadersdk service port가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: shadersdk service port를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "shadersdk service port_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#shadersdk_service_port_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#shadersdk_target_port_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
shadersdk target port의 활성화 여부

**자세한 설명**
이 바인딩은 'shadersdk target port' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: shadersdk target port를 클릭하거나 조작할 수 있습니다
- false일 때: shadersdk target port가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: shadersdk target port를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "shadersdk target port_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#shadersdk_target_port_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#share_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
share button의 활성화 여부

**자세한 설명**
이 바인딩은 'share button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: share button를 클릭하거나 조작할 수 있습니다
- false일 때: share button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: share button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "share button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#share_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen, storage management (총 2개 파일)

</details>
<details>
<summary><strong>#share_link_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
share link의 활성화 여부

**자세한 설명**
이 바인딩은 'share link' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: share link를 클릭하거나 조작할 수 있습니다
- false일 때: share link가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: share link를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "share link_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#share_link_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realms invite link settings screen (총 1개 파일)

</details>
<details>
<summary><strong>#show_action_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show action button의 활성화 여부

**자세한 설명**
이 바인딩은 'show action button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show action button를 클릭하거나 조작할 수 있습니다
- false일 때: show action button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show action button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show action button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_action_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#show_ad_debug_panel_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show ad debug panel button의 활성화 여부

**자세한 설명**
이 바인딩은 'show ad debug panel button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show ad debug panel button를 클릭하거나 조작할 수 있습니다
- false일 때: show ad debug panel button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show ad debug panel button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show ad debug panel button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_ad_debug_panel_button_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#show_auto_save_icon_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show auto save icon의 활성화 여부

**자세한 설명**
이 바인딩은 'show auto save icon' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show auto save icon를 클릭하거나 조작할 수 있습니다
- false일 때: show auto save icon가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show auto save icon를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show auto save icon_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_auto_save_icon_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#show_block_select_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show block select button의 활성화 여부

**자세한 설명**
이 바인딩은 'show block select button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show block select button를 클릭하거나 조작할 수 있습니다
- false일 때: show block select button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show block select button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show block select button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_block_select_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#show_bounding_box_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show bounding box의 활성화 여부

**자세한 설명**
이 바인딩은 'show bounding box' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show bounding box를 클릭하거나 조작할 수 있습니다
- false일 때: show bounding box가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show bounding box를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show bounding box_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_bounding_box_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
structure editor screen (총 1개 파일)

</details>
<details>
<summary><strong>#show_coordinates_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show coordinates의 활성화 여부

**자세한 설명**
이 바인딩은 'show coordinates' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show coordinates를 클릭하거나 조작할 수 있습니다
- false일 때: show coordinates가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show coordinates를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show coordinates_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_coordinates_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#show_days_played_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show days played의 활성화 여부

**자세한 설명**
이 바인딩은 'show days played' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show days played를 클릭하거나 조작할 수 있습니다
- false일 때: show days played가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show days played를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show days played_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_days_played_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/realms world section, settings sections/world section (총 2개 파일)

</details>
<details>
<summary><strong>#show_toggle_camera_perspective_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show toggle camera perspective button의 활성화 여부

**자세한 설명**
이 바인딩은 'show toggle camera perspective button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show toggle camera perspective button를 클릭하거나 조작할 수 있습니다
- false일 때: show toggle camera perspective button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show toggle camera perspective button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show toggle camera perspective button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_toggle_camera_perspective_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/controls section (총 1개 파일)

</details>
<details>
<summary><strong>#show_touch_control_selection_screen_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
show touch control selection screen의 활성화 여부

**자세한 설명**
이 바인딩은 'show touch control selection screen' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: show touch control selection screen를 클릭하거나 조작할 수 있습니다
- false일 때: show touch control selection screen가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: show touch control selection screen를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "show touch control selection screen_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#show_touch_control_selection_screen_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#sidebar_nav_image_bilinear_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
sidebar nav image bilinear의 활성화 여부

**자세한 설명**
이 바인딩은 'sidebar nav image bilinear' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: sidebar nav image bilinear를 클릭하거나 조작할 수 있습니다
- false일 때: sidebar nav image bilinear가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: sidebar nav image bilinear를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "sidebar nav image bilinear_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#sidebar_nav_image_bilinear_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
sidebar navigation (총 1개 파일)

</details>
<details>
<summary><strong>#skin_cycle_pack_left_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
skin cycle pack left button의 활성화 여부

**자세한 설명**
이 바인딩은 'skin cycle pack left button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: skin cycle pack left button를 클릭하거나 조작할 수 있습니다
- false일 때: skin cycle pack left button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: skin cycle pack left button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "skin cycle pack left button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#skin_cycle_pack_left_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
skin pack purchase screen (총 1개 파일)

</details>
<details>
<summary><strong>#skin_cycle_pack_right_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
skin cycle pack right button의 활성화 여부

**자세한 설명**
이 바인딩은 'skin cycle pack right button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: skin cycle pack right button를 클릭하거나 조작할 수 있습니다
- false일 때: skin cycle pack right button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: skin cycle pack right button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "skin cycle pack right button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#skin_cycle_pack_right_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
skin pack purchase screen (총 1개 파일)

</details>
<details>
<summary><strong>#slider_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
slider의 활성화 여부

**자세한 설명**
이 바인딩은 'slider' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: slider를 클릭하거나 조작할 수 있습니다
- false일 때: slider가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: slider를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "slider_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#slider_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#smooth_lighting_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
smooth lighting의 활성화 여부

**자세한 설명**
이 바인딩은 'smooth lighting' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: smooth lighting를 클릭하거나 조작할 수 있습니다
- false일 때: smooth lighting가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: smooth lighting를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "smooth lighting_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#smooth_lighting_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

[분할 목록으로 돌아가기](category-02.html#binding-category)


