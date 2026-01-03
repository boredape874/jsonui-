---
title: 하드코딩된 요소
---

# 하드코딩된 요소 {#hardcoded}

게임 엔진이 내부적으로 미리 정의해둔 이름과 규칙들입니다. 이러한 값들은 **절대 변경하면 안 되며**, 정해진 이름 그대로 사용해야 게임과 올바르게 연결됩니다.

## 왜 하드코딩된 요소를 알아야 하나요?

하드코딩된 요소는 마인크래프트 게임 엔진이 직접 찾아서 사용하는 이름입니다. 이 이름을 바꾸면:

-  화면이 작동하지 않음
-  바인딩이 데이터를 받지 못함
-  버튼 클릭이 무시됨
-  렌더러가 표시되지 않음

## 화면 이름 (Screen Names) {#screen-names}

게임이 자동으로 호출하는 화면들의 고정 이름입니다. **반드시 정확히 이 이름을 사용해야 합니다.**

### HUD 관련 화면

```json
{
  "namespace": "hud",

  //  메인 HUD 화면 - 게임 플레이 중 항상 표시
  "hud_screen": {
    "type": "screen"
    // 체력바, 허기바, 핫바 등이 여기 포함됨
  },

  //  모바일 전용 HUD
  "hud_screen@hud.hud_screen": {
    // 모바일 디바이스에서만 사용
  }
}
```

### 인벤토리 화면

```json
{
  "namespace": "inventory",

  //  인벤토리 화면 (E키)
  "inventory_screen": {
    "type": "screen"
  },

  //  크리에이티브 인벤토리
  "creative_inventory_screen": {
    "type": "screen"
  },

  //  생존 인벤토리
  "survival_inventory_screen": {
    "type": "screen"
  }
}
```

### 대화/채팅 화면

```json
{
  //  채팅 화면 (T키)
  "chat_screen": {
    "type": "screen"
  },

  //  NPC 대화 화면
  "npc_interact": {
    "type": "screen"
  },

  //  NPC 이름표
  "npc_name_tag": {
    "type": "panel"
  }
}
```

### 서버/멀티플레이 화면

```json
{
  //  서버 폼 (스크립트 API에서 전송)
  "server_form": {
    "type": "screen"
  },

  //  서버 리스트
  "server_screen": {
    "type": "screen"
  }
}
```

### 게임 메뉴 화면

```json
{
  //  시작 화면
  "start_screen": {
    "type": "screen"
  },

  //  설정 화면
  "settings_screen": {
    "type": "screen"
  },

  //  일시정지 화면
  "pause_screen": {
    "type": "screen"
  },

  //  게임 모드 선택
  "game_mode_screen": {
    "type": "screen"
  }
}
```

### 상점/마켓플레이스

```json
{
  //  마켓플레이스
  "marketplace_screen": {
    "type": "screen"
  },

  //  구매 확인
  "purchase_screen": {
    "type": "screen"
  }
}
```

### 기타 특수 화면

```json
{
  //  십자선 (조준점)
  "crosshair_screen": {
    "type": "screen"
  },

  //  사망 화면
  "death_screen": {
    "type": "screen"
  },

  //  크레딧
  "credits_screen": {
    "type": "screen"
  },

  //  업적
  "achievements_screen": {
    "type": "screen"
  }
}
```

## 바인딩 이름 (Binding Names) {#binding-names}

게임 데이터를 UI에 연결하는 고정 바인딩 이름들입니다.

### 기본 바인딩

```json
{
  "bindings": [
    {
      "binding_name": "#visible",  //  표시/숨김
      "binding_type": "global"
    },
    {
      "binding_name": "#enabled",  //  활성화/비활성화
      "binding_type": "global"
    },
    {
      "binding_name": "#text",     //  텍스트 내용
      "binding_type": "global"
    },
    {
      "binding_name": "#color",    //  색상 (RGB 배열)
      "binding_type": "global"
    }
  ]
}
```

### 텍스처/이미지 바인딩

```json
{
  "bindings": [
    {
      "binding_name": "#texture",           //  텍스처 경로
      "binding_type": "global"
    },
    {
      "binding_name": "#texture_file_system", //  파일 시스템 텍스처
      "binding_type": "global"
    },
    {
      "binding_name": "#clip_ratio",        //  잘라내기 비율 (0.0 ~ 1.0)
      "binding_type": "global"
    },
    {
      "binding_name": "#uv",                //  UV 좌표
      "binding_type": "global"
    }
  ]
}
```

### 컬렉션 바인딩

```json
{
  "bindings": [
    {
      "binding_name": "#collection_length",  //  컬렉션 항목 개수
      "binding_type": "collection"
    },
    {
      "binding_name": "#collection_index",   //  현재 인덱스
      "binding_type": "collection"
    }
  ]
}
```

### HUD 전용 바인딩

```json
{
  "bindings": [
    //  체력
    { "binding_name": "#health", "binding_type": "global" },
    { "binding_name": "#max_health", "binding_type": "global" },

    //  허기
    { "binding_name": "#hunger", "binding_type": "global" },
    { "binding_name": "#saturation", "binding_type": "global" },

    //  방어구
    { "binding_name": "#armor", "binding_type": "global" },

    //  경험치
    { "binding_name": "#xp_level", "binding_type": "global" },
    { "binding_name": "#xp_progress", "binding_type": "global" },

    //  산소 (물속)
    { "binding_name": "#air", "binding_type": "global" },
    { "binding_name": "#max_air", "binding_type": "global" }
  ]
}
```

### 플레이어 정보 바인딩

```json
{
  "bindings": [
    { "binding_name": "#player_name", "binding_type": "global" },
    { "binding_name": "#player_position", "binding_type": "global" },
    { "binding_name": "#player_level", "binding_type": "global" },
    { "binding_name": "#player_permission_level", "binding_type": "global" }
  ]
}
```

### 아이템 관련 바인딩

```json
{
  "bindings": [
    { "binding_name": "#item_name", "binding_type": "view" },
    { "binding_name": "#item_id_aux", "binding_type": "view" },  // 아이템 렌더용
    { "binding_name": "#item_custom_color", "binding_type": "view" },
    { "binding_name": "#item_count", "binding_type": "view" },
    { "binding_name": "#item_durability", "binding_type": "view" },
    { "binding_name": "#item_stack_count", "binding_type": "view" }
  ]
}
```

### 시간/날씨 바인딩

```json
{
  "bindings": [
    { "binding_name": "#is_day", "binding_type": "global" },
    { "binding_name": "#is_night", "binding_type": "global" },
    { "binding_name": "#moon_phase", "binding_type": "global" },
    { "binding_name": "#is_raining", "binding_type": "global" },
    { "binding_name": "#is_thundering", "binding_type": "global" }
  ]
}
```

### 게임 모드 바인딩

```json
{
  "bindings": [
    { "binding_name": "#is_creative_mode", "binding_type": "global" },
    { "binding_name": "#is_survival_mode", "binding_type": "global" },
    { "binding_name": "#is_adventure_mode", "binding_type": "global" },
    { "binding_name": "#is_spectator_mode", "binding_type": "global" }
  ]
}
```

## 렌더러 타입 (Renderer Types) {#renderer-types}

특수한 방식으로 화면에 표시하는 렌더러들입니다.

### 플레이어 렌더러

```json
{
  //  플레이어 3D 모델 표시
  "player_renderer": {
    "type": "panel",
    "renderer": "live_player_renderer",
    "property_bag": {
      "#look_at_cursor": true
    }
  }
}
```

### 아이템 렌더러

```json
{
  //  아이템 3D 렌더링
  "item_renderer": {
    "type": "panel",
    "renderer": "inventory_item_renderer",
    "property_bag": {
      "#item_id_aux": "minecraft:diamond_sword"
    }
  },

  //  아이템 그리드 렌더러
  "grid_item_renderer": {
    "type": "custom",
    "renderer": "grid_item_renderer"
  }
}
```

### 그라디언트 렌더러

```json
{
  //  그라디언트 배경
  "gradient_bg": {
    "type": "panel",
    "renderer": "gradient_renderer",
    "property_bag": {
      "#gradient_direction": "vertical",
      "#gradient_start_color": [1, 1, 1, 0.5],
      "#gradient_end_color": [0, 0, 0, 0.5]
    }
  }
}
```

### 비네트 렌더러

```json
{
  //  화면 가장자리 어둡게
  "vignette": {
    "type": "panel",
    "renderer": "vignette_renderer",
    "property_bag": {
      "#vignette_intensity": 0.5
    }
  }
}
```

### 월드 렌더러

```json
{
  //  월드 미리보기
  "world_preview": {
    "type": "panel",
    "renderer": "world_preview_renderer"
  }
}
```

## 버튼 ID (Button IDs) {#button-ids}

게임이 인식하는 버튼 액션 ID입니다.

### 메뉴 버튼

```json
{
  "button": {
    "type": "button",

    // 버튼 ID 목록:
    "button_mappings": [
      {
        "from_button_id": "button.menu_select",   // 선택
        "to_button_id": "button.menu_ok"
      },
      {
        "from_button_id": "button.menu_cancel",   // 취소
        "to_button_id": "button.menu_exit_wtext"
      },
      {
        "from_button_id": "button.menu_ok",       // 확인
        "to_button_id": "button.destroy_selection"
      }
    ]
  }
}
```

### 자주 사용되는 버튼 ID

- `button.menu_ok` - 확인
- `button.menu_cancel` - 취소
- `button.menu_select` - 선택
- `button.menu_exit` - 나가기
- `button.menu_exit_wtext` - 텍스트와 함께 나가기
- `button.menu_up` - 위로
- `button.menu_down` - 아래로
- `button.menu_left` - 왼쪽으로
- `button.menu_right` - 오른쪽으로
- `button.menu_tab_left` - 탭 왼쪽
- `button.menu_tab_right` - 탭 오른쪽
- `button.menu_alternate_tab_left` - 대체 탭 왼쪽
- `button.menu_alternate_tab_right` - 대체 탭 오른쪽

### HUD 버튼 ID

- `button.slot0` ~ `button.slot8` - 핫바 슬롯 0~8
- `button.hotbar_inventory_button` - 핫바 인벤토리
- `button.inventory_tab_toggle` - 인벤토리 탭 전환
- `button.mob_effects_toggle` - 효과 토글

### 채팅 버튼 ID

- `button.send` - 채팅 전송
- `button.chat_autocomplete` - 자동완성
- `button.chat_previous_message` - 이전 메시지
- `button.chat_next_message` - 다음 메시지

## 컨트롤 이름 (Control Names) {#control-names}

게임이 참조하는 특정 컨트롤의 고정 이름입니다.

### HUD 컨트롤

```json
{
  //  체력 바
  "health_bar": {
    "type": "panel"
  },

  //  허기 바
  "food_bar": {
    "type": "panel"
  },

  //  방어구 바
  "armor_bar": {
    "type": "panel"
  },

  //  핫바
  "hotbar": {
    "type": "panel"
  },

  //  경험치 바
  "experience_bar": {
    "type": "panel"
  }
}
```

### 아이템 슬롯 컨트롤

```json
{
  "container_slot_0": { "type": "panel" },
  "container_slot_1": { "type": "panel" },
  // ... 슬롯 번호는 고정

  "hotbar_slot_0": { "type": "panel" },
  "hotbar_slot_1": { "type": "panel" }
  // ... 핫바 슬롯 0~8
}
```

## 프로퍼티 백 키 (Property Bag Keys) {#property-bag-keys}

렌더러나 특수 컨트롤에 전달하는 고정 프로퍼티 이름입니다.

```json
{
  "property_bag": {
    // 플레이어 렌더러
    "#look_at_cursor": true,
    "#player_skin": "steve",

    // 아이템 렌더러
    "#item_id_aux": "minecraft:diamond",
    "#item_custom_color": [255, 0, 0],

    // 그라디언트
    "#gradient_direction": "vertical",
    "#gradient_start_color": [1, 1, 1, 1],
    "#gradient_end_color": [0, 0, 0, 1],

    // 비네트
    "#vignette_intensity": 0.5
  }
}
```

## 애니메이션 이름 (Animation Names) {#animation-names}

일부 애니메이션은 게임이 자동으로 호출합니다.

```json
{
  "anims": [
    // 화면 열릴 때
    "@common.screen_open_anim",

    // 화면 닫힐 때
    "@common.screen_close_anim",

    // 페이드 인
    "@common.fade_in_anim",

    // 페이드 아웃
    "@common.fade_out_anim",

    // 깜빡임
    "@common.blink_anim"
  ]
}
```

## 네임스페이스 (Namespaces) {#namespaces}

게임이 기본으로 제공하는 네임스페이스입니다.

- `hud` - HUD 관련
- `ui` - 일반 UI
- `common` - 공통 컴포넌트
- `start` - 시작 화면
- `inventory` - 인벤토리
- `chat` - 채팅
- `progress` - 프로그레스 바
- `persona` - 캐릭터 커스터마이징

## 중요 주의사항 

### 절대 변경하면 안 되는 것들

1. **화면 이름** - `hud_screen`, `inventory_screen` 등
2. **바인딩 오버라이드 이름** - `#visible`, `#text`, `#texture` 등
3. **렌더러 타입 문자열** - `"inventory_item_renderer"` 등
4. **버튼 ID** - `button.menu_ok` 등

### 변경 가능한 것들

1. **컨트롤 내부 요소** - 크기, 색상, 위치 등
2. **커스텀 컨트롤 이름** - 직접 만든 패널/레이블 등
3. **바인딩 소스** - `binding_name`에 들어가는 계산식

### 예시: 올바른 수정 방법

```json
{
  //  잘못된 방법 - 화면 이름 변경
  "my_custom_hud": {
    "type": "screen"
    // 게임이 이 화면을 찾을 수 없음!
  },

  //  올바른 방법 - 내부 요소만 수정
  "hud_screen": {
    "type": "screen",
    "controls": [
      {
        "my_custom_element@my_namespace.my_panel": {}
        // 화면 이름은 유지하고 내용만 추가
      }
    ]
  }
}
```

## Ore UI와 JSON UI

일부 화면은 **Ore UI**로 이동 중입니다. Ore UI는 하드코딩되어 있어 수정할 수 없습니다.

### Ore UI로 이동한 화면 (수정 불가능)

-  시작 메뉴 (일부)
-  설정 화면 (대부분)
-  마켓플레이스 (전체)
-  Realms 화면 (전체)

### 여전히 JSON UI인 화면 (수정 가능)

-  HUD (체력바, 허기바 등)
-  인벤토리 화면
-  NPC 대화창
-  서버 폼
-  채팅 화면

## 요약

하드코딩된 요소는 게임 엔진이 직접 사용하는 **고정 이름**들입니다.

-  **화면 이름** - `hud_screen`, `chat_screen` 등
-  **바인딩 이름** - `#visible`, `#health` 등
-  **렌더러 타입** - `inventory_item_renderer` 등
-  **버튼 ID** - `button.menu_ok` 등

이 이름들은 **절대 변경하지 말고**, 내부 요소만 수정하세요!
