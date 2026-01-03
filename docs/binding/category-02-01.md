---
title: 바인딩 목록 - UI 활성화/비활성화 (1/3)
outline: false
search: false
---

# UI 활성화/비활성화 {#binding-category}

UI 활성화/비활성화 1/3 (항목 1-200)

[분할 목록으로 돌아가기](category-02.html#binding-category)

<details>
<summary><strong>#accept_skin_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
accept skin button의 활성화 여부

**자세한 설명**
이 바인딩은 'accept skin button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: accept skin button를 클릭하거나 조작할 수 있습니다
- false일 때: accept skin button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: accept skin button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "accept skin button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#accept_skin_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
skin picker screen (총 1개 파일)

</details>
<details>
<summary><strong>#action_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
action button의 활성화 여부

**자세한 설명**
이 바인딩은 'action button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: action button를 클릭하거나 조작할 수 있습니다
- false일 때: action button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: action button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "action button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#action_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
gathering info screen, pdp screen (총 2개 파일)

</details>
<details>
<summary><strong>#actionbar_text_background_opacity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
actionbar text background opacity의 활성화 여부

**자세한 설명**
이 바인딩은 'actionbar text background opacity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: actionbar text background opacity를 클릭하거나 조작할 수 있습니다
- false일 때: actionbar text background opacity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: actionbar text background opacity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "actionbar text background opacity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#actionbar_text_background_opacity_enabled",
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
<summary><strong>#activate_link_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
activate link의 활성화 여부

**자세한 설명**
이 바인딩은 'activate link' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: activate link를 클릭하거나 조작할 수 있습니다
- false일 때: activate link가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: activate link를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "activate link_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#activate_link_enabled",
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
<summary><strong>#ad_max_graph_token_refresh_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
ad max graph token refresh의 활성화 여부

**자세한 설명**
이 바인딩은 'ad max graph token refresh' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: ad max graph token refresh를 클릭하거나 조작할 수 있습니다
- false일 때: ad max graph token refresh가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: ad max graph token refresh를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "ad max graph token refresh_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#ad_max_graph_token_refresh_enabled",
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
<summary><strong>#ad_max_signin_token_refresh_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
ad max signin token refresh의 활성화 여부

**자세한 설명**
이 바인딩은 'ad max signin token refresh' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: ad max signin token refresh를 클릭하거나 조작할 수 있습니다
- false일 때: ad max signin token refresh가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: ad max signin token refresh를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "ad max signin token refresh_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#ad_max_signin_token_refresh_enabled",
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
<summary><strong>#ad_token_refresh_threshold_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
ad token refresh threshold의 활성화 여부

**자세한 설명**
이 바인딩은 'ad token refresh threshold' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: ad token refresh threshold를 클릭하거나 조작할 수 있습니다
- false일 때: ad token refresh threshold가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: ad token refresh threshold를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "ad token refresh threshold_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#ad_token_refresh_threshold_enabled",
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
<summary><strong>#add_buttons_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
add buttons의 활성화 여부

**자세한 설명**
이 바인딩은 'add buttons' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: add buttons를 클릭하거나 조작할 수 있습니다
- false일 때: add buttons가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: add buttons를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "add buttons_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#add_buttons_enabled",
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
<summary><strong>#add_invite_link_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
add invite link button의 활성화 여부

**자세한 설명**
이 바인딩은 'add invite link button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: add invite link button를 클릭하거나 조작할 수 있습니다
- false일 때: add invite link button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: add invite link button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "add invite link button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#add_invite_link_button_enabled",
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
<summary><strong>#add_server_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
add server의 활성화 여부

**자세한 설명**
이 바인딩은 'add server' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: add server를 클릭하거나 조작할 수 있습니다
- false일 때: add server가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: add server를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "add server_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#add_server_enabled",
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
<summary><strong>#allow_cellular_data_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
allow cellular data의 활성화 여부

**자세한 설명**
이 바인딩은 'allow cellular data' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: allow cellular data를 클릭하거나 조작할 수 있습니다
- false일 때: allow cellular data가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: allow cellular data를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "allow cellular data_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#allow_cellular_data_enabled",
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
<summary><strong>#allow_cheats_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
allow cheats의 활성화 여부

**자세한 설명**
이 바인딩은 'allow cheats' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: allow cheats를 클릭하거나 조작할 수 있습니다
- false일 때: allow cheats가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: allow cheats를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "allow cheats_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#allow_cheats_enabled",
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
<summary><strong>#always_day_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
always day의 활성화 여부

**자세한 설명**
이 바인딩은 'always day' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: always day를 클릭하거나 조작할 수 있습니다
- false일 때: always day가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: always day를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "always day_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#always_day_enabled",
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
<summary><strong>#always_highlight_hovering_box_in_crosshair_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
always highlight hovering box in crosshair의 활성화 여부

**자세한 설명**
이 바인딩은 'always highlight hovering box in crosshair' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: always highlight hovering box in crosshair를 클릭하거나 조작할 수 있습니다
- false일 때: always highlight hovering box in crosshair가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: always highlight hovering box in crosshair를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "always highlight hovering box in crosshair_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#always_highlight_hovering_box_in_crosshair_enabled",
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
<summary><strong>#ambient_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
ambient volume의 활성화 여부

**자세한 설명**
이 바인딩은 'ambient volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: ambient volume를 클릭하거나 조작할 수 있습니다
- false일 때: ambient volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: ambient volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "ambient volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#ambient_volume_enabled",
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
<summary><strong>#animation_mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
animation mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'animation mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: animation mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: animation mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: animation mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "animation mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#animation_mode_dropdown_enabled",
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
<summary><strong>#arrow_left_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
arrow left의 활성화 여부

**자세한 설명**
이 바인딩은 'arrow left' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: arrow left를 클릭하거나 조작할 수 있습니다
- false일 때: arrow left가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: arrow left를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "arrow left_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#arrow_left_enabled",
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
<summary><strong>#arrow_right_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
arrow right의 활성화 여부

**자세한 설명**
이 바인딩은 'arrow right' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: arrow right를 클릭하거나 조작할 수 있습니다
- false일 때: arrow right가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: arrow right를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "arrow right_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#arrow_right_enabled",
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
<summary><strong>#atmospherics_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
atmospherics의 활성화 여부

**자세한 설명**
이 바인딩은 'atmospherics' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: atmospherics를 클릭하거나 조작할 수 있습니다
- false일 때: atmospherics가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: atmospherics를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "atmospherics_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#atmospherics_enabled",
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
<summary><strong>#auto_update_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
auto update의 활성화 여부

**자세한 설명**
이 바인딩은 'auto update' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: auto update를 클릭하거나 조작할 수 있습니다
- false일 때: auto update가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: auto update를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "auto update_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#auto_update_enabled",
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
<summary><strong>#automation_functional_test_block_input_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
automation functional test block input의 활성화 여부

**자세한 설명**
이 바인딩은 'automation functional test block input' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: automation functional test block input를 클릭하거나 조작할 수 있습니다
- false일 때: automation functional test block input가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: automation functional test block input를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "automation functional test block input_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#automation_functional_test_block_input_enabled",
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
<summary><strong>#automation_server_test_assert_on_level_diff_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
automation server test assert on level diff의 활성화 여부

**자세한 설명**
이 바인딩은 'automation server test assert on level diff' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: automation server test assert on level diff를 클릭하거나 조작할 수 있습니다
- false일 때: automation server test assert on level diff가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: automation server test assert on level diff를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "automation server test assert on level diff_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#automation_server_test_assert_on_level_diff_enabled",
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
<summary><strong>#backup_item_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
backup item button의 활성화 여부

**자세한 설명**
이 바인딩은 'backup item button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: backup item button를 클릭하거나 조작할 수 있습니다
- false일 때: backup item button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: backup item button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "backup item button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#backup_item_button_enabled",
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
<summary><strong>#ban_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
ban button의 활성화 여부

**자세한 설명**
이 바인딩은 'ban button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: ban button를 클릭하거나 조작할 수 있습니다
- false일 때: ban button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: ban button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "ban button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#ban_button_enabled",
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
<summary><strong>#block_type_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
block type dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'block type dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: block type dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: block type dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: block type dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "block type dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#block_type_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
command block screen (총 1개 파일)

</details>
<details>
<summary><strong>#block_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
block volume의 활성화 여부

**자세한 설명**
이 바인딩은 'block volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: block volume를 클릭하거나 조작할 수 있습니다
- false일 때: block volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: block volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "block volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#block_volume_enabled",
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
<summary><strong>#bloom_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
bloom의 활성화 여부

**자세한 설명**
이 바인딩은 'bloom' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: bloom를 클릭하거나 조작할 수 있습니다
- false일 때: bloom가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: bloom를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "bloom_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#bloom_enabled",
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
<summary><strong>#bloom_strength_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
bloom strength의 활성화 여부

**자세한 설명**
이 바인딩은 'bloom strength' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: bloom strength를 클릭하거나 조작할 수 있습니다
- false일 때: bloom strength가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: bloom strength를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "bloom strength_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#bloom_strength_enabled",
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
<summary><strong>#bonus_chest_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
bonus chest의 활성화 여부

**자세한 설명**
이 바인딩은 'bonus chest' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: bonus chest를 클릭하거나 조작할 수 있습니다
- false일 때: bonus chest가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: bonus chest를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "bonus chest_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#bonus_chest_enabled",
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
<summary><strong>#bubble_particles_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
bubble particles의 활성화 여부

**자세한 설명**
이 바인딩은 'bubble particles' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: bubble particles를 클릭하거나 조작할 수 있습니다
- false일 때: bubble particles가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: bubble particles를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "bubble particles_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#bubble_particles_enabled",
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
<summary><strong>#button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
button의 활성화 여부

**자세한 설명**
이 바인딩은 'button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: button를 클릭하거나 조작할 수 있습니다
- false일 때: button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#button_enabled",
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
<summary><strong>#button_mode_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
button mode의 활성화 여부

**자세한 설명**
이 바인딩은 'button mode' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: button mode를 클릭하거나 조작할 수 있습니다
- false일 때: button mode가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: button mode를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "button mode_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#button_mode_enabled",
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
<summary><strong>#button_size_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
button size의 활성화 여부

**자세한 설명**
이 바인딩은 'button size' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: button size를 클릭하거나 조작할 수 있습니다
- false일 때: button size가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: button size를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "button size_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#button_size_enabled",
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
<summary><strong>#buy_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
buy button의 활성화 여부

**자세한 설명**
이 바인딩은 'buy button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: buy button를 클릭하거나 조작할 수 있습니다
- false일 때: buy button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: buy button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "buy button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#buy_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/csb buy now screen (총 1개 파일)

</details>
<details>
<summary><strong>#camera_shake_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
camera shake의 활성화 여부

**자세한 설명**
이 바인딩은 'camera shake' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: camera shake를 클릭하거나 조작할 수 있습니다
- false일 때: camera shake가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: camera shake를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "camera shake_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#camera_shake_enabled",
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
<summary><strong>#can_be_server_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
can be server의 활성화 여부

**자세한 설명**
이 바인딩은 'can be server' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: can be server를 클릭하거나 조작할 수 있습니다
- false일 때: can be server가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: can be server를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "can be server_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#can_be_server_enabled",
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
<summary><strong>#can_be_xbl_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
can be xbl의 활성화 여부

**자세한 설명**
이 바인딩은 'can be xbl' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: can be xbl를 클릭하거나 조작할 수 있습니다
- false일 때: can be xbl가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: can be xbl를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "can be xbl_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#can_be_xbl_enabled",
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
<summary><strong>#chat_background_opacity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
chat background opacity의 활성화 여부

**자세한 설명**
이 바인딩은 'chat background opacity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: chat background opacity를 클릭하거나 조작할 수 있습니다
- false일 때: chat background opacity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: chat background opacity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "chat background opacity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#chat_background_opacity_enabled",
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
<summary><strong>#chat_font_size_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
chat font size의 활성화 여부

**자세한 설명**
이 바인딩은 'chat font size' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: chat font size를 클릭하거나 조작할 수 있습니다
- false일 때: chat font size가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: chat font size를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "chat font size_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#chat_font_size_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
chat settings menu screen (총 1개 파일)

</details>
<details>
<summary><strong>#chat_line_spacing_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
chat line spacing의 활성화 여부

**자세한 설명**
이 바인딩은 'chat line spacing' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: chat line spacing를 클릭하거나 조작할 수 있습니다
- false일 때: chat line spacing가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: chat line spacing를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "chat line spacing_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#chat_line_spacing_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
chat settings menu screen (총 1개 파일)

</details>
<details>
<summary><strong>#chat_message_duration_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
chat message duration dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'chat message duration dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: chat message duration dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: chat message duration dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: chat message duration dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "chat message duration dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#chat_message_duration_dropdown_enabled",
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
<summary><strong>#chat_typeface_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
chat typeface dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'chat typeface dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: chat typeface dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: chat typeface dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: chat typeface dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "chat typeface dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#chat_typeface_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
chat settings menu screen (총 1개 파일)

</details>
<details>
<summary><strong>#classic_box_selection_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
classic box selection의 활성화 여부

**자세한 설명**
이 바인딩은 'classic box selection' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: classic box selection를 클릭하거나 조작할 수 있습니다
- false일 때: classic box selection가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: classic box selection를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "classic box selection_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#classic_box_selection_enabled",
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
<summary><strong>#cloud_file_last_changed_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cloud file last changed의 활성화 여부

**자세한 설명**
이 바인딩은 'cloud file last changed' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cloud file last changed를 클릭하거나 조작할 수 있습니다
- false일 때: cloud file last changed가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cloud file last changed를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cloud file last changed_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cloud_file_last_changed_enabled",
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
<summary><strong>#cloud_file_name_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cloud file name의 활성화 여부

**자세한 설명**
이 바인딩은 'cloud file name' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cloud file name를 클릭하거나 조작할 수 있습니다
- false일 때: cloud file name가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cloud file name를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cloud file name_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cloud_file_name_enabled",
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
<summary><strong>#cloud_upload_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cloud upload의 활성화 여부

**자세한 설명**
이 바인딩은 'cloud upload' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cloud upload를 클릭하거나 조작할 수 있습니다
- false일 때: cloud upload가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cloud upload를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cloud upload_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cloud_upload_enabled",
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
<summary><strong>#command_blocks_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
command blocks의 활성화 여부

**자세한 설명**
이 바인딩은 'command blocks' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: command blocks를 클릭하거나 조작할 수 있습니다
- false일 때: command blocks가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: command blocks를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "command blocks_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#command_blocks_enabled",
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
<summary><strong>#command_blocks_enabled_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
command blocks의 활성화 여부

**자세한 설명**
이 바인딩은 'command blocks' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: command blocks를 클릭하거나 조작할 수 있습니다
- false일 때: command blocks가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: command blocks를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "command blocks_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#command_blocks_enabled",
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
<summary><strong>#commands_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
commands의 활성화 여부

**자세한 설명**
이 바인딩은 'commands' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: commands를 클릭하거나 조작할 수 있습니다
- false일 때: commands가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: commands를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "commands_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#commands_enabled",
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
<summary><strong>#condition_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
condition dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'condition dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: condition dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: condition dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: condition dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "condition dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#condition_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
command block screen (총 1개 파일)

</details>
<details>
<summary><strong>#confirm_0_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
confirm 0의 활성화 여부

**자세한 설명**
이 바인딩은 'confirm 0' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: confirm 0를 클릭하거나 조작할 수 있습니다
- false일 때: confirm 0가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: confirm 0를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "confirm 0_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#confirm 0_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
confirm delete account screen (총 1개 파일)

</details>
<details>
<summary><strong>#confirm_1_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
confirm 1의 활성화 여부

**자세한 설명**
이 바인딩은 'confirm 1' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: confirm 1를 클릭하거나 조작할 수 있습니다
- false일 때: confirm 1가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: confirm 1를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "confirm 1_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#confirm 1_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
confirm delete account screen (총 1개 파일)

</details>
<details>
<summary><strong>#confirm_2_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
confirm 2의 활성화 여부

**자세한 설명**
이 바인딩은 'confirm 2' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: confirm 2를 클릭하거나 조작할 수 있습니다
- false일 때: confirm 2가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: confirm 2를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "confirm 2_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#confirm 2_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
confirm delete account screen (총 1개 파일)

</details>
<details>
<summary><strong>#confirm_3_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
confirm 3의 활성화 여부

**자세한 설명**
이 바인딩은 'confirm 3' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: confirm 3를 클릭하거나 조작할 수 있습니다
- false일 때: confirm 3가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: confirm 3를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "confirm 3_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#confirm 3_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
confirm delete account screen (총 1개 파일)

</details>
<details>
<summary><strong>#confirm_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
confirm button의 활성화 여부

**자세한 설명**
이 바인딩은 'confirm button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: confirm button를 클릭하거나 조작할 수 있습니다
- false일 때: confirm button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: confirm button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "confirm button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#confirm_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
authentication screen (총 1개 파일)

</details>
<details>
<summary><strong>#confirm_skin_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
confirm skin button의 활성화 여부

**자세한 설명**
이 바인딩은 'confirm skin button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: confirm skin button를 클릭하거나 조작할 수 있습니다
- false일 때: confirm skin button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: confirm skin button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "confirm skin button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#confirm_skin_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
expanded skin pack screen (총 1개 파일)

</details>
<details>
<summary><strong>#content_log_file_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
content log file의 활성화 여부

**자세한 설명**
이 바인딩은 'content log file' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: content log file를 클릭하거나 조작할 수 있습니다
- false일 때: content log file가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: content log file를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "content log file_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#content_log_file_enabled",
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
<summary><strong>#content_log_gui_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
content log gui의 활성화 여부

**자세한 설명**
이 바인딩은 'content log gui' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: content log gui를 클릭하거나 조작할 수 있습니다
- false일 때: content log gui가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: content log gui를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "content log gui_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#content_log_gui_enabled",
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
<summary><strong>#content_log_gui_level_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
content log gui level dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'content log gui level dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: content log gui level dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: content log gui level dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: content log gui level dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "content log gui level dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#content_log_gui_level_dropdown_enabled",
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
<summary><strong>#content_log_gui_option_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
content log gui option의 활성화 여부

**자세한 설명**
이 바인딩은 'content log gui option' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: content log gui option를 클릭하거나 조작할 수 있습니다
- false일 때: content log gui option가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: content log gui option를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "content log gui option_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#content_log_gui_option_enabled",
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
<summary><strong>#content_log_gui_show_on_errors_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
content log gui show on errors의 활성화 여부

**자세한 설명**
이 바인딩은 'content log gui show on errors' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: content log gui show on errors를 클릭하거나 조작할 수 있습니다
- false일 때: content log gui show on errors가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: content log gui show on errors를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "content log gui show on errors_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#content_log_gui_show_on_errors_enabled",
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
<summary><strong>#controller_autojump_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
controller autojump의 활성화 여부

**자세한 설명**
이 바인딩은 'controller autojump' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: controller autojump를 클릭하거나 조작할 수 있습니다
- false일 때: controller autojump가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: controller autojump를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "controller autojump_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#controller_autojump_enabled",
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
<summary><strong>#controller_clear_hotbar_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
controller clear hotbar의 활성화 여부

**자세한 설명**
이 바인딩은 'controller clear hotbar' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: controller clear hotbar를 클릭하거나 조작할 수 있습니다
- false일 때: controller clear hotbar가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: controller clear hotbar를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "controller clear hotbar_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#controller_clear_hotbar_enabled",
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
<summary><strong>#controller_destroy_vibration_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
controller destroy vibration의 활성화 여부

**자세한 설명**
이 바인딩은 'controller destroy vibration' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: controller destroy vibration를 클릭하거나 조작할 수 있습니다
- false일 때: controller destroy vibration가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: controller destroy vibration를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "controller destroy vibration_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#controller_destroy_vibration_enabled",
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
<summary><strong>#controller_invert_y_axis_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
controller invert y axis의 활성화 여부

**자세한 설명**
이 바인딩은 'controller invert y axis' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: controller invert y axis를 클릭하거나 조작할 수 있습니다
- false일 때: controller invert y axis가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: controller invert y axis를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "controller invert y axis_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#controller_invert_y_axis_enabled",
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
<summary><strong>#controller_sensitivity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
controller sensitivity의 활성화 여부

**자세한 설명**
이 바인딩은 'controller sensitivity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: controller sensitivity를 클릭하거나 조작할 수 있습니다
- false일 때: controller sensitivity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: controller sensitivity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "controller sensitivity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#controller_sensitivity_enabled",
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
<summary><strong>#controller_split_vibration_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
controller split vibration의 활성화 여부

**자세한 설명**
이 바인딩은 'controller split vibration' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: controller split vibration를 클릭하거나 조작할 수 있습니다
- false일 때: controller split vibration가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: controller split vibration를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "controller split vibration_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#controller_split_vibration_enabled",
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
<summary><strong>#controller_toggle_crouch_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
controller toggle crouch의 활성화 여부

**자세한 설명**
이 바인딩은 'controller toggle crouch' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: controller toggle crouch를 클릭하거나 조작할 수 있습니다
- false일 때: controller toggle crouch가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: controller toggle crouch를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "controller toggle crouch_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#controller_toggle_crouch_enabled",
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
<summary><strong>#copy_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
copy button의 활성화 여부

**자세한 설명**
이 바인딩은 'copy button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: copy button를 클릭하거나 조작할 수 있습니다
- false일 때: copy button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: copy button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "copy button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#copy_button_enabled",
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
<summary><strong>#copy_link_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
copy link의 활성화 여부

**자세한 설명**
이 바인딩은 'copy link' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: copy link를 클릭하거나 조작할 수 있습니다
- false일 때: copy link가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: copy link를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "copy link_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#copy_link_enabled",
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
<summary><strong>#creative_delayed_block_breaking_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
creative delayed block breaking의 활성화 여부

**자세한 설명**
이 바인딩은 'creative delayed block breaking' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: creative delayed block breaking를 클릭하거나 조작할 수 있습니다
- false일 때: creative delayed block breaking가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: creative delayed block breaking를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "creative delayed block breaking_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#creative_delayed_block_breaking_enabled",
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
<summary><strong>#cross_platform_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cross platform의 활성화 여부

**자세한 설명**
이 바인딩은 'cross platform' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cross platform를 클릭하거나 조작할 수 있습니다
- false일 때: cross platform가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cross platform를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cross platform_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cross_platform_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
invite screen, play screen, select world screen (총 3개 파일)

</details>
<details>
<summary><strong>#crossplatform_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
crossplatform toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'crossplatform toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: crossplatform toggle를 클릭하거나 조작할 수 있습니다
- false일 때: crossplatform toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: crossplatform toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "crossplatform toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#crossplatform_toggle_enabled",
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
<summary><strong>#custom_input_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
custom input의 활성화 여부

**자세한 설명**
이 바인딩은 'custom input' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: custom input를 클릭하거나 조작할 수 있습니다
- false일 때: custom input가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: custom input를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "custom input_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#custom_input_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
server form (총 1개 파일)

</details>
<details>
<summary><strong>#custom_skin_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
custom skin button의 활성화 여부

**자세한 설명**
이 바인딩은 'custom skin button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: custom skin button를 클릭하거나 조작할 수 있습니다
- false일 때: custom skin button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: custom skin button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "custom skin button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#custom_skin_button_enabled",
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
<summary><strong>#custom_slider_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
custom slider의 활성화 여부

**자세한 설명**
이 바인딩은 'custom slider' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: custom slider를 클릭하거나 조작할 수 있습니다
- false일 때: custom slider가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: custom slider를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "custom slider_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#custom_slider_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
server form (총 1개 파일)

</details>
<details>
<summary><strong>#custom_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
custom toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'custom toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: custom toggle를 클릭하거나 조작할 수 있습니다
- false일 때: custom toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: custom toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "custom toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#custom_toggle_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
server form (총 1개 파일)

</details>
<details>
<summary><strong>#cycle_pack_left_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cycle pack left button의 활성화 여부

**자세한 설명**
이 바인딩은 'cycle pack left button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cycle pack left button를 클릭하거나 조작할 수 있습니다
- false일 때: cycle pack left button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cycle pack left button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cycle pack left button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cycle_pack_left_button_enabled",
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
<summary><strong>#cycle_pack_right_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cycle pack right button의 활성화 여부

**자세한 설명**
이 바인딩은 'cycle pack right button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cycle pack right button를 클릭하거나 조작할 수 있습니다
- false일 때: cycle pack right button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cycle pack right button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cycle pack right button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cycle_pack_right_button_enabled",
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
<summary><strong>#cycle_promotions_left_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cycle promotions left button의 활성화 여부

**자세한 설명**
이 바인딩은 'cycle promotions left button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cycle promotions left button를 클릭하거나 조작할 수 있습니다
- false일 때: cycle promotions left button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cycle promotions left button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cycle promotions left button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cycle_promotions_left_button_enabled",
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
<summary><strong>#cycle_promotions_right_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cycle promotions right button의 활성화 여부

**자세한 설명**
이 바인딩은 'cycle promotions right button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cycle promotions right button를 클릭하거나 조작할 수 있습니다
- false일 때: cycle promotions right button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cycle promotions right button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cycle promotions right button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cycle_promotions_right_button_enabled",
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
<summary><strong>#cycle_screenshots_left_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cycle screenshots left button의 활성화 여부

**자세한 설명**
이 바인딩은 'cycle screenshots left button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cycle screenshots left button를 클릭하거나 조작할 수 있습니다
- false일 때: cycle screenshots left button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cycle screenshots left button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cycle screenshots left button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cycle_screenshots_left_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screenshots section (총 1개 파일)

</details>
<details>
<summary><strong>#cycle_screenshots_right_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
cycle screenshots right button의 활성화 여부

**자세한 설명**
이 바인딩은 'cycle screenshots right button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: cycle screenshots right button를 클릭하거나 조작할 수 있습니다
- false일 때: cycle screenshots right button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: cycle screenshots right button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "cycle screenshots right button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#cycle_screenshots_right_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screenshots section (총 1개 파일)

</details>
<details>
<summary><strong>#darkness_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
darkness의 활성화 여부

**자세한 설명**
이 바인딩은 'darkness' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: darkness를 클릭하거나 조작할 수 있습니다
- false일 때: darkness가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: darkness를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "darkness_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#darkness_enabled",
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
<summary><strong>#daylight_cycle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
daylight cycle의 활성화 여부

**자세한 설명**
이 바인딩은 'daylight cycle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: daylight cycle를 클릭하거나 조작할 수 있습니다
- false일 때: daylight cycle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: daylight cycle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "daylight cycle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#daylight_cycle_enabled",
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
<summary><strong>#debug_biome_override_dropdown_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
debug biome override dropdown dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'debug biome override dropdown dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: debug biome override dropdown dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: debug biome override dropdown dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: debug biome override dropdown dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "debug biome override dropdown dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#debug_biome_override_dropdown_dropdown_enabled",
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
<summary><strong>#debug_json_popup_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
debug json popup의 활성화 여부

**자세한 설명**
이 바인딩은 'debug json popup' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: debug json popup를 클릭하거나 조작할 수 있습니다
- false일 때: debug json popup가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: debug json popup를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "debug json popup_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#debug_json_popup_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
authentication screen (총 1개 파일)

</details>
<details>
<summary><strong>#debug_spawn_biome_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
debug spawn biome dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'debug spawn biome dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: debug spawn biome dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: debug spawn biome dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: debug spawn biome dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "debug spawn biome dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#debug_spawn_biome_dropdown_enabled",
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
<summary><strong>#debug_spawn_dimension_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
debug spawn dimension dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'debug spawn dimension dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: debug spawn dimension dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: debug spawn dimension dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: debug spawn dimension dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "debug spawn dimension dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#debug_spawn_dimension_dropdown_enabled",
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
<summary><strong>#default_profiling_group_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
default profiling group의 활성화 여부

**자세한 설명**
이 바인딩은 'default profiling group' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: default profiling group를 클릭하거나 조작할 수 있습니다
- false일 때: default profiling group가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: default profiling group를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "default profiling group_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#default_profiling_group_enabled",
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
<summary><strong>#deferred_platform_override_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
deferred platform override dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'deferred platform override dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: deferred platform override dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: deferred platform override dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: deferred platform override dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "deferred platform override dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#deferred_platform_override_dropdown_enabled",
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
<summary><strong>#deferred_point_light_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
deferred point light의 활성화 여부

**자세한 설명**
이 바인딩은 'deferred point light' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: deferred point light를 클릭하거나 조작할 수 있습니다
- false일 때: deferred point light가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: deferred point light를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "deferred point light_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#deferred_point_light_enabled",
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
<summary><strong>#deferred_render_distance_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
deferred render distance의 활성화 여부

**자세한 설명**
이 바인딩은 'deferred render distance' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: deferred render distance를 클릭하거나 조작할 수 있습니다
- false일 때: deferred render distance가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: deferred render distance를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "deferred render distance_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#deferred_render_distance_enabled",
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
<summary><strong>#delete_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
delete button의 활성화 여부

**자세한 설명**
이 바인딩은 'delete button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: delete button를 클릭하거나 조작할 수 있습니다
- false일 때: delete button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: delete button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "delete button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#delete_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, storage management (총 2개 파일)

</details>
<details>
<summary><strong>#dev_achievements_always_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev achievements always의 활성화 여부

**자세한 설명**
이 바인딩은 'dev achievements always' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev achievements always를 클릭하거나 조작할 수 있습니다
- false일 때: dev achievements always가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev achievements always를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev achievements always_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_achievements_always_enabled",
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
<summary><strong>#dev_achievements_always_enabled_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev achievements always의 활성화 여부

**자세한 설명**
이 바인딩은 'dev achievements always' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev achievements always를 클릭하거나 조작할 수 있습니다
- false일 때: dev achievements always가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev achievements always를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev achievements always_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_achievements_always_enabled",
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
<summary><strong>#dev_add_http_delay_seconds_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev add http delay seconds의 활성화 여부

**자세한 설명**
이 바인딩은 'dev add http delay seconds' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev add http delay seconds를 클릭하거나 조작할 수 있습니다
- false일 때: dev add http delay seconds가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev add http delay seconds를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev add http delay seconds_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_add_http_delay_seconds_enabled",
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
<summary><strong>#dev_allow_mobile_data_blocked_modal_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev allow mobile data blocked modal의 활성화 여부

**자세한 설명**
이 바인딩은 'dev allow mobile data blocked modal' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev allow mobile data blocked modal를 클릭하거나 조작할 수 있습니다
- false일 때: dev allow mobile data blocked modal가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev allow mobile data blocked modal를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev allow mobile data blocked modal_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_allow_mobile_data_blocked_modal_enabled",
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
<summary><strong>#dev_assertions_debug_break_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev assertions debug break의 활성화 여부

**자세한 설명**
이 바인딩은 'dev assertions debug break' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev assertions debug break를 클릭하거나 조작할 수 있습니다
- false일 때: dev assertions debug break가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev assertions debug break를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev assertions debug break_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_assertions_debug_break_enabled",
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
<summary><strong>#dev_assertions_show_dialog_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev assertions show dialog의 활성화 여부

**자세한 설명**
이 바인딩은 'dev assertions show dialog' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev assertions show dialog를 클릭하거나 조작할 수 있습니다
- false일 때: dev assertions show dialog가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev assertions show dialog를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev assertions show dialog_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_assertions_show_dialog_enabled",
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
<summary><strong>#dev_azurenotebooks_env_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev azurenotebooks env dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev azurenotebooks env dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev azurenotebooks env dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev azurenotebooks env dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev azurenotebooks env dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev azurenotebooks env dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_azurenotebooks_env_dropdown_enabled",
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
<summary><strong>#dev_chunk_map_mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev chunk map mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev chunk map mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev chunk map mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev chunk map mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev chunk map mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev chunk map mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_chunk_map_mode_dropdown_enabled",
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
<summary><strong>#dev_configuration_id_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev configuration id의 활성화 여부

**자세한 설명**
이 바인딩은 'dev configuration id' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev configuration id를 클릭하거나 조작할 수 있습니다
- false일 때: dev configuration id가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev configuration id를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev configuration id_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_configuration_id_enabled",
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
<summary><strong>#dev_connection_quality_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev connection quality의 활성화 여부

**자세한 설명**
이 바인딩은 'dev connection quality' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev connection quality를 클릭하거나 조작할 수 있습니다
- false일 때: dev connection quality가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev connection quality를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev connection quality_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_connection_quality_enabled",
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
<summary><strong>#dev_create_realm_without_purchase_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev create realm without purchase의 활성화 여부

**자세한 설명**
이 바인딩은 'dev create realm without purchase' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev create realm without purchase를 클릭하거나 조작할 수 있습니다
- false일 때: dev create realm without purchase가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev create realm without purchase를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev create realm without purchase_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_create_realm_without_purchase_enabled",
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
<summary><strong>#dev_debug_hud_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev debug hud dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev debug hud dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev debug hud dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev debug hud dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev debug hud dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev debug hud dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_debug_hud_dropdown_enabled",
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
<summary><strong>#dev_debug_skin_rotation_speed_multiplier_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev debug skin rotation speed multiplier dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev debug skin rotation speed multiplier dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev debug skin rotation speed multiplier dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev debug skin rotation speed multiplier dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev debug skin rotation speed multiplier dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev debug skin rotation speed multiplier dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_debug_skin_rotation_speed_multiplier_dropdown_enabled",
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
<summary><strong>#dev_disable_client_blob_cache_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable client blob cache의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable client blob cache' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable client blob cache를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable client blob cache가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable client blob cache를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable client blob cache_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_client_blob_cache_enabled",
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
<summary><strong>#dev_disable_render_blockentities_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render blockentities의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render blockentities' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render blockentities를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render blockentities가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render blockentities를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render blockentities_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_blockentities_enabled",
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
<summary><strong>#dev_disable_render_entities_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render entities의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render entities' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render entities를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render entities가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render entities를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render entities_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_entities_enabled",
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
<summary><strong>#dev_disable_render_hud_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render hud의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render hud' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render hud를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render hud가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render hud를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render hud_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_hud_enabled",
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
<summary><strong>#dev_disable_render_item_in_hand_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render item in hand의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render item in hand' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render item in hand를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render item in hand가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render item in hand를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render item in hand_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_item_in_hand_enabled",
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
<summary><strong>#dev_disable_render_main_menu_cube_map_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render main menu cube map의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render main menu cube map' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render main menu cube map를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render main menu cube map가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render main menu cube map를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render main menu cube map_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_main_menu_cube_map_enabled",
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
<summary><strong>#dev_disable_render_main_menu_paperdoll_animation_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render main menu paperdoll animation의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render main menu paperdoll animation' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render main menu paperdoll animation를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render main menu paperdoll animation가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render main menu paperdoll animation를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render main menu paperdoll animation_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_main_menu_paperdoll_animation_enabled",
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
<summary><strong>#dev_disable_render_particles_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render particles의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render particles' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render particles를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render particles가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render particles를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render particles_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_particles_enabled",
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
<summary><strong>#dev_disable_render_sky_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render sky의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render sky' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render sky를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render sky가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render sky를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render sky_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_sky_enabled",
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
<summary><strong>#dev_disable_render_terrain_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render terrain의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render terrain' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render terrain를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render terrain가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render terrain를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render terrain_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_terrain_enabled",
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
<summary><strong>#dev_disable_render_weather_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev disable render weather의 활성화 여부

**자세한 설명**
이 바인딩은 'dev disable render weather' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev disable render weather를 클릭하거나 조작할 수 있습니다
- false일 때: dev disable render weather가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev disable render weather를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev disable render weather_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_disable_render_weather_enabled",
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
<summary><strong>#dev_discovery_environment_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev discovery environment dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev discovery environment dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev discovery environment dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev discovery environment dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev discovery environment dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev discovery environment dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_discovery_environment_dropdown_enabled",
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
<summary><strong>#dev_discovery_override_branch_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev discovery override branch의 활성화 여부

**자세한 설명**
이 바인딩은 'dev discovery override branch' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev discovery override branch를 클릭하거나 조작할 수 있습니다
- false일 때: dev discovery override branch가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev discovery override branch를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev discovery override branch_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_discovery_override_branch_enabled",
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
<summary><strong>#dev_discovery_override_custom_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev discovery override custom의 활성화 여부

**자세한 설명**
이 바인딩은 'dev discovery override custom' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev discovery override custom를 클릭하거나 조작할 수 있습니다
- false일 때: dev discovery override custom가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev discovery override custom를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev discovery override custom_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_discovery_override_custom_enabled",
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
<summary><strong>#dev_discovery_override_service_name_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev discovery override service name의 활성화 여부

**자세한 설명**
이 바인딩은 'dev discovery override service name' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev discovery override service name를 클릭하거나 조작할 수 있습니다
- false일 때: dev discovery override service name가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev discovery override service name를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev discovery override service name_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_discovery_override_service_name_enabled",
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
<summary><strong>#dev_display_configurations_panel_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev display configurations panel의 활성화 여부

**자세한 설명**
이 바인딩은 'dev display configurations panel' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev display configurations panel를 클릭하거나 조작할 수 있습니다
- false일 때: dev display configurations panel가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev display configurations panel를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev display configurations panel_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_display_configurations_panel_enabled",
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
<summary><strong>#dev_display_mock_http_panel_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev display mock http panel의 활성화 여부

**자세한 설명**
이 바인딩은 'dev display mock http panel' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev display mock http panel를 클릭하거나 조작할 수 있습니다
- false일 때: dev display mock http panel가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev display mock http panel를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev display mock http panel_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_display_mock_http_panel_enabled",
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
<summary><strong>#dev_display_override_datetime_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev display override datetime의 활성화 여부

**자세한 설명**
이 바인딩은 'dev display override datetime' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev display override datetime를 클릭하거나 조작할 수 있습니다
- false일 때: dev display override datetime가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev display override datetime를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev display override datetime_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_display_override_datetime_enabled",
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
<summary><strong>#dev_display_realms_features_panel_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev display realms features panel의 활성화 여부

**자세한 설명**
이 바인딩은 'dev display realms features panel' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev display realms features panel를 클릭하거나 조작할 수 있습니다
- false일 때: dev display realms features panel가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev display realms features panel를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev display realms features panel_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_display_realms_features_panel_enabled",
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
<summary><strong>#dev_display_treatments_panel_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev display treatments panel의 활성화 여부

**자세한 설명**
이 바인딩은 'dev display treatments panel' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev display treatments panel를 클릭하거나 조작할 수 있습니다
- false일 때: dev display treatments panel가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev display treatments panel를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev display treatments panel_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_display_treatments_panel_enabled",
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
<summary><strong>#dev_edu_demo_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev edu demo의 활성화 여부

**자세한 설명**
이 바인딩은 'dev edu demo' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev edu demo를 클릭하거나 조작할 수 있습니다
- false일 때: dev edu demo가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev edu demo를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev edu demo_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_edu_demo_enabled",
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
<summary><strong>#dev_education_env_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev education env dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev education env dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev education env dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev education env dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev education env dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev education env dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_education_env_dropdown_enabled",
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
<summary><strong>#dev_enable_profiler_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev enable profiler의 활성화 여부

**자세한 설명**
이 바인딩은 'dev enable profiler' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev enable profiler를 클릭하거나 조작할 수 있습니다
- false일 때: dev enable profiler가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev enable profiler를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev enable profiler_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_enable_profiler_enabled",
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
<summary><strong>#dev_find_mobs_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev find mobs의 활성화 여부

**자세한 설명**
이 바인딩은 'dev find mobs' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev find mobs를 클릭하거나 조작할 수 있습니다
- false일 때: dev find mobs가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev find mobs를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev find mobs_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_find_mobs_enabled",
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
<summary><strong>#dev_force_client_blob_cache_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev force client blob cache의 활성화 여부

**자세한 설명**
이 바인딩은 'dev force client blob cache' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev force client blob cache를 클릭하거나 조작할 수 있습니다
- false일 때: dev force client blob cache가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev force client blob cache를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev force client blob cache_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_force_client_blob_cache_enabled",
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
<summary><strong>#dev_force_trial_mode_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev force trial mode의 활성화 여부

**자세한 설명**
이 바인딩은 'dev force trial mode' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev force trial mode를 클릭하거나 조작할 수 있습니다
- false일 때: dev force trial mode가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev force trial mode를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev force trial mode_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_force_trial_mode_enabled",
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
<summary><strong>#dev_game_tip_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev game tip의 활성화 여부

**자세한 설명**
이 바인딩은 'dev game tip' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev game tip를 클릭하거나 조작할 수 있습니다
- false일 때: dev game tip가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev game tip를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev game tip_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_game_tip_enabled",
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
<summary><strong>#dev_gathering_filter_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev gathering filter의 활성화 여부

**자세한 설명**
이 바인딩은 'dev gathering filter' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev gathering filter를 클릭하거나 조작할 수 있습니다
- false일 때: dev gathering filter가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev gathering filter를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev gathering filter_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_gathering_filter_enabled",
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
<summary><strong>#dev_http_logging_verbosity_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev http logging verbosity dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev http logging verbosity dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev http logging verbosity dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev http logging verbosity dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev http logging verbosity dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev http logging verbosity dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_http_logging_verbosity_dropdown_enabled",
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
<summary><strong>#dev_load_override_date_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev load override date의 활성화 여부

**자세한 설명**
이 바인딩은 'dev load override date' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev load override date를 클릭하거나 조작할 수 있습니다
- false일 때: dev load override date가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev load override date를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev load override date_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_load_override_date_enabled",
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
<summary><strong>#dev_marketplace_toggle_all_skins_rotate_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev marketplace toggle all skins rotate의 활성화 여부

**자세한 설명**
이 바인딩은 'dev marketplace toggle all skins rotate' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev marketplace toggle all skins rotate를 클릭하거나 조작할 수 있습니다
- false일 때: dev marketplace toggle all skins rotate가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev marketplace toggle all skins rotate를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev marketplace toggle all skins rotate_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_marketplace_toggle_all_skins_rotate_enabled",
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
<summary><strong>#dev_nethernet_logging_verbosity_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev nethernet logging verbosity dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev nethernet logging verbosity dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev nethernet logging verbosity dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev nethernet logging verbosity dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev nethernet logging verbosity dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev nethernet logging verbosity dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_nethernet_logging_verbosity_dropdown_enabled",
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
<summary><strong>#dev_new_bed_screen_radio_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev new bed screen radio의 활성화 여부

**자세한 설명**
이 바인딩은 'dev new bed screen radio' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev new bed screen radio를 클릭하거나 조작할 수 있습니다
- false일 때: dev new bed screen radio가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev new bed screen radio를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev new bed screen radio_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_new_bed_screen_radio_enabled",
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
<summary><strong>#dev_new_death_screen_radio_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev new death screen radio의 활성화 여부

**자세한 설명**
이 바인딩은 'dev new death screen radio' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev new death screen radio를 클릭하거나 조작할 수 있습니다
- false일 때: dev new death screen radio가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev new death screen radio를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev new death screen radio_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_new_death_screen_radio_enabled",
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
<summary><strong>#dev_ore_ui_gameplay_ui_radio_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev ore ui gameplay ui radio의 활성화 여부

**자세한 설명**
이 바인딩은 'dev ore ui gameplay ui radio' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev ore ui gameplay ui radio를 클릭하거나 조작할 수 있습니다
- false일 때: dev ore ui gameplay ui radio가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev ore ui gameplay ui radio를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev ore ui gameplay ui radio_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_ore_ui_gameplay_ui_radio_enabled",
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
<summary><strong>#dev_override_xbox_sandbox_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev override xbox sandbox의 활성화 여부

**자세한 설명**
이 바인딩은 'dev override xbox sandbox' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev override xbox sandbox를 클릭하거나 조작할 수 있습니다
- false일 때: dev override xbox sandbox가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev override xbox sandbox를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev override xbox sandbox_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_override_xbox_sandbox_enabled",
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
<summary><strong>#dev_realms_endpoint_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev realms endpoint의 활성화 여부

**자세한 설명**
이 바인딩은 'dev realms endpoint' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev realms endpoint를 클릭하거나 조작할 수 있습니다
- false일 때: dev realms endpoint가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev realms endpoint를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev realms endpoint_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_realms_endpoint_enabled",
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
<summary><strong>#dev_realms_endpoint_payment_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev realms endpoint payment의 활성화 여부

**자세한 설명**
이 바인딩은 'dev realms endpoint payment' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev realms endpoint payment를 클릭하거나 조작할 수 있습니다
- false일 때: dev realms endpoint payment가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev realms endpoint payment를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev realms endpoint payment_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_realms_endpoint_payment_enabled",
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
<summary><strong>#dev_realms_environment_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev realms environment dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev realms environment dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev realms environment dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev realms environment dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev realms environment dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev realms environment dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_realms_environment_dropdown_enabled",
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
<summary><strong>#dev_realms_feature_id_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev realms feature id의 활성화 여부

**자세한 설명**
이 바인딩은 'dev realms feature id' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev realms feature id를 클릭하거나 조작할 수 있습니다
- false일 때: dev realms feature id가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev realms feature id를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev realms feature id_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_realms_feature_id_enabled",
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
<summary><strong>#dev_realms_relying_party_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev realms relying party의 활성화 여부

**자세한 설명**
이 바인딩은 'dev realms relying party' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev realms relying party를 클릭하거나 조작할 수 있습니다
- false일 때: dev realms relying party가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev realms relying party를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev realms relying party_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_realms_relying_party_enabled",
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
<summary><strong>#dev_realms_relying_party_payment_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev realms relying party payment의 활성화 여부

**자세한 설명**
이 바인딩은 'dev realms relying party payment' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev realms relying party payment를 클릭하거나 조작할 수 있습니다
- false일 때: dev realms relying party payment가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev realms relying party payment를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev realms relying party payment_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_realms_relying_party_payment_enabled",
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
<summary><strong>#dev_realms_sku_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev realms sku dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev realms sku dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev realms sku dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev realms sku dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev realms sku dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev realms sku dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_realms_sku_dropdown_enabled",
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
<summary><strong>#dev_render_attach_pos_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev render attach pos의 활성화 여부

**자세한 설명**
이 바인딩은 'dev render attach pos' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev render attach pos를 클릭하거나 조작할 수 있습니다
- false일 때: dev render attach pos가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev render attach pos를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev render attach pos_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_render_attach_pos_enabled",
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
<summary><strong>#dev_render_bounding_box_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev render bounding box의 활성화 여부

**자세한 설명**
이 바인딩은 'dev render bounding box' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev render bounding box를 클릭하거나 조작할 수 있습니다
- false일 때: dev render bounding box가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev render bounding box를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev render bounding box_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_render_bounding_box_enabled",
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
<summary><strong>#dev_render_goal_state_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev render goal state의 활성화 여부

**자세한 설명**
이 바인딩은 'dev render goal state' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev render goal state를 클릭하거나 조작할 수 있습니다
- false일 때: dev render goal state가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev render goal state를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev render goal state_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_render_goal_state_enabled",
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
<summary><strong>#dev_render_mob_info_state_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev render mob info state의 활성화 여부

**자세한 설명**
이 바인딩은 'dev render mob info state' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev render mob info state를 클릭하거나 조작할 수 있습니다
- false일 때: dev render mob info state가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev render mob info state를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev render mob info state_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_render_mob_info_state_enabled",
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
<summary><strong>#dev_render_paths_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev render paths의 활성화 여부

**자세한 설명**
이 바인딩은 'dev render paths' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev render paths를 클릭하거나 조작할 수 있습니다
- false일 때: dev render paths가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev render paths를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev render paths_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_render_paths_enabled",
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
<summary><strong>#dev_reset_client_id_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev reset client id의 활성화 여부

**자세한 설명**
이 바인딩은 'dev reset client id' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev reset client id를 클릭하거나 조작할 수 있습니다
- false일 때: dev reset client id가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev reset client id를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev reset client id_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_reset_client_id_enabled",
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
<summary><strong>#dev_show_build_info_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show build info의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show build info' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show build info를 클릭하거나 조작할 수 있습니다
- false일 때: dev show build info가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show build info를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show build info_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_build_info_enabled",
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
<summary><strong>#dev_show_chunk_map_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show chunk map의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show chunk map' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show chunk map를 클릭하거나 조작할 수 있습니다
- false일 때: dev show chunk map가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show chunk map를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show chunk map_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_chunk_map_enabled",
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
<summary><strong>#dev_show_dev_console_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show dev console button의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show dev console button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show dev console button를 클릭하거나 조작할 수 있습니다
- false일 때: dev show dev console button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show dev console button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show dev console button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_dev_console_button_enabled",
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
<summary><strong>#dev_show_discovery_overrides_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show discovery overrides의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show discovery overrides' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show discovery overrides를 클릭하거나 조작할 수 있습니다
- false일 때: dev show discovery overrides가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show discovery overrides를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show discovery overrides_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_discovery_overrides_enabled",
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
<summary><strong>#dev_show_display_logged_error_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show display logged error의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show display logged error' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show display logged error를 클릭하거나 조작할 수 있습니다
- false일 때: dev show display logged error가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show display logged error를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show display logged error_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_display_logged_error_enabled",
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
<summary><strong>#dev_show_display_logged_error_marketplace_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show display logged error marketplace의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show display logged error marketplace' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show display logged error marketplace를 클릭하거나 조작할 수 있습니다
- false일 때: dev show display logged error marketplace가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show display logged error marketplace를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show display logged error marketplace_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_display_logged_error_marketplace_enabled",
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
<summary><strong>#dev_show_display_logged_error_osi_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show display logged error osi의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show display logged error osi' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show display logged error osi를 클릭하거나 조작할 수 있습니다
- false일 때: dev show display logged error osi가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show display logged error osi를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show display logged error osi_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_display_logged_error_osi_enabled",
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
<summary><strong>#dev_show_display_logged_error_other_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show display logged error other의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show display logged error other' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show display logged error other를 클릭하거나 조작할 수 있습니다
- false일 때: dev show display logged error other가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show display logged error other를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show display logged error other_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_display_logged_error_other_enabled",
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
<summary><strong>#dev_show_display_logged_error_ui_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show display logged error ui의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show display logged error ui' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show display logged error ui를 클릭하거나 조작할 수 있습니다
- false일 때: dev show display logged error ui가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show display logged error ui를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show display logged error ui_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_display_logged_error_ui_enabled",
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
<summary><strong>#dev_show_doc_id_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show doc id의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show doc id' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show doc id를 클릭하거나 조작할 수 있습니다
- false일 때: dev show doc id가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show doc id를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show doc id_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_doc_id_enabled",
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
<summary><strong>#dev_show_latency_graph_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show latency graph의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show latency graph' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show latency graph를 클릭하거나 조작할 수 있습니다
- false일 때: dev show latency graph가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show latency graph를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show latency graph_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_latency_graph_enabled",
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
<summary><strong>#dev_show_override_configurations_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show override configurations의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show override configurations' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show override configurations를 클릭하거나 조작할 수 있습니다
- false일 때: dev show override configurations가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show override configurations를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show override configurations_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_override_configurations_enabled",
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
<summary><strong>#dev_show_override_realms_features_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show override realms features의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show override realms features' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show override realms features를 클릭하거나 조작할 수 있습니다
- false일 때: dev show override realms features가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show override realms features를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show override realms features_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_override_realms_features_enabled",
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
<summary><strong>#dev_show_override_treatments_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show override treatments의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show override treatments' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show override treatments를 클릭하거나 조작할 수 있습니다
- false일 때: dev show override treatments가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show override treatments를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show override treatments_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_override_treatments_enabled",
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
<summary><strong>#dev_show_platform_offer_check_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show platform offer check의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show platform offer check' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show platform offer check를 클릭하거나 조작할 수 있습니다
- false일 때: dev show platform offer check가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show platform offer check를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show platform offer check_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_platform_offer_check_enabled",
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
<summary><strong>#dev_show_tcui_replacement_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev show tcui replacement의 활성화 여부

**자세한 설명**
이 바인딩은 'dev show tcui replacement' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev show tcui replacement를 클릭하거나 조작할 수 있습니다
- false일 때: dev show tcui replacement가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev show tcui replacement를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev show tcui replacement_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_show_tcui_replacement_enabled",
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
<summary><strong>#dev_sunset_state_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev sunset state의 활성화 여부

**자세한 설명**
이 바인딩은 'dev sunset state' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev sunset state를 클릭하거나 조작할 수 있습니다
- false일 때: dev sunset state가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev sunset state를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev sunset state_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_sunset_state_enabled",
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
<summary><strong>#dev_sunsetting_tier_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev sunsetting tier dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev sunsetting tier dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev sunsetting tier dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev sunsetting tier dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev sunsetting tier dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev sunsetting tier dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_sunsetting_tier_dropdown_enabled",
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
<summary><strong>#dev_treatment_id_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev treatment id의 활성화 여부

**자세한 설명**
이 바인딩은 'dev treatment id' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev treatment id를 클릭하거나 조작할 수 있습니다
- false일 때: dev treatment id가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev treatment id를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev treatment id_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_treatment_id_enabled",
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
<summary><strong>#dev_use_ipv6_only_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev use ipv6 only의 활성화 여부

**자세한 설명**
이 바인딩은 'dev use ipv6 only' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev use ipv6 only를 클릭하거나 조작할 수 있습니다
- false일 때: dev use ipv6 only가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev use ipv6 only를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev use ipv6 only_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_use_ipv6_only_enabled",
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
<summary><strong>#dev_use_override_date_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev use override date의 활성화 여부

**자세한 설명**
이 바인딩은 'dev use override date' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev use override date를 클릭하거나 조작할 수 있습니다
- false일 때: dev use override date가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev use override date를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev use override date_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_use_override_date_enabled",
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
<summary><strong>#dev_use_sunset_overrides_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev use sunset overrides의 활성화 여부

**자세한 설명**
이 바인딩은 'dev use sunset overrides' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev use sunset overrides를 클릭하거나 조작할 수 있습니다
- false일 때: dev use sunset overrides가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev use sunset overrides를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev use sunset overrides_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_use_sunset_overrides_enabled",
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
<summary><strong>#dev_use_version_override_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev use version override의 활성화 여부

**자세한 설명**
이 바인딩은 'dev use version override' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev use version override를 클릭하거나 조작할 수 있습니다
- false일 때: dev use version override가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev use version override를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev use version override_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_use_version_override_enabled",
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
<summary><strong>#dev_xbox_environment_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev xbox environment dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev xbox environment dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev xbox environment dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev xbox environment dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev xbox environment dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev xbox environment dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_xbox_environment_dropdown_enabled",
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
<summary><strong>#dev_xsapi_logging_verbosity_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dev xsapi logging verbosity dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'dev xsapi logging verbosity dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dev xsapi logging verbosity dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: dev xsapi logging verbosity dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dev xsapi logging verbosity dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dev xsapi logging verbosity dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dev_xsapi_logging_verbosity_dropdown_enabled",
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
<summary><strong>#device_info_memory_tier_override_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
device info memory tier override의 활성화 여부

**자세한 설명**
이 바인딩은 'device info memory tier override' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: device info memory tier override를 클릭하거나 조작할 수 있습니다
- false일 때: device info memory tier override가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: device info memory tier override를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "device info memory tier override_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#device_info_memory_tier_override_enabled",
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
<summary><strong>#device_info_options_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
device info options의 활성화 여부

**자세한 설명**
이 바인딩은 'device info options' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: device info options를 클릭하거나 조작할 수 있습니다
- false일 때: device info options가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: device info options를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "device info options_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#device_info_options_enabled",
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
<summary><strong>#device_info_use_memory_tier_override_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
device info use memory tier override의 활성화 여부

**자세한 설명**
이 바인딩은 'device info use memory tier override' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: device info use memory tier override를 클릭하거나 조작할 수 있습니다
- false일 때: device info use memory tier override가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: device info use memory tier override를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "device info use memory tier override_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#device_info_use_memory_tier_override_enabled",
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
<summary><strong>#diagnostics_options_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
diagnostics options의 활성화 여부

**자세한 설명**
이 바인딩은 'diagnostics options' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: diagnostics options를 클릭하거나 조작할 수 있습니다
- false일 때: diagnostics options가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: diagnostics options를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "diagnostics options_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#diagnostics_options_enabled",
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
<summary><strong>#do_immediate_respawn_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
do immediate respawn의 활성화 여부

**자세한 설명**
이 바인딩은 'do immediate respawn' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: do immediate respawn를 클릭하거나 조작할 수 있습니다
- false일 때: do immediate respawn가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: do immediate respawn를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "do immediate respawn_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#do_immediate_respawn_enabled",
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
<summary><strong>#dwell_before_drag_time_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
dwell before drag time의 활성화 여부

**자세한 설명**
이 바인딩은 'dwell before drag time' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: dwell before drag time를 클릭하거나 조작할 수 있습니다
- false일 때: dwell before drag time가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: dwell before drag time를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "dwell before drag time_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#dwell_before_drag_time_enabled",
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
<summary><strong>#ecomode_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
ecomode toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'ecomode toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: ecomode toggle를 클릭하거나 조작할 수 있습니다
- false일 때: ecomode toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: ecomode toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "ecomode toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#ecomode_toggle_enabled",
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
<summary><strong>#edge_highlight_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
edge highlight의 활성화 여부

**자세한 설명**
이 바인딩은 'edge highlight' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: edge highlight를 클릭하거나 조작할 수 있습니다
- false일 때: edge highlight가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: edge highlight를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "edge highlight_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#edge_highlight_enabled",
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
<summary><strong>#edu_cloud_upload_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
edu cloud upload의 활성화 여부

**자세한 설명**
이 바인딩은 'edu cloud upload' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: edu cloud upload를 클릭하거나 조작할 수 있습니다
- false일 때: edu cloud upload가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: edu cloud upload를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "edu cloud upload_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#edu_cloud_upload_enabled",
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
<summary><strong>#education_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
education toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'education toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: education toggle를 클릭하거나 조작할 수 있습니다
- false일 때: education toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: education toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "education toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#education_toggle_enabled",
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
<summary><strong>#enable_auto_text_to_speech_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
enable auto text to speech의 활성화 여부

**자세한 설명**
이 바인딩은 'enable auto text to speech' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: enable auto text to speech를 클릭하거나 조작할 수 있습니다
- false일 때: enable auto text to speech가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: enable auto text to speech를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "enable auto text to speech_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#enable_auto_text_to_speech_enabled",
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
<summary><strong>#enable_chat_text_to_speech_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
enable chat text to speech의 활성화 여부

**자세한 설명**
이 바인딩은 'enable chat text to speech' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: enable chat text to speech를 클릭하거나 조작할 수 있습니다
- false일 때: enable chat text to speech가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: enable chat text to speech를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "enable chat text to speech_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#enable_chat_text_to_speech_enabled",
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
<summary><strong>#enable_new_touch_control_schemes_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
enable new touch control schemes의 활성화 여부

**자세한 설명**
이 바인딩은 'enable new touch control schemes' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: enable new touch control schemes를 클릭하거나 조작할 수 있습니다
- false일 때: enable new touch control schemes가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: enable new touch control schemes를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "enable new touch control schemes_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#enable_new_touch_control_schemes_enabled",
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
<summary><strong>#enable_open_chat_message_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
enable open chat message의 활성화 여부

**자세한 설명**
이 바인딩은 'enable open chat message' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: enable open chat message를 클릭하거나 조작할 수 있습니다
- false일 때: enable open chat message가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: enable open chat message를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "enable open chat message_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#enable_open_chat_message_enabled",
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
<summary><strong>#enable_ui_text_to_speech_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
enable ui text to speech의 활성화 여부

**자세한 설명**
이 바인딩은 'enable ui text to speech' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: enable ui text to speech를 클릭하거나 조작할 수 있습니다
- false일 때: enable ui text to speech가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: enable ui text to speech를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "enable ui text to speech_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#enable_ui_text_to_speech_enabled",
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
<summary><strong>#enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
버튼이나 입력 필드를 활성화하거나 비활성화하는 바인딩

**자세한 설명**
이 바인딩은 UI 요소의 상호작용 가능 여부를 결정합니다.

- true일 때: 요소가 활성화되어 클릭하거나 조작할 수 있습니다
- false일 때: 요소가 비활성화되어 클릭할 수 없습니다 (회색으로 표시됨)

#visible과 다른 점은:
- #visible = 요소 자체를 보이거나 숨김
- #enabled = 요소는 보이지만 사용 가능 여부만 제어

**실제 사용 예**
예: 입력 필드가 모두 채워졌을 때만 '확인' 버튼 활성화, 권한이 있을 때만 설정 변경 가능

**코드 예제**
```jsonc
{
  "submit_button": {
    "type": "button",
    "$button_text": "확인",
    "bindings": [
      {
        "binding_name": "#submit_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
add external server screen, authentication screen, beacon screen
외 58개 (총 61개 파일)

</details>
<details>
<summary><strong>#entities_drop_loot_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
entities drop loot의 활성화 여부

**자세한 설명**
이 바인딩은 'entities drop loot' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: entities drop loot를 클릭하거나 조작할 수 있습니다
- false일 때: entities drop loot가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: entities drop loot를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "entities drop loot_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#entities_drop_loot_enabled",
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
<summary><strong>#execute_on_first_tick_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
execute on first tick의 활성화 여부

**자세한 설명**
이 바인딩은 'execute on first tick' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: execute on first tick를 클릭하거나 조작할 수 있습니다
- false일 때: execute on first tick가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: execute on first tick를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "execute on first tick_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#execute_on_first_tick_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
command block screen (총 1개 파일)

</details>
<details>
<summary><strong>#existing_world_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
existing world button의 활성화 여부

**자세한 설명**
이 바인딩은 'existing world button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: existing world button를 클릭하거나 조작할 수 있습니다
- false일 때: existing world button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: existing world button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "existing world button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#existing_world_button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
select world screen (총 1개 파일)

</details>

[분할 목록으로 돌아가기](category-02.html#binding-category)


