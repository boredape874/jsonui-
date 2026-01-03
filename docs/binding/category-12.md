---
title: 바인딩 목록 - 이미지/텍스처
outline: false
search: false
---

# 이미지/텍스처 {#binding-category}

총 33개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#achievement_offer_lock_state_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
achievement offer lock state의 텍스처 이미지

**자세한 설명**
이 바인딩은 'achievement offer lock state' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: achievement offer lock state 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "achievement offer lock state_image": {
    "type": "image",
    "texture": "#achievement offer lock state_texture",
    "bindings": [
      {
        "binding_name": "#achievement_offer_lock_state_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#block_type_icon_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
block type icon의 텍스처 이미지

**자세한 설명**
이 바인딩은 'block type icon' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: block type icon 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "block type icon_image": {
    "type": "image",
    "texture": "#block type icon_texture",
    "bindings": [
      {
        "binding_name": "#block_type_icon_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#collection_permission_level_dropdown_icon_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
collection permission level dropdown icon의 텍스처 이미지

**자세한 설명**
이 바인딩은 'collection permission level dropdown icon' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: collection permission level dropdown icon 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "collection permission level dropdown icon_image": {
    "type": "image",
    "texture": "#collection permission level dropdown icon_texture",
    "bindings": [
      {
        "binding_name": "#collection_permission_level_dropdown_icon_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#container_cell_background_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
container cell background의 텍스처 이미지

**자세한 설명**
이 바인딩은 'container cell background' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: container cell background 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "container cell background_image": {
    "type": "image",
    "texture": "#container cell background_texture",
    "bindings": [
      {
        "binding_name": "#container_cell_background_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
loom screen, stonecutter screen (총 2개 파일)

</details>

<details>
<summary><strong>#container_item_background_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
container item background의 텍스처 이미지

**자세한 설명**
이 바인딩은 'container item background' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: container item background 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "container item background_image": {
    "type": "image",
    "texture": "#container item background_texture",
    "bindings": [
      {
        "binding_name": "#container_item_background_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#dropdown_toggle_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
dropdown toggle의 텍스처 이미지

**자세한 설명**
이 바인딩은 'dropdown toggle' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: dropdown toggle 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "dropdown toggle_image": {
    "type": "image",
    "texture": "#dropdown toggle_texture",
    "bindings": [
      {
        "binding_name": "#dropdown_toggle_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#form_button_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
form button의 텍스처 이미지

**자세한 설명**
이 바인딩은 'form button' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: form button 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "form button_image": {
    "type": "image",
    "texture": "#form button_texture",
    "bindings": [
      {
        "binding_name": "#form_button_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#in_use_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
in use의 텍스처 이미지

**자세한 설명**
이 바인딩은 'in use' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: in use 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "in use_image": {
    "type": "image",
    "texture": "#in use_texture",
    "bindings": [
      {
        "binding_name": "#in_use_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona cast character screen (총 1개 파일)

</details>

<details>
<summary><strong>#key_bound_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
key bound의 텍스처 이미지

**자세한 설명**
이 바인딩은 'key bound' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: key bound 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "key bound_image": {
    "type": "image",
    "texture": "#key bound_texture",
    "bindings": [
      {
        "binding_name": "#key_bound_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#main_image_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
main image의 텍스처 이미지

**자세한 설명**
이 바인딩은 'main image' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: main image 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "main image_image": {
    "type": "image",
    "texture": "#main image_texture",
    "bindings": [
      {
        "binding_name": "#main_image_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
patch notes screen (총 1개 파일)

</details>

<details>
<summary><strong>#main_mashup_key_art_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
main mashup key art의 텍스처 이미지

**자세한 설명**
이 바인딩은 'main mashup key art' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: main mashup key art 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "main mashup key art_image": {
    "type": "image",
    "texture": "#main mashup key art_texture",
    "bindings": [
      {
        "binding_name": "#main_mashup_key_art_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#manage_feed_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
manage feed의 텍스처 이미지

**자세한 설명**
이 바인딩은 'manage feed' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: manage feed 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "manage feed_image": {
    "type": "image",
    "texture": "#manage feed_texture",
    "bindings": [
      {
        "binding_name": "#manage_feed_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
manage feed screen (총 1개 파일)

</details>

<details>
<summary><strong>#nav_button_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
nav button의 텍스처 이미지

**자세한 설명**
이 바인딩은 'nav button' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: nav button 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "nav button_image": {
    "type": "image",
    "texture": "#nav button_texture",
    "bindings": [
      {
        "binding_name": "#nav_button_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#pack_info_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
pack info의 텍스처 이미지

**자세한 설명**
이 바인딩은 'pack info' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: pack info 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "pack info_image": {
    "type": "image",
    "texture": "#pack info_texture",
    "bindings": [
      {
        "binding_name": "#pack_info_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#pack_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
pack의 텍스처 이미지

**자세한 설명**
이 바인딩은 'pack' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: pack 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "pack_image": {
    "type": "image",
    "texture": "#pack_texture",
    "bindings": [
      {
        "binding_name": "#pack_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
win10 trial conversion screen (총 1개 파일)

</details>

<details>
<summary><strong>#panorama_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
panorama의 텍스처 이미지

**자세한 설명**
이 바인딩은 'panorama' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: panorama 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "panorama_image": {
    "type": "image",
    "texture": "#panorama_texture",
    "bindings": [
      {
        "binding_name": "#panorama_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
panorama screen (총 1개 파일)

</details>

<details>
<summary><strong>#pattern_cell_background_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
pattern cell background의 텍스처 이미지

**자세한 설명**
이 바인딩은 'pattern cell background' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: pattern cell background 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "pattern cell background_image": {
    "type": "image",
    "texture": "#pattern cell background_texture",
    "bindings": [
      {
        "binding_name": "#pattern_cell_background_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
loom screen (총 1개 파일)

</details>

<details>
<summary><strong>#permission_level_dropdown_icon_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
permission level dropdown icon의 텍스처 이미지

**자세한 설명**
이 바인딩은 'permission level dropdown icon' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: permission level dropdown icon 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "permission level dropdown icon_image": {
    "type": "image",
    "texture": "#permission level dropdown icon_texture",
    "bindings": [
      {
        "binding_name": "#permission_level_dropdown_icon_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#player_permission_level_icon_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
player permission level icon의 텍스처 이미지

**자세한 설명**
이 바인딩은 'player permission level icon' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: player permission level icon 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "player permission level icon_image": {
    "type": "image",
    "texture": "#player permission level icon_texture",
    "bindings": [
      {
        "binding_name": "#player_permission_level_icon_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pause screen, permissions screen (총 2개 파일)

</details>

<details>
<summary><strong>#promo_key_art_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
promo key art의 텍스처 이미지

**자세한 설명**
이 바인딩은 'promo key art' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: promo key art 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "promo key art_image": {
    "type": "image",
    "texture": "#promo key art_texture",
    "bindings": [
      {
        "binding_name": "#promo_key_art_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#promo_persona_thumbnail_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
promo persona thumbnail의 텍스처 이미지

**자세한 설명**
이 바인딩은 'promo persona thumbnail' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: promo persona thumbnail 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "promo persona thumbnail_image": {
    "type": "image",
    "texture": "#promo persona thumbnail_texture",
    "bindings": [
      {
        "binding_name": "#promo_persona_thumbnail_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#promo_screenshot_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
promo screenshot의 텍스처 이미지

**자세한 설명**
이 바인딩은 'promo screenshot' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: promo screenshot 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "promo screenshot_image": {
    "type": "image",
    "texture": "#promo screenshot_texture",
    "bindings": [
      {
        "binding_name": "#promo_screenshot_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#prompt_icon_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
prompt icon의 텍스처 이미지

**자세한 설명**
이 바인딩은 'prompt icon' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: prompt icon 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "prompt icon_image": {
    "type": "image",
    "texture": "#prompt icon_texture",
    "bindings": [
      {
        "binding_name": "#prompt_icon_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#qr_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
qr의 텍스처 이미지

**자세한 설명**
이 바인딩은 'qr' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: qr 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "qr_image": {
    "type": "image",
    "texture": "#qr_texture",
    "bindings": [
      {
        "binding_name": "#qr_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
gathering info screen (총 1개 파일)

</details>

<details>
<summary><strong>#rarity_bar_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
rarity bar의 텍스처 이미지

**자세한 설명**
이 바인딩은 'rarity bar' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: rarity bar 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "rarity bar_image": {
    "type": "image",
    "texture": "#rarity bar_texture",
    "bindings": [
      {
        "binding_name": "#rarity_bar_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona common, store promo timeline screen (총 2개 파일)

</details>

<details>
<summary><strong>#realms_plus_skin_pack_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
realms plus skin pack의 텍스처 이미지

**자세한 설명**
이 바인딩은 'realms plus skin pack' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: realms plus skin pack 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "realms plus skin pack_image": {
    "type": "image",
    "texture": "#realms plus skin pack_texture",
    "bindings": [
      {
        "binding_name": "#realms_plus_skin_pack_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona popups (총 1개 파일)

</details>

<details>
<summary><strong>#redstone_arrow_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
redstone arrow의 텍스처 이미지

**자세한 설명**
이 바인딩은 'redstone arrow' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: redstone arrow 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "redstone arrow_image": {
    "type": "image",
    "texture": "#redstone arrow_texture",
    "bindings": [
      {
        "binding_name": "#redstone_arrow_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#screenshot_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
screenshot의 텍스처 이미지

**자세한 설명**
이 바인딩은 'screenshot' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: screenshot 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "screenshot_image": {
    "type": "image",
    "texture": "#screenshot_texture",
    "bindings": [
      {
        "binding_name": "#screenshot_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
custom templates screen, pdp screenshots section, play screen
외 1개 (총 4개 파일)

</details>

<details>
<summary><strong>#stone_cell_background_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
stone cell background의 텍스처 이미지

**자세한 설명**
이 바인딩은 'stone cell background' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: stone cell background 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "stone cell background_image": {
    "type": "image",
    "texture": "#stone cell background_texture",
    "bindings": [
      {
        "binding_name": "#stone_cell_background_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
stonecutter screen (총 1개 파일)

</details>

<details>
<summary><strong>#store_image_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
store image의 텍스처 이미지

**자세한 설명**
이 바인딩은 'store image' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: store image 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "store image_image": {
    "type": "image",
    "texture": "#store image_texture",
    "bindings": [
      {
        "binding_name": "#store_image_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
patch notes screen (총 1개 파일)

</details>

<details>
<summary><strong>#texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
이미지 요소에 표시할 텍스처(이미지) 경로

**자세한 설명**
이 바인딩은 image 요소에 어떤 그림을 표시할지 지정합니다.

텍스처 경로는 리소스 팩의 textures 폴더를 기준으로 합니다.
동적으로 이미지를 변경하고 싶을 때 이 바인딩을 사용합니다.

**실제 사용 예**
예: 아이템 아이콘 표시, 플레이어 스킨 표시, 상태에 따라 다른 아이콘 표시

**코드 예제**
```jsonc
{
  "item_icon": {
    "type": "image",
    "texture": "#item_texture",
    "bindings": [
      {
        "binding_name": "#item_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
book screen, bundle purchase warning screen, choose realm screen
외 60개 (총 63개 파일)

</details>

<details>
<summary><strong>#trade_cell_background_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
trade cell background의 텍스처 이미지

**자세한 설명**
이 바인딩은 'trade cell background' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: trade cell background 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "trade cell background_image": {
    "type": "image",
    "texture": "#trade cell background_texture",
    "bindings": [
      {
        "binding_name": "#trade_cell_background_texture",
        "binding_name_override": "#texture",
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
<summary><strong>#user_rating_star_texture</strong> - string (텍스처 경로)</summary>

**데이터 타입:** string (텍스처 경로)

**간단 설명**
user rating star의 텍스처 이미지

**자세한 설명**
이 바인딩은 'user rating star' 이미지 요소에 표시할 텍스처 파일 경로를 제공합니다.

텍스처 경로는 리소스 팩의 textures 폴더 기준입니다.
예: "textures/ui/my_image" 또는 "atlas.items" 같은 아틀라스

**실제 사용 예**
예: user rating star 아이콘/이미지 표시

**코드 예제**
```jsonc
{
  "user rating star_image": {
    "type": "image",
    "texture": "#user rating star_texture",
    "bindings": [
      {
        "binding_name": "#user_rating_star_texture",
        "binding_name_override": "#texture",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen (총 1개 파일)

</details>

