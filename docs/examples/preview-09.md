---
title: 예제 미리보기 (9/12)
outline: false
search: false
---

# 예제 미리보기 (9/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### 기본
storage_management.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: storage_management.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "storage_management",

  // ???/?? ??
  "resource_controls": {
    // 오버라이드 가능한 변수
    "$item_template": "rainbowpieui_storage_management.pack_description_sub_item"
  },

  // ???/?? ??
  "behavior_controls": {
    // 오버라이드 가능한 변수
    "$item_template": "rainbowpieui_storage_management.pack_description_sub_item"
  },

  // ???/?? ??
  "cached_controls": {
    // 오버라이드 가능한 변수
    "$item_template": "rainbowpieui_storage_management.pack_description_sub_item"
  },

  // ???/?? ??
  "main_content_panel/panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "image_panel",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "padding_main_item_toggle": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 4, 0 ],
              // 보이기/숨기기(공간 유지)
              "visible": "$image_visible"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "main_content_panel/panel/spacing": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "main_content_panel/panel/image_panel/image_border": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "main_content_panel/panel/image_panel/image_border/image": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ??
    "fill": true
  },

  // ???/?? ??
  "common_main_button/background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "common_main_button/border": {
    // 보이기/숨기기(공간 유지)
    "visible": "($button_state = hover)",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 22
  },

  // ???/?? ??
  "sub_item_tray_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "storage_main_item_toggle": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "main_item_toggle",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "padding_main_item_toggle": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 0, 2 ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "resource_sub_item/main_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%c + 1px" ],
    // 오버라이드 가능한 변수
    "$control_template|default": "rainbowpieui_storage_management.resource_toggle"
  },

  // ???/?? ??
  "common_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "generic_button/text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "storage_scroll_pane/category_stack_panel/stack_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "storage_scroll_pane/category_stack_panel/legacy_world_stack_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "storage_scroll_pane/category_stack_panel/retailtopreview_world_stack_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "storage_main_item_toggle/main_item_toggle": {
    // 오버라이드 가능한 변수
    "$unchecked_control": "rainbowpie_ui_toggle.toggle_content_button_unchecked",
    // 오버라이드 가능한 변수
    "$checked_control": "rainbowpie_ui_toggle.toggle_content_button_checked",
    // 오버라이드 가능한 변수
    "$unchecked_hover_control": "rainbowpie_ui_toggle.toggle_content_button_unchecked_hover",
    // 오버라이드 가능한 변수
    "$checked_hover_control": "rainbowpie_ui_toggle.toggle_content_button_checked_hover",
    // 오버라이드 가능한 변수
    "$unchecked_locked_control": "rainbowpie_ui_toggle.toggle_content_button_unchecked_locked",
    // 오버라이드 가능한 변수
    "$unchecked_locked_hover_control": "rainbowpie_ui_toggle.toggle_content_button_unchecked_locked_hover",
    // 오버라이드 가능한 변수
    "$checked_locked_control": "rainbowpie_ui_toggle.toggle_content_button_checked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_content_button_checked_locked_hover",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_content": "storage_management.main_item_text",
    // 오버라이드 가능한 변수
    "$button_content_size": [ "100% - 6px", "100%" ]
  },

  // ???/?? ??
  "storage_footer_panel/visibleContent": {
    // 가로/세로 크기
    "size": [ "100% - 4px", 32 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#multiselectEnabled"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "storage_management_navigation_tab_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#storage_management_visible"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#multiselectEnabled and #storage_management_visible)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "storage_footer_panel/visibleContent/delete_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "storage_footer_panel/visibleContent/share_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/clear_download_cache_button_panel/clear_download_button": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/clear_download_cache_button_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 계산/조건 결과를 연결
            "binding_type": "view",
            // ?? ??
            "source_control_name": "storage_settings_navigation_tab_toggle",
            // 계산식/참조 값
            "source_property_name": "#toggle_state",
            // 결과가 들어갈 속성
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/panel/multiselect_button": {
    // 오버라이드 가능한 변수
    "$unchecked_control": "rainbowpie_ui_toggle.toggle_content_button_unchecked",
    // 오버라이드 가능한 변수
    "$checked_control": "rainbowpie_ui_toggle.toggle_content_button_checked",
    // 오버라이드 가능한 변수
    "$unchecked_hover_control": "rainbowpie_ui_toggle.toggle_content_button_unchecked_hover",
    // 오버라이드 가능한 변수
    "$checked_hover_control": "rainbowpie_ui_toggle.toggle_content_button_checked_hover",
    // 오버라이드 가능한 변수
    "$unchecked_locked_control": "rainbowpie_ui_toggle.toggle_content_button_unchecked_locked",
    // 오버라이드 가능한 변수
    "$unchecked_locked_hover_control": "rainbowpie_ui_toggle.toggle_content_button_unchecked_locked_hover",
    // 오버라이드 가능한 변수
    "$checked_locked_control": "rainbowpie_ui_toggle.toggle_content_button_checked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_content_button_checked_locked_hover",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/clear_cache_button_panel/clear_cache_button": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/clear_screenshots_cache_button_panel/clear_screenshots_cache_button": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#screenshots_showcase_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      }
    ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/delete_local_screenshots_button_panel/delete_local_screenshots_button": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#screenshots_gallery_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      }
    ]
  },

  // ???/?? ??
  "storage_main_panel/scroll_content": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 계산/조건 결과를 연결
            "binding_type": "view",
            // ?? ??
            "source_control_name": "storage_management_navigation_tab_toggle",
            // 계산식/참조 값
            "source_property_name": "#toggle_state",
            // 결과가 들어갈 속성
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 계산/조건 결과를 연결
            "binding_type": "view",
            // ?? ??
            "source_control_name": "storage_management_navigation_tab_toggle",
            // 계산식/참조 값
            "source_property_name": "#toggle_state",
            // 결과가 들어갈 속성
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/file_storage_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#storage_location_radio_external",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.filelocation.external"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#storage_location_radio_package",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.filelocation.appdata"
        }
      }
    ],
    // 완전히 제거(공간도 없음)
    "ignored": "(($is_holographic and $is_reality_mode) or (not ($storage_location_switch_enabled and not $gear_vr)))",
    // 보이기/숨기기(공간 유지)
    "visible": true,
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 계산/조건 결과를 연결
            "binding_type": "view",
            // ?? ??
            "source_control_name": "storage_settings_navigation_tab_toggle",
            // 계산식/참조 값
            "source_property_name": "#toggle_state",
            // 결과가 들어갈 속성
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/clear_cache_button_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 계산/조건 결과를 연결
            "binding_type": "view",
            // ?? ??
            "source_control_name": "storage_settings_navigation_tab_toggle",
            // 계산식/참조 값
            "source_property_name": "#toggle_state",
            // 결과가 들어갈 속성
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/clear_screenshots_cache_button_panel": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "storage_settings_navigation_tab_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel/delete_local_screenshots_button_panel": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "storage_settings_navigation_tab_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "storage_header_panel/header_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 2 ],
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "navigation_tab_panel@rainbowpieui_storage_management.navigation_tab_panel": {}
          },
          {
            // ???/?? ??
            "padding_navigation_tab": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 0, 1 ]
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
store_common.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: store_common.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "common_store",

  // ???/?? ??
  "purchase_coins_panel/plus_button": {
  },

  // ???/?? ??
  "inventory_panel/inventory_button": {
  },

  // ???/?? ??
  "status_with_coins/inventory_panel/inventory_button": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "status_with_coins/coin_balance_panel/coin_balance_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "store_header_with_coins": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$screen_header_title|default": "#screen_header_title",
    // 오버라이드 가능한 변수
    "$screen_header_title_binding_type|default": "global",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "$screen_header_title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title_bindings": [
            {
              // 바인딩 종류(변수로 관리되는 경우도 있음)
              "binding_type": "$screen_header_title_binding_type",
              // 가져올 값 이름
              "binding_name": "$screen_header_title",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "$screen_header_title"
            }
          ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_content_panel": "rainbowpie_ui_store_common.header_content_panel"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "child_control@$child_control": {
          // 가로/세로 크기
          "size": [ "100%", "100% - 20px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      }
    ]
  },

  // ???/?? ??
  "store_base_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "store",
    // 오버라이드 가능한 변수
    "$use_animation": true
  }
}
```








### 기본
store_data_driven_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: store_data_driven_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "store_layout",

  // ???/?? ??
  "store_data_driven_screen_base": {
    // 조건에 따라 변수 값을 바꾸기
    "variables": []
  }
}
```








### 기본
structure_editor_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: structure_editor_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "structure_editor",

  // ???/?? ??
  "image_panel_wrapper": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "button_panel_wrapper": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "export_disabled_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "import_failed_message_text/save_message_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "import_message_text/save_message_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "save_message_text/save_message_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "load_mode_panel/animation_time_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "load_mode_panel/mirror_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "mirror_checkbox/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "common_text_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "3d_export_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "save_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "export_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "load_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "detect_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "import_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "reset_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "help_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "redstone_save_mode_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_redstone_memory@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_redstone_memory",
          // 오버라이드 가능한 변수
          "$radio_label_text": "structure_block.save_to_memory"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_redstone_disk@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_redstone_disk",
          // 오버라이드 가능한 변수
          "$radio_label_text": "structure_block.save_to_disk"
        }
      }
    ]
  },

  // ???/?? ??
  "animation_mode_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_animation_none@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_animation_none",
          // 오버라이드 가능한 변수
          "$radio_label_text": "structure_block.place_by_none"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_animation_layers@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_animation_layers",
          // 오버라이드 가능한 변수
          "$radio_label_text": "structure_block.place_by_layer"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_animation_blocks@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_animation_blocks",
          // 오버라이드 가능한 변수
          "$radio_label_text": "structure_block.place_by_block"
        }
      }
    ]
  },

  // ???/?? ??
  "mode_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_save_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_save_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text|default": "structure_block.mode.save"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_load_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_load_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text|default": "structure_block.mode.load"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_data_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $data_support)",
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_data_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "structure_block.mode.data"
        }
      },
      {

        // 다른 템플릿을 가져와서 확장(상속)
        "structure_corner_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_corner_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "structure_block.mode.corner"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "structure_3d_export_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $3DExport_support)",
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#structure_3d_export_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "structure_block.mode.export"
        }
      }
    ]
  },

  // ???/?? ??
  "structure_editor_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "structure_editor",
    // ?? ??
    "force_render_below": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_structure_editor.structure_editor_content"
  }
}
```








### 기본
toast_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: toast_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "toast_screen",

  // ???/?? ??
  "popup_anim": {
    // 움직임 곡선
    "easing": "out_cubic"
  },

  // ???/?? ??
  "toast_screen_content": {
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "toast_factory",
      // 팩토리 템플릿 매핑
      "control_ids": {
        // ?? ??
        "popup": "popup@toast_screen.popup",
        // ?? ??
        "chat_popup": "chat_popup@toast_screen.chat_popup",
        // ?? ??
        "recipe_unlocked": "recipe_unlocked@toast_screen.recipe_unlocked_popup",
        // ?? ??
        "recipe_unlocked_pocket": "recipe_unlocked_pocket@toast_screen.recipe_unlocked_pocket_popup",
        // ?? ??
        "splitscreen_join_popup": "splitscreen_join_popup@toast_screen.splitscreen_join_popup",
        // ??? ?? ?
        "formfitting_alpha_toast": "toast_screen.formfitting_alpha_toast",
        // ?? ??
        "snackbar": "snackbar@toast_screen.snackbar"
      },
      // ???/?? ??
      "factory_variables": [
        "$rainbowpie_ui_theme_global_font_name",
        "$rainbowpie_ui_theme_global_font_backup_name",
        "$is_pregame"
      ]
    }
  },

  // ???/?? ??
  "text_stack_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ -3, 3 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "title_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "title@toast_screen.toast_label": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 보여줄 글자
                "text": "#toast_title",
                // ?? ??
                "text_alignment": "center",
                // ??
                "font_type": "$rainbowpie_ui_theme_global_font_name",
                // ?? ?? ?
                "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_title_text_color",
                // 가로/세로 크기
                "size": [ "100%", 10 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#toast_title"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #toast_subtitle_visible)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "title_and_subtitle": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title@toast_screen.toast_label": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 보여줄 글자
                      "text": "#toast_title",
                      // ?? ??
                      "text_alignment": "center",
                      // ??
                      "font_type": "$rainbowpie_ui_theme_global_font_name",
                      // ?? ?? ?
                      "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_title_text_color",
                      // 가로/세로 크기
                      "size": [ "100%", 10 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#toast_title"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "subtext@toast_screen.toast_label": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 가로/세로 크기
                      "size": [ "100%", 10 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 보여줄 글자
                      "text": "#toast_subtitle",
                      // ?? ??
                      "text_alignment": "center",
                      // ??
                      "font_type": "$rainbowpie_ui_theme_global_font_name",
                      // ?? ?? ?
                      "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_title_text_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#toast_subtitle"
                        }
                      ]
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#toast_subtitle_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "toast_image": {
    // 가로/세로 크기
    "size": [ 20, 20 ]
  },

  // ???/?? ??
  "resource_pack_icon/resource_pack_image": {
    // 가로/세로 크기
    "size": [ 20, 20 ]
  },

  // ???/?? ??
  "popup": {
    // 오버라이드 가능한 변수
    "$popup_size": [ "60%", 26 ],
    // 오버라이드 가능한 변수
    "$offset_anims": [
      "@rainbowpieui_toast_screen.popup_anim"
    ],
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "background_toast_subtitle_visible": {
              // 이미지 표시
              "type": "image",
              // 기준점(어디에서 시작할지)
              "anchor_from": "center",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "center",
              // 가로/세로 크기
              "size": [ "100% - 6px", "100% - 2px" ],
              // 기준점에서 이동하는 거리
              "offset": [ 0, 2 ],
              // 사용할 이미지 경로
              "texture": "textures/ui/White",
              // ?? (R,G,B,A)
              "color": "$rainbowpie_ui_theme_toast_background_color",
              // ???
              "alpha": "$rainbowpie_ui_theme_toast_background_alpha",
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "#toast_subtitle_visible",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible"
                }
              ]
            }
          },
          {
            // ???/?? ??
            "icon": {
              // 겹치는 순서(숫자 클수록 위)
              "layer": 3,
              // 줄맞춤 컨테이너: 가로/세로로 자동 배치
              "type": "stack_panel",
              // 기준점(어디에서 시작할지)
              "anchor_from": "left_middle",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "left_middle",
              // 가로/세로 크기
              "size": [ "100%c", "100%" ],
              // 기준점에서 이동하는 거리
              "offset": [ 3, 0 ],
              // 목록 아이템을 자동으로 생성
              "factory": {
                // ?? ??
                "name": "toast_image_factory",
                // 팩토리 템플릿 매핑
                "control_ids": {
                  // ??? ?? ?
                  "xbox_icon": "@toast_screen.xbox_icon",
                  // ??? ?? ?
                  "third_party_achievement_icon": "@toast_screen.third_party_achievement_icon",
                  // ??? ?? ?
                  "third_party_invite_icon": "@toast_screen.third_party_invite_icon",
                  // ??? ?? ?
                  "icon_resource_pack": "@toast_screen.resource_pack_icon",
                  // ?? ??
                  "key_art_image": "@toast_screen.key_art_image",
                  // ??? ?? ?
                  "persona_icon": "@toast_screen.persona_icon"
                },
                // ???/?? ??
                "factory_variables": [
                  "$hide_xbox_live_icon"
                ]
              },
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 게임이 주는 전역 값 연결
                  "binding_type": "global",
                  // 가져올 값 이름
                  "binding_name": "#toast_icon_section_content",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#collection_length"
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "popup/popup_content/icon_padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "popup/popup_content/text_padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "popup/popup_content": {
    // 가로/세로 크기
    "size": [ "100% - 6px", "100% - 6px" ]
  },

  // ???/?? ??
  "popup/background": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 가로/세로 크기
    "size": [ "100% - 6px", "100% - 6px" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_toast_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_toast_background_alpha",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "(not #toast_subtitle_visible)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  // ???/?? ??
  "formfitting_alpha_toast/bg/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_title_text_color"
  },

  // ???/?? ??
  "formfitting_alpha_toast/bg": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_toast_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_toast_background_alpha"
  },

  // ???/?? ??
  "toast_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ignored": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "toast_screen"
  }
}
```








### 기본
trade_2_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: trade_2_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "trade2",

  // ???/?? ??
  "top_half_stack_panel/trade_button_holder/trade_button": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, "-50%y" ]
  },

  // ???/?? ??
  "top_half_stack_panel/trade_button_holder": {
    // 가로/세로 크기
    "size": [ "100%cm", 0 ],
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "trade_all_button@trade2.trade_button": {
              // 오버라이드 가능한 변수
              "$button_text": "rainbowpie.ui.trade2.tradeAll",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.container_auto_place",
              // 이 컨트롤 안에서 쓰는 임시 저장소
              "property_bag": {
                // ???/??? ?
                "#collection_name": "trade2_result_item",
                // ???/??? ?
                "#collection_index": 0
              },
              // 기준점에서 이동하는 거리
              "offset": [ 0, "50%y" ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "screen_stack_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "result_item_name_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_ca81cc28)",
              // 가로/세로 크기
              "size": [ 0, 166 ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "text_background@rainbowpie_ui_common.text_background": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_left",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_left",
                    // 기준점에서 이동하는 거리
                    "offset": [ 0, 26 ],
                    // 가로/세로 크기
                    "size": [ "100%c + 2px", "100%c + 2px" ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "result_item_info_label@rainbowpie_ui_common.text_label": {
                          // 보여줄 글자
                          "text": "#hover_text",
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 1,
                          // 게임 값과 연결하는 규칙 목록
                          "bindings": [
                            {
                              // 가져올 값 이름
                              "binding_name": "#hover_text",
                              // 목록 데이터를 반복 연결
                              "binding_type": "collection",
                              // 목록 이름
                              "binding_collection_name": "trade2_result_item"
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ],
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "#hover_text",
                  // 목록 데이터를 반복 연결
                  "binding_type": "collection",
                  // 목록 이름
                  "binding_collection_name": "trade2_result_item"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // 계산식/참조 값
                  "source_property_name": "(not (#hover_text = ''))",
                  // 결과가 들어갈 속성
                  "target_property_name": "#visible"
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "hover_button": {
  },

  // ???/?? ??
  "scroll_inner_input_panel/trade_selector_stack_panel": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle"
  },

  // ???/?? ??
  "scroll_inner_input_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%c - 1px" ]
  },

  // ???/?? ??
  "tier_stack_panel/tier_label_holder": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "tier_stack_panel/padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "tier_stack_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [],
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "tier_label_holder",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "tier_title@rainbowpieui_trade2.tier_title": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "trade_toggle_holder": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "trade_toggle": {
    // 오버라이드 가능한 변수
    "$toggle_enabled_binding_type": "none",
    // 오버라이드 가능한 변수
    "$toggle_enabled_binding_name": "none",
    // 오버라이드 가능한 변수
    "$unchecked_control": "rainbowpieui_trade2.trade_toggle_unchecked",
    // 오버라이드 가능한 변수
    "$checked_control": "rainbowpieui_trade2.trade_toggle_checked",
    // 오버라이드 가능한 변수
    "$unchecked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_hover",
    // 오버라이드 가능한 변수
    "$checked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_hover",
    // 오버라이드 가능한 변수
    "$unchecked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_locked",
    // 오버라이드 가능한 변수
    "$unchecked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked"
  },

  // ???/?? ??
  "left_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "trade_scroll_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "common.empty_panel",
    // 오버라이드 가능한 변수
    "$scroll_view_port_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_view_port_offset": [ 0, 0 ],
    // 가로/세로 크기
    "size": [ "100% - 12px", "100% - 5px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0.5 ]
  },

  // ???/?? ??
  "exp_progress_bar/empty_progress_bar/progress_bar_nub": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "blue_progress_bar": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": [ 0.2392156862745098, 0.5686274509803922, 0.6 ],
    // ???
    "alpha": "$rainbowpie_ui_theme_experience_full_alpha"
  },

  // ???/?? ??
  "white_progress_bar": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": [ 1.0, 1.0, 1.0 ],
    // ???
    "alpha": "$rainbowpie_ui_theme_experience_empty_alpha"
  },

  // ???/?? ??
  "empty_progress_bar": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": [ 0.1254901960784314, 0.2509803921568627, 0.2823529411764706 ],
    // ???
    "alpha": "$rainbowpie_ui_theme_experience_empty_alpha"
  },

  // ???/?? ??
  "trade_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "how_to_play_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true,
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$button_text": "?"
  },

  // ???/?? ??
  "arrow_left_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_dark_left_stretch')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "arrow_right_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_dark_right_stretch')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "item_slot": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "screen_stack_panel/toolbar_anchor": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "center_fold": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "villager_name_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "exp_progress_bar": {
    // 가로/세로 크기
    "size": [ "100% - 14px", 3 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 31 ]
  },

  // ???/?? ??
  "top_half_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 25 ]
  },

  // ???/?? ??
  "right_panel/trade_screen_inventory": {
    // 보이기/숨기기(공간 유지)
    "visible": true,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "more_navigation_tab_toggle",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "right_panel/trade_screen_inventory/villager_name_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_panel/common_panel": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background",
    // 오버라이드 가능한 변수
    "$show_close_button": false,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -2 ],
    // 가로/세로 크기
    "size": [ "100% - 8px", "100% - 28px" ]
  },

  // ???/?? ??
  "right_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "variables",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // 이 조건이 맞으면 적용
            "requires": "$rainbowpie_ui_flag_84df7492",
            // 오버라이드 가능한 변수
            "$background_images": "rainbowpie_ui_inventory_and_container.cell_panel"
          }
        ]
      },
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "#name_label",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title_bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "#name_label",
                  // ?? ???
                  "binding_condition": "always_when_visible"
                }
              ],
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_extra_controls": "rainbowpieui_trade2.header_controls"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "trade_screen_more_info@rainbowpieui_trade2.trade_screen_more_info": {}
          }
        ]
      }
    ]
  }
}
```








### 기본
trade_2_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: trade_2_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "trade2_pocket",

  // ???/?? ??
  "right_navigation_tabs/pocket_tab_close_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_navigation_tabs": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "close_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ "100%", 33 ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "close_background@rainbowpie_ui_inventory.header_background": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "right_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 가로/세로 크기
                    "size": [ "100% - 4px", 33 ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "close_button@rainbowpie_ui_common.close_button": {
                          // 오버라이드 가능한 변수
                          "$rainbowpie_ui_theme_closebutton_default_color": "$rainbowpie_ui_theme_inventory_header_title_color",
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 10,
                          // 가로/세로 크기
                          "size": [ "100%", "100%" ],
                          // 기준점에서 이동하는 거리
                          "offset": [ 0, 0 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "center",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "center"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "trade_slots_panel": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_content_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_content_background_alpha"
  },

  // ???/?? ??
  "name_and_trade_slots_stack_panel/exp_progress_bar_holder/exp_progress_bar": {
    // 가로/세로 크기
    "size": [ "100%", 3 ]
  },

  // ???/?? ??
  "inventory_scroll_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "right_panel/content/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  },

  // ???/?? ??
  "left_tab_trade": {
    // 오버라이드 가능한 변수
    "$checked_bar_anchor": "left",
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_image_size": [ "100% - 4px", "100%" ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor": "left_middle",
    // 오버라이드 가능한 변수
    "$tab_content_size": [ "100% - 4px", "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor": "left_middle",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_default_color": "$rainbowpie_ui_theme_inventory_header_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_default_alpha": "$rainbowpie_ui_theme_inventory_header_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_hover_color": "$rainbowpie_ui_theme_inventory_header_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_hover_alpha": 0.4,
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_default_alpha": 0.5,
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_hover_alpha": 0.6
  },

  // ???/?? ??
  "left_tab_inventory": {
    // 오버라이드 가능한 변수
    "$checked_bar_anchor": "left",
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_image_size": [ "100% - 4px", "100%" ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor": "left_middle",
    // 오버라이드 가능한 변수
    "$tab_content_size": [ "100% - 4px", "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor": "left_middle",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_default_color": "$rainbowpie_ui_theme_inventory_header_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_default_alpha": "$rainbowpie_ui_theme_inventory_header_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_hover_color": "$rainbowpie_ui_theme_inventory_header_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_hover_alpha": 0.4,
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_default_alpha": 0.5,
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_hover_alpha": 0.6
  },

  // ???/?? ??
  "left_panel/content/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  }
}
```








### 기본
ui_common.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: ui_common.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "common",

  // ???/?? ??
  "loading_bar_wait_animation": {
    // 걸리는 시간(초)
    "duration": 1.0
  },

  // ???/?? ??
  "loading_bar_fade_animation": {
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time"
  },

  // ???/?? ??
  "static_tooltip_popup_with_image_and_text/image_and_text_stack_panel/tooltip_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_hovertext_text_color"
  },

  // ???/?? ??
  "static_tooltip_popup_with_image_and_text/tooltip_chevron": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "tooltip_background": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_hovertext_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_hovertext_background_alpha"
  },

  // ???/?? ??
  "selected_item_details_factory": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "slot_selected": {
    // 사용할 이미지 경로
    "texture": "textures/ui/focus_border_white",
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "durability_bar": {
    // 오버라이드 가능한 변수
    "$durability_bar_size|default": [ 14, 1.5 ],
    // 오버라이드 가능한 변수
    "$durability_bar_offset|default": [ 0, 6 ],
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ?? ??
      "drop_shadow": false,
      // ?? ??
      "is_durability": true,
      // ?? ??
      "round_value": true
    }
  },

  // ???/?? ??
  "empty_progress_bar": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ???
    "alpha": 0.5
  },

  // ???/?? ??
  "filled_progress_bar": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ???
    "alpha": 0.6
  },

  // ???/?? ??
  "progress_bar": {
    // 가로/세로 크기
    "size": [ 182, 4 ]
  },

  // ???/?? ??
  "progress_bar_for_collections/empty_progress_bar": {
    // ?? (R,G,B,A)
    "color": [ 0.2, 0.2, 0.2 ],
    // ???
    "alpha": 0.75,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "empty_progress_bar@common.empty_progress_bar": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#bar_color",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#color",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$progress_bar_collection"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "highlight_slot_panel/highlight/hover_text": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_86c54726)",
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // 가져올 값 이름
            "binding_name": "#item_durability_total_amount",
            // 목록 데이터를 반복 연결
            "binding_type": "collection",
            // 목록 이름
            "binding_collection_name": "$item_collection_name",
            // 완전히 제거(공간도 없음)
            "ignored": "((not $rainbowpie_ui_feature_inventory_durability) or (not $durability_bar_required))"
          },
          {
            // 가져올 값 이름
            "binding_name": "#item_durability_current_amount",
            // 목록 데이터를 반복 연결
            "binding_type": "collection",
            // 목록 이름
            "binding_collection_name": "$item_collection_name",
            // 완전히 제거(공간도 없음)
            "ignored": "((not $rainbowpie_ui_feature_inventory_durability) or (not $durability_bar_required))"
          },
          {
            // 계산/조건 결과를 연결
            "binding_type": "view",
            // 계산식/참조 값
            "source_property_name": "((#item_durability_current_amount = 0) and (#item_durability_total_amount = 0))",
            // 결과가 들어갈 속성
            "target_property_name": "#visible",
            // 완전히 제거(공간도 없음)
            "ignored": "((not $rainbowpie_ui_feature_inventory_durability) or (not $durability_bar_required))"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "pocket_hotbar_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "pocket_hotbar_panel/hotbar_grid": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "pocket_content_panels/offset_panel/center_bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "inventory_panel_bottom_half_with_label/inventory_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color",
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "inventory_selected_stack_size_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "stack_count_label": {
    // ??
    "font_type": "$rainbowpie_ui_flag_inventory_stack_count_font",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "safezone_inner_matrix/outer_top": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "safezone_background@rainbowpie_ui_common.global_background": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_localui_screenbackground_ingameSafezoneOnly or $rainbowpie_localui_screenbackground_ingamebg_ignored or $rainbowpie_localui_inventory_screen or not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias))",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // ???/?? ??
  "safezone_inner_matrix/outer_bottom": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "safezone_background@rainbowpie_ui_common.global_background": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_localui_screenbackground_ingameSafezoneOnly or $rainbowpie_localui_screenbackground_ingamebg_ignored or $rainbowpie_localui_inventory_screen or not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias))",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // ???/?? ??
  "safezone_outer_matrix/outer_left": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "safezone_background@rainbowpie_ui_common.global_background": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_localui_screenbackground_ingameSafezoneOnly or $rainbowpie_localui_screenbackground_ingamebg_ignored or $rainbowpie_localui_inventory_screen or not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias))",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // ???/?? ??
  "safezone_outer_matrix/outer_right": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "safezone_background@rainbowpie_ui_common.global_background": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_localui_screenbackground_ingameSafezoneOnly or $rainbowpie_localui_screenbackground_ingamebg_ignored or $rainbowpie_localui_inventory_screen or not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias))",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // ???/?? ??
  "container_slot_button_prototype": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "custom_hover_text_control": {
              // 클릭 가능한 버튼
              "type": "button",
              // ?? ??
              "consume_hover_events": false,
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_86c54726)",
              // ?? ??
              "hover_control": "hover_text",
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // ???/?? ??
                  "custom_hover_text": {
                    // 마우스/커서 따라다니는 패널
                    "type": "input_panel",
                    // 보이기/숨기기(공간 유지)
                    "visible": false,
                    // 가로/세로 크기
                    "size": [ "100%", "100%" ],
                    // ??? ?? ?
                    "allow_clipping": false,
                    // ?? ??
                    "follows_cursor": true,
                    // ?? ??
                    "consume_hover_events": false,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // ???/?? ??
                        "hover_text": {
                          // 이미지 표시
                          "type": "image",
                          // 사용할 이미지 경로
                          "texture": "($rainbowpie_ui_path_home + '/r_white')",
                          // 가로/세로 크기
                          "size": [ "100%c + 8px", "100%c + 5px" ],
                          // 기준점에서 이동하는 거리
                          "offset": "$offset",
                          // 오버라이드 가능한 변수
                          "$offset": [ 20, 0 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "top_left",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "top_left",
                          // ?? ????
                          "clips_children": true,
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 200,
                          // ?? (R,G,B,A)
                          "color": "$rainbowpie_ui_theme_hovertext_background_color",
                          // ???
                          "alpha": "$rainbowpie_ui_theme_hovertext_background_alpha",
                          // 이 안에 들어가는 부품 목록
                          "controls": [
                            { "inventory_actions_hover_text@rainbowpie_module_inventory_actions.inventory_actions_hover_text": {} },
                            {
                              // ???/?? ??
                              "background_icon": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "$rainbowpie_ui_theme_hovertext_bgicon_anchor",
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "$rainbowpie_ui_theme_hovertext_bgicon_anchor",
                                // 완전히 제거(공간도 없음)
                                "ignored": "(not $rainbowpie_ui_theme_hovertext_bgicon_enabled)",
                                // ??? ?? ?
                                "allow_clipping": true,
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                  {
                                    // ???/?? ??
                                    "icon_image": {
                                      // 이미지 표시
                                      "type": "image",
                                      // 가로/세로 크기
                                      "size": "$rainbowpie_ui_theme_hovertext_bgicon_size",
                                      // 붙일 위치(어디에 놓을지)
                                      "anchor_to": "$rainbowpie_ui_theme_hovertext_bgicon_anchor",
                                      // 기준점(어디에서 시작할지)
                                      "anchor_from": "$rainbowpie_ui_theme_hovertext_bgicon_anchor",
                                      // 기준점에서 이동하는 거리
                                      "offset": "$rainbowpie_ui_theme_hovertext_bgicon_offset",
                                      // 사용할 이미지 경로
                                      "texture": "$rainbowpie_ui_theme_hovertext_bgicon_texture",
                                      // ???
                                      "alpha": "$rainbowpie_ui_theme_hovertext_bgicon_alpha",
                                      // ?? ??
                                      "fill": "$rainbowpie_ui_theme_hovertext_bgicon_fill",
                                      // 겹치는 순서(숫자 클수록 위)
                                      "layer": 3
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              // ???/?? ??
                              "hover_text_controls": {
                                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                "type": "stack_panel",
                                // 쌓는 방향(가로/세로)
                                "orientation": "vertical",
                                // 가로/세로 크기
                                "size": [ "100%cm", "100%c" ],
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 8,
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                  {
                                    // 다른 템플릿을 가져와서 확장(상속)
                                    "hover_text_label@rainbowpie_ui_common.text_label_notheme": {
                                      // 가로/세로 크기
                                      "size": [ "default", "default" ],
                                      // ?? (R,G,B,A)
                                      "color": "$rainbowpie_ui_theme_hovertext_text_color",
                                      // 보여줄 글자
                                      "text": "#text",
                                      // 게임 값과 연결하는 규칙 목록
                                      "bindings": [
                                        {
                                          // 가져올 값 이름
                                          "binding_name": "#hover_text",
                                          // 가져온 값을 다른 속성으로 연결
                                          "binding_name_override": "#text",
                                          // 목록 데이터를 반복 연결
                                          "binding_type": "collection",
                                          // 목록 이름
                                          "binding_collection_name": "$item_collection_name"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    // ???/?? ??
                                    "durability_panel": {
                                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                      "type": "stack_panel",
                                      // 쌓는 방향(가로/세로)
                                      "orientation": "horizontal",
                                      // 가로/세로 크기
                                      "size": [ "100%c", "100%cm" ],
                                      // 완전히 제거(공간도 없음)
                                      "ignored": "((not $rainbowpie_ui_feature_inventory_durability) or (not $durability_bar_required))",
                                      // 보이기/숨기기(공간 유지)
                                      "visible": false,
                                      // 이 안에 들어가는 부품 목록
                                      "controls": [
                                        {
                                          // 다른 템플릿을 가져와서 확장(상속)
                                          "hover_text_durability_title@rainbowpie_ui_common.text_label_notheme": {
                                            // 가로/세로 크기
                                            "size": [ "default", "default" ],
                                            // ?? (R,G,B,A)
                                            "color": [ 0.0, 0.667, 0 ],
                                            // 보여줄 글자
                                            "text": "rainbowpie.ui.inventory.durability"
                                          }
                                        },
                                        {
                                          // ???/?? ??
                                          "padding": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": [ 1, 0 ]
                                          }
                                        },
                                        {
                                          // 다른 템플릿을 가져와서 확장(상속)
                                          "hover_text_durability_value@rainbowpie_ui_common.text_label_notheme": {
                                            // 가로/세로 크기
                                            "size": [ "default", "default" ],
                                            // ?? (R,G,B,A)
                                            "color": [ 0.0, 0.667, 0 ],
                                            // 보여줄 글자
                                            "text": "#text",
                                            // 이 컨트롤 안에서 쓰는 임시 저장소
                                            "property_bag": {
                                              // ???/??? ?
                                              "#amount_current": 0,
                                              // ???/??? ?
                                              "#amount_total": 0
                                            },
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                              {
                                                // 가져올 값 이름
                                                "binding_name": "#item_durability_total_amount",
                                                // 목록 데이터를 반복 연결
                                                "binding_type": "collection",
                                                // 목록 이름
                                                "binding_collection_name": "$item_collection_name"
                                              },
                                              {
                                                // 가져올 값 이름
                                                "binding_name": "#item_durability_current_amount",
                                                // 목록 데이터를 반복 연결
                                                "binding_type": "collection",
                                                // 목록 이름
                                                "binding_collection_name": "$item_collection_name"
                                              },
                                              {
                                                // 계산/조건 결과를 연결
                                                "binding_type": "view",
                                                // 계산식/참조 값
                                                "source_property_name": "(((#amount_current > #item_durability_current_amount) * - 1 + 1) * ((#amount_current < #item_durability_current_amount) * 1 + #amount_current))",
                                                // 결과가 들어갈 속성
                                                "target_property_name": "#amount_current",
                                                // ?? ???
                                                "binding_condition": "always_when_visible"
                                              },
                                              {
                                                // 계산/조건 결과를 연결
                                                "binding_type": "view",
                                                // 계산식/참조 값
                                                "source_property_name": "(((#amount_total > #item_durability_total_amount) * - 1 + 1) * ((#amount_total < #item_durability_total_amount) * 1 + #amount_total))",
                                                // 결과가 들어갈 속성
                                                "target_property_name": "#amount_total",
                                                // ?? ???
                                                "binding_condition": "always_when_visible"
                                              },
                                              {
                                                // 계산/조건 결과를 연결
                                                "binding_type": "view",
                                                // 계산식/참조 값
                                                "source_property_name": "('\"' + #amount_current + '/' + #amount_total + '\"')",
                                                // 결과가 들어갈 속성
                                                "target_property_name": "#text"
                                              }
                                            ]
                                          }
                                        }
                                      ],
                                      // 게임 값과 연결하는 규칙 목록
                                      "bindings": [
                                        {
                                          // 가져올 값 이름
                                          "binding_name": "#item_durability_total_amount",
                                          // 목록 데이터를 반복 연결
                                          "binding_type": "collection",
                                          // 목록 이름
                                          "binding_collection_name": "$item_collection_name"
                                        },
                                        {
                                          // 가져올 값 이름
                                          "binding_name": "#item_durability_current_amount",
                                          // 목록 데이터를 반복 연결
                                          "binding_type": "collection",
                                          // 목록 이름
                                          "binding_collection_name": "$item_collection_name"
                                        },
                                        {
                                          // 계산/조건 결과를 연결
                                          "binding_type": "view",
                                          // 계산식/참조 값
                                          "source_property_name": "(not ((#item_durability_current_amount = 0) and (#item_durability_total_amount = 0)))",
                                          // 결과가 들어갈 속성
                                          "target_property_name": "#visible"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    // 다른 템플릿을 가져와서 확장(상속)
                                    "hover_text_debug@rainbowpie_ui_common.text_label_notheme": {
                                      // 완전히 제거(공간도 없음)
                                      "ignored": "(not $rainbowpie_ui_flag_inventory_debug)",
                                      // 가로/세로 크기
                                      "size": [ "default", "default" ],
                                      // ?? (R,G,B,A)
                                      "color": [ 0.0, 0.667, 0.667 ],
                                      // 보여줄 글자
                                      "text": "#text",
                                      // 게임 값과 연결하는 규칙 목록
                                      "bindings": [
                                        {
                                          // 가져올 값 이름
                                          "binding_name": "#item_id_aux",
                                          // 목록 데이터를 반복 연결
                                          "binding_type": "collection",
                                          // 목록 이름
                                          "binding_collection_name": "$item_collection_name"
                                        },
                                        {
                                          // 계산/조건 결과를 연결
                                          "binding_type": "view",
                                          // 계산식/참조 값
                                          "source_property_name": "(#item_id_aux / 65536)",
                                          // 결과가 들어갈 속성
                                          "target_property_name": "#item_id"
                                        },
                                        {
                                          // 계산/조건 결과를 연결
                                          "binding_type": "view",
                                          // 계산식/참조 값
                                          "source_property_name": "('item_id_aux: ' + #item_id_aux)",
                                          // 결과가 들어갈 속성
                                          "target_property_name": "#item_id_aux_string"
                                        },
                                        {
                                          // 계산/조건 결과를 연결
                                          "binding_type": "view",
                                          // 계산식/참조 값
                                          "source_property_name": "('item_id: ' + #item_id)",
                                          // 결과가 들어갈 속성
                                          "target_property_name": "#item_id_string"
                                        },
                                        {
                                          // 계산/조건 결과를 연결
                                          "binding_type": "view",
                                          // 계산식/참조 값
                                          "source_property_name": "('item_id_aux(cb): ' + (#item_id * 65536))",
                                          // 결과가 들어갈 속성
                                          "target_property_name": "#item_id_aux_cb_string"
                                        },
                                        {
                                          // 계산/조건 결과를 연결
                                          "binding_type": "view",
                                          // 계산식/참조 값
                                          "source_property_name": "(#item_id_aux_string + '\n' + #item_id_string + '\n' + #item_id_aux_cb_string)",
                                          // 결과가 들어갈 속성
                                          "target_property_name": "#text"
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                      {
                        // 가져올 값 이름
                        "binding_name": "#hover_text",
                        // 목록 데이터를 반복 연결
                        "binding_type": "collection",
                        // 목록 이름
                        "binding_collection_name": "$item_collection_name"
                      },
                      {
                        // 계산/조건 결과를 연결
                        "binding_type": "view",
                        // 계산식/참조 값
                        "source_property_name": "(not (#hover_text = ''))",
                        // 결과가 들어갈 속성
                        "target_property_name": "#visible"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "highlight_slot_panel/highlight": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_highlight_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_highlight_alpha",
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "remove",
        // ???/?? ??
        "where": {
          // 가져온 값을 다른 속성으로 연결
          "binding_name_override": "#visible"
        }
      },
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "hover_text_with_durability@common.hover_text": {
              // 완전히 제거(공간도 없음)
              "ignored": "($rainbowpie_ui_flag_86c54726 or (not $rainbowpie_ui_feature_inventory_durability) or (not $durability_bar_required))",
              // 겹치는 순서(숫자 클수록 위)
              "layer": 29,
              // 오버라이드 가능한 변수
              "$hover_text_binding_name|default": "#hover_text",
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "$hover_text_binding_name",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#hover_text_str",
                  // 목록 데이터를 반복 연결
                  "binding_type": "collection",
                  // 목록 이름
                  "binding_collection_name": "$item_collection_name"
                },
                {
                  // 가져올 값 이름
                  "binding_name": "#item_durability_total_amount",
                  // 목록 데이터를 반복 연결
                  "binding_type": "collection",
                  // 목록 이름
                  "binding_collection_name": "$item_collection_name"
                },
                {
                  // 가져올 값 이름
                  "binding_name": "#item_durability_current_amount",
                  // 목록 데이터를 반복 연결
                  "binding_type": "collection",
                  // 목록 이름
                  "binding_collection_name": "$item_collection_name"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // 계산식/참조 값
                  "source_property_name": "(((#amount_current > #item_durability_current_amount) * - 1 + 1) * ((#amount_current < #item_durability_current_amount) * 1 + #amount_current))",
                  // 결과가 들어갈 속성
                  "target_property_name": "#amount_current",
                  // ?? ???
                  "binding_condition": "always_when_visible"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // 계산식/참조 값
                  "source_property_name": "(((#amount_total > #item_durability_total_amount) * - 1 + 1) * ((#amount_total < #item_durability_total_amount) * 1 + #amount_total))",
                  // 결과가 들어갈 속성
                  "target_property_name": "#amount_total",
                  // ?? ???
                  "binding_condition": "always_when_visible"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // 계산식/참조 값
                  "source_property_name": "(#hover_text_str + '\n§2Durability: ' + #amount_current + '/' + #amount_total)",
                  // 결과가 들어갈 속성
                  "target_property_name": "#hover_text"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // 계산식/참조 값
                  "source_property_name": "(not ((#item_durability_current_amount = 0) and (#item_durability_total_amount = 0)))",
                  // 결과가 들어갈 속성
                  "target_property_name": "#visible"
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "highlight_slot_panel/white_border": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_inventory_cell_highlight_border)",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_highlight_border_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_highlight_border_alpha"
  },

  // ???/?? ??
  "item_renderer": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // 가져올 값 이름
            "binding_name": "#using_touch"
          },
          {
            // 계산/조건 결과를 연결
            "binding_type": "view",
            // 계산식/참조 값
            "source_property_name": "(#fade_in_icon_time_seconds * #using_touch)",
            // 결과가 들어갈 속성
            "target_property_name": "#fade_in_icon_time_seconds",
            // 완전히 제거(공간도 없음)
            "ignored": "$rainbowpie_ui_flag_flying_item_renderer"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "flying_item_renderer": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // 가져올 값 이름
            "binding_name": "#using_touch",
            // 가져온 값을 다른 속성으로 연결
            "binding_name_override": "#visible",
            // 완전히 제거(공간도 없음)
            "ignored": "$rainbowpie_ui_flag_flying_item_renderer"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "inventory_screen_common": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "inventory_screen",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventory_screen": true,
    // ?? ??
    "force_render_below": "$desktop_screen",
    // 오버라이드 가능한 변수
    "$screen_animations|default": [
      "@rainbowpie_ui_animations.container_screen_exit_animation_push",
      "@rainbowpie_ui_animations.container_screen_exit_animation_pop",
      "@rainbowpie_ui_animations.container_screen_entrance_animation_push",
      "@rainbowpie_ui_animations.container_screen_entrance_animation_pop",
      "@common.screen_exit_animation_push_fade",
      "@common.screen_exit_animation_pop_fade",
      "@common.screen_entrance_animation_push_fade",
      "@common.screen_entrance_animation_pop_fade"
    ]
  },

  // ???/?? ??
  "text_edit_box_label": {
    // 오버라이드 가능한 변수
    "$place_holder_text_font_type|default": "default",
    // 오버라이드 가능한 변수
    "$place_holder_text_backup_font_type|default": "default",
    // ??
    "font_type": "$place_holder_text_font_type",
    // ?? ?? ?
    "backup_font_type": "$place_holder_text_backup_font_type"
  },

  // ???/?? ??
  "text_edit_box_place_holder_label": {
    // 오버라이드 가능한 변수
    "$place_holder_text_font_type|default": "default",
    // 오버라이드 가능한 변수
    "$place_holder_text_backup_font_type|default": "default",
    // ??
    "font_type": "$place_holder_text_font_type",
    // ?? ?? ?
    "backup_font_type": "$place_holder_text_backup_font_type"
  },

  // ???/?? ??
  "text_edit_box/centering_panel/clipper_panel/$text_edit_text_control": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_editbox_enabled"
  },

  // ???/?? ??
  "text_edit_box/centering_panel/clipper_panel/visibility_panel/place_holder_control": {
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_editbox_enabled",
        // 오버라이드 가능한 변수
        "$place_holder_text_font_type": "$rainbowpie_ui_theme_global_font_name",
        // 오버라이드 가능한 변수
        "$place_holder_text_backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
        // 오버라이드 가능한 변수
        "$place_holder_text_color": "$rainbowpie_ui_theme_input_placeholder_color"
      }
    ]
  },

  // "text_edit_box/centering_panel/clipper_panel/visibility_panel/place_holder_control": {
  //   "ignored": "$rainbowpie_localui_editbox_enabled"
  // },

  // "text_edit_box/centering_panel/clipper_panel/visibility_panel": {
  //   "modifications": [
  //     {
  //       "array_name": "controls",
  //       "operation": "insert_front",
  //       "value": [
  //         {
  //           "place_holder_control_rainbowpie@common.empty_panel": {
  //             "ignored": "(not $rainbowpie_localui_editbox_enabled)",
  //             "controls": [
  //               {
  //                 "place_holder_control@rainbowpie_ui_common.text_edit_box_place_holder_label": {
  //                   "layer": 1,
  //                   "size": "$placeholder_label_size",
  //                   "offset": "$text_edit_box_label_offset",
  //                   "min_size": "$text_edit_box_label_min_size",
  //                   "anchor_from": "$text_edit_box_label_anchor_point",
  //                   "anchor_to": "$text_edit_box_label_anchor_point",
  //                   "$text_alpha|default": "$alpha",
  //                   "$locked_text_alpha|default": "$disabled_alpha",
  //                   "$locked_color|default": "$disabled_color"
  //                 }
  //               }
  //             ]
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },

  "text_edit_box/centering_panel/clipper_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "text_edit_box_label@common.empty_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_localui_editbox_enabled)",
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "$text_edit_text_control@rainbowpie_ui_common.text_edit_box_label": {
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 1,
                    // 가로/세로 크기
                    "size": "$text_edit_box_label_size",
                    // 기준점에서 이동하는 거리
                    "offset": "$text_edit_box_label_offset",
                    // ?? ?? ?
                    "min_size": "$text_edit_box_label_min_size",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "$text_edit_box_label_anchor_point",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "$text_edit_box_label_anchor_point",
                    // ?? ?? ?
                    "font_size": "$font_size",
                    // 오버라이드 가능한 변수
                    "$text_alpha|default": "$alpha",
                    // 오버라이드 가능한 변수
                    "$locked_text_alpha|default": "$disabled_alpha",
                    // 오버라이드 가능한 변수
                    "$locked_color|default": "$disabled_color"
                  }
                }
              ]
            }
          }

        ]
      }
    ]
  },

  // ???/?? ??
  "text_edit_box/locked": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "replace",
        // ???/?? ??
        "where": {
          // 다른 템플릿을 가져와서 확장(상속)
          "edit_box_indent@$text_background_default": {
            // 오버라이드 가능한 변수
            "$color": "$disabled_color",
            // 오버라이드 가능한 변수
            "$alpha": "$disabled_alpha"
          }
        },
        // ??? ?
        "value": {
          // 다른 템플릿을 가져와서 확장(상속)
          "edit_box_indent@common.empty_panel": {
            // 이 안에 들어가는 부품 목록
            "controls": [
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "edit_box_indent_vanilla@$text_background_default": {
                  // 완전히 제거(공간도 없음)
                  "ignored": "$rainbowpie_localui_editbox_enabled",
                  // 오버라이드 가능한 변수
                  "$color": "$disabled_color",
                  // 오버라이드 가능한 변수
                  "$alpha": "$disabled_alpha"
                }
              },
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "edit_box_indent_rainbowpie@rainbowpie_ui_common.edit_box_indent_locked": {
                  // 완전히 제거(공간도 없음)
                  "ignored": "(not $rainbowpie_localui_editbox_enabled)"
                }
              }
            ]
          }
        }
      }
    ]
  },

  // ???/?? ??
  "text_edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled|default": false,
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "replace",
        // ???/?? ??
        "where": {
          // 다른 템플릿을 가져와서 확장(상속)
          "default@$text_background_default": {}
        },
        // ??? ?
        "value": {
          // 다른 템플릿을 가져와서 확장(상속)
          "default@common.empty_panel": {
            // 이 안에 들어가는 부품 목록
            "controls": [
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "edit_box_indent_vanilla@$text_background_default": {
                  // 완전히 제거(공간도 없음)
                  "ignored": "$rainbowpie_localui_editbox_enabled"
                }
              },
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "edit_box_indent_rainbowpie@rainbowpie_ui_common.edit_box_indent": {
                  // 완전히 제거(공간도 없음)
                  "ignored": "(not $rainbowpie_localui_editbox_enabled)"
                }
              }
            ]
          }
        }
      },
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "replace",
        // ???/?? ??
        "where": {
          // 다른 템플릿을 가져와서 확장(상속)
          "hover@$text_background_hover": {}
        },
        // ??? ?
        "value": {
          // 다른 템플릿을 가져와서 확장(상속)
          "hover@common.empty_panel": {
            // 이 안에 들어가는 부품 목록
            "controls": [
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "edit_box_indent_vanilla@$text_background_hover": {
                  // 완전히 제거(공간도 없음)
                  "ignored": "$rainbowpie_localui_editbox_enabled"
                }
              },
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "edit_box_indent_rainbowpie@rainbowpie_ui_common.edit_box_indent_hover": {
                  // 완전히 제거(공간도 없음)
                  "ignored": "(not $rainbowpie_localui_editbox_enabled)"
                }
              }
            ]
          }
        }
      },
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "replace",
        // ???/?? ??
        "where": {
          // 다른 템플릿을 가져와서 확장(상속)
          "pressed@$text_background_hover": {}
        },
        // ??? ?
        "value": {
          // 다른 템플릿을 가져와서 확장(상속)
          "pressed@common.empty_panel": {
            // 이 안에 들어가는 부품 목록
            "controls": [
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "edit_box_indent_vanilla@$text_background_hover": {
                  // 완전히 제거(공간도 없음)
                  "ignored": "$rainbowpie_localui_editbox_enabled"
                }
              },
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "edit_box_indent_rainbowpie@rainbowpie_ui_common.edit_box_indent_hover": {
                  // 완전히 제거(공간도 없음)
                  "ignored": "(not $rainbowpie_localui_editbox_enabled)"
                }
              }
            ]
          }
        }
      }
    ]
  },

  // ???/?? ??
  "slider_bar_default/transparent_grey": {
    // 가로/세로 크기
    "size": [ "100% - 2px", "100% - 2px" ]
  },

  // ???/?? ??
  "slider": {
    // 오버라이드 가능한 변수
    "$slider_step_factory_control_ids": {
      // ?? ??
      "slider_step": "@rainbowpie_ui_common.slider_step",
      // ?? ??
      "slider_step_hover": "@rainbowpie_ui_common.slider_step_hover",
      // ?? ??
      "slider_step_progress": "@rainbowpie_ui_common.slider_step_progress",
      // ?? ??
      "slider_step_progress_hover": "@rainbowpie_ui_common.slider_step_progress_hover"
    }
  },

  // ???/?? ??
  "slider_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_sliderbar_enabled|default": false,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_sliderbar_enabled",
        // 오버라이드 가능한 변수
        "$slider_box_layout": "rainbowpie_ui_common.slider_button_layout",
        // 오버라이드 가능한 변수
        "$slider_box_hover_layout": "rainbowpie_ui_common.slider_button_hover_layout",
        // 오버라이드 가능한 변수
        "$slider_box_locked_layout": "rainbowpie_ui_common.slider_button_locked_layout",
        // 오버라이드 가능한 변수
        "$slider_box_indent_layout": "rainbowpie_ui_common.slider_button_indent_layout",
        // 오버라이드 가능한 변수
        "$slider_box_size": [ 10, 13 ]
      }
    ]
  },

  // ???/?? ??
  "slider_bar_default": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_sliderbar_enabled|default": false,
    // 가로/세로 크기
    "size": [ "100% + 12px", 15 ],
    // 사용할 이미지 경로
    "texture": "",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_sliderbar_enabled",
        // 오버라이드 가능한 변수
        "$background_control": "rainbowpie_ui_common.slider_background",
        // 오버라이드 가능한 변수
        "$progress_control": "rainbowpie_ui_common.slider_progress"
      }
    ]
  },

  // ???/?? ??
  "slider_bar_hover": {
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_sliderbar_enabled",
        // 오버라이드 가능한 변수
        "$background_control": "rainbowpie_ui_common.slider_background_hover",
        // 오버라이드 가능한 변수
        "$progress_control": "rainbowpie_ui_common.slider_progress_hover"
      }
    ]
  },

  // ???/?? ??
  "scroll_view_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled|default": false,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_scrollbar_enabled",
        // FIX: Vanilla Dropdown background
        // "$scroll_background_image_control": "rainbowpie_ui_controls.scroll_background_image",
        "$scroll_track_image_control": "rainbowpie_ui_controls.scroll_indent_image",
        // 오버라이드 가능한 변수
        "$scroll_box_mouse_image_control": "rainbowpie_ui_controls.scrollbar_box_image"
      }
    ]
  },

  // ???/?? ??
  "scroll_box/box/mouse_box": {
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  // ???/?? ??
  "scroll_box/box/touch_box": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "scrolling_panel/scroll_touch": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "scrolling_panel/scroll_mouse": {
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  // ???/?? ??
  "safe_zone_stack/top_outer_control": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // ???/?? ??
  "safe_zone_stack/top_inner_control": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // ???/?? ??
  "safe_zone_stack/header_bar": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // "safezone_inner_matrix/outer_top/top_side_control": {
  //   "ignored": "$rainbowpie_localui_modified"
  // },

  // "safezone_inner_matrix/inner_top/top_side_control": {
  //   "ignored": "$rainbowpie_localui_modified"
  // },

  "screen_exit_animation_push_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // ???/?? ??
  "screen_exit_animation_pop_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // ???/?? ??
  "screen_entrance_animation_push_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // ???/?? ??
  "screen_entrance_animation_pop_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // ???/?? ??
  "base_screen/variables_button_mappings_and_controls/safezone_screen_matrix": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_backup_screen",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_content|default": "$screen_content"
  },

  // ???/?? ??
  "base_screen/loading_bars_background": {
    // 사용할 이미지 경로
    "texture": "",
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "background": {
              // 이미지 표시
              "type": "image",
              // 사용할 이미지 경로
              "texture": "($rainbowpie_ui_path_home + '/r_white')",
              // ?? (R,G,B,A)
              "color": "$rainbowpie_ui_theme_dialog_background_color",
              // ???
              "alpha": "$rainbowpie_ui_theme_dialog_background_alpha",
              // 가로/세로 크기
              "size": [ "100%", 30 ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "loading_bars@rainbowpie_ui_common.progress_loading_bars": {
                    // 가로/세로 크기
                    "size": [ "100% - 16px", 3 ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 30
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "base_screen/loading_bars_background/loading_bars": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "base_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_overlay_screen|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventory_screen|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingameSafezoneOnly|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingamebg_ignored|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_background_animations|default": [
      "@common.screen_exit_animation_push_fade",
      "@common.screen_exit_animation_pop_fade",
      "@common.screen_entrance_animation_push_fade",
      "@common.screen_entrance_animation_pop_fade"
    ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "null",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias_formatted": "($rainbowpie_localui_screen_alias + ',')",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen_content|default": "common.base_screen_empty_panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_overlay_screen_content|default": "common.base_screen_empty_panel",

    // 오버라이드 가능한 변수
    "$close_on_player_hurt": false,
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "screen_extra_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_background_bsf_need|default": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_background_longer_anim|default": false,
              // 이 안에 들어가는 부품 목록
              "controls": [
                // Fix that blank screen when switching screens
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "background_backup@common.safezone_outer_matrix": {
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_screenroot_ignore_dialogs": true,
                    // 완전히 제거(공간도 없음)
                    "ignored": "((not $is_pregame) or (not $rainbowpie_localui_background_bsf_need) or $rainbowpie_localui_inventory_screen)",
                    // ???
                    "alpha": 0.0,
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": -10,
                    // ??? ?? ?
                    "propagate_alpha": true,
                    // ????? ?? ?
                    "animation_reset_name": "screen_animation_reset",
                    // ????? ?? ?
                    "disable_anim_fast_forward": false,
                    // 애니메이션 목록
                    "anims": [
                      "@rainbowpie_ui_animations.background_exit_animation_push_fade",
                      "@rainbowpie_ui_animations.background_exit_animation_pop_fade",
                      "@rainbowpie_ui_animations.background_entrance_animation_push_fade_long",
                      "@rainbowpie_ui_animations.background_entrance_animation_push_fade",
                      "@rainbowpie_ui_animations.background_entrance_animation_pop_fade"
                    ],
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_screen_content": "rainbowpie_ui_common.screen_background"
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "screen_panel/root_screen_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "screen_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenroot_ignore_dialogs|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_content|default": "$screen_content",
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "screen_debug_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_debug)",
              // 겹치는 순서(숫자 클수록 위)
              "layer": 1000,
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "debug_screen_content@rainbowpie_ui_common.text_label": {
                    // 완전히 제거(공간도 없음)
                    "ignored": "((not $rainbowpie_ui_debug_screen_content) or (not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias)) or ($rainbowpie_localui_screen_content = 'rainbowpie_ui_common.screen_background'))",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_right",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_right",
                    // 보여줄 글자
                    "text": "($screen_content + '\n' + $rainbowpie_localui_backup_screen_content + '\n' + $rainbowpie_localui_overlay_screen_content)"
                  }
                }
              ]
            }
          },
          {
            // ???/?? ??
            "rainbowpie_gamepad_connect_tip": {
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_feature_gamepad_connect_tip) or (not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias)) or ($rainbowpie_localui_screen_content = 'rainbowpie_ui_common.screen_background') or $game_pad)",
              // 이미지 표시
              "type": "image",
              // 사용할 이미지 경로
              "texture": "textures/ui/White",
              // ?? (R,G,B,A)
              "color": "$rainbowpie_ui_theme_toast_background_color",
              // ???
              "alpha": "$rainbowpie_ui_theme_toast_background_alpha",
              // 가로/세로 크기
              "size": [ 180, 30 ],
              // 기준점에서 이동하는 거리
              "offset": [ 0, 22 ],
              // 기준점(어디에서 시작할지)
              "anchor_from": "top_middle",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "top_middle",
              // 겹치는 순서(숫자 클수록 위)
              "layer": 80,
              // 애니메이션 목록
              "anims": [
                // "@rainbowpie_ui_common.rainbowpie_gamepad_connect_tip_anim_start"
              ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // ???/?? ??
                  "section_icon": {
                    // 이미지 표시
                    "type": "image",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "left_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "left_middle",
                    // 기준점에서 이동하는 거리
                    "offset": [ 2, 0 ],
                    // 사용할 이미지 경로
                    "texture": "($rainbowpie_ui_path_theme + '/icon/settings/controls/controller')",
                    // 가로/세로 크기
                    "size": [ "100%y", "100% - 4px" ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 3
                  }
                },
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "title@rainbowpie_ui_common.text_label_notheme": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_left",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_left",
                    // 기준점에서 이동하는 거리
                    "offset": [ 30, 2 ],
                    // 보여줄 글자
                    "text": "rainbowpie.ui.toast.gamepad_connected"
                  }
                }
              ],
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "#is_using_gamepad",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible"
                }
              ]
            }
          },
          { "rainbowpieui_root_screen_panel@$rainbowpie_localui_screen_content": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "screen_panel/popup_dialog_factory": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenroot_ignore_dialogs",
    // ???/?? ??
    "factory_variables": [
      "$rainbowpie_ui_theme_global_font_name",
      "$rainbowpie_ui_theme_global_font_backup_name",
      "$is_pregame"
    ]
  },

  // ???/?? ??
  "base_screen/variables_button_mappings_and_controls/bg_no_safezone_screen_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // ???/?? ??
  "base_screen/variables_button_mappings_and_controls/screen_background": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_modified"
  },

  // ???/?? ??
  "base_screen/variables_button_mappings_and_controls": {
    // Compatibility for servers or other resource packs
    // The variables here will be overwritten when the server loads the resource packs.
    "$is_zeqa|default": -1, // Zeqa Network (Server)
    // 오버라이드 가능한 변수
    "$cubecraft_green|default": -1, // CubeCraft (Server)
    // 오버라이드 가능한 변수
    "$bb_version|default": -1, // Better Bedrock UI (RP)
    // 오버라이드 가능한 변수
    "$dabuui_bool|default": -1, // Dabu UI (RP)
    // 오버라이드 가능한 변수
    "$is_netease|default": -1, // China Version

    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "variables",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 이 조건이 맞으면 적용
            "requires": "($screen_content = 'common.base_screen_empty_panel')",
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_modified": true
          },
          // Zeqa Network
          {
            // 이 조건이 맞으면 적용
            "requires": "(not ($is_zeqa = -1))",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_identifier": "78239b75_zeqa"
          },
          // CubeCraft
          // In CubeCraft's UI resource pack, $cubecraft_green will be overwritten as an array format, which will not be equal to "string"
          {
            // 이 조건이 맞으면 적용
            "requires": "(not ($cubecraft_green = -1))",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_identifier": "d29f22ac_cubecraft"
          },
          // The Hive UI
          // This method may result in false positives, but it is the only way to detect
          {
            // 이 조건이 맞으면 적용
            "requires": "((($transition_time_push_size * 1000) = 150) and (($transition_time_pop_size * 1000) = 150) and (($transition_time_push * 1000) = 150) and (($transition_time_pop * 1000) = 150) and (($container_transition_time_push * 1000) = 150) and (($container_transition_time_pop * 1000) = 150))",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_identifier": "290b8fe4_hivebedrock"
          },
          // Better Bedrock UI
          {
            // 이 조건이 맞으면 적용
            "requires": "(not ($bb_version = -1))",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_resourcepack_identifier": "d5e1b7c2_betterbedrock"
          },
          // Dabu UI
          {
            // 이 조건이 맞으면 적용
            "requires": "(not ($dabuui_bool = -1))"//,
            // "$rainbowpie_ui_flag_resourcepack_identifier": "c740985b_dabuui"
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_localui_modified and not $rainbowpie_localui_inventory_screen)",
            // 오버라이드 가능한 변수
            "$transition_time_push": "$rainbowpie_ui_animation_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_pop": "$rainbowpie_ui_animation_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_push_size": "$rainbowpie_ui_animation_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_pop_size": "$rainbowpie_ui_animation_transition_time",
            // 오버라이드 가능한 변수
            "$container_transition_time_push": "$rainbowpie_ui_animation_transition_time",
            // 오버라이드 가능한 변수
            "$container_transition_time_pop": "$rainbowpie_ui_animation_transition_time"
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_localui_modified and $rainbowpie_localui_inventory_screen and $rainbowpie_ui_flag_84df7492)",
            // 오버라이드 가능한 변수
            "$transition_time_push": "$rainbowpie_ui_animation_container_v2_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_pop": "$rainbowpie_ui_animation_container_v2_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_push_size": "$rainbowpie_ui_animation_container_v2_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_pop_size": "$rainbowpie_ui_animation_container_v2_transition_time",
            // 오버라이드 가능한 변수
            "$container_transition_time_push": "$rainbowpie_ui_animation_container_v2_transition_time",
            // 오버라이드 가능한 변수
            "$container_transition_time_pop": "$rainbowpie_ui_animation_container_v2_transition_time"
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_localui_modified and $rainbowpie_localui_inventory_screen and not $rainbowpie_ui_flag_84df7492)",
            // 오버라이드 가능한 변수
            "$transition_time_push": "$rainbowpie_ui_animation_container_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_pop": "$rainbowpie_ui_animation_container_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_push_size": "$rainbowpie_ui_animation_container_transition_time",
            // 오버라이드 가능한 변수
            "$transition_time_pop_size": "$rainbowpie_ui_animation_container_transition_time",
            // 오버라이드 가능한 변수
            "$container_transition_time_push": "$rainbowpie_ui_animation_container_transition_time",
            // 오버라이드 가능한 변수
            "$container_transition_time_pop": "$rainbowpie_ui_animation_container_transition_time"
          }
        ]
      },
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "safezone_screen_backup_matrix@common.safezone_outer_matrix": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_screen_content": "$rainbowpie_localui_backup_screen_content",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_localui_backup_screen)",
              // 애니메이션 목록
              "anims": "$screen_animations",
              // ????? ?? ?
              "animation_reset_name": "screen_animation_reset",
              // ??? ?? ?
              "propagate_alpha": true,
              // ????? ?? ?
              "disable_anim_fast_forward": true,
              // 겹치는 순서(숫자 클수록 위)
              "layer": "$safezone_screen_matrix_layer"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "safezone_screen_overlay_matrix@common.safezone_outer_matrix": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_screenroot_ignore_dialogs": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_screen_content": "$rainbowpie_localui_overlay_screen_content",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_localui_overlay_screen)",
              // 애니메이션 목록
              "anims": "$screen_animations",
              // ????? ?? ?
              "animation_reset_name": "screen_animation_reset",
              // ??? ?? ?
              "propagate_alpha": true,
              // ????? ?? ?
              "disable_anim_fast_forward": true,
              // 겹치는 순서(숫자 클수록 위)
              "layer": "($safezone_screen_matrix_layer + 150)"
            }
          }
        ]
      },
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "rainbowpieui_screen_background_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 완전히 제거(공간도 없음)
              "ignored": "((not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias)) or ($screen_content = 'rainbowpie_ui_common.screen_background'))",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_dialog_ignored": true,
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // ???/?? ??
                  "debug_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_debug)",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 1000,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // ???/?? ??
                        "debug_screen_animation": {
                          // 패널: 다른 부품을 담는 바닥판
                          "type": "panel",
                          // 완전히 제거(공간도 없음)
                          "ignored": "((not $rainbowpie_ui_debug_screen_animation) or (not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias)))",
                          // 이 안에 들어가는 부품 목록
                          "controls": [
                            {
                              // ???/?? ??
                              "debug_screen_animation_dialog": {
                                // 마우스/커서 따라다니는 패널
                                "type": "input_panel",
                                // 가로/세로 크기
                                "size": [ 120, "100%c" ],
                                // 기준점에서 이동하는 거리
                                "offset": [ 0, 14 ],
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "top_right",
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "top_right",
                                // ??? ??
                                "draggable": "both",
                                // 입력 키/버튼과 동작 연결
                                "button_mappings": [
                                  {
                                    // 어떤 입력을 받을지
                                    "from_button_id": "button.menu_select",
                                    // 어떤 동작을 실행할지
                                    "to_button_id": "button.menu_select",
                                    // 입력 시점(pressed 등)
                                    "mapping_type": "pressed"
                                  }
                                ],
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                  {
                                    // 다른 템플릿을 가져와서 확장(상속)
                                    "title_background@rainbowpie_ui_dialog.header_background": {
                                      // 가로/세로 크기
                                      "size": [ "100%", 23 ],
                                      // 붙일 위치(어디에 놓을지)
                                      "anchor_to": "top_middle",
                                      // 기준점(어디에서 시작할지)
                                      "anchor_from": "top_middle",
                                      // ?? (R,G,B,A)
                                      "color": "$rainbowpie_ui_theme_dialog_background_color",
                                      // ???
                                      "alpha": "$rainbowpie_ui_theme_dialog_background_alpha",
                                      // 이 안에 들어가는 부품 목록
                                      "controls": [
                                        {
                                          // 다른 템플릿을 가져와서 확장(상속)
                                          "title_label@rainbowpie_ui_common.title_label": {
                                            // 가로/세로 크기
                                            "size": [ "default", "default" ],
                                            // 붙일 위치(어디에 놓을지)
                                            "anchor_to": "center",
                                            // 기준점(어디에서 시작할지)
                                            "anchor_from": "center",
                                            // 보여줄 글자
                                            "text": "SCREEN ANIMATION DEBUG",
                                            // 겹치는 순서(숫자 클수록 위)
                                            "layer": 10
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    // ???/?? ??
                                    "content_panel": {
                                      // 마우스/커서 따라다니는 패널
                                      "type": "input_panel",
                                      // 가로/세로 크기
                                      "size": [ "100%", "100%c" ],
                                      // 붙일 위치(어디에 놓을지)
                                      "anchor_to": "bottom_middle",
                                      // 기준점(어디에서 시작할지)
                                      "anchor_from": "bottom_middle",
                                      // 이 안에 들어가는 부품 목록
                                      "controls": [
                                        {
                                          // 다른 템플릿을 가져와서 확장(상속)
                                          "title_background@rainbowpie_ui_dialog.header_background": {
                                            // 가로/세로 크기
                                            "size": [ "100%", "100%c + 0.5px" ],
                                            // 이 안에 들어가는 부품 목록
                                            "controls": [
                                              {
                                                // ???/?? ??
                                                "button_panel": {
                                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                                  "type": "stack_panel",
                                                  // 가로/세로 크기
                                                  "size": [ "100%", "100%c" ],
                                                  // 붙일 위치(어디에 놓을지)
                                                  "anchor_to": "bottom_middle",
                                                  // 기준점(어디에서 시작할지)
                                                  "anchor_from": "bottom_middle",
                                                  // 이 안에 들어가는 부품 목록
                                                  "controls": [
                                                    {
                                                      // 다른 템플릿을 가져와서 확장(상속)
                                                      "screen_animation_reset@common_buttons.light_text_button": {
                                                        // 오버라이드 가능한 변수
                                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                                        // 오버라이드 가능한 변수
                                                        "$pressed_button_name": "screen_animation_reset",
                                                        // 오버라이드 가능한 변수
                                                        "$button_text": "screen_animation_reset",
                                                        // 가로/세로 크기
                                                        "size": [ 120, 18 ]
                                                      }
                                                    },
                                                    {
                                                      // 다른 템플릿을 가져와서 확장(상속)
                                                      "screen.exit_push@common_buttons.light_text_button": {
                                                        // 오버라이드 가능한 변수
                                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                                        // 오버라이드 가능한 변수
                                                        "$pressed_button_name": "screen.exit_push",
                                                        // 오버라이드 가능한 변수
                                                        "$button_text": "screen.exit_push",
                                                        // 가로/세로 크기
                                                        "size": [ 120, 18 ]
                                                      }
                                                    },
                                                    {
                                                      // 다른 템플릿을 가져와서 확장(상속)
                                                      "screen.exit_pop@common_buttons.light_text_button": {
                                                        // 오버라이드 가능한 변수
                                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                                        // 오버라이드 가능한 변수
                                                        "$pressed_button_name": "screen.exit_pop",
                                                        // 오버라이드 가능한 변수
                                                        "$button_text": "screen.exit_pop",
                                                        // 가로/세로 크기
                                                        "size": [ 120, 18 ]
                                                      }
                                                    },
                                                    {
                                                      // 다른 템플릿을 가져와서 확장(상속)
                                                      "screen.entrance_push@common_buttons.light_text_button": {
                                                        // 오버라이드 가능한 변수
                                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                                        // 오버라이드 가능한 변수
                                                        "$pressed_button_name": "screen.entrance_push",
                                                        // 오버라이드 가능한 변수
                                                        "$button_text": "screen.entrance_push",
                                                        // 가로/세로 크기
                                                        "size": [ 120, 18 ]
                                                      }
                                                    },
                                                    {
                                                      // 다른 템플릿을 가져와서 확장(상속)
                                                      "screen.entrance_pop@common_buttons.light_text_button": {
                                                        // 오버라이드 가능한 변수
                                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                                        // 오버라이드 가능한 변수
                                                        "$pressed_button_name": "screen.entrance_pop",
                                                        // 오버라이드 가능한 변수
                                                        "$button_text": "screen.entrance_pop",
                                                        // 가로/세로 크기
                                                        "size": [ 120, 18 ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "rainbowpieui_screen_background@common.safezone_outer_matrix": {
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_screenroot_ignore_dialogs": true,
                    // 애니메이션 목록
                    "anims": "$rainbowpie_localui_background_animations",
                    // ????? ?? ?
                    "animation_reset_name": "screen_animation_reset",
                    // ??? ?? ?
                    "propagate_alpha": true,
                    // ????? ?? ?
                    "disable_anim_fast_forward": true,
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": "($safezone_screen_matrix_layer - 10)",
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_screen_content": "rainbowpie_ui_common.screen_background"
                  }
                },
                {
                  // ???/?? ??
                  "ingame_background_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 완전히 제거(공간도 없음)
                    "ignored": "($rainbowpie_localui_screenbackground_ingameSafezoneOnly or $rainbowpie_localui_screenbackground_ingamebg_ignored or $rainbowpie_localui_inventory_screen or $is_pregame or not (($rainbowpie_ui_flag_overlay_screen_alias - $rainbowpie_localui_screen_alias_formatted) = $rainbowpie_ui_flag_overlay_screen_alias))",
                    // 애니메이션 목록
                    "anims": "$rainbowpie_localui_background_animations",
                    // ????? ?? ?
                    "animation_reset_name": "screen_animation_reset",
                    // ??? ?? ?
                    "propagate_alpha": true,
                    // ????? ?? ?
                    "disable_anim_fast_forward": true,
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": -1,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // ???/?? ??
                        "gradient_top": {
                          // 특수 렌더러(그라디언트/플레이어 등)
                          "type": "custom",
                          // 커스텀 렌더러 종류
                          "renderer": "gradient_renderer",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_ui_flag_ingamebackground_gradient)",
                          // 가로/세로 크기
                          "size": [ "100%", 30 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "top_middle",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "top_middle",
                          // ?? ?? ?
                          "color1": [ 0.0, 0.0, 0.0, 0.5 ],
                          // ?? ?? ?
                          "color2": [ 0.0, 0.0, 0.0, 0.0 ],
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 2
                        }
                      },
                      {
                        // ???/?? ??
                        "design02_gradient_bottom": {
                          // 특수 렌더러(그라디언트/플레이어 등)
                          "type": "custom",
                          // 커스텀 렌더러 종류
                          "renderer": "gradient_renderer",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_ui_flag_ingamebackground_gradient)",
                          // 가로/세로 크기
                          "size": [ "100%", 30 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "bottom_middle",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "bottom_middle",
                          // ?? ?? ?
                          "color1": [ 0.0, 0.0, 0.0, 0.0 ],
                          // ?? ?? ?
                          "color2": [ 0.0, 0.0, 0.0, 0.5 ],
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 2
                        }
                      },
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "background@rainbowpie_ui_common.global_background": {
                          // 가로/세로 크기
                          "size": [ "100%", "100%" ]
                        }
                      }
                    ]
                  }
                },
                {
                  // ???/?? ??
                  "inventory_background_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_localui_inventory_screen or $is_pregame)",
                    // 애니메이션 목록
                    "anims": "$rainbowpie_localui_background_animations",
                    // ????? ?? ?
                    "animation_reset_name": "screen_animation_reset",
                    // ??? ?? ?
                    "propagate_alpha": true,
                    // ????? ?? ?
                    "disable_anim_fast_forward": true,
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": -1,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // ???/?? ??
                        "gradient_top": {
                          // 특수 렌더러(그라디언트/플레이어 등)
                          "type": "custom",
                          // 커스텀 렌더러 종류
                          "renderer": "gradient_renderer",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_ui_flag_inventorybackground_gradient)",
                          // 가로/세로 크기
                          "size": [ "100%", 30 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "top_middle",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "top_middle",
                          // ?? ?? ?
                          "color1": [ 0.0, 0.0, 0.0, 0.5 ],
                          // ?? ?? ?
                          "color2": [ 0.0, 0.0, 0.0, 0.0 ],
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 2
                        }
                      },
                      {
                        // ???/?? ??
                        "design02_gradient_bottom": {
                          // 특수 렌더러(그라디언트/플레이어 등)
                          "type": "custom",
                          // 커스텀 렌더러 종류
                          "renderer": "gradient_renderer",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_ui_flag_inventorybackground_gradient)",
                          // 가로/세로 크기
                          "size": [ "100%", 30 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "bottom_middle",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "bottom_middle",
                          // ?? ?? ?
                          "color1": [ 0.0, 0.0, 0.0, 0.0 ],
                          // ?? ?? ?
                          "color2": [ 0.0, 0.0, 0.0, 0.5 ],
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 2
                        }
                      },
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "inventory_background@rainbowpie_ui_common.inventory_global_background": {
                          // 가로/세로 크기
                          "size": [ "100%", "100%" ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      {
        // ?? ?? ??
        "array_name": "variables",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'windows')",
            // Windows variables
            "$microsoft_os": true,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": true,
            // 오버라이드 가능한 변수
            "$win10_edition": true,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": false,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": false,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'windows_arm')",
            // Windows variables
            "$microsoft_os": true,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": true,
            // 오버라이드 가능한 변수
            "$win10_edition": true,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": true,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": false,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": false,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'windows_mobile')",
            // Windows variables
            "$microsoft_os": true,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": true,
            // 오버라이드 가능한 변수
            "$win10_edition": true,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": true,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": false,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": false,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'android')",
            // Windows variables
            "$microsoft_os": false,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": false,
            // 오버라이드 가능한 변수
            "$win10_edition": false,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": true,
            // 오버라이드 가능한 변수
            "$is_android": true,
            // Apple variables
            "$apple_os": false,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": false,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'apple_ios')",
            // Windows variables
            "$microsoft_os": false,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": false,
            // 오버라이드 가능한 변수
            "$win10_edition": false,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": true,
            // 오버라이드 가능한 변수
            "$ios": true,
            // 오버라이드 가능한 변수
            "$is_ios": true,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": false,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'apple_osx')",
            // Windows variables
            "$microsoft_os": false,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": false,
            // 오버라이드 가능한 변수
            "$win10_edition": false,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": true,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": true,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": false,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'apple_tv')",
            // Windows variables
            "$microsoft_os": false,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": false,
            // 오버라이드 가능한 변수
            "$win10_edition": false,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": true,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": true,
            // Console variables
            "$is_console": false,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'console')",
            // Windows variables
            "$microsoft_os": false,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": false,
            // 오버라이드 가능한 변수
            "$win10_edition": false,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": false,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": true,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'console_xboxone')",
            // Windows variables
            "$microsoft_os": true,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": false,
            // 오버라이드 가능한 변수
            "$win10_edition": true,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": false,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": true,
            // 오버라이드 가능한 변수
            "$xbox_one": true,
            // 오버라이드 가능한 변수
            "$is_ps4": false,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_device_override = 'console_ps4')",
            // Windows variables
            "$microsoft_os": false,
            // 오버라이드 가능한 변수
            "$build_platform_UWP": false,
            // 오버라이드 가능한 변수
            "$win10_edition": false,
            // 오버라이드 가능한 변수
            "$is_windows_10_mobile": false,
            // 오버라이드 가능한 변수
            "$is_win10_arm": false,
            // Android variables
            "$google_os": false,
            // 오버라이드 가능한 변수
            "$is_android": false,
            // Apple variables
            "$apple_os": false,
            // 오버라이드 가능한 변수
            "$ios": false,
            // 오버라이드 가능한 변수
            "$is_ios": false,
            // 오버라이드 가능한 변수
            "$osx_edition": false,
            // 오버라이드 가능한 변수
            "$apple_tv": false,
            // Console variables
            "$is_console": true,
            // 오버라이드 가능한 변수
            "$xbox_one": false,
            // 오버라이드 가능한 변수
            "$is_ps4": true,
            // Other idk variables
            "$nx_os": false,
            // 오버라이드 가능한 변수
            "$is_settopbox": false,
            // 오버라이드 가능한 변수
            "$fire_tv": false,
            // 오버라이드 가능한 변수
            "$is_mobile_vr": false,
            // 오버라이드 가능한 변수
            "$gear_vr": false,
            // 오버라이드 가능한 변수
            "$is_holographic": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_input_override = 'touch')",
            // 오버라이드 가능한 변수
            "$touch": true,
            // 오버라이드 가능한 변수
            "$mouse": false,
            // 오버라이드 가능한 변수
            "$game_pad": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_input_override = 'mouse')",
            // 오버라이드 가능한 변수
            "$touch": false,
            // 오버라이드 가능한 변수
            "$mouse": true,
            // 오버라이드 가능한 변수
            "$game_pad": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_debug_ui_input_override = 'game_pad')",
            // 오버라이드 가능한 변수
            "$touch": false,
            // 오버라이드 가능한 변수
            "$mouse": false,
            // 오버라이드 가능한 변수
            "$game_pad": true
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "$rainbowpie_ui_debug_ui_debug",
            // 오버라이드 가능한 변수
            "$debug_settings": true,
            // 오버라이드 가능한 변수
            "$is_publish": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "$rainbowpie_ui_debug_ui_var_override",
            // 오버라이드 가능한 변수
            "$file_picking_supported": "$rainbowpie_ui_debug_ui_var_override_file_picking_supported",
            // 오버라이드 가능한 변수
            "$world_archive_support": "$rainbowpie_ui_debug_ui_var_override_world_archive_support",
            // 오버라이드 가능한 변수
            "$is_low_memory_device": "$rainbowpie_ui_debug_ui_var_override_is_low_memory_device",
            // 오버라이드 가능한 변수
            "$pre_release": "$rainbowpie_ui_debug_ui_var_override_pre_release",
            // 오버라이드 가능한 변수
            "$trial": "$rainbowpie_ui_debug_ui_var_override_trial",
            // 오버라이드 가능한 변수
            "$is_publish": "$rainbowpie_ui_debug_ui_var_override_is_publish",
            // 오버라이드 가능한 변수
            "$education_edition": "$rainbowpie_ui_debug_ui_var_override_education_edition"
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "$rainbowpie_ui_flag_disable_spatial_pattern_fix",
            // 오버라이드 가능한 변수
            "$settings_spatial_pattern_fix_enabled": false
          },
          // 对部分不同的场景优化
          {
            // 이 조건이 맞으면 적용
            "requires": "$is_low_memory_device",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_feature_background_mask": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_feature_background_blur": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "(($is_android or $is_ios) and $rainbowpie_ui_flag_86c54726)",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_86c54726": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "(($rainbowpie_localui_screen_alias = 'server_form') and $game_pad)",
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_backup_screen": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "$touch",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_5e1f3f4e": false
          },
          // Force use Rainbow Pie UI style server_form
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_server_form_force and ($rainbowpie_localui_screen_alias = 'server_form'))",
            // 오버라이드 가능한 변수
            "$screen_content": "rainbowpieui_server_form.main_screen_content",
            // 오버라이드 가능한 변수
            "$screen_animations": [
              "@common.screen_exit_animation_push_offset",
              "@common.screen_exit_animation_pop_offset",
              "@common.screen_entrance_animation_push_offset",
              "@common.screen_entrance_animation_pop_offset",
              "@common.screen_exit_animation_push_fade",
              "@common.screen_exit_animation_pop_fade",
              "@common.screen_entrance_animation_push_fade",
              "@common.screen_entrance_animation_pop_fade"
            ],
            // 오버라이드 가능한 변수
            "$background_animations": [
              "@common.screen_exit_animation_push_alpha",
              "@common.screen_exit_animation_pop_alpha",
              "@common.screen_entrance_animation_push_alpha",
              "@common.screen_entrance_animation_pop_alpha"
            ]
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "$rainbowpie_ui_debug_ui_new_video_settings",
            // 오버라이드 가능한 변수
            "$new_video_settings": true
          },
          // settings ui
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_localui_screen_alias = 'settings')",
            // 오버라이드 가능한 변수
            "$export_template_disabled": false
          },
          // Force disable rainbowpie_ui_flag_hud_hotbar_mode 2
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_hud_hotbar_mode = 2)",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_hud_hotbar_mode": 1
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_hud_hotbar_mode > 3)",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_hud_hotbar_mode": 0
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "(($rainbowpie_localui_screen_alias = 'hud') and (not ($screen_content = 'hud.hud_content')))",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_hud_hotbar_mode": 0,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_6d2ac350": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_0ffd0593": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_111d8c96 and not $mouse)",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_111d8c96": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "(not $rainbowpie_ui_flag_8dcce82d)",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_8dcce82d": true
          },
          // Zeqa Network
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_server_identifier = '78239b75_zeqa')",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_identifier": "78239b75_zeqa",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_displayname": "Zeqa Network",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_notification_features_disabled": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_notification_features_disabled_reason": "server",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_enabled": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_logo_name": "zeqa",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_server_name": "Zeqa Network",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_link_website": "http://store.zeqa.net",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_description": "©Zeqa Network",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_custom_server_icon": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_custom_server_icon_name": "zeqa",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_56cd0456": true, // PauseUI Back To Vanilla Button
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_scoreboard_default_font": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_hudbossname_default_font": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_module_chest_fastpick": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_chatui_default_font": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_hudtitle_default_font": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_19efcc11": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_9ce040c1": false
          },
          // CubeCraft
          {
           // 이 조건이 맞으면 적용
           "requires": "($rainbowpie_ui_flag_server_identifier = 'd29f22ac_cubecraft')",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_identifier": "d29f22ac_cubecraft",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_displayname": "CubeCraft Games",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_notification_features_disabled": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_notification_features_disabled_reason": "server",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_enabled": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_logo_name": "cubecraft",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_server_name": "CubeCraft",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_link_website": "https://cubecraft.net",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_link_support": "https://help.cubecraft.net",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_description": "© ZIAX LTD 2025",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_custom_server_icon": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_custom_server_icon_name": "cubecraft",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_scoreboard_default_font": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_module_chest_fastpick": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_19efcc11": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_9ce040c1": false
          },
          // The Hive
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_server_identifier = '290b8fe4_hivebedrock')",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_identifier": "290b8fe4_hivebedrock",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_displayname": "The Hive",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_notification_features_disabled": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_notification_features_disabled_reason": "server",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_enabled": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_logo_name": "hivebedrock",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_server_name": "The Hive",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_link_website": "https://playhive.com",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_link_support": "https://support.playhive.com",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_server_infomation_description": "Hive Games © 2025",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_custom_server_icon": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_custom_server_icon_name": "hivebedrock",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_module_chest_fastpick": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_19efcc11": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_9ce040c1": false
          },
          // Better Bedrock UI
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_resourcepack_identifier = 'd5e1b7c2_betterbedrock')",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_resourcepack_identifier": "d5e1b7c2_betterbedrock",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_resourcepack_displayname": "Better Bedrock UI",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_notification_features_disabled": true,
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_notification_features_disabled_reason": "resourcepack"
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "(($rainbowpie_ui_flag_resourcepack_identifier = 'd5e1b7c2_betterbedrock') and $rainbowpie_ui_compatibility_var_override_d5e1b7c2)",
            // 오버라이드 가능한 변수
            "$cps_counter_x_offset": 0,
            // 오버라이드 가능한 변수
            "$cps_counter_y_offset": 6,
            // 오버라이드 가능한 변수
            "$day_time_viewer_x_offset": 0,
            // 오버라이드 가능한 변수
            "$day_time_viewer_y_offset": 2,
            // 오버라이드 가능한 변수
            "$speed_counter_x_offset": 0,
            // 오버라이드 가능한 변수
            "$speed_counter_y_offset": 4,
            // 오버라이드 가능한 변수
            "$tab_list": false,
            // 오버라이드 가능한 변수
            "$durability_viewer": false,
            // 오버라이드 가능한 변수
            "$crosshair_item_count": false,
            // 오버라이드 가능한 변수
            "$session_timer_x_offset": 0,
            // 오버라이드 가능한 변수
            "$session_timer_y_offset": 0,
            // 오버라이드 가능한 변수
            "$chat": false,
            // 오버라이드 가능한 변수
            "$coords": false,
            // 오버라이드 가능한 변수
            "$nether_coords_x_offset": 0,
            // 오버라이드 가능한 변수
            "$nether_coords_y_offset": 4,
            // 오버라이드 가능한 변수
            "$days_played": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "(($rainbowpie_ui_flag_resourcepack_identifier = 'd5e1b7c2_betterbedrock') and (not ($rainbowpie_ui_flag_hud_hotbar_mode = 0)))",
            // 오버라이드 가능한 변수
            "$editor_hotbars_show_default_layout": false,
            // 오버라이드 가능한 변수
            "$editor_hotbar_elements_icons_and_factories_vertical_padding_size": 14,
            // 오버라이드 가능한 변수
            "$editor_hotbar_elements_xp_bar_show_element": false
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "(($rainbowpie_ui_flag_resourcepack_identifier = 'd5e1b7c2_betterbedrock') and ($screen_content = 'hud.hud_content'))",
            // 오버라이드 가능한 변수
            "$use_loading_bars": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_screen_watermark": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_modified": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_screen_alias": "hud",
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_screen_alias_formatted": "hud,"
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "(($rainbowpie_ui_flag_resourcepack_identifier = 'd5e1b7c2_betterbedrock') and ($screen_content = 'bb_pause.main'))",
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_modified": false,
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_screen_alias": "pause",
            // 오버라이드 가능한 변수
            "$rainbowpie_localui_screenbackground_ingamebg_ignored": true
          },
          // Dabu UI
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_resourcepack_identifier = 'c740985b_dabuui')",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_resourcepack_identifier": "c740985b_dabuui",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_resourcepack_displayname": "护眼大补丸"
          },
          // China Version
          {
            // 이 조건이 맞으면 적용
            "requires": "($rainbowpie_ui_flag_resourcepack_identifier = '5c1c3f14_netease')",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_resourcepack_identifier": "5c1c3f14_netease",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_flag_resourcepack_displayname": "Netease",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_name": "unicode"
          }
        ]
      }
    ]
  }
}
```








### 기본
ui_template_tabs.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: ui_template_tabs.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "common_tabs",

  // ???/?? ??
  "base_tab": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_text_unchecked_default_color|default": "$rainbowpie_ui_theme_toggle_text_default_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_text_unchecked_hover_color|default": "$rainbowpie_ui_theme_toggle_text_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_text_unchecked_locked_color|default": "$rainbowpie_ui_theme_toggle_text_locked_checked_color",

    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_text_checked_default_color|default": "$rainbowpie_ui_theme_toggle_text_checked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_text_checked_hover_color|default": "$rainbowpie_ui_theme_toggle_text_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_text_checked_locked_color|default": "$rainbowpie_ui_theme_toggle_text_locked_checked_color",

    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_default_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_hover_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_locked_color|default": "$rainbowpie_ui_theme_toggle_background_locked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_default_color|default": "$rainbowpie_ui_theme_toggle_background_checked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_hover_color|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_locked_color|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_color",

    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_default_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_hover_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_locked_alpha|default": "$rainbowpie_ui_theme_toggle_background_locked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_default_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_hover_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_locked_alpha|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_alpha"
  },

  // ???/?? ??
  "base_tab/$tab_view_binding_name/unchecked": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_color": "$rainbowpie_toggle_unchecked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_alpha": "$rainbowpie_toggle_unchecked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color": "$rainbowpie_toggle_text_unchecked_default_color"
  },

  // ???/?? ??
  "base_tab/$tab_view_binding_name/unchecked_hover": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_color": "$rainbowpie_toggle_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_alpha": "$rainbowpie_toggle_unchecked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color": "$rainbowpie_toggle_text_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$hover_state": true
  },

  // ???/?? ??
  "base_tab/$tab_view_binding_name/unchecked_locked": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_color": "$rainbowpie_toggle_unchecked_locked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_alpha": "$rainbowpie_toggle_unchecked_locked_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color": "$rainbowpie_toggle_text_unchecked_locked_color"
  },

  // ???/?? ??
  "base_tab/$tab_view_binding_name/unchecked_locked_hover": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_color": "$rainbowpie_toggle_unchecked_locked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_alpha": "$rainbowpie_toggle_unchecked_locked_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color": "$rainbowpie_toggle_text_unchecked_locked_color",
    // 오버라이드 가능한 변수
    "$hover_state": true
  },

  // ???/?? ??
  "base_tab/$tab_view_binding_name/checked": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_color": "$rainbowpie_toggle_checked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_alpha": "$rainbowpie_toggle_checked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color": "$rainbowpie_toggle_text_checked_default_color"
  },

  // ???/?? ??
  "base_tab/$tab_view_binding_name/checked_hover": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_color": "$rainbowpie_toggle_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_alpha": "$rainbowpie_toggle_checked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color": "$rainbowpie_toggle_text_checked_hover_color",
    // 오버라이드 가능한 변수
    "$hover_state": true
  },

  // ???/?? ??
  "base_tab/$tab_view_binding_name/checked_locked": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_color": "$rainbowpie_toggle_checked_locked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_alpha": "$rainbowpie_toggle_checked_locked_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color": "$rainbowpie_toggle_text_checked_locked_color"
  },

  // ???/?? ??
  "base_tab/$tab_view_binding_name/checked_locked_hover": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_color": "$rainbowpie_toggle_checked_locked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_alpha": "$rainbowpie_toggle_checked_locked_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color": "$rainbowpie_toggle_text_checked_locked_color",
    // 오버라이드 가능한 변수
    "$hover_state": true
  }
}
```








### 기본
win10_trial_conversion_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: win10_trial_conversion_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "win10_trial_conversion"
}
```








### 기본
world_templates_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: world_templates_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "world_templates",

  // ???/?? ??
  "world_templates_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "world_templates",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_world_templates.world_templates_picker_content"
  },

  // ???/?? ??
  "generate_random_button": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "world_template_screen_content_stack_panel/generate_random_button_bottom_padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "world_list_grids_stack/template_list_panel/template_bottom_padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "world_list_grids_stack/store_panel/store_grids/realms_plus_list_panel/realms_plus_template_bottom_padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "world_list_grids_stack/store_panel/store_grids/suggested_content_panel/suggested_template_bottom_padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "world_list_grids_stack/custom_template_panel/custom_template_list_bottom_padding": {
    // "ignored": true
  },

  // ???/?? ??
  "world_list_grids_stack/realms_info_panel/padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "world_list_grids_stack/store_panel/store_grids/suggested_content_panel/suggested_content_offers_title_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "world_list_grids_stack/store_panel/store_grids/suggested_content_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "suggested_content_offers_title_label",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "suggested_content_offers_title@rainbowpieui_world_templates.list_title": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_list_title_text": "$section_header",
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "(not #realms_info_visible)",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible"
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "label_content_template": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "list_title@rainbowpieui_world_templates.list_title": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_list_title_text": "$label_content_label"
        }
      }
    ]
  },

  // ???/?? ??
  "world_list_grids_stack/store_panel/store_grids/realms_plus_list_panel/realms_plus_label_panel": {

  },

  // ???/?? ??
  "realms_plus_template_item/realms_plus_template_item_button": {
    // 가로/세로 크기
    "size": [ "fill", "100%" ]
  },

  // ???/?? ??
  "world_template_item/world_template_item_button": {
    // 가로/세로 크기
    "size": [ "fill", "100%" ]
  },

  // ???/?? ??
  "see_more_templates_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "world_template_item_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "realms_plus_template_item_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "help_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "generate_random": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  }
}
```








### 기본
xbl_friend_finder.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: xbl_friend_finder.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "xbl_friend_finder",

  // ???/?? ??
  "progress_loading/progress_loading_outline": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "message_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "main_panel/searching_profile_panel": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "text_edit_panel/text_edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true
  },

  // ???/?? ??
  "main_panel/find_friends_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "xbl_friend_finder": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_blur": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "xbl_friend_finder",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_xbl_friend_finder.xbl_friend_finder_screen_content"
  }
}
```












[분할 목록으로 돌아가기](preview.html#example-view)

### MintUI


### MintUI
mintui_background.json
기본 UI 모음 2 · MintUI



필요한 부분만 참고해서 가져가세요.



```
// 예제: mintui_background.json
// 분류: 기본 UI 모음 2 / MintUI
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "mintui_background",

  // ???/?? ??
  "background_fullscreen": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_mask|default": false,
    // 완전히 제거(공간도 없음)
    "ignored": "(not $is_pregame)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "image_background_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "gradient_top": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_screenbackground_gradient)",
                // 가로/세로 크기
                "size": [ "100%", 30 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // ?? ?? ?
                "color1": [ 0.0, 0.0, 0.0, 0.5 ],
                // ?? ?? ?
                "color2": [ 0.0, 0.0, 0.0, 0.0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // ???/?? ??
              "design02_gradient_bottom": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_screenbackground_gradient)",
                // 가로/세로 크기
                "size": [ "100%", 30 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // ?? ?? ?
                "color1": [ 0.0, 0.0, 0.0, 0.0 ],
                // ?? ?? ?
                "color2": [ 0.0, 0.0, 0.0, 0.5 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // ???/?? ??
              "image_background": {
                // 이미지 표시
                "type": "image",
                // ?? ??
                "fill": true,
                // ??? ?? ?
                "allow_debug_missing_texture": false,
                // ??? ?? ?
                "force_texture_reload": true,
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_background_texture",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "image_mask": {
          // 이미지 표시
          "type": "image",
          // 보이기/숨기기(공간 유지)
          "visible": "($background_mask and $rainbowpie_ui_flag_bg_mask)",
          // ?? ??
          "fill": true,
          // ??? ?? ?
          "allow_debug_missing_texture": false,
          // ??? ?? ?
          "force_texture_reload": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 사용할 이미지 경로
          "texture": "$rainbowpie_ui_theme_background_mask_texture",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3
        }
      }
    ]
  },

  // ???/?? ??
  "background_blur_fullscreen": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_mask|default": false,
    // 완전히 제거(공간도 없음)
    "ignored": "(not $is_pregame)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "image_background_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "gradient_top": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_screenbackground_gradient)",
                // 가로/세로 크기
                "size": [ "100%", 30 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // ?? ?? ?
                "color1": [ 0.0, 0.0, 0.0, 0.5 ],
                // ?? ?? ?
                "color2": [ 0.0, 0.0, 0.0, 0.0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // ???/?? ??
              "design02_gradient_bottom": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_screenbackground_gradient)",
                // 가로/세로 크기
                "size": [ "100%", 30 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // ?? ?? ?
                "color1": [ 0.0, 0.0, 0.0, 0.0 ],
                // ?? ?? ?
                "color2": [ 0.0, 0.0, 0.0, 0.5 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // ???/?? ??
              "image_background": {
                // 이미지 표시
                "type": "image",
                // ?? ??
                "fill": true,
                // ??? ?? ?
                "allow_debug_missing_texture": false,
                // ??? ?? ?
                "force_texture_reload": true,
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_background_blur_texture",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "image_noise": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_a3a3e4ee)",
          // 이미지 표시
          "type": "image",
          // 이미지 반복 여부
          "tiled": true,
          // ?? ??
          "tiled_scale": [ 0.10, 0.10 ],
          // ??? ?? ?
          "allow_debug_missing_texture": false,
          // ??? ?? ?
          "force_texture_reload": true,
          // ???
          "alpha": 0.025,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 사용할 이미지 경로
          "texture": "$rainbowpie_ui_theme_background_noise_texture",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3
        }
      },
      {
        // ???/?? ??
        "image_mask": {
          // 이미지 표시
          "type": "image",
          // 보이기/숨기기(공간 유지)
          "visible": "($background_mask and $rainbowpie_ui_flag_bg_mask)",
          // ?? ??
          "fill": true,
          // ??? ?? ?
          "allow_debug_missing_texture": false,
          // ??? ?? ?
          "force_texture_reload": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 사용할 이미지 경로
          "texture": "$rainbowpie_ui_theme_background_mask_texture",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
        }
      }
    ]
  },

  // ???/?? ??
  "background": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_mask|default": false,
    // 오버라이드 가능한 변수
    "$background_ingame|default": false,
    // 오버라이드 가능한 변수
    "$background_layer|default": 1,
    // 오버라이드 가능한 변수
    "$background_offset|default": [],
    // 오버라이드 가능한 변수
    "$background_children_offset|default": [],
    // 오버라이드 가능한 변수
    "$background_anim_reset|default": "screen_animation_reset",
    // 오버라이드 가능한 변수
    "$background_anims|default": [],
    // 오버라이드 가능한 변수
    "$background_children_anim_reset|default": "screen_animation_reset",
    // 오버라이드 가능한 변수
    "$background_children_anims|default": [],
    // 오버라이드 가능한 변수
    "$background_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_children_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_anchor|default": "center",
    // 오버라이드 가능한 변수
    "$background_children_anchor|default": "center",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "background_panel_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "((not $is_pregame) and (not $background_ingame))",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": "$background_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$background_anchor",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$background_anchor",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 오버라이드 가능한 변수
          "$background_blur|default": "$rainbowpie_ui_theme_background_blur_texture",
          // 오버라이드 가능한 변수
          "$background_normal|default": "$rainbowpie_ui_theme_background_texture",
          // ????? ?? ?
          "animation_reset_name": "$background_anim_reset",
          // 애니메이션 목록
          "anims": "$background_anims",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "image_background_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 보이기/숨기기(공간 유지)
                "visible": "$rainbowpie_ui_feature_background_blur",
                // 가로/세로 크기
                "size": "$background_children_size",
                // 기준점에서 이동하는 거리
                "offset": "$background_children_offset",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$background_children_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$background_children_anchor",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($background_layer + 1)",
                // ????? ?? ?
                "animation_reset_name": "$background_children_anim_reset",
                // 애니메이션 목록
                "anims": "$background_children_anims",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "gradient_top": {
                      // 특수 렌더러(그라디언트/플레이어 등)
                      "type": "custom",
                      // 커스텀 렌더러 종류
                      "renderer": "gradient_renderer",
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_screenbackground_gradient)",
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // ?? ?? ?
                      "color1": [ 0.0, 0.0, 0.0, 0.5 ],
                      // ?? ?? ?
                      "color2": [ 0.0, 0.0, 0.0, 0.0 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2
                    }
                  },
                  {
                    // ???/?? ??
                    "design02_gradient_bottom": {
                      // 특수 렌더러(그라디언트/플레이어 등)
                      "type": "custom",
                      // 커스텀 렌더러 종류
                      "renderer": "gradient_renderer",
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_screenbackground_gradient)",
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // ?? ?? ?
                      "color1": [ 0.0, 0.0, 0.0, 0.0 ],
                      // ?? ?? ?
                      "color2": [ 0.0, 0.0, 0.0, 0.5 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2
                    }
                  },
                  {
                    // ???/?? ??
                    "image_background": {
                      // 이미지 표시
                      "type": "image",
                      // ?? ??
                      "fill": true,
                      // ??? ?? ?
                      "allow_debug_missing_texture": false,
                      // ??? ?? ?
                      "force_texture_reload": true,
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 사용할 이미지 경로
                      "texture": "$background_normal",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "image_mask": {
                // 이미지 표시
                "type": "image",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_feature_background_mask)",
                // 보이기/숨기기(공간 유지)
                "visible": "($background_mask and $rainbowpie_ui_flag_bg_mask)",
                // ?? ??
                "fill": true,
                // ??? ?? ?
                "allow_debug_missing_texture": false,
                // ??? ?? ?
                "force_texture_reload": true,
                // 가로/세로 크기
                "size": "$background_children_size",
                // 기준점에서 이동하는 거리
                "offset": "$background_children_offset",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$background_children_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$background_children_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_background_mask_texture",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($background_layer + 2)",
                // ????? ?? ?
                "animation_reset_name": "$background_children_anim_reset",
                // 애니메이션 목록
                "anims": "$background_children_anims"
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "background_blur": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_mask|default": true,
    // 오버라이드 가능한 변수
    "$background_ingame|default": false,
    // 오버라이드 가능한 변수
    "$background_layer|default": 1,
    // 오버라이드 가능한 변수
    "$background_offset|default": [],
    // 오버라이드 가능한 변수
    "$background_children_offset|default": [],
    // 오버라이드 가능한 변수
    "$background_anim_reset|default": "screen_animation_reset",
    // 오버라이드 가능한 변수
    "$background_anims|default": [],
    // 오버라이드 가능한 변수
    "$background_children_anim_reset|default": "screen_animation_reset",
    // 오버라이드 가능한 변수
    "$background_children_anims|default": [],
    // 오버라이드 가능한 변수
    "$background_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_children_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_anchor|default": "center",
    // 오버라이드 가능한 변수
    "$background_children_anchor|default": "center",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "background_panel_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "((not $is_pregame) and (not $background_ingame))",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": "$background_size",
          // 기준점에서 이동하는 거리
          "offset": "$background_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$background_anchor",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$background_anchor",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 오버라이드 가능한 변수
          "$background_blur|default": "$rainbowpie_ui_theme_background_blur_texture",
          // 오버라이드 가능한 변수
          "$background_normal|default": "$rainbowpie_ui_theme_background_texture",
          // ????? ?? ?
          "animation_reset_name": "$background_anim_reset",
          // 애니메이션 목록
          "anims": "$background_anims",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "image_background_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 보이기/숨기기(공간 유지)
                "visible": "$rainbowpie_ui_feature_background_blur",
                // 가로/세로 크기
                "size": "$background_children_size",
                // 기준점에서 이동하는 거리
                "offset": "$background_children_offset",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$background_children_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$background_children_anchor",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($background_layer + 1)",
                // ????? ?? ?
                "animation_reset_name": "$background_children_anim_reset",
                // 애니메이션 목록
                "anims": "$background_children_anims",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "gradient_top": {
                      // 특수 렌더러(그라디언트/플레이어 등)
                      "type": "custom",
                      // 커스텀 렌더러 종류
                      "renderer": "gradient_renderer",
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_screenbackground_gradient)",
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // ?? ?? ?
                      "color1": [ 0.0, 0.0, 0.0, 0.5 ],
                      // ?? ?? ?
                      "color2": [ 0.0, 0.0, 0.0, 0.0 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2
                    }
                  },
                  {
                    // ???/?? ??
                    "design02_gradient_bottom": {
                      // 특수 렌더러(그라디언트/플레이어 등)
                      "type": "custom",
                      // 커스텀 렌더러 종류
                      "renderer": "gradient_renderer",
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_screenbackground_gradient)",
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // ?? ?? ?
                      "color1": [ 0.0, 0.0, 0.0, 0.0 ],
                      // ?? ?? ?
                      "color2": [ 0.0, 0.0, 0.0, 0.5 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2
                    }
                  },
                  {
                    // ???/?? ??
                    "image_background": {
                      // 이미지 표시
                      "type": "image",
                      // ?? ??
                      "fill": true,
                      // ??? ?? ?
                      "allow_debug_missing_texture": false,
                      // ??? ?? ?
                      "force_texture_reload": true,
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 사용할 이미지 경로
                      "texture": "$background_blur",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "image_mask": {
                // 이미지 표시
                "type": "image",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_feature_background_mask)",
                // 보이기/숨기기(공간 유지)
                "visible": "($background_mask and $rainbowpie_ui_flag_bg_mask)",
                // ?? ??
                "fill": true,
                // ??? ?? ?
                "allow_debug_missing_texture": false,
                // ??? ?? ?
                "force_texture_reload": true,
                // 가로/세로 크기
                "size": "$background_children_size",
                // 기준점에서 이동하는 거리
                "offset": "$background_children_offset",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$background_children_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$background_children_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_background_mask_texture",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($background_layer + 3)",
                // ????? ?? ?
                "animation_reset_name": "$background_children_anim_reset",
                // 애니메이션 목록
                "anims": "$background_children_anims"
              }
            },
            {
              // ???/?? ??
              "image_noise": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_a3a3e4ee)",
                // 이미지 표시
                "type": "image",
                // 이미지 반복 여부
                "tiled": true,
                // ?? ??
                "tiled_scale": [ 0.10, 0.10 ],
                // ??? ?? ?
                "allow_debug_missing_texture": false,
                // ??? ?? ?
                "force_texture_reload": true,
                // ???
                "alpha": 0.025,
                // 가로/세로 크기
                "size": "$background_children_size",
                // 기준점에서 이동하는 거리
                "offset": "$background_children_offset",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$background_children_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$background_children_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_background_noise_texture",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($background_layer + 2)",
                // ????? ?? ?
                "animation_reset_name": "$background_children_anim_reset",
                // 애니메이션 목록
                "anims": "$background_children_anims"
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "background_mask": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_layer|default": 1,
    // 오버라이드 가능한 변수
    "$background_offset|default": [],
    // 오버라이드 가능한 변수
    "$background_children_offset|default": [],
    // 오버라이드 가능한 변수
    "$background_anim_reset|default": "screen_animation_reset",
    // 오버라이드 가능한 변수
    "$background_anims|default": [],
    // 오버라이드 가능한 변수
    "$background_children_anim_reset|default": "screen_animation_reset",
    // 오버라이드 가능한 변수
    "$background_children_anims|default": [],
    // 오버라이드 가능한 변수
    "$background_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_children_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_anchor|default": "center",
    // 오버라이드 가능한 변수
    "$background_children_anchor|default": "center",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "background_panel_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_bg_mask_ingame or $is_pregame)",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": "$background_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$background_anchor",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$background_anchor",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // ????? ?? ?
          "animation_reset_name": "$background_anim_reset",
          // 애니메이션 목록
          "anims": "$background_anims",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "image_mask": {
                // 이미지 표시
                "type": "image",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_feature_background_mask)",
                // 보이기/숨기기(공간 유지)
                "visible": "$rainbowpie_ui_flag_bg_mask",
                // ?? ??
                "fill": true,
                // ??? ?? ?
                "allow_debug_missing_texture": false,
                // ??? ?? ?
                "force_texture_reload": true,
                // 가로/세로 크기
                "size": "$background_children_size",
                // 기준점에서 이동하는 거리
                "offset": "$background_children_offset",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$background_children_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$background_children_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_background_mask_texture_ingame",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($background_layer + 3)",
                // ????? ?? ?
                "animation_reset_name": "$background_children_anim_reset",
                // 애니메이션 목록
                "anims": "$background_children_anims"
              }
            },
            {
              // ???/?? ??
              "image_noise": {
                // 완전히 제거(공간도 없음)
                "ignored": "((not $rainbowpie_ui_flag_a3a3e4ee) or (not $rainbowpie_ui_flag_1dc354bd))",
                // 이미지 표시
                "type": "image",
                // 이미지 반복 여부
                "tiled": true,
                // ?? ??
                "tiled_scale": [ 0.10, 0.10 ],
                // ??? ?? ?
                "allow_debug_missing_texture": false,
                // ??? ?? ?
                "force_texture_reload": true,
                // ???
                "alpha": 0.025,
                // 가로/세로 크기
                "size": "$background_children_size",
                // 기준점에서 이동하는 거리
                "offset": "$background_children_offset",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$background_children_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$background_children_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_background_noise_texture",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($background_layer + 2)",
                // ????? ?? ?
                "animation_reset_name": "$background_children_anim_reset",
                // 애니메이션 목록
                "anims": "$background_children_anims"
              }
            }
          ]
        }
      }
    ]
  }
}
```











[분할 목록으로 돌아가기](preview.html#example-view)


### settings sections


### settings sections
controls_section.json
기본 UI 모음 2 · settings sections



필요한 부분만 참고해서 가져가세요.



```
// 예제: controls_section.json
// 분류: 기본 UI 모음 2 / settings sections
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "controls_section",

  // Remove this when mojang fix delayed_block_breaking on using Joystick & aim crosshair control mode
  "touch_section/common_touch_settings/option_creative_delayed_block_breaking": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": []
  },

  // ???/?? ??
  "touch_section/common_touch_settings/joystick_visibility_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#joystick_visibility_visible",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.joystickVisibilityOption.visibleJoystick"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#joystick_visibility_hidden",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.joystickVisibilityOption.hiddenJoystick"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#joystick_visibility_hidden_when_unused",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.joystickVisibilityOption.hiddenJoystickWhenUnused"
        }
      }
    ]
  },

  // ???/?? ??
  "touch_section/common_touch_settings/sneak_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#sneak_toggle",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.sneakOption.toggle"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#sneak_hold",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.sneakOption.hold"
        }
      }
    ]
  },

  // ???/?? ??
  "gamepad_mapping_item/keymapping_button_1": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "gamepad_mapping_item": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "keymapping_button_0",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "padding_button": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 1, 1 ]
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "keymapping_button_reset@common_buttons.light_content_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100%", "100%" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
              // 가로/세로 크기
              "size": [ "15% + 1px", "100% - 4px" ],
              // 겹치는 순서(숫자 클수록 위)
              "layer": 1,
              // 오버라이드 가능한 변수
              "$button_content": "controls_section.arrow_reset",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.reset_binding",
              // 오버라이드 가능한 변수
              "$button_tts_header": "accessibility.settings.reset",
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 목록 인덱스/현재 항목 정보 제공
                  "binding_type": "collection_details",
                  // 목록 이름
                  "binding_collection_name": "$keymapping_collection"
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "image_binding_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "image_binding_button_content/default_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "gamepad_mapping_item/option_info_label_control": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "gamepad_mapping_item/option_info_label_control/keymapping_label_control": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "binding_button_content/default_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "keymapping_item/keymapping_button_1": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "keymapping_item": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "keymapping_button_0",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "padding_button": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 1, 1 ]
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "keymapping_button_reset@common_buttons.light_content_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100%", "100%" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
              // 가로/세로 크기
              "size": [ "15% + 1px", "100% - 4px" ],
              // 겹치는 순서(숫자 클수록 위)
              "layer": 1,
              // 오버라이드 가능한 변수
              "$button_content": "controls_section.arrow_reset",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.reset_binding",
              // 오버라이드 가능한 변수
              "$button_tts_header": "accessibility.settings.reset",
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 목록 인덱스/현재 항목 정보 제공
                  "binding_type": "collection_details",
                  // 목록 이름
                  "binding_collection_name": "$keymapping_collection"
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "binding_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "keymapping_item/option_info_label_control": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "keymapping_item/option_info_label_control/keymapping_label_control": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "controller_section/option_toggle_4": {
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  // ???/?? ??
  "keyboard_and_mouse_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "controls",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "keyboard_and_mouse"
  },

  // ???/?? ??
  "controller_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "controls",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "controller"
  },

  // ???/?? ??
  "touch_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "controls",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "touch"
  }
}
```








### settings sections
general_section.json
기본 UI 모음 2 · settings sections



필요한 부분만 참고해서 가져가세요.



```
// 예제: general_section.json
// 분류: 기본 UI 모음 2 / settings sections
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "general_section",

  // ???/?? ??
  "max_framerate_slider": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": []
  },

  // ???/?? ??
  "general_tab_section/treatment_ids_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "general_tab_section/ecomode_label_header": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "general_tab_section/pause_label_header": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "diagnostics_toggles_panel/primary_panel/heading": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "advanced_graphics_options_section/upscaling_mode": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#upscaling_mode_radio_taau",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.upscalingModeOptions.taau"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#upscaling_mode_radio_bilinear",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.upscalingModeOptions.bilinear"
        }
      }
    ]
  },

  // ???/?? ??
  "device_info_toggles_panel/device_info_memory_tier_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "memory_tier_superLow@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#memory_tier_superLow",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.creator.deviceInfoMemoryTier.superLow"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "memory_tier_low@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#memory_tier_low",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.creator.deviceInfoMemoryTier.low"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "memory_tier_mid@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#memory_tier_mid",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.creator.deviceInfoMemoryTier.mid"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "memory_tier_high@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#memory_tier_high",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.creator.deviceInfoMemoryTier.high"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "memory_tier_superHigh@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#memory_tier_superHigh",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.creator.deviceInfoMemoryTier.superHigh"
        }
      }
    ]
  },

  // ???/?? ??
  "device_info_toggles_panel/primary_panel/heading": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "content_log_panel/option_content_log_gui_level": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#content_log_gui_level_info",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.content_log_gui.level.info"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#content_log_gui_level_warn",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.content_log_gui.level.warn"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#content_log_gui_level_error",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.content_log_gui.level.error"
        }
      }
    ]
  },

  // ???/?? ??
  "watchdog_toggles_panel/primary_panel/heading": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "advanced_graphics_options_button_content": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "advanced_graphics_options_label",
        // ?? ??
        "operation": "insert_before",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "advanced_graphics_options_label_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ "100%c", "100%" ],
              // ?? ?? ?
              "max_size": [ "75%", "100%" ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "advanced_graphics_options_label@rainbowpie_ui_common.text_label": {
                    // 보여줄 글자
                    "text": "#graphics_mode_toggle_label",
                    // ?? (R,G,B,A)
                    "color": "$text_color",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                      {
                        // 가져올 값 이름
                        "binding_name": "#graphics_mode_toggle_label"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "advanced_graphics_options_button_content/advanced_graphics_options_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "video_section/render_distance_slider": {
  },

  // ???/?? ??
  "debugger_toggles_panel/primary_panel/all_options_panel/attach_mode_option": {
  },

  // ???/?? ??
  "debugger_toggles_panel/primary_panel/heading": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "general_tab_section/auto_update_mode_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "off@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#auto_update_mode_off",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.autoUpdateMode.off"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "wifi@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#auto_update_mode_on_wifi_only",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.autoUpdateMode.on.withWifiOnly"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cellular@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#auto_update_mode_on_with_cellular",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.autoUpdateMode.on.withCellular"
        }
      }
    ]
  },

  // ???/?? ??
  "video_section/advanced_graphics_options_panel/advanced_graphics_options_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "video_section/advanced_graphics_options_panel/graphics_mode": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#graphics_mode_radio_simple",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.graphicsMode.simple"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#graphics_mode_radio_fancy",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.graphicsMode.fancy"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#graphics_mode_radio_deferred",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#graphics_mode_radio_deferred_enabled",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.graphicsMode.deferred"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#graphics_mode_radio_ray_traced",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#graphics_mode_radio_ray_traced_enabled",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.graphicsMode.rayTraced"
        }
      }
    ]
  },

  // ???/?? ??
  "chat_message_duration_info_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "chat_message_duration_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "toast_notification_duration_info_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "toast_notification_duration_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "glint_speed_slider_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "glint_strength_slider_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "darkness_slider_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "view_subscriptions_section/loading_subscriptions_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "view_subscriptions_section/failed_loading_subscriptions_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_subscription_panel/middle_panel/renews_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_subscription_stack/info/realms_desc_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "possible_store_mismatch/panel_content/label_panel/name_label2": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "consumable_not_extendable/panel_content/label_panel/name_label2": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "content_log_panel/content_log_location_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "content_log_panel/content_log_location_label_header": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "content_log_panel/content_log_section_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "creator_toggles_panel/copy_coordinate_section_stack_panel/content_log_section_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "editor_toggle_panel/editor_confirmation_panel/editor_confirmation_section_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "editor_toggle_panel/editor_confirmation_panel/editor_active_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "gamertag_controls/gamertag_label/panel_gamertag/gamertag_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "gamertag_controls/gamertag_label/panel_descriptor/label_descriptor": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "signin_subscription/sign_in/please_signin_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "account_section/account_info_buttom/account_info_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "switch_accounts_panel/name_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "sign_out_button_content/padded_label/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "switch_accounts_button_content/padded_label/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "view_account_errors_button_content": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "general_tab_section/build_info_label_panel/build_info_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "general_tab_section/third_party_copyright_info_label_panel/copyright_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "general_tab_section/licenses_label_header": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "general_tab_section/network_label_header": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "language_grid_item": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_radio_enabled": true
  },

  // ???/?? ??
  "language_section/language_list_grid": {
    // 오버라이드 가능한 변수
    "$language_grid_item_template": "general_section.language_grid_item",
    // ??? ?? ?
    "grid_item_template": "$language_grid_item_template",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_79f6bcad",
        // 오버라이드 가능한 변수
        "$language_grid_item_template": "rainbowpieui_general_section.worldtown_language_grid_item"
      }
    ]
  },

  // ???/?? ??
  "video_section/ui_profile_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#ui_profile_radio_classic",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.uiprofile.classic"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#ui_profile_radio_pocket",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.uiprofile.pocket"
        }
      }
    ]
  },

  // ???/?? ??
  "upscaling_toggle": {
    // 오버라이드 가능한 변수
    "$option_label": "NVIDIA DLSS"
  },

  // ???/?? ??
  "video_section/perspective_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#thirdperson_radio_first",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.thirdperson.firstperson"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#thirdperson_radio_third_back",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.thirdperson.thirdpersonback"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#thirdperson_radio_third_front",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.thirdperson.thirdpersonfront"
        }
      }
    ]
  },

  // ???/?? ??
  "accessibility_section/toast_notification_duration_options_panel/toast_notification_duration_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#notification_duration_radio_ThreeSec",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.notificationDuration.toast.ThreeSec"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#notification_duration_radio_TenSec",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.notificationDuration.toast.TenSec"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#notification_duration_radio_ThirtySec",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.notificationDuration.toast.ThirtySec"
        }
      }
    ]
  },

  // ???/?? ??
  "accessibility_section/chat_message_duration_options_panel/chat_message_duration_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#chat_message_duration_radio_ThreeSec",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.notificationDuration.toast.ThreeSec"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#chat_message_duration_radio_TenSec",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.notificationDuration.toast.TenSec"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#chat_message_duration_radio_ThirtySec",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.notificationDuration.toast.ThirtySec"
        }
      }
    ]
  },

  // ???/?? ??
  "general_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "general"
  },

  // ???/?? ??
  "general_tab_section": {
    // 오버라이드 가능한 변수
    "$spatialPatternsPadding": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$paddingLineDivider": [ 0, 0 ]
  },

  // ???/?? ??
  "account_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "profile",
    // 오버라이드 가능한 변수
    "$spatialPatternsPadding": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$paddingLineDivider": [ 0, 0 ]
  },

  // ???/?? ??
  "global_texture_pack_button": {
    // 오버라이드 가능한 변수
    "$state_collection_name": "#selected_pack_items_global"
  },

  // ???/?? ??
  "global_texture_pack_section": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_type": "global",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control": "global_rp_search_text_box_display_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_placeholder": "rainbowpie.ui.resource_packs.search.placeholder.resource"
  },

  // ???/?? ??
  "storage_management_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "storageIcon"
  },

  // ???/?? ??
  "creator_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "creator"
  },

  // ???/?? ??
  "video_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "video"
  },

  // ???/?? ??
  "view_subscriptions_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "subscription"
  },

  // ???/?? ??
  "accessibility_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "accessibility"
  },

  // ???/?? ??
  "sound_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "sound"
  },

  // ???/?? ??
  "sound_section": {
    // 오버라이드 가능한 변수
    "$spatialPatternsPadding": [ "100%", 14 ],
	  // 오버라이드 가능한 변수
	  "$audioSlidersSize": [ "100% - 2px", 16 ]
  },

  // ???/?? ??
  "language_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "language"
  },

  // ???/?? ??
  "how_to_play_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "how_to_play"
  }
}
```








### settings sections
settings_common.json
기본 UI 모음 2 · settings sections



필요한 부분만 참고해서 가져가세요.



```
// 예제: settings_common.json
// 분류: 기본 UI 모음 2 / settings sections
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "settings_common",

  // ???/?? ??
  "option_radio_dropdown_group": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "white_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "option_text_edit_control_with_text_button/button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "option_text_edit_control_with_button": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "text_box",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "light_content_button@common_buttons.light_content_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100%", "100% - 2px" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
              // 오버라이드 가능한 변수
              "$button_content": "settings_common.arrow_image",
              // 가로/세로 크기
              "size": [ "fill", "100%" ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "option_text_edit_control_with_button/button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "option_info_label_with_image": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "option_info_label_with_image/control": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "radio_visuals/radio_label": {
    // 기준점에서 이동하는 거리
    "offset": [ 4, 0 ],
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "radio_visuals": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_background_color|default": [ 0.0, 1.0, 0.0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_background_alpha|default": 1.0,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_btbar_color|default": [ 1.0, 1.0, 0.0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_btbar_alpha|default": 1.0,
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "radio_btbar": {
              // 이미지 표시
              "type": "image",
              // 사용할 이미지 경로
              "texture": "textures/ui/White",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $selected and not $hovered)",
              // 기준점(어디에서 시작할지)
              "anchor_from": "left_middle",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "left_middle",
              // 가로/세로 크기
              "size": [ 2, "100% + 1px" ],
              // ?? (R,G,B,A)
              "color": "$rainbowpie_localui_this_btbar_color",
              // ???
              "alpha": "$rainbowpie_localui_this_btbar_alpha",
              // 겹치는 순서(숫자 클수록 위)
              "layer": 8,
              // 조건에 따라 변수 값을 바꾸기
              "variables": [
                {
                  // 이 조건이 맞으면 적용
                  "requires": "((not $selected) and $hovered)",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_btbar_color": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_color",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_btbar_alpha": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_alpha"
                },
                {
                  // 이 조건이 맞으면 적용
                  "requires": "($selected and $hovered)",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_btbar_color": "$rainbowpie_ui_theme_toggle_background_checked_hover_btbar_color",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_btbar_alpha": "$rainbowpie_ui_theme_toggle_background_checked_hover_btbar_alpha"
                },
                {
                  // 이 조건이 맞으면 적용
                  "requires": "($selected)",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_btbar_color": "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_color",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_btbar_alpha": "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_alpha"
                }
              ]
            }
          },
          {
            // ???/?? ??
            "radio_background": {
              // 이미지 표시
              "type": "image",
              // 가로/세로 크기
              "size": [ "100%", "100% + 1px" ],
              // 완전히 제거(공간도 없음)
              "ignored": "(not $selected and not $hovered)",
              // 사용할 이미지 경로
              "texture": "textures/ui/White",
              // ?? (R,G,B,A)
              "color": "$rainbowpie_localui_this_background_color",
              // ???
              "alpha": "$rainbowpie_localui_this_background_alpha",
              // 겹치는 순서(숫자 클수록 위)
              "layer": 1,
              // 조건에 따라 변수 값을 바꾸기
              "variables": [
                {
                  // 이 조건이 맞으면 적용
                  "requires": "((not $selected) and $hovered)",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_background_color": [ 0.011, 0.011, 0.011 ],
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_background_alpha": 0.5
                },
                {
                  // 이 조건이 맞으면 적용
                  "requires": "($selected and $hovered)",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_background_color": [ 0.011, 0.011, 0.011 ],
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_background_alpha": 0.4
                },
                {
                  // 이 조건이 맞으면 적용
                  "requires": "($selected)",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_background_color": [ 0.011, 0.011, 0.011 ],
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_this_background_alpha": 0.4
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "radio_visuals/accessibility_selection_highlight": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "radio_visuals/radio_image": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "radio_with_label_core": {
  },

  // ???/?? ??
  "option_group_label/text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "options_dropdown_toggle_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_rainbowpiebutton_enabled|default": false,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_dropdown_rainbowpiebutton_enabled",
        // 오버라이드 가능한 변수
        "$unchecked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked",
        // 오버라이드 가능한 변수
        "$checked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked",
        // 오버라이드 가능한 변수
        "$unchecked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_hover",
        // 오버라이드 가능한 변수
        "$checked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_hover",
        // 오버라이드 가능한 변수
        "$unchecked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_locked",
        // 오버라이드 가능한 변수
        "$unchecked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_locked",
        // 오버라이드 가능한 변수
        "$checked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked",
        // 오버라이드 가능한 변수
        "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked",
        // 오버라이드 가능한 변수
        "$default_chevron": "textures/ui/chevron_white_down"
      }
    ]
  },

  // ???/?? ??
  "options_dropdown_dark_toggle_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_rainbowpiebutton_enabled|default": false,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_dropdown_rainbowpiebutton_enabled",
        // 오버라이드 가능한 변수
        "$unchecked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked",
        // 오버라이드 가능한 변수
        "$checked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked",
        // 오버라이드 가능한 변수
        "$unchecked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_hover",
        // 오버라이드 가능한 변수
        "$checked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_hover",
        // 오버라이드 가능한 변수
        "$unchecked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_locked",
        // 오버라이드 가능한 변수
        "$unchecked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_locked",
        // 오버라이드 가능한 변수
        "$checked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked",
        // 오버라이드 가능한 변수
        "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked",
        // 오버라이드 가능한 변수
        "$default_chevron": "textures/ui/chevron_white_down"
      }
    ]
  },

  // ???/?? ??
  "option_dropdown_control_no_scroll": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled|default": false,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_dropdown_enabled",
        // 오버라이드 가능한 변수
        "$option_dropdown_size|default": [ "100%", 25 ],
        // 오버라이드 가능한 변수
        "$option_dropdown_type": "rainbowpie_ui_common.rainbowpie_ui_dropdown",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dropdown_type": "common.dropdown_no_scrollpanel"
      }
    ]
  },

  // ???/?? ??
  "option_dropdown_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled|default": false,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_dropdown_enabled",
        // 오버라이드 가능한 변수
        "$option_dropdown_size|default": [ "100%", 25 ],
        // 오버라이드 가능한 변수
        "$option_dropdown_type": "rainbowpie_ui_common.rainbowpie_ui_dropdown",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dropdown_type": "common.dropdown"
      }
    ]
  },

  // ???/?? ??
  "action_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 가로/세로 크기
    "size": [ "100%", 28 ]
  },

  // ???/?? ??
  "link_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 가로/세로 크기
    "size": [ "100%", 28 ]
  },

  // ???/?? ??
  "option_generic_core/two_line_layout/option_label_panel/option_label_subpanel_01/option_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

    // ???/?? ??
    "option_generic_core/two_line_layout/option_label_panel/option_label_subpanel_02/option_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "option_generic_core/two_line_layout/option_descriptive_text_0": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "option_generic_core/one_line_layout/option_label_subpanel_01/option_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

    // ???/?? ??
    "option_generic_core/one_line_layout/option_label_subpanel_02/option_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "option_generic_core/one_line_layout/option_descriptive_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "option_toggle_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_enabled|default": false,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_localui_toggle_enabled",
        // 오버라이드 가능한 변수
        "$unchecked_control": "rainbowpieui_settings_common.rainbowpie_ui_option_toggle_off",
        // 오버라이드 가능한 변수
        "$checked_control": "rainbowpieui_settings_common.rainbowpie_ui_option_toggle_on",
        // 오버라이드 가능한 변수
        "$unchecked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_option_toggle_off_hover",
        // 오버라이드 가능한 변수
        "$checked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_option_toggle_on_hover",
        // 오버라이드 가능한 변수
        "$unchecked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_option_toggle_off_locked",
        // 오버라이드 가능한 변수
        "$unchecked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_option_toggle_off_locked",
        // 오버라이드 가능한 변수
        "$checked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_option_toggle_on_locked",
        // 오버라이드 가능한 변수
        "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_option_toggle_on_locked"
      }
    ]
  },

  // ???/?? ??
  "selector_group_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "toggle_button_control": {
    // 오버라이드 가능한 변수
    "$icon_theme_dir|default": "($rainbowpie_ui_path_theme + '/icon/settings')",
    // 오버라이드 가능한 변수
    "$icon_size|default": [ 15, 15 ],
    // 오버라이드 가능한 변수
    "$icon_texture_name|default": "null",
    // 오버라이드 가능한 변수
    "$icon_group_name|default": "null",
    // 오버라이드 가능한 변수
    "$icon_offset|default": [ 5, 0 ],
    // 오버라이드 가능한 변수
    "$icon_anchor_from|default": "left_middle",
    // 오버라이드 가능한 변수
    "$icon_anchor_to|default": "left_middle",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_feature_settings_themedIcon",
        // 오버라이드 가능한 변수
        "$button_label_offset|default": [ 28, 0 ]
      }
    ],
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "section_icon": {
              // 이미지 표시
              "type": "image",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_feature_settings_themedIcon)",
              // 기준점(어디에서 시작할지)
              "anchor_from": "$icon_anchor_from",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "$icon_anchor_to",
              // 기준점에서 이동하는 거리
              "offset": "$icon_offset",
              // 사용할 이미지 경로
              "texture": "($icon_theme_dir + '/' + $icon_group_name + '/' + $icon_texture_name)",
              // 가로/세로 크기
              "size": "$icon_size",
              // 겹치는 순서(숫자 클수록 위)
              "layer": 3,
              // ?? (R,G,B,A)
              "color": "$text_color",
              // ???
              "alpha": 1
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "toggle_button_control/glyph": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_feature_settings_themedIcon"
  },

  // ???/?? ??
  "toggle_button_control/glyph_color": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_feature_settings_themedIcon"
  },

  // ???/?? ??
  "toggle_button_control/tab_button_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "scrollable_selector_area_content": {
    // 기준점에서 이동하는 거리
    "offset": [ 1, 1 ],
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%c + 2px" ]
  },

  // ???/?? ??
  "content_area": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 20 ],
    // 가로/세로 크기
    "size": [ "62%", "100% - 20px" ]
  },

  // ???/?? ??
  "selector_area": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 20 ],
    // 가로/세로 크기
    "size": [ "38%", "100% - 20px" ]
  },

  // ???/?? ??
  "selector_area/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 1, 0 ]
  },

  // ???/?? ??
  "section_toggle_base": {
    // 오버라이드 가능한 변수
    "$unchecked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked",
    // 오버라이드 가능한 변수
    "$checked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked",
    // 오버라이드 가능한 변수
    "$unchecked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_hover",
    // 오버라이드 가능한 변수
    "$checked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_hover",
    // 오버라이드 가능한 변수
    "$unchecked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_locked",
    // 오버라이드 가능한 변수
    "$unchecked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked",
    // 가로/세로 크기
    "size": [ "100%", "25px" ]
  },

  // ???/?? ??
  "dynamic_dialog_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "settings",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_overlay_screen": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_overlay_screen_content": "rainbowpieui_settings_common.settings_overlay_content",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_settings_common.settings_content",
    // 오버라이드 가능한 변수
    "$is_full_screen_layout": false
  }
}
```








### settings sections
world_section.json
기본 UI 모음 2 · settings sections



필요한 부분만 참고해서 가져가세요.



```
// 예제: world_section.json
// 분류: 기본 UI 모음 2 / settings sections
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "world_section",

  // ???/?? ??
  "game_section/level_seed_selector": {
    // 오버라이드 가능한 변수
    "$option_enabled_binding_name": "#none"
  },

  // ???/?? ??
  "game_section": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "world_cheats_label",
        // ?? ??
        "operation": "insert_before",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "education_settings_label@settings_common.option_group_label": {
              // 오버라이드 가능한 변수
              "$text": "Education Edition Settings",
              // 조건에 따라 변수 값을 바꾸기
              "variables": [
                {
                  // 이 조건이 맞으면 적용
                  "requires": "$education_edition",
                  // 오버라이드 가능한 변수
                  "$font_type": "MinecraftTen",
                  // 오버라이드 가능한 변수
                  "$font_scale_factor": 1.2
                }
              ]
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "perfect_weather@settings_common.option_toggle": {
              // 오버라이드 가능한 변수
              "$tts_section_header": "createWorldScreen.cheatSettings",
              // 오버라이드 가능한 변수
              "$option_label": "Perfect Weather",
              // 오버라이드 가능한 변수
              "$option_binding_name": "#perfect_weather",
              // 오버라이드 가능한 변수
              "$option_enabled_binding_name": "#perfect_weather_enabled",
              // 오버라이드 가능한 변수
              "$toggle_name": "perfect_weather",
              // 오버라이드 가능한 변수
              "$focus_override_right": "FOCUS_OVERRIDE_STOP",
              // 오버라이드 가능한 변수
              "$toggle_binding_condition": "always_when_visible"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "immutable_world@settings_common.option_toggle": {
              // 오버라이드 가능한 변수
              "$tts_section_header": "createWorldScreen.cheatSettings",
              // 오버라이드 가능한 변수
              "$option_label": "Immutable World",
              // 오버라이드 가능한 변수
              "$option_binding_name": "#immutable_world",
              // 오버라이드 가능한 변수
              "$option_enabled_binding_name": "#immutable_world_enabled",
              // 오버라이드 가능한 변수
              "$toggle_name": "immutable_world",
              // 오버라이드 가능한 변수
              "$focus_override_right": "FOCUS_OVERRIDE_STOP",
              // 오버라이드 가능한 변수
              "$toggle_binding_condition": "always_when_visible"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "show_border_effect@settings_common.option_toggle": {
              // 완전히 제거(공간도 없음)
              "ignored": true,
              // 오버라이드 가능한 변수
              "$tts_section_header": "createWorldScreen.cheatSettings",
              // 오버라이드 가능한 변수
              "$option_label": "createWorldScreen.showbordereffect",
              // 오버라이드 가능한 변수
              "$option_binding_name": "#show_border_effect",
              // 오버라이드 가능한 변수
              "$option_enabled_binding_name": "#show_border_effect_enabled",
              // 오버라이드 가능한 변수
              "$toggle_name": "show_border_effect",
              // 오버라이드 가능한 변수
              "$focus_override_right": "FOCUS_OVERRIDE_STOP",
              // 오버라이드 가능한 변수
              "$toggle_binding_condition": "always_when_visible"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "player_damage@settings_common.option_toggle": {
              // 오버라이드 가능한 변수
              "$tts_section_header": "createWorldScreen.cheatSettings",
              // 오버라이드 가능한 변수
              "$option_label": "Player Damage",
              // 오버라이드 가능한 변수
              "$option_binding_name": "#player_damage",
              // 오버라이드 가능한 변수
              "$option_enabled_binding_name": "#player_damage_enabled",
              // 오버라이드 가능한 변수
              "$toggle_name": "player_damage",
              // 오버라이드 가능한 변수
              "$focus_override_right": "FOCUS_OVERRIDE_STOP",
              // 오버라이드 가능한 변수
              "$toggle_binding_condition": "always_when_visible"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "game_section/export_template_panel/template_version": {
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  // ???/?? ??
  "game_section/export_template_panel/template_buttons": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $file_picking_supported)"
  },

  // ???/?? ??
  "level_texture_pack_section": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_type": "texture",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control": "level_rp_search_text_box_display_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_placeholder": "rainbowpie.ui.resource_packs.search.placeholder.resource"
  },

  // ???/?? ??
  "addon_section": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_type": "addon",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control": "level_bp_search_text_box_display_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_placeholder": "rainbowpie.ui.resource_packs.search.placeholder.behavior"
  },

  // ???/?? ??
  "game_section/option_dropdown_0": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_survival_mode_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_game_mode_radio_survival",
          // 오버라이드 가능한 변수
          "$radio_label_text": "createWorldScreen.gameMode.survival"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_creative_mode_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_game_mode_radio_creative",
          // 오버라이드 가능한 변수
          "$radio_label_text": "createWorldScreen.gameMode.creative"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_adventure_mode_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 완전히 제거(공간도 없음)
          "ignored": "($is_world_create or $trial)",
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_game_mode_radio_adventure",
          // 오버라이드 가능한 변수
          "$radio_label_text": "createWorldScreen.gameMode.adventure"
        }
      }
    ]
  },

  // ???/?? ??
  "game_section/option_dropdown_1": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_default_mode_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#player_game_mode_radio_default",
          // 오버라이드 가능한 변수
          "$radio_label_text": "createWorldScreen.gameMode.serverDefault"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_survival_mode_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#player_game_mode_radio_survival",
          // 오버라이드 가능한 변수
          "$radio_label_text": "createWorldScreen.gameMode.survival"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_creative_mode_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#player_game_mode_radio_creative",
          // 오버라이드 가능한 변수
          "$radio_label_text": "createWorldScreen.gameMode.creative"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_adventure_mode_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#player_game_mode_radio_adventure",
          // 오버라이드 가능한 변수
          "$radio_label_text": "createWorldScreen.gameMode.adventure"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_spectator_mode_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#player_game_mode_radio_spectator",
          // 오버라이드 가능한 변수
          "$radio_label_text": "createWorldScreen.gameMode.spectator"
        }
      }
    ]
  },

  // ???/?? ??
  "game_section/option_dropdown_2": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_difficulty_radio_peaceful",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.difficulty.peaceful"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_difficulty_radio_easy",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.difficulty.easy"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_difficulty_radio_normal",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.difficulty.normal"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_difficulty_radio_hard",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.difficulty.hard"
        }
      }
    ]
  },

  // ???/?? ??
  "game_section/option_dropdown_permissions": {
    // 오버라이드 가능한 변수
    "$is_world_settings|default": false,
		// 오버라이드 가능한 변수
		"$is_in_realm|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
				// 다른 템플릿을 가져와서 확장(상속)
				"permission_level_radio_visitor@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
					// 완전히 제거(공간도 없음)
					"ignored": "$is_world_settings",
					// 오버라이드 가능한 변수
					"$toggle_state_binding_name": "#permission_level_radio_visitor",
					// 오버라이드 가능한 변수
					"$radio_label_text": "permissions.level.visitor",
					// 오버라이드 가능한 변수
					"$permissions_visuals_normal": "permissions.permissions_visitor_radio_visuals_normal",
					// 오버라이드 가능한 변수
					"$permissions_visuals_hover": "permissions.permissions_visitor_radio_visuals_hover"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"permission_level_radio_visitor_settings@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
					// 완전히 제거(공간도 없음)
					"ignored": "(not $is_world_settings)",
					// 오버라이드 가능한 변수
					"$toggle_state_binding_name": "#permission_level_radio_visitor",
					// 오버라이드 가능한 변수
					"$radio_label_text": "permissions.level.visitor",
					// 오버라이드 가능한 변수
					"$radio_label_desc": "permissions.description.visitors",
					// 오버라이드 가능한 변수
					"$permissions_visuals_normal": "permissions.permissions_visitor_visuals_with_title_normal",
					// 오버라이드 가능한 변수
					"$permissions_visuals_hover": "permissions.permissions_visitor_visuals_with_title_hover"
				}
			},
			// MEMBER //
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"permission_level_radio_member@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
					// 완전히 제거(공간도 없음)
					"ignored": "$is_world_settings",
					// 오버라이드 가능한 변수
					"$toggle_state_binding_name": "#permission_level_radio_member",
					// 오버라이드 가능한 변수
					"$radio_label_text": "permissions.level.member",
					// 오버라이드 가능한 변수
					"$permissions_visuals_normal": "permissions.permissions_member_radio_visuals_normal",
					// 오버라이드 가능한 변수
					"$permissions_visuals_hover": "permissions.permissions_member_radio_visuals_hover"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"permission_level_radio_member_settings@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
					// 완전히 제거(공간도 없음)
					"ignored": "(not $is_world_settings)",
					// 오버라이드 가능한 변수
					"$toggle_state_binding_name": "#permission_level_radio_member",
					// 오버라이드 가능한 변수
					"$radio_label_text": "permissions.level.member",
					// 오버라이드 가능한 변수
					"$radio_label_desc": "permissions.description.members",
					// 오버라이드 가능한 변수
					"$permissions_visuals_normal": "permissions.permissions_member_visuals_with_title_normal",
					// 오버라이드 가능한 변수
					"$permissions_visuals_hover": "permissions.permissions_member_visuals_with_title_hover"
				}
			},
			// OPERATOR //
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"permission_level_radio_operator@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
					// 완전히 제거(공간도 없음)
					"ignored": "$is_world_settings",
					// 오버라이드 가능한 변수
					"$toggle_state_binding_name": "#permission_level_radio_operator",
					// 오버라이드 가능한 변수
					"$radio_label_text": "permissions.level.operator",
					// 오버라이드 가능한 변수
					"$permissions_visuals_normal": "permissions.permissions_op_radio_visuals_normal",
					// 오버라이드 가능한 변수
					"$permissions_visuals_hover": "permissions.permissions_op_radio_visuals_hover"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"permission_level_radio_operator_settings@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
					// 완전히 제거(공간도 없음)
					"ignored": "(not $is_world_settings)",
					// 오버라이드 가능한 변수
					"$toggle_state_binding_name": "#permission_level_radio_operator",
					// 오버라이드 가능한 변수
					"$radio_label_text": "permissions.level.operator",
					// 오버라이드 가능한 변수
					"$radio_label_desc": "permissions.description.operators",
					// 오버라이드 가능한 변수
					"$permissions_visuals_normal": "permissions.permissions_op_visuals_with_title_normal",
					// 오버라이드 가능한 변수
					"$permissions_visuals_hover": "permissions.permissions_op_visuals_with_title_hover"
				}
			},
			// CUSTOM //
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"permission_level_radio_custom@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
					// 완전히 제거(공간도 없음)
					"ignored": "($is_world_settings or $is_in_realm)",
					// 오버라이드 가능한 변수
					"$toggle_state_binding_name": "#permission_level_radio_custom",
					// 오버라이드 가능한 변수
					"$radio_label_text": "permissions.level.custom",
					// 오버라이드 가능한 변수
					"$permissions_visuals_normal": "permissions.permissions_custom_radio_visuals_normal",
					// 오버라이드 가능한 변수
					"$permissions_visuals_hover": "permissions.permissions_custom_radio_visuals_hover"
				}
			}
    ]
  },

  // ???/?? ??
  "game_section/option_dropdown_3": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "flat_world_type_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_type_radio_flat",
          // 오버라이드 가능한 변수
          "$radio_label_text": "generator.flat"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "infinite_world_type_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_type_radio_infinite",
          // 오버라이드 가능한 변수
          "$radio_label_text": "generator.infinite"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "old_world_type_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#world_type_radio_old",
          // 오버라이드 가능한 변수
          "$radio_label_text": "generator.old"
        }
      }
    ]
  },

  // ???/?? ??
  "multiplayer_section/xbl_settings_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "invite_only_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#xbl_broadcast_invite_only",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.xboxliveBroadcast.inviteOnly"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "friends_only_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#xbl_broadcast_friends_only",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.xboxliveBroadcast.friendsOnly"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "friends_of_friends_toggle@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#xbl_broadcast_friends_of_friends",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.xboxliveBroadcast.friendsOfFriends"
        }
      }
    ]
  },

  // ???/?? ??
  "selector_pane_content": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "world_snapshot_image",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "rp_spacer_1": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $is_pregame)",
              // 가로/세로 크기
              "size": [ 1, 1 ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "play_or_create_stack_bedrock": {
    // 가로/세로 크기
    "size": [ "100%", 27 ],
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "create_or_play_button",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "rp_spacer_1": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 1, 1 ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "play_or_create_stack_bedrock/create_or_play_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 가로/세로 크기
    "size": [ "fill", 28 ]
  },

  // ???/?? ??
  "play_or_create_stack_bedrock/play_on_realm_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 가로/세로 크기
    "size": [ "fill", 28 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color": [ 1.0, 0.7294117647058824, 0.9058823529411765 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_color": [ 0.7647058823529412, 0.2980392156862745, 0.9254901960784314 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_color": [ 0.85098, 0.301961, 0.301961 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_alpha": 0.5,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_alpha": 0.4,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_alpha": 0.4,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_default_color": [ 1.0, 1.0, 1.0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_hover_color": [ 1.0, 1.0, 1.0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_pressed_color": [ 1.0, 1.0, 1.0 ]
  },

  // ???/?? ??
  "selector_pane_content/world_snapshot_image/thumbnail/border": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "selector_pane_content/world_snapshot_image": {
    // ?? ????
    "clips_children": true,
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "selector_pane_content/world_snapshot_image/thumbnail": {
    // 가로/세로 크기
    "size": [ "100%", "56.25%x + 2.25px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "game_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "game",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "world"
  },

  // ???/?? ??
  "multiplayer_button": {
    // 오버라이드 가능한 변수
    "$icon_group_name": "game",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "multiplayer"
  },

  // ???/?? ??
  "selector_pane_content/server_settings_visibility_panel": {
  },

  // ???/?? ??
  "selector_pane_content/server_settings_visibility_panel/selector_group_label_0": {
    // 완전히 제거(공간도 없음)
    "ignored": "($is_pregame or $rainbowpie_ui_feature_markbest)"
  },

  // ???/?? ??
  "selector_pane_content/server_settings_visibility_panel/server_spacer": {
    // 가로/세로 크기
    "size": [ 1, 1 ]
  },

  // ???/?? ??
  "selector_pane_content/selector_group_label_1": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_feature_markbest)"
  },

  // ???/?? ??
  "selector_pane_content/spacer": {
    // 가로/세로 크기
    "size": [ 1, 1 ]
  },

  // ???/?? ??
  "addons_selector_panel/spacer_01": {
    // 가로/세로 크기
    "size": [ 1, 1 ]
  },

  // ???/?? ??
  "addons_selector_panel/selector_group_label_2": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_feature_markbest)"
  }
}
```













실전 예제
3 개







### 기본


### 기본
_global_variables.json
실전 예제 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: _global_variables.json
// 분류: 실전 예제 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // RPG 스타일 NPC 대화창 변수

  // NPC 대화 텍스트 색상
  "$npc_dialog_text_color": [0.95, 0.95, 0.95],

  // NPC 이름 색상
  "$npc_name_color": [1.0, 0.9, 0.5],

  // 대화 박스 배경 색상
  "$dialogue_box_bg_color": [0.12, 0.1, 0.08],
  // 오버라이드 가능한 변수
  "$dialogue_box_border_color": [0.4, 0.3, 0.2],

  // 버튼 색상
  "$button_default_bg": [0.2, 0.15, 0.1],
  // 오버라이드 가능한 변수
  "$button_default_border": [0.4, 0.3, 0.2],
  // 오버라이드 가능한 변수
  "$button_hover_bg": [0.35, 0.25, 0.15],
  // 오버라이드 가능한 변수
  "$button_hover_border": [0.8, 0.6, 0.2],
  // 오버라이드 가능한 변수
  "$button_pressed_bg": [0.15, 0.1, 0.05],
  // 오버라이드 가능한 변수
  "$button_pressed_border": [0.3, 0.2, 0.1]
}
```








### 기본
manifest.json
실전 예제 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: manifest.json
// 분류: 실전 예제 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // ?? ??
  "format_version": 2,
  // ???/?? ??
  "header": {
    // ?? ??
    "name": "RPG Style NPC Dialogue UI",
    // ?? ??
    "description": "§eRPG 스타일 NPC 대화창\n§7NPC 이미지를 왼쪽 하단에 배치하고\n§7대화창과 선택지를 RPG 게임처럼 디자인",
    // ?? ??
    "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    // ?? ??
    "version": [1, 0, 0],
    // ?? ??
    "min_engine_version": [1, 20, 0]
  },
  // ???/?? ??
  "modules": [
    {
      // 컨트롤 종류
      "type": "resources",
      // ?? ??
      "uuid": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      // ?? ??
      "version": [1, 0, 0]
    }
  ]
}
```








### 기본
npc_interact_screen.json
실전 예제 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: npc_interact_screen.json
// 분류: 실전 예제 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "npc_interact",

  /********************************************************************************
   * RPG 스타일 NPC 대화창
   * 참고: form_buttons 바인딩 사용
   ********************************************************************************/

  // ==================== NPC 초상화 패널 ====================

  "npc_portrait_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [120, "100%"],
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 기준점에서 이동하는 거리
    "offset": [8, 0],

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "portrait_frame": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100% - 8px"],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // ?? (R,G,B,A)
          "color": [0.2, 0.2, 0.2],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "portrait_bg": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 6px", "100% - 14px"],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // ?? (R,G,B,A)
          "color": [0.1, 0.1, 0.1],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // ???/?? ??
        "npc_model": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "live_player_renderer",
          // 가로/세로 크기
          "size": ["100% - 12px", "100% - 20px"],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 애니메이션 목록
          "anims": [
            "@common.screen_exit_size_animation_push",
            "@common.screen_exit_size_animation_pop",
            "@common.screen_entrance_size_animation_push",
            "@common.screen_entrance_size_animation_pop"
          ]
        }
      }
    ]
  },

  // ==================== 대사 텍스트 영역 ====================

  "dialogue_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": ["fill", "100%"],
    // 기준점에서 이동하는 거리
    "offset": [136, 0],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "top_padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", 12]
        }
      },
      {
        // ???/?? ??
        "title_label": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#title_text",
          // ?? (R,G,B,A)
          "color": [1.0, 1.0, 1.0],
          // ?? ?? ?
          "font_size": "large",
          // ?? ??
          "shadow": true,
          // 가로/세로 크기
          "size": ["100% - 200px", "default"],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#title_text",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "title_spacing": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", 6]
        }
      },
      {
        // ???/?? ??
        "dialogue_label": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#dialogtext",
          // ?? (R,G,B,A)
          "color": [0.85, 0.85, 0.85],
          // ?? ??
          "shadow": true,
          // 가로/세로 크기
          "size": ["100% - 200px", "default"],
          // ??/?? ?
          "line_padding": 2,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#dialogtext"
            }
          ]
        }
      }
    ]
  },

  // ==================== 버튼 (참고 코드 방식) ====================

  "button_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", 30],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button@common.button": {
          // 가로/세로 크기
          "size": ["100% - 4px", "100%"],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",

          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            }
          ],

          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "default": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "bg": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // 가로/세로 크기
                      "size": ["100%", "100%"],
                      // ?? (R,G,B,A)
                      "color": [0.2, 0.2, 0.2],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // 보여줄 글자
                    "text": {
                      // 글자 표시
                      "type": "label",
                      // 보여줄 글자
                      "text": "#form_button_text",
                      // ?? (R,G,B,A)
                      "color": [0.9, 0.9, 0.9],
                      // ?? ??
                      "shadow": true,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "hover": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "bg": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // 가로/세로 크기
                      "size": ["100%", "100%"],
                      // ?? (R,G,B,A)
                      "color": [0.4, 0.4, 0.4],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // 보여줄 글자
                    "text": {
                      // 글자 표시
                      "type": "label",
                      // 보여줄 글자
                      "text": "#form_button_text",
                      // ?? (R,G,B,A)
                      "color": [1.0, 1.0, 1.0],
                      // ?? ??
                      "shadow": true,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "pressed": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "bg": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // 가로/세로 크기
                      "size": ["100%", "100%"],
                      // ?? (R,G,B,A)
                      "color": [0.15, 0.15, 0.15],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // 보여줄 글자
                    "text": {
                      // 글자 표시
                      "type": "label",
                      // 보여줄 글자
                      "text": "#form_button_text",
                      // ?? (R,G,B,A)
                      "color": [0.7, 0.7, 0.7],
                      // ?? ??
                      "shadow": true,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "buttons_stack": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": ["100%", "100%c"],
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "npc_interact.button_item"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
      }
    ]
  },

  // ???/?? ??
  "buttons_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [160, "100%"],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [-8, 0],

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "buttons_scroll@common.scrolling_panel": {
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 오버라이드 가능한 변수
          "$show_background": false,
          // 오버라이드 가능한 변수
          "$scrolling_content": "npc_interact.buttons_stack",
          // 오버라이드 가능한 변수
          "$scroll_size": [5, "100% - 4px"],
          // 오버라이드 가능한 변수
          "$scrolling_pane_size": ["100% - 5px", "100%"],
          // 오버라이드 가능한 변수
          "$scrolling_pane_offset": [0, 0]
        }
      }
    ]
  },

  // ==================== 닫기 버튼 ====================

  "close_button_default": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bg": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": [0.6, 0.1, 0.1],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 보여줄 글자
        "text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "X",
          // ?? (R,G,B,A)
          "color": [1.0, 1.0, 1.0],
          // ?? ??
          "shadow": true,
          // ?? ?? ?
          "font_size": "large",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center"
        }
      }
    ]
  },

  // ???/?? ??
  "close_button_hover": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bg": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": [0.9, 0.2, 0.2],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 보여줄 글자
        "text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "X",
          // ?? (R,G,B,A)
          "color": [1.0, 1.0, 1.0],
          // ?? ??
          "shadow": true,
          // ?? ?? ?
          "font_size": "large",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center"
        }
      }
    ]
  },

  // ???/?? ??
  "close_button_pressed": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bg": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": [0.4, 0.05, 0.05],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 보여줄 글자
        "text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "X",
          // ?? (R,G,B,A)
          "color": [0.7, 0.7, 0.7],
          // ?? ??
          "shadow": true,
          // ?? ?? ?
          "font_size": "large",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "close_button@common.button": {
    // 가로/세로 크기
    "size": [30, 30],
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_exit",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "default@npc_interact.close_button_default": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hover@npc_interact.close_button_hover": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "pressed@npc_interact.close_button_pressed": {}
      }
    ]
  },

  // ==================== 메인 대화 패널 ====================

  // 다른 템플릿을 가져와서 확장(상속)
  "student_custom@common.root_panel": {
    // 가로/세로 크기
    "size": ["100%", 150],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [0, 0],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 오버라이드 가능한 변수
    "$dialog_background": "common.dialog_background_hollow_3",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "bg_panel@common.common_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "npc_portrait@npc_interact.npc_portrait_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialogue_content@npc_interact.dialogue_content_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "buttons@npc_interact.buttons_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "close_btn@npc_interact.close_button": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [-8, 8],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 5
        }
      }
    ],

    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#student_view_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },

  // ==================== 스크린 ====================

  "npc_screen_contents_custom": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "npc_screen_contents@npc_interact.npc_screen_contents": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_worldbuilder)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "student_custom@npc_interact.student_custom": {
          // 완전히 제거(공간도 없음)
          "ignored": "$is_worldbuilder"
        }
      }
    ]
  },

  // ???/?? ??
  "npc_screen": {
    // 오버라이드 가능한 변수
    "$screen_content": "npc_interact.npc_screen_contents_custom",
    // 오버라이드 가능한 변수
    "$screen_bg_content": "common.screen_background"
  }
}
```













이전 버전 예제
3 개







### 벡업


### 벡업
_global_variables.json
이전 버전 예제 · 벡업



필요한 부분만 참고해서 가져가세요.



```
// 예제: _global_variables.json
// 분류: 이전 버전 예제 / 벡업
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // RPG 스타일 NPC 대화창 변수

  // NPC 대화 텍스트 색상
  "$npc_dialog_text_color": [0.95, 0.95, 0.95],

  // NPC 이름 색상
  "$npc_name_color": [1.0, 0.9, 0.5],

  // 대화 박스 배경 색상
  "$dialogue_box_bg_color": [0.12, 0.1, 0.08],
  // 오버라이드 가능한 변수
  "$dialogue_box_border_color": [0.4, 0.3, 0.2],

  // 버튼 색상
  "$button_default_bg": [0.2, 0.15, 0.1],
  // 오버라이드 가능한 변수
  "$button_default_border": [0.4, 0.3, 0.2],
  // 오버라이드 가능한 변수
  "$button_hover_bg": [0.35, 0.25, 0.15],
  // 오버라이드 가능한 변수
  "$button_hover_border": [0.8, 0.6, 0.2],
  // 오버라이드 가능한 변수
  "$button_pressed_bg": [0.15, 0.1, 0.05],
  // 오버라이드 가능한 변수
  "$button_pressed_border": [0.3, 0.2, 0.1]
}
```








### 벡업
npc_interact_screen.json
이전 버전 예제 · 벡업



필요한 부분만 참고해서 가져가세요.



```
// 예제: npc_interact_screen.json
// 분류: 이전 버전 예제 / 벡업
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "npc_interact",

  /********************************************************************************
   * RPG 스타일 NPC 대화창
   * - 대화 박스를 화면 왼쪽 하단으로 이동
   * - NPC 이름과 대화를 RPG 스타일로 디자인
   ********************************************************************************/

  // ==================== 닫기 버튼 ====================

  "close_button_default": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": [0.6, 0.1, 0.1],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 4px", "100% - 4px"],
          // 기준점에서 이동하는 거리
          "offset": [2, 2],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": [0.3, 0.05, 0.05],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // ???/?? ??
        "x_text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "",
          // ?? (R,G,B,A)
          "color": [0.9, 0.9, 0.9],
          // ?? ??
          "shadow": true,
          // ?? ?? ?
          "font_size": "large",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center"
        }
      }
    ]
  },

  // ???/?? ??
  "close_button_hover": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": [0.9, 0.2, 0.2],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 4px", "100% - 4px"],
          // 기준점에서 이동하는 거리
          "offset": [2, 2],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": [0.5, 0.1, 0.1],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // ???/?? ??
        "x_text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "",
          // ?? (R,G,B,A)
          "color": [1.0, 1.0, 1.0],
          // ?? ??
          "shadow": true,
          // ?? ?? ?
          "font_size": "large",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center"
        }
      }
    ]
  },

  // ???/?? ??
  "close_button_pressed": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": [0.4, 0.05, 0.05],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 4px", "100% - 4px"],
          // 기준점에서 이동하는 거리
          "offset": [2, 2],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": [0.2, 0.03, 0.03],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // ???/?? ??
        "x_text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "",
          // ?? (R,G,B,A)
          "color": [0.7, 0.7, 0.7],
          // ?? ??
          "shadow": true,
          // ?? ?? ?
          "font_size": "large",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "close_button@common.button": {
    // 가로/세로 크기
    "size": [30, 30],
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_exit",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "default@npc_interact.close_button_default": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hover@npc_interact.close_button_hover": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "pressed@npc_interact.close_button_pressed": {}
      }
    ]
  },

  // ==================== 커스텀 버튼 ====================

  "student_button_default": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": "$button_default_border",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 4px", "100% - 4px"],
          // 기준점에서 이동하는 거리
          "offset": [2, 2],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": "$button_default_bg",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // ???/?? ??
        "highlight": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 8px", 2],
          // 기준점에서 이동하는 거리
          "offset": [4, 4],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": [0.3, 0.25, 0.15],
          // ???
          "alpha": 0.5,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3
        }
      },
      {
        // 보여줄 글자
        "text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#button_text",
          // ?? (R,G,B,A)
          "color": [0.9, 0.9, 0.9],
          // ?? ??
          "shadow": true,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#button_text"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "student_button_hover": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": "$button_hover_border",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 4px", "100% - 4px"],
          // 기준점에서 이동하는 거리
          "offset": [2, 2],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": "$button_hover_bg",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // ???/?? ??
        "highlight": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 8px", 3],
          // 기준점에서 이동하는 거리
          "offset": [4, 4],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": [1.0, 0.8, 0.3],
          // ???
          "alpha": 0.7,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3
        }
      },
      {
        // 보여줄 글자
        "text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#button_text",
          // ?? (R,G,B,A)
          "color": [1.0, 0.9, 0.4],
          // ?? ??
          "shadow": true,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#button_text"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "student_button_pressed": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": "$button_pressed_border",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 4px", "100% - 4px"],
          // 기준점에서 이동하는 거리
          "offset": [2, 2],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": "$button_pressed_bg",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // 보여줄 글자
        "text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#button_text",
          // ?? (R,G,B,A)
          "color": [0.7, 0.7, 0.7],
          // ?? ??
          "shadow": true,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#button_text"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "student_button_custom@npc_interact.student_button": {
    // 가로/세로 크기
    "size": ["100% - 4px", 35],
    // 오버라이드 가능한 변수
    "$default_button_content": "npc_interact.student_button_default",
    // 오버라이드 가능한 변수
    "$hover_button_content": "npc_interact.student_button_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_content": "npc_interact.student_button_pressed"
  },

  // ==================== 커스텀 대화 패널 ====================

  "student_custom_dialog": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%c"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "student_custom_dialog_stack_panel@npc_interact.student_custom_dialog_stack_panel": {}
      }
    ]
  },

  // ???/?? ??
  "student_custom_dialog_stack_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": ["100%", "100%c"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "top_padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", 8]
        }
      },
      {
        // ???/?? ??
        "npc_name_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", "100%c"],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "name_tag_border": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": ["100%c + 20px", 28],
                // ?? (R,G,B,A)
                "color": "$button_hover_border",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "name_tag_bg": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // 가로/세로 크기
                      "size": ["100% - 4px", "100% - 4px"],
                      // 기준점에서 이동하는 거리
                      "offset": [2, 2],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // ?? (R,G,B,A)
                      "color": "$button_default_bg",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "npc_name": {
                            // 글자 표시
                            "type": "label",
                            // 보여줄 글자
                            "text": "#title_text",
                            // ?? (R,G,B,A)
                            "color": "$npc_name_color",
                            // ?? ??
                            "shadow": true,
                            // ?? ?? ?
                            "font_size": "normal",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 3,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#title_text",
                                // 게임이 주는 전역 값 연결
                                "binding_type": "global"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "name_padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", 8]
        }
      },
      {
        // ???/?? ??
        "text_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", "100%c"],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "message_label": {
                // 글자 표시
                "type": "label",
                // 가로/세로 크기
                "size": ["100% - 16px", "default"],
                // 기준점에서 이동하는 거리
                "offset": [8, 0],
                // 보여줄 글자
                "text": "#dialogtext",
                // ?? (R,G,B,A)
                "color": "$npc_dialog_text_color",
                // ?? ??
                "shadow": true,
                // ??/?? ?
                "line_padding": 3,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#dialogtext"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "middle_padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", 8]
        }
      },
      {
        // ???/?? ??
        "buttons": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": ["102%", "100%cm"],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "actions": {
                // 격자 컨테이너: 칸칸이 배치
                "type": "grid",
                // 가로/세로 크기
                "size": ["fill", "default"],
                // ??? ?? ?
                "grid_item_template": "npc_interact.student_button_custom",
                // ??? ?? ?
                "grid_dimension_binding": "#student_button_grid_dimensions",
                // 목록 이름
                "collection_name": "student_buttons_collection",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#student_button_grid_dimensions"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "bottom_padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", 8]
        }
      }
    ]
  },

  // ==================== NPC 초상화 패널 (왼쪽 하단) ====================

  "npc_portrait_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [180, 220],
    // 기준점에서 이동하는 거리
    "offset": [20, -20],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 프레임 외곽선
        "frame_border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": "$dialogue_box_border_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 프레임 배경
        "frame_bg": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 6px", "100% - 6px"],
          // 기준점에서 이동하는 거리
          "offset": [3, 3],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": [0.15, 0.12, 0.1],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // NPC 모델 배경창
        "npc_model_window": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 12px", "100% - 42px"],
          // 기준점에서 이동하는 거리
          "offset": [6, 6],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ???
          "alpha": 0.3,
          // ?? (R,G,B,A)
          "color": [0.2, 0.2, 0.3],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3
        }
      },
      {
        // NPC 실제 모델
        "npc_model": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "live_player_renderer",
          // 가로/세로 크기
          "size": [150, 180],
          // 기준점에서 이동하는 거리
          "offset": [15, 15],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 애니메이션 목록
          "anims": [
            "@common.screen_exit_size_animation_push",
            "@common.screen_exit_size_animation_pop",
            "@common.screen_entrance_size_animation_push",
            "@common.screen_entrance_size_animation_pop"
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "npc_renderer",
              // 계산식/참조 값
              "source_property_name": "#using_npc_renderer",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 하단 이름 영역
        "name_area": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100% - 10px", 25],
          // 기준점에서 이동하는 거리
          "offset": [5, -5],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 5,

          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "name_bg": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // ?? (R,G,B,A)
                "color": "$button_hover_border",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // ???/?? ??
              "name_bg_inner": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": ["100% - 4px", "100% - 4px"],
                // 기준점에서 이동하는 거리
                "offset": [2, 2],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // ?? (R,G,B,A)
                "color": "$button_default_bg",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // ???/?? ??
              "name_text": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "#title_text",
                // ?? (R,G,B,A)
                "color": "$npc_name_color",
                // ?? ??
                "shadow": true,
                // ?? ?? ?
                "font_size": "small",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#title_text",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // ==================== 커스텀 스크린 컨텐츠 (NPC 이미지 + 대화창) ====================

  "npc_screen_contents_custom": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "npc_screen_contents@npc_interact.npc_screen_contents": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_worldbuilder)"
        }
      },
      {
        // NPC 초상화 (왼쪽 하단)
        "npc_portrait@npc_interact.npc_portrait_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "$is_worldbuilder"
        }
      },
      {
        // 대화창 (NPC 이미지 오른쪽)
        "student_custom@common.root_panel": {
          // 가로/세로 크기
          "size": ["50%", 220],
          // 기준점에서 이동하는 거리
          "offset": [210, -20],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 오버라이드 가능한 변수
          "$dialog_background": "common.dialog_background_hollow_3",
          // 완전히 제거(공간도 없음)
          "ignored": "$is_worldbuilder",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,

          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 대화 박스 외곽선
              "box_border": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // ?? (R,G,B,A)
                "color": "$dialogue_box_border_color",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // 대화 박스 배경
              "box_background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": ["100% - 6px", "100% - 6px"],
                // 기준점에서 이동하는 거리
                "offset": [3, 3],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // ?? (R,G,B,A)
                "color": "$dialogue_box_bg_color",
                // ???
                "alpha": 0.95,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // 상단 하이라이트
              "box_highlight": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": ["100% - 12px", 2],
                // 기준점에서 이동하는 거리
                "offset": [6, 6],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // ?? (R,G,B,A)
                "color": [0.3, 0.25, 0.15],
                // ???
                "alpha": 0.6,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3
              }
            },
            {
              // 닫기 버튼 (오른쪽 상단)
              "close_btn@npc_interact.close_button": {
                // 기준점에서 이동하는 거리
                "offset": [-10, 10],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_right",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "scrolling_panel@common.scrolling_panel": {
                // 가로/세로 크기
                "size": ["100% - 20px", "100% - 20px"],
                // 기준점에서 이동하는 거리
                "offset": [10, 10],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 오버라이드 가능한 변수
                "$scrolling_content": "npc_interact.student_custom_dialog",
                // 오버라이드 가능한 변수
                "$show_background": false,
                // 오버라이드 가능한 변수
                "$scroll_size": ["5px", "100% - 4px"],
                // 오버라이드 가능한 변수
                "$scroll_bar_left_padding_size": [1, 0]
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#student_view_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            }
          ]
        }
      }
    ]
  },

  // ==================== 메인 스크린 오버라이드 ====================

  "npc_screen": {
    // 오버라이드 가능한 변수
    "$screen_content": "npc_interact.npc_screen_contents_custom",
    // 오버라이드 가능한 변수
    "$screen_bg_content": "common.screen_background"
  }
}
```












### 소형 npc ui


### 소형 npc ui
npc_interact_screen.json
이전 버전 예제 · 소형 npc ui



필요한 부분만 참고해서 가져가세요.



```
// 예제: npc_interact_screen.json
// 분류: 이전 버전 예제 / 소형 npc ui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "npc_interact",

  /********************************************************************************
   * RPG 스타일 NPC 대화창
   * 레이아웃: [NPC 이미지] [제목 + 대사] [버튼들]
   ********************************************************************************/

  // ==================== NPC 초상화 (왼쪽) ====================

  "npc_portrait": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [120, 140],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 프레임
        "frame": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // ?? (R,G,B,A)
          "color": [0.3, 0.3, 0.3],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 배경
        "bg": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": ["100% - 4px", "100% - 4px"],
          // 기준점에서 이동하는 거리
          "offset": [2, 2],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ?? (R,G,B,A)
          "color": [0.15, 0.15, 0.15],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // NPC 모델
        "npc_model": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "live_player_renderer",
          // 가로/세로 크기
          "size": ["100% - 8px", "100% - 8px"],
          // 기준점에서 이동하는 거리
          "offset": [4, 4],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 애니메이션 목록
          "anims": [
            "@common.screen_exit_size_animation_push",
            "@common.screen_exit_size_animation_pop",
            "@common.screen_entrance_size_animation_push",
            "@common.screen_entrance_size_animation_pop"
          ]
        }
      }
    ]
  },

  // ==================== 대화 내용 영역 (중앙) ====================

  "dialogue_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["fill", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "stack": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_top": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": ["100%", 8]
              }
            },
            {
              // 제목
              "title": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "#title_text",
                // ?? (R,G,B,A)
                "color": [1.0, 1.0, 1.0],
                // ?? ?? ?
                "font_size": "large",
                // ?? ??
                "shadow": true,
                // 가로/세로 크기
                "size": ["100%", "default"],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#title_text",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_middle": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": ["100%", 4]
              }
            },
            {
              // 대사 텍스트
              "dialogue": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "#dialogtext",
                // ?? (R,G,B,A)
                "color": [0.9, 0.9, 0.9],
                // ?? ??
                "shadow": true,
                // 가로/세로 크기
                "size": ["100%", "default"],
                // ??/?? ?
                "line_padding": 2,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#dialogtext"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // ==================== 버튼 영역 (오른쪽) ====================

  "button_area": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [140, "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding_top": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100%", 10]
        }
      },
      {
        // ???/?? ??
        "buttons_grid": {
          // 격자 컨테이너: 칸칸이 배치
          "type": "grid",
          // 가로/세로 크기
          "size": ["100%", "100%c"],
          // ??? ?? ?
          "grid_item_template": "npc_interact.student_button",
          // ??? ?? ?
          "grid_dimension_binding": "#student_button_grid_dimensions",
          // 목록 이름
          "collection_name": "student_buttons_collection",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#student_button_grid_dimensions"
            }
          ]
        }
      }
    ]
  },

  // ==================== 메인 대화 컨테이너 ====================

  // 다른 템플릿을 가져와서 확장(상속)
  "student_custom@common.root_panel": {
    // 가로/세로 크기
    "size": ["80%", 160],
    // ?? ?? ?
    "max_size": [800, 160],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [0, -20],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 오버라이드 가능한 변수
    "$dialog_background": "common.dialog_background_hollow_3",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "common_panel@common.common_panel": {}
      },
      {
        // 가로 레이아웃
        "horizontal_layout": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": ["100% - 16px", "100% - 16px"],
          // 기준점에서 이동하는 거리
          "offset": [8, 8],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "stack": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "npc_portrait@npc_interact.npc_portrait": {}
                  },
                  {
                    // ???/?? ??
                    "spacing_1": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [10, "100%"]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "dialogue_content@npc_interact.dialogue_content": {}
                  },
                  {
                    // ???/?? ??
                    "spacing_2": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [10, "100%"]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "button_area@npc_interact.button_area": {}
                  }
                ]
              }
            }
          ]
        }
      }
    ],

    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#student_view_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },

  // ==================== 스크린 ====================

  "npc_screen_contents_custom": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "npc_screen_contents@npc_interact.npc_screen_contents": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_worldbuilder)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "student_custom@npc_interact.student_custom": {
          // 완전히 제거(공간도 없음)
          "ignored": "$is_worldbuilder"
        }
      }
    ]
  },

  // ???/?? ??
  "npc_screen": {
    // 오버라이드 가능한 변수
    "$screen_content": "npc_interact.npc_screen_contents_custom",
    // 오버라이드 가능한 변수
    "$screen_bg_content": "common.screen_background"
  }
}
```













추가 HUD 예제
3 개







### 단일 파일


### 단일 파일
hud_screen (1).json
추가 HUD 예제 · 단일 파일



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen (1).json
// 분류: 추가 HUD 예제 / 단일 파일
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
"progress_bar":{
    // 오버라이드 가능한 변수
    "$update_text": "update_bar:",// Needed to update the effected bar filling quantity.
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [100, 10],
    // 오버라이드 가능한 변수
    "$max_value": 50.0,
    // ??? ??
    "clip_direction": "right",
    // ?? ??
    "clip_pixelperfect": false,
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {// Changing the texture path via 'property_bag'
      "#texture_0": "textures/ui/Black",// 0
      "#texture_1": "textures/ui/White"// 1
    },
    // 게임 값과 연결하는 규칙 목록
    "bindings":[
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "progress_bar_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - $update_text)",
        // 결과가 들어갈 속성
        "target_property_name": "#value"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('#texture_' + (#preserved_text - ($update_text + #value + ',')))",// Changing the texture path only if you send a title with the $update_text and the #value including the texture path number, For example: 'update_bar:20,0' you need to include the ',' there.
        // 결과가 들어갈 속성
        "target_property_name": "#texture"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(($max_value - #value) / $max_value)",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls":[
      {
        // ???/?? ??
        "progress_bar_control":{
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 게임 값과 연결하는 규칙 목록
          "bindings":[
            {
              // 가져올 값 이름
              "binding_name": "#hud_title_text_string"
            },
            {
              // 가져올 값 이름
              "binding_name": "#hud_title_text_string",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#preserved_text",
              // ?? ???
              "binding_condition": "visibility_changed"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not ('@' + #hud_title_text_string = '@' + #preserved_text) and not (('@' + #hud_title_text_string - $update_text) = '@' + #hud_title_text_string))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  }
```









[분할 목록으로 돌아가기](preview.html#example-view)

