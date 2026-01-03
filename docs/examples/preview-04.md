---
title: 예제 미리보기 (4/12)
outline: false
search: false
---

# 예제 미리보기 (4/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### ui extras
hud_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_hud",

  // ???/?? ??
  "boss_name_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_75ad0b10)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "text_stack": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%", "100%cm" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_fill_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#progress_percentage",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "boss_bars"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(1000-#progress_percentage*1000)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#health_percentage_ratio"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#health_percentage_ratio = 1000)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_flag_dc165cd2)"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "boss_name@rainbowpie_ui_common.text_label_notheme": {
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // ?? (R,G,B,A)
                "color": "$boss_name_text_color",
                // 보여줄 글자
                "text": "#bossName",
                // ?? ??
                "shadow": true,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#bossName",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "boss_bars"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_fill_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", 0 ]
              }
            },
            {
              // ???/?? ??
              "health_percentage_text_stack": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%c", "100%cm" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#progress_percentage",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "boss_bars"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(1000-#progress_percentage*1000)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#health_percentage_ratio"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#health_percentage_ratio = 1000))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_flag_dc165cd2)"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "health_percentage@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", "default" ],
                      // ?? (R,G,B,A)
                      "color": "$boss_name_text_color",
                      // 보여줄 글자
                      "text": "#health_percentage_text",
                      // ?? ??
                      "shadow": true,
                      // 이 컨트롤 안에서 쓰는 임시 저장소
                      "property_bag": {
                        // ???/??? ?
                        "#health_percentage_int": 0
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#progress_percentage",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "boss_bars"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(1000-#progress_percentage*1000)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#health_percentage_ratio"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#health_percentage_ratio > 99) * 100 + (#health_percentage_ratio > 199) * 100 + (#health_percentage_ratio > 299) * 100 + (#health_percentage_ratio > 399) * 100 + (#health_percentage_ratio > 499) * 100 + (#health_percentage_ratio > 599) * 100 + (#health_percentage_ratio > 699) * 100 + (#health_percentage_ratio > 799) * 100 + (#health_percentage_ratio > 899) * 100 + (#health_percentage_ratio > 999) * 100)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#health_percentage_integer_1"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#health_percentage_ratio - #health_percentage_integer_1 > 9) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 19) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 29) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 39) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 49) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 59) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 69) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 79) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 89) * 10 + (#health_percentage_ratio - #health_percentage_integer_1 > 99) * 10)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#health_percentage_integer_2"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 0) + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 1) * 1 + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 2) * 1 + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 3) * 1 + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 4) * 1 + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 5) * 1 + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 6) * 1 + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 7) * 1 + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 8) * 1 + (#health_percentage_ratio - (#health_percentage_integer_1 + #health_percentage_integer_2) > 9) * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#health_percentage_fraction_1"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#health_percentage_integer_1 + #health_percentage_integer_2) / 10)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#health_percentage_integer"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "#health_percentage_fraction_1",
                          // 결과가 들어갈 속성
                          "target_property_name": "#health_percentage_fraction"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "('\"' + #health_percentage_integer + '.' + #health_percentage_fraction + '\"')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#health_percentage_text"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "health_percentage_symbol@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", "default" ],
                      // ?? (R,G,B,A)
                      "color": "$boss_name_text_color",
                      // 보여줄 글자
                      "text": "rainbowpie.ui.symbols.percentage",
                      // ?? ??
                      "shadow": true
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

  // Fix layout customization on v1.20.50
  "layout_customization_option@hud.layout_customization_option": {},
  // 다른 템플릿을 가져와서 확장(상속)
  "layout_customization_option_content@hud.layout_customization_option_content": {},
  // 다른 템플릿을 가져와서 확장(상속)
  "layout_customization_option_slider@hud.layout_customization_option_slider": {},

  // ???/?? ??
  "layout_customization_reset_modal": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 가로/세로 크기
    "size": [ 204, 132 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "rainbowpie.ui.dialog.title_default",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_hud.layout_customization_reset_modal_dialog_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false,
          // 오버라이드 가능한 변수
          "$close_button_to_button_id": "button.cancel_reset"
        }
      }
    ]
  },

  // ???/?? ??
  "layout_customization_reset_modal_dialog_content": {
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
                      "size": [ "100% - 6px", "100% - 4px" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_content_color",
                      // 보여줄 글자
                      "text": "hudScreen.controlCustomization.resetModalText"
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
                                "reset_modal_ok@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.confirm_reset",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "hudScreen.controlCustomization.resetConfirm",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "reset_modal_cancel@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.cancel_reset",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "hudScreen.controlCustomization.resetCancel",
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
  "layout_customization_close_without_saving": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 가로/세로 크기
    "size": [ 204, 132 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "rainbowpie.ui.dialog.title_default",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_hud.layout_customization_close_without_saving_dialog_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false,
          // 오버라이드 가능한 변수
          "$close_button_to_button_id": "button.cancel_reset"
        }
      }
    ]
  },

  // ???/?? ??
  "layout_customization_close_without_saving_dialog_content": {
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
                      "size": [ "100% - 6px", "100% - 4px" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_content_color",
                      // 보여줄 글자
                      "text": "hudScreen.controlCustomization.closeWithoutSavingModalText"
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
                                "without_saving_modal_ok@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.confirm_close_without_saving",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "hudScreen.controlCustomization.closeWithoutSavingConfirm",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "close_without_saving_modal_cancel@common_buttons.light_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 오버라이드 가능한 변수
                                  "$pressed_button_name": "button.cancel_close_without_saving",
                                  // 오버라이드 가능한 변수
                                  "$button_text": "hudScreen.controlCustomization.closeWithoutSavingCancel",
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
  "hotbar_items_durability_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%c" ],
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
                      "size": [ "100%y", "100%" ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#item_id_aux",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
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
                    "selected_durability_text_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%c", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "durability_stack_panel": {
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
                                "durability_title@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "rainbowpie.ui.inventory.durability",
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not $rainbowpie_ui_flag_durabilityview_title)"
                                }
                              },
                              {
                                // ???/?? ??
                                "padding": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 1, 0 ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not $rainbowpie_ui_flag_durabilityview_title)"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "durability_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "#text",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#item_durability_total_amount",
                                      // 목록 데이터를 반복 연결
                                      "binding_type": "collection",
                                      // 목록 이름
                                      "binding_collection_name": "hotbar_items"
                                    },
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#item_durability_current_amount",
                                      // 목록 데이터를 반복 연결
                                      "binding_type": "collection",
                                      // 목록 이름
                                      "binding_collection_name": "hotbar_items"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(((#amount_current>#item_durability_current_amount)*-1+1)*((#amount_current<#item_durability_current_amount)*1+#amount_current))",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#amount_current",
                                      // ?? ???
                                      "binding_condition": "always_when_visible"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(((#amount_total>#item_durability_total_amount)*-1+1)*((#amount_total<#item_durability_total_amount)*1+#amount_total))",
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
        // 가져올 값 이름
        "binding_name": "#slot_selected",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 가져올 값 이름
        "binding_name": "#item_durability_total_amount",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 가져올 값 이름
        "binding_name": "#item_durability_current_amount",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((not ((#item_durability_total_amount = 0) and (#item_durability_current_amount = 0))) and #slot_selected)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "hotbar_items_durability": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_right",
    // 가로/세로 크기
    "size": [ "100%cm", "100%c" ],
    // 기준점에서 이동하는 거리
    "offset": [ -7, -6 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_0@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_1@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_2@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_3@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_4@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_5@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_6@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_7@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_slot_8@rainbowpieui_hud.hotbar_items_durability_item": {
          // ?? ??
          "collection_index": 8
        }
      }
    ]
  },

  // ???/?? ??
  "hotbar_items_durability_warning_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%c" ],
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
                    // ???/?? ??
                    "selected_durability_text_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%c + 1px", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "durability_stack_panel": {
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
                                "durability_title@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "rainbowpie.ui.inventory.durability_remaining",
                                  // ?? (R,G,B,A)
                                  "color": [ 1.0, 0.333, 0.333 ]
                                }
                              },
                              {
                                // ???/?? ??
                                "padding_1": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 1, 0 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "durability_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "#text",
                                  // ?? (R,G,B,A)
                                  "color": [ 1.0, 0.333, 0.333 ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#item_durability_current_amount",
                                      // 목록 데이터를 반복 연결
                                      "binding_type": "collection",
                                      // 목록 이름
                                      "binding_collection_name": "hotbar_items"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(((#amount_current>#item_durability_current_amount)*-1+1)*((#amount_current<#item_durability_current_amount)*1+#amount_current))",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#amount_current",
                                      // ?? ???
                                      "binding_condition": "always_when_visible"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "('\"' + #amount_current + '\"')",
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
            }
          ]
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#slot_selected",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 가져올 값 이름
        "binding_name": "#item_durability_total_amount",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 가져올 값 이름
        "binding_name": "#item_durability_current_amount",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "hotbar_items"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((not ((#item_durability_total_amount = 0) and (#item_durability_current_amount = 0))) and (#item_durability_current_amount < 16) and #slot_selected)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "hotbar_items_durability_warning": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "hotbar_items",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 가로/세로 크기
    "size": [ "100%cm", "100%c" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 20 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_0@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_1@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_2@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_3@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_4@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_5@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_6@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_7@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning_slot_8@rainbowpieui_hud.hotbar_items_durability_warning_item": {
          // ?? ??
          "collection_index": 8
        }
      }
    ]
  },

  // ???/?? ??
  "rainbowpie_hud_durability": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "((not $rainbowpie_ui_feature_inventory_durability) or (not $rainbowpie_ui_feature_hud_durability))",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability@rainbowpieui_hud.hotbar_items_durability": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_items_durability_warning@rainbowpieui_hud.hotbar_items_durability_warning": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_hud_durability_warning)"
        }
      }
    ]
  },

  // ???/?? ??
  "rainbowpie_hud_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_hidehud_button@rainbowpieui_hud.borderless_button": {
          // 완전히 제거(공간도 없음)
          "ignored": "(($rainbowpie_ui_flag_hud_hotbar_mode = 0) or $rainbowpie_ui_flag_hud_hidehud_clickspace)",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.hide_gui_all",
          // ??/???
          "enabled": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ 20, 24 ],
          // 기준점에서 이동하는 거리
          "offset": [ -100, -0.5 ],
          // 오버라이드 가능한 변수
          "$button_controls": [
            {
              // ???/?? ??
              "icon_text": {
                // 글자 표시
                "type": "label",
                // ??
                "font_type": "default",
                // 보여줄 글자
                "text": "H",
                // ???
                "alpha": 0.65,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#layout_customization_main_panel_visible"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not #layout_customization_main_panel_visible)",
              // 결과가 들어갈 속성
              "target_property_name": "#enabled"
            },
            {
              // 가져올 값 이름
              "binding_name": "#inventory_touch_button",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "clickspace_hidehud": {
          // 완전히 제거(공간도 없음)
          "ignored": "(($rainbowpie_ui_flag_hud_hotbar_mode = 0) or not $rainbowpie_ui_flag_hud_hidehud_clickspace)",
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ 220, 24 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -0.5 ],
          // ?? ??
          "prevent_touch_input": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "tip_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "tip_text_background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100%c + 12px", "100%c + 5px" ],
                      // 사용할 이미지 경로
                      "texture": "($rainbowpie_ui_path_home + '/r_black')",
                      // ???
                      "alpha": 0,
                      // 애니메이션 목록
                      "anims": ["@rainbowpieui_hud.hidehudtip_background_out_in"],
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
                            "text": "rainbowpie.ui.hud.clickspace.tiptext",
                            // ???
                            "alpha": 0,
                            // 애니메이션 목록
                            "anims": ["@rainbowpieui_hud.hidehudtip_text_out_in"]
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
              "border_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "border_left": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ 1, "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 30,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_border_default_color",
                      // ???
                      "alpha": 0,
                      // 애니메이션 목록
                      "anims": ["@rainbowpieui_hud.hidehudtip_border_out_in"]
                    }
                  },
                  {
                    // ???/?? ??
                    "border_right": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ 1, "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 30,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_border_default_color",
                      // ???
                      "alpha": 0,
                      // 애니메이션 목록
                      "anims": ["@rainbowpieui_hud.hidehudtip_border_out_in"]
                    }
                  },
                  {
                    // ???/?? ??
                    "border_top": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100%", 1 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 30,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_border_default_color",
                      // ???
                      "alpha": 0,
                      // 애니메이션 목록
                      "anims": ["@rainbowpieui_hud.hidehudtip_border_out_in"]
                    }
                  },
                  {
                    // ???/?? ??
                    "border_bottom": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100%", 1 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 30,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_border_default_color",
                      // ???
                      "alpha": 0,
                      // 애니메이션 목록
                      "anims": ["@rainbowpieui_hud.hidehudtip_border_out_in"]
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
              "to_button_id": "button.hide_gui_all",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_ok",
              // 어떤 동작을 실행할지
              "to_button_id": "button.hide_gui_all",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#inventory_touch_button",
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
        // 가져올 값 이름
        "binding_name": "#hud_visible",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      },
      {
        // 가져올 값 이름
        "binding_name": "#hud_alpha",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#alpha",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      },
      {
        // 가져올 값 이름
        "binding_name": "#hud_propagate_alpha",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#propagateAlpha",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not #hud_visible)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "player_joined_toast_item_anim_start": {
    // 잠시 대기
    "anim_type": "wait",
		// 걸리는 시간(초)
		"duration": 0.0,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.player_joined_toast_item_anim_wait"
  },

  // ???/?? ??
  "player_joined_toast_item_anim_wait": {
    // 투명도 변화
    "anim_type": "alpha",
		// 걸리는 시간(초)
		"duration": 8.0,
    // 시작 값
    "from": 1.0,
		// 끝 값
		"to": 1.0,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.player_joined_toast_item_anim_end",
    // ?? ??
    "resettable": false
  },

  // ???/?? ??
  "player_joined_toast_item_anim_end": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
		// 걸리는 시간(초)
		"duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": 1.0,
		// 끝 값
		"to": 0
  },

  // ???/?? ??
  "player_joined_toast_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 0, 20 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "player_joined_toast_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // ??? ?? ?
          "propagate_alpha": true,
          // ???
          "alpha": 1.0,
          // 애니메이션 목록
          "anims": ["@rainbowpieui_hud.player_joined_toast_item_anim_start"],
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
                          "player_image": {
                            // 이미지 표시
                            "type": "image",
                            // 사용할 이미지 경로
                            "texture": "#texture",
                            // 가로/세로 크기
                            "size": [ 12, 12 ],
                            // ??? ?? ???
                            "texture_file_system": "#texture_source",
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
                            "size": [ 12, 12 ],
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
                          "player_name_text_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c + 1px", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "player_name@rainbowpie_ui_common.title_label": {
                                  // ?? ??
                                  "text_alignment": "left",
                                  // 보여줄 글자
                                  "text": "#gamertag",
                                  // 가로/세로 크기
                                  "size": [ "default", 10 ],
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
                        },
                        {
                          // ???/?? ??
                          "joined_text_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c + 1px", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "joined_text@rainbowpie_ui_common.title_label": {
                                  // ?? ??
                                  "text_alignment": "left",
                                  // 보여줄 글자
                                  "text": "joined.",
                                  // 가로/세로 크기
                                  "size": [ "default", 10 ],
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
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "notification_alpha_anim_start": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
		// 걸리는 시간(초)
		"duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": 0.0,
		// 끝 값
		"to": 1.0,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.notification_alpha_anim_wait"
  },

  // ???/?? ??
  "notification_alpha_anim_wait": {
    // 잠시 대기
    "anim_type": "wait",
		// 걸리는 시간(초)
		"duration": 8.0,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.notification_alpha_anim_end"
  },

  // ???/?? ??
  "notification_alpha_anim_end": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
    // ?? ??
    "destroy_at_end": "notification_features_disabled",
		// 걸리는 시간(초)
		"duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": 1.0,
		// 끝 값
		"to": 0
  },

  // ???/?? ??
  "notification_offset_anim_start": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
		// 걸리는 시간(초)
		"duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": [ 0, -20 ],
		// 끝 값
		"to": [ 0, 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.notification_offset_anim_wait"
  },

  // ???/?? ??
  "notification_offset_anim_wait": {
    // 잠시 대기
    "anim_type": "wait",
		// 걸리는 시간(초)
		"duration": 8.0,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.notification_offset_anim_end"
  },

  // ???/?? ??
  "notification_offset_anim_end": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // ?? ??
    "destroy_at_end": "notification_features_disabled",
		// 걸리는 시간(초)
		"duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
		// 끝 값
		"to": [ 0, 20 ]
  },

  // ???/?? ??
  "rainbowpie_root_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      // Module Controls
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_block_counter@rainbowpie_module_hud_block_counter.hud_block_counter": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_bow_helper@rainbowpie_module_hud_bow_helper.hud_bow_helper": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_compass@rainbowpie_module_hud_compass.hud_compass": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_selected_item_id@rainbowpie_module_hud_selected_item_id.hud_selected_item_id": {}
      },
      // Item Durability
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "rainbowpie_hud_durability@rainbowpieui_hud.rainbowpie_hud_durability": {}
      },
      // 显示一个看不见的hud玩家渲染
      {
        // ???/?? ??
        "hud_player": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "hud_player_renderer",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_0ffd0593)",
          // 가로/세로 크기
          "size": [ 0, 0 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, "200%" ]
        }
      },
      // Features Disabled Notification
      {
        // ???/?? ??
        "notification_features_disabled": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 완전히 제거(공간도 없음)
          "ignored": "((not $rainbowpie_ui_flag_6a8911d5) or (not $rainbowpie_ui_flag_notification_features_disabled))",
          // ??? ?? ?
          "propagate_alpha": true,
          // 애니메이션 목록
          "anims": [
            "@rainbowpieui_hud.notification_alpha_anim_start",
            "@rainbowpieui_hud.notification_offset_anim_start"
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "notification_background@rainbowpie_ui_common.text_background": {
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/r_white')",
                // 가로/세로 크기
                "size": [ "100%cm + 6px", "100%c + 4px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 20 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "content_stack": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ "100%cm", "100%c" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "title_text_stack": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 가로/세로 크기
                            "size": [ "100%c", 10 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "title_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "('rainbowpie.ui.notification.features_disabled.' + $rainbowpie_ui_flag_notification_features_disabled_reason)",
                                  // 조건에 따라 변수 값을 바꾸기
                                  "variables": [
                                    {
                                      // 이 조건이 맞으면 적용
                                      "requires": "(not ($rainbowpie_ui_flag_server_identifier = ''))",
                                      // 오버라이드 가능한 변수
                                      "$rainbowpie_ui_flag_notification_features_disabled_reason": "server"
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
                                  "size": [ 1, 0 ]
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "resourcepack_name_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "$rainbowpie_ui_flag_resourcepack_displayname",
                                  // ?? (R,G,B,A)
                                  "color": [ 1.0, 1.0, 0.333 ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not ($rainbowpie_ui_flag_server_displayname = ''))"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "server_name_text@rainbowpie_ui_common.text_label": {
                                  // 보여줄 글자
                                  "text": "$rainbowpie_ui_flag_server_displayname",
                                  // ?? (R,G,B,A)
                                  "color": [ 1.0, 1.0, 0.333 ],
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "($rainbowpie_ui_flag_server_displayname = '')"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "features_disabled_text@rainbowpie_ui_common.text_label": {
                            // 보여줄 글자
                            "text": "rainbowpie.ui.notification.features_disabled.text"
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
      // New Player Joined Toast
      {
        // ???/?? ??
        "player_joined_toast": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 0, 0 ],
          // 기준점에서 이동하는 거리
          "offset": [ 4, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_ae054b5d)",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_grid@rainbowpieui_hud.player_grid": {
                // 가로/세로 크기
                "size": [ 0, "default" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // ??? ?? ?
                "grid_item_template": "rainbowpieui_hud.player_joined_toast_item"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "override_tab_hotkey@rainbowpieui_hud.override_tab_hotkey": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_feature_hud_tablist)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 125
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "rainbowpie_hotbar@rainbowpieui_hud.rainbowpie_hotbar": {
          // 완전히 제거(공간도 없음)
          "ignored": "($rainbowpie_ui_flag_hud_hotbar_mode = 0)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 22,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#hud_visible_centered",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            },
            {
              // 가져올 값 이름
              "binding_name": "#hud_visible_centered_touch",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            },
            {
              // 가져올 값 이름
              "binding_name": "#hotbar_visible_not_centered",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            },
            {
              // 가져올 값 이름
              "binding_name": "#show_survival_ui"
            },
            {
              // 가져올 값 이름
              "binding_name": "#is_creative_mode"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#show_survival_ui or #is_creative_mode)",
              // 결과가 들어갈 속성
              "target_property_name": "#is_hotbar_needed"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#hud_visible_centered or #hud_visible_centered_touch or #hotbar_visible_not_centered) and #is_hotbar_needed)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "rainbowpie_chat@rainbowpieui_hud.rainbowpie_chat": {
          // 완전히 제거(공간도 없음)
          "ignored": "($touch or $rainbowpie_ui_flag_disable_custom_chat_ui)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 20
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "rainbowpie_chat_touch@rainbowpieui_hud.rainbowpie_chat_touch": {
          // 완전히 제거(공간도 없음)
          "ignored": "((not $touch) or not $rainbowpie_ui_flag_6d2ac350 or $rainbowpie_ui_flag_disable_custom_chat_ui)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 20
        }
      }
    ]
  },

  // ???/?? ??
  "rainbowpie_chat_touch": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$chat_panel_size": [ "50% - 90px", "100% - 24px" ],
    // 가로/세로 크기
    "size": "$chat_panel_size",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_hud_chat_halfscreen",
        // 오버라이드 가능한 변수
        "$chat_panel_size": [ "50%", "100% - 24px" ]
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "debug01@rainbowpie_ui_common.debug_draw": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_debug_name": "rainbowpie_chat"
        }
      },
      {
        // ???/?? ??
        "chat_stack": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "paper_doll_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 50 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#paper_doll_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "non_centered_gui_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 32 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#hud_visible_not_centered",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "number_of_days_played": {
                // 완전히 제거(공간도 없음)
                "ignored": "($rainbowpie_ui_flag_hud_hotbar_mode = 2)",
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%c + 6px", 12 ],
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // ???
                "alpha": 0.5,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "number_of_days_played_text@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // ?? (R,G,B,A)
                      "color": "$chat_text_color",
                      // 보여줄 글자
                      "text": "#text",

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#number_of_days_played_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always_when_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#hud_text_background_alpha"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#hud_text_background_alpha > (1 - #hud_text_background_alpha)) / 3)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_ui_flag_f733129c)"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "number_of_days_played_text_shadow@rainbowpie_ui_common.text_label_notheme": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_f733129c)",
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // ?? (R,G,B,A)
                      "color": "$chat_text_color",
                      // 보여줄 글자
                      "text": "#text",
                      // ?? ??
                      "shadow": true,

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#number_of_days_played_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always_when_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#hud_text_background_alpha"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#hud_text_background_alpha < (1 - #hud_text_background_alpha)) / 3)",
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
                    "binding_name": "#number_of_days_played_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // ?? ???
                    "binding_condition": "always",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#hud_text_background_alpha",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#alpha",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_flag_f733129c)"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "player_position": {
                // 완전히 제거(공간도 없음)
                "ignored": "($rainbowpie_ui_flag_hud_hotbar_mode = 2)",
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%c + 6px", 12 ],
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // ???
                "alpha": 0.5,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_position_text@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // ?? (R,G,B,A)
                      "color": "$chat_text_color",
                      // 보여줄 글자
                      "text": "#text",

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#player_position_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always_when_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#hud_text_background_alpha"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#hud_text_background_alpha > (1 - #hud_text_background_alpha)) / 3)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_ui_flag_f733129c)"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_position_text_shadow@rainbowpie_ui_common.text_label_notheme": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_f733129c)",
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // ?? (R,G,B,A)
                      "color": "$chat_text_color",
                      // 보여줄 글자
                      "text": "#text",
                      // ?? ??
                      "shadow": true,

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#player_position_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always_when_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#hud_text_background_alpha"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#hud_text_background_alpha < (1 - #hud_text_background_alpha)) / 3)",
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
                    "binding_name": "#player_position_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // ?? ???
                    "binding_condition": "always",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#hud_text_background_alpha",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#alpha",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_flag_f733129c)"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chat_panel@rainbowpieui_hud.chat_panel": {
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // ?? ?? ?
                "max_size": [ "100%", "50%" ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "live_player_renderer": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 22, 22 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -2 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_0ffd0593)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "live_player": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "live_player_renderer",
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
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#paper_doll_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "hud_root_panel_animation": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 끝 값
    "to": [ "100%", "100%" ],
    // 시작 값
    "from": [ "100%", "125%" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "hud_root_panel_animation_pop": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 끝 값
    "to": [ "100%", "100%" ],
    // 시작 값
    "from": [ "100%", "125%" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "hud_root_panel_back_animation": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "100%", "100%" ],
    // 끝 값
    "to": [ "100%", "125%" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "hud_root_panel_back_animation_pop": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "100%", "100%" ],
    // 끝 값
    "to": [ "100%", "125%" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "hidehudtip_background_out_in": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": 0.6,
    // 끝 값
    "to": 0.6,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.hidehudtip_background_out_wait",
    // ?? ??
    "play_event": "button.hide_gui_all"
  },

  // ???/?? ??
  "hidehudtip_background_out_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 3,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.hidehudtip_background_out_anim"
  },

  // ???/?? ??
  "hidehudtip_background_out_anim": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 2,
    // 시작 값
    "from": 0.6,
    // 끝 값
    "to": 0
  },

  // ???/?? ??
  "hidehudtip_text_out_in": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 1,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.hidehudtip_text_out_wait",
    // ?? ??
    "play_event": "button.hide_gui_all"
  },

  // ???/?? ??
  "hidehudtip_text_out_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 3,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.hidehudtip_text_out_anim"
  },

  // ???/?? ??
  "hidehudtip_text_out_anim": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 2,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0
  },

  // ???/?? ??
  "hidehudtip_border_out_in": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": "$rainbowpie_ui_theme_button_border_default_alpha",
    // 끝 값
    "to": "$rainbowpie_ui_theme_button_border_default_alpha",
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.hidehudtip_border_out_wait",
    // ?? ??
    "play_event": "button.hide_gui_all"
  },

  // ???/?? ??
  "hidehudtip_border_out_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 3,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.hidehudtip_border_out_anim"
  },

  // ???/?? ??
  "hidehudtip_border_out_anim": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 2,
    // 시작 값
    "from": "$rainbowpie_ui_theme_button_border_default_alpha",
    // 끝 값
    "to": 0
  },

  // ???/?? ??
  "rainbowpie_chat": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$chat_panel_size": [ "50% - 90px", "100% - 24px" ],
    // 가로/세로 크기
    "size": "$chat_panel_size",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -12 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_left",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_hud_chat_halfscreen",
        // 오버라이드 가능한 변수
        "$chat_panel_size": [ "50%", "100% - 24px" ]
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_149baa36",
        // 오버라이드 가능한 변수
        "$chat_panel_size": [ "288px", "100% - 24px" ]
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "debug01@rainbowpie_ui_common.debug_draw": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_debug_name": "rainbowpie_chat"
        }
      },
      {
        // ???/?? ??
        "chat_stack": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chat_panel@rainbowpieui_hud.chat_panel": {}
            },
            {
              // ???/?? ??
              "player_position": {
                // 완전히 제거(공간도 없음)
                "ignored": "($rainbowpie_ui_flag_hud_hotbar_mode = 2)",
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%cm + 6px", 12 ],
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // ???
                "alpha": 0.5,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_position_text@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // ?? (R,G,B,A)
                      "color": "$chat_text_color",
                      // 보여줄 글자
                      "text": "#text",

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#player_position_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always_when_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#hud_text_background_alpha"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#hud_text_background_alpha > (1 - #hud_text_background_alpha)) / 3)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_ui_flag_f733129c)"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_position_text_shadow@rainbowpie_ui_common.text_label_notheme": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_f733129c)",
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // ?? (R,G,B,A)
                      "color": "$chat_text_color",
                      // 보여줄 글자
                      "text": "#text",
                      // ?? ??
                      "shadow": true,

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#player_position_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always_when_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#hud_text_background_alpha"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#hud_text_background_alpha < (1 - #hud_text_background_alpha)) / 3)",
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
                    "binding_name": "#player_position_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // ?? ???
                    "binding_condition": "always",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#hud_text_background_alpha",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#alpha",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_flag_f733129c)"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "number_of_days_played": {
                // 완전히 제거(공간도 없음)
                "ignored": "($rainbowpie_ui_flag_hud_hotbar_mode = 2)",
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%cm + 6px", 12 ],
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // ???
                "alpha": 0.5,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "number_of_days_played_text@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // ?? (R,G,B,A)
                      "color": "$chat_text_color",
                      // 보여줄 글자
                      "text": "#text",

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#number_of_days_played_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always_when_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#hud_text_background_alpha"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#hud_text_background_alpha > (1 - #hud_text_background_alpha)) / 3)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $rainbowpie_ui_flag_f733129c)"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "number_of_days_played_text_shadow@rainbowpie_ui_common.text_label_notheme": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_f733129c)",
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // ?? (R,G,B,A)
                      "color": "$chat_text_color",
                      // 보여줄 글자
                      "text": "#text",
                      // ?? ??
                      "shadow": true,

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#number_of_days_played_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always_when_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#hud_text_background_alpha"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "((#hud_text_background_alpha < (1 - #hud_text_background_alpha)) / 3)",
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
                    "binding_name": "#number_of_days_played_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // ?? ???
                    "binding_condition": "always",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#hud_text_background_alpha",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#alpha",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_flag_f733129c)"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "player_position_padding": {
                // 완전히 제거(공간도 없음)
                "ignored": "($rainbowpie_ui_flag_hud_hotbar_mode = 2)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 12, 12 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #player_position_visible)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // ?? ???
                    "binding_condition": "always",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "number_of_days_played_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 12, 12 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #number_of_days_played_visible)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // ?? ???
                    "binding_condition": "always",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 완전히 제거(공간도 없음)
                    "ignored": "($rainbowpie_ui_flag_hud_hotbar_mode = 2)"
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
  "chat_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "fill" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "debug01@rainbowpie_ui_common.debug_draw": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_debug_name": "chat_panel"
        }
      },
      {
        // ???/?? ??
        "stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "chat_item_factory",
            // ?? ?? ?
            "max_children_size": "$max_children_size",
            // 팩토리 템플릿 매핑
            "control_ids": {
              // ?? ??
              "chat_item": "chat_item@rainbowpieui_hud.chat_grid_item"
            },
            // ???/?? ??
            "factory_variables": [
              "$rainbowpie_ui_theme_global_font_name",
              "$rainbowpie_ui_theme_global_font_backup_name",
              "$rainbowpie_ui_flag_chat_use_ui_font",
              "$rainbowpie_ui_flag_chatui_default_font"
            ]
          },
          // 오버라이드 가능한 변수
          "$max_children_size": 50,
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$rainbowpie_ui_flag_149baa36",
              // 오버라이드 가능한 변수
              "$max_children_size": 10
            }
          ]
        }
      }
    ]
  },


  // ???/?? ??
  "chat_grid_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_left",
    // ?? ????
    "clips_children": true,
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_hud.chat_content_panel_anim",
      "@rainbowpieui_hud.destroy_chat_wait"
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "(not #on_new_death_screen)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 오버라이드 가능한 변수
    "$chat_bg_opacity": 0.4,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_chatui_default_font",
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_theme_global_font_name": "default",
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_theme_global_font_backup_name": "default"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_64fd7c05",
        // 오버라이드 가능한 변수
        "$chat_bg_opacity": "$chat_background_opacity"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chat_text@rainbowpieui_hud.chat_label": {
          // ?? ?? ?
          "max_size": [ "100% - 10px", "default" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 33,
          // ?? ??
          "shadow": "(($chat_bg_opacity * 100) < 40)",
          // 애니메이션 목록
          "anims": [
            "@rainbowpieui_hud.anim_chat_intro_offset",
            "@rainbowpieui_hud.anim_chat_text_wait"
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "chat_background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // ???
                "alpha": "$chat_bg_opacity",
                // 가로/세로 크기
                "size": [ "100% + 5px", "default" ],
                // 기준점에서 이동하는 거리
                "offset": [ -1, 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": -1,
                // 애니메이션 목록
                "anims": [
                  "@rainbowpieui_hud.anim_chat_bg_wait"
                ]
              }
            }
          ]
        }
      }

    ]
  },

  // ???/?? ??
  "anim_chat_intro_offset": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": [ "-100%", 0 ],
    // 끝 값
    "to": [ 2, 0 ]
  },

  // ???/?? ??
  "chat_content_panel_anim": {
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
  },

  // ???/?? ??
  "anim_chat_text_alpha": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_quart",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0
  },

  // ???/?? ??
  "anim_chat_text_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "$chat_item_lifetime",
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.anim_chat_text_alpha"
  },

  // Set size to [ 0, 0 ] before destroying chat_grid_item
  "destroy_chat_grid_item": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "in_quart",
    // ?? ??
    "destroy_at_end": "chat_grid_item",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": [ "100%", "100%c" ],
    // 끝 값
    "to": [ "100%", 0 ]
  },

  // ???/?? ??
  "destroy_chat_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "$chat_item_lifetime",
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.destroy_chat_grid_item"
  },

  // ???/?? ??
  "anim_chat_bg_alpha": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_quart",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_chat_transition_time",
    // 시작 값
    "from": "$chat_bg_opacity",
    // 끝 값
    "to": "((not ($chat_bg_opacity = 0)) * 0.1)"
  },

  // ???/?? ??
  "anim_chat_bg_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "$chat_item_lifetime",
    // 다음 애니메이션으로 연결
    "next": "@rainbowpieui_hud.anim_chat_bg_alpha"
  },

  // ???/?? ??
  "chat_label": {
    // 글자 표시
    "type": "label",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 31,
    // 보여줄 글자
    "text": "#text",
    // 가로/세로 크기
    "size": [ "default", "default" ],

    // ?? ??
    "shadow": false,
    // ?? ??
    "enable_profanity_filter": "$rainbowpie_ui_flag_chat_message_profanity_filter",
    // ?? ??
    "localize": false,
    // ?? (R,G,B,A)
    "color": "$chat_text_color",
    // ??
    "font_type": "$chat_font_type",
    // ?? ?? ??
    "font_scale_factor": "$chat_font_scale_factor",
    // ??/?? ?
    "line_padding": "$chat_line_spacing",
    // 애니메이션 목록
    "anims": [
      "@hud.anim_chat_txt_wait"
    ],
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
        // 가져올 값 이름
        "binding_name": "#chat_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "chat_text_grid",
        // ?? ???
        "binding_condition": "once"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "borderless_button@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$button_content": "rainbowpieui_hud.borderless_button_panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color": [ 0.0, 0.0, 0.0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_alpha": 0.2,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_border_enabled": false,
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 포커스 가능 여부
    "focus_enabled": false,
    // 처음 포커스 우선순위
    "default_focus_precedence": 10,
    // ?? ??
    "prevent_touch_input": true,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#inventory_touch_button",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },

  // ???/?? ??
  "borderless_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$button_controls|default": [],
    // 이 안에 들어가는 부품 목록
    "controls": "$button_controls"
  },

  // ???/?? ??
  "rainbowpie_hotbar": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 42 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "debug01@rainbowpie_ui_common.debug_draw": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_debug_name": "rainbowpie_hotbar"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "horse_jump_rend@hud.horse_jump_renderer": {
          // 기준점(어디에서 시작할지)
          "anchor_from" : "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to" : "top_middle",
          // 가로/세로 크기
          "size" : [ 180, 5 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 11 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dash_rend@hud.dash_renderer": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 가로/세로 크기
          "size" : [ 180, 5 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 11 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 17
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "compatibility_panel@rainbowpieui_compatibility_config.compatibility_variables": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "exp_progress_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 180, 16 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "debug01@rainbowpie_ui_common.debug_draw": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_debug_name": "exp_progress_panel"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "progress_text_label@rainbowpie_ui_common.text_label_notheme": {
                      // ?? ??
                      "shadow": true,
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 7,
                      // 보여줄 글자
                      "text": "#level_number",
                      // ?? (R,G,B,A)
                      "color": "$experience_text_color",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#level_number",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#level_number_visible",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "expbar_empty_text@rainbowpie_ui_common.text_label_notheme": {
                      // ?? ??
                      "shadow": true,
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 7,
                      // 보여줄 글자
                      "text": "$rainbowpie_ui_flag_hud_expbar_empty_text",
                      // ?? (R,G,B,A)
                      "color": "$experience_text_color",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "(not #level_number_visible)",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "empty_progress_bar": {
                      // 이미지 표시
                      "type": "image",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_expbar_texture": "textures/ui/White",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_this_expbar_size": [ "100%", 4 ],
                      // 사용할 이미지 경로
                      "texture": "$rainbowpie_localui_this_expbar_texture",
                      // 가로/세로 크기
                      "size": "$rainbowpie_localui_this_expbar_size",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_experience_empty_color",
                      // ???
                      "alpha": "$rainbowpie_ui_theme_experience_empty_alpha",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "empty_progress_bar": {
                            // 이미지 표시
                            "type": "image",
                            // 사용할 이미지 경로
                            "texture": "$rainbowpie_localui_this_expbar_texture",
                            // 가로/세로 크기
                            "size": "$rainbowpie_localui_this_expbar_size",
                            // ?? (R,G,B,A)
                            "color": "$rainbowpie_ui_theme_experience_full_color",
                            // ???
                            "alpha": "$rainbowpie_ui_theme_experience_full_alpha",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2,
                            // ??? ??
                            "clip_direction": "left",
                            // ?? ??
                            "clip_pixelperfect": false,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#exp_progress",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#clip_ratio",
                                // 게임이 주는 전역 값 연결
                                "binding_type": "global"
                              }
                            ]
                          }
                        }
                      ],
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$rainbowpie_ui_flag_hud_hotbar_rounded",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_expbar_texture": "($rainbowpie_ui_path_home + '/r_white_pill')",
                          // 오버라이드 가능한 변수
                          "$rainbowpie_localui_this_expbar_size": [ "100%", 5 ]
                        }
                      ]
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#show_survival_ui"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#hotbar_with_locator_bar",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not (($compatibility_min_version > 1218000) or ($compatibility_min_version = 1218000)))"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#hotbar_with_xp_bar"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#hotbar_with_xp_bar)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(($compatibility_min_version > 1218000) or ($compatibility_min_version = 1218000))"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#show_survival_ui and (#hotbar_with_xp_bar or #hotbar_with_locator_bar))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible",
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not (($compatibility_min_version > 1218000) or ($compatibility_min_version = 1218000)))"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "locator_bar_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 180, 16 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12,
                // 완전히 제거(공간도 없음)
                "ignored": "(not (($compatibility_min_version > 1218000) or ($compatibility_min_version = 1218000)))",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "locator_bar@hud.locator_bar": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "($rainbowpie_ui_flag_5354b722 and $mouse)",
                      // 가로/세로 크기
                      "size": [ "100%", 5 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0.5 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 10
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#hotbar_with_locator_bar",
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
        "hotbar_grid_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar_grid@rainbowpieui_hud.hotbar_grid": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점에서 이동하는 거리
                "offset": "$offset",
                // 오버라이드 가능한 변수
                "$offset": [ 0, -1 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($rainbowpie_ui_flag_hud_hotbar_mode = 1)",
                    // 오버라이드 가능한 변수
                    "$offset": [ 0, -1.5 ]
                  }
                ]
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#hotbar_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_hidehud_button@rainbowpieui_hud.borderless_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.hide_gui_all",
          // ??/???
          "enabled": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ 20, 24 ],
          // 기준점에서 이동하는 거리
          "offset": [ -100, -0.5 ],
          // 오버라이드 가능한 변수
          "$button_controls": [
            {
              // ???/?? ??
              "icon_text": {
                // 글자 표시
                "type": "label",
                // ??
                "font_type": "default",
                // 보여줄 글자
                "text": "H",
                // ???
                "alpha": 0.65,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#layout_customization_main_panel_visible"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not #layout_customization_main_panel_visible)",
              // 결과가 들어갈 속성
              "target_property_name": "#enabled"
            },
            {
              // 가져올 값 이름
              "binding_name": "#inventory_touch_button",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hotbar_elipses_button@rainbowpieui_hud.borderless_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.hotbar_inventory_button",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ 20, 24 ],
          // 기준점에서 이동하는 거리
          "offset": [ 100, -0.5 ],
          // 오버라이드 가능한 변수
          "$button_controls": [
            {
              // ???/?? ??
              "elipses": {
                // 이미지 표시
                "type": "image",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 가로/세로 크기
                "size": [ 10, 10 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0.0, 0.5 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 30,
                // 사용할 이미지 경로
                "texture": "$icon_texture",
                // 오버라이드 가능한 변수
                "$icon_texture": "($rainbowpie_ui_path_theme + '/icon/hud/inventory')",
                // ???
                "alpha": 0.65,
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "(not ($rainbowpieui_branch_type = 'release'))",
                    // 오버라이드 가능한 변수
                    "$icon_texture": "($rainbowpie_ui_path_theme + '/icon/hud/inventory_ci')"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "hotbar_background": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "animated_hotbar_slot_unselected_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 목록 이름
                "collection_name": "hotbar_items",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ 180, 24 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, -0.5 ],
                // 오버라이드 가능한 변수
                "$hotbar_collection_name": "hotbar_items",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_5e1f3f4e)",
                // ?? ????
                "clips_children": true,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_0@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 0
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_1@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 1
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_2@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 2
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_3@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 3
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_4@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 4
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_5@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 5
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_6@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 6
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_7@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 7
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "slot_8@rainbowpieui_hud.animated_hotbar_slot_unselected_panel": {
                      // 오버라이드 가능한 변수
                      "$collection_index": 8
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "background_v1": {
                // 보이기/숨기기(공간 유지)
                "visible": "($rainbowpie_ui_flag_hud_hotbar_mode = 1)",
                // 이미지 표시
                "type": "image",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ 180, 24 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, -0.5 ],
                // ???
                "alpha": 0.2,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_this_hotbar_texture": "textures/ui/Black",
                // 사용할 이미지 경로
                "texture": "$rainbowpie_localui_this_hotbar_texture",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$rainbowpie_ui_flag_hud_hotbar_rounded",
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_this_hotbar_texture": "($rainbowpie_ui_path_home + '/r_black')"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "background_v2": {
                // 보이기/숨기기(공간 유지)
                "visible": "($rainbowpie_ui_flag_hud_hotbar_mode = 2)",
                // 이미지 표시
                "type": "image",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100%", 24 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // ???
                "alpha": 0.3,
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_position_text@rainbowpie_ui_common.text_label_notheme": {
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not ($rainbowpie_ui_flag_hud_hotbar_mode = 2))",
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, 1.5 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,

                      // ?? ??
                      "enable_profanity_filter": false,
                      // 보여줄 글자
                      "text": "#text",
                      // ?? ??
                      "shadow": false,

                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#player_position_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text",
                          // ?? ???
                          "binding_condition": "always",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        },
                        {
                          // 가져올 값 이름
                          "binding_name": "#player_position_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible",
                          // ?? ???
                          "binding_condition": "always",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "player_count": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 가로/세로 크기
                      "size": [ "100%", 10 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, -1.5 ],
                      // ?? ????
                      "clips_children": true,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "player_grid@rainbowpieui_hud.player_grid": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_playercount_textshadow": false,
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_left",
                            // 가로/세로 크기
                            "size": [ "100%", "100%c" ],
                            // ??? ?? ?
                            "grid_item_template": "rainbowpieui_hud.player_count",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_playerlist_full": true
                          }
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_info@rainbowpieui_hud.player_grid": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 가로/세로 크기
                      "size": [ 300, 24 ],
                      // ??? ?? ?
                      "grid_item_template": "rainbowpieui_hud.player_info_panel"
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
              "binding_name": "#hotbar_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "hotbar_grid": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 오버라이드 가능한 변수
    "$hotbar_collection_name|default": "hotbar_items",
    // ??? ?? ?
    "grid_item_template": "rainbowpieui_hud.gui_hotbar_grid_item",
    // ??? ?? ?
    "grid_dimension_binding": "#hotbar_grid_dimensions",
    // 목록 이름
    "collection_name": "$hotbar_collection_name",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#hotbar_grid_dimensions",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },

  // ???/?? ??
  "hotbar_slot_selected_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 가로/세로 크기
    "size": [ 20, 24 ],
    // ???
    "alpha": 0.3,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#slot_selected",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$hotbar_collection_name"
      }
    ]
  },

  // ???/?? ??
  "anim_hotbar_slot_selected": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_out_sine",
    // 걸리는 시간(초)
    "duration": 0.25,
    // 시작 값
    "from": 0.0,
    // 끝 값
    "to": 0.3
  },

  // ???/?? ??
  "anim_hotbar_slot_unselected": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_out_sine",
    // 걸리는 시간(초)
    "duration": 0.25,
    // 시작 값
    "from": 0.3,
    // 끝 값
    "to": 0.0
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anim_hotbar_slot_alpha_left@rainbowpieui_hud.anim_hotbar_slot_unselected": {
    // ?? ??
    "destroy_at_end": "animated_hotbar_slot_unselected_image_left"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anim_hotbar_slot_alpha_right@rainbowpieui_hud.anim_hotbar_slot_unselected": {
    // ?? ??
    "destroy_at_end": "animated_hotbar_slot_unselected_image_right"
  },

  // ???/?? ??
  "anim_hotbar_slot_offset": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 0.25
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anim_hotbar_slot_offset_left@rainbowpieui_hud.anim_hotbar_slot_offset": {
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "-100%x", 0 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anim_hotbar_slot_offset_right@rainbowpieui_hud.anim_hotbar_slot_offset": {
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "100%x", 0 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "animated_hotbar_slot_selected_image@rainbowpieui_hud.hotbar_slot_selected_image": {
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_hud.anim_hotbar_slot_selected"
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "animated_hotbar_slot_unselected_image@rainbowpieui_hud.hotbar_slot_selected_image": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [],
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_hud.anim_hotbar_slot_unselected"
    ]
  },

  // ???/?? ??
  "animated_hotbar_slot_panel": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_5e1f3f4e)",

    // 오버라이드 가능한 변수
    "$is_selected": true,
    // 오버라이드 가능한 변수
    "$factory_name": "hotbar_slot_selected_factory",
    // 오버라이드 가능한 변수
    "$factory_control_name": "rainbowpieui_hud.animated_hotbar_slot_selected_image",
    // 오버라이드 가능한 변수
    "$collection_length_binding": "(1 * #slot_selected)",
    // 오버라이드 가능한 변수
    "$unselected_factory_control_name": "rainbowpieui_hud.animated_hotbar_slot_unselected_image",

    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $is_selected)",
        // 오버라이드 가능한 변수
        "$factory_name": "hotbar_slot_unselected_factory",
        // 오버라이드 가능한 변수
        "$factory_control_name": "$unselected_factory_control_name",
        // 오버라이드 가능한 변수
        "$collection_length_binding": "(1 * (not #slot_selected))"
      }
    ],

    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "$factory_name",
      // ??? ???
      "control_name": "$factory_control_name",
      // ?? ?? ?
      "max_children_size": 1
    },
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#slot_selected",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$hotbar_collection_name"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$collection_length_binding",
        // 결과가 들어갈 속성
        "target_property_name": "#collection_length"
      }
    ]
  },

  // ???/?? ??
  "anim_hotbar_slot_panel": {
    // 투명도 변화
    "anim_type": "alpha",
    // 걸리는 시간(초)
    "duration": 0
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anim_hotbar_slot_panel_left@rainbowpieui_hud.anim_hotbar_slot_panel": {
    // 시작 값
    "from": 0,
    // 끝 값
    "to": 1,
    // ?? ??
    "play_event": "button.hotbar_inventory_left"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anim_hotbar_slot_panel_right@rainbowpieui_hud.anim_hotbar_slot_panel": {
    // 시작 값
    "from": 0,
    // 끝 값
    "to": 1,
    // ?? ??
    "play_event": "button.hotbar_inventory_right"
  },

  // ???/?? ??
  "anim_hotbar_slot_destroy": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.0
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anim_hotbar_slot_destroy_left@rainbowpieui_hud.anim_hotbar_slot_destroy": {
    // ?? ??
    "destroy_at_end": "animated_hotbar_slot_unselected_image_left",
    // ?? ??
    "play_event": "button.hotbar_inventory_left"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "anim_hotbar_slot_destroy_right@rainbowpieui_hud.anim_hotbar_slot_destroy": {
    // ?? ??
    "destroy_at_end": "animated_hotbar_slot_unselected_image_right",
    // ?? ??
    "play_event": "button.hotbar_inventory_right"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "animated_hotbar_slot_unselected_image_left@rainbowpieui_hud.hotbar_slot_selected_image": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [ ],
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_hud.anim_hotbar_slot_alpha_left",
      "@rainbowpieui_hud.anim_hotbar_slot_offset_left",
      "@rainbowpieui_hud.anim_hotbar_slot_destroy_left"
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "animated_hotbar_slot_unselected_image_right@rainbowpieui_hud.hotbar_slot_selected_image": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [ ],
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_hud.anim_hotbar_slot_alpha_right",
      "@rainbowpieui_hud.anim_hotbar_slot_offset_right",
      "@rainbowpieui_hud.anim_hotbar_slot_destroy_right"
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hotbar_slot_unselected_panel@rainbowpieui_hud.animated_hotbar_slot_panel": {
    // ???
    "alpha": 0.0,
    // ??? ?? ?
    "propagate_alpha": true,
    // 오버라이드 가능한 변수
    "$is_selected": false,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$hotbar_collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#slot_selected",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$hotbar_collection_name"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$collection_length_binding",
        // 결과가 들어갈 속성
        "target_property_name": "#collection_length"
      }
    ]
  },

  // ???/?? ??
  "hotbar_slot_input": {
    // 마우스/커서 따라다니는 패널
    "type": "input_panel",
    // 오버라이드 가능한 변수
    "$hotbar_slot_id|default": "button.slot1",
    // 오버라이드 가능한 변수
    "$hotbar_button_id|default": "button.hotbar_inventory_left",
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "$hotbar_slot_id",
        // 어떤 동작을 실행할지
        "to_button_id": "$hotbar_button_id",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "consume_event": false
      }
    ]
  },

  // ???/?? ??
  "animated_hotbar_slot_unselected_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // ?? ??
    "collection_index": "$collection_index",
    // 가로/세로 크기
    "size": [ 20, "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "input_mappings": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ 0, 0 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#slot_selected",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$hotbar_collection_name"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot1_left@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index < 1)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot1",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_left"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot2_left@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index < 2)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot2",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_left"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot3_left@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index < 3)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot3",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_left"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot4_left@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index < 4)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot4",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_left"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot5_left@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index < 5)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot5",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_left"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot6_left@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index < 6)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot6",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_left"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot7_left@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index < 7)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot7",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_left"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot8_left@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index < 8)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot8",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_left"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot2_right@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index > 0)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot2",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_right"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot3_right@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index > 1)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot3",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_right"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot4_right@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index > 2)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot4",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_right"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot5_right@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index > 3)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot5",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_right"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot6_right@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index > 4)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot6",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_right"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot7_right@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index > 5)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot7",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_right"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot8_right@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index > 6)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot8",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_right"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "to_slot9_right@rainbowpieui_hud.hotbar_slot_input": {
                // 완전히 제거(공간도 없음)
                "ignored": "($collection_index > 7)",
                // 오버라이드 가능한 변수
                "$hotbar_slot_id": "button.slot9",
                // 오버라이드 가능한 변수
                "$hotbar_button_id": "button.hotbar_inventory_right"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "animated_hotbar_slot_panel_left@rainbowpieui_hud.hotbar_slot_unselected_panel": {
          // 오버라이드 가능한 변수
          "$unselected_factory_control_name": "rainbowpieui_hud.animated_hotbar_slot_unselected_image_left",
          // ????? ?? ?
          "animation_reset_name": "button.hotbar_inventory_right",
          // 애니메이션 목록
          "anims": [
            "@rainbowpieui_hud.anim_hotbar_slot_panel_left"
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "animated_hotbar_slot_panel_right@rainbowpieui_hud.hotbar_slot_unselected_panel": {
          // 오버라이드 가능한 변수
          "$unselected_factory_control_name": "rainbowpieui_hud.animated_hotbar_slot_unselected_image_right",
          // ????? ?? ?
          "animation_reset_name": "button.hotbar_inventory_left",
          // 애니메이션 목록
          "anims": [
            "@rainbowpieui_hud.anim_hotbar_slot_panel_right"
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "gui_hotbar_grid_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ 20, 22 ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 오버라이드 가능한 변수
    "$stack_count_required|default": true,
    // 오버라이드 가능한 변수
    "$durability_bar_required|default": true,
    // 오버라이드 가능한 변수
    "$storage_bar_required|default": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "hotbar_slot_selected_image_rounded": {
          // 완전히 제거(공간도 없음)
          "ignored": "((not $rainbowpie_ui_flag_hud_hotbar_rounded) or ($rainbowpie_ui_flag_hud_hotbar_mode = 2) or $rainbowpie_ui_flag_5e1f3f4e)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 20, 24 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar_slot_selected_image@rainbowpieui_hud.hotbar_slot_selected_image": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#collection_index",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$hotbar_collection_name"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#slot_selected",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$hotbar_collection_name"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#slot_selected and (not (#collection_index = 0) and not (#collection_index = 8)))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar_slot_selected_image_left@rainbowpieui_hud.hotbar_slot_selected_image": {
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/r_white_left')",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#collection_index",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$hotbar_collection_name"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#slot_selected",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$hotbar_collection_name"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#slot_selected and (#collection_index = 0))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hotbar_slot_selected_image_right@rainbowpieui_hud.hotbar_slot_selected_image": {
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/r_white_right')",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#collection_index",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$hotbar_collection_name"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#slot_selected",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$hotbar_collection_name"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#slot_selected and (#collection_index = 8))",
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
        "hotbar_slot_selected_image@rainbowpieui_hud.hotbar_slot_selected_image": {
          // 완전히 제거(공간도 없음)
          "ignored": "((not ((not $rainbowpie_ui_flag_hud_hotbar_rounded) or ($rainbowpie_ui_flag_hud_hotbar_mode = 2))) or $rainbowpie_ui_flag_5e1f3f4e)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "animated_hotbar_slot_selected_image@rainbowpieui_hud.animated_hotbar_slot_panel": {}
      },
      {
        // ???/?? ??
        "hotbar_parent": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 18, 18 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_icon@hud.hotbar_hud_item_icon": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10,
                // 가로/세로 크기
                "size": [ 16, 16 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_count@common.stack_count_label": {
                // ??
                "font_type": "$rainbowpie_ui_theme_global_font_name",
                // ?? ?? ?
                "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 11,
                // 오버라이드 가능한 변수
                "$item_collection_name": "$hotbar_collection_name",
                // 오버라이드 가능한 변수
                "$stack_count_collection_name": "$hotbar_collection_name",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#inventory_stack_count",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$stack_count_collection_name"
                  }
                ]
              }
            },
            { "hotbar_hint@edu_common.hotbar_hint": {} },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_dura@rainbowpieui_hud.item_durability": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_store@hud.item_storage": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "container_item_lock_overlay@hud.container_item_lock_overlay": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 15,
                // 가로/세로 크기
                "size": [ 16, 16 ]
              }
            }
          ]
        }
      },
      { "cooldown_renderer@hud.cooldown_renderer": { "layer": 18 } },
      { "hotbar_slot_button@hud.gui_hotbar_slot_button_prototype": {} }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "item_durability@common.durability_bar": {
    // 오버라이드 가능한 변수
    "$durability_bar_required|default": true,
    // 오버라이드 가능한 변수
    "$item_collection_name": "$hotbar_collection_name",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#item_durability_total_amount",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#progress_bar_total_amount",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$item_collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#item_durability_current_amount",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#progress_bar_current_amount",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$item_collection_name"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (#progress_bar_current_amount = #progress_bar_total_amount))",
        // 결과가 들어갈 속성
        "target_property_name": "#touch_progress_bar_visible"
      }
    ]
  },

  // ???/?? ??
  "player_info_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 300, 24 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
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
          "size": [ 21, 21 ],
          // 기준점에서 이동하는 거리
          "offset": [ -1.5, 0 ],
          // ??? ?? ???
          "texture_file_system": "#texture_source",
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
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
          "size": [ 21, 21 ],
          // 기준점에서 이동하는 거리
          "offset": [ -1.5, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
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
          "font_scale_factor": 1.8,
          // ?? ??
          "text_alignment": "right",
          // 보여줄 글자
          "text": "#gamertag",
          // 가로/세로 크기
          "size": [ "default", "default" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 기준점에서 이동하는 거리
          "offset": [ -26, 0 ],
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
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
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
        "source_property_name": "(#collection_index = 0)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "override_tab_hotkey": {
    // 클릭 가능한 버튼
    "type": "button",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, "-200%" ],
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ??
    "pressed_control": "hud_elements",
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.scoreboard",
        // 어떤 동작을 실행할지
        "to_button_id": "button.scoreboard",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "consume_event": false
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "hud_elements": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, "200%" ],
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "compatibility_panel@rainbowpieui_compatibility_config.compatibility_variables": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "rainbowpie_hotbar": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", 42 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_middle",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "locator_bar_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 180, 16 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 12,
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not (($compatibility_min_version > 1218000) or ($compatibility_min_version = 1218000)))",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "locator_bar@hud.locator_bar": {
                                  // 완전히 제거(공간도 없음)
                                  "ignored": "(not ($rainbowpie_ui_flag_5354b722 and $mouse))",
                                  // 가로/세로 크기
                                  "size": [ "100%", 5 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 0, 0.5 ],
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_middle",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 10
                                }
                              }
                            ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#hotbar_with_locator_bar",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible",
                                // 완전히 제거(공간도 없음)
                                "ignored": "$rainbowpie_ui_flag_19efcc11"
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
              "playerlist_new": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_d9ed3763)",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 0, 13 ],
                // 가로/세로 크기
                "size": [ 443, 160 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "player_count": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 가로/세로 크기
                      "size": [ 221, 10 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -12 ],
                      // ?? ????
                      "clips_children": true,
                      // 완전히 제거(공간도 없음)
                      "ignored": "($rainbowpie_ui_flag_1fa7dfd7)",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "player_grid@rainbowpieui_hud.player_grid": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_left",
                            // 가로/세로 크기
                            "size": [ 221, "100%c" ],
                            // ??? ?? ?
                            "grid_item_template": "rainbowpieui_hud.player_count_new",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_playerlist_full": true
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "player_count_v2": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 가로/세로 크기
                      "size": [ 221, 12 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -10 ],
                      // ?? ????
                      "clips_children": true,
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $rainbowpie_ui_flag_1fa7dfd7)",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "player_grid@rainbowpieui_hud.player_grid": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_left",
                            // 가로/세로 크기
                            "size": [ 221, "100%c" ],
                            // ??? ?? ?
                            "grid_item_template": "rainbowpieui_hud.player_count_v2",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_playerlist_full": true
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "playerlist_in_player_grid_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": "$playerlist_offset",
                      // 오버라이드 가능한 변수
                      "$playerlist_offset": [ 0, 0 ],
                      // ?? ????
                      "clips_children": true,
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$rainbowpie_ui_flag_1fa7dfd7",
                          // 오버라이드 가능한 변수
                          "$playerlist_offset": [ 0, 3 ]
                        }
                      ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "debug01@rainbowpie_ui_common.debug_draw": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_debug_name": "playerlist_panel"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "player_grid@rainbowpieui_hud.player_grid": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_left",
                            // 가로/세로 크기
                            "size": [ "100%", "100%c" ],
                            // ??? ?? ?
                            "grid_item_template": "rainbowpieui_hud.playerlist_in_player_grid",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_playerlist_full": true
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
              "playerlist_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 완전히 제거(공간도 없음)
                "ignored": "$rainbowpie_ui_flag_d9ed3763",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 0, 13 ],
                // 가로/세로 크기
                "size": [ 330, 150 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "debug01@rainbowpie_ui_common.debug_draw": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_debug_name": "playerlist_panel"
                    }
                  },
                  {
                    // ???/?? ??
                    "player_count": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 가로/세로 크기
                      "size": [ 221, 10 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -12 ],
                      // ?? ????
                      "clips_children": true,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "player_grid@rainbowpieui_hud.player_grid": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_left",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_left",
                            // 가로/세로 크기
                            "size": [ 221, "100%c" ],
                            // ??? ?? ?
                            "grid_item_template": "rainbowpieui_hud.player_count",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_playerlist_full": true
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "playerlist_stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 가로/세로 크기
                      "size": [ "100%c", 150 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "playerlist_0": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", 150 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "player_grid@rainbowpieui_hud.player_grid": {
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_middle",
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_playerlist_start_index": 0,
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_playerlist_end_index": 10
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "playerlist_0_padding": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 1, 1 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "playerlist_1": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "100%c", 150 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "player_grid@rainbowpieui_hud.player_grid": {
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_middle",
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 0, -143 ],
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_playerlist_start_index": 11,
                                  // 오버라이드 가능한 변수
                                  "$rainbowpie_localui_playerlist_end_index": 21
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
                    "tip_background": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 143 ],
                      // 가로/세로 크기
                      "size": [ 221, 12 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "player_grid@rainbowpieui_hud.player_grid": {
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, -264 ],
                            // 가로/세로 크기
                            "size": [ 221, "100%c" ],
                            // ??? ?? ?
                            "grid_item_template": "rainbowpieui_hud.toomany_players_tip",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_playerlist_start_index": 22,
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_playerlist_end_index": 22
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
  "playerlist_in_player_grid": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 160 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "playerlist_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "playerlist_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", 156 ],
                // ?? ????
                "clips_children": true,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_grid@rainbowpieui_hud.player_grid": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_playerlist_start_index": 0,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_playerlist_end_index": 0
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "playerlist_0_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 1, 1 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index > 11)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "playerlist_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", 156 ],
                // ?? ????
                "clips_children": true,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_grid@rainbowpieui_hud.player_grid": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -156 ],
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_playerlist_start_index": 0,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_playerlist_end_index": 0
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index > 11)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "playerlist_1_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 1, 1 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index > 23)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "playerlist_2": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", 156 ],
                // ?? ????
                "clips_children": true,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_grid@rainbowpieui_hud.player_grid": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -312 ],
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_playerlist_start_index": 0,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_playerlist_end_index": 0
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index > 23)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "playerlist_2_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 1, 1 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index > 35)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "playerlist_3": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", 156 ],
                // ?? ????
                "clips_children": true,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_grid@rainbowpieui_hud.player_grid": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -468 ],
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_playerlist_start_index": 0,
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_playerlist_end_index": 0
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index > 35)",
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
  "player_count_v2_item": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "world_icon_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 10, 10 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "world_icon": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_theme + '/icon/hud/tablist/world')",
                // 가로/세로 크기
                "size": [ 10, 10 ],
                // 기준점에서 이동하는 거리
                "offset": [ -2, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 완전히 제거(공간도 없음)
                "ignored": "$rainbowpie_ui_flag_custom_server_icon"
              }
            },
            {
              // ???/?? ??
              "server_icon": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/server_icon/' + $rainbowpie_ui_flag_custom_server_icon_name)",
                // 가로/세로 크기
                "size": [ 10, 10 ],
                // 기준점에서 이동하는 거리
                "offset": [ -2, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_custom_server_icon)"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_name_text@rainbowpie_ui_common.title_label": {
          // 보여줄 글자
          "text": "#player_list_title",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#player_list_title"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "spacer_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "fill", 1 ]
        }
      },
      {
        // ???/?? ??
        "player_icon_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 12, 10 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "player_icon": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_theme + '/icon/hud/tablist/player')",
                // 가로/세로 크기
                "size": [ 10, 10 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle"
              }
            }
          ]
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
  },

  // ???/?? ??
  "player_count_v2": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 221, 12 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.title_background": {
          // 가로/세로 크기
          "size": [ "100%c + 6px", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_count@rainbowpieui_hud.player_count_v2_item": {
                // 가로/세로 크기
                "size": [ 104, 10 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index < 12)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_count_wide@rainbowpieui_hud.player_count_v2_item": {
                // 가로/세로 크기
                "size": [ 215, 10 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index > 11)",
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
  "player_count_new": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 221, 10 ],
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
          "size": [ "100%c", 10 ],
          // ?? ????
          "clips_children": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "player_count": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ 110, 10 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "player_count_text@rainbowpie_ui_common.title_label": {
                      // ?? ??
                      "shadow": true,
                      // ?? ??
                      "text_alignment": "left",
                      // 보여줄 글자
                      "text": "#player_count_str",
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#player_list_title"
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
                          "source_property_name": "('\"' + #player_count + ' | ' + #player_list_title + '\"')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#player_count_str"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "spacer_0": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "fill", 1 ]
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
                "size": [ 111, 10 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index > 11)",
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
  "player_count": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ 221, 10 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_playercount_textshadow|default": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_count_text@rainbowpie_ui_common.title_label": {
          // ?? ??
          "shadow": "$rainbowpie_localui_playercount_textshadow",
          // ?? ??
          "text_alignment": "left",
          // 보여줄 글자
          "text": "#player_count_str",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
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
      },
      {
        // ???/?? ??
        "spacer_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_label@rainbowpie_ui_common.title_label": {
          // ?? ??
          "shadow": "$rainbowpie_localui_playercount_textshadow",
          // ?? ??
          "text_alignment": "left",
          // 보여줄 글자
          "text": "rainbowpie.ui.hud.tablist.player_count",
          // 가로/세로 크기
          "size": [ "fill", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
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
              "source_property_name": "(not (#player_count = 1))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "player_label_single@rainbowpie_ui_common.title_label": {
          // ?? ??
          "shadow": "$rainbowpie_localui_playercount_textshadow",
          // ?? ??
          "text_alignment": "left",
          // 보여줄 글자
          "text": "rainbowpie.ui.hud.tablist.player_count.single",
          // 가로/세로 크기
          "size": [ "fill", 10 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
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
              "source_property_name": "(#player_count = 1)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "toomany_players_tip": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 221, 12 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "tip_background@rainbowpie_ui_common.text_background": {
          // 가로/세로 크기
          "size": [ 221, 12 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "tip_text@rainbowpie_ui_common.title_label": {
                // ?? ??
                "text_alignment": "center",
                // 보여줄 글자
                "text": "rainbowpie.ui.hud.tablist.maxplayers",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 가로/세로 크기
                "size": [ "100%", 10 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
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
              "source_property_name": "(#collection_index = 22)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "playerlist_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 110, 13 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_playerlist_start_index|default": 0,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_playerlist_end_index|default": 10,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_playerlist_full|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "playerlist_item_background@rainbowpie_ui_common.title_background": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 가로/세로 크기
          "size": [ 110, 12 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "playerlist_item_panel@rainbowpieui_hud.playerlist_item_panel": {}
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
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
              "source_property_name": "(((#collection_index > $rainbowpie_localui_playerlist_start_index) or (#collection_index = $rainbowpie_localui_playerlist_start_index) and ((#collection_index < $rainbowpie_localui_playerlist_end_index) or (#collection_index = $rainbowpie_localui_playerlist_end_index)))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible",
              // 완전히 제거(공간도 없음)
              "ignored": "$rainbowpie_localui_playerlist_full"
            }
          ]
        }
      }
    ]

  },

  // ???/?? ??
  "playerlist_item_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 110, 12 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
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
          "size": [ 12, 12 ],
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
          "size": [ 12, 12 ],
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
        // ???/?? ??
        "player_name_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 13, 0 ],
          // 가로/세로 크기
          "size": [ "100% - 14px", 10 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_name@rainbowpie_ui_common.title_label": {
                // ?? ??
                "text_alignment": "left",
                // 보여줄 글자
                "text": "#gamertag",
                // 가로/세로 크기
                "size": [ "fill", 10 ],
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
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "tag_offline@rainbowpieui_hud.playertag": {
                // 완전히 제거(공간도 없음)
                "ignored": true, // 房主可能会被错误的显示为离线玩家
                // ?? (R,G,B,A)
                "color": [ 0.667, 0.667, 0.667 ],
                // 보여줄 글자
                "text": "rainbowpie.ui.hud.tablist.playertag.offline",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#gamerpic_visible",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "players_collection"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not #gamerpic_visible)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "tag_self@rainbowpieui_hud.playertag": {
                // 보이기/숨기기(공간 유지)
                "visible": "$rainbowpie_ui_flag_tablist_selfTag",
                // ?? (R,G,B,A)
                "color": [ 0.333, 1.0, 0.333 ],
                // 보여줄 글자
                "text": "rainbowpie.ui.hud.tablist.playertag.self",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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
                    "source_property_name": "(#collection_index = 0)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_count_text@rainbowpie_ui_common.title_label": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_debug)",
                // 보여줄 글자
                "text": "#player_count_str",
                // 가로/세로 크기
                "size": [ "default", 10 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
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

  // 다른 템플릿을 가져와서 확장(상속)
  "playertag@rainbowpie_ui_common.text_label_notheme": {
    // ?? ??
    "text_alignment": "left",
    // 가로/세로 크기
    "size": [ "default", 10 ],
    // ?? ?? ?
    "max_size": [ "50%", 10 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3
  },

  // ???/?? ??
  "player_grid": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ 110, "100%c" ],
    // ??? ?? ?
    "grid_item_template": "rainbowpieui_hud.playerlist_item",
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
```








### ui extras
in_bed_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: in_bed_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_bed",

  // ???/?? ??
  "in_bed_screen_content": {
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
          "$rainbowpie_localui_screen_ingame_anim2": true,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "in_bed_screen_content@bed.in_bed_screen_content": {}
            }
          ]
        }
      }
    ]
  }
}
```








### ui extras
inventory_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: inventory_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_crafting",

  // 다른 템플릿을 가져와서 확장(상속)
  "crafting_helper_container_item@rainbowpie_ui_common.cell_image": {
    // 가로/세로 크기
    "size": [ 18, 18 ],
    // 오버라이드 가능한 변수
    "$item_detail_control|default": "",
    // 오버라이드 가능한 변수
    "$item_count_control|default": "",
    // 오버라이드 가능한 변수
    "$item_count_result_name|default": "#result",
    // 오버라이드 가능한 변수
    "$is_craft_input|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "item_renderer@rainbowpie_ui_common.item_renderer": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "$item_detail_control",
              // 계산식/참조 값
              "source_property_name": "#item_id_aux",
              // 결과가 들어갈 속성
              "target_property_name": "#item_id_aux"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "$item_count_control",
              // 계산식/참조 값
              "source_property_name": "($item_count_result_name > 0)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $is_craft_input)"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "output_count_total@rainbowpie_ui_common.text_label": {
          // ?? ??
          "shadow": true,
          // 보여줄 글자
          "text": "#item_stack_count_text",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 1 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 12,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "$item_count_control",
              // 계산식/참조 값
              "source_property_name": "$item_count_result_name",
              // 결과가 들어갈 속성
              "target_property_name": "#item_stack_count"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "('\"' + #item_stack_count + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#item_stack_count_text"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#item_stack_count > 1)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "crafting_helper_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_background@rainbowpie_ui_common.text_background": {
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_home + '/r_white')",
          // 가로/세로 크기
          "size": [ "100%c + 6px", "100%c + 4px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ "100%x + 2px", 23 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 30,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_73085b33)",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "crafting_helper_output_slot",
              // 계산식/참조 값
              "source_property_name": "(not (#item_id_aux = -1))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "content_stack": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100%cm", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title@rainbowpie_ui_common.text_label": {
                      // 보여줄 글자
                      "text": "rainbowpie.ui.inventory.crafting_helper.title"
                    }
                  },
                  {
                    // ???/?? ??
                    "padding_0": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, 1 ]
                    }
                  },
                  {
                    // ???/?? ??
                    "crafting_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%c", "100%cm" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "crafting_3x3_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 54, 54 ],
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 보이기/숨기기(공간 유지)
                            "visible": "($top_half_variant = 'crafting.crafting_panel_top_half')",
                            // 오버라이드 가능한 변수
                            "$is_craft_input": true,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_0@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_0",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_0",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_1@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_1",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_1",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_middle"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_2@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_2",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_2",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_right",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_right"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_3@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_3",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_3",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "left_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "left_middle"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_4@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_4",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_4",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "center",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "center"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_5@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_5",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_5",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "right_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "right_middle"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_6@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_6",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_6",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_left"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_7@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_7",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_7",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_middle"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "3x3_craft_input_slot_8@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_8",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_8",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_right",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_right"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "crafting_2x2_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 36, 36 ],
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 보이기/숨기기(공간 유지)
                            "visible": "($top_half_variant = 'crafting.survival_panel_top_half')",
                            // 오버라이드 가능한 변수
                            "$is_craft_input": true,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "2x2_craft_input_slot_0@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_0",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_0",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_left"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "2x2_craft_input_slot_1@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_1",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_1",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_right",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_right"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "2x2_craft_input_slot_2@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_2",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_2",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_left",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_left"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "2x2_craft_input_slot_3@rainbowpieui_crafting.crafting_helper_container_item": {
                                  // 오버라이드 가능한 변수
                                  "$item_detail_control": "crafting_helper_crafting_slot_3",
                                  // 오버라이드 가능한 변수
                                  "$item_count_control": "crafting_helper_crafting_slot_3",
                                  // 오버라이드 가능한 변수
                                  "$item_count_result_name": "#item_stack_count_after_craft",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_right",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_right"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "crafting_arrow@crafting.crafting_arrow": {
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle",
                            // 기준점에서 이동하는 거리
                            "offset": [ -20, 0 ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "arrow_padding": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 4, 0 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_output@rainbowpieui_crafting.crafting_helper_container_item": {
                            // 오버라이드 가능한 변수
                            "$item_detail_control": "crafting_helper_output_slot",
                            // 오버라이드 가능한 변수
                            "$item_count_control": "crafting_helper_output_count_total",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "padding_bottom": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, 1 ]
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
  "crafting_helper_slot_detail": {
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
      },
      {
        // 가져올 값 이름
        "binding_name": "#inventory_stack_count",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$item_collection_name"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((not (#item_id_aux = -1)) * (((#inventory_stack_count = 0) * 1) + (#inventory_stack_count * 1)))",
        // 결과가 들어갈 속성
        "target_property_name": "#item_stack_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_minimum_count",
        // 계산식/참조 값
        "source_property_name": "#result",
        // 결과가 들어갈 속성
        "target_property_name": "#minimum_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#item_stack_count - #minimum_count)",
        // 결과가 들어갈 속성
        "target_property_name": "#item_stack_count_after_craft"
      }
    ]
  },

  // ???/?? ??
  "crafting_helper_output_slot_detail": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "crafting_output_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "crafting_output_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_output_slot@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 0
        }
      }
    ]
  },

  // ???/?? ??
  "crafting_helper_crafting_slot_detail": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "crafting_input_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "crafting_input_items",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_0@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_1@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_2@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_3@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 3
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_4@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 4
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_5@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 5
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_6@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 6
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_7@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 7
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_8@rainbowpieui_crafting.crafting_helper_slot_detail": {
          // ?? ??
          "collection_index": 8
        }
      }
    ]
  },

  // 3x3 (9) 取值最小 (By DeepSeek AI)
  "crafting_helper_crafting_slot_minimum_count": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ???/??? ?
      "#a": 0,
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
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_0",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#a"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_1",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#b"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_2",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#c"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_3",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#d"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_4",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#e"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_5",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#f"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_6",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#g"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_7",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#h"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_8",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#i"
      },
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
      }
    ]
  },

  // ???/?? ??
  "crafting_helper_output_count_total": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_crafting_slot_minimum_count",
        // 계산식/참조 값
        "source_property_name": "#result",
        // 결과가 들어갈 속성
        "target_property_name": "#minimum_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_output_slot",
        // 계산식/참조 값
        "source_property_name": "#item_stack_count",
        // 결과가 들어갈 속성
        "target_property_name": "#item_stack_count"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#item_stack_count * #minimum_count)",
        // 결과가 들어갈 속성
        "target_property_name": "#result"
      }
    ]
  },

  // ???/?? ??
  "crafting_helper_controller": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_73085b33)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_output_slot_detail@rainbowpieui_crafting.crafting_helper_output_slot_detail": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_detail@rainbowpieui_crafting.crafting_helper_crafting_slot_detail": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_crafting_slot_minimum_count@rainbowpieui_crafting.crafting_helper_crafting_slot_minimum_count": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_output_count_total@rainbowpieui_crafting.crafting_helper_output_count_total": {}
      }
    ]
  },

  // ???/?? ??
  "recipe_cell_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "recipe_container_cell_images@crafting.recipe_container_cell_images": {}
      },
      {
        // ???/?? ??
        "fastplace_slot_panel": {
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // ?? ??
          "consume_hover_events": "$touch",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 22,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 완전히 제거(공간도 없음)
          "ignored": "((not $rainbowpie_ui_flag_29bdcf8a) or (not $rainbowpie_ui_flag_84df7492))",
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
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "inventoryui_fastplace",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#inventoryui_fastplace_enabled"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((not (#item_id_aux = -1)) and #inventoryui_fastplace_enabled)",
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
              "to_button_id": "button.container_auto_place",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_ok",
              // 어떤 동작을 실행할지
              "to_button_id": "button.container_auto_place",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "result_slot_border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/focus_border_white",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // ?? (R,G,B,A)
          "color": [ 0.0, 1.0, 0.0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 완전히 제거(공간도 없음)
          "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492))",
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
              "source_property_name": "('\"' + #hover_text - '\n' - '§0' - '§1' - '§2' - '§3' - '§4' - '§5' - '§6' - '§7' - '§8' - '§9' - '§a' - '§b' - '§c' - '§d' - '§e' - '§f' - '§g' - '§h' - '§i' - '§j' - '§k' - '§l' - '§m' - '§n' - '§o' - '§p' - '§q' - '§r' - '§s' - '§t' - '§u' - '§v' - '§w' - '§x' - '§y' - '§z' + '\"')",
              // 결과가 들어갈 속성
              "target_property_name": "#formatted_name"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "inventoryui_search_text_box_display_text",
              // 계산식/참조 값
              "source_property_name": "#item_name",
              // 결과가 들어갈 속성
              "target_property_name": "#query_text"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not ((#formatted_name - #query_text) = #formatted_name))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "action_cell_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cell_panel@rainbowpie_ui_inventory_and_container.cell_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_actions_cell_panel@rainbowpie_module_inventory_actions.inventory_actions_cell_panel": {}
      }
    ]
  },

  // ???/?? ??
  "vanilla_search_button_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "search_icon": {
          // 이미지 표시
          "type": "image",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 가로/세로 크기
          "size": [ 8, 8 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -0.5 ],
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/search')"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_text@rainbowpie_ui_common.text_label": {
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 가로/세로 크기
          "size": [ "100% - 10px", "default" ],
          // 기준점에서 이동하는 거리
          "offset": [ 10, 0 ],
          // 보여줄 글자
          "text": "rainbowpie.ui.inventory.search_button",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#text_box_item_name"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#text_box_item_name = '')",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_text_search@rainbowpie_ui_common.text_label": {
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 가로/세로 크기
          "size": [ "100% - 10px", "default" ],
          // 기준점에서 이동하는 거리
          "offset": [ 10, 0 ],
          // 보여줄 글자
          "text": "#text_box_item_name",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#text_box_item_name"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#text_box_item_name = ''))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "vanilla_search_button_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpieui_crafting.vanilla_search_button_content",

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
    "$toggle_name": "rainbowpie_inventoryui_vanilla_item_search",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1001,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "recipe_book_exit_animation_push": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 끝 값
    "to": [ "71px", "100%" ],
    // 시작 값
    "from": [ "150px", "100%" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "recipe_book_exit_animation_pop": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 끝 값
    "to": [ "71px", "100%" ],
    // 시작 값
    "from": [ "150px", "100%" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "recipe_book_entrance_animation_push": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 끝 값
    "to": [ "150px", "100%" ],
    // 시작 값
    "from": [ "71px", "100%" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "recipe_book_entrance_animation_pop": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 끝 값
    "to": [ "150px", "100%" ],
    // 시작 값
    "from": [ "71px", "100%" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "compass_panel_exit_animation_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 끝 값
    "to": "$compass_panel_exit_offset",
    // 시작 값
    "from": "$compass_panel_entrance_offset",
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "compass_panel_exit_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 끝 값
    "to": "$compass_panel_exit_offset",
    // 시작 값
    "from": "$compass_panel_entrance_offset",
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "compass_panel_entrance_animation_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 끝 값
    "to": "$compass_panel_entrance_offset",
    // 시작 값
    "from": "$compass_panel_exit_offset",
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "compass_panel_entrance_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 끝 값
    "to": "$compass_panel_entrance_offset",
    // 시작 값
    "from": "$compass_panel_exit_offset",
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "compass_panel": {
    // 이미지 표시
    "type": "image",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_9920f05c)",
    // 보이기/숨기기(공간 유지)
    "visible": true,
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // 가로/세로 크기
    "size": [ "100%c + 5px", "100%c + 5px" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점에서 이동하는 거리
    "offset": "$compass_panel_entrance_offset",
    // 오버라이드 가능한 변수
    "$compass_panel_entrance_offset": [ 0, "-45%" ],
    // 오버라이드 가능한 변수
    "$compass_panel_exit_offset": [ 0, "-55%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 8,
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_background_alpha",
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_crafting.compass_panel_exit_animation_push",
      "@rainbowpieui_crafting.compass_panel_exit_animation_pop",
      "@rainbowpieui_crafting.compass_panel_entrance_animation_push",
      "@rainbowpieui_crafting.compass_panel_entrance_animation_pop"
    ],
    // ????? ?? ?
    "animation_reset_name": "screen_animation_reset",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($rainbowpie_ui_flag_inventory_compass_postion = 1)",
        // 오버라이드 가능한 변수
        "$compass_panel_entrance_offset": [ 0, 90 ],
        // 오버라이드 가능한 변수
        "$compass_panel_exit_offset": [ 0, "55%" ]
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 게임이 주는 전역 값 연결
        "binding_type": "global",
        // 가져올 값 이름
        "binding_name": "(not #is_creative_layout)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 완전히 제거(공간도 없음)
        "ignored": "(not ($rainbowpie_ui_flag_inventory_compass_postion = 1))"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "compass_stack_panel@rainbowpieui_compatibility_config.compatibility_variables": {
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
                }
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
                }
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
                }
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "armor_durability_panel_exit_animation_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "30%x", 0 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "armor_durability_panel_exit_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "30%x", 0 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "armor_durability_panel_entrance_animation_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 시작 값
    "from": [ "30%x", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "armor_durability_panel_entrance_animation_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 시작 값
    "from": [ "30%x", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "inventory_icon@crafting.inventory_icon": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "recipe_book_icon@crafting.recipe_book_icon": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "creative_icon@crafting.creative_icon": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "player_inventory": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 172, 156 ], // 176 center
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "root_panel@rainbowpieui_crafting.player_inventory_root_panel": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "player_inventory_root_panel@common.root_panel": {
    // 가로/세로 크기
    "size": [ 168, 179 ],
    // 오버라이드 가능한 변수
    "$animation_ignored|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_inventoryheader_search_ignored|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "crafting_helper_panel@rainbowpieui_crafting.crafting_helper_panel": {
          // 오버라이드 가능한 변수
          "$anims": [
            "@rainbowpieui_crafting.armor_durability_panel_exit_animation_push",
            "@rainbowpieui_crafting.armor_durability_panel_exit_animation_pop",
            "@rainbowpieui_crafting.armor_durability_panel_entrance_animation_push",
            "@rainbowpieui_crafting.armor_durability_panel_entrance_animation_pop"
          ],
          // 애니메이션 목록
          "anims": "$anims",
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$animation_ignored",
              // 오버라이드 가능한 변수
              "$anims": []
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_durability_panel@rainbowpieui_crafting.armor_durability_panel_v2": {
          // 오버라이드 가능한 변수
          "$anims": [
            "@rainbowpieui_crafting.armor_durability_panel_exit_animation_push",
            "@rainbowpieui_crafting.armor_durability_panel_exit_animation_pop",
            "@rainbowpieui_crafting.armor_durability_panel_entrance_animation_push",
            "@rainbowpieui_crafting.armor_durability_panel_entrance_animation_pop"
          ],
          // 애니메이션 목록
          "anims": "$anims",
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$animation_ignored",
              // 오버라이드 가능한 변수
              "$anims": []
            }
          ]
        }
      },
      {
        // ???/?? ??
        "inventory_ui_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$anims": [
            "@rainbowpie_ui_animations.container_panel_exit_animation_push",
            "@rainbowpie_ui_animations.container_panel_exit_animation_pop",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_push",
            "@rainbowpie_ui_animations.container_panel_entrance_animation_pop"
          ],
          // 애니메이션 목록
          "anims": "$anims",
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$animation_ignored",
              // 오버라이드 가능한 변수
              "$anims": []
            }
          ],
          // 오버라이드 가능한 변수
          "$background_images": "rainbowpieui_crafting.action_cell_panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "crafting_background_icon@rainbowpie_ui_inventory.background_icon": {
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
                "$size": "$rainbowpie_ui_theme_inventory_bgicon_crafting_size",
                // 오버라이드 가능한 변수
                "$offset": "$rainbowpie_ui_theme_inventory_bgicon_crafting_offset",
                // 오버라이드 가능한 변수
                "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_crafting_anchor",
                // 오버라이드 가능한 변수
                "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_crafting_anchor",
                // 오버라이드 가능한 변수
                "$texture": "$rainbowpie_ui_theme_inventory_bgicon_crafting_texture",
                // 오버라이드 가능한 변수
                "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_crafting_alpha",
                // 오버라이드 가능한 변수
                "$fill": "$rainbowpie_ui_theme_inventory_bgicon_crafting_fill",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($top_half_variant = 'crafting.crafting_panel_top_half')",
                    // 오버라이드 가능한 변수
                    "$size": "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_size",
                    // 오버라이드 가능한 변수
                    "$offset": "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_offset",
                    // 오버라이드 가능한 변수
                    "$anchor_to": "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_anchor",
                    // 오버라이드 가능한 변수
                    "$anchor_from": "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_anchor",
                    // 오버라이드 가능한 변수
                    "$texture": "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_texture",
                    // 오버라이드 가능한 변수
                    "$alpha": "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_alpha",
                    // 오버라이드 가능한 변수
                    "$fill": "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_fill"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background_icon@rainbowpie_ui_inventory.background_icon": {
                // 사용할 이미지 경로
                "texture": "$rainbowpie_ui_theme_inventory_bgicon_texture_inventory"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "inventory_actions_inventory@rainbowpie_module_inventory_actions.inventory_actions_inventory": {
                // 오버라이드 가능한 변수
                "$action_button_stack_panel_size": [ "13.0952380952381%", "100%c" ],
                // 오버라이드 가능한 변수
                "$action_button_stack_panel_max_size": [ "13.0952380952381%", "100%" ],
                // 오버라이드 가능한 변수
                "$padding_size": [ "100%", "9.090909090909091%x" ]
              }
            },
            {
              // ???/?? ??
              "toolbar_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 가로/세로 크기
                "size": [ "100%", "12.84916201117318%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "toolbar_stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",

                      // 가로/세로 크기
                      "size": [ "default", "100%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",

                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "inventory_mode_tabs_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 가로/세로 크기
                            "size": [ "default", "100%" ],
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
                                // ???/?? ??
                                "left_trigger_anchor": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ 0, "100%" ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#gamepad_helper_visible",
                                      // 가져온 값을 다른 속성으로 연결
                                      "binding_name_override": "#visible"
                                    }
                                  ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "gamepad_helper_left_trigger@common.gamepad_helper_left_trigger": {
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 3, -2 ],
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "left_middle",
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "right_middle"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "creative_layout_toggle_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%" ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 게임이 주는 전역 값 연결
                                      "binding_type": "global",
                                      // 가져올 값 이름
                                      "binding_name": "#creative_layout_button_visible",
                                      // 가져온 값을 다른 속성으로 연결
                                      "binding_name_override": "#visible"
                                    }
                                  ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "creative_layout_toggle@crafting.creative_layout_toggle": {
                                        // 가로/세로 크기
                                        "size": [ "108.695652173913%y", "100%" ], // 25x23
                                        // 오버라이드 가능한 변수
                                        "$icon_control": "rainbowpieui_crafting.creative_icon",

                                        // 오버라이드 가능한 변수
                                        "$focus_override_left": "search_tab",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_control": "rainbowpie_ui_toggle.toggle_tab_unchecked",
                                        // 오버라이드 가능한 변수
                                        "$checked_control": "rainbowpie_ui_toggle.toggle_tab_checked",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_hover_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_hover",
                                        // 오버라이드 가능한 변수
                                        "$checked_hover_control": "rainbowpie_ui_toggle.toggle_tab_checked_hover",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_locked_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_locked",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_locked_hover_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_locked_hover",
                                        // 오버라이드 가능한 변수
                                        "$checked_locked_control": "rainbowpie_ui_toggle.toggle_tab_checked_locked",
                                        // 오버라이드 가능한 변수
                                        "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_tab_checked_locked_hover",

                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_default_alpha": 0.3,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha": 0.4,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_default_alpha": 0.5,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha": 0.6
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "recipe_book_layout_toggle_panel_survival": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%" ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 게임이 주는 전역 값 연결
                                      "binding_type": "global",
                                      // 가져올 값 이름
                                      "binding_name": "(not #is_creative_mode)",
                                      // 가져온 값을 다른 속성으로 연결
                                      "binding_name_override": "#visible"
                                    }
                                  ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "recipe_book_layout_toggle@crafting.recipe_book_layout_toggle": {
                                        // 가로/세로 크기
                                        "size": [ "108.695652173913%y", "100%" ], // 25x23
                                        // 오버라이드 가능한 변수
                                        "$icon_control": "rainbowpieui_crafting.recipe_book_icon",

                                        // 오버라이드 가능한 변수
                                        "$focus_override_left": "search_tab",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_control": "rainbowpie_ui_toggle.toggle_tab_unchecked",
                                        // 오버라이드 가능한 변수
                                        "$checked_control": "rainbowpie_ui_toggle.toggle_tab_checked",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_hover_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_hover",
                                        // 오버라이드 가능한 변수
                                        "$checked_hover_control": "rainbowpie_ui_toggle.toggle_tab_checked_hover",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_locked_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_locked",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_locked_hover_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_locked_hover",
                                        // 오버라이드 가능한 변수
                                        "$checked_locked_control": "rainbowpie_ui_toggle.toggle_tab_checked_locked",
                                        // 오버라이드 가능한 변수
                                        "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_tab_checked_locked_hover",

                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_default_alpha": 0.3,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha": 0.4,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_default_alpha": 0.5,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha": 0.6
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "recipe_book_layout_toggle_panel_creative": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%" ],
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
                                  ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "recipe_book_layout_toggle@crafting.recipe_book_layout_toggle": {
                                        // 가로/세로 크기
                                        "size": [ "108.695652173913%y", "100%" ], // 25x23
                                        // 오버라이드 가능한 변수
                                        "$icon_control": "rainbowpieui_crafting.recipe_book_icon",

                                        // 오버라이드 가능한 변수
                                        "$unchecked_control": "rainbowpie_ui_toggle.toggle_tab_unchecked",
                                        // 오버라이드 가능한 변수
                                        "$checked_control": "rainbowpie_ui_toggle.toggle_tab_checked",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_hover_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_hover",
                                        // 오버라이드 가능한 변수
                                        "$checked_hover_control": "rainbowpie_ui_toggle.toggle_tab_checked_hover",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_locked_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_locked",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_locked_hover_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_locked_hover",
                                        // 오버라이드 가능한 변수
                                        "$checked_locked_control": "rainbowpie_ui_toggle.toggle_tab_checked_locked",
                                        // 오버라이드 가능한 변수
                                        "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_tab_checked_locked_hover",

                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_default_alpha": 0.3,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha": 0.4,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_default_alpha": 0.5,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha": 0.6
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "survival_layout_toggle_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%" ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "survival_layout_toggle@crafting.survival_layout_toggle": {
                                        // 가로/세로 크기
                                        "size": [ "108.695652173913%y", "100%" ], // 25x23
                                        // 오버라이드 가능한 변수
                                        "$icon_control": "rainbowpieui_crafting.inventory_icon",

                                        // 오버라이드 가능한 변수
                                        "$unchecked_control": "rainbowpie_ui_toggle.toggle_tab_unchecked",
                                        // 오버라이드 가능한 변수
                                        "$checked_control": "rainbowpie_ui_toggle.toggle_tab_checked",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_hover_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_hover",
                                        // 오버라이드 가능한 변수
                                        "$checked_hover_control": "rainbowpie_ui_toggle.toggle_tab_checked_hover",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_locked_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_locked",
                                        // 오버라이드 가능한 변수
                                        "$unchecked_locked_hover_control": "rainbowpie_ui_toggle.toggle_tab_unchecked_locked_hover",
                                        // 오버라이드 가능한 변수
                                        "$checked_locked_control": "rainbowpie_ui_toggle.toggle_tab_checked_locked",
                                        // 오버라이드 가능한 변수
                                        "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_tab_checked_locked_hover",

                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_default_alpha": 0.3,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha": 0.4,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_default_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_default_alpha": 0.5,
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_hover_color": "$rainbowpie_ui_theme_inventory_background_color",
                                        // 오버라이드 가능한 변수
                                        "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha": 0.6
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
                          "button_background@rainbowpie_ui_inventory.header_background": {
                            // 이미지 표시
                            "type": "image",
                            // 가로/세로 크기
                            "size": [ "100%c", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "extra_button_stack_panel": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "left_middle",
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "left_middle",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%" ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
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
                                        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                        "type": "stack_panel",
                                        // 쌓는 방향(가로/세로)
                                        "orientation": "horizontal",
                                        // 가로/세로 크기
                                        "size": [ "100%c", "100%" ],
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "((not $rainbowpie_ui_flag_d6bb54d8) or (not $rainbowpie_ui_flag_84df7492) or $rainbowpie_localui_inventoryheader_search_ignored)",
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // ???/?? ??
                                            "search_inputbox_padding_0": {
                                              // 패널: 다른 부품을 담는 바닥판
                                              "type": "panel",
                                              // 가로/세로 크기
                                              "size": [ "12%y", "100%" ],
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
                                              ]
                                            }
                                          },
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
                                            // ???/?? ??
                                            "search_inputbox_padding_1": {
                                              // 패널: 다른 부품을 담는 바닥판
                                              "type": "panel",
                                              // 가로/세로 크기
                                              "size": [ "12%y", "100%" ],
                                              // 게임 값과 연결하는 규칙 목록
                                              "bindings": [
                                                {
                                                  // 가져올 값 이름
                                                  "binding_name": "#close_button_visible"
                                                },
                                                {
                                                  // 계산/조건 결과를 연결
                                                  "binding_type": "view",
                                                  // ?? ??
                                                  "source_control_name": "show_search_box",
                                                  // 계산식/참조 값
                                                  "source_property_name": "#toggle_state",
                                                  // 결과가 들어갈 속성
                                                  "target_property_name": "#is_search_box_showing"
                                                },
                                                {
                                                  // 계산/조건 결과를 연결
                                                  "binding_type": "view",
                                                  // 계산식/참조 값
                                                  "source_property_name": "(#is_search_box_showing and (not #close_button_visible))",
                                                  // 결과가 들어갈 속성
                                                  "target_property_name": "#visible"
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
                                }
                              },
                              {
                                // ???/?? ??
                                "button_stack_panel": {
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
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "close_button_panel": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // 게임 값과 연결하는 규칙 목록
                                        "bindings": [
                                          {
                                            // 가져올 값 이름
                                            "binding_name": "#close_button_visible",
                                            // 가져온 값을 다른 속성으로 연결
                                            "binding_name_override": "#visible"
                                          }
                                        ],
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
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "common_panel@common.common_panel": {
                // 오버라이드 가능한 변수
                "$dialog_background": "rainbowpie_ui_common.inventory_background",
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 가로/세로 크기
                "size": [ "100%", "100% - 12.84916201117318%" ],
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle"
              }
            },
            {
              // ???/?? ??
              "crafting_top_half": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "70.23809523809524%", "40.22346368715084%" ], // 118x72
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-45.25139664804469%"],
                // 보이기/숨기기(공간 유지)
                "visible": "($top_half_variant = 'crafting.crafting_panel_top_half')",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "crafting_label@crafting.crafting_label": {
                      // 가로/세로 크기
                      "size": [ "91.66666666666667%", "13.88888888888889%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, "2.777777777777778%" ],
                      // ?? ??
                      "text_alignment": "left"
                    }
                  },
                  {
                    // ???/?? ??
                    "crafting_grid_3x3": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 가로/세로 크기
                      "size": [ "54%", "75%" ], // 54x54
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 3 ],
                      // 오버라이드 가능한 변수
                      "$cell_image_size": [ "100%y", "100%" ],
                      // 오버라이드 가능한 변수
                      "$item_renderer_panel_size": [ "100%y", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "crafting_grid_3x3_1": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 목록 이름
                            "collection_name": "crafting_input_items",
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "crafting_input_items",
                            // 가로/세로 크기
                            "size": [ "100%", "33.33333333333333%" ],

                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 0
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 1
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 2
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "crafting_grid_3x3_2": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 목록 이름
                            "collection_name": "crafting_input_items",
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "crafting_input_items",
                            // 가로/세로 크기
                            "size": [ "100%", "33.33333333333333%" ],

                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_3@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 3
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_4@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 4
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_5@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 5
                                }
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "crafting_grid_3x3_3": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 목록 이름
                            "collection_name": "crafting_input_items",
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "crafting_input_items",
                            // 가로/세로 크기
                            "size": [ "100%", "33.33333333333333%" ],

                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_6@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 6
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_7@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 7
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_8@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
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
                    // ???/?? ??
                    "output_grid_3x3": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 목록 이름
                      "collection_name": "crafting_output_items",
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "crafting_output_items",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 가로/세로 크기
                      "size": [ "100%y", "36.11111111111111%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, "4.166666666666667%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // 가로/세로 크기
                            "size": [ "100%y", "100%" ],
                            // ?? ??
                            "collection_index": 0,
                            // 오버라이드 가능한 변수
                            "$item_renderer_panel_size": [ "100%y", "69.23076923076923%" ],
                            // 오버라이드 가능한 변수
                            "$button_ref": "crafting.output_no_coalesce_container_slot_button",
                            // 오버라이드 가능한 변수
                            "$stack_count_binding_condition": "always",
                            // 오버라이드 가능한 변수
                            "$item_renderer_binding_condition": "always",
                            // 오버라이드 가능한 변수
                            "$background_images": "crafting.crafting_container_cell_images",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "crafting_output_item",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "FOCUS_OVERRIDE_STOP"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "crafting_arrow_large@crafting.crafting_arrow_large": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 가로/세로 크기
                      "size": [ "18.64406779661017%", "20.83333333333333%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "53.38983050847458%", "4.166666666666667%" ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "inventory_top_half": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "96.42857142857143%", "40.22346368715084%" ], // 162x72
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-45.25139664804469%"],
                // 보이기/숨기기(공간 유지)
                "visible": "($top_half_variant = 'crafting.survival_panel_top_half')",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "crafting_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 가로/세로 크기
                      "size": [ "44.44444444444444%", "100%" ], // 72x72
                      // 기준점에서 이동하는 거리
                      "offset": [ "55.55555555555556%", 0 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "crafting_label@crafting.crafting_label": {
                            // 가로/세로 크기
                            "size": [ "91.66666666666667%", "13.88888888888889%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, "2.777777777777778%" ],
                            // ?? ??
                            "text_alignment": "left"
                          }
                        },
                        {
                          // ???/?? ??
                          "crafting_grid_2x2": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "50%", "50%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, "-5.555555555555556%" ],
                            // 오버라이드 가능한 변수
                            "$cell_image_size": [ "100%y", "100%" ],
                            // 오버라이드 가능한 변수
                            "$item_renderer_panel_size": [ "100%y", "100%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "crafting_grid_2x2_1": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 목록 이름
                                  "collection_name": "crafting_input_items",
                                  // 오버라이드 가능한 변수
                                  "$item_collection_name": "crafting_input_items",
                                  // 가로/세로 크기
                                  "size": [ "100%", "50%" ],

                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                                        // 오버라이드 가능한 변수
                                        "$background_images": "crafting.crafting_container_cell_images",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // ?? ??
                                        "collection_index": 0,
                                        // 오버라이드 가능한 변수
                                        "$focus_id_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_id": "crafting_input_top_left",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left": "armor_item_head"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                                        // 오버라이드 가능한 변수
                                        "$background_images": "crafting.crafting_container_cell_images",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // ?? ??
                                        "collection_index": 1,
                                        // 오버라이드 가능한 변수
                                        "$focus_id_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_id": "crafting_input_top_right",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_right_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_right": "crafting_output_item"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "crafting_grid_2x2_2": {
                                  // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                  "type": "stack_panel",
                                  // 쌓는 방향(가로/세로)
                                  "orientation": "horizontal",
                                  // 목록 이름
                                  "collection_name": "crafting_input_items",
                                  // 오버라이드 가능한 변수
                                  "$item_collection_name": "crafting_input_items",
                                  // 가로/세로 크기
                                  "size": [ "100%", "50%" ],

                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                                        // 오버라이드 가능한 변수
                                        "$background_images": "crafting.crafting_container_cell_images",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // ?? ??
                                        "collection_index": 2,
                                        // 오버라이드 가능한 변수
                                        "$focus_id_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_id": "crafting_input_mid_left",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_left": "armor_item_legs"
                                      }
                                    },
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "container_item_3@rainbowpie_ui_inventory_and_container.container_item": {
                                        // 오버라이드 가능한 변수
                                        "$background_images": "crafting.crafting_container_cell_images",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // ?? ??
                                        "collection_index": 3,
                                        // 오버라이드 가능한 변수
                                        "$focus_override_right_binding_type": "none",
                                        // 오버라이드 가능한 변수
                                        "$focus_override_right": "crafting_output_item"
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
                          "output_grid_2x2": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 목록 이름
                            "collection_name": "crafting_output_items",
                            // 오버라이드 가능한 변수
                            "$item_collection_name": "crafting_output_items",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "25%", "25%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ "75%", "-5.555555555555556%" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                                  // 가로/세로 크기
                                  "size": [ "100%y", "100%" ],
                                  // ?? ??
                                  "collection_index": 0,
                                  // 오버라이드 가능한 변수
                                  "$button_ref": "crafting.output_no_coalesce_container_slot_button",
                                  // 오버라이드 가능한 변수
                                  "$background_images": "crafting.crafting_container_cell_images",
                                  // 오버라이드 가능한 변수
                                  "$item_renderer_binding_condition": "always",
                                  // 오버라이드 가능한 변수
                                  "$stack_count_binding_condition": "always",

                                  // 오버라이드 가능한 변수
                                  "$focus_id_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_id": "crafting_output_item",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_left_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_left": "crafting_input_top_right",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_up_binding_type": "none",
                                  // 오버라이드 가능한 변수
                                  "$focus_override_up": "help_button"
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "crafting_arrow@crafting.crafting_arrow": {
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 가로/세로 크기
                            "size": [ "22.22222222222222%", "18.05555555555556%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ "51.38888888888889%", "-5.555555555555556%" ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "crafting_panel",
                                // ?? ??
                                "resolve_sibling_scope": true,
                                // 계산식/참조 값
                                "source_property_name": "(not #needs_crafting_table)",
                                // 결과가 들어갈 속성
                                "target_property_name": "#visible"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "crafting_table@crafting.item_renderer": {
                            // 기준점에서 이동하는 거리
                            "offset": [ 10, -5 ],
                            // 이 컨트롤 안에서 쓰는 임시 저장소
                            "property_bag": {
                              // ???/??? ?
                              "#item_id_aux": 3801088
                            },
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // ?? ??
                                "source_control_name": "crafting_panel",
                                // ?? ??
                                "resolve_sibling_scope": true,
                                // 계산식/참조 값
                                "source_property_name": "(#needs_crafting_table)",
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
                          "binding_name": "#needs_crafting_table",
                          // ?? ???
                          "binding_condition": "visible"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "player_background": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/Black",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 가로/세로 크기
                      "size": [ "33.33333333333333%", "100%" ], // 54x72
                      // 기준점에서 이동하는 거리
                      "offset": [ "11.11111111111111%", 0 ],
                      // ???
                      "alpha": 0.4,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "player_renderer_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ "55.55555555555556%", "41.66666666666667%" ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, "-19.44444444444444%" ],

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
                  },
                  {
                    // ???/?? ??
                    "armor_grid": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 목록 이름
                      "collection_name": "armor_items",
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "armor_items",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 가로/세로 크기
                      "size": [ "11.11111111111111%", "100%" ],
                      // 오버라이드 가능한 변수
                      "$cell_image_size": [ "100%", "100%x" ],
                      // 오버라이드 가능한 변수
                      "$item_renderer_panel_size": [ "100%", "100%x" ],
                      // 오버라이드 가능한 변수
                      "$armor_overlay_size": [ "88.88888888888889%", "88.88888888888889%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%x" ],

                            // ?? ??
                            "collection_index": 0,
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "crafting.armor_overlay_helmet",
                            // 오버라이드 가능한 변수
                            "$button_ref": "crafting.no_coalesce_container_slot_button",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "armor_item_head",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "crafting_input_top_left"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%x" ],

                            // ?? ??
                            "collection_index": 1,
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "crafting.armor_overlay_chest",
                            // 오버라이드 가능한 변수
                            "$button_ref": "crafting.no_coalesce_container_slot_button",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "armor_item_chest",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "crafting_input_top_left"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%x" ],

                            // ?? ??
                            "collection_index": 2,
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "crafting.armor_overlay_legs",
                            // 오버라이드 가능한 변수
                            "$button_ref": "crafting.no_coalesce_container_slot_button",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "armor_item_legs",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "crafting_input_mid_left"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_3@rainbowpie_ui_inventory_and_container.container_item": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%x" ],

                            // ?? ??
                            "collection_index": 3,
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "crafting.armor_image_feet",
                            // 오버라이드 가능한 변수
                            "$button_ref": "crafting.no_coalesce_container_slot_button",

                            // 오버라이드 가능한 변수
                            "$focus_id_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_id": "armor_item_feet",

                            // 오버라이드 가능한 변수
                            "$focus_override_right_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_right": "offhand_items0"
                          }
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "offhand_grid": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 목록 이름
                      "collection_name": "offhand_items",
                      // 오버라이드 가능한 변수
                      "$item_collection_name": "offhand_items",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 가로/세로 크기
                      "size": [ "11.11111111111111%", "25%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ "44.44444444444444%", 0 ],
                      // 오버라이드 가능한 변수
                      "$cell_image_size": [ "100%", "100%x" ],
                      // 오버라이드 가능한 변수
                      "$item_renderer_panel_size": [ "100%", "100%x" ],
                      // 오버라이드 가능한 변수
                      "$offhand_overlay_size": [ "88.88888888888889%", "88.88888888888889%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%x" ],

                            // ?? ??
                            "collection_index": 0,
                            // 오버라이드 가능한 변수
                            "$cell_overlay_ref": "crafting.armor_overlay_shield",
                            // 오버라이드 가능한 변수
                            "$button_ref": "crafting.no_coalesce_container_slot_button",

                            // 오버라이드 가능한 변수
                            "$focus_override_left_binding_type": "none",
                            // 오버라이드 가능한 변수
                            "$focus_override_left": "armor_item_feet"
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
                "size": [ "96.42857142857143%", "30.16759776536313%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-13.40782122905028%" ]
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
                "size": [ "96.42857142857143%", "10.05586592178771%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, "-1.675977653631285%" ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "items_durability_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%c" ],
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
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "item_renderer@rainbowpie_ui_common.item_renderer": {
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
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
              "selected_durability_text_panel": {
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
                      "size": [ "100%c", "100%cm" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "durability_title@rainbowpie_ui_common.text_label": {
                            // 보여줄 글자
                            "text": "rainbowpie.ui.inventory.durability",
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_durabilityview_title)"
                          }
                        },
                        {
                          // ???/?? ??
                          "padding": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 1, 0 ],
                            // 완전히 제거(공간도 없음)
                            "ignored": "(not $rainbowpie_ui_flag_durabilityview_title)"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "durability_text@rainbowpie_ui_common.text_label": {
                            // 보여줄 글자
                            "text": "#text",
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
                                "source_property_name": "(((#amount_current>#item_durability_current_amount)*-1+1)*((#amount_current<#item_durability_current_amount)*1+#amount_current))",
                                // 결과가 들어갈 속성
                                "target_property_name": "#amount_current",
                                // ?? ???
                                "binding_condition": "always_when_visible"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(((#amount_total>#item_durability_total_amount)*-1+1)*((#amount_total<#item_durability_total_amount)*1+#amount_total))",
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
              "binding_name": "#item_durability_total_amount",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$item_collection_name"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#item_durability_total_amount = 0)",
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
        "binding_name": "#item_durability_total_amount",
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
      }
    ]
  },

  // ???/?? ??
  "armor_items_durability": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "armor_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "armor_items",
    // 가로/세로 크기
    "size": [ "100%cm", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_items_durability_slot_0@rainbowpieui_crafting.items_durability_item": {
          // ?? ??
          "collection_index": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_items_durability_slot_1@rainbowpieui_crafting.items_durability_item": {
          // ?? ??
          "collection_index": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_items_durability_slot_2@rainbowpieui_crafting.items_durability_item": {
          // ?? ??
          "collection_index": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_items_durability_slot_3@rainbowpieui_crafting.items_durability_item": {
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
        "source_control_name": "armor_items_durability_slot_0",
        // 계산식/참조 값
        "source_property_name": "#item_durability_total_amount",
        // 결과가 들어갈 속성
        "target_property_name": "#armor_lot_0_item_durability_total_amount"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "armor_items_durability_slot_1",
        // 계산식/참조 값
        "source_property_name": "#item_durability_total_amount",
        // 결과가 들어갈 속성
        "target_property_name": "#armor_lot_1_item_durability_total_amount"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "armor_items_durability_slot_2",
        // 계산식/참조 값
        "source_property_name": "#item_durability_total_amount",
        // 결과가 들어갈 속성
        "target_property_name": "#armor_lot_2_item_durability_total_amount"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "armor_items_durability_slot_3",
        // 계산식/참조 값
        "source_property_name": "#item_durability_total_amount",
        // 결과가 들어갈 속성
        "target_property_name": "#armor_lot_3_item_durability_total_amount"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#armor_lot_0_item_durability_total_amount + #armor_lot_1_item_durability_total_amount + #armor_lot_2_item_durability_total_amount + #armor_lot_3_item_durability_total_amount)",
        // 결과가 들어갈 속성
        "target_property_name": "#armor_item_durability_total_amount"
      }
    ]
  },

  // ???/?? ??
  "offhand_items_durability": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 목록 이름
    "collection_name": "offhand_items",
    // 오버라이드 가능한 변수
    "$item_collection_name": "offhand_items",
    // 가로/세로 크기
    "size": [ "100%cm", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "offhand_items_durability_slot_0@rainbowpieui_crafting.items_durability_item": {
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
        "source_control_name": "offhand_items_durability_slot_0",
        // 계산식/참조 값
        "source_property_name": "#item_durability_total_amount",
        // 결과가 들어갈 속성
        "target_property_name": "#offhand_lot_0_item_durability_total_amount"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#offhand_lot_0_item_durability_total_amount)",
        // 결과가 들어갈 속성
        "target_property_name": "#offhand_item_durability_total_amount"
      }
    ]
  },

  // ???/?? ??
  "armor_and_offhand_durability": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%c + 8px", "100%c + 4px" ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 30,
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "armor_and_offhand_durability_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점에서 이동하는 거리
          "offset": [ -1, 0 ],
          // 가로/세로 크기
          "size": [ "100%cm", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "armor_items_durability@rainbowpieui_crafting.armor_items_durability": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "offhand_items_durability@rainbowpieui_crafting.offhand_items_durability": {}
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
        "source_control_name": "armor_items_durability",
        // 계산식/참조 값
        "source_property_name": "#armor_item_durability_total_amount",
        // 결과가 들어갈 속성
        "target_property_name": "#armor_item_durability_total_amount"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "offhand_items_durability",
        // 계산식/참조 값
        "source_property_name": "#offhand_item_durability_total_amount",
        // 결과가 들어갈 속성
        "target_property_name": "#offhand_item_durability_total_amount"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#armor_item_durability_total_amount + #offhand_item_durability_total_amount)",
        // 결과가 들어갈 속성
        "target_property_name": "#slots_item_durability_total_amount"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (#slots_item_durability_total_amount = 0)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "armor_durability_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_9ce040c1)",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_and_offhand_durability@rainbowpieui_crafting.armor_and_offhand_durability": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ "100%x + 2px", 4 ]
        }
      }
    ]
  },

  // ???/?? ??
  "armor_durability_panel_v2": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_9ce040c1)",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "crafting_helper_output_slot",
        // 계산식/참조 값
        "source_property_name": "(#item_id_aux = -1)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_ui_flag_73085b33)"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_and_offhand_durability@rainbowpieui_crafting.armor_and_offhand_durability": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ "100%x + 2px", 23 ]
        }
      }
    ]
  }
}
```








### ui extras
invite_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: invite_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_invite",

  // 다른 템플릿을 가져와서 확장(상속)
  "horizontal_invite_panel@rainbowpie_ui_dialog.dialog_panel": {
    // 가로/세로 크기
    "size": "$large_screen_size",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content": "rainbowpieui_invite.horizontal_invite_dialog_content",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_show_background": false,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$is_inviting_to_realm",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dialogheader_title": "invite.titleRealms"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $is_inviting_to_realm)",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dialogheader_title": "invite.title"
      }
    ]
  },

  // ???/?? ??
  "horizontal_invite_dialog_content": {
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
                    "stack_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "scrolling_area@invite.scrolling_area": {
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_scrollbar_enabled": true
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
                            // 오버라이드 가능한 변수
                            "$add_button_mappings": [
                              {
                                // 어떤 입력을 받을지
                                "from_button_id": "button.controller_secondary_select",
                                // 어떤 동작을 실행할지
                                "to_button_id": "$pressed_button_name",
                                // 입력 시점(pressed 등)
                                "mapping_type": "global"
                              },
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
                                "mapping_type": "focused"
                              }
                            ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "add_friend_button@invite.add_friend_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$focus_override_down": "FOCUS_OVERRIDE_STOP"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "add_member_button@invite.add_member_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$focus_override_down": "FOCUS_OVERRIDE_STOP"
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "send_button@invite.send_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                                  // 가로/세로 크기
                                  "size": [ "fill", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$focus_override_down": "FOCUS_OVERRIDE_STOP"
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
  "invite_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$invite_panel|default": "rainbowpieui_invite.horizontal_invite_panel",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($use_vertical_button_stack_panel and (not $is_inviting_to_realm or $is_realm_owner))",
        // 오버라이드 가능한 변수
        "$invite_panel": "invite.vertical_invite_panel"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "screen_content@rainbowpie_ui_common.screen_content": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_screen_content": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "invite_panel@rainbowpieui_invite.horizontal_invite_panel": {
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
manifest_validation_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: manifest_validation_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_manifest_validation",

  // ???/?? ??
  "verified_pack_description_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "verified_pack_description_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_packverifiy_packuuid|default": "",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_packverifiy_packdesc|default": "",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "pack_desc@rainbowpie_ui_common.editable_label": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // ??? ?? ?
          "text_box_name": "pack_desc_text",
          // ??? ?? ?
          "text_control": "pack_desc_display_text",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pack_desc_display_text@rainbowpie_ui_common.text_label": {
                // 가로/세로 크기
                "size": [ "100%", "default" ],
                // 보여줄 글자
                "text": "$rainbowpie_localui_packverifiy_packdesc"
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
        "binding_name": "#pack_id"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#pack_id = $rainbowpie_localui_packverifiy_packuuid)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "verify_detail_button_toggle_base@common_toggles.light_ui_toggle": {
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
    "$button_text": "rainbowpie.ui.manifest_validation.verifiedDetail",

    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_verified_pack_detail",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 1,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "verified_pack_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 25 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_packverifiy_packuuid|default": "",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_packverifiy_packname|default": "",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_packverifiy_packauther|default": "",
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_dialog.content_background": {
          // 가로/세로 크기
          "size": [ "100%", "100% - 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "title_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 가로/세로 크기
                "size": [ "100% - 84px", "100%cm" ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, 0 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_text@rainbowpie_ui_common.text_label": {
                      // 가로/세로 크기
                      "size": [ "default", "default" ],
                      // 보여줄 글자
                      "text": "rainbowpie.ui.manifest_validation.verifiedPack",
                      // ?? (R,G,B,A)
                      "color": [ 0.333, 1.0, 0.333 ]
                    }
                  },
                  {
                    // ???/?? ??
                    "space": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 2, 2 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "text@rainbowpie_ui_common.text_label": {
                      // 가로/세로 크기
                      "size": [ "fill", "default" ],
                      // 보여줄 글자
                      "text": "($rainbowpie_localui_packverifiy_packname + '  -  ' + $rainbowpie_localui_packverifiy_packauther)"
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
        "binding_name": "#pack_id"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#pack_id = $rainbowpie_localui_packverifiy_packuuid)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "verified_pack_list_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // ?? ????
    "clips_children": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_packverifiy_item|default": [],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "verified_pack_list_items": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "fill", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": "$rainbowpie_localui_packverifiy_item"
        }
      },
      {
        // ???/?? ??
        "detail_button_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background@rainbowpie_ui_dialog.content_background": {
                // 기준점에서 이동하는 거리
                "offset": [ 0, 1 ],
                // 가로/세로 크기
                "size": [ 80, 24 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "detail_button@rainbowpieui_manifest_validation.verify_detail_button_toggle_base": {
                      // 오버라이드 가능한 변수
                      "$button_image_size": [ "100% - 2px", "100% - 1px" ],
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 가로/세로 크기
                      "size": [ 80, 23 ],
                      // 오버라이드 가능한 변수
                      "$toggle_group_forced_index": 1000,
                      // 오버라이드 가능한 변수
                      "$toggle_view_binding_name": "open_detail_dialog"
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
  "title_label@rainbowpie_ui_common.text_label": {
    // ?? ?? ??
    "font_scale_factor": 1.5
  },

  // ??? ??
  "scrolling_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "pack_banner": {
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
          "size": [ "100%", "100%c" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 11,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#icon_path",
              // ?? ???
              "binding_condition": "visible"
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
              // 가져올 값 이름
              "binding_name": "#icon_zip",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#zip_folder",
              // ?? ???
              "binding_condition": "visible"
            },
            {
              // 가져올 값 이름
              "binding_name": "#icon_file_system",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture_file_system",
              // ?? ???
              "binding_condition": "visible"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "content_panel@rainbowpie_ui_dialog.content_background": {
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "pack_info_panel": {
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
                          "icon@manifest_validation.icon_image": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 가로/세로 크기
                            "size": [ "100%y", 50 ]
                          }
                        },
                        {
                          // ???/?? ??
                          "title_and_description": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 가로/세로 크기
                            "size": [ "fill", "100%c" ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // ???/?? ??
                                "title_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%", "100%c" ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "title_text_stack_panel": {
                                        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                        "type": "stack_panel",
                                        // 쌓는 방향(가로/세로)
                                        "orientation": "horizontal",
                                        // 가로/세로 크기
                                        "size": [ "100% - 4px", "100%c" ],
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "center",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "center",
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "title@rainbowpie_ui_common.editable_label": {
                                              // 가로/세로 크기
                                              "size": [ "100%", "100%c" ],
                                              // ??? ?? ?
                                              "text_box_name": "title_text",
                                              // ??? ?? ?
                                              "text_control": "title_display_text",
                                              // 이 안에 들어가는 부품 목록
                                              "controls": [
                                                {
                                                  // 다른 템플릿을 가져와서 확장(상속)
                                                  "title_display_text@rainbowpieui_manifest_validation.title_label": {
                                                    // 가로/세로 크기
                                                    "size": [ "100%", "default" ],
                                                    // 보여줄 글자
                                                    "text": "#pack_header_title",
                                                    // 게임 값과 연결하는 규칙 목록
                                                    "bindings": [
                                                      {
                                                        // 가져올 값 이름
                                                        "binding_name": "#pack_header_title",
                                                        // ?? ???
                                                        "binding_condition": "visible"
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
                                "description_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%", "100%c" ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "description@rainbowpie_ui_common.editable_label": {
                                        // 가로/세로 크기
                                        "size": [ "100% - 4px", "100%c" ],
                                        // 붙일 위치(어디에 놓을지)
                                        "anchor_to": "center",
                                        // 기준점(어디에서 시작할지)
                                        "anchor_from": "center",
                                        // ??? ?? ?
                                        "text_box_name": "description_text",
                                        // ??? ?? ?
                                        "text_control": "description_display_text",
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "description_display_text@rainbowpie_ui_common.text_label": {
                                              // 가로/세로 크기
                                              "size": [ "100%", "default" ],
                                              // 보여줄 글자
                                              "text": "#pack_header_description",
                                              // 게임 값과 연결하는 규칙 목록
                                              "bindings": [
                                                {
                                                  // 가져올 값 이름
                                                  "binding_name": "#pack_header_description",
                                                  // ?? ???
                                                  "binding_condition": "visible"
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
                          "button_panel": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 87, 50 ],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "refresh@manifest_validation.refresh_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 가로/세로 크기
                                  "size": [ "100% - 7px", 20 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 0, 3.5 ],
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "top_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "top_middle",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 1
                                }
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "delete@manifest_validation.delete_text_button": {
                                  // 오버라이드 가능한 변수
                                  "$button_image_size": [ "100%", "100%" ],
                                  // 오버라이드 가능한 변수
                                  "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                                  // 가로/세로 크기
                                  "size": [ "100% - 7px", 20 ],
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 0, -3.5 ],
                                  // 붙일 위치(어디에 놓을지)
                                  "anchor_to": "bottom_middle",
                                  // 기준점(어디에서 시작할지)
                                  "anchor_from": "bottom_middle",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 1
                                }
                              }
                            ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#pack_id",
                                // ?? ???
                                "binding_condition": "visible"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(not (#pack_id = $mintui_pack_uuid))",
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
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "secondary_panel@rainbowpie_ui_dialog.content_background": {
          // 가로/세로 크기
          "size": [ "100%", "100%c + 4px" ],
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
                "size": [ "100% - 6px", "100%cm" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "title_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "vertical",
                      // 가로/세로 크기
                      "size": [ "100%cm", "100%c" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_id@rainbowpie_ui_common.text_label": {
                            // 가로/세로 크기
                            "size": [ "default", "default" ],
                            // 보여줄 글자
                            "text": "manifestvalidation.packid"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_version@rainbowpie_ui_common.text_label": {
                            // 가로/세로 크기
                            "size": [ "default", "default" ],
                            // 보여줄 글자
                            "text": "manifestvalidation.packversion"
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_path@rainbowpie_ui_common.text_label": {
                            // 가로/세로 크기
                            "size": [ "default", "default" ],
                            // 보여줄 글자
                            "text": "manifestvalidation.filelocation"
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
                      "size": [ 2, 0 ]
                    }
                  },
                  {
                    // ???/?? ??
                    "value_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "vertical",
                      // 가로/세로 크기
                      "size": [ "fill", "100%c" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_id@rainbowpie_ui_common.editable_label": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%c" ],
                            // ??? ?? ?
                            "text_box_name": "pack_id_text",
                            // ??? ?? ?
                            "text_control": "pack_id_display_text",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "pack_id_display_text@rainbowpie_ui_common.text_label": {
                                  // 가로/세로 크기
                                  "size": [ "100%", "default" ],
                                  // 보여줄 글자
                                  "text": "#pack_id",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#pack_id",
                                      // ?? ???
                                      "binding_condition": "visible"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_version@rainbowpie_ui_common.editable_label": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%c" ],
                            // ??? ?? ?
                            "text_box_name": "pack_version_text",
                            // ??? ?? ?
                            "text_control": "pack_version_display_text",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "pack_version_display_text@rainbowpie_ui_common.text_label": {
                                  // 가로/세로 크기
                                  "size": [ "100%", "default" ],
                                  // 보여줄 글자
                                  "text": "#pack_version",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#pack_version",
                                      // ?? ???
                                      "binding_condition": "visible"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "pack_path@rainbowpie_ui_common.editable_label": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%c" ],
                            // ??? ?? ?
                            "text_box_name": "pack_path_text",
                            // ??? ?? ?
                            "text_control": "pack_path_display_text",
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "pack_path_display_text@rainbowpie_ui_common.text_label": {
                                  // 가로/세로 크기
                                  "size": [ "100%", "default" ],
                                  // 보여줄 글자
                                  "text": "#pack_path",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    {
                                      // 가져올 값 이름
                                      "binding_name": "#pack_path",
                                      // ?? ???
                                      "binding_condition": "visible"
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
        "verified_item@rainbowpieui_verified_pack.verified_pack_list": {}
      },
      {
        // ???/?? ??
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "error_list@rainbowpieui_manifest_validation.list_title": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_list_title_text": "manifestvalidation.errorlist"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "error@rainbowpieui_manifest_validation.error_content_grid": {}
      },
      {
        // ???/?? ??
        "end_background": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "secondary_panel@rainbowpie_ui_dialog.content_background": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 0, 1 ],
                // 가로/세로 크기
                "size": [ "100%", 5000 ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "error_content_grid": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "pack_error_factory",
      // ??? ???
      "control_name": "rainbowpieui_manifest_validation.error_pack_content_layout"
    },
    // 목록 이름
    "collection_name": "pack_errors",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#error_grid_dimensions",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
      }
    ]
  },

  // ???/?? ??
  "error_pack_content_layout": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 1px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_dialog.content_background": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "error_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "vertical",
                // 가로/세로 크기
                "size": [ "100% - 8px", "100%c + 8px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "error_header_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%cm + 2px" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "title_text@rainbowpie_ui_common.text_label": {
                            // 가로/세로 크기
                            "size": [ "default", "default" ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle",
                            // 보여줄 글자
                            "text": "#error_type_label",
                            // ?? ?? ??
                            "font_scale_factor": 1.2,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "pack_errors",
                                // 가져올 값 이름
                                "binding_name": "#error_type_label",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "button@manifest_validation.clipboard_button": {
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100%", "100%" ],
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#has_errors_or_warnings",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible"
                              },
                              {
                                // 목록 이름
                                "binding_collection_name": "pack_errors",
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
                    "error_text_panel": {
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
                          "error_text@rainbowpie_ui_common.text_label": {
                            // 가로/세로 크기
                            "size": [ 30, 10 ],
                            // 보여줄 글자
                            "text": "manifestvalidation.issue"
                          }
                        },
                        {
                          // ???/?? ??
                          "space": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size": [ 2, 2 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "error_text@rainbowpie_ui_common.text_label": {
                            // 가로/세로 크기
                            "size": [ "fill", "default" ],
                            // 보여줄 글자
                            "text": "#error_content_label",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 목록 이름
                                "binding_collection_name": "pack_errors",
                                // 가져올 값 이름
                                "binding_name": "#error_content_label",
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
                          // 가져올 값 이름
                          "binding_name": "#has_errors_or_warnings",
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

  // ???/?? ??
  "list_title": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 14 ],
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
          "anchor_to": "top_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
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

  // ???/?? ??
  "dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "scrolling_panel@common.scrolling_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_scrollbar_enabled": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 오버라이드 가능한 변수
          "$scrolling_pane_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$scrolling_content": "rainbowpieui_manifest_validation.scrolling_content",
          // 오버라이드 가능한 변수
          "$scroll_size": [ 4, "100%" ],
          // 오버라이드 가능한 변수
          "$scroll_bar_left_padding_size": [ 0.5, 0 ],
          // 오버라이드 가능한 변수
          "$scroll_bar_right_padding_size": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$show_background": false
        }
      }
    ]
  },

  // ???/?? ??
  "detail_scrolling_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100% - 6px", "100%c" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 2 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "label_0@rainbowpie_ui_common.text_label": {
                // 가로/세로 크기
                "size": [ "100%", "default" ],
                // 보여줄 글자
                "text": "rainbowpie.ui.manifest_validation.verifiedDetail.warn",
                // ?? (R,G,B,A)
                "color": [ 1.0, 1.0, 0.333 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "label_1@rainbowpie_ui_common.text_label": {
                // 가로/세로 크기
                "size": [ "100%", "default" ],
                // 보여줄 글자
                "text": "rainbowpie.ui.manifest_validation.verifiedDetail.description",
                // ?? (R,G,B,A)
                "color": [ 0.333, 0.333, 1.0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "verified_item@rainbowpieui_verified_pack.verified_pack_description": {}
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "detail_dialog_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "scrolling_panel@common.scrolling_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_scrollbar_enabled": true,
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 오버라이드 가능한 변수
          "$scrolling_pane_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$scrolling_content": "rainbowpieui_manifest_validation.detail_scrolling_content",
          // 오버라이드 가능한 변수
          "$scroll_size": [ 4, "100%" ],
          // 오버라이드 가능한 변수
          "$show_background": false
        }
      }
    ]
  },

  // ???/?? ??
  "detail_dialog_button": {
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
              "close_detail_button@rainbowpieui_manifest_validation.verify_detail_button_toggle_base": {
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
                "$rainbowpie_localui_button_border_enabled": false,
                // 오버라이드 가능한 변수
                "$button_image_size": [ "100%", "100%" ],
                // 오버라이드 가능한 변수
                "$button_content": "rainbowpieui_manifest_validation.close_button_icon",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": 10,
                // 오버라이드 가능한 변수
                "$toggle_view_binding_name": "close_detail_dialog",
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
  "manifest_validation_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
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
              // 다른 템플릿을 가져와서 확장(상속)
              "screen_content@rainbowpie_ui_common.screen_content": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_screen_content": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "dialog@rainbowpie_ui_dialog.dialog_panel": {
                      // 가로/세로 크기
                      "size": "$extra_large_screen_size",
                      // ?? ?? ?
                      "max_size": "$extra_large_max_screen_size",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialogheader_title": "manifestvalidation.title",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialog_content": "rainbowpieui_manifest_validation.dialog_content",
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_dialog_show_background": false
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
              "source_control_name": "open_detail_dialog",
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
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "dialog@rainbowpie_ui_dialog.dialog_panel": {
                // 가로/세로 크기
                "size": "$extra_large_screen_size",
                // ?? ?? ?
                "max_size": "$extra_large_max_screen_size",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "rainbowpie.ui.manifest_validation.verifiedDetail.title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_manifest_validation.detail_dialog_button",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_show_close": false,
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_manifest_validation.detail_dialog_content"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "open_detail_dialog",
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
```








### ui extras
mob_effect_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: mob_effect_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_mob_effect"
}
```








### ui extras
npc_interact_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: npc_interact_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_npc_interact",

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
    "$tab_content": "rainbowpieui_npc_interact.top_tab_content"
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
        "teacher_navigation_tab@rainbowpieui_npc_interact.top_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 오버라이드 가능한 변수
          "$tab_view_binding_name": "teacher_navigation_tab_toggle",
          // 오버라이드 가능한 변수
          "$tab_text": "gui.edit",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 11
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "student_navigation_tab@rainbowpieui_npc_interact.top_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 오버라이드 가능한 변수
          "$tab_view_binding_name": "student_navigation_tab_toggle",
          // 오버라이드 가능한 변수
          "$tab_text": "npcscreen.dialog",
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": 10
        }
      }
    ]
  },

  // ???/?? ??
  "dialog_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "button_panel": {
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
              "tab_panel_student_view_visible@rainbowpieui_npc_interact.tab_panel": {}
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "npc_screen_contents": {
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
              "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "#name_text",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_extra_controls": "rainbowpieui_npc_interact.dialog_button_panel",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title_bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#name_text",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_npc_interact.dialog_content",
                // 가로/세로 크기
                "size": [ 325, 200 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#teacher_view_visible",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#student_view_visible",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#advanced_visible",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#maximized_edit_visible"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(((not #advanced_visible) and (not #maximized_edit_visible)) and (#teacher_view_visible or #student_view_visible))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "dialog_panel_advanced@rainbowpie_ui_dialog.dialog_panel": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "#title_text",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title_bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#title_text",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "npc_interact.advanced_scrolling_panel",
                // 오버라이드 가능한 변수
                "$close_button_to_button_id": "button.exit_advanced",
                // 가로/세로 크기
                "size": [ 325, 200 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#advanced_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "dialog_panel_maximized@rainbowpie_ui_dialog.dialog_panel": {
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "#title_text",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title_bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#title_text",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "npc_interact.maximized_action_edit",
                // 오버라이드 가능한 변수
                "$close_button_to_button_id": "button.exit_maximized",
                // 가로/세로 크기
                "size": [ 325, 200 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#maximized_edit_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "exit_advanced@rainbowpieui_npc_interact.override_hotkey_input_panel": {
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.exit_advanced",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#advanced_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "exit_maximized@rainbowpieui_npc_interact.override_hotkey_input_panel": {
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.exit_maximized",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#maximized_edit_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
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

  // ???/?? ??
  "override_hotkey_input_panel": {
    // 마우스/커서 따라다니는 패널
    "type": "input_panel",
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 오버라이드 가능한 변수
    "$pressed_button_name": "rainbowpie.placeholder",
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_exit",
        // 어떤 동작을 실행할지
        "to_button_id": "$pressed_button_name",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "$pressed_button_name",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
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
        // ???/?? ??
        "teacher": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "basic@npc_interact.basic_stack_panel": {}
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "teacher_navigation_tab_toggle",
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
        "student": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "message@npc_interact.student_message_section": {
                // 가로/세로 크기
                "size": [ "100%", "100% - 46px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle"
              }
            },
            {
              // ???/?? ??
              "bottom_panel": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_dialog_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_dialog_background_alpha",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100%", 46 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 12,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "buttons@npc_interact.student_buttons": {
                      // 가로/세로 크기
                      "size": [ "100% - 8px", "100%c" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center"
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
              "source_control_name": "student_navigation_tab_toggle",
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
```








### ui extras
online_safety_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: online_safety_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_online_safety",

  // ???/?? ??
  "ip_safety_dialog_content": {
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
                      "text": "$description_text"
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
                      "size": [ "100% + 1px", 46 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "do_not_show_checkbox@online_safety.do_not_show_checkbox": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 3,
                            // 가로/세로 크기
                            "size": [ "100%", 23 ],
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, -0.5 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_state_text": "onlinePlay.doNotShowAgain",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_state_text_on": "onlinePlay.doNotShowAgain",
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_toggle_size": [ "100% - 1px", "100% - 1px" ],
                            // 오버라이드 가능한 변수
                            "$rainbowpie_localui_toggle_anchor": "center",
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
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "back_button@common_buttons.light_text_button": {
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.back",
                            // 오버라이드 가능한 변수
                            "$button_text": "onlinePlay.back",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_right",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_right",
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
                          "proceed_button@common_buttons.light_text_button": {
                            // 오버라이드 가능한 변수
                            "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                            // 오버라이드 가능한 변수
                            "$button_image_size": [ "100% - 1px", "100%" ],
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.proceed",
                            // 오버라이드 가능한 변수
                            "$button_text": "onlinePlay.proceed",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_left",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_left",
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
  "ip_safety_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
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
          "$rainbowpie_localui_dialogheader_title": "$text_name",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_online_safety.ip_safety_dialog_content",
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
    ]
  },

  // ???/?? ??
  "online_safety_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
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
        "online_safety_ui@rainbowpieui_online_safety.online_safety_ui": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "online_safety_ui_blur@rainbowpieui_online_safety.online_safety_ui_blur": {}
      }
    ]
  },

  // ???/?? ??
  "exit_animation_push": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": 1.0,
    // 끝 값
    "to": 0.0,
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "exit_animation_pop": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 0,
    // 시작 값
    "from": 1.0,
    // 끝 값
    "to": 0.0,
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "online_safety_ui_blur": {
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
  "online_safety_ui": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 220, 110 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 5 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 12,
    // 오버라이드 가능한 변수
    "$text_name|default": "onlinePlay.notRated",
    // 오버라이드 가능한 변수
    "$description_text|default": "onlinePlay.message",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$is_editor_mode_enabled",
        // 오버라이드 가능한 변수
        "$text_name": "onlinePlay.editor.notRated",
        // 오버라이드 가능한 변수
        "$description_text": "onlinePlay.editor.message"
      }
    ],
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
                "text": "$text_name"
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
                    "online_safety_proceed_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.proceed",
                      // 오버라이드 가능한 변수
                      "$button_text": "onlinePlay.proceed",
                      // 가로/세로 크기
                      "size": [ "50%", 22 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_right"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "close_button@common_buttons.light_text_button": {
                      // 오버라이드 가능한 변수
                      "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.back",
                      // 오버라이드 가능한 변수
                      "$button_text": "onlinePlay.back",
                      // 가로/세로 크기
                      "size": [ "50%", 22 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left"
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
pack_settings_screen_controls.json
RainbowPie UI · ui extras



필요한 부분만 참고해서 가져가세요.



```
// 예제: pack_settings_screen_controls.json
// 분류: RainbowPie UI / ui extras
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_pack_settings",

  // ??? ??
  "scrolling_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "content_tiering_panel@pack_settings.content_tiering_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "generated_form@rainbowpieui_server_form.generated_contents": {}
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
        // 다른 템플릿을 가져와서 확장(상속)
        "pack_scroll_panel@pack_settings.pack_scroll_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_scrollbar_enabled": true,
          // 오버라이드 가능한 변수
          "$scroll_size": [ 4, "100% - 4px" ],
          // 오버라이드 가능한 변수
          "$scrolling_pane_size": [ "100% - 4px", "100%" ],
          // 오버라이드 가능한 변수
          "$scrolling_pane_offset": [ 2, 0 ],
          // 오버라이드 가능한 변수
          "$scroll_bar_left_padding_size": [ 2, 0 ],
          // 오버라이드 가능한 변수
          "$scroll_bar_right_padding_size": [ 0, 0 ]
        }
      }
    ]
  },

  // ???/?? ??
  "main_screen_content": {
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
                "size": "$extra_large_screen_size",
                // ?? ?? ?
                "max_size": "$extra_large_max_screen_size",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title": "#pack_settings_title",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialogheader_title_bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#pack_settings_title",
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global"
                  }
                ],
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_dialog_content": "rainbowpieui_pack_settings.dialog_content"
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

