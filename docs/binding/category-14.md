---
title: 바인딩 목록 - 텍스트 표시
outline: false
---

# 텍스트 표시 {#binding-category}

총 305개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#accept_skin_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
accept skin button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'accept skin button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: accept skin button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "accept skin button_label": {
    "type": "label",
    "text": "#accept skin button_text",
    "bindings": [
      {
        "binding_name": "#accept skin button_text",
        "binding_name_override": "#text",
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
<summary><strong>#accessibility_scaling_option_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
accessibility scaling option tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'accessibility scaling option tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: accessibility scaling option tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "accessibility scaling option tooltip_label": {
    "type": "label",
    "text": "#accessibility scaling option tooltip_text",
    "bindings": [
      {
        "binding_name": "#accessibility scaling option tooltip_text",
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
<summary><strong>#achievement_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
achievement warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'achievement warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: achievement warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "achievement warning_label": {
    "type": "label",
    "text": "#achievement warning_text",
    "bindings": [
      {
        "binding_name": "#achievement warning_text",
        "binding_name_override": "#text",
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
<summary><strong>#action_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
action button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'action button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: action button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "action button_label": {
    "type": "label",
    "text": "#action button_text",
    "bindings": [
      {
        "binding_name": "#action button_text",
        "binding_name_override": "#text",
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
<summary><strong>#action_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
action에 표시할 텍스트

**자세한 설명**
이 바인딩은 'action' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: action의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "action_label": {
    "type": "label",
    "text": "#action_text",
    "bindings": [
      {
        "binding_name": "#action_text",
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
<summary><strong>#active_gathering_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
active gathering에 표시할 텍스트

**자세한 설명**
이 바인딩은 'active gathering' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: active gathering의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "active gathering_label": {
    "type": "label",
    "text": "#active gathering_text",
    "bindings": [
      {
        "binding_name": "#active gathering_text",
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
<summary><strong>#active_service_overrides_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
active service overrides label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'active service overrides label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: active service overrides label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "active service overrides label_label": {
    "type": "label",
    "text": "#active service overrides label_text",
    "bindings": [
      {
        "binding_name": "#active service overrides label_text",
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
<summary><strong>#add_100000_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
add 100000에 표시할 텍스트

**자세한 설명**
이 바인딩은 'add 100000' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: add 100000의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "add 100000_label": {
    "type": "label",
    "text": "#add 100000_text",
    "bindings": [
      {
        "binding_name": "#add 100000_text",
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
<summary><strong>#add_500_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
add 500에 표시할 텍스트

**자세한 설명**
이 바인딩은 'add 500' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: add 500의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "add 500_label": {
    "type": "label",
    "text": "#add 500_text",
    "bindings": [
      {
        "binding_name": "#add 500_text",
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
<summary><strong>#adhoc_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
adhoc inprogess screen (총 1개 파일)

</details>

<details>
<summary><strong>#animating_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
animating에 표시할 텍스트

**자세한 설명**
이 바인딩은 'animating' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: animating의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "animating_label": {
    "type": "label",
    "text": "#animating_text",
    "bindings": [
      {
        "binding_name": "#animating_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
late join pregame screen (총 1개 파일)

</details>

<details>
<summary><strong>#audio_gamepad_helper_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
audio gamepad helper label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'audio gamepad helper label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: audio gamepad helper label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "audio gamepad helper label_label": {
    "type": "label",
    "text": "#audio gamepad helper label_text",
    "bindings": [
      {
        "binding_name": "#audio gamepad helper label_text",
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
<summary><strong>#auto_complete_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
auto complete에 표시할 텍스트

**자세한 설명**
이 바인딩은 'auto complete' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: auto complete의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "auto complete_label": {
    "type": "label",
    "text": "#auto complete_text",
    "bindings": [
      {
        "binding_name": "#auto complete_text",
        "binding_name_override": "#text",
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
<summary><strong>#available_game_subtitle</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#available_game_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#b_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
b button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'b button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: b button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "b button_label": {
    "type": "label",
    "text": "#b button_text",
    "bindings": [
      {
        "binding_name": "#b button_text",
        "binding_name_override": "#text",
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
<summary><strong>#back_button_accessibility_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
back button accessibility에 표시할 텍스트

**자세한 설명**
이 바인딩은 'back button accessibility' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: back button accessibility의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "back button accessibility_label": {
    "type": "label",
    "text": "#back button accessibility_text",
    "bindings": [
      {
        "binding_name": "#back button accessibility_text",
        "binding_name_override": "#text",
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
<summary><strong>#back_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
back button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'back button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: back button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "back button_label": {
    "type": "label",
    "text": "#back button_text",
    "bindings": [
      {
        "binding_name": "#back button_text",
        "binding_name_override": "#text",
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
<summary><strong>#banner_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
banner button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'banner button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: banner button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "banner button_label": {
    "type": "label",
    "text": "#banner button_text",
    "bindings": [
      {
        "binding_name": "#banner button_text",
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
<summary><strong>#banner_description_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
banner description에 표시할 텍스트

**자세한 설명**
이 바인딩은 'banner description' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: banner description의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "banner description_label": {
    "type": "label",
    "text": "#banner description_text",
    "bindings": [
      {
        "binding_name": "#banner description_text",
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
<summary><strong>#banner_title_left_padding_visible</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#banner_title_right_padding_visible</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#banner_title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#base_game_version_debug_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
base game version debug에 표시할 텍스트

**자세한 설명**
이 바인딩은 'base game version debug' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: base game version debug의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "base game version debug_label": {
    "type": "label",
    "text": "#base game version debug_text",
    "bindings": [
      {
        "binding_name": "#base game version debug_text",
        "binding_name_override": "#text",
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
<summary><strong>#binding_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
binding button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'binding button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: binding button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "binding button_label": {
    "type": "label",
    "text": "#binding button_text",
    "bindings": [
      {
        "binding_name": "#binding button_text",
        "binding_name_override": "#text",
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
<summary><strong>#blocked_players_page_index_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
blocked players page index에 표시할 텍스트

**자세한 설명**
이 바인딩은 'blocked players page index' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: blocked players page index의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "blocked players page index_label": {
    "type": "label",
    "text": "#blocked players page index_text",
    "bindings": [
      {
        "binding_name": "#blocked players page index_text",
        "binding_name_override": "#text",
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
<summary><strong>#body_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
body에 표시할 텍스트

**자세한 설명**
이 바인딩은 'body' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: body의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "body_label": {
    "type": "label",
    "text": "#body_text",
    "bindings": [
      {
        "binding_name": "#body_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
authentication modals, gathering info screen (총 2개 파일)

</details>

<details>
<summary><strong>#bundle_purchase_warning_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
bundle purchase warning screen (총 1개 파일)

</details>

<details>
<summary><strong>#button_name_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
button name에 표시할 텍스트

**자세한 설명**
이 바인딩은 'button name' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: button name의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "button name_label": {
    "type": "label",
    "text": "#button name_text",
    "bindings": [
      {
        "binding_name": "#button name_text",
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
<summary><strong>#button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "button_label": {
    "type": "label",
    "text": "#button_text",
    "bindings": [
      {
        "binding_name": "#button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
host options screen, toast screen (총 2개 파일)

</details>

<details>
<summary><strong>#buy_now_banner_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
buy now banner에 표시할 텍스트

**자세한 설명**
이 바인딩은 'buy now banner' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: buy now banner의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "buy now banner_label": {
    "type": "label",
    "text": "#buy now banner_text",
    "bindings": [
      {
        "binding_name": "#buy now banner_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/csb buy now screen, realmsPlus sections/realmsPlus buy now screen (총 2개 파일)

</details>

<details>
<summary><strong>#buy_now_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
buy now button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'buy now button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: buy now button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "buy now button_label": {
    "type": "label",
    "text": "#buy now button_text",
    "bindings": [
      {
        "binding_name": "#buy now button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/csb buy now screen, realmsPlus sections/realmsPlus buy now screen (총 2개 파일)

</details>

<details>
<summary><strong>#call_out_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
call out에 표시할 텍스트

**자세한 설명**
이 바인딩은 'call out' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: call out의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "call out_label": {
    "type": "label",
    "text": "#call out_text",
    "bindings": [
      {
        "binding_name": "#call out_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
coin purchase screen (총 1개 파일)

</details>

<details>
<summary><strong>#cancel_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
cancel button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'cancel button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: cancel button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "cancel button_label": {
    "type": "label",
    "text": "#cancel button_text",
    "bindings": [
      {
        "binding_name": "#cancel button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
progress screen (총 1개 파일)

</details>

<details>
<summary><strong>#chat_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
chat에 표시할 텍스트

**자세한 설명**
이 바인딩은 'chat' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: chat의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "chat_label": {
    "type": "label",
    "text": "#chat_text",
    "bindings": [
      {
        "binding_name": "#chat_text",
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
<summary><strong>#chat_title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#chat_title_visible</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#code_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
code에 표시할 텍스트

**자세한 설명**
이 바인딩은 'code' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: code의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "code_label": {
    "type": "label",
    "text": "#code_text",
    "bindings": [
      {
        "binding_name": "#code_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
progress screen (총 1개 파일)

</details>

<details>
<summary><strong>#coin_bundle_description_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
coin bundle description에 표시할 텍스트

**자세한 설명**
이 바인딩은 'coin bundle description' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: coin bundle description의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "coin bundle description_label": {
    "type": "label",
    "text": "#coin bundle description_text",
    "bindings": [
      {
        "binding_name": "#coin bundle description_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
coin purchase screen (총 1개 파일)

</details>

<details>
<summary><strong>#coin_bundle_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
coin purchase screen (총 1개 파일)

</details>

<details>
<summary><strong>#coins_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
coins에 표시할 텍스트

**자세한 설명**
이 바인딩은 'coins' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: coins의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "coins_label": {
    "type": "label",
    "text": "#coins_text",
    "bindings": [
      {
        "binding_name": "#coins_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
coin purchase screen (총 1개 파일)

</details>

<details>
<summary><strong>#color_picker_info_panel_title_color</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#color_picker_info_panel_title_name</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#color_picker_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#command_output_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
command output에 표시할 텍스트

**자세한 설명**
이 바인딩은 'command output' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: command output의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "command output_label": {
    "type": "label",
    "text": "#command output_text",
    "bindings": [
      {
        "binding_name": "#command output_text",
        "binding_name_override": "#text",
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
<summary><strong>#confirmation_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
confirmation button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'confirmation button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: confirmation button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "confirmation button_label": {
    "type": "label",
    "text": "#confirmation button_text",
    "bindings": [
      {
        "binding_name": "#confirmation button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realms create (총 1개 파일)

</details>

<details>
<summary><strong>#content_log_location_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
content log location에 표시할 텍스트

**자세한 설명**
이 바인딩은 'content log location' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: content log location의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "content log location_label": {
    "type": "label",
    "text": "#content log location_text",
    "bindings": [
      {
        "binding_name": "#content log location_text",
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
<summary><strong>#content_log_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
content log에 표시할 텍스트

**자세한 설명**
이 바인딩은 'content log' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: content log의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "content log_label": {
    "type": "label",
    "text": "#content log_text",
    "bindings": [
      {
        "binding_name": "#content log_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
content log, content log history screen (총 2개 파일)

</details>

<details>
<summary><strong>#coordinates_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
coordinates에 표시할 텍스트

**자세한 설명**
이 바인딩은 'coordinates' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: coordinates의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "coordinates_label": {
    "type": "label",
    "text": "#coordinates_text",
    "bindings": [
      {
        "binding_name": "#coordinates_text",
        "binding_name_override": "#text",
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
<summary><strong>#cost_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
cost에 표시할 텍스트

**자세한 설명**
이 바인딩은 'cost' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: cost의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "cost_label": {
    "type": "label",
    "text": "#cost_text",
    "bindings": [
      {
        "binding_name": "#cost_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
anvil screen, anvil screen pocket (총 2개 파일)

</details>

<details>
<summary><strong>#crafting_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
crafting label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'crafting label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: crafting label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "crafting label_label": {
    "type": "label",
    "text": "#crafting label_text",
    "bindings": [
      {
        "binding_name": "#crafting label_text",
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
<summary><strong>#create_persona_popup_confirm_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
create persona popup confirm에 표시할 텍스트

**자세한 설명**
이 바인딩은 'create persona popup confirm' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: create persona popup confirm의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "create persona popup confirm_label": {
    "type": "label",
    "text": "#create persona popup confirm_text",
    "bindings": [
      {
        "binding_name": "#create persona popup confirm_text",
        "binding_name_override": "#text",
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
<summary><strong>#csb_platform_mismatch_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
csb platform mismatch에 표시할 텍스트

**자세한 설명**
이 바인딩은 'csb platform mismatch' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: csb platform mismatch의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "csb platform mismatch_label": {
    "type": "label",
    "text": "#csb platform mismatch_text",
    "bindings": [
      {
        "binding_name": "#csb platform mismatch_text",
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
<summary><strong>#csb_price_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
csb price에 표시할 텍스트

**자세한 설명**
이 바인딩은 'csb price' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: csb price의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "csb price_label": {
    "type": "label",
    "text": "#csb price_text",
    "bindings": [
      {
        "binding_name": "#csb price_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/csb subscription panel (총 1개 파일)

</details>

<details>
<summary><strong>#custom_input_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
custom input에 표시할 텍스트

**자세한 설명**
이 바인딩은 'custom input' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: custom input의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "custom input_label": {
    "type": "label",
    "text": "#custom input_text",
    "bindings": [
      {
        "binding_name": "#custom input_text",
        "binding_name_override": "#text",
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
<summary><strong>#custom_placeholder_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
custom placeholder에 표시할 텍스트

**자세한 설명**
이 바인딩은 'custom placeholder' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: custom placeholder의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "custom placeholder_label": {
    "type": "label",
    "text": "#custom placeholder_text",
    "bindings": [
      {
        "binding_name": "#custom placeholder_text",
        "binding_name_override": "#text",
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
<summary><strong>#custom_radio_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
custom radio에 표시할 텍스트

**자세한 설명**
이 바인딩은 'custom radio' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: custom radio의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "custom radio_label": {
    "type": "label",
    "text": "#custom radio_text",
    "bindings": [
      {
        "binding_name": "#custom radio_text",
        "binding_name_override": "#text",
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
<summary><strong>#custom_slider_step_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
custom slider step에 표시할 텍스트

**자세한 설명**
이 바인딩은 'custom slider step' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: custom slider step의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "custom slider step_label": {
    "type": "label",
    "text": "#custom slider step_text",
    "bindings": [
      {
        "binding_name": "#custom slider step_text",
        "binding_name_override": "#text",
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
<summary><strong>#custom_slider_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
custom slider에 표시할 텍스트

**자세한 설명**
이 바인딩은 'custom slider' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: custom slider의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "custom slider_label": {
    "type": "label",
    "text": "#custom slider_text",
    "bindings": [
      {
        "binding_name": "#custom slider_text",
        "binding_name_override": "#text",
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
<summary><strong>#custom_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
custom에 표시할 텍스트

**자세한 설명**
이 바인딩은 'custom' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: custom의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "custom_label": {
    "type": "label",
    "text": "#custom_text",
    "bindings": [
      {
        "binding_name": "#custom_text",
        "binding_name_override": "#text",
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
<summary><strong>#custom_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
custom tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'custom tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: custom tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "custom tooltip_label": {
    "type": "label",
    "text": "#custom tooltip_text",
    "bindings": [
      {
        "binding_name": "#custom tooltip_text",
        "binding_name_override": "#text",
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
<summary><strong>#customize_tooltip_option_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
customize tooltip option에 표시할 텍스트

**자세한 설명**
이 바인딩은 'customize tooltip option' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: customize tooltip option의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "customize tooltip option_label": {
    "type": "label",
    "text": "#customize tooltip option_text",
    "bindings": [
      {
        "binding_name": "#customize tooltip option_text",
        "binding_name_override": "#text",
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
<summary><strong>#cycle_left_button_accessibility_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
cycle left button accessibility에 표시할 텍스트

**자세한 설명**
이 바인딩은 'cycle left button accessibility' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: cycle left button accessibility의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "cycle left button accessibility_label": {
    "type": "label",
    "text": "#cycle left button accessibility_text",
    "bindings": [
      {
        "binding_name": "#cycle left button accessibility_text",
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
<summary><strong>#cycle_right_button_accessibility_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
cycle right button accessibility에 표시할 텍스트

**자세한 설명**
이 바인딩은 'cycle right button accessibility' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: cycle right button accessibility의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "cycle right button accessibility_label": {
    "type": "label",
    "text": "#cycle right button accessibility_text",
    "bindings": [
      {
        "binding_name": "#cycle right button accessibility_text",
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
<summary><strong>#date_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
date에 표시할 텍스트

**자세한 설명**
이 바인딩은 'date' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: date의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "date_label": {
    "type": "label",
    "text": "#date_text",
    "bindings": [
      {
        "binding_name": "#date_text",
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
<summary><strong>#death_reason_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
death reason에 표시할 텍스트

**자세한 설명**
이 바인딩은 'death reason' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: death reason의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "death reason_label": {
    "type": "label",
    "text": "#death reason_text",
    "bindings": [
      {
        "binding_name": "#death reason_text",
        "binding_name_override": "#text",
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
<summary><strong>#debug_toggle_ios_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
debug toggle ios에 표시할 텍스트

**자세한 설명**
이 바인딩은 'debug toggle ios' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: debug toggle ios의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "debug toggle ios_label": {
    "type": "label",
    "text": "#debug toggle ios_text",
    "bindings": [
      {
        "binding_name": "#debug toggle ios_text",
        "binding_name_override": "#text",
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
<summary><strong>#dependency_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
dependency label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'dependency label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: dependency label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "dependency label_label": {
    "type": "label",
    "text": "#dependency label_text",
    "bindings": [
      {
        "binding_name": "#dependency label_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
storage management popup (총 1개 파일)

</details>

<details>
<summary><strong>#description_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
description에 표시할 텍스트

**자세한 설명**
이 바인딩은 'description' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: description의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "description_label": {
    "type": "label",
    "text": "#description_text",
    "bindings": [
      {
        "binding_name": "#description_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section, win10 trial conversion screen (총 2개 파일)

</details>

<details>
<summary><strong>#description_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#device_sunsetting_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
device sunsetting에 표시할 텍스트

**자세한 설명**
이 바인딩은 'device sunsetting' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: device sunsetting의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "device sunsetting_label": {
    "type": "label",
    "text": "#device sunsetting_text",
    "bindings": [
      {
        "binding_name": "#device sunsetting_text",
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
<summary><strong>#dialog_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
dialog button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'dialog button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: dialog button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "dialog button_label": {
    "type": "label",
    "text": "#dialog button_text",
    "bindings": [
      {
        "binding_name": "#dialog button_text",
        "binding_name_override": "#text",
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
<summary><strong>#dialog_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
patch notes screen, realms invite link settings screen, settings sections/settings common (총 3개 파일)

</details>

<details>
<summary><strong>#disconnect_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
disconnect에 표시할 텍스트

**자세한 설명**
이 바인딩은 'disconnect' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: disconnect의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "disconnect_label": {
    "type": "label",
    "text": "#disconnect_text",
    "bindings": [
      {
        "binding_name": "#disconnect_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
disconnect screen (총 1개 파일)

</details>

<details>
<summary><strong>#download_info_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
download info에 표시할 텍스트

**자세한 설명**
이 바인딩은 'download info' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: download info의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "download info_label": {
    "type": "label",
    "text": "#download info_text",
    "bindings": [
      {
        "binding_name": "#download info_text",
        "binding_name_override": "#text",
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
<summary><strong>#dropdown_option_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
dropdown option에 표시할 텍스트

**자세한 설명**
이 바인딩은 'dropdown option' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: dropdown option의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "dropdown option_label": {
    "type": "label",
    "text": "#dropdown option_text",
    "bindings": [
      {
        "binding_name": "#dropdown option_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
realms settings screen, server form (총 2개 파일)

</details>

<details>
<summary><strong>#dual_title_left_label</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
file upload screen (총 1개 파일)

</details>

<details>
<summary><strong>#dual_title_right_label</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
file upload screen (총 1개 파일)

</details>

<details>
<summary><strong>#edit_appearance_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
edit appearance에 표시할 텍스트

**자세한 설명**
이 바인딩은 'edit appearance' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: edit appearance의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "edit appearance_label": {
    "type": "label",
    "text": "#edit appearance_text",
    "bindings": [
      {
        "binding_name": "#edit appearance_text",
        "binding_name_override": "#text",
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
<summary><strong>#edu_cloud_storage_body_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
edu cloud storage body label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'edu cloud storage body label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: edu cloud storage body label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "edu cloud storage body label_label": {
    "type": "label",
    "text": "#edu cloud storage body label_text",
    "bindings": [
      {
        "binding_name": "#edu cloud storage body label_text",
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
<summary><strong>#edu_store_purchase_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
edu store purchase button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'edu store purchase button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: edu store purchase button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "edu store purchase button_label": {
    "type": "label",
    "text": "#edu store purchase button_text",
    "bindings": [
      {
        "binding_name": "#edu store purchase button_text",
        "binding_name_override": "#text",
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
<summary><strong>#emote_popup_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#entitlements_refreshing_visible</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#error_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
error에 표시할 텍스트

**자세한 설명**
이 바인딩은 'error' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: error의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "error_label": {
    "type": "label",
    "text": "#error_text",
    "bindings": [
      {
        "binding_name": "#error_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
immersive reader (총 1개 파일)

</details>

<details>
<summary><strong>#faq_price_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
faq price에 표시할 텍스트

**자세한 설명**
이 바인딩은 'faq price' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: faq price의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "faq price_label": {
    "type": "label",
    "text": "#faq price_text",
    "bindings": [
      {
        "binding_name": "#faq price_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/faq section, realmsPlus sections/faq section (총 2개 파일)

</details>

<details>
<summary><strong>#feature_server_message_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
feature server message에 표시할 텍스트

**자세한 설명**
이 바인딩은 'feature server message' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: feature server message의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "feature server message_label": {
    "type": "label",
    "text": "#feature server message_text",
    "bindings": [
      {
        "binding_name": "#feature server message_text",
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
<summary><strong>#feature_toggle_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
feature toggle에 표시할 텍스트

**자세한 설명**
이 바인딩은 'feature toggle' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: feature toggle의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "feature toggle_label": {
    "type": "label",
    "text": "#feature toggle_text",
    "bindings": [
      {
        "binding_name": "#feature toggle_text",
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
<summary><strong>#filter_profanity_option_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
filter profanity option tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'filter profanity option tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: filter profanity option tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "filter profanity option tooltip_label": {
    "type": "label",
    "text": "#filter profanity option tooltip_text",
    "bindings": [
      {
        "binding_name": "#filter profanity option tooltip_text",
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
<summary><strong>#form_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
form button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'form button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: form button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "form button_label": {
    "type": "label",
    "text": "#form button_text",
    "bindings": [
      {
        "binding_name": "#form button_text",
        "binding_name_override": "#text",
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
<summary><strong>#form_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
form에 표시할 텍스트

**자세한 설명**
이 바인딩은 'form' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: form의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "form_label": {
    "type": "label",
    "text": "#form_text",
    "bindings": [
      {
        "binding_name": "#form_text",
        "binding_name_override": "#text",
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
<summary><strong>#frame_pacing_option_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
frame pacing option tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'frame pacing option tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: frame pacing option tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "frame pacing option tooltip_label": {
    "type": "label",
    "text": "#frame pacing option tooltip_text",
    "bindings": [
      {
        "binding_name": "#frame pacing option tooltip_text",
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
<summary><strong>#free_trial_header_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
free trial header에 표시할 텍스트

**자세한 설명**
이 바인딩은 'free trial header' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: free trial header의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "free trial header_label": {
    "type": "label",
    "text": "#free trial header_text",
    "bindings": [
      {
        "binding_name": "#free trial header_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/landing section, realmsPlus sections/landing section (총 2개 파일)

</details>

<details>
<summary><strong>#gamepad_postfix_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
gamepad postfix에 표시할 텍스트

**자세한 설명**
이 바인딩은 'gamepad postfix' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: gamepad postfix의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "gamepad postfix_label": {
    "type": "label",
    "text": "#gamepad postfix_text",
    "bindings": [
      {
        "binding_name": "#gamepad postfix_text",
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
<summary><strong>#gathering_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
gathering button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'gathering button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: gathering button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "gathering button_label": {
    "type": "label",
    "text": "#gathering button_text",
    "bindings": [
      {
        "binding_name": "#gathering button_text",
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
<summary><strong>#gathering_countdown_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
gathering countdown에 표시할 텍스트

**자세한 설명**
이 바인딩은 'gathering countdown' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: gathering countdown의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "gathering countdown_label": {
    "type": "label",
    "text": "#gathering countdown_text",
    "bindings": [
      {
        "binding_name": "#gathering countdown_text",
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
<summary><strong>#general_multiplayer_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
general multiplayer warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'general multiplayer warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: general multiplayer warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "general multiplayer warning_label": {
    "type": "label",
    "text": "#general multiplayer warning_text",
    "bindings": [
      {
        "binding_name": "#general multiplayer warning_text",
        "binding_name_override": "#text",
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
<summary><strong>#general_no_multiplayer_grid_message_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
general no multiplayer grid message에 표시할 텍스트

**자세한 설명**
이 바인딩은 'general no multiplayer grid message' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: general no multiplayer grid message의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "general no multiplayer grid message_label": {
    "type": "label",
    "text": "#general no multiplayer grid message_text",
    "bindings": [
      {
        "binding_name": "#general no multiplayer grid message_text",
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
<summary><strong>#generate_random_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
generate random button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'generate random button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: generate random button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "generate random button_label": {
    "type": "label",
    "text": "#generate random button_text",
    "bindings": [
      {
        "binding_name": "#generate random button_text",
        "binding_name_override": "#text",
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
<summary><strong>#get_open_main_menu_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
get open main menu에 표시할 텍스트

**자세한 설명**
이 바인딩은 'get open main menu' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: get open main menu의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "get open main menu_label": {
    "type": "label",
    "text": "#get open main menu_text",
    "bindings": [
      {
        "binding_name": "#get open main menu_text",
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
<summary><strong>#graphics_mode_option_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
graphics mode option tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'graphics mode option tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: graphics mode option tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "graphics mode option tooltip_label": {
    "type": "label",
    "text": "#graphics mode option tooltip_text",
    "bindings": [
      {
        "binding_name": "#graphics mode option tooltip_text",
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
<summary><strong>#gui_scale_disabled_option_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
gui scale disabled option tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'gui scale disabled option tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: gui scale disabled option tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "gui scale disabled option tooltip_label": {
    "type": "label",
    "text": "#gui scale disabled option tooltip_text",
    "bindings": [
      {
        "binding_name": "#gui scale disabled option tooltip_text",
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
<summary><strong>#hardcore_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
hardcore warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'hardcore warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: hardcore warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "hardcore warning_label": {
    "type": "label",
    "text": "#hardcore warning_text",
    "bindings": [
      {
        "binding_name": "#hardcore warning_text",
        "binding_name_override": "#text",
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
<summary><strong>#has_feedback_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
has feedback에 표시할 텍스트

**자세한 설명**
이 바인딩은 'has feedback' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: has feedback의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "has feedback_label": {
    "type": "label",
    "text": "#has feedback_text",
    "bindings": [
      {
        "binding_name": "#has feedback_text",
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
<summary><strong>#has_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#has_title_icon</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#header_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
header에 표시할 텍스트

**자세한 설명**
이 바인딩은 'header' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: header의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "header_label": {
    "type": "label",
    "text": "#header_text",
    "bindings": [
      {
        "binding_name": "#header_text",
        "binding_name_override": "#text",
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
<summary><strong>#hover_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
hover에 표시할 텍스트

**자세한 설명**
이 바인딩은 'hover' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: hover의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "hover_label": {
    "type": "label",
    "text": "#hover_text",
    "bindings": [
      {
        "binding_name": "#hover_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
beacon screen, crafter screen pocket, enchanting screen
외 8개 (총 11개 파일)

</details>

<details>
<summary><strong>#how_to_play_gamepad_helper_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
how to play gamepad helper label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'how to play gamepad helper label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: how to play gamepad helper label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "how to play gamepad helper label_label": {
    "type": "label",
    "text": "#how to play gamepad helper label_text",
    "bindings": [
      {
        "binding_name": "#how to play gamepad helper label_text",
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
<summary><strong>#hud_subtitle_text_string</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#hud_title_text_string</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#hyperlink_prompt_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
hyperlink prompt에 표시할 텍스트

**자세한 설명**
이 바인딩은 'hyperlink prompt' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: hyperlink prompt의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "hyperlink prompt_label": {
    "type": "label",
    "text": "#hyperlink prompt_text",
    "bindings": [
      {
        "binding_name": "#hyperlink prompt_text",
        "binding_name_override": "#text",
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
<summary><strong>#icon_overlay_image_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
icon overlay image에 표시할 텍스트

**자세한 설명**
이 바인딩은 'icon overlay image' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: icon overlay image의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "icon overlay image_label": {
    "type": "label",
    "text": "#icon overlay image_text",
    "bindings": [
      {
        "binding_name": "#icon overlay image_text",
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
<summary><strong>#improved_input_response_option_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
improved input response option tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'improved input response option tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: improved input response option tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "improved input response option tooltip_label": {
    "type": "label",
    "text": "#improved input response option tooltip_text",
    "bindings": [
      {
        "binding_name": "#improved input response option tooltip_text",
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
<summary><strong>#in_progress_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
simple inprogress screen (총 1개 파일)

</details>

<details>
<summary><strong>#info_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
info button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'info button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: info button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "info button_label": {
    "type": "label",
    "text": "#info button_text",
    "bindings": [
      {
        "binding_name": "#info button_text",
        "binding_name_override": "#text",
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
<summary><strong>#interact_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
interact button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'interact button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: interact button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "interact button_label": {
    "type": "label",
    "text": "#interact button_text",
    "bindings": [
      {
        "binding_name": "#interact button_text",
        "binding_name_override": "#text",
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
<summary><strong>#interaction_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
interaction button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'interaction button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: interaction button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "interaction button_label": {
    "type": "label",
    "text": "#interaction button_text",
    "bindings": [
      {
        "binding_name": "#interaction button_text",
        "binding_name_override": "#text",
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
<summary><strong>#internet_connection_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
internet connection에 표시할 텍스트

**자세한 설명**
이 바인딩은 'internet connection' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: internet connection의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "internet connection_label": {
    "type": "label",
    "text": "#internet connection_text",
    "bindings": [
      {
        "binding_name": "#internet connection_text",
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
<summary><strong>#invited_friends_page_index_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
invited friends page index에 표시할 텍스트

**자세한 설명**
이 바인딩은 'invited friends page index' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: invited friends page index의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "invited friends page index_label": {
    "type": "label",
    "text": "#invited friends page index_text",
    "bindings": [
      {
        "binding_name": "#invited friends page index_text",
        "binding_name_override": "#text",
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
<summary><strong>#ip_address_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
ip address에 표시할 텍스트

**자세한 설명**
이 바인딩은 'ip address' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: ip address의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "ip address_label": {
    "type": "label",
    "text": "#ip address_text",
    "bindings": [
      {
        "binding_name": "#ip address_text",
        "binding_name_override": "#text",
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
<summary><strong>#item_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
item에 표시할 텍스트

**자세한 설명**
이 바인딩은 'item' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: item의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "item_label": {
    "type": "label",
    "text": "#item_text",
    "bindings": [
      {
        "binding_name": "#item_text",
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
<summary><strong>#item_title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#joint_type_toggle_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
joint type toggle에 표시할 텍스트

**자세한 설명**
이 바인딩은 'joint type toggle' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: joint type toggle의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "joint type toggle_label": {
    "type": "label",
    "text": "#joint type toggle_text",
    "bindings": [
      {
        "binding_name": "#joint type toggle_text",
        "binding_name_override": "#text",
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
<summary><strong>#jukebox_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
jukebox에 표시할 텍스트

**자세한 설명**
이 바인딩은 'jukebox' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: jukebox의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "jukebox_label": {
    "type": "label",
    "text": "#jukebox_text",
    "bindings": [
      {
        "binding_name": "#jukebox_text",
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
<summary><strong>#keyboard_key_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
keyboard key에 표시할 텍스트

**자세한 설명**
이 바인딩은 'keyboard key' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: keyboard key의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "keyboard key_label": {
    "type": "label",
    "text": "#keyboard key_text",
    "bindings": [
      {
        "binding_name": "#keyboard key_text",
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
<summary><strong>#label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "label_label": {
    "type": "label",
    "text": "#label_text",
    "bindings": [
      {
        "binding_name": "#label_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
file upload screen, play screen (총 2개 파일)

</details>

<details>
<summary><strong>#landing_info_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
landing info에 표시할 텍스트

**자세한 설명**
이 바인딩은 'landing info' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: landing info의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "landing info_label": {
    "type": "label",
    "text": "#landing info_text",
    "bindings": [
      {
        "binding_name": "#landing info_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/landing section (총 1개 파일)

</details>

<details>
<summary><strong>#last_update_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
last update에 표시할 텍스트

**자세한 설명**
이 바인딩은 'last update' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: last update의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "last update_label": {
    "type": "label",
    "text": "#last update_text",
    "bindings": [
      {
        "binding_name": "#last update_text",
        "binding_name_override": "#text",
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
<summary><strong>#left_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
left button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'left button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: left button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "left button_label": {
    "type": "label",
    "text": "#left button_text",
    "bindings": [
      {
        "binding_name": "#left button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
authentication modals, settings sections/general section (총 2개 파일)

</details>

<details>
<summary><strong>#limb_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#limb_title_enabled</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#loading_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
loading에 표시할 텍스트

**자세한 설명**
이 바인딩은 'loading' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: loading의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "loading_label": {
    "type": "label",
    "text": "#loading_text",
    "bindings": [
      {
        "binding_name": "#loading_text",
        "binding_name_override": "#text",
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
<summary><strong>#local_worlds_title_with_count</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#lock_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
lock label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'lock label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: lock label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "lock label_label": {
    "type": "label",
    "text": "#lock label_text",
    "bindings": [
      {
        "binding_name": "#lock label_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
chalkboard screen (총 1개 파일)

</details>

<details>
<summary><strong>#main_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
main button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'main button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: main button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "main button_label": {
    "type": "label",
    "text": "#main button_text",
    "bindings": [
      {
        "binding_name": "#main button_text",
        "binding_name_override": "#text",
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
<summary><strong>#manage_feed_page_index_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
manage feed page index에 표시할 텍스트

**자세한 설명**
이 바인딩은 'manage feed page index' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: manage feed page index의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "manage feed page index_label": {
    "type": "label",
    "text": "#manage feed page index_text",
    "bindings": [
      {
        "binding_name": "#manage feed page index_text",
        "binding_name_override": "#text",
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
<summary><strong>#max_framerate_option_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
max framerate option tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'max framerate option tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: max framerate option tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "max framerate option tooltip_label": {
    "type": "label",
    "text": "#max framerate option tooltip_text",
    "bindings": [
      {
        "binding_name": "#max framerate option tooltip_text",
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
<summary><strong>#maximized_action_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
maximized action에 표시할 텍스트

**자세한 설명**
이 바인딩은 'maximized action' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: maximized action의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "maximized action_label": {
    "type": "label",
    "text": "#maximized action_text",
    "bindings": [
      {
        "binding_name": "#maximized action_text",
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
<summary><strong>#maximized_placeholder_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
maximized placeholder에 표시할 텍스트

**자세한 설명**
이 바인딩은 'maximized placeholder' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: maximized placeholder의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "maximized placeholder_label": {
    "type": "label",
    "text": "#maximized placeholder_text",
    "bindings": [
      {
        "binding_name": "#maximized placeholder_text",
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
<summary><strong>#member_loading_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
member loading에 표시할 텍스트

**자세한 설명**
이 바인딩은 'member loading' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: member loading의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "member loading_label": {
    "type": "label",
    "text": "#member loading_text",
    "bindings": [
      {
        "binding_name": "#member loading_text",
        "binding_name_override": "#text",
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
<summary><strong>#members_page_index_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
members page index에 표시할 텍스트

**자세한 설명**
이 바인딩은 'members page index' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: members page index의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "members page index_label": {
    "type": "label",
    "text": "#members page index_text",
    "bindings": [
      {
        "binding_name": "#members page index_text",
        "binding_name_override": "#text",
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
<summary><strong>#message_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
message에 표시할 텍스트

**자세한 설명**
이 바인딩은 'message' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: message의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "message_label": {
    "type": "label",
    "text": "#message_text",
    "bindings": [
      {
        "binding_name": "#message_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
file upload screen (총 1개 파일)

</details>

<details>
<summary><strong>#modal_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
modal label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'modal label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: modal label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "modal label_label": {
    "type": "label",
    "text": "#modal label_text",
    "bindings": [
      {
        "binding_name": "#modal label_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
non xbl user management screen, popup dialog (총 2개 파일)

</details>

<details>
<summary><strong>#modal_left_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
modal left button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'modal left button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: modal left button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "modal left button_label": {
    "type": "label",
    "text": "#modal left button_text",
    "bindings": [
      {
        "binding_name": "#modal left button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
non xbl user management screen, popup dialog (총 2개 파일)

</details>

<details>
<summary><strong>#modal_middle_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
modal middle button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'modal middle button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: modal middle button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "modal middle button_label": {
    "type": "label",
    "text": "#modal middle button_text",
    "bindings": [
      {
        "binding_name": "#modal middle button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
non xbl user management screen, popup dialog (총 2개 파일)

</details>

<details>
<summary><strong>#modal_rightcancel_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
modal rightcancel button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'modal rightcancel button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: modal rightcancel button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "modal rightcancel button_label": {
    "type": "label",
    "text": "#modal rightcancel button_text",
    "bindings": [
      {
        "binding_name": "#modal rightcancel button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
non xbl user management screen, popup dialog (총 2개 파일)

</details>

<details>
<summary><strong>#modal_title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
non xbl user management screen, popup dialog (총 2개 파일)

</details>

<details>
<summary><strong>#modal_title_tts</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
popup dialog (총 1개 파일)

</details>

<details>
<summary><strong>#more_hidden_items_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
more hidden items에 표시할 텍스트

**자세한 설명**
이 바인딩은 'more hidden items' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: more hidden items의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "more hidden items_label": {
    "type": "label",
    "text": "#more hidden items_text",
    "bindings": [
      {
        "binding_name": "#more hidden items_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
gameplay common (총 1개 파일)

</details>

<details>
<summary><strong>#multiplayer_blocked_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
multiplayer blocked에 표시할 텍스트

**자세한 설명**
이 바인딩은 'multiplayer blocked' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: multiplayer blocked의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "multiplayer blocked_label": {
    "type": "label",
    "text": "#multiplayer blocked_text",
    "bindings": [
      {
        "binding_name": "#multiplayer blocked_text",
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
<summary><strong>#name_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
name에 표시할 텍스트

**자세한 설명**
이 바인딩은 'name' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: name의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "name_label": {
    "type": "label",
    "text": "#name_text",
    "bindings": [
      {
        "binding_name": "#name_text",
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
<summary><strong>#news_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
news에 표시할 텍스트

**자세한 설명**
이 바인딩은 'news' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: news의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "news_label": {
    "type": "label",
    "text": "#news_text",
    "bindings": [
      {
        "binding_name": "#news_text",
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
<summary><strong>#next_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
next button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'next button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: next button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "next button_label": {
    "type": "label",
    "text": "#next button_text",
    "bindings": [
      {
        "binding_name": "#next button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
day one experience screen (총 1개 파일)

</details>

<details>
<summary><strong>#no_cross_platform_friends_grid_message_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
no cross platform friends grid message에 표시할 텍스트

**자세한 설명**
이 바인딩은 'no cross platform friends grid message' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: no cross platform friends grid message의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "no cross platform friends grid message_label": {
    "type": "label",
    "text": "#no cross platform friends grid message_text",
    "bindings": [
      {
        "binding_name": "#no cross platform friends grid message_text",
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
<summary><strong>#no_friends_grid_message_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
no friends grid message에 표시할 텍스트

**자세한 설명**
이 바인딩은 'no friends grid message' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: no friends grid message의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "no friends grid message_label": {
    "type": "label",
    "text": "#no friends grid message_text",
    "bindings": [
      {
        "binding_name": "#no friends grid message_text",
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
<summary><strong>#no_xbox_live_friends_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
no xbox live friends에 표시할 텍스트

**자세한 설명**
이 바인딩은 'no xbox live friends' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: no xbox live friends의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "no xbox live friends_label": {
    "type": "label",
    "text": "#no xbox live friends_text",
    "bindings": [
      {
        "binding_name": "#no xbox live friends_text",
        "binding_name_override": "#text",
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
<summary><strong>#none_option_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
none option에 표시할 텍스트

**자세한 설명**
이 바인딩은 'none option' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: none option의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "none option_label": {
    "type": "label",
    "text": "#none option_text",
    "bindings": [
      {
        "binding_name": "#none option_text",
        "binding_name_override": "#text",
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
<summary><strong>#notification_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
notification에 표시할 텍스트

**자세한 설명**
이 바인딩은 'notification' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: notification의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "notification_label": {
    "type": "label",
    "text": "#notification_text",
    "bindings": [
      {
        "binding_name": "#notification_text",
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
<summary><strong>#number_of_days_played_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
number of days played에 표시할 텍스트

**자세한 설명**
이 바인딩은 'number of days played' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: number of days played의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "number of days played_label": {
    "type": "label",
    "text": "#number of days played_text",
    "bindings": [
      {
        "binding_name": "#number of days played_text",
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
<summary><strong>#offer_minecoin_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
offer minecoin에 표시할 텍스트

**자세한 설명**
이 바인딩은 'offer minecoin' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: offer minecoin의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "offer minecoin_label": {
    "type": "label",
    "text": "#offer minecoin_text",
    "bindings": [
      {
        "binding_name": "#offer minecoin_text",
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
<summary><strong>#offer_prompt_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
offer prompt에 표시할 텍스트

**자세한 설명**
이 바인딩은 'offer prompt' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: offer prompt의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "offer prompt_label": {
    "type": "label",
    "text": "#offer prompt_text",
    "bindings": [
      {
        "binding_name": "#offer prompt_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen, store common (총 2개 파일)

</details>

<details>
<summary><strong>#offer_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
bundle purchase warning screen (총 1개 파일)

</details>

<details>
<summary><strong>#ownership_verification_state_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
ownership verification state에 표시할 텍스트

**자세한 설명**
이 바인딩은 'ownership verification state' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: ownership verification state의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "ownership verification state_label": {
    "type": "label",
    "text": "#ownership verification state_text",
    "bindings": [
      {
        "binding_name": "#ownership verification state_text",
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
<summary><strong>#pack_additional_skin_count_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
pack additional skin count에 표시할 텍스트

**자세한 설명**
이 바인딩은 'pack additional skin count' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: pack additional skin count의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "pack additional skin count_label": {
    "type": "label",
    "text": "#pack additional skin count_text",
    "bindings": [
      {
        "binding_name": "#pack additional skin count_text",
        "binding_name_override": "#text",
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
<summary><strong>#pack_header_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
manifest validation screen (총 1개 파일)

</details>

<details>
<summary><strong>#pack_settings_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pack settings screen (총 1개 파일)

</details>

<details>
<summary><strong>#pack_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#page_index_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
page index에 표시할 텍스트

**자세한 설명**
이 바인딩은 'page index' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: page index의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "page index_label": {
    "type": "label",
    "text": "#page index_text",
    "bindings": [
      {
        "binding_name": "#page index_text",
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
<summary><strong>#page_number_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
page number에 표시할 텍스트

**자세한 설명**
이 바인딩은 'page number' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: page number의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "page number_label": {
    "type": "label",
    "text": "#page number_text",
    "bindings": [
      {
        "binding_name": "#page number_text",
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
<summary><strong>#panel_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#patch_link_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
patch link button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'patch link button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: patch link button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "patch link button_label": {
    "type": "label",
    "text": "#patch link button_text",
    "bindings": [
      {
        "binding_name": "#patch link button_text",
        "binding_name_override": "#text",
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
<summary><strong>#place_holder_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
place holder에 표시할 텍스트

**자세한 설명**
이 바인딩은 'place holder' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: place holder의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "place holder_label": {
    "type": "label",
    "text": "#place holder_text",
    "bindings": [
      {
        "binding_name": "#place holder_text",
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
<summary><strong>#placeholder_dialog_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
placeholder dialog에 표시할 텍스트

**자세한 설명**
이 바인딩은 'placeholder dialog' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: placeholder dialog의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "placeholder dialog_label": {
    "type": "label",
    "text": "#placeholder dialog_text",
    "bindings": [
      {
        "binding_name": "#placeholder dialog_text",
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
<summary><strong>#platform_multiplayer_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
platform multiplayer warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'platform multiplayer warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: platform multiplayer warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "platform multiplayer warning_label": {
    "type": "label",
    "text": "#platform multiplayer warning_text",
    "bindings": [
      {
        "binding_name": "#platform multiplayer warning_text",
        "binding_name_override": "#text",
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
<summary><strong>#platform_signin_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
platform signin에 표시할 텍스트

**자세한 설명**
이 바인딩은 'platform signin' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: platform signin의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "platform signin_label": {
    "type": "label",
    "text": "#platform signin_text",
    "bindings": [
      {
        "binding_name": "#platform signin_text",
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
<summary><strong>#platform_terms_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
platform terms에 표시할 텍스트

**자세한 설명**
이 바인딩은 'platform terms' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: platform terms의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "platform terms_label": {
    "type": "label",
    "text": "#platform terms_text",
    "bindings": [
      {
        "binding_name": "#platform terms_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/csb buy now screen, realmsPlus sections/realmsPlus buy now screen (총 2개 파일)

</details>

<details>
<summary><strong>#player_list_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
scoreboards (총 1개 파일)

</details>

<details>
<summary><strong>#player_position_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
player position에 표시할 텍스트

**자세한 설명**
이 바인딩은 'player position' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: player position의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "player position_label": {
    "type": "label",
    "text": "#player position_text",
    "bindings": [
      {
        "binding_name": "#player position_text",
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
<summary><strong>#players_list_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#popup_message_student_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
popup message student에 표시할 텍스트

**자세한 설명**
이 바인딩은 'popup message student' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: popup message student의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "popup message student_label": {
    "type": "label",
    "text": "#popup message student_text",
    "bindings": [
      {
        "binding_name": "#popup message student_text",
        "binding_name_override": "#text",
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
<summary><strong>#popup_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
popup에 표시할 텍스트

**자세한 설명**
이 바인딩은 'popup' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: popup의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "popup_label": {
    "type": "label",
    "text": "#popup_text",
    "bindings": [
      {
        "binding_name": "#popup_text",
        "binding_name_override": "#text",
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
<summary><strong>#popup_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#preview_app1_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
preview app1 button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'preview app1 button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: preview app1 button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "preview app1 button_label": {
    "type": "label",
    "text": "#preview app1 button_text",
    "bindings": [
      {
        "binding_name": "#preview app1 button_text",
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
<summary><strong>#preview_app2_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
preview app2 button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'preview app2 button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: preview app2 button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "preview app2 button_label": {
    "type": "label",
    "text": "#preview app2 button_text",
    "bindings": [
      {
        "binding_name": "#preview app2 button_text",
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
<summary><strong>#previous_block_type_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
previous block type에 표시할 텍스트

**자세한 설명**
이 바인딩은 'previous block type' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: previous block type의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "previous block type_label": {
    "type": "label",
    "text": "#previous block type_text",
    "bindings": [
      {
        "binding_name": "#previous block type_text",
        "binding_name_override": "#text",
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
<summary><strong>#previous_condition_mode_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
previous condition mode에 표시할 텍스트

**자세한 설명**
이 바인딩은 'previous condition mode' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: previous condition mode의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "previous condition mode_label": {
    "type": "label",
    "text": "#previous condition mode_text",
    "bindings": [
      {
        "binding_name": "#previous condition mode_text",
        "binding_name_override": "#text",
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
<summary><strong>#previous_redstone_mode_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
previous redstone mode에 표시할 텍스트

**자세한 설명**
이 바인딩은 'previous redstone mode' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: previous redstone mode의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "previous redstone mode_label": {
    "type": "label",
    "text": "#previous redstone mode_text",
    "bindings": [
      {
        "binding_name": "#previous redstone mode_text",
        "binding_name_override": "#text",
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
<summary><strong>#price_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
price에 표시할 텍스트

**자세한 설명**
이 바인딩은 'price' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: price의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "price_label": {
    "type": "label",
    "text": "#price_text",
    "bindings": [
      {
        "binding_name": "#price_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
coin purchase screen (총 1개 파일)

</details>

<details>
<summary><strong>#progress_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
progress에 표시할 텍스트

**자세한 설명**
이 바인딩은 'progress' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: progress의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "progress_label": {
    "type": "label",
    "text": "#progress_text",
    "bindings": [
      {
        "binding_name": "#progress_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
progress screen (총 1개 파일)

</details>

<details>
<summary><strong>#progressive_select_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
progressive select에 표시할 텍스트

**자세한 설명**
이 바인딩은 'progressive select' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: progressive select의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "progressive select_label": {
    "type": "label",
    "text": "#progressive select_text",
    "bindings": [
      {
        "binding_name": "#progressive select_text",
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
<summary><strong>#promo_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
promo button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'promo button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: promo button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "promo button_label": {
    "type": "label",
    "text": "#promo button_text",
    "bindings": [
      {
        "binding_name": "#promo button_text",
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
<summary><strong>#promo_item_action_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
promo item action button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'promo item action button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: promo item action button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "promo item action button_label": {
    "type": "label",
    "text": "#promo item action button_text",
    "bindings": [
      {
        "binding_name": "#promo item action button_text",
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
<summary><strong>#promo_item_creator_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
promo item creator에 표시할 텍스트

**자세한 설명**
이 바인딩은 'promo item creator' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: promo item creator의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "promo item creator_label": {
    "type": "label",
    "text": "#promo item creator_text",
    "bindings": [
      {
        "binding_name": "#promo item creator_text",
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
<summary><strong>#promo_item_timer_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
promo item timer에 표시할 텍스트

**자세한 설명**
이 바인딩은 'promo item timer' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: promo item timer의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "promo item timer_label": {
    "type": "label",
    "text": "#promo item timer_text",
    "bindings": [
      {
        "binding_name": "#promo item timer_text",
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
<summary><strong>#promo_item_title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#promotion_day_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
promotion day에 표시할 텍스트

**자세한 설명**
이 바인딩은 'promotion day' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: promotion day의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "promotion day_label": {
    "type": "label",
    "text": "#promotion day_text",
    "bindings": [
      {
        "binding_name": "#promotion day_text",
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
<summary><strong>#purchase_with_coins_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
purchase with coins button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'purchase with coins button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: purchase with coins button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "purchase with coins button_label": {
    "type": "label",
    "text": "#purchase with coins button_text",
    "bindings": [
      {
        "binding_name": "#purchase with coins button_text",
        "binding_name_override": "#text",
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
<summary><strong>#purchase_with_currency_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
purchase with currency button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'purchase with currency button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: purchase with currency button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "purchase with currency button_label": {
    "type": "label",
    "text": "#purchase with currency button_text",
    "bindings": [
      {
        "binding_name": "#purchase with currency button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen, persona SDL (총 2개 파일)

</details>

<details>
<summary><strong>#qr_body_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
qr body에 표시할 텍스트

**자세한 설명**
이 바인딩은 'qr body' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: qr body의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "qr body_label": {
    "type": "label",
    "text": "#qr body_text",
    "bindings": [
      {
        "binding_name": "#qr body_text",
        "binding_name_override": "#text",
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
<summary><strong>#qr_title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#rating_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
rating button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'rating button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: rating button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "rating button_label": {
    "type": "label",
    "text": "#rating button_text",
    "bindings": [
      {
        "binding_name": "#rating button_text",
        "binding_name_override": "#text",
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
<summary><strong>#rating_footer_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
rating footer에 표시할 텍스트

**자세한 설명**
이 바인딩은 'rating footer' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: rating footer의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "rating footer_label": {
    "type": "label",
    "text": "#rating footer_text",
    "bindings": [
      {
        "binding_name": "#rating footer_text",
        "binding_name_override": "#text",
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
<summary><strong>#rating_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
rating에 표시할 텍스트

**자세한 설명**
이 바인딩은 'rating' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: rating의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "rating_label": {
    "type": "label",
    "text": "#rating_text",
    "bindings": [
      {
        "binding_name": "#rating_text",
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
<summary><strong>#ratings_count_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
ratings count에 표시할 텍스트

**자세한 설명**
이 바인딩은 'ratings count' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: ratings count의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "ratings count_label": {
    "type": "label",
    "text": "#ratings count_text",
    "bindings": [
      {
        "binding_name": "#ratings count_text",
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
<summary><strong>#ratings_panel_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
ratings panel에 표시할 텍스트

**자세한 설명**
이 바인딩은 'ratings panel' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: ratings panel의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "ratings panel_label": {
    "type": "label",
    "text": "#ratings panel_text",
    "bindings": [
      {
        "binding_name": "#ratings panel_text",
        "binding_name_override": "#text",
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
<summary><strong>#realm_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
realm button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'realm button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: realm button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "realm button_label": {
    "type": "label",
    "text": "#realm button_text",
    "bindings": [
      {
        "binding_name": "#realm button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
create world upsell screen (총 1개 파일)

</details>

<details>
<summary><strong>#realms_info_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
realms info에 표시할 텍스트

**자세한 설명**
이 바인딩은 'realms info' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: realms info의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "realms info_label": {
    "type": "label",
    "text": "#realms info_text",
    "bindings": [
      {
        "binding_name": "#realms info_text",
        "binding_name_override": "#text",
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
<summary><strong>#realms_subscription_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
realms subscription에 표시할 텍스트

**자세한 설명**
이 바인딩은 'realms subscription' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: realms subscription의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "realms subscription_label": {
    "type": "label",
    "text": "#realms subscription_text",
    "bindings": [
      {
        "binding_name": "#realms subscription_text",
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
<summary><strong>#realms_trial_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
realms trial에 표시할 텍스트

**자세한 설명**
이 바인딩은 'realms trial' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: realms trial의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "realms trial_label": {
    "type": "label",
    "text": "#realms trial_text",
    "bindings": [
      {
        "binding_name": "#realms trial_text",
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
<summary><strong>#realms_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
realms warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'realms warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: realms warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "realms warning_label": {
    "type": "label",
    "text": "#realms warning_text",
    "bindings": [
      {
        "binding_name": "#realms warning_text",
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
<summary><strong>#realms_world_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#realms_worlds_title_with_count</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#recipe_hover_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
recipe hover에 표시할 텍스트

**자세한 설명**
이 바인딩은 'recipe hover' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: recipe hover의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "recipe hover_label": {
    "type": "label",
    "text": "#recipe hover_text",
    "bindings": [
      {
        "binding_name": "#recipe hover_text",
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
<summary><strong>#recovery_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
recovery에 표시할 텍스트

**자세한 설명**
이 바인딩은 'recovery' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: recovery의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "recovery_label": {
    "type": "label",
    "text": "#recovery_text",
    "bindings": [
      {
        "binding_name": "#recovery_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
world recovery screen (총 1개 파일)

</details>

<details>
<summary><strong>#region_radio_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
region radio에 표시할 텍스트

**자세한 설명**
이 바인딩은 'region radio' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: region radio의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "region radio_label": {
    "type": "label",
    "text": "#region radio_text",
    "bindings": [
      {
        "binding_name": "#region radio_text",
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
<summary><strong>#render_distance_performance_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
render distance performance tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'render distance performance tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: render distance performance tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "render distance performance tooltip_label": {
    "type": "label",
    "text": "#render distance performance tooltip_text",
    "bindings": [
      {
        "binding_name": "#render distance performance tooltip_text",
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
<summary><strong>#right_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
right button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'right button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: right button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "right button_label": {
    "type": "label",
    "text": "#right button_text",
    "bindings": [
      {
        "binding_name": "#right button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
authentication modals (총 1개 파일)

</details>

<details>
<summary><strong>#right_panel_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona common (총 1개 파일)

</details>

<details>
<summary><strong>#right_panel_title_rarity</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#row_message_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
row message에 표시할 텍스트

**자세한 설명**
이 바인딩은 'row message' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: row message의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "row message_label": {
    "type": "label",
    "text": "#row message_text",
    "bindings": [
      {
        "binding_name": "#row message_text",
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
<summary><strong>#rtx_disabled_option_upsell_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
rtx disabled option upsell tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'rtx disabled option upsell tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: rtx disabled option upsell tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "rtx disabled option upsell tooltip_label": {
    "type": "label",
    "text": "#rtx disabled option upsell tooltip_text",
    "bindings": [
      {
        "binding_name": "#rtx disabled option upsell tooltip_text",
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
<summary><strong>#rtx_renderdist_performance_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
rtx renderdist performance tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'rtx renderdist performance tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: rtx renderdist performance tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "rtx renderdist performance tooltip_label": {
    "type": "label",
    "text": "#rtx renderdist performance tooltip_text",
    "bindings": [
      {
        "binding_name": "#rtx renderdist performance tooltip_text",
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
<summary><strong>#sales_header_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
sales header에 표시할 텍스트

**자세한 설명**
이 바인딩은 'sales header' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: sales header의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "sales header_label": {
    "type": "label",
    "text": "#sales header_text",
    "bindings": [
      {
        "binding_name": "#sales header_text",
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
<summary><strong>#save_date_time_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
save date time에 표시할 텍스트

**자세한 설명**
이 바인딩은 'save date time' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: save date time의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "save date time_label": {
    "type": "label",
    "text": "#save date time_text",
    "bindings": [
      {
        "binding_name": "#save date time_text",
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
<summary><strong>#screen_header_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store data driven screen, ui common (총 2개 파일)

</details>

<details>
<summary><strong>#search_error_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
search error에 표시할 텍스트

**자세한 설명**
이 바인딩은 'search error' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: search error의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "search error_label": {
    "type": "label",
    "text": "#search error_text",
    "bindings": [
      {
        "binding_name": "#search error_text",
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
<summary><strong>#search_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
search label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'search label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: search label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "search label_label": {
    "type": "label",
    "text": "#search label_text",
    "bindings": [
      {
        "binding_name": "#search label_text",
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
<summary><strong>#search_results_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
search results에 표시할 텍스트

**자세한 설명**
이 바인딩은 'search results' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: search results의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "search results_label": {
    "type": "label",
    "text": "#search results_text",
    "bindings": [
      {
        "binding_name": "#search results_text",
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
<summary><strong>#section_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
how to play common, settings sections/settings common (총 2개 파일)

</details>

<details>
<summary><strong>#section_title_visible</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen, store common (총 2개 파일)

</details>

<details>
<summary><strong>#selected_bundle_item_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
selected bundle item에 표시할 텍스트

**자세한 설명**
이 바인딩은 'selected bundle item' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: selected bundle item의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "selected bundle item_label": {
    "type": "label",
    "text": "#selected bundle item_text",
    "bindings": [
      {
        "binding_name": "#selected bundle item_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
gameplay common (총 1개 파일)

</details>

<details>
<summary><strong>#selected_hover_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
selected hover에 표시할 텍스트

**자세한 설명**
이 바인딩은 'selected hover' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: selected hover의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "selected hover_label": {
    "type": "label",
    "text": "#selected hover_text",
    "bindings": [
      {
        "binding_name": "#selected hover_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
trade 2 screen, ui common (총 2개 파일)

</details>

<details>
<summary><strong>#selected_persona_skin_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
selected persona skin에 표시할 텍스트

**자세한 설명**
이 바인딩은 'selected persona skin' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: selected persona skin의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "selected persona skin_label": {
    "type": "label",
    "text": "#selected persona skin_text",
    "bindings": [
      {
        "binding_name": "#selected persona skin_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, persona popups (총 2개 파일)

</details>

<details>
<summary><strong>#send_button_accessibility_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
send button accessibility에 표시할 텍스트

**자세한 설명**
이 바인딩은 'send button accessibility' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: send button accessibility의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "send button accessibility_label": {
    "type": "label",
    "text": "#send button accessibility_text",
    "bindings": [
      {
        "binding_name": "#send button accessibility_text",
        "binding_name_override": "#text",
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
<summary><strong>#server_region_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
server region에 표시할 텍스트

**자세한 설명**
이 바인딩은 'server region' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: server region의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "server region_label": {
    "type": "label",
    "text": "#server region_text",
    "bindings": [
      {
        "binding_name": "#server region_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
progress screen (총 1개 파일)

</details>

<details>
<summary><strong>#service_body_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
service body에 표시할 텍스트

**자세한 설명**
이 바인딩은 'service body' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: service body의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "service body_label": {
    "type": "label",
    "text": "#service body_text",
    "bindings": [
      {
        "binding_name": "#service body_text",
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
<summary><strong>#service_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
service button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'service button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: service button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "service button_label": {
    "type": "label",
    "text": "#service button_text",
    "bindings": [
      {
        "binding_name": "#service button_text",
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
<summary><strong>#service_title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#show_more_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
show more에 표시할 텍스트

**자세한 설명**
이 바인딩은 'show more' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: show more의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "show more_label": {
    "type": "label",
    "text": "#show more_text",
    "bindings": [
      {
        "binding_name": "#show more_text",
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
<summary><strong>#show_persistent_bundle_hover_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
show persistent bundle hover에 표시할 텍스트

**자세한 설명**
이 바인딩은 'show persistent bundle hover' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: show persistent bundle hover의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "show persistent bundle hover_label": {
    "type": "label",
    "text": "#show persistent bundle hover_text",
    "bindings": [
      {
        "binding_name": "#show persistent bundle hover_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
crafter screen pocket, redstone screen, ui common (총 3개 파일)

</details>

<details>
<summary><strong>#sign_in_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
sign in button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'sign in button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: sign in button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "sign in button_label": {
    "type": "label",
    "text": "#sign in button_text",
    "bindings": [
      {
        "binding_name": "#sign in button_text",
        "binding_name_override": "#text",
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
<summary><strong>#sign_in_modal_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#sign_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
sign에 표시할 텍스트

**자세한 설명**
이 바인딩은 'sign' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: sign의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "sign_label": {
    "type": "label",
    "text": "#sign_text",
    "bindings": [
      {
        "binding_name": "#sign_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
sign screen (총 1개 파일)

</details>

<details>
<summary><strong>#signingin_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
signingin에 표시할 텍스트

**자세한 설명**
이 바인딩은 'signingin' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: signingin의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "signingin_label": {
    "type": "label",
    "text": "#signingin_text",
    "bindings": [
      {
        "binding_name": "#signingin_text",
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
<summary><strong>#single_title_label</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
file upload screen (총 1개 파일)

</details>

<details>
<summary><strong>#size_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
size에 표시할 텍스트

**자세한 설명**
이 바인딩은 'size' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: size의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "size_label": {
    "type": "label",
    "text": "#size_text",
    "bindings": [
      {
        "binding_name": "#size_text",
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
<summary><strong>#skin_pack_right_panel_skin_count_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
skin pack right panel skin count에 표시할 텍스트

**자세한 설명**
이 바인딩은 'skin pack right panel skin count' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: skin pack right panel skin count의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "skin pack right panel skin count_label": {
    "type": "label",
    "text": "#skin pack right panel skin count_text",
    "bindings": [
      {
        "binding_name": "#skin pack right panel skin count_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, persona popups (총 2개 파일)

</details>

<details>
<summary><strong>#skin_pack_right_panel_texture_pack_count_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
skin pack right panelure pack count에 표시할 텍스트

**자세한 설명**
이 바인딩은 'skin pack right panelure pack count' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: skin pack right panelure pack count의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "skin pack right panelure pack count_label": {
    "type": "label",
    "text": "#skin pack right panelure pack count_text",
    "bindings": [
      {
        "binding_name": "#skin pack right panelure pack count_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, persona popups (총 2개 파일)

</details>

<details>
<summary><strong>#skin_pack_right_panel_usage_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
skin pack right panel usage에 표시할 텍스트

**자세한 설명**
이 바인딩은 'skin pack right panel usage' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: skin pack right panel usage의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "skin pack right panel usage_label": {
    "type": "label",
    "text": "#skin pack right panel usage_text",
    "bindings": [
      {
        "binding_name": "#skin pack right panel usage_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, persona popups (총 2개 파일)

</details>

<details>
<summary><strong>#skin_pack_right_panel_usage_tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
skin pack right panel usage tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'skin pack right panel usage tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: skin pack right panel usage tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "skin pack right panel usage tooltip_label": {
    "type": "label",
    "text": "#skin pack right panel usage tooltip_text",
    "bindings": [
      {
        "binding_name": "#skin pack right panel usage tooltip_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, persona popups (총 2개 파일)

</details>

<details>
<summary><strong>#skin_pack_right_panel_world_count_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
skin pack right panel world count에 표시할 텍스트

**자세한 설명**
이 바인딩은 'skin pack right panel world count' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: skin pack right panel world count의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "skin pack right panel world count_label": {
    "type": "label",
    "text": "#skin pack right panel world count_text",
    "bindings": [
      {
        "binding_name": "#skin pack right panel world count_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona SDL, persona popups (총 2개 파일)

</details>

<details>
<summary><strong>#skin_pack_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#sort_type_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
sort type에 표시할 텍스트

**자세한 설명**
이 바인딩은 'sort type' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: sort type의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "sort type_label": {
    "type": "label",
    "text": "#sort type_text",
    "bindings": [
      {
        "binding_name": "#sort type_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store sort menu screen (총 1개 파일)

</details>

<details>
<summary><strong>#special_banner_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
special banner에 표시할 텍스트

**자세한 설명**
이 바인딩은 'special banner' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: special banner의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "special banner_label": {
    "type": "label",
    "text": "#special banner_text",
    "bindings": [
      {
        "binding_name": "#special banner_text",
        "binding_name_override": "#text",
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
<summary><strong>#starter_bundle_offer_prompt_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
starter bundle offer prompt에 표시할 텍스트

**자세한 설명**
이 바인딩은 'starter bundle offer prompt' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: starter bundle offer prompt의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "starter bundle offer prompt_label": {
    "type": "label",
    "text": "#starter bundle offer prompt_text",
    "bindings": [
      {
        "binding_name": "#starter bundle offer prompt_text",
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
<summary><strong>#storage_bar_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
storage bar label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'storage bar label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: storage bar label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "storage bar label_label": {
    "type": "label",
    "text": "#storage bar label_text",
    "bindings": [
      {
        "binding_name": "#storage bar label_text",
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
<summary><strong>#store_error_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
store error에 표시할 텍스트

**자세한 설명**
이 바인딩은 'store error' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: store error의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "store error_label": {
    "type": "label",
    "text": "#store error_text",
    "bindings": [
      {
        "binding_name": "#store error_text",
        "binding_name_override": "#text",
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
<summary><strong>#store_failure_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
store failure에 표시할 텍스트

**자세한 설명**
이 바인딩은 'store failure' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: store failure의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "store failure_label": {
    "type": "label",
    "text": "#store failure_text",
    "bindings": [
      {
        "binding_name": "#store failure_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store common, store data driven screen (총 2개 파일)

</details>

<details>
<summary><strong>#student_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
student button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'student button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: student button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "student button_label": {
    "type": "label",
    "text": "#student button_text",
    "bindings": [
      {
        "binding_name": "#student button_text",
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
<summary><strong>#submit_rating_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
submit rating button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'submit rating button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: submit rating button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "submit rating button_label": {
    "type": "label",
    "text": "#submit rating button_text",
    "bindings": [
      {
        "binding_name": "#submit rating button_text",
        "binding_name_override": "#text",
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
<summary><strong>#submit_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
submit에 표시할 텍스트

**자세한 설명**
이 바인딩은 'submit' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: submit의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "submit_label": {
    "type": "label",
    "text": "#submit_text",
    "bindings": [
      {
        "binding_name": "#submit_text",
        "binding_name_override": "#text",
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
<summary><strong>#subscription_info_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
subscription info에 표시할 텍스트

**자세한 설명**
이 바인딩은 'subscription info' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: subscription info의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "subscription info_label": {
    "type": "label",
    "text": "#subscription info_text",
    "bindings": [
      {
        "binding_name": "#subscription info_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/landing section (총 1개 파일)

</details>

<details>
<summary><strong>#subscription_world_template_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
subscription world template에 표시할 텍스트

**자세한 설명**
이 바인딩은 'subscription world template' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: subscription world template의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "subscription world template_label": {
    "type": "label",
    "text": "#subscription world template_text",
    "bindings": [
      {
        "binding_name": "#subscription world template_text",
        "binding_name_override": "#text",
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
<summary><strong>#suggested_offers_title_addon</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#suggested_offers_title_global</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#suggested_offers_title_level</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#sync_legacy_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
sync legacy button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'sync legacy button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: sync legacy button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "sync legacy button_label": {
    "type": "label",
    "text": "#sync legacy button_text",
    "bindings": [
      {
        "binding_name": "#sync legacy button_text",
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
<summary><strong>#tab_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tab label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tab label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tab label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tab label_label": {
    "type": "label",
    "text": "#tab label_text",
    "bindings": [
      {
        "binding_name": "#tab label_text",
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
<summary><strong>#tab_name_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tab name에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tab name' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tab name의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tab name_label": {
    "type": "label",
    "text": "#tab name_text",
    "bindings": [
      {
        "binding_name": "#tab name_text",
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
<summary><strong>#template_download_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
template download에 표시할 텍스트

**자세한 설명**
이 바인딩은 'template download' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: template download의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "template download_label": {
    "type": "label",
    "text": "#template download_text",
    "bindings": [
      {
        "binding_name": "#template download_text",
        "binding_name_override": "#text",
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
<summary><strong>#text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
라벨에 표시할 텍스트 내용

**자세한 설명**
이 바인딩은 label 요소에 표시할 텍스트를 제공합니다.

게임 데이터를 동적으로 표시할 때 사용하며, 텍스트가 실시간으로 변경될 수 있습니다.
예를 들어 플레이어 이름, 점수, 메시지 등을 표시할 수 있습니다.

**실제 사용 예**
예: 플레이어 이름 표시, 채팅 메시지 표시, 점수 표시, 설명 텍스트

**코드 예제**
```jsonc
{
  "player_name_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
anvil screen, anvil screen pocket, authentication screen
외 22개 (총 25개 파일)

</details>

<details>
<summary><strong>#time_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
time에 표시할 텍스트

**자세한 설명**
이 바인딩은 'time' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: time의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "time_label": {
    "type": "label",
    "text": "#time_text",
    "bindings": [
      {
        "binding_name": "#time_text",
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
<summary><strong>#tip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tip_label": {
    "type": "label",
    "text": "#tip_text",
    "bindings": [
      {
        "binding_name": "#tip_text",
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
<summary><strong>#title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
rating prompt (총 1개 파일)

</details>

<details>
<summary><strong>#title_label</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/content section, pdp screen, realmsPlus sections/content section
외 3개 (총 6개 파일)

</details>

<details>
<summary><strong>#title_name</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
add external server screen, authentication modals, disconnect screen
외 7개 (총 10개 파일)

</details>

<details>
<summary><strong>#title_text_box</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#title_text_color</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
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
<summary><strong>#toast_subtitle</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
toast screen (총 1개 파일)

</details>

<details>
<summary><strong>#toast_subtitle_visible</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
toast screen (총 1개 파일)

</details>

<details>
<summary><strong>#toast_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
persona popups, toast screen (총 2개 파일)

</details>

<details>
<summary><strong>#tooltip_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tooltip에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tooltip' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tooltip의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tooltip_label": {
    "type": "label",
    "text": "#tooltip_text",
    "bindings": [
      {
        "binding_name": "#tooltip_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
store progress screen, ui common (총 2개 파일)

</details>

<details>
<summary><strong>#trial_desciption_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
trial desciption에 표시할 텍스트

**자세한 설명**
이 바인딩은 'trial desciption' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: trial desciption의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "trial desciption_label": {
    "type": "label",
    "text": "#trial desciption_text",
    "bindings": [
      {
        "binding_name": "#trial desciption_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
csb sections/csb buy now screen, realmsPlus sections/realmsPlus buy now screen (총 2개 파일)

</details>

<details>
<summary><strong>#tts_dialog_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
disconnect screen, ui template dialogs (총 2개 파일)

</details>

<details>
<summary><strong>#tts_filters_appliedCount_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tts filters appliedcount에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tts filters appliedcount' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tts filters appliedcount의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tts filters appliedcount_label": {
    "type": "label",
    "text": "#tts filters appliedcount_text",
    "bindings": [
      {
        "binding_name": "#tts filters appliedcount_text",
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
<summary><strong>#tts_offer_minecoin_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tts offer minecoin에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tts offer minecoin' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tts offer minecoin의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tts offer minecoin_label": {
    "type": "label",
    "text": "#tts offer minecoin_text",
    "bindings": [
      {
        "binding_name": "#tts offer minecoin_text",
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
<summary><strong>#tts_offer_prompt_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tts offer prompt에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tts offer prompt' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tts offer prompt의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tts offer prompt_label": {
    "type": "label",
    "text": "#tts offer prompt_text",
    "bindings": [
      {
        "binding_name": "#tts offer prompt_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pdp screen, store common (총 2개 파일)

</details>

<details>
<summary><strong>#tts_purchase_with_coins_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tts purchase with coins button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tts purchase with coins button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tts purchase with coins button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tts purchase with coins button_label": {
    "type": "label",
    "text": "#tts purchase with coins button_text",
    "bindings": [
      {
        "binding_name": "#tts purchase with coins button_text",
        "binding_name_override": "#text",
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
<summary><strong>#tts_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
tts에 표시할 텍스트

**자세한 설명**
이 바인딩은 'tts' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: tts의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "tts_label": {
    "type": "label",
    "text": "#tts_text",
    "bindings": [
      {
        "binding_name": "#tts_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
popup dialog (총 1개 파일)

</details>

<details>
<summary><strong>#turtle_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
turtle에 표시할 텍스트

**자세한 설명**
이 바인딩은 'turtle' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: turtle의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "turtle_label": {
    "type": "label",
    "text": "#turtle_text",
    "bindings": [
      {
        "binding_name": "#turtle_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
perf turtle (총 1개 파일)

</details>

<details>
<summary><strong>#uninvited_friends_page_index_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
uninvited friends page index에 표시할 텍스트

**자세한 설명**
이 바인딩은 'uninvited friends page index' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: uninvited friends page index의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "uninvited friends page index_label": {
    "type": "label",
    "text": "#uninvited friends page index_text",
    "bindings": [
      {
        "binding_name": "#uninvited friends page index_text",
        "binding_name_override": "#text",
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
<summary><strong>#unlink_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
unlink warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'unlink warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: unlink warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "unlink warning_label": {
    "type": "label",
    "text": "#unlink warning_text",
    "bindings": [
      {
        "binding_name": "#unlink warning_text",
        "binding_name_override": "#text",
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
<summary><strong>#unlock_full_game_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
unlock full game button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'unlock full game button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: unlock full game button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "unlock full game button_label": {
    "type": "label",
    "text": "#unlock full game button_text",
    "bindings": [
      {
        "binding_name": "#unlock full game button_text",
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
<summary><strong>#update_screen_title</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
update version (총 1개 파일)

</details>

<details>
<summary><strong>#upload_button_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
upload button에 표시할 텍스트

**자세한 설명**
이 바인딩은 'upload button' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: upload button의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "upload button_label": {
    "type": "label",
    "text": "#upload button_text",
    "bindings": [
      {
        "binding_name": "#upload button_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
cloud upload screen, settings sections/realms world section (총 2개 파일)

</details>

<details>
<summary><strong>#upsell_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
upsell에 표시할 텍스트

**자세한 설명**
이 바인딩은 'upsell' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: upsell의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "upsell_label": {
    "type": "label",
    "text": "#upsell_text",
    "bindings": [
      {
        "binding_name": "#upsell_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
create world upsell screen (총 1개 파일)

</details>

<details>
<summary><strong>#version_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
version에 표시할 텍스트

**자세한 설명**
이 바인딩은 'version' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: version의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "version_label": {
    "type": "label",
    "text": "#version_text",
    "bindings": [
      {
        "binding_name": "#version_text",
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
<summary><strong>#video_gamepad_helper_label_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
video gamepad helper label에 표시할 텍스트

**자세한 설명**
이 바인딩은 'video gamepad helper label' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: video gamepad helper label의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "video gamepad helper label_label": {
    "type": "label",
    "text": "#video gamepad helper label_text",
    "bindings": [
      {
        "binding_name": "#video gamepad helper label_text",
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
<summary><strong>#window_title_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
제목 텍스트

**자세한 설명**
이 바인딩은 화면이나 섹션의 제목을 표시합니다.

일반 텍스트(#text)보다 더 중요한 내용을 표시할 때 사용하며,
보통 더 크거나 굵은 폰트로 표시됩니다.

화면 상단의 제목, 다이얼로그 제목, 섹션 제목 등에 사용됩니다.

**실제 사용 예**
예: 설정 화면 제목, 팝업 대화상자 제목, 월드 이름

**코드 예제**
```jsonc
{
  "screen_title": {
    "type": "label",
    "text": "#title_text",
    "font_size": "large",
    "bindings": [
      {
        "binding_name": "#screen_title",
        "binding_name_override": "#title_text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
choose realm screen, custom templates screen (총 2개 파일)

</details>

<details>
<summary><strong>#world_pack_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
world pack에 표시할 텍스트

**자세한 설명**
이 바인딩은 'world pack' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: world pack의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "world pack_label": {
    "type": "label",
    "text": "#world pack_text",
    "bindings": [
      {
        "binding_name": "#world pack_text",
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
<summary><strong>#world_template_option_locked_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
world template option locked warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'world template option locked warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: world template option locked warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "world template option locked warning_label": {
    "type": "label",
    "text": "#world template option locked warning_text",
    "bindings": [
      {
        "binding_name": "#world template option locked warning_text",
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
<summary><strong>#world_template_options_lock_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
world template options lock warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'world template options lock warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: world template options lock warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "world template options lock warning_label": {
    "type": "label",
    "text": "#world template options lock warning_text",
    "bindings": [
      {
        "binding_name": "#world template options lock warning_text",
        "binding_name_override": "#text",
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
<summary><strong>#world_template_permissions_locked_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
world template permissions locked warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'world template permissions locked warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: world template permissions locked warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "world template permissions locked warning_label": {
    "type": "label",
    "text": "#world template permissions locked warning_text",
    "bindings": [
      {
        "binding_name": "#world template permissions locked warning_text",
        "binding_name_override": "#text",
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
<summary><strong>#xbl_multiplayer_warning_text</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
xbl multiplayer warning에 표시할 텍스트

**자세한 설명**
이 바인딩은 'xbl multiplayer warning' 라벨에 표시될 텍스트 내용을 제공합니다.

텍스트는 게임 상태에 따라 동적으로 변경될 수 있으며,
현재 게임 언어로 자동 번역될 수 있습니다.

**실제 사용 예**
예: xbl multiplayer warning의 동적 텍스트 표시

**코드 예제**
```jsonc
{
  "xbl multiplayer warning_label": {
    "type": "label",
    "text": "#xbl multiplayer warning_text",
    "bindings": [
      {
        "binding_name": "#xbl multiplayer warning_text",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/world section (총 1개 파일)

</details>

