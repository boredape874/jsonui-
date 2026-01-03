---
title: 예제 미리보기 (6/12)
outline: false
search: false
---

# 예제 미리보기 (6/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### ui extras
server_form_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.8.10286.1 (v1.21.50)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_server_form",

  // ???/?? ??
  "search_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "50%", "50%" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/serverform/search')"
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
    "$button_content": "rainbowpieui_server_form.search_icon",

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
    "$toggle_name": "rainbowpie_serverform_item_search",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

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
          "texture": "($rainbowpie_ui_path_theme + '/icon/serverform/search')",
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
  "ui_mode_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/serverform/ui_mode')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "vanilla_button@common_toggles.light_ui_toggle": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.serverform.vanilla_tip",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_offset": [ -10, -10 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_anchor": "top_right",
    // 완전히 제거(공간도 없음)
    "ignored": "((not $rainbowpie_localui_backup_screen) or ($screen_content = $rainbowpie_localui_backup_screen_content))",
    // ??/???
    "enabled": false,
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
    "$button_content": "rainbowpieui_server_form.ui_mode_icon",

    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.serverform.vanilla",

    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_serverformui_toggle",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 900,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 900,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "vanilla_serverform",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "vanilla_serverform",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#enabled"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "serverformui_button@rainbowpieui_server_form.vanilla_button": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.serverform.serverformui_tip",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.serverform.serverformui",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 901,
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "rainbowpie_serverformui",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "rainbowpie_serverformui",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#enabled"
      }
    ]
  },

  // ???/?? ??
  "custom_toggle": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "toggle@server_form.custom_toggle": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_toggle_enabled": true
        }
      }
    ]
  },

  // ???/?? ??
  "custom_slider": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "slider@server_form.custom_slider": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_sliderbar_enabled": true
        }
      }
    ]
  },

  // ???/?? ??
  "custom_step_slider": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "step_slider@server_form.custom_step_slider": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_sliderbar_enabled": true
        }
      }
    ]
  },

  // ???/?? ??
  "custom_dropdown": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dropdown@settings_common.option_dropdown": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_rainbowpiebutton_enabled": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_show_button": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_enabled": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dropdown_content_panel": "rainbowpieui_server_form.custom_dropdown_content_panel",

          // 오버라이드 가능한 변수
          "$option_label": "#custom_text",
          // 오버라이드 가능한 변수
          "$dropdown_content": "server_form.custom_dropdown_content",
          // 오버라이드 가능한 변수
          "$dropdown_area": "inside_header_panel",
          // 오버라이드 가능한 변수
          "$dropdown_name": "custom_dropdown",
          // 오버라이드 가능한 변수
          "$toggle_binding_type": "collection",
          // 오버라이드 가능한 변수
          "$toggle_grid_collection_name": "custom_form",
          // 오버라이드 가능한 변수
          "$options_dropdown_toggle_label_binding": "#dropdown_option_text",
          // 오버라이드 가능한 변수
          "$options_dropdown_toggle_label_binding_type": "collection",
          // 오버라이드 가능한 변수
          "$options_dropdown_toggle_label_binding_collection_name": "custom_form",
          // 오버라이드 가능한 변수
          "$dropdown_scroll_content_size": [ "100%", "200%" ],
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#custom_text",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "custom_form"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "custom_input": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "input@server_form.custom_input": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_editbox_enabled": true,
          // 오버라이드 가능한 변수
          "$max_text_edit_length": 32500
        }
      }
    ]
  },

  // ???/?? ??
  "custom_dropdown_content_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "fill", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "custom_dropdown_length@rainbowpie_ui_common.title_label": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_debug)",
          // ?? ??
          "shadow": true,
          // ?? ??
          "text_alignment": "left",
          // 보여줄 글자
          "text": "#custom_dropdown_length_str",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#custom_dropdown_length",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "custom_form"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('\"' + #custom_dropdown_length + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#custom_dropdown_length_str"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "normal": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 목록 아이템을 자동으로 생성
          "factory":{
            // ?? ??
            "name": "buttons",
            // ??? ???
            "control_name": "rainbowpieui_server_form.custom_dropdown_radio"
          },
          // 목록 이름
          "collection_name": "custom_dropdown",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#custom_dropdown_length",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#collection_length",
              // 목록 이름
              "binding_collection_name": "custom_form"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#collection_length > 4))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "many": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 목록 아이템을 자동으로 생성
          "factory":{
            // ?? ??
            "name": "buttons",
            // ??? ???
            "control_name": "rainbowpieui_server_form.custom_dropdown_radio_many"
          },
          // 목록 이름
          "collection_name": "custom_dropdown",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#custom_dropdown_length",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#collection_length",
              // 목록 이름
              "binding_collection_name": "custom_form"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#collection_length > 4)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "custom_dropdown_radio_many@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content_item_size": [ "22.22222222222222%", "default" ],
    // 오버라이드 가능한 변수
    "$toggle_name": "custom_dropdown_radio_toggle",
    // 오버라이드 가능한 변수
    "$toggle_state_binding_name": "#custom_radio_toggled",
    // 오버라이드 가능한 변수
    "$toggle_binding_type": "collection",
    // 오버라이드 가능한 변수
    "$toggle_grid_collection_name": "custom_dropdown",
    // 오버라이드 가능한 변수
    "$toggle_collection_details_type": "collection_details",

    // 오버라이드 가능한 변수
    "$radio_label_text": "#custom_radio_text",
    // 오버라이드 가능한 변수
    "$radio_label_bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#custom_radio_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "custom_dropdown"
      },
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "custom_dropdown_radio@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
    // 오버라이드 가능한 변수
    "$toggle_name": "custom_dropdown_radio_toggle",
    // 오버라이드 가능한 변수
    "$toggle_state_binding_name": "#custom_radio_toggled",
    // 오버라이드 가능한 변수
    "$toggle_binding_type": "collection",
    // 오버라이드 가능한 변수
    "$toggle_grid_collection_name": "custom_dropdown",
    // 오버라이드 가능한 변수
    "$toggle_collection_details_type": "collection_details",

    // 오버라이드 가능한 변수
    "$radio_label_text": "#custom_radio_text",
    // 오버라이드 가능한 변수
    "$radio_label_bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#custom_radio_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "custom_dropdown"
      },
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details"
      }
    ]
  },

  // ???/?? ??
  "main_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ????
    "clips_children": true,
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
              "screen_stack": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "200%", "100%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "screen_padding": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "50%", "100%" ],
                      // 보이기/숨기기(공간 유지)
                      "visible": true,
                      // 이 컨트롤 안에서 쓰는 임시 저장소
                      "property_bag": {
                        // ???/??? ?
                        "#is_vanilla_serverform_ui_opened": true
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "vanilla_serverform",
                          // 계산식/참조 값
                          "source_property_name": "#toggle_state",
                          // 결과가 들어갈 속성
                          "target_property_name": "#is_vanilla_serverform_ui_opened"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#is_vanilla_serverform_ui_opened)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_localui_backup_screen)"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "vanilla_serverform_ui": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "50%", "100%" ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "($screen_content = $rainbowpie_localui_backup_screen_content)",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "serverformui_button@rainbowpieui_server_form.serverformui_button": {
                            // 가로/세로 크기
                            "size": [ "28px", "28px" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ -8, -17 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_right",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_right",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 125,
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100%", "100%" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "server_form@$screen_content": {}
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "rainbowpie_serverform_ui": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "50%", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "vanilla_button@rainbowpieui_server_form.vanilla_button": {
                            // 가로/세로 크기
                            "size": [ "28px", "28px" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ -8, -17 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_right",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_right",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 30,
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100%", "100%" ]
                          }
                        },
                        {
                          // ???/?? ??
                          "server_form_factory": {
                            // 리스트를 자동으로 생성하는 공장
                            "type": "factory",
                            // ???/?? ??
                            "factory_variables": [
                              "$rainbowpie_localui_backup_screen"
                            ],
                            // 팩토리 템플릿 매핑
                            "control_ids": {
                              // ?? ??
                              "long_form": "@rainbowpieui_server_form.long_form",
                              // ?? ??
                              "custom_form": "@rainbowpieui_server_form.custom_form"
                            }
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

  // 다른 템플릿을 가져와서 확장(상속)
  "custom_form@rainbowpie_ui_dialog.dialog_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title": "#title_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title_bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#title_text"
      }
    ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_server_form.custom_form_dialog_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content": "rainbowpieui_server_form.custom_form_scrolling_panel",
    // 가로/세로 크기
    "size": [ 225, 200 ]
  },

  // ???/?? ??
  "custom_form_dialog_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "custom_form_button_stack_panel": {
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
              "submit_button@common_buttons.light_text_form_fitting_button": {
                // 오버라이드 가능한 변수
                "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_button_default_alpha": 0,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.submit_custom_form",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 오버라이드 가능한 변수
                "$button_text": "#submit_text",
                // 오버라이드 가능한 변수
                "$button_text_binding_type": "global",
                // 오버라이드 가능한 변수
                "$button_binding_condition": "once",
                // ??/???
                "enabled": true,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#submit_button_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "vanilla_serverform",
                    // 계산식/참조 값
                    "source_property_name": "#toggle_state",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_vanilla_serverform_ui_opened"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not #is_vanilla_serverform_ui_opened)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#enabled",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_localui_backup_screen)"
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
  "custom_form_scrolling_panel@common.scrolling_panel" : {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 오버라이드 가능한 변수
    "$show_background": false,
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scrolling_content": "rainbowpieui_server_form.custom_form_scrolling_content",
    // 오버라이드 가능한 변수
    "$scroll_size": [ 5, "100% - 4px" ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 2, 0 ],
    // 보이기/숨기기(공간 유지)
    "visible": true,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "vanilla_serverform",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#is_vanilla_serverform_ui_opened"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not #is_vanilla_serverform_ui_opened)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_localui_backup_screen)"
      }
    ]
  },

  // ???/?? ??
  "custom_form_scrolling_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100% - 4px", "100%c" ],
    // 기준점에서 이동하는 거리
    "offset": [ 2, 0 ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "generated_form@rainbowpieui_server_form.generated_contents": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "submit_button@common_buttons.light_text_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100% - 1px" ],
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.submit_custom_form",
          // 가로/세로 크기
          "size": [ "100%", 32 ],
          // 오버라이드 가능한 변수
          "$button_text": "#submit_text",
          // 오버라이드 가능한 변수
          "$button_text_binding_type": "global",
          // 오버라이드 가능한 변수
          "$button_binding_condition": "once",
          // ??/???
          "enabled": true,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#submit_button_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "vanilla_serverform",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_vanilla_serverform_ui_opened"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not #is_vanilla_serverform_ui_opened)",
              // 결과가 들어갈 속성
              "target_property_name": "#enabled",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_localui_backup_screen)"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "generated_contents": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": ["100%", "100%c"],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",

    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // 팩토리 템플릿 매핑
      "control_ids": {
        // ?? ??
        "label": "@rainbowpieui_server_form.custom_label",
        // ?? ??
        "toggle": "@rainbowpieui_server_form.custom_toggle",
        // ?? ??
        "slider": "@rainbowpieui_server_form.custom_slider",
        // ?? ??
        "step_slider": "@rainbowpieui_server_form.custom_step_slider",
        // ?? ??
        "dropdown": "@rainbowpieui_server_form.custom_dropdown",
        // ?? ??
        "input": "@rainbowpieui_server_form.custom_input",
        // ?? ??
        "header": "@rainbowpieui_server_form.custom_header",
        // ?? ??
        "divider": "@settings_common.option_group_section_divider"
      }
    },

    // 목록 이름
    "collection_name": "custom_form",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#custom_form_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
      }
    ]
  },

  // ???/?? ??
  "custom_label": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "custom_text@rainbowpie_ui_common.editable_label": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // ??? ?? ?
          "text_box_name": "custom_text",
          // ??? ?? ?
          "text_control": "custom_display_text",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "custom_display_text@rainbowpie_ui_common.text_label_notheme": {
                // ?? (R,G,B,A)
                "color": "$main_header_text_color",
                // 기준점에서 이동하는 거리
                "offset": [ 2, 2 ],
                // 가로/세로 크기
                "size": [ "100% - 4px", "default" ],
                // 보여줄 글자
                "text": "#custom_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings":[
                  {
                    // 가져올 값 이름
                    "binding_name": "#custom_text",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "custom_form"
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
  "custom_header": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "custom_text@rainbowpie_ui_common.editable_label": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // ??? ?? ?
          "text_box_name": "custom_text",
          // ??? ?? ?
          "text_control": "custom_display_text",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "custom_display_text@rainbowpie_ui_common.text_label_notheme": {
                // ?? (R,G,B,A)
                "color": "$main_header_text_color",
                // 기준점에서 이동하는 거리
                "offset": [ 2, 2 ],
                // 가로/세로 크기
                "size": [ "100% - 4px", "default" ],
                // 보여줄 글자
                "text": "#custom_text",
                // ?? ?? ?
                "font_size": "large",
                // 게임 값과 연결하는 규칙 목록
                "bindings":[
                  {
                    // 가져올 값 이름
                    "binding_name": "#custom_text",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "custom_form"
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
  "long_form@rainbowpie_ui_dialog.dialog_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title": "#title_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title_bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#title_text"
      }
    ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_server_form.long_form_dialog_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content": "rainbowpieui_server_form.long_form_scrolling_panel",
    // 가로/세로 크기
    "size": [ 225, 200 ]
  },

  // ???/?? ??
  "long_form_dialog_button": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "search_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
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
                    "back_button@rainbowpieui_server_form.search_button_toggle_base": {
                      // 오버라이드 가능한 변수
                      "$button_content": "rainbowpieui_server_form.hide_search_icon",
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
                      "$text_box_name": "serverform_search_text_box",
                      // 오버라이드 가능한 변수
                      "$text_edit_box_content_binding_name": "#serverform_search_text_box_item_name",
                      // 오버라이드 가능한 변수
                      "$text_edit_text_control": "serverform_search_text_box_display_text",
                      // 오버라이드 가능한 변수
                      "$place_holder_control": "rainbowpieui_server_form.search_box_place_holder_control",
                      // 오버라이드 가능한 변수
                      "$place_holder_text": "controller.buttonTip.enterSearch",
                      // 끝에서 다시 처음으로 순환
                      "focus_wrap_enabled": false,
                      // ?? ?? ?
                      "max_length": 32767,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 12,
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$rainbowpie_localui_backup_screen",
                          // 오버라이드 가능한 변수
                          "$text_edit_text_control": "serverform_search_text_box_display_text2"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "search_button@rainbowpieui_server_form.search_button_toggle_base": {
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
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "long_form_scrolling_panel@common.scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$show_background": false,
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scrolling_content": "rainbowpieui_server_form.long_form_scrolling_content",
    // 오버라이드 가능한 변수
    "$scroll_size": [ 3, "100% - 4px" ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 2, 0 ],
    // 보이기/숨기기(공간 유지)
    "visible": true,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "vanilla_serverform",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#is_vanilla_serverform_ui_opened"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not #is_vanilla_serverform_ui_opened)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_localui_backup_screen)"
      }
    ]
  },

  // ???/?? ??
  "long_form_scrolling_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100% - 4px", "100%c" ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c + 4px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "label_offset_text@rainbowpie_ui_common.editable_label": {
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // ??? ?? ?
                "text_box_name": "label_offset_text",
                // ??? ?? ?
                "text_control": "label_offset_display_text",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "label_offset_display_text@rainbowpie_ui_common.text_label_notheme": {
                      // ?? (R,G,B,A)
                      "color": "$main_header_text_color",
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, 2 ],
                      // 가로/세로 크기
                      "size": [ "100% - 4px", "default" ],
                      // 보여줄 글자
                      "text": "#form_text"
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
        "padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 4 ]
        }
      },
      {
        // ???/?? ??
        "wrapping_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "long_form_dynamic_buttons_panel@rainbowpieui_server_form.long_form_dynamic_buttons_panel": {}
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "long_form_dynamic_buttons_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100% - 4px", "100%c" ],
    // 기준점에서 이동하는 거리
    "offset": [ 2, 0 ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",

    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "rainbowpieui_server_form.form_button"
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
  "form_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100% - 1px" ],
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 가로/세로 크기
          "size": [ "100%", 32 ],
          // 오버라이드 가능한 변수
          "$button_content": "rainbowpieui_server_form.form_button_content",
          // 오버라이드 가능한 변수
          "$text_edit_text_control": "serverform_search_text_box_display_text",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$rainbowpie_localui_backup_screen",
              // 오버라이드 가능한 변수
              "$text_edit_text_control": "serverform_search_text_box_display_text2"
            }
          ],
          // 보이기/숨기기(공간 유지)
          "visible": true,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons",
              // 가져올 값 이름
              "binding_name": "#form_button_text"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('\"' + #hover_text - '\n' - '§0' - '§1' - '§2' - '§3' - '§4' - '§5' - '§6' - '§7' - '§8' - '§9' - '§a' - '§b' - '§c' - '§d' - '§e' - '§f' - '§g' - '§h' - '§i' - '§j' - '§k' - '§l' - '§m' - '§n' - '§o' - '§p' - '§q' - '§r' - '§s' - '§t' - '§u' - '§v' - '§w' - '§x' - '§y' - '§z' + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#formatted_text"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "$text_edit_text_control",
              // 계산식/참조 값
              "source_property_name": "#item_name",
              // 결과가 들어갈 속성
              "target_property_name": "#query_text"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#query_text = '') or (not ((#formatted_text - #query_text) = #formatted_text)))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "form_button_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "panel_name": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 34, 34 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "image",
              // ?? ??
              "resolve_sibling_scope": true,
              // 계산식/참조 값
              "source_property_name": "(not (#texture = ''))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ],

          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "image": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 가로/세로 크기
                "size": [ 30, 30 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings":[
                  {
                    // 가져올 값 이름
                    "binding_name": "#form_button_texture",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "form_buttons"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#form_button_texture_file_system",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture_file_system",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "form_buttons"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not ((#texture = '') or (#texture = 'loading')))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "progress@progress.progress_loading_bars": {
                // 가로/세로 크기
                "size": [ 30, 4 ],
                // 기준점에서 이동하는 거리
                "offset": [ -2, 16 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings":[
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "image",
                    // ?? ??
                    "resolve_sibling_scope": true,
                    // 계산식/참조 값
                    "source_property_name": "(#texture = 'loading')",
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
        "button_text_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100% - 68px", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "button_text@rainbowpie_ui_common.text_label_notheme": {
                // 보여줄 글자
                "text": "#form_button_text",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_localui_button_text_color",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // ?? ??
                "text_alignment": "center",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "form_buttons",
                    // 가져올 값 이름
                    "binding_name": "#form_button_text",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#form_button_text"
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
settings_common_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: settings_common_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_settings_common",

   // ???/?? ??
   "driven": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%", 1 ],
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_driven_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_driven_alpha",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "pack_warning_panel_destroy": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0,
    // ?? ??
    "destroy_at_end": "pack_warning",
    // ?? ??
    "play_event": "rainbowpie.close_pack_warning"
  },

  // ???/?? ??
  "rainbowpie_pack_warning_dialog_alert_content": {
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
                    "text_default@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "100% - 8px", "100% - 4px" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_content_color",
                      // 보여줄 글자
                      "text": "rainbowpie.ui.warning.text.default",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 이름
                          "binding_collection_name": "#selected_pack_items_global",
                          // 가져올 값 이름
                          "binding_name": "#has_errors",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 목록 이름
                          "binding_collection_name": "#selected_pack_items_global",
                          // 가져올 값 이름
                          "binding_name": "#has_warnings",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((not #has_warnings) and (not #has_errors))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "text_error@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "100% - 8px", "100% - 4px" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_content_color",
                      // 보여줄 글자
                      "text": "rainbowpie.ui.warning.text.error",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 이름
                          "binding_collection_name": "#selected_pack_items_global",
                          // 가져올 값 이름
                          "binding_name": "#has_errors",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 목록 이름
                          "binding_collection_name": "#selected_pack_items_global",
                          // 가져올 값 이름
                          "binding_name": "#has_warnings",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "#has_errors",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "text_warning@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "100% - 8px", "100% - 4px" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_content_color",
                      // 보여줄 글자
                      "text": "rainbowpie.ui.warning.text.warning",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 이름
                          "binding_collection_name": "#selected_pack_items_global",
                          // 가져올 값 이름
                          "binding_name": "#has_errors",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 목록 이름
                          "binding_collection_name": "#selected_pack_items_global",
                          // 가져올 값 이름
                          "binding_name": "#has_warnings",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "#has_warnings",
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
                      "size": [ "100% + 1px", "100%cm" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "deactivate_input_panel": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "50%", "23px" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 8,
                            // ?? ??
                            "consume_hover_events": false,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "#selected_pack_items_global",
                                // 목록 인덱스/현재 항목 정보 제공
                                "binding_type": "collection_details"
                              }
                            ],
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_select",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.move_left_global",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              },
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_ok",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.move_left_global",
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
                          "exit_settings_input_panel": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "50%", "23px" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 7,
                            // ?? ??
                            "consume_hover_events": false,
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_select",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.menu_exit",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              },
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_ok",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.menu_exit",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "check_button@common_buttons.light_text_button": {
                            // 오버라이드 가능한 변수
                            "$focus_id": "check_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_down": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_up": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.report_errors_global",
                            // 오버라이드 가능한 변수
                            "$button_text": "rainbowpie.ui.warning.button.check",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle",
                            // 가로/세로 크기
                            "size": [ "50%", 23 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 5,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "#selected_pack_items_global",
                                // 목록 인덱스/현재 항목 정보 제공
                                "binding_type": "collection_details"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "deactivate_button@common_buttons.light_text_button": {
                            // 오버라이드 가능한 변수
                            "$focus_id": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_down": "check_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_up": "check_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "check_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "check_button",
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "ranbowpie.move_left_global",
                            // 오버라이드 가능한 변수
                            "$button_text": "rainbowpie.ui.warning.button.deactivate",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "50%", 23 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 5
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
  "pack_warning_dialog_alert_content": {
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
                    // ???/?? ??
                    "pack_info_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "pack_icon": {
                            // 이미지 표시
                            "type": "image",
                            // ??? ?? ?
                            "allow_debug_missing_texture": false,
                            // ??? ?? ?
                            "force_texture_reload": true,
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 가로/세로 크기
                            "size": [ "100%y", "100%" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 4,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "#selected_pack_items_global",
                                // 가져올 값 이름
                                "binding_name": "#icon_path",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#texture",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 목록 이름
                                "binding_collection_name": "#selected_pack_items_global",
                                // 가져올 값 이름
                                "binding_name": "#icon_zip",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#zip_folder",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 목록 이름
                                "binding_collection_name": "#selected_pack_items_global",
                                // 가져올 값 이름
                                "binding_name": "#icon_file_system",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#texture_file_system",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_name@rainbowpie_ui_common.text_label": {
                            // 글자 표시
                            "type": "label",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 가로/세로 크기
                            "size": [ "default", 15 ],
                            // ?? ?? ?
                            "max_size": [ "100% - 54px", 15 ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 38, 0 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 보여줄 글자
                            "text": "#pack_name",
                            // ?? ?? ??
                            "font_scale_factor": 1.5,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "#selected_pack_items_global",
                                // 가져올 값 이름
                                "binding_name": "#name",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(((#name - '[PML]') - '[HOTFIX]') - '[UITheme]')",
                                // 결과가 들어갈 속성
                                "target_property_name": "#pack_name"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "error_text_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 가로/세로 크기
                            "size": [ "100%cm", "100%c" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ -8, 0 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "error_text": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 가로/세로 크기
                                  "size": [ "100%c", 10 ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "glyph_image_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "50%y", "100%" ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // ???/?? ??
                                            "glyph_image": {
                                              // 이미지 표시
                                              "type": "image",
                                              // 가로/세로 크기
                                              "size": [ "100%", "100%" ],
                                              // 기준점에서 이동하는 거리
                                              "offset": [ 0, 1 ],
                                              // 사용할 이미지 경로
                                              "texture": "textures/ui/ErrorGlyph"
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "padding_0@common.empty_panel": {
                                        // 가로/세로 크기
                                        "size": [ 1, 0 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "error_number@rainbowpie_ui_common.text_label": {
                                        // 가로/세로 크기
                                        "size": [ "default", "100%" ],
                                        // "font_type": "MinecraftTen",
                                        // "font_scale_factor": 0.8,
                                        "text": "#num_errors",
                                        // ?? (R,G,B,A)
                                        "color": "$error_text_color",
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#num_errors",
                                            // 목록 이름
                                            "binding_collection_name": "#selected_pack_items_global",
                                            // 목록 데이터를 반복 연결
                                            "binding_type": "collection"
                                          }
                                        ]
                                      }
                                    }
                                  ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 목록 이름
                                      "binding_collection_name": "#selected_pack_items_global",
                                      // 가져올 값 이름
                                      "binding_name": "#has_errors",
                                      // 가져온 값을 다른 속성으로 연결
                                      "binding_name_override": "#visible",
                                      // 목록 데이터를 반복 연결
                                      "binding_type": "collection"
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "warning_text": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 가로/세로 크기
                                  "size": [ "100%c", 10 ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "glyph_image_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "50%y", "100%" ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // ???/?? ??
                                            "glyph_image": {
                                              // 이미지 표시
                                              "type": "image",
                                              // 가로/세로 크기
                                              "size": [ "100%", "100%" ],
                                              // 기준점에서 이동하는 거리
                                              "offset": [ 0, 1 ],
                                              // 사용할 이미지 경로
                                              "texture": "textures/ui/WarningGlyph"
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "padding_0@common.empty_panel": {
                                        // 가로/세로 크기
                                        "size": [ 1, 0 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "warning_number@rainbowpie_ui_common.text_label": {
                                        // 가로/세로 크기
                                        "size": [ "default", "100%" ],
                                        // 보여줄 글자
                                        "text": "#num_warnings",
                                        // ?? (R,G,B,A)
                                        "color": "$warning_text_color",
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#num_warnings",
                                            // 목록 이름
                                            "binding_collection_name": "#selected_pack_items_global",
                                            // 목록 데이터를 반복 연결
                                            "binding_type": "collection"
                                          }
                                        ]
                                      }
                                    }
                                  ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 목록 이름
                                      "binding_collection_name": "#selected_pack_items_global",
                                      // 가져올 값 이름
                                      "binding_name": "#has_warnings",
                                      // 가져온 값을 다른 속성으로 연결
                                      "binding_name_override": "#visible",
                                      // 목록 데이터를 반복 연결
                                      "binding_type": "collection"
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
                    "content_text@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "100% - 8px", "100% - 34px" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 32 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_content_color",
                      // 보여줄 글자
                      "text": "rainbowpie.ui.warning.3rdparty.text"
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
                      "size": [ "100% + 1px", "100%cm" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "deactivate_input_panel": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "50%", "23px" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 8,
                            // ?? ??
                            "consume_hover_events": false,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "#selected_pack_items_global",
                                // 목록 인덱스/현재 항목 정보 제공
                                "binding_type": "collection_details"
                              }
                            ],
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_select",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.move_left_global",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              },
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_ok",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.move_left_global",
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
                          "exit_settings_input_panel": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "50%", "23px" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 7,
                            // ?? ??
                            "consume_hover_events": false,
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_select",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.menu_exit",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              },
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_ok",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.menu_exit",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // ?? ??
                                "consume_event": false
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "check_button@common_buttons.light_text_button": {
                            // 오버라이드 가능한 변수
                            "$focus_id": "check_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_down": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_up": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.report_errors_global",
                            // 오버라이드 가능한 변수
                            "$button_text": "rainbowpie.ui.warning.button.check",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle",
                            // 가로/세로 크기
                            "size": [ "50%", 23 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 5,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "#selected_pack_items_global",
                                // 목록 인덱스/현재 항목 정보 제공
                                "binding_type": "collection_details"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "deactivate_button@common_buttons.light_text_button": {
                            // 오버라이드 가능한 변수
                            "$focus_id": "deactivate_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_down": "check_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_up": "check_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "check_button",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "check_button",
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "ranbowpie.move_left_global",
                            // 오버라이드 가능한 변수
                            "$button_text": "rainbowpie.ui.warning.button.deactivate",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "50%", 23 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 5
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
  "pack_warning_status_check": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "modal_input@common.input_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 100,
          // 보이기/숨기기(공간 유지)
          "visible": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "rainbowpie_pack_warning_dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
                // 가로/세로 크기
                "size": [ 204, 132 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 100,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "$mintui_pack_name",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_settings_common.rainbowpie_pack_warning_dialog_alert_content",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_show_background": false,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_show_close": true,
                // 오버라이드 가능한 변수
                "$close_button_to_button_id": "rainbowpie.close_pack_warning",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#name",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "#selected_pack_items_global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#description",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "#selected_pack_items_global"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((#name = $mintui_pack_name) and (#description = $mintui_pack_description))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pack_warning_dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
                // 가로/세로 크기
                "size": [ 204, 132 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 100,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "rainbowpie.ui.warning.3rdparty.title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_settings_common.pack_warning_dialog_alert_content",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_show_background": false,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_show_close": true,
                // 오버라이드 가능한 변수
                "$close_button_to_button_id": "rainbowpie.close_pack_warning",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#name",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "#selected_pack_items_global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#description",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "#selected_pack_items_global"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not ((#name = $mintui_pack_name) and (#description = $mintui_pack_description)))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background2@rainbowpie_popup_dialog.background_panel_design2": {}
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
              "to_button_id": "rainbowpie.close_pack_warning",
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
    ],
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ???/??? ?
      "#pack_warning_visible": true
    },
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#name",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "#selected_pack_items_global"
      },
      {
        // 가져올 값 이름
        "binding_name": "#description",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "#selected_pack_items_global"
      },
      {
        // 목록 이름
        "binding_collection_name": "#selected_pack_items_global",
        // 가져올 값 이름
        "binding_name": "#has_errors",
        // 목록 데이터를 반복 연결
        "binding_type": "collection"
      },
      {
        // 목록 이름
        "binding_collection_name": "#selected_pack_items_global",
        // 가져올 값 이름
        "binding_name": "#has_warnings",
        // 목록 데이터를 반복 연결
        "binding_type": "collection"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#has_warnings or #has_errors)",
        // 결과가 들어갈 속성
        "target_property_name": "#pack_warning_visible",
        // 완전히 제거(공간도 없음)
        "ignored": "$rainbowpie_ui_debug_errcheck_debug"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#name = $mintui_pack_name) and (#description = $mintui_pack_description))",
        // 결과가 들어갈 속성
        "target_property_name": "#is_rainbowpie_pack"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#is_rainbowpie_pack and #pack_warning_visible) or (not #is_rainbowpie_pack and #has_errors))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "settings_overlay_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "pack_warning": {
          // 보이기/숨기기(공간 유지)
          "visible": "($is_packs_enabled and $include_controls_and_settings_sections)",
          // 완전히 제거(공간도 없음)
          "ignored": "((not $is_pregame) or (not $rainbowpie_ui_flag_135972c6))",
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpieui_settings_common.pack_warning_panel_destroy"
          ],
          // 목록 이름
          "collection_name": "#selected_pack_items_global",
          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "selected_pack_factory",
            // ??? ???
            "control_name": "rainbowpieui_settings_common.pack_warning_status_check"
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#selected_grid_dimensions_global",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#collection_length"
            },
            {
              // 가져올 값 이름
              "binding_name": "#selected_pack_items_global"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "settings_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_feature_markbest",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_toggle_enabled": true,
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_sliderbar_enabled": true,
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_editbox_enabled": true
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_ingame_anim1": "($rainbowpie_ui_flag_8dcce82d and $rainbowpie_ui_flag_fbadd01f and $is_pregame)",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "#dialog_title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#dialog_title"
            }
          ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_content_panel": "rainbowpieui_settings_common.header_controls_panel"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "blur_layer@mintui_background.background_blur": {
          // 완전히 제거(공간도 없음)
          "ignored": "$rainbowpie_ui_flag_3e35fb2e",
          // 오버라이드 가능한 변수
          "$background_offset": [ "-62%", 20 ],
          // 오버라이드 가능한 변수
          "$background_children_offset": [ "62%", -20 ],
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
          "$background_offset": [ "-62%", 20 ],
          // 오버라이드 가능한 변수
          "$background_children_offset": [ "62%", -20 ],
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
          "$rainbowpie_localui_screen_ingame_anim1": "($rainbowpie_ui_flag_8dcce82d and $rainbowpie_ui_flag_fbadd01f and $is_pregame)",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
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
                "size": [ "38%", "100% - 20px" ],
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
                "size": [ "62%", "100% - 20px" ],
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
              // 다른 템플릿을 가져와서 확장(상속)
              "selector_area@settings_common.selector_area": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_scrollbar_enabled": true
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "content_area@settings_common.content_area": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_scrollbar_enabled": true
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "header_controls_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_settings_header_extra_controls|default": "common.empty_panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "section_title_label@rainbowpieui_settings_common.section_title_label": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "copy_and_delete_button@rainbowpieui_settings_common.copy_and_delete_button": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // ???/?? ??
  "icon_delete": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 16, 16 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/settings/world_edit/delete')",
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "icon_copy": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 12, 12 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/settings/world_edit/copy')",
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "copy_and_delete_button": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 기준점(어디에서 시작할지)
    "anchor_from": "right_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "right_middle",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 보이기/숨기기(공간 유지)
    "visible": "$is_world_edit",
    // 완전히 제거(공간도 없음)
    "ignored": "$include_controls_and_settings_sections",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "copy_button@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "copy_world_button",
          // 오버라이드 가능한 변수
          "$button_content": "rainbowpieui_settings_common.icon_copy",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "delete_button@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "delete_world_button",
          // 오버라이드 가능한 변수
          "$button_content": "rainbowpieui_settings_common.icon_delete",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "section_title_label@rainbowpie_ui_common.text_label_notheme": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "right_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "right_middle",
    // 가로/세로 크기
    "size": [ "62%", "default" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_topbar_text_color",
    // 보여줄 글자
    "text": "#section_title",
    // ?? ??
    "text_alignment": "center",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#section_title"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_option_toggle_state_template@settings_common.option_toggle_state_template": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_size|default": [ 30, 16 ],
    // 가로/세로 크기
    "size": "$rainbowpie_localui_toggle_size",
    // 기준점(어디에서 시작할지)
    "anchor_from": "$rainbowpie_localui_toggle_anchor",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "$rainbowpie_localui_toggle_anchor",

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_color": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_alpha": 1.0,

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_anchor|default": "left_middle",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_state_text|default": "OFF",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_state_text_on|default": "ON",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_state_color|default": [ 1.0, 0.333, 0.333 ],

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_state": false,

    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_localui_button_color",
    // ???
    "alpha": "$rainbowpie_localui_button_alpha",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "state_text@rainbowpie_ui_common.text_label_notheme": {
          // 보여줄 글자
          "text": "$rainbowpie_localui_state_text",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_state_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$rainbowpie_localui_toggle_state",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_state_text": "$rainbowpie_localui_state_text_on",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_state_color": [ 0.333, 1.0, 0.333 ]
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_option_toggle_on@rainbowpieui_settings_common.rainbowpie_ui_option_toggle_state_template": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_state": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_color": "$rainbowpie_ui_theme_button_background_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_alpha": "$rainbowpie_ui_theme_button_background_default_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_option_toggle_off@rainbowpieui_settings_common.rainbowpie_ui_option_toggle_state_template": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_color": "$rainbowpie_ui_theme_button_background_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_alpha": "$rainbowpie_ui_theme_button_background_default_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_option_toggle_on_hover@rainbowpieui_settings_common.rainbowpie_ui_option_toggle_state_template": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_state": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_color": "$rainbowpie_ui_theme_button_background_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_alpha": "$rainbowpie_ui_theme_button_background_hover_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_option_toggle_off_hover@rainbowpieui_settings_common.rainbowpie_ui_option_toggle_state_template": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_color": "$rainbowpie_ui_theme_button_background_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_alpha": "$rainbowpie_ui_theme_button_background_hover_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_option_toggle_on_locked@rainbowpieui_settings_common.rainbowpie_ui_option_toggle_state_template": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_state": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_color": "$rainbowpie_ui_theme_button_background_locked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_alpha": "$rainbowpie_ui_theme_button_background_locked_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_option_toggle_off_locked@rainbowpieui_settings_common.rainbowpie_ui_option_toggle_state_template": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_color": "$rainbowpie_ui_theme_button_background_locked_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_alpha": "$rainbowpie_ui_theme_button_background_locked_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_toggle_unchecked@rainbowpieui_settings_common.rainbowpie_ui_toggle_button": {
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
  "rainbowpie_ui_toggle_checked@rainbowpieui_settings_common.rainbowpie_ui_toggle_button": {
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
  "rainbowpie_ui_toggle_unchecked_hover@rainbowpieui_settings_common.rainbowpie_ui_toggle_button": {
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
  "rainbowpie_ui_toggle_checked_hover@rainbowpieui_settings_common.rainbowpie_ui_toggle_button": {
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
  "rainbowpie_ui_toggle_unchecked_locked@rainbowpieui_settings_common.rainbowpie_ui_toggle_button": {
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
  "rainbowpie_ui_toggle_checked_locked@rainbowpieui_settings_common.rainbowpie_ui_toggle_button": {
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
  "rainbowpie_ui_toggle_button@rainbowpie_ui_button.rainbowpie_ui_button_default": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": 1.0,
    // 오버라이드 가능한 변수
    "$check_state|default": false,
    // 오버라이드 가능한 변수
    "$button_image_size|default": [ "100%", "100%" ],
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
        "left_image": {
          // 이미지 표시
          "type": "image",
          // 보이기/숨기기(공간 유지)
          "visible": "$check_state",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": [ 2, "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_toggle_btbar_color",
          // ???
          "alpha": "$rainbowpie_localui_toggle_btbar_alpha"
        }
      },
      {
        // ???/?? ??
        "button_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 오버라이드 가능한 변수
          "$button_content_size|default": [ "100% - 6px", "100% - 6px" ],
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
  "rainbowpie_ui_dropdown_radio_visuals_unchecked@rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals": {
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
  "rainbowpie_ui_dropdown_radio_visuals_checked@rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals": {
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
  "rainbowpie_ui_dropdown_radio_visuals_unchecked_hover@rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals": {
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
  "rainbowpie_ui_dropdown_radio_visuals_checked_hover@rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals": {
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
  "rainbowpie_ui_dropdown_radio_visuals_unchecked_locked@rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals": {
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
  "rainbowpie_ui_dropdown_radio_visuals_checked_locked@rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals": {
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
  "rainbowpie_ui_dropdown_radio_visuals@rainbowpie_ui_button.rainbowpie_ui_button_default": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_color|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_btbar_alpha|default": 1.0,
    // 오버라이드 가능한 변수
    "$check_state|default": false,
    // 오버라이드 가능한 변수
    "$hover_state|default": false,
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_radio_image|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_radio_image_texture|default": "",
    // 오버라이드 가능한 변수
    "$radio_label_bindings|default": [],
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
        "bottom_image": {
          // 이미지 표시
          "type": "image",
          // 보이기/숨기기(공간 유지)
          "visible": "($check_state or ($hover_state and $game_pad))",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": [ "100%", 2 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_toggle_btbar_color",
          // ???
          "alpha": "$rainbowpie_localui_toggle_btbar_alpha"
        }
      },
      {
        // ???/?? ??
        "button_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 오버라이드 가능한 변수
          "$button_content_size|default": [ "100% - 6px", "100% - 6px" ],
          // 가로/세로 크기
          "size": "$button_content_size",

          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "icon_image": {
                // 보이기/숨기기(공간 유지)
                "visible": "$rainbowpie_localui_dropdown_radio_image",
                // 이미지 표시
                "type": "image",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_localui_button_text_color",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_localui_dropdown_radio_image_texture",
                // 가로/세로 크기
                "size": [ 16, 16 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "radio_label@rainbowpie_ui_common.text_label_notheme": {
                // 완전히 제거(공간도 없음)
                "ignored": "$rainbowpie_localui_dropdown_radio_image",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // ?? ??
                "text_alignment": "center",
                // 보여줄 글자
                "text": "$radio_label_text",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_localui_button_text_color",
                // 가로/세로 크기
                "size": [ "100%", "default" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": "$radio_label_bindings",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "rainbowpie_ui_radio_with_label": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content_item_size|default": [ "fill", "default" ],
    // 가로/세로 크기
    "size": "$rainbowpie_localui_dropdown_content_item_size",
    // 오버라이드 가능한 변수
    "$enabled|default": true,
    // 오버라이드 가능한 변수
    "$toggle_state_binding_name|default": "none",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "rainbowpie_ui_radio_with_label_core@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label_core": {} }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_radio_with_label_core@common.radio_toggle": {
    // 오버라이드 가능한 변수
    "$focus_override_down": "",
    // 오버라이드 가능한 변수
    "$focus_override_up": "",
    // 오버라이드 가능한 변수
    "$focus_override_left": "",
    // 오버라이드 가능한 변수
    "$focus_override_right": "",
    // 오버라이드 가능한 변수
    "$unchecked_control": "rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals_unchecked",
    // 오버라이드 가능한 변수
    "$checked_control": "rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals_checked",
    // 오버라이드 가능한 변수
    "$unchecked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals_unchecked_hover",
    // 오버라이드 가능한 변수
    "$checked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals_checked_hover",
    // 오버라이드 가능한 변수
    "$unchecked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals_unchecked_locked",
    // 오버라이드 가능한 변수
    "$unchecked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals_unchecked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_control": "rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals_checked_locked",
    // 오버라이드 가능한 변수
    "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_dropdown_radio_visuals_checked_locked",
    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name|default": "$toggle_state_binding_name",
    // 오버라이드 가능한 변수
    "$toggle_enabled_binding_name": "$option_enabled_binding_name",

    // ??/???
    "enabled": "$enabled",
    // 오버라이드 가능한 변수
    "$toggle_enabled_binding_type": "global",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $option_enabled_binding_name or not $enabled)",
        // 오버라이드 가능한 변수
        "$toggle_enabled_binding_name": "#not_data_bound",
        // 오버라이드 가능한 변수
        "$toggle_enabled_binding_type": "none"
      }
    ]
  }
}
```








### ui extras
sidebar_navigation_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: sidebar_navigation_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_sidebar_navigation",

  // ???/?? ??
  "sidebar_and_blur_background_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ????
    "clips_children": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "simple_sidebar_background_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "background_overlay": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 32, "100%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$color",
                // ???
                "alpha": "$alpha",
                // 오버라이드 가능한 변수
                "$color|default": [ 0.0, 0.0, 0.0 ],
                // 오버라이드 가능한 변수
                "$alpha|default": 0.3,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "(not $rainbowpie_ui_feature_background_blur and $is_pregame)",
                    // 오버라이드 가능한 변수
                    "$color": "$rainbowpie_ui_theme_sidebar_oqaque_background_color",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_sidebar_oqaque_background_alpha"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($rainbowpie_ui_feature_background_blur and $is_pregame)",
                    // 오버라이드 가능한 변수
                    "$color": "$rainbowpie_ui_theme_sidebar_background_color",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_sidebar_background_alpha"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "(not $is_pregame)",
                    // 오버라이드 가능한 변수
                    "$color": "$rainbowpie_ui_theme_sidebar_oqaque_background_color",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_sidebar_oqaque_background_alpha"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer@mintui_background.background_blur": {
                // 가로/세로 크기
                "size": [ "100%", "100% + 20px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 오버라이드 가능한 변수
                "$background_offset": [ "-100% + 32px", 0 ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "100% - 32px", 0 ],
                // 오버라이드 가능한 변수
                "$background_layer": 1
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "mask_layer@mintui_background.background_mask": {
                // 가로/세로 크기
                "size": [ "100%", "100% + 20px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 오버라이드 가능한 변수
                "$background_offset": [ "-100% + 32px", 0 ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "100% - 32px", 0 ],
                // 오버라이드 가능한 변수
                "$background_layer": 1
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#is_simple_sidebar_state_active",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "verbose_sidebar_background_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "background_overlay": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "142px", "100%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$color",
                // ???
                "alpha": "$alpha",
                // 오버라이드 가능한 변수
                "$color|default": [ 0.0, 0.0, 0.0 ],
                // 오버라이드 가능한 변수
                "$alpha|default": 0.3,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "(not $rainbowpie_ui_feature_background_blur and $is_pregame)",
                    // 오버라이드 가능한 변수
                    "$color": "$rainbowpie_ui_theme_sidebar_verbose_oqaque_background_color",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_sidebar_verbose_oqaque_background_alpha"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($rainbowpie_ui_feature_background_blur and $is_pregame)",
                    // 오버라이드 가능한 변수
                    "$color": "$rainbowpie_ui_theme_sidebar_verbose_background_color",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_sidebar_verbose_background_alpha"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "(not $is_pregame)",
                    // 오버라이드 가능한 변수
                    "$color": "$rainbowpie_ui_theme_sidebar_verbose_oqaque_background_color",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_sidebar_verbose_oqaque_background_alpha"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer@mintui_background.background_blur": {
                // 가로/세로 크기
                "size": [ "100%", "100% + 20px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 오버라이드 가능한 변수
                "$background_offset": [ "-100% + 142px", 0 ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "100% - 142px", 0 ],
                // 오버라이드 가능한 변수
                "$background_layer": -4
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "mask_layer@mintui_background.background_mask": {
                // 가로/세로 크기
                "size": [ "100%", "100% + 20px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 오버라이드 가능한 변수
                "$background_offset": [ "-100% + 142px", 0 ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "100% - 142px", 0 ],
                // 오버라이드 가능한 변수
                "$background_layer": -4
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "(not #is_simple_sidebar_state_active)",
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








### ui extras
sign_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: sign_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_sign",

  // ???/?? ??
  "sign_screen_content": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "sign_screen_content@sign.sign_screen_content": {
                // 완전히 제거(공간도 없음)
                "ignored": "($rainbowpie_ui_flag_sign_edit_preview_enabled)"
              }
            },
            {
              // ???/?? ??
              "sign_edit_preview_screen_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_sign_edit_preview_enabled)",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "maximized_input_dialog@rainbowpieui_sign.maximized_input_dialog": {} },
                  { "sign_preview_panel@rainbowpieui_sign.sign_preview_panel": {} },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "exit_menu_input_panel@common.input_panel": {
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
  "sign_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "$sign_texture",
    // 가로/세로 크기
    "size": [ 94.08, 45.57 ],
    // 기준점에서 이동하는 거리
    "offset": [ -0.49, -1.15 ]
  },

  // ???/?? ??
  "hanging_sign_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "$sign_texture",
    // 가로/세로 크기
    "size": [ 146.37, 72.93 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -15.16 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "regular_sign_text_multiline@sign.base_sign_text_multiline": {
    // 가로/세로 크기
    "size": [ 90.65, 44.1 ], // * 0.49
    // 오버라이드 가능한 변수
    "$text_background_default": "rainbowpieui_sign.sign_background",
    // 오버라이드 가능한 변수
    "$text_background_hover": "rainbowpieui_sign.sign_background"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hanging_sign_text_multiline@sign.base_sign_text_multiline": {
    // 가로/세로 크기
    "size": [ 64.26, 45.9 ], // * 0.51
    // 오버라이드 가능한 변수
    "$text_background_default": "rainbowpieui_sign.hanging_sign_background",
    // 오버라이드 가능한 변수
    "$text_background_hover": "rainbowpieui_sign.hanging_sign_background"
  },

  // ???/?? ??
  "sign_preview_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 96, 48 ],
    // 기준점에서 이동하는 거리
    "offset": [ -78, 0 ],
    // 오버라이드 가능한 변수
    "$sign_preview_panel_control": "('rainbowpieui_' + $sign_text_multiline)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "text_edit@$sign_preview_panel_control": {
          // 오버라이드 가능한 변수
          "$font_size": "normal",
          // ?? ??
          "selected": false,
          // 포커스 가능 여부
          "focus_enabled": false,
          // ?? ??
          "consume_event": false
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "maximized_input_dialog@rainbowpie_ui_dialog.dialog_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content": "rainbowpieui_sign.maximized_input_dialog_content",
    // 가로/세로 크기
    "size": [ 160, 130 ],
    // 기준점에서 이동하는 거리
    "offset": [ 54, 0 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 110,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      // 我也不知道下面这段代码是如何运作的
      {
        // 이 조건이 맞으면 적용
        "requires": "($sign_text_multiline = 'sign.regular_sign_text_multiline')",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dialogheader_title": "(('item.' + (($sign_texture - 'textures/ui/') - 'sign_' - '_sign') + '_sign.name') - 'sign_')"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "($sign_text_multiline = 'sign.hanging_sign_text_multiline')",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dialogheader_title": "((((('item.' + (($sign_texture - 'textures/ui/hanging_sign_') - 'darkoak') + '.___..dark_oak' + '__._oak_hanging_sign.name') - '..___.') - '.___..dark_oak') - 'textures/ui/hanging_sign__._') - '_._oak_')"
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
        "sign_text_multiline@common.multiline_text_edit_box": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_editbox_enabled": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // ?? ??
          "selected": true,
          // ?? ??
          "can_be_deselected": false,
          // 오버라이드 가능한 변수
          "$text_box_name": "#sign_text_multi",
          // ?? ?? ?
          "max_length": 32500,
          // 오버라이드 가능한 변수
          "$text_edit_box_content_binding_name": "#sign_text"
        }
      }
    ]
  }
}
```








### ui extras
smithing_table_2_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: smithing_table_2_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_smithing_table_2",

  // ???/?? ??
  "smithing_preview_turn_back_anim": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_quart",
    // 걸리는 시간(초)
    "duration": 0.35,
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "-50%x", 0 ],
    // ?? ??
    "play_event": "rainbowpie.smithing_preview_turn_back"
  },

  // ???/?? ??
  "smithing_preview_turn_front_anim": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_quart",
    // 걸리는 시간(초)
    "duration": 0.35,
    // 시작 값
    "from": [ "-50%x", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "rainbowpie.smithing_preview_turn_front"
  },

  // ???/?? ??
  "smithing_preview_reset_anim": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ]
  },

  // ???/?? ??
  "turn_front_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/chevron_left",
    // 가로/세로 크기
    "size": [ "88.88888888888889%", "88.88888888888889%" ],
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "turn_back_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/chevron_right",
    // 가로/세로 크기
    "size": [ "88.88888888888889%", "88.88888888888889%" ],
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "result_item_preview": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // Base Size: 18x18
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "turn_front@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "rainbowpie.smithing_preview_turn_front",
          // 오버라이드 가능한 변수
          "$button_content": "rainbowpieui_smithing_table_2.turn_front_icon",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 가로/세로 크기
          "size": [ "66.66666666666667%", "100%x" ], // 12x12
          // 기준점에서 이동하는 거리
          "offset": [ "-116.6666666666667%x", "16.66666666666667%y" ] //-14x2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "turn_back@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "rainbowpie.smithing_preview_turn_back",
          // 오버라이드 가능한 변수
          "$button_content": "rainbowpieui_smithing_table_2.turn_back_icon",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 가로/세로 크기
          "size": [ "66.66666666666667%", "100%x" ], // 12x12
          // 기준점에서 이동하는 거리
          "offset": [ "150%y", "16.66666666666667%y" ]
        }
      },
      {
        // ???/?? ??
        "preview_outer_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "166.6666666666667%", "200%x" ], // 30x60
          // 기준점에서 이동하는 거리
          "offset": [ "6.666666666666667%x", 0 ],
          // ?? ????
          "clips_children": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "preview_outer_panel2": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 가로/세로 크기
                "size": [ "200%", "100%" ], // 30x60
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // ????? ?? ?
                "animation_reset_name": "rainbowpie.smithing_preview_turn_front",
                // 애니메이션 목록
                "anims": [
                  "@rainbowpieui_smithing_table_2.smithing_preview_reset_anim",
                  "@rainbowpieui_smithing_table_2.smithing_preview_turn_back_anim"
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "debug01@rainbowpie_ui_common.debug_draw": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_debug_name": "outer_panel2"
                    }
                  },
                  {
                    // ???/?? ??
                    "preview_stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // ????? ?? ?
                      "animation_reset_name": "rainbowpie.smithing_preview_turn_back",
                      // 애니메이션 목록
                      "anims": [
                        "@rainbowpieui_smithing_table_2.smithing_preview_reset_anim",
                        "@rainbowpieui_smithing_table_2.smithing_preview_turn_front_anim"
                      ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "preview_front_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "50%", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "debug01@rainbowpie_ui_common.debug_draw": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_debug_name": "front"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "inner@rainbowpieui_smithing_table_2.result_item_preview_inner": {}
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "preview_back_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "50%", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "debug01@rainbowpie_ui_common.debug_draw": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_debug_name": "back"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "inner@rainbowpieui_smithing_table_2.result_item_preview_inner": {
                                  // 오버라이드 가능한 변수
                                  "$rotation_y": -140
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
  "result_item_preview_inner": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "83.33333333333333%", "100%x" ],
    // 오버라이드 가능한 변수
    "$rotation_y|default": -30,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "smithing_preview_renderer": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "equipment_preview_renderer",
          // ?? ??
          "enable_scissor_test": true,
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 애니메이션 목록
          "anims": [
            "@common.screen_exit_size_animation_push",
            "@common.screen_exit_size_animation_pop",
            "@common.screen_entrance_size_animation_push",
            "@common.screen_entrance_size_animation_pop"
          ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // ?? ??
          "rotation_x": 30,
          // ?? ??
          "rotation_y": "$rotation_y",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#item_id_aux",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "smithing_table_result_items"
            },
            {
              // 가져올 값 이름
              "binding_name": "#item_custom_color",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "smithing_table_result_items"
            },
            {
              // 가져올 값 이름
              "binding_name": "#armor_trim_pattern",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "smithing_table_result_items"
            },
            {
              // 가져올 값 이름
              "binding_name": "#armor_trim_material",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "smithing_table_result_items"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "smithing_table_item_slot": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item@rainbowpie_ui_inventory_and_container.container_item": {
          // 가로/세로 크기
          "size": [ "100%y", "33.33333333333333%" ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 오버라이드 가능한 변수
          "$hover_text_max_width": 500
        }
      }
    ]
  },

  // ???/?? ??
  "template_overlay_image": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "templates@smithing_table_2.smithing_input_image_templates": {
          // 가로/세로 크기
          "size": [ "100%y", "88.88888888888889%" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_input_overlay_templates",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "input_overlay_image": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armors_and_tools@smithing_table_2.smithing_input_image_armors_and_tools": {
          // 가로/세로 크기
          "size": [ "100%y", "88.88888888888889%" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_input_overlay_armors_and_tools",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armors@smithing_table_2.smithing_input_image_armors": {
          // 가로/세로 크기
          "size": [ "100%y", "88.88888888888889%" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_input_overlay_armors",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "material_overlay_image": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "all_materials@smithing_table_2.smithing_material_image_all": {
          // 가로/세로 크기
          "size": [ "100%y", "88.88888888888889%" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_material_overlay_all",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "ingot@smithing_table_2.smithing_material_image_ingot": {
          // 가로/세로 크기
          "size": [ "100%y", "88.88888888888889%" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_material_overlay_ingot",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "smithing_table_root_panel@common.root_panel": {
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
              "smithingtable2_background_icon@rainbowpie_ui_inventory.background_icon": {
                // 가로/세로 크기
                "size": "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_size",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_offset",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_anchor",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_anchor",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_texture",
                // ???
                "alpha": "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_alpha"
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
                "$rainbowpie_localui_inventoryheader_title": "container.smithing_table.upgrade",
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
                    "recipe_grid": {
                      // 격자 컨테이너: 칸칸이 배치
                      "type": "grid",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 그리드 칸 수
                      "grid_dimensions": [ 9, 1 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "template_item_slot@rainbowpieui_smithing_table_2.smithing_table_item_slot": {
                            // 그리드 위치
                            "grid_position": [ 0, 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "smithing_table_template_items",
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "rainbowpieui_smithing_table_2.template_overlay_image",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "smithing_table_template",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "smithing_table_input"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "input_item_slot@rainbowpieui_smithing_table_2.smithing_table_item_slot": {
                            // 그리드 위치
                            "grid_position": [ 1, 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "smithing_table_input_items",
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "rainbowpieui_smithing_table_2.input_overlay_image",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "smithing_table_input",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "smithing_table_material",

                            // 오버라이드 가능한 변수
                            "$focus_override_left_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "smithing_table_template"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "material_item_slot@rainbowpieui_smithing_table_2.smithing_table_item_slot": {
                            // 그리드 위치
                            "grid_position": [ 2, 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "smithing_table_material_items",
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "rainbowpieui_smithing_table_2.material_overlay_image",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "smithing_table_material",

                            // 오버라이드 가능한 변수
                            "$focus_override_left_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "smithing_table_input",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "smithing_table_result"
                          }
                        },
                        {
                          // ???/?? ??
                          "yields": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 그리드 위치
                            "grid_position": [ 3, 0 ],
                            // 가로/세로 크기
                            "size": [ "22.2%", "100%" ], // Center across two grid columns | 35.964x54
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "arrow_icon@smithing_table_2.arrow_icon": {
                                  // 가로/세로 크기
                                  "size": [ "150%y", "22.22222222222222%" ],
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 3
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "cross_out_icon@smithing_table_2.cross_out_icon_button": {
                                  // 가로/세로 크기
                                  "size": [ "150%y", "22.22222222222222%" ],
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 4
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "result_item_slot@rainbowpieui_smithing_table_2.smithing_table_item_slot": {
                            // 그리드 위치
                            "grid_position": [ 5, 0 ],
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "smithing_table_result_items",
                            // 오버라이드 가능한 변수
                            "$button_ref": "smithing_table_2.smithing_table_output_slot_button",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "smithing_table_result",

                            // 오버라이드 가능한 변수
                            "$focus_override_left_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "smithing_table_material"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "result_item_preview@rainbowpieui_smithing_table_2.result_item_preview": {
                            // 그리드 위치
                            "grid_position": [ 7, 0 ]
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
start_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: start_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_start",

  // ???/?? ??
  "icon_maker_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/start/background')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "icon_maker_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_start.icon_maker_icon",

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_start_icon_maker",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "friends_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/friendsbutton/navbar-friends-icon",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 가로/세로 크기
    "size": [ 16, 16 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "treatment_store_button_status_panel@rainbowpie_ui_button.rainbowpie_ui_button_default": {
    // 오버라이드 가능한 변수
    "$is_treatment_button|default": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_border_enabled|default": "(not $is_treatment_button)",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_controls": [
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
        "treatment_button_color_background": {
          // 이미지 표시
          "type": "image",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_treatment_button)",
          // 가로/세로 크기
          "size": "$button_image_size",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": "$bg_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$default_state",
              // 오버라이드 가능한 변수
              "$bg_color": "$light_border_default_color"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$hover_state",
              // 오버라이드 가능한 변수
              "$bg_color": "$light_border_hover_color"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$pressed_state",
              // 오버라이드 가능한 변수
              "$bg_color": "$light_border_pressed_color"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$locked_state",
              // 오버라이드 가능한 변수
              "$bg_color": "$light_border_locked_color"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "treatment_button_background": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ "150px - 2px - 2px", "32px - 2px - 2px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 사용할 이미지 경로
          "texture": "$button_texture",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_treatment_button)",
          // 보이기/숨기기(공간 유지)
          "visible": "(not (($button_texture = 'textures/ui/button_borderless_light') or ($button_texture = 'textures/ui/button_borderless_lighthover') or ($button_texture = 'textures/ui/button_borderless_lightpressed') or ($button_texture = 'textures/ui/disabledButtonNoBorder')))",
          // 오버라이드 가능한 변수
          "$button_texture": "",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$default_state",
              // 오버라이드 가능한 변수
              "$button_texture": "$default_button_texture"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$hover_state",
              // 오버라이드 가능한 변수
              "$button_texture": "$hover_button_texture"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$pressed_state",
              // 오버라이드 가능한 변수
              "$button_texture": "$pressed_button_texture"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$locked_state",
              // 오버라이드 가능한 변수
              "$button_texture": "$locked_button_texture"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_desc@rainbowpie_ui_button.button_desc": {}
      },
      {
        // ???/?? ??
        "treatment_button_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 가로/세로 크기
          "size": [ "150px - 2px - 6px", "32px - 2px - 6px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_treatment_button)",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "button_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_localui_button_offset",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "content@$button_content": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4
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
        "button_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 오버라이드 가능한 변수
          "$button_content_size|default": [ "100% - 6px", "100% - 6px" ],
          // 가로/세로 크기
          "size": "$button_content_size",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 12,
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "($is_treatment_button and $default_state)",
              // 오버라이드 가능한 변수
              "$text_color": "$default_text_color"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "button_content@rainbowpieui_start.startv2_big_button_panel": {
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "button_icon": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100%y", "100% - 4px" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 사용할 이미지 경로
                      "texture": "($icon_theme_dir + '/' + $icon_texture_name)",
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 8,
                      // 완전히 제거(공간도 없음)
                      "ignored": "$is_treatment_button"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "button_text@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "100% - 30px", "default" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 30, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 보여줄 글자
                      "text": "menu.store",
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 12
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
  "inbox_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "inbox_bell_animated_icon@start.inbox_bell_animated_icon": {} },
      { "inbox_button_unread_panel@start.inbox_button_unread_panel": {} }
    ]
  },

  // ???/?? ??
  "more_option_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/start/more')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "more_option_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_start.more_option_icon",

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_start_more_option",
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
    "size": [ 15, 15 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/start/background')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "background_dialog_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_start.background_icon",

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_start_background_dialog",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "modal_label_panel@common.scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scrolling_pane_size": [ "100% - 1px", "100%" ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_offset": [ 2, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_size": [ 5, "100% - 4px" ],
    // 오버라이드 가능한 변수
    "$show_background": false,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 오버라이드 가능한 변수
    "$always_handle_scrolling": true
  },

  // ???/?? ??
  "background_text_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100% - 4px", "100%c" ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 2, 0 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 0, 2 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "name_text@rainbowpie_ui_common.text_label_notheme": {
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_dialog_content_color",
          // 보여줄 글자
          "text": "$rainbowpie_ui_theme_background_name",
          // ?? ?? ??
          "font_scale_factor": 1.2
        }
      },
      {
        // ???/?? ??
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 0, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "description_text@rainbowpie_ui_common.text_label_notheme": {
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_dialog_content_color",
          // 보여줄 글자
          "text": "$rainbowpie_ui_theme_background_description"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_path@rainbowpie_ui_common.text_label_notheme": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not ($rainbowpieui_branch_type = 'dev'))",
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_dialog_content_color",
          // 보여줄 글자
          "text": "('\n' + $rainbowpie_ui_theme_background_texture + '\n' + $rainbowpie_ui_theme_background_blur_texture)"
        }
      }
    ]
  },


  // ???/?? ??
  "background_dialog_content": {
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
                    "modal_label_panel@rainbowpieui_start.modal_label_panel": {
                      // 오버라이드 가능한 변수
                      "$scrolling_content": "rainbowpieui_start.background_text_panel"
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
                          // 다른 템플릿을 가져와서 확장(상속)
                          "close_dialog_button@rainbowpieui_start.background_dialog_toggle_base": {
                            // 오버라이드 가능한 변수
                            "$button_content": "rainbowpieui_start.button_text",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$button_text": "gui.ok",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 가로/세로 크기
                            "size": [ "100%", 23 ],
                            // 오버라이드 가능한 변수
                            "$toggle_group_forced_index": 1001,
                            // 오버라이드 가능한 변수
                            "$toggle_view_binding_name": "close_background_dialog",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2000,
                            // 오버라이드 가능한 변수
                            "$button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_cancel",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.menu_select",
                                // 입력 시점(pressed 등)
                                "mapping_type": "global"
                              },
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
                                "mapping_type": "focused"
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
  "servers_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%y", "100% - 4px" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/start/servers')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8
  },

  // ???/?? ??
  "get_started_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%y", "100% - 4px" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/start/quickplay')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8
  },

  // ???/?? ??
  "close_button_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 30, 30 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/close_button/close')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_localui_button_text_color"
  },

  // ???/?? ??
  "startv2_profile_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "online_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%c", "28px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "gamerpic@start.gamerpic": {
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 오버라이드 가능한 변수
                "$gamerpic_visible": "#show_gamerpic"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "alex_icon@start.alex_icon": {
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #show_gamerpic)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "gamertag": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%cm + 8px", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "button_text@rainbowpie_ui_common.text_label_notheme": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 보여줄 글자
                      "text": "#gamertag_label",
                      // ?? ?? ??
                      "font_scale_factor": 1.4,
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#gamertag_label"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "(not #sign_in_visible)",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "gamertag_label_offline@rainbowpie_ui_common.text_label_notheme": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 보여줄 글자
                      "text": "#playername",
                      // ?? ?? ??
                      "font_scale_factor": 1.4,
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#playername"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#sign_in_visible",
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
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "startv2_big_button_template@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$button_content": "rainbowpieui_start.startv2_big_button_panel",
    // 가로/세로 크기
    "size": [ "100%", 32 ]
  },

  // ???/?? ??
  "startv2_big_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$button_text|default": "Default Button Text",
    // 오버라이드 가능한 변수
    "$icon_theme_dir|default": "($rainbowpie_ui_path_theme + '/icon/start')",
    // 오버라이드 가능한 변수
    "$icon_texture_name|default": "null",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "button_icon": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ "100%y", "100% - 4px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 사용할 이미지 경로
          "texture": "($icon_theme_dir + '/' + $icon_texture_name)",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_text@rainbowpie_ui_common.text_label_notheme": {
          // 가로/세로 크기
          "size": [ "100% - 30px", "default" ],
          // 기준점에서 이동하는 거리
          "offset": [ 30, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 보여줄 글자
          "text": "$button_text",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10
        }
      }
    ]
  },

  // ???/?? ??
  "startv2_store_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$button_text|default": "Default Button Text",
    // 오버라이드 가능한 변수
    "$icon_theme_dir|default": "($rainbowpie_ui_path_theme + '/icon/start')",
    // 오버라이드 가능한 변수
    "$icon_texture_name|default": "null",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "button_icon": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ "100%y", "100% - 4px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 사용할 이미지 경로
          "texture": "($icon_theme_dir + '/' + $icon_texture_name)",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_text@rainbowpie_ui_common.text_label_notheme": {
          // 가로/세로 크기
          "size": [ "100% - 30px", "default" ],
          // 기준점에서 이동하는 거리
          "offset": [ 30, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 보여줄 글자
          "text": "$button_text",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10
        }
      },
      {
        // ???/?? ??
        "store_button_art": {
          // 완전히 제거(공간도 없음)
          "ignored": "$store_disabled",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100% + 8px", "100% + 8px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#store_button_art_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "default_background@start.main_button_gif": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 오버라이드 가능한 변수
                "$gif_path_binding_name": "#store_button_art_default_bg_path",
                // 오버라이드 가능한 변수
                "$gif_alpha_binding_name": "#store_button_art_default_alpha"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover_background@start.main_button_gif": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 오버라이드 가능한 변수
                "$gif_path_binding_name": "#store_button_art_hover_bg_path",
                // 오버라이드 가능한 변수
                "$gif_alpha_binding_name": "#store_button_art_hover_alpha"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "button_text@rainbowpie_ui_common.text_label_notheme": {
                // 가로/세로 크기
                "size": [ "100% - 30px", "default" ],
                // 기준점에서 이동하는 거리
                "offset": [ 34, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 보여줄 글자
                "text": "$button_text",
                // ?? (R,G,B,A)
                "color": "$text_color",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#store_button_art_label_color",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#color",
                    // ?? ???
                    "binding_condition": "visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "default_foreground@start.main_button_gif": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 오버라이드 가능한 변수
                "$gif_path_binding_name": "#store_button_art_default_fg_path",
                // 오버라이드 가능한 변수
                "$gif_alpha_binding_name": "#store_button_art_default_alpha"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover_foreground@start.main_button_gif": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5,
                // 오버라이드 가능한 변수
                "$gif_path_binding_name": "#store_button_art_hover_fg_path",
                // 오버라이드 가능한 변수
                "$gif_alpha_binding_name": "#store_button_art_hover_alpha"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "store_button_banner@start.main_button_banner": {
          // 완전히 제거(공간도 없음)
          "ignored": "$store_disabled",
          // 기준점에서 이동하는 거리
          "offset": [ 13, -4 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 62,
          // 오버라이드 가능한 변수
          "$banner_visible_binding_name": "#store_button_banner_visible",
          // 오버라이드 가능한 변수
          "$banner_texture_binding_name": "#store_button_banner_texture",
          // 오버라이드 가능한 변수
          "$banner_texture_source_binding_name": "#store_button_banner_texture_source",
          // 오버라이드 가능한 변수
          "$banner_text_binding_name": "#store_button_banner_text",
          // 오버라이드 가능한 변수
          "$banner_text_color_binding_name": "#store_button_banner_text_color"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "update_icon@start.update_prompt_icon": {
          // 완전히 제거(공간도 없음)
          "ignored": "$store_disabled",
          // 가로/세로 크기
          "size": [ "52.38%y", 15 ],
          // 기준점에서 이동하는 거리
          "offset": [ -12, -10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 60,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#update_icon_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // ?? ???
              "binding_condition": "always"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "new_offers_icon@start.new_offers_icon": {
          // 완전히 제거(공간도 없음)
          "ignored": "$store_disabled",
          // 기준점에서 이동하는 거리
          "offset": [ 12, -10 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 60,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#new_offers",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "hide_paper_doll_anim": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hide_paper_doll_anim_exit_push@rainbowpieui_start.hide_paper_doll_anim": {
    // 시작 값
    "from": [ 0, 38 ],
    // 끝 값
    "to": [ "100%x", 38 ],
    // ?? ??
    "play_event": "screen.exit_push"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hide_paper_doll_anim_exit_pop@rainbowpieui_start.hide_paper_doll_anim": {
    // 시작 값
    "from": [ 0, 38 ],
    // 끝 값
    "to": [ "100%x", 38 ],
    // ?? ??
    "play_event": "screen.exit_pop"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hide_paper_doll_anim_entrance_push@rainbowpieui_start.hide_paper_doll_anim": {
    // 시작 값
    "from": [ "100%x", 38 ],
    // 끝 값
    "to": [ 0, 38 ],
    // ?? ??
    "play_event": "screen.entrance_push"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hide_paper_doll_anim_entrance_pop@rainbowpieui_start.hide_paper_doll_anim": {
    // 시작 값
    "from": [ "100%x", 38 ],
    // 끝 값
    "to": [ 0, 38 ],
    // ?? ??
    "play_event": "screen.entrance_pop"
  },

  // ???/?? ??
  "startv2_skin_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100% + 5px", "100% + 5px" ],
    // 오버라이드 가능한 변수
    "$button_text|default": "Default Button Text",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "button_icon": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "gradient_renderer",
          // 가로/세로 크기
          "size": [ 28, "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // ?? ?? ?
          "color1": [ 0.407843137254902, 0.5254901960784314, 0.8, 1.0 ],
          // ?? ?? ?
          "color2": [ 0.5098039215686275, 0.6549019607843137, 1.0, 1.0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // ?? ????
          "clips_children": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "paper_doll": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "paper_doll_renderer",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ 92, "100%x" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 38 ],
                // ?? ??
                "enable_scissor_test": true,
                // ????? ?? ?
                "animation_reset_name": "screen_animation_reset",
                // 애니메이션 목록
                "anims": [
                  "@rainbowpieui_start.hide_paper_doll_anim_exit_push",
                  "@rainbowpieui_start.hide_paper_doll_anim_exit_pop",
                  "@rainbowpieui_start.hide_paper_doll_anim_entrance_push",
                  "@rainbowpieui_start.hide_paper_doll_anim_entrance_pop"
                ]
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_text@rainbowpie_ui_common.text_label_notheme": {
          // 가로/세로 크기
          "size": [ "100% - 32.5px", "default" ],
          // 기준점에서 이동하는 거리
          "offset": [ 32.5, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 보여줄 글자
          "text": "$button_text",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "button_text@rainbowpie_ui_common.text_label_notheme": {
    // 보여줄 글자
    "text": "$button_text",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 가로/세로 크기
    "size": [ "default", "default" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 4
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_alert_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_start.button_text",

    // 오버라이드 가능한 변수
    "$button_type_panel": "common_buttons.new_ui_binding_button_label",
    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "ToggleButton",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_start_dialog_alert",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "dialog_alert_content": {
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
                    "text@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "100% - 8px", "100% - 4px" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_content_color",
                      // 보여줄 글자
                      "text": "$rainbowpie_ui_flag_start_dialog_alert_text"
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
                          // 다른 템플릿을 가져와서 확장(상속)
                          "close_dialog_button@rainbowpieui_start.dialog_alert_toggle_base": {
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$button_text": "$rainbowpie_ui_flag_start_dialog_alert_button",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 가로/세로 크기
                            "size": [ "100%", 23 ],
                            // 오버라이드 가능한 변수
                            "$toggle_group_forced_index": 1000,
                            // 오버라이드 가능한 변수
                            "$toggle_view_binding_name": "close_dialog",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2000,
                            // 오버라이드 가능한 변수
                            "$button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_cancel",
                                // 어떤 동작을 실행할지
                                "to_button_id": "button.menu_select",
                                // 입력 시점(pressed 등)
                                "mapping_type": "global"
                              },
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
                                "mapping_type": "focused"
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
  "start_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "icon_maker_screen": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_icon_maker)",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 120
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "modal_input@common.input_panel": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 128,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "close_button@rainbowpieui_start.icon_maker_toggle_base": {
                      // 가로/세로 크기
                      "size": [ "100%y", "28px" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ -8, 8 ],
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_right",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_right",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 32,
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100%", "100%" ],
                      // 오버라이드 가능한 변수
                      "$toggle_view_binding_name": "hide_icon_maker",
                      // 오버라이드 가능한 변수
                      "$button_content": "rainbowpieui_start.close_button_icon",
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
                          "to_button_id": "button.menu_ok",
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
                  },
                  {
                    // ???/?? ??
                    "icon_maker_background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100%y", "100%" ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // ?? (R,G,B,A)
                      "color": [ 0.196078431372549, 0.6588235294117647, 0.3215686274509804 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 16,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "icon_background": {
                            // 이미지 표시
                            "type": "image",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // ??? ?? ?
                            "allow_debug_missing_texture": false,
                            // ??? ?? ?
                            "force_texture_reload": true,
                            // 사용할 이미지 경로
                            "texture": "($rainbowpie_ui_path_home + '/icon_maker/icon_bg')",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1
                          }
                        },
                        {
                          // ???/?? ??
                          "ui_name_background": {
                            // 이미지 표시
                            "type": "image",
                            // 가로/세로 크기
                            "size": [ "100%", "22%" ],
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_middle",
                            // 사용할 이미지 경로
                            "texture": "textures/ui/Black",
                            // ???
                            "alpha": 0.4,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 16,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "ui_name_text@rainbowpie_ui_common.text_label_notheme": {
                                  // 보여줄 글자
                                  "text": "$rainbowpie_ui_theme_global_title_text",
                                  // ??
                                  "font_type": "MinecraftTen",
                                  // ?? ?? ??
                                  "font_scale_factor": 6.0
                                }
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
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "show_icon_maker",
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
        "background_dialog_screen": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 완전히 제거(공간도 없음)
          "ignored": "((not $rainbowpie_ui_flag_82d2c0e7) or ($rainbowpie_ui_theme_background_texture = ''))",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "modal_input@common.input_panel": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 100,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
                      // 가로/세로 크기
                      "size": [ 204, 132 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 100,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialogheader_title": "rainbowpie.ui.themesystem.background.title",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialog_content": "rainbowpieui_start.background_dialog_content",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialog_show_background": false,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialogheader_show_close": false
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "background2@rainbowpie_popup_dialog.background_panel_design2": {}
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
          ],
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#is_background_dialog_opened": false,
            // ???/??? ?
            "#is_background_dialog_opened_on_vanilla": false
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_background_dialog",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_background_dialog_opened"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_background_dialog_vanilla",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_background_dialog_opened_on_vanilla"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#is_background_dialog_opened or #is_background_dialog_opened_on_vanilla)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "dialog_alert_screen": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_start_dialog_alert)",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "modal_input@common.input_panel": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 100,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
                      // 가로/세로 크기
                      "size": [ 204, 132 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 100,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialogheader_title": "$rainbowpie_ui_flag_start_dialog_alert_title",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialog_content": "rainbowpieui_start.dialog_alert_content",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialog_show_background": false,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialogheader_show_close": false
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "background2@rainbowpie_popup_dialog.background_panel_design2": {}
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
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "close_dialog",
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
        "screen_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 보이기/숨기기(공간 유지)
          "visible": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "design02_gradient_top": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 완전히 제거(공간도 없음)
                "ignored": "(((not $rainbowpie_ui_flag_8dcce82d) and (not $rainbowpie_ui_flag_start_design02_gradient)) or $rainbowpie_ui_flag_screenbackground_gradient)",
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
                "layer": -3
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
                "ignored": "(((not $rainbowpie_ui_flag_8dcce82d) and (not $rainbowpie_ui_flag_start_design02_gradient)) or $rainbowpie_ui_flag_screenbackground_gradient)",
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
                "layer": -3
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "header@rainbowpie_ui_common.screen_header": {
                // 완전히 제거(공간도 없음)
                "ignored": "$rainbowpie_ui_flag_8dcce82d",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screenheader_ingame_anim1": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screenheader_ingame_anim2": "($rainbowpie_ui_flag_8dcce82d and $rainbowpie_ui_flag_fbadd01f)",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screenheader_title": "Minecraft | @Mojang Studio",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screenheader_content_panel": "rainbowpieui_start.player_name_panel"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "screen_content@rainbowpie_ui_common.screen_content": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screen_ingame_anim1": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screen_ingame_anim2": "($rainbowpie_ui_flag_8dcce82d and $rainbowpie_ui_flag_fbadd01f)",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screen_content": [
                  {
                    // ???/?? ??
                    "start_screen_design02": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_8dcce82d)",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "compatibility_version_warn@rainbowpieui_compatibility_config.compatibility_variables": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "version_warn": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 130, "100%c" ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ -8, 40 ],
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_right",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_right",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 18,
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "background": {
                                        // 이미지 표시
                                        "type": "image",
                                        // 가로/세로 크기
                                        "size": [ "100%", "100%c + 6px" ],
                                        // 사용할 이미지 경로
                                        "texture": "textures/ui/White",
                                        // ?? (R,G,B,A)
                                        "color": "$rainbowpie_ui_theme_text_background_color",
                                        // ???
                                        "alpha": 0.5,
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 1,
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // ???/?? ??
                                            "load_tip_stack_panel": {
                                              // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                              "type": "stack_panel",
                                              // 가로/세로 크기
                                              "size": [ "100% - 6px", "100%c" ],
                                              // 이 안에 들어가는 부품 목록
                                              "controls": [
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_1@rainbowpie_ui_common.text_label_notheme": {
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": [ 1.0, 1.0, 0.333 ],
                                                    // 보여줄 글자
                                                    "text": "rainbowpie.ui.version.warn",
                                                    // ?? ?? ??
                                                    "font_scale_factor": 1.3,
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 1
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "title_driven@rainbowpieui_settings_common.driven": {}
                                                },
                                                {
                                                  // ???/?? ??
                                                  "title_padding": {
                                                    // 패널: 다른 부품을 담는 바닥판
                                                    "type": "panel",
                                                    // 가로/세로 크기
                                                    "size": [ 0, 2 ]
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_2@rainbowpie_ui_common.text_label_notheme": {
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": "$rainbowpie_ui_theme_text_text_color",
                                                    // 보여줄 글자
                                                    "text": "rainbowpie.ui.version.supported",
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 1
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_3@rainbowpie_ui_common.text_label_notheme": {
                                                    // 완전히 제거(공간도 없음)
                                                    "ignored": "($rainbowpieui_version_minecraft_min = $rainbowpieui_version_minecraft_max)",
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": [ 0.333, 1.0, 0.333 ],
                                                    // 보여줄 글자
                                                    "text": "('\"' + $rainbowpieui_version_minecraft_min + '-' + $rainbowpieui_version_minecraft_max + '\"')",
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 1
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_4@rainbowpie_ui_common.text_label_notheme": {
                                                    // 완전히 제거(공간도 없음)
                                                    "ignored": "(not ($rainbowpieui_version_minecraft_min = $rainbowpieui_version_minecraft_max))",
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": [ 0.333, 1.0, 0.333 ],
                                                    // 보여줄 글자
                                                    "text": "('\"' + $rainbowpieui_version_minecraft_target + '\"')",
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 1
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_5@rainbowpie_ui_common.text_label_notheme": {
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": [ 1.0, 0.333, 0.333 ],
                                                    // 보여줄 글자
                                                    "text": "rainbowpie.ui.version.warn_unsupport",
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 1
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_6@rainbowpie_ui_common.text_label_notheme": {
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": [ 1.0, 1.0, 0.333 ],
                                                    // 보여줄 글자
                                                    "text": "rainbowpie.ui.version.dev.err_variable",
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 1,
                                                    // 게임 값과 연결하는 규칙 목록
                                                    "bindings": [
                                                      {
                                                        // 가져올 값 이름
                                                        "binding_name": "#version"
                                                      },
                                                      {
                                                        // 계산/조건 결과를 연결
                                                        "binding_type": "view",
                                                        // 계산식/참조 값
                                                        "source_property_name": "((#version - $rainbowpieui_version_minecraft_bigver) = #version)",
                                                        // 결과가 들어갈 속성
                                                        "target_property_name": "#visible"
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
                                                    "size": [ 0, 2 ]
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "driven@rainbowpieui_settings_common.driven": {}
                                                },
                                                {
                                                  // ???/?? ??
                                                  "padding_1": {
                                                    // 패널: 다른 부품을 담는 바닥판
                                                    "type": "panel",
                                                    // 가로/세로 크기
                                                    "size": [ 0, 2 ]
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_7@rainbowpie_ui_common.text_label_notheme": {
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": [ 1.0, 1.0, 0.333 ],
                                                    // 보여줄 글자
                                                    "text": "rainbowpie.ui.version.subpacks",
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 1
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_8@rainbowpie_ui_common.text_label_notheme": {
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": "$rainbowpie_ui_theme_text_text_color",
                                                    // 보여줄 글자
                                                    "text": "rainbowpie.ui.version.subpacks_supported",
                                                    // 겹치는 순서(숫자 클수록 위)
                                                    "layer": 1
                                                  }
                                                },
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "label_9@rainbowpie_ui_common.text_label_notheme": {
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // ?? (R,G,B,A)
                                                    "color": [ 0.333, 1.0, 0.333 ],
                                                    // 보여줄 글자
                                                    "text": "('\"' + $rainbowpieui_version_minecraft_subpacks + '\"')",
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
                                  ],
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_this_bigver": "($rainbowpieui_version_minecraft_bigver + '.')",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_this_max_version_code": "($rainbowpieui_version_minecraft_max - $rainbowpie_localui_this_bigver)",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_this_min_version_code": "($rainbowpieui_version_minecraft_min - $rainbowpie_localui_this_bigver)",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#version"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#version - $rainbowpie_localui_this_bigver)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#current_version_code"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "((#version - $rainbowpieui_version_minecraft_bigver) = #version)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#invalid_big_version"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#current_version_code > $rainbowpie_localui_this_max_version_code)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#version_too_high"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#current_version_code < $rainbowpie_localui_this_min_version_code)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#version_too_low"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#invalid_big_version or #version_too_high or #version_too_low)",
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
                          // 다른 템플릿을 가져와서 확장(상속)
                          "title_text@rainbowpie_ui_common.title_text": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "$rainbowpie_ui_flag_1c167cde",
                            // 오버라이드 가능한 변수
                            "$title_text_scale": 3.4,
                            // 기준점에서 이동하는 거리
                            "offset": [ 8, "2.5%" ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_left",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "splash_text@common_art.splash_text": {
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not $rainbowpie_ui_flag_start_splash_text)"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "easteregg_button@common_buttons.light_text_button": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "($rainbowpie_ui_flag_1c167cde or (not $rainbowpie_ui_flag_3520da91))",
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_desc_enabled": true,
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_desc_text": "You found an easter egg!!!\nVisit the link below to claim your rewards.\n§ehttps://mintraspberry.cool/reward",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_default_alpha": 0,
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_hover_alpha": 0,
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_pressed_alpha": 0,
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_locked_alpha": 0,
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "rainbowpie.easteregg_click",
                            // 오버라이드 가능한 변수
                            "$button_text": "",
                            // 오버라이드 가능한 변수
                            "$focus_enabled": false,
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_left",
                            // 가로/세로 크기
                            "size": [ 8, 8 ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 156, "2.5% + 14px" ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "topbar_title_text@rainbowpie_ui_common.title_text": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_1c167cde)",
                            // 오버라이드 가능한 변수
                            "$title_text_scale": 2.4,
                            // 기준점에서 이동하는 거리
                            "offset": [ 6, 0 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_left"
                          }
                        },
                        {
                          // ???/?? ??
                          "pixelart_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%c" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ -8, -45 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_right",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_right",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 32,
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_start_pixelart)",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "niko_oneshot@rainbowpieui_pixelart.niko_oneshot": {
                                  // 오버라이드 가능한 변수
                                  "$pixel_size": [ 2, 2 ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "more_play_option": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 가로/세로 크기
                            "size": [ "150px", "100%c" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 8, 0 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 30,
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_2f8a5e27)",
                            // 보이기/숨기기(공간 유지)
                            "visible": false,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "show_more_option",
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
                                "more_option_button@rainbowpieui_start.more_option_toggle_base": {
                                  // 가로/세로 크기
                                  "size": [ "100%", 32 ],
                                  // 오버라이드 가능한 변수
                                  "$icon_texture_name": "back",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "menu.openMainMenu",
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_start.startv2_big_button_panel",
                                  // 오버라이드 가능한 변수
                                  "$toggle_group_forced_index": 1001,
                                  // 오버라이드 가능한 변수
                                  "$toggle_view_binding_name": "hide_more_option",
                                  // 오버라이드 가능한 변수
                                  "$focus_id": "back_button",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_up": "servers_button",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 30,
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "show_more_option",
                                      // 계산식/참조 값
                                      "source_property_name": "#toggle_state",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#enabled"
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "more_option_button_padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 0, 4 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "quickplay_button@rainbowpieui_start.startv2_big_button_template": {
                                  // 가로/세로 크기
                                  "size": [ "100%", 32 ],
                                  // 오버라이드 가능한 변수
                                  "$icon_texture_name": "quickplay",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "menu.quickplay",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_get_started"
                                }
                              },
                              {
                                // ???/?? ??
                                "quickplay_button_padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 0, 4 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "realms_button@rainbowpieui_start.startv2_big_button_template": {
                                  // 가로/세로 크기
                                  "size": [ "100%", 32 ],
                                  // 오버라이드 가능한 변수
                                  "$icon_texture_name": "realms",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "menu.realmsServer",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_realms",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#realms_promo_visible",
                                      // 가져온 값을 다른 속성으로 연결
                                      "binding_name_override": "#visible"
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "realms_button_padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 0, 4 ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#realms_promo_visible",
                                      // 가져온 값을 다른 속성으로 연결
                                      "binding_name_override": "#visible"
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "servers_button@rainbowpieui_start.startv2_big_button_template": {
                                  // 가로/세로 크기
                                  "size": [ "100%", 32 ],
                                  // 오버라이드 가능한 변수
                                  "$icon_texture_name": "servers",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "menu.servers",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_servers",
                                  // 오버라이드 가능한 변수
                                  "$focus_id": "servers_button"
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
                            // 가로/세로 크기
                            "size": [ "150px", "100%c" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 8, 0 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 30,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "show_more_option",
                                // 계산식/참조 값
                                "source_property_name": "(not #toggle_state)",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible",
                                // 완전히 제거(공간도 없음)
                                "ignored": "(not $rainbowpie_ui_flag_2f8a5e27)"
                              }
                            ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "play_button_stack": {
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
                                      "play_button@rainbowpieui_start.startv2_big_button_template": {
                                        // 가로/세로 크기
                                        "size": [ "fill", 32 ],
                                        // 오버라이드 가능한 변수
                                        "$icon_texture_name": "play",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "$play_button_target",
                                        // 오버라이드 가능한 변수
                                        "$button_text": "menu.play",
                                        // 오버라이드 가능한 변수
                                        "$focus_id": "play_button",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_up": "profile_button"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "servers_button@common_buttons.light_content_button": {
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "(not $rainbowpie_ui_flag_50d7b9e9)",
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_localui_button_desc_enabled": true,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_localui_button_desc_text": "menu.servers",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_servers",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_start.servers_icon",
                                        // 가로/세로 크기
                                        "size": [ "100%y", 32 ],
                                        // 오버라이드 가능한 변수
                                        "$focus_override_up": "profile_button"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "quickplay_button@common_buttons.light_content_button": {
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "((not $rainbowpie_ui_flag_be13f8d7) or $rainbowpie_ui_flag_2f8a5e27)",
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_localui_button_desc_enabled": true,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_localui_button_desc_text": "menu.quickplay",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_get_started",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_start.get_started_icon",
                                        // 가로/세로 크기
                                        "size": [ "100%y", 32 ],
                                        // 오버라이드 가능한 변수
                                        "$focus_override_up": "profile_button"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "more_option_button@rainbowpieui_start.more_option_toggle_base": {
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "(not $rainbowpie_ui_flag_2f8a5e27)",
                                        // 가로/세로 크기
                                        "size": [ "100%y", 32 ],
                                        // 오버라이드 가능한 변수
                                        "$toggle_group_forced_index": 1000,
                                        // 오버라이드 가능한 변수
                                        "$toggle_view_binding_name": "show_more_option",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_up": "profile_button",
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 30,
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // ?? ??
                                            "source_control_name": "show_more_option",
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
                                // ???/?? ??
                                "play_button_padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 0, 4 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "settings_button@rainbowpieui_start.startv2_big_button_template": {
                                  // 오버라이드 가능한 변수
                                  "$icon_texture_name": "settings",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_settings",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "menu.settings"
                                }
                              },
                              {
                                // ???/?? ??
                                "settings_button_padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 0, 4 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "store_button@rainbowpieui_start.startv2_big_button_template": {
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(($trial and not $use_single_column_for_buttons) or $rainbowpie_ui_flag_1d6d26cc)",
                                  // 오버라이드 가능한 변수
                                  "$icon_texture_name": "marketplace",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_store",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "menu.store",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_right": "bottom_button"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "store_button_with_custom_controls@rainbowpieui_start.startv2_big_button_template": {
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_start.startv2_store_button_panel",
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(($trial and not $use_single_column_for_buttons) or (not $rainbowpie_ui_flag_1d6d26cc))",
                                  // 오버라이드 가능한 변수
                                  "$icon_texture_name": "marketplace",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_store",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "menu.store",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_right": "bottom_button",
                                  // 입력 키/버튼과 동작 연결
                                  "button_mappings": [
                                    {
                                      // 어떤 입력을 받을지
                                      "from_button_id": "button.menu_select",
                                      // 어떤 동작을 실행할지
                                      "to_button_id": "$pressed_button_name",
                                      // 입력 시점(pressed 등)
                                      "mapping_type": "pressed"
                                    },
                                    {
                                      // 어떤 입력을 받을지
                                      "from_button_id": "button.menu_ok",
                                      // 어떤 동작을 실행할지
                                      "to_button_id": "$pressed_button_name",
                                      // 입력 시점(pressed 등)
                                      "mapping_type": "pressed"
                                    },
                                    {
                                      // 어떤 동작을 실행할지
                                      "to_button_id": "store_button.is_hovered",
                                      // 입력 시점(pressed 등)
                                      "mapping_type": "pressed"
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "store_button_padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 0, 4 ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "($trial and not $use_single_column_for_buttons)"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "profile_button@rainbowpieui_start.startv2_big_button_template": {
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_start.startv2_skin_button_panel",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.to_profile_screen",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "profileScreen.header",
                                  // 오버라이드 가능한 변수
                                  "$focus_id": "profile_button",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_right": "bottom_button"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "online_button_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": "$online_button_size",
                            // 오버라이드 가능한 변수
                            "$online_button_size": [ "100%c", "28px" ],
                            // 기준점에서 이동하는 거리
                            "offset": "$online_button_offset",
                            // 오버라이드 가능한 변수
                            "$online_button_offset": [ -8, 8 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_right",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_right",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 30,
                            // 조건에 따라 변수 값을 바꾸기
                            "variables": [
                              {
                                // 이 조건이 맞으면 적용
                                "requires": "$rainbowpie_ui_flag_1c167cde",
                                // 오버라이드 가능한 변수
                                "$online_button_size": [ "100%c", "28px" ],
                                // 오버라이드 가능한 변수
                                "$online_button_offset": [ -1, 1 ]
                              }
                            ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "button_stack_panel": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
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
                                      "profile_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_form_fitting_button",
                                        // 오버라이드 가능한 변수
                                        "$button_content_size_override": [ "100%c", "100%c" ],
                                        // 오버라이드 가능한 변수
                                        "$button_image_size_override": [ "100%c", "100%c" ],
                                        // 오버라이드 가능한 변수
                                        "$button_type_panel": "rainbowpieui_start.startv2_profile_button_panel",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_profile",
                                        // 가로/세로 크기
                                        "size": [ "100%c", "100%" ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "profile_button_padding": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ 4, 0 ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "xbl_signin_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%c", "100%" ],
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#sign_in_visible",
                                            // 가져온 값을 다른 속성으로 연결
                                            "binding_name_override": "#visible"
                                          }
                                        ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "xbl_signin_button@start.xbl_signin_button": {
                                              // 오버라이드 가능한 변수
                                              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button",
                                              // 오버라이드 가능한 변수
                                              "$button_content_size_override": [ "100%c", "100%c" ],
                                              // 오버라이드 가능한 변수
                                              "$button_image_size_override": [ "100%c + 8px", "28px" ],
                                              // 가로/세로 크기
                                              "size": [ "100%c", "100%" ],
                                              // 오버라이드 가능한 변수
                                              "$form_fitting_min_size": [ 44, 0 ]
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "online_buttons": {
                                        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                        "type": "stack_panel",
                                        // 쌓는 방향(가로/세로)
                                        "orientation": "horizontal",
                                        // 가로/세로 크기
                                        "size": [ "100%c", "100%" ],
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "(not #sign_in_visible)",
                                            // 가져온 값을 다른 속성으로 연결
                                            "binding_name_override": "#visible"
                                          }
                                        ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "achievements_button@start.achievements_button": {
                                              // 오버라이드 가능한 변수
                                              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                              // 오버라이드 가능한 변수
                                              "$button_image_size": [ "100%", "100%" ],
                                              // 가로/세로 크기
                                              "size": [ "100%y", "100%" ]
                                            }
                                          },
                                          {
                                            // ???/?? ??
                                            "achievements_button_padding": {
                                              // 패널: 다른 부품을 담는 바닥판
                                              "type": "panel",
                                              // 가로/세로 크기
                                              "size": [ 4, 0 ]
                                            }
                                          },
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "inbox_button@start.inbox_button": {
                                              // 오버라이드 가능한 변수
                                              "$button_content": "rainbowpieui_start.inbox_icon",
                                              // 오버라이드 가능한 변수
                                              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                              // 오버라이드 가능한 변수
                                              "$button_image_size": [ "100%", "100%" ],
                                              // 가로/세로 크기
                                              "size": [ "100%y", "100%" ]
                                            }
                                          },
                                          {
                                            // ???/?? ??
                                            "inbox_button_padding": {
                                              // 패널: 다른 부품을 담는 바닥판
                                              "type": "panel",
                                              // 가로/세로 크기
                                              "size": [ 4, 0 ]
                                            }
                                          },
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "realms_invite_button@common_buttons.light_content_button": {
                                              // 완전히 제거(공간도 없음)
                                              "ignored": true,
                                              // 오버라이드 가능한 변수
                                              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                              // 오버라이드 가능한 변수
                                              "$button_image_size": [ "100%", "100%" ],
                                              // 오버라이드 가능한 변수
                                              "$pressed_button_name": "button.menu_invite_notification",
                                              // 오버라이드 가능한 변수
                                              "$button_content": "rainbowpieui_start.invite_notification_icon",
                                              // 가로/세로 크기
                                              "size": [ "100%y", "100%" ]
                                            }
                                          },
                                          {
                                            // ???/?? ??
                                            "realms_invite_button_padding": {
                                              // 완전히 제거(공간도 없음)
                                              "ignored": true,
                                              // 패널: 다른 부품을 담는 바닥판
                                              "type": "panel",
                                              // 가로/세로 크기
                                              "size": [ 4, 0 ]
                                            }
                                          },
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "friends_button@common_buttons.light_content_button": {
                                              // 오버라이드 가능한 변수
                                              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                              // 오버라이드 가능한 변수
                                              "$button_image_size": [ "100%", "100%" ],
                                              // 오버라이드 가능한 변수
                                              "$pressed_button_name": "button.friends_drawer",
                                              // 오버라이드 가능한 변수
                                              "$button_content": "rainbowpieui_start.friends_icon",
                                              // 가로/세로 크기
                                              "size": [ "100%y", "100%" ]
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "close_button_padding": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ 4, 0 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "close_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_localui_button_default_color": [ 0.85098, 0.301961, 0.301961 ],
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_localui_button_hover_color": [ 0.85098, 0.301961, 0.301961 ],
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
                                        "$rainbowpie_localui_button_text_pressed_color": [ 1.0, 1.0, 1.0 ],
                                        // 오버라이드 가능한 변수
                                        "$button_image_size": [ "100%", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_exit",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_start.close_button_icon",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ]
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
                          "bottom_button_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", "28px" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ -8, -17 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_right",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_right",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 30,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "button_stack_panel": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%" ],
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "left_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "left_middle",
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "gathering_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%c", "100%" ],
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 32,
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "$rainbowpie_ui_flag_start_gathering_panel_ignored",
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#gathering_enabled"
                                          },
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#gathering_button_text"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "(#gathering_button_text + ',')",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#gathering_name"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "(not (($rainbowpie_ui_flag_start_gathering_denylist - #gathering_name) = $rainbowpie_ui_flag_start_gathering_denylist))",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#gathering_denylisted"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "(#gathering_enabled and (not #gathering_denylisted))",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#visible"
                                          }
                                        ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // ???/?? ??
                                            "badge_and_caption_panel": {
                                              // 패널: 다른 부품을 담는 바닥판
                                              "type": "panel",
                                              // 가로/세로 크기
                                              "size": [ 0, "100%" ],
                                              // 이 안에 들어가는 부품 목록
                                              "controls": [
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "badge_and_caption@start.badge_and_caption": {
                                                    // 기준점에서 이동하는 거리
                                                    "offset": [ "0px", -28 ],
                                                    // 기준점(어디에서 시작할지)
                                                    "anchor_from": "bottom_left",
                                                    // 붙일 위치(어디에 놓을지)
                                                    "anchor_to": "bottom_left"
                                                  }
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "gathering_button@start.gathering_button": {
                                              // 가로/세로 크기
                                              "size": [ "100%c", "100%" ],
                                              // 오버라이드 가능한 변수
                                              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button",
                                              // 오버라이드 가능한 변수
                                              "$button_image_size_override": [ "100%c + 8px", 28 ],
                                              // 기준점(어디에서 시작할지)
                                              "anchor_from": "right_middle",
                                              // 붙일 위치(어디에 놓을지)
                                              "anchor_to": "right_middle"
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "gathering_panel_padding": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ 4, 0 ],
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "$rainbowpie_ui_flag_start_gathering_panel_ignored",
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#gathering_enabled"
                                          },
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#gathering_button_text"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "(#gathering_button_text + ',')",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#gathering_name"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "(not (($rainbowpie_ui_flag_start_gathering_denylist - #gathering_name) = $rainbowpie_ui_flag_start_gathering_denylist))",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#gathering_denylisted"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "(#gathering_enabled and (not #gathering_denylisted))",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#visible"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "icon_maker_button@rainbowpieui_start.icon_maker_toggle_base": {
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_image_size": [ "100%", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$toggle_group_forced_index": 1000,
                                        // 오버라이드 가능한 변수
                                        "$toggle_view_binding_name": "show_icon_maker",
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "(not $rainbowpie_ui_flag_icon_maker)"
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "icon_maker_button_padding": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ 4, 0 ],
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "(not $rainbowpie_ui_flag_icon_maker)"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "vanilla_button@rainbowpieui_start.vanilla_button": {
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_image_size": [ "100%", "100%" ],
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "(not $rainbowpie_ui_flag_282dd0a5)",
                                        // 오버라이드 가능한 변수
                                        "$focus_id": "bottom_button",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left": "profile_button"
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "vanilla_button_padding": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ 4, 0 ],
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "(not $rainbowpie_ui_flag_282dd0a5)"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "music_button@rainbowpieui_start.music_button": {
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
                                        "$button_content": "rainbowpieui_start.music_icon",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_image_size": [ "100%", "100%" ],
                                        // 조건에 따라 변수 값을 바꾸기
                                        "variables": [
                                          {
                                            // 이 조건이 맞으면 적용
                                            "requires": "(not $rainbowpie_ui_flag_282dd0a5)",
                                            // 오버라이드 가능한 변수
                                            "$focus_id": "bottom_button",
                                            // 오버라이드 가능한 변수
                                            "$focus_override_left": "profile_button"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "music_button_padding": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ 4, 0 ],
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "((not $rainbowpie_ui_flag_82d2c0e7) or ($rainbowpie_ui_theme_background_texture = ''))"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "background_button@rainbowpieui_start.background_dialog_toggle_base": {
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "((not $rainbowpie_ui_flag_82d2c0e7) or ($rainbowpie_ui_theme_background_texture = ''))",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_image_size": [ "100%", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$toggle_group_forced_index": 1000,
                                        // 오버라이드 가능한 변수
                                        "$toggle_view_binding_name": "open_background_dialog",
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 30
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
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_middle",
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, -3 ],
                            // 가로/세로 크기
                            "size": [ "100% - 16px", 14 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 10,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "rainbowpie_version": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%cm" ],
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "left_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "left_middle",
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "rainbowpie_version_label@rainbowpie_ui_common.text_label": {
                                        // 가로/세로 크기
                                        "size": [ "default", 10 ],
                                        // ?? ??
                                        "text_alignment": "left",
                                        // 보여줄 글자
                                        "text": "($mintui_pack_name + ' ' + $rainbowpieui_branch_display_name + ' ' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version)",
                                        // ?? (R,G,B,A)
                                        "color": [ 0.85, 0.85, 0.85 ],
                                        // ???
                                        "alpha": 0.85,
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 1
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "spacer": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ 1, 0 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "addition_text@rainbowpie_ui_common.text_label": {
                                        // 보이기/숨기기(공간 유지)
                                        "visible": "(not ($rainbowpie_ui_flag_resourcepack_displayname = ''))",
                                        // 가로/세로 크기
                                        "size": [ "default", 10 ],
                                        // ?? ??
                                        "text_alignment": "left",
                                        // 보여줄 글자
                                        "text": "('| ' + $rainbowpie_ui_flag_resourcepack_displayname)",
                                        // ?? (R,G,B,A)
                                        "color": [ 0.85, 0.85, 0.85 ],
                                        // ???
                                        "alpha": 0.85,
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 1
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "addition_text_ci@rainbowpie_ui_common.text_label": {
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "(not $rainbowpieui_ci)",
                                        // 보이기/숨기기(공간 유지)
                                        "visible": "(not ($rainbowpie_ui_flag_resourcepack_identifier = ''))",
                                        // 가로/세로 크기
                                        "size": [ "default", 10 ],
                                        // ?? ??
                                        "text_alignment": "left",
                                        // 보여줄 글자
                                        "text": "('\" ' + '(' + $rainbowpie_ui_flag_resourcepack_identifier + ')' + '\"')",
                                        // ?? (R,G,B,A)
                                        "color": [ 0.85, 0.85, 0.85 ],
                                        // ???
                                        "alpha": 0.85,
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 1
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "minecraft_version_label@rainbowpie_ui_common.text_label": {
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "right_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "right_middle",
                                  // 가로/세로 크기
                                  "size": [ "default", 10 ],
                                  // ?? ??
                                  "text_alignment": "right",
                                  // 보여줄 글자
                                  "text": "#text",
                                  // ?? (R,G,B,A)
                                  "color": [ 0.85, 0.85, 0.85 ],
                                  // ???
                                  "alpha": 0.85,
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 1,
                                  // ?? ??
                                  "shadow": false,
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#version"
                                    },
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#development_version"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#version + ' (' + #development_version + ')')",
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
                ]
              }
            },
            {
              // ???/?? ??
              "startv2_topbar_background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ "100%", 30 ],
                // ???
                "alpha": "$rainbowpie_ui_theme_topbar_background_alpha",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_topbar_background_color",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 8,
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_1c167cde)",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_startv2_topbar@mintui_background.background_blur": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_1c167cde)",
                // 오버라이드 가능한 변수
                "$background_offset": [ 0, "-100% + 30px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ 0, "100% - 30px" ],
                // 오버라이드 가능한 변수
                "$background_layer": 2
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_version_panel@mintui_background.background_blur": {
                // 완전히 제거(공간도 없음)
                "ignored": "$rainbowpie_ui_flag_8dcce82d",
                // 오버라이드 가능한 변수
                "$background_offset": [ 0, "100% - 12px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ 0, "-100% + 12px" ],
                // 오버라이드 가능한 변수
                "$background_layer": 2,
                // 오버라이드 가능한 변수
                "$background_anims": [
                  "@rainbowpieui_start.version_background_back_animation_push1",
                  "@rainbowpieui_start.version_background_back_animation_pop1",
                  "@rainbowpieui_start.version_background_animation_push1",
                  "@rainbowpieui_start.version_background_animation_pop1"
                ],
                // 오버라이드 가능한 변수
                "$background_children_anims": [
                  "@rainbowpieui_start.version_background_back_animation_push2",
                  "@rainbowpieui_start.version_background_back_animation_pop2",
                  "@rainbowpieui_start.version_background_animation_push2",
                  "@rainbowpieui_start.version_background_animation_pop2"
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "version_panel@rainbowpie_ui_common.text_background": {
                // 완전히 제거(공간도 없음)
                "ignored": "$rainbowpie_ui_flag_8dcce82d",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100%", 12 ],
                // ????? ?? ?
                "animation_reset_name": "screen_animation_reset",
                // 애니메이션 목록
                "anims": [
                  "@rainbowpieui_start.version_panel_back_animation_push",
                  "@rainbowpieui_start.version_panel_back_animation_pop",
                  "@rainbowpieui_start.version_panel_animation_push",
                  "@rainbowpieui_start.version_panel_animation_pop"
                ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "rainbowpie_version_label@rainbowpie_ui_common.text_label": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "$rainbowpieui_ci",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_device_os|default": "NULL",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_device_osc|default": "NULL",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_control_mode|default": "NULL",
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 가로/세로 크기
                      "size": [ "80% - 2px", 10 ],
                      // ?? ??
                      "text_alignment": "left",
                      // 보여줄 글자
                      "text": "($mintui_pack_name + ' ' + $rainbowpieui_branch_display_name + ' ' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version + ' | ' + $rainbowpie_localui_this_device_osc + ' - ' + $rainbowpie_localui_this_device_os + ' | ' + $rainbowpie_localui_this_control_mode)",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$game_pad",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_control_mode": "Controller"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$mouse",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_control_mode": "Keyboard & Mouse"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$touch",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_control_mode": "Touch"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$win10_edition",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Windows"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_win10_arm",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Windows ARM"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_windows_10_mobile",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Windows Mobile"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$xbox_one",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Xbox One"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_ios",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "iOS"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$osx_edition",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Mac OS"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_android",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Android"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$google_os",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_osc": "Google"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$apple_os",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_osc": "Apple"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$microsoft_os",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_osc": "Microsoft"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$nx_os",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_osc": "NX"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_ps4",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "PS4"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$console_edition",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Console"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "rainbowpie_ci_version_label@rainbowpie_ui_common.text_label": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpieui_ci)",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_device_os|default": "NULL",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_device_osc|default": "NULL",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_control_mode|default": "NULL",
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 가로/세로 크기
                      "size": [ "80% - 2px", 10 ],
                      // ?? ??
                      "text_alignment": "left",
                      // 보여줄 글자
                      "text": "($mintui_pack_name + ' ' + $rainbowpieui_branch_display_name + ' ' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version + ' ' + $rainbowpieui_branch_name + '/' + $rainbowpieui_commit_id + ' | ' + $rainbowpie_localui_this_device_osc + ' - ' + $rainbowpie_localui_this_device_os + ' | ' + $rainbowpie_localui_this_control_mode)",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$game_pad",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_control_mode": "Controller"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$mouse",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_control_mode": "Keyboard & Mouse"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$touch",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_control_mode": "Touch"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$win10_edition",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Windows"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_win10_arm",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Windows ARM"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_windows_10_mobile",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Windows Mobile"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$xbox_one",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Xbox One"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_ios",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "iOS"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$osx_edition",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Mac OS"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_android",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Android"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$google_os",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_osc": "Google"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$apple_os",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_osc": "Apple"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$microsoft_os",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_osc": "Microsoft"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$nx_os",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_osc": "NX"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_ps4",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "PS4"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$console_edition",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_device_os": "Console"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "minecraft_version_label@rainbowpie_ui_common.text_label": {
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 가로/세로 크기
                      "size": [ "20% - 2px", 10 ],
                      // ?? ??
                      "text_alignment": "right",
                      // 보여줄 글자
                      "text": "#version",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#version"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#is_music_player_ui_opened": false,
            // ???/??? ?
            "#is_vanilla_start_ui_opened": false
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_music_player",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_music_player_ui_opened",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_feature_musicplayer)"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "vanilla_startui",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_vanilla_start_ui_opened",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_282dd0a5)"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#is_music_player_ui_opened or #is_vanilla_start_ui_opened))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "vanilla_startui_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_282dd0a5)",
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "screen_content@rainbowpie_ui_common.screen_content": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screen_ingame_anim1": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screen_ingame_anim2": "($rainbowpie_ui_flag_8dcce82d and $rainbowpie_ui_flag_fbadd01f)",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screen_content": [
                  {
                    // ???/?? ??
                    "bottom_button_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%c", "28px" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ -8, -17 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_right",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 30,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "button_stack_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
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
                                "startui_button@rainbowpieui_start.startui_button": {
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not $rainbowpie_ui_flag_282dd0a5)"
                                }
                              },
                              {
                                // ???/?? ??
                                "vanilla_button_padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 4, 0 ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not $rainbowpie_ui_flag_282dd0a5)"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "music_button@rainbowpieui_start.music_button": {
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
                                  "$button_content": "rainbowpieui_start.music_icon",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$toggle_view_binding_name": "open_music_player_vanilla"
                                }
                              },
                              {
                                // ???/?? ??
                                "music_button_padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 4, 0 ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "((not $rainbowpie_ui_flag_82d2c0e7) or ($rainbowpie_ui_theme_background_texture = ''))"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "background_button@rainbowpieui_start.background_dialog_toggle_base": {
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "((not $rainbowpie_ui_flag_82d2c0e7) or ($rainbowpie_ui_theme_background_texture = ''))",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$toggle_group_forced_index": 1000,
                                  // 오버라이드 가능한 변수
                                  "$toggle_view_binding_name": "open_background_dialog_vanilla",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 30
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
                    "rainbowpie_version": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/Black",
                      // 가로/세로 크기
                      "size": [ "100%c + 4px", "100%c + 2px" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -12 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // ???
                      "alpha": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 30,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "label": {
                            // 글자 표시
                            "type": "label",
                            // ?? (R,G,B,A)
                            "color": "$main_header_text_color",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2,
                            // 보여줄 글자
                            "text": "($mintui_pack_name + ' ' + $rainbowpieui_branch_display_name + ' ' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version)",
                            // 가로/세로 크기
                            "size": [ "default", 10 ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "startui@$screen_content": {}
                  }
                ]
              }
            }
          ],
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#is_music_player_ui_opened": false,
            // ???/??? ?
            "#is_vanilla_start_ui_opened": false
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_music_player_vanilla",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_music_player_ui_opened",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_feature_musicplayer)"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "vanilla_startui",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_vanilla_start_ui_opened",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_282dd0a5)"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#is_vanilla_start_ui_opened and (not #is_music_player_ui_opened))",
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
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_feature_musicplayer)",
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "music_player_screen@rainbowpie_ui_music_player.music_player_screen": {} }
          ],
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#is_music_player_ui_opened": false,
            // ???/??? ?
            "#is_music_player_ui_opened_on_vanilla": false
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_music_player",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_music_player_ui_opened"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_music_player_vanilla",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_music_player_ui_opened_on_vanilla",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_282dd0a5)"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#is_music_player_ui_opened or #is_music_player_ui_opened_on_vanilla)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "version_panel_back_animation_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 12 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "version_panel_back_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 12 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "version_panel_animation_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 12 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "version_panel_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 12 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  //

  "version_background_back_animation_push1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 12px" ],
    // 끝 값
    "to": [ 0, "100% - 0px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "version_background_back_animation_push2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 12px" ],
    // 끝 값
    "to": [ 0, "-100% + 0px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "version_background_back_animation_pop1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 12px" ],
    // 끝 값
    "to": [ 0, "100% - 0px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "version_background_back_animation_pop2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 12px" ],
    // 끝 값
    "to": [ 0, "-100% + 0px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "version_background_animation_push1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 0px" ],
    // 끝 값
    "to": [ 0, "100% - 12px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "version_background_animation_push2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 0px" ],
    // 끝 값
    "to": [ 0, "-100% + 12px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "version_background_animation_pop1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 0px" ],
    // 끝 값
    "to": [ 0, "100% - 12px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "version_background_animation_pop2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 0px" ],
    // 끝 값
    "to": [ 0, "-100% + 12px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "player_name_panel@rainbowpie_ui_common.text_background": {
    // 가로/세로 크기
    "size": [ 100, "100%" ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "right_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "right_middle",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "name_text@rainbowpie_ui_common.text_label": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // 가로/세로 크기
          "size": [ "100%", 10 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0],
          // 보여줄 글자
          "text": "#text",
          // ?? ??
          "shadow": false,
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // ?? ??
          "text_alignment": "center",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#playername",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#text"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "change_skin_icon": {
    // 이미지 표시
    "type": "image",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 사용할 이미지 경로
    "texture": "textures/ui/hangar",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 기준점에서 이동하는 거리
    "offset": [ 7, 2 ],
    // 가로/세로 크기
    "size": [ 31, 15 ]
  },

  // ???/?? ??
  "xbox_live_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 40 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.text_background": {
          // 가로/세로 크기
          "size": [ "100% - 1px", "100% - 1px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "gamerpic@start.gamerpic": {
                // 가로/세로 크기
                "size": [ 37, 37 ],
                // 기준점에서 이동하는 거리
                "offset": [ 1, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 오버라이드 가능한 변수
                "$gamerpic_visible": "#show_gamerpic"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "alex_icon@start.alex_icon": {
                // 가로/세로 크기
                "size": [ 37, 37 ],
                // 기준점에서 이동하는 거리
                "offset": [ 1, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #show_gamerpic)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "gamertag_label@rainbowpie_ui_common.text_label": {
                // 기준점에서 이동하는 거리
                "offset": [ 39, 4 ],
                // 가로/세로 크기
                "size": [ "100% - 38px", 20 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 보여줄 글자
                "text": "#gamertag_label",
                // ?? ?? ??
                "font_scale_factor": 1.2,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#gamertag_label"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #sign_in_visible)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "gamertag_label_offline@rainbowpie_ui_common.text_label": {
                // 기준점에서 이동하는 거리
                "offset": [ 39, 4 ],
                // 가로/세로 크기
                "size": [ "100% - 38px", 20 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 보여줄 글자
                "text": "#playername",
                // ?? ?? ??
                "font_scale_factor": 1.2,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#playername"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#sign_in_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "online_button_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100% - 39px", 20 ],
                // 기준점에서 이동하는 거리
                "offset": [ -0.5, -0.5 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "achievements_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_achievements",
                      // 오버라이드 가능한 변수
                      "$button_text": "gui.achievements",
                      // 왼쪽으로 이동할 대상
                      "focus_change_left": "FOCUS_OVERRIDE_STOP",
                      // 가로/세로 크기
                      "size": [ "100% - 40px", 20 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ -40, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_right"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "skin_button@common_buttons.light_content_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_skins",
                      // 오버라이드 가능한 변수
                      "$button_content": "rainbowpieui_start.change_skin_icon",
                      // 가로/세로 크기
                      "size": [ 20, 20 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ -20, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_right"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "invite_notification_button@common_buttons.light_content_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_invite_notification",
                      // 오버라이드 가능한 변수
                      "$button_content": "rainbowpieui_start.invite_notification_icon",
                      // 오른쪽으로 이동할 대상
                      "focus_change_right": "FOCUS_OVERRIDE_STOP",
                      // 가로/세로 크기
                      "size": [ 20, 20 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_right"
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #sign_in_visible)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "offline_button_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100% - 39px", 20 ],
                // 기준점에서 이동하는 거리
                "offset": [ -0.5, -0.5 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "xbl_signin_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.signin",
                      // 오버라이드 가능한 변수
                      "$button_text": "xbox.signin",
                      // 오른쪽으로 이동할 대상
                      "focus_change_right": "FOCUS_OVERRIDE_STOP",
                      // 가로/세로 크기
                      "size": [ "100% - 20px", 20 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ -20, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_right"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "skin_button@common_buttons.light_content_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_skins",
                      // 오버라이드 가능한 변수
                      "$button_content": "rainbowpieui_start.change_skin_icon",
                      // 오른쪽으로 이동할 대상
                      "focus_change_right": "FOCUS_OVERRIDE_STOP",
                      // 가로/세로 크기
                      "size": [ 20, 20 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_right"
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#sign_in_visible",
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

  // 다른 템플릿을 가져와서 확장(상속)
  "exit_button@start.main_button": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color": [ 0.85098, 0.301961, 0.301961 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_color": [ 0.85098, 0.301961, 0.301961 ],
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
    "$rainbowpie_localui_button_text_pressed_color": [ 1.0, 1.0, 1.0 ],
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_exit",
    // 오버라이드 가능한 변수
    "$button_text": "gui.exit"
  },

  // ???/?? ??
  "ui_mode_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/start/ui_mode')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "vanilla_button@common_toggles.light_ui_toggle": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.start.vanilla_tip",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_offset": [ -10, -10 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_anchor": "top_right",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_282dd0a5)",
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
    "$button_content": "rainbowpieui_start.ui_mode_icon",

    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.start.vanilla",

    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_startui_toggle",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 903,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 900,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "vanilla_startui",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "vanilla_startui",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#enabled",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_ui_flag_282dd0a5)"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "startui_button@rainbowpieui_start.vanilla_button": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.start.startui_tip",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.start.startui",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 901,
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "rainbowpie_startui",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "rainbowpie_startui",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#enabled",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_ui_flag_282dd0a5)"
      }
    ]
  },

  // ???/?? ??
  "music_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/start/music')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "music_button@rainbowpie_ui_music_player.music_player_button_toggle_base": {
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 1000,
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "open_music_player",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "$toggle_view_binding_name",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#enabled",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_ui_feature_musicplayer)"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "invite_notification_icon@start.invite_notification_icon": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "dot_panel": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 8, 8 ],
          // 기준점에서 이동하는 거리
          "offset": [ -1, -1 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": [ 1.0, 0.0, 0.0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "notification_button_text@rainbowpie_ui_common.text_label": {
                // 글자 표시
                "type": "label",
                // ?? (R,G,B,A)
                "color": [ 1.0, 1.0, 1.0 ],
                // ?? ??
                "shadow": false,
                // 보여줄 글자
                "text": "#realms_notification_count",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#realms_notification_count"
                  }
                ]
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#realms_notification_visible",
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








### ui extras
stonecutter_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: stonecutter_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_stonecutter",

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
          "size": [ 10, 10 ],
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
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
  "stonecutter_inventory_root_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 168, 162 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 애니메이션 목록
          "anims": [
            // "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            // "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            // "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            // "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
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
                "size": [ "100%", "14.19753086419753%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_inventoryheader_title": "container.stonecutter",
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
                "size": [ "100%", "100% - 14.19753086419753%" ],
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
                "size": [ "96.42857142857143%", "33.95061728395062%" ], // 162x55
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-50%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "input_item_slot@rainbowpie_ui_inventory_and_container.container_item": {
                      // 가로/세로 크기
                      "size": [ "100%y", "32.72727272727273%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "22.22222222222222%", 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "stonecutter_input_items"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "result_item_slot@rainbowpie_ui_inventory_and_container.container_item": {
                      // 기준점에서 이동하는 거리
                      "offset": [ "-22.22222222222222%", 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "stonecutter_result_items",
                      // 오버라이드 가능한 변수
                      "$button_ref": "stonecutter.result_slot_button",
                      // 오버라이드 가능한 변수
                      "$item_renderer_panel_size": [ "100%y", "69.23076923076923%" ],
                      // 가로/세로 크기
                      "size": [ "100%y", "47.27272727272727%" ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "quick_craft_button@common_buttons.light_content_button": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_button_hover_border_layer": 30,
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100%", "100%" ],
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.container_auto_place",
                      // 오버라이드 가능한 변수
                      "$button_content": "rainbowpieui_stonecutter.craft_icon",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 가로/세로 크기
                      "size": [ "100%y", "40.74074074074074%" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 이 컨트롤 안에서 쓰는 임시 저장소
                      "property_bag": {
                        // ???/??? ?
                        "#collection_name": "stonecutter_result_items",
                        // ???/??? ?
                        "#collection_index": 0
                      }
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
                "size": [ "96.42857142857143%", "33.33333333333333%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-14.81481481481481%" ]
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
                "size": [ "96.42857142857143%", "11.11111111111111%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.851851851851852%" ]
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
storage_management_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: storage_management_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_storage_management",

  // 다른 템플릿을 가져와서 확장(상속)
  "pack_description_sub_item@storage_management.texture_icon_text": {
    // 오버라이드 가능한 변수
    "$check_visible": true,
    // 오버라이드 가능한 변수
    "$text_controls": [
      {
        // ???/?? ??
        "panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "main_label@storage_management.common_label": {
                // 가로/세로 크기
                "size": [ "65%", 10 ],

                // 보여줄 글자
                "text": "$name_text",
                // ?? (R,G,B,A)
                "color": "$body_text_color",
                // 게임 값과 연결하는 규칙 목록
                "bindings": "$name_bindings"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "desc_label@storage_management.common_label": {
                // 가로/세로 크기
                "size": [ "100% - 4px", 20 ],

                // 오버라이드 가능한 변수
                "$description_name": "('#sub_' + $panel_prefix + _description)",
                // 오버라이드 가능한 변수
                "$description_binding_collection": "($panel_prefix + _panel)",

                // 보여줄 글자
                "text": "$description_name",
                // ?? (R,G,B,A)
                "color": "$light_button_secondary_default_text_color",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$description_binding_collection",
                    // 가져올 값 이름
                    "binding_name": "$description_name"
                  },
                  {
                    // 목록 인덱스/현재 항목 정보 제공
                    "binding_type": "collection_details"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "glyphs_and_version": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%c", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ -5, 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "glyph_warning@storage_management.base_glyph": {
                // 오버라이드 가능한 변수
                "$binding_name": "warning",
                // 오버라이드 가능한 변수
                "$glyph_texture": "textures/ui/WarningGlyph"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "glyph_error@storage_management.base_glyph": {
                // 오버라이드 가능한 변수
                "$binding_name": "error",
                // 오버라이드 가능한 변수
                "$glyph_texture": "textures/ui/ErrorGlyph"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "glyph_update@storage_management.base_glyph": {
                // 오버라이드 가능한 변수
                "$binding_name": "update",
                // 오버라이드 가능한 변수
                "$glyph_texture": "textures/ui/UpdateGlyph"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "version_label@storage_management.common_label": {
                // 가로/세로 크기
                "size": [ "default", "default" ],

                // 오버라이드 가능한 변수
                "$version_name": "('#sub_' + $panel_prefix + _version)",
                // 오버라이드 가능한 변수
                "$version_binding_visible": "('#sub_' + $panel_prefix + _valid)",
                // 오버라이드 가능한 변수
                "$version_binding_collection": "($panel_prefix + _panel)",

                // 보여줄 글자
                "text": "$version_name",
                // ?? (R,G,B,A)
                "color": "$light_button_secondary_default_text_color",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$version_binding_collection",
                    // 가져올 값 이름
                    "binding_name": "$version_name"
                  },
                  {
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$version_binding_collection",
                    // 가져올 값 이름
                    "binding_name": "$version_binding_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  },
                  {
                    // 목록 인덱스/현재 항목 정보 제공
                    "binding_type": "collection_details"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_version_label": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 4, "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "driven@rainbowpieui_settings_common.driven": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 가로/세로 크기
                      "size": [ 1, 8 ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "size_label@storage_management.common_label": {
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // 보여줄 글자
                "text": "$size_text",
                // ?? (R,G,B,A)
                "color": "$light_button_secondary_default_text_color",
                // 게임 값과 연결하는 규칙 목록
                "bindings": "$size_bindings"
              }
            },
            {
              // ???/?? ??
              "dev_tag": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture",
                    // 바인딩 종류(변수로 관리되는 경우도 있음)
                    "binding_type": "$texture_binding_type",
                    // 목록 이름
                    "binding_collection_name": "$texture_binding_collection",
                    // 가져올 값 이름
                    "binding_name": "$button_texture"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (('\"' + #texture - 'development_' + '\"') = #texture)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_development_icon_path"
                  },
                  {
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#zip_folder",
                    // 바인딩 종류(변수로 관리되는 경우도 있음)
                    "binding_type": "$texture_binding_type",
                    // 목록 이름
                    "binding_collection_name": "$texture_binding_collection",
                    // 가져올 값 이름
                    "binding_name": "$button_texture_zip"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (('\"' + #zip_folder - 'development_' + '\"') = #zip_folder)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#is_development_icon_zip"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#is_development_icon_path or #is_development_icon_zip)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "padding_version_label": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 4, "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "driven@rainbowpieui_settings_common.driven": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 가로/세로 크기
                            "size": [ 1, 8 ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "dev_tag_label@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "default", "default" ],
                      // 보여줄 글자
                      "text": "DEV",
                      // ?? (R,G,B,A)
                      "color": [ 1.0, 1.0, 0.333 ]
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
  "resource_toggle": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%cm" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "content_toggle@common.toggle": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],

          // ?? ??
          "checked_control": "default",
          // ?? ??
          "unchecked_control": "unchecked",
          // ?? ??
          "checked_hover_control": "hover",
          // ?? ??
          "unchecked_hover_control": "unchecked_hover",
          // ?? ??
          "checked_locked_control": "default",
          // ?? ??
          "unchecked_locked_control": "unchecked",
          // ?? ??
          "checked_locked_hover_control": "hover",
          // ?? ??
          "unchecked_locked_hover_control": "unchecked_hover",

          // 오버라이드 가능한 변수
          "$toggle_grid_collection_name": "($panel_prefix + _panel)",
          // 오버라이드 가능한 변수
          "$toggle_name": "($panel_prefix + _item_dropdown)",
          // 오버라이드 가능한 변수
          "$toggle_binding_type": "collection",
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "($panel_prefix + _toggle_check)",

          // 오버라이드 가능한 변수
          "$focus_override_right": "FOCUS_OVERRIDE_STOP",

          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "('#' + $panel_prefix + _isSelected)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#toggle_state",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "($panel_prefix + _panel)"
            }
          ],

          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "default@$item_template": {
                // 오버라이드 가능한 변수
                "$button_state": "default",
                // 오버라이드 가능한 변수
                "$checked_state": true
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover@$item_template": {
                // 오버라이드 가능한 변수
                "$button_state": "hover",
                // 오버라이드 가능한 변수
                "$checked_state": true,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "unchecked@$item_template": {
                // 오버라이드 가능한 변수
                "$button_state": "default",
                // 오버라이드 가능한 변수
                "$checked_state": false
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "unchecked_hover@$item_template": {
                // 오버라이드 가능한 변수
                "$button_state": "hover",
                // 오버라이드 가능한 변수
                "$checked_state": false,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "item_button_panel": {
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // ?? ??
          "modal": true,
          // ?? ??
          "inline_modal": true,
          // 포커스 가능 여부
          "focus_enabled": false,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 가로/세로 크기
          "size": [ 0, 0 ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 가져올 값 이름
              "binding_name": "('#' + $panel_prefix + _optionsVisible)",
              // 목록 이름
              "binding_collection_name": "($panel_prefix + _panel)"
            },
            {
              // 가져올 값 이름
              "binding_name": "#is_using_gamepad",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#modal",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            }
          ],
          // 입력 키/버튼과 동작 연결
          "button_mappings": [
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_cancel",
              // 어떤 동작을 실행할지
              "to_button_id": "button.deselect_resource",
              // 입력 시점(pressed 등)
              "mapping_type": "global"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_select",
              // 어떤 동작을 실행할지
              "to_button_id": "button.deselect_resource",
              // 입력 시점(pressed 등)
              "mapping_type": "global",
              // ?? ??
              "consume_event": false
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
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "button_panel_background": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%c + 4px", "100%c + 4px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": [ 0.12941176470588237, 0.12941176470588237, 0.12941176470588237 ],
                // ???
                "alpha": 0.7,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 20,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "button_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 가로/세로 크기
                      "size": [ "100%c", 24 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "generate_texture_list_button@storage_management.sub_item_tray_button": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not ($panel_prefix = resource) or true)",
                            // 가로/세로 크기
                            "size": [ "100%y", "100%" ],

                            // 오버라이드 가능한 변수
                            "$glyph_size": [ 11, 17 ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.generateTextureList",
                            // 오버라이드 가능한 변수
                            "$button_texture": "textures/ui/update",

                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 인덱스/현재 항목 정보 제공
                                "binding_type": "collection_details"
                              },
                              {
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection",
                                // 목록 이름
                                "binding_collection_name": "($panel_prefix + _panel)",
                                // 가져올 값 이름
                                "binding_name": "('#sub_' + $panel_prefix + _generate_texture_list_button_visible)",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "delete_button@storage_management.sub_item_tray_button": {
                            // 가로/세로 크기
                            "size": [ "100%y", "100%" ],
                            // 오버라이드 가능한 변수
                            "$glyph_size": [ 15, 17 ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.deleteResources",
                            // 오버라이드 가능한 변수
                            "$button_texture": "textures/ui/trash",
                            // 오버라이드 가능한 변수
                            "$button_tts_header": "storageManager.multiselectDelete",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 인덱스/현재 항목 정보 제공
                                "binding_type": "collection_details"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "share_button@storage_management.sub_item_tray_button": {
                            // 완전히 제거(공간도 없음)
                            "ignored": true,
                            // 가로/세로 크기
                            "size": [ "100%y", "100%" ],
                            // 오버라이드 가능한 변수
                            "$glyph_size": [ 16, 15 ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.shareResources",
                            // 오버라이드 가능한 변수
                            "$button_texture": "textures/ui/windowsshare",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 인덱스/현재 항목 정보 제공
                                "binding_type": "collection_details"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "dependency_button@storage_management.sub_item_tray_button": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "(($panel_prefix = world) or ($panel_prefix = world_template))",
                            // 가로/세로 크기
                            "size": [ "100%y", "100%" ],
                            // 오버라이드 가능한 변수
                            "$glyph_size": [ 13, 20 ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.warningDependency",
                            // 오버라이드 가능한 변수
                            "$button_texture": "#pack_info_texture",
                            // 오버라이드 가능한 변수
                            "$button_texture_binding_type": "collection",
                            // 오버라이드 가능한 변수
                            "$button_texture_collection_name": "($panel_prefix + _panel)",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 인덱스/현재 항목 정보 제공
                                "binding_type": "collection_details"
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
  "navigation_tab_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 가로/세로 크기
    "size": [ "100%", 20 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "selected_packs_navigation_tab@rainbowpieui_storage_management.top_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 오버라이드 가능한 변수
          "$tab_view_binding_name": "storage_management_navigation_tab_toggle",
          // 오버라이드 가능한 변수
          "$tab_text": "rainbowpie.ui.storage_management.tab.management",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "available_packs_navigation_tab@rainbowpieui_storage_management.top_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 오버라이드 가능한 변수
          "$tab_view_binding_name": "storage_settings_navigation_tab_toggle",
          // 오버라이드 가능한 변수
          "$tab_text": "rainbowpie.ui.storage_management.tab.settings",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 1
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "top_tab@common_tabs.tab_top": {
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "storage_management_rainbowpieui_navigation_tab",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 0,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 오버라이드 가능한 변수
    "$tab_content": "rainbowpieui_storage_management.top_tab_content"
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
  }
}
```








### ui extras
structure_editor_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: structure_editor_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_structure_editor",

  // ???/?? ??
  "structure_editor_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_sliderbar_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_ingame_anim1": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "structure_block.title"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_ingame_anim1": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "content_background@rainbowpie_ui_common.global_background": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 가로/세로 크기
                "size": [ "168px", "100% - 20px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 20 ],
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
              // 다른 템플릿을 가져와서 확장(상속)
              "left_side@structure_editor.scrolling_panel": {
                // 가로/세로 크기
                "size": [ "168px", "100% - 20px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 20 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10

              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "right_side@structure_editor.right_divider_content": {
                // 가로/세로 크기
                "size": [ "100% - 170px", "100% - 31px" ],
                // 기준점에서 이동하는 거리
                "offset": [ "170px", 23 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left"

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
toast_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: toast_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_toast_screen",

  // ???/?? ??
  "popup_anim": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // 시작 값
    "from": "$popup_distance_from",
    // 끝 값
    "to": "$popup_distance_to",
    // 걸리는 시간(초)
    "duration": "$transition_time",
    // 오버라이드 가능한 변수
    "$anim_event_name|default": "toast_animation_finished",
    // ?? ??
    "end_event": "$anim_event_name"
  }
}
```








### ui extras
trade_2_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: trade_2_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_trade2",

  // ???/?? ??
  "trade_screen_more_info": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -2 ],
    // 가로/세로 크기
    "size": [ "100% - 12px", "100% - 28px" ],
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 12,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_label@rainbowpie_ui_common.text_label": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 보여줄 글자
          "text": "More Info",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "result_item_label@rainbowpie_ui_common.text_label": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 보여줄 글자
          "text": "Result Item Info",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "item_renderer@common.item_renderer": {
          // 가로/세로 크기
          "size": [ 12, 12 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 20 ],
          // 오버라이드 가능한 변수
          "$item_collection_name": "trade2_result_item",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "result_item_rc_label@rainbowpie_ui_common.text_label": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 보여줄 글자
          "text": "Aux Rc: ",
          // 기준점에서 이동하는 거리
          "offset": [ 14, 20 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "item_renderer_rc@rainbowpie_ui_common.item_renderer": {
          // 가로/세로 크기
          "size": [ 12, 12 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 기준점에서 이동하는 거리
          "offset": [ 44, 20 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#item_id_aux",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#item_id_aux_int",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "trade2_result_item"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#item_id_aux_int / 65565)",
              // 결과가 들어갈 속성
              "target_property_name": "#item_id"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#item_id * 65565)",
              // 결과가 들어갈 속성
              "target_property_name": "#item_id_aux"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "result_item_info_label@rainbowpie_ui_common.text_label": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 보여줄 글자
          "text": "#text",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 32 ],
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
            },
            {
              // 가져올 값 이름
              "binding_name": "#item_id_aux",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "trade2_result_item"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#item_id_aux / 65565)",
              // 결과가 들어갈 속성
              "target_property_name": "#item_id"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#item_id * 65565)",
              // 결과가 들어갈 속성
              "target_property_name": "#item_id_aux_rc"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#hover_text + '\nitem_id_aux: ' + #item_id_aux + '\nitem_id: ' + #item_id + '\nitem_id_aux(rc): ' + #item_id_aux_rc)",
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
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "more_navigation_tab_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "header_controls": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 보이기/숨기기(공간 유지)
    "visible": "$rainbowpie_ui_flag_inventory_debug",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "more_navigation_tab@rainbowpieui_trade2.top_tab": {
          // 가로/세로 크기
          "size": [ "200%y", "100%" ],
          // 오버라이드 가능한 변수
          "$tab_view_binding_name": "more_navigation_tab_toggle",
          // 오버라이드 가능한 변수
          "$tab_text": "MORE INFO",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 11
        }
      }
    ]
  },

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
    "$radio_toggle_group": false,
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
    "$tab_content": "rainbowpieui_trade2.top_tab_content"
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

  // ???/?? ??
  "tier_title": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 16 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_background@rainbowpie_ui_common.title_background": {
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
                    "title_label@rainbowpie_ui_common.title_label": {
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 보여줄 글자
                      "text": "#tier_name",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#tier_name",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "$collection_name"
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
              "binding_name": "#is_tier_unlocked",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_name",
              // ?? ???
              "binding_condition": "always"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_background_locked@rainbowpie_ui_common.title_background": {
          // ?? (R,G,B,A)
          "color": [ 0.4, 0.4, 0.4 ],
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
                    "title_label@rainbowpie_ui_common.title_label": {
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 보여줄 글자
                      "text": "#tier_name",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#tier_name",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "$collection_name"
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
              "binding_name": "(not #is_tier_unlocked)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_name",
              // ?? ???
              "binding_condition": "always"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "trade_toggle_unchecked": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "toggle_checked_normal@rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details"
            },
            {
              // 가져올 값 이름
              "binding_name": "#trade_possible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "toggle_checked_red@rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_default_color": [ 0.85098, 0.301961, 0.301961 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details"
            },
            {
              // 가져올 값 이름
              "binding_name": "(not #trade_possible)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "trade_toggle_checked": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "toggle_checked_normal@rainbowpieui_settings_common.rainbowpie_ui_toggle_checked": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details"
            },
            {
              // 가져올 값 이름
              "binding_name": "#trade_possible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "toggle_checked_red@rainbowpieui_settings_common.rainbowpie_ui_toggle_checked": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_button_default_color": [ 0.85098, 0.301961, 0.301961 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details"
            },
            {
              // 가져올 값 이름
              "binding_name": "(not #trade_possible)",
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








### ui extras
world_section_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: world_section_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_world_section",

  // 다른 템플릿을 가져와서 확장(상속)
  "level_texture_pack_header@rainbowpieui_resource_packs.resource_packs_header": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_type": "texture",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control": "level_rp_search_text_box_display_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_placeholder": "rainbowpie.ui.resource_packs.search.placeholder.resource",
    // 오버라이드 가능한 변수
    "$selected_pack_items": "#selected_pack_items_level",
    // 오버라이드 가능한 변수
    "$available_pack_items": "#available_pack_items_level",
    // 오버라이드 가능한 변수
    "$selected_label_text": "resourcePack.selected.title.packs",
    // 오버라이드 가능한 변수
    "$available_label_text": "resourcePack.available.title.packs",
    // 오버라이드 가능한 변수
    "$show_checkbox": true,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "level_texture_pack_button_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "addon_header@rainbowpieui_resource_packs.resource_packs_header": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_type": "addon",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control": "level_bp_search_text_box_display_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_placeholder": "rainbowpie.ui.resource_packs.search.placeholder.behavior",
    // 오버라이드 가능한 변수
    "$selected_pack_items": "#selected_pack_items_addon",
    // 오버라이드 가능한 변수
    "$available_pack_items": "#available_pack_items_addon",
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
        "source_control_name": "addon_button_toggle",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  }
}
```








### ui extras
world_templates_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: world_templates_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_world_templates",

  // ???/?? ??
  "world_templates_picker_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "$screen_title"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "template_scroll_content@world_templates.template_scroll_content": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_scrollbar_enabled": true,
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100%", "100% - 20px" ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "list_title": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 15 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "list_title@rainbowpie_ui_common.title_background": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_list_title_text|default": "TITLE TEXT",
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
                      "text": "$rainbowpie_localui_list_title_text",
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
```








### ui extras
xbl_friend_finder_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: xbl_friend_finder_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_xbl_friend_finder",

  // ???/?? ??
  "xbl_friend_finder_screen_content": {
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
          "$rainbowpie_localui_screen_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "dialog@rainbowpie_ui_dialog.dialog_panel": {
                // 가로/세로 크기
                "size": [ 250, 110 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-20%" ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "xbox.profile.addFriend",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_xbl_friend_finder.dialog_content"
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "main_panel@xbl_friend_finder.main_panel": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle"
        }
      }
    ]
  }
}
```













기본 UI 모음 1
16 개







[분할 목록으로 돌아가기](preview.html#example-view)

### 기본


### 기본
_global_variables.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: _global_variables.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	//////// Transition times ////////
	"$transition_time_push_size": 0.2, //Shorter screen animation times - Alien
	// 오버라이드 가능한 변수
	"$transition_time_pop_size": 0.2, //Shorter screen animation times - Alien
	// 오버라이드 가능한 변수
	"$transition_time_push": 0.2, //Shorter screen animation times - Alien
	// 오버라이드 가능한 변수
	"$transition_time_pop": 0.2, //Shorter screen animation times - Alien
	// 오버라이드 가능한 변수
	"$container_transition_time_push": 0.2, //Shorter screen animation times - Alien
	// 오버라이드 가능한 변수
	"$container_transition_time_pop": 0.2, //Shorter screen animation times - Alien
	// 오버라이드 가능한 변수
	"$loading_bar_transition": 0.2 //Shorter screen animation times - Alien
}
```









[분할 목록으로 돌아가기](preview.html#example-view)

