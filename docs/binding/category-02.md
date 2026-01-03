---
title: 바인딩 목록 - UI 활성화/비활성화
outline: false
---

# UI 활성화/비활성화 {#binding-category}

총 457개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

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
        "binding_name": "#accept skin button_enabled",
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
        "binding_name": "#action button_enabled",
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
        "binding_name": "#actionbar text background opacity_enabled",
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
        "binding_name": "#activate link_enabled",
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
        "binding_name": "#ad max graph token refresh_enabled",
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
        "binding_name": "#ad max signin token refresh_enabled",
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
        "binding_name": "#ad token refresh threshold_enabled",
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
        "binding_name": "#add buttons_enabled",
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
        "binding_name": "#add invite link button_enabled",
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
        "binding_name": "#add server_enabled",
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
        "binding_name": "#allow cellular data_enabled",
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
        "binding_name": "#allow cheats_enabled",
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
        "binding_name": "#always day_enabled",
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
        "binding_name": "#always highlight hovering box in crosshair_enabled",
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
        "binding_name": "#ambient volume_enabled",
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
        "binding_name": "#animation mode dropdown_enabled",
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
        "binding_name": "#arrow left_enabled",
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
        "binding_name": "#arrow right_enabled",
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
        "binding_name": "#auto update_enabled",
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
        "binding_name": "#automation functional test block input_enabled",
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
        "binding_name": "#automation server test assert on level diff_enabled",
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
        "binding_name": "#backup item button_enabled",
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
        "binding_name": "#ban button_enabled",
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
        "binding_name": "#block type dropdown_enabled",
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
        "binding_name": "#block volume_enabled",
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
        "binding_name": "#bloom strength_enabled",
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
        "binding_name": "#bonus chest_enabled",
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
        "binding_name": "#bubble particles_enabled",
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
        "binding_name": "#button mode_enabled",
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
        "binding_name": "#button size_enabled",
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
        "binding_name": "#buy button_enabled",
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
        "binding_name": "#camera shake_enabled",
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
        "binding_name": "#can be server_enabled",
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
        "binding_name": "#can be xbl_enabled",
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
        "binding_name": "#chat background opacity_enabled",
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
        "binding_name": "#chat font size_enabled",
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
        "binding_name": "#chat line spacing_enabled",
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
        "binding_name": "#chat message duration dropdown_enabled",
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
        "binding_name": "#chat typeface dropdown_enabled",
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
        "binding_name": "#classic box selection_enabled",
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
        "binding_name": "#cloud file last changed_enabled",
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
        "binding_name": "#cloud file name_enabled",
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
        "binding_name": "#cloud upload_enabled",
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
        "binding_name": "#command blocks_enabled",
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
        "binding_name": "#command blocks_enabled",
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
        "binding_name": "#condition dropdown_enabled",
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
        "binding_name": "#confirm button_enabled",
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
        "binding_name": "#confirm skin button_enabled",
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
        "binding_name": "#content log file_enabled",
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
        "binding_name": "#content log gui_enabled",
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
        "binding_name": "#content log gui level dropdown_enabled",
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
        "binding_name": "#content log gui option_enabled",
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
        "binding_name": "#content log gui show on errors_enabled",
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
        "binding_name": "#controller autojump_enabled",
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
        "binding_name": "#controller clear hotbar_enabled",
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
        "binding_name": "#controller destroy vibration_enabled",
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
        "binding_name": "#controller invert y axis_enabled",
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
        "binding_name": "#controller sensitivity_enabled",
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
        "binding_name": "#controller split vibration_enabled",
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
        "binding_name": "#controller toggle crouch_enabled",
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
        "binding_name": "#copy button_enabled",
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
        "binding_name": "#copy link_enabled",
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
        "binding_name": "#creative delayed block breaking_enabled",
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
        "binding_name": "#cross platform_enabled",
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
        "binding_name": "#crossplatform toggle_enabled",
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
        "binding_name": "#custom input_enabled",
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
        "binding_name": "#custom skin button_enabled",
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
        "binding_name": "#custom slider_enabled",
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
        "binding_name": "#custom toggle_enabled",
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
        "binding_name": "#cycle pack left button_enabled",
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
        "binding_name": "#cycle pack right button_enabled",
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
        "binding_name": "#cycle promotions left button_enabled",
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
        "binding_name": "#cycle promotions right button_enabled",
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
        "binding_name": "#cycle screenshots left button_enabled",
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
        "binding_name": "#cycle screenshots right button_enabled",
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
        "binding_name": "#daylight cycle_enabled",
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
        "binding_name": "#debug biome override dropdown dropdown_enabled",
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
        "binding_name": "#debug json popup_enabled",
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
        "binding_name": "#debug spawn biome dropdown_enabled",
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
        "binding_name": "#debug spawn dimension dropdown_enabled",
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
        "binding_name": "#default profiling group_enabled",
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
        "binding_name": "#deferred platform override dropdown_enabled",
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
        "binding_name": "#deferred point light_enabled",
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
        "binding_name": "#deferred render distance_enabled",
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
        "binding_name": "#delete button_enabled",
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
        "binding_name": "#dev achievements always_enabled",
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
        "binding_name": "#dev achievements always_enabled",
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
        "binding_name": "#dev add http delay seconds_enabled",
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
        "binding_name": "#dev allow mobile data blocked modal_enabled",
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
        "binding_name": "#dev assertions debug break_enabled",
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
        "binding_name": "#dev assertions show dialog_enabled",
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
        "binding_name": "#dev azurenotebooks env dropdown_enabled",
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
        "binding_name": "#dev chunk map mode dropdown_enabled",
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
        "binding_name": "#dev configuration id_enabled",
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
        "binding_name": "#dev connection quality_enabled",
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
        "binding_name": "#dev create realm without purchase_enabled",
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
        "binding_name": "#dev debug hud dropdown_enabled",
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
        "binding_name": "#dev debug skin rotation speed multiplier dropdown_enabled",
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
        "binding_name": "#dev disable client blob cache_enabled",
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
        "binding_name": "#dev disable render blockentities_enabled",
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
        "binding_name": "#dev disable render entities_enabled",
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
        "binding_name": "#dev disable render hud_enabled",
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
        "binding_name": "#dev disable render item in hand_enabled",
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
        "binding_name": "#dev disable render main menu cube map_enabled",
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
        "binding_name": "#dev disable render main menu paperdoll animation_enabled",
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
        "binding_name": "#dev disable render particles_enabled",
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
        "binding_name": "#dev disable render sky_enabled",
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
        "binding_name": "#dev disable render terrain_enabled",
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
        "binding_name": "#dev disable render weather_enabled",
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
        "binding_name": "#dev discovery environment dropdown_enabled",
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
        "binding_name": "#dev discovery override branch_enabled",
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
        "binding_name": "#dev discovery override custom_enabled",
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
        "binding_name": "#dev discovery override service name_enabled",
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
        "binding_name": "#dev display configurations panel_enabled",
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
        "binding_name": "#dev display mock http panel_enabled",
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
        "binding_name": "#dev display override datetime_enabled",
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
        "binding_name": "#dev display realms features panel_enabled",
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
        "binding_name": "#dev display treatments panel_enabled",
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
        "binding_name": "#dev edu demo_enabled",
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
        "binding_name": "#dev education env dropdown_enabled",
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
        "binding_name": "#dev enable profiler_enabled",
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
        "binding_name": "#dev find mobs_enabled",
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
        "binding_name": "#dev force client blob cache_enabled",
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
        "binding_name": "#dev force trial mode_enabled",
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
        "binding_name": "#dev game tip_enabled",
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
        "binding_name": "#dev gathering filter_enabled",
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
        "binding_name": "#dev http logging verbosity dropdown_enabled",
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
        "binding_name": "#dev load override date_enabled",
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
        "binding_name": "#dev marketplace toggle all skins rotate_enabled",
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
        "binding_name": "#dev nethernet logging verbosity dropdown_enabled",
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
        "binding_name": "#dev new bed screen radio_enabled",
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
        "binding_name": "#dev new death screen radio_enabled",
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
        "binding_name": "#dev ore ui gameplay ui radio_enabled",
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
        "binding_name": "#dev override xbox sandbox_enabled",
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
        "binding_name": "#dev realms endpoint_enabled",
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
        "binding_name": "#dev realms endpoint payment_enabled",
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
        "binding_name": "#dev realms environment dropdown_enabled",
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
        "binding_name": "#dev realms feature id_enabled",
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
        "binding_name": "#dev realms relying party_enabled",
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
        "binding_name": "#dev realms relying party payment_enabled",
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
        "binding_name": "#dev realms sku dropdown_enabled",
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
        "binding_name": "#dev render attach pos_enabled",
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
        "binding_name": "#dev render bounding box_enabled",
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
        "binding_name": "#dev render goal state_enabled",
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
        "binding_name": "#dev render mob info state_enabled",
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
        "binding_name": "#dev render paths_enabled",
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
        "binding_name": "#dev reset client id_enabled",
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
        "binding_name": "#dev show build info_enabled",
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
        "binding_name": "#dev show chunk map_enabled",
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
        "binding_name": "#dev show dev console button_enabled",
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
        "binding_name": "#dev show discovery overrides_enabled",
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
        "binding_name": "#dev show display logged error_enabled",
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
        "binding_name": "#dev show display logged error marketplace_enabled",
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
        "binding_name": "#dev show display logged error osi_enabled",
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
        "binding_name": "#dev show display logged error other_enabled",
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
        "binding_name": "#dev show display logged error ui_enabled",
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
        "binding_name": "#dev show doc id_enabled",
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
        "binding_name": "#dev show latency graph_enabled",
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
        "binding_name": "#dev show override configurations_enabled",
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
        "binding_name": "#dev show override realms features_enabled",
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
        "binding_name": "#dev show override treatments_enabled",
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
        "binding_name": "#dev show platform offer check_enabled",
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
        "binding_name": "#dev show tcui replacement_enabled",
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
        "binding_name": "#dev sunset state_enabled",
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
        "binding_name": "#dev sunsetting tier dropdown_enabled",
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
        "binding_name": "#dev treatment id_enabled",
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
        "binding_name": "#dev use ipv6 only_enabled",
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
        "binding_name": "#dev use override date_enabled",
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
        "binding_name": "#dev use sunset overrides_enabled",
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
        "binding_name": "#dev use version override_enabled",
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
        "binding_name": "#dev xbox environment dropdown_enabled",
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
        "binding_name": "#dev xsapi logging verbosity dropdown_enabled",
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
        "binding_name": "#device info memory tier override_enabled",
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
        "binding_name": "#device info options_enabled",
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
        "binding_name": "#device info use memory tier override_enabled",
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
        "binding_name": "#diagnostics options_enabled",
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
        "binding_name": "#do immediate respawn_enabled",
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
        "binding_name": "#dwell before drag time_enabled",
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
        "binding_name": "#ecomode toggle_enabled",
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
        "binding_name": "#edge highlight_enabled",
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
        "binding_name": "#edu cloud upload_enabled",
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
        "binding_name": "#education toggle_enabled",
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
        "binding_name": "#enable auto text to speech_enabled",
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
        "binding_name": "#enable chat text to speech_enabled",
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
        "binding_name": "#enable new touch control schemes_enabled",
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
        "binding_name": "#enable open chat message_enabled",
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
        "binding_name": "#enable ui text to speech_enabled",
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
        "binding_name": "#entities drop loot_enabled",
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
        "binding_name": "#execute on first tick_enabled",
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
        "binding_name": "#existing world button_enabled",
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
        "binding_name": "#fail realms purchase fulfillment_enabled",
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
        "binding_name": "#fancy skies_enabled",
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
        "binding_name": "#feature toggle_enabled",
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
        "binding_name": "#field of view_enabled",
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
        "binding_name": "#field of view toggle_enabled",
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
        "binding_name": "#file storage location_enabled",
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
        "binding_name": "#file watcher_enabled",
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
        "binding_name": "#filter profanity_enabled",
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
        "binding_name": "#finalize button_enabled",
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
        "binding_name": "#find cross platform friends_enabled",
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
        "binding_name": "#fire spreads_enabled",
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
        "binding_name": "#flat nether_enabled",
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
        "binding_name": "#force user agreement level_enabled",
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
        "binding_name": "#frame pacing_enabled",
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
        "binding_name": "#friends drawer button_enabled",
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
        "binding_name": "#full screen_enabled",
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
        "binding_name": "#game version override_enabled",
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
        "binding_name": "#game version override toggle_enabled",
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
        "binding_name": "#gamepad cursor sensitivity_enabled",
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
        "binding_name": "#gathering button_enabled",
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
        "binding_name": "#generate random button_enabled",
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
        "binding_name": "#gesture control_enabled",
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
        "binding_name": "#glint speed_enabled",
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
        "binding_name": "#glint strength_enabled",
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
        "binding_name": "#graphics mode dropdown_enabled",
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
        "binding_name": "#graphics mode radio deferred_enabled",
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
        "binding_name": "#graphics mode radio ray traced_enabled",
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
        "binding_name": "#graphics mode switch_enabled",
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
        "binding_name": "#graphics quality preset mode dropdown_enabled",
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
        "binding_name": "#graphics upscaling_enabled",
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
        "binding_name": "#gui accessibility scaling_enabled",
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
        "binding_name": "#gui scale_enabled",
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
        "binding_name": "#hdr strength_enabled",
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
        "binding_name": "#hide gamepad cursor_enabled",
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
        "binding_name": "#hide hand_enabled",
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
        "binding_name": "#hide hud_enabled",
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
        "binding_name": "#hide paperdoll_enabled",
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
        "binding_name": "#hint toggles_enabled",
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
        "binding_name": "#host options menu not open and tts_enabled",
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
        "binding_name": "#hostile volume_enabled",
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
        "binding_name": "#hotbar only touch_enabled",
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
        "binding_name": "#hud text background opacity_enabled",
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
        "binding_name": "#improved input response options_enabled",
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
        "binding_name": "#include entities_enabled",
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
        "binding_name": "#include players_enabled",
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
        "binding_name": "#infinite link_enabled",
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
        "binding_name": "#interation button_enabled",
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
        "binding_name": "#interface opacity_enabled",
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
        "binding_name": "#invite button_enabled",
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
        "binding_name": "#is claim all_enabled",
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
        "binding_name": "#is hardcore_enabled",
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
        "binding_name": "#is none option_enabled",
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
        "binding_name": "#is top row button focus_enabled",
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
        "binding_name": "#joint type_enabled",
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
        "binding_name": "#joystick visibility dropdown_enabled",
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
        "binding_name": "#keep inventory_enabled",
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
        "binding_name": "#keyboard mouse autojump_enabled",
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
        "binding_name": "#keyboard mouse invert y axis_enabled",
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
        "binding_name": "#keyboard mouse sensitivity_enabled",
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
        "binding_name": "#keyboard mouse toggle crouch_enabled",
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
        "binding_name": "#keyboard show full keyboard options_enabled",
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
        "binding_name": "#keyboard smooth rotation speed_enabled",
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
        "binding_name": "#kick button_enabled",
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
        "binding_name": "#leak memory_enabled",
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
        "binding_name": "#left button_enabled",
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
        "binding_name": "#left color cycle_enabled",
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
        "binding_name": "#left handed_enabled",
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
        "binding_name": "#left limb_enabled",
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
        "binding_name": "#legacy invite button_enabled",
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
        "binding_name": "#locator bar_enabled",
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
        "binding_name": "#main volume_enabled",
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
        "binding_name": "#manage feed button_enabled",
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
        "binding_name": "#max framerate_enabled",
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
        "binding_name": "#members list_enabled",
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
        "binding_name": "#minimum template_enabled",
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
        "binding_name": "#mirror x_enabled",
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
        "binding_name": "#mirror z_enabled",
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
        "binding_name": "#mob griefing_enabled",
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
        "binding_name": "#mob loot_enabled",
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
        "binding_name": "#mob spawn_enabled",
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
        "binding_name": "#mode dropdown_enabled",
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
        "binding_name": "#modify layout_enabled",
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
        "binding_name": "#multiplayer game_enabled",
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
        "binding_name": "#multithreaded rendering_enabled",
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
        "binding_name": "#music volume_enabled",
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
        "binding_name": "#natural regeneration_enabled",
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
        "binding_name": "#network world button_enabled",
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
        "binding_name": "#neutral volume_enabled",
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
        "binding_name": "#new touch control schemes preview_enabled",
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
        "binding_name": "#next button_enabled",
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
        "binding_name": "#on enter_enabled",
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
        "binding_name": "#on exit_enabled",
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
        "binding_name": "#only trusted skins allowed_enabled",
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
        "binding_name": "#opacity option_enabled",
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
        "binding_name": "#open color picker button_enabled",
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
        "binding_name": "#party invite filter dropdown_enabled",
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
        "binding_name": "#party invite send privileges dropdown_enabled",
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
        "binding_name": "#party privacy dropdown_enabled",
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
        "binding_name": "#party visibility dropdown_enabled",
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
        "binding_name": "#pause toggle_enabled",
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
        "binding_name": "#perf turtle_enabled",
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
        "binding_name": "#persona and skins_enabled",
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
        "binding_name": "#platform broadcast dropdown_enabled",
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
        "binding_name": "#play button_enabled",
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
        "binding_name": "#player game mode dropdown_enabled",
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
        "binding_name": "#player permissions dropdown_enabled",
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
        "binding_name": "#player sleep_enabled",
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
        "binding_name": "#player sleep percentage_enabled",
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
        "binding_name": "#player volume_enabled",
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
        "binding_name": "#playfab token refresh threshold_enabled",
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
        "binding_name": "#previous button_enabled",
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
        "binding_name": "#purchase buttons_enabled",
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
        "binding_name": "#random tick speed_enabled",
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
        "binding_name": "#ratings button_enabled",
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
        "binding_name": "#raytracing render distance_enabled",
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
        "binding_name": "#realm default permission dropdown_enabled",
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
        "binding_name": "#realm description_enabled",
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
        "binding_name": "#realm name_enabled",
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
        "binding_name": "#realms contentsub_enabled",
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
        "binding_name": "#realms difficulty dropdown_enabled",
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
        "binding_name": "#realms game mode dropdown_enabled",
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
        "binding_name": "#recipes unlock_enabled",
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
        "binding_name": "#record volume_enabled",
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
        "binding_name": "#redstone dropdown_enabled",
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
        "binding_name": "#remote imgui_enabled",
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
        "binding_name": "#remove blocks_enabled",
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
        "binding_name": "#render clouds_enabled",
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
        "binding_name": "#render distance_enabled",
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
        "binding_name": "#rendering profile slider_enabled",
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
        "binding_name": "#reset button_enabled",
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
        "binding_name": "#reset on start_enabled",
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
        "binding_name": "#resizable ui_enabled",
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
        "binding_name": "#resource uri done_enabled",
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
        "binding_name": "#respawn radius_enabled",
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
        "binding_name": "#right button_enabled",
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
        "binding_name": "#right color cycle_enabled",
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
        "binding_name": "#right limb_enabled",
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
        "binding_name": "#safe zone all_enabled",
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
        "binding_name": "#safe zone x_enabled",
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
        "binding_name": "#safe zone y_enabled",
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
        "binding_name": "#save button_enabled",
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
        "binding_name": "#saves tab_enabled",
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
        "binding_name": "#scale option_enabled",
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
        "binding_name": "#screen animations_enabled",
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
        "binding_name": "#screen position x_enabled",
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
        "binding_name": "#screen position y_enabled",
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
        "binding_name": "#screenshots gallery_enabled",
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
        "binding_name": "#screenshots showcase_enabled",
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
        "binding_name": "#script debugger auto attach_enabled",
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
        "binding_name": "#script debugger auto attach timeout_enabled",
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
        "binding_name": "#script debugger options_enabled",
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
        "binding_name": "#script debugger passcode required_enabled",
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
        "binding_name": "#script watchdog hang threshold_enabled",
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
        "binding_name": "#script watchdog options_enabled",
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
        "binding_name": "#script watchdog slow threshold_enabled",
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
        "binding_name": "#script watchdog slow warning_enabled",
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
        "binding_name": "#script watchdog spike threshold_enabled",
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
        "binding_name": "#script watchdog spike warning_enabled",
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
        "binding_name": "#search bar_enabled",
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
        "binding_name": "#search screen_enabled",
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
        "binding_name": "#server sim distance_enabled",
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
        "binding_name": "#server visibility_enabled",
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
        "binding_name": "#serverbound client diagnostics_enabled",
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
        "binding_name": "#shadersdk service ip_enabled",
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
        "binding_name": "#shadersdk service port_enabled",
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
        "binding_name": "#shadersdk target port_enabled",
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
        "binding_name": "#share button_enabled",
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
        "binding_name": "#share link_enabled",
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
        "binding_name": "#show action button_enabled",
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
        "binding_name": "#show ad debug panel button_enabled",
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
        "binding_name": "#show auto save icon_enabled",
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
        "binding_name": "#show block select button_enabled",
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
        "binding_name": "#show bounding box_enabled",
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
        "binding_name": "#show coordinates_enabled",
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
        "binding_name": "#show days played_enabled",
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
        "binding_name": "#show toggle camera perspective button_enabled",
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
        "binding_name": "#show touch control selection screen_enabled",
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
        "binding_name": "#sidebar nav image bilinear_enabled",
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
        "binding_name": "#skin cycle pack left button_enabled",
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
        "binding_name": "#skin cycle pack right button_enabled",
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
        "binding_name": "#smooth lighting_enabled",
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
<summary><strong>#sneak_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
sneak dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'sneak dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: sneak dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: sneak dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: sneak dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "sneak dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#sneak dropdown_enabled",
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
<summary><strong>#sound_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
sound volume의 활성화 여부

**자세한 설명**
이 바인딩은 'sound volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: sound volume를 클릭하거나 조작할 수 있습니다
- false일 때: sound volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: sound volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "sound volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#sound volume_enabled",
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
<summary><strong>#split_controls_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
split controls의 활성화 여부

**자세한 설명**
이 바인딩은 'split controls' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: split controls를 클릭하거나 조작할 수 있습니다
- false일 때: split controls가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: split controls를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "split controls_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#split controls_enabled",
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
<summary><strong>#split_screen_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
split screen dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'split screen dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: split screen dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: split screen dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: split screen dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "split screen dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#split screen dropdown_enabled",
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
<summary><strong>#splitscreen_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
splitscreen의 활성화 여부

**자세한 설명**
이 바인딩은 'splitscreen' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: splitscreen를 클릭하거나 조작할 수 있습니다
- false일 때: splitscreen가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: splitscreen를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "splitscreen_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#splitscreen_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
how to play common (총 1개 파일)

</details>

<details>
<summary><strong>#splitscreen_interface_opacity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
splitscreen interface opacity의 활성화 여부

**자세한 설명**
이 바인딩은 'splitscreen interface opacity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: splitscreen interface opacity를 클릭하거나 조작할 수 있습니다
- false일 때: splitscreen interface opacity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: splitscreen interface opacity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "splitscreen interface opacity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#splitscreen interface opacity_enabled",
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
<summary><strong>#sprint_on_movement_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
sprint on movement의 활성화 여부

**자세한 설명**
이 바인딩은 'sprint on movement' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: sprint on movement를 클릭하거나 조작할 수 있습니다
- false일 때: sprint on movement가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: sprint on movement를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "sprint on movement_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#sprint on movement_enabled",
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
<summary><strong>#stack_splitting_trigger_time_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
stack splitting trigger time의 활성화 여부

**자세한 설명**
이 바인딩은 'stack splitting trigger time' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: stack splitting trigger time를 클릭하거나 조작할 수 있습니다
- false일 때: stack splitting trigger time가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: stack splitting trigger time를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "stack splitting trigger time_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#stack splitting trigger time_enabled",
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
<summary><strong>#start_with_map_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
start with map의 활성화 여부

**자세한 설명**
이 바인딩은 'start with map' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: start with map를 클릭하거나 조작할 수 있습니다
- false일 때: start with map가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: start with map를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "start with map_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#start with map_enabled",
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
<summary><strong>#sunsetting_override_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
sunsetting override의 활성화 여부

**자세한 설명**
이 바인딩은 'sunsetting override' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: sunsetting override를 클릭하거나 조작할 수 있습니다
- false일 때: sunsetting override가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: sunsetting override를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "sunsetting override_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#sunsetting override_enabled",
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
<summary><strong>#super_fancy_water_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
super fancy water의 활성화 여부

**자세한 설명**
이 바인딩은 'super fancy water' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: super fancy water를 클릭하거나 조작할 수 있습니다
- false일 때: super fancy water가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: super fancy water를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "super fancy water_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#super fancy water_enabled",
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
<summary><strong>#swap_gamepad_ab_buttons_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
swap gamepad ab buttons의 활성화 여부

**자세한 설명**
이 바인딩은 'swap gamepad ab buttons' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: swap gamepad ab buttons를 클릭하거나 조작할 수 있습니다
- false일 때: swap gamepad ab buttons가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: swap gamepad ab buttons를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "swap gamepad ab buttons_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#swap gamepad ab buttons_enabled",
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
<summary><strong>#swap_gamepad_xy_buttons_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
swap gamepad xy buttons의 활성화 여부

**자세한 설명**
이 바인딩은 'swap gamepad xy buttons' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: swap gamepad xy buttons를 클릭하거나 조작할 수 있습니다
- false일 때: swap gamepad xy buttons가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: swap gamepad xy buttons를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "swap gamepad xy buttons_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#swap gamepad xy buttons_enabled",
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
<summary><strong>#swap_jump_and_sneak_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
swap jump and sneak의 활성화 여부

**자세한 설명**
이 바인딩은 'swap jump and sneak' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: swap jump and sneak를 클릭하거나 조작할 수 있습니다
- false일 때: swap jump and sneak가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: swap jump and sneak를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "swap jump and sneak_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#swap jump and sneak_enabled",
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
<summary><strong>#switch_coin_debug_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
switch coin debug의 활성화 여부

**자세한 설명**
이 바인딩은 'switch coin debug' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: switch coin debug를 클릭하거나 조작할 수 있습니다
- false일 때: switch coin debug가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: switch coin debug를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "switch coin debug_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#switch coin debug_enabled",
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
<summary><strong>#switch_storage_type_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
switch storage type의 활성화 여부

**자세한 설명**
이 바인딩은 'switch storage type' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: switch storage type를 클릭하거나 조작할 수 있습니다
- false일 때: switch storage type가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: switch storage type를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "switch storage type_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#switch storage type_enabled",
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
<summary><strong>#terrain_shadows_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
terrain shadows의 활성화 여부

**자세한 설명**
이 바인딩은 'terrain shadows' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: terrain shadows를 클릭하거나 조작할 수 있습니다
- false일 때: terrain shadows가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: terrain shadows를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "terrain shadows_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#terrain shadows_enabled",
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
<summary><strong>#texel_aa_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
texel aa의 활성화 여부

**자세한 설명**
이 바인딩은 'texel aa' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: texel aa를 클릭하거나 조작할 수 있습니다
- false일 때: texel aa가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: texel aa를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "texel aa_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#texel aa_enabled",
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
<summary><strong>#text_box_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
text box의 활성화 여부

**자세한 설명**
이 바인딩은 'text box' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: text box를 클릭하거나 조작할 수 있습니다
- false일 때: text box가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: text box를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "text box_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#text box_enabled",
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
<summary><strong>#texttospeech_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
texttospeech volume의 활성화 여부

**자세한 설명**
이 바인딩은 'texttospeech volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: texttospeech volume를 클릭하거나 조작할 수 있습니다
- false일 때: texttospeech volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: texttospeech volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "texttospeech volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#texttospeech volume_enabled",
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
<summary><strong>#texture_hot_reloader_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
texture hot reloader의 활성화 여부

**자세한 설명**
이 바인딩은 'texture hot reloader' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: texture hot reloader를 클릭하거나 조작할 수 있습니다
- false일 때: texture hot reloader가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: texture hot reloader를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "texture hot reloader_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#texture hot reloader_enabled",
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
<summary><strong>#third_person_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
third person dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'third person dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: third person dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: third person dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: third person dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "third person dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#third person dropdown_enabled",
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
<summary><strong>#thumbstick_opacity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
thumbstick opacity의 활성화 여부

**자세한 설명**
이 바인딩은 'thumbstick opacity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: thumbstick opacity를 클릭하거나 조작할 수 있습니다
- false일 때: thumbstick opacity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: thumbstick opacity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "thumbstick opacity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#thumbstick opacity_enabled",
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
<summary><strong>#tile_drops_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
tile drops의 활성화 여부

**자세한 설명**
이 바인딩은 'tile drops' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: tile drops를 클릭하거나 조작할 수 있습니다
- false일 때: tile drops가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: tile drops를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "tile drops_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#tile drops_enabled",
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
<summary><strong>#timezonetype_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
timezonetype dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'timezonetype dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: timezonetype dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: timezonetype dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: timezonetype dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "timezonetype dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#timezonetype dropdown_enabled",
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
<summary><strong>#toast_notification_duration_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
toast notification duration dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'toast notification duration dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: toast notification duration dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: toast notification duration dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: toast notification duration dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "toast notification duration dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#toast notification duration dropdown_enabled",
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
<summary><strong>#toggle_edu_cloud_backup_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
toggle edu cloud backup의 활성화 여부

**자세한 설명**
이 바인딩은 'toggle edu cloud backup' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: toggle edu cloud backup를 클릭하거나 조작할 수 있습니다
- false일 때: toggle edu cloud backup가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: toggle edu cloud backup를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "toggle edu cloud backup_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#toggle edu cloud backup_enabled",
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
<summary><strong>#toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: toggle를 클릭하거나 조작할 수 있습니다
- false일 때: toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#toggle_enabled",
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
<summary><strong>#touch_autojump_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
touch autojump의 활성화 여부

**자세한 설명**
이 바인딩은 'touch autojump' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: touch autojump를 클릭하거나 조작할 수 있습니다
- false일 때: touch autojump가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: touch autojump를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "touch autojump_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#touch autojump_enabled",
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
<summary><strong>#touch_destroy_vibration_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
touch destroy vibration의 활성화 여부

**자세한 설명**
이 바인딩은 'touch destroy vibration' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: touch destroy vibration를 클릭하거나 조작할 수 있습니다
- false일 때: touch destroy vibration가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: touch destroy vibration를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "touch destroy vibration_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#touch destroy vibration_enabled",
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
<summary><strong>#touch_invert_y_axis_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
touch invert y axis의 활성화 여부

**자세한 설명**
이 바인딩은 'touch invert y axis' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: touch invert y axis를 클릭하거나 조작할 수 있습니다
- false일 때: touch invert y axis가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: touch invert y axis를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "touch invert y axis_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#touch invert y axis_enabled",
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
<summary><strong>#touch_sensitivity_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
touch sensitivity의 활성화 여부

**자세한 설명**
이 바인딩은 'touch sensitivity' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: touch sensitivity를 클릭하거나 조작할 수 있습니다
- false일 때: touch sensitivity가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: touch sensitivity를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "touch sensitivity_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#touch sensitivity_enabled",
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
<summary><strong>#touch_split_vibration_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
touch split vibration의 활성화 여부

**자세한 설명**
이 바인딩은 'touch split vibration' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: touch split vibration를 클릭하거나 조작할 수 있습니다
- false일 때: touch split vibration가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: touch split vibration를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "touch split vibration_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#touch split vibration_enabled",
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
<summary><strong>#trade_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
trade button의 활성화 여부

**자세한 설명**
이 바인딩은 'trade button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: trade button를 클릭하거나 조작할 수 있습니다
- false일 때: trade button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: trade button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "trade button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#trade button_enabled",
        "binding_name_override": "#enabled",
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
<summary><strong>#trade_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
trade toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'trade toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: trade toggle를 클릭하거나 조작할 수 있습니다
- false일 때: trade toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: trade toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "trade toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#trade toggle_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
trade 2 screen, trade 2 screen pocket (총 2개 파일)

</details>

<details>
<summary><strong>#transparent_leaves_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
transparent leaves의 활성화 여부

**자세한 설명**
이 바인딩은 'transparent leaves' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: transparent leaves를 클릭하거나 조작할 수 있습니다
- false일 때: transparent leaves가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: transparent leaves를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "transparent leaves_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#transparent leaves_enabled",
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
<summary><strong>#tts_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
tts의 활성화 여부

**자세한 설명**
이 바인딩은 'tts' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: tts를 클릭하거나 조작할 수 있습니다
- false일 때: tts가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: tts를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "tts_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#tts_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
authentication screen, how to play common, npc interact screen
외 4개 (총 7개 파일)

</details>

<details>
<summary><strong>#tutorial_toggle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
tutorial toggle의 활성화 여부

**자세한 설명**
이 바인딩은 'tutorial toggle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: tutorial toggle를 클릭하거나 조작할 수 있습니다
- false일 때: tutorial toggle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: tutorial toggle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "tutorial toggle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#tutorial toggle_enabled",
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
<summary><strong>#ui_profile_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
ui profile dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'ui profile dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: ui profile dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: ui profile dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: ui profile dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "ui profile dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#ui profile dropdown_enabled",
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
<summary><strong>#undo_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
undo button의 활성화 여부

**자세한 설명**
이 바인딩은 'undo button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: undo button를 클릭하거나 조작할 수 있습니다
- false일 때: undo button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: undo button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "undo button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#undo button_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
expanded skin pack screen, skin picker screen (총 2개 파일)

</details>

<details>
<summary><strong>#upscaling_mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
upscaling mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'upscaling mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: upscaling mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: upscaling mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: upscaling mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "upscaling mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#upscaling mode dropdown_enabled",
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
<summary><strong>#use_remote_connect_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
use remote connect의 활성화 여부

**자세한 설명**
이 바인딩은 'use remote connect' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: use remote connect를 클릭하거나 조작할 수 있습니다
- false일 때: use remote connect가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: use remote connect를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "use remote connect_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#use remote connect_enabled",
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
<summary><strong>#video_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
video button의 활성화 여부

**자세한 설명**
이 바인딩은 'video button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: video button를 클릭하거나 조작할 수 있습니다
- false일 때: video button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: video button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "video button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#video button_enabled",
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
<summary><strong>#view_bobbing_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
view bobbing의 활성화 여부

**자세한 설명**
이 바인딩은 'view bobbing' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: view bobbing를 클릭하거나 조작할 수 있습니다
- false일 때: view bobbing가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: view bobbing를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "view bobbing_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#view bobbing_enabled",
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
<summary><strong>#vsync_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
vsync dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'vsync dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: vsync dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: vsync dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: vsync dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "vsync dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#vsync dropdown_enabled",
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
<summary><strong>#weather_cycle_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
weather cycle의 활성화 여부

**자세한 설명**
이 바인딩은 'weather cycle' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: weather cycle를 클릭하거나 조작할 수 있습니다
- false일 때: weather cycle가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: weather cycle를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "weather cycle_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#weather cycle_enabled",
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
<summary><strong>#weather_volume_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
weather volume의 활성화 여부

**자세한 설명**
이 바인딩은 'weather volume' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: weather volume를 클릭하거나 조작할 수 있습니다
- false일 때: weather volume가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: weather volume를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "weather volume_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#weather volume_enabled",
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
<summary><strong>#websocket_encryption_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
websocket encryption의 활성화 여부

**자세한 설명**
이 바인딩은 'websocket encryption' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: websocket encryption를 클릭하거나 조작할 수 있습니다
- false일 때: websocket encryption가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: websocket encryption를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "websocket encryption_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#websocket encryption_enabled",
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
<summary><strong>#websockets_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
websockets의 활성화 여부

**자세한 설명**
이 바인딩은 'websockets' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: websockets를 클릭하거나 조작할 수 있습니다
- false일 때: websockets가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: websockets를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "websockets_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#websockets_enabled",
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
<summary><strong>#websockets_enabled_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
websockets의 활성화 여부

**자세한 설명**
이 바인딩은 'websockets' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: websockets를 클릭하거나 조작할 수 있습니다
- false일 때: websockets가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: websockets를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "websockets_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#websockets_enabled",
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
<summary><strong>#wishlist_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
wishlist button의 활성화 여부

**자세한 설명**
이 바인딩은 'wishlist button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: wishlist button를 클릭하거나 조작할 수 있습니다
- false일 때: wishlist button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: wishlist button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "wishlist button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#wishlist button_enabled",
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
<summary><strong>#world_difficulty_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
world difficulty dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'world difficulty dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: world difficulty dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: world difficulty dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: world difficulty dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "world difficulty dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#world difficulty dropdown_enabled",
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
<summary><strong>#world_game_mode_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
world game mode dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'world game mode dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: world game mode dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: world game mode dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: world game mode dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "world game mode dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#world game mode dropdown_enabled",
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
<summary><strong>#world_name_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
world name의 활성화 여부

**자세한 설명**
이 바인딩은 'world name' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: world name를 클릭하거나 조작할 수 있습니다
- false일 때: world name가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: world name를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "world name_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#world name_enabled",
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
<summary><strong>#world_seed_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
world seed의 활성화 여부

**자세한 설명**
이 바인딩은 'world seed' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: world seed를 클릭하거나 조작할 수 있습니다
- false일 때: world seed가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: world seed를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "world seed_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#world seed_enabled",
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
<summary><strong>#world_type_dropdown_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
world type dropdown의 활성화 여부

**자세한 설명**
이 바인딩은 'world type dropdown' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: world type dropdown를 클릭하거나 조작할 수 있습니다
- false일 때: world type dropdown가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: world type dropdown를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "world type dropdown_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#world type dropdown_enabled",
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
<summary><strong>#wysiwyg_reset_button_enabled</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
wysiwyg reset button의 활성화 여부

**자세한 설명**
이 바인딩은 'wysiwyg reset button' 요소를 사용 가능하게 하거나 비활성화합니다.

- true일 때: wysiwyg reset button를 클릭하거나 조작할 수 있습니다
- false일 때: wysiwyg reset button가 회색으로 표시되고 클릭할 수 없습니다

요소는 보이지만 특정 조건이 충족될 때만 사용할 수 있게 만들 때 사용합니다.

**실제 사용 예**
예: wysiwyg reset button를 조건 충족 시에만 활성화

**코드 예제**
```jsonc
{
  "wysiwyg reset button_button": {
    "type": "button",
    "bindings": [
      {
        "binding_name": "#wysiwyg reset button_enabled",
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

