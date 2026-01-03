---
title: 바인딩 목록 - UI 활성화/비활성화 (3/3)
outline: false
search: false
---

# UI 활성화/비활성화 {#binding-category}

UI 활성화/비활성화 3/3 (항목 401-457)

[분할 목록으로 돌아가기](category-02.html#binding-category)

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
        "binding_name": "#sneak_dropdown_enabled",
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
        "binding_name": "#sound_volume_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#split_controls_enabled",
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
        "binding_name": "#split_screen_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#splitscreen_interface_opacity_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#sprint_on_movement_enabled",
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
        "binding_name": "#stack_splitting_trigger_time_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#start_with_map_enabled",
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
        "binding_name": "#sunsetting_override_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#super_fancy_water_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#swap_gamepad_ab_buttons_enabled",
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
        "binding_name": "#swap_gamepad_xy_buttons_enabled",
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
        "binding_name": "#swap_jump_and_sneak_enabled",
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
        "binding_name": "#switch_coin_debug_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#switch_storage_type_enabled",
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
        "binding_name": "#terrain_shadows_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#texel_aa_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#text_box_enabled",
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
        "binding_name": "#texttospeech_volume_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#texture_hot_reloader_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#third_person_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#thumbstick_opacity_enabled",
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
        "binding_name": "#tile_drops_enabled",
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
        "binding_name": "#timezonetype_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#toast_notification_duration_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#toggle_edu_cloud_backup_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#touch_autojump_enabled",
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
        "binding_name": "#touch_destroy_vibration_enabled",
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
        "binding_name": "#touch_invert_y_axis_enabled",
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
        "binding_name": "#touch_sensitivity_enabled",
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
        "binding_name": "#touch_split_vibration_enabled",
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
        "binding_name": "#trade_button_enabled",
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
        "binding_name": "#trade_toggle_enabled",
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
        "binding_name": "#transparent_leaves_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#tutorial_toggle_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#ui_profile_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#undo_button_enabled",
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
        "binding_name": "#upscaling_mode_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#use_remote_connect_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#video_button_enabled",
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
        "binding_name": "#view_bobbing_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#vsync_dropdown_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#weather_cycle_enabled",
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
        "binding_name": "#weather_volume_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#websocket_encryption_enabled",
        "binding_name_override": "#enabled",
        "binding_type": "global"
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
        "binding_name": "#wishlist_button_enabled",
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
        "binding_name": "#world_difficulty_dropdown_enabled",
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
        "binding_name": "#world_game_mode_dropdown_enabled",
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
        "binding_name": "#world_name_enabled",
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
        "binding_name": "#world_seed_enabled",
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
        "binding_name": "#world_type_dropdown_enabled",
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
        "binding_name": "#wysiwyg_reset_button_enabled",
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

[분할 목록으로 돌아가기](category-02.html#binding-category)


