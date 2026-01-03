---
title: 예제 미리보기 (11/12)
outline: false
search: false
---

# 예제 미리보기 (11/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### 기본
magic_learning_station_screen.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: magic_learning_station_screen.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "magic_learning_station",

  // ???/?? ??
  "transparent": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/blank"
  },

  // ???/?? ??
  "background_scroll": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/learning_station/background_scroll"
  },

  // ???/?? ??
  "background_scroll_gap": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/learning_station/background_scroll_gap"
  },

  // ???/?? ??
  "black_border": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/background_with_border",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "black_button_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/button_borderless_dark",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "locked_spell_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/coin_button_borderless",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "black_button_hover_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/button_border_dark",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "button_border_dark": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/black_border",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "button_border_light": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/focus_border_white",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "scroll_frame": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/scroll_frame",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "purple_border": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/purpleBorder",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "magic_learning_station_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 390, 208],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "book_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/learning_station/book_background_small"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "scroll_craft_content@magic_learning_station.scroll_craft_content": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not((#form_text - 'scroll_craft') = #form_text))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      { "gamepad_cursor@common.gamepad_cursor_button": {} }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#title_text = 'magic_learning_station.menu')",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "magic_scroll_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 120, 145 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_scroll@magic_learning_station.background_scroll": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_scroll_gap@magic_learning_station.background_scroll_gap": {
          // 가로/세로 크기
          "size": [ 98, 2 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -30 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_scroll_gap@magic_learning_station.background_scroll_gap": {
          // 가로/세로 크기
          "size": [ 98, 2 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -80 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "desc_toggle_data",
              // 계산식/참조 값
              "source_property_name": "(not (#toggle_state))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "magic_scroll_list_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 210, 145 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "black_border@magic_learning_station.black_border": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "scrolling_panel@common.scrolling_panel": {
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 오버라이드 가능한 변수
          "$show_background": false,
          // 가로/세로 크기
          "size": ["100% - 2px", "100% - 3px"],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 2 ],
          // 오버라이드 가능한 변수
          "$scrolling_content": "magic_learning_station.scroll_content",
          // 오버라이드 가능한 변수
          "$scroll_size": [ 1, "100% - 4px" ],
          // 오버라이드 가능한 변수
          "$scroll_bar_right_padding_size": [ 1, 0 ],
          // 오버라이드 가능한 변수
          "$scroll_bar_right_padding_size_touch": [ 2, 0 ]
        }
      }
    ]
  },

  // ???/?? ??
  "scroll_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": ["100% - 4px", "100%c + 1px"],
    // 기준점에서 이동하는 거리
    "offset": [2,0],
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
      "control_name": "magic_learning_station.scroll_list_button"
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
  "scroll_list_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", 32],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button@common.button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 가로/세로 크기
          "size": ["100%", 32],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "default@magic_learning_station.button_border_dark": {
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "default@magic_learning_station.black_button_image": {
                      // 가로/세로 크기
                      "size": ["100%-2px", "100%-2px"]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "spell_frame@magic_learning_station.scroll_frame": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 3,
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ -4, 0 ],
                      // 가로/세로 크기
                      "size": [ 24, 24 ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover@magic_learning_station.button_border_light": {
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "default@magic_learning_station.black_button_hover_image": {
                      // 가로/세로 크기
                      "size": ["100%-2px", "100%-2px"]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "spell_frame@magic_learning_station.scroll_frame": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 3,
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ -4, 0 ],
                      // 가로/세로 크기
                      "size": [ 24, 24 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "hover@magic_learning_station.button_border_light": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2,
                            // 가로/세로 크기
                            "size": [ 24, 24 ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "hover@magic_learning_station.button_border_light": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 3,
                            // 가로/세로 크기
                            "size": [ 16, 16 ]
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
              "spell_name": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "#text",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 5, 0 ],
                // ?? ??
                "text_alignment": "left_middle",
                // 게임 값과 연결하는 규칙 목록
                "bindings":[
                  {
                    // 가져올 값 이름
                    "binding_name": "#form_button_texture",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#content_label",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "form_buttons"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#content_label - 'amw:spell')",
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
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 가져올 값 이름
              "binding_name": "#form_button_texture",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#content_label - 'amw:spell_locked') = #content_label)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "locked_spell@magic_learning_station.button_border_dark": {
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "default@magic_learning_station.locked_spell_image": {
                // 가로/세로 크기
                "size": ["100%-2px", "100%-2px"]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "spell_frame@magic_learning_station.button_border_dark": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // 기준점에서 이동하는 거리
                "offset": [ -4, 0 ],
                // 가로/세로 크기
                "size": [ 24, 24 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "spell_frame@magic_learning_station.locked_spell_image": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // 기준점에서 이동하는 거리
                "offset": [ -5, 0 ],
                // 가로/세로 크기
                "size": [ 22, 22 ]
              }
            },
            {
              // ???/?? ??
              "spell_name": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "#text",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 기준점에서 이동하는 거리
                "offset": [ 5, 0 ],
                // ?? ??
                "text_alignment": "left_middle",
                // 게임 값과 연결하는 규칙 목록
                "bindings":[
                  {
                    // 가져올 값 이름
                    "binding_name": "#form_button_texture",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#content_label",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "form_buttons"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#content_label - 'amw:spell_locked')",
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
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 가져올 값 이름
              "binding_name": "#form_button_texture",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not((#content_label - 'amw:spell_locked') = #content_label))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "spell_image": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "#texture",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 6,
          // 가로/세로 크기
          "size": [ 16, 16 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 기준점에서 이동하는 거리
          "offset": [ -8, 0 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings":[
            {
              // 가져올 값 이름
              "binding_name": "#form_button_text",
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
            }
          ]
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#form_button_texture",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#content_label",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not((#content_label - 'amw:spell') = #content_label))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "magic_type_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size":  [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_image|default": "textures/ui/learning_station/fire_type_button",
    // 오버라이드 가능한 변수
    "$button_param|default": "fire_type",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button@common.button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 가로/세로 크기
          "size": [ 64, 20 ],
          // ?? ??
          "default_control": "default",
          // ?? ??
          "hover_control": "hover",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "default_image": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "$button_image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // ??? ??
                "clip_direction": "left",
                // 진행 비율(잘라내기)
                "clip_ratio": 0.35,
                // ?? ??
                "clip_pixelperfect": true,
                // 기준점에서 이동하는 거리
                "offset": [ 34, 0 ]
              }
            },
            {
              // ???/?? ??
              "hover": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "$button_image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5,
                // ??? ??
                "clip_direction": "left",
                // 진행 비율(잘라내기)
                "clip_ratio": 0.15,
                // ?? ??
                "clip_pixelperfect": true,
                // 기준점에서 이동하는 거리
                "offset": [ 21, 0 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 보여줄 글자
                    "text": {
                      // 이미지 표시
                      "type": "image",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ -11, 2 ],
                      // 가로/세로 크기
                      "size": [ "100%c + 12px", "100%c + 5px" ],
                      // ???
                      "alpha": 0.7,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 8,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/hud_tip_text_background",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "actionbar_message": {
                            // 글자 표시
                            "type": "label",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 31,
                            // 보여줄 글자
                            "text": "#text",
                            // ?? ??
                            "localize": false,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings":[
                              {
                                // 가져올 값 이름
                                "binding_name": "#form_button_text",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#text",
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
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 가져올 값 이름
              "binding_name": "#form_button_texture",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#content_label - 'locked') = #content_label)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "picked": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 64, 20 ],
          // 기준점에서 이동하는 거리
          "offset": [ 17, 0 ],
          // 사용할 이미지 경로
          "texture": "$button_image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 7,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#form_button_texture",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not((#content_label - 'locked') = #content_label))",
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
        "binding_name": "#form_button_texture",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#content_label",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#content_label - $button_param) = #content_label))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "desc_toggle": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size":  [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_image|default": "textures/ui/learning_station/description_toggle_button",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "desc_toggle_data@common.toggle": {
          // 가로/세로 크기
          "size": [ 64, 20 ],
          // 오버라이드 가능한 변수
          "$toggle_name": "desc_toggle",
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
              "mapping_type": "focused"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_alternate_tab_right",
              // 어떤 동작을 실행할지
              "to_button_id": "button.desc_toggle",
              // 입력 시점(pressed 등)
              "mapping_type": "global"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "unchecked": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "$button_image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // ??? ??
                "clip_direction": "right",
                // 진행 비율(잘라내기)
                "clip_ratio": 0.35,
                // ?? ??
                "clip_pixelperfect": true,
                // 기준점에서 이동하는 거리
                "offset": [ -34, 0 ]
              }
            },
            {
              // ???/?? ??
              "unchecked_hover": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "$button_image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5,
                // ??? ??
                "clip_direction": "right",
                // 진행 비율(잘라내기)
                "clip_ratio": 0.15,
                // ?? ??
                "clip_pixelperfect": true,
                // 기준점에서 이동하는 거리
                "offset": [ -21, 0 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 보여줄 글자
                    "text": {
                      // 이미지 표시
                      "type": "image",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 11, 2 ],
                      // 가로/세로 크기
                      "size": [ "100%c + 12px", "100%c + 5px" ],
                      // ???
                      "alpha": 0.7,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 8,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/hud_tip_text_background",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "actionbar_message": {
                            // 글자 표시
                            "type": "label",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 31,
                            // 보여줄 글자
                            "text": "설명 확장",
                            // ?? ??
                            "localize": false
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
              "checked": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 64, 20 ],
                // 기준점에서 이동하는 거리
                "offset": [ -17, 0 ],
                // 사용할 이미지 경로
                "texture": "$button_image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 7
              }
            },
            {
              // ???/?? ??
              "checked_hover": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 64, 20 ],
                // 기준점에서 이동하는 거리
                "offset": [ -15, 0 ],
                // 사용할 이미지 경로
                "texture": "$button_image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 7,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 보여줄 글자
                    "text": {
                      // 이미지 표시
                      "type": "image",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 11, 2 ],
                      // 가로/세로 크기
                      "size": [ "100%c + 12px", "100%c + 5px" ],
                      // ???
                      "alpha": 0.7,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 8,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/hud_tip_text_background",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "actionbar_message": {
                            // 글자 표시
                            "type": "label",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 31,
                            // 보여줄 글자
                            "text": "설명 확장",
                            // ?? ??
                            "localize": false
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
  "close_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size":  [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_image|default": "textures/ui/learning_station/close_button",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button@common.button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.menu_exit",
          // 가로/세로 크기
          "size": [ 64, 20 ],
          // ?? ??
          "default_control": "default",
          // ?? ??
          "hover_control": "hover",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "default": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "$button_image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // ??? ??
                "clip_direction": "right",
                // 진행 비율(잘라내기)
                "clip_ratio": 0.35,
                // ?? ??
                "clip_pixelperfect": true,
                // 기준점에서 이동하는 거리
                "offset": [ -34, 0 ]
              }
            },
            {
              // ???/?? ??
              "hover": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "$button_image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5,
                // ??? ??
                "clip_direction": "right",
                // 진행 비율(잘라내기)
                "clip_ratio": 0.15,
                // ?? ??
                "clip_pixelperfect": true,
                // 기준점에서 이동하는 거리
                "offset": [ -21, 0 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 보여줄 글자
                    "text": {
                      // 이미지 표시
                      "type": "image",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 11, 2 ],
                      // 가로/세로 크기
                      "size": [ "100%c + 12px", "100%c + 5px" ],
                      // ???
                      "alpha": 0.7,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 8,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/hud_tip_text_background",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "actionbar_message": {
                            // 글자 표시
                            "type": "label",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 31,
                            // 보여줄 글자
                            "text": "닫기",
                            // ?? ??
                            "localize": false
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
  "static_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",

    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "magic_learning_station.static_panel_content"
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
  "description": {
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "#text",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // ?? ?? ??
    "font_scale_factor": 0.7,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#form_button_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      }
    ]
  },

  // ???/?? ??
  "static_panel_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "scroll_recipe": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#text",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 기준점에서 이동하는 거리
          "offset": [ 108, 22 ],
          // ?? ?? ??
          "font_scale_factor": 0.7,
          // 가로/세로 크기
          "size": [ 110, 47 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#form_button_text",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#text",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 가져올 값 이름
              "binding_name": "#form_button_texture",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "desc_toggle_data",
              // 계산식/참조 값
              "source_property_name": "(not (#toggle_state))",
              // 결과가 들어갈 속성
              "target_property_name": "#toggle_visible"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((#content_label = 'scroll_recipe') and #toggle_visible)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            },
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "scroll_description": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 기준점에서 이동하는 거리
          "offset": [ 108, -35 ],
          // 가로/세로 크기
          "size": [ 114, 60 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "scrolling_panel@common.scrolling_panel": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 오버라이드 가능한 변수
                "$show_background": false,
                // 가로/세로 크기
                "size": ["100% - 2px", "100% - 3px"],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 오버라이드 가능한 변수
                "$scrolling_content": "magic_learning_station.description",
                // 오버라이드 가능한 변수
                "$scroll_size": [ 1, "100% - 4px" ],
                // 오버라이드 가능한 변수
                "$scroll_bar_right_padding_size": [ 1, 0 ],
                // 오버라이드 가능한 변수
                "$scroll_bar_right_padding_size_touch": [ 2, 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "desc_toggle_data",
                    // 계산식/참조 값
                    "source_property_name": "(not (#toggle_state))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "scrolling_panel@common.scrolling_panel": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 오버라이드 가능한 변수
                "$show_background": false,
                // 가로/세로 크기
                "size": ["100% - 2px", "100% + 40px"],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 오버라이드 가능한 변수
                "$scrolling_content": "magic_learning_station.description",
                // 오버라이드 가능한 변수
                "$scroll_size": [ 1, "100% - 4px" ],
                // 오버라이드 가능한 변수
                "$scroll_bar_right_padding_size": [ 1, 0 ],
                // 오버라이드 가능한 변수
                "$scroll_bar_right_padding_size_touch": [ 2, 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "desc_toggle_data",
                    // 계산식/참조 값
                    "source_property_name": "#toggle_state",
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
              "binding_name": "#form_button_texture",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#content_label = 'description_scroll')",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "craft_button@common.button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 가로/세로 크기
          "size": [ 110, 20 ],
          // 기준점에서 이동하는 거리
          "offset": [ 107, 62 ],
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
              "mapping_type": "focused"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.controller_select",
              // 어떤 동작을 실행할지
              "to_button_id": "$pressed_button_name",
              // 입력 시점(pressed 등)
              "mapping_type": "global"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "default": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/learning_station/button_unpress",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 보여줄 글자
                    "text": {
                      // 글자 표시
                      "type": "label",
                      // ??
                      "font_type": "MinecraftTen",
                      // 보여줄 글자
                      "text": "주문 제작",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -3 ],
                      // ?? (R,G,B,A)
                      "color": [ 0.6, 0.48, 0.35 ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "hover": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/learning_station/button_hover",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 보여줄 글자
                    "text": {
                      // 글자 표시
                      "type": "label",
                      // ??
                      "font_type": "MinecraftTen",
                      // 보여줄 글자
                      "text": "주문 제작",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -3 ],
                      // ?? (R,G,B,A)
                      "color": [ 0.1, 0.07, 0.01 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "hover@magic_learning_station.button_border_light": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 가로/세로 크기
                      "size": [ "100% + 2px", "100% + 2px" ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "pressed": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/learning_station/button_press",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 보여줄 글자
                    "text": {
                      // 글자 표시
                      "type": "label",
                      // ??
                      "font_type": "MinecraftTen",
                      // 보여줄 글자
                      "text": "주문 제작",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -1 ],
                      // ?? (R,G,B,A)
                      "color": [ 0.1, 0.07, 0.01 ]
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
              "binding_name": "#form_button_texture",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#content_label = 'craft')",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            },
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button8@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/fire_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, -67 ],
          // 오버라이드 가능한 변수
          "$button_param": "fire_type"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button6@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/dark_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, -50 ],
          // 오버라이드 가능한 변수
          "$button_param": "dark_type"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button7@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/nature_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, -33 ],
          // 오버라이드 가능한 변수
          "$button_param": "nature_type"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button1@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/wind_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, -16 ],
          // 오버라이드 가능한 변수
          "$button_param": "wind_type"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button0@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/void_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, 0 ],
          // 오버라이드 가능한 변수
          "$button_param": "void_type"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button5@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/ice_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, 17 ],
          // 오버라이드 가능한 변수
          "$button_param": "ice_type"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button4@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/water_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, 34 ],
          // 오버라이드 가능한 변수
          "$button_param": "water_type"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button2@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/thunder_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, 51 ],
          // 오버라이드 가능한 변수
          "$button_param": "thunder_type"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_type_button3@magic_learning_station.magic_type_button": {
          // 오버라이드 가능한 변수
          "$button_image": "textures/ui/learning_station/light_type_button",
          // 기준점에서 이동하는 거리
          "offset": [ -217, 68 ],
          // 오버라이드 가능한 변수
          "$button_param": "light_type"
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#collection_index < 11)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "scroll_craft_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 344, 160 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 6 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "common_panel@common.common_panel": {
          // 오버라이드 가능한 변수
          "$show_close_button": false,
          // 오버라이드 가능한 변수
          "$dialog_background": "magic_learning_station.transparent"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "desc_toggle@magic_learning_station.desc_toggle": {
          // 기준점에서 이동하는 거리
          "offset": [ 45, 35 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "close_button@magic_learning_station.close_button": {
          // 기준점에서 이동하는 거리
          "offset": [ 45, 13 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_scroll_panel@magic_learning_station.magic_scroll_panel": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 기준점에서 이동하는 거리
          "offset": [ -5, -2 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "magic_scroll_list_panel@magic_learning_station.magic_scroll_list_panel": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 기준점에서 이동하는 거리
          "offset": [ 5, -2 ]
        }
      },
      {
        // ???/?? ??
        "title": {
          // 글자 표시
          "type": "label",
          // ??
          "font_type": "MinecraftTen",
          // 보여줄 글자
          "text": "마법 학습대",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // ?? (R,G,B,A)
          "color": [ 0.23, 0.23, 0.23 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "static_panel@magic_learning_station.static_panel": {}
      }
    ]
  },

  // ???/?? ??
  "menu_main_button": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 96, 128 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button@common_buttons.light_text_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 가로/세로 크기
          "size": [ 64, 128 ],

          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/blank",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/ribbon_bar_text_background_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/blank",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/blank",

          // 오버라이드 가능한 변수
          "$button_text_binding_type": "collection",
          // 오버라이드 가능한 변수
          "$button_text_grid_collection_name": "form_buttons",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "image": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 가로/세로 크기
          "size": [ 64, 128 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings":[
            {
              // 가져올 값 이름
              "binding_name": "#form_button_text",
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
      }
    ]
  }
}
```








### 기본
magic_reinforcement_table_screen.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: magic_reinforcement_table_screen.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "magic_reinforcement_table",

    // 다른 템플릿을 가져와서 확장(상속)
    "add_button@scroll_image.container_item_with_no_durability": {
        // 오버라이드 가능한 변수
        "$button_ref": "magic_reinforcement_table.button_prototype",
        // 가로/세로 크기
        "size": [ 9, 9 ],
        // 오버라이드 가능한 변수
        "$item_renderer_panel_size": [ 7, 7 ],
        // 오버라이드 가능한 변수
        "$item_renderer_size": [ 7, 7 ],
        // 오버라이드 가능한 변수
        "$cell_image_size": [ 9, 9 ],
        // 오버라이드 가능한 변수
        "$background_images": "scroll_image.black_border",
        // 오버라이드 가능한 변수
        "$item_renderer": "scroll_image.attribute_add_button",
        // 오버라이드 가능한 변수
        "$highlight_control": "scroll_image.highlight_add_panel"
    },

    // 다른 템플릿을 가져와서 확장(상속)
    "transform_spell_book@scroll_image.black_border": {
        // 가로/세로 크기
        "size": [ "100%", 25 ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "container@common.container_item": {
                    // 오버라이드 가능한 변수
                    "$button_ref": "magic_reinforcement_table.button_prototype",
                    // 가로/세로 크기
                    "size": [ "100% - 1px", 23 ],
                    // 오버라이드 가능한 변수
                    "$item_renderer_panel_size": [ "100% - 1px", 23 ],
                    // 오버라이드 가능한 변수
                    "$item_renderer_offset": [ 49, 0 ],
                    // 오버라이드 가능한 변수
                    "$cell_image_size": [ "100% - 1px", 23 ],
                    // 오버라이드 가능한 변수
                    "$background_images": "scroll_image.black_button_image",
                    // 오버라이드 가능한 변수
                    "$item_renderer": "scroll_image.transform_spell",
                    // 오버라이드 가능한 변수
                    "$highlight_control": "scroll_image.highlight_transform"
                }
            }
        ],
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 목록 인덱스/현재 항목 정보 제공
                "binding_type": "collection_details",
                // 목록 이름
                "binding_collection_name": "container_items"
            },
            {
                // 가져올 값 이름
                "binding_name": "#collection_index",
                // 목록 인덱스/현재 항목 정보 제공
                "binding_type": "collection_details",
                // 목록 이름
                "binding_collection_name": "container_items"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(#collection_index > 13)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    },

    // 다른 템플릿을 가져와서 확장(상속)
    "button_prototype@common.container_slot_button_prototype": {
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
            },
            {
                // 어떤 입력을 받을지
                "from_button_id": "button.menu_auto_place",
                // 어떤 동작을 실행할지
                "to_button_id": "button.container_auto_place",
                // 입력 시점(pressed 등)
                "mapping_type": "pressed"
            }
        ]
    },

    // ???/?? ??
    "magic_reinforcement_table_input": {
        // 데이터 목록을 반복 배치
        "type": "collection_panel",
        // 기준점(어디에서 시작할지)
        "anchor_from": "center",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "center",
        // 가로/세로 크기
        "size": [ 0, 0 ],

        // 목록 이름
        "collection_name": "container_items",
        // 오버라이드 가능한 변수
        "$item_collection_name": "container_items",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_0@common.container_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -68, -17 ],
                    // 가로/세로 크기
                    "size": [ 25, 25 ],
                    // 오버라이드 가능한 변수
                    "$item_renderer_panel_size": [ 25, 25 ],
                    // 오버라이드 가능한 변수
                    "$cell_image_size": [ 25, 25 ],
                    // 오버라이드 가능한 변수
                    "$cell_overlay_ref": "scroll_image.item_reinforcement_overlay",
                    // ?? ??
                    "collection_index": 0
                }
            },
            {
                // ???/?? ??
                "item_1": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ 160, 156 ],
                    // 기준점에서 이동하는 거리
                    "offset": [ -175, 28 ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 2,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "text@scroll_image.item_name_panel": {
                                // 가로/세로 크기
                                "size": [ 160, 156 ]
                            }
                        }
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "spell_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#toggle_state"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 1
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_2@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, -23 ],
                    // 오버라이드 가능한 변수
                    "$name": "영혼 용량",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 2
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_3@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, -13 ],
                    // 오버라이드 가능한 변수
                    "$name": "화염 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 3
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_4@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, -3 ],
                    // 오버라이드 가능한 변수
                    "$name": "물 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 4
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_5@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, 7 ],
                    // 오버라이드 가능한 변수
                    "$name": "자연 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 5
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_6@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, 17 ],
                    // 오버라이드 가능한 변수
                    "$name": "냉기 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 6
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_7@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, 27 ],
                    // 오버라이드 가능한 변수
                    "$name": "공허 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 7
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_8@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, 37 ],
                    // 오버라이드 가능한 변수
                    "$name": "암흑 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 8
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_9@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, 47 ],
                    // 오버라이드 가능한 변수
                    "$name": "광명 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 9
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_10@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, 57 ],
                    // 오버라이드 가능한 변수
                    "$name": "바람 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 10
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_11@magic_reinforcement_table.add_button": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 248, 67 ],
                    // 오버라이드 가능한 변수
                    "$name": "천둥 마법",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 11
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_12@common.container_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -68, 9 ],
                    // 오버라이드 가능한 변수
                    "$cell_overlay_ref": "enchanting.lapis_image",
                    // ?? ??
                    "collection_index": 12
                }
            },
            {
                // ???/?? ??
                "item_13": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ 80, 126 ],
                    // 기준점에서 이동하는 거리
                    "offset": [ 208, 12 ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 2,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "text@scroll_image.item_name_panel": {}
                        }
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "attributes_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 13
                }
            }
        ]
    },

    // ???/?? ??
    "reinforcement_choice": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 가로/세로 크기
        "size": ["100% - 4px", "100%c + 1px"],
        // 기준점에서 이동하는 거리
        "offset": [2,0],
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_middle",
        // 오버라이드 가능한 변수
        "$scale": 21,

        // 목록 이름
        "collection_name": "container_items",
        // 오버라이드 가능한 변수
        "$item_collection_name": "container_items",

        // 목록 아이템을 자동으로 생성
        "factory":{
            // ?? ??
            "name": "magic_reinforcement_table",
            // ??? ???
            "control_name": "magic_reinforcement_table.transform_spell_book"
        },
        // 이 컨트롤 안에서 쓰는 임시 저장소
        "property_bag": {
            // ???/??? ?
            "#scale": "$scale"
        },
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(#scale * 1)",
                // 결과가 들어갈 속성
                "target_property_name": "#collection_length"
            }
        ]
    },

    // 다른 템플릿을 가져와서 확장(상속)
    "scrolling_panel@common.scrolling_panel": {
        // 오버라이드 가능한 변수
        "$show_background": false,
        // 가로/세로 크기
        "size": ["100% - 2px", "100% - 3px"],
        // 오버라이드 가능한 변수
        "$scrolling_content": "magic_reinforcement_table.reinforcement_choice",
        // 오버라이드 가능한 변수
        "$scroll_size": [ 1, "100% - 4px" ],
        // 오버라이드 가능한 변수
        "$scroll_bar_right_padding_size": [ 1, 0 ],
        // 오버라이드 가능한 변수
        "$scroll_bar_right_padding_size_touch": [ 2, 0 ]
    },

    // ???/?? ??
    "layout_toggle_content": {
        // 이미지 표시
        "type": "image",
        // 기준점에서 이동하는 거리
        "offset": [ 0, -1 ],
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_middle",
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_middle",
        // 사용할 이미지 경로
        "texture": "$icon",
        // 가로/세로 크기
        "size": [ 19, 13 ],
        // 겹치는 순서(숫자 클수록 위)
        "layer": 1
    },

    // ???/?? ??
    "toolbar": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "textures/ui/toolbar_background",
        // 가로/세로 크기
        "size": [
            "100%cm + 17px",
            26
        ],
        // 기준점에서 이동하는 거리
        "offset": [ 0, 3 ],
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_right",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "bottom_right",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "inner": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "horizontal",
                    // 가로/세로 크기
                    "size": [
                        "100%c",
                        18
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "spell_description@common_toggles.light_image_toggle": {
                                // 오버라이드 가능한 변수
                                "$toggle_view_binding_name": "spell_toggle",
                                // 오버라이드 가능한 변수
                                "$icon": "textures/ui/spell_description",
                                // 오버라이드 가능한 변수
                                "$button_content": "magic_reinforcement_table.layout_toggle_content",
                                // 오버라이드 가능한 변수
                                "$toggle_name": "layout_toggle",
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
                                    "mapping_type": "focused"
                                  },
                                  {
                                    // 어떤 입력을 받을지
                                    "from_button_id": "button.menu_tab_left",
                                    // 어떤 동작을 실행할지
                                    "to_button_id": "button.spell_toggle",
                                    // 입력 시점(pressed 등)
                                    "mapping_type": "global"
                                  }
                                ],
                                // 가로/세로 크기
                                "size": [ 25, 18 ]
                            }
                        },
                        {
                            // ???/?? ??
                            "space": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 2, 0 ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "spell_attributes@common_toggles.light_image_toggle": {
                                // 오버라이드 가능한 변수
                                "$toggle_view_binding_name": "attributes_toggle",
                                // 오버라이드 가능한 변수
                                "$icon": "textures/ui/spell_attributes",
                                // 오버라이드 가능한 변수
                                "$button_content": "magic_reinforcement_table.layout_toggle_content",
                                // 오버라이드 가능한 변수
                                "$toggle_name": "layout_toggle",
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
                                    "mapping_type": "focused"
                                  },
                                  {
                                    // 어떤 입력을 받을지
                                    "from_button_id": "button.menu_tab_right",
                                    // 어떤 동작을 실행할지
                                    "to_button_id": "button.attributes_toggle",
                                    // 입력 시점(pressed 등)
                                    "mapping_type": "global"
                                  }
                                ],
                                // 가로/세로 크기
                                "size": [ 25, 18 ]
                            }
                        },
                        {
                            // ???/?? ??
                            "space": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 2, 0 ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "#close_button_visible",
                                        // 가져온 값을 다른 속성으로 연결
                                        "binding_name_override": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "close_button_panel": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 15, "100%" ],
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
                                        "close_button@common.light_close_button": {
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
            },
            {
                // ???/?? ??
                "helper": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "textures/ui/generic_bumper_left",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "left_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 가로/세로 크기
                    "size": [ 26, 26 ],
                    // 기준점에서 이동하는 거리
                    "offset": [ -1, 0 ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 가져올 값 이름
                            "binding_name": "(#is_using_gamepad)",
                            // 가져온 값을 다른 속성으로 연결
                            "binding_name_override": "#visible"
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "helper": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "textures/ui/generic_bumper_right",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "right_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "left_middle",
                    // 가로/세로 크기
                    "size": [ 26, 26 ],
                    // 기준점에서 이동하는 거리
                    "offset": [ 1, 0 ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 가져올 값 이름
                            "binding_name": "(#is_using_gamepad)",
                            // 가져온 값을 다른 속성으로 연결
                            "binding_name_override": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "magic_reinforcement_table_panel": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            { "container_gamepad_helpers@common.container_gamepad_helpers": {} },
            { "selected_item_details_factory@common.selected_item_details_factory": {} },
            { "item_lock_notification_factory@common.item_lock_notification_factory": {} },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root_panel@common.root_panel": {
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 1,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "all_panel": {
                                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                "type": "stack_panel",
                                // 가로/세로 크기
                                "size": [
                                    "100%c",
                                    "166px"
                                ],
                                // 쌓는 방향(가로/세로)
                                "orientation": "horizontal",
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "spell_book_panel@scroll_image.grey_border": {
                                            // 가로/세로 크기
                                            "size": [ 170, 166 ],
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // ?? ??
                                                    "source_control_name": "spell_toggle",
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
                                        "space": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": [ 2, 166 ],
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // ?? ??
                                                    "source_control_name": "spell_toggle",
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
                                        "main_panel": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": [ 177, 166 ],
                                            // 이 안에 들어가는 부품 목록
                                            "controls": [
                                                {
                                                    // 다른 템플릿을 가져와서 확장(상속)
                                                    "toolbar@magic_reinforcement_table.toolbar": {
                                                    }
                                                },
                                                {
                                                    // 다른 템플릿을 가져와서 확장(상속)
                                                    "common_panel@common.common_panel": {
                                                        // 오버라이드 가능한 변수
                                                        "$show_close_button": false
                                                    }
                                                },
                                                {
                                                    // ???/?? ??
                                                    "chest_panel": {
                                                        // 패널: 다른 부품을 담는 바닥판
                                                        "type": "panel",
                                                        // 겹치는 순서(숫자 클수록 위)
                                                        "layer": 5,
                                                        // 이 안에 들어가는 부품 목록
                                                        "controls": [
                                                            {
                                                                // ???/?? ??
                                                                "small_chest_panel_top_half": {
                                                                    // 패널: 다른 부품을 담는 바닥판
                                                                    "type": "panel",
                                                                    // 가로/세로 크기
                                                                    "size": [ "100%", "50%" ],
                                                                    // 기준점에서 이동하는 거리
                                                                    "offset": [ 0, 12 ],
                                                                    // 붙일 위치(어디에 놓을지)
                                                                    "anchor_to": "top_middle",
                                                                    // 기준점(어디에서 시작할지)
                                                                    "anchor_from": "top_middle",
                                                                    // 이 안에 들어가는 부품 목록
                                                                    "controls": [
                                                                        {
                                                                            // ???/?? ??
                                                                            "chest_label": {
                                                                                // 글자 표시
                                                                                "type": "label",
                                                                                // 기준점에서 이동하는 거리
                                                                                "offset": [ 0, -5 ],
                                                                                // 기준점(어디에서 시작할지)
                                                                                "anchor_from": "top_middle",
                                                                                // 붙일 위치(어디에 놓을지)
                                                                                "anchor_to": "top_middle",
                                                                                // 보여줄 글자
                                                                                "text": "마법 강화대",
                                                                                // ?? (R,G,B,A)
                                                                                "color": "$title_text_color",
                                                                                // 겹치는 순서(숫자 클수록 위)
                                                                                "layer": 2
                                                                            }
                                                                        },
                                                                        {
                                                                            // 다른 템플릿을 가져와서 확장(상속)
                                                                            "magic_reinforcement_table_input@magic_reinforcement_table.magic_reinforcement_table_input": {
                                                                            }
                                                                        },
                                                                        {
                                                                            // 다른 템플릿을 가져와서 확장(상속)
                                                                            "black_border@scroll_image.black_border": {
                                                                                // 기준점(어디에서 시작할지)
                                                                                "anchor_from": "right_middle",
                                                                                // 붙일 위치(어디에 놓을지)
                                                                                "anchor_to": "right_middle",
                                                                                // 겹치는 순서(숫자 클수록 위)
                                                                                "layer": 1,
                                                                                // 기준점에서 이동하는 거리
                                                                                "offset": [ -7, -5 ],
                                                                                // 가로/세로 크기
                                                                                "size": [ 130, 55 ],
                                                                                // 이 안에 들어가는 부품 목록
                                                                                "controls": [
                                                                                    {
                                                                                        // 다른 템플릿을 가져와서 확장(상속)
                                                                                        "scrolling_panel@magic_reinforcement_table.scrolling_panel": {}
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            { "inventory_panel_bottom_half_with_label@common.inventory_panel_bottom_half_with_label": {} },
                                                            { "hotbar_grid@common.hotbar_grid_template": {} },
                                                            { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
                                                            { "flying_item_renderer@common.flying_item_renderer": { "layer": 15 } },
                                                            {
                                                                // ???/?? ??
                                                                "point_label": {
                                                                    // 글자 표시
                                                                    "type": "label",
                                                                    // 보여줄 글자
                                                                    "text": "남은 아이템 포인트:",
                                                                    // 기준점에서 이동하는 거리
                                                                    "offset": [ 137, -73 ],
                                                                    // 겹치는 순서(숫자 클수록 위)
                                                                    "layer": 2,
                                                                    // 게임 값과 연결하는 규칙 목록
                                                                    "bindings": [
                                                                        {
                                                                            // 계산/조건 결과를 연결
                                                                            "binding_type": "view",
                                                                            // ?? ??
                                                                            "source_control_name": "attributes_toggle",
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
                                        "space": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": [ 2, 166 ],
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // ?? ??
                                                    "source_control_name": "attributes_toggle",
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
                                        "item_attributes_panel@scroll_image.grey_border": {
                                            // 가로/세로 크기
                                            "size": [ 170, 166 ],
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // ?? ??
                                                    "source_control_name": "attributes_toggle",
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
                        },
                        { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
                        { "gamepad_cursor@common.gamepad_cursor_button": {} }
                    ]
                }
            }
        ]
    }
}
```








### 기본
magic_ui_util.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: magic_ui_util.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "magic_ui_util",

  // ???/?? ??
  "cell_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/cell_image",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "black_cell_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/button_borderless_darkpressednohover",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "form_icon_black_cell": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 가로/세로 크기
    "size": [ 18, 18 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "image": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 14, 14],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 16,
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
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_input@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 가로/세로 크기
          "size": [ 18, 18 ],
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/blank",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/ribbon_bar_text_background_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/blank",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/blank",
          // 오버라이드 가능한 변수
          "$border_default_alpha": 0,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#form_button_text",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "image",
              // ?? ??
              "resolve_sibling_scope": true,
              // 계산식/참조 값
              "source_property_name": "(not (#texture = 'textures/ui/blank'))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cell_image@magic_ui_util.black_cell_image": {}
      }
    ]
  },

  // ???/?? ??
  "form_icon_cell": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 가로/세로 크기
    "size": [ 18, 18 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "image": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 14, 14],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 16,
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
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "button_input@common_buttons.light_content_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 가로/세로 크기
          "size": [ 18, 18 ],
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/blank",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/ribbon_bar_text_background_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/blank",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/blank",
          // 오버라이드 가능한 변수
          "$border_default_alpha": 0,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#form_button_text",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#content_label",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 목록 인덱스/현재 항목 정보 제공
              "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "image",
              // ?? ??
              "resolve_sibling_scope": true,
              // 계산식/참조 값
              "source_property_name": "(not (#texture = 'textures/ui/blank'))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cell_image@magic_ui_util.cell_image": {}
      }
    ]
  }
}
```








### 기본
scrolls_item_ui.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: scrolls_item_ui.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "scroll_image",

    // ???/?? ??
    "item_reinforcement_animation": {
        // 프레임 애니메이션
        "anim_type": "flip_book",
        // ?? ??
        "initial_uv": [ 0, 0 ],
        // ?? ??
        "frame_count": 5,
        // ?? ??
        "frame_step": 16,
        // ?? ??
        "fps": 1.0,
        // 움직임 곡선
        "easing": "linear"
    },

    // ???/?? ??
    "item_binding_animation": {
        // 프레임 애니메이션
        "anim_type": "flip_book",
        // ?? ??
        "initial_uv": [ 0, 0 ],
        // ?? ??
        "frame_count": 2,
        // ?? ??
        "frame_step": 16,
        // ?? ??
        "fps": 1.0,
        // 움직임 곡선
        "easing": "linear"
    },

    // ???/?? ??
    "container_overlay": {
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
                "binding_collection_name": "$item_collection_name",
                // ?? ???
                "binding_condition": "none"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not(#item_id_aux > 0))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]

    },

    // ???/?? ??
    "black_cell_image": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "textures/ui/button_borderless_darkpressednohover"
    },

    // ???/?? ??
    "black_button_image": {
      // 이미지 표시
      "type": "image",
      // 사용할 이미지 경로
      "texture": "textures/ui/button_borderless_dark",
      // 겹치는 순서(숫자 클수록 위)
      "layer": 1
    },

    // 다른 템플릿을 가져와서 확장(상속)
    "scroll_overlay@scroll_image.container_overlay": {
        // 이미지 표시
        "type": "image",
        // 가로/세로 크기
        "size": [ 16, 16 ],
        // 사용할 이미지 경로
        "texture": "textures/ui/scroll_binding_item",
        // ???? ?? ??
        "uv": "@scroll_image.item_binding_animation",
        // ???? ??
        "uv_size": [ 16, 16 ]
    },

    // 다른 템플릿을 가져와서 확장(상속)
    "spell_book_overlay@scroll_image.container_overlay": {
        // 이미지 표시
        "type": "image",
        // 가로/세로 크기
        "size": [ 16, 16 ],
        // 사용할 이미지 경로
        "texture": "textures/ui/casting_binding_item",
        // ???? ?? ??
        "uv": "@scroll_image.item_binding_animation",
        // ???? ??
        "uv_size": [ 16, 16 ]
    },

    // 다른 템플릿을 가져와서 확장(상속)
    "item_reinforcement_overlay@scroll_image.container_overlay": {
        // 이미지 표시
        "type": "image",
        // 가로/세로 크기
        "size": [ 16, 16 ],
        // 사용할 이미지 경로
        "texture": "textures/ui/reinforcement_item",
        // ???? ?? ??
        "uv": "@scroll_image.item_reinforcement_animation",
        // ???? ??
        "uv_size": [ 16, 16 ]
    },

    // ???/?? ??
    "grey_border": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "textures/ui/greyBorder",
        // 겹치는 순서(숫자 클수록 위)
        "layer": 1
    },

    // ???/?? ??
    "add_button": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "textures/ui/attribute_add_button",
        // 겹치는 순서(숫자 클수록 위)
        "layer": 1
    },

    // ???/?? ??
    "empty": {
        // 완전히 제거(공간도 없음)
        "ignored": true
    },

    // ???/?? ??
    "black_border": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "textures/ui/background_with_border"
    },

    // ???/?? ??
    "container_item_with_no_durability": {
      // 마우스/커서 따라다니는 패널
      "type": "input_panel",
      // 가로/세로 크기
      "size": [ 18, 18 ],
      // 겹치는 순서(숫자 클수록 위)
      "layer": 1,
      // 오버라이드 가능한 변수
      "$cell_image_size|default": [ 18, 18 ],
      // 오버라이드 가능한 변수
      "$cell_overlay_ref|default": "common.cell_overlay",
      // 오버라이드 가능한 변수
      "$button_ref|default": "common.container_slot_button_prototype",
      // 오버라이드 가능한 변수
      "$stack_count_required|default": true,
      // 오버라이드 가능한 변수
      "$durability_bar_required|default": true,
      // 오버라이드 가능한 변수
      "$storage_bar_required|default": true,
      // 오버라이드 가능한 변수
      "$item_renderer|default": "common.item_renderer",
      // 오버라이드 가능한 변수
      "$item_renderer_panel_size|default": [ 18, 18 ],
      // 오버라이드 가능한 변수
      "$item_renderer_size|default": [ 16, 16 ],
      // 오버라이드 가능한 변수
      "$item_renderer_offset|default": [ 0, 0 ],
      // 오버라이드 가능한 변수
      "$background_images|default": "common.cell_image_panel",
      // 오버라이드 가능한 변수
      "$background_image_control_name|default": "bg",

      // 오버라이드 가능한 변수
      "$focus_id|default": "",
      // 오버라이드 가능한 변수
      "$focus_override_down|default": "",
      // 오버라이드 가능한 변수
      "$focus_override_up|default": "",
      // 오버라이드 가능한 변수
      "$focus_override_left|default": "",
      // 오버라이드 가능한 변수
      "$focus_override_right|default": "",
      // 포커스 이동용 ID
      "focus_identifier": "$focus_id",
      // 아래로 이동할 대상
      "focus_change_down": "$focus_override_down",
      // 위로 이동할 대상
      "focus_change_up": "$focus_override_up",
      // 왼쪽으로 이동할 대상
      "focus_change_left": "$focus_override_left",
      // 오른쪽으로 이동할 대상
      "focus_change_right": "$focus_override_right",
      // 포커스 가능 여부
      "focus_enabled": true,
      // 끝에서 다시 처음으로 순환
      "focus_wrap_enabled": false,
      // ???/?? ??
      "focus_magnet_enabled": true,

      // 이 안에 들어가는 부품 목록
      "controls": [
        {
          // ???/?? ??
          "item_cell": {
            // 패널: 다른 부품을 담는 바닥판
            "type": "panel",
            // 가로/세로 크기
            "size": "$cell_image_size",
            // 겹치는 순서(숫자 클수록 위)
            "layer": 0,
            // 이 안에 들어가는 부품 목록
            "controls": [
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "$background_image_control_name@$background_images": {
                  // 겹치는 순서(숫자 클수록 위)
                  "layer": 1
                }
              },
              {
                // ???/?? ??
                "item": {
                  // 패널: 다른 부품을 담는 바닥판
                  "type": "panel",
                  // 가로/세로 크기
                  "size": "$item_renderer_panel_size",
                  // 겹치는 순서(숫자 클수록 위)
                  "layer": 0,
                  // 이 안에 들어가는 부품 목록
                  "controls": [
                    {
                      // 다른 템플릿을 가져와서 확장(상속)
                      "stack_count_label@common.stack_count_label": {
                        // 겹치는 순서(숫자 클수록 위)
                        "layer": 27
                      }
                    },
                    {
                      // 다른 템플릿을 가져와서 확장(상속)
                      "$item_renderer@$item_renderer": {
                        // 가로/세로 크기
                        "size": "$item_renderer_size",
                        // 기준점에서 이동하는 거리
                        "offset": "$item_renderer_offset",
                        // 붙일 위치(어디에 놓을지)
                        "anchor_to": "center",
                        // 기준점(어디에서 시작할지)
                        "anchor_from": "center",
                        // 겹치는 순서(숫자 클수록 위)
                        "layer": 7
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
          "item_cell_overlay_ref@$cell_overlay_ref": {
            // 겹치는 순서(숫자 클수록 위)
            "layer": 3
          }
        },
        {
          // 다른 템플릿을 가져와서 확장(상속)
          "item_selected_image@common.slot_selected": {
            // 겹치는 순서(숫자 클수록 위)
            "layer": 4
          }
        },
        {
          // 다른 템플릿을 가져와서 확장(상속)
          "item_button_ref@$button_ref": {
            // ?? ??
            "tts_ignore_count": true,
            // ?? ??
            "tts_skip_message": true,
            // ?? ??
            "tts_inherit_siblings": true,
            // 겹치는 순서(숫자 클수록 위)
            "layer": 5
          }
        },
        {
          // 다른 템플릿을 가져와서 확장(상속)
          "container_item_lock_overlay@common.container_item_lock_overlay": {
            // 가로/세로 크기
            "size": "$item_renderer_size",
            // 기준점에서 이동하는 거리
            "offset": [ 1, 1 ],
            // 붙일 위치(어디에 놓을지)
            "anchor_to": "top_left",
            // 기준점(어디에서 시작할지)
            "anchor_from": "top_left",
            // 겹치는 순서(숫자 클수록 위)
            "layer": 6
          }
        },
        {
          // 다른 템플릿을 가져와서 확장(상속)
          "item_lock_cell_image@common.item_lock_cell_image": {
            // 겹치는 순서(숫자 클수록 위)
            "layer": 2
          }
        }
      ]
    },

    // 다른 템플릿을 가져와서 확장(상속)
    "attribute_add_button@scroll_image.add_button": {
        // 오버라이드 가능한 변수
        "$name|default": "Wind Magic",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "name_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ 140, "100%" ],
                    // 기준점에서 이동하는 거리
                    "offset": [ -5, 0 ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "left_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "name": {
                                // 글자 표시
                                "type": "label",
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "left_middle",
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "left_middle",
                                // 보여줄 글자
                                "text": "$name"
                            }
                        },
                        {
                            // 보여줄 글자
                            "text": {
                                // 글자 표시
                                "type": "label",
                                // 보여줄 글자
                                "text": "[     >     ]",
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "right_middle",
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "right_middle"
                            }
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "item_name_panel": {
        // 글자 표시
        "type": "label",
        // 보여줄 글자
        "text": "#text",
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
                "source_property_name": "#hover_text",
                // 결과가 들어갈 속성
                "target_property_name": "#text"
            }
        ]
    },

    // ???/?? ??
    "highlight_add_panel": {
      // 패널: 다른 부품을 담는 바닥판
      "type": "panel",
      // 이 안에 들어가는 부품 목록
      "controls": [
        {
          // 다른 템플릿을 가져와서 확장(상속)
          "highlight@common.highlight_slot": {
            // 이 안에 들어가는 부품 목록
            "controls": [
              {
                // ???/?? ??
                "hover_text": {
                    // 특수 렌더러(그라디언트/플레이어 등)
                    "type": "custom",
                    // 커스텀 렌더러 종류
                    "renderer": "hover_text_renderer",
                    // ??? ?? ?
                    "allow_clipping": false,
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 20,
                    // 이 컨트롤 안에서 쓰는 임시 저장소
                    "property_bag": {
                        // ???/??? ?
                        "#hover_text": "Require 3 Lapis Lazuli"
                    }
                }
              }
            ],
            // 게임 값과 연결하는 규칙 목록
            "bindings": [
              {
                // 가져올 값 이름
                "binding_name": "#show_persistent_bundle_hover_text",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#visible"
              }
            ]
          }
        },
        {
          // 다른 템플릿을 가져와서 확장(상속)
          "white_border@common.white_border_slot": {
            // 게임 값과 연결하는 규칙 목록
            "bindings": [
              {
                // 가져올 값 이름
                "binding_name": "#show_persistent_bundle_hover_text",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#visible"
              }
            ]
          }
        }
      ]
    },

    // ???/?? ??
    "highlight_transform": {
      // 패널: 다른 부품을 담는 바닥판
      "type": "panel",
      // 이 안에 들어가는 부품 목록
      "controls": [
        {
          // 다른 템플릿을 가져와서 확장(상속)
          "highlight@common.highlight_slot": {
            // 이 안에 들어가는 부품 목록
            "controls": [
              {
                // 다른 템플릿을 가져와서 확장(상속)
                "hover_text@common.hover_text": {
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
                      "binding_name_override": "#hover_text",
                      // 목록 데이터를 반복 연결
                      "binding_type": "collection",
                      // 목록 이름
                      "binding_collection_name": "$item_collection_name"
                    },
                    {
                        // 계산/조건 결과를 연결
                        "binding_type": "view",
                        // 계산식/참조 값
                        "source_property_name": "((#hover_text - 'UNLISTED' = #hover_text))",
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
                "binding_name": "#show_persistent_bundle_hover_text",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#visible"
              }
            ]
          }
        },
        {
          // 다른 템플릿을 가져와서 확장(상속)
          "white_border@common.white_border_slot": {
            // 게임 값과 연결하는 규칙 목록
            "bindings": [
              {
                // 가져올 값 이름
                "binding_name": "#show_persistent_bundle_hover_text",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#visible"
              }
            ]
          }
        }
      ]
    },

    // ???/?? ??
    "transform_spell": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ 180, 20 ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_container@scroll_image.black_cell_image": {
                    // 가로/세로 크기
                    "size": [ 20, 20 ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "item@common.item_renderer": {
                                // 가로/세로 크기
                                "size": [ 16, 16 ]
                            }
                        }
                    ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": -5,
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "right_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle"
                }
            },
            {
                // ???/?? ??
                "name_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ 90, 20 ],
                    // 기준점에서 이동하는 거리
                    "offset": [ -23, 0 ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "right_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "item_name_panel": {
                                // 글자 표시
                                "type": "label",
                                // 보여줄 글자
                                "text": "#text",
                                // ?? ?? ?
                                "max_size": [ 90, 20 ],
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "left_middle",
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "left_middle",
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
                                        "source_property_name": "('%.35s' * #hover_text) - '  '",
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
                            "source_property_name": "((#hover_text - 'UNLISTED' = #hover_text))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "template": {
        // 이미지 표시
        "type": "image",
        // ???
        "alpha": 1.0,
        // 사용할 이미지 경로
        "texture": "#texture",
        // 가로/세로 크기
        "size": [ 16, 16 ],
        // ??? ?? ?
        "allow_debug_missing_texture": false,
        // 겹치는 순서(숫자 클수록 위)
        "layer": 6,
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
                // 목록 이름
                "binding_collection_name": "$item_collection_name",
                // 계산식/참조 값
                "source_property_name": "('textures/ui/magic_list/' + ((#hover_text - ('%.6s' * #hover_text)) - '§r') + '')",
                // 결과가 들어갈 속성
                "target_property_name": "#texture"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#hover_text - 'undefined' = #hover_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    }
}
```








### 기본
server_form.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "server_form",

  // ???/?? ??
  "main_screen_content": {
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
            "server_form_factory": {
              // 리스트를 자동으로 생성하는 공장
              "type": "factory",
              // 팩토리 템플릿 매핑
              "control_ids": {
                // ?? ??
                "long_form": "@a_magic_way_custom_panel.long_form_replacement"
              }
            }
          }
        ]
      }
    ]
  },
  // ???/?? ??
  "long_form": {
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
            "source_control_name": "inside_header_panel",
            // 계산식/참조 값
            "source_property_name": "#stored_text",
            // 결과가 들어갈 속성
            "target_property_name": "#visible"
          }
        ]
      }
    ]
  },
  // ???/?? ??
  "long_form_panel": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#form_text - 'menu.invisible') = #form_text)",
        // 결과가 들어갈 속성
        "target_property_name": "#stored_text"
      }
    ]
  }
}
```








### 기본
spell_binding_table_screen.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: spell_binding_table_screen.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "spell_binding_table",

    // 다른 템플릿을 가져와서 확장(상속)
    "spell_item@common.container_item": {
        // 오버라이드 가능한 변수
        "$background_images": "scroll_image.black_cell_image",
        // 오버라이드 가능한 변수
        "$item_renderer": "scroll_image.empty"
    },

    // ???/?? ??
    "spell_render": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ 18, 18 ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "image@scroll_image.template": {}
            },
            {
                // ???/?? ??
                "locked": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "textures/ui/magic_lock",
                    // 가로/세로 크기
                    "size": [ 16, 16 ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 6,
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
                            "source_property_name": "(not(#hover_text - 'locked' = #hover_text))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "spell_binding_table_input": {
        // 데이터 목록을 반복 배치
        "type": "collection_panel",
        // 기준점(어디에서 시작할지)
        "anchor_from": "center",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "center",
        // 가로/세로 크기
        "size": [ 0, 0 ],

        // 목록 이름
        "collection_name": "container_items",
        // 오버라이드 가능한 변수
        "$item_collection_name": "container_items",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_0@common.container_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -15, -25 ],
                    // 오버라이드 가능한 변수
                    "$cell_overlay_ref": "scroll_image.spell_book_overlay",
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
                            "binding_collection_name": "$item_collection_name",
                            // ?? ???
                            "binding_condition": "none"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(not (#item_id_aux > 0))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 0
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_0@common.container_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -15, -25 ],
                    // 오버라이드 가능한 변수
                    "$cell_overlay_ref": "scroll_image.spell_book_overlay",
                    // 오버라이드 가능한 변수
                    "$button_ref": "magic_reinforcement_table.button_prototype",
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
                            "binding_collection_name": "$item_collection_name",
                            // ?? ???
                            "binding_condition": "none"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#item_id_aux > 0)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 0
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_1@common.container_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 15, -25 ],
                    // 오버라이드 가능한 변수
                    "$cell_overlay_ref": "scroll_image.scroll_overlay",
                    // ?? ??
                    "collection_index": 1
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_2@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -72, 10 ],
                    // ?? ??
                    "collection_index": 2
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_3@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -54, 10 ],
                    // ?? ??
                    "collection_index": 3
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_4@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -36, 10 ],
                    // ?? ??
                    "collection_index": 4
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_5@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -18, 10 ],
                    // ?? ??
                    "collection_index": 5
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_6@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 0, 10 ],
                    // ?? ??
                    "collection_index": 6
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_7@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 18, 10 ],
                    // ?? ??
                    "collection_index": 7
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_8@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 36, 10 ],
                    // ?? ??
                    "collection_index": 8
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_9@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 54, 10 ],
                    // ?? ??
                    "collection_index": 9
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_10@spell_binding_table.spell_item": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 72, 10 ],
                    // ?? ??
                    "collection_index": 10
                }
            },
            {
                // ???/?? ??
                "item_11": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ 160, 156 ],
                    // 기준점에서 이동하는 거리
                    "offset": [ -175, 28 ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 2,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "text@scroll_image.item_name_panel": {
                                // 가로/세로 크기
                                "size": [ 160, 156 ]
                            }
                        }
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "container_items"
                        },
                        {
                            // 가져올 값 이름
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "container_items"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "spell_toggle",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#toggle_state"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "#toggle_state",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "collection_index": 11
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_12@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -72, 10 ],
                    // ?? ??
                    "collection_index": 12
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_13@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -54, 10 ],
                    // ?? ??
                    "collection_index": 13
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_14@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -36, 10 ],
                    // ?? ??
                    "collection_index": 14
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_15@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ -18, 10 ],
                    // ?? ??
                    "collection_index": 15
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_16@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 0, 10 ],
                    // ?? ??
                    "collection_index": 16
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_17@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 18, 10 ],
                    // ?? ??
                    "collection_index": 17
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_18@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 36, 10 ],
                    // ?? ??
                    "collection_index": 18
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_19@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 54, 10 ],
                    // ?? ??
                    "collection_index": 19
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "item_20@spell_binding_table.spell_render": {
                    // 기준점에서 이동하는 거리
                    "offset": [ 72, 10 ],
                    // ?? ??
                    "collection_index": 20
                }
            }
        ]
    },

    // ???/?? ??
    "layout_toggle_content": {
        // 이미지 표시
        "type": "image",
        // 기준점에서 이동하는 거리
        "offset": [ 0, -1 ],
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_middle",
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_middle",
        // 사용할 이미지 경로
        "texture": "$icon",
        // 가로/세로 크기
        "size": [ 19, 13 ],
        // 겹치는 순서(숫자 클수록 위)
        "layer": 1
    },

    // ???/?? ??
    "toolbar": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "textures/ui/toolbar_background",
        // 가로/세로 크기
        "size": [
            "100%cm + 17px",
            26
        ],
        // 기준점에서 이동하는 거리
        "offset": [ 0, 3 ],
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_right",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "bottom_right",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "inner": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "horizontal",
                    // 가로/세로 크기
                    "size": [
                        "100%c",
                        18
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "spell_description@common_toggles.light_image_toggle": {
                                // 오버라이드 가능한 변수
                                "$toggle_view_binding_name": "spell_toggle",
                                // 오버라이드 가능한 변수
                                "$icon": "textures/ui/spell_description",
                                // 오버라이드 가능한 변수
                                "$button_content": "spell_binding_table.layout_toggle_content",
                                // 오버라이드 가능한 변수
                                "$toggle_name": "layout_toggle",
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
                                    "mapping_type": "focused"
                                  },
                                  {
                                    // 어떤 입력을 받을지
                                    "from_button_id": "button.menu_tab_left",
                                    // 어떤 동작을 실행할지
                                    "to_button_id": "button.spell_toggle",
                                    // 입력 시점(pressed 등)
                                    "mapping_type": "global"
                                  }
                                ],
                                // 가로/세로 크기
                                "size": [ 25, 18 ]
                            }
                        },
                        {
                            // ???/?? ??
                            "space": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 2, 0 ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "#close_button_visible",
                                        // 가져온 값을 다른 속성으로 연결
                                        "binding_name_override": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "close_button_panel": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 15, "100%" ],
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
                                        "close_button@common.light_close_button": {
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
            },
            {
                // ???/?? ??
                "helper": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "textures/ui/generic_bumper_left",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "left_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 가로/세로 크기
                    "size": [ 26, 26 ],
                    // 기준점에서 이동하는 거리
                    "offset": [ -1, 0 ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 가져올 값 이름
                            "binding_name": "(#is_using_gamepad)",
                            // 가져온 값을 다른 속성으로 연결
                            "binding_name_override": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "spell_binding_table_panel": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            { "container_gamepad_helpers@common.container_gamepad_helpers": {} },
            { "selected_item_details_factory@common.selected_item_details_factory": {} },
            { "item_lock_notification_factory@common.item_lock_notification_factory": {} },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root_panel@common.root_panel": {
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 1,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "all_panel": {
                                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                "type": "stack_panel",
                                // 가로/세로 크기
                                "size": [
                                    "100%c",
                                    "166px"
                                ],
                                // 쌓는 방향(가로/세로)
                                "orientation": "horizontal",
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "spell_book_panel@scroll_image.grey_border": {
                                            // 가로/세로 크기
                                            "size": [ 170, 166 ],
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // ?? ??
                                                    "source_control_name": "spell_toggle",
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
                                        "space": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": [ 2, 166 ],
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // ?? ??
                                                    "source_control_name": "spell_toggle",
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
                                        "main_panel": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": [ 177, 166 ],
                                            // 이 안에 들어가는 부품 목록
                                            "controls": [
                                                {
                                                    // 다른 템플릿을 가져와서 확장(상속)
                                                    "toolbar@spell_binding_table.toolbar": {
                                                    }
                                                },
                                                {
                                                    // 다른 템플릿을 가져와서 확장(상속)
                                                    "common_panel@common.common_panel": {
                                                        // 오버라이드 가능한 변수
                                                        "$show_close_button": false
                                                    }
                                                },
                                                {
                                                    // ???/?? ??
                                                    "chest_panel": {
                                                        // 패널: 다른 부품을 담는 바닥판
                                                        "type": "panel",
                                                        // 겹치는 순서(숫자 클수록 위)
                                                        "layer": 5,
                                                        // 이 안에 들어가는 부품 목록
                                                        "controls": [
                                                            {
                                                                // ???/?? ??
                                                                "small_chest_panel_top_half": {
                                                                    // 패널: 다른 부품을 담는 바닥판
                                                                    "type": "panel",
                                                                    // 가로/세로 크기
                                                                    "size": [ "100%", "50%" ],
                                                                    // 기준점에서 이동하는 거리
                                                                    "offset": [ 0, 12 ],
                                                                    // 붙일 위치(어디에 놓을지)
                                                                    "anchor_to": "top_middle",
                                                                    // 기준점(어디에서 시작할지)
                                                                    "anchor_from": "top_middle",
                                                                    // 이 안에 들어가는 부품 목록
                                                                    "controls": [
                                                                        {
                                                                            // ???/?? ??
                                                                            "chest_label": {
                                                                                // 글자 표시
                                                                                "type": "label",
                                                                                // 기준점에서 이동하는 거리
                                                                                "offset": [ 0, -5 ],
                                                                                // 기준점(어디에서 시작할지)
                                                                                "anchor_from": "top_middle",
                                                                                // 붙일 위치(어디에 놓을지)
                                                                                "anchor_to": "top_middle",
                                                                                // 보여줄 글자
                                                                                "text": "주문 결속대",
                                                                                // ?? (R,G,B,A)
                                                                                "color": "$title_text_color",
                                                                                // 겹치는 순서(숫자 클수록 위)
                                                                                "layer": 2
                                                                            }
                                                                        },
                                                                        {
                                                                            // 다른 템플릿을 가져와서 확장(상속)
                                                                            "spell_binding_table_input@spell_binding_table.spell_binding_table_input": {
                                                                            }
                                                                        },
                                                                        {
                                                                            // ???/?? ??
                                                                            "black_border": {
                                                                                // 이미지 표시
                                                                                "type": "image",
                                                                                // 사용할 이미지 경로
                                                                                "texture": "textures/ui/background_with_border",
                                                                                // 겹치는 순서(숫자 클수록 위)
                                                                                "layer": 1,
                                                                                // 기준점에서 이동하는 거리
                                                                                "offset": [ 0, 10 ],
                                                                                // 가로/세로 크기
                                                                                "size": [ 168, 24 ]
                                                                            }
                                                                        },
                                                                        {
                                                                            // ???/?? ??
                                                                            "item_cell_bridge": {
                                                                                // 이미지 표시
                                                                                "type": "image",
                                                                                // 사용할 이미지 경로
                                                                                "texture": "textures/ui/item_cell_bridge",
                                                                                // 겹치는 순서(숫자 클수록 위)
                                                                                "layer": 5,
                                                                                // 기준점에서 이동하는 거리
                                                                                "offset": [ 0, -25 ],
                                                                                // 가로/세로 크기
                                                                                "size": [ 14, 6 ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            { "inventory_panel_bottom_half_with_label@common.inventory_panel_bottom_half_with_label": {} },
                                                            { "hotbar_grid@common.hotbar_grid_template": {} },
                                                            { "inventory_take_progress_icon_button@common.inventory_take_progress_icon_button": {} },
                                                            { "flying_item_renderer@common.flying_item_renderer": { "layer": 15 } }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        { "inventory_selected_icon_button@common.inventory_selected_icon_button": {} },
                        { "gamepad_cursor@common.gamepad_cursor_button": {} }
                    ]
                }
            }
        ]
    }
}
```













StarLib
20 개







### 기본


server_form (1).jsonc
StarLib · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form (1).jsonc
// 분류: StarLib / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 MatrixUI example | by pipa_ngry
//   Use it only for educational purposes!
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "server_form",
    // 다른 템플릿을 가져와서 확장(상속)
    "third_party_server_screen@common.base_screen": {
        // 오버라이드 가능한 변수
        "$screen_content": "server_form.server_form",
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
    },
    // ???/?? ??
    "server_form": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "server_form_factory": {
                    // 리스트를 자동으로 생성하는 공장
                    "type": "factory",
                    // 팩토리 템플릿 매핑
                    "control_ids": {
                        // ?? ??
                        "long_form": "@server_form.long_form",
                        // ?? ??
                        "custom_form": "@server_form.custom_form"
                    }
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "long_form@starlib_pkg_screen_template.screen": {
        // 오버라이드 가능한 변수
        "$SCREEN_TEMPLATE_fade_enabled": true,
        // 오버라이드 가능한 변수
        "$SCREEN_TEMPLATE_fade_alpha": 0.4,

        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_style_control": "global.empty_panel",
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_title_control": "server_form.title",
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_contents_size": [
            "100% - 46px",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_close_button_control": "server_form.close_button",

        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_form_background_texture": "textures/matrix/background",
        // 오버라이드 가능한 변수
        "$form_size": [
            350,
            235
        ],
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_content_size": [
            "100% - 32px",
            "100% - 30px"
        ],
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_content_offset": [
            0,
            -10
        ],

        // 오버라이드 가능한 변수
        "$SCROLLING_CONTENT_additional_content_margins_size": [
            0,
            1
        ],
        // 오버라이드 가능한 변수
        "$SCROLLING_CONTENT_main_control": "global.grid",
        // 오버라이드 가능한 변수
        "$grid_item": "starlib_pkg_button_templates.grid_item_template",

        // 오버라이드 가능한 변수
        "$GRID_ITEM_root_control": "starlib_pkg_button_templates.big_button",
        // 오버라이드 가능한 변수
        "$GRID_ITEM_size": [
            "25%",
            "100%x"
        ],
        // 오버라이드 가능한 변수
        "$GRID_ITEM_root_size": [
            "100% - 4px",
            "100% - 4px"
        ],

        // 오버라이드 가능한 변수
        "$BIG_BUTTON_image_overlap_control": "server_form.gradient",
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_content_control": "server_form.button_content",
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_content_size": [
            "100% - 6px",
            "100% - 6px"
        ],
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_image_size": [
            "100% - 8px",
            "100% - 8px"
        ],
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_overlap_size": [
            "100% - 2px",
            "100% - 2px"
        ],

        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_hover_control": "server_form.button_hover",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_default_texture": "textures/matrix/button"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "gradient@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/matrix/gradient",
        // ???
        "alpha": 0.5
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "button_hover@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/matrix/button_hover"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "title@starlib_pkg_screen_common.title_template": {
        // ?? ??
        "text_alignment": "left",
        // ??
        "font_type": "MinecraftTen",
        // ?? (R,G,B,A)
        "color": [
            0,
            -235,
            -103
        ],
        // ?? ?? ??
        "font_scale_factor": 1.3
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "button_content@starlib_pkg_button_templates.common_big_button_content": {
        // ?? (R,G,B,A)
        "color": [
            0,
            -235,
            -103
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button@starlib_pkg_screen_common.close_button_template": {
        // 기준점(어디에서 시작할지)
        "anchor_from": "right_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "right_middle",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_default_control": "server_form.close_button_default",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_hover_control": "server_form.close_button_hover",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_pressed_control": "server_form.close_button_hover",
        // 기준점에서 이동하는 거리
        "offset": [
            2,
            2
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button_default@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/matrix/close_button"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button_hover@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/matrix/close_button_hover"
    }
}
```








server_form (2).jsonc
StarLib · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form (2).jsonc
// 분류: StarLib / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 MultiForm example | by pipa_ngry
//   Use it only for educational purposes!
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "server_form",
    // 다른 템플릿을 가져와서 확장(상속)
    "third_party_server_screen@common.base_screen": {
        // 오버라이드 가능한 변수
        "$screen_content": "server_form.server_form",
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
    },
    // ???/?? ??
    "server_form": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "server_form_factory": {
                    // 리스트를 자동으로 생성하는 공장
                    "type": "factory",
                    // 팩토리 템플릿 매핑
                    "control_ids": {
                        // ?? ??
                        "long_form": "@server_form.long_form",
                        // ?? ??
                        "custom_form": "@server_form.custom_form"
                    }
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "long_form@starlib_pkg_screen_template.screen": {
        // 오버라이드 가능한 변수
        "$SCREEN_TEMPLATE_fade_enabled": true,

        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_style_control": "server_form.header",
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_close_button_control": "global.empty_panel",

        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_size": [
            "100%",
            18
        ],
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_text_enabled": true,
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_default_control": "server_form.close_button",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_hover_control": "server_form.hover",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_pressed_control": "server_form.hover",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_text_offset": [
            0,
            -2
        ],

        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_appear_sub_contents_padding": true,
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_appear_header_padding": false,
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_sub_content_control": "starlib_pkg_screen_common.async_close_button",
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_background_texture": "textures/multiform/background",
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_between_contents_padding_size": [
            0,
            1
        ],
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_content_size": [
            "100% - 14px",
            "100% - 14px"
        ],

        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_default_texture": "textures/multiform/button",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_hover_control": "server_form.hover",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_pressed_control": "server_form.hover",

        // 오버라이드 가능한 변수
        "$forms_holder_controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "form@global.reverse_title_binding": {
                    // 오버라이드 가능한 변수
                    "$form_size": [
                        280,
                        225
                    ],
                    // 오버라이드 가능한 변수
                    "$SCROLLING_CONTENT_form_text_control": "server_form.form_text",
                    // 오버라이드 가능한 변수
                    "$button_item_control": "starlib_pkg_button_templates.horizontal_button_template",
                    // 오버라이드 가능한 변수
                    "$BORDERED_BUTTON_background_control": "global.empty_panel",
                    // 오버라이드 가능한 변수
                    "$SCROLLING_CONTENT_additional_content_margins_size": [
                        0,
                        1
                    ],
                    // 오버라이드 가능한 변수
                    "$key": "§f§0§0",
                    // 오버라이드 가능한 변수
                    "$control": "starlib_pkg_screen_template.form_template",
                    // 가로/세로 크기
                    "size": [
                        "100%c",
                        "100%c"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "form@global.title_binding": {
                    // 오버라이드 가능한 변수
                    "$form_size": [
                        340,
                        235
                    ],
                    // 오버라이드 가능한 변수
                    "$scrolling_content": "server_form.buttons_grid",
                    // 오버라이드 가능한 변수
                    "$COMMON_PAPERDOLL_size": [
                        "33.3%",
                        "100%"
                    ],
                    // 오버라이드 가능한 변수
                    "$COMMON_PAPERDOLL_background_texture": "textures/multiform/paperdoll_background",
                    // 오버라이드 가능한 변수
                    "$PAPERDOLL_offset": [
                        0,
                        -30
                    ],
                    // 오버라이드 가능한 변수
                    "$CONTENT_enable_paperdoll": true,
                    // 오버라이드 가능한 변수
                    "$CONTENT_between_contents_padding_size": [
                        5,
                        0
                    ],
                    // 오버라이드 가능한 변수
                    "$CUBIC_BUTTON_image_size": [
                        "100% - 16px",
                        "100% - 16px"
                    ],
                    // 오버라이드 가능한 변수
                    "$CUBIC_BUTTON_bottom_padding_size": [
                        0,
                        3
                    ],
                    // 오버라이드 가능한 변수
                    "$key": "§f§0§0",
                    // 오버라이드 가능한 변수
                    "$control": "starlib_pkg_screen_template.form_template",
                    // 가로/세로 크기
                    "size": [
                        "100%c",
                        "100%c"
                    ]
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "buttons_grid@global.grid": {
        // 오버라이드 가능한 변수
        "$grid_item": "server_form.grid_button"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "grid_button@starlib_pkg_button_templates.grid_item_template": {
        // 오버라이드 가능한 변수
        "$GRID_ITEM_root_control": "starlib_pkg_button_templates.cubic_button",
        // 오버라이드 가능한 변수
        "$GRID_ITEM_size": [
            "33.3%",
            96
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "header@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/multiform/header"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/multiform/close_button"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "hover@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/multiform/hover"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "form_text@starlib_pkg_screen_common.form_text_template": {
        // 가로/세로 크기
        "size": [
            "100% - 2px",
            "default"
        ]
    }
}
```








server_form (3).jsonc
StarLib · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form (3).jsonc
// 분류: StarLib / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 NutUI V2 example | by pipa_ngry
//   Use it only for educational purposes!
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "server_form",
    // 다른 템플릿을 가져와서 확장(상속)
    "third_party_server_screen@common.base_screen": {
        // 오버라이드 가능한 변수
        "$screen_content": "server_form.server_form",
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
    },
    // ???/?? ??
    "server_form": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "server_form_factory": {
                    // 리스트를 자동으로 생성하는 공장
                    "type": "factory",
                    // 팩토리 템플릿 매핑
                    "control_ids": {
                        // ?? ??
                        "long_form": "@server_form.long_form",
                        // ?? ??
                        "custom_form": "@server_form.custom_form"
                    }
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "long_form@starlib_pkg_screen_template.screen": {
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_header_control": "starlib_pkg_dynamic_common.common_dynamic_header",
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_background_texture": "textures/example/background",
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_content_size": [
            "100% - 20px",
            "100% - 16px"
        ],
        // 오버라이드 가능한 변수
        "$HORIZONTAL_BUTTON_size": [
            "100% - 2px",
            "100% - 2px"
        ],
        // 오버라이드 가능한 변수
        "$DYNAMIC_HEADER_background_control": "style.black",
        // 오버라이드 가능한 변수
        "$DYNAMIC_HEADER_style_control": "server_form.header",
        // 오버라이드 가능한 변수
        "$DYNAMIC_HEADER_close_button_control": "server_form.close_button",
        // 오버라이드 가능한 변수
        "$DYNAMIC_HEADER_header_contents_control": "server_form.header_buttons_factory",

        // 오버라이드 가능한 변수
        "$button_item_control": "starlib_pkg_dynamic_structure.dynamic_item_template",

        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_hover_control": "server_form.hover",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_panel_control": "starlib_pkg_button_common.disabled_variable_button_panel",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_style_control": "starlib_pkg_button_style.disabled_variable_button_style",

        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_disabled_variable_key": "§p§3§0",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_default_variable_texture": "textures/example/button",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_disabled_variable_texture": "textures/example/button_disabled",
        // 오버라이드 가능한 변수
        "$HORIZONTAL_BUTTON_image_background_texture": "textures/example/black",

        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_left_third": "§p§1§1",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_right_third": "§p§2§1",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_left_half": "§p§1§2",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_right_half": "§p§2§2",
        // 오버라이드 가능한 변수
        "$VERTICAL_PROCESSING_no_height_key": "§p§0§0",
        // 오버라이드 가능한 변수
        "$DYNAMIC_ITEM_entry": "starlib_pkg_dynamic_sizer.common_auto_sizer",
        // 오버라이드 가능한 변수
        "$VERTICAL_PROCESSING_output_control": "starlib_pkg_button_templates.horizontal_button_template",
        // 오버라이드 가능한 변수
        "$DYNAMIC_ITEM_bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#form_button_text - '§p§4§0') = #form_button_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#form_button_text - '§p§4§0') = #form_button_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "header_buttons_factory@global.button_factory": {
        // 쌓는 방향(가로/세로)
        "orientation": "horizontal",
        // 가로/세로 크기
        "size": [
            "100%c",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$factory_item": "server_form.header_button"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "header_button@global.binding": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "horizontal",
        // 가로/세로 크기
        "size": [
            "100%y + 1px",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$key": "§p§4§0",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_style_control": "starlib_pkg_button_style.common_button_style",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "button@starlib_pkg_button_templates.hover_button": {
                    // 오버라이드 가능한 변수
                    "$HOVER_BUTTON_size": [
                        "fill",
                        "100%"
                    ],
                    // 오버라이드 가능한 변수
                    "$BUTTON_STYLE_default_texture": "textures/example/header_button",
                    // 오버라이드 가능한 변수
                    "$HOVER_BUTTON_hover_control": "server_form.hover",
                    // 오버라이드 가능한 변수
                    "$HOVER_BUTTON_image_size": [
                        13,
                        13
                    ]
                }
            },
            {
                // ???/?? ??
                "padding": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        1,
                        0
                    ]
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "header@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/example/header"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button@starlib_pkg_screen_common.async_close_button": {
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_size": [
            "100%y",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_icon_size": [
            15,
            15
        ],
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_icon_texture": "textures/ui/close_button_default_light",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_default_control": "server_form.close_button_default",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_hover_control": "server_form.hover",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_pressed_control": "server_form.hover"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "hover@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/example/hover",
        // 가로/세로 크기
        "size": [
            "100% + 2px",
            "100% + 2px"
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button_default@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/example/close_button"
    }
}
```








server_form (4).jsonc
StarLib · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form (4).jsonc
// 분류: StarLib / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 BundleUI example | by pipa_ngry
//   Use it only for educational purposes!
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "server_form",
    // 다른 템플릿을 가져와서 확장(상속)
    "third_party_server_screen@common.base_screen": {
        // 오버라이드 가능한 변수
        "$screen_content": "server_form.server_form",
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
    },
    // ???/?? ??
    "server_form": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "server_form_factory": {
                    // 리스트를 자동으로 생성하는 공장
                    "type": "factory",
                    // 팩토리 템플릿 매핑
                    "control_ids": {
                        // ?? ??
                        "long_form": "@server_form.long_form",
                        // ?? ??
                        "custom_form": "@server_form.custom_form"
                    }
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "long_form@starlib_pkg_screen_template.screen": {
        // 오버라이드 가능한 변수
        "$SCREEN_TEMPLATE_fade_enabled": true,
        // 오버라이드 가능한 변수
        "$SCREEN_TEMPLATE_fade_alpha": 0.5,

        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_background_texture": "textures/bundle/background",
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_sub_content_control": "server_form.footer",
        // 오버라이드 가능한 변수
        "$form_size": [
            255,
            225
        ],
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_content_size": [
            "100% - 28px",
            "100% - 9px"
        ],
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_content_offset": [
            0,
            -1
        ],
        // 오버라이드 가능한 변수
        "$button_item_control": "server_form.advanced_dynamic_button",

        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_style_control": "server_form.header",
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_close_button_control": "server_form.close_button",
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_title_control": "server_form.title",
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_size": [
            "100%",
            36
        ],
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_contents_size": [
            "100% - 20px",
            "100% - 8px"
        ],
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_contents_offset": [
            0,
            -2
        ],

        // 오버라이드 가능한 변수
        "$scroll_bar_left_padding_size": [
            1,
            0
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "header@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/bundle/header"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "footer@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/bundle/footer",
        // 가로/세로 크기
        "size": [
            "100%",
            24
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button@starlib_pkg_screen_common.close_button_template": {
        // 기준점(어디에서 시작할지)
        "anchor_from": "right_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "right_middle",
        // 기준점에서 이동하는 거리
        "offset": [
            1,
            -1
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "title@starlib_pkg_screen_common.title_template": {
        // ?? ??
        "text_alignment": "left"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "advanced_dynamic_button@starlib_pkg_dynamic_structure.dynamic_item_template": {
        // 오버라이드 가능한 변수
        "$DYNAMIC_ITEM_entry": "starlib_pkg_dynamic_sizer.common_auto_sizer",
        // 오버라이드 가능한 변수
        "$VERTICAL_PROCESSING_output_control": "server_form.advanced_button",
        // 오버라이드 가능한 변수
        "$VERTICAL_PROCESSING_no_height_key": "§m§0§0",
        // 오버라이드 가능한 변수
        "$VERTICAL_PROCESSING_sizer_template_control": "server_form.vertical_sizer",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_left_third": "§m§1§0",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_right_third": "§m§2§0",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_left_half": "§m§1§1",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_right_half": "§m§2§1"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "advanced_button@starlib_pkg_button_common.common_button": {
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_panel_control": "starlib_pkg_button_common.disabled_variable_button_panel",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_disabled_variable_key": "§m§3§2",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_style_control": "starlib_pkg_button_style.disabled_variable_button_style",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_content_control": "starlib_pkg_dynamic_common.common_dynamic_button_content",
        // 오버라이드 가능한 변수
        "$DYNAMIC_CONTENT_switch_key": "§m§0§2",
        // 오버라이드 가능한 변수
        "$DYNAMIC_CONTENT_text_control": "server_form.text_content",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_hover_control": "server_form.hover",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_pressed_control": "server_form.hover",
        // 오버라이드 가능한 변수
        "$DYNAMIC_CONTENT_image_size": [
            "100% - 4px",
            "100% - 4px"
        ],
        // 가로/세로 크기
        "size": [
            "100% - 2px",
            "100% - 2px"
        ],
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_disabled_variable_texture": "textures/bundle/button/disabled/default",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_default_variable_controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "default_default@starlib_pkg_button_style.reverse_style_variable": {
                    // 사용할 이미지 경로
                    "texture": "textures/bundle/button/default",
                    // 오버라이드 가능한 변수
                    "$key": "§m§3§1"
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "alt_default@starlib_pkg_button_style.style_variable": {
                    // 사용할 이미지 경로
                    "texture": "textures/bundle/button/alt",
                    // 오버라이드 가능한 변수
                    "$key": "§m§3§1"
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "hover@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/bundle/button/hover/default",
        // 가로/세로 크기
        "size": [
            "100% - 2px",
            "100% - 2px"
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "vertical_sizer@starlib_pkg_dynamic_structure.vertical_sizer_template": {
        // 오버라이드 가능한 변수
        "$VERTICAL_SIZER_controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "size_default@global.reverse_binding": {
                    // 오버라이드 가능한 변수
                    "$key": "§m§0§1",
                    // 가로/세로 크기
                    "size": [
                        0,
                        30
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "size_custom@global.binding": {
                    // 오버라이드 가능한 변수
                    "$key": "§m§0§1",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%x"
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "text_content": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%c"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "default@global.reverse_binding": {
                    // 오버라이드 가능한 변수
                    "$key": "§m§4§0",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%c"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "button_text@starlib_pkg_button_common.button_text": {}
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "sided@global.binding": {
                    // 오버라이드 가능한 변수
                    "$key": "§m§4§0",
                    // 가로/세로 크기
                    "size": [
                        "100% - 8px",
                        "100%c"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "button_text@starlib_pkg_button_common.button_text": {
                                // ??
                                "font_type": "MinecraftTen",
                                // ?? ??
                                "text_alignment": "left"
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```








server_form.jsonc
StarLib · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form.jsonc
// 분류: StarLib / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 PeanutUI example | by pipa_ngry
//   Use it only for educational purposes!
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "server_form",
    // 다른 템플릿을 가져와서 확장(상속)
    "third_party_server_screen@common.base_screen": {
        // 오버라이드 가능한 변수
        "$screen_content": "server_form.server_form",
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
    },
    // ???/?? ??
    "server_form": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "server_form_factory": {
                    // 리스트를 자동으로 생성하는 공장
                    "type": "factory",
                    // 팩토리 템플릿 매핑
                    "control_ids": {
                        // ?? ??
                        "long_form": "@server_form.long_form",
                        // ?? ??
                        "custom_form": "@server_form.custom_form"
                    }
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "long_form@starlib_pkg_screen_template.screen": {
        // 오버라이드 가능한 변수
        "$SCREEN_TEMPLATE_frame_enabled": true,
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_style_control": "server_form.header",
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_contents_offset": [
            0,
            -1
        ],
        // 오버라이드 가능한 변수
        "$FORM_TEMPLATE_background_texture": "textures/example_2/background",
        // 오버라이드 가능한 변수
        "$button_item_control": "starlib_pkg_button_templates.horizontal_button",
        // 오버라이드 가능한 변수
        "$HORIZONTAL_BUTTON_image_background_texture": "textures/example_2/image_background",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_default_texture": "textures/example_2/button",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_hover_control": "server_form.hover"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "header@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/example_2/header"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "hover@style.image": {
        // 사용할 이미지 경로
        "texture": "textures/example_2/border",
        // 가로/세로 크기
        "size": [
            "100% + 2px",
            "100% + 2px"
        ]
    }
}
```












### StarLibV2-1.0.3.3


### StarLibV2-1.0.3.3
_ui_defs.json
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: _ui_defs.json
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ???/?? ??
    "ui_defs": [
      "ui/starlib2/global.jsonc",
      "ui/starlib2/style.jsonc",
      "ui/starlib2/package_screen/screen_template.jsonc",
      "ui/starlib2/package_screen/screen_common.jsonc",
      "ui/starlib2/package_button/common_button.jsonc",
      "ui/starlib2/package_button/button_templates.jsonc",
      "ui/starlib2/package_button/button_style.jsonc",
      "ui/starlib2/package_dynamic/common_dynamic.jsonc",
      "ui/starlib2/package_dynamic/dynamic_sizer.jsonc",
      "ui/starlib2/package_dynamic/dynamic_structure.jsonc",
      "ui/starlib2/package_custom/custom_toggles.jsonc",
      "ui/starlib2/package_custom/common_custom.jsonc",
      "ui/starlib2/package_custom/custom_edit_box.jsonc",
      "ui/starlib2/package_custom/custom_renders.jsonc"
    ]
  }
```








button_style.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: button_style.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_button_style",
    // ???/?? ??
    "common_button_style": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_default|default": "starlib_pkg_button_style.button_style_template",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_default_texture|default": "textures/ui/Black",
        // 이 안에 들어가는 부품 목록
        "controls": "$BUTTON_STYLE_variables",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_variables|default": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "default_default@$BUTTON_STYLE_default": {
                    // 사용할 이미지 경로
                    "texture": "$BUTTON_STYLE_default_texture"
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "button_style_template@style.image": {
        // 게임 값과 연결하는 규칙 목록
        "bindings": "$bindings",
        // 오버라이드 가능한 변수
        "$bindings|default": [],
        // 겹치는 순서(숫자 클수록 위)
        "layer": "$layer",
        // 오버라이드 가능한 변수
        "$layer|default": 24
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "style_variable@starlib_pkg_button_style.button_style_template": {
        // 오버라이드 가능한 변수
        "$key|default": "",
        // 오버라이드 가능한 변수
        "$bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not((#form_button_text - $key) = #form_button_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not((#form_button_text - $key) = #form_button_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "reverse_style_variable@starlib_pkg_button_style.button_style_template": {
        // 오버라이드 가능한 변수
        "$key|default": "",
        // 오버라이드 가능한 변수
        "$bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#form_button_text - $key) = #form_button_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#form_button_text - $key) = #form_button_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "disabled_variable_button_style@starlib_pkg_button_style.common_button_style": {
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_disabled_variable_key|default": "",
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_variables": [
            {
                // ???/?? ??
                "default": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%"
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$bindings",
                    // 오버라이드 가능한 변수
                    "$bindings": [
                        {
                            // 목록 이름
                            "binding_collection_name": "form_buttons",
                            // 가져올 값 이름
                            "binding_name": "#form_button_text",
                            // 목록 데이터를 반복 연결
                            "binding_type": "collection"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "((#form_button_text - $BUTTON_STYLE_disabled_variable_key) = #form_button_text)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "((#form_button_text - $BUTTON_STYLE_disabled_variable_key) = #form_button_text)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#enabled"
                        }
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": "$BUTTON_STYLE_default_variable_controls",
                    // 오버라이드 가능한 변수
                    "$BUTTON_STYLE_default_variable_controls|default": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "default_default@starlib_pkg_button_style.button_style_template": {
                                // 사용할 이미지 경로
                                "texture": "$BUTTON_STYLE_default_variable_texture",
                                // 오버라이드 가능한 변수
                                "$BUTTON_STYLE_default_variable_texture|default": ""
                            }
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "disabled": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%"
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$bindings",
                    // 오버라이드 가능한 변수
                    "$bindings": [
                        {
                            // 목록 이름
                            "binding_collection_name": "form_buttons",
                            // 가져올 값 이름
                            "binding_name": "#form_button_text",
                            // 목록 데이터를 반복 연결
                            "binding_type": "collection"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(not((#form_button_text - $BUTTON_STYLE_disabled_variable_key) = #form_button_text))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(not((#form_button_text - $BUTTON_STYLE_disabled_variable_key) = #form_button_text))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#enabled"
                        }
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": "$BUTTON_STYLE_disabled_variable_controls",
                    // 오버라이드 가능한 변수
                    "$BUTTON_STYLE_disabled_variable_controls|default": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "disabled_default@starlib_pkg_button_style.button_style_template": {
                                // 사용할 이미지 경로
                                "texture": "$BUTTON_STYLE_disabled_variable_texture",
                                // 오버라이드 가능한 변수
                                "$BUTTON_STYLE_disabled_variable_texture|default": ""
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```








button_templates.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: button_templates.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_button_templates",
    // ???/?? ??
    "common_vertical_stack_item": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%c"
        ],
        // 오버라이드 가능한 변수
        "$VERTICAL_ITEM_button_control|default": "style.dme_09",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "top_margin": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": "$VERTICAL_ITEM_top_margin_size",
                    // 오버라이드 가능한 변수
                    "$VERTICAL_ITEM_top_margin_size|default": [
                        0,
                        1
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "button@$VERTICAL_ITEM_button_control": {}
            },
            {
                // ???/?? ??
                "bottom_margin": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": "$VERTICAL_ITEM_bottom_margin_size",
                    // 오버라이드 가능한 변수
                    "$VERTICAL_ITEM_bottom_margin_size|default": [
                        0,
                        1
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "bordered_button_template": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$BORDERED_BUTTON_size",
        // 오버라이드 가능한 변수
        "$BORDERED_BUTTON_size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$BORDERED_BUTTON_background_control|default": "style.black",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "button_background@$BORDERED_BUTTON_background_control": {
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 16
                }
            },
            {
                // ???/?? ??
                "button": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100% - 2px",
                        "100% - 2px"
                    ],
                    // 오버라이드 가능한 변수
                    "$BORDERED_BUTTON_default_control|default": "style.dme_10",
                    // 이 안에 들어가는 부품 목록
                    "controls": "$BORDERED_BUTTON_inner",
                    // 오버라이드 가능한 변수
                    "$BORDERED_BUTTON_inner|default": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "root@$BORDERED_BUTTON_default_control": {
                                // 가로/세로 크기
                                "size": [
                                    "100%",
                                    "100%"
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "horizontal_button@starlib_pkg_button_templates.common_vertical_stack_item": {
        // 오버라이드 가능한 변수
        "$VERTICAL_ITEM_button_control": "starlib_pkg_button_templates.horizontal_button_template"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "horizontal_button_template@starlib_pkg_button_templates.bordered_button_template": {
        // 가로/세로 크기
        "size": "$HORIZONTAL_BUTTON_size",
        // 오버라이드 가능한 변수
        "$HORIZONTAL_BUTTON_size|default": [
            "100%",
            32
        ],
        // 오버라이드 가능한 변수
        "$BORDERED_BUTTON_inner": [
            {
                // ???/?? ??
                "horizontal_button": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "horizontal",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "image@starlib_pkg_button_templates.horizontal_button_image": {}
                        },
                        {
                            // ???/?? ??
                            "root": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    "fill",
                                    "100%"
                                ],
                                // 오버라이드 가능한 변수
                                "$HORIZONTAL_BUTTON_root_control|default": "starlib_pkg_button_common.common_button",
                                // 오버라이드 가능한 변수
                                "$HORIZONTAL_BUTTON_content_control|default": "starlib_pkg_button_common.button_text",
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "root@$HORIZONTAL_BUTTON_root_control": {}
                                    },
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "content@$HORIZONTAL_BUTTON_content_control": {}
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
    "horizontal_button_image": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "horizontal",
        // 가로/세로 크기
        "size": "$HORIZONTAL_BUTTON_image_panel_size",
        // 오버라이드 가능한 변수
        "$HORIZONTAL_BUTTON_image_panel_size|default": [
            "100%y + 1px",
            "100%"
        ],
        // 게임 값과 연결하는 규칙 목록
        "bindings": "$HORIZONTAL_BUTTON_image_bindings",
        // 오버라이드 가능한 변수
        "$HORIZONTAL_BUTTON_image_bindings|default": [
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
                "source_property_name": "(not((#texture = '') or (#texture = 'loading')))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "imame_root": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "fill",
                        "100%"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "image@starlib_pkg_button_common.button_image": {
                                // 가로/세로 크기
                                "size": [
                                    "100%",
                                    "100%"
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "image_background@style.image": {
                                // 사용할 이미지 경로
                                "texture": "$HORIZONTAL_BUTTON_image_background_texture",
                                // 오버라이드 가능한 변수
                                "$HORIZONTAL_BUTTON_image_background_texture|default": "",
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 30
                            }
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "margin": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": "$HORIZONTAL_BUTTON_image_margin_size",
                    // 오버라이드 가능한 변수
                    "$HORIZONTAL_BUTTON_image_margin_size|default": [
                        1,
                        0
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "cubic_button": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$CUBIC_BUTTON_size",
        // 오버라이드 가능한 변수
        "$CUBIC_BUTTON_size|default": [
            "100%",
            "100%x"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root@starlib_pkg_button_common.common_button": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "content@common_cubic_button_content": {}
            }
        ]
    },
    // ???/?? ??
    "common_cubic_button_content": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": "$CUBIC_BUTTON_content_size",
        // 오버라이드 가능한 변수
        "$CUBIC_BUTTON_content_size|default": [
            "100%",
            "100%"
        ],
        // 기준점에서 이동하는 거리
        "offset": "$CUBIC_BUTTON_content_offset",
        // 오버라이드 가능한 변수
        "$CUBIC_BUTTON_content_offset|default": [
            0,
            0
        ],
        // ???/?? ??
        "max_size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$CUBIC_BUTTON_text_control|default": "starlib_pkg_button_common.button_text",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "image_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "fill"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "button_image@starlib_pkg_button_common.button_image": {
                                // 가로/세로 크기
                                "size": "$CUBIC_BUTTON_image_size",
                                // 오버라이드 가능한 변수
                                "$CUBIC_BUTTON_image_size|default": [
                                    "100%",
                                    "100%"
                                ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": "$CUBIC_BUTTON_image_bindings",
                                // 오버라이드 가능한 변수
                                "$CUBIC_BUTTON_image_bindings|default": "$BUTTON_IMAGE_bindings"
                            }
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "button_text@$CUBIC_BUTTON_text_control": {}
            },
            {
                // ???/?? ??
                "bottom_padding": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": "$CUBIC_BUTTON_bottom_padding_size",
                    // 오버라이드 가능한 변수
                    "$CUBIC_BUTTON_bottom_padding_size|default": [
                        0,
                        2
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "big_button": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$BIG_BUTTON_size",
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_size|default": [
            "100%",
            "100%x"
        ],
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_content_control|default": "starlib_pkg_button_templates.common_big_button_content",
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_image_overlap_control|default": "global.empty_panel",
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_image_size|default": [
            "100% - 4px",
            "100% - 4px"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root@starlib_pkg_button_common.common_button": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "image@starlib_pkg_button_common.button_image": {
                    // 가로/세로 크기
                    "size": "$BIG_BUTTON_image_size",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 32,
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$BIG_BUTTON_image_bindings",
                    // 오버라이드 가능한 변수
                    "$BIG_BUTTON_image_bindings|default": [
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
                            "source_property_name": "(not((#texture = '') or (#texture = 'loading')))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ],
                    // ?? ??
                    "fill": "$BIG_BUTTON_enable_image_fill",
                    // 오버라이드 가능한 변수
                    "$BIG_BUTTON_enable_image_fill|default": false
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "image_overlap@$BIG_BUTTON_image_overlap_control": {
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 38,
                    // 가로/세로 크기
                    "size": "$BIG_BUTTON_overlap_size",
                    // 오버라이드 가능한 변수
                    "$BIG_BUTTON_overlap_size|default": "$BIG_BUTTON_image_size"
                }
            },
            {
                // ???/?? ??
                "content_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": "$BIG_BUTTON_content_size",
                    // 오버라이드 가능한 변수
                    "$BIG_BUTTON_content_size|default": [
                        "100% - 4px",
                        "100% - 4px"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "content@$BIG_BUTTON_content_control": {
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 42,
                                // ???/?? ??
                                "max_size": [
                                    "100%",
                                    "100%"
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "common_big_button_content@starlib_pkg_button_common.button_text": {
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_CONTENT_text_alignment|default": "left",
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_CONTENT_font_type|default": "MinecraftTen",
        // 오버라이드 가능한 변수
        "$BIG_BUTTON_CONTENT_font_scale_factor|default": 1.2,
        // ?? ??
        "text_alignment": "$BIG_BUTTON_CONTENT_text_alignment",
        // ??
        "font_type": "$BIG_BUTTON_CONTENT_font_type",
        // ?? ?? ??
        "font_scale_factor": "$BIG_BUTTON_CONTENT_font_scale_factor",
        // 기준점(어디에서 시작할지)
        "anchor_from": "bottom_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "bottom_middle"
    },
    // ???/?? ??
    "grid_item_template": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$GRID_ITEM_size",
        // 오버라이드 가능한 변수
        "$GRID_ITEM_size|default": [
            "100%",
            "100%x"
        ],
        // 오버라이드 가능한 변수
        "$GRID_ITEM_root_control|default": "style.dme_11",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root@$GRID_ITEM_root_control": {
                    // 가로/세로 크기
                    "size": "$GRID_ITEM_root_size",
                    // 오버라이드 가능한 변수
                    "$GRID_ITEM_root_size|default": [
                        "100% - 2px",
                        "100% - 2px"
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$GRID_ITEM_BINDINGS",
                    // 오버라이드 가능한 변수
                    "$GRID_ITEM_BINDINGS|default": []
                }
            }
        ]
    },
    // ???/?? ??
    "hover_button": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$HOVER_BUTTON_size",
        // 오버라이드 가능한 변수
        "$HOVER_BUTTON_size|default": [
            "100%",
            "100%x"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "content@starlib_pkg_button_common.button_image": {
                    // 가로/세로 크기
                    "size": "$HOVER_BUTTON_image_size",
                    // 오버라이드 가능한 변수
                    "$HOVER_BUTTON_image_size|default": [
                        "100% - 8px",
                        "100% - 8px"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root@starlib_pkg_button_common.common_button": {
                    // 오버라이드 가능한 변수
                    "$COMMON_BUTTON_hover_control": "starlib_pkg_button_templates.hover_button_hover_root"
                }
            }
        ]
    },
    // ???/?? ??
    "hover_button_hover_root": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$HOVER_BUTTON_hover_control|default": "style.hightlight",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root@$HOVER_BUTTON_hover_control": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "hover_text@starlib_pkg_button_common.hover_text": {}
            }
        ]
    }
}
```








common_button.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: common_button.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_button_common",
    // 다른 템플릿을 가져와서 확장(상속)
    "common_button_panel@common.button": {
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.form_button_click",
        // 오버라이드 가능한 변수
        "$default_state": false,
        // 가로/세로 크기
        "size": [
          "100%",
          "100%"
        ],
        // ??? ??
        "sound_name": "$COMMON_BUTTON_sound_name",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_sound_name|default": "random.click",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_hover_control|default": "style.hightlight",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_pressed_control|default": "$COMMON_BUTTON_hover_control",
        // 게임 값과 연결하는 규칙 목록
        "bindings": "$COMMON_BUTTON_bindings",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_bindings|default": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 목록 인덱스/현재 항목 정보 제공
                "binding_type": "collection_details"
            }
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "hover@$COMMON_BUTTON_hover_control": {
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 225
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "pressed@$COMMON_BUTTON_pressed_control": {
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 225
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "sensible_button_panel@common.button": {
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.form_button_click",
        // 가로/세로 크기
        "size": [
          "100%",
          "100%"
        ],
        // ??? ??
        "sound_name": "$SENSIBLE_BUTTON_sound_name",
        // 오버라이드 가능한 변수
        "$SENSIBLE_BUTTON_sound_name|default": "random.click",
        // 오버라이드 가능한 변수
        "$SENSIBLE_BUTTON_default_control|default": "global.empty_panel",
        // 오버라이드 가능한 변수
        "$SENSIBLE_BUTTON_hover_control|default": "global.empty_panel",
        // 오버라이드 가능한 변수
        "$SENSIBLE_BUTTON_pressed_control|default": "$SENSIBLE_BUTTON_hover_control",
        // 게임 값과 연결하는 규칙 목록
        "bindings": "$SENSIBLE_BUTTON_bindings",
        // 오버라이드 가능한 변수
        "$SENSIBLE_BUTTON_bindings|default": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 목록 인덱스/현재 항목 정보 제공
                "binding_type": "collection_details"
            }
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "default@$SENSIBLE_BUTTON_default_control": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "hover@$SENSIBLE_BUTTON_hover_control": {
                    // 가로/세로 크기
                    "size": "$SENSIBLE_BUTTON_hover_size",
                    // 오버라이드 가능한 변수
                    "$SENSIBLE_BUTTON_hover_size|default": [
                        "100% + 2px",
                        "100% + 2px"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "pressed@$SENSIBLE_BUTTON_pressed_control": {}
            }
        ]
    },
    // ???/?? ??
    "common_button": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_panel_control|default": "starlib_pkg_button_common.common_button_panel",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_style_control|default": "starlib_pkg_button_style.common_button_style",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_content_control|default": "global.empty_panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "common_button_panel@$COMMON_BUTTON_panel_control": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "common_button_style@$COMMON_BUTTON_style_control": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "common_button_content@$COMMON_BUTTON_content_control": {
                    // ???/?? ??
                    "max_size": [
                        "100%",
                        "100%"
                    ]
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "disabled_variable_button_panel@starlib_pkg_button_common.common_button_panel": {
        // 오버라이드 가능한 변수
        "$BUTTON_STYLE_disabled_variable_key|default": "",
        // 오버라이드 가능한 변수
        "$COMMON_BUTTON_bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 목록 인덱스/현재 항목 정보 제공
                "binding_type": "collection_details"
            },
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#form_button_text - $BUTTON_STYLE_disabled_variable_key) = #form_button_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#form_button_text - $BUTTON_STYLE_disabled_variable_key) = #form_button_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "button_image@style.image": {
        // 겹치는 순서(숫자 클수록 위)
        "layer": 235,
        // 게임 값과 연결하는 규칙 목록
        "bindings": "$BUTTON_IMAGE_bindings",
        // 오버라이드 가능한 변수
        "$BUTTON_IMAGE_bindings|default": [
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
                "source_property_name": "(not((#texture = '') or (#texture = 'loading')))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "button_text@style.label": {
        // 보여줄 글자
        "text": "#form_button_text",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not(#form_button_text = ''))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ],
        // 오버라이드 가능한 변수
        "$label_layer": 245
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "range_selection_button_text@style.label": {
        // 보여줄 글자
        "text": "#text",
        // 오버라이드 가능한 변수
        "$from|default": "",
        // 오버라이드 가능한 변수
        "$to|default": "",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(((('%.' + $to + 's') * #form_button_text) - (('%.' + $from + 's') * #form_button_text)) - '\t')",
                // 결과가 들어갈 속성
                "target_property_name": "#text"
            },
            {
                // 계산식/참조 값
                "source_property_name": "(not(#text = ''))",
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ],
        // 오버라이드 가능한 변수
        "$label_layer": 245
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "reverse_conditions_range_selection_button_text@style.label": {
        // 보여줄 글자
        "text": "#text",
        // 오버라이드 가능한 변수
        "$from|default": "",
        // 오버라이드 가능한 변수
        "$to|default": "",
        // 오버라이드 가능한 변수
        "$key|default": "",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(((('%.' + $to + 's') * #form_button_text) - (('%.' + $from + 's') * #form_button_text)) - '\t')",
                // 결과가 들어갈 속성
                "target_property_name": "#text"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((not(#text = '')) and ((#form_button_text - $key) = #form_button_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((not(#text = '')) and ((#form_button_text - $key) = #form_button_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ],
        // 오버라이드 가능한 변수
        "$label_layer": 245
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "conditions_range_selection_button_text@style.label": {
        // 보여줄 글자
        "text": "#text",
        // 오버라이드 가능한 변수
        "$from|default": "",
        // 오버라이드 가능한 변수
        "$to|default": "",
        // 오버라이드 가능한 변수
        "$key|default": "",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(((('%.' + $to + 's') * #form_button_text) - (('%.' + $from + 's') * #form_button_text)) - '\t')",
                // 결과가 들어갈 속성
                "target_property_name": "#text"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((not(#text = '')) and (not((#form_button_text - $key) = #form_button_text)))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((not(#text = '')) and (not((#form_button_text - $key) = #form_button_text)))",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ],
        // 오버라이드 가능한 변수
        "$label_layer": 245
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "hover_text@common.hover_text": {
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 목록 데이터를 반복 연결
                "binding_type": "collection",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#hover_text",
                // 가져올 값 이름
                "binding_name": "#form_button_text"
            }
        ],
        // 겹치는 순서(숫자 클수록 위)
        "layer": 255
    }
}
```








common_custom.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: common_custom.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_custom_common",
    //search_conditions_element_binding using Theorist's search bar template.
    "search_conditions_element_binding": {
        // 이 컨트롤 안에서 쓰는 임시 저장소
        "property_bag": {
            // ???/??? ?
            "#default_search": "default_search"
        },
        // 오버라이드 가능한 변수
        "$search_binding_name|default": "search_field",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection",
                // 목록 이름
                "binding_collection_name": "form_buttons"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // ?? ??
                "source_control_name": "$search_binding_name",
                // 계산식/참조 값
                "source_property_name": "#item_name",
                // 결과가 들어갈 속성
                "target_property_name": "#search"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "#default_search",
                // 결과가 들어갈 속성
                "target_property_name": "#search",
                // ?? ???
                "binding_condition": "once"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(#search = '')",
                // 결과가 들어갈 속성
                "target_property_name": "#is_not_empty"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not ((#form_button_text - #search) = #form_button_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#is_being_searched"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(#is_not_empty or #is_being_searched)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    },
    // ???/?? ??
    "text_range_search_conditions_element_binding": {
        // 오버라이드 가능한 변수
        "$from|default": "",
        // 오버라이드 가능한 변수
        "$to|default": "",
        // 이 컨트롤 안에서 쓰는 임시 저장소
        "property_bag": {
            // ???/??? ?
            "#default_search": "default_search"
        },
        // 오버라이드 가능한 변수
        "$search_binding_name|default": "search_field",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection",
                // 목록 이름
                "binding_collection_name": "form_buttons"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(((('%.' + $to + 's') * #form_button_text) - (('%.' + $from + 's') * #form_button_text)) - '\t')",
                // 결과가 들어갈 속성
                "target_property_name": "#text"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // ?? ??
                "source_control_name": "$search_binding_name",
                // 계산식/참조 값
                "source_property_name": "#item_name",
                // 결과가 들어갈 속성
                "target_property_name": "#search"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "#default_search",
                // 결과가 들어갈 속성
                "target_property_name": "#search",
                // ?? ???
                "binding_condition": "once"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(#search = '')",
                // 결과가 들어갈 속성
                "target_property_name": "#is_not_empty"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not ((#text - #search) = #text))",
                // 결과가 들어갈 속성
                "target_property_name": "#is_being_searched"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(#is_not_empty or #is_being_searched)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    }
}
```








common_dynamic.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: common_dynamic.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_dynamic_common",
    // ???/?? ??
    "common_dynamic_header": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$DYNAMIC_HEADER_size",
        // 오버라이드 가능한 변수
        "$DYNAMIC_HEADER_size|default": [
            "100%",
            24
        ],
        // 오버라이드 가능한 변수
        "$DYNAMIC_HEADER_background_control|default": "style.black",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "root": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "horizontal",
                    // 가로/세로 크기
                    "size": "$DYNAMIC_HEADER_root_size",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_HEADER_root_size|default": [
                        "100% - 2px",
                        "100% - 2px"
                    ],
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_HEADER_header_contents_control|default": "global.empty_panel",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_HEADER_right_header_contents_control|default": "global.empty_panel",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_HEADER_style_control|default": "style.black_alpha",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_HEADER_close_button_control|default": "starlib_pkg_dynamic_common.common_dynamic_header_close_button",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "header_contents@$DYNAMIC_HEADER_header_contents_control": {}
                        },
                        {
                            // ???/?? ??
                            "titleline": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    "fill",
                                    "100%"
                                ],
                                // 오버라이드 가능한 변수
                                "$DYNAMIC_HEADER_title_control|default": "starlib_pkg_screen_common.title_template",
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "header_style@$DYNAMIC_HEADER_style_control": {
                                            // 겹치는 순서(숫자 클수록 위)
                                            "layer": 16
                                        }
                                    },
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "title@$DYNAMIC_HEADER_title_control": {}
                                    }
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "right_header_contents@$DYNAMIC_HEADER_right_header_contents_control": {}
                        },
                        {
                            // ???/?? ??
                            "padding": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    1,
                                    0
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "close_button@$DYNAMIC_HEADER_close_button_control": {}
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "background@$DYNAMIC_HEADER_background_control": {
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 12
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "common_dynamic_header_close_button@starlib_pkg_screen_common.close_button_template": {
        // 가로/세로 크기
        "size": [
            "100%y",
            "100%"
        ]
    },
    // ???/?? ??
    "common_dynamic_button_content": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$DYNAMIC_CONTENT_image_control|default": "starlib_pkg_button_common.button_image",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "auto_padding_top@global.reverse_binding": {
                    // 오버라이드 가능한 변수
                    "$key": "$DYNAMIC_CONTENT_switch_key",
                    // 가로/세로 크기
                    "size": [
                        "fill",
                        "fill"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "image_panel@global.binding": {
                    // 오버라이드 가능한 변수
                    "$key": "$DYNAMIC_CONTENT_switch_key",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "fill"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "image_panel@$DYNAMIC_CONTENT_image_control": {
                                // 가로/세로 크기
                                "size": "$DYNAMIC_CONTENT_image_size",
                                // 오버라이드 가능한 변수
                                "$DYNAMIC_CONTENT_image_size|default": [
                                    "100%",
                                    "100%"
                                ]
                            }
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "text_content": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "vertical",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%c"
                    ],
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_CONTENT_text_control|default": "starlib_pkg_button_common.button_text",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "text_content@$DYNAMIC_CONTENT_text_control": {}
                        },
                        {
                            // ???/?? ??
                            "soft_padding": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": "$DYNAMIC_CONTENT_soft_padding_size",
                                // 오버라이드 가능한 변수
                                "$DYNAMIC_CONTENT_soft_padding_size|default": [
                                    0,
                                    2
                                ]
                            }
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "auto_padding_bottom@global.reverse_binding": {
                    // 오버라이드 가능한 변수
                    "$key": "$DYNAMIC_CONTENT_switch_key",
                    // 가로/세로 크기
                    "size": [
                        "fill",
                        "fill"
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "image_conditions_dynamic_button_content": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$DYNAMIC_CONTENT_image_control|default": "starlib_pkg_button_common.button_image",
        // 오버라이드 가능한 변수
        "$DYNAMIC_CONTENT_condition_bindings|default": [
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
                "source_property_name": "(not(#texture = ''))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ],
        // 오버라이드 가능한 변수
        "$DYNAMIC_CONTENT_reverse_condition_bindings|default": [
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
                "source_property_name": "(#texture = '')",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "auto_padding_top": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "fill",
                        "fill"
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$DYNAMIC_CONTENT_reverse_condition_bindings"
                }
            },
            {
                // ???/?? ??
                "image_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "fill"
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$DYNAMIC_CONTENT_condition_bindings",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "image_panel@$DYNAMIC_CONTENT_image_control": {
                                // 가로/세로 크기
                                "size": "$DYNAMIC_CONTENT_image_size",
                                // 오버라이드 가능한 변수
                                "$DYNAMIC_CONTENT_image_size|default": [
                                    "100%",
                                    "100%"
                                ]
                            }
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "text_content": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "vertical",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%c"
                    ],
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_CONTENT_text_control|default": "starlib_pkg_button_common.button_text",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "text_content@$DYNAMIC_CONTENT_text_control": {}
                        },
                        {
                            // ???/?? ??
                            "soft_padding": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": "$DYNAMIC_CONTENT_soft_padding_size",
                                // 오버라이드 가능한 변수
                                "$DYNAMIC_CONTENT_soft_padding_size|default": [
                                    0,
                                    2
                                ]
                            }
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "auto_padding_bottom": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "fill",
                        "fill"
                    ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$DYNAMIC_CONTENT_reverse_condition_bindings"
                }
            }
        ]
    }
}
```








custom_edit_box.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: custom_edit_box.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_custom_edit_box",
    // 다른 템플릿을 가져와서 확장(상속)
    "common_search_box@common.text_edit_box": {
        // 가로/세로 크기
        "size": "$COMMON_SEARCH_BOX_size",
        // 오버라이드 가능한 변수
        "$COMMON_SEARCH_BOX_size|default": [
            "100%",
            32
        ],
        // 오버라이드 가능한 변수
        "$COMMON_SEARCH_BOX_place_holder_text|default": "Search",
        // 오버라이드 가능한 변수
        "$COMMON_SEARCH_BOX_name|default": "search_field",
        // 오버라이드 가능한 변수
        "$text_box_name": "$COMMON_SEARCH_BOX_name",
        // 오버라이드 가능한 변수
        "$text_edit_text_control": "$COMMON_SEARCH_BOX_name",
        // 오버라이드 가능한 변수
        "$place_holder_text": "$COMMON_SEARCH_BOX_place_holder_text",
        // 오버라이드 가능한 변수
        "$COMMON_SEARCH_BOX_clear_button_enabled|default": false,
        // 오버라이드 가능한 변수
        "$text_edit_box_clear_to_button_id": "$COMMON_SEARCH_BOX_clear_button_control",
        // 오버라이드 가능한 변수
        "$COMMON_SEARCH_BOX_clear_button_control|default": "button.search_bar_clear"
    }
}
```








custom_renders.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: custom_renders.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_custom_renders",
    // ???/?? ??
    "paperdoll_template": {
        // 특수 렌더러(그라디언트/플레이어 등)
        "type": "custom",
        // 커스텀 렌더러 종류
        "renderer": "paper_doll_renderer",
        // 기준점(어디에서 시작할지)
        "anchor_from": "center",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "center",
        // 오버라이드 가능한 변수
        "$PAPERDOLL_size|default": [
            "100%",
            "100%"
        ],
        // 기준점에서 이동하는 거리
        "offset": "$PAPERDOLL_offset",
        // 오버라이드 가능한 변수
        "$PAPERDOLL_offset|default": [
            0,
            0
        ],
        // ?? ??
        "use_selected_skin": "$PAPERDOLL_use_selected_skin",
        // 오버라이드 가능한 변수
        "$PAPERDOLL_use_selected_skin|default": true,
        // ?? ??
        "use_uuid": "$PAPERDOLL_use_uuid",
        // 오버라이드 가능한 변수
        "$PAPERDOLL_use_uuid|default": false,
        // ????? ?? ?
        "animation_reset_name": "screen_animation_reset",
        // 애니메이션 목록
        "anims": [
            "@common.screen_exit_size_animation_push",
            "@common.screen_exit_size_animation_pop",
            "@common.screen_entrance_size_animation_push",
            "@common.screen_entrance_size_animation_pop"
        ],
        // ?? ??
        "rotation": "gesture_x",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#is_appearance_visible",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#visible",
                // ?? ???
                "binding_condition": "always"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "#form_text",
                // 결과가 들어갈 속성
                "target_property_name": "#player_uuid"
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
        ],
        // 겹치는 순서(숫자 클수록 위)
        "layer": 1
    },
    // ???/?? ??
    "doll_rotation_area": {
        // 마우스/커서 따라다니는 패널
        "type": "input_panel",
        // 오버라이드 가능한 변수
        "$ROTATION_AREA_size|default": [
            "100%",
            "100%"
        ],
        // ?? ?? ?
        "gesture_tracking_button": "button.turn_doll",
        // ?? ??
        "always_handle_controller_direction": true,
        // ?? ??
        "tts_ignore_count": true,
        // 입력 키/버튼과 동작 연결
        "button_mappings": [
            {
                // ?? ?? ?
                "button_up_right_of_first_refusal": true,
                // 입력 시점(pressed 등)
                "mapping_type": "pressed",
                // 어떤 입력을 받을지
                "from_button_id": "button.menu_select",
                // 어떤 동작을 실행할지
                "to_button_id": "button.turn_doll"
            }
        ],
        // 오버라이드 가능한 변수
        "$ROTATION_AREA_root_control|default": "global.empty_panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root@$ROTATION_AREA_root_control": {}
            }
        ],
        // 겹치는 순서(숫자 클수록 위)
        "layer": 245
    },
    // ???/?? ??
    "common_paperdoll": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$COMMON_PAPERDOLL_size",
        // 오버라이드 가능한 변수
        "$COMMON_PAPERDOLL_size|default": [
            "100%",
            "100%"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root@starlib_pkg_custom_renders.doll_rotation_area": {
                    // 오버라이드 가능한 변수
                    "$ROTATION_AREA_root_control": "starlib_pkg_custom_renders.paperdoll_template",
                    // 오버라이드 가능한 변수
                    "$ROTATION_AREA_size|default": [
                        "100% - 8px",
                        "100% - 8px"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "background@style.image": {
                    // 사용할 이미지 경로
                    "texture": "$COMMON_PAPERDOLL_background_texture",
                    // 오버라이드 가능한 변수
                    "$COMMON_PAPERDOLL_background_texture|default": "",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 235
                }
            }
        ]
    },
    // ???/?? ??
    "live_render_template": {
        // 특수 렌더러(그라디언트/플레이어 등)
        "type": "custom",
        // 커스텀 렌더러 종류
        "renderer": "player_live_render",
        // 기준점(어디에서 시작할지)
        "anchor_from": "center",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "center",
        // 오버라이드 가능한 변수
        "$LIVE_RENDER_size|default": [
            "100%",
            "100%"
        ],
        // 기준점에서 이동하는 거리
        "offset": "$LIVE_RENDER_offset",
        // 오버라이드 가능한 변수
        "$LIVE_RENDER_offset|default": [
            0,
            0
        ],
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
        "layer": 245
    },
    // ???/?? ??
    "common_live_render": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$COMMON_LIVERENDER_size",
        // 오버라이드 가능한 변수
        "$COMMON_LIVERENDER_size|default": [
            "100%",
            "100%"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "root@starlib_pkg_custom_renders.live_render_template": {
                    // 오버라이드 가능한 변수
                    "$LIVE_RENDER_size|default": [
                        "100% - 8px",
                        "100% - 8px"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "background@style.image": {
                    // 사용할 이미지 경로
                    "texture": "$COMMON_LIVERENDER_background_texture",
                    // 오버라이드 가능한 변수
                    "$COMMON_LIVERENDER_background_texture|default": "",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 235
                }
            }
        ]
    }
}
```








custom_toggles.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: custom_toggles.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_custom_toggles",
    // ???/?? ??
    "common_toggle": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$COMMON_TOGGLE_size",
        // 오버라이드 가능한 변수
        "$COMMON_TOGGLE_size|default": [
            "100%",
            24
        ],
        // 오버라이드 가능한 변수
        "$COMMON_TOGGLE_toggle_text|default": "",
        // 오버라이드 가능한 변수
        "$COMMON_TOGGLE_enable_radio|default": true,
        // 오버라이드 가능한 변수
        "$COMMON_TOGGLE_toggle_name|default": "common_toggle",
        // 오버라이드 가능한 변수
        "$COMMON_TOGGLE_toggle_index|default": 0,
        // 오버라이드 가능한 변수
        "$COMMON_TOGGLE_default_state|default": 1,
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "toggle_panel@common_toggles.light_text_toggle": {
                    // 오버라이드 가능한 변수
                    "$default_border_visible": false,
                    // 오버라이드 가능한 변수
                    "$hover_border_visible": false,
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%"
                    ],
                    // 오버라이드 가능한 변수
                    "$toggle_name": "common_toggle",
                    // 오버라이드 가능한 변수
                    "$button_text": "$COMMON_TOGGLE_toggle_text",
                    // 오버라이드 가능한 변수
                    "$toggle_view_binding_name": "$COMMON_TOGGLE_toggle_name",
                    // 오버라이드 가능한 변수
                    "$radio_toggle_group": "$COMMON_TOGGLE_enable_radio",
                    // 오버라이드 가능한 변수
                    "$toggle_group_default_selected": "$COMMON_TOGGLE_default_state",
                    // 오버라이드 가능한 변수
                    "$toggle_group_forced_index": "$COMMON_TOGGLE_toggle_index"
                }
            }
        ]
    },
    // ???/?? ??
    "tab_view_binding": {
        // 오버라이드 가능한 변수
        "$toggle_name|default": "common_toggle",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // ?? ??
                "source_control_name": "$toggle_name",
                // 계산식/참조 값
                "source_property_name": "#toggle_state",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    }
}
```








dynamic_sizer.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: dynamic_sizer.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_dynamic_sizer",
    // ???/?? ??
    "third_sizer_template": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "horizontal",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%cm"
        ],
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_third_output|default": "style.dme_06",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "left_padding@global.binding": {
                    // 오버라이드 가능한 변수
                    "$BUTTON_SIZER_left_third|default": "",
                    // 오버라이드 가능한 변수
                    "$key": "$BUTTON_SIZER_left_third",
                    // 가로/세로 크기
                    "size": [
                        "33.3%",
                        0
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "output@$BUTTON_SIZER_third_output": {
                    // 가로/세로 크기
                    "size": [
                        "fill",
                        "100%c"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "right_padding@global.binding": {
                    // 오버라이드 가능한 변수
                    "$BUTTON_SIZER_right_third|default": "",
                    // 오버라이드 가능한 변수
                    "$key": "$BUTTON_SIZER_right_third",
                    // 가로/세로 크기
                    "size": [
                        "33.3%",
                        0
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "half_sizer_template": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "horizontal",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%cm"
        ],
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_half_output|default": "style.dme_07",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "left_padding@global.binding": {
                    // 오버라이드 가능한 변수
                    "$BUTTON_SIZER_left_half|default": "",
                    // 오버라이드 가능한 변수
                    "$key": "$BUTTON_SIZER_left_half",
                    // 가로/세로 크기
                    "size": [
                        "50%",
                        0
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "output@$BUTTON_SIZER_half_output": {
                    // 가로/세로 크기
                    "size": [
                        "fill",
                        "100%c"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "right_padding@global.binding": {
                    // 오버라이드 가능한 변수
                    "$BUTTON_SIZER_right_half|default": "",
                    // 오버라이드 가능한 변수
                    "$key": "$BUTTON_SIZER_right_half",
                    // 가로/세로 크기
                    "size": [
                        "50%",
                        0
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "custom_sizer_template": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "horizontal",
        // 가로/세로 크기
        "size": "$BUTTON_SIZER_custom_panel_size",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_custom_panel_size|default": [
            "100%",
            "100%cm"
        ],
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_custom_output|default": "style.dme_08",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_custom_size|default": [
            0,
            0
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "left_padding@global.binding": {
                    // 오버라이드 가능한 변수
                    "$BUTTON_SIZER_left_custom|default": "",
                    // 오버라이드 가능한 변수
                    "$key": "$BUTTON_SIZER_left_custom",
                    // 가로/세로 크기
                    "size": "$BUTTON_SIZER_custom_size"
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "output@$BUTTON_SIZER_custom_output": {
                    // 가로/세로 크기
                    "size": "$BUTTON_SIZER_custom_output_size",
                    // 오버라이드 가능한 변수
                    "$BUTTON_SIZER_custom_output_size|default": [
                        "fill",
                        "100%c"
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "right_padding@global.binding": {
                    // 오버라이드 가능한 변수
                    "$BUTTON_SIZER_right_custom|default": "",
                    // 오버라이드 가능한 변수
                    "$key": "$BUTTON_SIZER_right_custom",
                    // 가로/세로 크기
                    "size": "$BUTTON_SIZER_custom_size"
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "common_auto_sizer@starlib_pkg_dynamic_sizer.third_sizer_template": {
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_third_output": "starlib_pkg_dynamic_sizer.half_sizer_template",
        // 오버라이드 가능한 변수
        "$BUTTON_SIZER_half_output": "starlib_pkg_dynamic_structure.vertical_processing_panel"
    }
}
```








dynamic_structure.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: dynamic_structure.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_dynamic_structure",
    // ???/?? ??
    "dynamic_item_with_background": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%c"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "top_padding@style.image": {
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_top_padding_key|default": "",
                    // 가로/세로 크기
                    "size": "$DYNAMIC_ITEM_top_padding_size",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_top_padding_size|default": [
                        "100%",
                        3
                    ],
                    // 사용할 이미지 경로
                    "texture": "$DYNAMIC_ITEM_top_padding_texture",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_top_padding_texture|default": "",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$DYNAMIC_ITEM_top_padding_bindings",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_top_padding_bindings|default": [
                        {
                            // 목록 이름
                            "binding_collection_name": "form_buttons",
                            // 가져올 값 이름
                            "binding_name": "#form_button_text",
                            // 목록 데이터를 반복 연결
                            "binding_type": "collection"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(not((#form_button_text - $DYNAMIC_ITEM_top_padding_key) = #form_button_text))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(not((#form_button_text - $DYNAMIC_ITEM_top_padding_key) = #form_button_text))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#enabled"
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "dynamic_item_main": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%cm"
                    ],
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_root_control|default": "style.dme_02",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "root": {
                                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                                "type": "stack_panel",
                                // 쌓는 방향(가로/세로)
                                "orientation": "horizontal",
                                // 가로/세로 크기
                                "size": [
                                    "100%",
                                    "100%c"
                                ],
                                // 오버라이드 가능한 변수
                                "$DYNAMIC_ITEM_side_paddings_size|default": [
                                    3,
                                    0
                                ],
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // ???/?? ??
                                        "left_padding": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": "$DYNAMIC_ITEM_side_paddings_size"
                                        }
                                    },
                                    {
                                        // ???/?? ??
                                        "root_root": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": [
                                                "fill",
                                                "100%c"
                                            ],
                                            // 이 안에 들어가는 부품 목록
                                            "controls": [
                                                {
                                                    // 다른 템플릿을 가져와서 확장(상속)
                                                    "root@$DYNAMIC_ITEM_root_control": {}
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        // ???/?? ??
                                        "right_padding": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": "$DYNAMIC_ITEM_side_paddings_size"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "background@style.image": {
                                // 가로/세로 크기
                                "size": [
                                    "100%",
                                    "100%sm"
                                ],
                                // 사용할 이미지 경로
                                "texture": "$DYNAMIC_ITEM_background_texture",
                                // 오버라이드 가능한 변수
                                "$DYNAMIC_ITEM_background_texture|default": "",
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": "$DYNAMIC_ITEM_background_bindings",
                                // 오버라이드 가능한 변수
                                "$DYNAMIC_ITEM_background_bindings|default": [
                                    {
                                        // 목록 이름
                                        "binding_collection_name": "form_buttons",
                                        // 가져올 값 이름
                                        "binding_name": "#form_button_text",
                                        // 목록 데이터를 반복 연결
                                        "binding_type": "collection"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "((#form_button_text - $VERTICAL_PROCESSING_no_height_key) = #form_button_text)",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "((#form_button_text - $VERTICAL_PROCESSING_no_height_key) = #form_button_text)",
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
                "bottom_padding@style.image": {
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_bottom_padding_key|default": "",
                    // 가로/세로 크기
                    "size": "$DYNAMIC_ITEM_bottom_padding_size",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_bottom_padding_size|default": [
                        "100%",
                        3
                    ],
                    // 사용할 이미지 경로
                    "texture": "$DYNAMIC_ITEM_bottom_padding_texture",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_bottom_padding_texture|default": "",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": "$DYNAMIC_ITEM_bottom_padding_bindings",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_bottom_padding_bindings|default": [
                        {
                            // 목록 이름
                            "binding_collection_name": "form_buttons",
                            // 가져올 값 이름
                            "binding_name": "#form_button_text",
                            // 목록 데이터를 반복 연결
                            "binding_type": "collection"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(not((#form_button_text - $DYNAMIC_ITEM_bottom_padding_key) = #form_button_text))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(not((#form_button_text - $DYNAMIC_ITEM_bottom_padding_key) = #form_button_text))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#enabled"
                        }
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "dynamic_item_template": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%c"
        ],
        // 오버라이드 가능한 변수
        "$DYNAMIC_ITEM_entry|default": "style.dme_03",
        // 게임 값과 연결하는 규칙 목록
        "bindings": "$DYNAMIC_ITEM_bindings",
        // 오버라이드 가능한 변수
        "$DYNAMIC_ITEM_bindings|default": [],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "entry@$DYNAMIC_ITEM_entry": {}
            }
        ]
    },
    // ???/?? ??
    "uncollizeble_content_dynamic_item": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%c"
        ],
        // 오버라이드 가능한 변수
        "$DYNAMIC_ITEM_uncollizeble_content_control|default": "style.dme_12",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "uncolilzeble_content@$DYNAMIC_ITEM_uncollizeble_content_control": {}
            },
            {
                // ???/?? ??
                "padding": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": "$DYNAMIC_ITEM_between_contents_padding_size",
                    // 오버라이드 가능한 변수
                    "$DYNAMIC_ITEM_between_contents_padding_size|default": [
                        0,
                        1
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "dynamic_item_main@starlib_pkg_dynamic_structure.dynamic_item_template": {}
            }
        ]
    },
    // ???/?? ??
    "vertical_processing_panel": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%c"
        ],
        // 오버라이드 가능한 변수
        "$VERTICAL_PROCESSING_sizer_template_control|default": "starlib_pkg_dynamic_structure.vertical_sizer_template",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "vertical_buffer": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        0
                    ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_left",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_left",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "post_processing_panel": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    "100%",
                                    "100%cm"
                                ],
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "top_left",
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "top_left",
                                // 오버라이드 가능한 변수
                                "$VERTICAL_PROCESSING_output_control|default": "style.dme_13",
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // ???/?? ??
                                        "button": {
                                            // 패널: 다른 부품을 담는 바닥판
                                            "type": "panel",
                                            // 가로/세로 크기
                                            "size": [
                                                "100%",
                                                "100%sm"
                                            ],
                                            // 이 안에 들어가는 부품 목록
                                            "controls": [
                                                {
                                                    // 다른 템플릿을 가져와서 확장(상속)
                                                    "button@$VERTICAL_PROCESSING_output_control": {}
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "vertical_sizer@$VERTICAL_PROCESSING_sizer_template_control": {}
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "vertical_sizer@$VERTICAL_PROCESSING_sizer_template_control": {
                    // 오버라이드 가능한 변수
                    "$VERTICAL_PROCESSING_no_height_key|default": "",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 이름
                            "binding_collection_name": "form_buttons",
                            // 가져올 값 이름
                            "binding_name": "#form_button_text",
                            // 목록 데이터를 반복 연결
                            "binding_type": "collection"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "((#form_button_text - $VERTICAL_PROCESSING_no_height_key) = #form_button_text)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "((#form_button_text - $VERTICAL_PROCESSING_no_height_key) = #form_button_text)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#enabled"
                        }
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "vertical_sizer_template": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%c"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": "$VERTICAL_SIZER_controls",
        // 오버라이드 가능한 변수
        "$VERTICAL_SIZER_controls|default": [
            {
                // ???/?? ??
                "default_default": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        32
                    ]
                }
            }
        ]
    }
}
```








global.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: global.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "global",
    // ???/?? ??
    "binding": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 오버라이드 가능한 변수
        "$key|default": "",
        // 보이기/숨기기(공간 유지)
        "visible": false,
        // ??/???
        "enabled": false,
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not((#form_button_text - $key) = #form_button_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not((#form_button_text - $key) = #form_button_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ],
        // 오버라이드 가능한 변수
        "$control|default": "global.empty_panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "control@$control": {}
            }
        ]
    },
    // ???/?? ??
    "reverse_binding": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 오버라이드 가능한 변수
        "$key|default": "",
        // 보이기/숨기기(공간 유지)
        "visible": true,
        // ??/???
        "enabled": true,
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 목록 이름
                "binding_collection_name": "form_buttons",
                // 가져올 값 이름
                "binding_name": "#form_button_text",
                // 목록 데이터를 반복 연결
                "binding_type": "collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#form_button_text - $key) = #form_button_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#form_button_text - $key) = #form_button_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ],
        // 오버라이드 가능한 변수
        "$control|default": "global.empty_panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "control@$control": {}
            }
        ]
    },
    // ???/?? ??
    "title_binding": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 오버라이드 가능한 변수
        "$key|default": "",
        // 보이기/숨기기(공간 유지)
        "visible": false,
        // ??/???
        "enabled": false,
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#title_text",
                // 게임이 주는 전역 값 연결
                "binding_type": "global"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not((#title_text - $key) = #title_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not((#title_text - $key) = #title_text))",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ],
        // 오버라이드 가능한 변수
        "$control|default": "global.empty_panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "control@$control": {}
            }
        ]
    },
    // ???/?? ??
    "reverse_title_binding": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 오버라이드 가능한 변수
        "$key|default": "",
        // 보이기/숨기기(공간 유지)
        "visible": true,
        // ??/???
        "enabled": true,
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#title_text",
                // 게임이 주는 전역 값 연결
                "binding_type": "global"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#title_text - $key) = #title_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#title_text - $key) = #title_text)",
                // 결과가 들어갈 속성
                "target_property_name": "#enabled"
            }
        ],
        // 오버라이드 가능한 변수
        "$control|default": "global.empty_panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "control@$control": {}
            }
        ]
    },
    // ???/?? ??
    "range_selection_binding": {
      // 패널: 다른 부품을 담는 바닥판
      "type": "panel",
      // 오버라이드 가능한 변수
      "$from|default": "",
      // 오버라이드 가능한 변수
      "$to|default": "",
      // 보이기/숨기기(공간 유지)
      "visible": false,
      // ??/???
      "enabled": false,
      // 게임 값과 연결하는 규칙 목록
      "bindings": [
          {
              // 목록 이름
              "binding_collection_name": "form_buttons",
              // 가져올 값 이름
              "binding_name": "#form_button_text",
              // 목록 데이터를 반복 연결
              "binding_type": "collection"
          },
          {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(((('%.' + $to + 's') * #form_button_text) - (('%.' + $from + 's') * #form_button_text)) - '\t')",
              // 결과가 들어갈 속성
              "target_property_name": "#text"
          },
          {
              // 계산식/참조 값
              "source_property_name": "(not(#text = ''))",
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
          }
      ]
   },
    // 다른 템플릿을 가져와서 확장(상속)
    "scrolling_panel@common.scrolling_panel": {
        // 오버라이드 가능한 변수
        "$scroll_bar_contained|default": false,
        // 오버라이드 가능한 변수
        "$scroll_bar_left_padding_size|default": [
          3,
          0
        ],
        // 오버라이드 가능한 변수
        "$scroll_bar_right_padding_size|default": [
          0,
          0
        ],
        // 오버라이드 가능한 변수
        "$scroll_size|default": [
          5,
          "100%"
        ],
        // 오버라이드 가능한 변수
        "$scroll_view_port_offset|default": [
          0,
          0
        ],
        // 오버라이드 가능한 변수
        "$scrolling_pane_offset|default": [
          0,
          0
        ],
        // 오버라이드 가능한 변수
        "$scrolling_pane_size|default": [
          "100%",
          "100%"
        ],
        // 오버라이드 가능한 변수
        "$scrolling_content|default": "style.dme_14",
        // 오버라이드 가능한 변수
        "$show_background|default": false,
        // 기준점(어디에서 시작할지)
        "anchor_from": "center",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "center",
        // 가로/세로 크기
        "size": [
          "100%",
          "100%"
        ]
    },
    // ???/?? ??
    "empty_panel": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            0,
            0
        ]
    },
    // ???/?? ??
    "button_factory": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
          "100%",
          "100%c"
        ],
        // 오버라이드 가능한 변수
        "$factory_item|default": "style.dme_04",
        // 목록 아이템을 자동으로 생성
        "factory": {
          // ?? ??
          "name": "buttons",
          // ??? ???
          "control_name": "$factory_item"
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
    "grid": {
        // 격자 컨테이너: 칸칸이 배치
        "type": "grid",
        // 오버라이드 가능한 변수
        "$grid_item|default": "style.dme_05",
        // ??? ?? ?
        "grid_item_template": "$grid_item",
        // ??? ?? ?
        "grid_rescaling_type": "horizontal",
        // 목록 이름
        "collection_name": "form_buttons",
        // 가로/세로 크기
        "size": [
          "100%",
          "100%c"
        ],
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#maximum_grid_items",
                // 가져올 값 이름
                "binding_name": "#form_button_length"
            }
        ]
    }
}
```








screen_common.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: screen_common.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_screen_common",
    // 다른 템플릿을 가져와서 확장(상속)
    "title_template@style.label": {
        // 보여줄 글자
        "text": "#title_text",
        // ???/?? ??
        "max_size": [
            "100%",
            "100%"
        ],
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#title_text",
                // 게임이 주는 전역 값 연결
                "binding_type": "global"
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button_template@common.button": {
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.menu_exit",
        // 가로/세로 크기
        "size": "$CLOSE_BUTTON_size",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_size|default": [
            15,
            15
        ],
        // 겹치는 순서(숫자 클수록 위)
        "layer": 32,
        // ??? ??
        "sound_name": "$CLOSE_BUTTON_sound_name",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_sound_name|default": "random.click",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_default_control|default": "style.close_button_default",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_hover_control|default": "style.close_button_hover",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_pressed_control|default": "$CLOSE_BUTTON_hover_control",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "default@$CLOSE_BUTTON_default_control": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "hover@$CLOSE_BUTTON_hover_control": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "pressed@$CLOSE_BUTTON_pressed_control": {}
            }
        ]
    },
    // ???/?? ??
    "async_close_button": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$CLOSE_BUTTON_size",
        // 오버라이드 가능한 변수
        "$CLOSE_BUTTON_size|default": [
            15,
            15
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "close_button_text@style.label": {
                    // ?? ??
                    "localize": true,
                    // 보여줄 글자
                    "text": "gui.close",
                    // ??
                    "font_type": "$CLOSE_BUTTON_text_font_type",
                    // 오버라이드 가능한 변수
                    "$CLOSE_BUTTON_text_font_type|default": "MinecraftTen",
                    // ???/?? ??
                    "max_size": [
                        "100%",
                        "100%"
                    ],
                    // 기준점에서 이동하는 거리
                    "offset": "$CLOSE_BUTTON_text_offset",
                    // 오버라이드 가능한 변수
                    "$CLOSE_BUTTON_text_offset|default": [
                        0,
                        0
                    ],
                    // 보이기/숨기기(공간 유지)
                    "visible": "$CLOSE_BUTTON_text_enabled",
                    // 오버라이드 가능한 변수
                    "$CLOSE_BUTTON_text_enabled|default": false
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "close_button_icon@style.image": {
                    // 사용할 이미지 경로
                    "texture": "$CLOSE_BUTTON_icon_texture",
                    // 오버라이드 가능한 변수
                    "$CLOSE_BUTTON_icon_texture|default": "",
                    // 가로/세로 크기
                    "size": "$CLOSE_BUTTON_icon_size",
                    // 오버라이드 가능한 변수
                    "$CLOSE_BUTTON_icon_size|default": [
                        "100%",
                        "100%"
                    ],
                    // 기준점에서 이동하는 거리
                    "offset": "$CLOSE_BUTTON_icon_offset",
                    // 오버라이드 가능한 변수
                    "$CLOSE_BUTTON_icon_offset|default": [
                        0,
                        0
                    ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 38
                }
            },
            {
                // ???/?? ??
                "close_button_root": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%"
                    ],
                    // 오버라이드 가능한 변수
                    "$CLOSE_BUTTON_default_control|default": "style.black",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "style@$CLOSE_BUTTON_default_control": {
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 24
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "root@starlib_pkg_screen_common.close_button_template": {
                                // 오버라이드 가능한 변수
                                "$CLOSE_BUTTON_size": [
                                    "100%",
                                    "100%"
                                ],
                                // 오버라이드 가능한 변수
                                "$CLOSE_BUTTON_default_control": "global.empty_panel"
                            }
                        }
                    ]
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "form_text_template@style.label": {
        // 보여줄 글자
        "text": "#form_text",
        // ?? ??
        "text_alignment": "left",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not(#form_text = ''))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    }
}
```








screen_template.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: screen_template.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "starlib_pkg_screen_template",
    // ???/?? ??
    "screen": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$SCREEN_TEMPLATE_fade_control|default": "style.fade",
        // 오버라이드 가능한 변수
        "$SCREEN_TEMPLATE_frame_control|default": "style.white_frame",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "fade@$SCREEN_TEMPLATE_fade_control": {
                    // 오버라이드 가능한 변수
                    "$SCREEN_TEMPLATE_fade_enabled|default": false,
                    // 보이기/숨기기(공간 유지)
                    "visible": "$SCREEN_TEMPLATE_fade_enabled",
                    // 가로/세로 크기
                    "size": [
                        "200%",
                        "200%"
                    ],
                    // ???
                    "alpha": "$SCREEN_TEMPLATE_fade_alpha",
                    // 오버라이드 가능한 변수
                    "$SCREEN_TEMPLATE_fade_alpha|default": 0.3
                }
            },
            {
                // ???/?? ??
                "screen": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%cm",
                        "100%cm"
                    ],
                    // ???/?? ??
                    "max_size": [
                        "100% - 20px",
                        "100% - 20px"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "forms_holder": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    "100%cm",
                                    "100%cm"
                                ],
                                // 이 안에 들어가는 부품 목록
                                "controls": "$forms_holder_controls",
                                // 오버라이드 가능한 변수
                                "$forms_holder_controls|default": [
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "main@starlib_pkg_screen_template.form_template": {}
                                    }
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "frame@$SCREEN_TEMPLATE_frame_control": {
                                // 오버라이드 가능한 변수
                                "$SCREEN_TEMPLATE_frame_enabled|default": false,
                                // 보이기/숨기기(공간 유지)
                                "visible": "$SCREEN_TEMPLATE_frame_enabled",
                                // 가로/세로 크기
                                "size": [
                                    "100%sm + 2px",
                                    "100%sm + 2px"
                                ]
                            }
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "screen_background@style.image": {
                    // 사용할 이미지 경로
                    "texture": "$SCREEN_TEMPLATE_background_texture",
                    // 오버라이드 가능한 변수
                    "$SCREEN_TEMPLATE_background_texture|default": "",
                    // ?? ??
                    "fill": true,
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 4
                }
            }
        ]
    },
    // ???/?? ??
    "form_template": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$form_size",
        // 오버라이드 가능한 변수
        "$form_size|default": [
            300,
            255
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "root": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "vertical",
                    // 가로/세로 크기
                    "size": "$FORM_TEMPLATE_root_size",
                    // 오버라이드 가능한 변수
                    "$FORM_TEMPLATE_root_size|default": [
                        "100%",
                        "100%"
                    ],
                    // 오버라이드 가능한 변수
                    "$FORM_TEMPLATE_header_control|default": "starlib_pkg_screen_template.header_template",
                    // 오버라이드 가능한 변수
                    "$FORM_TEMPLATE_content_control|default": "starlib_pkg_screen_template.content_template",
                    // 오버라이드 가능한 변수
                    "$FORM_TEMPLATE_sub_content_control|default": "global.empty_panel",
                    // 오버라이드 가능한 변수
                    "$FORM_TEMPLATE_background_control|default": "style.image",
                    // 오버라이드 가능한 변수
                    "$FORM_TEMPLATE_between_contents_padding_texture|default": "",
                    // 오버라이드 가능한 변수
                    "$FORM_TEMPLATE_between_contents_padding_size|default": [
                        0,
                        0
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "header_control@$FORM_TEMPLATE_header_control": {}
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "padding_top@style.image": {
                                // 사용할 이미지 경로
                                "texture": "$FORM_TEMPLATE_between_contents_padding_texture",
                                // 가로/세로 크기
                                "size": "$FORM_TEMPLATE_between_contents_padding_size",
                                // 보이기/숨기기(공간 유지)
                                "visible": "$FORM_TEMPLATE_appear_header_padding",
                                // 오버라이드 가능한 변수
                                "$FORM_TEMPLATE_appear_header_padding|default": true
                            }
                        },
                        {
                            // ???/?? ??
                            "root_screen": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    "100%",
                                    "fill"
                                ],
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "content@$FORM_TEMPLATE_content_control": {
                                            // 가로/세로 크기
                                            "size": "$FORM_TEMPLATE_content_size",
                                            // 오버라이드 가능한 변수
                                            "$FORM_TEMPLATE_content_size|default": [
                                                "100% - 8px",
                                                "100% - 8px"
                                            ],
                                            // 기준점에서 이동하는 거리
                                            "offset": "$FORM_TEMPLATE_content_offset",
                                            // 오버라이드 가능한 변수
                                            "$FORM_TEMPLATE_content_offset|default": [
                                                0,
                                                0
                                            ]
                                        }
                                    },
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "background@$FORM_TEMPLATE_background_control": {
                                            // 사용할 이미지 경로
                                            "texture": "$FORM_TEMPLATE_background_texture",
                                            // 오버라이드 가능한 변수
                                            "$FORM_TEMPLATE_background_texture|default": ""
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "padding_bottom@style.image": {
                                // 사용할 이미지 경로
                                "texture": "$FORM_TEMPLATE_between_contents_padding_texture",
                                // 가로/세로 크기
                                "size": "$FORM_TEMPLATE_between_contents_padding_size",
                                // 보이기/숨기기(공간 유지)
                                "visible": "$FORM_TEMPLATE_appear_sub_contents_padding",
                                // 오버라이드 가능한 변수
                                "$FORM_TEMPLATE_appear_sub_contents_padding|default": false
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "sub_content_control@$FORM_TEMPLATE_sub_content_control": {}
                        }
                    ],
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 16
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "form_background@style.image": {
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%"
                    ],
                    // 사용할 이미지 경로
                    "texture": "$FORM_TEMPLATE_form_background_texture",
                    // 오버라이드 가능한 변수
                    "$FORM_TEMPLATE_form_background_texture|default": "",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 10
                }
            }
        ]
    },
    // ???/?? ??
    "header_template": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": "$HEADER_TEMPLATE_size",
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_size|default": [
            "100%",
            24
        ],
        // 오버라이드 가능한 변수
        "$HEADER_TEMPLATE_style_control|default": "style.black",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "style_control@$HEADER_TEMPLATE_style_control": {}
            },
            {
                // ???/?? ??
                "header_contents": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": "$HEADER_TEMPLATE_contents_size",
                    // 오버라이드 가능한 변수
                    "$HEADER_TEMPLATE_contents_size|default": [
                        "100%",
                        "100%"
                    ],
                    // 기준점에서 이동하는 거리
                    "offset": "$HEADER_TEMPLATE_contents_offset",
                    // 오버라이드 가능한 변수
                    "$HEADER_TEMPLATE_contents_offset|default": [
                        0,
                        0
                    ],
                    // 오버라이드 가능한 변수
                    "$HEADER_TEMPLATE_title_control|default": "starlib_pkg_screen_common.title_template",
                    // 오버라이드 가능한 변수
                    "$HEADER_TEMPLATE_close_button_control|default": "starlib_pkg_screen_template.close_button",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "title_control@$HEADER_TEMPLATE_title_control": {
                                // ???/?? ??
                                "max_size": [
                                    "100%",
                                    "100%"
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "close_button_control@$HEADER_TEMPLATE_close_button_control": {}
                        }
                    ]
                }
            }
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button@starlib_pkg_screen_common.close_button_template": {
        // 기준점(어디에서 시작할지)
        "anchor_from": "right_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "right_middle",
        // 기준점에서 이동하는 거리
        "offset": [
            -5,
            0
        ]
    },
    // ???/?? ??
    "content_template": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 오버라이드 가능한 변수
        "$CONTENT_header_content_control|default": "global.empty_panel",
        // 오버라이드 가능한 변수
        "$CONTENT_between_contents_padding_size|default": [
            0,
            0
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "content_header@$CONTENT_header_content_control": {}
            },
            {
                // ???/?? ??
                "padding": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": "$CONTENT_between_contents_padding_size",
                    // 보이기/숨기기(공간 유지)
                    "visible": "$CONTENT_appear_main_contents_padding",
                    // 오버라이드 가능한 변수
                    "$CONTENT_appear_main_contents_padding|default": false
                }
            },
            {
                // ???/?? ??
                "root_content": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "horizontal",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "fill"
                    ],
                    // 오버라이드 가능한 변수
                    "$CONTENT_enable_paperdoll|default": false,
                    // 오버라이드 가능한 변수
                    "$CONTENT_paperdoll_control|default": "starlib_pkg_custom_renders.common_paperdoll",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "paperdoll@$CONTENT_paperdoll_control": {
                                // 보이기/숨기기(공간 유지)
                                "visible": "$CONTENT_enable_paperdoll",
                                // ??/???
                                "enabled": "$CONTENT_enable_paperdoll",
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": "$CONTENT_paperdoll_bindings",
                                // 오버라이드 가능한 변수
                                "$CONTENT_paperdoll_bindings|default": []
                            }
                        },
                        {
                            // ???/?? ??
                            "padding": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": "$CONTENT_between_contents_padding_size",
                                // 보이기/숨기기(공간 유지)
                                "visible": "$CONTENT_appear_root_contents_padding",
                                // 오버라이드 가능한 변수
                                "$CONTENT_appear_root_contents_padding|default": true
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "scrolling_panel@global.scrolling_panel": {
                                // 오버라이드 가능한 변수
                                "$scrolling_content|default": "starlib_pkg_screen_template.scrolling_content_template",
                                // 가로/세로 크기
                                "size": [
                                    "fill",
                                    "100%"
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "fix@global.empty_panel": {}
                        }
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "scrolling_content_template": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 쌓는 방향(가로/세로)
        "orientation": "vertical",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%c"
        ],
        // 오버라이드 가능한 변수
        "$SCROLLING_CONTENT_form_text_control|default": "starlib_pkg_screen_common.form_text_template",
        // 오버라이드 가능한 변수
        "$SCROLLING_CONTENT_main_control|default": "global.button_factory",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "form_text": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%c"
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "form_text@$SCROLLING_CONTENT_form_text_control": {}
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "additional_content": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 쌓는 방향(가로/세로)
                    "orientation": "vertical",
                    // 가로/세로 크기
                    "size": [
                        "100%",
                        "100%c"
                    ],
                    // 오버라이드 가능한 변수
                    "$SCROLLING_CONTENT_additional_content_margins_size|default": [
                        0,
                        0
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "top_margin": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": "$SCROLLING_CONTENT_additional_content_margins_size"
                            }
                        },
                        {
                            // ???/?? ??
                            "additional_content_root": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    "100%",
                                    "100%c"
                                ],
                                // 오버라이드 가능한 변수
                                "$SCROLLING_CONTENT_additional_content_root_control|default": "global.empty_panel",
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // 다른 템플릿을 가져와서 확장(상속)
                                        "additional_content_root@$SCROLLING_CONTENT_additional_content_root_control": {}
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "bottom_margin": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": "$SCROLLING_CONTENT_additional_content_margins_size"
                            }
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "main@$SCROLLING_CONTENT_main_control": {
                    // 오버라이드 가능한 변수
                    "$factory_item|default": "$button_item_control",
                    // 오버라이드 가능한 변수
                    "$button_item_control|default": "style.dme_01"
                }
            }
        ]
    }
}
```








style.jsonc
StarLib · StarLibV2-1.0.3.3



필요한 부분만 참고해서 가져가세요.



```
// 예제: style.jsonc
// 분류: StarLib / StarLibV2-1.0.3.3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
//=======================================
//
//   Website & Documentation - https://pipangry.github.io/docs-starlib
//
//   StarLibV2 by pipa_ngry
//   Please respect my work, don't pass at yours and use it for its intended purpose.
//   Thanks =)
//
//=======================================
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "style",
    // ???/?? ??
    "label": {
        // 글자 표시
        "type": "label",
        // ?? ??
        "text_alignment": "center",
        // ??
        "font_type": "MinecraftSeven",
        // ?? ?? ?
        "font_size": "normal",
        // 가로/세로 크기
        "size": [
            "100%",
            "default"
        ],
        // 오버라이드 가능한 변수
        "$label_layer|default": 58,
        // 겹치는 순서(숫자 클수록 위)
        "layer": "$label_layer",
        // 보여줄 글자
        "text": "§7You forgot to write the text >=("
    },
    // ???/?? ??
    "image": {
        // 이미지 표시
        "type": "image",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 사용할 이미지 경로
        "texture": "",
        // 겹치는 순서(숫자 클수록 위)
        "layer": 1
    },
    //=======================================
    //
    //   Default StarLibV2 style elements
    //   All of these use default Minecraft textures
    //
    //=======================================
    "close_button_default@image": {
        // 사용할 이미지 경로
        "texture": "textures/ui/close_button_default_light"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "close_button_hover@image": {
        // 사용할 이미지 경로
        "texture": "textures/ui/close_button_hover_light"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "black_alpha@image": {
        // 사용할 이미지 경로
        "texture": "textures/ui/Black",
        // ???
        "alpha": 0.6
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "black@image": {
        // 사용할 이미지 경로
        "texture": "textures/ui/Black"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "fade@image": {
        // 사용할 이미지 경로
        "texture": "textures/ui/Black"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "white_frame@image": {
        // 사용할 이미지 경로
        "texture": "textures/ui/focus_border_white"
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "hightlight@image": {
        // 사용할 이미지 경로
        "texture": "textures/ui/control_white",
        // ???
        "alpha": 0.2
    },
    //=======================================
    //
    //   Debug messages
    //
    //=======================================
    "dme_01@label": {
        // 보여줄 글자
        "text": "§cButton factory item not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_02@label": {
        // 보여줄 글자
        "text": "§cDynamic item root control not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_03@label": {
        // 보여줄 글자
        "text": "§cDynamic item entry element not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_04@label": {
        // 보여줄 글자
        "text": "§cCommon button factory item not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_05@label": {
        // 보여줄 글자
        "text": "§cCommon button grid item not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_06@label": {
        // 보여줄 글자
        "text": "§cThird sizer output not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_07@label": {
        // 보여줄 글자
        "text": "§cHalf sizer output not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_08@label": {
        // 보여줄 글자
        "text": "§cCustom sizer output not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_09@label": {
        // 보여줄 글자
        "text": "§cVertical stack item main control not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_10@label": {
        // 보여줄 글자
        "text": "§cBordered button default element annotation not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_11@label": {
        // 보여줄 글자
        "text": "§cGrid item root control not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_12@label": {
        // 보여줄 글자
        "text": "§cUncollizeble content control not defined."
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_13@label": {
        // 보여줄 글자
        "text": "§cVertical processing output not defined.",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ]
    },
    // 다른 템플릿을 가져와서 확장(상속)
    "dme_14@label": {
        // 보여줄 글자
        "text": "§cScrolling content not defined."
    }
}
```













통합 UI 모음
5 개






[분할 목록으로 돌아가기](preview.html#example-view)


### 기본


### 기본
_global_variables.json
통합 UI 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: _global_variables.json
// 분류: 통합 UI 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 기존 알림 시스템 설정
  "$notification_flag_0e34fd": "§N§O§T§I§F§I§C§A§T§I§O§N",

  // exp_toast 관련 설정
  "$chat_item_lifetime": 3.0,

  // Chest-UI 설정
  "$show_inventory": false, // 인벤토리 표시 여부. 저사양 기기에서는 false 권장
  // 오버라이드 가능한 변수
  "$border_and_background_texture": "textures/ui/dialog_background_opaque", // 배경 및 테두리 텍스처
  /*
		*사용할 레이아웃만 활성화하고 나머지는 비활성화하여 렉 감소*
	*/
  // 오버라이드 가능한 변수
  "$disable_furnace_ui": false,
  // 오버라이드 가능한 변수
  "$disable_1_slots_layout": true,
  // 오버라이드 가능한 변수
  "$disable_5_slots_layout": true,
  // 오버라이드 가능한 변수
  "$disable_9_slots_layout": false, // 9칸 레이아웃 활성화 (메뉴용)
  // 오버라이드 가능한 변수
  "$disable_18_slots_layout": true,
  // 오버라이드 가능한 변수
  "$disable_27_slots_layout": false, // 27칸 레이아웃 활성화 (카테고리 메뉴용)
  // 오버라이드 가능한 변수
  "$disable_36_slots_layout": true,
  // 오버라이드 가능한 변수
  "$disable_45_slots_layout": true,
  // 오버라이드 가능한 변수
  "$disable_54_slots_layout": false // 54칸 레이아웃 활성화 (상점 아이템 표시용)
}
```








### 기본
_ui_defs.json
통합 UI 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: _ui_defs.json
// 분류: 통합 UI 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // ???/?? ??
  "ui_defs": [
    "ui/_global_variables.json",
    "ui/hud_screen.json",
    "ui/chat_screen.json",
    "ui/components/exp_toast.json",
    "ui/server_form.json"
  ]
}
```








### 기본
chat_screen.json
통합 UI 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: chat_screen.json
// 분류: 통합 UI 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "chat",
  // ???/?? ??
  "messages_text/text": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text - '<' - '>')",
        // 결과가 들어갈 속성
        "target_property_name": "#output"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§␛' + #text + '§r') - ('§␛' + $notification_flag_0e34fd) = ('§␛' + #text + '§r')) and ((#output - '\ue1fd' - '\ue1fe' - '\ue1ff') = #output)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  }
}
```








### 기본
hud_screen.json
통합 UI 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: 통합 UI 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "hud",
    // ???/?? ??
    "hud_screen": {
        // ?? ??
        "render_only_when_topmost": false,
        // 오버라이드 가능한 변수
        "$additional_screen_content": "hud.notification_factory",
        // 오버라이드 가능한 변수
        "$use_loading_bars": false,
        // 오버라이드 가능한 변수
        "$screen_animations": [],
        // 오버라이드 가능한 변수
        "$background_animations": []
    },
    // ???/?? ??
    "boss_health_panel_score": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            182,
            20
        ],
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_middle",
        // 오버라이드 가능한 변수
        "$progress_bar_collection": "scoreboard_scores",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "padding": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [
                        0,
                        10
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "progress_bar_for_collections@common.progress_bar": {
                    // 기준점에서 이동하는 거리
                    "offset": [
                        0,
                        10
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "empty_progress_bar@common.empty_progress_bar": {
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 1
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "filled_progress_bar@common.filled_progress_bar": {
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 2,
                                // ?? ??
                                "clip_pixelperfect": false,
                                // ?? (R,G,B,A)
                                "color": [
                                    1,
                                    0.84,
                                    0
                                ],
                                // 오버라이드 가능한 변수
                                "$bossbar_max_value": 100.0,
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "#objective_sidebar_name",
                                        // 게임이 주는 전역 값 연결
                                        "binding_type": "global"
                                    },
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "#player_score_sidebar",
                                        // 목록 데이터를 반복 연결
                                        "binding_type": "collection",
                                        // 목록 이름
                                        "binding_collection_name": "scoreboard_scores"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(1 - ((#player_score_sidebar * 1) / $bossbar_max_value))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#clip_ratio"
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
    "boss_health_panel_player": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            182,
            20
        ],
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_middle",
        // 오버라이드 가능한 변수
        "$progress_bar_collection": "scoreboard_scores",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "boss_name@boss_name_panel": {}
            }
        ]
    },
    // ???/?? ??
    "boss_name_panel": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            182,
            14
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "boss_name@hud.boss_name": {}
            }
        ]
    },
    // ???/?? ??
    "boss_name": {
        // 글자 표시
        "type": "label",
        // ?? (R,G,B,A)
        "color": [
            1.0,
            1.0,
            1.0
        ],
        // 보여줄 글자
        "text": "#player_name_sidebar",
        // 겹치는 순서(숫자 클수록 위)
        "layer": 1,
        // 가로/세로 크기
        "size": [
            "default",
            10
        ],
        // ??
        "font_type": "smooth",
        // ?? ?? ??
        "font_scale_factor": 1,
        // ?? ??
        "shadow": true,
        // ?? ??
        "text_alignment": "center",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#player_name_sidebar",
                // 목록 데이터를 반복 연결
                "binding_type": "collection",
                // 목록 이름
                "binding_collection_name": "scoreboard_players"
            }
        ]
    },
    // ???/?? ??
    "root_panel/sidebar": {
        // 완전히 제거(공간도 없음)
        "ignored": true
    },
    // ???/?? ??
    "root_panel/boss_health_panel/boss_hud_panel": {
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "boss_health_grid_name@hud.boss_health_grid_scoreboard_name": {
                    // 기준점에서 이동하는 거리
                    "offset": [
                        0,
                        2
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "boss_health_grid_score@hud.boss_health_grid_scoreboard_score": {
                    // 기준점에서 이동하는 거리
                    "offset": [
                        0,
                        2
                    ]
                }
            }
        ],
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#scoreboard_sidebar_visible",
                // 게임이 주는 전역 값 연결
                "binding_type": "global",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#visible"
            }
        ]
    },
    // ???/?? ??
    "boss_health_grid_scoreboard_score": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_middle",
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_middle",
        // 가로/세로 크기
        "size": [
            182,
            "30%"
        ],
        // 목록 이름
        "collection_name": "scoreboard_scores",
        // 목록 아이템을 자동으로 생성
        "factory": {
            // ?? ??
            "name": "player_score_factory",
            // ??? ???
            "control_name": "hud.boss_health_panel_score"
        },
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#scoreboard_sidebar_size",
                // 게임이 주는 전역 값 연결
                "binding_type": "global",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#collection_length"
            }
        ]
    },
    // ???/?? ??
    "boss_health_grid_scoreboard_name": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_middle",
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_middle",
        // 가로/세로 크기
        "size": [
            182,
            "30%"
        ],
        // 목록 이름
        "collection_name": "scoreboard_players",
        // 목록 아이템을 자동으로 생성
        "factory": {
            // ?? ??
            "name": "player_score_factory",
            // ??? ???
            "control_name": "hud.boss_health_panel_player"
        },
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#scoreboard_sidebar_size",
                // 게임이 주는 전역 값 연결
                "binding_type": "global",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#collection_length"
            }
        ]
    },
    // ???/?? ??
    "hud_title_text": {
        // 기준점(어디에서 시작할지)
        "anchor_from": "right_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "right_middle",
        // 기준점에서 이동하는 거리
        "offset": [
            -2,
            0
        ],
        // ???
        "alpha": 1,
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#hud_title_text_string",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#text",
                // 게임이 주는 전역 값 연결
                "binding_type": "global"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not (#text = ' '))",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    },
    // ???/?? ??
    "hud_title_text/title_frame/title_background": {
        // 가로/세로 크기
        "size": [
            "100%sm + 3px",
            "100%sm + 6px"
        ],
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_right",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_right",
        // ???
        "alpha": 0.6
    },
    // ???/?? ??
    "hud_title_text/title_frame/title": {
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_right",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_right",
        // ?? ??
        "text_alignment": "left_middle",
        // ?? (R,G,B,A)
        "color": "$tool_tip_text",
        // ?? ?? ?
        "font_size": "normal",
        // ??/?? ?
        "line_padding": -1
    },
    // ???/?? ??
    "score_grid": {
        // 격자 컨테이너: 칸칸이 배치
        "type": "grid",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 그리드 칸 수
        "grid_dimensions": [
            1,
            1
        ],
        // ??? ?? ?
        "grid_item_template": "hud.score_grid_item",
        // 목록 이름
        "collection_name": "players_collection"
    },
    // ???/?? ??
    "score_grid_item": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            "100%",
            "100%"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "gamertag_control": {
                    // 데이터 목록을 반복 배치
                    "type": "collection_panel",
                    // 가로/세로 크기
                    "size": [
                        "100%cm",
                        "100%cm"
                    ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_right",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_right",
                    // 기준점에서 이동하는 거리
                    "offset": [
                        -4,
                        4
                    ],
                    // 목록 이름
                    "collection_name": "scoreboard_scored_list_collection",
                    // 목록 아이템을 자동으로 생성
                    "factory": {
                        // ?? ??
                        "name": "scored_list_factory",
                        // ??? ???
                        "control_name": "hud.score_bg"
                    },
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 가져올 값 이름
                            "binding_name": "#scored_list_size",
                            // 가져온 값을 다른 속성으로 연결
                            "binding_name_override": "#collection_length"
                        },
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
    },
    // ???/?? ??
    "score_bg": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "textures/ui/hud_tip_text_background",
        // 가로/세로 크기
        "size": [
            "100%c + 8px",
            "100%c + 4px"
        ],
        // ???
        "alpha": 0.6,
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#player_name",
                // 목록 데이터를 반복 연결
                "binding_type": "collection",
                // 목록 이름
                "binding_collection_name": "scoreboard_scored_list_collection"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // ?? ??
                "source_control_name": "gamertag_control",
                // 계산식/참조 값
                "source_property_name": "#gamertag",
                // 결과가 들어갈 속성
                "target_property_name": "#playername"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(#playername = #player_name)",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "score_label": {
                    // 글자 표시
                    "type": "label",
                    // 보여줄 글자
                    "text": "#text",
                    // ?? ??
                    "shadow": true,
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 1,
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // ?? ???
                            "binding_condition": "visible",
                            // 가져올 값 이름
                            "binding_name": "#player_score",
                            // 목록 데이터를 반복 연결
                            "binding_type": "collection",
                            // 목록 이름
                            "binding_collection_name": "scoreboard_scored_list_collection"
                        },
                        {
                            // ?? ???
                            "binding_condition": "visible",
                            // 가져올 값 이름
                            "binding_name": "#player_list_title"
                        },
                        {
                            // ?? ???
                            "binding_condition": "visible",
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#player_list_title + #player_score)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#text"
                        }
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "notification_factory": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 가로/세로 크기
        "size": [
            0,
            "100%c"
        ],
        // 겹치는 순서(숫자 클수록 위)
        "layer": 20,
        // 기준점(어디에서 시작할지)
        "anchor_from": "top_right",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_right",
        // 목록 아이템을 자동으로 생성
        "factory": {
            // ?? ??
            "name": "chat_item_factory",
            // 팩토리 템플릿 매핑
            "control_ids": {
                // ?? ??
                "chat_item": "@hud.notification"
            }
        }
    },
    // ???/?? ??
    "noti_1": {
        // 크기 변화
        "anim_type": "size",
        // 걸리는 시간(초)
        "duration": "$in_time",
        // 움직임 곡선
        "easing": "out_sine",
        // 시작 값
        "from": [
            "100%c",
            "100%c"
        ],
        // 끝 값
        "to": [
            0,
            "100%c"
        ],
        // 다음 애니메이션으로 연결
        "next": "@hud.noti_2"
    },
    // ???/?? ??
    "noti_2": {
        // 잠시 대기
        "anim_type": "wait",
        // 걸리는 시간(초)
        "duration": "$stay_time",
        // 다음 애니메이션으로 연결
        "next": "@hud.noti_3"
    },
    // ???/?? ??
    "noti_3": {
        // 크기 변화
        "anim_type": "size",
        // 걸리는 시간(초)
        "duration": "$out_time",
        // 움직임 곡선
        "easing": "in_sine",
        // 시작 값
        "from": [
            0,
            "100%c"
        ],
        // 끝 값
        "to": [
            "100%c",
            "100%c"
        ],
        // 다음 애니메이션으로 연결
        "next": "@hud.noti_4"
    },
    // ???/?? ??
    "noti_4": {
        // 투명도 변화
        "anim_type": "alpha",
        // 걸리는 시간(초)
        "duration": 0,
        // 시작 값
        "from": 1,
        // 끝 값
        "to": 0,
        // 다음 애니메이션으로 연결
        "next": "@hud.noti_5"
    },
    // ???/?? ??
    "noti_5": {
        // 크기 변화
        "anim_type": "size",
        // 걸리는 시간(초)
        "duration": 1,
        // 움직임 곡선
        "easing": "out_expo",
        // 시작 값
        "from": [
            "100%c",
            "100%c"
        ],
        // 끝 값
        "to": [
            "100%c",
            0
        ],
        // 다음 애니메이션으로 연결
        "next": "@hud.noti_4",
        // ?? ??
        "destroy_at_end": "chat_grid_item"
    },
    // ???/?? ??
    "immediate_destroy_anim": {
        // 잠시 대기
        "anim_type": "wait",
        // 걸리는 시간(초)
        "duration": 0,
        // ?? ??
        "destroy_at_end": "chat_grid_item"
    },
    // ???/?? ??
    "notification": {
        // 오버라이드 가능한 변수
        "$in_time": 1,
        // 오버라이드 가능한 변수
        "$stay_time": 5,
        // 오버라이드 가능한 변수
        "$out_time": 1,
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // ??? ?? ?
        "propagate_alpha": true,
        // 애니메이션 목록
        "anims": [
            "@hud.noti_1"
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "notification_background": {
                    // 이미지 표시
                    "type": "image",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_right",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_right",
                    // 가로/세로 크기
                    "size": [
                        "100%c + 18px",
                        "100%cm + 12px"
                    ],
                    // ???/?? ??
                    "min_size": [
                        "100%c + 18px",
                        34
                    ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "notification_text_panel": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    "100%cm",
                                    "100%c"
                                ],
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 1,
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "right_middle",
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "right_middle",
                                // 기준점에서 이동하는 거리
                                "offset": [
                                    -9,
                                    1
                                ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "notification_background",
                                        // 계산식/참조 값
                                        "source_property_name": "#notification_title",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#nested_title",
                                        // ?? ??
                                        "resolve_sibling_scope": true
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "notification_background",
                                        // 계산식/참조 값
                                        "source_property_name": "#notification_message",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#nested_message",
                                        // ?? ??
                                        "resolve_sibling_scope": true
                                    }
                                ],
                                // 이 안에 들어가는 부품 목록
                                "controls": [
                                    {
                                        // ???/?? ??
                                        "notification_title": {
                                            // 글자 표시
                                            "type": "label",
                                            // ??/?? ?
                                            "line_padding": -2,
                                            // ??
                                            "font_type": "default",
                                            // ?? ?? ??
                                            "font_scale_factor": 1.2,
                                            // 보여줄 글자
                                            "text": "#title",
                                            // 기준점(어디에서 시작할지)
                                            "anchor_from": "top_left",
                                            // 붙일 위치(어디에 놓을지)
                                            "anchor_to": "top_left",
                                            // 기준점에서 이동하는 거리
                                            "offset": [
                                                0,
                                                -2
                                            ],
                                            // ???/?? ??
                                            "max_size": [
                                                200,
                                                "default"
                                            ],
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // ?? ??
                                                    "source_control_name": "notification_text_panel",
                                                    // 계산식/참조 값
                                                    "source_property_name": "#nested_title",
                                                    // 결과가 들어갈 속성
                                                    "target_property_name": "#title",
                                                    // ?? ??
                                                    "resolve_sibling_scope": true
                                                },
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // 계산식/참조 값
                                                    "source_property_name": "(not (#title = '§r§r'))",
                                                    // 결과가 들어갈 속성
                                                    "target_property_name": "#visible"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        // ???/?? ??
                                        "notification_message": {
                                            // 글자 표시
                                            "type": "label",
                                            // ??/?? ?
                                            "line_padding": 1,
                                            // ??
                                            "font_type": "default",
                                            // 보여줄 글자
                                            "text": "#message",
                                            // 기준점(어디에서 시작할지)
                                            "anchor_from": "bottom_left",
                                            // 붙일 위치(어디에 놓을지)
                                            "anchor_to": "bottom_left",
                                            // ???/?? ??
                                            "max_size": [
                                                200,
                                                "default"
                                            ],
                                            // 게임 값과 연결하는 규칙 목록
                                            "bindings": [
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // ?? ??
                                                    "source_control_name": "notification_text_panel",
                                                    // 계산식/참조 값
                                                    "source_property_name": "#nested_message",
                                                    // 결과가 들어갈 속성
                                                    "target_property_name": "#message",
                                                    // ?? ??
                                                    "resolve_sibling_scope": true
                                                },
                                                {
                                                    // 계산/조건 결과를 연결
                                                    "binding_type": "view",
                                                    // 계산식/참조 값
                                                    "source_property_name": "(not (#message = '§r§r'))",
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
                            "notification_icon_texture": {
                                // 이미지 표시
                                "type": "image",
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 1,
                                // 가로/세로 크기
                                "size": [
                                    16,
                                    16
                                ],
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "top_left",
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "top_left",
                                // 기준점에서 이동하는 거리
                                "offset": [
                                    9,
                                    9
                                ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "notification_background",
                                        // 계산식/참조 값
                                        "source_property_name": "#notification_icon_texture",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#texture",
                                        // ?? ??
                                        "resolve_sibling_scope": true
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#texture = '') and (#texture - 'aux:' = #texture))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "notification_item_renderer": {
                                // 특수 렌더러(그라디언트/플레이어 등)
                                "type": "custom",
                                // 커스텀 렌더러 종류
                                "renderer": "inventory_item_renderer",
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 1,
                                // 가로/세로 크기
                                "size": [
                                    16,
                                    16
                                ],
                                // 기준점(어디에서 시작할지)
                                "anchor_from": "top_left",
                                // 붙일 위치(어디에 놓을지)
                                "anchor_to": "top_left",
                                // 기준점에서 이동하는 거리
                                "offset": [
                                    9,
                                    9
                                ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "notification_background",
                                        // 계산식/참조 값
                                        "source_property_name": "((#notification_icon_texture - 'aux:') * 1)",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#item_id_aux",
                                        // ?? ??
                                        "resolve_sibling_scope": true
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "notification_background",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#notification_icon_texture - 'aux:' = #notification_icon_texture))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible",
                                        // ?? ??
                                        "resolve_sibling_scope": true
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "notification_icon_padding": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [
                                    6,
                                    0
                                ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "notification_background",
                                        // 계산식/참조 값
                                        "source_property_name": "(not ((#notification_title + #notification_message = '§r§r§r§r') or (#notification_icon_texture = '')))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible",
                                        // ?? ??
                                        "resolve_sibling_scope": true
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
                            // 계산식/참조 값
                            "source_property_name": "(not (('§␛' + #text + '§r') - ('§␛' + $notification_flag_0e34fd) = ('§␛' + #text + '§r')))",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "('\b' + #text - $notification_flag_0e34fd)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#data"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "('§r' + '%.101s' * #data - '\b' - '\t' + '§r')",
                            // 결과가 들어갈 속성
                            "target_property_name": "#notification_title"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(('§r' + '%.301s' * #data - '%.101s' * #data) - '\b' - '\t' + '§r')",
                            // 결과가 들어갈 속성
                            "target_property_name": "#notification_message"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "('%.401s' * #data - '%.301s' * #data - '\t')",
                            // 결과가 들어갈 속성
                            "target_property_name": "#notification_icon_texture"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "('%.501s' * #data - '%.401s' * #data - '\t')",
                            // 결과가 들어갈 속성
                            "target_property_name": "#texture"
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "immediate_destroy": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 가로/세로 크기
                    "size": [
                        0,
                        0
                    ],
                    // 목록 아이템을 자동으로 생성
                    "factory": {
                        // ?? ??
                        "name": "immediate_destroy_factory",
                        // ??? ???
                        "control_name": "@hud.immediate_destroy_control"
                    },
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // ?? ??
                            "source_control_name": "notification_background",
                            // 계산식/참조 값
                            "source_property_name": "((not #visible) * 1)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#collection_length",
                            // ?? ??
                            "resolve_sibling_scope": true
                        }
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "immediate_destroy_control": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [
            0,
            0
        ],
        // 애니메이션 목록
        "anims": [
            "@hud.immediate_destroy_anim"
        ]
    },
    // ???/?? ??
    "koala_title_data_control": {
        // 오버라이드 가능한 변수
        "$update_string": "Hp:",
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ 0, 0 ],
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            { "binding_name": "#hud_title_text_string" },
            { "binding_name": "#hud_title_text_string",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#preserved_text",
              // ?? ???
              "binding_condition": "visibility_changed"
            },
            { "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#hud_title_text_string = #preserved_text) and not ((#hud_title_text_string - $update_string) = #hud_title_text_string))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }
        ]
    },
// ???/?? ??
"chat_grid_item/chat_background": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
        { "binding_type": "collection",
          // 가져올 값 이름
          "binding_name": "#chat_text",
          // 가져온 값을 다른 속성으로 연결
          "binding_name_override": "#text",
          // 목록 이름
          "binding_collection_name": "chat_text_grid"
        },
        { "binding_type": "view",
          // 계산식/참조 값
          "source_property_name": "(#text - '<' - '>')",
          // 결과가 들어갈 속성
          "target_property_name": "#output"
        },
        { "binding_type": "view",
          // 계산식/참조 값
          "source_property_name": "((#output - '\ue1fd' - '\ue1fe' - '\ue1ff' - $notification_flag_0e34fd) = #output)",
          // 결과가 들어갈 속성
          "target_property_name": "#visible"
        }
    ]
    },
    // ???/?? ??
    "item_text_element": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ "100%c", "100%c" ],
        // 기준점(어디에서 시작할지)
        "anchor_from": "bottom_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "bottom_middle",
        // 겹치는 순서(숫자 클수록 위)
        "layer": 999,
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "item_text_aligner": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 가로/세로 크기
                    "size": [ "100%c", "100%c" ],
                    // 쌓는 방향(가로/세로)
                    "orientation": "vertical",
                    // 기준점에서 이동하는 거리
                    "offset": [ 0, -42 ],
                    // ?? ??
                    "use_child_anchors": true,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "exp_toast@exp_toast.root_panel": {}
                        }
                    ]
                }
            }
        ]
    },
    // ???/?? ??
    "exp_progress_bar_and_hotbar": {
        // ?? ?? ??
        "modifications": [
            {
                // ?? ?? ??
                "array_name": "controls",
                // ?? ??
                "operation": "remove",
                // ??? ???
                "control_name": "item_text_factory"
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
                        "item_text_element@hud.item_text_element": {}
                    }
                ]
            }
        ]
    },
    // ???/?? ??
    "exp_progress_bar_and_hotbar_pocket": {
        // ?? ?? ??
        "modifications": [
            {
                // ?? ?? ??
                "array_name": "controls",
                // ?? ??
                "operation": "remove",
                // ??? ???
                "control_name": "item_text"
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
                        "item_text_element@hud.item_text_element": {}
                    }
                ]
            }
        ]
    },
    // ???/?? ??
    "root_panel": {
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
                        "koala_title_data_control@hud.koala_title_data_control": {}
                    },
                    {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "score_grid@hud.score_grid": {}
                    }
                ]
            }
        ]
    }
}
```












### components


### components
exp_toast.json
통합 UI 모음 · components



필요한 부분만 참고해서 가져가세요.



```
// 예제: exp_toast.json
// 분류: 통합 UI 모음 / components
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "exp_toast",
  // ???/?? ??
  "root_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 가로/세로 크기
    "size": [ 300, "100%c" ],
    // ?? ?? ?
    "max_size": [ 300, 50 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -53 ],
    // ?? ????
    "clips_children": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "factory_stack": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ 170, "100%c" ],
          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "chat_item_factory",
            // ?? ?? ?
            "max_children_size": 10,
            // 팩토리 템플릿 매핑
            "control_ids": {
              // ?? ??
              "chat_item": "exp_toast@exp_toast.element"
          }}
      }}
  ]},
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": -20,
    // 가로/세로 크기
    "size": [ 170, "100%cm" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -1 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "@exp_toast.subbar": {}}
  ]},
  // ???/?? ??
  "subbar": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 170, 5 ],
    // ??? ?? ?
    "propagate_alpha": true,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 사용할 이미지 경로
    "texture": "textures/ui/black",
    // ???
    "alpha": 0.7,
    // 애니메이션 목록
    "anims": [
      "@exp_toast.anim_chat_pile_up"
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#chat_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "chat_text_grid",
        // ?? ???
        "binding_condition": "once"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text - '<' - '>')",
        // 결과가 들어갈 속성
        "target_property_name": "#output"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not((#output - '\ue1fd') = #output))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 200, "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 사용할 이미지 경로
          "texture": "textures/ui/white",
          // ?? (R,G,B,A)
          "color": [ 0, 0, 0 ],
          // ???
          "alpha": 0.7,
          // ??? ?? ?
          "propagate_alpha": true,
          // 애니메이션 목록
          "anims": [
            "@exp_toast.anim_chat_bg_wait_bottom"
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "gradient_background_left": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 가로/세로 크기
                "size": [ 30, "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ -30, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // ?? ??
                "gradient_direction": "horizontal",
                // ?? ?? ?
                "color1": [ 0, 0, 0, 0 ],
                // ?? ?? ?
                "color2": [ 0, 0, 0, 1 ]
            }},
            { "gradient_background_right": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 가로/세로 크기
                "size": [ 30, "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 30, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // ?? ??
                "gradient_direction": "horizontal",
                // ?? ?? ?
                "color1": [ 0, 0, 0, 1 ],
                // ?? ?? ?
                "color2": [ 0, 0, 0, 0 ]
            }}
      ]}},
      { "text_wrapper": {
          // 클릭 가능한 버튼
          "type": "button",
          // 가로/세로 크기
          "size": [ 170, "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 5,
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "text": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "#chat_text",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_left",
                // ?? ??
                "shadow": true,
                // 기준점에서 이동하는 거리
                "offset": [ 0, -1.5 ],
                // ?? ??
                "localize": false,
                // 가로/세로 크기
                "size": [ 200, "default" ],
                // ?? ??
                "enable_profanity_filter": true,
                // ?? ?? ??
                "font_scale_factor": 0.75,
                // 애니메이션 목록
                "anims": [ "@exp_toast.anim_chat_txt_wait" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#text",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "chat_text_grid"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('§z' + (#text - (%.3s * #text)))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#chat_text"
                }]
            }}
      ]}}
  ]},
  // ???/?? ??
  "anim_chat_pile_up": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": [ 200, 0 ],
    // 끝 값
    "to": [ 200, 10 ]
  },
  // ???/?? ??
  "anim_chat_bg_alpha_bottom": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_quart",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": 0.7,
    // 끝 값
    "to": 0
  },
  // ???/?? ??
  "anim_chat_bg_wait_bottom": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 다음 애니메이션으로 연결
    "next": "@exp_toast.anim_chat_bg_alpha_bottom"
  },
  // ???/?? ??
  "anim_chat_txt_alpha": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_quart",
    // 걸리는 시간(초)
    "duration": 0.7,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0
  },
  // ???/?? ??
  "anim_chat_txt_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 1,
    // 다음 애니메이션으로 연결
    "next": "@exp_toast.anim_chat_txt_alpha"
  },

  // ???/?? ??
  "progress_bar_anim": {
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": [ "0%", 1 ],
    // 끝 값
    "to": [ "100% - 8px", 1 ],
    // 걸리는 시간(초)
    "duration": "($chat_item_lifetime + 2)"
  },
  // ???/?? ??
  "anim_chat_stack": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": [ 180, 0 ],
    // 끝 값
    "to": [ 180, "100%c" ]
  },
  // ???/?? ??
  "anim_chat_bg_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": [ "100%", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // 다음 애니메이션으로 연결
    "next": "@exp_toast.anim_chat_bg_wait_push"
  },
  // ???/?? ??
  "anim_chat_bg_wait_push": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 1,
    // 다음 애니메이션으로 연결
    "next": "@exp_toast.anim_chat_bg_push"
  },
  // ???/?? ??
  "anim_chat_bg_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "100%", 0 ],
    // ?? ??
    "destroy_at_end": "chat_grid_item"
  },
  // ???/?? ??
  "toast_image_template": {
    // 오버라이드 가능한 변수
    "$arx:chat_image_binding|default": "#text",
    // 이미지 표시
    "type": "image",
    // ??? ?? ?
    "force_texture_reload": true,
    // ??? ?? ?
    "allow_debug_missing_texture": false,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#chat_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "chat_text_grid",
        // ?? ???
        "binding_condition": "once"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$arx:chat_image_binding",
        // 결과가 들어갈 속성
        "target_property_name": "#texture"
  }]},
  // ???/?? ??
  "toast_label_template": {
	  // 오버라이드 가능한 변수
	  "$arx:chat_text_binding|default": "#text",
    // 글자 표시
    "type": "label",
    // ?? ?? ?
    "max_size": [ "100% - 18px", 20 ],
	  // 기준점(어디에서 시작할지)
	  "anchor_from": "left_middle",
	  // 붙일 위치(어디에 놓을지)
	  "anchor_to": "left_middle",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#chat_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "chat_text_grid",
        // ?? ???
        "binding_condition": "once"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$arx:chat_text_binding",
        // 결과가 들어갈 속성
        "target_property_name": "#displaytext"
  }]}
}
```













UI 재료 모음
59 개







[분할 목록으로 돌아가기](preview.html#example-view)

### 기본


### 기본
_ui_defs.json
UI 재료 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: _ui_defs.json
// 분류: UI 재료 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "ui_defs": [
  // Server Forms related.
  "ui/.runeui/forms/brewing_table.json",
  "ui/.runeui/forms/smelting.json",
  "ui/.runeui/forms/salvaging.json",
  "ui/.runeui/forms/smithing.json",
  "ui/.runeui/forms/fuel_selection.json",
  "ui/.runeui/forms/prayer_menu.json",
  "ui/.runeui/forms/fletching_table.json",
  "ui/.runeui/forms/repair.json",
  "ui/.runeui/forms/noting.json",
  "ui/.runeui/forms/noting_amount.json",
  "ui/.runeui/forms/unnoting.json",
  "ui/.runeui/forms/runecraft_form.json",

  // Gameplay
  "ui/.runeui/gameplay/skill_interface.json",
  "ui/.runeui/gameplay/exp_toast.json",
  "ui/.runeui/gameplay/notif_toast.json",
  "ui/.runeui/gameplay/chat_filter.json",
  "ui/.runeui/gameplay/warning.json",
  "ui/.runeui/gameplay/gameplay.json",

  // Misc
  "ui/.runeui/misc/preload.json",

  // Commons
  "ui/.runeui/common.json"
]}
```








### 기본
chat_screen.json
UI 재료 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: chat_screen.json
// 분류: UI 재료 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "messages_scrolling_panel": {
    // 가로/세로 크기
    "size": [ "100%-2px", "100%-70px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 2, -47 ]
  },
  // ???/?? ??
  "commands_panel": {
    // 가로/세로 크기
    "size": [ "100%-2px", "100%-70px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -47 ]
  },
  // ???/?? ??
  "messages_text": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "normal_label": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_type": "view",
              // ?? ??
              "source_control_name": "rcui-normal_chat",
              // 계산식/참조 값
              "source_property_name": "(not #toggle_state)",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
          }],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "text@runeui-chat_filter.messages_text_core": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#text - '<' - '>')",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('§z' + #text)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output_display"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((#output - '\ue1fd' - '\ue1fe' - '\ue1ff') = #output)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }]
            }}
      ]}},
      { "exp_label": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_type": "view",
              // ?? ??
              "source_control_name": "rcui-exp_chat",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
          }],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "text@runeui-chat_filter.messages_text_core": {
                // 오버라이드 가능한 변수
                "$runeui:text_offset": [ 0, 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#text - '<' - '>')",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('§z' + (#text - '\ue1fd'))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output_display"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not((#output - '\ue1fd') = #output))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }]
            }}
      ]}},
      { "notif_label": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_type": "view",
              // ?? ??
              "source_control_name": "rcui-notif_chat",
              // 계산식/참조 값
              "source_property_name": "#toggle_state",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
          }],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "text@runeui-chat_filter.messages_text_core": {
                // 오버라이드 가능한 변수
                "$runeui:text_offset": [ 0, 0 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('§z' + #text)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#search + 1 * (not (('%.'+#search+'s') * #output = #output)) and (('%.'+#search+'s') * #output = ('%.'+#search+'s') * #output - ';')))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#search"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((('%.'+#search+'s') * #output) - '§z')",
                    // 결과가 들어갈 속성
                    "target_property_name": "#texture_path"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#text - #texture_path - \ue1ff)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#output_display"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not((#output - '\ue1ff') = #output))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }]
            }}
      ]}}
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#chat_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
  ]},
  // ???/?? ??
  "chat_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "messages_panel@chat.messages_scrolling_panel": {} },
      { "chat_bottom_panel@chat.chat_bottom_panel": { "layer": 2 } },
      { "chat_bottom_panel_filter@runeui-chat_filter.chat_bottom_panel_filter": { "layer": 2 } },
      { "chat_top_panel@chat.chat_header": { "layer": 2 } },
      { "autocomplete_commands_panel@chat.commands_panel": { "layer": 3 } },
      { "host_main_panel@host_options.host_panel": { "layer": 4 } },
      { "popup_factory@chat_settings.popup_factory": {} }
  ]}
}
```








### 기본
hud_screen.json
UI 재료 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: UI 재료 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{

   // ???/?? ??
   "centered_gui_elements_at_bottom_middle": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 가로/세로 크기
    "size": [ 180, 50 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "heart_rend@heart_renderer": {
          // 기준점에서 이동하는 거리
          "offset": [ -1, -40 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "horse_heart_rend_0@horse_heart_renderer": {
          // 기준점에서 이동하는 거리
          "offset": [ 200, -55 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#creative_horse_hearts",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "horse_heart_rend_1@horse_heart_renderer": {
          // 기준점에서 이동하는 거리
          "offset": [ 200, -55 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#survival_horse_hearts",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "armor_rend@armor_renderer": {
          // 기준점에서 이동하는 거리
          "offset": [ -1, -40 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hunger_rend@hunger_renderer": {
          // 기준점에서 이동하는 거리
          "offset": [ 180, -40 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "bubbles_rend_0@bubbles_renderer": {
          // 기준점에서 이동하는 거리
          "offset": [ 200, -55 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#is_not_riding_bubbles",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "bubbles_rend_1@bubbles_renderer": {
          // 기준점에서 이동하는 거리
          "offset": [ 200, -55 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#is_riding_bubbles",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      { "exp_rend@exp_progress_bar_and_hotbar": {} } // for classic
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#hud_visible_centered",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },

  // ???/?? ??
  "chat_grid_item/chat_background": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection",
        // 가져올 값 이름
        "binding_name": "#chat_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 이름
        "binding_collection_name": "chat_text_grid"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text - '<' - '>')",
        // 결과가 들어갈 속성
        "target_property_name": "#output"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#output - '\ue1fd' - '\ue1fe' - '\ue1ff') = #output)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
  }]},
  // Aligned Touch Hotbar from Collapse-UI
  "hotbar_panel": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "left_pudding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 20, 22 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#hotbar_elipses_right_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
          }]
      }},
      { "hotbar_elipses_panel_left@hud.hotbar_elipses_panel_left_content": {}},
      { "hotbar_start_cap@hud.hotbar_start_cap": {}},
      { "hotbar_grid@hud.hotbar_grid": {} },
      { "hotbar_end_cap@hud.hotbar_end_cap": {}},
      { "hotbar_elipses_panel_right@hud.hotbar_elipses_panel_right_content": {}},
      { "right_pudding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 20, 22 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#hotbar_elipses_left_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 게임이 주는 전역 값 연결
              "binding_type": "global"
          }]
      }}
  ]},
  // ???/?? ??
  "hotbar_elipses_panel_left_content": {
    // 오버라이드 가능한 변수
    "$hotbar_elipses_button_size": [ 20, 22 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "button@hud.hotbar_elipses_button": {} }
  ]},
  // ???/?? ??
  "hotbar_elipses_panel_right_content": {
    // 오버라이드 가능한 변수
    "$hotbar_elipses_button_size": [ 20, 22 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "button@hud.hotbar_elipses_button": {} }
  ]},
  // ???/?? ??
  "hotbar_elipses_button": {
    // ?? ??
    "prevent_touch_input": true
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "borderless_button@common.button": {
    // ?? ??
    "prevent_touch_input": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "elipses@elipses_image_rewrite": {}}
  ]},
  // ???/?? ??
  "elipses_image_rewrite": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/elipses",
    // 가로/세로 크기
    "size": [ 16, 16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 4
  },
  // ???/?? ??
  "full_progress_bar": {
    // 사용할 이미지 경로
    "texture": "textures/ui/experiencebarfullnew"
  },
  // ???/?? ??
  "empty_progress_bar": {
    // 사용할 이미지 경로
    "texture": "textures/ui/experiencebaremptynew"
  },
  // ???/?? ??
  "progress_bar_nub": {
    // 사용할 이미지 경로
    "texture": "textures/ui/experiencenubnew"
  },
  // ???/?? ??
  "chat_label": {
    // 보여줄 글자
    "text": "#chat_text",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "chat_text_grid"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text)",
        // 결과가 들어갈 속성
        "target_property_name": "#chat_text"
      }
    ]
  },
  // ???/?? ??
  "hud_title_text": {
    // 오버라이드 가능한 변수
    "$update_string": "Hp:",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#hud_title_text_string" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not(#hud_title_text_string - $update_string) = #hud_title_text_string)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
  }]},
  // ???/?? ??
  "item_name_text_root/item_text_aligner/survival_buffer": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },
  // "item_name_text_root/item_text_aligner/item_text_control": {
  //   "anims": [
  //     "@hud.anim_item_name_background_size"
  //   ]
  // },
  "hud_actionbar_text": {
    // 사용할 이미지 경로
    "texture": ""
  },
  // "anim_item_name_background_size": {
  //   "anim_type": "wait",
  //   "duration": "$wait_duration",
  //   "next": "@hud.anim_item_name_background_size_out"
  // },
  // "anim_item_name_background_size_out": {
  //   "anim_type": "size",
  //   "easing": "in_expo",
  //   "duration": 2,
  //   "from": [ "100%cm", "100%cm" ],
  //   "to": [ "0%cm", "0%cm" ],
  //   "destroy_at_end": "$destroy_id"
  // },
  // "anim_item_name_text_alpha_out": {
  //   "anim_type": "alpha",
  //   "easing": "in_expo",
  //   "destroy_at_end": "nolmaoscrewyou",
  //   "duration": 2,
  //   "from": 1.0,
  //   "to": 0
  // },
  "koala_title_data_control": {
    // 오버라이드 가능한 변수
    "$update_string": "Hp:",
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 0, 0 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#hud_title_text_string" },
      { "binding_name": "#hud_title_text_string",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#preserved_text",
        // ?? ???
        "binding_condition": "visibility_changed",
        // ?? ??
        "resolve_ancestor_scope": true
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not (#hud_title_text_string = #preserved_text) and not ((#hud_title_text_string - $update_string) = #hud_title_text_string))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
  }]},
  // ???/?? ??
  "heart_renderer": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },
  // ???/?? ??
  "armor_renderer": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },
  // ???/?? ??
  "hunger_renderer": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },
  // ???/?? ??
  "exp_progress_bar_and_hotbar_pocket/resizing_xp_bar_with_hotbar/progress_text_label": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 30,
    // 기준점에서 이동하는 거리
    "offset": [ 0, 7 ]
  },
  // ???/?? ??
  "exp_progress_bar_and_hotbar/resizing_xp_bar_with_hotbar/progress_text_label": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 30,
    // 기준점에서 이동하는 거리
    "offset": [ 0, 7 ]
  },
  // ???/?? ??
  "exp_progress_bar_and_hotbar": {
    // ?? ?? ??
    "modifications": [
      { "array_name": "controls",
        // ?? ??
        "operation": "remove",
        // ??? ???
        "control_name": "item_text_factory"
      },
      { "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "item_text_element@runeui-gameplay.item_text_element": {}}
      ]}
    ]
  },
  // ???/?? ??
  "exp_progress_bar_and_hotbar_pocket": {
    // ?? ?? ??
    "modifications": [
      { "array_name": "controls",
        // ?? ??
        "operation": "remove",
        // ??? ???
        "control_name": "item_text"
      },
      { "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "item_text_element@runeui-gameplay.item_text_element": {}}
      ]}
  ]},
  // ???/?? ??
  "root_panel": {
    // ?? ?? ??
    "modifications": [
      { "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "koala_title_data_control@hud.koala_title_data_control": {}},
          { "core@runeui-gameplay.core_hud_element": {}},
          { "skill_interface@runeui-skill_interface.root_panel": {}},
          { "notif_toast@runeui-notif_toast.root_panel": {}}
      ]}
]}}
```








### 기본
progress_screen.json
UI 재료 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: progress_screen.json
// 분류: UI 재료 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "world_loading_progress_screen": {
    // 오버라이드 가능한 변수
    "$screen_bg_content": "runeui-preload.root_panel"
}}
```








### 기본
server_form.json
UI 재료 모음 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form.json
// 분류: UI 재료 모음 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "namespace": "server_form",
  // 다른 템플릿을 가져와서 확장(상속)
  "third_party_server_screen@common.base_screen": {
    // 오버라이드 가능한 변수
    "$pos_to": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$pos_from": [ 0, 25 ],
    // 오버라이드 가능한 변수
    "$screen_animations": [
      "@common.screen_exit_animation_push_fade",
      "@common.screen_exit_animation_pop_fade",
      "@common.screen_entrance_animation_push_fade",
      "@common.screen_entrance_animation_pop_fade",
      "@runeui-common.screen_entrance_anim_push",
      "@runeui-common.screen_entrance_anim_pop",
      "@runeui-common.screen_outro_anim_push",
      "@runeui-common.screen_outro_anim_pop"
  ]},
  // ???/?? ??
  "long_form": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ?? ??
    "modifications": [
      { "array_name": "bindings",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          { "binding_name": "#title_text" },
          { "binding_type": "view",
            // 계산식/참조 값
            "source_property_name": "((#title_text - 'herblore.potionSelection.title' - 'prayer.title' - 'herblore.decant.title' - 'smelting.title' - 'salvage.title' - 'fuel.title' - 'smith.title' - 'repair.title' - 'noting_table.note.title' - 'noting_table.unnote.title' - 'PLACEHOLDER') = #title_text)",
            // 결과가 들어갈 속성
            "target_property_name": "#visible"
          }]
      }]
  },
  // ???/?? ??
  "custom_form": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ?? ??
    "modifications": [
      { "array_name": "bindings",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          { "binding_name": "#title_text" },
          { "binding_type": "view",
            // 계산식/참조 값
            "source_property_name": "((#title_text - 'herblore.potionSelection.title' - 'herblore.decant.title' - 'repair_amount.title' - 'smelting.title' - 'smith.title' - 'noting_table.amount_selection') = #title_text)",
            // 결과가 들어갈 속성
            "target_property_name": "#visible"
          }]
      }]
  },
  // ???/?? ??
  "main_screen_content": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ?? ??
    "modifications": [
      { "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "server_form_factory": {
              // 리스트를 자동으로 생성하는 공장
              "type": "factory",
              // 팩토리 템플릿 매핑
              "control_ids": {
                // ?? ??
                "long_form": "@runeui-form.long_form",
                // ?? ??
                "custom_form": "@runeui-form.custom_form"
          }}}
      ]}
  ]},
  // ???/?? ??
  "dynamic_button": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": ["100%", 32],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls":[
      {
        // ???/?? ??
        "panel_name": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [34, "100%c"],
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
                "size": [32, 32],
                // 기준점에서 이동하는 거리
                "offset": [0, 0],
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
                "size": [30, 4],
                // 기준점에서 이동하는 거리
                "offset": [-2, 16],
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
      { "button@common_buttons.light_text_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 가로/세로 크기
          "size": [ "fill", 32 ],
          // 오버라이드 가능한 변수
          "$button_text": "#form_button_text",
          // 오버라이드 가능한 변수
          "$button_text_binding_type": "collection",
          // 오버라이드 가능한 변수
          "$button_text_grid_collection_name": "form_buttons",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
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
              // 다른 템플릿을 가져와서 확장(상속)
              "default@$button_state_panel": {
                // 오버라이드 가능한 변수
                "$new_ui_button_texture": "$default_button_texture",
                // 오버라이드 가능한 변수
                "$text_color": "$default_text_color",
                // 오버라이드 가능한 변수
                "$secondary_text_color": "$light_button_secondary_default_text_color",
                // 오버라이드 가능한 변수
                "$content_alpha": "$default_content_alpha",
                // 오버라이드 가능한 변수
                "$border_color": "$light_border_default_color",
                // 오버라이드 가능한 변수
                "$border_layer": 2,
                // 오버라이드 가능한 변수
                "$default_state": true,
                // 오버라이드 가능한 변수
                "$button_alpha": "$default_button_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "hover@$button_state_panel": {
                // 오버라이드 가능한 변수
                "$new_ui_button_texture": "$hover_button_texture",
                // 오버라이드 가능한 변수
                "$text_color": "$hover_text_color",
                // 오버라이드 가능한 변수
                "$secondary_text_color": "$light_button_secondary_hover_text_color",
                // 오버라이드 가능한 변수
                "$content_alpha": 1,
                // 오버라이드 가능한 변수
                "$border_color": "$light_border_hover_color",
                // 오버라이드 가능한 변수
                "$border_layer": 4,
                // 오버라이드 가능한 변수
                "$hover_state": true,
                // 오버라이드 가능한 변수
                "$button_alpha": "$default_hover_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "outline": {
                      // 이미지 표시
                      "type": "image",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 5,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/White"
                  }},
                  { "text_hover": {
                      // 마우스/커서 따라다니는 패널
                      "type": "input_panel",
                      // 가로/세로 크기
                      "size": [	"100%c", "100%c" ],
                      // ?? ??
                      "follows_cursor": true,
                      // ?? ??
                      "always_handle_pointer": true,
                      // ?? ??
                      "always_listen_to_input": true,
                      // ??? ?? ?
                      "allow_clipping": false,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 120,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        { "label_core": {
                            // 글자 표시
                            "type": "label",
                            // 보여줄 글자
                            "text": "#form_button_text",
                            // ?? ??
                            "shadow": true,
                            // 기준점에서 이동하는 거리
                            "offset": [ "60%", 0 ],
                            // ?? ?? ?
                            "max_size": [ 220, "default" ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              { "binding_name": "#form_button_text",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection",
                                // 목록 이름
                                "binding_collection_name": "form_buttons"
                            }],
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              { "background": {
                                  // 이미지 표시
                                  "type": "image",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": -10,
                                  // 가로/세로 크기
                                  "size": [ "100% + 9px", "100% + 6px" ],
                                  // 사용할 이미지 경로
                                  "texture": "textures/ui/general_textbox"
                              }},
                              { "shadow": {
                                  // 이미지 표시
                                  "type": "image",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": -11,
                                  // ???
                                  "alpha": 0.5,
                                  // 가로/세로 크기
                                  "size": [ "100% + 9px", "100% + 6px" ],
                                  // 사용할 이미지 경로
                                  "texture": "textures/ui/hud_tip_text_background",
                                  // 기준점에서 이동하는 거리
                                  "offset": [ 2, 2 ]
                              }}
                        ]}}
                  ]}}
            ]}},
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pressed@$button_state_panel": {
                // 오버라이드 가능한 변수
                "$new_ui_button_texture": "$pressed_button_texture",
                // 오버라이드 가능한 변수
                "$text_color": "$pressed_text_color",
                // 오버라이드 가능한 변수
                "$secondary_text_color": "$light_button_secondary_pressed_text_color",
                // 오버라이드 가능한 변수
                "$button_offset|default": "$button_pressed_offset",
                // 오버라이드 가능한 변수
                "$content_alpha": "$pressed_alpha",
                // 오버라이드 가능한 변수
                "$border_color": "$light_border_pressed_color",
                // 오버라이드 가능한 변수
                "$border_layer": 5,
                // 오버라이드 가능한 변수
                "$pressed_state": true,
                // 오버라이드 가능한 변수
                "$button_alpha": "$default_pressed_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 5
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "locked@$button_state_panel": {
                // 오버라이드 가능한 변수
                "$new_ui_button_texture": "$locked_button_texture",
                // 오버라이드 가능한 변수
                "$text_color": "$locked_text_color",
                // 오버라이드 가능한 변수
                "$secondary_text_color": "$light_button_secondary_locked_text_color",
                // 오버라이드 가능한 변수
                "$content_alpha": "$locked_alpha",
                // 오버라이드 가능한 변수
                "$border_color": "$light_border_locked_color",
                // 오버라이드 가능한 변수
                "$button_image": "common_buttons.locked_button_image",
                // 오버라이드 가능한 변수
                "$border_layer": 1,
                // 오버라이드 가능한 변수
                "$locked_state": true,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            }
      ]}}
    ]
  }
}
```












### .runeui


### .runeui
brewing_table.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: brewing_table.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-brewing_table",
  // ???/?? ??
  "element_modal": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'herblore.potionSelection.title' - 'herblore.decant.title') = #title_text))",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#title_text" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$runeui:form_condition",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "gradient@runeui-common.gradient_background": {}},
      { "modal@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.756, 0.466, 0.929 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-brewing_table.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-brewing_table.scrolling_panel_modal",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-brewing_table.background",
          // 오버라이드 가능한 변수
          "$rc_custom_background_size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
      }}
  ]},
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'herblore.potionSelection.title' - 'herblore.decant.title') = #title_text))",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#title_text" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$runeui:form_condition",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "gradient@runeui-common.gradient_background": {}},
      { "form@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.756, 0.466, 0.929 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-brewing_table.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-brewing_table.scrolling_panel",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-brewing_table.background",
          // 오버라이드 가능한 변수
          "$rc_custom_background_size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
      }}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-brewing_table.dialog_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-brewing_table.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ????
    "clips_children": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {}},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/brewing_table/brewing_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이미지 반복 여부
          "tiled": true
      }}
  ]},
  // ???/?? ??
  "dialog_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "toolbar@runeui-form.form_style_toolbar": {
          // 오버라이드 가능한 변수
          "$runeui:custom_toolbar": true,
          // 오버라이드 가능한 변수
          "$runeui:help_button": false,
          // 오버라이드 가능한 변수
          "$runeui:custom_toolbar_content": "runeui-brewing_table.info_extra"
      }},
      { "styler@runeui-form.form_style_main": {}},
      { "divider@runeui-common.title_bar_divider": {}},
      { "decent_button@runeui-brewing_table.decent_button": {}}
  ]},
  // ???/?? ??
  "info_extra": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "help_brewing@runeui-common.off_dialog": {
          // 오버라이드 가능한 변수
          "$rc_hover_word": "runeui.help.brewingtable",
          // 오버라이드 가능한 변수
          "$rc_offdialog_offset": [ -19, 3 ],
          // 오버라이드 가능한 변수
          "$rc_offdialog_content": "runeui-common.help_button",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#title_text" },
            { "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not((#title_text - 'herblore.potionSelection.title') = #title_text))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
          }]
      }},
      { "help_decanting@runeui-common.off_dialog": {
          // 오버라이드 가능한 변수
          "$rc_hover_word": "runeui.help.decantingtable",
          // 오버라이드 가능한 변수
          "$rc_offdialog_offset": [ -19, 3 ],
          // 오버라이드 가능한 변수
          "$rc_offdialog_content": "runeui-common.help_button",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#title_text" },
            { "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not((#title_text - 'herblore.decant.title') = #title_text))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
          }]
      }}
  ]},
  // ???/?? ??
  "decent_button": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ -40, 3 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-brewing_table.decent_button_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // ???/?? ??
  "decent_button_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings":[
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'herblore.decant.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "button@common_buttons.light_text_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.form_button_click",
          // 오버라이드 가능한 변수
          "$button_text_binding_type": "collection",
          // 오버라이드 가능한 변수
          "$button_text_grid_collection_name": "form_buttons",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$focus_border_size_override": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$button_type_panel": "runeui-brewing_table.crafting_icon",
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_button",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_button_pressed",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_button_pressed",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_button",
          // 오버라이드 가능한 변수
          "$default_text_color": [ 0.85, 0.85, 0.85 ],
          // 오버라이드 가능한 변수
          "$hover_text_color": "$dark_button_hover_text_color",
          // 오버라이드 가능한 변수
          "$pressed_text_color": "$dark_button_pressed_text_color",
          // 오버라이드 가능한 변수
          "$locked_text_color": "$dark_button_locked_text_color",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
          }]
      }}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "crafting_icon@runeui-common.help_button_default": {
    // 사용할 이미지 경로
    "texture": "textures/ui/crafting_icon_1",
    // 가로/세로 크기
    "size": [ 12, 12 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -1 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "item_details_label": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not($hover_state or $pressed_state))",
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#form_button_text",
          // ?? ??
          "text_alignment": "left",
          // ?? ?? ?
          "max_size": [ 300, "default" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 200,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 19 ],
          // ?? ??
          "shadow": true,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_type": "collection_details",
              // 목록 이름
              "binding_collection_name": "form_buttons"
            },
            { "binding_name": "#form_button_text",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "form_buttons"
          }],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "background": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": -10,
                // 가로/세로 크기
                "size": [ "100% + 14px", "100% + 12px" ],
                // 사용할 이미지 경로
                "texture": "textures/ui/general_textbox"
            }},
            { "shadow": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": -11,
                // ???
                "alpha": 0.5,
                // 가로/세로 크기
                "size": [ "100% + 14px", "100% + 12px" ],
                // 사용할 이미지 경로
                "texture": "textures/ui/hud_tip_text_background",
                // 기준점에서 이동하는 거리
                "offset": [ 2, 2 ]
            }}
      ]}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-brewing_table.scrolling_content"
  },
  // ??? ??
  "scrolling_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel@runeui-common.dialog_box": {}},
      { "padding": { "type": "panel", "size": [ "100%", 10 ]}},
      { "wrapping_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100% - 12px", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "element@runeui-form.element_factory": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 30,
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // 오버라이드 가능한 변수
                "$runeui:panel_control": "runeui-brewing_table.grid_button_panel_padding",
                // 오버라이드 가능한 변수
                "$runeui:condition": "$runeui:form_condition"
            }}
      ]}}
  ]},
  // ???/?? ??
  "grid_button_panel_padding": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // ??? ?? ?
    "grid_item_template": "runeui-common.grid_button_core",
		// ??? ?? ?
		"grid_rescaling_type": "horizontal",
		// 목록 이름
		"collection_name": "form_buttons",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{	"binding_name": "#form_button_length" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#form_button_length - 1)",
        // 결과가 들어갈 속성
        "target_property_name": "#maximum_grid_items"
      }
	]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel_modal@runeui-form.custom_form_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-brewing_table.scrolling_modal"
  },
  // ???/?? ??
  "scrolling_modal": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding": { "type": "panel", "size": [ "100%", 3 ]}},
      { "generated_form@runeui-form.generated_contents": {}},
      { "submit_button@common_buttons.light_text_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.submit_custom_form",
          // 가로/세로 크기
          "size": [ "100% - 8px", 32 ],
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_button",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_button_pressed",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_button_pressed",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_button",
          // 오버라이드 가능한 변수
          "$default_text_color": [ 0.85, 0.85, 0.85 ],
          // 오버라이드 가능한 변수
          "$hover_text_color": "$dark_button_hover_text_color",
          // 오버라이드 가능한 변수
          "$pressed_text_color": "$dark_button_pressed_text_color",
          // 오버라이드 가능한 변수
          "$locked_text_color": "$dark_button_locked_text_color",
          // 오버라이드 가능한 변수
          "$button_text": "Craft!",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#submit_button_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
          }]
      }}
  ]}
}
```








### .runeui
chat_filter.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: chat_filter.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-chat_filter",
  // ???/?? ??
  "messages_text_core": {
    // 오버라이드 가능한 변수
    "$runeui:text_offset": [ 0, 0 ],
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$chat_text_color",
    // ?? ??
    "localize": false,
    // 기준점에서 이동하는 거리
    "offset": "$runeui:text_offset",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // 보여줄 글자
    "text": "#output_display",
    // ??? ?? ?
    "text_tts": "#output_display",
    // ??
    "font_type": "$chat_font_type",
    // ?? ?? ??
    "font_scale_factor": "$chat_font_scale_factor",
    // ??/?? ?
    "line_padding": "$chat_line_spacing"
  },
  // ???/?? ??
  "label_states": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 13 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "new_ui_binding_button_label": {
          // 글자 표시
          "type": "label",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보여줄 글자
          "text": "$button_text",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // ?? ??
          "text_alignment": "center",
          // ?? ??
          "shadow": false,
          // 가로/세로 크기
          "size": [ "100%", 10 ]
      }}
      // { "gradient_background": {
      //     "ignored": "($pressed_state)",
      //     "type": "custom",
      //     "renderer": "gradient_renderer",
      //     "layer": 1,
      //     "size": [ "100% + 4px", "100%" ],
      //     "color1": [ 1, 0, 0, 0.2 ],
      //     "color2": [ 1, 0, 0, 0.7 ]
      // }},
      // { "gradient_background": {
      //     "ignored": "(not $pressed_state)",
      //     "type": "custom",
      //     "renderer": "gradient_renderer",
      //     "layer": 1,
      //     "size": [ "100% + 4px", "100%" ],
      //     "color1": [ 0, 1, 0, 0.2 ],
      //     "color2": [ 0, 1, 0, 0.7 ]
      // }}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "toggle_template@common_toggles.light_ui_toggle": {
    // 가로/세로 크기
    "size": [ "fill", 20 ],
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.7, 0.7, 0.7 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_toggle_hover_text_color",
    // 오버라이드 가능한 변수
    "$default_checked_text_color": "$dark_toggle_checked_default_text_color",
    // 오버라이드 가능한 변수
    "$hover_checked_text_color": "$dark_toggle_checked_hover_text_color",
    // 오버라이드 가능한 변수
    "$button_image_fill": true,
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$default_texture": "textures/ui/form_tab_back_full",
    // 오버라이드 가능한 변수
    "$hover_texture": "textures/ui/form_tab_front",
    // 오버라이드 가능한 변수
    "$pressed_texture": "textures/ui/form_tab_front",
    // 오버라이드 가능한 변수
    "$pressed_no_hover_texture": "textures/ui/form_tab_front_hover",
    // 오버라이드 가능한 변수
    "$default_border_visible": false,
    // 오버라이드 가능한 변수
    "$hover_border_visible": false
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "exp_toggle@toggle_template": {
    // 오버라이드 가능한 변수
    "$button_type_panel": "runeui-chat_filter.label_states",
    // 오버라이드 가능한 변수
    "$button_text|default": "%runeui.chat.experience_filter",
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "rcui-exp_chat",
    // 오버라이드 가능한 변수
    "$toggle_name": "exp_chat"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "normal_toggle@toggle_template": {
    // 오버라이드 가능한 변수
    "$button_type_panel": "runeui-chat_filter.label_states",
    // 오버라이드 가능한 변수
    "$button_text|default": "%runeui.chat.chat_filter",
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "rcui-normal_chat",
    // 오버라이드 가능한 변수
    "$toggle_name": "normal_chat"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "notif_toggle@toggle_template": {
    // 오버라이드 가능한 변수
    "$button_type_panel": "runeui-chat_filter.label_states",
    // 오버라이드 가능한 변수
    "$button_text|default": "%runeui.chat.notification.filter",
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "rcui-notif_chat",
    // 오버라이드 가능한 변수
    "$toggle_name": "notif_chat"
  },
  // ???/?? ??
  "chat_bottom_panel_filter": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -27 ],
    // 가로/세로 크기
    "size": [ "100%", 20 ],
    // ?? ?? ?
    "min_size": [ "100%", 20 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "normal_toggle@runeui-chat_filter.normal_toggle": {} },
      { "exp_toggle@runeui-chat_filter.exp_toggle": {} },
      { "notif_toggle@runeui-chat_filter.notif_toggle": {} }
  ]}
}
```








### .runeui
common.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: common.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-common",
  // ???/?? ??
  "outline_fade_starter": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": 0.0,
    // 끝 값
    "to": 1.0,
    // 다음 애니메이션으로 연결
    "next": "@runeui-common.outline_fade_0"
  },
  // ???/?? ??
  "outline_fade_0": {
    // 투명도 변화
    "anim_type": "alpha",
    // 걸리는 시간(초)
    "duration": 2,
    // 움직임 곡선
    "easing": "in_out_sine",
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0.6,
    // 다음 애니메이션으로 연결
    "next": "@runeui-common.outline_fade_1"
  },
  // ???/?? ??
  "outline_fade_1": {
    // 투명도 변화
    "anim_type": "alpha",
    // 걸리는 시간(초)
    "duration": 2,
    // 움직임 곡선
    "easing": "in_out_sine",
    // 시작 값
    "from": 0.6,
    // 끝 값
    "to": 1,
    // 다음 애니메이션으로 연결
    "next": "@runeui-common.outline_fade_0"
  },
  // ???/?? ??
  "screen_outro_anim_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "in_cubic",
    // 걸리는 시간(초)
    "duration": "$transition_time_push",
    // 시작 값
    "from": "$pos_to",
    // 끝 값
    "to": "$pos_from",
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },
  // ???/?? ??
  "screen_outro_anim_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "in_cubic",
    // 걸리는 시간(초)
    "duration": "$transition_time_pop",
    // 시작 값
    "from": "$pos_to",
    // 끝 값
    "to": "$pos_from",
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },
  // ???/?? ??
  "screen_entrance_animation_push_fade": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": "$transition_time_push",
    // 시작 값
    "from": 0.0,
    // 끝 값
    "to": 1.0,
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },
  // ???/?? ??
  "screen_entrance_animation_pop_fade": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": "$transition_time_pop",
    // 시작 값
    "from": 1.0,
    // 끝 값
    "to": 0.0,
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },
  // ???/?? ??
  "screen_entrance_anim_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": "$transition_time_push",
    // 시작 값
    "from": "$pos_from",
    // 끝 값
    "to": "$pos_to",
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },
  // ???/?? ??
  "screen_entrance_anim_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": "$transition_time_pop",
    // 시작 값
    "from": "$pos_from",
    // 끝 값
    "to": "$pos_to",
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },
  // Can't optimize this so i just fetch it from the forms.
  // The '$dialog_text' can't be binding.
  "dialog_box": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": "$dialog_size",
    // 오버라이드 가능한 변수
    "$dialog_text|default": "#form_text",
    // 오버라이드 가능한 변수
    "$dialog_size|default": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "main_label": {
          // 글자 표시
          "type": "label",
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
          // 가로/세로 크기
          "size": [ "100% - 6px", "default" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // ?? ??
          "shadow": true,
          // 보여줄 글자
          "text": "$dialog_text",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "$dialog_text" },
            { "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not ($dialog_text = ''))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
          }],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "background": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100% + 20px", "100% + 6px" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": -1,
                // 기준점에서 이동하는 거리
                "offset": [ -2, 0 ],
                // 사용할 이미지 경로
                "texture": "textures/ui/solid_textbox"
            }}
      ]}}
  ]},
  // ???/?? ??
  "gradient_background": {
    // 특수 렌더러(그라디언트/플레이어 등)
    "type": "custom",
    // 커스텀 렌더러 종류
    "renderer": "gradient_renderer",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "125%", "125%" ],
    // 오버라이드 가능한 변수
    "$rc_gradient_color1|default": [ 0.756, 0.466, 0.929, 0 ],
    // 오버라이드 가능한 변수
    "$rc_gradient_color2|default": [ 0.756, 0.466, 0.929, 0.7 ],
    // ?? ?? ?
    "color1": "$rc_gradient_color1",
    // ?? ?? ?
    "color2": "$rc_gradient_color2",
    // 애니메이션 목록
    "anims": [
      "@runeui-common.loop_test_1"
    ]
  },
  // ???/?? ??
  "loop_test_0": {
    // 투명도 변화
    "anim_type": "alpha",
    // 걸리는 시간(초)
    "duration": 2,
    // 움직임 곡선
    "easing": "in_out_sine",
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0.6,
    // 다음 애니메이션으로 연결
    "next": "@runeui-common.loop_test_1"
  },
  // ???/?? ??
  "loop_test_1": {
    // 투명도 변화
    "anim_type": "alpha",
    // 걸리는 시간(초)
    "duration": 2,
    // 움직임 곡선
    "easing": "in_out_sine",
    // 시작 값
    "from": 0.6,
    // 끝 값
    "to": 1,
    // 다음 애니메이션으로 연결
    "next": "@runeui-common.loop_test_0"
  },
  // ???/?? ??
  "gradient_background_black": {
    // 특수 렌더러(그라디언트/플레이어 등)
    "type": "custom",
    // 커스텀 렌더러 종류
    "renderer": "gradient_renderer",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 오버라이드 가능한 변수
    "$rc_gradient_color2|default": [ 0.756, 0.466, 0.929, 0 ],
    // 오버라이드 가능한 변수
    "$rc_gradient_color1|default": [ 0.756, 0.466, 0.929, 0.7 ],
    // ?? ?? ?
    "color1": "$rc_gradient_color1",
    // ?? ?? ?
    "color2": "$rc_gradient_color2"
  },
  // ???/?? ??
  "background": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "150%", "150%" ],
    // 사용할 이미지 경로
    "texture": "textures/ui/Black",
    // ???
    "alpha": 0.7,
    // 겹치는 순서(숫자 클수록 위)
    "layer": -120
  },
  // ???/?? ??
  "off_dialog": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 기준점에서 이동하는 거리
    "offset": "$rc_offdialog_offset",
    // 오버라이드 가능한 변수
    "$rc_offdialog_offset|default": [ -3, 3 ],
    // 오버라이드 가능한 변수
    "$rc_offdialog_content|default": "",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "dialogue_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/general_form",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2
      }},
      { "template@$rc_offdialog_content": {}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "help_button@common_toggles.light_ui_toggle": {
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$border_visible": false,
    // 오버라이드 가능한 변수
    "$border_alpha": 0,
    // 오버라이드 가능한 변수
    "$button_image_fill": true,
    // 오버라이드 가능한 변수
    "$default_texture": "textures/ui/form_button",
    // 오버라이드 가능한 변수
    "$hover_texture": "textures/ui/form_button_pressed",
    // 오버라이드 가능한 변수
    "$pressed_texture": "textures/ui/form_button_pressed",
    // 오버라이드 가능한 변수
    "$pressed_no_hover_texture": "textures/ui/form_button_pressed",
    // 오버라이드 가능한 변수
    "$default_border_visible": false,
    // 오버라이드 가능한 변수
    "$hover_border_visible": false,
    // 오버라이드 가능한 변수
    "$button_type_panel": "runeui-common.help_states",
    // 오버라이드 가능한 변수
    "$button_text|default": "%runeui.chat.notification.filter",
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "rcui-help_state",
    // 오버라이드 가능한 변수
    "$toggle_name": "help_state"
  },
  // ???/?? ??
  "help_states": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 13 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "label": {
          // 글자 표시
          "type": "label",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 보여줄 글자
          "text": "?",
          // 오버라이드 가능한 변수
          "$rc_label_color|default": [ 1, 1, 1 ],
          // ?? (R,G,B,A)
          "color": "$rc_label_color",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            { "requires": "$pressed_state",
              // 오버라이드 가능한 변수
              "$rc_label_color": "$e_color_format"
          }]
      }},
      { "item_details_label": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $pressed_state)",
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "$rc_hover_word",
          // ?? ??
          "text_alignment": "left",
          // ?? ?? ?
          "max_size": [ 300, "default" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 200,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 기준점에서 이동하는 거리
          "offset": [ -92, 25 ],
          // ?? ??
          "shadow": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "background": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": -10,
                // 가로/세로 크기
                "size": [ "100% + 14px", "100% + 12px" ],
                // 사용할 이미지 경로
                "texture": "textures/ui/general_textbox"
            }},
            { "shadow": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": -11,
                // ???
                "alpha": 0.5,
                // 가로/세로 크기
                "size": [ "100% + 14px", "100% + 12px" ],
                // 사용할 이미지 경로
                "texture": "textures/ui/hud_tip_text_background",
                // 기준점에서 이동하는 거리
                "offset": [ 2, 2 ]
            }}
      ]}}
  ]},
  // ???/?? ??
  "help_button_default": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/form_button",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "label": {
          // 글자 표시
          "type": "label",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 보여줄 글자
          "text": "?"
      }}
  ]},
  // ???/?? ??
  "close_button_default": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/form_button",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "image": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 16, 16 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/close_X_button"
      }}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "close_button_pressed@runeui-common.close_button_default": {
    // 사용할 이미지 경로
    "texture": "textures/ui/form_button_pressed",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "image": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 16, 16 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/close_X_button_hover"
      }}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "close_button@common.button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_exit",
    // 가로/세로 크기
    "size": [ 15, 15 ],
    // 포커스 가능 여부
    "focus_enabled": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "default@runeui-common.close_button_default": {} },
      { "hover@runeui-common.close_button_pressed": {} },
      { "pressed@runeui-common.close_button_pressed": {} }
  ]},
  // ???/?? ??
  "grid_button_panel_core": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 오버라이드 가능한 변수
    "$grid_dimensions|default": [ 6, 3 ],
    // 그리드 칸 수
    "grid_dimensions": "$grid_dimensions",
    // ??? ?? ?
    "grid_item_template": "runeui-common.grid_button_core",
		// 목록 이름
		"collection_name": "form_buttons"
  },
  // ???/?? ??
  "grid_button_panel_padding": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // ??? ?? ?
    "grid_item_template": "runeui-common.grid_button_core",
		// ??? ?? ?
		"grid_fill_direction": "horizontal",
		// ??? ?? ?
		"grid_rescaling_type": "horizontal",
		// 목록 이름
		"collection_name": "form_buttons",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{	"binding_name": "#form_button_length" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#form_button_length - 1)",
        // 결과가 들어갈 속성
        "target_property_name": "#maximum_grid_items"
      }
	]},
  // ???/?? ??
  "grid_button_panel": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // ??? ?? ?
    "grid_item_template": "runeui-common.grid_button_core",
		// ??? ?? ?
		"grid_fill_direction": "horizontal",
		// ??? ?? ?
		"grid_rescaling_type": "horizontal",
		// 목록 이름
		"collection_name": "form_buttons",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{	"binding_name": "#form_button_length",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#maximum_grid_items"
			}
	]},
  // ???/?? ??
  "grid_button_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 34, 34 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings":[
      { "binding_name": "#form_button_texture",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#texture = '') or (#texture = 'loading')))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 32, 32 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "image": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 100,
                // 가로/세로 크기
                "size": [ "100% - 2px", "100% - 2px" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings":[
                  { "binding_name": "#form_button_texture",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "form_buttons"
                  },
                  { "binding_name": "#form_button_texture_file_system",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture_file_system",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "form_buttons"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not ((#texture = '') or (#texture = 'loading')))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }]
            }},
            { "outline": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 사용할 이미지 경로
                "texture": "textures/ui/Black"
            }},
            { "button@common_buttons.light_text_button": {
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.form_button_click",
                // 오버라이드 가능한 변수
                "$button_text": "#null",
                // 오버라이드 가능한 변수
                "$button_text_binding_type": "collection",
                // 오버라이드 가능한 변수
                "$button_text_grid_collection_name": "form_buttons",
                // 오버라이드 가능한 변수
                "$button_text_max_size": [ "100%", 20 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_type": "collection_details",
                    // 목록 이름
                    "binding_collection_name": "form_buttons"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "hover": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        { "outline": {
                            // 이미지 표시
                            "type": "image",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 5,
                            // 사용할 이미지 경로
                            "texture": "textures/ui/White"
                        }},
                        { "text_hover": {
                            // 마우스/커서 따라다니는 패널
                            "type": "input_panel",
                            // 가로/세로 크기
                            "size": [	"100%c", "100%c" ],
                            // ?? ??
                            "follows_cursor": true,
                            // ?? ??
                            "always_handle_pointer": true,
                            // ?? ??
                            "always_listen_to_input": true,
                            // ??? ?? ?
                            "allow_clipping": false,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 120,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              { "label_core": {
                                  // 글자 표시
                                  "type": "label",
                                  // 보여줄 글자
                                  "text": "#form_button_text",
                                  // ?? ??
                                  "shadow": true,
                                  // 기준점에서 이동하는 거리
                                  "offset": [ "60%", 0 ],
                                  // ?? ?? ?
                                  "max_size": [ 220, "default" ],
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": [
                                    { "binding_name": "#form_button_text",
                                      // 목록 데이터를 반복 연결
                                      "binding_type": "collection",
                                      // 목록 이름
                                      "binding_collection_name": "form_buttons"
                                  }],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    { "background": {
                                        // 이미지 표시
                                        "type": "image",
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": -10,
                                        // 가로/세로 크기
                                        "size": [ "100% + 9px", "100% + 6px" ],
                                        // 사용할 이미지 경로
                                        "texture": "textures/ui/general_textbox"
                                    }},
                                    { "shadow": {
                                        // 이미지 표시
                                        "type": "image",
                                        // 겹치는 순서(숫자 클수록 위)
                                        "layer": -11,
                                        // ???
                                        "alpha": 0.5,
                                        // 가로/세로 크기
                                        "size": [ "100% + 9px", "100% + 6px" ],
                                        // 사용할 이미지 경로
                                        "texture": "textures/ui/hud_tip_text_background",
                                        // 기준점에서 이동하는 거리
                                        "offset": [ 2, 2 ]
                                    }}
                              ]}}
                        ]}}
                  ]}}
            ]}}
      ]}}
  ]},
  // ???/?? ??
  "standard_title_label": {
    // 글자 표시
    "type": "label",
    // 가로/세로 크기
    "size": "$title_size",
    // 기준점에서 이동하는 거리
    "offset": "$title_offset",
    // ?? ?? ?
    "max_size": "$title_size",
    // ?? (R,G,B,A)
    "color": "$title_text_color",
    // 보여줄 글자
    "text": "$title_text",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 4,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // ?? ??
    "shadow": true,
    // ?? ??
    "text_alignment": "$title_alignment",
    // 오버라이드 가능한 변수
    "$title_size|default": [ "100%  - 16px", 10 ],
    // 오버라이드 가능한 변수
    "$title_offset|default": [ 0, 6 ],
    // 오버라이드 가능한 변수
    "$title_alignment|default": "left",
    // 오버라이드 가능한 변수
    "$title_text|default": "#output",
    // 오버라이드 가능한 변수
    "$pos|default": "%.0s",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#title_text" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('§z' + (#title_text - ($pos * #title_text)))",
        // 결과가 들어갈 속성
        "target_property_name": "#output"
  }]},
  // ???/?? ??
  "title_bar_divider": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 1, 11 ],
    // 기준점에서 이동하는 거리
    "offset": [ -37, 5 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // ?? (R,G,B,A)
    "color": "$title_text_color",
    // 사용할 이미지 경로
    "texture": "textures/ui/White"
  }
}
```








### .runeui
exp_toast.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: exp_toast.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-exp_toast",
  // ???/?? ??
  "root_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 가로/세로 크기
    "size": [ 300, "100%c" ],
    // ?? ?? ?
    "max_size": [ 300, 50 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -53 ],
    // ?? ????
    "clips_children": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "factory_stack": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 가로/세로 크기
          "size": [ 170, "100%c" ],
          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "chat_item_factory",
            // ?? ?? ?
            "max_children_size": 10,
            // 팩토리 템플릿 매핑
            "control_ids": {
              // ?? ??
              "chat_item": "runeui-exp_toast@runeui-exp_toast.element"
          }}
      }}
  ]},
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": -20,
    // 가로/세로 크기
    "size": [ 170, "100%cm" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -1 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "@runeui-exp_toast.subbar": {}}
  ]},
  // ???/?? ??
  "subbar": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 170, 5 ],
    //"propagate_alpha": true,
    "layer": 10,
    //"texture": "textures/ui/Black",
    "alpha": 0.7,
    // 애니메이션 목록
    "anims": [
      "@runeui-exp_toast.anim_chat_pile_up"
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#chat_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "chat_text_grid",
        // ?? ???
        "binding_condition": "once"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text - '<' - '>')",
        // 결과가 들어갈 속성
        "target_property_name": "#output"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not((#output - '\ue1fd') = #output))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 200, "100%" ],
          // 사용할 이미지 경로
          "texture": "textures/ui/Black",
          // ???
          "alpha": 0.7,
          // ??? ?? ?
          "propagate_alpha": true,
          // 애니메이션 목록
          "anims": [
            "@runeui-exp_toast.anim_chat_bg_wait_bottom"
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "gradient_background_left": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 가로/세로 크기
                "size": [ 30, "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ -30, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // ?? ??
                "gradient_direction": "horizontal",
                // ?? ?? ?
                "color1": [ 0, 0, 0, 0 ],
                // ?? ?? ?
                "color2": [ 0, 0, 0, 1 ]
            }},
            { "gradient_background_right": {
                // 특수 렌더러(그라디언트/플레이어 등)
                "type": "custom",
                // 커스텀 렌더러 종류
                "renderer": "gradient_renderer",
                // 가로/세로 크기
                "size": [ 30, "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 30, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "right_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "right_middle",
                // ?? ??
                "gradient_direction": "horizontal",
                // ?? ?? ?
                "color1": [ 0, 0, 0, 1 ],
                // ?? ?? ?
                "color2": [ 0, 0, 0, 0 ]
            }}
      ]}},
      { "text_wrapper": {
          // 클릭 가능한 버튼
          "type": "button",
          // 가로/세로 크기
          "size": [ 170, "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 5,
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "text": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "#chat_text",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_left",
                // ?? ??
                "shadow": true,
                // 기준점에서 이동하는 거리
                "offset": [ 0, -1.5 ],
                // ?? ??
                "localize": false,
                // 가로/세로 크기
                "size": [ 200, "default" ],
                // ?? ??
                "enable_profanity_filter": true,
                // ?? ?? ??
                "font_scale_factor": 0.75,
                // 애니메이션 목록
                "anims": [ "@runeui-exp_toast.anim_chat_txt_wait" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#text",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "chat_text_grid"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('§z' + (#text - (%.3s * #text)))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#chat_text"
                }]
            }}
      ]}}
  ]},
  // ???/?? ??
  "anim_chat_pile_up": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": [ 200, 0 ],
    // 끝 값
    "to": [ 200, 10 ]
  },
  // ???/?? ??
  "anim_chat_bg_alpha_bottom": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_quart",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": 0.7,
    // 끝 값
    "to": 0
  },
  // ???/?? ??
  "anim_chat_bg_wait_bottom": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 다음 애니메이션으로 연결
    "next": "@runeui-exp_toast.anim_chat_bg_alpha_bottom"
  },
  // ???/?? ??
  "anim_chat_txt_alpha": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_quart",
    // 걸리는 시간(초)
    "duration": 0.7,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0
  },
  // ???/?? ??
  "anim_chat_txt_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 1,
    // 다음 애니메이션으로 연결
    "next": "@runeui-exp_toast.anim_chat_txt_alpha"
  },

  // ???/?? ??
  "progress_bar_anim": {
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": [ "0%", 1 ],
    // 끝 값
    "to": [ "100% - 8px", 1 ],
    // 걸리는 시간(초)
    "duration": "($chat_item_lifetime + 2)"
  },
  // ???/?? ??
  "anim_chat_stack": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": [ 180, 0 ],
    // 끝 값
    "to": [ 180, "100%c" ]
  },
  // ???/?? ??
  "anim_chat_bg_pop": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": [ "100%", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // 다음 애니메이션으로 연결
    "next": "@runeui-exp_toast.anim_chat_bg_wait_push"
  },
  // ???/?? ??
  "anim_chat_bg_wait_push": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 1,
    // 다음 애니메이션으로 연결
    "next": "@runeui-exp_toast.anim_chat_bg_push"
  },
  // ???/?? ??
  "anim_chat_bg_push": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "in_expo",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "100%", 0 ],
    // ?? ??
    "destroy_at_end": "chat_grid_item"
  },
  // ???/?? ??
  "toast_image_template": {
    // 오버라이드 가능한 변수
    "$arx:chat_image_binding|default": "#text",
    // 이미지 표시
    "type": "image",
    // ??? ?? ?
    "force_texture_reload": true,
    // ??? ?? ?
    "allow_debug_missing_texture": false,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#chat_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "chat_text_grid",
        // ?? ???
        "binding_condition": "once"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$arx:chat_image_binding",
        // 결과가 들어갈 속성
        "target_property_name": "#texture"
  }]},
  // ???/?? ??
  "toast_label_template": {
	  // 오버라이드 가능한 변수
	  "$arx:chat_text_binding|default": "#text",
    // 글자 표시
    "type": "label",
    // ?? ?? ?
    "max_size": [ "100% - 18px", 20 ],
	  // 기준점(어디에서 시작할지)
	  "anchor_from": "left_middle",
	  // 붙일 위치(어디에 놓을지)
	  "anchor_to": "left_middle",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#chat_text",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "chat_text_grid",
        // ?? ???
        "binding_condition": "once"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$arx:chat_text_binding",
        // 결과가 들어갈 속성
        "target_property_name": "#displaytext"
  }]}
}
```









[분할 목록으로 돌아가기](preview.html#example-view)

