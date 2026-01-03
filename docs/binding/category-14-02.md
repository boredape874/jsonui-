---
title: 바인딩 목록 - 텍스트 표시 (2/2)
outline: false
search: false
---

# 텍스트 표시 {#binding-category}

텍스트 표시 2/2 (항목 201-305)

[분할 목록으로 돌아가기](category-14.html#binding-category)

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
        "binding_name": "#rating_button_text",
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
        "binding_name": "#rating_footer_text",
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
        "binding_name": "#ratings_count_text",
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
        "binding_name": "#ratings_panel_text",
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
        "binding_name": "#realm_button_text",
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
        "binding_name": "#realms_info_text",
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
        "binding_name": "#realms_subscription_text",
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
        "binding_name": "#realms_trial_text",
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
        "binding_name": "#realms_warning_text",
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
        "binding_name": "#recipe_hover_text",
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
        "binding_name": "#region_radio_text",
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
        "binding_name": "#render_distance_performance_tooltip_text",
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
        "binding_name": "#right_button_text",
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
        "binding_name": "#row_message_text",
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
        "binding_name": "#rtx_disabled_option_upsell_tooltip_text",
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
        "binding_name": "#rtx_renderdist_performance_tooltip_text",
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
        "binding_name": "#sales_header_text",
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
        "binding_name": "#save_date_time_text",
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
        "binding_name": "#search_error_text",
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
        "binding_name": "#search_label_text",
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
        "binding_name": "#search_results_text",
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
        "binding_name": "#selected_bundle_item_text",
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
        "binding_name": "#selected_hover_text",
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
        "binding_name": "#selected_persona_skin_text",
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
        "binding_name": "#send_button_accessibility_text",
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
        "binding_name": "#server_region_text",
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
        "binding_name": "#service_body_text",
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
        "binding_name": "#service_button_text",
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
        "binding_name": "#show_more_text",
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
        "binding_name": "#show_persistent_bundle_hover_text",
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
        "binding_name": "#sign_in_button_text",
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
        "binding_name": "#skin_pack_right_panel_skin_count_text",
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
        "binding_name": "#skin_pack_right_panelure_pack_count_text",
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
        "binding_name": "#skin_pack_right_panel_usage_text",
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
        "binding_name": "#skin_pack_right_panel_usage_tooltip_text",
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
        "binding_name": "#skin_pack_right_panel_world_count_text",
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
        "binding_name": "#sort_type_text",
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
        "binding_name": "#special_banner_text",
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
        "binding_name": "#starter_bundle_offer_prompt_text",
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
        "binding_name": "#storage_bar_label_text",
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
        "binding_name": "#store_error_text",
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
        "binding_name": "#store_failure_text",
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
        "binding_name": "#student_button_text",
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
        "binding_name": "#submit_rating_button_text",
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
        "binding_name": "#subscription_info_text",
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
        "binding_name": "#subscription_world_template_text",
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
        "binding_name": "#sync_legacy_button_text",
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
        "binding_name": "#tab_label_text",
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
        "binding_name": "#tab_name_text",
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
        "binding_name": "#template_download_text",
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
        "binding_name": "#trial_desciption_text",
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
        "binding_name": "#tts_filters_appliedcount_text",
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
        "binding_name": "#tts_offer_minecoin_text",
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
        "binding_name": "#tts_offer_prompt_text",
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
        "binding_name": "#tts_purchase_with_coins_button_text",
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
        "binding_name": "#uninvited_friends_page_index_text",
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
        "binding_name": "#unlink_warning_text",
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
        "binding_name": "#unlock_full_game_button_text",
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
        "binding_name": "#upload_button_text",
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
        "binding_name": "#video_gamepad_helper_label_text",
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
        "binding_name": "#world_pack_text",
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
        "binding_name": "#world_template_option_locked_warning_text",
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
        "binding_name": "#world_template_options_lock_warning_text",
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
        "binding_name": "#world_template_permissions_locked_warning_text",
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
        "binding_name": "#xbl_multiplayer_warning_text",
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

[분할 목록으로 돌아가기](category-14.html#binding-category)


