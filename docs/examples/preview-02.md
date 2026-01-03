---
title: 예제 미리보기 (2/12)
outline: false
search: false
---

# 예제 미리보기 (2/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### common
rainbowpie_ui_inventory.json
RainbowPie UI · common



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_inventory.json
// 분류: RainbowPie UI / common
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_inventory",

  // ???/?? ??
  "fastplace_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "64.28571428571429%", "50%" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/fastplace')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "fastplace_button_toggle_base@common_toggles.light_ui_toggle": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_border_enabled": false,
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
    "$button_content": "rainbowpie_ui_inventory.fastplace_icon",

    // 오버라이드 가능한 변수
    "$button_type_panel": "common_buttons.new_ui_binding_button_label",
    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": false,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_inventoryui_item_fastplace",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1011,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "hide_search_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/chevron_right",
    // 가로/세로 크기
    "size": [ "70%", "70%" ],
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "search_box_place_holder_control": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%cm" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "search_icon": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ 10, 10 ],
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/search')",
          // ???
          "alpha": 0.5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "place_holder_text@common.text_edit_box_place_holder_label": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 12, 0 ]
        }
      }
    ]
  },

  // ???/?? ??
  "search_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "50%", "50%" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/search')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "search_button_toggle_base@common_toggles.light_ui_toggle": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_border_enabled": false,
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
    "$button_content": "rainbowpie_ui_inventory.search_icon",

    // 오버라이드 가능한 변수
    "$button_type_panel": "common_buttons.new_ui_binding_button_label",
    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_inventoryui_item_search",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "background_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": "$rainbowpie_ui_theme_inventory_bgicon_size",
    // 기준점에서 이동하는 거리
    "offset": "$rainbowpie_ui_theme_inventory_bgicon_offset",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_anchor",
    // 기준점(어디에서 시작할지)
    "anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_anchor",
    // 사용할 이미지 경로
    "texture": "$rainbowpie_ui_theme_inventory_bgicon_texture_container",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_bgicon_alpha",
    // ?? ??
    "fill": "$rainbowpie_ui_theme_inventory_bgicon_fill",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 4
  },

  // ???/?? ??
  "header_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_header_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_header_alpha",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_inventory_oqaque",
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_theme_inventory_header_alpha": 1.0
      }
    ]
  },

  // ???/?? ??
  "live_player_renderer": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 40, 40 ],
    // 기준점에서 이동하는 거리
    "offset": [ "-100%x", -16 ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "live_player": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "live_player_renderer",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#look_at_cursor": true
          },
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
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

  // ???/?? ??
  "header": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100% - 8px", 23 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 3 ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_title|default": "Default Inventory Header Title",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_title_bindings|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_extra_controls|default": "common.empty_panel",

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_title_border1_size|default": [ 4, 0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_title_border2_size|default": [ 4, 0 ],

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_search_ignored|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "debug01@rainbowpie_ui_common.debug_draw": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_debug_name": "inventory_header"
        }
      },
      {
        // ???/?? ??
        "header_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "title_background@rainbowpie_ui_inventory.header_background": {
                // 가로/세로 크기
                "size": [ "fill", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "title_stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "padding_border_center": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_3f611894)",
                            // 가로/세로 크기
                            "size": [ "fill", 0 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "padding_border": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 4, 0 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "title_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "fill", "100%" ],
                            // ?? ?? ?
                            "max_size": [ "100% - 100%y - 8px", "100%" ],
                            // ?? ????
                            "clips_children": true,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "title_label@rainbowpie_ui_common.text_label_notheme": {
                                  // 가로/세로 크기
                                  "size": [ "default", "default" ],
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "left_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "left_middle",
                                  // ?? (R,G,B,A)
                                  "color": "$rainbowpie_ui_theme_inventory_header_title_color",
                                  // 보여줄 글자
                                  "text": "$rainbowpie_localui_inventoryheader_title",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 10,
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": "$rainbowpie_localui_inventoryheader_title_bindings"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "padding_border2": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 4, 0 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "header_button_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "header_stack_panel": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%" ],
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "right_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "right_middle",
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "extra_control_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%c", "100%" ],
                                        // 보이기/숨기기(공간 유지)
                                        "visible": true,
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // ?? ??
                                            "source_control_name": "show_search_box",
                                            // 계산식/참조 값
                                            "source_property_name": "(not #toggle_state)",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#visible",
                                            // 완전히 제거(공간도 없음)
                                            "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492) or $rainbowpie_localui_inventoryheader_search_ignored)"
                                          }
                                        ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "$rainbowpie_localui_inventoryheader_extra_controls@$rainbowpie_localui_inventoryheader_extra_controls": {
                                              // 완전히 제거(공간도 없음)
                                              "ignored": "($rainbowpie_localui_inventoryheader_extra_controls = 'common.empty_panel')"
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    // add tab in ft
                                    {
                                      // ???/?? ??
                                      "fastplace_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%c", "100%" ],
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "((not $rainbowpie_ui_flag_29bdcf8a) or (not $rainbowpie_ui_flag_84df7492) or $rainbowpie_localui_inventoryheader_search_ignored)",
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // ?? ??
                                            "source_control_name": "show_search_box",
                                            // 계산식/참조 값
                                            "source_property_name": "(not #toggle_state)",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#visible",
                                            // 완전히 제거(공간도 없음)
                                            "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492) or $rainbowpie_localui_inventoryheader_search_ignored)"
                                          }
                                        ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "fastplace_button@rainbowpie_ui_inventory.fastplace_button_toggle_base": {
                                              // 오버라이드 가능한 변수
                                              "$rainbowpie_localui_button_default_alpha": 0.0,
                                              // 오버라이드 가능한 변수
                                              "$button_image_size": [ "100%", "100%" ],
                                              // 기준점(어디에서 시작할지)
                                              "anchor_from": "center",
                                              // 붙일 위치(어디에 놓을지)
                                              "anchor_to": "center",
                                              // 가로/세로 크기
                                              "size": [ "100%y", "100%" ],
                                              // 오버라이드 가능한 변수
                                              "$toggle_group_forced_index": 1010,
                                              // 오버라이드 가능한 변수
                                              "$toggle_view_binding_name": "inventoryui_fastplace",
                                              // 겹치는 순서(숫자 클수록 위)
                                              "layer": 10
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "search_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%c", "100%" ],
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492) or $rainbowpie_localui_inventoryheader_search_ignored)",
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // ???/?? ??
                                            "search_inputbox": {
                                              // 패널: 다른 부품을 담는 바닥판
                                              "type": "panel",
                                              // 가로/세로 크기
                                              "size": [ "100%c", "100%" ],
                                              // 게임 값과 연결하는 규칙 목록
                                              "bindings": [
                                                {
                                                  // 계산/조건 결과를 연결
                                                  "binding_type": "view",
                                                  // ?? ??
                                                  "source_control_name": "show_search_box",
                                                  // 계산식/참조 값
                                                  "source_property_name": "#toggle_state",
                                                  // 결과가 들어갈 속성
                                                  "target_property_name": "#visible"
                                                }
                                              ],
                                              // 이 안에 들어가는 부품 목록
                                              "controls": [
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "back_button@rainbowpie_ui_inventory.search_button_toggle_base": {
                                                    // 오버라이드 가능한 변수
                                                    "$button_content": "rainbowpie_ui_inventory.hide_search_icon",
                                                    // 오버라이드 가능한 변수
                                                    "$button_image_size": [ "100%", "100%" ],
                                                    // 기준점(어디에서 시작할지)
                                                    "anchor_from": "left_middle",
                                                    // 붙일 위치(어디에 놓을지)
                                                    "anchor_to": "left_middle",
                                                    // 가로/세로 크기
                                                    "size": [ "100%y", "76%" ],
                                                    // 오버라이드 가능한 변수
                                                    "$toggle_group_forced_index": 1001,
                                                    // 오버라이드 가능한 변수
                                                    "$toggle_view_binding_name": "hide_search_box",
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 10,
                                                    // 오버라이드 가능한 변수
                                                    "$button_mappings": [
                                                      {
                                                        // 어떤 입력을 받을지
                                                        "from_button_id": "button.menu_select",
                                                        // 어떤 동작을 실행할지
                                                        "to_button_id": "button.menu_select",
                                                        // 입력 시점(pressed 등)
                                                        "mapping_type": "pressed"
                                                      },
                                                      {
                                                        // 어떤 입력을 받을지
                                                        "from_button_id": "button.menu_ok",
                                                        // 어떤 동작을 실행할지
                                                        "to_button_id": "button.menu_select",
                                                        // 입력 시점(pressed 등)
                                                        "mapping_type": "pressed"
                                                      },
                                                      {
                                                        // 어떤 입력을 받을지
                                                        "from_button_id": "button.menu_cancel",
                                                        // 어떤 동작을 실행할지
                                                        "to_button_id": "button.menu_select",
                                                        // 입력 시점(pressed 등)
                                                        "mapping_type": "global"
                                                      }
                                                    ],
                                                    // 게임 값과 연결하는 규칙 목록
                                                    "bindings": [
                                                      {
                                                        // 계산/조건 결과를 연결
                                                        "binding_type": "view",
                                                        // ?? ??
                                                        "source_control_name": "show_search_box",
                                                        // 계산식/참조 값
                                                        "source_property_name": "#toggle_state",
                                                        // 결과가 들어갈 속성
                                                        "target_property_name": "#enabled"
                                                      }
                                                    ]
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "search_text_box@common.text_edit_box": {
                                                    // 오버라이드 가능한 변수
                                                    "$rainbowpie_localui_editbox_enabled": true,
                                                    // 오버라이드 가능한 변수
                                                    "$edit_box_indent_size": [ "100%", "100%" ],
                                                    // 기준점(어디에서 시작할지)
                                                    "anchor_from": "right_middle",
                                                    // 붙일 위치(어디에 놓을지)
                                                    "anchor_to": "right_middle",
                                                    // 가로/세로 크기
                                                    "size": [ "440%y", "76%" ],
                                                    // 오버라이드 가능한 변수
                                                    "$text_box_name": "inventoryui_search_text_box",
                                                    // 오버라이드 가능한 변수
                                                    "$text_edit_box_content_binding_name": "#inventoryui_search_text_box_item_name",
                                                    // 오버라이드 가능한 변수
                                                    "$text_edit_text_control": "inventoryui_search_text_box_display_text",
                                                    // 오버라이드 가능한 변수
                                                    "$place_holder_control": "rainbowpie_ui_inventory.search_box_place_holder_control",
                                                    // 오버라이드 가능한 변수
                                                    "$place_holder_text": "itemGroup.search",
                                                    // 끝에서 다시 처음으로 순환
                                                    "focus_wrap_enabled": false,
                                                    // ?? ?? ?
                                                    "max_length": 32767,
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 12
                                                  }
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "search_button@rainbowpie_ui_inventory.search_button_toggle_base": {
                                              // 오버라이드 가능한 변수
                                              "$rainbowpie_localui_button_default_alpha": 0.0,
                                              // 오버라이드 가능한 변수
                                              "$button_image_size": [ "100%", "100%" ],
                                              // 기준점(어디에서 시작할지)
                                              "anchor_from": "center",
                                              // 붙일 위치(어디에 놓을지)
                                              "anchor_to": "center",
                                              // 가로/세로 크기
                                              "size": [ "100%y", "100%" ],
                                              // 오버라이드 가능한 변수
                                              "$toggle_group_forced_index": 1000,
                                              // 오버라이드 가능한 변수
                                              "$toggle_view_binding_name": "show_search_box",
                                              // 겹치는 순서(숫자 클수록 위)
                                              "layer": 10,
                                              // 게임 값과 연결하는 규칙 목록
                                              "bindings": [
                                                {
                                                  // 계산/조건 결과를 연결
                                                  "binding_type": "view",
                                                  // ?? ??
                                                  "source_control_name": "show_search_box",
                                                  // 계산식/참조 값
                                                  "source_property_name": "(not #toggle_state)",
                                                  // 결과가 들어갈 속성
                                                  "target_property_name": "#enabled"
                                                },
                                                {
                                                  // 계산/조건 결과를 연결
                                                  "binding_type": "view",
                                                  // ?? ??
                                                  "source_control_name": "show_search_box",
                                                  // 계산식/참조 값
                                                  "source_property_name": "(not #toggle_state)",
                                                  // 결과가 들어갈 속성
                                                  "target_property_name": "#visible"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "button_background": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "close_button@rainbowpie_ui_common.close_button": {
                                              // 오버라이드 가능한 변수
                                              "$rainbowpie_ui_theme_closebutton_default_color": "$rainbowpie_ui_theme_inventory_header_title_color",
                                              // 오버라이드 가능한 변수
                                              "$close_button_panel_size": [ "100%", "100%" ],
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
  "header_pocket": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 25 ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_single_title|default": false,

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_title|default": "Default Inventory Header Title",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_title_bindings|default": [],

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_inventory_title|default": "Default Inventory Header Title",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_inventory_title_bindings|default": [],

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_container_title|default": "Default Container Header Title",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_container_title_bindings|default": [],

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "close_button@rainbowpie_ui_common.close_button": {
          // 오버라이드 가능한 변수
          "$rainbowpie_ui_theme_closebutton_default_color": "$rainbowpie_ui_theme_inventory_header_title_color",
          // 오버라이드 가능한 변수
          "$close_button_panel_size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_background@rainbowpie_ui_inventory.header_background": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_label@rainbowpie_ui_common.text_label_notheme": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_localui_inventoryheader_single_title)",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_inventory_header_title_color",
          // 보여줄 글자
          "text": "$rainbowpie_localui_inventoryheader_title",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 게임 값과 연결하는 규칙 목록
          "bindings": "$rainbowpie_localui_inventoryheader_title_bindings"
        }
      },
      {
        // ???/?? ??
        "header_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 완전히 제거(공간도 없음)
          "ignored": "$rainbowpie_localui_inventoryheader_single_title",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "inventory_title": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "50%", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_label@rainbowpie_ui_common.text_label_notheme": {
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_inventory_header_title_color",
                      // 보여줄 글자
                      "text": "$rainbowpie_localui_inventoryheader_inventory_title",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": "$rainbowpie_localui_inventoryheader_inventory_title_bindings"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "container_title": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "50%", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_label@rainbowpie_ui_common.text_label_notheme": {
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_inventory_header_title_color",
                      // 보여줄 글자
                      "text": "$rainbowpie_localui_inventoryheader_container_title",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": "$rainbowpie_localui_inventoryheader_container_title_bindings"
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
```








### common
rainbowpie_ui_store_common.json
RainbowPie UI · common



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_store_common.json
// 분류: RainbowPie UI / common
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_store_common",

  // ???/?? ??
  "header_content_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$ignore_inventory_button": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "title_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "status_and_coins@common_store.status_with_coins": {
                // 완전히 제거(공간도 없음)
                "ignored": "$store_disabled",
                // 오버라이드 가능한 변수
                "$top_status_and_coins_visible_binding_type|default": "none",
                // 오버라이드 가능한 변수
                "$top_status_and_coins_visible_binding|default": "",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 바인딩 종류(변수로 관리되는 경우도 있음)
                    "binding_type": "$top_status_and_coins_visible_binding_type",
                    // 가져올 값 이름
                    "binding_name": "$top_status_and_coins_visible_binding",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding5": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 1, "100%" ]
              }
            },
            {
              // ???/?? ??
              "search_header_stack": {
                // 완전히 제거(공간도 없음)
                "ignored": "($is_on_3p_server or $ignore_search)",
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "search_header_text_box_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 80, "100%" ],
                      // 오버라이드 가능한 변수
                      "$text_edit_clipping_panel_size": [ 57, 15 ],
                      // 오버라이드 가능한 변수
                      "$text_edit_box_label_anchor_point": "left_middle",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "search_header_text_box@common.text_edit_box": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_editbox_enabled": true,
                            // 오버라이드 가능한 변수
                            "$edit_box_indent_size": [ "100%", "100%" ],
                            // 가로/세로 크기
                            "size": [ "100%", "100% - 3px" ],
                            // ?? ?? ?
                            "max_length": 50,
                            // 오버라이드 가능한 변수
                            "$text_box_name": "search_header_text_box",
                            // 오버라이드 가능한 변수
                            "$text_edit_box_enabled_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$text_edit_box_content_binding_name": "#search_header_box_text_content",
                            // 오버라이드 가능한 변수
                            "$place_holder_text": "realmsSettingsScreen.searchBox",
                            // 오버라이드 가능한 변수
                            "$enabled": true,
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "purchase_coins_panel",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "store_layout_search_button",
                            // 오버라이드 가능한 변수
                            "$focus_id": "search_header_text_box",
                            // 끝에서 다시 처음으로 순환
                            "focus_wrap_enabled": false,
                            // 포커스 가능 여부
                            "focus_enabled": true
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "store_layout_search_button_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%c", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "store_layout_search_button@store_layout.store_layout_ribbon_search_button": {
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100%", "100%" ],
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                            // 가로/세로 크기
                            "size": [ "100%y", "100% - 3px" ],
                            // 오버라이드 가능한 변수
                            "$focus_id": "store_layout_search_button",
                            // 오버라이드 가능한 변수
                            "$button_tts_header": "store.search.button"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "padding0": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 1, "100%" ]
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#search_header_visible",
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
  }
}
```








### common
rainbowpie_ui_tab.json
RainbowPie UI · common



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_tab.json
// 분류: RainbowPie UI / common
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_tab",

  // ???/?? ??
  "tab_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$tab_content|default": "common_tabs.empty_tab_content",
    // 오버라이드 가능한 변수
    "$is_transparent_enabled|default": false,
    // 오버라이드 가능한 변수
    "$is_checked_bar_enabled|default": true,
    // 오버라이드 가능한 변수
    "$checked_bar_anchor|default": "top",
    // 오버라이드 가능한 변수
    "$tab_image_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$tab_image_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor|default": "center",
    // 오버라이드 가능한 변수
    "$tab_content_size|default": [ "100% - 4px", "100% - 4px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor|default": "center",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color|default": [],
    // 오버라이드 가능한 변수
    "$hover_state|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_border_layer|default": 50,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "button_glint": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$tab_image_size",
          // 기준점에서 이동하는 거리
          "offset": "$tab_image_offset",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$tab_image_anchor",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$tab_image_anchor",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_99d9851a)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": "$rainbowpie_localui_button_hover_border_layer",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover@rainbowpie_ui_button.glint_border_base": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_glint_size": [ 72, 72 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_glint_alpha": 0.25,
                // 완전히 제거(공간도 없음)
                "ignored": "(not $hover_state)",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($rainbowpie_localui_button_hover_border_layer - ($rainbowpie_localui_button_hover_border_layer * 2))"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "checked_image": {
          // 보이기/숨기기(공간 유지)
          "visible": "$is_checked_bar_enabled",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$tab_image_size",
          // 기준점에서 이동하는 거리
          "offset": "$tab_image_offset",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$tab_image_anchor",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$tab_image_anchor",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "checked_top": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_checked_state)",
                // 보이기/숨기기(공간 유지)
                "visible": "($checked_bar_anchor = 'top')",
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ "100%", 2 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_alpha"
              }
            },
            {
              // ???/?? ??
              "checked_left": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_checked_state)",
                // 보이기/숨기기(공간 유지)
                "visible": "($checked_bar_anchor = 'left')",
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ 2, "100%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_alpha"
              }
            },
            {
              // ???/?? ??
              "checked_right": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_checked_state)",
                // 보이기/숨기기(공간 유지)
                "visible": "($checked_bar_anchor = 'right')",
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ 2, "100%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_alpha"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "tab_image": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": "$tab_image_size",
          // 기준점에서 이동하는 거리
          "offset": "$tab_image_offset",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$tab_image_anchor",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$tab_image_anchor",
          // 오버라이드 가능한 변수
          "$texture|default": "textures/ui/White",
          // 사용할 이미지 경로
          "texture": "$texture",
          // 오버라이드 가능한 변수
          "$rainbowpie_toggle_color|default": [ 0.0, 0.0, 0.0 ],
          // 오버라이드 가능한 변수
          "$rainbowpie_toggle_alpha|default": 0.5,
          // ?? (R,G,B,A)
          "color": "$rainbowpie_toggle_color",
          // ???
          "alpha": "$rainbowpie_toggle_alpha",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$is_transparent_enabled",
              // 오버라이드 가능한 변수
              "$texture": ""
            }
          ]
        }
      },
      {
        // ???/?? ??
        "tab_content_sizer": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 오버라이드 가능한 변수
          "$text_color": "$rainbowpie_localui_button_text_color",
          // 오버라이드 가능한 변수
          "$glyph_color": "$rainbowpie_localui_button_text_color",
          // 가로/세로 크기
          "size": "$tab_content_size",
          // 기준점에서 이동하는 거리
          "offset": "$tab_content_offset",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$tab_content_anchor",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$tab_content_anchor",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "tab_content@$tab_content": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3
              }
            }
          ]
        }
      }
    ]
  }
}
```








### common
rainbowpie_ui_toggle.json
RainbowPie UI · common



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_toggle.json
// 분류: RainbowPie UI / common
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_toggle",

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_panel@rainbowpie_ui_button.rainbowpie_ui_content_button": {
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_unchecked@rainbowpie_ui_toggle.toggle_content_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$default_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_unchecked_hover@rainbowpie_ui_toggle.toggle_content_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$hover_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_unchecked_locked@rainbowpie_ui_toggle.toggle_content_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$locked_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_unchecked_locked_hover@rainbowpie_ui_toggle.toggle_content_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$locked_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_checked@rainbowpie_ui_toggle.toggle_content_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$default_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_border_always_visible": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_checked_hover@rainbowpie_ui_toggle.toggle_content_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$hover_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_border_always_visible": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_checked_locked@rainbowpie_ui_toggle.toggle_content_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$locked_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_border_always_visible": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_content_button_checked_locked_hover@rainbowpie_ui_toggle.toggle_content_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$locked_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_border_always_visible": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_panel@rainbowpie_ui_button.rainbowpie_ui_text_button": {
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_unchecked@rainbowpie_ui_toggle.toggle_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$default_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_unchecked_hover@rainbowpie_ui_toggle.toggle_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$hover_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_unchecked_locked@rainbowpie_ui_toggle.toggle_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$locked_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_unchecked_locked_hover@rainbowpie_ui_toggle.toggle_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$locked_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_checked@rainbowpie_ui_toggle.toggle_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$default_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_checked_hover@rainbowpie_ui_toggle.toggle_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$hover_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_checked_locked@rainbowpie_ui_toggle.toggle_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$locked_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_button_checked_locked_hover@rainbowpie_ui_toggle.toggle_button_panel": {
    // Rainbow Pie UI Variables
    // Button State
    "$locked_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_panel@rainbowpie_ui_button.rainbowpie_ui_button_default": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": 1.0,
    // 오버라이드 가능한 변수
    "$check_state|default": false,
    // 오버라이드 가능한 변수
    "$button_image_size": [
      "100%",
      "100%"
    ],
    // 오버라이드 가능한 변수
    "$toggle_image": "common.empty_panel",
    // 오버라이드 가능한 변수
    "$checked_bar_anchor|default": "top",
    // 오버라이드 가능한 변수
    "$is_checked_bar_enabled|default": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_controls": [
      {
        // ???/?? ??
        "button_glint": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$button_image_size",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_99d9851a)",
          // 보이기/숨기기(공간 유지)
          "visible": "$button_image_visible",
          // 겹치는 순서(숫자 클수록 위)
          "layer": "$rainbowpie_localui_button_hover_border_layer",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover@rainbowpie_ui_button.glint_border_base": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_glint_size": [ 72, 72 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_glint_alpha": 0.25,
                // 완전히 제거(공간도 없음)
                "ignored": "(not $hover_state)",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($rainbowpie_localui_button_hover_border_layer - ($rainbowpie_localui_button_hover_border_layer * 2))"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "button_background": {
          // 이미지 표시
          "type": "image",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $button_image_visible)",
          // 가로/세로 크기
          "size": "$button_image_size",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_button_color",
          // ???
          "alpha": "$rainbowpie_localui_button_alpha",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "checked_image": {
          // 보이기/숨기기(공간 유지)
          "visible": "$is_checked_bar_enabled",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$button_image_size",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "checked_top": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $check_state)",
                // 보이기/숨기기(공간 유지)
                "visible": "($checked_bar_anchor = 'top')",
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [
                  "100%",
                  2
                ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // ?? (R,G,B,A)
                "color": "$rainbowpie_localui_toggle_btbar_color",
                // ???
                "alpha": "$rainbowpie_localui_toggle_btbar_alpha"
              }
            },
            {
              // ???/?? ??
              "checked_left": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $check_state)",
                // 보이기/숨기기(공간 유지)
                "visible": "($checked_bar_anchor = 'left')",
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [
                  2,
                  "100%"
                ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // ?? (R,G,B,A)
                "color": "$rainbowpie_localui_toggle_btbar_color",
                // ???
                "alpha": "$rainbowpie_localui_toggle_btbar_alpha"
              }
            },
            {
              // ???/?? ??
              "checked_right": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $check_state)",
                // 보이기/숨기기(공간 유지)
                "visible": "($checked_bar_anchor = 'right')",
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [
                  2,
                  "100%"
                ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // ?? (R,G,B,A)
                "color": "$rainbowpie_localui_toggle_btbar_color",
                // ???
                "alpha": "$rainbowpie_localui_toggle_btbar_alpha"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "button_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 오버라이드 가능한 변수
          "$button_content_size|default": [
            "100% - 6px",
            "100% - 6px"
          ],
          // 가로/세로 크기
          "size": "$button_content_size",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "$button_type_panel@$button_type_panel": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_unchecked@rainbowpie_ui_toggle.toggle_tab_panel": {
    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_default_color|default": "$rainbowpie_ui_theme_toggle_text_default_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_hover_color|default": "$rainbowpie_ui_theme_toggle_text_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_pressed_color|default": "$rainbowpie_ui_theme_toggle_text_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_alpha",
    // Button State
    "$default_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_unchecked_hover@rainbowpie_ui_toggle.toggle_tab_panel": {
    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_default_color|default": "$rainbowpie_ui_theme_toggle_text_default_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_hover_color|default": "$rainbowpie_ui_theme_toggle_text_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_pressed_color|default": "$rainbowpie_ui_theme_toggle_text_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_alpha",
    // Button State
    "$hover_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_unchecked_locked@rainbowpie_ui_toggle.toggle_tab_panel": {
    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_color": "$rainbowpie_ui_theme_toggle_text_locked_checked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_color|default": "$rainbowpie_ui_theme_toggle_background_locked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_alpha|default": "$rainbowpie_ui_theme_toggle_background_locked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_alpha",
    // Button State
    "$locked_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_unchecked_locked_hover@rainbowpie_ui_toggle.toggle_tab_panel": {
    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_color": "$rainbowpie_ui_theme_toggle_text_locked_checked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_color|default": "$rainbowpie_ui_theme_toggle_background_locked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_alpha|default": "$rainbowpie_ui_theme_toggle_background_locked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_alpha",
    // Button State
    "$locked_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_checked@rainbowpie_ui_toggle.toggle_tab_panel": {
    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_default_color|default": "$rainbowpie_ui_theme_toggle_text_checked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_hover_color|default": "$rainbowpie_ui_theme_toggle_text_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_pressed_color|default": "$rainbowpie_ui_theme_toggle_text_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color|default": "$rainbowpie_ui_theme_toggle_background_checked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_color|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_color|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_btbar_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_btbar_alpha",
    // Button State
    "$default_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_checked_hover@rainbowpie_ui_toggle.toggle_tab_panel": {
    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_default_color|default": "$rainbowpie_ui_theme_toggle_text_checked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_hover_color|default": "$rainbowpie_ui_theme_toggle_text_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_pressed_color|default": "$rainbowpie_ui_theme_toggle_text_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color|default": "$rainbowpie_ui_theme_toggle_background_checked_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_color|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_color|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_btbar_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": "$rainbowpie_ui_theme_toggle_background_checked_hover_btbar_alpha",
    // Button State
    "$hover_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_checked_locked@rainbowpie_ui_toggle.toggle_tab_panel": {
    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_color": "$rainbowpie_ui_theme_toggle_text_locked_checked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_color|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_btbar_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_alpha|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_btbar_alpha",
    // Button State
    "$locked_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_tab_checked_locked_hover@rainbowpie_ui_toggle.toggle_tab_panel": {
    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_color": "$rainbowpie_ui_theme_toggle_text_locked_checked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_color|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_btbar_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_alpha|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": "$rainbowpie_ui_theme_toggle_background_locked_checked_btbar_alpha",
    // Button State
    "$locked_state": true,
    // 오버라이드 가능한 변수
    "$check_state": true
  }
}
```












[분할 목록으로 돌아가기](preview.html#example-view)

### module


### module
chest_fastpick.json
RainbowPie UI · module



필요한 부분만 참고해서 가져가세요.



```
// 예제: chest_fastpick.json
// 분류: RainbowPie UI / module
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_module_chest_fastpick",

  // ???/?? ??
  "pickup_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/chest_pickup')",
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "putin_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/chest_putin')",
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "drop_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$count_text|default": "x1",
    // 오버라이드 가능한 변수
    "$container_item_id|default": "$rainbowpie_ui_flag_item_chest",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container@crafting.item_renderer": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#item_id_aux": "($container_item_id * 65536)"
          }
        }
      },
      {
        // ???/?? ??
        "down_arrow": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 가로/세로 크기
          "size": [ "62.5%", "100%x" ],
          // 기준점에서 이동하는 거리
          "offset": [ "20%x", 0 ],
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_down')",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      }
    ]
  },

  // ???/?? ??
  "slot_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 0 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "input_panel": {
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%x" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // ?? ??
          "consume_hover_events": false,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 오버라이드 가능한 변수
          "$button_take_all_place_all|default": "button.container_auto_place",
          // 오버라이드 가능한 변수
          "$button_auto_place|default": "rainbowpie.placeholder",
          // 오버라이드 가능한 변수
          "$button_mapping_type|default": "pressed",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#is_query_target": true
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "$item_collection_name"
            },
            {
              // 가져올 값 이름
              "binding_name": "#item_id_aux",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$item_collection_name"
            },
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
              "source_property_name": "('\"' + #hover_text - '\n' - '§0' - '§1' - '§2' - '§3' - '§4' - '§5' - '§6' - '§7' - '§8' - '§9' - '§a' - '§b' - '§c' - '§d' - '§e' - '§f' - '§g' - '§h' - '§i' - '§j' - '§k' - '§l' - '§m' - '§n' - '§o' - '§p' - '§q' - '§r' - '§s' - '§t' - '§u' - '§v' - '§w' - '§x' - '§y' - '§z' + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#formatted_name",
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492))"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "inventoryui_search_text_box_display_text",
              // 계산식/참조 값
              "source_property_name": "#item_name",
              // 결과가 들어갈 속성
              "target_property_name": "#query_text",
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492))"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#query_text = '') or (not ((#formatted_name - #query_text) = #formatted_name)))",
              // 결과가 들어갈 속성
              "target_property_name": "#is_query_target",
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492))"
            },
            {
              // 가져올 값 이름
              "binding_name": "#inventory_selected_item"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "container_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#container_selected_item_id_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#container_selected_item_id_aux"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "inventory_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#inventory_selected_item_id_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#inventory_selected_item_id_aux"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "hotbar_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#hotbar_selected_item_id_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#hotbar_selected_item_id_aux"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#container_selected_item_id_aux + #inventory_selected_item_id_aux + #hotbar_selected_item_id_aux)",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_aux"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(((#selected_item_id_aux = 0) or (#selected_item_id_aux = #item_id_aux)) and ((#inventory_selected_item = -1) or (#inventory_selected_item = #item_id_aux)))",
              // 결과가 들어갈 속성
              "target_property_name": "#is_selected_item"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((not (#item_id_aux = -1)) and #is_query_target and #is_selected_item)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ],
          // 입력 키/버튼과 동작 연결
          "button_mappings": [
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_select",
              // 어떤 동작을 실행할지
              "to_button_id": "$button_take_all_place_all",
              // 입력 시점(pressed 등)
              "mapping_type": "$button_mapping_type",
              // ?? ??
              "consume_event": false
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_ok",
              // 어떤 동작을 실행할지
              "to_button_id": "$button_take_all_place_all",
              // 입력 시점(pressed 등)
              "mapping_type": "$button_mapping_type",
              // ?? ??
              "consume_event": false
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_auto_place",
              // 어떤 동작을 실행할지
              "to_button_id": "$button_auto_place",
              // 입력 시점(pressed 등)
              "mapping_type": "$button_mapping_type",
              // ?? ??
              "consume_event": false
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.controller_secondary_select",
              // 어떤 동작을 실행할지
              "to_button_id": "$button_auto_place",
              // 입력 시점(pressed 등)
              "mapping_type": "$button_mapping_type",
              // ?? ??
              "consume_event": false
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "binding_slot_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#is_selected_slot",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$item_collection_name"
      },
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
        "source_property_name": "(#item_id_aux * #is_selected_slot)",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux"
      }
    ]
  },

  // ???/?? ??
  "container_bindings_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "container_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$item_collection_name": "container_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_53@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 53
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_52@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 52
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_51@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 51
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_50@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 50
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_49@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 49
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_48@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 48
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_47@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 47
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_46@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 46
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_45@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 45
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_44@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 44
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_43@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 43
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_42@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 42
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_41@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 41
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_40@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 40
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_39@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 39
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_38@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 38
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_37@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 37
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_36@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 36
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_35@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 35
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_34@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 34
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_33@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 33
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_32@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 32
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_31@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 31
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_30@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 30
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_29@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 29
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_28@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 28
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_27@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 27
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_26@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 26
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_25@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 25
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_24@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 24
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_23@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 23
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_22@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 22
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_21@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 21
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_20@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_19@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 19
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_18@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 18
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_17@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_16@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 16
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_15@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 15
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_14@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 14
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_13@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 13
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_12@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 12
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_11@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_10@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 10
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_9@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 9
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_8@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_7@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_6@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_5@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_4@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_3@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_2@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_1@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_slot_0@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_53",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_53"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_52",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_52"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_51",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_51"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_50",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_50"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_49",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_49"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_48",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_48"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_47",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_47"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_46",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_46"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_45",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_45"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_44",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_44"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_43",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_43"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_42",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_42"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_41",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_41"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_40",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_40"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_39",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_39"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_38",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_38"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_37",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_37"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_36",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_36"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_35",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_35"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_34",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_34"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_33",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_33"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_32",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_32"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_31",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_31"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_30",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_30"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_29",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_29"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_28",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_28"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_27",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_27"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_26",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_26"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_25",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_25"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_24",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_24"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_23",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_23"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_22",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_22"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_21",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_21"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_20",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_20"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_19",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_19"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_18",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_18"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_17",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_17"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_16",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_16"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_15",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_15"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_14",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_14"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_13",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_13"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_12",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_12"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_11",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_11"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_10",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_10"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_9",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_9"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_8",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_8"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_7",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_7"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_6",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_6"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_5",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_5"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_4",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_4"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_3",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_3"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_2",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_1",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_0",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_selected_slot_0 or #is_selected_slot_1 or #is_selected_slot_2 or #is_selected_slot_3 or #is_selected_slot_4 or #is_selected_slot_5 or #is_selected_slot_6 or #is_selected_slot_7 or #is_selected_slot_8 or #is_selected_slot_9 or #is_selected_slot_10 or #is_selected_slot_11 or #is_selected_slot_12 or #is_selected_slot_13 or #is_selected_slot_14 or #is_selected_slot_15 or #is_selected_slot_16 or #is_selected_slot_17 or #is_selected_slot_18 or #is_selected_slot_19 or #is_selected_slot_20 or #is_selected_slot_21 or #is_selected_slot_22 or #is_selected_slot_23 or #is_selected_slot_24 or #is_selected_slot_25 or #is_selected_slot_26 or #is_selected_slot_27 or #is_selected_slot_28 or #is_selected_slot_29 or #is_selected_slot_30 or #is_selected_slot_31 or #is_selected_slot_32 or #is_selected_slot_33 or #is_selected_slot_34 or #is_selected_slot_35 or #is_selected_slot_36 or #is_selected_slot_37 or #is_selected_slot_38 or #is_selected_slot_39 or #is_selected_slot_40 or #is_selected_slot_41 or #is_selected_slot_42 or #is_selected_slot_43 or #is_selected_slot_44 or #is_selected_slot_45 or #is_selected_slot_46 or #is_selected_slot_47 or #is_selected_slot_48 or #is_selected_slot_49 or #is_selected_slot_50 or #is_selected_slot_51 or #is_selected_slot_52 or #is_selected_slot_53)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_container_slot_selected"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_53",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_53"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_52",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_52"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_51",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_51"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_50",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_50"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_49",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_49"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_48",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_48"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_47",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_47"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_46",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_46"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_45",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_45"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_44",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_44"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_43",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_43"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_42",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_42"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_41",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_41"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_40",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_40"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_39",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_39"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_38",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_38"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_37",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_37"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_36",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_36"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_35",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_35"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_34",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_34"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_33",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_33"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_32",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_32"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_31",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_31"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_30",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_30"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_29",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_29"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_28",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_28"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_27",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_27"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_26",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_26"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_25",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_25"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_24",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_24"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_23",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_23"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_22",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_22"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_21",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_21"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_20",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_20"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_19",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_19"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_18",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_18"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_17",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_17"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_16",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_16"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_15",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_15"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_14",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_14"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_13",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_13"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_12",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_12"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_11",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_11"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_10",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_10"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_9",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_9"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_8",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_8"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_7",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_7"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_6",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_6"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_5",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_5"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_4",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_4"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_3",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_3"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_2",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_1",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "container_bindings_slot_0",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#selected_item_id_aux_0 + #selected_item_id_aux_1 + #selected_item_id_aux_2 + #selected_item_id_aux_3 + #selected_item_id_aux_4 + #selected_item_id_aux_5 + #selected_item_id_aux_6 + #selected_item_id_aux_7 + #selected_item_id_aux_8 + #selected_item_id_aux_9 + #selected_item_id_aux_10 + #selected_item_id_aux_11 + #selected_item_id_aux_12 + #selected_item_id_aux_13 + #selected_item_id_aux_14 + #selected_item_id_aux_15 + #selected_item_id_aux_16 + #selected_item_id_aux_17 + #selected_item_id_aux_18 + #selected_item_id_aux_19 + #selected_item_id_aux_20 + #selected_item_id_aux_21 + #selected_item_id_aux_22 + #selected_item_id_aux_23 + #selected_item_id_aux_24 + #selected_item_id_aux_25 + #selected_item_id_aux_26 + #selected_item_id_aux_27 + #selected_item_id_aux_28 + #selected_item_id_aux_29 + #selected_item_id_aux_30 + #selected_item_id_aux_31 + #selected_item_id_aux_32 + #selected_item_id_aux_33 + #selected_item_id_aux_34 + #selected_item_id_aux_35 + #selected_item_id_aux_36 + #selected_item_id_aux_37 + #selected_item_id_aux_38 + #selected_item_id_aux_39 + #selected_item_id_aux_40 + #selected_item_id_aux_41 + #selected_item_id_aux_42 + #selected_item_id_aux_43 + #selected_item_id_aux_44 + #selected_item_id_aux_45 + #selected_item_id_aux_46 + #selected_item_id_aux_47 + #selected_item_id_aux_48 + #selected_item_id_aux_49 + #selected_item_id_aux_50 + #selected_item_id_aux_51 + #selected_item_id_aux_52 + #selected_item_id_aux_53)",
        // 결과가 들어갈 속성
        "target_property_name": "#container_selected_item_id_aux"
      }
    ]
  },

  // ???/?? ??
  "inventory_bindings_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "inventory_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$item_collection_name": "inventory_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_26@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 26
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_25@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 25
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_24@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 24
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_23@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 23
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_22@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 22
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_21@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 21
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_20@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_19@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 19
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_18@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 18
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_17@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_16@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 16
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_15@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 15
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_14@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 14
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_13@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 13
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_12@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 12
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_11@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_10@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 10
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_9@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 9
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_8@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_7@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_6@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_5@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_4@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_3@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_2@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_1@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_0@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_26",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_26"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_25",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_25"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_24",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_24"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_23",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_23"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_22",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_22"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_21",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_21"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_20",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_20"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_19",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_19"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_18",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_18"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_17",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_17"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_16",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_16"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_15",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_15"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_14",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_14"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_13",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_13"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_12",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_12"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_11",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_11"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_10",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_10"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_9",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_9"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_8",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_8"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_7",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_7"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_6",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_6"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_5",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_5"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_4",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_4"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_3",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_3"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_2",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_1",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_0",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_selected_slot_0 or #is_selected_slot_1 or #is_selected_slot_2 or #is_selected_slot_3 or #is_selected_slot_4 or #is_selected_slot_5 or #is_selected_slot_6 or #is_selected_slot_7 or #is_selected_slot_8 or #is_selected_slot_9 or #is_selected_slot_10 or #is_selected_slot_11 or #is_selected_slot_12 or #is_selected_slot_13 or #is_selected_slot_14 or #is_selected_slot_15 or #is_selected_slot_16 or #is_selected_slot_17 or #is_selected_slot_18 or #is_selected_slot_19 or #is_selected_slot_20 or #is_selected_slot_21 or #is_selected_slot_22 or #is_selected_slot_23 or #is_selected_slot_24 or #is_selected_slot_25 or #is_selected_slot_26)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_inventory_slot_selected"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_26",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_26"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_25",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_25"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_24",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_24"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_23",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_23"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_22",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_22"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_21",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_21"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_20",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_20"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_19",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_19"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_18",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_18"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_17",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_17"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_16",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_16"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_15",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_15"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_14",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_14"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_13",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_13"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_12",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_12"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_11",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_11"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_10",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_10"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_9",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_9"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_8",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_8"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_7",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_7"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_6",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_6"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_5",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_5"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_4",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_4"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_3",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_3"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_2",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_1",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_0",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#selected_item_id_aux_0 + #selected_item_id_aux_1 + #selected_item_id_aux_2 + #selected_item_id_aux_3 + #selected_item_id_aux_4 + #selected_item_id_aux_5 + #selected_item_id_aux_6 + #selected_item_id_aux_7 + #selected_item_id_aux_8 + #selected_item_id_aux_9 + #selected_item_id_aux_10 + #selected_item_id_aux_11 + #selected_item_id_aux_12 + #selected_item_id_aux_13 + #selected_item_id_aux_14 + #selected_item_id_aux_15 + #selected_item_id_aux_16 + #selected_item_id_aux_17 + #selected_item_id_aux_18 + #selected_item_id_aux_19 + #selected_item_id_aux_20 + #selected_item_id_aux_21 + #selected_item_id_aux_22 + #selected_item_id_aux_23 + #selected_item_id_aux_24 + #selected_item_id_aux_25 + #selected_item_id_aux_26)",
        // 결과가 들어갈 속성
        "target_property_name": "#inventory_selected_item_id_aux"
      }
    ]
  },

  // ???/?? ??
  "hotbar_bindings_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$item_collection_name": "hotbar_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_8@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_7@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_6@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_5@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_4@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_3@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_2@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_1@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_0@rainbowpie_module_chest_fastpick.binding_slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_8",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_8"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_7",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_7"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_6",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_6"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_5",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_5"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_4",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_4"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_3",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_3"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_2",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_1",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_0",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_selected_slot_0 or #is_selected_slot_1 or #is_selected_slot_2 or #is_selected_slot_3 or #is_selected_slot_4 or #is_selected_slot_5 or #is_selected_slot_6 or #is_selected_slot_7 or #is_selected_slot_8)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_hotbar_slot_selected"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_8",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_8"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_7",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_7"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_6",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_6"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_5",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_5"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_4",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_4"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_3",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_3"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_2",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_1",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_0",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#selected_item_id_aux_0 + #selected_item_id_aux_1 + #selected_item_id_aux_2 + #selected_item_id_aux_3 + #selected_item_id_aux_4 + #selected_item_id_aux_5 + #selected_item_id_aux_6 + #selected_item_id_aux_7 + #selected_item_id_aux_8)",
        // 결과가 들어갈 속성
        "target_property_name": "#hotbar_selected_item_id_aux"
      }
    ]
  },

  // ???/?? ??
  "pickup_input_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "container_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "container_items",
    // 오버라이드 가능한 변수
    "$large_chest|default": false,
    // 오버라이드 가능한 변수
    "$redstone_container|default": false,
    // 오버라이드 가능한 변수
    "$redstone_container_hopper|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_53@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 53
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_52@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 52
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_51@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 51
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_50@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 50
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_49@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 49
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_48@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 48
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_47@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 47
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_46@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 46
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_45@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 45
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_44@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 44
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_43@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 43
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_42@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 42
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_41@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 41
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_40@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 40
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_39@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 39
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_38@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 38
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_37@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 37
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_36@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 36
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_35@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 35
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_34@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 34
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_33@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 33
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_32@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 32
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_31@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 31
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_30@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 30
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_29@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 29
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_28@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 28
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_27@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $large_chest or $redstone_container)",
          // ?? ??
          "collection_index": 27
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_26@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 26
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_25@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 25
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_24@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 24
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_23@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 23
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_22@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 22
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_21@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 21
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_20@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_19@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 19
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_18@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 18
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_17@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_16@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 16
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_15@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 15
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_14@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 14
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_13@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 13
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_12@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 12
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_11@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_10@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 10
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_9@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container)",
          // ?? ??
          "collection_index": 9
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_8@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container_hopper)",
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_7@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container_hopper)",
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_6@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container_hopper)",
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_5@rainbowpie_module_chest_fastpick.slot_item": {
          // 완전히 제거(공간도 없음)
          "ignored": "($redstone_container_hopper)",
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_4@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_3@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_2@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_1@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_slot_0@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ]
  },

  // ???/?? ??
  "putin_input_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "inventory_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "inventory_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_26@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 26
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_25@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 25
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_24@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 24
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_23@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 23
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_22@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 22
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_21@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 21
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_20@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_19@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 19
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_18@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 18
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_17@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_16@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 16
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_15@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 15
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_14@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 14
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_13@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 13
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_12@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 12
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_11@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_10@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 10
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_9@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 9
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_8@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_7@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_6@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_5@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_4@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_3@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_2@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_1@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_0@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ]
  },

  // ???/?? ??
  "putin_hotbar_input_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "hotbar_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_8@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_7@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_6@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_5@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_4@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_3@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_2@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_1@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_0@rainbowpie_module_chest_fastpick.slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ]
  },

  // ???/?? ??
  "chest_fastpick_redstone": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$redstone_container|default": false,
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_module_chest_fastpick)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chest_fastpick@rainbowpie_module_chest_fastpick.chest_fastpick": {
          // 완전히 제거(공간도 없음)
          "ignored": "((not $rainbowpie_ui_module_chest_fastpick) or (not ($redstone_container and $rainbowpie_ui_moduleflag_chest_fastpick_redstone_blocks)))"
        }
      }
    ]
  },

  // ???/?? ??
  "chest_fastpick": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_module_chest_fastpick)",

    // 오버라이드 가능한 변수
    "$drop_button_size|default": [ 22, 22 ],
    // 오버라이드 가능한 변수
    "$drop_button_offset|default": [ 20, -80 ],
    // 오버라이드 가능한 변수
    "$putin_button_size|default": [ 22, 22 ],
    // 오버라이드 가능한 변수
    "$putin_button_offset|default": [ 20, -26 ],
    // 오버라이드 가능한 변수
    "$pickup_button_size|default": [ 22, 22 ],
    // 오버라이드 가능한 변수
    "$pickup_button_offset|default": [ 20, -2 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_bindings_panel@rainbowpie_module_chest_fastpick.container_bindings_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_panel@rainbowpie_module_chest_fastpick.inventory_bindings_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_panel@rainbowpie_module_chest_fastpick.hotbar_bindings_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "drop_input_panel@rainbowpie_module_chest_fastpick.pickup_input_panel": {
          // 오버라이드 가능한 변수
          "$button_take_all_place_all": "button.drop_all",
          // 가로/세로 크기
          "size": "$drop_button_size",
          // 기준점에서 이동하는 거리
          "offset": "$drop_button_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#inventory_selected_item"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "container_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#is_container_slot_selected",
              // 결과가 들어갈 속성
              "target_property_name": "#is_container_slot_selected"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "inventory_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#is_inventory_slot_selected",
              // 결과가 들어갈 속성
              "target_property_name": "#is_inventory_slot_selected"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "hotbar_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#is_hotbar_slot_selected",
              // 결과가 들어갈 속성
              "target_property_name": "#is_hotbar_slot_selected"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((not (#is_container_slot_selected or #is_inventory_slot_selected or #is_hotbar_slot_selected)) and (#inventory_selected_item = -1))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "putin_input_panel@rainbowpie_module_chest_fastpick.putin_input_panel": {
          // 가로/세로 크기
          "size": "$putin_button_size",
          // 기준점에서 이동하는 거리
          "offset": "$putin_button_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "putin_hotbar_input_panel@rainbowpie_module_chest_fastpick.putin_hotbar_input_panel": {
          // 오버라이드 가능한 변수
          "$button_take_all_place_all": "rainbowpie.placeholder",
          // 오버라이드 가능한 변수
          "$button_auto_place": "button.container_auto_place",
          // 오버라이드 가능한 변수
          "$button_mapping_type": "pressed",
          // 가로/세로 크기
          "size": "$putin_button_size",
          // 기준점에서 이동하는 거리
          "offset": "$putin_button_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "(not #using_touch)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "putin_hotbar_input_panel_touch@rainbowpie_module_chest_fastpick.putin_hotbar_input_panel": {
          // 오버라이드 가능한 변수
          "$button_take_all_place_all": "button.container_auto_place",
          // 오버라이드 가능한 변수
          "$button_auto_place": "rainbowpie.placeholder",
          // 오버라이드 가능한 변수
          "$button_mapping_type": "double_pressed",
          // 가로/세로 크기
          "size": "$putin_button_size",
          // 기준점에서 이동하는 거리
          "offset": "$putin_button_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#using_touch",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "pickup_input_panel@rainbowpie_module_chest_fastpick.pickup_input_panel": {
          // 가로/세로 크기
          "size": "$pickup_button_size",
          // 기준점에서 이동하는 거리
          "offset": "$pickup_button_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "drop_button@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$button_focus_precedence": -1,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_desc_enabled": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.chest.fastpick.dropall",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_hover_border_layer": 30,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "rainbowpie.chestdropall",
          // 오버라이드 가능한 변수
          "$button_content": "rainbowpie_module_chest_fastpick.drop_icon",
          // ?? ??
          "consume_hover_events": false,
          // 가로/세로 크기
          "size": "$drop_button_size",
          // 기준점에서 이동하는 거리
          "offset": "$drop_button_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#inventory_selected_item"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "container_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#is_container_slot_selected",
              // 결과가 들어갈 속성
              "target_property_name": "#is_container_slot_selected"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "inventory_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#is_inventory_slot_selected",
              // 결과가 들어갈 속성
              "target_property_name": "#is_inventory_slot_selected"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "hotbar_bindings_panel",
              // 계산식/참조 값
              "source_property_name": "#is_hotbar_slot_selected",
              // 결과가 들어갈 속성
              "target_property_name": "#is_hotbar_slot_selected"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((not (#is_container_slot_selected or #is_inventory_slot_selected or #is_hotbar_slot_selected)) and (#inventory_selected_item = -1))",
              // 결과가 들어갈 속성
              "target_property_name": "#enabled"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "putin_button@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$button_focus_precedence": -1,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_desc_enabled": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.chest.fastpick.putall",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_hover_border_layer": 30,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "rainbowpie.chestputin",
          // 오버라이드 가능한 변수
          "$button_content": "rainbowpie_module_chest_fastpick.putin_icon",
          // ?? ??
          "consume_hover_events": false,
          // 가로/세로 크기
          "size": "$putin_button_size",
          // 기준점에서 이동하는 거리
          "offset": "$putin_button_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "pickup_button@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$button_focus_precedence": -1,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_desc_enabled": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.chest.fastpick.pickall",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_hover_border_layer": 30,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "rainbowpie.chestpickup",
          // 오버라이드 가능한 변수
          "$button_content": "rainbowpie_module_chest_fastpick.pickup_icon",
          // ?? ??
          "consume_hover_events": false,
          // 가로/세로 크기
          "size": "$pickup_button_size",
          // 기준점에서 이동하는 거리
          "offset": "$pickup_button_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  }
}
```








### module
hud_block_counter.json
RainbowPie UI · module



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_block_counter.json
// 분류: RainbowPie UI / module
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_module_hud_block_counter",

  // 다른 템플릿을 가져와서 확장(상속)
  "hud_block_counter@rainbowpieui_compatibility_config.compatibility_variables": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_module_hud_block_counter)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_item_id_aux@rainbowpie_modulelib_hud_item.selected_slot_item_id_aux": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_item_count@rainbowpie_modulelib_hud_item.selected_slot_item_count": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "block_count@rainbowpie_modulelib_hud_item.hotbar_item_count": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_inventory_target_item_ids": "$rainbowpie_ui_moduleflag_hud_block_counter_blockids"
        }
      },
      {
        // ???/?? ??
        "counter_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 18 ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "tip_text_background": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%c + 4px", "100%c + 4px" ],
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/r_white')",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_text_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_text_background_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 30,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 가로/세로 크기
                      "size": [ "100%c", 12 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "item_renderer@rainbowpie_ui_common.item_renderer": {
                            // 가로/세로 크기
                            "size": [ "100%y", "100%"  ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "selected_slot_item_id_aux",
                                // 계산식/참조 값
                                "source_property_name": "#selected_item_id_aux_int",
                                // 결과가 들어갈 속성
                                "target_property_name": "#item_id_aux"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "padding_0": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 2, 2 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "selected_count_text_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "count_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "#selected_item_stack_count_str",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "selected_slot_item_count",
                                      // 계산식/참조 값
                                      "source_property_name": "('x' + #selected_item_stack_count_int)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#selected_item_stack_count_str"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "selected_slot_item_count",
                                      // 계산식/참조 값
                                      "source_property_name": "(not ((#selected_item_stack_count_int = 16) or (#selected_item_stack_count_int < 16)))",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#visible"
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "count_text_red@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "#selected_item_stack_count_str",
                                  // ?? (R,G,B,A)
                                  "color": [ 1.0, 0.333, 0.333 ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "selected_slot_item_count",
                                      // 계산식/참조 값
                                      "source_property_name": "('x' + #selected_item_stack_count_int)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#selected_item_stack_count_str"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "selected_slot_item_count",
                                      // 계산식/참조 값
                                      "source_property_name": "((#selected_item_stack_count_int = 16) or (#selected_item_stack_count_int < 16))",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#visible"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "count_text_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%" ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "block_count",
                                // 계산식/참조 값
                                "source_property_name": "#hotbar_target_item_total_count_int",
                                // 결과가 들어갈 속성
                                "target_property_name": "#hotbar_target_item_total_count_int"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "selected_slot_item_count",
                                // 계산식/참조 값
                                "source_property_name": "#selected_item_stack_count_int",
                                // 결과가 들어갈 속성
                                "target_property_name": "#selected_item_stack_count_int"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not (#hotbar_target_item_total_count_int = #selected_item_stack_count_int))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "count_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "#hotbar_target_item_total_count_int",
                                  // ?? (R,G,B,A)
                                  "color": [ 0.7, 0.7, 0.7 ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "block_count",
                                      // 계산식/참조 값
                                      "source_property_name": "('|x' + #hotbar_target_item_total_count_int)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#hotbar_target_item_total_count_int"
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
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "selected_slot_item_id_aux",
              // 계산식/참조 값
              "source_property_name": "#selected_item_id_aux_int",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_aux_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('aux' + #selected_item_id_aux_int + ',')",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_aux_str"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#selected_item_id_aux_int / 65536)",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('id' + #selected_item_id_int + ',')",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_str"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (($rainbowpie_ui_moduleflag_hud_block_counter_blockids - #selected_item_id_aux_str) = $rainbowpie_ui_moduleflag_hud_block_counter_blockids))",
              // 결과가 들어갈 속성
              "target_property_name": "#is_match_aux"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (($rainbowpie_ui_moduleflag_hud_block_counter_blockids - #selected_item_id_str) = $rainbowpie_ui_moduleflag_hud_block_counter_blockids))",
              // 결과가 들어갈 속성
              "target_property_name": "#is_match_id"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#is_match_aux or #is_match_id)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  }
}
```








### module
hud_bow_helper.json
RainbowPie UI · module



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_bow_helper.json
// 분류: RainbowPie UI / module
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_module_hud_bow_helper",

  // ???/?? ??
  "arrow_slot": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "item_count_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_renderer@rainbowpie_ui_common.item_renderer": {
                // 가로/세로 크기
                "size": [ "100%y", "100%"  ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 가져올 값 이름
                    "binding_name": "#item_id_aux",
                    // 목록 이름
                    "binding_collection_name": "hotbar_items"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 2, 2 ]
              }
            },
            {
              // ???/?? ??
              "count_text_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "count_text@rainbowpie_ui_common.text_label": {
                      // 보여줄 글자
                      "text": "#inventory_stack_count_str",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#inventory_stack_count",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "hotbar_items"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#inventory_stack_count = 0)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_single_item"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "('x' + ((#is_single_item * 1) + #inventory_stack_count))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#inventory_stack_count_str"
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
        "binding_name": "#item_id_aux",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('aux' + #item_id_aux + ',')",
        // 결과가 들어갈 속성
        "target_property_name": "#item_id_aux_str"
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
        "source_property_name": "('id' + #item_id + ',')",
        // 결과가 들어갈 속성
        "target_property_name": "#item_id_str"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (($rainbowpie_ui_moduleflag_hud_bow_helper_arrowids - #item_id_aux_str) = $rainbowpie_ui_moduleflag_hud_bow_helper_arrowids))",
        // 결과가 들어갈 속성
        "target_property_name": "#is_match_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (($rainbowpie_ui_moduleflag_hud_bow_helper_arrowids - #item_id_str) = $rainbowpie_ui_moduleflag_hud_bow_helper_arrowids))",
        // 결과가 들어갈 속성
        "target_property_name": "#is_match_id"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_match_aux or #is_match_id)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "arrow_slot_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 가로/세로 크기
    "size": [ "100%cm", "100%" ],
    // ?? ????
    "clips_children": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_0@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_1@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_2@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_3@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_4@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_5@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_6@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_7@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_8@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_9@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 9
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_10@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 10
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_11@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_12@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 12
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_13@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 13
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_14@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 14
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_15@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 15
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_16@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 16
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_17@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_18@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 18
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_19@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 19
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_20@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_21@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 21
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_22@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 22
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_23@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 23
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_24@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 24
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_25@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 25
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_26@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 26
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_27@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 27
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_28@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 28
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_29@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 29
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_30@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 30
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_31@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 31
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_32@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 32
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_33@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 33
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_34@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 34
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_slot_35@rainbowpie_module_hud_bow_helper.arrow_slot": {
          // ?? ??
          "collection_index": 35
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hud_bow_helper@rainbowpieui_compatibility_config.compatibility_variables": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_module_hud_bow_helper)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_item_id_aux@rainbowpie_modulelib_hud_item.selected_slot_item_id_aux": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow_count@rainbowpie_modulelib_hud_item.inventory_item_count": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_inventory_target_item_ids": "$rainbowpie_ui_moduleflag_hud_bow_helper_arrowids"
        }
      },
      {
        // ???/?? ??
        "counter_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$anchor",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$anchor",
          // 가로/세로 크기
          "size": "$size",
          // 기준점에서 이동하는 거리
          "offset": "$offset",
          // 보이기/숨기기(공간 유지)
          "visible": false,

          // 오버라이드 가능한 변수
          "$anchor": "bottom_left",
          // 오버라이드 가능한 변수
          "$size": [ "100%c", "100%c" ],
          // 오버라이드 가능한 변수
          "$offset": [ "50% + 120px", -6 ],
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$rainbowpie_ui_feature_hud_durability", // HUD Durability
              // 오버라이드 가능한 변수
              "$anchor": "bottom_right",
              // 오버라이드 가능한 변수
              "$offset": [ -7, -26 ]
            }
          ],

          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "tip_text_background": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%c + 4px", "100%c + 4px" ],
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/r_white')",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_text_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_text_background_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 30,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 가로/세로 크기
                      "size": [ "100%c", 12 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "no_arrows_text_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "count_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "No arrows",
                                  // ?? (R,G,B,A)
                                  "color": [ 1.0, 0.333, 0.333 ]
                                }
                              }
                            ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "arrow_count",
                                // 계산식/참조 값
                                "source_property_name": "(#inventory_target_item_total_count_int = 0)",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "count_title_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", 12 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "arrow_panel@rainbowpie_module_hud_bow_helper.arrow_slot_panel": {}
                              }
                            ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "arrow_count",
                                // 계산식/참조 값
                                "source_property_name": "(not (#inventory_target_item_total_count_int = 0))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "count_text_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "count_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "#arrow_item_total_count_str",
                                  // ?? (R,G,B,A)
                                  "color": [ 0.7, 0.7, 0.7 ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "arrow_count",
                                      // 계산식/참조 값
                                      "source_property_name": "('|x' + #inventory_target_item_total_count_int)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#arrow_item_total_count_str"
                                    }
                                  ]
                                }
                              }
                            ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "arrow_count",
                                // 계산식/참조 값
                                "source_property_name": "(not (#inventory_target_item_total_count_int = 0))",
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
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "selected_slot_item_id_aux",
              // 계산식/참조 값
              "source_property_name": "#selected_item_id_aux_int",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_aux_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('aux' + #selected_item_id_aux_int + ',')",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_aux_str"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#selected_item_id_aux_int / 65536)",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('id' + #selected_item_id_int + ',')",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_str"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "arrow_count",
              // 계산식/참조 값
              "source_property_name": "(#inventory_target_item_total_count_int = 0)",
              // 결과가 들어갈 속성
              "target_property_name": "#is_arrow_empty"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (($rainbowpie_ui_moduleflag_hud_bow_helper_bowids - #selected_item_id_aux_str) = $rainbowpie_ui_moduleflag_hud_bow_helper_bowids))",
              // 결과가 들어갈 속성
              "target_property_name": "#is_match_aux"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (($rainbowpie_ui_moduleflag_hud_bow_helper_bowids - #selected_item_id_str) = $rainbowpie_ui_moduleflag_hud_bow_helper_bowids))",
              // 결과가 들어갈 속성
              "target_property_name": "#is_match_id"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#is_match_aux or #is_match_id)",
              // 결과가 들어갈 속성
              "target_property_name": "#is_holding_bow"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#is_holding_bow and (not #is_arrow_empty))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  }
}
```








### module
hud_compass.json
RainbowPie UI · module



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_compass.json
// 분류: RainbowPie UI / module
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_module_hud_compass",

  // 다른 템플릿을 가져와서 확장(상속)
  "hud_compass@rainbowpieui_compatibility_config.compatibility_variables": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_module_hud_compass)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_compass_item_total_count@rainbowpie_modulelib_hud_item.inventory_item_count": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_inventory_target_item_ids": "('id' + $rainbowpie_ui_flag_item_clock_id + ',id' + $rainbowpie_ui_flag_item_compass_id + ',id' + $rainbowpie_ui_flag_item_recovery_compass_id +',')"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "clock_total_count@rainbowpie_modulelib_hud_item.inventory_item_count": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_inventory_target_item_ids": "('id' + $rainbowpie_ui_flag_item_clock_id + ',')"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "compass_total_count@rainbowpie_modulelib_hud_item.inventory_item_count": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_inventory_target_item_ids": "('id' + $rainbowpie_ui_flag_item_compass_id + ',')"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "recovery_compass_total_count@rainbowpie_modulelib_hud_item.inventory_item_count": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_inventory_target_item_ids": "('id' + $rainbowpie_ui_flag_item_recovery_compass_id +',')"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "compass_panel@rainbowpie_ui_common.text_background": {
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_home + '/r_white')",
          // 가로/세로 크기
          "size": [ "100%c + 5px", "100%c + 5px" ],
          // 기준점에서 이동하는 거리
          "offset": [ -7, 7 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "hud_compass_item_total_count",
              // 계산식/참조 값
              "source_property_name": "(not (#inventory_target_item_total_count_int = 0))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "compass_stack_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%c", "100%cm" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "clock@crafting.item_renderer": {
                      // 가로/세로 크기
                      "size": [ 16, 16 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10,
                      // 이 컨트롤 안에서 쓰는 임시 저장소
                      "property_bag": {
                        // ???/??? ?
                        "#item_id_aux": "($rainbowpie_ui_flag_item_clock_id * 65536)"
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "clock_total_count",
                          // 계산식/참조 값
                          "source_property_name": "(not (#inventory_target_item_total_count_int = 0))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "compass@crafting.item_renderer": {
                      // 가로/세로 크기
                      "size": [ 16, 16 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10,
                      // 이 컨트롤 안에서 쓰는 임시 저장소
                      "property_bag": {
                        // ???/??? ?
                        "#item_id_aux": "($rainbowpie_ui_flag_item_compass_id * 65536)"
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "compass_total_count",
                          // 계산식/참조 값
                          "source_property_name": "(not (#inventory_target_item_total_count_int = 0))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "recovery_compass@crafting.item_renderer": {
                      // 가로/세로 크기
                      "size": [ 16, 16 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10,
                      // 이 컨트롤 안에서 쓰는 임시 저장소
                      "property_bag": {
                        // ???/??? ?
                        "#item_id_aux": "($rainbowpie_ui_flag_item_recovery_compass_id * 65536)"
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "recovery_compass_total_count",
                          // 계산식/참조 값
                          "source_property_name": "(not (#inventory_target_item_total_count_int = 0))",
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
      }
    ]
  }
}
```








### module
hud_selected_item_id.json
RainbowPie UI · module



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_selected_item_id.json
// 분류: RainbowPie UI / module
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_module_hud_selected_item_id",

  // ???/?? ??
  "hud_selected_item_id": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_module_hud_selected_item_id)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_item_id_aux@rainbowpie_modulelib_hud_item.selected_slot_item_id_aux": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "item_id_text@rainbowpie_ui_common.text_label": {
          // 기준점에서 이동하는 거리
          "offset": [ 0, 50 ],
          // 보여줄 글자
          "text": "#selected_item_id_aux_str",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "selected_slot_item_id_aux",
              // 계산식/참조 값
              "source_property_name": "('\"' + #selected_item_id_aux_int + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#selected_item_id_aux_str"
            }
          ]
        }
      }
    ]
  }
}
```








### module
inventory_actions.json
RainbowPie UI · module



필요한 부분만 참고해서 가져가세요.



```
// 예제: inventory_actions.json
// 분류: RainbowPie UI / module
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_module_inventory_actions",

  // 다른 템플릿을 가져와서 확장(상속)
  "action_button_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpie_module_inventory_actions.drop_icon",

    // 오버라이드 가능한 변수
    "$button_type_panel": "common_buttons.new_ui_binding_button_label",
    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": false,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_inventoryui_actions",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 0,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "delete_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$chest_visible|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "delete_icon": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/destroy_selection')",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chest@crafting.item_renderer": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $chest_visible)",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 가로/세로 크기
          "size": [ "62.5%", "100%x" ],
          // 기준점에서 이동하는 거리
          "offset": [ "20%x", 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#item_id_aux": 3538946
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#using_touch",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "craft_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_table@crafting.item_renderer": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#item_id_aux": 3801088
          }
        }
      },
      {
        // ???/?? ??
        "down_arrow": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 가로/세로 크기
          "size": [ "62.5%", "100%x" ],
          // 기준점에서 이동하는 거리
          "offset": [ "20%x", 0 ],
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_down')",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      }
    ]
  },

  // ???/?? ??
  "drop_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$count_text|default": "x1",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chest@crafting.item_renderer": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#item_id_aux": 3538946
          }
        }
      },
      {
        // ???/?? ??
        "down_arrow": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 가로/세로 크기
          "size": [ "62.5%", "100%x" ],
          // 기준점에서 이동하는 거리
          "offset": [ "20%x", 0 ],
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_down')",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_label@rainbowpie_ui_common.text_label_notheme": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 보여줄 글자
          "text": "$count_text",
          // ?? ?? ??
          "font_scale_factor": 0.85,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#using_touch",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "binding_slot_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#is_selected_slot",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$item_collection_name"
      }
    ]
  },

  // ???/?? ??
  "inventory_bindings_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "inventory_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$item_collection_name": "inventory_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_26@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 26
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_25@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 25
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_24@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 24
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_23@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 23
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_22@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 22
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_21@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 21
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_20@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_19@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 19
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_18@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 18
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_17@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_16@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 16
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_15@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 15
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_14@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 14
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_13@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 13
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_12@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 12
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_11@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_10@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 10
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_9@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 9
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_8@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_7@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_6@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_5@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_4@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_3@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_2@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_1@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_slot_0@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_26",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_26"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_25",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_25"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_24",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_24"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_23",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_23"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_22",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_22"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_21",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_21"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_20",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_20"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_19",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_19"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_18",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_18"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_17",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_17"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_16",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_16"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_15",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_15"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_14",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_14"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_13",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_13"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_12",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_12"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_11",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_11"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_10",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_10"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_9",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_9"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_8",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_8"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_7",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_7"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_6",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_6"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_5",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_5"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_4",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_4"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_3",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_3"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_2",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_1",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "inventory_bindings_slot_0",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_selected_slot_0 or #is_selected_slot_1 or #is_selected_slot_2 or #is_selected_slot_3 or #is_selected_slot_4 or #is_selected_slot_5 or #is_selected_slot_6 or #is_selected_slot_7 or #is_selected_slot_8 or #is_selected_slot_9 or #is_selected_slot_10 or #is_selected_slot_11 or #is_selected_slot_12 or #is_selected_slot_13 or #is_selected_slot_14 or #is_selected_slot_15 or #is_selected_slot_16 or #is_selected_slot_17 or #is_selected_slot_18 or #is_selected_slot_19 or #is_selected_slot_20 or #is_selected_slot_21 or #is_selected_slot_22 or #is_selected_slot_23 or #is_selected_slot_24 or #is_selected_slot_25 or #is_selected_slot_26)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_inventory_slot_selected"
      }
    ]
  },

  // ???/?? ??
  "hotbar_bindings_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$item_collection_name": "hotbar_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_8@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_7@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_6@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_5@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_4@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_3@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_2@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_1@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_slot_0@rainbowpie_module_inventory_actions.binding_slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_8",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_8"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_7",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_7"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_6",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_6"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_5",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_5"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_4",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_4"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_3",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_3"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_2",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_1",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "hotbar_bindings_slot_0",
        // 계산식/참조 값
        "source_property_name": "#is_selected_slot",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_slot_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_selected_slot_0 or #is_selected_slot_1 or #is_selected_slot_2 or #is_selected_slot_3 or #is_selected_slot_4 or #is_selected_slot_5 or #is_selected_slot_6 or #is_selected_slot_7 or #is_selected_slot_8)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_hotbar_slot_selected"
      }
    ]
  },

  // ???/?? ??
  "slot_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 0 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "input_panel": {
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%x" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // ?? ??
          "consume_hover_events": false,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 오버라이드 가능한 변수
          "$button_take_all_place_all|default": "rainbowpie.placeholder",
          // 오버라이드 가능한 변수
          "$button_auto_place|default": "rainbowpie.placeholder",
          // 오버라이드 가능한 변수
          "$button_mapping_type|default": "pressed",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#is_query_target": true
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "$item_collection_name"
            },
            {
              // 가져올 값 이름
              "binding_name": "#item_id_aux",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$item_collection_name"
            },
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
              "source_property_name": "('\"' + #hover_text - '\n' - '§0' - '§1' - '§2' - '§3' - '§4' - '§5' - '§6' - '§7' - '§8' - '§9' - '§a' - '§b' - '§c' - '§d' - '§e' - '§f' - '§g' - '§h' - '§i' - '§j' - '§k' - '§l' - '§m' - '§n' - '§o' - '§p' - '§q' - '§r' - '§s' - '§t' - '§u' - '§v' - '§w' - '§x' - '§y' - '§z' + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#formatted_name",
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492))"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "inventoryui_search_text_box_display_text",
              // 계산식/참조 값
              "source_property_name": "#item_name",
              // 결과가 들어갈 속성
              "target_property_name": "#query_text",
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492))"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#query_text = '') or (not ((#formatted_name - #query_text) = #formatted_name)))",
              // 결과가 들어갈 속성
              "target_property_name": "#is_query_target",
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492))"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((not (#item_id_aux = -1)) and #is_query_target)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ],
          // 입력 키/버튼과 동작 연결
          "button_mappings": [
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_select",
              // 어떤 동작을 실행할지
              "to_button_id": "$button_take_all_place_all",
              // 입력 시점(pressed 등)
              "mapping_type": "$button_mapping_type",
              // ?? ??
              "consume_event": false
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_ok",
              // 어떤 동작을 실행할지
              "to_button_id": "$button_take_all_place_all",
              // 입력 시점(pressed 등)
              "mapping_type": "$button_mapping_type",
              // ?? ??
              "consume_event": false
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_auto_place",
              // 어떤 동작을 실행할지
              "to_button_id": "$button_auto_place",
              // 입력 시점(pressed 등)
              "mapping_type": "$button_mapping_type",
              // ?? ??
              "consume_event": false
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.controller_secondary_select",
              // 어떤 동작을 실행할지
              "to_button_id": "$button_auto_place",
              // 입력 시점(pressed 등)
              "mapping_type": "$button_mapping_type",
              // ?? ??
              "consume_event": false
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "inventory_input_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 목록 이름
    "collection_name": "inventory_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "inventory_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_26@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 26
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_25@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 25
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_24@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 24
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_23@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 23
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_22@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 22
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_21@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 21
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_20@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_19@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 19
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_18@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 18
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_17@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_16@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 16
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_15@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 15
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_14@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 14
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_13@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 13
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_12@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 12
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_11@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_10@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 10
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_9@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 9
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_8@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_7@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_6@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_5@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_4@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_3@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_2@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_1@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_0@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ]
  },

  // ???/?? ??
  "hotbar_input_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "hotbar_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_8@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_7@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_6@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_5@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_4@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_3@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_2@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_1@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_0@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ]
  },

  // ???/?? ??
  "armor_input_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 목록 이름
    "collection_name": "armor_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "armor_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_3@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_2@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_1@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_0@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ]
  },

  // ???/?? ??
  "offhand_input_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 목록 이름
    "collection_name": "offhand_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "offhand_items",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_slot_0@rainbowpie_module_inventory_actions.slot_item": {
          // ?? ??
          "collection_index": 0
        }
      }
    ]
  },

  // ???/?? ??
  "item_hover_text": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%cm", "100%c" ],
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
      }
    ]
  },

  // ???/?? ??
  "armor_slot": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#item_id_aux",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$item_collection_name"
      }
    ]
  },

  // ???/?? ??
  "item_id_aux_checker": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_id_list|default": "",
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
        "source_property_name": "('aux' + #item_id_aux + ',')",
        // 결과가 들어갈 속성
        "target_property_name": "#item_id_aux_str"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#item_id_aux / 65536)",
        // 결과가 들어갈 속성
        "target_property_name": "#item_id_int"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('id' + #item_id_int + ',')",
        // 결과가 들어갈 속성
        "target_property_name": "#item_id_str"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (($rainbowpie_localui_id_list - #item_id_aux_str) = $rainbowpie_localui_id_list))",
        // 결과가 들어갈 속성
        "target_property_name": "#is_match_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (($rainbowpie_localui_id_list - #item_id_str) = $rainbowpie_localui_id_list))",
        // 결과가 들어갈 속성
        "target_property_name": "#is_match_id"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_match_aux or #is_match_id)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_match_id_and_aux"
      }
    ]
  },

  // ???/?? ??
  "inventory_actions": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_module_inventory_actions)"
  },

  // ???/?? ??
  "armor_switch_hover_text": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // 가로/세로 크기
    "size": [ "100%c + 8px", "100%c + 5px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 2, 0 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 200,
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_hovertext_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_hovertext_background_alpha",
    // 오버라이드 가능한 변수
    "$armor_slot|default": -1,
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "armor_item_text": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 목록 이름
          "collection_name": "armor_items",
          // 오버라이드 가능한 변수
          "$item_collection_name": "armor_items",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_hover_text@rainbowpie_module_inventory_actions.item_hover_text": {
                // ?? ??
                "collection_index": "$armor_slot"
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "inventory_actions_hover_text@rainbowpie_module_inventory_actions.inventory_actions": {
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // ??? ?? ?
    "allow_clipping": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_compare@rainbowpieui_compatibility_config.compatibility_variables": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_armor_switch_enabled)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 22,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "armor_slots",
              // ?? ??
              "resolve_sibling_scope": true,
              // 계산식/참조 값
              "source_property_name": "#armor_slots_item_id_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#armor_slots_item_id_aux"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "helmet_id_checker",
              // ?? ??
              "resolve_sibling_scope": true,
              // 계산식/참조 값
              "source_property_name": "#is_match_id_and_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#is_helmet"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "chestplate_id_checker",
              // ?? ??
              "resolve_sibling_scope": true,
              // 계산식/참조 값
              "source_property_name": "#is_match_id_and_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#is_chestplate"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "leggings_id_checker",
              // ?? ??
              "resolve_sibling_scope": true,
              // 계산식/참조 값
              "source_property_name": "#is_match_id_and_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#is_leggings"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "boots_id_checker",
              // ?? ??
              "resolve_sibling_scope": true,
              // 계산식/참조 값
              "source_property_name": "#is_match_id_and_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#is_boots"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((not (#armor_slots_item_id_aux = -4)) and (#is_helmet or #is_chestplate or #is_leggings or #is_boots))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "armor_compare_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%c" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($item_collection_name = 'inventory_items')) or ($item_collection_name = 'hotbar_items'))",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "armor_slots": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ 0, 0 ],
                      // 목록 이름
                      "collection_name": "armor_items",
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "armor_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "armor_slot_0@rainbowpie_module_inventory_actions.armor_slot": {
                            // ?? ??
                            "collection_index": 0
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "armor_slot_1@rainbowpie_module_inventory_actions.armor_slot": {
                            // ?? ??
                            "collection_index": 1
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "armor_slot_2@rainbowpie_module_inventory_actions.armor_slot": {
                            // ?? ??
                            "collection_index": 2
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "armor_slot_3@rainbowpie_module_inventory_actions.armor_slot": {
                            // ?? ??
                            "collection_index": 3
                          }
                        }
                      ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "armor_slot_0",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "#item_id_aux",
                          // 결과가 들어갈 속성
                          "target_property_name": "#slot_0_item_id_aux"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "armor_slot_1",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "#item_id_aux",
                          // 결과가 들어갈 속성
                          "target_property_name": "#slot_1_item_id_aux"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "armor_slot_2",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "#item_id_aux",
                          // 결과가 들어갈 속성
                          "target_property_name": "#slot_2_item_id_aux"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "armor_slot_3",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "#item_id_aux",
                          // 결과가 들어갈 속성
                          "target_property_name": "#slot_3_item_id_aux"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#slot_0_item_id_aux + #slot_1_item_id_aux + #slot_2_item_id_aux + #slot_3_item_id_aux)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#armor_slots_item_id_aux"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "helmet_id_checker@rainbowpie_module_inventory_actions.item_id_aux_checker": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_id_list": "$rainbowpie_ui_moduleflag_inventory_actions_armor_ids_helmet"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "chestplate_id_checker@rainbowpie_module_inventory_actions.item_id_aux_checker": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_id_list": "$rainbowpie_ui_moduleflag_inventory_actions_armor_ids_chestplate"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "leggings_id_checker@rainbowpie_module_inventory_actions.item_id_aux_checker": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_id_list": "$rainbowpie_ui_moduleflag_inventory_actions_armor_ids_leggings"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "boots_id_checker@rainbowpie_module_inventory_actions.item_id_aux_checker": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_id_list": "$rainbowpie_ui_moduleflag_inventory_actions_armor_ids_boots"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "helmet_item_text@rainbowpie_module_inventory_actions.armor_switch_hover_text": {
                      // 오버라이드 가능한 변수
                      "$armor_slot": 0,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "armor_slots",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "(not (#slot_0_item_id_aux = -1))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#slot_isnt_empty"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "helmet_id_checker",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "#is_match_id_and_aux",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_target_item"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#slot_isnt_empty and #is_target_item)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "chestplate_item_text@rainbowpie_module_inventory_actions.armor_switch_hover_text": {
                      // 오버라이드 가능한 변수
                      "$armor_slot": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "armor_slots",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "(not (#slot_1_item_id_aux = -1))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#slot_isnt_empty"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "chestplate_id_checker",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "#is_match_id_and_aux",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_target_item"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#slot_isnt_empty and #is_target_item)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "leggings_item_text@rainbowpie_module_inventory_actions.armor_switch_hover_text": {
                      // 오버라이드 가능한 변수
                      "$armor_slot": 2,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "armor_slots",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "(not (#slot_2_item_id_aux = -1))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#slot_isnt_empty"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "leggings_id_checker",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "#is_match_id_and_aux",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_target_item"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#slot_isnt_empty and #is_target_item)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "boots_item_text@rainbowpie_module_inventory_actions.armor_switch_hover_text": {
                      // 오버라이드 가능한 변수
                      "$armor_slot": 3,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "armor_slots",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "(not (#slot_3_item_id_aux = -1))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#slot_isnt_empty"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "boots_id_checker",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "#is_match_id_and_aux",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_target_item"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#slot_isnt_empty and #is_target_item)",
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
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "inventory_actions_cell_panel@rainbowpie_module_inventory_actions.inventory_actions": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_switch@rainbowpieui_compatibility_config.compatibility_variables": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_armor_switch_enabled)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 22,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "armor_switch_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 완전히 제거(공간도 없음)
                "ignored": "((not (($item_collection_name = 'inventory_items') or ($top_half_variant = 'crafting.survival_panel_top_half'))) or ($item_collection_name = 'hotbar_items'))",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "helmet_switch": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
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
                          "source_property_name": "('aux' + #item_id_aux + ',')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#item_id_aux_str"
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
                          "source_property_name": "('id' + #item_id + ',')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#item_id_str"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (($rainbowpie_ui_moduleflag_inventory_actions_armor_ids_helmet - #item_id_aux_str) = $rainbowpie_ui_moduleflag_inventory_actions_armor_ids_helmet))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_match_aux"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (($rainbowpie_ui_moduleflag_inventory_actions_armor_ids_helmet - #item_id_str) = $rainbowpie_ui_moduleflag_inventory_actions_armor_ids_helmet))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_match_id"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#is_match_aux or #is_match_id)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "helmet_switch_1": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ?? ??
                            "consume_hover_events": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 10,
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#collection_name": "armor_items",
                              // ???/??? ?
                              "#collection_index": 0
                            },
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_auto_place",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.container_auto_place",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "helmet_switch_2": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ?? ??
                            "consume_hover_events": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 8,
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_auto_place",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.container_auto_place",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "chestplate_switch": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
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
                          "source_property_name": "('aux' + #item_id_aux + ',')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#item_id_aux_str"
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
                          "source_property_name": "('id' + #item_id + ',')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#item_id_str"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (($rainbowpie_ui_moduleflag_inventory_actions_armor_ids_chestplate - #item_id_aux_str) = $rainbowpie_ui_moduleflag_inventory_actions_armor_ids_chestplate))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_match_aux"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (($rainbowpie_ui_moduleflag_inventory_actions_armor_ids_chestplate - #item_id_str) = $rainbowpie_ui_moduleflag_inventory_actions_armor_ids_chestplate))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_match_id"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#is_match_aux or #is_match_id)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "chestplate_switch_1": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ?? ??
                            "consume_hover_events": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 10,
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#collection_name": "armor_items",
                              // ???/??? ?
                              "#collection_index": 1
                            },
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_auto_place",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.container_auto_place",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "chestplate_switch_2": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ?? ??
                            "consume_hover_events": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 8,
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_auto_place",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.container_auto_place",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "leggings_switch": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
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
                          "source_property_name": "('aux' + #item_id_aux + ',')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#item_id_aux_str"
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
                          "source_property_name": "('id' + #item_id + ',')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#item_id_str"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (($rainbowpie_ui_moduleflag_inventory_actions_armor_ids_leggings - #item_id_aux_str) = $rainbowpie_ui_moduleflag_inventory_actions_armor_ids_leggings))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_match_aux"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (($rainbowpie_ui_moduleflag_inventory_actions_armor_ids_leggings - #item_id_str) = $rainbowpie_ui_moduleflag_inventory_actions_armor_ids_leggings))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_match_id"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#is_match_aux or #is_match_id)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "leggings_switch_1": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ?? ??
                            "consume_hover_events": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 10,
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#collection_name": "armor_items",
                              // ???/??? ?
                              "#collection_index": 2
                            },
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_auto_place",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.container_auto_place",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "leggings_switch_2": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ?? ??
                            "consume_hover_events": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 8,
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_auto_place",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.container_auto_place",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "chestplate_boots": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
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
                          "source_property_name": "('aux' + #item_id_aux + ',')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#item_id_aux_str"
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
                          "source_property_name": "('id' + #item_id + ',')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#item_id_str"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (($rainbowpie_ui_moduleflag_inventory_actions_armor_ids_boots - #item_id_aux_str) = $rainbowpie_ui_moduleflag_inventory_actions_armor_ids_boots))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_match_aux"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (($rainbowpie_ui_moduleflag_inventory_actions_armor_ids_boots - #item_id_str) = $rainbowpie_ui_moduleflag_inventory_actions_armor_ids_boots))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_match_id"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#is_match_aux or #is_match_id)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "boots_switch_1": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ?? ??
                            "consume_hover_events": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 10,
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#collection_name": "armor_items",
                              // ???/??? ?
                              "#collection_index": 3
                            },
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_auto_place",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.container_auto_place",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "boots_switch_2": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ?? ??
                            "consume_hover_events": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 8,
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_auto_place",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.container_auto_place",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
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
        "action_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_bce3269f)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 22,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "drop_one_input_panel": {
                // 마우스/커서 따라다니는 패널
                "type": "input_panel",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // ?? ??
                "consume_hover_events": "$touch",
                // 보이기/숨기기(공간 유지)
                "visible": false,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#using_touch"
                  },
                  {
                    // 목록 인덱스/현재 항목 정보 제공
                    "binding_type": "collection_details",
                    // 목록 이름
                    "binding_collection_name": "$item_collection_name"
                  },
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
                    // ?? ??
                    "source_control_name": "inventory_action_dropone",
                    // 계산식/참조 값
                    "source_property_name": "#toggle_state",
                    // 결과가 들어갈 속성
                    "target_property_name": "#inventory_action_dropone_enabled"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((not (#item_id_aux = -1)) and #using_touch and #inventory_action_dropone_enabled)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ],
                // 입력 키/버튼과 동작 연결
                "button_mappings": [
                  {
                    // 어떤 입력을 받을지
                    "from_button_id": "button.menu_select",
                    // 어떤 동작을 실행할지
                    "to_button_id": "button.drop_one",
                    // 입력 시점(pressed 등)
                    "mapping_type": "pressed"
                  },
                  {
                    // 어떤 입력을 받을지
                    "from_button_id": "button.menu_ok",
                    // 어떤 동작을 실행할지
                    "to_button_id": "button.drop_one",
                    // 입력 시점(pressed 등)
                    "mapping_type": "pressed"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "drop_all_input_panel": {
                // 마우스/커서 따라다니는 패널
                "type": "input_panel",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // ?? ??
                "consume_hover_events": "$touch",
                // 보이기/숨기기(공간 유지)
                "visible": false,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#using_touch"
                  },
                  {
                    // 목록 인덱스/현재 항목 정보 제공
                    "binding_type": "collection_details",
                    // 목록 이름
                    "binding_collection_name": "$item_collection_name"
                  },
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
                    // ?? ??
                    "source_control_name": "inventory_action_dropall",
                    // 계산식/참조 값
                    "source_property_name": "#toggle_state",
                    // 결과가 들어갈 속성
                    "target_property_name": "#inventory_action_dropall_enabled"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((not (#item_id_aux = -1)) and #using_touch and #inventory_action_dropall_enabled)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ],
                // 입력 키/버튼과 동작 연결
                "button_mappings": [
                  {
                    // 어떤 입력을 받을지
                    "from_button_id": "button.menu_select",
                    // 어떤 동작을 실행할지
                    "to_button_id": "button.drop_all",
                    // 입력 시점(pressed 등)
                    "mapping_type": "pressed"
                  },
                  {
                    // 어떤 입력을 받을지
                    "from_button_id": "button.menu_ok",
                    // 어떤 동작을 실행할지
                    "to_button_id": "button.drop_all",
                    // 입력 시점(pressed 등)
                    "mapping_type": "pressed"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "inventory_actions_inventory@rainbowpie_module_inventory_actions.inventory_actions": {
    // 오버라이드 가능한 변수
    "$action_button_stack_panel_size|default": [ 22, "100%c" ],
    // 오버라이드 가능한 변수
    "$action_button_stack_panel_max_size|default": [ 22, 156 ],
    // 오버라이드 가능한 변수
    "$padding_size|default": [ "100%", "9.090909090909091%x" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_bindings_panel@rainbowpie_module_inventory_actions.inventory_bindings_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_bindings_panel@rainbowpie_module_inventory_actions.hotbar_bindings_panel": {}
      },
      {
        // ???/?? ??
        "action_button_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 가로/세로 크기
          "size": "$action_button_stack_panel_size",
          // ?? ?? ?
          "max_size": "$action_button_stack_panel_max_size",
          // 기준점에서 이동하는 거리
          "offset": [ "109.0909090909091%x", 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "quick_craft_button@common_buttons.light_content_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_quick_craft_enabled)",
                // 오버라이드 가능한 변수
                "$button_focus_precedence": -1,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_enabled": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.inventory.actions.quick_craft",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_border_layer": 30,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.crafting_output_tertiary",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpie_module_inventory_actions.craft_icon",
                // ?? ??
                "consume_hover_events": false,
                // 가로/세로 크기
                "size": [ "100%", "100%x" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#collection_name": "crafting_output_items",
                  // ???/??? ?
                  "#collection_index": 0
                }
              }
            },
            {
              // ???/?? ??
              "padding_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$padding_size",
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_drop_item_enabled))"
              }
            },
            {
              // ???/?? ??
              "drop_all_item": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 50,
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_drop_item_enabled))",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "armor_input_panel@rainbowpie_module_inventory_actions.armor_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_auto_place": "button.drop_all"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "offhand_input_panel@rainbowpie_module_inventory_actions.offhand_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_auto_place": "button.drop_all"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "inventory_input_panel@rainbowpie_module_inventory_actions.inventory_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_auto_place": "button.drop_all"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "hotbar_input_panel@rainbowpie_module_inventory_actions.hotbar_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_auto_place": "button.drop_all"
                    }
                  },
                  {
                    // ???/?? ??
                    "drop_one_input_panel": {
                      // 마우스/커서 따라다니는 패널
                      "type": "input_panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%x" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // ?? ??
                      "consume_hover_events": false,
                      // 보이기/숨기기(공간 유지)
                      "visible": false,
                      // 완전히 제거(공간도 없음)
                      "ignored": "$rainbowpie_ui_flag_bce3269f",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#using_touch"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#inventory_selected_item",
                          // ?? ???
                          "binding_condition": "always"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "inventory_bindings_panel",
                          // 계산식/참조 값
                          "source_property_name": "#is_inventory_slot_selected",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_inventory_slot_selected"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "hotbar_bindings_panel",
                          // 계산식/참조 값
                          "source_property_name": "#is_hotbar_slot_selected",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_hotbar_slot_selected"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(((not (#inventory_selected_item = -1)) or #is_inventory_slot_selected or #is_hotbar_slot_selected) and #using_touch)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ],
                      // 입력 키/버튼과 동작 연결
                      "button_mappings": [
                        {
                          // 어떤 입력을 받을지
                          "from_button_id": "button.menu_select",
                          // 어떤 동작을 실행할지
                          "to_button_id": "button.drop_one",
                          // 입력 시점(pressed 등)
                          "mapping_type": "pressed",
                          // ?? ??
                          "consume_event": false
                        },
                        {
                          // 어떤 입력을 받을지
                          "from_button_id": "button.menu_ok",
                          // 어떤 동작을 실행할지
                          "to_button_id": "button.drop_one",
                          // 입력 시점(pressed 등)
                          "mapping_type": "pressed",
                          // ?? ??
                          "consume_event": false
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "drop_item_button_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "100%x" ],
                // 완전히 제거(공간도 없음)
                "ignored": "(not ($top_half_variant = 'crafting.survival_panel_top_half'))",
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#rainbowpie_ui_flag_bce3269f": "$rainbowpie_ui_flag_bce3269f"
                },
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#using_touch"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#using_touch and #rainbowpie_ui_flag_bce3269f)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "drop_one@rainbowpie_module_inventory_actions.action_button_toggle_base": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_button_desc_enabled": true,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.inventory.actions.drop_selection",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_button_hover_border_layer": 30,
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100%", "100%" ],
                      // 가로/세로 크기
                      "size": [ "100%", "100%x" ],
                      // 오버라이드 가능한 변수
                      "$toggle_group_forced_index": 1000,
                      // 오버라이드 가능한 변수
                      "$toggle_view_binding_name": "inventory_action_dropone",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10,
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_bce3269f)",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "inventory_action_dropall",
                          // 계산식/참조 값
                          "source_property_name": "(not #toggle_state)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#enabled"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "drop_item_button@common_buttons.light_content_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_drop_item_enabled))",
                // 오버라이드 가능한 변수
                "$button_focus_precedence": -1,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_enabled": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.inventory.actions.drop_selection",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_border_layer": 30,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "rainbowpie.drop_one",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpie_module_inventory_actions.drop_icon",
                // ?? ??
                "consume_hover_events": false,
                // 가로/세로 크기
                "size": [ "100%", "100%x" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#rainbowpie_ui_flag_bce3269f": "$rainbowpie_ui_flag_bce3269f"
                },
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#using_touch"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#inventory_selected_item",
                    // ?? ???
                    "binding_condition": "always"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "inventory_bindings_panel",
                    // 계산식/참조 값
                    "source_property_name": "#is_inventory_slot_selected",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_inventory_slot_selected"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "hotbar_bindings_panel",
                    // 계산식/참조 값
                    "source_property_name": "#is_hotbar_slot_selected",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_hotbar_slot_selected"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((not (#is_inventory_slot_selected or #is_hotbar_slot_selected)) and (#inventory_selected_item = -1))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#enabled"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#using_touch and #rainbowpie_ui_flag_bce3269f))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$padding_size",
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled))",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 가져올 값 이름
                    "binding_name": "#is_creative_mode",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "delete_all_item": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 50,
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled))",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "armor_input_panel@rainbowpie_module_inventory_actions.armor_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_auto_place": "button.container_auto_destroy"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "offhand_input_panel@rainbowpie_module_inventory_actions.offhand_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_auto_place": "button.container_auto_destroy"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "inventory_input_panel@rainbowpie_module_inventory_actions.inventory_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_auto_place": "button.container_auto_destroy"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "hotbar_input_panel@rainbowpie_module_inventory_actions.hotbar_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_auto_place": "button.container_auto_destroy"
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 가져올 값 이름
                    "binding_name": "#is_creative_mode",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "delete_item_button@common_buttons.light_content_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled))",
                // 오버라이드 가능한 변수
                "$button_focus_precedence": -1,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_enabled": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.inventory.actions.destroy_selection",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_border_layer": 30,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.destroy_selection",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpie_module_inventory_actions.delete_icon",
                // ?? ??
                "consume_hover_events": false,
                // 가로/세로 크기
                "size": [ "100%", "100%x" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 가져올 값 이름
                    "binding_name": "#is_creative_mode",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "secondary_action_button_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 가로/세로 크기
          "size": "$action_button_stack_panel_size",
          // ?? ?? ?
          "max_size": "$action_button_stack_panel_max_size",
          // 기준점에서 이동하는 거리
          "offset": [ "218.1818181818182%x", 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "drop_all_item": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 50,
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_drop_item_enabled))",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "inventory_bindings_panel",
                    // 계산식/참조 값
                    "source_property_name": "#is_inventory_slot_selected",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_inventory_slot_selected"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "hotbar_bindings_panel",
                    // 계산식/참조 값
                    "source_property_name": "#is_hotbar_slot_selected",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_hotbar_slot_selected"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#is_inventory_slot_selected or #is_hotbar_slot_selected))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "armor_input_panel@rainbowpie_module_inventory_actions.armor_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_take_all_place_all": "button.drop_all",
                      // 오버라이드 가능한 변수
                      "$button_mapping_type": "double_pressed"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "offhand_input_panel@rainbowpie_module_inventory_actions.offhand_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_take_all_place_all": "button.drop_all",
                      // 오버라이드 가능한 변수
                      "$button_mapping_type": "double_pressed"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "inventory_input_panel@rainbowpie_module_inventory_actions.inventory_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_take_all_place_all": "button.drop_all",
                      // 오버라이드 가능한 변수
                      "$button_mapping_type": "double_pressed"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "hotbar_input_panel@rainbowpie_module_inventory_actions.hotbar_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_take_all_place_all": "button.drop_all",
                      // 오버라이드 가능한 변수
                      "$button_mapping_type": "double_pressed"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "drop_item_button_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "100%x" ],
                // 완전히 제거(공간도 없음)
                "ignored": "(not ($top_half_variant = 'crafting.survival_panel_top_half'))",
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#rainbowpie_ui_flag_bce3269f": "$rainbowpie_ui_flag_bce3269f"
                },
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#using_touch"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#using_touch and #rainbowpie_ui_flag_bce3269f)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "drop_all@rainbowpie_module_inventory_actions.action_button_toggle_base": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_button_desc_enabled": true,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.inventory.actions.drop_selection",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_button_hover_border_layer": 30,
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100%", "100%" ],
                      // 가로/세로 크기
                      "size": [ "100%", "100%x" ],
                      // 오버라이드 가능한 변수
                      "$count_text": "All",
                      // 오버라이드 가능한 변수
                      "$toggle_group_forced_index": 1001,
                      // 오버라이드 가능한 변수
                      "$toggle_view_binding_name": "inventory_action_dropall",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10,
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_bce3269f)",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "inventory_action_dropone",
                          // 계산식/참조 값
                          "source_property_name": "(not #toggle_state)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#enabled"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "drop_item_button@common_buttons.light_content_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_drop_item_enabled))",
                // 오버라이드 가능한 변수
                "$button_focus_precedence": -1,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_enabled": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.inventory.actions.drop_inventory",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_border_layer": 30,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "rainbowpie.drop_one",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpie_module_inventory_actions.drop_icon",
                // 오버라이드 가능한 변수
                "$count_text": "All",
                // ?? ??
                "consume_hover_events": false,
                // 가로/세로 크기
                "size": [ "100%", "100%x" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#rainbowpie_ui_flag_bce3269f": "$rainbowpie_ui_flag_bce3269f"
                },
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#using_touch"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "inventory_bindings_panel",
                    // 계산식/참조 값
                    "source_property_name": "#is_inventory_slot_selected",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_inventory_slot_selected"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "hotbar_bindings_panel",
                    // 계산식/참조 값
                    "source_property_name": "#is_hotbar_slot_selected",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_hotbar_slot_selected"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#is_inventory_slot_selected or #is_hotbar_slot_selected))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#enabled"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#using_touch and #rainbowpie_ui_flag_bce3269f))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$padding_size",
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled))",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 가져올 값 이름
                    "binding_name": "#is_creative_mode",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "delete_all_item": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 50,
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled))",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "armor_input_panel@rainbowpie_module_inventory_actions.armor_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_take_all_place_all": "button.container_auto_destroy",
                      // 오버라이드 가능한 변수
                      "$button_mapping_type": "double_pressed"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "offhand_input_panel@rainbowpie_module_inventory_actions.offhand_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_take_all_place_all": "button.container_auto_destroy",
                      // 오버라이드 가능한 변수
                      "$button_mapping_type": "double_pressed"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "inventory_input_panel@rainbowpie_module_inventory_actions.inventory_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_take_all_place_all": "button.container_auto_destroy",
                      // 오버라이드 가능한 변수
                      "$button_mapping_type": "double_pressed"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "hotbar_input_panel@rainbowpie_module_inventory_actions.hotbar_input_panel": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled)",
                      // 오버라이드 가능한 변수
                      "$button_take_all_place_all": "button.container_auto_destroy",
                      // 오버라이드 가능한 변수
                      "$button_mapping_type": "double_pressed"
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 가져올 값 이름
                    "binding_name": "#is_creative_mode",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "delete_item_button@common_buttons.light_content_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "((not ($top_half_variant = 'crafting.survival_panel_top_half')) or (not $rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled))",
                // 오버라이드 가능한 변수
                "$button_focus_precedence": -1,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_enabled": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.inventory.actions.destroy_inventory",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_border_layer": 30,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.destroy_selection",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpie_module_inventory_actions.delete_icon",
                // 오버라이드 가능한 변수
                "$chest_visible": true,
                // ?? ??
                "consume_hover_events": false,
                // 가로/세로 크기
                "size": [ "100%", "100%x" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 가져올 값 이름
                    "binding_name": "#is_creative_mode",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#using_touch",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  }
}
```












### module lib


### module lib
hud_item.json
RainbowPie UI · module lib



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_item.json
// 분류: RainbowPie UI / module lib
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_modulelib_hud_item",

  // ???/?? ??
  "selected_slot_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#inventory_stack_count",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 가져올 값 이름
        "binding_name": "#slot_selected",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 가져올 값 이름
        "binding_name": "#item_id_aux",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#item_id_aux * #slot_selected)",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#inventory_stack_count * 1)",
        // 결과가 들어갈 속성
        "target_property_name": "#item_stack_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#inventory_stack_count = 0)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_single_item"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#is_single_item + #item_stack_count) * #slot_selected)",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_stack_count"
      }
    ]
  },

  // ???/?? ??
  "selected_slot_item_id_aux": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_0@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_1@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_2@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_3@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_4@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_5@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_6@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_7@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_8@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 8
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_0",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_0_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_1",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_1_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_2",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_2_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_3",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_3_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_4",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_4_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_5",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_5_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_6",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_6_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_7",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_7_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_8",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_8_item_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#slot_0_item_id_aux + #slot_1_item_id_aux + #slot_2_item_id_aux + #slot_3_item_id_aux + #slot_4_item_id_aux + #slot_5_item_id_aux + #slot_6_item_id_aux + #slot_7_item_id_aux + #slot_8_item_id_aux)",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_id_aux_int"
      }
    ]
  },

  // ???/?? ??
  "selected_slot_item_count": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_0_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_1_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_2_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_3_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_4_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_5_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_6_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_7_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_8_count@rainbowpie_modulelib_hud_item.selected_slot_item": {
          // ?? ??
          "collection_index": 8
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_0_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_0_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_1_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_1_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_2_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_2_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_3_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_3_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_4_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_4_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_5_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_5_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_6_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_6_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_7_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_7_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "selected_slot_8_count",
        // 계산식/참조 값
        "source_property_name": "#selected_item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_8_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#slot_0_item_count + #slot_1_item_count + #slot_2_item_count + #slot_3_item_count + #slot_4_item_count + #slot_5_item_count + #slot_6_item_count + #slot_7_item_count + #slot_8_item_count)",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_stack_count_int"
      }
    ]
  },

  // ???/?? ??
  "selected_slot_item_counter": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#inventory_stack_count",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 가져올 값 이름
        "binding_name": "#item_id_aux",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "resolve_sibling_scope": true,
        // ?? ??
        "source_control_name": "selected_slot_item_id_aux",
        // 계산식/참조 값
        "source_property_name": "#selected_item_id_aux_int",
        // 결과가 들어갈 속성
        "target_property_name": "#items_id_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#item_id_aux = #items_id_aux)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_selected_item"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#inventory_stack_count * 1)",
        // 결과가 들어갈 속성
        "target_property_name": "#item_stack_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#inventory_stack_count = 0)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_single_item"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#is_single_item + #item_stack_count) * #is_selected_item)",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_count"
      }
    ]
  },

  // ???/?? ??
  "selected_item_count": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_slot_item_id_aux@rainbowpie_modulelib_hud_item.selected_slot_item_id_aux": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_0@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_1@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_2@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_3@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_4@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_5@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_6@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_7@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_slot_8@rainbowpie_modulelib_hud_item.selected_slot_item_counter": {
          // ?? ??
          "collection_index": 8
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_0",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_0_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_1",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_1_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_2",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_2_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_3",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_3_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_4",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_4_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_5",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_5_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_6",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_6_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_7",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_7_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "count_slot_8",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_8_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#slot_0_item_count + #slot_1_item_count + #slot_2_item_count + #slot_3_item_count + #slot_4_item_count + #slot_5_item_count + #slot_6_item_count + #slot_7_item_count + #slot_8_item_count)",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_total_count_int"
      }
    ]
  },

  // ???/?? ??
  "inventory_item_counter_child": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#inventory_stack_count",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 가져올 값 이름
        "binding_name": "#item_id_aux",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
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
        "source_property_name": "('aux' + #item_id_aux + ',')",
        // 결과가 들어갈 속성
        "target_property_name": "#item_id_aux_str"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('id' + #item_id + ',')",
        // 결과가 들어갈 속성
        "target_property_name": "#item_id_str"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (($rainbowpie_localui_inventory_target_item_ids - #item_id_aux_str) = $rainbowpie_localui_inventory_target_item_ids))",
        // 결과가 들어갈 속성
        "target_property_name": "#is_match_aux"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (($rainbowpie_localui_inventory_target_item_ids - #item_id_str) = $rainbowpie_localui_inventory_target_item_ids))",
        // 결과가 들어갈 속성
        "target_property_name": "#is_match_id"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_match_aux or #is_match_id)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_target_item"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#inventory_stack_count * 1)",
        // 결과가 들어갈 속성
        "target_property_name": "#item_stack_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#inventory_stack_count = 0)",
        // 결과가 들어갈 속성
        "target_property_name": "#is_single_item"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#is_single_item + #item_stack_count) * #is_target_item)",
        // 결과가 들어갈 속성
        "target_property_name": "#selected_item_count"
      }
    ]
  },

  // ???/?? ??
  "inventory_item_counter": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // ?? ??
    "collection_index": "$collection_index",
    // 오버라이드 가능한 변수
    "$counter_control_name": "('inventory_count_slot_' + $collection_index + '_' + $rainbowpie_localui_inventory_target_item_ids)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "$counter_control_name@rainbowpie_modulelib_hud_item.inventory_item_counter_child": {}
      }
    ]
  },

  // ???/?? ??
  "hotbar_item_count": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventory_target_item_ids|default": "",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_0@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_1@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_2@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_3@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_4@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_5@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_6@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_7@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_8@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 8
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_0_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_0_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_1_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_1_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_2_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_2_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_3_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_3_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_4_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_4_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_5_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_5_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_6_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_6_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_7_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_7_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_8_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_8_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#slot_0_item_count + #slot_1_item_count + #slot_2_item_count + #slot_3_item_count + #slot_4_item_count + #slot_5_item_count + #slot_6_item_count + #slot_7_item_count + #slot_8_item_count)",
        // 결과가 들어갈 속성
        "target_property_name": "#hotbar_target_item_total_count_int"
      }
    ]
  },

  // ???/?? ??
  "inventory_item_count": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventory_target_item_ids|default": "",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_0@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_1@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_2@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_3@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_4@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_5@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_6@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_7@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_8@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_9@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 9
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_10@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 10
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_11@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_12@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 12
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_13@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 13
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_14@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 14
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_15@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 15
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_16@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 16
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_17@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_18@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 18
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_19@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 19
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_20@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_21@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 21
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_22@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 22
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_23@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 23
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_24@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 24
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_25@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 25
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_26@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 26
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_27@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 27
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_28@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 28
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_29@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 29
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_30@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 30
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_31@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 31
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_32@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 32
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_33@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 33
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_34@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 34
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_count_slot_35@rainbowpie_modulelib_hud_item.inventory_item_counter": {
          // 오버라이드 가능한 변수
          "$collection_index": 35
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_0_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_0_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_1_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_1_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_2_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_2_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_3_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_3_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_4_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_4_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_5_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_5_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_6_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_6_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_7_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_7_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_8_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_8_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_9_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_9_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_10_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_10_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_11_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_11_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_12_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_12_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_13_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_13_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_14_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_14_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_15_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_15_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_16_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_16_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_17_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_17_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_18_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_18_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_19_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_19_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_20_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_20_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_21_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_21_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_22_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_22_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_23_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_23_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_24_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_24_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_25_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_25_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_26_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_26_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_27_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_27_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_28_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_28_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_29_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_29_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_30_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_30_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_31_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_31_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_32_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_32_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_33_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_33_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_34_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_34_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "('inventory_count_slot_35_' + $rainbowpie_localui_inventory_target_item_ids)",
        // 계산식/참조 값
        "source_property_name": "#selected_item_count",
        // 결과가 들어갈 속성
        "target_property_name": "#slot_35_item_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#slot_0_item_count + #slot_1_item_count + #slot_2_item_count + #slot_3_item_count + #slot_4_item_count + #slot_5_item_count + #slot_6_item_count + #slot_7_item_count + #slot_8_item_count + #slot_9_item_count + #slot_10_item_count + #slot_11_item_count + #slot_12_item_count + #slot_13_item_count + #slot_14_item_count + #slot_15_item_count + #slot_16_item_count + #slot_17_item_count + #slot_18_item_count + #slot_19_item_count + #slot_20_item_count + #slot_21_item_count + #slot_22_item_count + #slot_23_item_count + #slot_24_item_count + #slot_25_item_count + #slot_26_item_count + #slot_27_item_count + #slot_28_item_count + #slot_29_item_count + #slot_30_item_count + #slot_31_item_count + #slot_32_item_count + #slot_33_item_count + #slot_34_item_count + #slot_35_item_count)",
        // 결과가 들어갈 속성
        "target_property_name": "#inventory_target_item_total_count_int"
      }
    ]
  }
}
```












### screen


### screen
music_player_screen.json
RainbowPie UI · screen



필요한 부분만 참고해서 가져가세요.



```
// 예제: music_player_screen.json
// 분류: RainbowPie UI / screen
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_music_player",

  // 다른 템플릿을 가져와서 확장(상속)
  "music_player_button_toggle_base@common_toggles.light_ui_toggle": {
    // ??/???
    "enabled": "$rainbowpie_ui_feature_musicplayer",
    // 오버라이드 가능한 변수
    "$unchecked_control": "rainbowpie_ui_toggle.toggle_button_unchecked",
    // 오버라이드 가능한 변수
    "$checked_control": "rainbowpie_ui_toggle.toggle_button_checked",
    // 오버라이드 가능한 변수
    "$unchecked_hover_control": "rainbowpie_ui_toggle.toggle_button_unchecked_hover",
    // 오버라이드 가능한 변수
    "$checked_hover_control": "rainbowpie_ui_toggle.toggle_button_checked_hover",
    // 오버라이드 가능한 변수
    "$unchecked_locked_control": "rainbowpie_ui_toggle.toggle_button_unchecked_locked",
    // 오버라이드 가능한 변수
    "$unchecked_locked_hover_control": "rainbowpie_ui_toggle.toggle_button_unchecked_locked_hover",
    // 오버라이드 가능한 변수
    "$checked_locked_control": "rainbowpie_ui_toggle.toggle_button_checked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_button_checked_locked_hover",

    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.music.button",

    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_music_player",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1003,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "exit_music_button@rainbowpie_ui_music_player.music_player_button_toggle_base": {
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 1001,
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "close_music_player",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "close_music_player",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#enabled"
      }
    ]
  },

  // ???/?? ??
  "exit_button_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_button_image@rainbowpie_ui_controls.background_button_image": {
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$alpha": 0.0,
          // ???
          "alpha": "$alpha",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$hover_state",
              // 오버라이드 가능한 변수
              "$alpha": 0.3
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "stack_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%c", 16 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "padding1": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 2, "100%" ]
                    }
                  },
                  {
                    // ???/?? ??
                    "chevron_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%c", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "left_chevron@common.chevron_image": {
                            // 사용할 이미지 경로
                            "texture": "textures/ui/chevron_left",
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, -0.5 ],
                            // ?? (R,G,B,A)
                            "color": "$rainbowpie_ui_theme_topbar_text_color"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "padding2": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 4, "100%" ]
                    }
                  },
                  {
                    // ???/?? ??
                    "button_text_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%c", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "button_text@rainbowpie_ui_common.text_label_notheme": {
                            // ?? (R,G,B,A)
                            "color": "$rainbowpie_ui_theme_topbar_text_color",
                            // 보여줄 글자
                            "text": "$button_text"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "padding3": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 2, "100%" ]
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
  "header_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "exit_music_button@rainbowpie_ui_music_player.exit_music_button": {
          // 오버라이드 가능한 변수
          "$toggle_focus_enabled": false,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_border_enabled": false,
          // 오버라이드 가능한 변수
          "$button_content_size": [ "100% - 4px", "100%" ],
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_default_alpha": 0.0,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_hover_alpha": 0.0,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_pressed_alpha": 0.0,
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
          "$button_content": "rainbowpie_ui_music_player.exit_button_content",
          // 오버라이드 가능한 변수
          "$button_text": "rainbowpie.ui.music.title",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 가로/세로 크기
          "size": [ 150, 20 ],
          // 오버라이드 가능한 변수
          "$button_mappings": [
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_select",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_select",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_ok",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_select",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_cancel",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_select",
              // 입력 시점(pressed 등)
              "mapping_type": "global"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "music_player_screen": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "Music Player Title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_content_panel": "rainbowpie_ui_music_player.header_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_show_close": false
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "blur_layer@mintui_background.background_blur": {
          // 완전히 제거(공간도 없음)
          "ignored": "$rainbowpie_ui_flag_3e35fb2e",
          // 오버라이드 가능한 변수
          "$background_offset": [ "-68%", 20 ],
          // 오버라이드 가능한 변수
          "$background_children_offset": [ "68%", -20 ],
          // 오버라이드 가능한 변수
          "$background_layer": -3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "mask_layer@mintui_background.background_mask": {
          // 완전히 제거(공간도 없음)
          "ignored": "$rainbowpie_ui_flag_3e35fb2e",
          // 오버라이드 가능한 변수
          "$background_offset": [ "-68%", 20 ],
          // 오버라이드 가능한 변수
          "$background_children_offset": [ "68%", -20 ],
          // 오버라이드 가능한 변수
          "$background_layer": -3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_blur@mintui_background.background_blur_fullscreen": {
          // 완전히 제거(공간도 없음)
          "ignored": "((not $is_pregame) or (not $rainbowpie_ui_flag_3e35fb2e))",
          // 오버라이드 가능한 변수
          "$background_mask": false,
          // 겹치는 순서(숫자 클수록 위)
          "layer": -3
        }
      },
      {
        // ???/?? ??
        "container": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100% - 20px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 20 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "selector_background@rainbowpie_ui_common.text_background": {
                // 완전히 제거(공간도 없음)
                "ignored": "$rainbowpie_ui_flag_71042f58",
                // 보이기/숨기기(공간 유지)
                "visible": "((not $is_pregame) or (not $rainbowpie_ui_feature_background_blur))",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_left",
                // 가로/세로 크기
                "size": [ "32%", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "content_background@rainbowpie_ui_common.global_background": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 가로/세로 크기
                "size": [ "68%", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // ???
                "alpha": "$rainbowpie_localui_this_alpha",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_this_alpha": "$rainbowpie_ui_theme_global_background_alpha",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$is_pregame",
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_this_alpha": 0.5
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "dialog_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "selector_area@rainbowpie_ui_music_player.selector_area": {} },
                  { "content_area@rainbowpie_ui_music_player.content_area": {} }
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "selector_area": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "32%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // ??? ?? ?
    "focus_container": true,
    // ??? ?? ?
    "use_last_focus": true,
    // 오버라이드 가능한 변수
    "$focus_navigation_mode_override_down|default": "contained",
    // 오버라이드 가능한 변수
    "$focus_navigation_mode_override_up|default": "contained",
    // 오버라이드 가능한 변수
    "$focus_navigation_mode_override_left|default": "",
    // 오버라이드 가능한 변수
    "$focus_navigation_mode_override_right|default": "",
    // ??? ?? ?
    "focus_navigation_mode_down": "$focus_navigation_mode_override_down",
    // ??? ?? ?
    "focus_navigation_mode_up": "$focus_navigation_mode_override_up",
    // ??? ?? ?
    "focus_navigation_mode_left": "$focus_navigation_mode_override_left",
    // ??? ?? ?
    "focus_navigation_mode_right": "$focus_navigation_mode_override_right",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "scrolling_panel@common.scrolling_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_scrollbar_enabled": true,
          // 오버라이드 가능한 변수
          "$scrolling_content": "rainbowpie_ui_music_player.scrollable_selector_area_content",
          // 오버라이드 가능한 변수
          "$show_background": false,
          // 오버라이드 가능한 변수
          "$scroll_size": [ "5px", "100% - 4px" ],
          // 오버라이드 가능한 변수
          "$scroll_bar_left_padding_size": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$scroll_bar_right_padding_size": [ 1, 0 ]
        }
      }
    ]
  },

  // ???/?? ??
  "scrollable_selector_area_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점에서 이동하는 거리
    "offset": [ 1, 1 ],
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%c + 2px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "selector_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 오버라이드 가능한 변수
          "$default_selector_toggle_index": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "home_button@rainbowpie_ui_music_player.section_toggle_button": {
                // 오버라이드 가능한 변수
                "$section_topic": "home",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": 1
              }
            },
            { "single_category@rainbowpie_ui_music_player.topic_category": { "$category": "single" } },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "record_music_button@rainbowpie_ui_music_player.section_toggle_button": {
                // 오버라이드 가능한 변수
                "$section_topic": "record",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": 2
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "content_area": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "68%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "control": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100% - 2px", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "scrolling_panel@common.scrolling_panel": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_scrollbar_enabled": true,
                // 가로/세로 크기
                "size": [ "100%", "fill" ],
                // 오버라이드 가능한 변수
                "$scrolling_content": "rainbowpie_ui_music_player.scrollable_content_area_content",
                // 오버라이드 가능한 변수
                "$show_background": false,
                // 오버라이드 가능한 변수
                "$scroll_size": [ "5px", "100% - 4px" ],
                // 오버라이드 가능한 변수
                "$scroll_bar_left_padding_size": [ 0, 0 ],
                // 오버라이드 가능한 변수
                "$scroll_bar_right_padding_size": [ 1, 0 ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "scrollable_content_area_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점에서 이동하는 거리
    "offset": [ 1, 1 ],
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%c + 2px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "content_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 오버라이드 가능한 변수
          "$default_selector_toggle_index": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "home_section@rainbowpie_ui_music_player.home_section": {
                // 오버라이드 가능한 변수
                "$section_topic": "home"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "record_section@rainbowpie_ui_music_player.record_section": {
                // 오버라이드 가능한 변수
                "$section_topic": "record"
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "home_section@rainbowpie_ui_music_player.main_sections": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "tip_background@rainbowpie_ui_common.text_background": {
          // 완전히 제거(공간도 없음)
          "ignored": true,
          // 가로/세로 크기
          "size": [ "100%", "100%c + 4px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "tip_text@rainbowpie_ui_common.text_label": {
                // 가로/세로 크기
                "size": [ "100% - 4px", "default" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 보여줄 글자
                "text": "tip text"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "padding_0": {
          // 완전히 제거(공간도 없음)
          "ignored": true,
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // ???/?? ??
        "album_1": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%", 100 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "record@rainbowpie_ui_music_player.album_template": {
                // 가로/세로 크기
                "size": [ "fill", "100%" ],
                // 오버라이드 가능한 변수
                "$album_cover_texture": "($rainbowpie_ui_path_home + '/music_player/record')",
                // 오버라이드 가능한 변수
                "$album_title": "rainbowpie.ui.music.section.record",
                // 오버라이드 가능한 변수
                "$album_sound_name": "minecraft.music.record",
                // 오버라이드 가능한 변수
                "$album_section_topic": "record",
                // 오버라이드 가능한 변수
                "$album_forced_index": 1001
              }
            },
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100%" ]
              }
            },
            {
              // ???/?? ??
              "padding_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100%" ]
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "record_section@rainbowpie_ui_music_player.main_sections": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_13@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_13",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_13.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.13",
          // 오버라이드 가능한 변수
          "$music_button_duration": 178
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_cat@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_cat",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_cat.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.cat",
          // 오버라이드 가능한 변수
          "$music_button_duration": 185
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_blocks@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_blocks",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_blocks.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.blocks",
          // 오버라이드 가능한 변수
          "$music_button_duration": 345
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_chirp@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_chirp",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_chirp.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.chirp",
          // 오버라이드 가능한 변수
          "$music_button_duration": 185
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_far@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_far",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_far.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.far",
          // 오버라이드 가능한 변수
          "$music_button_duration": 174
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_mall@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_mall",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_mall.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.mall",
          // 오버라이드 가능한 변수
          "$music_button_duration": 197
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_mellohi@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_mellohi",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_mellohi.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.mellohi",
          // 오버라이드 가능한 변수
          "$music_button_duration": 96
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_stal@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_stal",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_stal.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.stal",
          // 오버라이드 가능한 변수
          "$music_button_duration": 150
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_strad@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_strad",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_strad.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.strad",
          // 오버라이드 가능한 변수
          "$music_button_duration": 188
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_ward@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_ward",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_ward.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.ward",
          // 오버라이드 가능한 변수
          "$music_button_duration": 251
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_11@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_11",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_11.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.11",
          // 오버라이드 가능한 변수
          "$music_button_duration": 71
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_wait@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_wait",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_wait.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.wait",
          // 오버라이드 가능한 변수
          "$music_button_duration": 237
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_otherside@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_otherside",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_otherside.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.otherside",
          // 오버라이드 가능한 변수
          "$music_button_duration": 195
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_5@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_5",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_5.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "minecraft.music.the_wild_update.five",
          // 오버라이드 가능한 변수
          "$music_button_duration": 178
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_pigstep@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/record_pigstep",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_pigstep.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.pigstep_master",
          // 오버라이드 가능한 변수
          "$music_button_duration": 178
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "record_relic@rainbowpie_ui_music_player.music_template_button": {
          // 오버라이드 가능한 변수
          "$music_button_texture": "textures/items/music_disc_relic",
          // 오버라이드 가능한 변수
          "$music_button_text": "item.record_relic.desc",
          // 오버라이드 가능한 변수
          "$music_button_sound": "record.play.relic",
          // 오버라이드 가능한 변수
          "$music_button_duration": 178
        }
      }
    ]
  },

  // ???/?? ??
  "topic_category": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 16 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "list_title@rainbowpie_ui_common.title_background": {
          // 오버라이드 가능한 변수
          "$category|default": "none",
          // 가로/세로 크기
          "size": [ "100%", 14 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "text_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100% - 4px", 10 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title@rainbowpie_ui_common.title_label": {
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 보여줄 글자
                      "text": "('rainbowpie.ui.music.category.' + $category)",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
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
  "album_template": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 70, 116 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 오버라이드 가능한 변수
    "$album_cover_texture|default": "($rainbowpie_ui_path_home + '/music_player/album_volume_alpha')",
    // 오버라이드 가능한 변수
    "$album_title|default": "Album Template",
    // 오버라이드 가능한 변수
    "$album_sound_name|default": "random.click",
    // 오버라이드 가능한 변수
    "$album_section_topic|default": "none",
    // 오버라이드 가능한 변수
    "$album_forced_index|default": 1000,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.text_background": {
          // 가로/세로 크기
          "size": [ "100%", "100% - 26px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "cover_image": {
                // 이미지 표시
                "type": "image",
                // ?? ??
                "fill": true,
                // 사용할 이미지 경로
                "texture": "$album_cover_texture",
                // 가로/세로 크기
                "size": [ "100%", "100% - 14px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "music_title@rainbowpie_ui_common.text_label": {
                // 가로/세로 크기
                "size": [ "100% - 4px", 14 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "100% - 14px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 보여줄 글자
                "text": "$album_title",
                // ?? ?? ??
                "font_scale_factor": 1.4,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "button_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100% + 1px", 25 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "play_button@common_buttons.light_content_button": {
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100% - 1px", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 20,
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 오버라이드 가능한 변수
                "$pressed_button_name": "rainbowpie.music_empty",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpie_ui_music_player.play_button_icon",
                // ??? ??
                "sound_name": "$album_sound_name",
                // ??? ?? ?
                "sound_volume": 1.0,
                // ??? ?? ?
                "sound_pitch": 1
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "section_toggle_button@common_toggles.light_ui_toggle": {
                // 가로/세로 크기
                "size": [ "fill", "100%" ],

                // 오버라이드 가능한 변수
                "$button_image_size": [ "100% - 1px", "100%" ],
                // 오버라이드 가능한 변수
                "$unchecked_control": "rainbowpie_ui_toggle.toggle_button_unchecked",
                // 오버라이드 가능한 변수
                "$checked_control": "rainbowpie_ui_toggle.toggle_button_checked",
                // 오버라이드 가능한 변수
                "$unchecked_hover_control": "rainbowpie_ui_toggle.toggle_button_unchecked_hover",
                // 오버라이드 가능한 변수
                "$checked_hover_control": "rainbowpie_ui_toggle.toggle_button_checked_hover",
                // 오버라이드 가능한 변수
                "$unchecked_locked_control": "rainbowpie_ui_toggle.toggle_button_unchecked_locked",
                // 오버라이드 가능한 변수
                "$unchecked_locked_hover_control": "rainbowpie_ui_toggle.toggle_button_unchecked_locked_hover",
                // 오버라이드 가능한 변수
                "$checked_locked_control": "rainbowpie_ui_toggle.toggle_button_checked_locked",
                // 오버라이드 가능한 변수
                "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_button_checked_locked_hover",

                // 오버라이드 가능한 변수
                "$button_text_binding_type": "none",
                // 오버라이드 가능한 변수
                "$button_binding_condition": "none",
                // 오버라이드 가능한 변수
                "$button_text_grid_collection_name": "none",
                // 오버라이드 가능한 변수
                "$button_text": "rainbowpie.ui.music.button.seeAll",
                // 오버라이드 가능한 변수
                "$button_offset": [ 0, 0 ],

                // 오버라이드 가능한 변수
                "$radio_toggle_group": true,
                // 오버라이드 가능한 변수
                "$toggle_name": "rainbowpieui_music_player_navigation_tab",
                // 오버라이드 가능한 변수
                "$toggle_group_default_selected": "$default_selector_toggle_index",

                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$album_forced_index",

                // 오버라이드 가능한 변수
                "$toggle_view_binding_name": "($album_section_topic + '_second_button_toggle')"
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "music_template_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 29 ],
    // ?? ????
    "clips_children": true,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,

    // 오버라이드 가능한 변수
    "$music_button_sound|default": "null",
    // 오버라이드 가능한 변수
    "$music_pitch|default": 1.0,
    // 오버라이드 가능한 변수
    "$music_button_text|default": "null",
    // 오버라이드 가능한 변수
    "$music_button_texture|default": "",
    // 오버라이드 가능한 변수
    "$music_button_duration|default": 0,
    // 오버라이드 가능한 변수
    "$music_button_stoppable|default": true,

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.text_background": {
          // 가로/세로 크기
          "size": [ "100%", "100% - 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "progress_bar": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 0, "100%" ],
                // ????? ?? ?
                "animation_reset_name": "($music_button_sound + '_stop')",
                // 애니메이션 목록
                "anims": [
                  "@rainbowpie_ui_music_player.music_progress_bar_panel_panel"
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "music_progress_bar_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, "100%" ],
                      // ????? ?? ?
                      "animation_reset_name": "$music_button_sound",
                      // 애니메이션 목록
                      "anims": [
                        "@rainbowpie_ui_music_player.music_progress_bar_panel"
                      ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "music_progress_bar": {
                            // 이미지 표시
                            "type": "image",
                            // 완전히 제거(공간도 없음)
                            "ignored": "($music_button_duration = 0)",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ "-100%", 0 ],
                            // 사용할 이미지 경로
                            "texture": "textures/ui/White",
                            // ?? (R,G,B,A)
                            "color": "$rainbowpie_ui_theme_button_background_hover_color",
                            // ???
                            "alpha": "$rainbowpie_ui_theme_button_background_hover_alpha",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2,
                            // ????? ?? ?
                            "animation_reset_name": "$music_button_sound",
                            // 애니메이션 목록
                            "anims": [
                              "@rainbowpie_ui_music_player.music_progress_bar_wait"
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
              "music_icon": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12,
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "$music_button_texture",
                // 가로/세로 크기
                "size": [ "100%y", "100% - 2px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 1, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "play_button@common_buttons.light_content_button": {
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12,
                // 가로/세로 크기
                "size": [ "100%y", "100% - 2px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 28, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "$music_button_sound",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpie_ui_music_player.play_button_icon",
                // ??? ??
                "sound_name": "$music_button_sound",
                // ??? ?? ?
                "sound_volume": 1.0,
                // ??? ?? ?
                "sound_pitch": "$music_pitch"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "stop_button@common_buttons.light_content_button": {
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 보이기/숨기기(공간 유지)
                "visible": "$music_button_stoppable",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12,
                // 가로/세로 크기
                "size": [ "100%y", "100% - 2px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 55, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "($music_button_sound + '_stop')",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpie_ui_music_player.stop_button_icon",
                // ??? ??
                "sound_name": "$music_button_sound",
                // ??? ?? ?
                "sound_volume": 0.0000000000001,
                // ??? ?? ?
                "sound_pitch": 0.0
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "music_title@rainbowpie_ui_common.text_label": {
                // 가로/세로 크기
                "size": [ "100% - 58px", 14 ],
                // 오버라이드 가능한 변수
                "$text_offset|default": [ 59, 0 ],
                // 기준점에서 이동하는 거리
                "offset": "$text_offset",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // ?? ?? ??
                "font_scale_factor": 1.4,
                // ?? ??
                "text_alignment": "left",
                // 보여줄 글자
                "text": "$music_button_text",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12,
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$music_button_stoppable",
                    // 오버라이드 가능한 변수
                    "$text_offset": [ 86, 0 ]
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
  "play_button_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "image": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 사용할 이미지 경로
          "texture": "textures/ui/store_play_button"
        }
      }
    ]
  },

  // ???/?? ??
  "stop_button_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "image": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 가로/세로 크기
          "size": [ "100% - 8px", "100% - 8px" ],
          // 사용할 이미지 경로
          "texture": "textures/ui/White"
        }
      }
    ]
  },

  // ???/?? ??
  "music_progress_bar": {
    // 위치 이동
    "anim_type": "offset",
    // 걸리는 시간(초)
    "duration": "($music_button_duration)",
    // 시작 값
    "from": [ "-100%", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_music_player.music_progress_bar_wait"
  },

  // ???/?? ??
  "music_progress_bar_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_music_player.music_progress_bar"
  },

  // ???/?? ??
  "music_progress_bar_panel": {
    // 크기 변화
    "anim_type": "size",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": [ 0, "100%" ],
    // 끝 값
    "to": [ "100%", "100%" ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_music_player.music_progress_bar_panel_wait"
  },

  // ???/?? ??
  "music_progress_bar_panel_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "($music_button_duration)",
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_music_player.music_progress_bar_panel_reset",
    // ?? ??
    "reset_event": "$music_button_sound"
  },

  // ???/?? ??
  "music_progress_bar_panel_reset": {
    // 크기 변화
    "anim_type": "size",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": [ 0, "100%" ],
    // 끝 값
    "to": [ 0, "100%" ],
    // ?? ??
    "end_event": "$music_button_sound"
  },

  // ???/?? ??
  "music_progress_bar_panel_panel": {
    // 크기 변화
    "anim_type": "size",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": [ 0, "100%" ],
    // 끝 값
    "to": [ "100%", "100%" ],
    // ?? ??
    "play_event": "$music_button_sound"
  },

  // ???/?? ??
  "main_sections": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "($section_topic + '_button_toggle')",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#tab_selected"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "($section_topic + '_second_button_toggle')",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#button_selected"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#tab_selected or #button_selected)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "section_toggle_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "25px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "section_toggle_button@common_toggles.light_ui_toggle": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 가로/세로 크기
          "size": [ "100%", "25px" ],
          // 오버라이드 가능한 변수
          "$button_type_panel": "rainbowpie_ui_music_player.toggle_button_control",
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
          "$radio_toggle_group": true,
          // 오버라이드 가능한 변수
          "$toggle_name": "rainbowpieui_music_player_navigation_tab",
          // 오버라이드 가능한 변수
          "$toggle_group_default_selected": "$default_selector_toggle_index",

          // 오버라이드 가능한 변수
          "$toggle_view_binding_name": "($section_topic + '_button_toggle')"
        }
      }
    ]
  },

  // ???/?? ??
  "toggle_button_control": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "tab_button_text@rainbowpie_ui_common.text_label_notheme": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ "100% - 10px", "default" ],
          // ?? ?? ?
          "max_size": [ "100% - 14px", "100% - 4px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 10, 0 ],
          // 보여줄 글자
          "text": "('rainbowpie.ui.music.section.' + $section_topic)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      }
    ]
  }
}
```











[분할 목록으로 돌아가기](preview.html#example-view)


[분할 목록으로 돌아가기](preview.html#example-view)

### ui extras


### ui extras
add_external_server_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: add_external_server_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_add_external_server",

  // ???/?? ??
  "add_external_server_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "#title_text",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#title_text",
              // ?? ???
              "binding_condition": "once"
            }
          ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_add_external_server.content_panel",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false,
          // 가로/세로 크기
          "size": [ 316, 162 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8
        }
      },
      {
        // ???/?? ??
        "blur_panel_2": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ "50% - 158px", 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "blur_panel_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // ?? ????
                "clips_children": true,
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "50% - 81px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "blur_layer_1@mintui_background.background_blur": {
                      // 오버라이드 가능한 변수
                      "$background_offset": [ "-100% + 316px", "-100% + 162px" ],
                      // 오버라이드 가능한 변수
                      "$background_children_offset": [ "50% - 158px", "50% - 81px" ],
                      // 오버라이드 가능한 변수
                      "$background_layer": 2
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mask_layer_1@mintui_background.background_mask": {
                      // 오버라이드 가능한 변수
                      "$background_offset": [ "-100% + 316px", "-100% + 162px" ],
                      // 오버라이드 가능한 변수
                      "$background_children_offset": [ "50% - 158px", "50% - 81px" ],
                      // 오버라이드 가능한 변수
                      "$background_layer": 2
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
  "content_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "content_panel@rainbowpie_ui_dialog.content_background": {
                // 가로/세로 크기
                "size": [ "100%", "fill" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "main_content@add_external_server.content_panel": {
                      // 가로/세로 크기
                      "size": [ "100% - 4px", "100% - 4px" ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "button_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "100%c + 1px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "button_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 가로/세로 크기
                      "size": [ "100% + 1px", "100%c" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "button_stack_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 가로/세로 크기
                            "size": [ "100%", 23 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "play@add_external_server.play_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100% - 1px", "100%" ],
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "remove@add_external_server.remove_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100% - 1px", "100%" ],
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "save@add_external_server.save_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100% - 1px", "100%" ],
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ]
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
```









[분할 목록으로 돌아가기](preview.html#example-view)

