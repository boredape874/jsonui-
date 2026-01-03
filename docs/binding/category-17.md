---
title: 바인딩 목록 - 플레이어 상태 - 경험치
outline: false
search: false
---

# 플레이어 상태 - 경험치 {#binding-category}

총 59개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#3d_export_enabled</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#3d_export_mode_panel_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#3d_export_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#csb_expiration</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#csb_expiration_banner_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/csb common, store common (총 2개 파일)

</details>

<details>
<summary><strong>#csb_expiration_label</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store common, world templates screen (총 2개 파일)

</details>

<details>
<summary><strong>#csb_expiration_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#description_expanded_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#error_expand_label</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
display logged error screen (총 1개 파일)

</details>

<details>
<summary><strong>#exp_bar_and_text_offset_y</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#exp_bar_size_x</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#exp_bar_size_y</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#exp_bar_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#exp_possible_progress</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#exp_progress</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
hud screen, trade 2 screen (총 2개 파일)

</details>

<details>
<summary><strong>#expand_button_focus_id</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expand_option_focus_id</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expanded_pack_dimensions</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, store promo timeline screen (총 2개 파일)

</details>

<details>
<summary><strong>#experimental_toggle_count</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#experimental_toggle_enabled</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#experimental_toggle_text</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#experimental_toggle_value</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_container_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#expiration_duration_dropdown_enabled</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_duration_dropdown_toggle_label</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_duration_radio_day</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_duration_radio_halfDay</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_duration_radio_halfHour</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_duration_radio_hour</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_duration_radio_never</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_duration_radio_quarterDay</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#expiration_duration_radio_week</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#export_disabled_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#export_enabled</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#export_offset_edit_box</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#export_size_edit_box</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#export_visibility</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
portfolio screen (총 1개 파일)

</details>

<details>
<summary><strong>#exporting</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#has_expired</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#invite_link_expiration_time</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#invite_link_expiration_time_TTS</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#is_csb_expiration_banner_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#is_description_expanded</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#is_realm_expired</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#item_realms_expiration_label</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/csb common (총 1개 파일)

</details>

<details>
<summary><strong>#link_expiry</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#link_expiry_TTS</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#realms_world_expiry_notification_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#realmsplus_expired_visible</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#respawn_blocks_explode</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#respawn_blocks_explode_enabled</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#sdl_dropdown_row_expanded</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
marketplace sdl/sdl dropdowns (총 1개 파일)

</details>

<details>
<summary><strong>#show_experimental_toggle</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#skin_pack_expand_pack_focus_change_left</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#structure_3d_export_mode</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#time_until_sale_expires</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#tnt_explodes</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#tnt_explodes_enabled</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
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
<summary><strong>#trial_upsell_expired_updatedDescription</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
플레이어의 경험치 정보

**자세한 설명**
이 바인딩은 플레이어의 경험치 또는 레벨 정보를 제공합니다.

경험치 바인딩에는 여러 종류가 있습니다:
- 현재 경험치량
- 레벨
- 다음 레벨까지 필요한 경험치
- 경험치 바의 진행률 (0.0 ~ 1.0)

HUD에서 경험치 바와 레벨 숫자를 표시하는 데 사용됩니다.

**실제 사용 예**
예: 경험치 바 표시, 레벨 숫자 표시, 대장간에서 마법 부여 비용 표시

**코드 예제**
```jsonc
{
  "exp_bar": {
    "type": "image",
    "texture": "textures/ui/exp_bar",
    "clip_direction": "left",
    "clip_ratio": "#exp_progress",
    "bindings": [
      {
        "binding_name": "#exp_progress",
        "binding_name_override": "#clip_ratio",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
trial upsell screen (총 1개 파일)

</details>

