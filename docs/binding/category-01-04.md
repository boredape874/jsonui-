---
title: 바인딩 목록 - UI 표시/숨김 (4/4)
outline: false
search: false
---

# UI 표시/숨김 {#binding-category}

UI 표시/숨김 4/4 (항목 601-608)

[분할 목록으로 돌아가기](category-01.html#binding-category)

<details>
<summary><strong>#websocket_encryption_visible</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
websocket encryption 요소의 표시 여부

**자세한 설명**
이 바인딩은 'websocket encryption' 요소를 화면에 보이게 하거나 숨깁니다.

- true일 때: websocket encryption 요소가 화면에 나타납니다
- false일 때: websocket encryption 요소가 숨겨집니다

특정 조건에서만 UI 요소를 보여주고 싶을 때 사용합니다.

**실제 사용 예**
예: websocket encryption를 특정 상황에서만 표시

**코드 예제**
```jsonc
{
  "websocket encryption_panel": {
    "type": "panel",
    "bindings": [
      {
        "binding_name": "#websocket_encryption_visible",
        "binding_name_override": "#visible",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>
<details>
<summary><strong>#welcome_visible</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
welcome 요소의 표시 여부

**자세한 설명**
이 바인딩은 'welcome' 요소를 화면에 보이게 하거나 숨깁니다.

- true일 때: welcome 요소가 화면에 나타납니다
- false일 때: welcome 요소가 숨겨집니다

특정 조건에서만 UI 요소를 보여주고 싶을 때 사용합니다.

**실제 사용 예**
예: welcome를 특정 상황에서만 표시

**코드 예제**
```jsonc
{
  "welcome_panel": {
    "type": "panel",
    "bindings": [
      {
        "binding_name": "#welcome_visible",
        "binding_name_override": "#visible",
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
<summary><strong>#wishlist_button_visible</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
wishlist button 요소의 표시 여부

**자세한 설명**
이 바인딩은 'wishlist button' 요소를 화면에 보이게 하거나 숨깁니다.

- true일 때: wishlist button 요소가 화면에 나타납니다
- false일 때: wishlist button 요소가 숨겨집니다

특정 조건에서만 UI 요소를 보여주고 싶을 때 사용합니다.

**실제 사용 예**
예: wishlist button를 특정 상황에서만 표시

**코드 예제**
```jsonc
{
  "wishlist button_panel": {
    "type": "panel",
    "bindings": [
      {
        "binding_name": "#wishlist_button_visible",
        "binding_name_override": "#visible",
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
<summary><strong>#world_download_info_visible</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
world download info 요소의 표시 여부

**자세한 설명**
이 바인딩은 'world download info' 요소를 화면에 보이게 하거나 숨깁니다.

- true일 때: world download info 요소가 화면에 나타납니다
- false일 때: world download info 요소가 숨겨집니다

특정 조건에서만 UI 요소를 보여주고 싶을 때 사용합니다.

**실제 사용 예**
예: world download info를 특정 상황에서만 표시

**코드 예제**
```jsonc
{
  "world download info_panel": {
    "type": "panel",
    "bindings": [
      {
        "binding_name": "#world_download_info_visible",
        "binding_name_override": "#visible",
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
<summary><strong>#world_lock_visible</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
world lock 요소의 표시 여부

**자세한 설명**
이 바인딩은 'world lock' 요소를 화면에 보이게 하거나 숨깁니다.

- true일 때: world lock 요소가 화면에 나타납니다
- false일 때: world lock 요소가 숨겨집니다

특정 조건에서만 UI 요소를 보여주고 싶을 때 사용합니다.

**실제 사용 예**
예: world lock를 특정 상황에서만 표시

**코드 예제**
```jsonc
{
  "world lock_panel": {
    "type": "panel",
    "bindings": [
      {
        "binding_name": "#world_lock_visible",
        "binding_name_override": "#visible",
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
<summary><strong>#x_helper_visible</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
x helper 요소의 표시 여부

**자세한 설명**
이 바인딩은 'x helper' 요소를 화면에 보이게 하거나 숨깁니다.

- true일 때: x helper 요소가 화면에 나타납니다
- false일 때: x helper 요소가 숨겨집니다

특정 조건에서만 UI 요소를 보여주고 싶을 때 사용합니다.

**실제 사용 예**
예: x helper를 특정 상황에서만 표시

**코드 예제**
```jsonc
{
  "x helper_panel": {
    "type": "panel",
    "bindings": [
      {
        "binding_name": "#x_helper_visible",
        "binding_name_override": "#visible",
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
<summary><strong>#xbl_multiplayer_warning_label_visible</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
xbl multiplayer warning label 요소의 표시 여부

**자세한 설명**
이 바인딩은 'xbl multiplayer warning label' 요소를 화면에 보이게 하거나 숨깁니다.

- true일 때: xbl multiplayer warning label 요소가 화면에 나타납니다
- false일 때: xbl multiplayer warning label 요소가 숨겨집니다

특정 조건에서만 UI 요소를 보여주고 싶을 때 사용합니다.

**실제 사용 예**
예: xbl multiplayer warning label를 특정 상황에서만 표시

**코드 예제**
```jsonc
{
  "xbl multiplayer warning label_panel": {
    "type": "panel",
    "bindings": [
      {
        "binding_name": "#xbl_multiplayer_warning_label_visible",
        "binding_name_override": "#visible",
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
<summary><strong>#y_helper_visible</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
y helper 요소의 표시 여부

**자세한 설명**
이 바인딩은 'y helper' 요소를 화면에 보이게 하거나 숨깁니다.

- true일 때: y helper 요소가 화면에 나타납니다
- false일 때: y helper 요소가 숨겨집니다

특정 조건에서만 UI 요소를 보여주고 싶을 때 사용합니다.

**실제 사용 예**
예: y helper를 특정 상황에서만 표시

**코드 예제**
```jsonc
{
  "y helper_panel": {
    "type": "panel",
    "bindings": [
      {
        "binding_name": "#y_helper_visible",
        "binding_name_override": "#visible",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
start screen (총 1개 파일)

</details>

[분할 목록으로 돌아가기](category-01.html#binding-category)


