---
title: 예제 미리보기 (5/12)
outline: false
search: false
---

# 예제 미리보기 (5/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### ui extras
pause_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: pause_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_pause",

  // 다른 템플릿을 가져와서 확장(상속)
  "quit_button@pause.pause_button_template": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_quit",
    // 오버라이드 가능한 변수
    "$button_text": "pauseScreen.quit",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 오버라이드 가능한 변수
    "$focus_override_down": "icon_panel_main_focus",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($is_secondary_client and not $is_editor_playtest_roundtrip)",
        // 오버라이드 가능한 변수
        "$button_text": "pauseScreen.secondaryClientLeave"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$is_editor_playtest_roundtrip",
        // 오버라이드 가능한 변수
        "$button_text": "pauseScreen.editor.quit"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$is_on_3p_server",
        // 오버라이드 가능한 변수
        "$button_text": "menu.disconnect"
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

  // ???/?? ??
  "ui_mode_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/pause/ui_mode')",
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
    "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.pause.vanilla_tip",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_offset": [ -10, -10 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_anchor": "top_right",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_56cd0456)",
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
    "$button_content": "rainbowpieui_pause.ui_mode_icon",

    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.pause.vanilla",

    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_pauseui_toggle",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 903,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 900,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "vanilla_pauseui",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "vanilla_pauseui",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#enabled",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_ui_flag_56cd0456)"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "pauseui_button@rainbowpieui_pause.vanilla_button": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text": "rainbowpie.ui.pause.pauseui_tip",
    // 오버라이드 가능한 변수
    "$button_text": "rainbowpie.ui.pause.pauseui",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 901,
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "rainbowpie_pauseui",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "rainbowpie_pauseui",
        // 계산식/참조 값
        "source_property_name": "(not #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#enabled",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_ui_flag_56cd0456)"
      }
    ]
  },

  // ???/?? ??
  "pause_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
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
              "tip_text_background": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_pause_quit_doubleclick)",
                // 이미지 표시
                "type": "image",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 가로/세로 크기
                "size": [ "100%c + 12px", "100%c + 5px" ],
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/r_black')",
                // ???
                "alpha": 0,
                // 애니메이션 목록
                "anims": ["@rainbowpieui_pause.quittip_background_out_in"],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 30,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "item_text_label@rainbowpie_ui_common.text_label_notheme": {
                      // ?? ?? ?
                      "max_size": [ 160, 24 ],
                      // ?? ??
                      "text_alignment": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 31,
                      // 보여줄 글자
                      "text": "$tip_text",
                      // 오버라이드 가능한 변수
                      "$tip_text": "rainbowpie.ui.pause.quit.tiptext",
                      // ???
                      "alpha": 0,
                      // 애니메이션 목록
                      "anims": ["@rainbowpieui_pause.quittip_text_out_in"],
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$is_on_3p_server",
                          // 오버라이드 가능한 변수
                          "$tip_text": "rainbowpie.ui.pause.quit.tiptext.disconnect"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "header@rainbowpie_ui_common.screen_header": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screenheader_ingame_anim1": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screenheader_title": "menu.returnToGame",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screenheader_content_panel": "rainbowpieui_pause.player_name_panel"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "screen_content@rainbowpie_ui_common.screen_content": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screen_ingame_anim1": true,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_this_screen": "pause.pause_screen_content",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$touch",
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_this_screen": "rainbowpieui_pause.touch_pause_screen_content"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$mouse",
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_this_screen": "rainbowpieui_pause.mouse_pause_screen_content"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$game_pad",
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_this_screen": "rainbowpieui_pause.gamepad_pause_screen_content"
                  }
                ],
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
                                "music_button@rainbowpie_ui_music_player.music_player_button_toggle_base": {
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
                                  "$button_content": "rainbowpieui_pause.music_icon",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$toggle_view_binding_name": "open_music_player",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "open_music_player",
                                      // 계산식/참조 값
                                      "source_property_name": "(not #toggle_state)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#enabled",
                                      // 완전히 제거(공간도 없음)
                                      "ignored": "(not $rainbowpie_ui_feature_musicplayer)"
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
                                  "ignored": "(not $rainbowpie_ui_feature_musicplayer)"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "vanilla_button@rainbowpieui_pause.vanilla_button": {
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not $rainbowpie_ui_flag_56cd0456)"
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
                    "screen@$rainbowpie_localui_this_screen": {}
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "mask_layer_version_panel@mintui_background.background_mask": {
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
                  "@rainbowpieui_pause.version_background_back_animation_push1",
                  "@rainbowpieui_pause.version_background_back_animation_pop1",
                  "@rainbowpieui_pause.version_background_animation_push1",
                  "@rainbowpieui_pause.version_background_animation_pop1"
                ],
                // 오버라이드 가능한 변수
                "$background_children_anims": [
                  "@rainbowpieui_pause.version_background_back_animation_push2",
                  "@rainbowpieui_pause.version_background_back_animation_pop2",
                  "@rainbowpieui_pause.version_background_animation_push2",
                  "@rainbowpieui_pause.version_background_animation_pop2"
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "version_panel@rainbowpie_ui_common.text_background": {
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
                  "@rainbowpieui_pause.version_panel_back_animation_push",
                  "@rainbowpieui_pause.version_panel_back_animation_pop",
                  "@rainbowpieui_pause.version_panel_animation_push",
                  "@rainbowpieui_pause.version_panel_animation_pop"
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
                      "$rainbowpie_localui_this_split": "",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_device_os": "NULL",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_device_osc": "NULL",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_control_mode": "NULL",
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
                      "text": "($mintui_pack_name + ' ' + $rainbowpieui_branch_display_name + ' ' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version + $rainbowpie_localui_this_split + $rainbowpie_ui_flag_resourcepack_displayname)",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "(not ($rainbowpie_ui_flag_resourcepack_displayname = ''))",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_split": " | "
                        },
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
                      "$rainbowpie_localui_this_split": "",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_device_os": "NULL",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_device_osc": "NULL",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_control_mode": "NULL",
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
                      "text": "($mintui_pack_name + ' ' + $rainbowpieui_branch_display_name + ' ' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version + ' ' + $rainbowpieui_branch_name + '/' + $rainbowpieui_commit_id + $rainbowpie_localui_this_split + $rainbowpie_ui_flag_resourcepack_displayname)",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "(not ($rainbowpie_ui_flag_resourcepack_displayname = ''))",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_split": " | "
                        },
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
                    "permission_label@rainbowpie_ui_common.text_label": {
                      // 완전히 제거(공간도 없음)
                      "ignored": true,
                      // 보이기/숨기기(공간 유지)
                      "visible": "(not $rainbowpie_ui_flag_111d8c96)",
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
                      "text": "#player_permission_text",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 이 컨트롤 안에서 쓰는 임시 저장소
                      "property_bag": {
                        // ???/??? ?
                        "#collection_name": "players_collection",
                        // ???/??? ?
                        "#collection_index": 0
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#player_permission_level_icon_texture",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "players_collection"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "('rainbowpie.ui.pause.permissions.' + ((#player_permission_level_icon_texture - 'textures/ui/permissions_') - '_hand' - '_star'- '_crown'- '_dots'))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#player_permission_text"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "pause_annoucement_label@rainbowpie_ui_common.text_label": {
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
                      "text": "pauseScreen.gameIsPaused",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#pause_annoucement_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
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
            "#is_vanilla_pause_ui_opened": false
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
              "source_control_name": "vanilla_pauseui",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_vanilla_pause_ui_opened",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_56cd0456)"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#is_music_player_ui_opened or #is_vanilla_pause_ui_opened))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "vanilla_pauseui_content": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_56cd0456)",
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
                                "music_button@rainbowpie_ui_music_player.music_player_button_toggle_base": {
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
                                  "$button_content": "rainbowpieui_pause.music_icon",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$toggle_view_binding_name": "open_music_player_vanilla",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "open_music_player_vanilla",
                                      // 계산식/참조 값
                                      "source_property_name": "(not #toggle_state)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#enabled",
                                      // 완전히 제거(공간도 없음)
                                      "ignored": "(not $rainbowpie_ui_feature_musicplayer)"
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
                                  "ignored": "(not $rainbowpie_ui_feature_musicplayer)"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "pauseui_button@rainbowpieui_pause.pauseui_button": {
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not $rainbowpie_ui_flag_56cd0456)"
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
                    "pauseui@$screen_content": {}
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
            "#is_vanilla_pause_ui_opened": false
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
              "source_control_name": "vanilla_pauseui",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#is_vanilla_pause_ui_opened",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_56cd0456)"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#is_vanilla_pause_ui_opened and (not #is_music_player_ui_opened))",
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

  // ???/?? ??
  "quittip_background_out_in": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": 0.0,
    // 끝 값
    "to": 0.6,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_pause.quittip_background_out_wait",
    // ?? ??
    "play_event": "rainbowpie.quit_button_tip"
  },

  // ???/?? ??
  "quittip_background_out_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 2,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_pause.quittip_background_out_anim"
  },

  // ???/?? ??
  "quittip_background_out_anim": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": 0.6,
    // 끝 값
    "to": 0
  },

  // ???/?? ??
  "quittip_text_out_in": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": 0,
    // 끝 값
    "to": 1,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_pause.quittip_text_out_wait",
    // ?? ??
    "play_event": "rainbowpie.quit_button_tip"
  },

  // ???/?? ??
  "quittip_text_out_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 2,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_pause.quittip_text_out_anim"
  },

  // ???/?? ??
  "quittip_text_out_anim": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0
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
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_list_title_bindings|default": [],
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
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": "$rainbowpie_localui_list_title_bindings"
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
  "top_tab@common_tabs.tab_top": {
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
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
    "$tab_content": "rainbowpieui_pause.top_tab_content"
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
  "extra_button_icon": {
    // 이미지 표시
    "type": "image",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_path_mouse_icon": "($rainbowpie_ui_path_theme + '/icon/pause/mouse')",
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/placeholder')",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 가로/세로 크기
    "size": [ 20, 20 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "achievements_icon_extra@extra_button_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/achievements')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "invite_icon_extra@extra_button_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/invite')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "friends_icon_extra@extra_button_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/friends')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "skin_icon_extra@extra_button_icon": {
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "music_icon_extra@extra_button_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/music')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "store_icon_extra@extra_button_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/marketplace')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "take_screenshot_icon_extra@extra_button_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/screenshot')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "feed_icon_extra@extra_button_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/feed')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "feedback_icon_extra@extra_button_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_localui_path_mouse_icon + '/feedback')"
  },

  // ???/?? ??
  "gamepad_pause_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "center_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 가로/세로 크기
          "size": [ "100%c", 184 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "button_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ 150, "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "return_to_game_button@pause.return_to_game_button": {
                      // 오버라이드 가능한 변수
                      "$button_focus_precedence": 3,
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 가로/세로 크기
                      "size": [ "100%", 23 ],
                      // 포커스 이동용 ID
                      "focus_identifier": "play_button",
                      // 위로 이동할 대상
                      "focus_change_up": "quit_button"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "settings_button@pause.settings_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 가로/세로 크기
                      "size": [ "100%", 23 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "achievements_button@pause.pause_button_template": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_achievements",
                      // 오버라이드 가능한 변수
                      "$button_text": "gui.achievements",
                      // 가로/세로 크기
                      "size": [ "100%", 23 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "invite_players_button@pause.pause_button_template": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_invite_players",
                      // 오버라이드 가능한 변수
                      "$button_text": "pauseScreen.invite",
                      // 가로/세로 크기
                      "size": [ "100%", 23 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "friends_button@pause.pause_button_template": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.friends_drawer",
                      // 오버라이드 가능한 변수
                      "$button_text": "realmsInvitationScreen.friends",
                      // 가로/세로 크기
                      "size": [ "100%", 23 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "store_button@pause.pause_button_template": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "$is_secondary_client",
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_store",
                      // 오버라이드 가능한 변수
                      "$button_text": "$store_button_text",
                      // 가로/세로 크기
                      "size": [ "100%", 23 ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#store_button_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#enabled",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "profile_button@pause.pause_button_template": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 가로/세로 크기
                      "size": [ "100%", 23 ],
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.to_profile_or_skins_screen",
                      // 오버라이드 가능한 변수
                      "$button_text": "profileScreen.header"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "quit_button@rainbowpieui_pause.quit_button": {
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
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 가로/세로 크기
                      "size": [ "100%", 23 ],
                      // 포커스 이동용 ID
                      "focus_identifier": "quit_button",
                      // 아래로 이동할 대상
                      "focus_change_down": "play_button"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "pause_playerlist_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 200, "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_list_scrolling_panel@common.scrolling_panel": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_scrollbar_enabled": true,
                      // 가로/세로 크기
                      "size": [ "100% - 1px", "100%" ],
                      // 오버라이드 가능한 변수
                      "$show_background": false,
                      // 오버라이드 가능한 변수
                      "$scroll_size": [ "5px", "100% - 4px" ],
                      // 오버라이드 가능한 변수
                      "$scroll_bar_left_padding_size": [ 1, 0 ],
                      // 오버라이드 가능한 변수
                      "$scroll_bar_right_padding_size": [ 1, 0 ],
                      // 오버라이드 가능한 변수
                      "$scrolling_content": "rainbowpieui_pause.player_list"
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
  "mouse_pause_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "goto_profile_panel": {
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // 가로/세로 크기
          "size": [ "50% - 90px", 50 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -10 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "player_renderer": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "live_player_renderer",
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#look_at_cursor": true
                },
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
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
                "layer": 1
              }
            }
          ],
          // 입력 키/버튼과 동작 연결
          "button_mappings": [
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_select",
              // 어떤 동작을 실행할지
              "to_button_id": "button.to_profile_or_skins_screen",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_ok",
              // 어떤 동작을 실행할지
              "to_button_id": "button.to_profile_or_skins_screen",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "center_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ 180, "100%c" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 72,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "tab_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 180, 23 ],
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
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 가로/세로 크기
                      "size": [ "100% - 1px", "100% - 1px" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pause_navigation_tab@rainbowpieui_pause.top_tab": {
                            // 가로/세로 크기
                            "size": [ "fill", "100%" ],
                            // 오버라이드 가능한 변수
                            "$tab_view_binding_name": "pause_navigation_tab_toggle",
                            // 오버라이드 가능한 변수
                            "$tab_text": "rainbowpie.ui.pause.tab.pause",
                            // 오버라이드 가능한 변수
                            "$toggle_group_forced_index": 10,
                            // 오버라이드 가능한 변수
                            "$toggle_default_state": true
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "playerlist_navigation_tab@rainbowpieui_pause.top_tab": {
                            // 가로/세로 크기
                            "size": [ "fill", "100%" ],
                            // 오버라이드 가능한 변수
                            "$tab_view_binding_name": "playerlist_navigation_tab_toggle",
                            // 오버라이드 가능한 변수
                            "$tab_text": "rainbowpie.ui.pause.tab.playerlist",
                            // 오버라이드 가능한 변수
                            "$toggle_group_forced_index": 11
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "scoreboard_navigation_tab@rainbowpieui_pause.top_tab": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_pause_tab_scoreboard)",
                            // 가로/세로 크기
                            "size": [ "fill", "100%" ],
                            // 오버라이드 가능한 변수
                            "$tab_view_binding_name": "scoreboard_navigation_tab_toggle",
                            // 오버라이드 가능한 변수
                            "$tab_text": "rainbowpie.ui.pause.tab.scoreboard",
                            // 오버라이드 가능한 변수
                            "$toggle_group_forced_index": 13,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#list_has_display_objective",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#enabled"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "persona_navigation_tab@rainbowpieui_pause.top_tab": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "$rainbowpie_ui_flag_pause_myinfo_disabled",
                            // 가로/세로 크기
                            "size": [ "fill", "100%" ],
                            // 오버라이드 가능한 변수
                            "$tab_view_binding_name": "persona_navigation_tab_toggle",
                            // 오버라이드 가능한 변수
                            "$tab_text": "rainbowpie.ui.pause.tab.persona",
                            // 오버라이드 가능한 변수
                            "$toggle_group_forced_index": 12
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
              "content_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$content_panel_size",
                // 오버라이드 가능한 변수
                "$content_panel_size": [ "100%", 190 ],
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$rainbowpie_ui_flag_111d8c96",
                    // 오버라이드 가능한 변수
                    "$content_panel_size": [ "100%", 214 ]
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "pause_button_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "title_background": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", "40px" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "title_background@rainbowpie_ui_common.text_background": {
                                  // 가로/세로 크기
                                  "size": [ "100% - 1px", "100% - 1px" ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "title_text@rainbowpie_ui_common.title_text": {
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "center",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "center",
                                        // 오버라이드 가능한 변수
                                        "$title_text_scale": "$rainbowpie_ui_theme_global_title_text_scale",
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "splash_text@common_art.splash_text": {
                                              // 완전히 제거(공간도 없음)
                                              "ignored": "(not $rainbowpie_ui_flag_pause_splash_text)"
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
                          "return_to_game_button@pause.return_to_game_button": {
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 가로/세로 크기
                            "size": [ "100%", 20 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "settings_and_how_to_play_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", 20 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "settings_button@pause.settings_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left",
                                  // 가로/세로 크기
                                  "size": [ "50%", 20 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "how_to_play_button@pause.pause_button_template": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_how_to_play",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "menu.howToPlay",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_right",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_right",
                                  // 가로/세로 크기
                                  "size": [ "50%", 20 ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "achievements_and_invite_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", 20 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "feedback_and_store_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", 20 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "feedback_button@pause.pause_button_template": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_b00b6372)",
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 가로/세로 크기
                            "size": [ "100%", 20 ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.feedback_button_pressed",
                            // 오버라이드 가능한 변수
                            "$button_text": "options.group.feedback"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "profile_button@pause.pause_button_template": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "$rainbowpie_ui_flag_b00b6372",
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 가로/세로 크기
                            "size": [ "100%", 20 ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.to_profile_or_skins_screen",
                            // 오버라이드 가능한 변수
                            "$button_text": "profileScreen.header"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "quit_button@rainbowpieui_pause.quit_button": {
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
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 가로/세로 크기
                            "size": [ "100%", 20 ],
                            // 입력 키/버튼과 동작 연결
                            "button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_select",
                                // 어떤 동작을 실행할지
                                "to_button_id": "$pressed_button_name",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // 완전히 제거(공간도 없음)
                                "ignored": "$rainbowpie_ui_flag_pause_quit_doubleclick"
                              },
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_select",
                                // 어떤 동작을 실행할지
                                "to_button_id": "rainbowpie.quit_button_tip",
                                // 입력 시점(pressed 등)
                                "mapping_type": "pressed",
                                // 완전히 제거(공간도 없음)
                                "ignored": "(not $rainbowpie_ui_flag_pause_quit_doubleclick)"
                              },
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_select",
                                // 어떤 동작을 실행할지
                                "to_button_id": "$pressed_button_name",
                                // 입력 시점(pressed 등)
                                "mapping_type": "double_pressed",
                                // 완전히 제거(공간도 없음)
                                "ignored": "(not $rainbowpie_ui_flag_pause_quit_doubleclick)"
                              },
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.menu_ok",
                                // 어떤 동작을 실행할지
                                "to_button_id": "$pressed_button_name",
                                // 입력 시점(pressed 등)
                                "mapping_type": "focused"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "extra_button_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", 30 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "achievements_button@common_buttons.light_content_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_enabled": true,
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_text": "menu.achievements",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_hover_border_layer": 30,
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_achievements",
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_pause.achievements_icon_extra",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left",
                                  // 가로/세로 크기
                                  "size": [ 30, 30 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 0, 0 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "invite_players_button@common_buttons.light_content_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_enabled": true,
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_text": "invite.title",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_hover_border_layer": 30,
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_invite_players",
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_pause.invite_icon_extra",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left",
                                  // 가로/세로 크기
                                  "size": [ 30, 30 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 30, 0 ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#invite_button_visible",
                                      // 게임이 주는 전역 값 연결
                                      "binding_type": "global"
                                    },
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#invite_button_enabled"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#invite_button_visible and #invite_button_enabled)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#enabled"
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "friends_button@common_buttons.light_content_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_enabled": true,
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_text": "realmsInvitationScreen.friends",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_hover_border_layer": 30,
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.friends_drawer",
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_pause.friends_icon_extra",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left",
                                  // 가로/세로 크기
                                  "size": [ 30, 30 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 60, 0 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "store_button@common_buttons.light_content_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_enabled": true,
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_text": "$store_button_text",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_hover_border_layer": 30,
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_store",
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_pause.store_icon_extra",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left",
                                  // 가로/세로 크기
                                  "size": [ 30, 30 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 90, 0 ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#store_button_visible",
                                      // 가져온 값을 다른 속성으로 연결
                                      "binding_name_override": "#enabled",
                                      // 게임이 주는 전역 값 연결
                                      "binding_type": "global"
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "realms_stories_button@common_buttons.light_content_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_enabled": true,
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_text": "pauseScreen.realmsStories",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_hover_border_layer": 30,
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_feed",
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_pause.feed_icon_extra",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left",
                                  // 가로/세로 크기
                                  "size": [ 30, 30 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 120, 0 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "take_screenshot_button@common_buttons.light_content_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_enabled": true,
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_desc_text": "key.screenshot",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_hover_border_layer": 30,
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.screenshot",
                                  // 오버라이드 가능한 변수
                                  "$button_tts_header": "key.screenshot",
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_pause.take_screenshot_icon_extra",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left",
                                  // 가로/세로 크기
                                  "size": [ 30, 30 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 150, 0 ],
                                  // 오버라이드 가능한 변수
                                  "$button_text": "key.screenshot",
                                  // ??? ??
                                  "sound_name": "random.screenshot",
                                  // ??? ?? ?
                                  "sound_volume": 1.0,
                                  // ??? ?? ?
                                  "sound_pitch": 1.0
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "profile_button_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", 24 ],
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_111d8c96)",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "profile_button_stack_panel": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 가로/세로 크기
                                  "size": [ "100%", "100%" ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 0, 0.5 ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "profile_button@common_buttons.light_content_button": {
                                        // 가로/세로 크기
                                        "size": [ "fill", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$button_image_size": [ "100% - 1px", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_content_size": [ "100% - 1px", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.my_profile_horizontal_button_content",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_profile"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "change_skin_button@common_buttons.light_content_button": {
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "(not $rainbowpie_ui_flag_b00b6372)",
                                        // 가로/세로 크기
                                        "size": [ "fill", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$button_image_size": [ "100% - 1px", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_content_size": [ "100% - 1px", "100%" ],
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.change_skin_button_content",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.to_profile_or_skins_screen"
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
                          "source_control_name": "pause_navigation_tab_toggle",
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
                    "pause_playerlist_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "player_list_scrolling_panel@common.scrolling_panel": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_scrollbar_enabled": true,
                            // 가로/세로 크기
                            "size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$show_background": false,
                            // 오버라이드 가능한 변수
                            "$scroll_size": [ "5px", "100% - 4px" ],
                            // 오버라이드 가능한 변수
                            "$scroll_bar_left_padding_size": [ 1, 0 ],
                            // 오버라이드 가능한 변수
                            "$scroll_bar_right_padding_size": [ 1, 0 ],
                            // 오버라이드 가능한 변수
                            "$scrolling_content": "rainbowpieui_pause.player_list"
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
                    "pause_scoreboard_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_pause_tab_scoreboard)",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "debug01@rainbowpie_ui_common.debug_draw": {
                            // 가로/세로 크기
                            "size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_debug_name": "pause_scoreboard_panel"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "player_list_scrolling_panel@common.scrolling_panel": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_scrollbar_enabled": true,
                            // 가로/세로 크기
                            "size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$show_background": false,
                            // 오버라이드 가능한 변수
                            "$scroll_size": [ "5px", "100% - 4px" ],
                            // 오버라이드 가능한 변수
                            "$scroll_bar_left_padding_size": [ 1, 0 ],
                            // 오버라이드 가능한 변수
                            "$scroll_bar_right_padding_size": [ 1, 0 ],
                            // 오버라이드 가능한 변수
                            "$scrolling_content": "rainbowpieui_pause.scoreboard_player_list"
                          }
                        }
                      ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "scoreboard_navigation_tab_toggle",
                          // 계산식/참조 값
                          "source_property_name": "#toggle_state",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  // 也许有一天我会完善这个东西，但是目前这个东西根本没有任何用。
                  // 我的本意是让服务器修改这个界面并且通过scoreboard在这个页面显示一些东西。
                  // 但是我根本没有开服务器。
                  {
                    // ???/?? ??
                    "pause_persona_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "$rainbowpie_ui_flag_pause_myinfo_disabled",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "debug01@rainbowpie_ui_common.debug_draw": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_debug_name": "pause_persona_panel"
                          }
                        },
                        {
                          // ???/?? ??
                          "header_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", 24 ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, 0.5 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 24,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "profile_button@common_buttons.light_content_button": {
                                  // 가로/세로 크기
                                  "size": [ "100%", 24 ],
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100% - 1px", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_content_size": [ "100% - 1px", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_content": "rainbowpieui_pause.my_profile_horizontal_button_content",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.menu_profile"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "paper_doll_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100% - 24.5px" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, -40 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_middle",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "paper_doll": {
                                  // 특수 렌더러(그라디언트/플레이어 등)
                                  "type": "custom",
                                  // 커스텀 렌더러 종류
                                  "renderer": "paper_doll_renderer",
                                  // ?? ??
                                  "camera_tilt_degrees": 0,
                                  // ?? ??
                                  "starting_rotation": 0,
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 2,
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "center",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "center",
                                  // ?? ??
                                  "rotation": "gesture_x",
                                  // 가로/세로 크기
                                  "size": [ "100%", "100%" ],
                                  // ?? ??
                                  "use_selected_skin": false,
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
                                      "binding_name": "#paper_doll_skin"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "viewer_panel",
                                      // 계산식/참조 값
                                      "source_property_name": "#gesture_delta_source",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#gesture_delta_source"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // ?? ??
                                      "source_control_name": "viewer_panel",
                                      // 계산식/참조 값
                                      "source_property_name": "#gesture_mouse_delta_x",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#gesture_mouse_delta_x"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        { "profile_button@pause.dressing_room_button": {} }
                      ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "persona_navigation_tab_toggle",
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
    ]
  },

  // ???/?? ??
  "scoreboard_player_list": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // ??? ?? ?
    "focus_container": true,
    // ??? ?? ?
    "use_last_focus": true,
    // ??? ?? ?
    "focus_navigation_mode_right": "contained",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_list_title@rainbowpieui_pause.list_title": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_list_title_text": "#player_list_title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_list_title_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#player_list_title"
            }
          ]
        }
      },
      { "scored_players_grid_panel@scoreboard.players_scored_grid_list": {} },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "unscored_players_title@rainbowpieui_pause.list_title": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_list_title_text": "rainbowpie.ui.pause.title.unscored_players",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#list_scores_not_empty",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      { "unscored_players_grid_panel@scoreboard.players_unscored_grid_list": {} }
    ]
  },

  // ???/?? ??
  "player_count": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "40px", "10px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "player_count_text_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_count_title@rainbowpie_ui_common.title_label": {
                // 보여줄 글자
                "text": "rainbowpie.ui.pause.title.player_total",
                // 가로/세로 크기
                "size": [ "default", 10 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // ???/?? ??
              "padding_middle": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 1, 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_count_text@rainbowpie_ui_common.title_label": {
                // 보여줄 글자
                "text": "#player_count_str",
                // 가로/세로 크기
                "size": [ "default", 10 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 인덱스/현재 항목 정보 제공
                    "binding_type": "collection_details",
                    // 목록 이름
                    "binding_collection_name": "players_collection"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#collection_index",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "players_collection"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#collection_index + 1)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#player_count"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('\"' + #player_count + '\"')",
                    // 결과가 들어갈 속성
                    "target_property_name": "#player_count_str"
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
  "player_list": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // ??? ?? ?
    "focus_container": true,
    // ??? ?? ?
    "use_last_focus": true,
    // ??? ?? ?
    "focus_navigation_mode_right": "contained",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 0, 0.5 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "server_infomation@rainbowpie_ui_common.title_background": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_server_infomation_enabled)",
          // 가로/세로 크기
          "size": [ "100%", 36 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "horizontal_stack_panel": {
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
                    "server_logo": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100%y", "100%" ],
                      // 사용할 이미지 경로
                      "texture": "($rainbowpie_ui_path_home + '/server_logo/' + $rainbowpie_ui_flag_server_infomation_logo_name)",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // ???/?? ??
                    "infomation_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "infomation_stack_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 가로/세로 크기
                            "size": [ "100% - 4px", "100% - 4px" ],
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
                                  "size": [ "100%", "100%cm" ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "server_name@rainbowpie_ui_common.title_label": {
                                        // 가로/세로 크기
                                        "size": [ "default", "default" ],
                                        // 보여줄 글자
                                        "text": "$rainbowpie_ui_flag_server_infomation_server_name",
                                        // ?? ?? ??
                                        "font_scale_factor": 1.2,
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 1
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "server_desc@rainbowpie_ui_common.title_label": {
                                        // 가로/세로 크기
                                        "size": [ "fill", "default" ],
                                        // 보여줄 글자
                                        "text": "$rainbowpie_ui_flag_server_infomation_description",
                                        // ?? ??
                                        "text_alignment": "right",
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 1
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "server_website@rainbowpie_ui_common.editable_label": {
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%c" ],
                                  // ??? ?? ?
                                  "text_box_name": "server_website_text",
                                  // ??? ?? ?
                                  "text_control": "server_website_display_text",
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "server_website_display_text@rainbowpie_ui_common.title_label": {
                                        // 가로/세로 크기
                                        "size": [ "default", "default" ],
                                        // 보여줄 글자
                                        "text": "$rainbowpie_ui_flag_server_infomation_link_website",
                                        // ?? (R,G,B,A)
                                        "color":  [ 1.0, 1.0, 0.333 ],
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": 1
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "server_support@rainbowpie_ui_common.editable_label": {
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%c" ],
                                  // ??? ?? ?
                                  "text_box_name": "server_support_text",
                                  // ??? ?? ?
                                  "text_control": "server_support_display_text",
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "server_support_display_text@rainbowpie_ui_common.title_label": {
                                        // 가로/세로 크기
                                        "size": [ "default", "default" ],
                                        // 보여줄 글자
                                        "text": "$rainbowpie_ui_flag_server_infomation_link_support",
                                        // ?? (R,G,B,A)
                                        "color":  [ 1.0, 1.0, 0.333 ],
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
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "list_title@rainbowpie_ui_common.title_background": {
          // 가로/세로 크기
          "size": [ "100%", 14 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "text_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100% - 4px", 10 ],
                // ?? ????
                "clips_children": true,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "players_list_title@rainbowpie_ui_common.title_label": {
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ],
                      // 보여줄 글자
                      "text": "#players_list_title",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#players_list_title"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "player_count_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%c", "100%" ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_317055aa)",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "player_grid": {
                            // 격자 컨테이너: 칸칸이 배치
                            "type": "grid",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%c" ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_right",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_right",
                            // ??? ?? ?
                            "grid_item_template": "rainbowpieui_pause.player_count",
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
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 0, 0.5 ]
        }
      },
      { "players_grid_panel@pause.players_grid": {} },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "scoreboard_player_list@rainbowpieui_pause.scoreboard_player_list": {
          // 완전히 제거(공간도 없음)
          "ignored": "($rainbowpie_ui_flag_pause_tab_scoreboard)",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#list_has_display_objective",
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
  "hide_paper_doll_anim_exit_push@rainbowpieui_pause.hide_paper_doll_anim": {
    // 시작 값
    "from": [ 0, 36 ],
    // 끝 값
    "to": [ "100%x", 36 ],
    // ?? ??
    "play_event": "screen.exit_push"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hide_paper_doll_anim_exit_pop@rainbowpieui_pause.hide_paper_doll_anim": {
    // 시작 값
    "from": [ 0, 36 ],
    // 끝 값
    "to": [ "100%x", 36 ],
    // ?? ??
    "play_event": "screen.exit_pop"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hide_paper_doll_anim_entrance_push@rainbowpieui_pause.hide_paper_doll_anim": {
    // 시작 값
    "from": [ "100%x", 36 ],
    // 끝 값
    "to": [ 0, 36 ],
    // ?? ??
    "play_event": "screen.entrance_push"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hide_paper_doll_anim_entrance_pop@rainbowpieui_pause.hide_paper_doll_anim": {
    // 시작 값
    "from": [ "100%x", 36 ],
    // 끝 값
    "to": [ 0, 36 ],
    // ?? ??
    "play_event": "screen.entrance_pop"
  },

  // ???/?? ??
  "change_skin_button_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 24 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_text@rainbowpie_ui_common.text_label_notheme": {
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 보여줄 글자
          "text": "options.skin.change",
          // ?? ??
          "text_alignment": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 가로/세로 크기
          "size": [ "100% - 25px", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3
        }
      },
      {
        // ???/?? ??
        "button_icon": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "gradient_renderer",
          // 가로/세로 크기
          "size": [ "100%y", "100% - 2px" ],
          // 기준점에서 이동하는 거리
          "offset": [ -1, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
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
                "size": [ 78, "100%x" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 36 ],
                // ?? ??
                "enable_scissor_test": true,
                // ????? ?? ?
                "animation_reset_name": "screen_animation_reset",
                // 애니메이션 목록
                "anims": [
                  "@rainbowpieui_pause.hide_paper_doll_anim_exit_push",
                  "@rainbowpieui_pause.hide_paper_doll_anim_exit_pop",
                  "@rainbowpieui_pause.hide_paper_doll_anim_entrance_push",
                  "@rainbowpieui_pause.hide_paper_doll_anim_entrance_pop"
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "my_profile_horizontal_button_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 24 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "gamerpic": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "profile_image_renderer",
          // ???
          "alpha": 2.0,
          // 가로/세로 크기
          "size": [ 22, 22 ],
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
              "binding_name": "#profile_image_options"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "alex_icon": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/icon_alex",
          // 가로/세로 크기
          "size": [ 22, 22 ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_gamertag@rainbowpie_ui_common.text_label_notheme": {
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 보여줄 글자
          "text": "#playername",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 기준점에서 이동하는 거리
          "offset": [ 25, 2 ],
          // 가로/세로 크기
          "size": [ "100% - 25px", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#playername"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "permission_label@rainbowpie_ui_common.text_label": {
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 보여줄 글자
          "text": "#player_permission_text",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 기준점에서 이동하는 거리
          "offset": [ 25, -2 ],
          // 가로/세로 크기
          "size": [ "100%  -25px", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#collection_name": "players_collection",
            // ???/??? ?
            "#collection_index": 0
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#player_permission_level_icon_texture",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "players_collection"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('rainbowpie.ui.pause.permissions.' + ((#player_permission_level_icon_texture - 'textures/ui/permissions_') - '_hand' - '_star'- '_crown'- '_dots'))",
              // 결과가 들어갈 속성
              "target_property_name": "#player_permission_text"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "return_to_game_button_content": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "return_to_game_icon": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 사용할 이미지 경로
          "texture": "textures/ui/store_play_button",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 가로/세로 크기
          "size": [ 40, 40 ],
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_label@rainbowpie_ui_common.text_label_notheme": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100% - 4px", 12 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 보여줄 글자
          "text": "menu.returnToGame",
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      }
    ]
  },

  // ???/?? ??
  "howtoplay_button_content": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "howtoplay_icon": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 사용할 이미지 경로
          "texture": "textures/ui/how_to_play_button_default_light",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 가로/세로 크기
          "size": [ 18, 18 ],
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_label@rainbowpie_ui_common.text_label_notheme": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100% - 4px", 12 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 보여줄 글자
          "text": "menu.howToPlay",
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      }
    ]
  },

  // ???/?? ??
  "settings_button_content": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "settings_icon": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 사용할 이미지 경로
          "texture": "textures/ui/settings_glyph_2x",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 가로/세로 크기
          "size": [ 18, 18 ],
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_label@rainbowpie_ui_common.text_label_notheme": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100% - 4px", 12 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 보여줄 글자
          "text": "menu.settings",
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      }
    ]
  },

  // ???/?? ??
  "store_button_content": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "store_icon": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 사용할 이미지 경로
          "texture": "textures/ui/store_home_icon",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // 가로/세로 크기
          "size": [ 18, 18 ],
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_label@rainbowpie_ui_common.text_label_notheme": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100% - 4px", 12 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 보여줄 글자
          "text": "$store_button_text",
          // ?? (R,G,B,A)
          "color": "$text_color"
        }
      }
    ]
  },

  // ???/?? ??
  "achievements_icon": {
    // 이미지 표시
    "type": "image",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 사용할 이미지 경로
    "texture": "textures/ui/achievements",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 가로/세로 크기
    "size": [ 18, 18 ]
  },

  // ???/?? ??
  "invite_icon": {
    // 이미지 표시
    "type": "image",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 사용할 이미지 경로
    "texture": "textures/ui/invite_base",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 가로/세로 크기
    "size": [ 18, 18 ]
  },

  // ???/?? ??
  "feedback_icon": {
    // 이미지 표시
    "type": "image",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 사용할 이미지 경로
    "texture": "textures/ui/Feedback",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 가로/세로 크기
    "size": [ 18, 18 ]
  },

  // ???/?? ??
  "friends_icon": {
    // 이미지 표시
    "type": "image",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 사용할 이미지 경로
    "texture": "textures/ui/FriendsIcon",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 가로/세로 크기
    "size": [ 18, 18 ]
  },

  // ???/?? ??
  "touch_pause_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "player_list": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%", "100% - 19px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 19 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "button_panel_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "button_panel_tile_panel_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "button_panel_tile_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "button_panel_tile": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 오버라이드 가능한 변수
                                  "$tile_panel_anchor": "bottom_left",
                                  // 오버라이드 가능한 변수
                                  "$tile_panel_offset": [ 0.5, -12.5 ],
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "$tile_panel_anchor",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "$tile_panel_anchor",
                                  // 가로/세로 크기
                                  "size": [ 180, 180 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": "$tile_panel_offset",
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "return_to_game_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_continue",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.return_to_game_button_content",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 90, 90 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 0, 0 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "settings_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_settings",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.settings_button_content",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 60, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 0, 90 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "how_to_play_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_how_to_play",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.howtoplay_button_content",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 60, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 60, 90 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "achievements_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_achievements",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.achievements_icon",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 45, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 90, 45 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "invite_players_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_invite_players",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.invite_icon",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 45, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 135, 45 ],
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#invite_button_visible",
                                            // 게임이 주는 전역 값 연결
                                            "binding_type": "global"
                                          },
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#invite_button_enabled"
                                          },
                                          {
                                            // 계산/조건 결과를 연결
                                            "binding_type": "view",
                                            // 계산식/참조 값
                                            "source_property_name": "(#invite_button_visible and #invite_button_enabled)",
                                            // 결과가 들어갈 속성
                                            "target_property_name": "#enabled"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "take_screenshot_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.screenshot",
                                        // 오버라이드 가능한 변수
                                        "$button_tts_header": "key.screenshot",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 45, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 90, 0 ],
                                        // 오버라이드 가능한 변수
                                        "$button_content": "pause.take_screenshot_icon",
                                        // ??? ??
                                        "sound_name": "random.screenshot",
                                        // ??? ?? ?
                                        "sound_volume": 1.0,
                                        // ??? ?? ?
                                        "sound_pitch": 1.0
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "friends_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.friends_drawer",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.friends_icon",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 45, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 135, 0 ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "store_button@common_buttons.light_content_button": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.menu_store",
                                        // 오버라이드 가능한 변수
                                        "$button_content": "rainbowpieui_pause.store_button_content",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 60, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 120, 90 ],
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#store_button_visible",
                                            // 가져온 값을 다른 속성으로 연결
                                            "binding_name_override": "#enabled",
                                            // 게임이 주는 전역 값 연결
                                            "binding_type": "global"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "quit_button@rainbowpieui_pause.quit_button": {
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
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 120, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 0, 135 ],
                                        // 입력 키/버튼과 동작 연결
                                        "button_mappings": [
                                          {
                                            // 어떤 입력을 받을지
                                            "from_button_id": "button.menu_select",
                                            // 어떤 동작을 실행할지
                                            "to_button_id": "$pressed_button_name",
                                            // 입력 시점(pressed 등)
                                            "mapping_type": "pressed",
                                            // 완전히 제거(공간도 없음)
                                            "ignored": "$rainbowpie_ui_flag_pause_quit_doubleclick"
                                          },
                                          {
                                            // 어떤 입력을 받을지
                                            "from_button_id": "button.menu_select",
                                            // 어떤 동작을 실행할지
                                            "to_button_id": "rainbowpie.quit_button_tip",
                                            // 입력 시점(pressed 등)
                                            "mapping_type": "pressed",
                                            // 완전히 제거(공간도 없음)
                                            "ignored": "(not $rainbowpie_ui_flag_pause_quit_doubleclick)"
                                          },
                                          {
                                            // 어떤 입력을 받을지
                                            "from_button_id": "button.menu_select",
                                            // 어떤 동작을 실행할지
                                            "to_button_id": "$pressed_button_name",
                                            // 입력 시점(pressed 등)
                                            "mapping_type": "double_pressed",
                                            // 완전히 제거(공간도 없음)
                                            "ignored": "(not $rainbowpie_ui_flag_pause_quit_doubleclick)"
                                          },
                                          {
                                            // 어떤 입력을 받을지
                                            "from_button_id": "button.menu_ok",
                                            // 어떤 동작을 실행할지
                                            "to_button_id": "$pressed_button_name",
                                            // 입력 시점(pressed 등)
                                            "mapping_type": "focused"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "feedback_button@pause.pause_button_template": {
                                        // 오버라이드 가능한 변수
                                        "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "top_left",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "top_left",
                                        // 가로/세로 크기
                                        "size": [ 60, 45 ],
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 120, 135 ],
                                        // 오버라이드 가능한 변수
                                        "$pressed_button_name": "button.feedback_button_pressed",
                                        // 오버라이드 가능한 변수
                                        "$button_text": "options.group.feedback"
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
                            "size": [ "100%", 11 ]
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
              "player_model": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 60, "100%" ],
                // ?? ????
                "clips_children": true,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "goto_profile_panel": {
                      // 마우스/커서 따라다니는 패널
                      "type": "input_panel",
                      // 가로/세로 크기
                      "size": [ 50, "50%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, "1%" ],
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "player_renderer": {
                            // 특수 렌더러(그라디언트/플레이어 등)
                            "type": "custom",
                            // 기준점에서 이동하는 거리
                            "offset": [ 2, -30 ],
                            // 커스텀 렌더러 종류
                            "renderer": "live_player_renderer",
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#look_at_cursor": true
                            },
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
                            "layer": 1
                          }
                        }
                      ],
                      // 입력 키/버튼과 동작 연결
                      "button_mappings": [
                        {
                          // 어떤 입력을 받을지
                          "from_button_id": "button.menu_select",
                          // 어떤 동작을 실행할지
                          "to_button_id": "button.to_profile_or_skins_screen",
                          // 입력 시점(pressed 등)
                          "mapping_type": "pressed"
                        },
                        {
                          // 어떤 입력을 받을지
                          "from_button_id": "button.menu_ok",
                          // 어떤 동작을 실행할지
                          "to_button_id": "button.to_profile_or_skins_screen",
                          // 입력 시점(pressed 등)
                          "mapping_type": "pressed"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "pause_playerlist_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100% - 2px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_list_scrolling_panel@common.scrolling_panel": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_scrollbar_enabled": true,
                      // 가로/세로 크기
                      "size": [ "100% - 2px", "100% - 3px" ],
                      // 오버라이드 가능한 변수
                      "$show_background": false,
                      // 오버라이드 가능한 변수
                      "$scroll_size": [ "5px", "100% - 4px" ],
                      // 오버라이드 가능한 변수
                      "$scroll_bar_left_padding_size": [ 1, 0 ],
                      // 오버라이드 가능한 변수
                      "$scroll_bar_right_padding_size": [ 1, 0 ],
                      // 오버라이드 가능한 변수
                      "$scrolling_content": "rainbowpieui_pause.player_list"
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
  "player_name_panel@rainbowpie_ui_common.text_background": {
    // 가로/세로 크기
    "size": [ 100, "100%" ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "right_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "right_middle",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 보이기/숨기기(공간 유지)
    "visible": "(not $rainbowpie_ui_flag_111d8c96)",
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
  }
}
```








### ui extras
permissions_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: permissions_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_permissions",

  // ???/?? ??
  "permissions_screen_content": {
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
          "$rainbowpie_localui_screenheader_title": "permissions.title"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // ???/?? ??
              "content_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100%", "100% - 20px" ],
                // 쌓는 방향(가로/세로)
                "orientation": "vertical",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "content_panel@permissions.content_panel": {} }
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
persona_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: persona_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_persona",

  // ???/?? ??
  "background_blur_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_d28dfac0)",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 이 안에 들어가는 부품 목록
    "controls": [
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
          "offset": [ 34, 22 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_1@mintui_background.background_blur": {
                // 오버라이드 가능한 변수
                "$background_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$background_children_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$background_offset": [ "-50% - 16px", -24 ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "50% - 18px", 2 ],
                // 오버라이드 가능한 변수
                "$background_layer": 0
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "mask_layer_1@mintui_background.background_mask": {
                // 오버라이드 가능한 변수
                "$background_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$background_children_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$background_offset": [ "-50% - 16px", -24 ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "50% - 18px", 2 ],
                // 오버라이드 가능한 변수
                "$background_layer": 0
              }
            }
          ]
        }
      },
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
          "offset": [ "50% + 19px", "100% - 65px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_1@mintui_background.background_blur": {
                // 오버라이드 가능한 변수
                "$background_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$background_children_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$background_offset": [ "-50% - 21px", "-100% + 63px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ 2, 2 ],
                // 오버라이드 가능한 변수
                "$background_layer": 0
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "mask_layer_1@mintui_background.background_mask": {
                // 오버라이드 가능한 변수
                "$background_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$background_children_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$background_offset": [ "-50% - 21px", "-100% + 63px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ 2, 2 ],
                // 오버라이드 가능한 변수
                "$background_layer": 0
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
        "binding_name": "(not #preview_appearance_on)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  // ???/?? ??
  "restricted_content_popup_dialog_content": {
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
                    "popup_dialog_message@rainbowpie_ui_common.text_label_notheme": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 가로/세로 크기
                      "size": [ "100% - 18px", "default" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 4 ],
                      // ?? ??
                      "text_alignment": "center",
                      // 보여줄 글자
                      "text": "dr.modal.restricted_content_text",
                      // ?? (R,G,B,A)
                      "color": "$dressing_room_right_side_default_text_color"
                    }
                  },
                  {
                    // ???/?? ??
                    "image": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "60%", "50%x" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/warning_sad_steve",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ]
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
                          "button_panel": {
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
                                "Ok_button@persona.differences_popup_ok_button": {
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
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
  },

  // ???/?? ??
  "background_panel_design2": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "full_screen_background@rainbowpie_ui_common.global_background": {
          // ?? (R,G,B,A)
          "color": [ 0.0, 0.0, 0.0 ],
          // ???
          "alpha": 0.3,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "ingame_background": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 가로/세로 크기
          "size": [ 204, 132 ],
          // 완전히 제거(공간도 없음)
          "ignored": "$is_pregame",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "popup_dialog_background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_dialog_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_dialog_background_alpha"
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
play_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: play_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_play",

  // ???/?? ??
  "play_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_common.screen_header": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_ingame_anim1": "($rainbowpie_ui_flag_8dcce82d and $rainbowpie_ui_flag_fbadd01f)",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_title": "menu.play",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screenheader_content_panel": "rainbowpieui_play.tab_navigation_panel"
        }
      },
      {
        // ???/?? ??
        "popup_dialog_factory": {
          // 리스트를 자동으로 생성하는 공장
          "type": "factory",
          // 팩토리 템플릿 매핑
          "control_ids": {
            // ?? ??
            "join_by_code": "@play.popup_dialog_join_by_code",
            // ?? ??
            "high_ping_warning": "@play.popup_dialog_high_ping"
          }
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_ingame_anim1": "($rainbowpie_ui_flag_8dcce82d and $rainbowpie_ui_flag_fbadd01f)",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // ???/?? ??
              "tab_content_panel": {
                // 마우스/커서 따라다니는 패널
                "type": "input_panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": "$rainbowpie_localui_this_size",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_localui_this_offset",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_this_size": [ "65%", "100% - 16px" ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_this_offset": [ 0, 2 ],
                // ?? ??
                "ttsSectionContainer": true,
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($rainbowpie_ui_flag_play_bottom_panel and (not $game_pad))",
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_this_size": [ "65%", "100% - 38px" ],
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_this_offset": [ 0, -20 ]
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "worlds_tab_content@play.worlds_scroll_content": {
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "world_navigation_tab_toggle",
                          // 계산식/참조 값
                          "source_property_name": "#toggle_state",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "friends_tab_content@play.friends_scroll_content": {
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "friends_navigation_tab_toggle",
                          // 계산식/참조 값
                          "source_property_name": "#toggle_state",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "server_tab_content@play.server_scroll_content": {
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "server_navigation_tab_toggle",
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
      },
      {
        // ???/?? ??
        "blur_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "(not ($rainbowpie_ui_flag_play_bottom_panel and (not $game_pad)))",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ "17.5%", 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_1@mintui_background.background_blur": {
                // 오버라이드 가능한 변수
                "$background_ingame": true,
                // 오버라이드 가능한 변수
                "$background_offset": [ "-35%", "100% - 22px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "17.5%", "-100% + 22px" ],
                // 오버라이드 가능한 변수
                "$background_layer": 6,
                // 오버라이드 가능한 변수
                "$background_anims": [
                  "@rainbowpieui_play.bottom_background_back_animation_push1",
                  "@rainbowpieui_play.bottom_background_back_animation_pop1",
                  "@rainbowpieui_play.bottom_background_animation_push1",
                  "@rainbowpieui_play.bottom_background_animation_pop1"
                ],
                // 오버라이드 가능한 변수
                "$background_children_anims": [
                  "@rainbowpieui_play.bottom_background_back_animation_push2",
                  "@rainbowpieui_play.bottom_background_back_animation_pop2",
                  "@rainbowpieui_play.bottom_background_animation_push2",
                  "@rainbowpieui_play.bottom_background_animation_pop2"
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "bottom_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "(not ($rainbowpie_ui_flag_play_bottom_panel and (not $game_pad)))",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 가로/세로 크기
          "size": [ "65%", 22 ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 애니메이션 목록
          "anims": [
            "@rainbowpieui_play.bottom_panel_back_animation_push",
            "@rainbowpieui_play.bottom_panel_back_animation_pop",
            "@rainbowpieui_play.bottom_panel_animation_push",
            "@rainbowpieui_play.bottom_panel_animation_pop"
          ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background@rainbowpie_ui_common.global_background": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // ???/?? ??
              "worlds_tab_buttons": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100% - 1px", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "create_new_world_button@play.create_new_world_button": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "quick_play_button@play.quick_play_button": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "import_world_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ],
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "($local_world_upload)",
                          // 오버라이드 가능한 변수
                          "$pressed_button_name": "button.archived_world_upload"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "(not $local_world_upload)",
                          // 오버라이드 가능한 변수
                          "$pressed_button_name": "button.menu_import_level"
                        }
                      ],
                      // 오버라이드 가능한 변수
                      "$button_text": "accessibility.play.importWorld",
                      // 포커스 이동용 ID
                      "focus_identifier": "import_world_button",
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
                    "source_control_name": "world_navigation_tab_toggle",
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
              "friends_tab_buttons": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100% - 1px", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "add_friend_button@play.add_friend_button": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "((not $supports_add_friend) or $nx_os or $is_ps4)",
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#add_friend_button_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#cross_platform_enabled",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#enabled"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "join_by_code_button@play.join_by_code_button": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "$is_editor_mode_enabled",
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ]
                    }
                  },
                  {
                    // ???/?? ??
                    "notification_button_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "13%", "100%" ],
                      // 보이기/숨기기(공간 유지)
                      "visible": "#realms_notification_button_visible",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "notification_button@play.notification_button": {
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                            // 오버라이드 가능한 변수
                            "$button_content": "play.notification_content",
                            // 오버라이드 가능한 변수
                            "$button_tts_header": "realmsInvitationScreen.shareTitle",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_right",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_right"
                          }
                        }
                      ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#realms_notification_button_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
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
                    "source_control_name": "friends_navigation_tab_toggle",
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
              "server_tab_buttons": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100% - 1px", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "add_server_button@play.add_server_toggle_button": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "join_third_party_server_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.connect_to_third_party_server",
                      // 오버라이드 가능한 변수
                      "$button_text": "networkWorld.join_server",
                      // 오버라이드 가능한 변수
                      "$focus_override_left": "left_panel",
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#is_third_party_server_selected",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "join_server_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 1px", "100% - 2px" ],
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_network_server_item",
                      // 오버라이드 가능한 변수
                      "$button_text": "networkWorld.join_server",
                      // 오버라이드 가능한 변수
                      "$focus_override_left": "left_panel",
                      // 가로/세로 크기
                      "size": [ "fill", "100%" ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#is_additional_server_selected",
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
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "server_navigation_tab_toggle",
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
  },

  // ???/?? ??
  "bottom_panel_back_animation_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 22 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "bottom_panel_back_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 22 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "bottom_panel_animation_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 22 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "bottom_panel_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 22 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  //

  "bottom_background_back_animation_push1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "-35%", "100% - 22px" ],
    // 끝 값
    "to": [ "-35%", "100% - 0px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "bottom_background_back_animation_push2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "17.5%", "-100% + 22px" ],
    // 끝 값
    "to": [ "17.5%", "-100% + 0px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "bottom_background_back_animation_pop1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "-35%", "100% - 22px" ],
    // 끝 값
    "to": [ "-35%", "100% - 0px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "bottom_background_back_animation_pop2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "17.5%", "-100% + 22px" ],
    // 끝 값
    "to": [ "17.5%", "-100% + 0px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "bottom_background_animation_push1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "-35%", "100% - 0px" ],
    // 끝 값
    "to": [ "-35%", "100% - 22px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "bottom_background_animation_push2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "17.5%", "-100% + 0px" ],
    // 끝 값
    "to": [ "17.5%", "-100% + 22px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "bottom_background_animation_pop1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "-35%", "100% - 0px" ],
    // 끝 값
    "to": [ "-35%", "100% - 22px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "bottom_background_animation_pop2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "17.5%", "-100% + 0px" ],
    // 끝 값
    "to": [ "17.5%", "-100% + 22px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
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
  },

  // ???/?? ??
  "tab_navigation_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "65%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_navigation_tab@rainbowpieui_play.world_navigation_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "friends_navigation_tab@rainbowpieui_play.friends_navigation_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "server_navigation_tab@rainbowpieui_play.server_navigation_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  // ???/?? ??
  "common_navigation_tab_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "icon_section": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "icon@$tab_icon": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "text_section": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "text@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 보여줄 글자
                "text": "$tab_text_name",
                // 기준점에서 이동하는 거리
                "offset": [ -1, 0 ],
                // ?? (R,G,B,A)
                "color": "$text_color"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "count_section": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
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
              "count_background_image": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/numberBGFront",
                // 가로/세로 크기
                "size": [ "100%c + 3px", "100%c" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "count@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 보여줄 글자
                      "text": "$count_text_name",
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "$count_text_name"
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
  "friends_navigation_tab_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "left_icon_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "icon_section": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "$visibility_binding_override_name",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "icon@$tab_icon": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 기준점에서 이동하는 거리
                      "offset": "@play.anim_icon_wait_B"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "icon_section_2": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "$visibility_binding_override_name",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "icon@$tab_icon_2": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 3,
                      // 기준점에서 이동하는 거리
                      "offset": "@play.anim_icon_wait_A"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "icon_section_nobounce": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "$visibility_binding_override_name_nobounce",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "icon@$tab_icon_nobounce": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -3 ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "icon_section_nobounce_2": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "$visibility_binding_override_name_nobounce",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "icon@$tab_icon_nobounce_2": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 3,
                      // 기준점에서 이동하는 거리
                      "offset": [ -5, 2 ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "icon_section_notification": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "$visibility_binding_override_name_notification",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "icon@$tab_icon_notification": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 3,
                      // 기준점에서 이동하는 거리
                      "offset": [ -0.5, -1 ]
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
        "text_section": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "text@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 보여줄 글자
                "text": "$tab_text_name",
                // 기준점에서 이동하는 거리
                "offset": [ -1, 0 ],
                // ?? (R,G,B,A)
                "color": "$text_color"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "count_section": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
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
              "count_background_image": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/numberBGFront",
                // 가로/세로 크기
                "size": [ "100%c + 3px", "100%c" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "count@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 보여줄 글자
                      "text": "$count_text_name",
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "$count_text_name"
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
  "top_tab@common_tabs.tab_top": {
    // 오버라이드 가능한 변수
    "$rainbowpie_toggle_unchecked_default_alpha": 0,
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_content": "rainbowpieui_play.common_navigation_tab_content",
    // 오버라이드 가능한 변수
    "$toggle_tts_enabled_binding_type": "global",
    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "navigation_tab",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": "$default_tab",
    // 오버라이드 가능한 변수
    "$toggle_tts_type_priority": 1001,
    // 오버라이드 가능한 변수
    "$toggle_tts_toggle_on_text": "",
    // 오버라이드 가능한 변수
    "$toggle_tts_toggle_off_text": "",
    // 오버라이드 가능한 변수
    "$toggle_tts_index_priority": 1002
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "world_navigation_tab@rainbowpieui_play.top_tab": {
    // 오버라이드 가능한 변수
    "$tab_view_binding_name": "world_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$tab_icon": "play.worlds_icon",
    // 오버라이드 가능한 변수
    "$count_text_name": "#world_item_count",
    // 오버라이드 가능한 변수
    "$tab_text_name": "selectWorld.tab.worlds",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$is_editor_mode_enabled",
        // 오버라이드 가능한 변수
        "$tab_text_name": "playscreen.editor.worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "friends_navigation_tab@rainbowpieui_play.top_tab": {
    // 오버라이드 가능한 변수
    "$tab_view_binding_name": "friends_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$tab_icon": "play.friends_icon_2",
    // 오버라이드 가능한 변수
    "$tab_icon_2": "play.friends_icon_1",
    // 오버라이드 가능한 변수
    "$tab_icon_nobounce": "play.friends_icon_2",
    // 오버라이드 가능한 변수
    "$tab_icon_nobounce_2": "play.friends_icon_1",
    // 오버라이드 가능한 변수
    "$tab_icon_notification": "play.invite_icon",
    // 오버라이드 가능한 변수
    "$visibility_binding_override_name": "#friends_tab_show_bouncing",
    // 오버라이드 가능한 변수
    "$visibility_binding_override_name_nobounce": "#friends_tab_show_not_bouncing",
    // 오버라이드 가능한 변수
    "$visibility_binding_override_name_notification": "#friends_tab_show_invites",
    // 오버라이드 가능한 변수
    "$count_text_name": "#friend_world_item_count",
    // 오버라이드 가능한 변수
    "$tab_text_name": "selectWorld.tab.friends",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 1,
    // 오버라이드 가능한 변수
    "$tab_content": "rainbowpieui_play.friends_navigation_tab_content"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "server_navigation_tab@rainbowpieui_play.top_tab": {
    // 오버라이드 가능한 변수
    "$tab_view_binding_name": "server_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$tab_icon": "play.server_tab_icon",
    // 오버라이드 가능한 변수
    "$count_text_name": "#server_world_item_count",
    // 오버라이드 가능한 변수
    "$tab_text_name": "selectWorld.tab.thirdParty",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 2
  },

  // ???/?? ??
  "cloud_upload_and_edit_world_stack_panel": {
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#cloud_upload_enabled",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cloud_upload_button@common_buttons.dark_content_button": {
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100% - 1px" ],
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 가로/세로 크기
          "size": [ "100%y - 1px", "100%" ],
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.cloud_upload",
          // 오버라이드 가능한 변수
          "$button_content": "play.upload_icon",
          // 오버라이드 가능한 변수
          "$button_tts_header": "accessibility.play.uploadWorld",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "local_worlds"
            },
            {
              // 가져올 값 이름
              "binding_name": "#cloud_upload_enabled",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "padding_2": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "local_world_edit_button@common_buttons.dark_content_button": {
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100% - 1px" ],
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
          // 가로/세로 크기
          "size": [ "100%y - 1px", "100%" ],
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.menu_local_world_item_edit",
          // 오버라이드 가능한 변수
          "$button_content": "play.edit_icon",
          // 오버라이드 가능한 변수
          "$button_tts_header": "accessibility.play.editWorld",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "local_worlds"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "common_button_template@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "create_new_world_button_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "create_new_world_button@rainbowpieui_play.create_new_world_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "create_new_world_button@play.create_new_world_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ]
  },

  // ???/?? ??
  "quick_play_button_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "50%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "quick_play_button@rainbowpieui_play.quick_play_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "quick_play_button@play.quick_play_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 가로/세로 크기
    "size": [ "50%", "100%" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "import_world_button@rainbowpieui_play.common_button_template": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($local_world_upload)",
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.archived_world_upload"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $local_world_upload)",
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.menu_import_level"
      }
    ],
    // 오버라이드 가능한 변수
    "$button_tts_header": "accessibility.play.importWorld",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 가로/세로 크기
    "size": [ "100%y", "100%" ],
    // 오버라이드 가능한 변수
    "$button_content": "play.import_icon",
    // 오버라이드 가능한 변수
    "$button_size_override": [ "100% + 1px", "100%" ],
    // 오버라이드 가능한 변수
    "$button_background_anchor": "top_right",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 오버라이드 가능한 변수
    "$create_new_row_focus_override_up|default": "close_button",
    // 오버라이드 가능한 변수
    "$focus_override_up": "$create_new_row_focus_override_up",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#worlds_tab_import_button_focus_down_override",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#focus_change_down"
      }
    ]
  }
}
```








### ui extras
popup_dialog_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: popup_dialog_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_popup_dialog",

  // ???/?? ??
  "modal_dialog_with_buttons": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 가로/세로 크기
    "size": [ 204, 132 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_popupdialog_button_panel": "common.empty_panel",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$three_buttons_visible",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_popupdialog_button_panel": "rainbowpie_popup_dialog.three_buttons_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$destructive_three_buttons_visible",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_popupdialog_button_panel": "rainbowpie_popup_dialog.three_buttons_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$two_buttons_visible",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_popupdialog_button_panel": "rainbowpie_popup_dialog.two_buttons_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$destructive_two_buttons_visible",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_popupdialog_button_panel": "rainbowpie_popup_dialog.two_buttons_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$single_button_visible",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_popupdialog_button_panel": "rainbowpie_popup_dialog.single_button_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$no_buttons_visible",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_popupdialog_button_panel": "rainbowpie_popup_dialog.no_button_panel"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "#text",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title_bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "$visibility_source_control_name",
              // 계산식/참조 값
              "source_property_name": "#modal_title_text",
              // 결과가 들어갈 속성
              "target_property_name": "#text"
            }
          ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpie_popup_dialog.dialog_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false,
          // 오버라이드 가능한 변수
          "$close_button_to_button_id": "popup_dialog.escape"
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
                    "text@popup_dialog.modal_label_panel": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle"
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
                "ignored": "($rainbowpie_localui_popupdialog_button_panel = 'common.empty_panel')",
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
                          "button_panel@$rainbowpie_localui_popupdialog_button_panel": {
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
  "background_panel_design2": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "full_screen_background@rainbowpie_ui_common.global_background": {
          // 가로/세로 크기
          "size": [ "200%", "200%" ],
          // ?? (R,G,B,A)
          "color": [ 0.0, 0.0, 0.0 ],
          // ???
          "alpha": 0.3,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "ingame_background": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 가로/세로 크기
          "size": [ 204, 132 ],
          // 완전히 제거(공간도 없음)
          "ignored": "$is_pregame",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "popup_dialog_background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_dialog_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_dialog_background_alpha",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$rainbowpie_ui_flag_dialog_ingame_oqaque",
                    // 오버라이드 가능한 변수
                    "$rainbowpie_ui_theme_dialog_background_alpha": 1.0
                  }
                ]
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
  },

  // ???/?? ??
  "three_buttons_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "left@popup_dialog.modal_left_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "middle@popup_dialog.modal_middle_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "right@popup_dialog.modal_rightcancel_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  // ???/?? ??
  "two_buttons_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "left@popup_dialog.modal_left_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "right@popup_dialog.modal_rightcancel_button": {
          // 오버라이드 가능한 변수
          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  // ???/?? ??
  "single_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "left@popup_dialog.modal_middle_button": { "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button", "size": [ "100%", "100%" ] } }
    ]
  },

  // ???/?? ??
  "no_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "left@popup_dialog.modal_middle_button": { "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button", "$button_text": "gui.ok", "size": [ "100%", "100%" ] } }
    ]
  },

  // ???/?? ??
  "background_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
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
          "offset": [ "50% - 100px", 0 ],
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
                "offset": [ 0, "50% - 60px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "blur_layer_1@mintui_background.background_blur": {
                      // 오버라이드 가능한 변수
                      "$background_offset": [ "-100% + 200px", "-100% + 120px" ],
                      // 오버라이드 가능한 변수
                      "$background_children_offset": [ "50% - 100px", "50% - 60px" ],
                      // 오버라이드 가능한 변수
                      "$background_layer": 2
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mask_layer_1@mintui_background.background_mask": {
                      // 오버라이드 가능한 변수
                      "$background_offset": [ "-100% + 200px", "-100% + 120px" ],
                      // 오버라이드 가능한 변수
                      "$background_children_offset": [ "50% - 100px", "50% - 60px" ],
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
profile_card_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: profile_card_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_profile_card",

  // ???/?? ??
  "profile_card_screen_content": {
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
                "size": "$dialog_size",
                // ?? ?? ?
                "max_size": "$dialog_max_size",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "options.profile",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_profile_card.dialog_content",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "(not $hide_skin)",
                    // 오버라이드 가능한 변수
                    "$dialog_size": [ 300, 235 ],
                    // 오버라이드 가능한 변수
                    "$dialog_max_size": [ 300, "100% - 4px" ]
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$hide_skin",
                    // 오버라이드 가능한 변수
                    "$dialog_size": [ 230, 235 ],
                    // 오버라이드 가능한 변수
                    "$dialog_max_size": [ 230, "100% - 4px" ]
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
  "dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_content_with_skin@profile_card.dialog_content_with_skin": {
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








### ui extras
profile_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: profile_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_profile",

  // ???/?? ??
  "delete_persona_dialog_content": {
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
                    "image@profile.alex_warning": {
                      // 기준점에서 이동하는 거리
                      "offset": [ 4, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "message@profile.delete_popup_dialog_message": {
                      // ??
                      "font_type": "$rainbowpie_ui_theme_global_font_name",
                      // ?? ?? ?
                      "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                      // 기준점에서 이동하는 거리
                      "offset": [ 26, 4 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 12
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
                          "button_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
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
                                "right_button@profile.delete_persona_right_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "left_button@profile.delete_persona_left_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
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
  },

  // ???/?? ??
  "background_panel_design2": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "full_screen_background@rainbowpie_ui_common.global_background": {
          // ?? (R,G,B,A)
          "color": [ 0.0, 0.0, 0.0 ],
          // ???
          "alpha": 0.3,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "ingame_background": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 가로/세로 크기
          "size": [ 204, 132 ],
          // 완전히 제거(공간도 없음)
          "ignored": "$is_pregame",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "popup_dialog_background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_dialog_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_dialog_background_alpha"
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
progress_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: progress_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_progress",

  // ???/?? ??
  "background_animation": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $animation_in or not $is_pregame)",
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 1.0,
    // 시작 값
    "from": "$animated_alpha_from",
    // 끝 값
    "to": "$animated_alpha_to",
    // ?? ??
    "play_event": "$animated_alpha_play_event"
  },

  // ???/?? ??
  "background_blur_animation": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_c448d476)",
    // 오버라이드 가능한 변수
    "$animation_in|default": true,
    // 오버라이드 가능한 변수
    "$animated_alpha_from|default": 0.0,
    // 오버라이드 가능한 변수
    "$animated_alpha_to|default": 1.0,
    // 오버라이드 가능한 변수
    "$animated_alpha_play_event|default": "screen.entrance_push",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $animation_in)",
        // 오버라이드 가능한 변수
        "$animated_alpha_from": 1.0,
        // 오버라이드 가능한 변수
        "$animated_alpha_to": 0.0
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "background_blur_fullscreen": {
          // 이미지 표시
          "type": "image",
          // ?? ??
          "fill": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 사용할 이미지 경로
          "texture": "$rainbowpie_ui_theme_background_blur_texture",
          // ???
          "alpha": 1.0,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 애니메이션 목록
          "anims": [
            "@rainbowpieui_progress.background_animation"
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "mobile_data_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%c + 6px", "100%c + 4px" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ -3, 10 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha",
    // 완전히 제거(공간도 없음)
    "ignored": "(not ($is_android or $is_ios))",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "mobile_data_stack_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%cm", 30 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "icon_android": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/mobile_data_icon_android",
                // 가로/세로 크기
                "size": [ 16, 9 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 8 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_android)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "icon_ios@progress.mobile_data_ios_icon": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/mobile_data_icon_ios",
                // 가로/세로 크기
                "size": [ 12, 13 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 4 ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_ios)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "text@rainbowpie_ui_common.text_label": {
                // 보여줄 글자
                "text": "progressScreen.label.mobileData",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
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
        "binding_name": "#mobile_data_icon_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // ?? ???
        "binding_condition": "once"
      }
    ]
  },

  // ???/?? ??
  "simple_popup_dialog_base": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_fullscreen@mintui_background.background_fullscreen": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "loading_progress_ui_blur@rainbowpieui_progress.loading_progress_ui_blur": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "resourcepacks_dialog_ui@rainbowpieui_progress.resourcepacks_dialog_ui": {}
      },
      { "mobile_data_icon@rainbowpieui_progress.mobile_data_icon": {} },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_text@rainbowpie_ui_common.title_text": {
          // 기준점에서 이동하는 거리
          "offset": [ 0, "5%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle"
        }
      }
    ]
  },

  // ???/?? ??
  "resourcepacks_dialog_ui": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 220, 110 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 5 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 12,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "titlebar_control@rainbowpie_ui_common.title_background": {
          // 가로/세로 크기
          "size": [ "100%", 27 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "title_text@rainbowpie_ui_common.title_label": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // ?? ?? ?
                "max_size": [ "100% - 8px", "100% - 4px" ],
                // 보여줄 글자
                "text": "$title_text"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "close_button@rainbowpie_ui_common.close_button": {
                // 오버라이드 가능한 변수
                "$close_button_to_button_id": "button.leave",
                // 기준점에서 이동하는 거리
                "offset": [ -2, 0 ],
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
        // 다른 템플릿을 가져와서 확장(상속)
        "content_control@rainbowpie_ui_common.text_background": {
          // 가로/세로 크기
          "size": [ "100%", 83 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 27 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "progress_bar_text_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 46 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "progress_bar_text@rainbowpie_ui_common.title_label": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 4 ],
                      // 가로/세로 크기
                      "size": [ "default", "default" ],
                      // ?? ?? ?
                      "max_size": [ "100% - 44px", 40 ],
                      // 보여줄 글자
                      "text": "$description_text"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "inside_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100% - 1px", "100%c" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, -0.5 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "top_button@common_buttons.light_text_button": {
                      // 보이기/숨기기(공간 유지)
                      "visible": "$use_top_button",
                      // ??/???
                      "enabled": "$use_top_button",
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "$top_button_press",
                      // 오버라이드 가능한 변수
                      "$button_binding_condition": "once",
                      // 오버라이드 가능한 변수
                      "$button_text_binding_type": "global",
                      // 오버라이드 가능한 변수
                      "$button_text": "$top_button_text",
                      // 가로/세로 크기
                      "size": [ "100%", 22 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -22 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "middle_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "$middle_button_press",
                      // 오버라이드 가능한 변수
                      "$button_binding_condition": "once",
                      // 오버라이드 가능한 변수
                      "$button_text_binding_type": "global",
                      // 오버라이드 가능한 변수
                      "$button_text": "$middle_button_text",
                      // 가로/세로 크기
                      "size": [ "50%", 22 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "bottom_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "$bottom_button_press",
                      // 오버라이드 가능한 변수
                      "$button_text": "$bottom_button_text",
                      // 가로/세로 크기
                      "size": [ "50%", 22 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_right"
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
  "modal_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.global_background": {
          // 가로/세로 크기
          "size": [ "500%", "500%" ]
        }
      },
      {
        // ???/?? ??
        "modal_progress_panel_with_cancel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$modal_screen_size",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 가로/세로 크기
                "size": [ "100%-12px", "100%-60px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 6, 20 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_panel@progress.title_panel": {}
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "progress_loading_bars@rainbowpie_ui_common.progress_loading_bars": {
                      // 가로/세로 크기
                      "size": [ 65, 3 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 24 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#bar_animation_visible",
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
              "modal_button_panel@progress.modal_button_panel": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100%", 40 ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "world_loading_progress_screen": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_blur_animation@rainbowpieui_progress.background_blur_animation": {}
      },
      { "mobile_data_icon@rainbowpieui_progress.mobile_data_icon": {} },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_text@rainbowpie_ui_common.title_text": {
          // 기준점에서 이동하는 거리
          "offset": [ 0, "5%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_loading_progress_ui@rainbowpieui_progress.world_loading_progress_ui": {
          // 오버라이드 가능한 변수
          "$modal_button_panel_type": "progress.modal_button_panel"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "loading_progress_ui_blur@rainbowpieui_progress.loading_progress_ui_blur": {}
      },
      { "popup_dialog_factory@progress.popup_dialog_factory": {} }
    ]
  },

  // ???/?? ??
  "world_saving_progress_screen": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_blur_animation@rainbowpieui_progress.background_blur_animation": {
          // 오버라이드 가능한 변수
          "$animation_in": false
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_text@rainbowpie_ui_common.title_text": {
          // 기준점에서 이동하는 거리
          "offset": [ 0, "5%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_loading_progress_ui@rainbowpieui_progress.world_loading_progress_ui": {
          // 오버라이드 가능한 변수
          "$modal_button_panel_type": "progress.modal_button_panel_with_retry"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "loading_progress_ui_blur@rainbowpieui_progress.loading_progress_ui_blur": {}
      },
      { "popup_dialog_factory@progress.popup_dialog_factory": {} }
    ]
  },

  // ???/?? ??
  "loading_progress_ui_blur": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 11,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "titlebar_control_blur": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ "50% - 110px", "50% - 50px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_1@mintui_background.background_blur": {
                // 오버라이드 가능한 변수
                "$background_ingame": true,
                // 오버라이드 가능한 변수
                "$background_offset": [ "-100% + 220px", "-100% + 27px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "50% - 110px", "50% + 23px" ],
                // 오버라이드 가능한 변수
                "$background_layer": 2
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "content_control_blur": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // ?? ????
          "clips_children": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ "50% - 110px", "50% - 23px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_1@mintui_background.background_blur": {
                // 오버라이드 가능한 변수
                "$background_mask": false,
                // 오버라이드 가능한 변수
                "$background_ingame": true,
                // 오버라이드 가능한 변수
                "$background_offset": [ "-100% + 220px", "-100% + 83px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ "50% - 110px", "50% - 60px" ],
                // 오버라이드 가능한 변수
                "$background_layer": 1
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "world_loading_progress_ui": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 220, 110 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 5 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 12,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "titlebar_control@rainbowpie_ui_common.title_background": {
          // 가로/세로 크기
          "size": [ "100%", 27 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "title_text@rainbowpie_ui_common.title_label": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // ?? ?? ?
                "max_size": [ "100% - 8px", "100% - 4px" ],
                // 보여줄 글자
                "text": "#title_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#title_text"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "content_control@rainbowpie_ui_common.text_background": {
          // 가로/세로 크기
          "size": [ "100%", 83 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 27 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "progress_bar_text_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 46 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "progress_bar_text@rainbowpie_ui_common.title_label": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 4 ],
                      // 가로/세로 크기
                      "size": [ "default", "default" ],
                      // ?? ?? ?
                      "max_size": [ "100% - 18px", 40 ],
                      // ?? ??
                      "localize": false,
                      // 보여줄 글자
                      "text": "#progress_text",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#progress_text"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "inside_content": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100%-12px", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "loading_bar_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%c" ],
                      // 오버라이드 가능한 변수
                      "$float_min_percentage": 0.9,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "fancy_progress_loading_bars@rainbowpie_ui_common.fancy_progress_loading_bars": {
                            // 가로/세로 크기
                            "size": [ "90%", 3 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 15,
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_loading_bars_bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#loading_bar_percentage",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#clip_ratio"
                              }
                            ],
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#loading_bar_visible": true
                            },
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#loading_bar_visible",
                                // 완전히 제거(공간도 없음)
                                "ignored": "(not $is_pregame)"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "#loading_bar_percentage"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(#loading_bar_visible and (not (#loading_bar_percentage > $float_min_percentage)))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "fancy_progress_loading_bars_wait@rainbowpie_ui_common.progress_loading_bars": {
                            // 가로/세로 크기
                            "size": [ "90%", 3 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 15,
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#loading_bar_visible": true
                            },
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#loading_bar_visible",
                                // 완전히 제거(공간도 없음)
                                "ignored": "(not $is_pregame)"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "#loading_bar_percentage"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(#loading_bar_visible and (#loading_bar_percentage > $float_min_percentage))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "progress_loading_bars@rainbowpie_ui_common.progress_loading_bars": {
                            // 가로/세로 크기
                            "size": [ 65, 3 ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, 0 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#bar_animation_visible",
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
                    "vertical_padding": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, 5 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "modal_button_panel@$modal_button_panel_type": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 가로/세로 크기
                      "size": [ "100%", "100%c" ]
                    }
                  },
                  {
                    // ???/?? ??
                    "vertical_padding_2": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, 14 ]
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
realms_pending_invitations_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: realms_pending_invitations_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_realms_pending_invitations",

  // ???/?? ??
  "dark_banner": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "dark_banner_hover@rainbowpieui_realms_pending_invitations.dark_banner": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_button_background_hover_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_button_background_hover_alpha"
  },

  // ???/?? ??
  "realms_invitation_screen_content": {
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
                "size": "$narrow_screen_size",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "realmsPendingInvitationsScreen.pendingInvitations",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "realms_pending_invitations.content_panel"
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
realms_plus_ended_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: realms_plus_ended_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_realms_plus_ended",

  // ???/?? ??
  "dialog_content": {
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
                    "main_content@realms_plus_ended.main_content_panel": {}
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
                          "button_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
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
                                "more_info_button@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_text": "realmsPlus.popup.top_button_text",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.more_info"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "renew_subscription_button@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_text": "realmsPlus.popup.bottom_button_text",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.renew"
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
  "subscription_ended_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 18,
          // 가로/세로 크기
          "size": [ 260, 154 ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "realmsPlus.popup.title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_realms_plus_ended.dialog_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false
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
          "offset": [ "50% - 130px", 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
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
                "offset": [ 0, "50% - 77px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "blur_layer_1@mintui_background.background_blur": {
                      // 오버라이드 가능한 변수
                      "$background_offset": [ "-100% + 260px", "-100% + 154px" ],
                      // 오버라이드 가능한 변수
                      "$background_children_offset": [ "50% - 130px", "50% - 77px" ],
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
realmsplus_upgrade_notice_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: realmsplus_upgrade_notice_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_realmsplus_upgrade_notice_screen",

  // ???/?? ??
  "dialog_content": {
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
                    "main_content@realmsplus_upgrade_notice_screen.content": {}
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
                          "button_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
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
                                "left@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.continue_button",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "realmsPlusUpgradeNotice.continue"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "right@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.viewpacks",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "realmsPlusUpgradeNotice.viewpacks"
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
  "main_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 18,
          // 가로/세로 크기
          "size": [ 260, 204 ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "realmsPlusUpgradeNotice.title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_realmsplus_upgrade_notice_screen.dialog_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false
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
          "offset": [ "50% - 130px", 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
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
                "offset": [ 0, "50% - 102px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "blur_layer_1@mintui_background.background_blur": {
                      // 오버라이드 가능한 변수
                      "$background_offset": [ "-100% + 260px", "-100% + 204px" ],
                      // 오버라이드 가능한 변수
                      "$background_children_offset": [ "50% - 130px", "50% - 102px" ],
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
redstone_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: redstone_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_redstone",

  // ???/?? ??
  "output_slot_hover_info": {
    // 클릭 가능한 버튼
    "type": "button",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // ?? ??
    "hover_control": "hover",
    // 오버라이드 가능한 변수
    "$stack_count_required": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "hover": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover_text@common.hover_text": {
                // 완전히 제거(공간도 없음)
                "ignored": "($rainbowpie_ui_flag_86c54726)",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 29,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#crafting_preview_info",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#hover_text"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "custom_hover_text": {
                // 클릭 가능한 버튼
                "type": "button",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_86c54726)",
                // ??/???
                "enabled": "(not ($touch or $game_pad))",
                // ??? ?? ?
                "allow_clipping": false,
                // ?? ??
                "follows_cursor": "(not ($touch or $game_pad))",
                // ?? ??
                "consume_event": false,
                // ?? ??
                "consume_hover_events": false,
                // 포커스 가능 여부
                "focus_enabled": false,
                // ?? ??
                "hover_control": "$hover_control",
                // ?? ??
                "locked_control": "$locked_control",
                // 오버라이드 가능한 변수
                "$hover_control": "hover_text",
                // 오버라이드 가능한 변수
                "$locked_control": "",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($touch or $game_pad)",
                    // 오버라이드 가능한 변수
                    "$hover_control": "",
                    // 오버라이드 가능한 변수
                    "$locked_control": "hover_text"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "hover_text": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "0px", "0px" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "hover_text_background": {
                            // 이미지 표시
                            "type": "image",
                            // 사용할 이미지 경로
                            "texture": "($rainbowpie_ui_path_home + '/r_white')",
                            // 가로/세로 크기
                            "size": [ "100%c + 8px", "100%c + 5px" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 10, -8 ],
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
                                        "text": "#hover_text",
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#crafting_preview_info",
                                            // 가져온 값을 다른 속성으로 연결
                                            "binding_name_override": "#hover_text"
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
        "output_slot@common.item_renderer": {
          // 가로/세로 크기
          "size": [ "88.88888888888889%", "100%x" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#crafter_output_item",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#item_id_aux"
            },
            {
              // 가져올 값 이름
              "binding_name": "#crafter_output_item_color",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#item_custom_color"
            },
            {
              // 가져올 값 이름
              "binding_name": "#crafter_output_item_shield_base_color_hovered",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#shield_base_color"
            },
            {
              // 가져올 값 이름
              "binding_name": "#crafter_output_item_banner_patterns",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#banner_patterns"
            },
            {
              // 가져올 값 이름
              "binding_name": "#crafter_output_item_selected_banner_colors",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#banner_colors"
            },
            {
              // 가져올 값 이름
              "binding_name": "#crafter_output_item_selected_banner_type",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#banner_type"
            },
            {
              // 가져올 값 이름
              "binding_name": "#crafter_output_item_selected_decorated_pot_sherds",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#decorated_pot_sherds"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "output_slot_border": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 가로/세로 크기
          "size": [ "144.4444444444444%", "100%x" ],
          // 사용할 이미지 경로
          "texture": "textures/ui/crafter_item_border"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "output_count@common.stack_count_label": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 20,
          // 가로/세로 크기
          "size": [ 18, 18 ],
          // 기준점에서 이동하는 거리
          "offset": [ "78.33333333333333%", "62.22222222222222%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#output_stack_count",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#inventory_stack_count"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "crafter_disabled_slot@common.button": {
    // 클릭 가능한 버튼
    "type": "button",
    // ?? ??
    "hover_control": "hover",
    // 가로/세로 크기
    "size": [ "100%y", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 20,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "default": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/slot_disabled"
        }
      },
      {
        // ???/?? ??
        "hover": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/slot_enabled_hover"
        }
      },
      {
        // ???/?? ??
        "pressed": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/slot_disabled"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hopper_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 125 ],
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
              "chest_fastpick@rainbowpie_module_chest_fastpick.chest_fastpick_redstone": {
                // 오버라이드 가능한 변수
                "$redstone_container": true,
                // 오버라이드 가능한 변수
                "$redstone_container_hopper": true,
                // 오버라이드 가능한 변수
                "$container_item_id": "$rainbowpie_ui_flag_item_hopper",
                // 오버라이드 가능한 변수
                "$drop_button_size": [ "13.0952380952381%", "100%x" ],
                // 오버라이드 가능한 변수
                "$drop_button_offset": [ "100%x + 1.19047619047619%", "-62.4%" ],
                // 오버라이드 가능한 변수
                "$putin_button_size": [ "13.0952380952381%", "100%x" ],
                // 오버라이드 가능한 변수
                "$putin_button_offset": [ "100%x + 1.19047619047619%", "-19.2%" ],
                // 오버라이드 가능한 변수
                "$pickup_button_size": [ "13.0952380952381%", "100%x" ],
                // 오버라이드 가능한 변수
                "$pickup_button_offset": [ "100%x + 1.19047619047619%", 0 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_header@rainbowpie_ui_inventory.header": {
                // 가로/세로 크기
                "size": [ "100%", "18.4%" ],
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
                "size": [ "100%", "100% - 18.4%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "redstone_top_half": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 목록 이름
                "collection_name": "container_items",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "53.57142857142857%", "14.4%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-64.8%" ],
                // 오버라이드 가능한 변수
                "$item_collection_name": "container_items",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                      // ?? ??
                      "collection_index": 0
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                      // ?? ??
                      "collection_index": 1
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                      // ?? ??
                      "collection_index": 2
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "container_item_3@rainbowpie_ui_inventory_and_container.container_item": {
                      // ?? ??
                      "collection_index": 3
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "container_item_4@rainbowpie_ui_inventory_and_container.container_item": {
                      // ?? ??
                      "collection_index": 4
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
                "size": [ "96.42857142857143%", "43.2%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-19.2%" ]
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
                "size": [ "96.42857142857143%", "14.4%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-2.4%" ]
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "redstone_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 161 ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($container_type = 'dropper')",
        // 오버라이드 가능한 변수
        "$container_item_id": "$rainbowpie_ui_flag_item_dropper"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "($container_type = 'dispenser')",
        // 오버라이드 가능한 변수
        "$container_item_id": "$rainbowpie_ui_flag_item_dispenser"
      }
    ],
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
              "chest_fastpick@rainbowpie_module_chest_fastpick.chest_fastpick_redstone": {
                // 오버라이드 가능한 변수
                "$redstone_container": true,
                // 오버라이드 가능한 변수
                "$drop_button_size": [ "13.0952380952381%", "100%x" ],
                // 오버라이드 가능한 변수
                "$drop_button_offset": [ "100%x + 1.19047619047619%", "-48.4472049689441%" ],
                // 오버라이드 가능한 변수
                "$putin_button_size": [ "13.0952380952381%", "100%x" ],
                // 오버라이드 가능한 변수
                "$putin_button_offset": [ "100%x + 1.19047619047619%", "-14.90683229813665%" ],
                // 오버라이드 가능한 변수
                "$pickup_button_size": [ "13.0952380952381%", "100%x" ],
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
              "redstone_top_half": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "32.14285714285714%", "33.54037267080745%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-50.31055900621118%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "1": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 목록 이름
                      "collection_name": "container_items",
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 0
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 1
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 2
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "2": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 목록 이름
                      "collection_name": "container_items",
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 3
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 4
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 5
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "3": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 목록 이름
                      "collection_name": "container_items",
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 6
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 7
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 8
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
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "crafter_root_panel@common.root_panel": {
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
              "chest_fastpick@rainbowpie_module_chest_fastpick.chest_fastpick_redstone": {
                // 오버라이드 가능한 변수
                "$redstone_container": true,
                // 오버라이드 가능한 변수
                "$container_item_id": "$rainbowpie_ui_flag_item_crafter",
                // 오버라이드 가능한 변수
                "$drop_button_size": [ "13.0952380952381%", "100%x" ],
                // 오버라이드 가능한 변수
                "$drop_button_offset": [ "100%x + 1.19047619047619%", "-48.4472049689441%" ],
                // 오버라이드 가능한 변수
                "$putin_button_size": [ "13.0952380952381%", "100%x" ],
                // 오버라이드 가능한 변수
                "$putin_button_offset": [ "100%x + 1.19047619047619%", "-14.90683229813665%" ],
                // 오버라이드 가능한 변수
                "$pickup_button_size": [ "13.0952380952381%", "100%x" ],
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
              "crafter_input": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_left",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_left",
                // 가로/세로 크기
                "size": [ "32.14285714285714%", "33.54037267080745%" ],
                // 기준점에서 이동하는 거리
                "offset": [ "12.5%", "-50.31055900621118%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "1": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 목록 이름
                      "collection_name": "container_items",
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_0_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button0",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible0",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 0,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible0)",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_1_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button1",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible1",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 1,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible1)",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_2_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button2",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible2",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 2,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible2)",
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
                    "2": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 목록 이름
                      "collection_name": "container_items",
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_0_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button3",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible3",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 3,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible3)",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_1_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button4",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible4",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 4,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible4)",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_2_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button5",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible5",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 5,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible5)",
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
                    "3": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 목록 이름
                      "collection_name": "container_items",
                      // 가로/세로 크기
                      "size": [ "100%", "33.33333333333333%" ],
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "container_items",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_0_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button6",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible6",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 6,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible6)",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_1_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button7",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible7",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 7,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible7)",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "disabled_slot_2_button@rainbowpieui_redstone.crafter_disabled_slot": {
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "disabled_button8",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#button_visible8",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                            // ?? ??
                            "collection_index": 8,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "(not #button_visible8)",
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
            },
            {
              // ???/?? ??
              "redstone_wire_line": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 가로/세로 크기
                "size": [ "10.71428571428571%", "100%x" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 기준점에서 이동하는 거리
                "offset": [ "54.16666666666667%", "26.70807453416149%" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#redstone_arrow_texture"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#redstone_arrow_texture - 'textures/ui/')",
                    // 결과가 들어갈 속성
                    "target_property_name": "#redstone_arrow_texture_filename"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(($rainbowpie_ui_path_overrides + '/ui/') + #redstone_arrow_texture_filename)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#texture"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "crafter_output@rainbowpieui_redstone.output_slot_hover_info": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 가로/세로 크기
                "size": [ "10.71428571428571%", "100%x" ],
                // 기준점에서 이동하는 거리
                "offset": [ "32.14285714285714%", "-18.01242236024845%" ]
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
resource_packs_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: resource_packs_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_resource_packs",

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_movement_button@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.selected_pack",
    // 오버라이드 가능한 변수
    "$visible_binding_name|default": "(not #is_selected)",
    // 오버라이드 가능한 변수
    "$visible_binding_type|default": "collection",
    // 오버라이드 가능한 변수
    "$enabled_binding_name|default": "#is_selected",
    // 오버라이드 가능한 변수
    "$enabled_binding_type|default": "collection",

    // If $visible_binding_name isn't set we won't use that bind.
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($visible_binding_name = '' and $visible_binding_type = collection)",
        // 오버라이드 가능한 변수
        "$visible_binding_type": "none"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "($enabled_binding_name = '' and $enabled_binding_type = collection)",
        // 오버라이드 가능한 변수
        "$enabled_binding_type": "none"
      }
    ],

    // 가로/세로 크기
    "size": [ 18, 18 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 이름
        "binding_collection_name": "$button_collection_name",
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details"
      },
      {
        // 목록 이름
        "binding_collection_name": "$button_collection_name",
        // 가져올 값 이름
        "binding_name": "$visible_binding_name",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 바인딩 종류(변수로 관리되는 경우도 있음)
        "binding_type": "$visible_binding_type"
      },
      {
        // 목록 이름
        "binding_collection_name": "$button_collection_name",
        // 가져올 값 이름
        "binding_name": "$enabled_binding_name",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled",
        // 바인딩 종류(변수로 관리되는 경우도 있음)
        "binding_type": "$enabled_binding_type"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_plus_button@rainbowpieui_resource_packs.selected_pack_movement_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$focus_id": "selected_pack_plus_button",
    // 처음 포커스 우선순위
    "default_focus_precedence": 1,
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.move_left",
    // 오버라이드 가능한 변수
    "$button_content": "resource_packs.plus_image",
    // 오버라이드 가능한 변수
    "$visible_binding_name": "#can_move"
  },

  // ???/?? ??
  "up_arrow_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/up_arrow",
    // 가로/세로 크기
    "size": [ 14, 14 ]
  },

  // ???/?? ??
  "down_arrow_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/down_arrow",
    // 가로/세로 크기
    "size": [ 14, 14 ]
  },

  // ???/?? ??
  "home_button_content": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/store_home_icon",
    // 가로/세로 크기
    "size": [ 13, 11 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_minus_button@rainbowpieui_resource_packs.selected_pack_movement_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$focus_id": "selected_pack_minus_button",
    // 처음 포커스 우선순위
    "default_focus_precedence": 1,
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.move_left",
    // 오버라이드 가능한 변수
    "$button_content": "resource_packs.minus_image",
    // 오버라이드 가능한 변수
    "$visible_binding_name": "#can_move"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_store_button@rainbowpieui_resource_packs.selected_pack_movement_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$focus_id": "selected_pack_store_button",
    // 처음 포커스 우선순위
    "default_focus_precedence": 1,
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.store",
    // 오버라이드 가능한 변수
    "$button_content": "rainbowpieui_resource_packs.home_button_content",
    // 오버라이드 가능한 변수
    "$visible_binding_name": "#can_go_to_store"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_options_button@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$focus_id": "selected_pack_options_button",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.pack_settings",
    // 오버라이드 가능한 변수
    "$button_content": "resource_packs.options_image_panel",

    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$button_collection_name",
        // 가져올 값 이름
        "binding_name": "#has_pack_settings",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      },
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$button_collection_name"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_up_button@rainbowpieui_resource_packs.selected_pack_movement_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$focus_id": "selected_pack_up_button",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.sort_up",
    // 오버라이드 가능한 변수
    "$button_content": "rainbowpieui_resource_packs.up_arrow_image",
    // 오버라이드 가능한 변수
    "$visible_binding_name": "#can_sort_up"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_down_button@rainbowpieui_resource_packs.selected_pack_movement_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$focus_id": "selected_pack_down_button",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.sort_down",
    // 오버라이드 가능한 변수
    "$button_content": "rainbowpieui_resource_packs.down_arrow_image",
    // 오버라이드 가능한 변수
    "$visible_binding_name": "#can_sort_down"
  },

  // ???/?? ??
  "warning_image_wrapper": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 16, 14 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "icon_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "error_image@resource_packs.error_image_panel": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 이름
                    "binding_collection_name": "$selected_pack_items",
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
              // 다른 템플릿을 가져와서 확장(상속)
              "warning_image@resource_packs.warning_panel": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 이름
                    "binding_collection_name": "$selected_pack_items",
                    // 가져올 값 이름
                    "binding_name": "#has_errors",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection"
                  },
                  {
                    // 목록 이름
                    "binding_collection_name": "$selected_pack_items",
                    // 가져올 값 이름
                    "binding_name": "#has_warnings",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#has_warnings and not #has_errors)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "no_error_panel@resource_packs.no_error_panel": {
                // 기준점에서 이동하는 거리
                "offset": [ 0, 1 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 이름
                    "binding_collection_name": "$selected_pack_items",
                    // 가져올 값 이름
                    "binding_name": "#error_free",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "progress_loading_bars@resource_packs.progress_loading_bars": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 이름
                    "binding_collection_name": "$selected_pack_items",
                    // 가져올 값 이름
                    "binding_name": "#report_generating",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
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
              "binding_collection_name": "$button_collection_name",
              // 가져올 값 이름
              "binding_name": "#report_button_visible",
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
        "manifest_validation_icon": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 20, 20 ],
          // ?? (R,G,B,A)
          "color": "$glyph_color",
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_theme + '/icon/global/resource_packs/manifest')",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 이름
              "binding_collection_name": "$button_collection_name",
              // 가져올 값 이름
              "binding_name": "(not #report_button_visible)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_warning_button@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$focus_id": "selected_pack_warning_button",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.report_errors",
    // 오버라이드 가능한 변수
    "$button_content": "rainbowpieui_resource_packs.warning_image_wrapper",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 이름
        "binding_collection_name": "$button_collection_name",
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details"
      },
      {
        // 목록 이름
        "binding_collection_name": "$button_collection_name",
        // 가져올 값 이름
        "binding_name": "(not #report_generating)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled",
        // 목록 데이터를 반복 연결
        "binding_type": "collection"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "available_pack_panel@rainbowpieui_resource_packs.pack_panel": {
    // 오버라이드 가능한 변수
    "$button_collection_name": "$available_pack_items",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.available_pack",
    // 오버라이드 가능한 변수
    "$resource_pack_button_0": "rainbowpieui_resource_packs.selected_pack_plus_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_1": "rainbowpieui_resource_packs.selected_pack_store_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_2": "rainbowpieui_resource_packs.selected_pack_warning_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control|default": "rp_search_text_box_display_text",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#name",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$button_collection_name"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('\"' + #hover_text - '\n' - '§0' - '§1' - '§2' - '§3' - '§4' - '§5' - '§6' - '§7' - '§8' - '§9' - '§a' - '§b' - '§c' - '§d' - '§e' - '§f' - '§g' - '§h' - '§i' - '§j' - '§k' - '§l' - '§m' - '§n' - '§o' - '§p' - '§q' - '§r' - '§s' - '§t' - '§u' - '§v' - '§w' - '§x' - '§y' - '§z' + '\"')",
        // 결과가 들어갈 속성
        "target_property_name": "#formatted_name"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "$rainbowpie_localui_resource_packs_search_box_control",
        // 계산식/참조 값
        "source_property_name": "#item_name",
        // 결과가 들어갈 속성
        "target_property_name": "#output_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((not ((#formatted_name - #output_text) = #formatted_name)) or (#output_text = ''))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "selected_pack_panel@rainbowpieui_resource_packs.pack_panel": {
    // 오버라이드 가능한 변수
    "$button_collection_name": "$selected_pack_items",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "$button.selected_pack",
    // 오버라이드 가능한 변수
    "$resource_pack_button_0": "rainbowpieui_resource_packs.selected_pack_minus_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_1": "rainbowpieui_resource_packs.selected_pack_store_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_2": "rainbowpieui_resource_packs.selected_pack_up_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_3": "rainbowpieui_resource_packs.selected_pack_down_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_4": "rainbowpieui_resource_packs.selected_pack_options_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_5": "rainbowpieui_resource_packs.selected_pack_warning_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control|default": "rp_search_text_box_display_text",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#name",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$button_collection_name"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('\"' + #hover_text - '\n' - '§0' - '§1' - '§2' - '§3' - '§4' - '§5' - '§6' - '§7' - '§8' - '§9' - '§a' - '§b' - '§c' - '§d' - '§e' - '§f' - '§g' - '§h' - '§i' - '§j' - '§k' - '§l' - '§m' - '§n' - '§o' - '§p' - '§q' - '§r' - '§s' - '§t' - '§u' - '§v' - '§w' - '§x' - '§y' - '§z' + '\"')",
        // 결과가 들어갈 속성
        "target_property_name": "#formatted_name"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "$rainbowpie_localui_resource_packs_search_box_control",
        // 계산식/참조 값
        "source_property_name": "#item_name",
        // 결과가 들어갈 속성
        "target_property_name": "#output_text"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((not ((#formatted_name - #output_text) = #formatted_name)) or (#output_text = ''))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "pack_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 52 ],
    // 오버라이드 가능한 변수
    "$button_collection_name": "null",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "null",
    // 오버라이드 가능한 변수
    "$resource_pack_button_0|default": "resource_packs.empty_resource_pack_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_1|default": "resource_packs.empty_resource_pack_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_2|default": "resource_packs.empty_resource_pack_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_3|default": "resource_packs.empty_resource_pack_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_4|default": "resource_packs.empty_resource_pack_button",
    // 오버라이드 가능한 변수
    "$resource_pack_button_5|default": "resource_packs.empty_resource_pack_button",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "input_button_panel": {
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // ?? ??
          "modal": true,
          // ?? ??
          "inline_modal": true,
          // 포커스 가능 여부
          "focus_enabled": false,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 19,
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ "100%", 50 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "pack_buttons_panel": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
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
                    "button_stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 가로/세로 크기
                      "size": [ "100%c", 30 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "$resource_pack_button_0@$resource_pack_button_0": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "($resource_pack_button_0 = 'resource_packs.empty_resource_pack_button')",
                            // 가로/세로 크기
                            "size": [ 30, 30 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "$resource_pack_button_1@$resource_pack_button_1": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "($resource_pack_button_1 = 'resource_packs.empty_resource_pack_button')",
                            // 가로/세로 크기
                            "size": [ 30, 30 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "$resource_pack_button_2@$resource_pack_button_2": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "($resource_pack_button_2 = 'resource_packs.empty_resource_pack_button')",
                            // 가로/세로 크기
                            "size": [ 30, 30 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "$resource_pack_button_3@$resource_pack_button_3": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "($resource_pack_button_3 = 'resource_packs.empty_resource_pack_button')",
                            // 가로/세로 크기
                            "size": [ 30, 30 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "$resource_pack_button_4@$resource_pack_button_4": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "($resource_pack_button_4 = 'resource_packs.empty_resource_pack_button')",
                            // 가로/세로 크기
                            "size": [ 30, 30 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "$resource_pack_button_5@$resource_pack_button_5": {
                            // 완전히 제거(공간도 없음)
                            "ignored": "($resource_pack_button_5 = 'resource_packs.empty_resource_pack_button')",
                            // 가로/세로 크기
                            "size": [ 30, 30 ]
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
              "from_button_id": "button.menu_cancel",
              // 어떤 동작을 실행할지
              "to_button_id": "$button.deselected_pack",
              // 입력 시점(pressed 등)
              "mapping_type": "global"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_select",
              // 어떤 동작을 실행할지
              "to_button_id": "$button.deselected_pack",
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
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 이름
              "binding_collection_name": "$button_collection_name",
              // 가져올 값 이름
              "binding_name": "#direction_button_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection"
            },
            {
              // 가져올 값 이름
              "binding_name": "#is_using_gamepad",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#modal",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "pack_button@resource_packs.common_pack_button": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ "100%", 50 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 18,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover@common.focus_border_white": {
                // 가로/세로 크기
                "size": [ "100%", "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pressed@common.focus_border_white": {
                // 가로/세로 크기
                "size": [ "100%", "100%" ]
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 이름
              "binding_collection_name": "$button_collection_name",
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details"
            },
            {
              // 목록 이름
              "binding_collection_name": "$button_collection_name",
              // 가져올 값 이름
              "binding_name": "#direction_button_visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "banner": {
          // 이미지 표시
          "type": "image",
          // ?? ??
          "fill": true,
          // ??? ?? ?
          "allow_debug_missing_texture": false,
          // ??? ?? ?
          "force_texture_reload": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ "100%", 50 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 11,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 이름
              "binding_collection_name": "$button_collection_name",
              // 가져올 값 이름
              "binding_name": "#icon_path",
              // 목록 데이터를 반복 연결
              "binding_type": "collection"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('\"' + #icon_path - 'pack_icon.png' + 'pack_banner.png' + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#texture"
            },
            {
              // 목록 이름
              "binding_collection_name": "$button_collection_name",
              // 가져올 값 이름
              "binding_name": "#icon_zip",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#zip_folder",
              // 목록 데이터를 반복 연결
              "binding_type": "collection"
            },
            {
              // 목록 이름
              "binding_collection_name": "$button_collection_name",
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
        "infomation_panel@rainbowpie_ui_common.text_background": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ "100%", 50 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 12,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "debug_text@rainbowpie_ui_common.text_label": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_debug)",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 보여줄 글자
                "text": "#debug_text",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 28,
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#icon_path": "null",
                  // ???/??? ?
                  "#icon_zip": "null"
                },
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 이름
                    "binding_collection_name": "$button_collection_name",
                    // 가져올 값 이름
                    "binding_name": "#icon_path",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection"
                  },
                  {
                    // 목록 이름
                    "binding_collection_name": "$button_collection_name",
                    // 가져올 값 이름
                    "binding_name": "#icon_zip",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('icon_path: ' + #icon_path + '\nicon_zip: ' + #icon_zip)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#debug_text"
                  }
                ]
              }
            },
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
                "size": [ 50, 50 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 오버라이드 가능한 변수
                "$icon_collection_name": "$button_collection_name",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "warning_panel": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/Black",
                      // ???
                      "alpha": 0.7,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "warning_text_error@rainbowpie_ui_common.text_label_notheme": {
                            // ?? ?? ??
                            "font_scale_factor": 1.5,
                            // 보여줄 글자
                            "text": "ERROR",
                            // ?? (R,G,B,A)
                            "color": "$c_color_format",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$selected_pack_items",
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
                          // 다른 템플릿을 가져와서 확장(상속)
                          "warning_text_warning@rainbowpie_ui_common.text_label_notheme": {
                            // ?? ?? ??
                            "font_scale_factor": 1.5,
                            // 보여줄 글자
                            "text": "WARN",
                            // ?? (R,G,B,A)
                            "color": "$e_color_format",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$selected_pack_items",
                                // 가져올 값 이름
                                "binding_name": "#has_errors",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 목록 이름
                                "binding_collection_name": "$selected_pack_items",
                                // 가져올 값 이름
                                "binding_name": "#has_warnings",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(#has_warnings and not #has_errors)",
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
                          // 목록 이름
                          "binding_collection_name": "$button_collection_name",
                          // 가져올 값 이름
                          "binding_name": "#error_free",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 목록 이름
                          "binding_collection_name": "$button_collection_name",
                          // 가져올 값 이름
                          "binding_name": "#report_generating",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 목록 이름
                          "binding_collection_name": "$button_collection_name",
                          // 가져올 값 이름
                          "binding_name": "#report_button_visible",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#report_button_visible and not #report_generating and not #error_free)",
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
                    // 목록 이름
                    "binding_collection_name": "$icon_collection_name",
                    // 가져올 값 이름
                    "binding_name": "#icon_path",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection"
                  },
                  {
                    // 목록 이름
                    "binding_collection_name": "$icon_collection_name",
                    // 가져올 값 이름
                    "binding_name": "#icon_zip",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#zip_folder",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection"
                  },
                  {
                    // 목록 이름
                    "binding_collection_name": "$icon_collection_name",
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
              // ???/?? ??
              "pack_info_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 가로/세로 크기
                "size": [ "100% - 53px", "100% - 2px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 52, 0 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "title_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 가로/세로 크기
                      "size": [ "100%", 15 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
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
                            "max_size": [ "80%", 15 ],
                            // 보여줄 글자
                            "text": "#pack_name",
                            // ?? ?? ??
                            "font_scale_factor": 1.5,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
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
                          // 다른 템플릿을 가져와서 확장(상속)
                          "padding_0@common.empty_panel": {
                            // 가로/세로 크기
                            "size": [ 2, 0 ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
                                // 가져올 값 이름
                                "binding_name": "#name",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not ((('|'+#name) - '[PML]') = ('|'+#name)))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#is_module_pack"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not ((('|'+#name) - '[HOTFIX]') = ('|'+#name)))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#is_hotfix_pack"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not ((('|'+#name) - '[UITheme]') = ('|'+#name)))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#is_theme_pack"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(#is_module_pack or #is_hotfix_pack or #is_theme_pack)",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_name_tag_module@rainbowpie_ui_common.text_label_notheme": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 가로/세로 크기
                            "size": [ "default", 15 ],
                            // 보여줄 글자
                            "text": "rainbowpie.ui.resource_packs.tag.module",
                            // ?? ?? ??
                            "font_scale_factor": 1.5,
                            // ?? (R,G,B,A)
                            "color": "$b_color_format",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
                                // 가져올 값 이름
                                "binding_name": "#name",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not ((('|'+#name) - '[PML]') = ('|'+#name)))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_name_tag_package@rainbowpie_ui_common.text_label_notheme": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 가로/세로 크기
                            "size": [ "default", 15 ],
                            // 보여줄 글자
                            "text": "rainbowpie.ui.resource_packs.tag.package",
                            // ?? ?? ??
                            "font_scale_factor": 1.5,
                            // ?? (R,G,B,A)
                            "color": "$b_color_format",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
                                // 가져올 값 이름
                                "binding_name": "#name",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not ((('|'+#name) - '[HOTFIX]') = ('|'+#name)))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_name_tag_theme@rainbowpie_ui_common.text_label_notheme": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 가로/세로 크기
                            "size": [ "default", 15 ],
                            // 보여줄 글자
                            "text": "rainbowpie.ui.resource_packs.tag.theme",
                            // ?? ?? ??
                            "font_scale_factor": 1.5,
                            // ?? (R,G,B,A)
                            "color": "$b_color_format",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
                                // 가져올 값 이름
                                "binding_name": "#name",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not ((('|'+#name) - '[UITheme]') = ('|'+#name)))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "padding_1@common.empty_panel": {
                            // 가로/세로 크기
                            "size": [ "fill", 0 ]
                          }
                        },
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
                                      "binding_collection_name": "$button_collection_name",
                                      // 목록 데이터를 반복 연결
                                      "binding_type": "collection"
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "padding_1@common.empty_panel": {
                                  // 가로/세로 크기
                                  "size": [ 2, 0 ]
                                }
                              }
                            ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
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
                                  // "font_type": "MinecraftTen",
                                  // "font_scale_factor": 0.8,
                                  "text": "#num_warnings",
                                  // ?? (R,G,B,A)
                                  "color": "$warning_text_color",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#num_warnings",
                                      // 목록 이름
                                      "binding_collection_name": "$button_collection_name",
                                      // 목록 데이터를 반복 연결
                                      "binding_type": "collection"
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "padding_1@common.empty_panel": {
                                  // 가로/세로 크기
                                  "size": [ 2, 0 ]
                                }
                              }
                            ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
                                // 가져올 값 이름
                                "binding_name": "#has_warnings",
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
                          "dev_tag": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
                                // 가져올 값 이름
                                "binding_name": "#icon_path",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not (('\"' + #icon_path - '/development_' + '\"') = #icon_path)",
                                // 결과가 들어갈 속성
                                "target_property_name": "#is_development_icon_path"
                              },
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
                                // 가져올 값 이름
                                "binding_name": "#icon_zip",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not (('\"' + #icon_zip - '/development_' + '\"') = #icon_zip)",
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
                                // 다른 템플릿을 가져와서 확장(상속)
                                "dev_tag_label@rainbowpie_ui_common.text_label": {
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 1,
                                  // 가로/세로 크기
                                  "size": [ "default", "default" ],
                                  // 보여줄 글자
                                  "text": "[DEV]",
                                  // ?? (R,G,B,A)
                                  "color": [ 1.0, 1.0, 0.333 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "dev_tag_padding@common.empty_panel": {
                                  // 가로/세로 크기
                                  "size": [ 2, 0 ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_size@rainbowpie_ui_common.text_label": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 가로/세로 크기
                            "size": [ "default", "default" ],
                            // 보여줄 글자
                            "text": "#size",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "$button_collection_name",
                                // 가져올 값 이름
                                "binding_name": "#size",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "pack_description@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "100%", "fill" ],
                      // 보여줄 글자
                      "text": "#description",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 이름
                          "binding_collection_name": "$button_collection_name",
                          // 가져올 값 이름
                          "binding_name": "#description",
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
      }
    ]
  },

  // ???/?? ??
  "resource_packs_header": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "header_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100% - 4px", "100%c" ],
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
                "size": [ 0, 2 ]
              }
            },
            {
              // ???/?? ??
              "top_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 보이기/숨기기(공간 유지)
                "visible": "$show_checkbox",
                // 가로/세로 크기
                "size": [ "100%", 20 ],
                // 오버라이드 가능한 변수
                "$force_pack_download_binding_type|default": "none",

                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "panel_bg@resource_packs.panel_bg": {} },
                  { "header_control@resource_packs.header_control": {} }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#force_pack_download_enabled_level",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 바인딩 종류(변수로 관리되는 경우도 있음)
                    "binding_type": "$force_pack_download_binding_type"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#force_pack_download_locked_level",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#enabled",
                    // 바인딩 종류(변수로 관리되는 경우도 있음)
                    "binding_type": "$force_pack_download_binding_type"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "top_panel_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 0, 1 ],
                // 보이기/숨기기(공간 유지)
                "visible": "$show_checkbox",
                // 오버라이드 가능한 변수
                "$force_pack_download_binding_type|default": "none",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#force_pack_download_enabled_level",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 바인딩 종류(변수로 관리되는 경우도 있음)
                    "binding_type": "$force_pack_download_binding_type"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "navigation_tab_panel@rainbowpieui_resource_packs.navigation_tab_panel": {
                // 완전히 제거(공간도 없음)
                "ignored": "((not $rainbowpie_ui_flag_54edd49d) or ($rainbowpie_localui_resource_packs_type = 'null')"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "search_text_box@common.text_edit_box": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5,
                // 가로/세로 크기
                "size": [ "100%", 22 ],
                // 오버라이드 가능한 변수
                "$text_box_name": "rp_search_text_box",
                // 오버라이드 가능한 변수
                "$text_edit_box_content_binding_name": "#rp_search_text_box_item_name",
                // 오버라이드 가능한 변수
                "$text_edit_text_control": "$rainbowpie_localui_resource_packs_search_box_control",
                // 오버라이드 가능한 변수
                "$place_holder_control": "rainbowpieui_resource_packs.search_text_box_place_holder_control",
                // 오버라이드 가능한 변수
                "$place_holder_text": "$rainbowpie_localui_resource_packs_search_box_placeholder",
                // 끝에서 다시 처음으로 순환
                "focus_wrap_enabled": false,
                // ?? ?? ?
                "max_length": 32767
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "resource_packs_screen": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_type|default": "null",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control|default": "rp_search_text_box_display_text",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_placeholder|default": "rainbowpie.ui.resource_packs.search.placeholder.resource",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "section_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 완전히 제거(공간도 없음)
          "ignored": "((not $rainbowpie_ui_flag_54edd49d) or ($rainbowpie_localui_resource_packs_type = 'null')",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "selected_pack_section": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "selected_pack_grid@resource_packs.selected_pack_grid": {
                      // 가로/세로 크기
                      "size": [ "100%", "default" ],
                      // 목록 아이템을 자동으로 생성
                      "factory": {
                        // ?? ??
                        "name": "selected_pack_factory",
                        // ??? ???
                        "control_name": "rainbowpieui_resource_packs.selected_pack_panel"
                      }
                    }
                  },
                  {
                    // ???/?? ??
                    "padding": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 2, 2 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "default_item@rainbowpie_ui_common.text_background": {
                      // 가로/세로 크기
                      "size": [ "100%", 50 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "pack_icon": {
                            // 이미지 표시
                            "type": "image",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 가로/세로 크기
                            "size": [ 50, 50 ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 4,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "$default_item_texture",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#texture"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "$default_item_file_system",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#texture_file_system"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "$default_item_zip",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#zip_folder"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "pack_info_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 가로/세로 크기
                            "size": [ "100% - 53px", "100% - 2px" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 52, 0 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "title_panel": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 가로/세로 크기
                                  "size": [ "100%", 15 ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
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
                                        "max_size": [ "80%", 15 ],
                                        // 보여줄 글자
                                        "text": "$default_item_title",
                                        // ?? ?? ??
                                        "font_scale_factor": 1.5
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "pack_description@rainbowpie_ui_common.text_label": {
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 1,
                                  // 가로/세로 크기
                                  "size": [ "100%", "fill" ],
                                  // 보여줄 글자
                                  "text": "$default_item_description"
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
                          "source_control_name": "$rainbowpie_localui_resource_packs_search_box_control",
                          // 계산식/참조 값
                          "source_property_name": "#item_name",
                          // 결과가 들어갈 속성
                          "target_property_name": "#output_text"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#output_text = '')",
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
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "($rainbowpie_localui_resource_packs_type + '_selected_packs_navigation_tab_toggle')",
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
              "available_packs_section": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "available_pack_grid@resource_packs.available_pack_grid": {
                      // 가로/세로 크기
                      "size": [ "100%", "default" ],
                      // 목록 아이템을 자동으로 생성
                      "factory": {
                        // ?? ??
                        "name": "available_pack_factory",
                        // ??? ???
                        "control_name": "rainbowpieui_resource_packs.available_pack_panel"
                      }
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "($rainbowpie_localui_resource_packs_type + '_available_packs_navigation_tab_toggle')",
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
  },

  // ???/?? ??
  "search_text_box_place_holder_control": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
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
          "size": [ 16, 16 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 1 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/magnifyingGlass",
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
          "offset": [ 18, 0 ]
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
        "selected_packs_navigation_tab@rainbowpieui_resource_packs.top_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 오버라이드 가능한 변수
          "$tab_view_binding_name": "($rainbowpie_localui_resource_packs_type + '_selected_packs_navigation_tab_toggle')",
          // 오버라이드 가능한 변수
          "$tab_text": "rainbowpie.ui.resource_packs.tab.selected_packs",
          // 오버라이드 가능한 변수
          "$tab_content": "rainbowpieui_resource_packs.selected_packs_title_content",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 0,
          // 오버라이드 가능한 변수
          "$toggle_default_state": true
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "available_packs_navigation_tab@rainbowpieui_resource_packs.top_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 오버라이드 가능한 변수
          "$tab_view_binding_name": "($rainbowpie_localui_resource_packs_type + '_available_packs_navigation_tab_toggle')",
          // 오버라이드 가능한 변수
          "$tab_text": "rainbowpie.ui.resource_packs.tab.available_packs",
          // 오버라이드 가능한 변수
          "$tab_content": "rainbowpieui_resource_packs.available_packs_title_content",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 1
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "available_packs_title_content@rainbowpieui_resource_packs.selected_packs_title_content": {
    // 오버라이드 가능한 변수
    "$title_text": "$available_label_text",
    // 오버라이드 가능한 변수
    "$icon_texture": "textures/items/book_normal",
    // 오버라이드 가능한 변수
    "$count_name": "#available_count",
    // 오버라이드 가능한 변수
    "$name_collection_name": "$available_pack_items",
    // 오버라이드 가능한 변수
    "$grid_visible": "#available_grid_visible",
    // 오버라이드 가능한 변수
    "$ignore_tooltip": true
  },

  // ???/?? ??
  "selected_packs_title_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 오버라이드 가능한 변수
    "$title_text|default": "$selected_label_text",
    // 오버라이드 가능한 변수
    "$icon_texture|default": "textures/blocks/grass_side_carried",
    // 오버라이드 가능한 변수
    "$count_name|default": "#selected_count",
    // 오버라이드 가능한 변수
    "$name_collection_name|default": "$selected_pack_items",
    // 오버라이드 가능한 변수
    "$grid_visible|default": "#selected_grid_visible",
    // 오버라이드 가능한 변수
    "$ignore_tooltip|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_label@rainbowpie_ui_common.text_label_notheme": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // ?? ?? ?
          "max_size": [ "50%", 10 ],
          // 보여줄 글자
          "text": "$title_text",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // ???/?? ??
        "icon_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "block_icon": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 11, 11 ],
                // 사용할 이미지 경로
                "texture": "$icon_texture"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 이름
              "binding_collection_name": "$name_collection_name",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져올 값 이름
              "binding_name": "#any_exceptions"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not #any_exceptions)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "tooltip": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 가로/세로 크기
          "size": [ 11, 11 ],
          // 완전히 제거(공간도 없음)
          "ignored": "$ignore_tooltip",
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "tooltip_image_wrapper@resource_packs.tooltip_image_wrapper": {
                // 오버라이드 가능한 변수
                "$button_collection_name": "$name_collection_name"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 이름
              "binding_collection_name": "$name_collection_name",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져올 값 이름
              "binding_name": "#any_exceptions",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count@rainbowpie_ui_common.text_label_notheme": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // ?? ?? ?
          "max_size": [ 30, 10 ],
          // 기준점에서 이동하는 거리
          "offset": [ -14, -2 ],
          // 보여줄 글자
          "text": "$count_name",
          // ??
          "font_type": "MinecraftTen",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$count_name",
              // 목록 이름
              "binding_collection_name": "$name_collection_name",
              // 목록 데이터를 반복 연결
              "binding_type": "collection"
            }
          ]
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
    "$toggle_name": "($rainbowpie_localui_resource_packs_type + '_rainbowpieui_navigation_tab')",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 0,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 오버라이드 가능한 변수
    "$tab_content": "rainbowpieui_resource_packs.top_tab_content"
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
safe_zone_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: safe_zone_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_safe_zone",

  // ???/?? ??
  "background_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -1,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_blur@mintui_background.background_blur_fullscreen": {}
      }
    ]
  },

  // ??? ??
  "scrolling_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "content_panel@safe_zone.content_panel": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center"
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
                    "scrolling_panel@common.scrolling_panel": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_scrollbar_enabled": true,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_sliderbar_enabled": true,
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 오버라이드 가능한 변수
                      "$scrolling_pane_size": [ "100% - 4px", "100%" ],
                      // 오버라이드 가능한 변수
                      "$scrolling_pane_offset": [ 2, 0 ],
                      // 오버라이드 가능한 변수
                      "$scroll_size": [ 4, "100% - 4px" ],
                      // 오버라이드 가능한 변수
                      "$scrolling_content": "rainbowpieui_safe_zone.scrolling_content",
                      // 오버라이드 가능한 변수
                      "$scroll_bar_left_padding_size": [ 2, 0 ],
                      // 오버라이드 가능한 변수
                      "$scroll_bar_right_padding_size": [ 0, 0 ],
                      // 오버라이드 가능한 변수
                      "$show_background": false,
                      // 오버라이드 가능한 변수
                      "$bar_visible": true
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
                          "button_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_button_default_alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
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
                                "confirm_button@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_text": "gui.confirm",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.confirm_button"
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
  "dialog_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": "$dialog_size",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 18,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "options.safeZone.title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_safe_zone.dialog_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_show_close": false
        }
      }
    ]
  }
}
```








### ui extras
scoreboards_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: scoreboards_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_scoreboard",

  // ???/?? ??
  "scoreboard_sidebar_player_inner_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%cm", "100%cm" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_name_text@rainbowpie_ui_common.text_label": {
          // 가로/세로 크기
          "size": [ "default", "default" ],
          // ?? ?? ?
          "max_size": [ 100, "default" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 보여줄 글자
          "text": "#player_name_sidebar",
          // ?? (R,G,B,A)
          "color": "$player_name_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#player_name_sidebar",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "scoreboard_players"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#player_name_sidebar - ((' ' + $rainbowpie_localui_text_replace_pattern + ' ') - ' *' - '* ' - '  ') = #player_name_sidebar))",
              // 결과가 들어갈 속성
              "target_property_name": "#matches_player_name"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not #matches_player_name)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "replacement_text@rainbowpie_ui_common.text_label": {
          // 가로/세로 크기
          "size": [ "default", "default" ],
          // ?? ?? ?
          "max_size": [ 100, "default" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 보여줄 글자
          "text": "$rainbowpie_localui_text_replace_replacement",
          // ?? (R,G,B,A)
          "color": "$player_name_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#player_name_sidebar",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "scoreboard_players"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#player_name_sidebar - ((' ' + $rainbowpie_localui_text_replace_pattern + ' ') - ' *' - '* ' - '  ') = #player_name_sidebar))",
              // 결과가 들어갈 속성
              "target_property_name": "#matches_player_name"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#matches_player_name)",
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








### ui extras
screenshot_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: screenshot_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_screenshot",

  // ???/?? ??
  "screenshot_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [

    ]
  }
}
```









[분할 목록으로 돌아가기](preview.html#example-view)

