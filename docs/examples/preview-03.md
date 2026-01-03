---
title: 예제 미리보기 (3/12)
outline: false
search: false
---

# 예제 미리보기 (3/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### ui extras
anvil_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: anvil_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_anvil",

  // ???/?? ??
  "anvil_item_slot": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item@rainbowpie_ui_inventory_and_container.container_item": {
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anvil_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 161 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
      { "gamepad_cursor@common.gamepad_cursor_button": {} },
      { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "anvil_background_icon@rainbowpie_ui_inventory.background_icon": {
                // 가로/세로 크기
                "size": "$rainbowpie_ui_theme_inventory_bgicon_anvil_size",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_ui_theme_inventory_bgicon_anvil_offset",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_anvil_anchor",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_anvil_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_inventory_bgicon_anvil_texture",
                // ???
                "alpha": "$rainbowpie_ui_theme_inventory_bgicon_anvil_alpha",
                // ?? ??
                "fill": "$rainbowpie_ui_theme_inventory_bgicon_anvil_fill"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "14.28571428571429%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "container.repair",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border1_size": [ "2.380952380952381%", 0 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border2_size": [ "2.380952380952381%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 14.28571428571429%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "top_half_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ], // 162x54
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-50.31055900621118%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "text_edit_control@anvil.text_edit_control": {
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 가로/세로 크기
                      "size": [ "100% - 105.5555555555556%y", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$edit_box_indent_size": [ "100%", "100%" ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "maximized_input_button@rainbowpieui_anvil.maximized_input_toggle_base": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100%", "100%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_right",
                      // 가로/세로 크기
                      "size": [ "100%y", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$toggle_group_forced_index": 1000,
                      // 오버라이드 가능한 변수
                      "$toggle_view_binding_name": "maximized_input",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "maximized_input",
                          // 계산식/참조 값
                          "source_property_name": "(not #toggle_state)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#enabled"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "recipe_grid": {
                      // 격자 컨테이너: 칸칸이 배치
                      "type": "grid",
                      // 가로/세로 크기
                      "size": [ "83%", "33.33333333333333%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, "-14.81481481481481%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 그리드 칸 수
                      "grid_dimensions": [ 5, 1 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "input_item_slot@rainbowpieui_anvil.anvil_item_slot": {
                            // 그리드 위치
                            "grid_position": [ 0, 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "anvil_input_items",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "anvil_input",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "anvil_material"
                          }
                        },
                        {
                          // ???/?? ??
                          "plus": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 그리드 위치
                            "grid_position": [ 1, 0 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "plus_sign_icon@anvil.plus_sign_icon": {
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 3,
                                  // 가로/세로 크기
                                  "size": [ "100%y", "72.22222222222222%" ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "material_item_slot@rainbowpieui_anvil.anvil_item_slot": {
                            // 그리드 위치
                            "grid_position": [ 2, 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "anvil_material_items",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "anvil_material",

                            // 오버라이드 가능한 변수
                            "$focus_override_left_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "anvil_input",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "anvil_result"
                          }
                        },
                        {
                          // ???/?? ??
                          "yields": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 그리드 위치
                            "grid_position": [ 3, 0 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "arrow_icon@anvil.arrow_icon": {
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 3,
                                  // 가로/세로 크기
                                  "size": [ "150%y", "66.66666666666667%" ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "cross_out_icon@anvil.cross_out_icon": {
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 4,
                                  // 가로/세로 크기
                                  "size": [ "150%y", "66.66666666666667%" ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "result_item_slot@rainbowpieui_anvil.anvil_item_slot": {
                            // 그리드 위치
                            "grid_position": [ 4, 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "anvil_result_items",
                            // 오버라이드 가능한 변수
                            "$button_ref": "anvil.anvil_output_slot_button",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "anvil_result",

                            // 오버라이드 가능한 변수
                            "$focus_override_left_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "anvil_material"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "cost_label_0@anvil.cost_label": {
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 2 ],
                      // ?? (R,G,B,A)
                      "color": "$anvil_cost_fail_text_color",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#cost_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#cost_text_red",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "cost_label_1@anvil.cost_label": {
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 2 ],
                      // ?? (R,G,B,A)
                      "color": "$anvil_cost_success_text_color",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#cost_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#cost_text_green",
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
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory@rainbowpie_ui_inventory_and_container.inventory_panel_bottom_half": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-14.90683229813665%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar@rainbowpie_ui_inventory_and_container.hotbar_grid_template": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "11.18012422360248%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.863354037267081%" ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "maximized_input_dialog_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "modal_input_panel@rainbowpieui_anvil.modal_input_panel": {
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "maximized_input_dialog@rainbowpieui_anvil.maximized_input_dialog": {}
            }
          ]
        }
      }
    ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "maximized_input",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "modal_input_panel@common.input_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100,
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
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
        "from_button_id": "button.menu_secondary_select",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_secondary_select",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_ok",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_ok",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_cancel",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_up",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_up",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_down",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_down",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_left",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_left",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_right",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_right",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_dialog@rainbowpie_ui_dialog.dialog_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title": "tile.anvil.name",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_anvil.maximized_input_dialog_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_show_close": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content": "rainbowpieui_anvil.maximized_input_dialog_content",
    // 가로/세로 크기
    "size": "$extra_large_screen_size",
    // ?? ?? ?
    "max_size": "$extra_large_max_screen_size",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 110
  },

  // ???/?? ??
  "maximized_input_dialog_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
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
          "size": [ "100%c", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "minimized_input_button@rainbowpieui_anvil.maximized_input_toggle_base": {
                // 오버라이드 가능한 변수
                "$toggle_focus_enabled": false,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_color": "$rainbowpie_ui_theme_closebutton_hover_background_color",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_alpha": "$rainbowpie_ui_theme_closebutton_hover_background_alpha",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_pressed_color": "$rainbowpie_ui_theme_closebutton_pressed_background_color",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_pressed_alpha": "$rainbowpie_ui_theme_closebutton_pressed_background_alpha",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpieui_anvil.close_button_icon",
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": 1001,
                // 오버라이드 가능한 변수
                "$toggle_view_binding_name": "minimized_input",
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
        }
      }
    ]
  },

  // ???/?? ??
  "maximized_input_dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anvil_multiline_text_edit_box@rainbowpieui_anvil.anvil_multiline_text_edit_box": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anvil_multiline_text_edit_box@common.multiline_text_edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,
    // 오버라이드 가능한 변수
    "$edit_box_indent_size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100% - 4px", "100% - 4px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ?? ?? ?
    "max_length": 32500,
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ???/??? ?
      "#property_field": "#item_name"
    },
    // 오버라이드 가능한 변수
    "$text_edit_binding_name": "#text_box_item_name",
    // 오버라이드 가능한 변수
    "$place_holder_text": "Enter your content here..."
  },

  // ???/?? ??
  "close_button_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/close_button/close')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_localui_button_text_color"
  },

  // ???/?? ??
  "maximize_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "150%", "150%" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/maximize_icon')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_anvil.maximize_icon",

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
    "$toggle_name": "rainbowpie_anvil_maximized_input",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  }
}
```








### ui extras
book_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: book_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_book",

  // 다른 템플릿을 가져와서 확장(상속)
  "top_tab@common_tabs.tab_top": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_default_alpha": 0.0,
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_checked_default_alpha": 0.2,

    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$toggle_tts_enabled_binding_type": "global",
    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpieui_navigation_tab",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 10,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 오버라이드 가능한 변수
    "$toggle_tts_type_priority": 1001,
    // 오버라이드 가능한 변수
    "$toggle_tts_toggle_on_text": "",
    // 오버라이드 가능한 변수
    "$toggle_tts_toggle_off_text": "",
    // 오버라이드 가능한 변수
    "$toggle_tts_index_priority": 1002,
    // 오버라이드 가능한 변수
    "$tab_content": "rainbowpieui_book.top_tab_content"
  },

  // ???/?? ??
  "top_tab_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "tab_label@rainbowpie_ui_common.text_label_notheme": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 가로/세로 크기
          "size": [ "default", "default" ],
          // ?? ??
          "text_alignment": "center",
          // 보여줄 글자
          "text": "$tab_text",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_dialog@rainbowpie_ui_dialog.dialog_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title": "item.writable_book.name",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_book.maximized_input_dialog_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_show_close": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content": "rainbowpieui_book.maximized_input_dialog_content",
    // 가로/세로 크기
    "size": "$extra_large_screen_size",
    // ?? ?? ?
    "max_size": "$extra_large_max_screen_size",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 110
  },

  // ???/?? ??
  "maximized_input_dialog_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
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
          "size": [ "100%c", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "tab_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ 100, "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_navigation_tab@rainbowpieui_book.top_tab": {
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ],
                      // 오버라이드 가능한 변수
                      "$tab_view_binding_name": "title_navigation_tab_toggle",
                      // 오버라이드 가능한 변수
                      "$tab_text": "rainbowpie.ui.book.tab.title",
                      // 오버라이드 가능한 변수
                      "$toggle_group_forced_index": 10
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "auther_navigation_tab@rainbowpieui_book.top_tab": {
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ],
                      // 오버라이드 가능한 변수
                      "$tab_view_binding_name": "auther_navigation_tab_toggle",
                      // 오버라이드 가능한 변수
                      "$tab_text": "rainbowpie.ui.book.tab.auther",
                      // 오버라이드 가능한 변수
                      "$toggle_group_forced_index": 11
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "minimized_input_button@rainbowpieui_book.maximized_input_toggle_base": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_color": "$rainbowpie_ui_theme_closebutton_hover_background_color",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_alpha": "$rainbowpie_ui_theme_closebutton_hover_background_alpha",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_pressed_color": "$rainbowpie_ui_theme_closebutton_pressed_background_color",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_pressed_alpha": "$rainbowpie_ui_theme_closebutton_pressed_background_alpha",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpieui_book.close_button_icon",
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": 1001,
                // 오버라이드 가능한 변수
                "$toggle_view_binding_name": "minimized_input",
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
        }
      }
    ]
  },

  // ???/?? ??
  "maximized_input_dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "title_text_box": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "title_multiline_text_edit_box@rainbowpieui_book.title_multiline_text_edit_box": {} }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "title_navigation_tab_toggle",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "author_text_box": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "auther_multiline_text_edit_box@rainbowpieui_book.auther_multiline_text_edit_box": {} }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "auther_navigation_tab_toggle",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "title_multiline_text_edit_box@common.multiline_text_edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,
    // 오버라이드 가능한 변수
    "$edit_box_indent_size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100% - 4px", "100% - 4px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ?? ?? ?
    "max_length": 32500,
    // 오버라이드 가능한 변수
    "$text_box_name": "#title_text_box",
    // 오버라이드 가능한 변수
    "$text_box_enabled_binding_name": "#editable",
    // 오버라이드 가능한 변수
    "$text_edit_box_content_binding_name": "#title_text_box_item_name",
    // 오버라이드 가능한 변수
    "$place_holder_text": "Enter your content here...",
    // 오버라이드 가능한 변수
    "$enable_profanity_filter": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "auther_multiline_text_edit_box@common.multiline_text_edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,
    // 오버라이드 가능한 변수
    "$edit_box_indent_size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100% - 4px", "100% - 4px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ?? ?? ?
    "max_length": 32500,
    // 오버라이드 가능한 변수
    "$text_box_name": "#author_text_box",
    // 오버라이드 가능한 변수
    "$text_box_enabled_binding_name": "#author_editable",
    // 오버라이드 가능한 변수
    "$text_edit_box_content_binding_name": "#author_text_box_item_name",
    // 오버라이드 가능한 변수
    "$place_holder_text": "Enter your content here...",
    // 오버라이드 가능한 변수
    "$enable_profanity_filter": true
  },

  // ???/?? ??
  "close_button_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/close_button/close')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_localui_button_text_color"
  },

  // ???/?? ??
  "maximize_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 18, 18 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/maximize_icon')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_book.maximize_icon",

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
    "$toggle_name": "rainbowpie_book_maximized_input",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "book_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_ingame_anim1": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // ???/?? ??
              "screen_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "book_screen_content@book.book_screen_content": {} }
                ],
                // 보이기/숨기기(공간 유지)
                "visible": true,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "maximized_input",
                    // 계산식/참조 값
                    "source_property_name": "(not #toggle_state)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "subscreen_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "maximized_input_dialog@rainbowpieui_book.maximized_input_dialog": {} }
                ],
                // 보이기/숨기기(공간 유지)
                "visible": false,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "maximized_input",
                    // 계산식/참조 값
                    "source_property_name": "#toggle_state",
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
```








### ui extras
brewing_stand_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: brewing_stand_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_brewing_stand",

  // 다른 템플릿을 가져와서 확장(상속)
  "fuel_empty_image@brewing_stand.fuel_empty_image": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, "-5.555555555555556%" ],
    // 가로/세로 크기
    "size": [ "88.88888888888889%", "88.88888888888889%" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "bottle_empty_image@brewing_stand.bottle_empty_image": {
    // 기준점에서 이동하는 거리
    "offset": [ "5.555555555555556%", "-5.555555555555556%" ],
    // 가로/세로 크기
    "size": [ "88.88888888888889%", "88.88888888888889%" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "brewingstand_output_item@rainbowpie_ui_inventory_and_container.container_item": {
    // 오버라이드 가능한 변수
    "$cell_overlay_ref": "rainbowpieui_brewing_stand.bottle_empty_image",
    // 오버라이드 가능한 변수
    "$item_collection_name": "brewing_result_items"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "brewing_stand_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 166 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
      { "gamepad_cursor@common.gamepad_cursor_button": {} },
      { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "brewingstand_background_icon@rainbowpie_ui_inventory.background_icon": {
                // 가로/세로 크기
                "size": "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_size",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_offset",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_anchor",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_texture",
                // ???
                "alpha": "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_alpha",
                // ?? ??
                "fill": "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_fill"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "13.85542168674699%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "$container_title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border1_size": [ "2.380952380952381%", 0 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border2_size": [ "2.380952380952381%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 13.85542168674699%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "brewing_panel_top_half": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "35.5421686746988%" ], // 162x59
                // 기준점에서 이동하는 거리
                "offset": [ 0 , "-48.79518072289157%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "brewing_stand_pictogram": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, "-5.084745762711864%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "brewing_input_slot": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%y", "30.50847457627119%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, "-30.50847457627119%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "input_grid_item@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_collection_name": "brewing_input_item",

                                  // 오버라이드 가능한 변수
                                  "$focus_override_left_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_left": "brewing_fuel"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "brewing_output_slots": {
                            // 격자 컨테이너: 칸칸이 배치
                            "type": "grid",
                            // 가로/세로 크기
                            "size": [ "33.33333333333333%", "30.50847457627119%" ], // 54x18
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, "38.98305084745763%" ],
                            // 그리드 칸 수
                            "grid_dimensions": [ 3, 1 ],
                            // 목록 이름
                            "collection_name": "brewing_result_items",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "left_offset": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 그리드 위치
                                  "grid_position": [ 0, 0 ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "output_grid_item1@rainbowpieui_brewing_stand.brewingstand_output_item": {
                                        // 기준점에서 이동하는 거리
                                        "offset": [ "-27.77777777777778%", "-38.88888888888889%" ],

                                        // 오버라이드 가능한 변수
                                        "$focus_override_left_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left": "brewing_fuel"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "output_grid_item2@rainbowpieui_brewing_stand.brewingstand_output_item": {
                                  // 그리드 위치
                                  "grid_position": [ 1, 0 ]
                                }
                              },
                              {
                                // ???/?? ??
                                "right_offset": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 그리드 위치
                                  "grid_position": [ 2, 0 ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "output_grid_item3@rainbowpieui_brewing_stand.brewingstand_output_item": {
                                        // 기준점에서 이동하는 거리
                                        "offset": [ "27.77777777777778%", "-38.88888888888889%" ]
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
                          "brewing_fuel_slot": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%y", "30.50847457627119%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ "-43.20987654320988%", "-30.50847457627119%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "fuel_grid_item@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$cell_overlay_ref": "rainbowpieui_brewing_stand.fuel_empty_image",
                                  // 오버라이드 가능한 변수
                                  "$item_collection_name": "brewing_fuel_item",

                                  // 오버라이드 가능한 변수
                                  "$focus_id_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_id": "brewing_fuel",

                                  // 오버라이드 가능한 변수
                                  "$focus_override_right_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_right": "brewing_input_item0"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "brewing_arrow_empty_image@brewing_stand.brewing_arrow_empty_image": {
                            // 기준점에서 이동하는 거리
                            "offset": [ "9.876543209876543%", "-23.72881355932203%" ],
                            // 가로/세로 크기
                            "size": [ "5.555555555555556%", "47.45762711864407%" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "brewing_arrow_full_image@brewing_stand.brewing_arrow_full_image": {
                            // 기준점에서 이동하는 거리
                            "offset": [ "9.876543209876543%", "-23.72881355932203%" ],
                            // 가로/세로 크기
                            "size": [ "5.555555555555556%", "47.45762711864407%" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "brewing_fuel_bar_empty_image@brewing_stand.brewing_fuel_bar_empty_image": {
                            // 기준점에서 이동하는 거리
                            "offset": [ "-14.19753086419753%", "5.084745762711864%" ],
                            // 가로/세로 크기
                            "size": [ "14.81481481481481%", "10.16949152542373%" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "brewing_fuel_bar_full_image@brewing_stand.brewing_fuel_bar_full_image": {
                            // 기준점에서 이동하는 거리
                            "offset": [ "-14.19753086419753%", "5.084745762711864%" ],
                            // 가로/세로 크기
                            "size": [ "13.58024691358025%", "6.779661016949153%" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "bubbles_empty_image@brewing_stand.bubbles_empty_image": {
                            // 기준점에서 이동하는 거리
                            "offset": [ "-14.19753086419753%", "-23.72881355932203%" ],
                            // 가로/세로 크기
                            "size": [ "7.407407407407407%", "50.84745762711864%" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "bubbles_full_image@brewing_stand.bubbles_full_image": {
                            // 기준점에서 이동하는 거리
                            "offset": [ "-14.19753086419753%", "-23.72881355932203%" ],
                            // 가로/세로 크기
                            "size": [ "7.407407407407407%", "50.84745762711864%" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "brewing_fuel_pipes@brewing_stand.brewing_fuel_pipes": {
                            // 기준점에서 이동하는 거리
                            "offset": [ "-29.01234567901235%", "-8.474576271186441%" ],
                            // 가로/세로 크기
                            "size": [ "18.51851851851852%", "37.28813559322034%" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "brewing_pipes@brewing_stand.brewing_pipes": {
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, "5.084745762711864%" ],
                            // 가로/세로 크기
                            "size": [ "18.51851851851852%", "44.06779661016949%" ]
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
              "inventory@rainbowpie_ui_inventory_and_container.inventory_panel_bottom_half": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "32.53012048192771%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-14.4578313253012%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar@rainbowpie_ui_inventory_and_container.hotbar_grid_template": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "10.8433734939759%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.807228915662651%" ]
              }
            }
          ]
        }
      }
    ]
  }
}
```








### ui extras
cartography_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: cartography_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_cartography",

  // ???/?? ??
  "maximized_input_dialog_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "modal_input_panel@rainbowpieui_cartography.modal_input_panel": {
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "maximized_input_dialog@rainbowpieui_cartography.maximized_input_dialog": {}
            }
          ]
        }
      }
    ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "maximized_input",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "modal_input_panel@common.input_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100,
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
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
        "from_button_id": "button.menu_secondary_select",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_secondary_select",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_ok",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_ok",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_cancel",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_up",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_up",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_down",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_down",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_left",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_left",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_right",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_right",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_dialog@rainbowpie_ui_dialog.dialog_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title": "map.name",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_cartography.maximized_input_dialog_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_show_close": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content": "rainbowpieui_cartography.maximized_input_dialog_content",
    // 가로/세로 크기
    "size": "$extra_large_screen_size",
    // ?? ?? ?
    "max_size": "$extra_large_max_screen_size",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 110
  },

  // ???/?? ??
  "maximized_input_dialog_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
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
          "size": [ "100%c", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "minimized_input_button@rainbowpieui_cartography.maximized_input_toggle_base": {
                // 오버라이드 가능한 변수
                "$toggle_focus_enabled": false,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_color": "$rainbowpie_ui_theme_closebutton_hover_background_color",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_alpha": "$rainbowpie_ui_theme_closebutton_hover_background_alpha",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_pressed_color": "$rainbowpie_ui_theme_closebutton_pressed_background_color",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_pressed_alpha": "$rainbowpie_ui_theme_closebutton_pressed_background_alpha",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpieui_cartography.close_button_icon",
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": 1001,
                // 오버라이드 가능한 변수
                "$toggle_view_binding_name": "minimized_input",
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
        }
      }
    ]
  },

  // ???/?? ??
  "maximized_input_dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cartography_multiline_text_edit_box@rainbowpieui_cartography.cartography_multiline_text_edit_box": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "cartography_multiline_text_edit_box@common.multiline_text_edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,
    // 오버라이드 가능한 변수
    "$edit_box_indent_size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100% - 4px", "100% - 4px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ?? ?? ?
    "max_length": 32500,
    // 오버라이드 가능한 변수
    "$place_holder_text": "Enter your content here..."
  },

  // ???/?? ??
  "close_button_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/close_button/close')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_localui_button_text_color"
  },

  // ???/?? ??
  "maximize_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 18, 18 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/maximize_icon')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_cartography.maximize_icon",

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
    "$toggle_name": "rainbowpie_cartography_maximized_input",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  }
}
```








### ui extras
chat_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: chat_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_chat",

  // ???/?? ??
  "editable_message_text": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 애니메이션 목록
    "anims": ["@rainbowpieui_chat.chat_message_panel_size_animation"],
    // ?? ????
    "clips_children": true,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#chat_visible"
      },
      {
        // 가져올 값 이름
        "binding_name": "#host_main_visible"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#chat_visible and (not #host_main_visible))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "message_text@rainbowpie_ui_common.editable_label": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ??? ?? ?
          "text_box_name": "message_text",
          // ??? ?? ?
          "text_control": "message_display_text",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "message_display_text": {
                // 글자 표시
                "type": "label",
                // ?? (R,G,B,A)
                "color": "$chat_text_color",
                // ?? ??
                "enable_profanity_filter": "$rainbowpie_ui_flag_chat_message_profanity_filter",
                // ?? ??
                "localize": false,
                // 가로/세로 크기
                "size": [ "100%", "default" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 보여줄 글자
                "text": "#item_name",
                // ??? ?? ?
                "text_tts": "#text_tts",
                // ??
                "font_type": "$chat_font_type",
                // ?? ?? ?
                "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                // ?? ?? ??
                "font_scale_factor": "$chat_font_scale_factor",
                // ??/?? ?
                "line_padding": "$chat_line_spacing",
                // 애니메이션 목록
                "anims": ["@rainbowpieui_chat.chat_message_panel_animation"],
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($rainbowpie_ui_flag_chat_use_ui_font and ($chat_font_type = 'default'))",
                    // 오버라이드 가능한 변수
                    "$chat_font_type": "$rainbowpie_ui_theme_global_font_name"
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#text",
                    // 결과가 들어갈 속성
                    "target_property_name": "#item_name"
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
  "chat_color_dropdown_content@rainbowpie_ui_common.rainbowpie_dropdown_content_panel": {
    // 목록 이름
    "collection_name": "font_colors"
  },

  // ???/?? ??
  "chat_settings_panel_animation": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "200%x", 0 ],
    // 끝 값
    "to": [ 0, 0 ]
  },

  // ???/?? ??
  "chat_settings_panel_hidden": {
    // 위치 이동
    "anim_type": "offset",
    // 걸리는 시간(초)
    "duration": 0,
    // 끝 값
    "to": [ "200%", 0 ],
    // 시작 값
    "from": [ "200%", 0 ],
    // ?? ??
    "play_event": "button.close_chat_settings"
  },

  // ???/?? ??
  "chat_settings_panel_hidden2": {
    // 위치 이동
    "anim_type": "offset",
    // 걸리는 시간(초)
    "duration": 0,
    // 끝 값
    "to": [ "200%", 0 ],
    // 시작 값
    "from": [ "200%", 0 ]
  },

  // ???/?? ??
  "chat_settings_panel_hidden_animation": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "100%x", 0 ],
    // ?? ??
    "play_event": "button.close_chat_settings",
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_chat.chat_settings_panel_hidden2"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "chat_settings_panel_hidden_animation2@rainbowpieui_chat.chat_settings_panel_hidden_animation": {
    // ?? ??
    "play_event": "button.reset_chat_settings"
  },

  // ???/?? ??
  "chat_settings_animation_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chat_settings_background@rainbowpie_ui_common.title_background": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 가로/세로 크기
          "size": [ 150, "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ "200%", 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 102,
          // ????? ?? ?
          "animation_reset_name": "button.open_chat_settings",
          // 애니메이션 목록
          "anims": [
            "@rainbowpieui_chat.chat_settings_panel_hidden2",
            "@rainbowpieui_chat.chat_settings_panel_hidden_animation",
            "@rainbowpieui_chat.chat_settings_panel_hidden_animation2"
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "header_background@rainbowpie_ui_common.text_background": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 가로/세로 크기
                "size": [ "100%", 20 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 24,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title@rainbowpie_ui_common.title_label": {
                      // 보여줄 글자
                      "text": "chat.settings",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 20
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
  "chat_settings_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "modal_input_panel@rainbowpieui_chat.modal_input_panel": {
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chat_settings_background@rainbowpie_ui_common.title_background": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // 가로/세로 크기
                "size": [ 150, "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 102,
                // 애니메이션 목록
                "anims": [
                  "@rainbowpieui_chat.chat_settings_panel_animation",
                  "@rainbowpieui_chat.chat_settings_panel_hidden"
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "modal_input_panel@rainbowpieui_chat.modal_input_panel": {
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "header_background@rainbowpie_ui_common.text_background": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 가로/세로 크기
                            "size": [ "100%", 20 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 24,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "back_button_content_panel@rainbowpie_ui_controls.back_content_panel": {
                                  // 오버라이드 가능한 변수
                                  "$back_button_text": "gui.exit",
                                  // 오버라이드 가능한 변수
                                  "$back_button_pressed_button_name": "button.close_chat_settings",
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 2, 0 ],
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 24
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "title@rainbowpie_ui_common.title_label": {
                                  // 보여줄 글자
                                  "text": "chat.settings",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 20
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "chat_setting_scrolling_panel@chat_settings.chat_setting_scrolling_panel": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_toggle_enabled": true,
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_sliderbar_enabled": true,
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_scrollbar_enabled": true,
                            // 오버라이드 가능한 변수
                            "$scroll_size": [ 4, "100% - 4px" ],
                            // 오버라이드 가능한 변수
                            "$scroll_bar_left_padding_size": [ 1.5, 0 ],
                            // 오버라이드 가능한 변수
                            "$scroll_bar_right_padding_size": [ 0.5, 0 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_middle",
                            // 가로/세로 크기
                            "size": [ "100% - 4px", "100% - 20px" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 12
                          }
                        }
                      ],
                      // 입력 키/버튼과 동작 연결
                      "button_mappings": [
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
                          "to_button_id": "button.menu_ok",
                          // 입력 시점(pressed 등)
                          "mapping_type": "pressed"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          // 입력 키/버튼과 동작 연결
          "button_mappings": [
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_select",
              // 어떤 동작을 실행할지
              "to_button_id": "button.close_chat_settings",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_secondary_select",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_secondary_select",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_ok",
              // 어떤 동작을 실행할지
              "to_button_id": "button.close_chat_settings",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_cancel",
              // 어떤 동작을 실행할지
              "to_button_id": "button.close_chat_settings",
              // 입력 시점(pressed 등)
              "mapping_type": "global"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_up",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_up",
              // 입력 시점(pressed 등)
              "mapping_type": "global",
              // ?? ??
              "scope": "view"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_down",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_down",
              // 입력 시점(pressed 등)
              "mapping_type": "global",
              // ?? ??
              "scope": "view"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_left",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_left",
              // 입력 시점(pressed 등)
              "mapping_type": "global",
              // ?? ??
              "scope": "view"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_right",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_right",
              // 입력 시점(pressed 등)
              "mapping_type": "global",
              // ?? ??
              "scope": "view"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "maximized_input_dialog_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "modal_input_panel@rainbowpieui_chat.modal_input_panel": {
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "maximized_input_dialog@rainbowpieui_chat.maximized_input_dialog": {}
            }
          ]
        }
      }
    ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "maximized_input",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "modal_input_panel@common.input_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100,
    // 포커스 가능 여부
    "focus_enabled": false,
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
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
        "from_button_id": "button.menu_secondary_select",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_secondary_select",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_ok",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_ok",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_cancel",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_up",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_up",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_down",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_down",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_left",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_left",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_right",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_right",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_dialog@rainbowpie_ui_dialog.dialog_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title": "accessibility.chat.tts.textboxTitle",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_chat.maximized_input_dialog_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_show_close": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content": "rainbowpieui_chat.maximized_input_dialog_content",
    // 가로/세로 크기
    "size": "$extra_large_screen_size",
    // ?? ?? ?
    "max_size": "$extra_large_max_screen_size",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 110
  },

  // ???/?? ??
  "maximized_input_dialog_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
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
          "size": [ "100%c", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "paste_button@chat.paste_button": {
                // 포커스 이동용 ID
                "focus_identifier": "paste_button",
                // 왼쪽으로 이동할 대상
                "focus_change_left": "FOCUS_OVERRIDE_STOP",
                // 위로 이동할 대상
                "focus_change_up": "FOCUS_OVERRIDE_STOP",
                // 아래로 이동할 대상
                "focus_change_down": "chat_multiline_text_edit_box",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 가로/세로 크기
                "size": [ "100%y", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "autocompleteback@common_buttons.light_text_button": {
                // 위로 이동할 대상
                "focus_change_up": "FOCUS_OVERRIDE_STOP",
                // 아래로 이동할 대상
                "focus_change_down": "chat_multiline_text_edit_box",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                // 오버라이드 가능한 변수
                "$button_text": "TAB▲",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.chat_autocomplete_back",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "autocomplete@common_buttons.light_text_button": {
                // 위로 이동할 대상
                "focus_change_up": "FOCUS_OVERRIDE_STOP",
                // 아래로 이동할 대상
                "focus_change_down": "chat_multiline_text_edit_box",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                // 오버라이드 가능한 변수
                "$button_text": "TAB▼",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.chat_autocomplete",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "previous@common_buttons.light_text_button": {
                // 위로 이동할 대상
                "focus_change_up": "FOCUS_OVERRIDE_STOP",
                // 아래로 이동할 대상
                "focus_change_down": "chat_multiline_text_edit_box",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                // 오버라이드 가능한 변수
                "$button_text": "▲",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.chat_previous_message",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "next@common_buttons.light_text_button": {
                // 위로 이동할 대상
                "focus_change_up": "FOCUS_OVERRIDE_STOP",
                // 아래로 이동할 대상
                "focus_change_down": "chat_multiline_text_edit_box",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                // 오버라이드 가능한 변수
                "$button_text": "▼",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.chat_next_message",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "send@common_buttons.light_text_button": {
                // 오른쪽으로 이동할 대상
                "focus_change_right": "FOCUS_OVERRIDE_STOP",
                // 위로 이동할 대상
                "focus_change_up": "FOCUS_OVERRIDE_STOP",
                // 아래로 이동할 대상
                "focus_change_down": "chat_multiline_text_edit_box",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                // 오버라이드 가능한 변수
                "$button_text": "Send",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.send",
                // 가로/세로 크기
                "size": [ "120%y", "100%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#send_button_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#enabled"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "minimized_input_button@rainbowpieui_chat.maximized_input_toggle_base": {
                // 오버라이드 가능한 변수
                "$toggle_focus_enabled": false,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_color": "$rainbowpie_ui_theme_closebutton_hover_background_color",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_hover_alpha": "$rainbowpie_ui_theme_closebutton_hover_background_alpha",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_pressed_color": "$rainbowpie_ui_theme_closebutton_pressed_background_color",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_pressed_alpha": "$rainbowpie_ui_theme_closebutton_pressed_background_alpha",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpieui_chat.close_button_icon",
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": 1001,
                // 오버라이드 가능한 변수
                "$toggle_view_binding_name": "minimized_input",
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
        }
      }
    ]
  },

  // ???/?? ??
  "maximized_input_dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chat_multiline_text_edit_box@rainbowpieui_chat.chat_multiline_text_edit_box": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "chat_multiline_text_edit_box@common.multiline_text_edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,
    // 오버라이드 가능한 변수
    "$edit_box_indent_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$focus_id": "chat_multiline_text_edit_box",
    // 오버라이드 가능한 변수
    "$focus_override_down": "FOCUS_OVERRIDE_STOP",
    // 오버라이드 가능한 변수
    "$focus_override_up": "paste_button",
    // 오버라이드 가능한 변수
    "$focus_override_left": "FOCUS_OVERRIDE_STOP",
    // 오버라이드 가능한 변수
    "$focus_override_right": "FOCUS_OVERRIDE_STOP",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100% - 4px", "100% - 4px" ],
    // ?? ?? ?
    "max_length": 32500,
    // 오버라이드 가능한 변수
    "$text_box_name": "#message_text_box",
    // 오버라이드 가능한 변수
    "$text_edit_box_content_binding_name": "#message_text_box_content",
    // 오버라이드 가능한 변수
    "$place_holder_text": "Enter your content here...",
    // 오버라이드 가능한 변수
    "$enable_profanity_filter": "$rainbowpie_ui_flag_input_enable_profanity_filter",
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      // Original Mappings - defined in common.multiline_text_edit_box //
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_select",
        // 어떤 동작을 실행할지
        "to_button_id": "$text_edit_box_selected_to_button_id",
        // ?? ??
        "handle_select": true,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_select",
        // 어떤 동작을 실행할지
        "to_button_id": "$text_edit_box_selected_to_button_id",
        // ?? ??
        "handle_select": false,
        // ?? ??
        "handle_deselect": true,
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "consume_event": false
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_ok",
        // 어떤 동작을 실행할지
        "to_button_id": "$text_edit_box_selected_to_button_id",
        // ?? ??
        "handle_select": true,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "$text_edit_box_deselected_to_button_id",
        // ?? ??
        "handle_select": false,
        // ?? ??
        "handle_deselect": true,
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 동작을 실행할지
        "to_button_id": "$text_edit_box_hovered_button_id",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "$text_edit_box_clear_from_button_id",
        // 어떤 동작을 실행할지
        "to_button_id": "$text_edit_box_clear_to_button_id",
        // ?? ??
        "handle_select": false,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "focused"
      },

      // Extra Mappings //
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_autocomplete",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_autocomplete",
        // ?? ??
        "handle_select": true,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_autocomplete_back",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_autocomplete_back",
        // ?? ??
        "handle_select": true,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_textedit_up",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_previous_message",
        // ?? ??
        "handle_select": true,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "focused"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_textedit_down",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_next_message",
        // ?? ??
        "handle_select": true,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "focused"
      },

      // Controller Mappings //
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.controller_autocomplete",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_autocomplete",
        // ?? ??
        "handle_select": false,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.controller_autocomplete_back",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_autocomplete_back",
        // ?? ??
        "handle_select": false,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.controller_textedit_up",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_previous_message",
        // ?? ??
        "handle_select": false,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "focused"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.controller_textedit_down",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_next_message",
        // ?? ??
        "handle_select": false,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "focused"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.controller_secondary_select",
        // 어떤 동작을 실행할지
        "to_button_id": "button.chat_paste_coordinates",
        // ?? ??
        "handle_select": true,
        // ?? ??
        "handle_deselect": false,
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      }
    ]
  },

  // ???/?? ??
  "close_button_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/close_button/close')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_localui_button_text_color"
  },

  // ???/?? ??
  "maximize_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 18, 18 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/chat/chat_maximize')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_chat.maximize_icon",

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
    "$toggle_name": "rainbowpie_chat_maximized_input",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "chat_bottom_panel_back_animation": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 20 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "chat_bottom_panel_back_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 20 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "chat_bottom_panel_animation": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 20 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "chat_bottom_panel_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 20 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  //

  "chat_bottom_background_back_animation1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 27px" ],
    // 끝 값
    "to": [ 0, "100% - 7px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "chat_bottom_background_back_animation2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 27px" ],
    // 끝 값
    "to": [ 0, "-100% + 7px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "chat_bottom_background_back_animation_pop1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 27px" ],
    // 끝 값
    "to": [ 0, "100% - 7px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "chat_bottom_background_back_animation_pop2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 27px" ],
    // 끝 값
    "to": [ 0, "-100% + 7px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "chat_bottom_background_animation1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 7px" ],
    // 끝 값
    "to": [ 0, "100% - 27px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "chat_bottom_background_animation2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 7px" ],
    // 끝 값
    "to": [ 0, "-100% + 27px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "chat_bottom_background_animation_pop1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 7px" ],
    // 끝 값
    "to": [ 0, "100% - 27px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "chat_bottom_background_animation_pop2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 7px" ],
    // 끝 값
    "to": [ 0, "-100% + 27px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "top_tab@common_tabs.tab_top": {
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$toggle_tts_enabled_binding_type": "global",
    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpieui_navigation_tab",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 10,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 오버라이드 가능한 변수
    "$toggle_tts_type_priority": 1001,
    // 오버라이드 가능한 변수
    "$toggle_tts_toggle_on_text": "",
    // 오버라이드 가능한 변수
    "$toggle_tts_toggle_off_text": "",
    // 오버라이드 가능한 변수
    "$toggle_tts_index_priority": 1002,
    // 오버라이드 가능한 변수
    "$tab_content": "rainbowpieui_chat.top_tab_content"
  },

  // ???/?? ??
  "top_tab_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "tab_label@rainbowpie_ui_common.text_label_notheme": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 가로/세로 크기
          "size": [ "default", "default" ],
          // ?? ??
          "text_alignment": "center",
          // 보여줄 글자
          "text": "$tab_text",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "second_chat_toggle_base@common_toggles.light_ui_toggle": {

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
    "$toggle_name": "rainbowpie_chat_messages_and_playerlist",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1000,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 1000,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "second_message_panel@rainbowpieui_chat.editable_message_text": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": []
  },

  // ???/?? ??
  "messages_stack_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 오버라이드 가능한 변수
    "$scrolling_content_anchor_from": "bottom_left",
    // 오버라이드 가능한 변수
    "$scrolling_content_anchor_to": "bottom_left",
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "messages_factory",
      // ?? ?? ?
      "max_children_size": 100,
      // 팩토리 템플릿 매핑
      "control_ids": {
        // ?? ??
        "chat_screen_messages": "chat_screen_messages@rainbowpieui_chat.second_message_panel"
      }
    }
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "messages_scrolling_panel@common.scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scrolling_content": "rainbowpieui_chat.messages_stack_panel",
    // 오버라이드 가능한 변수
    "$scroll_size": [ 5, "100%-4px" ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$jump_to_bottom_on_update": true,
    // 오버라이드 가능한 변수
    "$show_background": false,
    // 오버라이드 가능한 변수
    "$always_handle_scrolling": false
  },

  // ???/?? ??
  "player_grid_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 29 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "sub_command_button@common_buttons.light_content_button": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ "100%", "100% - 1px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_default_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.sub_command",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#host_teleport_players_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            },
            {
              // 가져올 값 이름
              "binding_name": "#gamertag",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "players_collection",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#sub_command"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.text_background": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ "100%", "100% - 1px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "player_image": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "#texture",
                // 가로/세로 크기
                "size": [ 26, 26 ],
                // 기준점에서 이동하는 거리
                "offset": [ 1, 0 ],
                // ??? ?? ???
                "texture_file_system": "#texture_source",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#texture",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "players_collection"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#texture_source",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "players_collection"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#texture_source",
                    // 결과가 들어갈 속성
                    "target_property_name": "#texture_file_system"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#texture_source = 'RawPath'))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_local_picture"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#is_local_picture)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "player_image_local": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/icon_steve",
                // 가로/세로 크기
                "size": [ 26, 26 ],
                // 기준점에서 이동하는 거리
                "offset": [ 1, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#texture_source",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "players_collection"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#texture_source = 'RawPath'))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_local_picture"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#is_local_picture",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_name@rainbowpie_ui_common.title_label": {
                // ?? ?? ??
                "font_scale_factor": 1.4,
                // ?? ??
                "text_alignment": "left",
                // 보여줄 글자
                "text": "#gamertag",
                // 가로/세로 크기
                "size": [ "100% - 32px", "default" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 30, 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#gamertag",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "players_collection"
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
  "playerlist_grid": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // ??? ?? ?
    "grid_item_template": "rainbowpieui_chat.player_grid_item",
    // ??? ?? ?
    "grid_dimension_binding": "#players_grid_dimension",
    // 목록 이름
    "collection_name": "players_collection",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#players_grid_dimension"
      }
    ]
  },

  // ???/?? ??
  "playerlist_scrolling_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "playerlist_grid@rainbowpieui_chat.playerlist_grid": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "playerlist_scrolling_panel@common.scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scrolling_content": "rainbowpieui_chat.playerlist_scrolling_content",
    // 오버라이드 가능한 변수
    "$scroll_size": [ 5, "100%-4px" ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$jump_to_bottom_on_update": false,
    // 오버라이드 가능한 변수
    "$show_background": false,
    // 오버라이드 가능한 변수
    "$always_handle_scrolling": false
  },

  // ???/?? ??
  "chat_messages_and_playerlist_panel_hidden": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_82f66bc6",
    // 위치 이동
    "anim_type": "offset",
    // 걸리는 시간(초)
    "duration": 0,
    // 끝 값
    "to": [ "200%", 20 ],
    // 시작 값
    "from": [ "200%", 20 ],
    // ?? ??
    "play_event": "button.open_chat_settings"
  },

  // ???/?? ??
  "chat_messages_and_playerlist_panel_shown": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_82f66bc6",
    // 위치 이동
    "anim_type": "offset",
    // 걸리는 시간(초)
    "duration": 0,
    // 끝 값
    "to": [ 0, 20 ],
    // 시작 값
    "from": [ 0, 20 ]
  },

  // ???/?? ??
  "chat_messages_and_playerlist_panel_hidden2": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_82f66bc6)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 끝 값
    "to": [ -150, 20 ],
    // 시작 값
    "from": [ 0, 20 ],
    // ?? ??
    "play_event": "button.open_chat_settings"
  },

  // ???/?? ??
  "chat_messages_and_playerlist_panel_shown2": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_82f66bc6)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 끝 값
    "to": [ 0, 20 ],
    // 시작 값
    "from": [ -150, 20 ]
  },


  // ???/?? ??
  "chat_messages_and_playerlist": {
    // 완전히 제거(공간도 없음)
    "ignored": "($game_pad or (not $rainbowpie_ui_feature_command_chat))",
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 가로/세로 크기
    "size": [ 170, "100% - 47px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 20 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 150,
    // ????? ?? ?
    "animation_reset_name": "button.close_chat_settings",
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_chat.chat_messages_and_playerlist_panel_shown2",
      "@rainbowpieui_chat.chat_messages_and_playerlist_panel_hidden2",
      "@rainbowpieui_chat.chat_messages_and_playerlist_panel_shown",
      "@rainbowpieui_chat.chat_messages_and_playerlist_panel_hidden"
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
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 가로/세로 크기
          "size": [ 150, "100%" ],
          // ?? ????
          "clips_children": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_close": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "close_second_chat",
                    // 계산식/참조 값
                    "source_property_name": "#toggle_state",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "background_content": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_dialog_content_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
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
                      "size": [ "100%", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "playerlist_scrolling_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 12,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "playerlist_scrolling@rainbowpieui_chat.playerlist_scrolling_panel": {
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 1
                                }
                              }
                            ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#chat_visible",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "tab_panel_with_content_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "tab_panel": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_middle",
                                  // 가로/세로 크기
                                  "size": [ "100%", 22 ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "chat_navigation_tab@rainbowpieui_chat.top_tab": {
                                        // 가로/세로 크기
                                        "size": [ "fill", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$tab_view_binding_name": "chat_navigation_tab_toggle",
                                        // 오버라이드 가능한 변수
                                        "$tab_text": "rainbowpie.ui.chat.tab.chat",
                                        // 오버라이드 가능한 변수
                                        "$toggle_group_forced_index": 10,
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#chat_visible"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // ?? ??
                                            "source_control_name": "open_second_chat",
                                            // 계산식/참조 값
                                            "source_property_name": "#toggle_state",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#second_chat_opened"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "((not #chat_visible) and #second_chat_opened)",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#enabled"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "playerlist_navigation_tab@rainbowpieui_chat.top_tab": {
                                        // 가로/세로 크기
                                        "size": [ "fill", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$tab_view_binding_name": "playerlist_navigation_tab_toggle",
                                        // 오버라이드 가능한 변수
                                        "$tab_text": "rainbowpie.ui.chat.tab.playerlist",
                                        // 오버라이드 가능한 변수
                                        "$toggle_group_forced_index": 11,
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#chat_visible"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // ?? ??
                                            "source_control_name": "open_second_chat",
                                            // 계산식/참조 값
                                            "source_property_name": "#toggle_state",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#second_chat_opened"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "((not #chat_visible) and #second_chat_opened)",
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
                                // ???/?? ??
                                "content_panel": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_middle",
                                  // 가로/세로 크기
                                  "size": [ "100%", "100% - 22px" ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "playerlist_scrolling_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%", "100%" ],
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 12,
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "playerlist_scrolling@rainbowpieui_chat.playerlist_scrolling_panel": {
                                              // 겹치는 순서(숫자 클수록 위)
                                              "layer": 1
                                            }
                                          }
                                        ],
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // ?? ??
                                            "source_control_name": "playerlist_navigation_tab_toggle",
                                            // 계산식/참조 값
                                            "source_property_name": "#toggle_state",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#visible"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "messages_scrolling_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%", "100%" ],
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 12,
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "messages_scrolling@rainbowpieui_chat.messages_scrolling_panel": {
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
        "open_second_chat_button@rainbowpieui_chat.second_chat_toggle_base": {
          // 가로/세로 크기
          "size": [ 20, 25 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 20,
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 오버라이드 가능한 변수
          "$button_text": "<",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 1000,
          // 오버라이드 가능한 변수
          "$toggle_view_binding_name": "open_second_chat",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_second_chat",
              // 계산식/참조 값
              "source_property_name": "(not #toggle_state)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "close_second_chat_button@rainbowpieui_chat.second_chat_toggle_base": {
          // 가로/세로 크기
          "size": [ 20, 25 ],
          // 기준점에서 이동하는 거리
          "offset": [ -150, 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 20,
          // 오버라이드 가능한 변수
          "$button_text": ">",
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 1001,
          // 오버라이드 가능한 변수
          "$toggle_view_binding_name": "close_second_chat",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_second_chat",
              // 계산식/참조 값
              "source_property_name": "(#toggle_state)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "chat_header": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_ingame_anim1": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "#back_button_text",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#back_button_text"
            }
          ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_content_panel": "rainbowpieui_chat.chat_header_content"
        }
      }
    ]
  },

  // ???/?? ??
  "chat_header_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_panel@rainbowpie_ui_common.text_label_notheme": {
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // 보여줄 글자
          "text": "#text",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_topbar_text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#chat_title_text",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#text"
            },
            {
              // 가져올 값 이름
              "binding_name": "#chat_title_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chat_header_content_area@rainbowpieui_chat.chat_header_content_area": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#chat_coordinate_dropdown_visible",
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

  // ???/?? ??
  "chat_header_content_area": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%c", 18 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 1 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "coordinate_dropdown@chat.coordinate_dropdown": {
          // 가로/세로 크기
          "size": [ 100, 18 ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_show_button": false,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_offset": [ 0, 2 ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_size": [ "100%", 18 ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_enabled": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
                // 오버라이드 가능한 변수
                "$toggle_state_binding_name": "#coordinate_type_position",
                // 오버라이드 가능한 변수
                "$radio_label_text": "chat.coordinateTypePosition"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
                // 오버라이드 가능한 변수
                "$toggle_state_binding_name": "#coordinate_type_facing",
                // 오버라이드 가능한 변수
                "$radio_label_text": "chat.coordinateTypeFacing"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "coordinates_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c + 2px", 18 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "coordinates_background_image": {
                // 이미지 표시
                "type": "image",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 가로/세로 크기
                "size": [ "100%c + 14px", 18 ],
                // ?? ?? ?
                "min_size": [ 160, 18 ],
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_title_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_title_background_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "coordinates_text@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 보여줄 글자
                      "text": "#text",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_title_text_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#coordinates_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text"
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
        "copy_coordinate_button@chat.copy_coordinate_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 가로/세로 크기
          "size": [ 18, 18 ]
        }
      },
      {
        // ???/?? ??
        "button_padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "paste_button@chat.paste_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 가로/세로 크기
          "size": [ 18, 18 ]
        }
      }
    ]
  },

  // ???/?? ??
  "chat_message_panel_animation": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": [ "-1%", 0 ],
    // 끝 값
    "to": [ 0, 0 ]
  },

  // ???/?? ??
  "chat_message_panel_size_animation": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": [ "100%", 0 ],
    // 끝 값
    "to": [ "100%", "100%c" ]
  }
}
```








### ui extras
chest_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: chest_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_chest",

  // 다른 템플릿을 가져와서 확장(상속)
  "large_chest_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 215 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
      { "gamepad_cursor@common.gamepad_cursor_button": {} },
      { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chest_background_icon@rainbowpie_ui_inventory.background_icon": {
                // 가로/세로 크기
                "size": "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_size",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_offset",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_anchor",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_texture",
                // ???
                "alpha": "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_alpha",
                // ?? ??
                "fill": "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_fill"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "live_player_renderer@rainbowpie_ui_inventory.live_player_renderer": {
                // 기준점에서 이동하는 거리
                "offset": [ "-100%x - 2.380952380952381%", -16 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chest_fastpick@rainbowpie_module_chest_fastpick.chest_fastpick": {
                // 오버라이드 가능한 변수
                "$large_chest": true,
                // 오버라이드 가능한 변수
                "$drop_button_size": [ "100%y", "10.23255813953488%" ],
                // 오버라이드 가능한 변수
                "$drop_button_offset": [ "100%x + 1.19047619047619%", "-36.27906976744186%" ],
                // 오버라이드 가능한 변수
                "$putin_button_size": [ "100%y", "10.23255813953488%" ],
                // 오버라이드 가능한 변수
                "$putin_button_offset": [ "100%x + 1.19047619047619%", "-11.16279069767442%" ],
                // 오버라이드 가능한 변수
                "$pickup_button_size": [ "100%y", "10.23255813953488%" ],
                // 오버라이드 가능한 변수
                "$pickup_button_offset": [ "100%x + 1.19047619047619%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "10.69767441860465%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "$container_title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border1_size": [ "2.380952380952381%", 0 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border2_size": [ "2.380952380952381%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 10.69767441860465%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "chest": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "50.23255813953488%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-37.67441860465116%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "1@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "16.66666666666667%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 0
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "2@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "16.66666666666667%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 9
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "3@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "16.66666666666667%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 18
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "4@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "16.66666666666667%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 27
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "5@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "16.66666666666667%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 36
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "6@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "16.66666666666667%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 45
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory@rainbowpie_ui_inventory_and_container.inventory_panel_bottom_half": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "25.11627906976744%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-11.16279069767442%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar@rainbowpie_ui_inventory_and_container.hotbar_grid_template": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "8.372093023255814%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.395348837209302%" ]
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "small_chest_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 161 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
      { "gamepad_cursor@common.gamepad_cursor_button": {} },
      { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chest_background_icon@rainbowpie_ui_inventory.background_icon": {
                // 가로/세로 크기
                "size": "$size",
                // 기준점에서 이동하는 거리
                "offset": "$offset",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$anchor_to",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$anchor_from",
                // 사용할 이미지 경로
                "texture": "$texture",
                // ???
                "alpha": "$alpha",
                // ?? ??
                "fill": "$fill",

                // 오버라이드 가능한 변수
                "$size": "$rainbowpie_ui_theme_inventory_bgicon_chest_size",
                // 오버라이드 가능한 변수
                "$offset": "$rainbowpie_ui_theme_inventory_bgicon_chest_offset",
                // 오버라이드 가능한 변수
                "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_chest_anchor",
                // 오버라이드 가능한 변수
                "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_chest_anchor",
                // 오버라이드 가능한 변수
                "$texture": "$rainbowpie_ui_theme_inventory_bgicon_chest_texture",
                // 오버라이드 가능한 변수
                "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_chest_alpha",
                // 오버라이드 가능한 변수
                "$fill": "$rainbowpie_ui_theme_inventory_bgicon_chest_fill",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$is_ender_chest",
                    // 오버라이드 가능한 변수
                    "$size": "$rainbowpie_ui_theme_inventory_bgicon_chestender_size",
                    // 오버라이드 가능한 변수
                    "$offset": "$rainbowpie_ui_theme_inventory_bgicon_chestender_offset",
                    // 오버라이드 가능한 변수
                    "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_chestender_anchor",
                    // 오버라이드 가능한 변수
                    "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_chestender_anchor",
                    // 오버라이드 가능한 변수
                    "$texture": "$rainbowpie_ui_theme_inventory_bgicon_chestender_texture",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_chestender_alpha",
                    // 오버라이드 가능한 변수
                    "$fill": "$rainbowpie_ui_theme_inventory_bgicon_chestender_fill"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$is_shulker_box",
                    // 오버라이드 가능한 변수
                    "$size": "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_size",
                    // 오버라이드 가능한 변수
                    "$offset": "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_offset",
                    // 오버라이드 가능한 변수
                    "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_anchor",
                    // 오버라이드 가능한 변수
                    "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_anchor",
                    // 오버라이드 가능한 변수
                    "$texture": "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_texture",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_alpha",
                    // 오버라이드 가능한 변수
                    "$fill": "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_fill"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$is_barrel",
                    // 오버라이드 가능한 변수
                    "$size": "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_size",
                    // 오버라이드 가능한 변수
                    "$offset": "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_offset",
                    // 오버라이드 가능한 변수
                    "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_anchor",
                    // 오버라이드 가능한 변수
                    "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_anchor",
                    // 오버라이드 가능한 변수
                    "$texture": "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_texture",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_alpha",
                    // 오버라이드 가능한 변수
                    "$fill": "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_fill"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "live_player_renderer@rainbowpie_ui_inventory.live_player_renderer": {
                // 기준점에서 이동하는 거리
                "offset": [ "-100%x - 2.380952380952381%", -16 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chest_fastpick@rainbowpie_module_chest_fastpick.chest_fastpick": {
                // 오버라이드 가능한 변수
                "$drop_button_size": [ "100%y", "13.66459627329193%" ],
                // 오버라이드 가능한 변수
                "$drop_button_offset": [ "100%x + 1.19047619047619%", "-48.4472049689441%" ],
                // 오버라이드 가능한 변수
                "$putin_button_size": [ "100%y", "13.66459627329193%" ],
                // 오버라이드 가능한 변수
                "$putin_button_offset": [ "100%x + 1.19047619047619%", "-14.90683229813665%" ],
                // 오버라이드 가능한 변수
                "$pickup_button_size": [ "100%y", "13.66459627329193%" ],
                // 오버라이드 가능한 변수
                "$pickup_button_offset": [ "100%x + 1.19047619047619%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "14.28571428571429%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "$container_title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border1_size": [ "2.380952380952381%", 0 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border2_size": [ "2.380952380952381%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 14.28571428571429%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "chest": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-50.31055900621118%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "1@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 0
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "2@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 9
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "3@rainbowpie_ui_inventory_and_container.container_item_stack": {
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 오버라이드 가능한 변수
                      "$collection_index_start": 18
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory@rainbowpie_ui_inventory_and_container.inventory_panel_bottom_half": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-14.90683229813665%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar@rainbowpie_ui_inventory_and_container.hotbar_grid_template": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "11.18012422360248%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.863354037267081%" ]
              }
            }
          ]
        }
      }
    ]
  }
}
```








### ui extras
command_block_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: command_block_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_command_block",

  // ???/?? ??
  "command_block_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,

    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_ingame_anim1": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "commandBlock.genericName",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_command_block.command_block_dialog_content",
                // 가로/세로 크기
                "size": "$extra_large_screen_size",
                // ?? ?? ?
                "max_size": "$extra_large_max_screen_size",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #maximized_input_visible)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "maximized_input_dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "advMode.command",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_command_block.maximized_input_dialog_button",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_command_block.maximized_input_dialog_content",
                // 오버라이드 가능한 변수
                "$close_button_to_button_id": "command_block.input_minimize",
                // 가로/세로 크기
                "size": "$extra_large_screen_size",
                // ?? ?? ?
                "max_size": "$extra_large_max_screen_size",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#maximized_input_visible",
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
  "maximized_input_dialog_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "maximized_input_close_button": {
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
              "paste_button_rainbowpie@rainbowpieui_command_block.paste_button": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "autocompleteback@common_buttons.light_text_button": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                // 오버라이드 가능한 변수
                "$button_text": "TAB▲",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.chat_autocomplete_back",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "autocomplete@common_buttons.light_text_button": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0.0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                // 오버라이드 가능한 변수
                "$button_text": "TAB▼",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.chat_autocomplete",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "maximized_input_dialog_content": {
    // 마우스/커서 따라다니는 패널
    "type": "input_panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "maximized_command_block_text@command_block.command_block_multiline_text_edit_box": {
          // 오버라이드 가능한 변수
          "$edit_box_indent_size": [ "100%", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 17,
          // 가로/세로 크기
          "size": [ "100% - 4px", "100% - 4px" ],
          // ?? ?? ?
          "max_length": 32500,
          // 오버라이드 가능한 변수
          "$text_box_name": "command_block.command_text",
          // 오버라이드 가능한 변수
          "$text_edit_box_content_binding_name": "#command_text_edit",
          // 오버라이드 가능한 변수
          "$place_holder_text": "Enter your command input here",
          // 오버라이드 가능한 변수
          "$cancel_button_id": "command_block.input_minimize",
          // 오버라이드 가능한 변수
          "$enable_profanity_filter": "$rainbowpie_ui_flag_input_enable_profanity_filter"
        }
      }
    ],
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "command_block.input_minimize",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      }
    ]
  },

  // ???/?? ??
  "command_block_dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "left_side@command_block.left_divider_content": {
          // 가로/세로 크기
          "size": [ "40%", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "right_side@command_block.right_divider_content": {
          // 가로/세로 크기
          "size": [ "60%", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "plus_button@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100% - 1px", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 가로/세로 크기
    "size": [ 29, 30 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 오버라이드 가능한 변수
    "$button_content": "command_block.plus_icon",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "command_block.input_maximize",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "(not #maximized_input_visible)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "paste_button@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100% - 1px", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 가로/세로 크기
    "size": [ 29, 30 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 오버라이드 가능한 변수
    "$button_content": "command_block.paste_icon",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "command_block.paste"
  }
}
```








### ui extras
content_log_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: content_log_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_content_log",

  // ???/?? ??
  "anim_content_log_offset": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 0.8,
    // 시작 값
    "from": [ 0, "-100%" ],
    // 끝 값
    "to": [ 0, 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_content_log.anim_content_log_wait"
  },

  // ???/?? ??
  "anim_content_log_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "($content_log_item_lifetime - 0.5)",
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_content_log.anim_content_log_offset_back"
  },

  // ???/?? ??
  "anim_content_log_offset_back": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 0.8,
    // 끝 값
    "to": [ 0, "-100%" ],
    // 시작 값
    "from": [ 0, 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_content_log.anim_content_log_wait"
  }
}
```








### ui extras
content_log_history_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: content_log_history_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_content_log_history",

  // ???/?? ??
  "content_log_history_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "contentlog.history.title"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "blur_layer@mintui_background.background_blur": {
          // 오버라이드 가능한 변수
          "$background_offset": [ 0, "100% - 30px" ],
          // 오버라이드 가능한 변수
          "$background_children_offset": [ 0, "-100% + 30px" ],
          // 오버라이드 가능한 변수
          "$background_layer": -3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "mask_layer@mintui_background.background_mask": {
          // 오버라이드 가능한 변수
          "$background_offset": [ 0, "100% - 30px" ],
          // 오버라이드 가능한 변수
          "$background_children_offset": [ 0, "-100% + 30px" ],
          // 오버라이드 가능한 변수
          "$background_layer": -3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "bottom_panel@rainbowpie_ui_common.text_background": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100%", "100% - 20px" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "messages_scrolling_panel@content_log_history.messages_scrolling_panel": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_scrollbar_enabled": true,
                      // 가로/세로 크기
                      "size": [ "100%", "100% - 30px" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -30 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 11
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "bottom_panel@rainbowpie_ui_common.text_background": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 12,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "horizontal_button_stack_panel@content_log_history.horizontal_button_stack_panel": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 가로/세로 크기
                            "size": [ "100% - 2px", "100% - 2px" ]
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








### ui extras
credits_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: credits_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_credits",

  // ???/?? ??
  "skip_panel_anim_offset": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100%y" ],
    // 끝 값
    "to": [ 0, 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_credits.skip_panel_anim_wait"
  },

  // ???/?? ??
  "skip_panel_anim_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 5.0,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_credits.skip_panel_anim_offset_end"
  },

  // ???/?? ??
  "skip_panel_anim_offset_end": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, "100%y" ],
    // ?? ??
    "destroy_at_end": "rainbowpieui_skip_panel"
  },

  // ???/?? ??
  "rainbowpieui_skip_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 가로/세로 크기
    "size": [ "100%", 24 ],
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_credits.skip_panel_anim_offset"
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "exit_credits_input_panel": {
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // 입력 키/버튼과 동작 연결
          "button_mappings": [
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_cancel",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_exit",
              // 입력 시점(pressed 등)
              "mapping_type": "global"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "button_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100% - 6px", "100% - 2px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "middle_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "skip_button@common_buttons.light_text_form_fitting_button": {
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.menu_exit",
                // 오버라이드 가능한 변수
                "$button_text": "credits.skip",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ]
              }
            }
          ]
        }
      }
    ]
  }
}
```








### ui extras
disconnect_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: disconnect_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_disconnect",

  // ???/?? ??
  "title_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_c48fd864)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "disconnect_title_text@rainbowpie_ui_common.editable_label": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // ?? ?? ?
          "max_size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -10 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // ??? ?? ?
          "text_box_name": "disconnect_title_text",
          // ??? ?? ?
          "text_control": "disconnect_title_display_text",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "disconnect_title_display_text@rainbowpie_ui_common.text_label_notheme": {
                // 가로/세로 크기
                "size": [ "default", 40 ],
                // ?? ?? ?
                "max_size": [ "100% - 20px", 40 ],
                // 보여줄 글자
                "text": "#title_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#title_text"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#tts_dialog_title",
                    // ?? ???
                    "binding_condition": "once"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#title_text",
                    // 결과가 들어갈 속성
                    "target_property_name": "#item_name"
                  }
                ],
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#tts_dialog_title": "#title_text"
                }
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "disconnect_text@rainbowpie_ui_common.editable_label": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // ?? ?? ?
          "max_size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -40 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // ??? ?? ?
          "text_box_name": "disconnect_text",
          // ??? ?? ?
          "text_control": "disconnect_display_text",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "disconnect_display_text@rainbowpie_ui_common.text_label_notheme": {
                // 보여줄 글자
                "text": "#item_name",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#disconnect_text"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#tts_dialog_body",
                    // ?? ???
                    "binding_condition": "once"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#disconnect_text",
                    // 결과가 들어갈 속성
                    "target_property_name": "#item_name"
                  }
                ],
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#tts_dialog_body": "#disconnect_text"
                }
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "realms_warning_button_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "check_store_button@disconnect.check_store_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "continue_button@disconnect.continue_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cancel_button@disconnect.cancel_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  // ???/?? ??
  "realms_disconnect_button_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "check_store_button@disconnect.check_store_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "ok_button@disconnect.ok_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  // ???/?? ??
  "button_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "ok_button@disconnect.ok_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  // ???/?? ??
  "dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_disconnect_dialog_buttons|default": "common.empty_panel",
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
                    // ???/?? ??
                    "stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ "100% - 8px", "100% - 4px" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disconnect_text@rainbowpie_ui_common.text_label_notheme": {
                            // 보여줄 글자
                            "text": "#disconnect_text",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#disconnect_text"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "#tts_dialog_body",
                                // ?? ???
                                "binding_condition": "once"
                              }
                            ],
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#tts_dialog_body": "#disconnect_text"
                            }
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disconnect_title_text@rainbowpie_ui_common.text_label_notheme": {
                            // 보여줄 글자
                            "text": "#title_text",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#title_text"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "#tts_dialog_title",
                                // ?? ???
                                "binding_condition": "once"
                              }
                            ],
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#tts_dialog_title": "#title_text"
                            }
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
              "button_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "100%c + 1px" ],
                // 완전히 제거(공간도 없음)
                "ignored": "($rainbowpie_localui_disconnect_dialog_buttons = 'common.empty_panel')",
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
                          // 다른 템플릿을 가져와서 확장(상속)
                          "button_panel@$rainbowpie_localui_disconnect_dialog_buttons": {
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 가로/세로 크기
                            "size": [ "100%", 23 ]
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
  "disconnect_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.global_background": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
        }
      },
      {
        // ???/?? ??
        "screen_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 완전히 제거(공간도 없음)
          "ignored": "$rainbowpie_ui_flag_d39385b8",
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "disconnect_screen_content@disconnect.disconnect_screen_content": {} }
          ]
        }
      },
      {
        // ???/?? ??
        "dialog_screen": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 204, 132 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_d39385b8)",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "disconnect.lost",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_disconnect.dialog_content",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_show_background": false,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_show_close": false
              }
            }
          ]
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
          "offset": [ "50% - 102px", 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_d39385b8 or not $rainbowpie_ui_flag_disconnect_ui_modified)",
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
                "offset": [ 0, "50% - 66px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "blur_layer_1@mintui_background.background_blur": {
                      // 오버라이드 가능한 변수
                      "$background_offset": [ "-100% + 204px", "-100% + 132px" ],
                      // 오버라이드 가능한 변수
                      "$background_children_offset": [ "50% - 102px", "50% - 66px" ],
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
  }
}
```








### ui extras
enchanting_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: enchanting_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_enchanting",

  // 다른 템플릿을 가져와서 확장(상속)
  "lapis_image@enchanting.lapis_image": {
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 가로/세로 크기
    "size": [ "88.88888888888889%", "88.88888888888889%" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "enchanting_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 168 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
      { "gamepad_cursor@common.gamepad_cursor_button": {} },
      { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "enchanting_background_icon@rainbowpie_ui_inventory.background_icon": {
                // 가로/세로 크기
                "size": "$rainbowpie_ui_theme_inventory_bgicon_enchanting_size",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_ui_theme_inventory_bgicon_enchanting_offset",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_enchanting_anchor",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_enchanting_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_inventory_bgicon_enchanting_texture",
                // ???
                "alpha": "$rainbowpie_ui_theme_inventory_bgicon_enchanting_alpha",
                // ?? ??
                "fill": "$rainbowpie_ui_theme_inventory_bgicon_enchanting_fill"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "13.69047619047619%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "$container_title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border1_size": [ "2.380952380952381%", 0 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border2_size": [ "2.380952380952381%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 13.69047619047619%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "enchanting_panel_top_half": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "36.30952380952381%" ], // 162x61
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-48.21428571428571%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "enchanting_book_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점에서 이동하는 거리
                      "offset": [ "4.938271604938272%", "-24.59016393442623%" ],
                      // 가로/세로 크기
                      "size": [ "100%y", "65.57377049180328%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "enchanting_book": {
                            // 특수 렌더러(그라디언트/플레이어 등)
                            "type": "custom",
                            // 커스텀 렌더러 종류
                            "renderer": "enchanting_book_renderer",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 13,
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
                                // 가져올 값 이름
                                "binding_name": "#open",
                                // 게임이 주는 전역 값 연결
                                "binding_type": "global"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "item_grid": {
                      // 격자 컨테이너: 칸칸이 배치
                      "type": "grid",
                      // 그리드 칸 수
                      "grid_dimensions": [ 1, 1 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ "4.938271604938272%", "19.67213114754098%" ],
                      // 가로/세로 크기
                      "size": [ "100%y", "29.50819672131148%" ],
                      // 목록 이름
                      "collection_name": "enchanting_input_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "item_slot@rainbowpie_ui_inventory_and_container.container_item": {
                            // 그리드 위치
                            "grid_position": [ 0, 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "enchanting_input_items"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "lapis_grid": {
                      // 격자 컨테이너: 칸칸이 배치
                      "type": "grid",
                      // 그리드 칸 수
                      "grid_dimensions": [ 1, 1 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ "17.28395061728395%", "19.67213114754098%" ],
                      // 가로/세로 크기
                      "size": [ "100%y", "29.50819672131148%" ],
                      // 목록 이름
                      "collection_name": "enchanting_lapis_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "lapis@rainbowpie_ui_inventory_and_container.container_item": {
                            // 그리드 위치
                            "grid_position": [ 0, 0 ],
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "rainbowpieui_enchanting.lapis_image",
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "enchanting_lapis_items",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "enchanting_lapis"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "grid_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 가로/세로 크기
                      "size": [ "65%", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "dust_panel@enchanting.dust_panel": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_left",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 10
                          }
                        },
                        {
                          // ???/?? ??
                          "enchantments_grid": {
                            // 격자 컨테이너: 칸칸이 배치
                            "type": "grid",
                            // 목록 이름
                            "collection_name": "#enchant_buttons",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2,
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 그리드 칸 수
                            "grid_dimensions": [ 1, 3 ],
                            // ??? ?? ?
                            "grid_item_template": "enchanting.enchant_button_panel"
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
              "inventory@rainbowpie_ui_inventory_and_container.inventory_panel_bottom_half": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "32.14285714285714%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-14.28571428571429%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar@rainbowpie_ui_inventory_and_container.hotbar_grid_template": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "10.71428571428571%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.785714285714286%" ]
              }
            }
          ]
        }
      }
    ]
  }
}
```








### ui extras
furnace_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: furnace_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_furnace",

  // 다른 템플릿을 가져와서 확장(상속)
  "furnace_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 161 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
      { "gamepad_cursor@common.gamepad_cursor_button": {} },
      { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "furnace_background_icon@rainbowpie_ui_inventory.background_icon": {
                // 가로/세로 크기
                "size": "$size",
                // 기준점에서 이동하는 거리
                "offset": "$offset",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$anchor_to",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$anchor_from",
                // 사용할 이미지 경로
                "texture": "$texture",
                // ???
                "alpha": "$alpha",
                // ?? ??
                "fill": "$fill",

                // 오버라이드 가능한 변수
                "$size": "$rainbowpie_ui_theme_inventory_bgicon_furnace_size",
                // 오버라이드 가능한 변수
                "$offset": "$rainbowpie_ui_theme_inventory_bgicon_furnace_offset",
                // 오버라이드 가능한 변수
                "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_furnace_anchor",
                // 오버라이드 가능한 변수
                "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_furnace_anchor",
                // 오버라이드 가능한 변수
                "$texture": "$rainbowpie_ui_theme_inventory_bgicon_furnace_texture",
                // 오버라이드 가능한 변수
                "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_furnace_alpha",
                // 오버라이드 가능한 변수
                "$fill": "$rainbowpie_ui_theme_inventory_bgicon_furnace_fill",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$is_blast_furnace",
                    // 오버라이드 가능한 변수
                    "$size": "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_size",
                    // 오버라이드 가능한 변수
                    "$offset": "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_offset",
                    // 오버라이드 가능한 변수
                    "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_anchor",
                    // 오버라이드 가능한 변수
                    "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_anchor",
                    // 오버라이드 가능한 변수
                    "$texture": "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_texture",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_alpha",
                    // 오버라이드 가능한 변수
                    "$fill": "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_fill"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$is_smoker",
                    // 오버라이드 가능한 변수
                    "$size": "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_size",
                    // 오버라이드 가능한 변수
                    "$offset": "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_offset",
                    // 오버라이드 가능한 변수
                    "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_anchor",
                    // 오버라이드 가능한 변수
                    "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_anchor",
                    // 오버라이드 가능한 변수
                    "$texture": "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_texture",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_alpha",
                    // 오버라이드 가능한 변수
                    "$fill": "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_fill"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "14.28571428571429%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "$container_title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border1_size": [ "2.380952380952381%", 0 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border2_size": [ "2.380952380952381%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 14.28571428571429%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "furnace_panel_top_half": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ], // 162x54
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-50.31055900621118%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "furnace_input_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "50%", "100%" ], // 81x54
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%y", "29.62962962962963%" ], // 16x16
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "furnace_ingredient_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "112.5%" ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ "-125%", "-118.75%" ],
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "right_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "right_middle",
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "ingredient_item@rainbowpie_ui_inventory_and_container.container_item": {
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "left_middle",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "left_middle",
                                        // 오버라이드 가능한 변수
                                        "$item_collection_name": "furnace_ingredient_items",

                                        // 오버라이드 가능한 변수
                                        "$focus_id": "furnace_ingredient_item",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left": "FOCUS_OVERRIDE_STOP",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_up": "FOCUS_OVERRIDE_STOP",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_up_binding_type": "none"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "flame_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "81.25%" ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ "-131.25%", 0 ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "flame_empty_image@furnace.flame_empty_image": {}
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "flame_full_image@furnace.flame_full_image": {}
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "furnace_fuel_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "112.5%" ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ "-125%", "118.75%" ],
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "right_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "right_middle",
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "fuel_item@rainbowpie_ui_inventory_and_container.container_item": {
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "left_middle",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "left_middle",
                                        // 오버라이드 가능한 변수
                                        "$item_collection_name": "furnace_fuel_items",

                                        // 오버라이드 가능한 변수
                                        "$focus_id": "furnace_fuel_item",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_right": "furnace_output_item",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_right_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left": "FOCUS_OVERRIDE_STOP",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left_binding_type": "none"
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
                    "furnace_arrow_empty_image@furnace.furnace_arrow_empty_image": {
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 가로/세로 크기
                      "size": [ "13.58024691358025%", "27.77777777777778%" ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "furnace_arrow_full_image@furnace.furnace_arrow_full_image": {
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 가로/세로 크기
                      "size": [ "13.58024691358025%", "27.77777777777778%" ]
                    }
                  },
                  {
                    // ???/?? ??
                    "furnace_output_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "50%", "100%" ], // 81x54
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_right",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "output_item@rainbowpie_ui_inventory_and_container.container_item": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 가로/세로 크기
                            "size": [ "100%y", "48.14814814814815%" ],
                            // 오버라이드 가능한 변수
                            "$item_renderer_panel_size": [ "100%y", "69.23076923076923%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ "24.69135802469136%", 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "furnace_output_items",

                            // 오버라이드 가능한 변수
                            "$focus_id": "furnace_output_item",
                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "FOCUS_OVERRIDE_STOP",
                            // 오버라이드 가능한 변수
                            "$focus_override_left_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "furnace_fuel_item"
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
              "inventory@rainbowpie_ui_inventory_and_container.inventory_panel_bottom_half": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-14.90683229813665%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar@rainbowpie_ui_inventory_and_container.hotbar_grid_template": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "11.18012422360248%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.863354037267081%" ]
              }
            }
          ]
        }
      }
    ]
  }
}
```








### ui extras
general_section_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: general_section_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_general_section",

  // 다른 템플릿을 가져와서 확장(상속)
  "about_button@settings_common.section_toggle_base": {
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "about_button_toggle",
    // 오버라이드 가능한 변수
    "$glyph_texture": "",
    // 오버라이드 가능한 변수
    "$glyph_color_texture": "",
    // 오버라이드 가능한 변수
    "$glyph_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$icon_group_name": "RainbowPie",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "about",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.settings.about.title",
    // 오버라이드 가능한 변수
    "$toggle_property_bag": {
      // ???/??? ?
      "#panel_title": "rainbowpie.ui.settings.about.title"
    }
  },

  // ???/?? ??
  "about_section": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "about_button_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "header_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c + 20px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "background": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100% - 32px", "100%cm + 4px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 16 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/r_white')",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_text_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_text_background_alpha",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "content_stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ "100% - 84px", "100%c" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 3, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "label_1@rainbowpie_ui_common.text_label": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "$rainbowpie_ui_flag_about_verison_infomation",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 가로/세로 크기
                            "size": [ "100% - 44px", "default" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 42, 1 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_left",
                            // 보여줄 글자
                            "text": "$mintui_pack_name",
                            // ?? ?? ??
                            "font_scale_factor": 1.5
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "label_2@rainbowpie_ui_common.text_label": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 가로/세로 크기
                            "size": [ "100% - 44px", "default" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 42, 16 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_left",
                            // 보여줄 글자
                            "text": "$rainbowpie_ui_string_about_description"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "twilight_gif": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "($rainbowpie_ui_path_home + '/assets/twilight')",
                      // ???? ??
                      "uv_size": [ 49, 48 ],
                      // ???? ?? ??
                      "uv": "@rainbowpieui_general_section.twilight_gif_animation",
                      // ????? ?? ?
                      "disable_anim_fast_forward": true,
                      // 가로/세로 크기
                      "size": [ 50, 50 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ -3, 3 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_right"
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
        "version_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_about_verison_infomation)",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "version_stack_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100% - 32px", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_label@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "100%", "default" ],
                      // 보여줄 글자
                      "text": "$mintui_pack_name",
                      // ?? ?? ??
                      "font_scale_factor": 1.5
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_driven@rainbowpieui_settings_common.driven": {}
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "branch@rainbowpieui_general_section.info_label": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_title": "rainbowpie.ui.about.version.branch",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_value": "('\"' + $rainbowpieui_branch_type + '/' + $rainbowpieui_branch_name + '\"')"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "commit@rainbowpieui_general_section.info_label": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_title": "rainbowpie.ui.about.version.commit",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_value": "('\"' + $rainbowpieui_commit_id + '\"')"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "version@rainbowpieui_general_section.info_label": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_title": "rainbowpie.ui.about.version.version",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_value": "('\"' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version + '\"')"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "codename@rainbowpieui_general_section.info_label": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_title": "rainbowpie.ui.about.version.codename",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_value": "('\"' + $rainbowpieui_codename + '\"')"
                    }
                  },
                  {
                    // ???/?? ??
                    "compatibility_padding": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, 6 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "compatibility_title_label@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "100%", "default" ],
                      // 보여줄 글자
                      "text": "rainbowpie.ui.about.compatibility",
                      // ?? ?? ??
                      "font_scale_factor": 1.5
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "compatibility_title_driven@rainbowpieui_settings_common.driven": {}
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "subpacks@rainbowpieui_general_section.info_label": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_title": "rainbowpie.ui.about.compatibility.subpacks",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_value": "('\"' + $rainbowpieui_version_minecraft_subpacks + '\"')"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "compatibility_variable_panel@rainbowpieui_compatibility_config.compatibility_variables": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%c" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "target@rainbowpieui_general_section.info_label": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_title": "rainbowpie.ui.about.compatibility.target",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_value": "('\"' + $rainbowpieui_version_minecraft_target + '\"')"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "compatible@rainbowpieui_general_section.info_label": {
                            // 오버라이드 가능한 변수
                            "$minor_max": "($rainbowpieui_version_minecraft_max - ($rainbowpieui_version_minecraft_bigver + '.'))",
                            // 오버라이드 가능한 변수
                            "$minor_min": "($rainbowpieui_version_minecraft_min - ($rainbowpieui_version_minecraft_bigver + '.'))",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_title": "rainbowpie.ui.about.compatibility.compatible",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_value": "('\"' + $rainbowpieui_version_minecraft_bigver + '.' + $minor_min + '-' + $minor_max + '\"')"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "target_code@rainbowpieui_general_section.info_label": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_title": "rainbowpie.ui.about.compatibility.target_code",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_value": "('\"' + $compatibility_target_version + '\"')"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "max_code@rainbowpieui_general_section.info_label": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_title": "rainbowpie.ui.about.compatibility.max_code",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_value": "('\"' + $compatibility_max_version + '\"')"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "min_code@rainbowpieui_general_section.info_label": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_title": "rainbowpie.ui.about.compatibility.min_code",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_info_value": "('\"' + $compatibility_min_version + '\"')"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "resource_pack_id@rainbowpieui_general_section.info_label": {
                      // 보이기/숨기기(공간 유지)
                      "visible": "(not ($rainbowpie_ui_flag_resourcepack_identifier = ''))",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_title": "rainbowpie.ui.about.compatibility.resource_pack_id",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_value": "('\"' + $rainbowpie_ui_flag_resourcepack_identifier + '\"')"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "resource_pack_displayname@rainbowpieui_general_section.info_label": {
                      // 보이기/숨기기(공간 유지)
                      "visible": "(not ($rainbowpie_ui_flag_resourcepack_displayname = ''))",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_title": "rainbowpie.ui.about.compatibility.resource_pack_displayname",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_info_value": "('\"' + $rainbowpie_ui_flag_resourcepack_displayname + '\"')"
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
  "info_label": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ],

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_info_title|default": "INFOMATION TITLE",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_info_value|default": "default value",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "info_label": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%", "100%cm" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "info_title_label@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "fill", "default" ],
                // 보여줄 글자
                "text": "$rainbowpie_localui_info_title"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "info_title_label@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "fill", "default" ],
                // 보여줄 글자
                "text": "$rainbowpie_localui_info_value"
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "twilight_gif_animation": {
    // 프레임 애니메이션
    "anim_type": "flip_book",
    // ?? ??
    "initial_uv": [ 0, 0 ],
    // ?? ??
    "frame_count": 15,
    // ?? ??
    "frame_step": 15,
    // ?? ??
    "fps": 5,
    // ?? ??
    "reversible": false,
    // 움직임 곡선
    "easing": "linear"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "global_texture_pack_header@rainbowpieui_resource_packs.resource_packs_header": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_type": "global",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control": "global_rp_search_text_box_display_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_placeholder": "rainbowpie.ui.resource_packs.search.placeholder.resource",
    // 오버라이드 가능한 변수
    "$selected_pack_items": "#selected_pack_items_global",
    // 오버라이드 가능한 변수
    "$available_pack_items": "#available_pack_items_global",
    // 오버라이드 가능한 변수
    "$selected_label_text": "resourcePack.selected.title.packs",
    // 오버라이드 가능한 변수
    "$available_label_text": "resourcePack.available.title.packs",
    // 오버라이드 가능한 변수
    "$show_checkbox": false,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "global_texture_pack_button_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "graphics_button@settings_common.section_toggle_base": {
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "graphics_button_toggle",
    // 오버라이드 가능한 변수
    "$glyph_texture": "textures/ui/video_glyph",
    // 오버라이드 가능한 변수
    "$glyph_color_texture": "textures/ui/video_glyph_color",
    // 오버라이드 가능한 변수
    "$glyph_size": [ 15, 12 ],
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "graphics",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.settings.graphics",
    // 오버라이드 가능한 변수
    "$toggle_property_bag": {
      // ???/??? ?
      "#panel_title": "rainbowpie.ui.settings.graphics.title"
    }
  },

  // ???/?? ??
  "graphics_section": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "graphics_button_toggle",
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
        "vsync_dropdown@settings_common.option_dropdown": {
          // 오버라이드 가능한 변수
          "$option_label": "options.vsync",
          // 오버라이드 가능한 변수
          "$dropdown_content": "general_section.vysnc_dropdown_content",
          // 오버라이드 가능한 변수
          "$dropdown_area": "content_area",
          // 오버라이드 가능한 변수
          "$dropdown_name": "vsync_dropdown",
          // 오버라이드 가능한 변수
          "$options_dropdown_toggle_label_binding": "#vsync_dropdown_toggle_label",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#vsync_dropdown_enabled",
          // 오버라이드 가능한 변수
          "$dropdown_scroll_content_size": [ "100%", "200%" ],

          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_enabled": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
                // 오버라이드 가능한 변수
                "$toggle_state_binding_name": "#vsync_off",
                // 오버라이드 가능한 변수
                "$radio_label_text": "options.vsync.off"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
                // 오버라이드 가능한 변수
                "$toggle_state_binding_name": "#vsync_on",
                // 오버라이드 가능한 변수
                "$radio_label_text": "options.vsync.on"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
                // 오버라이드 가능한 변수
                "$toggle_state_binding_name": "#vsync_adaptive",
                // 오버라이드 가능한 변수
                "$radio_label_text": "options.vsync.adaptive"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "fancy_leaves_toggle@settings_common.option_toggle": {
          // 완전히 제거(공간도 없음)
          "ignored": "($pocket_edition or $is_holographic)",
          // 오버라이드 가능한 변수
          "$option_label": "options.transparentleaves",
          // 오버라이드 가능한 변수
          "$option_binding_name": "#transparent_leaves",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#transparent_leaves_enabled",
          // 오버라이드 가능한 변수
          "$toggle_name": "transparent_leaves"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "render_clouds_toggle@settings_common.option_toggle": {
          // 오버라이드 가능한 변수
          "$option_label": "options.renderclouds",
          // 오버라이드 가능한 변수
          "$option_binding_name": "#render_clouds",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#render_clouds_enabled",
          // 오버라이드 가능한 변수
          "$toggle_name": "render_clouds"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "raytracing_render_distance_slider@settings_common.option_slider": {
          // 오버라이드 가능한 변수
          "$option_label": "#raytracing_render_distance_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "raytracing_render_distance",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#raytracing_render_distance",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#raytracing_render_distance_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#raytracing_render_distance_enabled",
          // 오버라이드 가능한 변수
          "$option_tooltip_binding_type": "global",
          // 오버라이드 가능한 변수
          "$option_tooltip_area": "general_and_controls_sections",
          // 오버라이드 가능한 변수
          "$option_tooltip_text_binding_name": "#rtx_renderdist_performance_tooltip_text",
          // 오버라이드 가능한 변수
          "$option_tooltip_visible_binding_name": "#rtx_render_distance_warning_visible",
          // 오버라이드 가능한 변수
          "$option_tooltip_icon": "textures/ui/WarningGlyph",
          // 오버라이드 가능한 변수
          "$slider_steps_binding_name": "#raytracing_render_distance_steps",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "option_generic_core@settings_common.option_generic_core": { } }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_raytracing_render_distance",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "deferred_render_distance_slider@settings_common.option_slider": {
          // 완전히 제거(공간도 없음)
          "ignored": "($is_holographic)",
          // 오버라이드 가능한 변수
          "$option_label": "#deferred_render_distance_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "deferred_render_distance",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#deferred_render_distance",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#deferred_render_distance_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#deferred_render_distance_enabled",
          // 오버라이드 가능한 변수
          "$slider_steps_binding_name": "#deferred_render_distance_steps",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "option_generic_core@settings_common.option_generic_core": {} }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_deferred_render_distance",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "render_distance_slider@settings_common.option_slider": {
          // 완전히 제거(공간도 없음)
          "ignored": "($is_holographic)",
          // 오버라이드 가능한 변수
          "$option_label": "#render_distance_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "render_distance",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#render_distance",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#render_distance_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#render_distance_enabled",
          // 오버라이드 가능한 변수
          "$slider_steps_binding_name": "#render_distance_steps",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "render_distance_warning@general_section.render_distance_warning": {} },
            { "option_generic_core@settings_common.option_generic_core": {} }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_render_distance",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "render_distance_warning_text": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%cm + 16px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "render_distance_easter_popup@common.static_tooltip_popup_with_image_and_text": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_3520da91)",
                // 가로/세로 크기
                "size": [ "100% - 4px", "100%cm + 8px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 오버라이드 가능한 변수
                "$tooltip_panel_offset": [ 0, 6 ],
                // 오버라이드 가능한 변수
                "$tooltip_popup_image": "textures/ui/WarningGlyph",
                // 오버라이드 가능한 변수
                "$tooltip_button_binding_type": "none",
                // 오버라이드 가능한 변수
                "$tooltip_button_collection_name": "",
                // 오버라이드 가능한 변수
                "$tooltip_text_binding_name": "Now you can use your CPU to fry eggs! :D",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#render_distance_slider_label"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not ((#render_distance_slider_label - '96 ') = #render_distance_slider_label))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_96_distance"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not ((#render_distance_slider_label - '96+ ') = #render_distance_slider_label))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_96plus_distance"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#is_96_distance or #is_96plus_distance)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "render_distance_popup@common.static_tooltip_popup_with_image_and_text": {
                // 가로/세로 크기
                "size": [ "100% - 4px", "100%cm + 8px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 오버라이드 가능한 변수
                "$tooltip_panel_offset": [ 0, 6 ],
                // 오버라이드 가능한 변수
                "$tooltip_popup_image": "textures/ui/WarningGlyph",
                // 오버라이드 가능한 변수
                "$tooltip_button_binding_type": "global",
                // 오버라이드 가능한 변수
                "$tooltip_button_collection_name": "",
                // 오버라이드 가능한 변수
                "$tooltip_popup_visible_binding": "#render_distance_warning_visible",
                // 오버라이드 가능한 변수
                "$tooltip_text_binding_name": "#render_distance_performance_tooltip_text",
                // 오버라이드 가능한 변수
                "$tooltip_chevron_anchor": "top_right",
                // 오버라이드 가능한 변수
                "$tooltip_popup_chevron_offset": [ "-30%x", "-10px" ],
                // 오버라이드 가능한 변수
                "$tooltip_popup_chevron_texture": "textures/ui/tooltip_inverted_chevron",
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#is_96_distance": false,
                  // ???/??? ?
                  "#is_96plus_distance": false
                },
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#render_distance_slider_label"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not ((#render_distance_slider_label - '96 ') = #render_distance_slider_label))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_96_distance",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_flag_3520da91)"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not ((#render_distance_slider_label - '96+ ') = #render_distance_slider_label))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_96plus_distance",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_flag_3520da91)"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#is_96_distance or #is_96plus_distance))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#render_distance_warning_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "advanced_graphics_options_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "($is_holographic)",
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%", "100%c + 4px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "graphics_mode@settings_common.option_dropdown": {
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
                ],

                // 오버라이드 가능한 변수
                "$option_label": "options.graphicsMode",
                // 오버라이드 가능한 변수
                "$dropdown_content": "general_section.graphics_mode_dropdown_content",
                // 오버라이드 가능한 변수
                "$dropdown_area": "content_area",
                // 오버라이드 가능한 변수
                "$dropdown_name": "graphics_mode_dropdown",
                // 오버라이드 가능한 변수
                "$option_enabled_binding_name": "#graphics_mode_dropdown_enabled",
                // 오버라이드 가능한 변수
                "$options_dropdown_toggle_label_binding": "#graphics_mode_dropdown_toggle_label",
                // 오버라이드 가능한 변수
                "$dropdown_scroll_content_size": [ "100%", "255%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "graphics_quality_preset_mode_dropdown_content@settings_common.option_radio_dropdown_group": {
                // 오버라이드 가능한 변수
                "$option_enabled_binding_name": "#graphics_quality_preset_mode_dropdown_enabled",
                // 오버라이드 가능한 변수
                "$radio_buttons": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "@settings_common.radio_with_label": {
                      // 오버라이드 가능한 변수
                      "$toggle_state_binding_name": "#graphics_quality_preset_mode_radio_performance",
                      // 오버라이드 가능한 변수
                      "$radio_label_text": "options.graphicsQualityPresetMode.performance"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "@settings_common.radio_with_label": {
                      // 오버라이드 가능한 변수
                      "$toggle_state_binding_name": "#graphics_quality_preset_mode_radio_visuals",
                      // 오버라이드 가능한 변수
                      "$radio_label_text": "options.graphicsQualityPresetMode.visuals"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "@settings_common.radio_with_label": {
                      // 오버라이드 가능한 변수
                      "$toggle_state_binding_name": "#graphics_quality_preset_mode_radio_custom",
                      // 오버라이드 가능한 변수
                      "$radio_label_text": "options.graphicsQualityPresetMode.custom"
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#graphics_mode_is_deferred",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "advanced_graphics_options_section@general_section.advanced_graphics_options_section": {}
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "raytracing_button@settings_common.section_toggle_base": {
    // 완전히 제거(공간도 없음)
    "ignored": true,
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "raytracing",
    // 오버라이드 가능한 변수
    "$button_text": "options.raytracing",
    // 오버라이드 가능한 변수
    "$toggle_property_bag": {
      // ???/??? ?
      "#panel_title": "rainbowpie.ui.settings.raytracing.title"
    }
  },

  // ???/?? ??
  "raytracing_section": {
    // 완전히 제거(공간도 없음)
    "ignored": true,
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "raytracing_button_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "module_button@settings_common.section_toggle_base": {
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "module_button_toggle",
    // 오버라이드 가능한 변수
    "$glyph_texture": "",
    // 오버라이드 가능한 변수
    "$glyph_color_texture": "",
    // 오버라이드 가능한 변수
    "$glyph_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$icon_group_name": "RainbowPie",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "module",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.settings.module.title",
    // 오버라이드 가능한 변수
    "$toggle_property_bag": {
      // ???/??? ?
      "#panel_title": "rainbowpie.ui.settings.module.title"
    }
  },

  // ???/?? ??
  "module_section": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "module_button_toggle",
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
        "module_list@rainbowpieui_module_pack.module_list": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "theme_button@settings_common.section_toggle_base": {
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "theme_button_toggle",
    // 오버라이드 가능한 변수
    "$glyph_texture": "",
    // 오버라이드 가능한 변수
    "$glyph_color_texture": "",
    // 오버라이드 가능한 변수
    "$glyph_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$icon_group_name": "RainbowPie",
    // 오버라이드 가능한 변수
    "$icon_texture_name": "theme",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.settings.theme.title",
    // 오버라이드 가능한 변수
    "$toggle_property_bag": {
      // ???/??? ?
      "#panel_title": "rainbowpie.ui.settings.theme.title"
    }
  },

  // ???/?? ??
  "theme_section": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "theme_button_toggle",
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
        "theme_info@rainbowpie_ui_common.text_background": {
          // 가로/세로 크기
          "size": [ 230, 40 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "icon_image": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_icon"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "label_1@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100% - 44px", 15 ],
                // 기준점에서 이동하는 거리
                "offset": [ 42, 1 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 보여줄 글자
                "text": "$rainbowpie_ui_theme_name",
                // ?? ?? ??
                "font_scale_factor": 1.5
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "label_2@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100% - 44px", 10 ],
                // 기준점에서 이동하는 거리
                "offset": [ 42, 16 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 보여줄 글자
                "text": "$rainbowpie_ui_theme_author"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "label_3@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100% - 44px", 10 ],
                // 기준점에서 이동하는 거리
                "offset": [ 42, 27 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 보여줄 글자
                "text": "$rainbowpie_ui_theme_desc"
              }
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
        // 다른 템플릿을 가져와서 확장(상속)
        "theme_version_toohight_warn@rainbowpie_ui_common.text_background": {
          // 보이기/숨기기(공간 유지)
          "visible": "($rainbowpie_ui_theme_version > $rainbowpie_ui_themesystem_version)",
          // 가로/세로 크기
          "size": [ 230, 14 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "theme_version_toohight@rainbowpie_ui_common.text_label": {
                // ?? (R,G,B,A)
                "color": [ 1.0, 1.0, 0.333 ],
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 보여줄 글자
                "text": "rainbowpie.ui.themesystem.version_toohight"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "theme_version_toolow_warn@rainbowpie_ui_common.text_background": {
          // 보이기/숨기기(공간 유지)
          "visible": "($rainbowpie_ui_themesystem_version > $rainbowpie_ui_theme_version)",
          // 가로/세로 크기
          "size": [ 230, 14 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "theme_version_toolow@rainbowpie_ui_common.text_label": {
                // ?? (R,G,B,A)
                "color": [ 1.0, 0.333, 0.333 ],
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 보여줄 글자
                "text": "rainbowpie.ui.themesystem.version_toolow"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "padding_1": {
          // 보이기/숨기기(공간 유지)
          "visible": "($rainbowpie_ui_theme_version > $rainbowpie_ui_themesystem_version)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, 2 ]
        }
      },
      {
        // ???/?? ??
        "padding_2": {
          // 보이기/숨기기(공간 유지)
          "visible": "($rainbowpie_ui_themesystem_version > $rainbowpie_ui_theme_version)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, 2 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "theme_preview@rainbowpie_ui_theme_preview.theme_preview": {
          // 가로/세로 크기
          "size": [ "100%", 120 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "theme_description_title@rainbowpie_ui_common.text_label": {
          // ?? (R,G,B,A)
          "color": "$body_text_color",
          // 가로/세로 크기
          "size": [ "default", "default" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보여줄 글자
          "text": "rainbowpie.ui.themesystem.description.title"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "theme_description@rainbowpie_ui_common.text_label": {
          // ?? (R,G,B,A)
          "color": "$body_text_color",
          // 가로/세로 크기
          "size": [ "100%", "default" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보여줄 글자
          "text": "$rainbowpie_ui_theme_description"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "uitest_button@settings_common.section_toggle_base": {
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "uitest_button_toggle",
    // 오버라이드 가능한 변수
    "$glyph_texture": "",
    // 오버라이드 가능한 변수
    "$glyph_color_texture": "",
    // 오버라이드 가능한 변수
    "$glyph_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_text": "UI Test",
    // 오버라이드 가능한 변수
    "$toggle_property_bag": {
      // ???/??? ?
      "#panel_title": "Rainbow Pie UI Test"
    }
  },

  // ???/?? ??
  "uitest_tab_section": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "uitest_button_toggle",
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
        "title_3_anim@rainbowpie_ui_common.text_label": {
          // 보여줄 글자
          "text": "Item Renderer Test"
        }
      },
      {
        // ???/?? ??
        "item_renderer_test_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 20 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_id@common.text_edit_box": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5,
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 가로/세로 크기
                "size": [ 80, 20 ],
                // 오버라이드 가능한 변수
                "$text_box_name": "item_id_text_box",
                // 오버라이드 가능한 변수
                "$text_edit_text_control": "item_id_text",
                // 오버라이드 가능한 변수
                "$place_holder_text": "Item ID",
                // 끝에서 다시 처음으로 순환
                "focus_wrap_enabled": false,
                // ?? ?? ?
                "max_length": 32767
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_render@rainbowpie_ui_common.item_renderer": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 가로/세로 크기
                "size": [ 16, 16 ],
                // 기준점에서 이동하는 거리
                "offset": [ 80, 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "item_id_text",
                    // 계산식/참조 값
                    "source_property_name": "#item_name",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output_text"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((#output_text * 1) * 65536)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#item_id_aux"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_id_label@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 96, 0 ],
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // 보여줄 글자
                "text": "#text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "item_id_text",
                    // 계산식/참조 값
                    "source_property_name": "#item_name",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output_text"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('item_id_aux: ' + ((#output_text * 1) * 65536))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#text"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "item_renderer_test_2": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 20 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_id@common.text_edit_box": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5,
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 가로/세로 크기
                "size": [ 80, 20 ],
                // 오버라이드 가능한 변수
                "$text_box_name": "item_id_text_box",
                // 오버라이드 가능한 변수
                "$text_edit_text_control": "item_aux_id_text",
                // 오버라이드 가능한 변수
                "$place_holder_text": "Item Aux ID",
                // 끝에서 다시 처음으로 순환
                "focus_wrap_enabled": false,
                // ?? ?? ?
                "max_length": 32767
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_render@rainbowpie_ui_common.item_renderer": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 가로/세로 크기
                "size": [ 16, 16 ],
                // 기준점에서 이동하는 거리
                "offset": [ 80, 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "item_aux_id_text",
                    // 계산식/참조 값
                    "source_property_name": "#item_name",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output_text"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#output_text * 1)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#item_id_aux"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_id_label@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 96, 0 ],
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // 보여줄 글자
                "text": "#text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "item_aux_id_text",
                    // 계산식/참조 값
                    "source_property_name": "#item_name",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output_text"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('item_id: ' + ((#output_text * 1) / 65536))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#text"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "spacer_3": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_01_str@rainbowpie_ui_common.text_label": {
          // 보여줄 글자
          "text": "String Test"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_01@rainbowpie_ui_common.text_label": {
          // 오버라이드 가능한 변수
          "$var_1": "TEST STRING",
          // 보여줄 글자
          "text": "('This is a test string variable: %s, and this is end' * $var_1)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_02@rainbowpie_ui_common.text_label": {
          // 오버라이드 가능한 변수
          "$var_1": "",
          // 보여줄 글자
          "text": "('test \u003d ')"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_03@rainbowpie_ui_common.text_label": {
          // 오버라이드 가능한 변수
          "$var_1": "ABCDEF0123456789",
          // 보여줄 글자
          "text": "('%.12s' * $var_1)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_04@rainbowpie_ui_common.text_label": {
          // 오버라이드 가능한 변수
          "$var_1": "message:/time set 24000",
          // 보여줄 글자
          "text": "('%.17s' * $var_1)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_05@rainbowpie_ui_common.text_label": {
          // 오버라이드 가능한 변수
          "$var_1": 114514,
          // 보여줄 글자
          "text": "('\"' + $var_1 + '\"')"
        }
      },
      // 比较最小数值 2x2 (4) (By DeepSeek AI)
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_06@rainbowpie_ui_common.text_label": {
          // 보여줄 글자
          "text": "#result_text",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#a": 52,
            // ???/??? ?
            "#b": 64,
            // ???/??? ?
            "#c": 0,
            // ???/??? ?
            "#d": 32,
            // ???/??? ?
            "#result": 0
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#a > 0) * #a + (#a < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_a"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#b > 0) * #b + (#b < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_b"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#c > 0) * #c + (#c < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_c"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#d > 0) * #d + (#d < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_d"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#adjusted_a < #adjusted_b) * #adjusted_a + (#adjusted_b < #adjusted_a) * #adjusted_b)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_1"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_1 < #adjusted_c) * #temp_1 + (#adjusted_c < #temp_1) * #adjusted_c)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_2"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_2 < #adjusted_d) * #temp_2 + (#adjusted_d < #temp_2) * #adjusted_d)",
              // 결과가 들어갈 속성
              "target_property_name": "#result"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('zz' + #result)",
              // 결과가 들어갈 속성
              "target_property_name": "#result_text"
            }
          ]
        }
      },
      // 比较最小数值 3x3 (9) (By DeepSeek AI)
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_07@rainbowpie_ui_common.text_label": {
          // 보여줄 글자
          "text": "#result_text",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#a": 128,
            // ???/??? ?
            "#b": 0,
            // ???/??? ?
            "#c": 0,
            // ???/??? ?
            "#d": 0,
            // ???/??? ?
            "#e": 0,
            // ???/??? ?
            "#f": 0,
            // ???/??? ?
            "#g": 0,
            // ???/??? ?
            "#h": 0,
            // ???/??? ?
            "#i": 0,
            // ???/??? ?
            "#result": -1
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#a > 0) * #a + (#a < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_a"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#b > 0) * #b + (#b < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_b"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#c > 0) * #c + (#c < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_c"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#d > 0) * #d + (#d < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_d"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#e > 0) * #e + (#e < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_e"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#f > 0) * #f + (#f < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_f"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#g > 0) * #g + (#g < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_g"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#h > 0) * #h + (#h < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_h"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#i > 0) * #i + (#i < 1) * 9990)",
              // 결과가 들어갈 속성
              "target_property_name": "#adjusted_i"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#adjusted_a < #adjusted_b) * #adjusted_a + (#adjusted_b < #adjusted_a) * #adjusted_b + (#adjusted_a = #adjusted_b) * #adjusted_a)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_1"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_1 < #adjusted_c) * #temp_1 + (#adjusted_c < #temp_1) * #adjusted_c + (#temp_1 = #adjusted_c) * #temp_1)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_2"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_2 < #adjusted_d) * #temp_2 + (#adjusted_d < #temp_2) * #adjusted_d + (#temp_2 = #adjusted_d) * #temp_2)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_3"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_3 < #adjusted_e) * #temp_3 + (#adjusted_e < #temp_3) * #adjusted_e + (#temp_3 = #adjusted_e) * #temp_3)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_4"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_4 < #adjusted_f) * #temp_4 + (#adjusted_f < #temp_4) * #adjusted_f + (#temp_4 = #adjusted_f) * #temp_4)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_5"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_5 < #adjusted_g) * #temp_5 + (#adjusted_g < #temp_5) * #adjusted_g + (#temp_5 = #adjusted_g) * #temp_5)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_6"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_6 < #adjusted_h) * #temp_6 + (#adjusted_h < #temp_6) * #adjusted_h + (#temp_6 = #adjusted_h) * #temp_6)",
              // 결과가 들어갈 속성
              "target_property_name": "#temp_7"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#temp_7 < #adjusted_i) * #temp_7 + (#adjusted_i < #temp_7) * #adjusted_i + (#temp_7 = #adjusted_i) * #temp_7)",
              // 결과가 들어갈 속성
              "target_property_name": "#result"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('zz' + #result)",
              // 결과가 들어갈 속성
              "target_property_name": "#result_text"
            }
          ]
        }
      },
      // 判断奇数偶数
      // 0 = 奇数
      // 1 = 偶数
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_08@rainbowpie_ui_common.text_label": {
          // 오버라이드 가능한 변수
          "$var_1": 5,
          // 오버라이드 가능한 변수
          "$var_2": "($var_1 - 2 * ($var_1 / 2))",
          // 보여줄 글자
          "text": "('\"' + $var_2 + '\"')"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "str_test_09@rainbowpie_ui_common.text_label": {
          // 오버라이드 가능한 변수
          "$var_1": false,
          // 오버라이드 가능한 변수
          "$var_2": true,
          // 보여줄 글자
          "text": "('\"' + $var_1 + '\"')"
        }
      },
      {
        // ???/?? ??
        "spacer_2": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_1_anim@rainbowpie_ui_common.text_label": {
          // 보여줄 글자
          "text": "UI Animation Test"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_linear@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "linear"
        }
      },
      {
        // ???/?? ??
        "spacer_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_spring@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "spring"
        }
      },
      {
        // ???/?? ??
        "spacer_2": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_quad@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_quad"
        }
      },
      {
        // ???/?? ??
        "spacer_3": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_quad@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_quad"
        }
      },
      {
        // ???/?? ??
        "spacer_4": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_quad@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_quad"
        }
      },
      {
        // ???/?? ??
        "spacer_5": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_cubic@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_cubic"
        }
      },
      {
        // ???/?? ??
        "spacer_6": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_cubic@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_cubic"
        }
      },
      {
        // ???/?? ??
        "spacer_7": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_cubic@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_cubic"
        }
      },
      {
        // ???/?? ??
        "spacer_8": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_quart@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_quart"
        }
      },
      {
        // ???/?? ??
        "spacer_9": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_quart@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_quart"
        }
      },
      {
        // ???/?? ??
        "spacer_10": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_quart@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_quart"
        }
      },
      {
        // ???/?? ??
        "spacer_11": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_quint@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_quint"
        }
      },
      {
        // ???/?? ??
        "spacer_12": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_quint@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_quint"
        }
      },
      {
        // ???/?? ??
        "spacer_13": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_quint@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_quint"
        }
      },
      {
        // ???/?? ??
        "spacer_14": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_sine@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_sine"
        }
      },
      {
        // ???/?? ??
        "spacer_15": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_sine@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_sine"
        }
      },
      {
        // ???/?? ??
        "spacer_16": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_sine@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_sine"
        }
      },
      {
        // ???/?? ??
        "spacer_17": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_expo@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_expo"
        }
      },
      {
        // ???/?? ??
        "spacer_18": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_expo@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_expo"
        }
      },
      {
        // ???/?? ??
        "spacer_19": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_expo@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_expo"
        }
      },
      {
        // ???/?? ??
        "spacer_20": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_circ@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_circ"
        }
      },
      {
        // ???/?? ??
        "spacer_21": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_circ@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_circ"
        }
      },
      {
        // ???/?? ??
        "spacer_22": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_circ@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_circ"
        }
      },
      {
        // ???/?? ??
        "spacer_23": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_bounce@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_bounce"
        }
      },
      {
        // ???/?? ??
        "spacer_24": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_bounce@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_bounce"
        }
      },
      {
        // ???/?? ??
        "spacer_25": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_bounce@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_bounce"
        }
      },
      {
        // ???/?? ??
        "spacer_26": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_back@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_back"
        }
      },
      {
        // ???/?? ??
        "spacer_27": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_back@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_back"
        }
      },
      {
        // ???/?? ??
        "spacer_28": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_back@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_back"
        }
      },
      {
        // ???/?? ??
        "spacer_29": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_elastic@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_elastic"
        }
      },
      {
        // ???/?? ??
        "spacer_30": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_out_elastic@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "out_elastic"
        }
      },
      {
        // ???/?? ??
        "spacer_31": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "anim_test_in_out_elastic@rainbowpieui_general_section.anim_test": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_animtest_easing": "in_out_elastic"
        }
      },
      {
        // ???/?? ??
        "spacer_32": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      }
    ]
  },

  // ???/?? ??
  "anim_test": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_animtest_easing|default": "linear",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "anim_test_buttons": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%", 20 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "play@settings_common.action_button": {
                // 가로/세로 크기
                "size": [ 50, 20 ],
                // 오버라이드 가능한 변수
                "$pressed_button_name": "('rainbowpieui.settings_uitest_anim_play_' + $rainbowpie_localui_animtest_easing)",
                // 오버라이드 가능한 변수
                "$button_text": "PLAY"
              }
            },
            {
              // ???/?? ??
              "spacer_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 1, 1 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "reset@settings_common.action_button": {
                // 가로/세로 크기
                "size": [ 50, 20 ],
                // 오버라이드 가능한 변수
                "$pressed_button_name": "('rainbowpieui.settings_uitest_anim_reset_' + $rainbowpie_localui_animtest_easing)",
                // 오버라이드 가능한 변수
                "$button_text": "RESET"
              }
            },
            {
              // ???/?? ??
              "spacer_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 2, 1 ]
              }
            },
            {
              // ???/?? ??
              "title_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title@rainbowpie_ui_common.text_label": {
                      // 가로/세로 크기
                      "size": [ "default", "default" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 보여줄 글자
                      "text": "$rainbowpie_localui_animtest_easing",
                      // ?? ?? ??
                      "font_scale_factor": 1.2,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
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
        "anim_test": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": [ "100%", 16 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "dot": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ 16, 16 ],
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_button_background_hover_color",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // ????? ?? ?
                "animation_reset_name": "('rainbowpieui.settings_uitest_anim_reset_' + $rainbowpie_localui_animtest_easing)",
                // 애니메이션 목록
                "anims": [
                  "@rainbowpieui_general_section.ui_test_animation"
                ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "title@rainbowpie_ui_common.text_label_notheme": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 보여줄 글자
                "text": "$rainbowpie_localui_animtest_easing",
                // ?? (R,G,B,A)
                "color": [ 0.7, 0.7, 0.7 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "ui_test_animation": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_localui_animtest_easing",
    // 걸리는 시간(초)
    "duration": 2,
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "100% - 16px", 0 ],
    // ?? ??
    "play_event": "('rainbowpieui.settings_uitest_anim_play_' + $rainbowpie_localui_animtest_easing)"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worldtown_radio_visuals_unchecked@worldtown_radio_visuals": {
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worldtown_radio_visuals_checked@worldtown_radio_visuals": {
    // 오버라이드 가능한 변수
    "$selected": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worldtown_radio_visuals_unchecked_locked@worldtown_radio_visuals": {
    // 오버라이드 가능한 변수
    "$alpha": 0.5
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worldtown_radio_visuals_checked_locked@worldtown_radio_visuals": {
    // 오버라이드 가능한 변수
    "$alpha": 0.5,
    // 오버라이드 가능한 변수
    "$selected": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worldtown_radio_visuals_unchecked_hover@worldtown_radio_visuals": {
    // 오버라이드 가능한 변수
    "$hovered": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worldtown_radio_visuals_checked_hover@worldtown_radio_visuals": {
    // 오버라이드 가능한 변수
    "$hovered": true
  },

  // ???/?? ??
  "worldtown_radio_visuals": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 16 ],
    // 오버라이드 가능한 변수
    "$alpha|default": 1.0,
    // 오버라이드 가능한 변수
    "$radio_label_bindings|default": [],
    // 오버라이드 가능한 변수
    "$radio_label_color|default": "$main_header_text_color",
    // 오버라이드 가능한 변수
    "$radio_label_font_type|default": "default",
    // 오버라이드 가능한 변수
    "$no_label|default": false,
    // 오버라이드 가능한 변수
    "$selected|default": false,
    // 오버라이드 가능한 변수
    "$hovered|default": false,

    // Must be start with | and end with |
    "$worldtown_supported_languages": "|English (United States)|English (United Kingdom)|Deutsch (Deutschland)|Español (España)|Español (México)|Français (France)|Français (Canada)|Italiano (Italia)|日本語 (日本)|한국어 (대한민국)|Português (Brasil)|Português (Portugal)|Русский (Россия)|中文(简体)|中文(繁體)|Nederlands (Nederland)|Български (България)|Čeština (Česko)|Dansk (Danmark)|Ελληνικά (Ελλάδα)|Suomi (Suomi)|Magyar (Magyarország)|Indonesia (Indonesia)|Norsk bokmål (Norge)|Polski (Polska)|Slovenčina (Slovensko)|Svenska (Sverige)|Türkçe (Türkiye)|Українська (Україна)|Tiếng Việt (Việt Nam)|",
    // 이 안에 들어가는 부품 목록
    "controls": [
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
      },
      {
        // ???/?? ??
        "worldtown_flag": {
          // 이미지 표시
          "type": "image",
          // ???
          "alpha": "$alpha",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 4, 0 ],
          // 가로/세로 크기
          "size": [ 20, 20 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#language_description",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // ?? ???
              "binding_condition": "once",
              // 목록 이름
              "binding_collection_name": "languages"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "($rainbowpie_ui_path_home + '/flags/worldtown/' + #language_description)",
              // 결과가 들어갈 속성
              "target_property_name": "#texture"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('|' + #language_description + '|')",
              // 결과가 들어갈 속성
              "target_property_name": "#language_description_formatted"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (($worldtown_supported_languages - #language_description_formatted) = $worldtown_supported_languages))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "worldtown_flag_unknown": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_home + '/flags/worldtown/unknown')",
          // ???
          "alpha": "$alpha",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 4, 0 ],
          // 가로/세로 크기
          "size": [ 20, 20 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#language_description",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // ?? ???
              "binding_condition": "once",
              // 목록 이름
              "binding_collection_name": "languages"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('|' + #language_description + '|')",
              // 결과가 들어갈 속성
              "target_property_name": "#language_description_formatted"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(($worldtown_supported_languages - #language_description_formatted) = $worldtown_supported_languages)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "radio_label": {
          // 완전히 제거(공간도 없음)
          "ignored": "($no_label)",
          // 글자 표시
          "type": "label",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 보여줄 글자
          "text": "#language_description",
          // ??
          "font_type": "$rainbowpie_ui_theme_global_font_name",
          // ?? ?? ?
          "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
          // ?? (R,G,B,A)
          "color": "$radio_label_color",
          // 기준점에서 이동하는 거리
          "offset": [ 26, 0 ],
          // 가로/세로 크기
          "size": [ "100% - 16px", "default" ],
          // ???
          "alpha": "$alpha",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#language_description",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // ?? ???
              "binding_condition": "once",
              // 목록 이름
              "binding_collection_name": "languages"
            }
          ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worldtown_language_grid_item@settings_common.radio_with_label": {
    // 오버라이드 가능한 변수
    "$unchecked_control": "rainbowpieui_general_section.worldtown_radio_visuals_unchecked",
    // 오버라이드 가능한 변수
    "$checked_control": "rainbowpieui_general_section.worldtown_radio_visuals_checked",
    // 오버라이드 가능한 변수
    "$unchecked_hover_control": "rainbowpieui_general_section.worldtown_radio_visuals_unchecked_hover",
    // 오버라이드 가능한 변수
    "$checked_hover_control": "rainbowpieui_general_section.worldtown_radio_visuals_checked_hover",
    // 오버라이드 가능한 변수
    "$unchecked_locked_control": "rainbowpieui_general_section.worldtown_radio_visuals_unchecked_locked",
    // 오버라이드 가능한 변수
    "$unchecked_locked_hover_control": "rainbowpieui_general_section.worldtown_radio_visuals_unchecked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_control": "rainbowpieui_general_section.worldtown_radio_visuals_checked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_hover_control": "rainbowpieui_general_section.worldtown_radio_visuals_checked_locked",

    // 오버라이드 가능한 변수
    "$toggle_state_binding_name": "#language_initial_selected",
    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_binding_type": "collection",
    // 오버라이드 가능한 변수
    "$toggle_name": "languages",
    // 오버라이드 가능한 변수
    "$toggle_grid_collection_name": "languages",
    // 오버라이드 가능한 변수
    "$option_enabled_binding_name": "",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#default_focus_precedence",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // ?? ???
        "binding_condition": "visible",
        // 목록 이름
        "binding_collection_name": "languages"
      }
    ]
  }
}
```








### ui extras
grindstone_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: grindstone_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_grindstone",

  // 다른 템플릿을 가져와서 확장(상속)
  "grindstone_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 161 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
      { "gamepad_cursor@common.gamepad_cursor_button": {} },
      { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "grindstone_background_icon@rainbowpie_ui_inventory.background_icon": {
                // 가로/세로 크기
                "size": "$rainbowpie_ui_theme_inventory_bgicon_grindstone_size",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_ui_theme_inventory_bgicon_grindstone_offset",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_grindstone_anchor",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_grindstone_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_inventory_bgicon_grindstone_texture",
                // ???
                "alpha": "$rainbowpie_ui_theme_inventory_bgicon_grindstone_alpha",
                // ?? ??
                "fill": "$rainbowpie_ui_theme_inventory_bgicon_grindstone_fill"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "14.28571428571429%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "container.repairAndDisenchant",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border1_size": [ "2.380952380952381%", 0 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border2_size": [ "2.380952380952381%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 14.28571428571429%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "top_half_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ], // 162x54
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-50.31055900621118%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "grindstone_slots_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "55.55555555555556%", "100%" ], // 90x54 (56)
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "grindstone_middle_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 가로/세로 크기
                            "size": [ "20%", "75.92592592592593%" ], // 18x41
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "input_item_slot@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_middle",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "43.90243902439024%" ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 0, "2.439024390243902%" ],
                                  // 오버라이드 가능한 변수
                                  "$item_collection_name": "grindstone_input_items",

                                  // 오버라이드 가능한 변수
                                  "$focus_id_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_id": "grindstone_input",

                                  // 오버라이드 가능한 변수
                                  "$focus_override_down_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_down": "grindstone_additional",

                                  // 오버라이드 가능한 변수
                                  "$focus_override_right_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_right": "grindstone_result"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "additional_item_slot@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_middle",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "43.90243902439024%" ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 0, "-2.439024390243902%" ],
                                  // 오버라이드 가능한 변수
                                  "$item_collection_name": "grindstone_additional_items",

                                  // 오버라이드 가능한 변수
                                  "$focus_id_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_id": "grindstone_additional",

                                  // 오버라이드 가능한 변수
                                  "$focus_override_up_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_up": "grindstone_input",

                                  // 오버라이드 가능한 변수
                                  "$focus_override_right_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_right": "grindstone_result"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "yields": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 가로/세로 크기
                            "size": [ "24.44444444444444%", "27.77777777777778%" ], // 22x15
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "arrow_icon@grindstone.arrow_icon": {
                                  // 가로/세로 크기
                                  "size": [ "100%", "100%" ],
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 3
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "cross_out_icon@grindstone.cross_out_icon": {
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 4
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "result_item_slot@rainbowpie_ui_inventory_and_container.container_item": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 가로/세로 크기
                            "size": [ "100%y", "33.33333333333333%" ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "grindstone_result_items",
                            // 오버라이드 가능한 변수
                            "$button_ref": "grindstone.grindstone_output_slot_button",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "grindstone_result",

                            // 오버라이드 가능한 변수
                            "$focus_override_left_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "grindstone_additional"
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
              "inventory@rainbowpie_ui_inventory_and_container.inventory_panel_bottom_half": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-14.90683229813665%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar@rainbowpie_ui_inventory_and_container.hotbar_grid_template": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "11.18012422360248%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.863354037267081%" ]
              }
            }
          ]
        }
      }
    ]
  }
}
```








### ui extras
horse_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: horse_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_horse",

  // 다른 템플릿을 가져와서 확장(상속)
  "equip_container_item@rainbowpie_ui_inventory_and_container.container_item": {
    // 가로/세로 크기
    "size": [ "100%", "100%x" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "container_item@rainbowpie_ui_inventory_and_container.container_item": {
    // 가로/세로 크기
    "size": [ "100%y", "33.33333333333333%" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "horse_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 161 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
      { "gamepad_cursor@common.gamepad_cursor_button": {} },
      { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "14.28571428571429%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "$container_title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border1_size": [ "2.380952380952381%", 0 ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title_border2_size": [ "2.380952380952381%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 14.28571428571429%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "top_half_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ], // 162x54
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-50.31055900621118%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "equip_grid": {
                      // 격자 컨테이너: 칸칸이 배치
                      "type": "grid",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 가로/세로 크기
                      "size": [ "11.11111111111111%", "66.66666666666667%" ],
                      // 목록 이름
                      "collection_name": "horse_equip_items",
                      // ??? ?? ?
                      "grid_item_template": "rainbowpieui_horse.equip_container_item",
                      // ??? ?? ?
                      "grid_dimension_binding": "#equip_grid_dimensions",
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "horse_equip_items",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#equip_grid_dimensions"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "saddle@horse.saddle_image": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 가로/세로 크기
                      "size": [ "100%y", "29.62962962962963%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "6.25%y", "1.851851851851852%" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#has_saddle_slot",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "armor_0@horse.armor_image": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 가로/세로 크기
                      "size": [ "100%y", "29.62962962962963%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "6.25%y", "1.851851851851852%" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#has_only_armor_slot",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "carpet_0@horse.carpet_image": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 가로/세로 크기
                      "size": [ "100%y", "29.62962962962963%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "6.25%y", "1.851851851851852%" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#has_only_carpet_slot",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "armor_1@horse.armor_image": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 가로/세로 크기
                      "size": [ "100%y", "29.62962962962963%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "6.25%y", "35.18518518518519%" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#has_armor_and_saddle_slot",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "carpet_1@horse.carpet_image": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 가로/세로 크기
                      "size": [ "100%y", "29.62962962962963%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "6.25%y", "35.18518518518519%" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#has_carpet_and_saddle_slot",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "renderer@horse.horse_renderer": {
                      // 가로/세로 크기
                      "size": [ "100%y", "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "11.11111111111111%", 0 ]
                    }
                  },
                  {
                    // ???/?? ??
                    "inv_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 기준점에서 이동하는 거리
                      "offset": [ "44.44444444444444%", 0 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "inv_grid": {
                            // 격자 컨테이너: 칸칸이 배치
                            "type": "grid",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_left",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_left",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 3,
                            // 목록 이름
                            "collection_name": "container_items",
                            // ??? ?? ?
                            "grid_item_template": "rainbowpieui_horse.container_item",
                            // ??? ?? ?
                            "grid_dimension_binding": "#inv_grid_dimensions",
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "container_items",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#inv_grid_dimensions"
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
              "inventory@rainbowpie_ui_inventory_and_container.inventory_panel_bottom_half": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "33.54037267080745%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-14.90683229813665%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar@rainbowpie_ui_inventory_and_container.hotbar_grid_template": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "11.18012422360248%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.863354037267081%" ]
              }
            }
          ]
        }
      }
    ]
  }
}
```








### ui extras
host_options_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: host_options_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_host_options",

  // ???/?? ??
  "color_picker": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 90 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_64981341)",
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#message_text_box_content"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('message:' + #message_text_box_content)",
        // 결과가 들어갈 속성
        "target_property_name": "#formatted_message_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('%.14s' * #formatted_message_text) = 'message:.color')",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
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
          "size": [ "100%c", "100%cm" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_btn1n3": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 52, 0 ]
              }
            },
            {
              // ???/?? ??
              "padding_btn2": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 26, 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#cheats_on",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_btnTabPrev": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 104, 0 ],
                // 완전히 제거(공간도 없음)
                "ignored": "(not $touch)"
              }
            },
            {
              // ???/?? ??
              "panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%cm", "100%cm" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "background@rainbowpie_ui_common.dialog_background": {
                      // 가로/세로 크기
                      "size": [ 120, 90 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "scrolling_panel@common.scrolling_panel": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_scrollbar_enabled": true,
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100% - 2px", "100%" ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, 0 ],
                            // 오버라이드 가능한 변수
                            "$scrolling_content": "rainbowpieui_host_options.color_picker_stack",
                            // 오버라이드 가능한 변수
                            "$scroll_size": [ 5, "100%-4px" ],
                            // 오버라이드 가능한 변수
                            "$scroll_bar_right_padding_size": [ 0, 0 ],
                            // 오버라이드 가능한 변수
                            "$scroll_bar_left_padding_size": [ 0, 0 ],
                            // 오버라이드 가능한 변수
                            "$show_background": false,
                            // 오버라이드 가능한 변수
                            "$always_handle_scrolling": false
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "a_song_about_life": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 120, 90 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 5 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 보이기/숨기기(공간 유지)
                      "visible": false,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 12,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#message_text_box_content"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "('message:' + #message_text_box_content)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#formatted_message_text"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#formatted_message_text = 'message:.color sing a song about life')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#subcmd_0"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#formatted_message_text = 'message:.color vylet pony')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#subcmd_1"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#formatted_message_text = 'message:.color a song about life')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#subcmd_2"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#formatted_message_text = 'message:.color antonymph')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#subcmd_3"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#formatted_message_text = 'message:.color antonymph of the internet')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#subcmd_4"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#subcmd_0 or #subcmd_1 or #subcmd_2 or #subcmd_3 or #subcmd_4)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "text@rainbowpie_ui_common.text_label": {
                            // 보여줄 글자
                            "text": "§csing a song about life§r\n§6sing a song about life§r\n§esing a song about life§r\n§asing a song about life§r\n§bsing a song about life§r\n§5sing a song about life§r"
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
  "color_picker_stack": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding_top": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 0, 2 ]
        }
      },
      {
        // ???/?? ??
        "title_text_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "title_text@rainbowpie_ui_common.text_label": {
                // 가로/세로 크기
                "size": [ "100% - 4px", "default" ],
                // 보여줄 글자
                "text": "rainbowpie.ui.host_options.color_picker",
                // ?? ??
                "text_alignment": "left",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "test@rainbowpieui_host_options.color_picker_item": {
          // 완전히 제거(공간도 없음)
          "ignored": true
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "black@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$0_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§0",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.black"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dark_blue@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$1_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§1",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.dark_blue"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dark_green@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$2_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§2",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.dark_green"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dark_aqua@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$3_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§3",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.dark_aqua"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dark_red@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$4_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§4",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.dark_red"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dark_purple@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$5_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§5",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.dark_purple"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "gold@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$6_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§6",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.gold"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "gray@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$7_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§7",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.gray"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dark_gray@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$8_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§8",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.dark_gray"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "blue@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$9_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§9",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.blue"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "green@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$a_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§a",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.green"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "aqua@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$b_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§b",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.aqua"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "red@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$c_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§c",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.red"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "light_purple@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$d_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§d",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.light_purple"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "yellow@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$e_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§e",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.yellow"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "white@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$f_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§f",
          // 오버라이드 가능한 변수
          "$color_picker_text": "color.white"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "minecoin_gold@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$coin_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§g",
          // 오버라이드 가능한 변수
          "$color_picker_text": "accessibility.minecoin"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_quartz@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_quartz_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§h",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.quartz.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_iron@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_iron_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§i",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.iron.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_netherite@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_netherite_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§j",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.netherite.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_redstone@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_redstone_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§m",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.redstone.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_copper@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_copper_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§n",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.copper.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_gold@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_gold_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§p",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.gold.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_emerald@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_emerald_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§q",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.emerald.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_diamond@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_diamond_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§s",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.diamond.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_lapis@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_lapis_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§t",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.lapis.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_amethyst@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_amethyst_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§u",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.amethyst.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "material_resin@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$material_resin_color",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§v",
          // 오버라이드 가능한 변수
          "$color_picker_text": "trim_material.resin.name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "obfuscated@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$f_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§k",
          // 오버라이드 가능한 변수
          "$color_picker_text": "§kobfuscated"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "bold@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$f_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§l",
          // 오버라이드 가능한 변수
          "$color_picker_text": "§lbold"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "italic@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$f_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§o",
          // 오버라이드 가능한 변수
          "$color_picker_text": "§oitalic"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "reset@rainbowpieui_host_options.color_picker_item": {
          // 오버라이드 가능한 변수
          "$color_picker_color": "$f_color_format",
          // 오버라이드 가능한 변수
          "$color_picker_code": "§r",
          // 오버라이드 가능한 변수
          "$color_picker_text": "reset"
        }
      }
    ]
  },

  // ???/?? ??
  "color_picker_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 19 ],
    // 오버라이드 가능한 변수
    "$color_picker_color|default": [ 1.0, 1.0, 0.0 ],
    // 오버라이드 가능한 변수
    "$color_picker_code|default": "default_code",
    // 오버라이드 가능한 변수
    "$color_picker_text|default": "Default Color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#message_text_box_content"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('message:' + #message_text_box_content)",
        // 결과가 들어갈 속성
        "target_property_name": "#formatted_message_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('%.15s' * #formatted_message_text) = 'message:.color ')",
        // 결과가 들어갈 속성
        "target_property_name": "#searching_code"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#formatted_message_text - ('%.15s' * #formatted_message_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#search_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((not #searching_code) or (#searching_code and (($color_picker_code - '§') = #search_text)))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.text_background": {
          // 가로/세로 크기
          "size": [ "100%", 18 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "color_picker_item_panel@rainbowpie_ui_common.editable_label": {
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // ??? ?? ?
                "text_box_name": "('color_picker_' + $color_picker_code)",
                // ??? ?? ?
                "text_control": "code_display_text",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "color_text_line": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 가로/세로 크기
                      "size": [ "100%", 10 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "padding_0": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 2, 0 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "color_preview_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "color_preview": {
                                  // 이미지 표시
                                  "type": "image",
                                  // 가로/세로 크기
                                  "size": [ 14, 14 ],
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "center",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "center",
                                  // 사용할 이미지 경로
                                  "texture": "textures/ui/White",
                                  // ?? (R,G,B,A)
                                  "color": "$color_picker_color",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 1
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "padding_1": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 2, 0 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "color_text@rainbowpie_ui_common.text_label_notheme": {
                            // 보여줄 글자
                            "text": "$color_picker_text",
                            // ?? (R,G,B,A)
                            "color": "$color_picker_color",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2
                          }
                        },
                        {
                          // ???/?? ??
                          "padding_2": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 2, 0 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "code_display_text@rainbowpie_ui_common.text_label_notheme": {
                            // 보여줄 글자
                            "text": "$color_picker_code",
                            // 가로/세로 크기
                            "size": [ "default", "default" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 8
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
              "tip_text@rainbowpie_ui_common.text_label_notheme": {
                // 보여줄 글자
                "text": "rainbowpie.ui.host_options.color_picker.tip",
                // ?? (R,G,B,A)
                "color": [ 0.5, 0.5, 0.5 ],
                // 기준점에서 이동하는 거리
                "offset": [ -2, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "independent_command_helper": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 90 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_fb3b5106)",
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#message_text_box_content"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('message:' + #message_text_box_content)",
        // 결과가 들어갈 속성
        "target_property_name": "#formatted_message_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('%.9s' * #formatted_message_text) = 'message:.')",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
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
          "size": [ "100%c", "100%cm" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_btn1n3": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 52, 0 ]
              }
            },
            {
              // ???/?? ??
              "padding_btn2": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 26, 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#cheats_on",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_btnTabPrev": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 104, 0 ],
                // 완전히 제거(공간도 없음)
                "ignored": "(not $touch)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "command_helper@rainbowpieui_host_options.command_helper": {}
            }
          ]
        }
      }

    ]
  },

  // ???/?? ??
  "command_helper": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.dialog_background": {
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "cmd_stack": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100%cm", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "color@rainbowpieui_host_options.command_helper_item": {
                      // 오버라이드 가능한 변수
                      "$command": "color",
                      // 오버라이드 가능한 변수
                      "$usage": "<colorCode>"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "time@rainbowpieui_host_options.command_helper_item": {
                      // 오버라이드 가능한 변수
                      "$command": "time"
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
  "command_helper_item@rainbowpie_ui_common.text_label_notheme": {
    // 가로/세로 크기
    "size": [ "default", "default" ],
    // 오버라이드 가능한 변수
    "$command|default": "cmd",
    // 오버라이드 가능한 변수
    "$usage|default": "",
    // 보여줄 글자
    "text": "('.' + $command + ' ' + $usage)",
    // 보이기/숨기기(공간 유지)
    "visible": true,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#message_text_box_content"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('message:' + #message_text_box_content)",
        // 결과가 들어갈 속성
        "target_property_name": "#formatted_message_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#formatted_message_text - 'message:.')",
        // 결과가 들어갈 속성
        "target_property_name": "#cmd_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(((not (#cmd_text = $command)) and (not (($command - #cmd_text) = $command))) or (#cmd_text = ''))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "host_sub_command_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 30 ],

    // 오버라이드 가능한 변수
    "$button_sub_command": "sub_command",

    // 오버라이드 가능한 변수
    "$button_text": "button_text",

    // 오버라이드 가능한 변수
    "$button_glyph_anchor_from": "left_middle",
    // 오버라이드 가능한 변수
    "$button_glyph_anchor_to": "left_middle",
    // 오버라이드 가능한 변수
    "$button_label_offset": [ 30, 0 ],

    // 오버라이드 가능한 변수
    "$button_glyph_texture": "",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "host_option_banner@host_options.main_dark_button": {
          // 오버라이드 가능한 변수
          "$glyph_size": [ "100%y", "100%" ],
          // 오버라이드 가능한 변수
          "$button_content_offset_glyph": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.sub_command",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#sub_command": "$button_sub_command"
          }
        }
      }
    ]
  },

  // ???/?? ??
  "advanced_host_friends_tab": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_host_options_advanced)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "all_players@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "@a",
          // 오버라이드 가능한 변수
          "$button_text": "commands.autocomplete.a"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "all_entities@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "@e",
          // 오버라이드 가능한 변수
          "$button_text": "commands.autocomplete.e"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "closest_player@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "@p",
          // 오버라이드 가능한 변수
          "$button_text": "commands.autocomplete.p"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "random_player@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "@r",
          // 오버라이드 가능한 변수
          "$button_text": "commands.autocomplete.r"
        }
      }
    ]
  },

  // ???/?? ??
  "advanced_host_weather_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_host_options_advanced)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "query@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "query",
          // 오버라이드 가능한 변수
          "$button_text": "query"
        }
      }
    ]
  },

  // ???/?? ??
  "advanced_host_time_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_1597ee9b or (not $rainbowpie_ui_flag_host_options_advanced))",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "1500@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "1500",
          // 오버라이드 가능한 변수
          "$button_text": "1500",
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_3noon"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "4000@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "4000",
          // 오버라이드 가능한 변수
          "$button_text": "4000",
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_3noon"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "8000@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "8000",
          // 오버라이드 가능한 변수
          "$button_text": "8000",
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_3noon"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "10000@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "10000",
          // 오버라이드 가능한 변수
          "$button_text": "10000",
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_3noon"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "15000@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "15000",
          // 오버라이드 가능한 변수
          "$button_text": "15000",
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_6midnight"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "16850@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "16850",
          // 오버라이드 가능한 변수
          "$button_text": "16850",
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_6midnight"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "19000@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "19000",
          // 오버라이드 가능한 변수
          "$button_text": "19000",
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_6midnight"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "20800@rainbowpieui_host_options.host_sub_command_button": {
          // 오버라이드 가능한 변수
          "$button_sub_command": "20800",
          // 오버라이드 가능한 변수
          "$button_text": "20800",
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_6midnight"
        }
      }
    ]
  },

  // ???/?? ??
  "host_weather_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "host_main_grid@host_options.host_grid": {
          // 오버라이드 가능한 변수
          "$grid_dimension_binding": "#host_weather_grid_dimension",
          // 오버라이드 가능한 변수
          "$grid_collection_name": "host_weather_collection",
          // 오버라이드 가능한 변수
          "$grid_item_template": "host_options.host_sub_command_grid_item"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "advanced_host_weather_panel@rainbowpieui_host_options.advanced_host_weather_panel": {}
      }
    ]
  },

  // ???/?? ??
  "time_tweaker_result_button_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_label@host_options.button_label": {
          // 오버라이드 가능한 변수
          "$button_text_color": "$text_color",
          // 오버라이드 가능한 변수
          "$button_label_anchor_from": "left_middle",
          // 오버라이드 가능한 변수
          "$button_label_anchor_to": "left_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 30, 0 ],
          // 보여줄 글자
          "text": "#time_text",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "rainbowpie_time_slider",
              // 계산식/참조 값
              "source_property_name": "#fin_time_int",
              // 결과가 들어갈 속성
              "target_property_name": "#fin_time_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('\"' + #fin_time_int + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#time_text"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "arrow@host_options.host_glyph_panel": {
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/arrowRight",
          // 오버라이드 가능한 변수
          "$offset_glyph": [ -4, 0 ],
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_from": "right_middle",
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_to": "right_middle",
          // 가로/세로 크기
          "size": [ 8, 8 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "time_1sunrise@host_options.host_glyph_panel": {
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_1sunrise",
          // 오버라이드 가능한 변수
          "$offset_glyph": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_from": "left_middle",
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "rainbowpie_time_slider",
              // 계산식/참조 값
              "source_property_name": "#slider_value_int",
              // 결과가 들어갈 속성
              "target_property_name": "#time_hour_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#time_hour_int > 4) and (#time_hour_int < 7))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "time_2day@host_options.host_glyph_panel": {
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_2day",
          // 오버라이드 가능한 변수
          "$offset_glyph": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_from": "left_middle",
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "rainbowpie_time_slider",
              // 계산식/참조 값
              "source_property_name": "#slider_value_int",
              // 결과가 들어갈 속성
              "target_property_name": "#time_hour_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#time_hour_int > 6) and (#time_hour_int < 11))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "time_3noon@host_options.host_glyph_panel": {
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_3noon",
          // 오버라이드 가능한 변수
          "$offset_glyph": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_from": "left_middle",
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "rainbowpie_time_slider",
              // 계산식/참조 값
              "source_property_name": "#slider_value_int",
              // 결과가 들어갈 속성
              "target_property_name": "#time_hour_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#time_hour_int > 10) and (#time_hour_int < 17))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "time_4sunset@host_options.host_glyph_panel": {
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_4sunset",
          // 오버라이드 가능한 변수
          "$offset_glyph": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_from": "left_middle",
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "rainbowpie_time_slider",
              // 계산식/참조 값
              "source_property_name": "#slider_value_int",
              // 결과가 들어갈 속성
              "target_property_name": "#time_hour_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#time_hour_int > 16) and (#time_hour_int < 19))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "time_5night@host_options.host_glyph_panel": {
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_5night",
          // 오버라이드 가능한 변수
          "$offset_glyph": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_from": "left_middle",
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "rainbowpie_time_slider",
              // 계산식/참조 값
              "source_property_name": "#slider_value_int",
              // 결과가 들어갈 속성
              "target_property_name": "#time_hour_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#time_hour_int > 18) and (#time_hour_int < 22))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "time_6midnight@host_options.host_glyph_panel": {
          // 오버라이드 가능한 변수
          "$button_glyph_texture": "textures/ui/time_6midnight",
          // 오버라이드 가능한 변수
          "$offset_glyph": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_from": "left_middle",
          // 오버라이드 가능한 변수
          "$button_glyph_anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "rainbowpie_time_slider",
              // 계산식/참조 값
              "source_property_name": "#slider_value_int",
              // 결과가 들어갈 속성
              "target_property_name": "#time_hour_int"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(((#time_hour_int > 21) and (#time_hour_int < 24)) or ((#time_hour_int > -1) and (#time_hour_int < 5)))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "host_options_advanced_host_time_tweaker": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_988450b0",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "advanced_host_time_tweaker@rainbowpieui_host_options.advanced_host_time_tweaker": {}
      }
    ]
  },

  // ???/?? ??
  "independent_advanced_host_time_tweaker": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 90 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_988450b0)",
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#message_text_box_content"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('message:' + #message_text_box_content)",
        // 결과가 들어갈 속성
        "target_property_name": "#formatted_message_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('%.17s' * #formatted_message_text) = 'message:/time set')",
        // 결과가 들어갈 속성
        "target_property_name": "#cmd_0"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('%.13s' * #formatted_message_text) = 'message:.time')",
        // 결과가 들어갈 속성
        "target_property_name": "#cmd_1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('%.11s' * #formatted_message_text) = 'message:.tt')",
        // 결과가 들어갈 속성
        "target_property_name": "#cmd_2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#cmd_0 or #cmd_1 or #cmd_2)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "advanced_host_time_tweaker@rainbowpieui_host_options.advanced_host_time_tweaker": {}
      }
    ]
  },

  // ???/?? ??
  "advanced_host_time_tweaker": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 기준점에서 이동하는 거리
    "offset": [ "100% + 16px", 0 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "right_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "right_middle",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_1597ee9b)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "debug01@rainbowpie_ui_common.debug_draw": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_debug_name": "advanced_host_time_tweaker"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.dialog_background": {
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "slider_title_stack": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%c", "10px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, 2 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title@rainbowpie_ui_common.text_label": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 보여줄 글자
                      "text": "rainbowpie.ui.host_options.time_title",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2
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
                    "time@rainbowpie_ui_common.text_label": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 보여줄 글자
                      "text": "#time_text",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "rainbowpie_time_slider",
                          // 계산식/참조 값
                          "source_property_name": "#slider_value_int",
                          // 결과가 들어갈 속성
                          "target_property_name": "#time_hour_int"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "('\"' + #time_hour_int + ':00' + '\"')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#time_text"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "rainbowpie_time_slider@common.slider": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_sliderbar_enabled": true,
                // 오버라이드 가능한 변수
                "$slider_name": "rainbowpie_time_slider",
                // 가로/세로 크기
                "size": [ "100% - 16px", "16px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 14 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#slider_steps": 24,
                  // ???/??? ?
                  "#slider_value_init": 0,
                  // ???/??? ?
                  "#slider_value_int": 0,
                  // ???/??? ?
                  "#days_int": 0,
                  // ???/??? ?
                  "#fin_time_int": 0
                },
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#slider_steps",
                    // 결과가 들어갈 속성
                    "target_property_name": "#slider_steps"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#slider_value_init",
                    // 결과가 들어갈 속성
                    "target_property_name": "#slider_value"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(((#slider_value_int > #slider_value) * - 1 + 1) * ((#slider_value_int < #slider_value) * 1 + #slider_value_int))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#slider_value_int"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((#slider_value_int < 6) * (18000 + 1000 * #slider_value_int) + (#slider_value_int > 6) * (#slider_value_int - 6) * 1000)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#time_int"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "time_tweaker_days_text",
                    // 계산식/참조 값
                    "source_property_name": "#item_name",
                    // 결과가 들어갈 속성
                    "target_property_name": "#days_str"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#days_str * 1)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#days_int"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((#days_int * 24000) + #time_int)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#fin_time_int"
                  }
                ]
              }
            },
            // max number = 89478
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "days_played@common.text_edit_box": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_editbox_enabled": true,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5,
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 0, 32 ],
                // 가로/세로 크기
                "size": [ "100% - 6px", 20 ],
                // 오버라이드 가능한 변수
                "$text_type": "NumberChars",
                // 오버라이드 가능한 변수
                "$text_box_name": "time_tweaker_days_text_box",
                // 오버라이드 가능한 변수
                "$text_edit_text_control": "time_tweaker_days_text",
                // 오버라이드 가능한 변수
                "$place_holder_text": "rainbowpie.ui.host_options.days_played",
                // ?? ?? ?
                "max_length": 32767,
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "(not $rainbowpie_ui_flag_988450b0)",
                    // 오버라이드 가능한 변수
                    "$text_edit_box_selected_to_button_id": "",
                    // 오버라이드 가능한 변수
                    "$text_edit_box_deselected_to_button_id": ""
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "note_text@rainbowpie_ui_common.text_label": {
                // 완전히 제거(공간도 없음)
                "ignored": true,
                // 가로/세로 크기
                "size": [ "100% - 4px", "default" ],
                // ?? ?? ?
                "max_size": [ "100% - 4px", "20px" ],
                // 보여줄 글자
                "text": "rainbowpie.ui.host_options.time_note",
                // ?? ??
                "text_alignment": "center",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "weather_button@host_options.main_dark_button": {
                // 가로/세로 크기
                "size": [ "100% - 4px", 30 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, -2 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpieui_host_options.time_tweaker_result_button_content",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "rainbowpie.sub_command",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            },
            {
              // ???/?? ??
              "weather_command": {
                // 마우스/커서 따라다니는 패널
                "type": "input_panel",
                // 가로/세로 크기
                "size": [ "100% - 4px", 30 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, -2 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 보이기/숨기기(공간 유지)
                "visible": false,
                // ?? ??
                "consume_hover_events": false,
                // 입력 키/버튼과 동작 연결
                "button_mappings": [
                  {
                    // 어떤 입력을 받을지
                    "from_button_id": "button.menu_select",
                    // 어떤 동작을 실행할지
                    "to_button_id": "button.sub_command",
                    // 입력 시점(pressed 등)
                    "mapping_type": "pressed",
                    // ?? ??
                    "consume_event": false
                  },
                  {
                    // 어떤 입력을 받을지
                    "from_button_id": "button.menu_ok",
                    // 어떤 동작을 실행할지
                    "to_button_id": "button.sub_command",
                    // 입력 시점(pressed 등)
                    "mapping_type": "pressed",
                    // ?? ??
                    "consume_event": false
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "rainbowpie_time_slider",
                    // 계산식/참조 값
                    "source_property_name": "#fin_time_int",
                    // 결과가 들어갈 속성
                    "target_property_name": "#fin_time_int"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('\"' + #fin_time_int + '\"')",
                    // 결과가 들어갈 속성
                    "target_property_name": "#sub_command"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#host_time_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "menu_navigation": {
                // 마우스/커서 따라다니는 패널
                "type": "input_panel",
                // 가로/세로 크기
                "size": [ "100% - 4px", 30 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, -2 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_988450b0)",
                // 보이기/숨기기(공간 유지)
                "visible": false,
                // ?? ??
                "consume_hover_events": false,
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#button_navigation": 6
                },
                // 입력 키/버튼과 동작 연결
                "button_mappings": [
                  {
                    // 어떤 입력을 받을지
                    "from_button_id": "button.menu_select",
                    // 어떤 동작을 실행할지
                    "to_button_id": "button.menu_navigation",
                    // 입력 시점(pressed 등)
                    "mapping_type": "pressed",
                    // ?? ??
                    "consume_event": false
                  },
                  {
                    // 어떤 입력을 받을지
                    "from_button_id": "button.menu_ok",
                    // 어떤 동작을 실행할지
                    "to_button_id": "button.menu_navigation",
                    // 입력 시점(pressed 등)
                    "mapping_type": "pressed",
                    // ?? ??
                    "consume_event": false
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #host_time_visible)",
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
  "host_time_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "host_main_grid@host_options.host_grid": {
          // 오버라이드 가능한 변수
          "$grid_dimension_binding": "#host_time_grid_dimension",
          // 오버라이드 가능한 변수
          "$grid_collection_name": "host_time_collection",
          // 오버라이드 가능한 변수
          "$grid_item_template": "host_options.host_sub_command_grid_item"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "advanced_host_time_panel@rainbowpieui_host_options.advanced_host_time_panel": {}
      }
    ]
  }
}
```








### ui extras
how_to_play_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: how_to_play_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_how_to_play",

  // ???/?? ??
  "how_to_play_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "#section_title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#section_title",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            }
          ]
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
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
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
                        { "selector_area@rainbowpieui_how_to_play.selector_area": {} },
                        { "content_area@rainbowpieui_how_to_play.content_area_wrapper": {} }
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
  "scrollable_selector_area_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점에서 이동하는 거리
    "offset": [ 1, 0 ],
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%c + 1px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "$selector_stack_panel@$selector_stack_panel": {} }
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
          "$scrolling_content": "rainbowpieui_how_to_play.scrollable_selector_area_content",
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
  "content_area_wrapper": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "68%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "content_area@rainbowpieui_how_to_play.content_area": {} }
    ]
  },

  // ???/?? ??
  "content_area": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
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
                "$scrolling_content": "$section_content_panels",
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
  }
}
```









[분할 목록으로 돌아가기](preview.html#example-view)

