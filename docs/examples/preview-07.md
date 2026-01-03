---
title: 예제 미리보기 (7/12)
outline: false
search: false
---

# 예제 미리보기 (7/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### 기본
hud_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "hud",
  //---------------------------------------------------------------------------
  // Animated Progress Bar System
  //---------------------------------------------------------------------------
  "hud_title_text/title_frame": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "title",
        // 계산식/참조 값
        "source_property_name": "((#text - 'bar:') = #text)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "increase_anim": {
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": [0, "100%"],
    // 끝 값
    "to": ["100%", "100%"],
    // 걸리는 시간(초)
    "duration": "$duration",
    // 움직임 곡선
    "easing": "$increase_easing"
  },

  // ???/?? ??
  "decrease_anim": {
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": ["100%", "100%"],
    // 끝 값
    "to": [0, "100%"],
    // 걸리는 시간(초)
    "duration": "$duration",
    // 움직임 곡선
    "easing": "$decrease_easing"
  },

  // ???/?? ??
  "trail_anim": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "$trail_delay",
    // 다음 애니메이션으로 연결
    "next": "@hud.decrease_anim"
  },

  // ???/?? ??
  "animated_bar_image": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bar_image": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": "$size_anim",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ???
          "alpha": "$bar_alpha",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 사용할 이미지 경로
          "texture": "$bar_texture"
        }
      },
      {
        // ???/?? ??
        "trail_image": {
          // 완전히 제거(공간도 없음)
          "ignored": "$ignore_trail",
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 0,
          // 가로/세로 크기
          "size": "@hud.trail_anim",
          // ???
          "alpha": "$trail_alpha",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 사용할 이미지 경로
          "texture": "$trail_texture"
        }
      }
    ]
  },

  // ???/?? ??
  "animated_progress_bar": {
    // animations
    "$duration": 0.25,
    // 오버라이드 가능한 변수
    "$trail_delay|default": 0.25,
    // 오버라이드 가능한 변수
    "$increase_easing|default": "in_out_sine",
    // 오버라이드 가능한 변수
    "$decrease_easing|default": "in_out_circ",

    // progress bar
    "$background_size|default": [80, 6],
    // 오버라이드 가능한 변수
    "$background_texture|default": "textures/ui/bar_bg",

    // 오버라이드 가능한 변수
    "$background_alpha|default": 1,
    // 오버라이드 가능한 변수
    "$bar_texture|default": "textures/ui/bar",
    // 오버라이드 가능한 변수
    "$bar_size|default": ["100% - 2px", "100% - 2px"], // 100% is the width / height of background texture ($background_size)
    // 오버라이드 가능한 변수
    "$bar_offset|default": [1, 1],
    // 오버라이드 가능한 변수
    "$bar_alpha|default": 1,

    // 오버라이드 가능한 변수
    "$ignore_trail|default": false,
    // 오버라이드 가능한 변수
    "$trail_texture|default": "textures/ui/White",
    // 오버라이드 가능한 변수
    "$trail_alpha|default": 0.6,

    // DO NOT FORGET to define these
    "$multiplier|default": 0.05, // (1 / max_value) ; max_value is the maximum value of progress bar, here 20
    // 오버라이드 가능한 변수
    "$data_source|default": "<preserved title or subtitle panel>",
    // 오버라이드 가능한 변수
    "$max_value_binding|default": "", // keep this empty if you don't want the max value to be dynamic
    // 오버라이드 가능한 변수
    "$progress_binding|default": "#value", // name of the binding that will provide the value for this progress bar

    // progress bar text
    "$ignore_text|default": false,
    // 오버라이드 가능한 변수
    "$text_color|default": [1, 1, 1],
    // 오버라이드 가능한 변수
    "$text_font_type|default": "default",
    // 오버라이드 가능한 변수
    "$text_font_scale_factor|default": 1,
    // 오버라이드 가능한 변수
    "$text_shadow|default": true,
    // 오버라이드 가능한 변수
    "$text_offset|default": [0, -12],
    // 오버라이드 가능한 변수
    "$text_size|default": ["default", "default"],
    // 오버라이드 가능한 변수
    "$text_format|default": "('§z' + $progress_binding + '/20')", // this goes in source_property_name

    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": "$background_size",
    // 오버라이드 가능한 변수
    "$one": 1.0,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "progress_bar_text": {
          // 완전히 제거(공간도 없음)
          "ignored": "$ignore_text",
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#text",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // ?? (R,G,B,A)
          "color": "$text_color",
          // ??
          "font_type": "$text_font_type",
          // ?? ?? ??
          "font_scale_factor": "$text_font_scale_factor",
          // ?? ??
          "shadow": "$text_shadow",
          // 기준점에서 이동하는 거리
          "offset": "$text_offset",
          // 가로/세로 크기
          "size": "$text_size",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "$data_source",
              // 계산식/참조 값
              "source_property_name": "$text_format",
              // 결과가 들어갈 속성
              "target_property_name": "#text"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "bar_parent_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 기준점에서 이동하는 거리
          "offset": "$bar_offset",
          // 가로/세로 크기
          "size": "$bar_size",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "animated_bar_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // ??/?? ?
                "use_anchored_offset": true,
                // 이 컨트롤 안에서 쓰는 임시 저장소
                "property_bag": {
                  // ???/??? ?
                  "#prev_value": 0,
                  // ???/??? ?
                  "#multiplier": "$multiplier"
                },
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 완전히 제거(공간도 없음)
                    "ignored": "($max_value_binding = '')",
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "$data_source",
                    // 계산식/참조 값
                    "source_property_name": "$max_value_binding",
                    // 결과가 들어갈 속성
                    "target_property_name": "#max_bind"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "$data_source",
                    // 계산식/참조 값
                    "source_property_name": "#visible",
                    // 결과가 들어갈 속성
                    "target_property_name": "#key"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "$data_source",
                    // 계산식/참조 값
                    "source_property_name": "$progress_binding",
                    // 결과가 들어갈 속성
                    "target_property_name": "#changed_value"
                  },
                  {
                    // 완전히 제거(공간도 없음)
                    "ignored": "($max_value_binding = '')",
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "($one / #max_bind)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#multiplier"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#prev_value * (1 - #key) + #changed_value * #key)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#prev_value"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#changed_value + (#prev_value - #changed_value) * ((#prev_value - #changed_value) < 0))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#min" // min(#prev_value, #changed_value)
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(#min * #multiplier)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#anchored_offset_value_x"
                  },
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "((#changed_value + #prev_value - 2 * #min) * #multiplier)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#size_binding_x"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "anim_increase": {
                      // 데이터 목록을 반복 배치
                      "type": "collection_panel",
                      // 가로/세로 크기
                      "size": ["100%", "100%"],
                      // 오버라이드 가능한 변수
                      "$size_anim": "@hud.increase_anim",
                      // 오버라이드 가능한 변수
                      "$ignore_trail": true,
                      // 목록 아이템을 자동으로 생성
                      "factory": {
                        // ?? ??
                        "name": "anim_increase",
                        // ??? ???
                        "control_name": "hud.animated_bar_image"
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "animated_bar_panel",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "((#changed_value > #prev_value) * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#collection_length"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "anim_decrease": {
                      // 데이터 목록을 반복 배치
                      "type": "collection_panel",
                      // 가로/세로 크기
                      "size": ["100%", "100%"],
                      // 오버라이드 가능한 변수
                      "$size_anim": "@hud.decrease_anim",
                      // 목록 아이템을 자동으로 생성
                      "factory": {
                        // ?? ??
                        "name": "anim_decrease",
                        // ??? ???
                        "control_name": "hud.animated_bar_image"
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "animated_bar_panel",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "((#prev_value > #changed_value) * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#collection_length"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "bar_panel": {
                // 이미지 표시
                "type": "image",
                // ???
                "alpha": "$bar_alpha",
                // 사용할 이미지 경로
                "texture": "$bar_texture",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "animated_bar_panel",
                    // ?? ??
                    "resolve_sibling_scope": true,
                    // 계산식/참조 값
                    "source_property_name": "(#min * #multiplier)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#size_binding_x"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "bar_bg": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": "$background_size",
          // ???
          "alpha": "$background_alpha",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 0,
          // 사용할 이미지 경로
          "texture": "$background_texture"
        }
      }
    ]
  },

  // ???/?? ??
  "preserved_title": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [0, 0],
    // 오버라이드 가능한 변수
    "$update_string": "bar:",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
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
        "source_property_name": "(not (#hud_title_text_string = #preserved_text) and not ((#hud_title_text_string - $update_string) = #hud_title_text_string))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#preserved_text - $update_string) + 0)",
        // 결과가 들어갈 속성
        "target_property_name": "#progress"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#preserved_text - ($update_string + #progress + ',')) + 0)",
        // 결과가 들어갈 속성
        "target_property_name": "#max_value"
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Hud Screen
  //---------------------------------------------------------------------------
  "hud_player_renderer": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [
      0, //Setting the size to 0 will mean the paper doll doesn't exist - Alien
      0
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "hud_player": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "hud_player_renderer",
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
  // Displays player's position in the form "Position: 0, 0, 0", as well as "Agent Pos: 0, 0, 0" if an owned agent is present
  "player_position": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [
      "100%c + 6px",
      "100%c + 2px"
    ],
    // 사용할 이미지 경로
    "texture": "textures/ui/Black",
    "alpha": 0.0, //Remove background - Alien
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "player_position_text": {
          // 글자 표시
          "type": "label",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
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
            }
          ]
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#paper_doll_visible", //Setting position binding to the paper doll binding, meaning it will only be shown when the paper doll is enabled. - Alien
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // ?? ???
        "binding_condition": "always",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },
  // Displays number of played in-game days
  "number_of_days_played": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [
      "100%c + 6px",
      "100%c + 2px"
    ],
    // 사용할 이미지 경로
    "texture": "textures/ui/Black",
    "alpha": 0.0, //Remove background - Alien
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "number_of_days_played_text": {
          // 글자 표시
          "type": "label",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
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
            }
          ]
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#paper_doll_visible", //Setting position binding to the paper doll binding, meaning it will only be shown when the paper doll is enabled. - Alien
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // ?? ???
        "binding_condition": "always",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },
  // ???/?? ??
  "anim_chat_bg_alpha": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_quart",
    // ?? ??
    "destroy_at_end": "chat_grid_item",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": 0.0, //Removes background from chat fade out animation - Alien
    // 끝 값
    "to": 0
  },
  // ???/?? ??
  "chat_grid_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [
      "100%-2px",
      "100%c"
    ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "(not #on_new_death_screen)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
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
          "alpha": 0.0, //Remove chat background - Alien
          // 가로/세로 크기
          "size": [
            "100%",
            "100%c"
          ],
          // 애니메이션 목록
          "anims": [
            "@hud.anim_chat_bg_wait"
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chat_text@chat_label": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 기준점에서 이동하는 거리
                "offset": [
                  2,
                  0
                ]
              }
            }
          ]
        }
      }
    ]
  },
  // ???/?? ??
  "anim_item_name_text_alpha_stay": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 1.5, //Time for item name to wait on screen - Alien
    // 다음 애니메이션으로 연결
    "next": "@hud.anim_item_name_text_alpha_out"
  },
  // ???/?? ??
  "anim_item_name_text_alpha_out": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_expo",
    // ?? ??
    "destroy_at_end": "$destroy_id",
    // 걸리는 시간(초)
    "duration": 1, //Time for fade out animation - Alien
    // 시작 값
    "from": 1.0,
    // 끝 값
    "to": 0
  },
  //Did not need to edit background animation due to background being removed.
  //Did not edit in animation because it made the fade in weird when switching between items
  "item_name_text_root": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [
      "100%cm",
      "100%cm"
    ],
    // 오버라이드 가능한 변수
    "$show_interact_padding|default": false,
    // 오버라이드 가능한 변수
    "$show_survival_padding|default": false,
    // 오버라이드 가능한 변수
    "$show_text_background|default": false,
    // 오버라이드 가능한 변수
    "$text_color|default": "$tool_tip_text",
    // 오버라이드 가능한 변수
    "$text_binding|default": "#item_text",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 오버라이드 가능한 변수
    "$wait_duration|default": 1,
    // 오버라이드 가능한 변수
    "$destroy_id|default": "item_name_text",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "item_text_aligner": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [
            "100%cm",
            "100%c"
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "item_text_control": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [
                  "100%cm",
                  "100%cm"
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  //{
                  //  "item_text_background": {
                  //    "ignored": "(not $show_text_background)",
                  //    "type": "image",
                  //    "size": [
                  //      "100%sm + 12px",
                  //      "100%sm + 5px"
                  //    ],
                  //    "texture": "textures/ui/hud_tip_text_background",
                  //    "alpha": "@hud.anim_item_name_background_alpha_in"
                  //  }
                  //},
                  {
                    // ???/?? ??
                    "item_text_label": {
                      // 글자 표시
                      "type": "label",
                      // ???/?? ??
                      "max_size": [
                        200,
                        "default"
                      ],
                      // ?? ??
                      "text_alignment": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 31,
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 보여줄 글자
                      "text": "#text",
                      "shadow": true, //Add shadow so its still readable - Alien
                      // ???
                      "alpha": "@hud.anim_item_name_text_alpha_in",
                      // Disable profanity filter for this control so that
                      // we can enable it on the fly only for items with custom names
                      "enable_profanity_filter": false,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "$text_binding",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#text"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "interact_padding@common.empty_panel": {
                // 보이기/숨기기(공간 유지)
                "visible": "$show_interact_padding",
                // To not overlap with the interact button
                // the text needs to move up by 18
                "size": [
                  "100%sm",
                  18
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#interact_visible",
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
              "survival_buffer@common.empty_panel": {
                // 보이기/숨기기(공간 유지)
                "visible": "$show_survival_padding",
                // Survival HUD has elements above the hot bar
                // meaning the text needs to move up
                "size": [
                  "100%sm",
                  17
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#show_survival_ui",
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
  "root_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$xp_control_offset|default": [
      0,
      -13
    ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$education_edition",
        // 오버라이드 가능한 변수
        "$left_helpers": "hud.left_helpers_edu"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $education_edition)",
        // 오버라이드 가능한 변수
        "$left_helpers": "hud.left_helpers"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "layout_customization_reset": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [
            "200%",
            "200%"
          ],
          // 사용할 이미지 경로
          "texture": "textures/ui/Black.png",
          // ?? ??
          "fill": true,
          // ???
          "alpha": 0.5,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "layout_customization_reset_modal@common_dialogs.main_panel_two_buttons": {
                // 가로/세로 크기
                "size": [
                  210,
                  160
                ],
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 오버라이드 가능한 변수
                "$child_control": "library_modal.modal_text_content",
                // 오버라이드 가능한 변수
                "$top_button_panel": "hud.wysiwyg_reset_modal_ok",
                // 오버라이드 가능한 변수
                "$bottom_button_panel": "hud.wysiwyg_reset_modal_cancel",
                // 오버라이드 가능한 변수
                "$modal_text": "hudScreen.controlCustomization.resetModalText"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#reset_modal_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "layout_customization_close_without_saving": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [
            "200%",
            "200%"
          ],
          // 사용할 이미지 경로
          "texture": "textures/ui/Black.png",
          // ?? ??
          "fill": true,
          // ???
          "alpha": 0.5,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "layout_customization_close_without_saving_modal@common_dialogs.main_panel_two_buttons": {
                // 가로/세로 크기
                "size": [
                  210,
                  160
                ],
                // 오버라이드 가능한 변수
                "$show_close_button": false,
                // 오버라이드 가능한 변수
                "$child_control": "library_modal.modal_text_content",
                // 오버라이드 가능한 변수
                "$top_button_panel": "hud.wysiwyg_close_without_saving_modal_ok",
                // 오버라이드 가능한 변수
                "$bottom_button_panel": "hud.wysiwyg_close_without_saving_modal_cancel",
                // 오버라이드 가능한 변수
                "$modal_text": "hudScreen.controlCustomization.closeWithoutSavingModalText"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#close_without_saving_modal_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "layout_customization_main_panel@hud.layout_customization_main_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "layout_customization_sub_panel@hud.layout_customization_sub_panel": {}
      },
      {
        // ???/?? ??
        "layout_customization_hint_drag_frame": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 40,
          // ??/?? ?
          "use_anchored_offset": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#anchored_offset_value_y": 0.0
          },
          // 사용할 이미지 경로
          "texture": "textures/ui/Black",
          // 가로/세로 크기
          "size": [
            "100%c+5px",
            "100%c+2px"
          ],
          // ???
          "alpha": 0.5,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "layout_customization_hint_drag": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "hudScreen.controlCustomization.hintDrag",
                // ?? (R,G,B,A)
                "color": "$f_color_format"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#hint_drag_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            },
            {
              // 가져올 값 이름
              "binding_name": "#layout_customization_hint_offset_y",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#anchored_offset_value_y",
              // ?? ???
              "binding_condition": "visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "layout_customization_hint_deselect_frame": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 40,
          // ??/?? ?
          "use_anchored_offset": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#anchored_offset_value_y": 0.0
          },
          // 사용할 이미지 경로
          "texture": "textures/ui/Black",
          // 가로/세로 크기
          "size": [
            "100%c+5px",
            "100%c+2px"
          ],
          // ???
          "alpha": 0.5,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "layout_customization_hint_deselect": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "hudScreen.controlCustomization.hintDeselect",
                // ?? (R,G,B,A)
                "color": "$f_color_format"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#hint_deselect_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            },
            {
              // 가져올 값 이름
              "binding_name": "#layout_customization_hint_offset_y",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#anchored_offset_value_y",
              // ?? ???
              "binding_condition": "visible"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "layout_customization_hint_saved": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 40,
          // ??/?? ?
          "use_anchored_offset": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#anchored_offset_value_y": 0.0
          },
          // 사용할 이미지 경로
          "texture": "textures/ui/Black",
          // 가로/세로 크기
          "size": [
            "100%c+5px",
            "100%c+2px"
          ],
          // ???
          "alpha": 0.5,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "layout_customization_hint_saved": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "hudScreen.controlCustomization.hintSaved",
                // ?? (R,G,B,A)
                "color": "$f_color_format"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#hint_saved_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            },
            {
              // 가져올 값 이름
              "binding_name": "#layout_customization_hint_offset_y",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#anchored_offset_value_y",
              // ?? ???
              "binding_condition": "visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "left_helpers@$left_helpers": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "right_helpers@hud.right_helpers": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "emote_expediate_helpers@hud.emote_expediate_helpers": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "centered_gui_elements@centered_gui_elements": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "centered_gui_elements_at_bottom_middle@centered_gui_elements_at_bottom_middle": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "centered_gui_elements_at_bottom_middle_touch@centered_gui_elements_at_bottom_middle_touch": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "not_centered_gui_elements@not_centered_gui_elements": {}
      },
      {
        // ???/?? ??
        "gamertag_label_for_splitscreen": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [
            "default",
            "default"
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
          // ?? (R,G,B,A)
          "color": "$hud_gamertag_color",
          // ?? ??
          "text_alignment": "right",
          // 보여줄 글자
          "text": "#gamertag",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#gamertag"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "exp_rend@exp_progress_bar_and_hotbar": { // for pocket
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#hotbar_visible_not_centered",
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
        "exp_rend_resizable@exp_progress_bar_and_hotbar_pocket": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#hotbar_visible_not_centered_resizable",
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
        "hud_tip_text_factory": {
          // 리스트를 자동으로 생성하는 공장
          "type": "factory",
          // ??? ???
          "control_name": "@hud.hud_tip_text"
        }
      },
      {
        // ???/?? ??
        "hud_actionbar_text_area": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "hud_actionbar_text_factory",
            // 팩토리 템플릿 매핑
            "control_ids": {
              // ??? ?? ?
              "hud_actionbar_text": "hud_actionbar_text@hud.hud_actionbar_text"
            }
          }
        }
      },
      {
        // ???/?? ??
        "hud_title_text_area": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "hud_title_text_factory",
            // 팩토리 템플릿 매핑
            "control_ids": {
              // ??? ?? ?
              "hud_title_text": "hud_title_text@hud.hud_title_text"
            }
          }
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "mob_effects_renderer@mob_effects_renderer": {
          // 가로/세로 크기
          "size": [
            "100%",
            "75%"
          ],
          // 기준점에서 이동하는 거리
          "offset": [
            0,
            24
          ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#status_effects_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      //{
      //  "vignette_rend@vignette_renderer": {}
      //},
      //Remove vignette - Alien
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "curor_rend@cursor_renderer": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#show_cursor",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "game_tip@game_tip.game_tip_factory": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "sidebar@scoreboard.scoreboard_sidebar": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#scoreboard_sidebar_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "progress_rend@progress_indicator_renderer": {
          // 기준점에서 이동하는 거리
          "offset": [
            "50%",
            "50%"
          ]
        }
      },
      {
        // Use a stack panel with a padding that we can ignore at runtime as needed
        "chat_stack": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [
            "40%",
            "100%"
          ],
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
                "size": [
                  "0%", //Hide padding for paper doll so the chat appears on the top - Alien
                  0
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
            },
            {
              // ???/?? ??
              "non_centered_gui_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [
                  "100%",
                  32
                ],
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
              // 다른 템플릿을 가져와서 확장(상속)
              "player_position@hud.player_position": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "number_of_days_played@hud.number_of_days_played": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "game_tip@game_tip.game_tip_chat_stack_factory": {
                // 가로/세로 크기
                "size": [
                  "100%",
                  "100%c"
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "chat_panel@hud.chat_panel": {}
            }
          ]
        }
      },
      {
        // ???/?? ??
        "boss_health_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [
            "100%",
            "100%"
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "boss_hud_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [
                  "100%",
                  20
                ],
                // 보이기/숨기기(공간 유지)
                "visible": "#boss_hud_padding", //Make this visible to move the boss hud panel down
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#boss_hud_padding",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "boss_hud_touch_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [
                  "100%",
                  "15%"
                ],
                // 보이기/숨기기(공간 유지)
                "visible": "#boss_hud_touch_padding", //Make this visible to move the boss hud panel down
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#boss_hud_touch_padding",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // ?? ???
                    "binding_condition": "always"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "boss_hud_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "boss_health_grid@boss_health_grid": {
                      // 기준점에서 이동하는 거리
                      "offset": [
                        0,
                        2
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
        "save_icon@hud.auto_save": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "preserved_title@hud.preserved_title": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "bar_1@hud.animated_progress_bar": {
          // 오버라이드 가능한 변수
          "$background_size": [120, 10],
          // 오버라이드 가능한 변수
          "$bar_size": ["100% - 11px", "100% - 6px"],
          // 오버라이드 가능한 변수
          "$bar_offset": [10, 3],
          // 기준점에서 이동하는 거리
          "offset": [0, 50],

          // 오버라이드 가능한 변수
          "$multiplier": 0.02,
          // 오버라이드 가능한 변수
          "$data_source": "preserved_title",
          // 오버라이드 가능한 변수
          "$progress_binding": "#progress",

          // 오버라이드 가능한 변수
          "$text_format": "('§z' + $progress_binding + '/50')"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "bar_2@hud.animated_progress_bar": {
          // 오버라이드 가능한 변수
          "$background_size": [120, 10],
          // 오버라이드 가능한 변수
          "$bar_size": ["100% - 11px", "100% - 6px"],
          // 오버라이드 가능한 변수
          "$bar_offset": [10, 3],
          // 기준점에서 이동하는 거리
          "offset": [0, 80],

          // 오버라이드 가능한 변수
          "$data_source": "preserved_title",
          // 오버라이드 가능한 변수
          "$progress_binding": "#progress",
          // 오버라이드 가능한 변수
          "$max_value_binding": "#max_value",

          // 오버라이드 가능한 변수
          "$text_format": "('§z' + $progress_binding + '/' + $max_value_binding)"
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#hud_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
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
      }
    ]
  }
}
```








### 기본
inventory_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: inventory_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "crafting",
	// ???/?? ??
	"player_armor_panel": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [
			88,
			83
		],
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_left",
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_left",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"player_bg": {
					// 이미지 표시
					"type": "image",
					//"texture": "textures/ui/Black", For removing the background of the paper doll in inventory - Alien
					"size": [
						52,
						70
					],
					// 겹치는 순서(숫자 클수록 위)
					"layer": 2,
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left",
					// 기준점에서 이동하는 거리
					"offset": [
						26,
						8
					],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"player_renderer_panel": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": [
									30,
									30
								],
								// 기준점에서 이동하는 거리
								"offset": [
									0,
									-14
								],
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
				"player_preview_border": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/player_preview_border",
					// 가로/세로 크기
					"size": [
						54,
						72
					],
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left",
					// 기준점에서 이동하는 거리
					"offset": [
						25,
						7
					]
				}
			},
			{
				// ???/?? ??
				"armor_grid": {
					// 격자 컨테이너: 칸칸이 배치
					"type": "grid",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// 가로/세로 크기
					"size": [
						18,
						72
					],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left",
					// 기준점에서 이동하는 거리
					"offset": [
						7,
						7
					],
					// 그리드 칸 수
					"grid_dimensions": [
						1,
						4
					],
					// 오버라이드 가능한 변수
					"$item_collection_name": "armor_items",
					// 목록 이름
					"collection_name": "$item_collection_name",
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"head_grid_item@common.container_item": {
								// 그리드 위치
								"grid_position": [
									0,
									0
								],
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
							"chest_grid_item@common.container_item": {
								// 그리드 위치
								"grid_position": [
									0,
									1
								],
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
							"legs_grid_item@common.container_item": {
								// 그리드 위치
								"grid_position": [
									0,
									2
								],
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
							"feet_grid_item@common.container_item": {
								// 그리드 위치
								"grid_position": [
									0,
									3
								],
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
					// 격자 컨테이너: 칸칸이 배치
					"type": "grid",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// 가로/세로 크기
					"size": [
						18,
						18
					],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left",
					// 기준점에서 이동하는 거리
					"offset": [
						79,
						61
					],
					// 그리드 칸 수
					"grid_dimensions": [
						1,
						1
					],
					// 오버라이드 가능한 변수
					"$item_collection_name": "offhand_items",
					// 목록 이름
					"collection_name": "$item_collection_name",
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"offhand_grid_item@common.container_item": {
								// 그리드 위치
								"grid_position": [
									0,
									0
								],
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
	},
	// 다른 템플릿을 가져와서 확장(상속)
	"toolbar_panel@crafting.crafting_root_panel": {
		// 가로/세로 크기
		"size": [
			"100%c",
			20
		],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"toolbar_background@crafting.toolbar_background": {
					// 가로/세로 크기
					"size": [
						"100%cm",
						"100% + 8px"
					],
					// 기준점에서 이동하는 거리
					"offset": [
						0,
						-3
					],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right",
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
								"size": [
									"default",
									"100% - 8px"
								],
								// 기준점에서 이동하는 거리
								"offset": [
									0,
									3
								],
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_middle",
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"left_trigger_anchor": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												0,
												"100%"
											],
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
														"offset": [
															3,
															-2
														],
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
										"padding_0": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												8,
												0
											]
										}
									},
									{
										// ???/?? ??
										"creative_layout_toggle_panel": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												"100%c",
												"100%"
											],
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
														// 오버라이드 가능한 변수
														"$focus_override_left": "search_tab"
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
											"size": [
												2,
												0
											],
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
											]
										}
									},
									{
										// ???/?? ??
										"recipe_book_layout_toggle_panel_survival": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												25,
												"100%"
											],
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
														// 오버라이드 가능한 변수
														"$focus_override_left": "search_tab"
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
											"size": [
												"100%c",
												"100%"
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
											],
											// 이 안에 들어가는 부품 목록
											"controls": [
												{
													// 다른 템플릿을 가져와서 확장(상속)
													"recipe_book_layout_toggle@crafting.recipe_book_layout_toggle": {}
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
											"size": [
												1,
												0
											]
										}
									},
									{
										// ???/?? ??
										"survival_layout_toggle_panel": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												"100%c",
												"100%"
											],
											// 이 안에 들어가는 부품 목록
											"controls": [
												{
													// 다른 템플릿을 가져와서 확장(상속)
													"survival_layout_toggle@crafting.survival_layout_toggle": {}
												}
											]
										}
									},
									{
										// ???/?? ??
										"padding_3": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												4,
												0
											]
										}
									},
									//{
									//	"help_button_panel": {
									//	  "type": "panel",
									//	  "size": [
									//		"100%c",
									//		"100%"
									//	  ],
									//	  "controls": [
									//		{
									//		  "help_button@crafting.help_button": {}
									//		}
									//	  ]
									//	}
									//},
									//Hide how to play button - Alien
									{
										// ???/?? ??
										"close_button_panel": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												15,
												"100%"
											],
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
														"offset": [
															0,
															0
														],
														// 기준점(어디에서 시작할지)
														"anchor_from": "center",
														// 붙일 위치(어디에 놓을지)
														"anchor_to": "center"
													}
												}
											]
										}
									},
									{
										// ???/?? ??
										"padding_4": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												6,
												0
											]
										}
									},
									{
										// ???/?? ??
										"right_trigger_anchor": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												0,
												"100%"
											],
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
													"gamepad_helper_right_trigger@common.gamepad_helper_right_trigger": {
														// 기준점에서 이동하는 거리
														"offset": [
															-2,
															-2
														],
														// 기준점(어디에서 시작할지)
														"anchor_from": "right_middle",
														// 붙일 위치(어디에 놓을지)
														"anchor_to": "left_middle"
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








### 기본
loom_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: loom_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "loom",
	// 다른 템플릿을 가져와서 확장(상속)
	"toolbar_panel@common.root_panel": {
		// 가로/세로 크기
		"size": [
			"100%c",
			20
		],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"toolbar_background@loom.toolbar_background": {
					// 가로/세로 크기
					"size": [
						"100%cm",
						"100% + 8px"
					],
					// 기준점에서 이동하는 거리
					"offset": [
						0,
						-3
					],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right",
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
								"size": [
									"default",
									"100% - 8px"
								],
								// 기준점에서 이동하는 거리
								"offset": [
									0,
									3
								],
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_middle",
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"padding_1": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												6,
												0
											]
										}
									},
									//{
									//	"help_button_panel": {
									//	  "type": "panel",
									//	  "size": [ "100%c", "100%" ],
									//	  "controls": [
									//	    { "help_button@loom.help_button": {} }
									//	  ]
									//	}
									//},
									//Hide how to play button - Alien
									{
										// ???/?? ??
										"close_button_panel": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												"100%c",
												"100%"
											],
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
														// 가로/세로 크기
														"size": [
															"100%cm",
															"100%cm"
														],
														// 기준점에서 이동하는 거리
														"offset": [
															0,
															0
														],
														// 기준점(어디에서 시작할지)
														"anchor_from": "center",
														// 붙일 위치(어디에 놓을지)
														"anchor_to": "center"
													}
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
											"size": [
												6,
												0
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








### 기본
loom_screen_pocket.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: loom_screen_pocket.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "loom_pocket",
	// ???/?? ??
	"right_navigation_tabs": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "vertical",
		// 가로/세로 크기
		"size": [
			35,
			"100%"
		],
		// 기준점에서 이동하는 거리
		"offset": [
			-4,
			0
		],
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_left",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_left",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"pocket_tab_close_button@common_tabs.pocket_tab_close_button": {}
			},
			{
				// ???/?? ??
				"padding": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": [
						0,
						1
					]
				}
			},
			//{
			//	"pocket_tab_help_button@common_tabs.pocket_tab_help_button": {}
			//},
			//Hide how to play button - Alien
			{
				// ???/?? ??
				"fill": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": [
						"100%",
						"fill"
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"right_tab_loom@loom_pocket.right_tab_loom": {
					// 오버라이드 가능한 변수
					"$is_bottom_most_tab": true
				}
			}
		]
	}
}
```








### 기본
npc_interact_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: npc_interact_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "npc_interact",

  //---------------------------------------------------------------------------
  // NPC Dialog Screen Customization
  //---------------------------------------------------------------------------

  // Main screen definition
  "npc_screen": {
    // 컨트롤 종류
    "type": "screen",
    // ?? ??
    "force_render_below": true,
    // 오버라이드 가능한 변수
    "$screen_bg_content": "common.screen_background",
    // 오버라이드 가능한 변수
    "$screen_content": "npc_interact.npc_screen_content",

    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_exit",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_exit",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
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

  //---------------------------------------------------------------------------
  // Customizable Elements
  //---------------------------------------------------------------------------

  // NPC 이름 라벨 커스터마이징
  "basic_stack_panel/name_label": {
    "color": [1.0, 1.0, 0.0],          // 노란색으로 변경
    "font_type": "smooth",              // 폰트 타입 변경 (default, smooth, rune 등)
    "font_scale_factor": 1.2,           // 폰트 크기 20% 증가
    "shadow": true,                     // 그림자 활성화
    "text_alignment": "center"          // 텍스트 중앙 정렬
  },

  // NPC 외형/설명 라벨 커스터마이징
  "basic_stack_panel/appearance_label": {
    "color": [0.7, 0.7, 0.7],          // 회색으로 변경
    // ??
    "font_type": "default",
    "font_scale_factor": 0.9,           // 폰트 크기 10% 감소
    // ?? ??
    "shadow": true
  },

  // NPC 대화 메시지 텍스트 커스터마이징
  "npc_message/label": {
    "color": [1.0, 1.0, 1.0],          // 흰색 텍스트
    "locked_color": [0.5, 0.5, 0.5],   // 잠긴 상태일 때 어두운 회색
    // ??
    "font_type": "smooth",
    // ?? ?? ??
    "font_scale_factor": 1.0,
    // ?? ??
    "shadow": true,
    "line_padding": 2,                  // 줄 간격 설정
    "text_alignment": "left"            // 왼쪽 정렬
  },

  // 학생/플레이어 메시지 말풍선 배경 커스터마이징
  "student_message_bubble": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/dialog_bubble",  // 커스텀 텍스처 경로 (또는 ""로 비우기)
    "alpha": 0.8,                            // 투명도 80%
    // 가로/세로 크기
    "size": ["100%", "100%c + 10px"]         // 크기 조정
  },

  // 학생 메시지 섹션의 포인터(화살표) 제거/수정
  "student_message_section/point": {
    // 완전히 제거(공간도 없음)
    "ignored": true                     // true면 숨김, false면 표시
  },

  // NPC 3D 모델 위치 조정
  "message_model/model": {
    // 기준점에서 이동하는 거리
    "offset": [0, 20],                  // [X, Y] X: 좌우, Y: 상하
    // 가로/세로 크기
    "size": [100, 100]                  // 모델 크기 조정
  },

  // 모델 배경 윈도우 커스터마이징
  "message_model_window": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",     // 배경 텍스처 (""로 비우면 투명)
    "alpha": 0.3,                       // 투명도
    "color": [0.2, 0.2, 0.3]           // 색조 조정 (어두운 파란색)
  },

  // 대화 옵션 버튼 라벨 커스터마이징
  "student_button_label": {
    "color": [1.0, 1.0, 1.0],          // 버튼 텍스트 색상
    // ??
    "font_type": "smooth",
    // ?? ?? ??
    "font_scale_factor": 1.0,
    // ?? ??
    "shadow": true
  },

  // 대화 옵션 버튼 스타일 커스터마이징
  "student_button@common_buttons.light_text_button": {
    // 가로/세로 크기
    "size": ["100%", 24],               // 버튼 크기
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_select",

    // 버튼 상태별 텍스처 커스터마이징
    "$default_texture": "textures/ui/button_default",
    // 오버라이드 가능한 변수
    "$hover_texture": "textures/ui/button_hover",
    // 오버라이드 가능한 변수
    "$pressed_texture": "textures/ui/button_pressed",

    // 버튼 색상 (RGB)
    "$default_color": [0.3, 0.3, 0.4],
    // 오버라이드 가능한 변수
    "$hover_color": [0.4, 0.4, 0.5],
    // 오버라이드 가능한 변수
    "$pressed_color": [0.2, 0.2, 0.3]
  },

  //---------------------------------------------------------------------------
  // Dialog Window Customization
  //---------------------------------------------------------------------------

  // 대화창 메인 패널 커스터마이징
  "dialog_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [300, 200],                 // 대화창 크기 [너비, 높이]
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점에서 이동하는 거리
    "offset": [0, 0],                   // [X, Y] 위치 오프셋

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 대화창 배경
        "dialog_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/dialog_background",  // 커스텀 배경 이미지
          // ???
          "alpha": 0.9,
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // 다이얼로그 라벨 (제목) 커스터마이징
  "basic_stack_panel/dialog_label": {
    "color": [1.0, 0.8, 0.2],          // 금색
    // ??
    "font_type": "smooth",
    // ?? ?? ??
    "font_scale_factor": 1.3,
    // ?? ??
    "shadow": true,
    // ?? ??
    "text_alignment": "center",
    // 완전히 제거(공간도 없음)
    "ignored": false                    // false면 표시, true면 숨김
  },

  // 대화 후 패딩 조정
  "basic_stack_panel/dialog_post_padding": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [0, 10],                   // 여백 크기 [너비, 높이]
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  // 대화 패딩 조정
  "basic_stack_panel/dialog__padding": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [0, 5],
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  // 대화 버튼 커스터마이징
  "basic_stack_panel/dialog_button": {
    // 가로/세로 크기
    "size": ["100%", 30],
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  //---------------------------------------------------------------------------
  // Advanced Customization Examples
  //---------------------------------------------------------------------------

  // 예제 1: 커스텀 애니메이션이 있는 대화창
  "dialog_fade_in_anim": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_out_cubic",
    // 걸리는 시간(초)
    "duration": 0.3,
    // 시작 값
    "from": 0.0,
    // 끝 값
    "to": 1.0
  },

  // 예제 2: 커스텀 색상 변수 정의
  "$npc_name_color": [1.0, 1.0, 0.0],        // 노란색
  // 오버라이드 가능한 변수
  "$npc_message_color": [1.0, 1.0, 1.0],     // 흰색
  // 오버라이드 가능한 변수
  "$npc_locked_color": [0.5, 0.5, 0.5],      // 회색
  // 오버라이드 가능한 변수
  "$button_text_color": [1.0, 1.0, 1.0],     // 흰색
  // 오버라이드 가능한 변수
  "$background_alpha": 0.9,                   // 배경 투명도

  //---------------------------------------------------------------------------
  // Usage Instructions (주석)
  //---------------------------------------------------------------------------
  //
  // 사용 방법:
  // 1. 이 파일을 리소스팩의 ui 폴더에 배치
  // 2. 원하는 요소의 값을 수정
  // 3. texture 경로는 실제 리소스팩의 텍스처 경로와 일치해야 함
  //
  // 주요 속성:
  // - color: [R, G, B] (0.0 ~ 1.0 범위)
  // - alpha: 투명도 (0.0 = 완전 투명, 1.0 = 불투명)
  // - size: [width, height] (픽셀 또는 "100%", "100%c" 등)
  // - offset: [x, y] (위치 조정)
  // - font_type: "default", "smooth", "rune" 등
  // - font_scale_factor: 폰트 크기 배율
  // - shadow: true/false (텍스트 그림자)
  // - ignored: true/false (요소 숨김/표시)
  //
  // 텍스처 경로 예시:
  // - "textures/ui/dialog_background" -> textures/ui/dialog_background.png
  // - "" -> 투명/없음
  // - "textures/ui/White" -> 기본 흰색 텍스처 (색상 적용 가능)
  //
  //---------------------------------------------------------------------------

  "comment": "NPC Dialog Screen Customization Template - Edit values above to customize your NPC dialogs"
}
```








### 기본
pause_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: pause_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 다른 템플릿을 가져와서 확장(상속)
    "menu_background@pause.transparent_background": {
        // 가로/세로 크기
        "size": [
            "100% - 2px",
            "100%c + 8px"
        ],
        // 기준점(어디에서 시작할지)
        "anchor_from": "center",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "center",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "button_panel": {
                    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                    "type": "stack_panel",
                    // 가로/세로 크기
                    "size": [
                        "100% - 8px",
                        "100%c"
                    ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "center",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "center",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "return_to_game_button@pause.return_to_game_button": {}
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "return@pause.vertical_padding": {}
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "realms_stories_button_panel@pause.realms_stories_button_panel": {}
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "realms_stories@pause.vertical_padding": {
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "#is_realm_level",
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
                            "settings_button@pause.settings_button": {}
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "settings@pause.vertical_padding": {}
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "buy_button@pause.buy_button": {}
                        },
                        //{
                        //    "buy@pause.vertical_padding": {
                        //        "bindings": [
                        //            {
                        //                "binding_name": "#is_trial_version",
                        //                "binding_name_override": "#visible",
                        //                "binding_type": "global"
                        //            }
                        //        ]
                        //    }
                        //},
                        // {
                        //     "store_button_panel@pause.store_button_panel": {}
                        // },
                        // Remove marketplace button
                        //{
                        //    "server@pause.vertical_padding": {
                        //        "ignored": "$is_secondary_client",
                        //        "bindings": [
                        //            {
                        //                "binding_name": "#store_button_visible",
                        //                "binding_name_override": "#visible",
                        //                "binding_type": "global"
                        //            }
                        //        ]
                        //    }
                        //},
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "quit_button@pause.quit_button": {}
                        }
                    ]
                }
            }
        ]
    }
}
```








### 기본
play_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: play_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "play",

  //---------------------------------------------------------------------------
  // Common
  //---------------------------------------------------------------------------

  "label_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/mainbanners"
  },

  // ???/?? ??
  "dark_label_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/BannersLight"
  },

  // ???/?? ??
  "world_screenshot_base": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%cm + 2px", "100%" ],
    // 사용할 이미지 경로
    "texture": "$border_texture",
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "collection_world_screenshot@play.world_screenshot_base": {
    // 오버라이드 가능한 변수
    "$fit_image_to_width|default": false,
    // 오버라이드 가능한 변수
    "$collection_binding_name|default": "",
    // 오버라이드 가능한 변수
    "$image_binding_name|default": "",
    // 오버라이드 가능한 변수
    "$texture_source_binding_name|default": "",
    // 오버라이드 가능한 변수
    "$supports_realmsplus_overlay|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "screenshot_picture": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 오버라이드 가능한 변수
          "$fit_to_width": "$fit_image_to_width",
          // ??? ?? ?
          "force_texture_reload": true,
          // 가로/세로 크기
          "size": [ "173.91%y", "100% - 2px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 1 ],
          // ?? ??
          "fill": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$image_binding_name",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_binding_name"
            },
            {
              // 가져올 값 이름
              "binding_name": "$texture_source_binding_name",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture_file_system",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_binding_name"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "gradient_container_stacked_panel": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $supports_realmsplus_overlay)",
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "vertical",
                // 가로/세로 크기
                "size": [ "100%cm", "100%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#realmsplus_expired_visible",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 목록 이름
                    "binding_collection_name": "$collection_binding_name"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "gradient_image_realmsplus_expired": {
                      // 이미지 표시
                      "type": "image",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "69.5%y", "50%" ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/realmsparkle"
                    }
                  },
                  {
                    // ???/?? ??
                    "solid_image_realmsplus_expired": {
                      // 이미지 표시
                      "type": "image",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 가로/세로 크기
                      "size": [ "69.5%y", "50%" ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/realmsparkle1",
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "exclamationmark": {
                            // 글자 표시
                            "type": "label",
                            // ?? (R,G,B,A)
                            "color": "$realmsplus_exclamation_mark_color",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 보여줄 글자
                            "text": "!",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "bottom_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "bottom_middle",
                            // 기준점에서 이동하는 거리
                            "offset": [ 1, -1 ]
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
  "world_item_grid_base": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left"
  },

  //---------------------------------------------------------------------------
  // Common Icons
  //---------------------------------------------------------------------------

  "edit_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/editIcon",
    // 가로/세로 크기
    "size": [ 22, 16 ]
  },

  // ???/?? ??
  "realms_stories_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/realmsStoriesIcon",
    // 가로/세로 크기
    "size": [ 22, 22 ]
  },

  // ???/?? ??
  "realms_stories_icon_animated": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/realmsStoriesIconAnimated",
    // 가로/세로 크기
    "size": [ 22, 22 ],
    // ???? ??
    "uv_size": [ 22, 22 ],
    // ???? ?? ??
    "uv": "@play.anim_realms_stories_icon",
    // ????? ?? ?
    "disable_anim_fast_forward": true
  },

  // ???/?? ??
  "anim_realms_stories_icon": {
    // 프레임 애니메이션
    "anim_type": "flip_book",
    // ?? ??
    "initial_uv": [ 0, 0 ],
    // ?? ??
    "frame_count": 13,
    // ?? ??
    "fps": 4,
    // ?? ??
    "looping": false,
    // 움직임 곡선
    "easing": "linear",
    // ?? ??
    "wait_until_rendered_to_play": true
  },

  // ???/?? ??
  "realms_slots_edit_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/realmsSlotsEditIcon",
    // 가로/세로 크기
    "size": [ 22, 22 ]
  },

  // ???/?? ??
  "worlds_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/worldsIcon",
    // 가로/세로 크기
    "size": [ 16, 17 ]
  },

  // ???/?? ??
  "realms_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/realmsIcon",
    // 가로/세로 크기
    "size": [ 11, 14 ]
  },

  // ???/?? ??
  "realms_chevron": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/realms_chevron_play",
    // 가로/세로 크기
    "size": [ 23, 28 ]
  },

  // ???/?? ??
  "friends_icon_1": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/Friend1",
    // 가로/세로 크기
    "size": [ 10, 10 ]
  },

  // ???/?? ??
  "friends_icon_2": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/Friend2",
    // 가로/세로 크기
    "size": [ 10, 10 ]
  },

  // ???/?? ??
  "bell_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/icon_bell",
    // 가로/세로 크기
    "size": [ 20, 20 ]
  },

  // ???/?? ??
  "invite_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/invite_base",
    // 가로/세로 크기
    "size": [ 20, 20 ]
  },

  // ???/?? ??
  "delete_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/trash_light",
    // 가로/세로 크기
    "size": [ 22, 16 ]
  },

  // ???/?? ??
  "world_download_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/world_download",
    // 가로/세로 크기
    "size": [ 15, 16 ]
  },

  // To create the bouncing effect of alternating bounces for the notification icon
  // the durations have to be alternated and then resynced with the wait time.
  "anim_icon_wait_A": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.14,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_A_bounce_in_2",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // ???/?? ??
  "anim_icon_wait_B": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.1,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_B_bounce_in_2",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // ???/?? ??
  "anim_count_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.14,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_bounce_in_2",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // ???/?? ??
  "anim_icon_wait_A_2": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.1,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_A_bounce_in_3",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // ???/?? ??
  "anim_icon_wait_B_2": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.14,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_B_bounce_in_3",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // ???/?? ??
  "anim_count_wait_2": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 0.1,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_bounce_in_3",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // After three bounces the icon waits for three seconds.
  "anim_icon_wait_A_3": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 3.04,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_A_bounce_in",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // ???/?? ??
  "anim_icon_wait_B_3": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 2.97,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_B_bounce_in",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // ???/?? ??
  "anim_count_wait_3": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 3.04,
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_bounce_in",
    // ?? ??
    "end_event": "friend_icon_bounce_start"
  },

  // The icon is always being offseted by a constant amount, going up by 4 then down by 4
  // This is to get the text in the right position at the beginning.
  "anim_count_wait_offset": {
    // 위치 이동
    "anim_type": "offset",
    // 걸리는 시간(초)
    "duration": 1.00,
    // 시작 값
    "from": [ -5, 1 ],
    // 끝 값
    "to": [ -5, 1 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_wait_3"
  },

  // Alternating between .185 and .225, and being resynced with waits.
  "anim_icon_A_bounce_in": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ -5, 2 ],
    // 끝 값
    "to": [ -5, -2 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_A_bounce_out"
  },

  // ???/?? ??
  "anim_icon_A_bounce_out": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ -5, -2 ],
    // 끝 값
    "to": [ -5, 2 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_wait_A",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "anim_icon_B_bounce_in": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.225,
    // 시작 값
    "from": [ 0, -3 ],
    // 끝 값
    "to": [ 0, -7 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_B_bounce_out"
  },

  // ???/?? ??
  "anim_icon_B_bounce_out": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.225,
    // 시작 값
    "from": [ 0, -7 ],
    // 끝 값
    "to": [ 0, -3 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_wait_B",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "anim_icon_A_bounce_in_2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.225,
    // 시작 값
    "from": [ -5, 2 ],
    // 끝 값
    "to": [ -5, -2 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_A_bounce_out_2"
  },

  // ???/?? ??
  "anim_icon_A_bounce_out_2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.225,
    // 시작 값
    "from": [ -5, -2 ],
    // 끝 값
    "to": [ -5, 2 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_wait_A_2",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "anim_icon_B_bounce_in_2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ 0, -3 ],
    // 끝 값
    "to": [ 0, -7 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_B_bounce_out_2"
  },

  // ???/?? ??
  "anim_icon_B_bounce_out_2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ 0, -7 ],
    // 끝 값
    "to": [ 0, -3 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_wait_B_2",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "anim_icon_A_bounce_in_3": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ -5, 2 ],
    // 끝 값
    "to": [ -5, -2 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_A_bounce_out_3"
  },

  // ???/?? ??
  "anim_icon_A_bounce_out_3": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ -5, -2 ],
    // 끝 값
    "to": [ -5, 2 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_wait_A_3",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "anim_icon_B_bounce_in_3": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.225,
    // 시작 값
    "from": [ 0, -3 ],
    // 끝 값
    "to": [ 0, -7 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_B_bounce_out_3"
  },

  // ???/?? ??
  "anim_icon_B_bounce_out_3": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.225,
    // 시작 값
    "from": [ 0, -7 ],
    // 끝 값
    "to": [ 0, -3 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_icon_wait_B_3",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "anim_count_bounce_in": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ -5, 1 ],
    // 끝 값
    "to": [ -5, -3 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_bounce_out"
  },

  // ???/?? ??
  "anim_count_bounce_out": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ -5, -3 ],
    // 끝 값
    "to": [ -5, 1 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_wait",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "anim_count_bounce_in_2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.225,
    // 시작 값
    "from": [ -5, 1 ],
    // 끝 값
    "to": [ -5, -3 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_bounce_out_2"
  },

  // ???/?? ??
  "anim_count_bounce_out_2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.225,
    // 시작 값
    "from": [ -5, -3 ],
    // 끝 값
    "to": [ -5, 1 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_wait_2",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "anim_count_bounce_in_3": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ -5, 1 ],
    // 끝 값
    "to": [ -5, -3 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_bounce_out_3"
  },

  // ???/?? ??
  "anim_count_bounce_out_3": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.185,
    // 시작 값
    "from": [ -5, -3 ],
    // 끝 값
    "to": [ -5, 1 ],
    // 다음 애니메이션으로 연결
    "next": "@play.anim_count_wait_3",
    // ?? ??
    "end_event": "friend_icon_bounce_end"
  },

  // ???/?? ??
  "third_party_servers_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/addServer",
    // 가로/세로 크기
    "size": [ 17, 13 ]
  },

  // ???/?? ??
  "lan_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/lan_icon",
    // 가로/세로 크기
    "size": [ 14, 14 ]
  },

  // ???/?? ??
  "friends_server_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 14, 14 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#friends_server_icon_texture_name",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#texture",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "friends_network_worlds"
      }
    ]
  },

  // ???/?? ??
  "cross_platform_friends_server_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 14, 14 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#cross_platform_friends_server_icon_texture_name",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#texture",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "cross_platform_friends_network_worlds"
      }
    ]
  },

  // ???/?? ??
  "realms_remove_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/redX1",
    // 가로/세로 크기
    "size": [ 12, 12 ]
  },

  // ???/?? ??
  "game_online_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/online",
    // 가로/세로 크기
    "size": [ 8, 8 ]
  },

  // ???/?? ??
  "game_offline_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/offline",
    // 가로/세로 크기
    "size": [ 8, 8 ]
  },

  // ???/?? ??
  "game_unavailable_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/offline",
    // 가로/세로 크기
    "size": [ 8, 8 ]
  },

  // ???/?? ??
  "import_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/import",
    // 가로/세로 크기
    "size": [ 16, 16 ]
  },

  // ???/?? ??
  "upload_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/upload_glyph",
    // 가로/세로 크기
    "size": [ 16, 16 ]
  },

  // ???/?? ??
  "add_server_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/addServer",
    // 가로/세로 크기
    "size": [ 17, 13 ]
  },

  // ???/?? ??
  "server_tab_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/servers",
    // 가로/세로 크기
    "size": [ 15, 15 ]
  },

  // ???/?? ??
  "realms_art_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/realms_art_icon",
    // 가로/세로 크기
    "size": [ 647, 760 ]
  },

  // ???/?? ??
  "realms_text_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/realms_text_background"
  },

  // ???/?? ??
  "connected_storage": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/local_and_cloud_storage",
    // 가로/세로 크기
    "size": [ 12, 8 ]
  },

  // ???/?? ??
  "feedback_icon": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/Feedback",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 가로/세로 크기
    "size": [ 16, 16 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_only_storage@play.connected_storage": {
    // 사용할 이미지 경로
    "texture": "textures/ui/local_only_storage"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_and_cloud_storage@play.connected_storage": {
    // 사용할 이미지 경로
    "texture": "textures/ui/local_and_cloud_storage"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "cloud_only_storage@play.connected_storage": {
    // 사용할 이미지 경로
    "texture": "textures/ui/cloud_only_storage"
  },

  // ???/?? ??
  "left_arrow_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 7, 7 ],
    // 사용할 이미지 경로
    "texture": "textures/ui/arrow_left_white",
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "right_arrow_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 7, 7 ],
    // 사용할 이미지 경로
    "texture": "textures/ui/arrow_right_white",
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "small_progress_panel@progress.progress_loading_bars": {
    // 가로/세로 크기
    "size": [ 20, 10 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 5,
    // ?? (R,G,B,A)
    "color": "$dark_button_default_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "(not #ping_ready_thirdparty)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  //---------------------------------------------------------------------------
  // SIGN IN TO JOIN REALMS PROMPT
  //---------------------------------------------------------------------------

  "sign_in_realms_image": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%cm", "100%cm" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chevron@play.realms_chevron": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 기준점에서 이동하는 거리
          "offset": "$chevron_offset"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "portal@play.realms_icon": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 기준점에서 이동하는 거리
          "offset": "$portal_offset"
        }
      }
    ],
    // this is to counteract the image moving down when the button is pressed
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$pressed_state",
        // 오버라이드 가능한 변수
        "$chevron_offset": [ -3, -1 ],
        // 오버라이드 가능한 변수
        "$portal_offset": [ -6, -1 ]
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $pressed_state)",
        // 오버라이드 가능한 변수
        "$chevron_offset": [ -3, 0 ],
        // 오버라이드 가능한 변수
        "$portal_offset": [ -6, 0 ]
      }
    ]
  },

  // ???/?? ??
  "realms_sign_in_prompt_label": {
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 보여줄 글자
    "text": "#realms_sign_in_prompt",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#realms_sign_in_prompt"
      }
    ]
  },

  // ???/?? ??
  "realms_sign_in_prompt": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "fill", "100%sm" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_sign_in_prompt_label@play.realms_sign_in_prompt_label": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realms_sign_in_prompt_friends@play.realms_sign_in_prompt": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_sign_in_prompt_label_friends@play.realms_sign_in_prompt_label": {
          // 보여줄 글자
          "text": "#realms_sign_in_prompt_friends",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#realms_sign_in_prompt_friends"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "sign_in_to_view_realms_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%cm" ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 오버라이드 가능한 변수
    "$prompt": "play.realms_sign_in_prompt",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "sign_in_realms_image@play.sign_in_realms_image": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_sign_in_prompt@$prompt": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "sign_in_to_view_realms_content_panel_friends@play.sign_in_to_view_realms_content_panel": {
    // 오버라이드 가능한 변수
    "$prompt": "play.realms_sign_in_prompt_friends"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "sign_in_to_view_realms_button@common_buttons.dark_content_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_sign_in_to_view_realms",
    // 오버라이드 가능한 변수
    "$button_content": "play.sign_in_to_view_realms_content_panel",
    // 가로/세로 크기
    "size": [ "100%", 29 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#realms_sign_in_button_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "sign_in_to_view_realms_button_friends@play.sign_in_to_view_realms_button": {
    // 오버라이드 가능한 변수
    "$button_content": "play.sign_in_to_view_realms_content_panel_friends"
  },

  //---------------------------------------------------------------------------
  // REALMS WORLD GRID
  //---------------------------------------------------------------------------

  "realms_list_text": {
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // ?? ??
    "shadow": false,
    // 보여줄 글자
    "text": "$text",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 오버라이드 가능한 변수
    "$text_binding_type|default": "none",
    // 오버라이드 가능한 변수
    "$realms_worlds_collection_name|default": "",
    // 오버라이드 가능한 변수
    "$text_binding_condition|default": "none",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // ?? ???
        "binding_condition": "$text_binding_condition",
        // 가져올 값 이름
        "binding_name": "$text",
        // 바인딩 종류(변수로 관리되는 경우도 있음)
        "binding_type": "$text_binding_type",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realms_world_header@play.realms_list_text": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 가로/세로 크기
    "size": [ "100%", 10 ],
    // 오버라이드 가능한 변수
    "$text": "#realms_world_header",
    // 오버라이드 가능한 변수
    "$text_binding_type": "collection"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realms_world_details@play.realms_list_text": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_left",
    // 가로/세로 크기
    "size": [ "100%", 10 ],
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 오버라이드 가능한 변수
    "$text": "#realms_world_details",
    // 오버라이드 가능한 변수
    "$text_binding_type": "collection"
  },


  // 다른 템플릿을 가져와서 확장(상속)
  "realms_world_type@play.realms_list_text": {
    // 가로/세로 크기
    "size": [ "default", 10 ],
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 오버라이드 가능한 변수
    "$text": "selectWorld.worldTags.hardcore",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#realms_world_is_hardcore",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realms_world_player_count@play.world_list_text": {
    // 보여줄 글자
    "text": "#realms_world_player_count",
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 가로/세로 크기
    "size": [ "default", 10 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#realms_world_player_count",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      }
    ]
  },

  // ???/?? ??
  "realms_world_game_status_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 10, 10 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "game_online_icon@play.game_online_icon": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#realms_game_online",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$realms_worlds_collection_name"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "game_unavailable_icon@play.game_unavailable_icon": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#realms_game_unavailable",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$realms_worlds_collection_name"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "game_offline_icon@play.game_offline_icon": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#realms_game_offline",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$realms_worlds_collection_name"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "realms_world_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%-2px", "100%-2px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "realms_world_header@play.realms_world_header": {} },
      { "realms_world_details@play.realms_world_details": {} }
    ]
  },

  // ???/?? ??
  "realms_world_trial_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%-2px", "100%-2px" ],
    // 오버라이드 가능한 변수
    "$world_header_text_binding_type|default": "none",
    // 오버라이드 가능한 변수
    "$world_details_text|default": "#player_gamertag",
    // 오버라이드 가능한 변수
    "$world_details_text_binding_type|default": "global",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_world_header_text@play.realms_list_text": {
          // 오버라이드 가능한 변수
          "$text": "$button_content_text",
          // 오버라이드 가능한 변수
          "$text_binding_type": "$world_header_text_binding_type",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 가로/세로 크기
          "size": [ "100%", 10 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_world_details@play.realms_list_text": {
          // 오버라이드 가능한 변수
          "$text": "$world_details_text",
          // ?? (R,G,B,A)
          "color": "$secondary_text_color",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 가로/세로 크기
          "size": [ "100%", 10 ]
        }
      }
    ]
  },

  // ???/?? ??
  "realms_world_content_text_area_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "realms_world_text_panel@play.realms_world_text_panel": {} }
    ]
  },

  // ???/?? ??
  "realms_trial_content_text_area_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "realms_world_trial_text_panel@play.realms_world_trial_text_panel": {} }
    ]
  },

  // ???/?? ??
  "realms_world_content_status_area_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%c", "100%cm" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "world_player_count_text_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "realms_world_player_count@play.realms_world_player_count": {
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
          "size": [ 2, 10 ]
        }
      },
      { "realms_world_game_status_icon@play.realms_world_game_status_icon": {} }
    ]
  },

  // ???/?? ??
  "realms_world_content_status_area_panel_container": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%cm", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "realms_world_status_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%sm", "100%c" ],
          // ?? ?? ?
          "min_size": [ "100%c", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "realms_world_content_status_area_panel@play.realms_world_content_status_area_panel": {}
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_world_type@play.realms_world_type": {}
      }
    ]
  },

  // ???/?? ??
  "realms_world_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($realms_worlds_collection_name = $personal_realm_collection_name)",
        // 오버라이드 가능한 변수
        "$show_screenshot": true
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "($realms_worlds_collection_name = $friend_realm_collection_name)",
        // 오버라이드 가능한 변수
        "$show_screenshot": false
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$default_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$hover_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$pressed_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$locked_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realm_screenshot@play.realm_screenshot": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $show_screenshot)"
        }
      },
      {
        // ???/?? ??
        "padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, "100%" ],
          // 완전히 제거(공간도 없음)
          "ignored": "(not $show_screenshot)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_world_content_text_area_panel@play.realms_world_content_text_area_panel": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "realms_world_content_status_area_panel": {
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "realms_world_content_status_area_panel_container@play.realms_world_content_status_area_panel_container": {}
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "realms_trial_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$default_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$hover_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$pressed_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$locked_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "realm_screenshot@play.realm_screenshot": {} },
      {
        // ???/?? ??
        "padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_trial_content_text_area_panel@play.realms_trial_content_text_area_panel": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realms_world_item_button@common_buttons.dark_content_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_start_realms_world",
    // 오버라이드 가능한 변수
    "$button_content": "play.realms_world_content_panel",
    // 오버라이드 가능한 변수
    "$personal_realm_collection_name": "personal_realms",
    // 오버라이드 가능한 변수
    "$friend_realm_collection_name": "friends_realms",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      },
      {
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 가져올 값 이름
        "binding_name": "#world_button_focus_identifier",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#focus_identifier",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#cross_platform_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realms_world_edit_button@common_buttons.dark_glyph_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_realms_world_item_edit",
    // 오버라이드 가능한 변수
    "$button_content": "play.realms_slots_edit_icon",
    // 오버라이드 가능한 변수
    "$button_tts_header": "accessibility.play.editRealm",
    // 가로/세로 크기
    "size": [ "100%y", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#cross_platform_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      }
    ]
  },

  // ???/?? ??
  "realms_feed_button_content": {
    // 이미지 표시
    "type": "image",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "default_icon@play.realms_stories_icon": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져올 값 이름
              "binding_name": "(not #realms_unread_story_count_visible)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 이름
              "binding_collection_name": "$realms_worlds_collection_name"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "unread_icon_active@play.realms_stories_icon_animated": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져올 값 이름
              "binding_name": "#realms_unread_story_count_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 이름
              "binding_collection_name": "$realms_worlds_collection_name"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "persistent_realms_feed_button_control@common_buttons.new_ui_button_panel": {
    // 오버라이드 가능한 변수
    "$new_ui_button_texture": "$default_button_texture",
    // 오버라이드 가능한 변수
    "$glyph_color": "$dark_glyph_default_color",
    // 오버라이드 가능한 변수
    "$border_color": "$dark_border_default_color",
    // 오버라이드 가능한 변수
    "$button_press_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$border_layer": 2,
    // 오버라이드 가능한 변수
    "$border_alpha": 0,
    // 오버라이드 가능한 변수
    "$button_image_alpha": 0,
    // 오버라이드 가능한 변수
    "$content_alpha": 0,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 4,
    // 오버라이드 가능한 변수
    "$button_content": "play.realms_feed_button_content"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realms_feed_button@common_buttons.dark_glyph_button_with_custom_control": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_realms_feed",
    // 오버라이드 가능한 변수
    "$custom_control": "play.persistent_realms_feed_button_control",
    // 오버라이드 가능한 변수
    "$button_tts_header": "#realms_feed_button_tts_header",
    // 가로/세로 크기
    "size": [ "100%y", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#menu_realms_feed_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      },
      {
        // 가져올 값 이름
        "binding_name": "#realms_feed_button_tts_header",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name",
        // 목록 데이터를 반복 연결
        "binding_type": "collection"
      },
      {
        // 가져올 값 이름
        "binding_name": "#cross_platform_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "leave_friends_realm_button@common_buttons.dark_glyph_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_realms_world_item_remove",
    // 오버라이드 가능한 변수
    "$button_content": "play.realms_remove_icon",
    // 오버라이드 가능한 변수
    "$button_tts_header": "accessibility.play.leaveRealm",
    // 가로/세로 크기
    "size": [ "100%y", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#cross_platform_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      }
    ]
  },

  // ???/?? ??
  "unread_story_count_text": {
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$tab_secondary_unchecked_text_color",
    // ?? ??
    "shadow": false,
    // 보여줄 글자
    "text": "#realms_unread_story_count",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 가져올 값 이름
        "binding_name": "#realms_unread_story_count",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      }
    ]
  },

  // ???/?? ??
  "unread_story_count_text_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/invite_number_background"
  },

  // ???/?? ??
  "unread_story_count_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "right_middle",
    // 가로/세로 크기
    "size": [ "100%c", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "text@play.unread_story_count_text": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 9,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background@play.unread_story_count_text_background": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": -1,
                // 가로/세로 크기
                "size": [ "100%+4px", "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ -0.5, 0 ]
              }
            }
          ]
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 가져올 값 이름
        "binding_name": "#realms_unread_story_count_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 목록 이름
        "binding_collection_name": "$realms_worlds_collection_name"
      }
    ]
  },

  // ???/?? ??
  "realms_world_item": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", 29 ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_world_item_button@play.realms_world_item_button": {
          // 가로/세로 크기
          "size": [ "fill", "100% + 1px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "edit_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%y - 1px", "100% + 1px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "realms_world_edit_button@play.realms_world_edit_button": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // ???/?? ??
              "realms_world_expiry_notification_image": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/update",
                // 기준점에서 이동하는 거리
                "offset": [ 0, -10 ],
                // 가로/세로 크기
                "size": [ 8, 15 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_right",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 7,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 가져올 값 이름
                    "binding_name": "#realms_world_expiry_notification_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 목록 이름
                    "binding_collection_name": "$realms_worlds_collection_name"
                  }
                ]
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#realms_edit_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$realms_worlds_collection_name"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "feed_panel_with_unread_count": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%y - 1px", "100% + 1px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "feed_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%y", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "realms_feed_button@play.realms_feed_button": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "unread_story_count@play.unread_story_count_panel": {
                // 기준점에서 이동하는 거리
                "offset": [ 0, 1.5 ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "leave_realm_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c - 1px", "100% + 1px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "leave_friends_realm_button@play.leave_friends_realm_button": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#leave_realm_button_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$realms_worlds_collection_name"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realms_world_item_grid@play.world_item_grid_base": {
    // ??? ?? ?
    "grid_item_template": "$grid_item_layout",
    // ??? ?? ?
    "grid_dimension_binding": "$grid_name",
    // 목록 이름
    "collection_name": "$realms_worlds_collection_name",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "$grid_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#realms_grids_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  //---------------------------------------------------------------------------
  // FRIENDS WORLD GRID
  //---------------------------------------------------------------------------

  "network_world_header": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%", 10 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 오버라이드 가능한 변수
    "$header_icon_visible|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "network_world_header_icon": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 10, 10 ],
          // 완전히 제거(공간도 없음)
          "ignored": "(not $header_icon_visible)",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#network_world_header_icon_texture_path",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            },
            {
              // 가져올 값 이름
              "binding_name": "#network_world_header_icon_texture_location",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture_file_system",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "spacer": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $header_icon_visible)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 5, 0 ]
        }
      },
      {
        // ???/?? ??
        "header_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "network_world_header_text@play.world_list_text": {
                // 보여줄 글자
                "text": "#network_world_header",
                // ?? (R,G,B,A)
                "color": "$text_color",
                // 기준점에서 이동하는 거리
                "offset": [ 0, 1 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#network_world_header",
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
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "network_world_details@play.world_list_text": {
    // 보여줄 글자
    "text": "#network_world_details",
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 가로/세로 크기
    "size": [ "100%", 10 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_left",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#network_world_details",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$collection_name"
      }
    ]
  },

  // ???/?? ??
  "network_world_player_count": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", 10 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count@play.world_list_text": {
          // 보여줄 글자
          "text": "#network_world_player_count",
          // ?? (R,G,B,A)
          "color": "$secondary_text_color",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#network_world_player_count",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            },
            {
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져올 값 이름
              "binding_name": "#network_world_player_count_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "network_world_game_status_icon": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 10, 10 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "game_online_icon@play.game_online_icon": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#game_online",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "game_unavailable_icon@play.game_unavailable_icon": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#game_unavailable",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "game_offline_icon@play.game_offline_icon": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#game_offline",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "network_world_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%-2px", "100%-2px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "network_world_header@play.network_world_header": {} },
      { "network_world_details@play.network_world_details": {} }
    ]
  },

  // ???/?? ??
  "network_world_content_text_area_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "network_world_text_panel@play.network_world_text_panel": {} }
    ]
  },

  // ???/?? ??
  "network_world_content_status_area_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%c", "100%cm" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "network_player_count_text_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "network_world_player_count@play.network_world_player_count": {
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
          "size": [ 2, 10 ]
        }
      },
      { "network_world_game_status_icon@play.network_world_game_status_icon": {} }
    ]
  },

  // ???/?? ??
  "network_world_content_status_area_panel_container": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%cm", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "network_world_status_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%sm", "100%c" ],
          // ?? ?? ?
          "min_size": [ "100%c", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "network_world_content_status_area_panel@play.network_world_content_status_area_panel": {}
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "network_world_type@play.network_world_type": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져올 값 이름
              "binding_name": "#network_world_is_hardcore",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "network_world_type": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", 10 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "type@play.world_list_text": {
          // 보여줄 글자
          "text": "selectWorld.worldTags.hardcore",
          // ?? (R,G,B,A)
          "color": "$secondary_text_color"
        }
      }
    ]
  },

  // ???/?? ??
  "network_world_item_button_content": {
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
        "network_world_content_text_area_panel@play.network_world_content_text_area_panel": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "network_status_area_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "network_world_content_status_area_panel_container@play.network_world_content_status_area_panel_container": {}
            }
          ]
        }
      },
      {
        // ???/?? ??
        "network_world_type_icon": {
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 완전히 제거(공간도 없음)
          "ignored": "$hide_network_icon",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 6, 10 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "$network_world_icon@$network_world_icon": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "network_world_item_button@common_buttons.dark_content_button": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_network_world_item",
    // 오버라이드 가능한 변수
    "$button_content": "play.network_world_item_button_content",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#network_world_button_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled",
        // 목록 이름
        "binding_collection_name": "$collection_name",
        // 목록 데이터를 반복 연결
        "binding_type": "collection"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "network_server_world_edit_button@common_buttons.dark_glyph_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_network_server_world_edit",
    // 오버라이드 가능한 변수
    "$button_content": "play.edit_icon",
    // 오버라이드 가능한 변수
    "$button_tts_header": "accessibility.play.editServer",
    // 가로/세로 크기
    "size": [ "100%y", "100% + 1px" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#network_world_button_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled",
        // 목록 이름
        "binding_collection_name": "$collection_name",
        // 목록 데이터를 반복 연결
        "binding_type": "collection"
      }
    ]
  },

  // ???/?? ??
  "network_world_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "network_world_item_button@play.network_world_item_button": {
          // 가로/세로 크기
          "size": [ "100%", "100% + 1px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "network_world_item_grid@play.world_item_grid_base": {
    // ??? ?? ?
    "grid_item_template": "$network_world_grid_item_template",
    // ??? ?? ?
    "grid_dimension_binding": "$network_world_item_grid_dimension_binding",
    // 목록 이름
    "collection_name": "$collection_name",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "$network_world_item_grid_dimension_binding"
      }
    ]
  },

  // ???/?? ??
  "label_content_template": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ],
    // 오버라이드 가능한 변수
    "$hide_network_icon|default": false,
    // 오버라이드 가능한 변수
    "$label_panel_visible|default": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "label_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 오버라이드 가능한 변수
          "$label_offset|default": [ 1, 0 ],
          // 오버라이드 가능한 변수
          "$label_size|default": [ "100%", "default" ],
          // 보이기/숨기기(공간 유지)
          "visible": "$label_panel_visible",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "label_panel_layout": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 가로/세로 크기
                "size": [ "100%-4px", "100%c+2px" ],
                // 기준점에서 이동하는 거리
                "offset": "$label_offset",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "label": {
                      // 글자 표시
                      "type": "label",
                      // ?? (R,G,B,A)
                      "color": "$dark_button_default_text_color",
                      // 가로/세로 크기
                      "size": "$label_size",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // ?? ??
                      "shadow": false,
                      // 보여줄 글자
                      "text": "$label_content_label",
                      // 오버라이드 가능한 변수
                      "$label_content_label_binding_type|default": "none",
                      // 오버라이드 가능한 변수
                      "$label_content_label_binding_condition|default": "none",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "$label_content_label",
                          // 바인딩 종류(변수로 관리되는 경우도 있음)
                          "binding_type": "$label_content_label_binding_type",
                          // ?? ???
                          "binding_condition": "$label_content_label_binding_condition"
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
        "content@$label_content_content": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // ???/?? ??
  "information_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%cm" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@play.dark_label_background": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "label_panel_layout": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 가로/세로 크기
                "size": [ "100%-8px", "100%c + 8px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "label": {
                      // 글자 표시
                      "type": "label",
                      // 오버라이드 가능한 변수
                      "$information_label_font|default": "default",
                      // ??
                      "font_type": "$information_label_font",
                      // ?? (R,G,B,A)
                      "color": "$dark_button_default_text_color",
                      // 가로/세로 크기
                      "size": [ "100%", "default" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // ?? ??
                      "shadow": false,
                      // 보여줄 글자
                      "text": "$information_panel_label_text",
                      // 오버라이드 가능한 변수
                      "$information_panel_label_text_binding_type|default": "none",
                      // 오버라이드 가능한 변수
                      "$information_panel_label_text_binding_condition|default": "none",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "$information_panel_label_text",
                          // 바인딩 종류(변수로 관리되는 경우도 있음)
                          "binding_type": "$information_panel_label_text_binding_type",
                          // ?? ???
                          "binding_condition": "$information_panel_label_text_binding_condition"
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
        "focus_button@common.non_interact_focus_border_button": {
          // 가로/세로 크기
          "size": [ "100%", "100%sm" ],
          // ?? ??
          "tts_inherit_siblings": true
        }
      }
    ]
  },

  // ???/?? ??
  "blocked_multiplayer_privileges_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@play.dark_label_background": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "label_panel_layout": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 가로/세로 크기
                "size": [ "100%-8px", "100%c + 8px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "label": {
                      // 글자 표시
                      "type": "label",
                      // ?? (R,G,B,A)
                      "color": "$dark_button_default_text_color",
                      // 가로/세로 크기
                      "size": [ "100%", "default" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // ?? ??
                      "shadow": false,
                      // 보이기/숨기기(공간 유지)
                      "visible": false,

                      // 보여줄 글자
                      "text": "#privilegesBlockedText",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#privilegesBlockedText",
                          // 게임이 주는 전역 값 연결
                          "binding_type": "global",
                          // ?? ???
                          "binding_condition": "always_when_visible"
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

  //---------------------------------------------------------------------------
  // RECENT SERVER GRID
  //---------------------------------------------------------------------------

  "more_servers_grid": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // ??? ?? ?
    "grid_item_template": "more_servers_world_item",
    // ??? ?? ?
    "grid_dimension_binding": "#servers_network_world_item_grid_dimension",
    // 목록 이름
    "collection_name": "servers_network_worlds",
    // 오버라이드 가능한 변수
    "$collection_name": "servers_network_worlds",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // ?? ??
    "ttsSectionContainer": true,
    // 오버라이드 가능한 변수
    "$toggle_index_binding_name": "#additional_server_toggle_index",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#servers_network_world_item_grid_dimension"
      }
    ]
  },

  // ???/?? ??
  "additional_server_toggle_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_unchecked",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_unchecked_hover",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_checked_hover",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_checked",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_locked",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      }
    ],
    // 오버라이드 가능한 변수
    "$secondary_text_color": "$dark_button_secondary_default_text_color",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "network_world_content_text_area_panel@play.network_world_content_text_area_panel": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // ???/?? ??
  "more_servers_label_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 10 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "list_label": {
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$dark_button_default_text_color",
          // 가로/세로 크기
          "size": [ "100%", 10 ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 보여줄 글자
          "text": "$label_text"
        }
      }
    ]
  },

  // ???/?? ??
  "more_servers_world_item": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "additional_server_toggle_base@play.server_toggle_base": {
          // 오버라이드 가능한 변수
          "$focus_override_right": "edit_server",
          // 가로/세로 크기
          "size": [ "fill", "100% + 1px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 오버라이드 가능한 변수
          "$button_content": "play.additional_server_toggle_content",
          // 오버라이드 가능한 변수
          "$toggle_index_binding_name": "#additional_server_toggle_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "network_server_world_edit_button@play.network_server_world_edit_button": {
          // 오버라이드 가능한 변수
          "$focus_id": "edit_server",
          // 오버라이드 가능한 변수
          "$focus_override_right": "right_side",
          // 완전히 제거(공간도 없음)
          "ignored": "$ignore_add_servers",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "additional_server_info_panel@play.common_scroll_pane": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#is_network_available_and_multiplayer_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "server_info_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%- 2px", "100%c + 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "server_name@play.world_list_text": {
                // 보여줄 글자
                "text": "#info_additional_server_name",
                // ?? ??
                "localize": false,
                // ?? (R,G,B,A)
                "color": "$main_header_text_color",
                // ??
                "font_type": "smooth",
                // ?? ??
                "text_alignment": "left",
                // 가로/세로 크기
                "size": [ "100%", 10 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#info_additional_server_name"
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
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_count@play.text_icon_number_panel": {
                // 오버라이드 가능한 변수
                "$text_icon_number_text": "networkWorld.online",
                // 오버라이드 가능한 변수
                "$text_icon_number_icon": "#server_player_count_icon",
                // 오버라이드 가능한 변수
                "$text_icon_number_number": "#info_additional_server_player_count",
                // 오버라이드 가능한 변수
                "$icon_size": [ 5, 5 ]
              }
            },
            {
              // ???/?? ??
              "padding_3": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "ping@play.text_icon_number_panel": {
                // 오버라이드 가능한 변수
                "$text_icon_number_text": "networkWorld.current_ping",
                // 오버라이드 가능한 변수
                "$text_icon_number_icon": "#info_additional_server_ping_texture_name",
                // 오버라이드 가능한 변수
                "$text_icon_number_number": "#info_additional_server_ping",
                // 오버라이드 가능한 변수
                "$icon_size": [ 8, 8 ],
                // 오버라이드 가능한 변수
                "$ping_bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#ping_ready_thirdparty",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 오버라이드 가능한 변수
                "$progress_panel": "play.small_progress_panel",
                // 오버라이드 가능한 변수
                "$number_bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "$text_icon_number_number"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#ping_ready_external",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_4": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "join_server_button@common_buttons.light_text_button": {
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.menu_network_server_item",
                // 오버라이드 가능한 변수
                "$button_text": "networkWorld.join_server",
                // 오버라이드 가능한 변수
                "$focus_override_left": "left_panel",
                // 가로/세로 크기
                "size": [ "100%", 20 ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "ping_rate_icon": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 8, 8 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#texture_name",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#texture",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$collection_name"
      }
    ]
  },

  // ???/?? ??
  "ping_rate_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "concurrency_stack": {
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
              "player_count": {
                // 글자 표시
                "type": "label",
                // 가로/세로 크기
                "size": [ "default", 10 ],
                // 보여줄 글자
                "text": "#server_player_count",
                // ?? (R,G,B,A)
                "color": "$text_color",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 가져올 값 이름
                    "binding_name": "#server_player_count",
                    // 목록 이름
                    "binding_collection_name": "$collection_name"
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
                "size": [ 2, "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "ping_rate_icon@play.ping_rate_icon": {}
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져올 값 이름
              "binding_name": "(#is_network_available_and_ping_not_loading)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 이름
              "binding_collection_name": "third_party_server_network_worlds"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "add_server_info_panel@play.common_scroll_pane": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "server_info_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%- 2px", "100%c + 1px" ],
          // 보이기/숨기기(공간 유지)
          "visible": "(not $is_console)",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 4 ]
              }
            },
            {
              // ???/?? ??
              "add_server_title": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "externalServerScreen.addServerTitle",
                // ?? (R,G,B,A)
                "color": "$body_text_color",
                // ?? ??
                "text_alignment": "left",
                // 가로/세로 크기
                "size": [ "100%", 10 ]
              }
            },
            {
              // ???/?? ??
              "padding_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // ???/?? ??
              "add_server_description": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "externalServerScreen.addServerDescription",
                // ?? (R,G,B,A)
                "color": "$body_text_color",
                // ??
                "font_type": "smooth",
                // ?? ?? ??
                "font_scale_factor": 0.8,
                // ?? ??
                "text_alignment": "left",
                // 가로/세로 크기
                "size": [ "100%", "default" ]
              }
            }
          ]
        }
      }
    ]
  },

  //---------------------------------------------------------------------------
  // FEATURED SERVER GRID
  //---------------------------------------------------------------------------

  "third_party_featured_server_grid": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // ??? ?? ?
    "grid_item_template": "featured_server_world_item",
    // ??? ?? ?
    "grid_dimension_binding": "#third_party_featured_item_grid_dimension",
    // 목록 이름
    "collection_name": "third_party_server_network_worlds",
    // 오버라이드 가능한 변수
    "$collection_name": "third_party_server_network_worlds",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // ?? ??
    "ttsSectionContainer": true,
    // 오버라이드 가능한 변수
    "$toggle_index_binding_name": "#third_party_toggle_index",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#third_party_featured_item_grid_dimension"
      },
      {
        // 가져올 값 이름
        "binding_name": "#featured_servers_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  // ???/?? ??
  "featured_server_world_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 40 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "server_button@play.server_toggle_base": {
          // 오버라이드 가능한 변수
          "$button_content": "play.server_button_content_panel",
          // 오버라이드 가능한 변수
          "$toggle_index_binding_name": "#third_party_toggle_index"
        }
      }
    ]
  },

  // ???/?? ??
  "server_button_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_unchecked",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_unchecked_hover",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_checked_hover",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_checked",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$toggle_locked",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "top_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%", "50%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "third_party_server_screenshot@play.third_party_server_screenshot": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#third_party_screenshot_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$collection_name"
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
                "size": [ 6, "100%" ]
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
                    "third_party_server_name@play.world_list_text": {
                      // 보여줄 글자
                      "text": "#third_party_server_name",
                      // ?? ??
                      "localize": false,
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // ??
                      "font_type": "smooth",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 2 ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#third_party_server_name",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "$collection_name"
                        },
                        {
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 가져올 값 이름
                          "binding_name": "#is_server_info_available_collection",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible",
                          // 목록 이름
                          "binding_collection_name": "third_party_server_network_worlds"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "progress@progress.progress_loading_bars": {
                      // 가로/세로 크기
                      "size": [ "100% - 8px", "100% - 4px" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 5,
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 가져올 값 이름
                          "binding_name": "(not #is_server_info_available_collection)",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible",
                          // 목록 이름
                          "binding_collection_name": "third_party_server_network_worlds"
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
        "padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "bottom_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "50% - 2px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "third_party_server_message@play.world_list_text": {
                // 보여줄 글자
                "text": "#third_party_server_message",
                // ?? ??
                "localize": false,
                // ?? (R,G,B,A)
                "color": "$dark_button_default_text_color",
                // ??
                "font_type": "smooth",
                // 가로/세로 크기
                "size": [ "100% - 4px", "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, 1 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#third_party_server_message",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "$collection_name"
                  },
                  {
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 가져올 값 이름
                    "binding_name": "(not #is_network_available)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible",
                    // 목록 이름
                    "binding_collection_name": "third_party_server_network_worlds"
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
  "third_party_server_content_panel": {
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
        "ping_rate_panel@play.ping_rate_panel": {}
      }
    ]
  },

  // ???/?? ??
  "loading_featured_servers_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ?? ?
    "min_size": [ "100%", 60 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 2 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "load_bars": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 12 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "progress_loading_bars@common_store.progress_loading_bars": {
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "third_party_server_screenshot": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ "100%c + 2px", "100%" ],
    // 사용할 이미지 경로
    "texture": "$border_texture",
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "picture": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 가로/세로 크기
          "size": [ "177.78%y", "100% - 2px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 1 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#third_party_server_logo_texture_path",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            },
            {
              // 가져올 값 이름
              "binding_name": "#third_party_server_logo_resource_location",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture_file_system",
              // 목록 이름
              "binding_collection_name": "$collection_name"
            },
            {
              // 가져올 값 이름
              "binding_name": "#third_party_server_logo_resource_location",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture_file_system"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "third_party_server_info_panel@play.common_scroll_pane": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#featured_servers_visible_and_available",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "server_info_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%- 2px", "100%c + 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#is_server_info_available",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 4 ]
              }
            },
            {
              // ???/?? ??
              "server_screenshot": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100%", "56.25%x" ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#info_third_party_server_logo_texture_path",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#third_party_server_logo_resource_location",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture_file_system"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#third_party_server_logo_resource_location",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#texture_file_system",
                    // 목록 이름
                    "binding_collection_name": "server_games_collection"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#info_third_party_screenshot_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
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
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "server_name@play.world_list_text": {
                // 보여줄 글자
                "text": "#info_third_party_server_name",
                // ?? ??
                "localize": false,
                // ?? (R,G,B,A)
                "color": "$main_header_text_color",
                // ??
                "font_type": "smooth",
                // ?? ??
                "text_alignment": "left",
                // 가로/세로 크기
                "size": [ "100%", 10 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#info_third_party_server_name"
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
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "player_count@play.text_icon_number_panel": {
                // 오버라이드 가능한 변수
                "$text_icon_number_text": "networkWorld.online",
                // 오버라이드 가능한 변수
                "$text_icon_number_icon": "#server_player_count_icon",
                // 오버라이드 가능한 변수
                "$text_icon_number_number": "#info_third_party_server_player_count",
                // 오버라이드 가능한 변수
                "$icon_size": [ 5, 5 ]
              }
            },
            {
              // ???/?? ??
              "padding_3": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "ping@play.text_icon_number_panel": {
                // 오버라이드 가능한 변수
                "$text_icon_number_text": "networkWorld.current_ping",
                // 오버라이드 가능한 변수
                "$text_icon_number_icon": "#info_ping_texture_name",
                // 오버라이드 가능한 변수
                "$text_icon_number_number": "#info_server_ping",
                // 오버라이드 가능한 변수
                "$icon_size": [ 8, 8 ],
                // 오버라이드 가능한 변수
                "$ping_bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#ping_ready_thirdparty",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 오버라이드 가능한 변수
                "$progress_panel": "play.small_progress_panel"
              }
            },
            {
              // ???/?? ??
              "padding_4": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "join_server_button@common_buttons.light_text_button": {
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.connect_to_third_party_server",
                // 오버라이드 가능한 변수
                "$button_text": "networkWorld.join_server",
                // 오버라이드 가능한 변수
                "$focus_override_left": "left_panel",
                // 가로/세로 크기
                "size": [ "100%", 20 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "view_offers_button@common_buttons.light_text_button": {
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.view_third_party_server_offers",
                // 오버라이드 가능한 변수
                "$button_text": "networkWorld.view_offers",
                // 오버라이드 가능한 변수
                "$focus_override_left": "left_panel",
                // 가로/세로 크기
                "size": [ "100%", 20 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#view_offers_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "padding_5": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "screenshots_section@play.screenshots_section_panel": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#server_has_screenshots",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "description_section@play.description_section_panel": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#server_has_description",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "games_section@play.games_section_panel": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#server_has_games",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "news_section@play.news_section_panel": {
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#server_has_news",
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
        "progress@progress.progress_loading_bars": {
          // 가로/세로 크기
          "size": [ "100% - 8px", 15 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 8 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 5,
          // ?? (R,G,B,A)
          "color": "$dark_button_default_text_color",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "(not #is_server_info_available)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "text_icon_number_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%", 10 ],
    // 오버라이드 가능한 변수
    "$ping_bindings|default": [],
    // 오버라이드 가능한 변수
    "$progress_bindings|default": [],
    // 오버라이드 가능한 변수
    "$progress_panel|default": "play.empty_panel",
    // 오버라이드 가능한 변수
    "$number_bindings|default": [
      {
        // 가져올 값 이름
        "binding_name": "$text_icon_number_number"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 보여줄 글자
        "text": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "default", "default" ],
          // ?? (R,G,B,A)
          "color": "$main_header_text_color",
          // ??
          "font_type": "smooth",
          // ?? ??
          "text_alignment": "left",
          // 보여줄 글자
          "text": "$text_icon_number_text"
        }
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 3, "100%" ]
        }
      },
      {
        // ???/?? ??
        "stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": "$ping_bindings",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "icon_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "icon": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": "$icon_size",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "$text_icon_number_icon",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#texture"
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
                "size": [ 4, "100%" ]
              }
            },
            {
              // ???/?? ??
              "number": {
                // 글자 표시
                "type": "label",
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // ?? (R,G,B,A)
                "color": "$main_header_text_color",
                // ??
                "font_type": "smooth",
                // ?? ??
                "text_alignment": "left",
                // 보여줄 글자
                "text": "$text_icon_number_number",
                // 게임 값과 연결하는 규칙 목록
                "bindings": "$number_bindings"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "$progress_panel@$progress_panel": {}
      }
    ]
  },

  // ???/?? ??
  "grey_bar_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "fill", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "grey_bar": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ "100% - 1px", "100%" ],
          // 사용할 이미지 경로
          "texture": "textures/ui/white_background",
          // ?? ??
          "keep_ratio": false,
          // 이미지 반복 여부
          "tiled": true,
          // ?? (R,G,B,A)
          "color": "$servers_screenshot",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "(not #this_screenshot_selected)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "server_screenshot_collection"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "green_bar": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ "100% - 1px", "100%" ],
          // 사용할 이미지 경로
          "texture": "textures/ui/white_background",
          // ?? ??
          "keep_ratio": false,
          // 이미지 반복 여부
          "tiled": true,
          // ?? (R,G,B,A)
          "color": "$servers_current_screenshot",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#this_screenshot_selected",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "server_screenshot_collection"
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
          "size": [ 1, "100%" ]
        }
      }
    ]
  },

  // ???/?? ??
  "screenshots_section_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "divider_0@common.horizontal_divider": {}
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "screenshots_label": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100%", 11 ],
          // ?? (R,G,B,A)
          "color": "$body_text_color",
          // 보여줄 글자
          "text": "networkWorld.screenshots"
        }
      },
      {
        // ???/?? ??
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "screenshots": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ "100%", "56.25%x" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#screenshot_texture",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture"
            },
            {
              // 가져올 값 이름
              "binding_name": "#third_party_server_logo_resource_location",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture_file_system"
            },
            {
              // 가져올 값 이름
              "binding_name": "#third_party_server_logo_resource_location",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#texture_file_system",
              // 목록 이름
              "binding_collection_name": "server_games_collection"
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
          "size": [ "100%", 4 ]
        }
      },
      {
        // ???/?? ??
        "navigation_panel": {
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
              "left_arrow_button@common_buttons.light_content_button": {
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.navigate_screenshots_left",
                // 오버라이드 가능한 변수
                "$button_content": "play.left_arrow_icon",
                // 오버라이드 가능한 변수
                "$focus_override_right": "right_arrow_button",
                // 오버라이드 가능한 변수
                "$focus_override_left": "left_panel",
                // 가로/세로 크기
                "size": [ 15, "100%" ]
              }
            },
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 4, "100%" ]
              }
            },
            {
              // ???/?? ??
              "navigation_bar": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", 5 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "grey_bar": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 5 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/Black",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "grey_bar_factory_panel": {
                            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                            "type": "stack_panel",
                            // 쌓는 방향(가로/세로)
                            "orientation": "horizontal",
                            // 가로/세로 크기
                            "size": [ "100% - 1px", 3 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "right_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "right_middle",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2,
                            // 목록 아이템을 자동으로 생성
                            "factory": {
                              // ?? ??
                              "name": "grey_bar_factory",
                              // ??? ???
                              "control_name": "play.grey_bar_panel"
                            },
                            // 목록 이름
                            "collection_name": "server_screenshot_collection",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#screenshot_collection_length",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#collection_length"
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
                "size": [ 4, "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "right_arrow_button@common_buttons.light_content_button": {
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.navigate_screenshots_right",
                // 오버라이드 가능한 변수
                "$button_content": "play.right_arrow_icon",
                // 오버라이드 가능한 변수
                "$focus_id": "right_arrow_button",
                // 가로/세로 크기
                "size": [ 15, "100%" ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "padding_3": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      }
    ]
  },

  // ???/?? ??
  "description_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 오버라이드 가능한 변수
    "$description_max_size|default": [ "100% - 2px", 40 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "contents_description": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100% - 2px", "default" ],
          // ?? ?? ?
          "max_size": "$description_max_size",
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$body_text_color",
          // ??
          "font_type": "smooth",
          // ?? ??
          "enable_profanity_filter": false,
          // 보여줄 글자
          "text": "#description_label",
          // ???/?? ??
          "notify_on_ellipses": [
            "description_read_more_button_panel"
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#description_label"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "description_section_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "divider_0@common.horizontal_divider": {}
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "description_label": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100%", 11 ],
          // ?? (R,G,B,A)
          "color": "$body_text_color",
          // 보여줄 글자
          "text": "networkWorld.description"
        }
      },
      {
        // ???/?? ??
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "read_more_panel": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/screen_background",
          // ???
          "alpha": 0.6,
          // 가로/세로 크기
          "size": [ "100%", "100%c + 4px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "description_text_small@play.description_text_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100% - 5px", "100%c" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#description_is_read_more",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "description_text_full@play.description_text_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100% - 5px", "100%c" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 오버라이드 가능한 변수
                "$description_max_size": [ "100% - 2px", "default" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#description_is_read_less",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "description_read_more_button_panel@common_buttons.read_button": {
                // 오버라이드 가능한 변수
                "$offset": [ -6, -2.5 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 오버라이드 가능한 변수
                "$single_line_label_text": "store.mashup.readMore",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.description_read_toggle",
                // 오버라이드 가능한 변수
                "$focus_override_left": "left_panel",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#description_is_read_more",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 오버라이드 가능한 변수
                "$bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#using_ellipses",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "description_read_less_button_panel@common_buttons.read_button": {
                // 오버라이드 가능한 변수
                "$offset": [ -6, -2.5 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 오버라이드 가능한 변수
                "$single_line_label_text": "store.mashup.readLess",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.description_read_toggle",
                // 오버라이드 가능한 변수
                "$focus_override_left": "left_panel",
                // 오버라이드 가능한 변수
                "$bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#description_is_read_less",
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
        "padding_3": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      }
    ]
  },

  // ???/?? ??
  "games_factory_object": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "games_factory_panel": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 사용할 이미지 경로
          "texture": "textures/ui/screen_background",
          // ???
          "alpha": 0.6,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "top_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // ?? ?? ?
                "min_size": [ "100% - 8px", 30 ],
                // 가로/세로 크기
                "size": [ "100% - 8px", "100%cm" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "game_image_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // ?? ?? ?
                      "min_size": [ "50%", 30 ],
                      // 가로/세로 크기
                      "size": [ "50%", "100%sm" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "game_image": {
                            // 이미지 표시
                            "type": "image",
                            // 가로/세로 크기
                            "size": [ "100%", "100%" ],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#available_game_image",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#texture",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection",
                                // 목록 이름
                                "binding_collection_name": "server_games_collection"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "#available_game_image_visible",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#visible",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection",
                                // 목록 이름
                                "binding_collection_name": "server_games_collection"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "#third_party_server_logo_resource_location",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#texture_file_system"
                              },
                              {
                                // 가져올 값 이름
                                "binding_name": "#third_party_server_logo_resource_location",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#texture_file_system",
                                // 목록 이름
                                "binding_collection_name": "server_games_collection"
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
                      "size": [ 4, "100%sm" ]
                    }
                  },
                  {
                    // ???/?? ??
                    "game_title_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "vertical",
                      // ?? ?? ?
                      "min_size": [ "fill", 30 ],
                      // 가로/세로 크기
                      "size": [ "fill", "100%c" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "game_title": {
                            // 글자 표시
                            "type": "label",
                            // 가로/세로 크기
                            "size": [ "100%", "default" ],
                            // ?? (R,G,B,A)
                            "color": "$body_text_color",
                            // ??
                            "font_type": "smooth",
                            // 보여줄 글자
                            "text": "#available_game_title",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#available_game_title",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection",
                                // 목록 이름
                                "binding_collection_name": "server_games_collection"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "game_subtitle": {
                            // 글자 표시
                            "type": "label",
                            // 가로/세로 크기
                            "size": [ "100%", "default" ],
                            // ?? (R,G,B,A)
                            "color": "$body_text_color",
                            // ??
                            "font_type": "smooth",
                            // ?? ?? ??
                            "font_scale_factor": 0.8,
                            // 보여줄 글자
                            "text": "#available_game_subtitle",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#available_game_subtitle",
                                // 목록 데이터를 반복 연결
                                "binding_type": "collection",
                                // 목록 이름
                                "binding_collection_name": "server_games_collection"
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
              "bottom_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100% - 8px", "100%c + 4px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "bottom_panel": {
                      // 글자 표시
                      "type": "label",
                      // 가로/세로 크기
                      "size": [ "100%", "default" ],
                      // ?? (R,G,B,A)
                      "color": "$body_text_color",
                      // ??
                      "font_type": "smooth",
                      // ?? ?? ??
                      "font_scale_factor": 0.8,
                      // 보여줄 글자
                      "text": "#available_game_description",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#available_game_description",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "server_games_collection"
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
        "padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      }
    ]
  },

  // ???/?? ??
  "games_section_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "divider_0@common.horizontal_divider": {}
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "description_label": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100%", 11 ],
          // ?? (R,G,B,A)
          "color": "$body_text_color",
          // 보여줄 글자
          "text": "networkWorld.available_games"
        }
      },
      {
        // ???/?? ??
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "games_factory_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100% - 2px", "100%c" ],
          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "available_games_factory",
            // ??? ???
            "control_name": "play.games_factory_object"
          },
          // 목록 이름
          "collection_name": "server_games_collection",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#games_collection_length",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#collection_length"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "padding_3": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      }
    ]
  },

  // ???/?? ??
  "news_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 오버라이드 가능한 변수
    "$news_max_size|default": [ "100% - 2px", 40 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "contents_news": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100% - 2px", "default" ],
          // ?? ?? ?
          "max_size": "$news_max_size",
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$body_text_color",
          // ??
          "font_type": "smooth",
          // ?? ?? ??
          "font_scale_factor": 0.8,
          // ?? ??
          "enable_profanity_filter": false,
          // 보여줄 글자
          "text": "#news_text",
          // ???/?? ??
          "notify_on_ellipses": [
            "news_read_more_button_panel"
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#news_text"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "news_section_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "divider_0@common.horizontal_divider": {}
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "news_label": {
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$body_text_color",
          // 가로/세로 크기
          "size": [ "100%", 11 ],
          // 보여줄 글자
          "text": "networkWorld.news"
        }
      },
      {
        // ???/?? ??
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // ???/?? ??
        "read_more_panel": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/screen_background",
          // ???
          "alpha": 0.6,
          // 가로/세로 크기
          "size": [ "100%", "100%c + 4px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "text_stack_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "vertical",
                // 가로/세로 크기
                "size": [ "100% - 7px", "100%c" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "news_title_text": {
                      // 글자 표시
                      "type": "label",
                      // 가로/세로 크기
                      "size": [ "100%", 11 ],
                      // ?? (R,G,B,A)
                      "color": "$body_text_color",
                      // ??
                      "font_type": "smooth",
                      // 보여줄 글자
                      "text": "#news_label",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 5,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#news_label"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "divider_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", 4 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 5,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "divider_0@common.horizontal_divider": {}
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "news_text_small@play.news_text_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%c" ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#news_is_read_more",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "news_text_full@play.news_text_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%c" ],
                      // 오버라이드 가능한 변수
                      "$news_max_size": [ "100% - 2px", "default" ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#news_is_read_less",
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
              "news_read_more_button_panel@common_buttons.read_button": {
                // 오버라이드 가능한 변수
                "$offset": [ -6, -2.5 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 오버라이드 가능한 변수
                "$single_line_label_text": "store.mashup.readMore",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.news_read_toggle",
                // 오버라이드 가능한 변수
                "$focus_override_left": "left_panel",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#news_is_read_more",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 오버라이드 가능한 변수
                "$bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "#using_ellipses",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "news_read_less_button_panel@common_buttons.read_button": {
                // 오버라이드 가능한 변수
                "$offset": [ -6, -2.5 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 오버라이드 가능한 변수
                "$single_line_label_text": "store.mashup.readLess",
                // 오버라이드 가능한 변수
                "$pressed_button_name": "button.news_read_toggle",
                // 오버라이드 가능한 변수
                "$focus_override_left": "left_panel",
                // 오버라이드 가능한 변수
                "$bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#news_is_read_less",
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
        "padding_3": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      }
    ]
  },


  //---------------------------------------------------------------------------
  // LOCAL WORLD GRID
  //---------------------------------------------------------------------------
  "divider": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White"
  },

  // ???/?? ??
  "blue_diskspace_bar": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ??? ??
    "clip_direction": "left",
    // ?? ??
    "clip_pixelperfect": false,
    // ?? (R,G,B,A)
    "color": "$world_diskspace_editions_fill"
  },

  // ???/?? ??
  "green_diskspace_bar": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ??? ??
    "clip_direction": "left",
    // ?? ??
    "clip_pixelperfect": false,
    // ?? (R,G,B,A)
    "color": "$world_diskspace_bedrock_fill"
  },

  // ???/?? ??
  "empty_diskspace_bar": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$world_diskspace_empty"
  },

  // ???/?? ??
  "legacy_world_content_status_area_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "world_storage_content_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "world_storage_separator@play.divider": {
                // 가로/세로 크기
                "size": [ "100% - 2px", "2px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 1 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // ?? (R,G,B,A)
                "color": "$light_glyph_default_color"
              }
            },
            {
              // ???/?? ??
              "world_storage_information": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100% - 10px", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "legacy_world_label": {
                      // 글자 표시
                      "type": "label",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // ?? (R,G,B,A)
                      "color": "$dark_button_default_text_color",
                      // 보여줄 글자
                      "text": "playscreen.worldsStorage"
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
                    "legacy_world_bar": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 가로/세로 크기
                      "size": [ "100% - 2px", 10 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 1, 1 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "local_diskspace_bar@play.green_diskspace_bar": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 3,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#local_worlds_storage_size",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#clip_ratio"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "legacy_diskspace_bar@play.blue_diskspace_bar": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 2,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#legacy_worlds_storage_size",
                                // 가져온 값을 다른 속성으로 연결
                                "binding_name_override": "#clip_ratio"
                              }
                            ]
                          }
                        },
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "empty_diskspace_bar@play.empty_diskspace_bar": {
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
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
        }
      }
    ]
  },

  // ???/?? ??
  "world_list_text": {
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$dark_button_secondary_default_text_color",
    // ?? ??
    "shadow": false
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "realm_screenshot@play.world_screenshot_base": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "picture": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 사용할 이미지 경로
          "texture": "textures/ui/RealmDemoScreen",
          // 가로/세로 크기
          "size": [ "173.91%y", "100% - 2px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 1 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_world_name@play.world_list_text": {
    // 보여줄 글자
    "text": "#local_world_name",
    // ?? ??
    "localize": false,
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#local_world_name",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "local_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "legacy_world_name@play.world_list_text": {
    // 보여줄 글자
    "text": "#legacy_world_name",
    // ?? ??
    "localize": false,
    // ?? (R,G,B,A)
    "color": "$text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#legacy_world_name",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "legacy_worlds"
      }
    ]
  },


  // local world copy protection indicator
  "world_lock": {
    // 이미지 표시
    "type": "image",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 6,
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_right",
    // 가로/세로 크기
    "size": [ 8, 8 ],
    // 사용할 이미지 경로
    "texture": "textures/ui/lock"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_world_game_mode@play.world_list_text": {
    // 보여줄 글자
    "text": "#local_world_game_mode",
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#local_world_game_mode",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "local_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "legacy_world_game_mode@play.world_list_text": {
    // 보여줄 글자
    "text": "#legacy_world_game_mode",
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#legacy_world_game_mode",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "legacy_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_world_date@play.world_list_text": {
    // 보여줄 글자
    "text": "#local_world_date",
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#local_world_date",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "local_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "legacy_world_date@play.world_list_text": {
    // 보여줄 글자
    "text": "#legacy_world_date",
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#legacy_world_date",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "legacy_worlds"
      },
      {
        // 가져올 값 이름
        "binding_name": "#legacy_world_date_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "legacy_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_world_filesize@play.world_list_text": {
    // 보여줄 글자
    "text": "#local_worldfile_size",
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#local_worldfile_size",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "local_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "legacy_world_filesize@play.world_list_text": {
    // 보여줄 글자
    "text": "#legacy_worldfile_size",
    // ?? (R,G,B,A)
    "color": "$secondary_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#legacy_worldfile_size",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "legacy_worlds"
      }
    ]
  },

  // ???/?? ??
  "local_world_connected_storage": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "local_and_cloud@play.local_and_cloud_storage": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#local_and_cloud_storage_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "local_worlds"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "local_only@play.local_only_storage": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#local_only_storage_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "local_worlds"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cloud_only@play.cloud_only_storage": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#cloud_only_storage_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible",
              // 목록 데이터를 반복 연결
              "binding_type": "collection",
              // 목록 이름
              "binding_collection_name": "local_worlds"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "local_world_lock_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "lock@play.world_lock": {
          // 기준점에서 이동하는 거리
          "offset": [ 0, 1 ]
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#world_lock_visible",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 목록 이름
        "binding_collection_name": "local_worlds"
      }
    ]
  },

  // ???/?? ??
  "realms_plus_banner": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100% + 4px" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_banner@realmsPlus.markdown_background": {
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 오버라이드 가능한 변수
          "$triangle_offset": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$banner_size": [ "100%c - 4px", "100% - 2px" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 9
        }
      }
    ],
    // 오버라이드 가능한 변수
    "$banner_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_icon@common_store.realms_banner_icon": {}
      },
      {
        // ???/?? ??
        "pad_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, "100%" ]
        }
      },
      {
        // ???/?? ??
        "pad_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 5, "100%" ]
        }
      }
    ]
  },

  // ???/?? ??
  "local_world_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "text_indent": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100% - 4px", "100% - 4px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "top_side": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%", "50%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "local_world_name@play.local_world_name": {
                      // 가로/세로 크기
                      "size": [ "fill", 10 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "lock_1@play.local_world_lock_panel": {}
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "local_world_date@play.local_world_date": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "bottom_side": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_left",
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%", "50%" ],
                // 기준점에서 이동하는 거리
                "offset": [ -2, 1 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "realms_plus_icon@play.realms_plus_banner": {
                      // 가로/세로 크기
                      "size": [ "100%c", 12 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "local_worlds",
                          // 가져올 값 이름
                          "binding_name": "#realms_chevron_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "pad": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 3, "100%" ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "local_world_game_mode@play.local_world_game_mode": {
                      // 가로/세로 크기
                      "size": [ "fill", 10 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "local_world_connected_storage@play.local_world_connected_storage": {
                      // 가로/세로 크기
                      "size": [ 16, 8 ],
                      // 보이기/숨기기(공간 유지)
                      "visible": false,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "local_world_filesize@play.local_world_filesize": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
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
  "legacy_world_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "text_indent": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100% - 4px", "100% - 4px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "top_side": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%", "50%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "legacy_world_name@play.legacy_world_name": {
                      // 가로/세로 크기
                      "size": [ "fill", 10 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "legacy_world_date@play.legacy_world_date": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "bottom_side": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_left",
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%", "50%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "legacy_world_game_mode@play.legacy_world_game_mode": {
                      // 가로/세로 크기
                      "size": [ "fill", 10 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "legacy_world_filesize@play.legacy_world_filesize": {
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
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
  "beta_retail_world_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "text_indent": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100% - 6px", "100% - 4px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "top_side": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%", "50%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "beta_retail_world_name@play.world_list_text": {
                      // 보여줄 글자
                      "text": "$beta_retail_world_name_binding_name",
                      // 가로/세로 크기
                      "size": [ "fill", 10 ],
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "$beta_retail_collection_name",
                          // 가져올 값 이름
                          "binding_name": "$beta_retail_world_name_binding_name"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "beta_retail_world_date@play.world_list_text": {
                      // 보여줄 글자
                      "text": "$beta_retail_world_date_binding_name",
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // ?? (R,G,B,A)
                      "color": "$secondary_text_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "$beta_retail_collection_name",
                          // 가져올 값 이름
                          "binding_name": "$beta_retail_world_date_binding_name"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "bottom_side": {
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_left",
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%", "50%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "beta_retail_world_game_mode@play.world_list_text": {
                      // 보여줄 글자
                      "text": "$beta_retail_world_game_mode_binding_name",
                      // 가로/세로 크기
                      "size": [ "fill", 10 ],
                      // ?? (R,G,B,A)
                      "color": "$secondary_text_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "$beta_retail_collection_name",
                          // 가져올 값 이름
                          "binding_name": "$beta_retail_world_game_mode_binding_name"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "beta_retail_world_filesize@play.world_list_text": {
                      // 보여줄 글자
                      "text": "$beta_retail_world_filesize_binding_name",
                      // 가로/세로 크기
                      "size": [ "default", 10 ],
                      // ?? (R,G,B,A)
                      "color": "$secondary_text_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "$beta_retail_collection_name",
                          // 가져올 값 이름
                          "binding_name": "$beta_retail_world_filesize_binding_name"
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
  "world_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$default_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$hover_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$pressed_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/world_screenshot_focus_border"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$locked_state",
        // 오버라이드 가능한 변수
        "$border_texture": "textures/ui/default_indent"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_screenshot@play.collection_world_screenshot": {
          // 오버라이드 가능한 변수
          "$collection_binding_name": "$worlds_collection_name",
          // 오버라이드 가능한 변수
          "$image_binding_name": "$world_image_binding_name",
          // 오버라이드 가능한 변수
          "$supports_realmsplus_overlay": "$world_supports_realmsplus_overlay",
          // 오버라이드 가능한 변수
          "$texture_source_binding_name": "$world_texture_source_binding_name"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_text_panel@$world_text_panel_control": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_world_item_button@common_buttons.dark_content_button": {
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($local_world_upload)",
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.local_world_upload"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $local_world_upload)",
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.menu_start_local_world"
      }
    ],
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_start_local_world",
    // 오버라이드 가능한 변수
    "$worlds_collection_name": "local_worlds",
    // 오버라이드 가능한 변수
    "$world_image_binding_name": "#local_world_image",
    // 오버라이드 가능한 변수
    "$world_supports_realmsplus_overlay": true,
    // 오버라이드 가능한 변수
    "$world_texture_source_binding_name": "#local_world_texture_source",
    // 오버라이드 가능한 변수
    "$world_text_panel_control": "play.local_world_text_panel",
    // 오버라이드 가능한 변수
    "$button_content": "play.world_content_panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "local_worlds"
      },
      {
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 가져올 값 이름
        "binding_name": "#world_button_focus_identifier",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#focus_identifier",
        // 목록 이름
        "binding_collection_name": "local_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "legacy_world_item_button@common_buttons.dark_content_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.convert_legacy_world",
    // 오버라이드 가능한 변수
    "$worlds_collection_name": "legacy_worlds",
    // 오버라이드 가능한 변수
    "$world_image_binding_name": "#legacy_world_image",
    // 오버라이드 가능한 변수
    "$world_supports_realmsplus_overlay": false,
    // 오버라이드 가능한 변수
    "$world_texture_source_binding_name": "#legacy_world_texture_source",
    // 오버라이드 가능한 변수
    "$world_text_panel_control": "play.legacy_world_text_panel",
    // 오버라이드 가능한 변수
    "$button_content": "play.world_content_panel",
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
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "legacy_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "beta_retail_world_item_button@common_buttons.dark_content_button": {
    // 오버라이드 가능한 변수
    "$worlds_collection_name": "$beta_retail_collection_name",
    // 오버라이드 가능한 변수
    "$world_image_binding_name": "$beta_retail_world_image",
    // 오버라이드 가능한 변수
    "$world_supports_realmsplus_overlay": false,
    // 오버라이드 가능한 변수
    "$world_texture_source_binding_name": "$beta_retail_world_texture_source",
    // 오버라이드 가능한 변수
    "$world_text_panel_control": "play.beta_retail_world_text_panel",
    // 오버라이드 가능한 변수
    "$button_content": "play.world_content_panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$beta_retail_collection_name"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_world_edit_button@common_buttons.dark_glyph_button": {
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
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "cloud_upload_button@common_buttons.dark_glyph_button": {
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
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "local_worlds"
      }
    ]
  },

  // ???/?? ??
  "cloud_upload_and_edit_world_stack_panel": {
    // 가로/세로 크기
    "size": [ "100%c - 2px", "100%" ],
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cloud@play.cloud_upload_button": {
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
        // 다른 템플릿을 가져와서 확장(상속)
        "edit@play.local_world_edit_button": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "legacy_world_delete_button@common_buttons.dark_glyph_button": {
    // 가로/세로 크기
    "size": [ "100%y - 1px", "100%" ],
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_legacy_world_item_delete",
    // 오버라이드 가능한 변수
    "$button_content": "play.delete_icon",
    // 오버라이드 가능한 변수
    "$button_tts_header": "accessibility.play.legacyWorldsDelete",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "legacy_worlds"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "legacy_world_migrate_button@common_buttons.dark_glyph_button": {
    // 가로/세로 크기
    "size": [ "100%y - 1px", "100%" ],
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_legacy_world_item_migrate",
    // 오버라이드 가능한 변수
    "$button_content": "play.world_download_icon",
    // 오버라이드 가능한 변수
    "$button_tts_header": "accessibility.play.importWorld",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "legacy_worlds"
      }
    ]
  },

  // ???/?? ??
  "local_world_item": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", 29 ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 오버라이드 가능한 변수
    "$local_world_edit_button_visible|default": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header_button_panel@play.header_button_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 가로/세로 크기
          "size": [ "100%", "100% + 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 오버라이드 가능한 변수
          "$primary_header_button": "play.local_world_item_button",
          // 오버라이드 가능한 변수
          "$secondary_header_button": "play.cloud_upload_and_edit_world_stack_panel",
          // 오버라이드 가능한 변수
          "$secondary_visible": "$local_world_edit_button_visible"
        }
      }
    ]
  },

  // ???/?? ??
  "legacy_world_item": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", 29 ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header_button_panel_with_delete@play.header_button_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $legacy_worlds_share_storage)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 가로/세로 크기
          "size": [ "100%", "100% + 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 오버라이드 가능한 변수
          "$primary_header_button": "play.legacy_world_item_button",
          // 오버라이드 가능한 변수
          "$secondary_header_button": "play.legacy_world_delete_button"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header_button_panel_with_migrate@play.header_button_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $legacy_worlds_supports_migration)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 가로/세로 크기
          "size": [ "100%", "100% + 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 오버라이드 가능한 변수
          "$primary_header_button": "play.legacy_world_item_button",
          // 오버라이드 가능한 변수
          "$secondary_header_button": "play.legacy_world_migrate_button"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header_button_panel_no_delete@play.header_single_button_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "($legacy_worlds_share_storage or $legacy_worlds_supports_migration)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 가로/세로 크기
          "size": [ "100%", "100% + 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 오버라이드 가능한 변수
          "$primary_header_button": "play.legacy_world_item_button"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "beta_retail_world_item@play.header_single_button_panel": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 오버라이드 가능한 변수
    "$primary_header_button": "play.beta_retail_world_item_button"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "local_world_item_grid@play.world_item_grid_base": {
    // 오버라이드 가능한 변수
    "$world_item_grid_template|default": "play.local_world_item",
    // ??? ?? ?
    "grid_item_template": "$world_item_grid_template",
    // ??? ?? ?
    "grid_dimension_binding": "#local_world_item_grid_dimension",
    // 목록 이름
    "collection_name": "local_worlds",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#local_world_item_grid_dimension"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "legacy_world_item_grid@play.world_item_grid_base": {
    // ??? ?? ?
    "grid_item_template": "play.legacy_world_item",
    // ??? ?? ?
    "grid_dimension_binding": "#legacy_world_item_grid_dimension",
    // 목록 이름
    "collection_name": "legacy_worlds",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#legacy_world_item_grid_dimension"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "beta_retail_local_world_item_grid@play.world_item_grid_base": {
    // ??? ?? ?
    "grid_item_template": "play.beta_retail_world_item",
    // ??? ?? ?
    "grid_dimension_binding": "#beta_retail_local_world_item_grid_dimension",
    // 목록 이름
    "collection_name": "beta_retail_local_worlds",
    // 오버라이드 가능한 변수
    "$beta_retail_collection_name": "beta_retail_local_worlds",
    // 오버라이드 가능한 변수
    "$beta_retail_world_name_binding_name": "#beta_retail_local_world_name",
    // 오버라이드 가능한 변수
    "$beta_retail_world_date_binding_name": "#beta_retail_local_world_date",
    // 오버라이드 가능한 변수
    "$beta_retail_world_game_mode_binding_name": "#beta_retail_local_world_game_mode",
    // 오버라이드 가능한 변수
    "$beta_retail_world_filesize_binding_name": "#beta_retail_local_world_filesize",
    // 오버라이드 가능한 변수
    "$beta_retail_world_image": "#beta_retail_local_world_image",
    // 오버라이드 가능한 변수
    "$beta_retail_world_texture_source": "#beta_retail_local_world_texture_source",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.import_beta_retail_local_world",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#beta_retail_local_world_item_grid_dimension"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "beta_retail_legacy_world_item_grid@play.world_item_grid_base": {
    // ??? ?? ?
    "grid_item_template": "play.beta_retail_world_item",
    // ??? ?? ?
    "grid_dimension_binding": "#beta_retail_legacy_world_item_grid_dimension",
    // 목록 이름
    "collection_name": "beta_retail_legacy_worlds",
    // 오버라이드 가능한 변수
    "$beta_retail_collection_name": "beta_retail_legacy_worlds",
    // 오버라이드 가능한 변수
    "$beta_retail_world_name_binding_name": "#beta_retail_legacy_world_name",
    // 오버라이드 가능한 변수
    "$beta_retail_world_date_binding_name": "#beta_retail_legacy_world_date",
    // 오버라이드 가능한 변수
    "$beta_retail_world_game_mode_binding_name": "#beta_retail_legacy_world_game_mode",
    // 오버라이드 가능한 변수
    "$beta_retail_world_filesize_binding_name": "#beta_retail_legacy_world_filesize",
    // 오버라이드 가능한 변수
    "$beta_retail_world_image": "#beta_retail_legacy_world_image",
    // 오버라이드 가능한 변수
    "$beta_retail_world_texture_source": "#beta_retail_legacy_world_texture_source",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.import_beta_retail_legacy_world",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#beta_retail_legacy_world_item_grid_dimension"
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Buttons
  //---------------------------------------------------------------------------

  // 다른 템플릿을 가져와서 확장(상속)
  "common_button_template@common_buttons.light_glyph_button": {},

  // ???/?? ??
  "common_button_text": {
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$tab_secondary_unchecked_text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // ?? ??
    "shadow": false,
    // 보여줄 글자
    "text": "$common_button_text_text"
  },

  // ???/?? ??
  "add_friend_and_invite_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%", "100%cm" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "add_friend_button@play.add_friend_button": {
          // 완전히 제거(공간도 없음)
          "ignored": "((not $supports_add_friend) or $nx_os or $is_ps4)",
          // 가로/세로 크기
          "size": [ "fill", 30 ],
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
        // ???/?? ??
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 0 ],
          // 완전히 제거(공간도 없음)
          "ignored": "((not $supports_add_friend) or $nx_os or $is_ps4)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "join_by_code_button@play.join_by_code_button": {
          // 완전히 제거(공간도 없음)
          "ignored": "$is_editor_mode_enabled",
          // 가로/세로 크기
          "size": [ "fill", 30 ]
        }
      },
      {
        // ???/?? ??
        "padding_2": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 0 ],
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
      },
      {
        // ???/?? ??
        "notification_button_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "13%", 30 ],
          // 보이기/숨기기(공간 유지)
          "visible": "#realms_notification_button_visible",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "notification_button@play.notification_button": {
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
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "add_friend_button@common_buttons.light_text_button": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_network_add_friend",
    // 오버라이드 가능한 변수
    "$button_text": "networkWorld.add_friend",
    // 오버라이드 가능한 변수
    "$button_focus_precedence": 10,
    // 오버라이드 가능한 변수
    "$focus_override_up": "close_button"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "join_by_code_button@common_buttons.light_text_button": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 오버라이드 가능한 변수
    "$button_text": "networkWorld.joinByCode",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_network_join_by_code",
    // 오버라이드 가능한 변수
    "$button_focus_precedence": 10,
    // 오버라이드 가능한 변수
    "$focus_override_up": "close_button",
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
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#join_by_code_visible",
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

  },

  // 다른 템플릿을 가져와서 확장(상속)
  "add_server_toggle_button@common_toggles.light_text_toggle": {
    // 보이기/숨기기(공간 유지)
    "visible": "(not $ignore_add_servers)",
    // 가로/세로 크기
    "size": [ "100%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 오버라이드 가능한 변수
    "$button_text": "networkWorld.add_server",

    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "server_navigation_toggle",
    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": "add_server_toggle_button",
    // 오버라이드 가능한 변수
    "$toggle_state_binding_name": "#toggle_state",
    // 오버라이드 가능한 변수
    "$toggle_on_hover_binding_name": "none",
    // 오버라이드 가능한 변수
    "$toggle_tab_focus_binding_type": "global",
    // 오버라이드 가능한 변수
    "$toggle_tab_focus_binding_name": "#navigation_tab_focus_precedence",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 100,
    // 오버라이드 가능한 변수
    "$focus_override_up": "left_panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#add_server_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "server_toggle_base@common_toggles.dark_image_toggle_collection": {
    // 가로/세로 크기
    "size": [ "100%", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$focus_override_right|default": "right_panel",
    // 오버라이드 가능한 변수
    "$toggle_name": "server_navigation_toggle",
    // 오버라이드 가능한 변수
    "$toggle_grid_collection_name": "$collection_name",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": "$toggle_index_binding_name",
    // 오버라이드 가능한 변수
    "$toggle_state_binding_name": "#toggle_state",
    // 오버라이드 가능한 변수
    "$toggle_tab_focus_binding_type": "global",
    // 오버라이드 가능한 변수
    "$toggle_tab_focus_binding_name": "#navigation_tab_focus_precedence",
    // 오버라이드 가능한 변수
    "$toggle_on_hover_binding_type": "global",
    // 오버라이드 가능한 변수
    "$toggle_on_hover_binding_name": "#toggle_on_hover",
    // 오버라이드 가능한 변수
    "$focus_override_right": "right_side",

    // 오버라이드 가능한 변수
    "$button_content": "play.server_button_content_panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "$collection_name"
      },
      {
        // 가져올 값 이름
        "binding_name": "#cross_platform_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled"
      },
      {
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 가져올 값 이름
        "binding_name": "#is_server_info_available_collection",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#enabled",
        // 목록 이름
        "binding_collection_name": "$collection_name"
      },
      {
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 가져올 값 이름
        "binding_name": "$toggle_index_binding_name",
        // 목록 이름
        "binding_collection_name": "$collection_name"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "quick_play_button@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_quick_play",
    // 오버라이드 가능한 변수
    "$button_text": "menu.quickplay",
    // 포커스 이동용 ID
    "focus_identifier": "quick_play_button",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "create_new_world_button@common_buttons.light_text_button": {
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($local_world_upload)",
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.new_world_upload"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $local_world_upload)",
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.menu_local_world_create"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$is_editor_mode_enabled",
        // 오버라이드 가능한 변수
        "$button_text": "playscreen.editor.create"
      }
    ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 오버라이드 가능한 변수
    "$button_text": "selectWorld.createNew",
    // 오버라이드 가능한 변수
    "$button_focus_precedence": 1,
    // 오버라이드 가능한 변수
    "$create_new_row_focus_override_up|default": "close_button",
    // 오버라이드 가능한 변수
    "$focus_override_up": "$create_new_row_focus_override_up",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "create_on_realms_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%cm" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "create_on_realms_button@settings_common.action_button_dark_text": {
          // 가로/세로 크기
          "size": [ "100%", 29 ],
          // 오버라이드 가능한 변수
          "$button_text": "createWorldScreen.createOnRealms",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.create_on_realms_button",
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/realmsContent",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/realmsContentHover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/realmsContentPressed",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#create_on_realms_button_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "import_world_button@play.common_button_template": {
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
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "sync_legacy_worlds_button@common_buttons.light_text_button": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_sync_legacy_worlds",
    // 오버라이드 가능한 변수
    "$button_text": "#sync_legacy_button_text",
    // 오버라이드 가능한 변수
    "$button_text_binding_type": "global",

    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#sync_legacy_worlds_button_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },

  // ???/?? ??
  "notification_button_text_layout": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점에서 이동하는 거리
    "offset": "$button_offset",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "image1@play.invite_icon": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "(not #inbox_enabled)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "image2@play.bell_icon": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#inbox_enabled",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count@start.notification_button_text_panel": {
          // 기준점에서 이동하는 거리
          "offset": [ -0.5, 0 ]
        }
      }
    ]
  },

  // ???/?? ??
  "notification_button_label_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "70%", "100%" ],
    // 기준점에서 이동하는 거리
    "offset": "$button_offset",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "notification_button_label": {
          // 글자 표시
          "type": "label",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 가로/세로 크기
          "size": [ "100%", 10 ],
          // 보여줄 글자
          "text": "$label_text"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "notification_content@play.notification_button_text_layout": {},

  // 다른 템플릿을 가져와서 확장(상속)
  "notification_button@common_buttons.light_content_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_invite_notification",
    // 오버라이드 가능한 변수
    "$button_content": "play.notification_content",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 오버라이드 가능한 변수
    "$button_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$focus_override_down": "friends_realms_world_button_0",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#friends_tab_invitation_button_focus_down_override",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#focus_change_down"
      }
    ]
  },

  // ???/?? ??
  "header_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "buttons": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100% - 1px", "100%" ],
          // 오버라이드 가능한 변수
          "$secondary_visible|default": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "primary_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "primary@$primary_header_button": {
                      // 가로/세로 크기
                      "size": [ "100% - 1px", "100%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "secondary@$secondary_header_button": {
                // 보이기/숨기기(공간 유지)
                "visible": "$secondary_visible",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_right",
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
  "header_button_panel_opt_in": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "buttons": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100% - 1px", "100%" ],
          // 오버라이드 가능한 변수
          "$secondary_visible|default": true,
          // 오버라이드 가능한 변수
          "$ternary_visible|default": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "primary_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", "100%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "primary@$primary_header_button": {
                      // 가로/세로 크기
                      "size": [ "100% - 1px", "100%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "secondary@$secondary_header_button": {
                // 보이기/숨기기(공간 유지)
                "visible": "$secondary_visible",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_right",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "ternary@$ternary_header_button": {
                // 보이기/숨기기(공간 유지)
                "visible": "$ternary_visible",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_right",
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
  "header_single_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "buttons": {
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
              "primary@$primary_header_button": {
                // 가로/세로 크기
                "size": [ "100% + 1px", "100%" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1
              }
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "open_account_setting_button_gamecore@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.open_account_setting_gamecore",
    // 오버라이드 가능한 변수
    "$button_text": "permissions.open.account.help.button.gamecore",
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // 보이기/숨기기(공간 유지)
    "visible": true,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#open_account_setting_button_gamecore_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Scroll panes
  //---------------------------------------------------------------------------

  "common_scroll_pane": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 가로/세로 크기
    "size": [ "100%-4px", "100%c" ],
    // 기준점에서 이동하는 거리
    "offset": [ 2, 0 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worlds_scroll_panel@play.common_scroll_pane": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "worlds_list_stack_panel@play.worlds_stack_panel": {}
      }
    ]
  },
  // ???/?? ??
  "game_tip_item_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100% - 8px", "100%cm + 6px" ],
    // 오버라이드 가능한 변수
    "$game_tip_text|default": "",
    // 오버라이드 가능한 변수
    "$label_text": "$game_tip_text",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "info_bulb": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 13,
          // 가로/세로 크기
          "size": [ 15, 19 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/infobulb"
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
        // ???/?? ??
        "label_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "fill", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_vertical": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 0, 1 ]
              }
            },
            {
              // ???/?? ??
              "realms_warning_text": {
                // 글자 표시
                "type": "label",
                // 가로/세로 크기
                "size": [ "100%", "default" ],
                // 오버라이드 가능한 변수
                "$label_text|default": "#label_text",
                // 오버라이드 가능한 변수
                "$label_text_binding_type|default": "global",
                // 보여줄 글자
                "text": "$label_text",
                // ?? (R,G,B,A)
                "color": "$body_text_color",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "$label_text",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "$label_text",
                    // 바인딩 종류(변수로 관리되는 경우도 있음)
                    "binding_type": "$label_text_binding_type"
                  }
                ]

              }
            },
            {
              // ???/?? ??
              "padding_vertical_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 0, 1 ]
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "more_info_button@common_buttons.light_text_form_fitting_button": {
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.realms_warning_more_info",
          // 오버라이드 가능한 변수
          "$button_text": "playscreen.realmsWarning.moreinfo"
        }
      }
    ]
  },

  // ???/?? ??
  "realm_warning_tip": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/greyBorder",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", "100%cm" ],
    // 오버라이드 가능한 변수
    "$realms_warning_text|default": "#realms_warning_text",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding_vertical": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 0, 8 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "info_panel@play.game_tip_item_panel": {
          // 오버라이드 가능한 변수
          "$game_tip_text": "$realms_warning_text",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 4 ]
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#device_sunsetting",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  // ???/?? ??
  "new_ui_switch_button_options_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 완전히 제거(공간도 없음)
    "ignored": "$education_edition",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "50% - 10px", "100%c + 4px" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#show_new_play_screen_opt_in",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "unlock_template_options_button@settings_common.action_button": {
          // 가로/세로 크기
          "size": [ "100% - 1px", 30 ],
          // 오버라이드 가능한 변수
          "$button_text": "options.newUiPlayScreen.initiate",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.switch_to_new_ui"
        }
      }
    ]
  },

  // ???/?? ??
  "new_ui_servers_switch_button_options_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 완전히 제거(공간도 없음)
    "ignored": "$education_edition",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#show_new_play_screen_servers_opt_in",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "unlock_template_options_button@settings_common.action_button": {
          // 가로/세로 크기
          "size": [ "100% - 1px", 30 ],
          // 오버라이드 가능한 변수
          "$button_text": "options.newUiPlayScreen.initiate",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.switch_to_new_ui_servers"
        }
      },
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      }
    ]
  },

  // ???/?? ??
  "worlds_stack_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "play_screen_warning@play.realm_warning_tip": {}
      },
      {
        // ???/?? ??
        "header_button": {
          // we don't support importing or creating a new world for realm upload yet
          "ignored": "$local_world_upload",
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 가로/세로 크기
          "size": [ "100%", "100%c + 4px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "quick_play@play.quick_play_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $education_edition)",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 0.5 to line up with the button panel below
                "size": [ "100% + 0.5px", 30 ],
                // 오버라이드 가능한 변수
                "$focus_override_up": "close_button"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "buttons@play.header_button_panel_opt_in": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100%", 30 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 오버라이드 가능한 변수
                "$primary_header_button": "create_new_world_button",
                // 오버라이드 가능한 변수
                "$secondary_header_button": "new_ui_switch_button_options_panel",
                // 오버라이드 가능한 변수
                "$ternary_header_button": "import_world_button",
                // 오버라이드 가능한 변수
                "$ternary_visible": "$world_archive_support"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "worlds_crossplatform_disabled_panel@play.crossplatform_disabled_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_realms_enabled)",
          // 오버라이드 가능한 변수
          "$cross_platform_information_text": "crossPlatformToggle.crossPlatformDisabled.realms"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "worlds_crossplatform_disable_spacer@play.crossplatform_disable_spacer": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_realms_enabled)"
        }
      },
      {
        // ???/?? ??
        "realms_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_realms_enabled)",
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#personal_realms_grid_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ],
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "(not $pre_release)",
              // 오버라이드 가능한 변수
              "$tts_section_header": "playscreen.realms"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "($pre_release and not $beta_build)",
              // 오버라이드 가능한 변수
              "$tts_section_header": "playscreen.previewRealms"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "($pre_release and $beta_build)",
              // 오버라이드 가능한 변수
              "$tts_section_header": "playscreen.betaRealms"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "realms_label@play.world_list_label_panel": {
                // 완전히 제거(공간도 없음)
                "ignored": "$world_picker_screen",
                // 오버라이드 가능한 변수
                "$label_text": "$tts_section_header",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#realm_label_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "sign_in_to_view_realms_button@play.sign_in_to_view_realms_button": {}
            },
            {
              // ???/?? ??
              "realms_previews_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 30 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#free_preview_realm_button_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "new_offers_icon@common_store.new_offer_icon": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 8,
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, -2 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_right",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#free_preview_realm_new_button_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "realms_world_item_button@common_buttons.dark_content_button": {
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.free_preview_realm_available",
                      // 오버라이드 가능한 변수
                      "$button_content": "play.realms_trial_content_panel",
                      // 오버라이드 가능한 변수
                      "$button_content_text": "#free_preview_realm_available",
                      // 오버라이드 가능한 변수
                      "$world_details_text": "playscreen.withYourPaidRealms",
                      // 오버라이드 가능한 변수
                      "$text_binding_condition": "once",
                      // 오버라이드 가능한 변수
                      "$world_header_text_binding_type": "global",
                      // 오버라이드 가능한 변수
                      "$world_details_text_binding_type": "none",
                      // 오버라이드 가능한 변수
                      "$focus_id": "free_preview_realm_available_button"
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "create_on_realms_button_panel@play.create_on_realms_button_panel": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "personal_realms@play.realms_world_item_grid": {
                // 완전히 제거(공간도 없음)
                "ignored": "$world_picker_screen",
                // 오버라이드 가능한 변수
                "$grid_name": "#personal_realms_grid_dimension",
                // 오버라이드 가능한 변수
                "$realms_worlds_collection_name": "personal_realms",
                // 오버라이드 가능한 변수
                "$grid_item_layout": "play.realms_world_item"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "placeholder_personal_realms_panel@play.label_background": {
                // 가로/세로 크기
                "size": [ "100%", "100%c - 12px" ],
                "min_size": [ "100%", 39 ], // Grid item size is 29 + 10 for label, grid items overdraw by 1px
                // 완전히 제거(공간도 없음)
                "ignored": "$world_picker_screen",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "placeholder_loading_personal_realms": {
                      // 격자 컨테이너: 칸칸이 배치
                      "type": "grid",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 가로/세로 크기
                      "size": [ "100%", "default" ],
                      // 목록 이름
                      "collection_name": "loading_personal_realms",
                      // ??? ?? ?
                      "grid_item_template": "play.empty_grid",
                      // ??? ?? ?
                      "grid_dimension_binding": "#loading_personal_realms_grid_dimension",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#loading_personal_realms_grid_dimension"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "loading_friends_realms_label@play.loading_label": {
                      // 오버라이드 가능한 변수
                      "$message_binding_name": "#realms_loading_display_message"
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
                    // 다른 템플릿을 가져와서 확장(상속)
                    "progress_loading_bars@play.progress_loading_bars": {}
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#loading_personal_realms_grid_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            // This is to emulate the sizing behavior of the Realms grid which overdraws by 1 pixel to create a single stroke border
            {
              // ???/?? ??
              "realms_trial_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 29 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "realms_world_item_button@common_buttons.dark_content_button": {
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "$world_picker_screen",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_realm_world_trial",
                      // 오버라이드 가능한 변수
                      "$button_content": "play.realms_trial_content_panel",
                      // 오버라이드 가능한 변수
                      "$button_content_text": "#realms_trial_text",
                      // 오버라이드 가능한 변수
                      "$world_details_text": "playscreen.realmsTrialWorld",
                      // 오버라이드 가능한 변수
                      "$text_binding_condition": "once",
                      // 오버라이드 가능한 변수
                      "$world_header_text_binding_type": "global",
                      // 오버라이드 가능한 변수
                      "$world_details_text_binding_type": "none",
                      // 오버라이드 가능한 변수
                      "$focus_id": "realms_trial_button",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#cross_platform_enabled",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#enabled"
                        }
                      ]
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 가져올 값 이름
                    "binding_name": "#realm_trial_button_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "realms_nintendo_first_realm_purchase_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 29 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "realms_world_item_button@common_buttons.dark_content_button": {
                      // 가로/세로 크기
                      "size": [ "100%", 30 ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "$world_picker_screen",
                      // 오버라이드 가능한 변수
                      "$pressed_button_name": "button.menu_realm_nintendo_first_realm_purchase_button",
                      // 오버라이드 가능한 변수
                      "$button_content": "play.realms_trial_content_panel",
                      // 오버라이드 가능한 변수
                      "$button_content_text": "playscreen.realmsCreateFirstWorld",
                      // 오버라이드 가능한 변수
                      "$focus_id": "realms_trial_button"
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 게임이 주는 전역 값 연결
                    "binding_type": "global",
                    // 가져올 값 이름
                    "binding_name": "#realm_nintendo_first_realm_purchase_button_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
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
                "size": [ "100%", 4 ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "realms_multiplayer_blocked_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_realms_enabled)",
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 보이기/숨기기(공간 유지)
          "visible": false,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#multiplayer_blocked_panel_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "text_panel@play.label_content_template": {
                // 오버라이드 가능한 변수
                "$label_content_label": "playscreen.header.realms",
                // 오버라이드 가능한 변수
                "$label_content_content": "play.information_panel",
                // 오버라이드 가능한 변수
                "$information_panel_label_text": "#multiplayer_sessions",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_type": "global",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_condition": "always_when_visible"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "open_uri_button@play.open_account_setting_button": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "open_account_setting_button_gamecore@play.open_account_setting_button_gamecore": {}
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "worlds_label@play.world_list_label_with_color_panel": {
          // 오버라이드 가능한 변수
          "$label_text": "playscreen.worlds",
          // 오버라이드 가능한 변수
          "$square_color": "$world_diskspace_bedrock_fill",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "($pre_release and not $is_editor_mode_enabled)",
              // 오버라이드 가능한 변수
              "$label_text": "playscreen.beta_worlds"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$is_editor_mode_enabled",
              // 오버라이드 가능한 변수
              "$label_text": "playscreen.editor.worlds"
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#local_worlds_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "grid@play.local_world_item_grid": {
          // 오버라이드 가능한 변수
          "$tts_section_header": "playscreen.worlds",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$pre_release",
              // 오버라이드 가능한 변수
              "$tts_section_header": "playscreen.beta_worlds"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "no_local_worlds_label@play.label_content_template": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $local_world_upload)",
          // 오버라이드 가능한 변수
          "$label_content_label": "",
          // 오버라이드 가능한 변수
          "$label_content_content": "play.information_panel",
          // 오버라이드 가능한 변수
          "$information_panel_label_text": "localWorld.no_local_world_label",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#no_local_worlds",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "no_local_worlds_switch_setting@play.no_local_worlds_switch_setting": {}
      },
      {
        // ???/?? ??
        "beta_retail_local_padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 4 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#beta_retail_local_worlds_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "beta_retail_local_worlds_label@play.world_list_label_panel": {
          // 오버라이드 가능한 변수
          "$label_text": "playscreen.worlds",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#beta_retail_local_worlds_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "beta_retail_local_grid@play.beta_retail_local_world_item_grid": {
          // 오버라이드 가능한 변수
          "$tts_section_header": "playscreen.worlds"
        }
      },
      {
        // ???/?? ??
        "loading_legacy_worlds_panel_padding": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $supports_legacy_worlds)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 4 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#sync_legacy_worlds_button_visible",
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
        "legacy_worlds_button": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 완전히 제거(공간도 없음)
          "ignored": "$auto_fetch_legacy_worlds",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "legacy_worlds_label@play.world_list_label_panel": {
                // 오버라이드 가능한 변수
                "$label_text": "playscreen.dontSeeLegacyWorlds",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $supports_legacy_worlds)",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#sync_legacy_worlds_button_visible",
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
              "sync_legacy_worlds_button_panel": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $supports_legacy_worlds)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100%", "100%c + 4px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "button@play.sync_legacy_worlds_button": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "100%", 30 ]
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
        "loading_legacy_worlds_panel@play.label_background": {
          // 가로/세로 크기
          "size": [ "100%", "100%c - 12px" ],
          "min_size": [ "100%", 39 ], // Grid item size is 29 + 10 for label, grid items overdraw by 1px
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "loading_legacy_worlds_label@play.loading_label": {
                // 오버라이드 가능한 변수
                "$message_binding_name": "#legacy_worlds_loading_display_message"
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
              // 다른 템플릿을 가져와서 확장(상속)
              "progress_loading_bars@play.progress_loading_bars": {
                // 오버라이드 가능한 변수
                "$visible_binding_name": "#loading_legacy_worlds_grid_visible"
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#loading_legacy_worlds_grid_visible",
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
          "size": [ "100%", 4 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#legacy_worlds_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "upgrade_legacy_worlds_label@play.world_list_label_with_color_panel": {
          // 오버라이드 가능한 변수
          "$label_text": "playscreen.upgradeLegacyWorlds",
          // 오버라이드 가능한 변수
          "$square_color": "$world_diskspace_editions_fill",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$pre_release",
              // 오버라이드 가능한 변수
              "$label_text": "playscreen.beta_legacy_worlds"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "($is_preview_app and (not $legacy_worlds_supports_migration))",
              // 오버라이드 가능한 변수
              "$label_text": "playscreen.upgradeRetailWorlds"
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#legacy_worlds_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "legacy_world_item_grid@play.legacy_world_item_grid": {
          // 오버라이드 가능한 변수
          "$tts_section_header": "playscreen.upgradeLegacyWorlds",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$pre_release",
              // 오버라이드 가능한 변수
              "$tts_section_header": "playscreen.beta_legacy_worlds"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "($is_preview_app and (not $legacy_worlds_supports_migration))",
              // 오버라이드 가능한 변수
              "$label_text": "playscreen.upgradeRetailWorlds"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "beta_retail_legacy_padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 4 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#beta_retail_legacy_worlds_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "beta_retail_legacy_worlds_label@play.world_list_label_panel": {
          // 오버라이드 가능한 변수
          "$label_text": "playscreen.upgradeLegacyWorlds",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "($is_preview_app and (not $legacy_worlds_supports_migration))",
              // 오버라이드 가능한 변수
              "$label_text": "playscreen.upgradeRetailWorlds"
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#beta_retail_legacy_worlds_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "beta_retail_legacy_grid@play.beta_retail_legacy_world_item_grid": {
          // 오버라이드 가능한 변수
          "$tts_section_header": "playscreen.upgradeLegacyWorlds",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "($is_preview_app and (not $legacy_worlds_supports_migration))",
              // 오버라이드 가능한 변수
              "$tts_section_header": "playscreen.upgradeRetailWorlds"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pad_hack_panel": {
          // Grid items are actually rendering 1 pixel more than their size
          // this is to avoid double-borders
          // however, this means we now need an extra pixel for the last grid item
          // also add 2 pixels to make it look nice
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 3 ]
        }
      }
    ]
  },

  // ???/?? ??
  "no_local_worlds_switch_setting": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 완전히 제거(공간도 없음)
    "ignored": "$education_edition",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "bg@play.label_background": {
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "no_local_worlds_switch_setting@play.label_content_template": {
                // 가로/세로 크기
                "size": [ "100% - 6px", "100%c + 1px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 오버라이드 가능한 변수
                "$label_offset": [ 1, 0 ],
                // 오버라이드 가능한 변수
                "$label_content_label": "localWorld.no_local_worlds_present",
                // 오버라이드 가능한 변수
                "$label_content_content": "play.storage_location_dropdown_panel",
                // 오버라이드 가능한 변수
                "$information_panel_label_text": "localWorld.no_local_worlds_present",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#no_local_world_switch_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "no_local_worlds_get_help@play.label_content_template": {
                // 가로/세로 크기
                "size": [ "100% - 6px", "100%c + 1px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 오버라이드 가능한 변수
                "$label_offset": [ 1, 0 ],
                // 오버라이드 가능한 변수
                "$label_content_label": "#no_local_worlds_help_label",
                // 오버라이드 가능한 변수
                "$label_content_label_binding_type": "global",
                // 오버라이드 가능한 변수
                "$label_content_content": "play.no_local_worlds_launch_help",
                // 오버라이드 가능한 변수
                "$information_panel_label_text": "#no_local_worlds_help_label",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#no_local_world_help_visible",
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
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#no_local_worlds_switch_setting_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "no_local_worlds_launch_help@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.no_local_worlds_launch_help",
    // 오버라이드 가능한 변수
    "$button_text": "#no_local_worlds_launch_help_button_label",
    // 오버라이드 가능한 변수
    "$button_text_binding_type": "global",
    // 가로/세로 크기
    "size": [ "100%", 29 ]
  },

  // ???/?? ??
  "storage_location_dropdown_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 4 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "storage_location_dropdown@play.storage_location_dropdown": {
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "storage_location_dropdown@settings_common.option_dropdown": {
    // 오버라이드 가능한 변수
    "$option_label": "options.filelocation.title",
    // 완전히 제거(공간도 없음)
    "ignored": "($is_holographic and $is_reality_mode)",
    // 오버라이드 가능한 변수
    "$dropdown_content": "play.switch_storage_type_content",
    // 오버라이드 가능한 변수
    "$dropdown_area": "no_local_worlds_switch_setting",
    // 오버라이드 가능한 변수
    "$dropdown_name": "switch_storage_type",
    // 오버라이드 가능한 변수
    "$option_enabled_binding_name": "#switch_storage_type_enabled",
    // 오버라이드 가능한 변수
    "$options_dropdown_toggle_label_binding": "#switch_storage_type_toggle_label",
    // 오버라이드 가능한 변수
    "$dropdown_scroll_content_size": [ "100%", "200%" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "switch_storage_type_content@settings_common.option_radio_dropdown_group": {
    // 오버라이드 가능한 변수
    "$radio_buttons": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "storage_location_option_external@settings_common.radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#storage_location_radio_external",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.filelocation.external"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "storage_location_option_appdata@settings_common.radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#storage_location_radio_package",
          // 오버라이드 가능한 변수
          "$radio_label_text": "options.filelocation.appdata"
        }
      }
    ]
  },

  // ???/?? ??
  "bar_animation": {
    // 프레임 애니메이션
    "anim_type": "flip_book",
    // ?? ??
    "initial_uv": [ 0, 0 ],
    // ?? ??
    "frame_count": 10,
    // ?? ??
    "frame_step": 64,
    // ?? ??
    "fps": 10,
    // ?? ??
    "reversible": true,
    // 움직임 곡선
    "easing": "linear"
  },

  // ???/?? ??
  "light_centered_loading_label": {
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "$label_text",
    // ?? ?? ?
    "max_size": [ "100% - 4px", 20 ],
    // ?? ??
    "shadow": false,
    // ?? (R,G,B,A)
    "color": "$generic_button_text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "$label_text",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },

  // ???/?? ??
  "light_loading_label": {
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "$label_text",
    // ?? ?? ?
    "max_size": [ "100% - 4px", 20 ],
    // ?? ??
    "shadow": false,
    // 기준점에서 이동하는 거리
    "offset": [ 0, 6 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // ?? (R,G,B,A)
    "color": "$dark_button_locked_text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3
  },

  // ???/?? ??
  "loading_label": {
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "$message_binding_name",
    // ?? ?? ?
    "max_size": [ "100% - 4px", 40 ],
    // ?? ??
    "shadow": false,
    // 기준점에서 이동하는 거리
    "offset": [ 0, 6 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // ?? (R,G,B,A)
    "color": "$dark_button_default_text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 오버라이드 가능한 변수
    "$message_binding_name|default": "",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "$message_binding_name",
        // 게임이 주는 전역 값 연결
        "binding_type": "global"
      }
    ]
  },

  // ???/?? ??
  "progress_loading_bars": {
    // 이미지 표시
    "type": "image",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3,
    // 사용할 이미지 경로
    "texture": "textures/ui/loading_bar",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 18 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 가로/세로 크기
    "size": [ 64, 8 ],
    // ???? ??
    "uv_size": [ 64, 8 ],
    // ???? ?? ??
    "uv": "@play.bar_animation",
    // ?? (R,G,B,A)
    "color": "$dark_button_secondary_default_text_color",
    // 오버라이드 가능한 변수
    "$visible_binding_name|default": "#loading_bars_animation_visible",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "$visible_binding_name",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  // ???/?? ??
  "world_list_label_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 10 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "list_label": {
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$main_header_text_color",
          // 가로/세로 크기
          "size": [ "100%", 10 ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 보여줄 글자
          "text": "$label_text"
        }
      }
    ]
  },

  // ???/?? ??
  "world_list_label_with_color_panel": {
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
        "colored_square_sizer": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "colored_square": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $legacy_worlds_share_storage) and (not $legacy_worlds_supports_migration)",
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/progress_bar_simple",
                // 가로/세로 크기
                "size": [ "100%y", "100% - 4px" ],
                // ?? (R,G,B,A)
                "color": "$square_color"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "padding": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $legacy_worlds_share_storage) and (not $legacy_worlds_supports_migration)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 4, "100%" ]
        }
      },
      {
        // ???/?? ??
        "list_label": {
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$main_header_text_color",
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 오버라이드 가능한 변수
          "$label_text|default": "b",
          // 보여줄 글자
          "text": "$label_text",
          // 오버라이드 가능한 변수
          "$label_binding_type|default": "none",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 바인딩 종류(변수로 관리되는 경우도 있음)
              "binding_type": "$label_binding_type",
              // 가져올 값 이름
              "binding_name": "$label_text",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "$label_text"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "empty_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 0, 0 ]
  },

  // ???/?? ??
  "empty_grid": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 29 ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "lan_servers_scroll_content@play.label_content_template": {
    // 오버라이드 가능한 변수
    "$label_content_label": "networkWorld.lan_label",
    // 오버라이드 가능한 변수
    "$label_content_content": "play.network_world_item_grid",
    // 오버라이드 가능한 변수
    "$network_world_grid_item_template": "play.network_world_item",
    // 오버라이드 가능한 변수
    "$network_world_icon": "play.lan_icon",
    // 오버라이드 가능한 변수
    "$network_world_item_grid_dimension_binding": "#lan_network_world_item_grid_dimension",
    // 오버라이드 가능한 변수
    "$collection_name": "lan_network_worlds",
    // 오버라이드 가능한 변수
    "$tts_section_header": "$label_content_label",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#lan_grid_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "friends_scroll_panel@play.common_scroll_pane": {
    // 오버라이드 가능한 변수
    "$hide_xbox_live_icon": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%", "100%c - 1px" ],
          // 오버라이드 가능한 변수
          "$add_friend_visible": true,
          // 오버라이드 가능한 변수
          "$add_friend_not_visible": false,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "friends_screen_warning@play.realm_warning_tip": {}
            },
            {
              // ???/?? ??
              "header_button": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100%", "100%c + 4px" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "add_friend_and_invite_panel@play.add_friend_and_invite_panel": {
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 완전히 제거(공간도 없음)
                      "ignored": "$add_friend_not_visible"
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "friends_crossplatform_disabled_panel@play.crossplatform_disabled_panel": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_realms_enabled)",
                // 오버라이드 가능한 변수
                "$cross_platform_information_text": "crossPlatformToggle.crossPlatformDisabled.friends"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "friends_crossplatform_disable_spacer@play.crossplatform_disable_spacer": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_realms_enabled)"
              }
            },
            {
              // ???/?? ??
              "joinable_realms_panel": {
                // 완전히 제거(공간도 없음)
                "ignored": "$is_editor_mode_enabled",
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // 오버라이드 가능한 변수
                "$tts_section_header": "playscreen.joinableRealms",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#joinable_realms_panel_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "friends_realms_label@play.world_list_label_panel": {
                      // 오버라이드 가능한 변수
                      "$label_text": "$tts_section_header",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#friends_realms_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "sign_in_to_view_realms_button_friends@play.sign_in_to_view_realms_button_friends": {}
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "friends_realms@play.realms_world_item_grid": {
                      // 오버라이드 가능한 변수
                      "$grid_name": "#friend_realms_grid_dimension",
                      // 오버라이드 가능한 변수
                      "$realms_worlds_collection_name": "friends_realms",
                      // 오버라이드 가능한 변수
                      "$grid_item_layout": "play.realms_world_item"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "placeholder_loading_friends_panel@play.label_background": {
                      // 가로/세로 크기
                      "size": [ "100%", "100%c - 12px" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "placeholder_loading_friends_realms": {
                            // 격자 컨테이너: 칸칸이 배치
                            "type": "grid",
                            // 가로/세로 크기
                            "size": [ "100%", "default" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_left",
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_left",
                            // 목록 이름
                            "collection_name": "loading_friends_realms",
                            // ??? ?? ?
                            "grid_item_template": "play.empty_grid",
                            // ??? ?? ?
                            "grid_dimension_binding": "#loading_friends_realms_grid_dimension",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#loading_friends_realms_grid_dimension"
                              }
                            ]
                          }
                        },
                        {
                          // ???/?? ??
                          "loading_friends_realms_label": {
                            // 글자 표시
                            "type": "label",
                            // ?? ?? ?
                            "max_size": [ "100% - 4px", 40 ],
                            // 보여줄 글자
                            "text": "#realms_loading_display_message",
                            // ?? ??
                            "shadow": false,
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, 6 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "top_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "top_middle",
                            // ?? (R,G,B,A)
                            "color": "$dark_button_default_text_color",
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 3,
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#realms_loading_display_message",
                                // 게임이 주는 전역 값 연결
                                "binding_type": "global"
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
                          // 다른 템플릿을 가져와서 확장(상속)
                          "progress_loading_bars@play.progress_loading_bars": {}
                        }
                      ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#loading_friends_realms_grid_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "get_offline_authcode_message_panel@play.label_background": {
                      // 가로/세로 크기
                      "size": [ "100%", 40 ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "content_stack": {
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
                                "message_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100% - 15px", "100%" ],
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 3,
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "message_label": {
                                        // 글자 표시
                                        "type": "label",
                                        // 가로/세로 크기
                                        "size": [ "100%", "default" ],
                                        // ?? ??
                                        "text_alignment": "center",
                                        // 보여줄 글자
                                        "text": "networkWorld.addAsAuthorizedApp",
                                        // ?? ??
                                        "shadow": false,
                                        // ?? (R,G,B,A)
                                        "color": "$store_white_text_color"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                // ???/?? ??
                                "image_panel": {
                                  // 패널: 다른 부품을 담는 바닥판
                                  "type": "panel",
                                  // 가로/세로 크기
                                  "size": [ "100%c", "100%" ],
                                  // 이 안에 들어가는 부품 목록
                                  "controls": [
                                    {
                                      // ???/?? ??
                                      "link_image": {
                                        // 이미지 표시
                                        "type": "image",
                                        // 가로/세로 크기
                                        "size": [ 8, 8 ],
                                        // 사용할 이미지 경로
                                        "texture": "textures/ui/external_link"
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
                          "focus_border@common.button": {
                            // 가로/세로 크기
                            "size": [ "100%", "100%sm" ],
                            // ?? ??
                            "default_control": "",
                            // 오버라이드 가능한 변수
                            "$pressed_button_name": "button.get_offline_authcode",
                            // ?? ??
                            "tts_inherit_siblings": true,
                            // 이 안에 들어가는 부품 목록
                            "controls": [
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "hover@common.focus_border_white": {}
                              },
                              {
                                // 다른 템플릿을 가져와서 확장(상속)
                                "pressed@common.focus_border_white": {}
                              }
                            ]
                          }
                        }
                      ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#get_offline_authcode_message_panel_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "no_realms_grid@play.label_content_template": {
                      // 오버라이드 가능한 변수
                      "$label_content_label": "playscreen.joinableRealms",
                      // 오버라이드 가능한 변수
                      "$label_content_content": "play.information_panel",
                      // 오버라이드 가능한 변수
                      "$information_panel_label_text": "playscreen.noFriendsRealms",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 가져올 값 이름
                          "binding_name": "#no_friends_realms_visible",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
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
                      "size": [ "100%", 3 ]
                    }
                  }
                ]
              }
            },
            // Original Friends Grid
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "friends_grid@play.label_content_template": {
                // 오버라이드 가능한 변수
                "$label_content_label": "networkWorld.joinable_friends_label",
                // 오버라이드 가능한 변수
                "$label_content_content": "play.network_world_item_grid",
                // 오버라이드 가능한 변수
                "$network_world_grid_item_template": "play.network_world_item",
                // 오버라이드 가능한 변수
                "$network_world_icon": "play.friends_server_icon",
                // 오버라이드 가능한 변수
                "$hide_network_icon": "$hide_xbox_live_icon",
                // 오버라이드 가능한 변수
                "$network_world_item_grid_dimension_binding": "#friends_network_world_item_grid_dimension",
                // 오버라이드 가능한 변수
                "$collection_name": "friends_network_worlds",
                // 오버라이드 가능한 변수
                "$header_icon_visible": true,
                // 오버라이드 가능한 변수
                "$tts_section_header": "$label_content_label",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$nx_os",
                    // 오버라이드 가능한 변수
                    "$label_content_label": "networkWorld.joinable_nintendo_friends_label"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$is_ps4",
                    // 오버라이드 가능한 변수
                    "$label_content_label": "networkWorld.joinable_berwick_friends_label"
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#friends_grid_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "pad_hack_panel": {
                // Grid items are actually rendering 1 pixel more than their size
                // this is to avoid double-borders
                // however, this means we now need an extra pixel for the last grid item
                // also add 2 pixels to make it look nice
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 3 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#friends_grid_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "no_friends_grid_message@play.label_content_template": {
                // 완전히 제거(공간도 없음)
                "ignored": "$education_edition",
                // 오버라이드 가능한 변수
                "$label_content_label": "networkWorld.joinable_friends_label",
                // 오버라이드 가능한 변수
                "$label_content_content": "play.information_panel",
                // 오버라이드 가능한 변수
                "$information_panel_label_text": "#no_friends_grid_message_text",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_type": "global",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_condition": "always_when_visible",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$label_content_label",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$nx_os",
                    // 오버라이드 가능한 변수
                    "$label_content_label": "networkWorld.joinable_nintendo_friends_label"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "$is_ps4",
                    // 오버라이드 가능한 변수
                    "$label_content_label": "networkWorld.joinable_berwick_friends_label"
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#no_friends_grid_message_text"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#no_friends_grid_message_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            // Find Cross-Platform Friends button, only on Switch platform for now
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "switch_find_cross_platform_friend_button@play.add_friend_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $nx_os and not $is_ps4)",
                // 가로/세로 크기
                "size": [ "100%", 30 ],
                // 오버라이드 가능한 변수
                "$button_text": "networkWorld.find_cross_platform_friends",
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
              // ???/?? ??
              "add_friend_button_padding": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $nx_os and not $is_ps4)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 0, 2 ]
              }
            },
            // Cross Platform Friends Grid
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "cross_platform_friends_grid@play.label_content_template": {
                // 오버라이드 가능한 변수
                "$label_content_label": "networkWorld.joinable_cross_platform_friends_label",
                // 오버라이드 가능한 변수
                "$label_content_content": "play.network_world_item_grid",
                // 오버라이드 가능한 변수
                "$network_world_grid_item_template": "play.network_world_item",
                // 오버라이드 가능한 변수
                "$network_world_icon": "play.cross_platform_friends_server_icon",
                // 오버라이드 가능한 변수
                "$hide_network_icon": "$hide_xbox_live_icon",
                // 오버라이드 가능한 변수
                "$network_world_item_grid_dimension_binding": "#cross_platform_friends_network_world_item_grid_dimension",
                // 오버라이드 가능한 변수
                "$collection_name": "cross_platform_friends_network_worlds",
                // 오버라이드 가능한 변수
                "$header_icon_visible": true,
                // 완전히 제거(공간도 없음)
                "ignored": "(not $nx_os and not $is_ps4)",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$label_content_label",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#cross_platform_friends_grid_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "no_cross_platform_friends_grid_message@play.label_content_template": {
                // 오버라이드 가능한 변수
                "$label_content_label": "networkWorld.joinable_cross_platform_friends_label",
                // 오버라이드 가능한 변수
                "$label_content_content": "play.information_panel",
                // 오버라이드 가능한 변수
                "$information_panel_label_text": "#no_cross_platform_friends_grid_message_text",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_type": "global",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_condition": "always_when_visible",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $nx_os and not $is_ps4)",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$label_content_label",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#no_cross_platform_friends_grid_message_text"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#no_cross_platform_friends_grid_message_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "general_no_multiplayer_grid_message@play.label_content_template": {
                // 오버라이드 가능한 변수
                "$label_content_label": "networkWorld.joinable_friends_label",
                // 오버라이드 가능한 변수
                "$label_content_content": "play.information_panel",
                // 오버라이드 가능한 변수
                "$information_panel_label_text": "#general_no_multiplayer_grid_message_text",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_type": "global",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_condition": "always_when_visible",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$label_content_label",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#general_no_multiplayer_grid_message_text"
                  },
                  {
                    // 가져올 값 이름
                    "binding_name": "#general_no_multiplayer_grid_message_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "lan_grid@play.lan_servers_scroll_content": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "open_account_setting_button_gamecore@play.open_account_setting_button_gamecore": {}
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "manually_added_servers_scrolling_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 완전히 제거(공간도 없음)
    "ignored": "($ignore_add_servers or $ignore_3rd_party_servers)",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#is_network_available_and_multiplayer_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 오버라이드 가능한 변수
    "$tts_section_header": "networkWorld.more_servers",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 2 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "more_servers_label@common.minecraftTenLabel": {
          // 가로/세로 크기
          "size": [ "default", "default" ],
          // 보여줄 글자
          "text": "thirdPartyWorld.Additional",
          // ?? (R,G,B,A)
          "color": "$dark_button_default_text_color",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#is_additional_server_label_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
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
          "size": [ "100%", 2 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "more_servers_grid@play.more_servers_grid": {}
      },
      {
        // ???/?? ??
        "padding_3": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 4 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#servers_grid_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "servers_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 오버라이드 가능한 변수
    "$focus_id": "left_panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "new_ui_servers_switch_button_options_panel@play.new_ui_servers_switch_button_options_panel": {}
      },
	  {
        // 다른 템플릿을 가져와서 확장(상속)
        "more_servers_panel@play.manually_added_servers_scrolling_content": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "more_servers_divider@common.horizontal_divider": {}
      },
      {

        // ???/?? ??
        "featured_servers_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 완전히 제거(공간도 없음)
          "ignored": "$ignore_3rd_party_servers",
          // 오버라이드 가능한 변수
          "$third_party_featured_servers": "thirdPartyWorld.Featured",
          // 오버라이드 가능한 변수
          "$focus_id": "featured_servers_panel",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "loading_featured_panel@play.label_background": {
                // 가로/세로 크기
                "size": [ "100%", 40 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "loading_friends_realms_label@play.light_loading_label": {
                      // 오버라이드 가능한 변수
                      "$label_text": "thirdPartyWorld.loadingFeaturedServers"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "loading_featured_servers_panel@play.loading_featured_servers_panel": {}
                  }


                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#loading_servers_progress_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
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
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "featured_servers_label@common.minecraftTenLabel": {
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // 보여줄 글자
                "text": "thirdPartyWorld.Featured",
                // ?? (R,G,B,A)
                "color": "$dark_button_default_text_color"
              }
            },
            {
              // ???/?? ??
              "padding_2": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "third_party_featured_grid@play.third_party_featured_server_grid": {
                // 오버라이드 가능한 변수
                "$tts_section_header": "$third_party_featured_servers"
              }

            },
            {
              // ???/?? ??
              "padding_3": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            }
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#featured_servers_visible_and_available",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "server_scroll_panel@play.common_scroll_pane": {
    // 오버라이드 가능한 변수
    "$server_scroll_panel_content|default": "play.servers_content_panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%- 3px", "100%c + 1px" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 3 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "servers_crossplatform_disabled_panel@play.crossplatform_disabled_panel": {
                // 오버라이드 가능한 변수
                "$cross_platform_information_text": "crossPlatformToggle.crossPlatformDisabled.servers"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "no_featured_server_connection@play.information_panel": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_ps4)",
                // 오버라이드 가능한 변수
                "$information_label_font": "smooth",
                // 오버라이드 가능한 변수
                "$information_panel_label_text": "#internet_connection_text",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_type": "global",
                // 오버라이드 가능한 변수
                "$information_panel_label_text_binding_condition": "always_when_visible",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #is_network_available)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "more_servers_blocked_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // 쌓는 방향(가로/세로)
                "orientation": "vertical",
                // 보이기/숨기기(공간 유지)
                "visible": false,
                // 완전히 제거(공간도 없음)
                "ignored": "($ignore_add_servers or $ignore_3rd_party_servers)",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#multiplayer_blocked_panel_visible",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "server_multiplayer_privileges_blocked@play.information_panel": {
                      // 오버라이드 가능한 변수
                      "$information_label_font": "smooth",
                      // 오버라이드 가능한 변수
                      "$information_panel_label_text": "#multiplayer_blocked_text",
                      // 오버라이드 가능한 변수
                      "$information_panel_label_text_binding_type": "global",
                      // 오버라이드 가능한 변수
                      "$information_panel_label_text_binding_condition": "always_when_visible",
                      // 완전히 제거(공간도 없음)
                      "ignored": "($ignore_add_servers or $ignore_3rd_party_servers)"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "open_uri_button@play.open_account_setting_button": {}
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
                "size": [ "100%", 3 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "server_content@$server_scroll_panel_content": {}
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "add_server_button@play.add_server_toggle_button": {}
            }
          ]
        }
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Cross Platform panels
  //---------------------------------------------------------------------------

  // 다른 템플릿을 가져와서 확장(상속)
  "crossplatform_disabled_panel@play.dark_label_background": {
    // 가로/세로 크기
    "size": [ "100%", "100%c + 8px" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "(not #cross_platform_enabled)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "disable_text": {
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$dark_button_default_text_color",
          // 가로/세로 크기
          "size": [ "100% - 8px", "default" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? ??
          "shadow": false,
          // ??
          "font_type": "smooth",
          // 보여줄 글자
          "text": "$cross_platform_information_text"
        }
      }
    ]
  },

  // ???/?? ??
  "crossplatform_disable_spacer": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 5 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "(not #cross_platform_enabled)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Scroll panels
  //---------------------------------------------------------------------------

  // 다른 템플릿을 가져와서 확장(상속)
  "common_scrolling_panel@common.scrolling_panel": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 오버라이드 가능한 변수
    "$scrolling_pane_size": [ "100% - 1px", "100%" ],
    // 오버라이드 가능한 변수
    "$scrolling_content": "$scrolling_content",
    // 오버라이드 가능한 변수
    "$scroll_size": [ 5, "100% - 4px" ],
    // 오버라이드 가능한 변수
    "$show_background": false,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right"
  },

  //---------------------------------------------------------------------------
  // Scroll content
  //---------------------------------------------------------------------------

  "common_content": {
    // 마우스/커서 따라다니는 패널
    "type": "input_panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ??? ?? ?
    "focus_container": true,
    // ??? ?? ?
    "use_last_focus": true,
    // ??? ?? ?
    "focus_navigation_mode_down": "contained",
    // ??? ?? ?
    "focus_navigation_mode_up": "contained",
    // ??? ?? ?
    "focus_navigation_mode_right": "contained",
    // ??? ?? ?
    "focus_navigation_mode_left": "contained"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_offsets@play.common_scrolling_panel": {
    // 가로/세로 크기
    "size": [ "100% - 4px", "100% - 4px" ],
    // 기준점에서 이동하는 거리
    "offset": [ 2, 2 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worlds_scroll_content@play.common_content": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "worlds_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "scrolling_panel_sizer": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "fill" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "scrolling_panel@play.scrolling_offsets": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 오버라이드 가능한 변수
                      "$scrolling_content": "play.worlds_scroll_panel"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "scrolling_panel_legacy_storage_sizer": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $legacy_worlds_share_storage) and (not $legacy_worlds_supports_migration)",
                // 가로/세로 크기
                "size": [ "100%", "20%" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "scrolling_panel@play.scrolling_offsets": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 오버라이드 가능한 변수
                      "$scrolling_content": "play.legacy_world_content_status_area_panel"
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
  "friends_scroll_content@play.common_content": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "scrolling_panel@play.scrolling_offsets": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 오버라이드 가능한 변수
          "$scrolling_content": "play.friends_scroll_panel"
        }
      }
    ]
  },

  // ???/?? ??
  "show_servers_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%", "fill" ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "(not #feature_server_message_visible)",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "left_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "50% - 1px", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "scrolling_panel@play.scrolling_offsets": {
                // 가로/세로 크기
                "size": [ "100%", "100% - 4px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 2 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 오버라이드 가능한 변수
                "$scrolling_content": "play.server_scroll_panel"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "divider_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 3, "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "main_divider": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 3, "100% - 4px" ],
                // 이미지 반복 여부
                "tiled": "y",
                // 사용할 이미지 경로
                "texture": "textures/ui/HowToPlayDivider",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 10
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "right_panel@play.server_content_area": {}
      }
    ]
  },


  // 다른 템플릿을 가져와서 확장(상속)
  "server_scroll_content@play.common_content": {
    // 가로/세로 크기
    "size": [ "100% - 4px", "100% - 4px" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "severs_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "offset_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100% - 4px", "100%cm" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "servers_sunsetting_warning@play.realm_warning_tip": {
                      // 가로/세로 크기
                      "size": [ "100% - 2px", "100%cm - 2px" ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, 2 ]
                    }
                  }
                ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#device_sunsetting",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "show_servers_panel@play.show_servers_panel": {}
            }
          ]
        }
      },
      {
        // ???/?? ??
        "feature_server_message_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100% - 10px", "100%c" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 2 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#feature_server_message_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "featured_servers_label@common.minecraftTenLabel": {
                // 가로/세로 크기
                "size": [ "default", "default" ],
                // 보여줄 글자
                "text": "thirdPartyWorld.Featured",
                // ?? (R,G,B,A)
                "color": "$dark_button_default_text_color"
              }
            },
            {
              // ???/?? ??
              "pad": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "feature_server_message_panel@play.dark_label_background": {
                // 가로/세로 크기
                "size": [ "100%", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "label_panel_layout": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ "97%", "100%c + 8px" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "label": {
                            // 글자 표시
                            "type": "label",
                            // 오버라이드 가능한 변수
                            "$information_label_font|default": "default",
                            // ??
                            "font_type": "smooth",
                            // ?? (R,G,B,A)
                            "color": "$dark_button_default_text_color",
                            // 가로/세로 크기
                            "size": [ "100%", "default" ],
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 1,
                            // ?? ??
                            "shadow": false,
                            // 보여줄 글자
                            "text": "#feature_server_message_text",
                            // 게임 값과 연결하는 규칙 목록
                            "bindings": [
                              {
                                // 가져올 값 이름
                                "binding_name": "#feature_server_message_text"
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
              "open_account_setting_button_gamecore@play.open_account_setting_button_gamecore": {}
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "server_content_area": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "50% - 4px", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 오버라이드 가능한 변수
    "$focus_id": "right_side",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#is_network_available_and_multiplayer_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "third_party_scrolling_panel@play.scrolling_offsets": {
          // 가로/세로 크기
          "size": [ "100%", "100% - 4px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 2 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 오버라이드 가능한 변수
          "$scrolling_content": "play.third_party_server_info_panel",
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
        "additional_server_scrolling_panel@play.scrolling_offsets": {
          // 가로/세로 크기
          "size": [ "100%", "100% - 4px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 2 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 오버라이드 가능한 변수
          "$scrolling_content": "play.additional_server_info_panel",
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
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "add_server_pane@play.add_server_info_panel": {
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#add_server_info_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Toggle tab buttons
  //---------------------------------------------------------------------------

  "tab_front": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/TabTopFront"
  },

  // ???/?? ??
  "tab_front_middle": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/TabTopFront"
  },

  // ???/?? ??
  "tab_back": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/TabTopBack"
  },

  // ???/?? ??
  "X_tab_back": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/XTab"
  },

  // ???/?? ??
  "tab_text_stack_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "fill", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "padding@common.empty_panel": {
          // 가로/세로 크기
          "size": [ "100%", 1 ]
        }
      },
      {
        // ???/?? ??
        "text_section": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "text@play.common_button_text": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 보여줄 글자
                "text": "$tab_text_name",
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
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
          "size": [ "100%c", "100%c" ],
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$is_checked_state",
              // 오버라이드 가능한 변수
              "$count_background_image": "textures/ui/numberBGFront",
              // 오버라이드 가능한 변수
              "$count_text_color": "$secondary_text_color"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "($is_hover_state or not $is_checked_state)",
              // 오버라이드 가능한 변수
              "$count_background_image": "textures/ui/numberBGBack",
              // 오버라이드 가능한 변수
              "$count_text_color": "$text_color"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "count_background_image": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "$count_background_image",
                // 가로/세로 크기
                "size": [ "100%c + 3px", "100%c" ],
                // 기준점에서 이동하는 거리
                "offset": [ -1, -1 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "count@common_button_text": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 기준점에서 이동하는 거리
                      "offset": [ 1, 1 ],
                      // 보여줄 글자
                      "text": "$count_text_name",
                      // ?? (R,G,B,A)
                      "color": "$count_text_color",
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
  "common_navigation_tab_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%-3px", "100% - 4px" ],
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, "100%" ]
        }
      },
      {
        // ???/?? ??
        "icon_section": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%" ],
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
        "padding_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "count_text@play.tab_text_stack_panel": {}
      }
    ]
  },

  // ???/?? ??
  "friends_navigation_tab_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%-3px", "100% - 4px" ],

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "padding": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, "100%" ]
        }
      },
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
              "icon1@play.invite_icon": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 기준점에서 이동하는 거리
                "offset": [ -0.5, -1 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "(not #inbox_enabled)",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "icon2@play.bell_icon": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 기준점에서 이동하는 거리
                "offset": [ -0.5, -1 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#inbox_enabled",
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
        "count_text@play.tab_text_stack_panel": {}
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Main navigation tabs
  //---------------------------------------------------------------------------

  // 다른 템플릿을 가져와서 확장(상속)
  "top_tab@common_tabs.tab_top": {
    // 오버라이드 가능한 변수
    "$toggle_tts_enabled_binding_type": "global",
    // 오버라이드 가능한 변수
    "$radio_toggle_group": true,
    // 오버라이드 가능한 변수
    "$toggle_name": "navigation_tab",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": "$default_tab",
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
    "$toggle_tts_index_priority": 1002
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "world_navigation_tab@play.top_tab": {
    // 오버라이드 가능한 변수
    "$is_left_most_tab": true,
    // 오버라이드 가능한 변수
    "$tab_view_binding_name": "world_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$tab_icon": "worlds_icon",
    // 오버라이드 가능한 변수
    "$count_text_name": "#world_item_count",
    // 오버라이드 가능한 변수
    "$tab_text_name": "selectWorld.tab.worlds",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,
    // 오버라이드 가능한 변수
    "$tab_content": "play.common_navigation_tab_content",
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
  "friends_navigation_tab@play.top_tab": {
    // 오버라이드 가능한 변수
    "$tab_view_binding_name": "friends_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$tab_icon": "friends_icon_2",
    // 오버라이드 가능한 변수
    "$tab_icon_2": "friends_icon_1",
    // 오버라이드 가능한 변수
    "$tab_icon_nobounce": "friends_icon_2",
    // 오버라이드 가능한 변수
    "$tab_icon_nobounce_2": "friends_icon_1",
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
    "$tab_content": "play.friends_navigation_tab_content"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "server_navigation_tab@play.top_tab": {
    // 오버라이드 가능한 변수
    "$tab_view_binding_name": "server_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$tab_icon": "server_tab_icon",
    // 오버라이드 가능한 변수
    "$count_text_name": "#server_world_item_count",
    // 오버라이드 가능한 변수
    "$tab_text_name": "selectWorld.tab.thirdParty",
    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 2,
    // 오버라이드 가능한 변수
    "$tab_content": "play.common_navigation_tab_content"
  },

  // ???/?? ??
  "close_navigation_tab": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@play.X_tab_back": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "x_image@common.light_close_button": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 기준점에서 이동하는 거리
          "offset": [ 0, -1 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center",
          // 포커스 이동용 ID
          "focus_identifier": "close_button",
          // 왼쪽으로 이동할 대상
          "focus_change_left": "FOCUS_OVERRIDE_STOP",
          // 위로 이동할 대상
          "focus_change_up": "FOCUS_OVERRIDE_STOP",
          // 오른쪽으로 이동할 대상
          "focus_change_right": "FOCUS_OVERRIDE_STOP",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "(not #exit_button_visible)",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Content tabs panel
  //---------------------------------------------------------------------------

  "common_tab_content_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@common.common_panel": {
          // 오버라이드 가능한 변수
          "$dialog_background": "dialog_background_hollow_4",
          // 오버라이드 가능한 변수
          "$show_close_button": false
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "content@$scroll_tab_content": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // magic offset to make the scroll clipping perfect
          "size": [ "100%-12px", "100%-12px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 6, 6 ],
          // ?? ??
          "ttsSectionContainer": true
        }
      }
    ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "$visible_bind_toggle_source_control",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "worlds_tab_content_panel@play.common_tab_content_panel": {
    // 오버라이드 가능한 변수
    "$visible_bind_toggle_source_control": "world_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$scroll_tab_content": "play.worlds_scroll_content"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "friends_tab_content_panel@play.common_tab_content_panel": {
    // 오버라이드 가능한 변수
    "$visible_bind_toggle_source_control": "friends_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$scroll_tab_content": "play.friends_scroll_content"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "server_tab_content_panel@play.common_tab_content_panel": {
    // 오버라이드 가능한 변수
    "$visible_bind_toggle_source_control": "server_navigation_tab_toggle",
    // 오버라이드 가능한 변수
    "$scroll_tab_content": "play.server_scroll_content"
  },

  //---------------------------------------------------------------------------
  // Content layout panels
  //---------------------------------------------------------------------------

  "common_tab_content_panel_type": {
    // 마우스/커서 따라다니는 패널
    "type": "input_panel",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 가로/세로 크기
    "size": [ "100%", "100%-26px" ],
    // ?? ??
    "ttsSectionContainer": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "edu_tab_content_panel_layout@play.common_tab_content_panel_type": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "worlds_tab_content@play.worlds_tab_content_panel": {} },
      { "friends_tab_content@play.friends_tab_content_panel": {} },
      { "server_tab_content_panel@play.server_tab_content_panel": {} }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "trial_tab_content_panel_layout@play.common_tab_content_panel_type": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "worlds_tab_content@play.worlds_tab_content_panel": {} }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "default_tab_content_panel_layout@play.common_tab_content_panel_type": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "worlds_tab_content@play.worlds_tab_content_panel": {} },
      { "friends_tab_content@play.friends_tab_content_panel": {} },
      { "server_tab_content_panel@play.server_tab_content_panel": {} }
    ]
  },

  //---------------------------------------------------------------------------
  // Tabs layout panels
  //---------------------------------------------------------------------------

  "tab_navigation_panel_layout": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "navigation_tabs": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "content@$navigation_tab": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "close_navigation_tab": {
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 오버라이드 가능한 변수
          "$end_tab_control|default": "play.close_navigation_tab",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$is_editor_mode_enabled",
              // 오버라이드 가능한 변수
              "$end_tab_control": "play.editor_settings_menu_button"
            }
          ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "close_button@$end_tab_control": {} }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "common_tab_navigation_panel_layout": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100% + 2px", "100%" ],
    // ?? ??
    "ttsSectionContainer": true
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "edu_tab_navigation_panel_layout@play.common_tab_navigation_panel_layout": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_navigation_tab@play.world_navigation_tab": {
          // 가로/세로 크기
          "size": [ "33%", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "friends_navigation_tab@play.friends_navigation_tab": {
          // 가로/세로 크기
          "size": [ "33%", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "server_navigation_tab@play.server_navigation_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "trial_tab_navigation_panel_layout@play.common_tab_navigation_panel_layout": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_navigation_tab@play.world_navigation_tab": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "default_tab_navigation_panel_layout@play.common_tab_navigation_panel_layout": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_navigation_tab@play.world_navigation_tab": {
          // 가로/세로 크기
          "size": [ "33%", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "friends_navigation_tab@play.friends_navigation_tab": {
          // 가로/세로 크기
          "size": [ "33%", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "server_navigation_tab@play.server_navigation_tab": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ]
        }
      }
    ]
  },

  //---------------------------------------------------------------------------
  // Trial, EDU and Default
  //---------------------------------------------------------------------------

  "common_play_screen_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": "$play_screen_size"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "play_screen_panel@play.common_play_screen_panel": {
    // If in edu quickplay is above create new so adjust focus override accordingly
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$education_edition",
        // 오버라이드 가능한 변수
        "$create_new_row_focus_override_up": "quick_play_button"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "tab_navigation_panel@play.tab_navigation_panel_layout": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "tab_content_panel@$tab_content_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "gamepad_helper_left_bumper@common.gamepad_helper_left_bumper": {
          // 기준점에서 이동하는 거리
          "offset": [ -1, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 오버라이드 가능한 변수
          "$hide_description": true,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#bumper_tooltips_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "gamepad_helper_right_bumper@common.gamepad_helper_right_bumper": {
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 오버라이드 가능한 변수
          "$hide_description": true,
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 가져올 값 이름
              "binding_name": "#bumper_tooltips_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "keyboard_helper_left_bracket@common.keyboard_left_trigger": {
          // 기준점에서 이동하는 거리
          "offset": [ -1, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 오버라이드 가능한 변수
          "$hide_description": true,
          // 오버라이드 가능한 변수
          "$text_color": [ 1, 1, 1 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "keyboard_helper_right_bracket@common.keyboard_right_trigger": {
          // 기준점에서 이동하는 거리
          "offset": [ 1, 0 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 오버라이드 가능한 변수
          "$hide_description": true,
          // 오버라이드 가능한 변수
          "$text_color": [ 1, 1, 1 ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "default_play_screen_panel@play.play_screen_panel": {
    // 오버라이드 가능한 변수
    "$navigation_tab": "play.default_tab_navigation_panel_layout",
    // 오버라이드 가능한 변수
    "$tab_content_panel": "play.default_tab_content_panel_layout"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "trial_play_screen_panel@play.play_screen_panel": {
    // 오버라이드 가능한 변수
    "$navigation_tab": "play.trial_tab_navigation_panel_layout",
    // 오버라이드 가능한 변수
    "$tab_content_panel": "play.trial_tab_content_panel_layout"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "edu_play_screen_panel@play.play_screen_panel": {
    // 오버라이드 가능한 변수
    "$navigation_tab": "play.edu_tab_navigation_panel_layout",
    // 오버라이드 가능한 변수
    "$tab_content_panel": "play.edu_tab_content_panel_layout"
  },

  //---------------------------------------------------------------------------
  // Screen
  //---------------------------------------------------------------------------

  // 다른 템플릿을 가져와서 확장(상속)
  "play_screen@common.base_screen": {
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_exit",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_tab_left",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_tab_left",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_tab_right",
        // 어떤 동작을 실행할지
        "to_button_id": "button.menu_tab_right",
        // 입력 시점(pressed 등)
        "mapping_type": "global",
        // ?? ??
        "scope": "view"
      }
    ],
    // 오버라이드 가능한 변수
    "$screen_content": "play.play_screen_content",
    // 오버라이드 가능한 변수
    "$world_picker_screen": false
  },

  // ???/?? ??
  "play_screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $education_edition and not $is_editor_mode_enabled and not $is_editor_playtest_roundtrip)",
        // 오버라이드 가능한 변수
        "$main_panel": "play.default_play_screen_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "($education_edition and not $is_editor_mode_enabled and not $is_editor_playtest_roundtrip)",
        // 오버라이드 가능한 변수
        "$main_panel": "play.edu_play_screen_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "((not $education_edition and $is_editor_mode_enabled) or $is_editor_playtest_roundtrip)",
        // 오버라이드 가능한 변수
        "$main_panel": "play.editor_play_screen_panel"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "main_control@$main_panel": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "editor_text_panel@play.editor_text_panel": {
          // 보이기/숨기기(공간 유지)
          "visible": "$is_editor_mode_enabled"
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
      }
    ]
  },

  //--------------------------------------------------------------------------------
  // Join By Code Dialog Popup
  //--------------------------------------------------------------------------------
  "popup_dialog_join_by_code@popup_dialog.modal_input_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "join_by_code_popup_background@play.join_by_code_popup_background": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "join_by_code_popup_content@play.join_by_code_popup_content": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "gamepad_helpers@common.gamepad_helpers_a_and_b": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, "31px" ]
        }
      }
    ]
  },

  // ???/?? ??
  "join_by_code_popup_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/control",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ???
    "alpha": 0.6,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left"
  },

  // ???/?? ??
  "join_by_code_popup_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 200, 90 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "popup_dialog_bg@realms_common.popup_dialog_bg": {} },
      {
        // ???/?? ??
        "popup_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "vertical",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "join_by_code_popup_dialog_header@play.join_by_code_popup_dialog_header": {} },
            {
              // ???/?? ??
              "spacing_1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "1px" ]
              }
            },
            { "join_by_code_popup_dialog_upper_body@play.join_by_code_popup_dialog_upper_body": {} },
            {
              // ???/?? ??
              "spacing_2": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%", "10px" ]
              }
            },
            { "join_by_code_popup_dialog_lower_body@play.join_by_code_popup_dialog_lower_body": {} }
          ]
        }

      }
    ]
  },

  // ???/?? ??
  "join_by_code_popup_dialog_header": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "21%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "join_by_code_popup_header_text@play.join_by_code_popup_header_text": {} },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "close_button@common.close_button": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 기준점에서 이동하는 거리
          "offset": [ -1, 2 ],
          // 입력 키/버튼과 동작 연결
          "button_mappings": [
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_select",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_network_join_by_code_close",
              // 입력 시점(pressed 등)
              "mapping_type": "pressed"
            },
            {
              // 어떤 입력을 받을지
              "from_button_id": "button.menu_ok",
              // 어떤 동작을 실행할지
              "to_button_id": "button.menu_network_join_by_code_close",
              // 입력 시점(pressed 등)
              "mapping_type": "focused"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "join_by_code_popup_header_text": {
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "networkWorld.joinByCode",
    // ?? ?? ?
    "font_size": "normal",
    // ?? (R,G,B,A)
    "color": "$title_text_color",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center"
  },

  // ???/?? ??
  "join_by_code_popup_dialog_upper_body": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "22%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "margin1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "3px", 0 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "join_by_code_popup_code_text_field@play.join_by_code_popup_code_text_field": {
          // 가로/세로 크기
          "size": [ "65%", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left"
        }
      },
      {
        // ???/?? ??
        "spacing": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 1, 0 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "join_by_code_popup_join_button@play.join_by_code_popup_join_button": {
          // 가로/세로 크기
          "size": [ "fill", "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left"
        }
      },
      {
        // ???/?? ??
        "margin2": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "3px", 0 ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "join_by_code_popup_code_text_field@common.text_edit_box": {
    // 오버라이드 가능한 변수
    "$text_box_name": "#join_by_code_text_edit",
    // ?? ?? ?
    "max_length": 15,
    // 오버라이드 가능한 변수
    "$place_holder_text": "networkWorld.realmsHashPlaceholder"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "join_by_code_popup_join_button@common_buttons.light_text_button": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 오버라이드 가능한 변수
    "$button_text": "networkWorld.join",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.menu_network_join_by_code_popup_join",
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
      }
    ]

  },

  // ???/?? ??
  "join_by_code_popup_help_text": {
    // 글자 표시
    "type": "label",
    // 가로/세로 크기
    "size": [ "95%", "100%" ],
    // ?? ??
    "shadow": false,
    // 보여줄 글자
    "text": "networkWold.joinByCodeHelpText",
    // ?? (R,G,B,A)
    "color": "$light_glyph_default_color",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // ?? ??
    "text_alignment": "center"
  },

  // ???/?? ??
  "lower_body_default_content": {
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
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "info_text@play.join_by_code_popup_help_text": {
        }
      }
    ]
  },

  // ???/?? ??
  "join_by_code_popup_dialog_lower_body": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "fill" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "default@play.lower_body_default_content": {}
      }
    ]
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "open_account_setting_button@common_buttons.hyperlink_button": {
    // 오버라이드 가능한 변수
    "$button_text": "permissions.open.account.help.button",
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ???/??? ?
      "#hyperlink": "https://aka.ms/MCMultiplayerHelp"
    },
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // 완전히 제거(공간도 없음)
    "ignored": "$is_holographic",
    // 보이기/숨기기(공간 유지)
    "visible": false,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#open_uri_button_visible",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      }
    ]
  },

  //---------------------------------------------------------------------------
  // High Ping Warning Dialog Popup
  //---------------------------------------------------------------------------

  // 다른 템플릿을 가져와서 확장(상속)
  "popup_dialog_high_ping@popup_dialog.modal_input_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "high_ping_popup_background@play.join_by_code_popup_background": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 0
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "high_ping_popup_content@play.popup_two_buttons": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "gamepad_helpers@common.gamepad_helpers_a_and_b": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, "31px" ]
        }
      }
    ]
  },

  // ???/?? ??
  "popup_two_buttons": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 250, 170 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 오버라이드 가능한 변수
    "$text_name": "networkWorld.highPingWarning.title",
    // 오버라이드 가능한 변수
    "$child_control": "play.high_ping_popup_content_stack_panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "common_panel@common.common_panel": { "$dialog_background": "dialog_background_hollow_2" }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "title_label@common_dialogs.title_label": {}
      },
      {
        // ???/?? ??
        "panel_indent": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // Fit to the hole in dialog_background_hollow_1 exactly
          "size": [ "100% - 16px", "100% - 99px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 35 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "inside_header_panel@$child_control": {} }
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
          "size": [ "100% - 14px", 30 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, -7 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "left_button_panel@play.high_ping_popup_join_button": {
                // 가로/세로 크기
                "size": [ "fill", "100%" ]
              }
            },
            {
              // ???/?? ??
              "pad": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 6, "100%" ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "right_button_panel@play.high_ping_popup_cancel_button": {
                // 가로/세로 크기
                "size": [ "fill", "100%" ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "high_ping_popup_content_stack_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100% - 8px", "100%c" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 5,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "pad_0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 10 ]
        }
      },
      {
        // ???/?? ??
        "ping_images_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "ping_images_stack_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": [ "100%c", 20 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "medium_connection": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ 20, "100%" ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/Ping_Yellow_Dark"
                    }
                  },
                  {
                    // ???/?? ??
                    "pad": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 30, "100%" ]
                    }
                  },
                  {
                    // ???/?? ??
                    "low_connection": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ 20, "100%" ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/Ping_Red_Dark"
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
        "pad_1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 10 ]
        }
      },
      {
        // ???/?? ??
        "text_line_1": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100%", "default" ],
          // ??
          "font_type": "smooth",
          // 보여줄 글자
          "text": "networkWorld.highPingWarning.line1",
          // ?? (R,G,B,A)
          "color": "$main_header_text_color"
        }
      },
      {
        // ???/?? ??
        "pad_2": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 10 ]
        }
      },
      {
        // ???/?? ??
        "text_line_2": {
          // 글자 표시
          "type": "label",
          // 가로/세로 크기
          "size": [ "100%", "default" ],
          // ??
          "font_type": "smooth",
          // 보여줄 글자
          "text": "networkWorld.highPingWarning.line2",
          // ?? (R,G,B,A)
          "color": "$main_header_text_color"
        }
      },
      {
        // ???/?? ??
        "pad_3": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 10 ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "high_ping_popup_join_button@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.join_server_anyway",
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
      }
    ],
    // 오버라이드 가능한 변수
    "$button_text": "networkWorld.join"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "high_ping_popup_cancel_button@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.cancel_join_server",
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
      }
    ],
    // 오버라이드 가능한 변수
    "$button_text": "gui.cancel"
  },

  //---------------------------------------------------------------------------
  // Editor Mode
  //---------------------------------------------------------------------------

  "copyright": {
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$main_header_text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 보여줄 글자
    "text": "menu.copyright",
    // 가로/세로 크기
    "size": [ "default", 10 ],
    // ?? ?? ?
    "max_size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left"
  },

  // ???/?? ??
  "development_version": {
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$main_header_text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 보여줄 글자
    "text": "#development_version",
    // 가로/세로 크기
    "size": [ "default", 10 ],
    // ?? ?? ?
    "max_size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#development_version"
      }
    ]
  },

  // ???/?? ??
  "version": {
    // 글자 표시
    "type": "label",
    // ?? (R,G,B,A)
    "color": "$main_header_text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 보여줄 글자
    "text": "#version",
    // 가로/세로 크기
    "size": [ "default", 10 ],
    // ?? ?? ?
    "max_size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#version"
      }
    ]
  },

  // ???/?? ??
  "editor_text_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%-2px", 10 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -1 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "copyright@play.copyright": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "development_version@play.development_version": {
          // 완전히 제거(공간도 없음)
          "ignored": "$is_publish"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "version@play.version": {}
      }
    ]
  },

  // ???/?? ??
  "editor_settings_image_content": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": [ 14, 14 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "textures/ui/icon_setting",
    // ?? (R,G,B,A)
    "color": "white"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "editor_settings_menu_button@common_buttons.light_content_button": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 기준점에서 이동하는 거리
    "offset": [ 0, -3 ],
    // 가로/세로 크기
    "size": [ 24, 24 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.editor_settings",
    // 오버라이드 가능한 변수
    "$button_content": "play.editor_settings_image_content",
    // 포커스 이동용 ID
    "focus_identifier": "close_button",
    // 왼쪽으로 이동할 대상
    "focus_change_left": "FOCUS_OVERRIDE_STOP",
    // 위로 이동할 대상
    "focus_change_up": "FOCUS_OVERRIDE_STOP",
    // 오른쪽으로 이동할 대상
    "focus_change_right": "FOCUS_OVERRIDE_STOP"
  },

  // ???/?? ??
  "editor_server_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 오버라이드 가능한 변수
    "$focus_id": "left_panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "more_servers_panel@play.manually_added_servers_scrolling_content": {}
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "editor_tab_content_panel_layout@play.common_tab_content_panel_type": {
    // 오버라이드 가능한 변수
    "$server_scroll_panel_content": "play.editor_server_content_panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "worlds_tab_content@play.worlds_tab_content_panel": {} },
      { "friends_tab_content@play.friends_tab_content_panel": {} },
      { "server_tab_content_panel@play.server_tab_content_panel": {} }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "editor_play_screen_panel@play.play_screen_panel": {
    // 오버라이드 가능한 변수
    "$navigation_tab": "play.default_tab_navigation_panel_layout",
    // 오버라이드 가능한 변수
    "$tab_content_panel": "play.editor_tab_content_panel_layout",
    // 보이기/숨기기(공간 유지)
    "visible": "(not $is_editor_playtest_roundtrip)"
  }
}
```








### 기본
scoreboards.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: scoreboards.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "scoreboard",
	// ???/?? ??
	"scoreboard_sidebar_score": {
		// 글자 표시
		"type": "label",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 2,
		// 가로/세로 크기
		"size": [
			"default",
			10
		],
		// 보여줄 글자
		"text": "#player_score_sidebar",
		"shadow": true, //Add shadow so its still readable - Alien
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_right",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_right",
		// ??? ?? ?
		"locked_alpha": 1.0,
		// ?? (R,G,B,A)
		"color": "$player_score_color",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#player_score_sidebar",
				// 목록 데이터를 반복 연결
				"binding_type": "collection",
				// 목록 이름
				"binding_collection_name": "scoreboard_scores"
			}
		]
	},
	// ???/?? ??
	"scoreboard_sidebar_player": {
		// 글자 표시
		"type": "label",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 2,
		// 보여줄 글자
		"text": "#player_name_sidebar",
		"shadow": true, //Add shadow so its still readable - Alien
		// 가로/세로 크기
		"size": [
			"default",
			10
		],
		// ??? ?? ?
		"locked_alpha": 1.0,
		// ?? (R,G,B,A)
		"color": "$player_name_color",
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
	"scoreboard_sidebar": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [
			"100%cm",
			"100%c"
		],
		// 기준점(어디에서 시작할지)
		"anchor_from": "right_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "right_middle",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"main": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/Black",
					"alpha": 0.0, //Makes background completly transparent - Alien
					// 가로/세로 크기
					"size": [
						"100%cm",
						"100%c"
					],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"displayed_objective": {
								// 글자 표시
								"type": "label",
								// 가로/세로 크기
								"size": [
									"default",
									10
								],
								// 보여줄 글자
								"text": "#objective_sidebar_name",
								"shadow": true, //Add shadow so its still readable - Alien
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_middle",
								// ?? ??
								"text_alignment": "center",
								// ?? ??
								"inherit_max_sibling_width": true,
								// ??? ?? ?
								"locked_alpha": 1.0,
								// 겹치는 순서(숫자 클수록 위)
								"layer": 1,
								// ?? (R,G,B,A)
								"color": "$objective_title_color",
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#objective_sidebar_name",
										// 게임이 주는 전역 값 연결
										"binding_type": "global"
									}
								]
							}
						},
						{
							// ???/?? ??
							"lists": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_left",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_left",
								// 기준점에서 이동하는 거리
								"offset": [
									0,
									10
								],
								// 가로/세로 크기
								"size": [
									"100%c",
									"100%cm"
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"players": {
											// 줄맞춤 컨테이너: 가로/세로로 자동 배치
											"type": "stack_panel",
											// 기준점(어디에서 시작할지)
											"anchor_from": "top_left",
											// 붙일 위치(어디에 놓을지)
											"anchor_to": "top_left",
											// 가로/세로 크기
											"size": [
												"100%cm",
												"100%c"
											],
											// 쌓는 방향(가로/세로)
											"orientation": "vertical",
											// 목록 이름
											"collection_name": "scoreboard_players",
											// 목록 아이템을 자동으로 생성
											"factory": {
												// ?? ??
												"name": "player_list_factory",
												// ??? ???
												"control_name": "scoreboard.scoreboard_sidebar_player"
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
										}
									},
									{
										// ???/?? ??
										"scores": {
											// 줄맞춤 컨테이너: 가로/세로로 자동 배치
											"type": "stack_panel",
											// 기준점(어디에서 시작할지)
											"anchor_from": "top_right",
											// 붙일 위치(어디에 놓을지)
											"anchor_to": "top_right",
											// 가로/세로 크기
											"size": [
												"100%cm",
												"100%c"
											],
											// 쌓는 방향(가로/세로)
											"orientation": "vertical",
											// ?? ??
											"use_child_anchors": true,
											// 목록 이름
											"collection_name": "scoreboard_scores",
											// 목록 아이템을 자동으로 생성
											"factory": {
												// ?? ??
												"name": "player_score_factory",
												// ??? ???
												"control_name": "scoreboard.scoreboard_sidebar_score"
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
				"binding_name": "#scoreboard_sidebar_visible",
				// 게임이 주는 전역 값 연결
				"binding_type": "global",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	}
}
```








### 기본
settings_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: settings_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
/********************************************************
+*   (c) Mojang. All rights reserved                       *
+*   (c) Microsoft. All rights reserved.                   *
+*********************************************************/

{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "settings",


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
    "$default_selector_toggle_index": 0,
    // 오버라이드 가능한 변수
    "$spatialPatternsPadding": [ 0, 0 ], //Removes padding bellow accessability button - Alien
    // ?? ??
    "ttsSectionContainer": true,
    // 이 안에 들어가는 부품 목록
    "controls": [

      {
        // ???/?? ??
        "spacer_0": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_world_section)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 2, 2 ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "accessibility_button@general_section.accessibility_button": {
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": "$accessibility_forced_index",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_controls_and_settings_sections)"
        }
      },
      {
        // ???/?? ??
        "spacer_1": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $settings_spatial_pattern_fix_enabled)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "how_to_play_button@general_section.how_to_play_button": {
          // 오버라이드 가능한 변수
          "$toggle_group_forced_index": "$how_to_play_index",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_controls_and_settings_sections)"
        }
      },

      // the list of selection toggle buttons, add yours here...
      {
        // ???/?? ??
        "spacer_01": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_world_section or not $settings_spatial_pattern_fix_enabled)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "world_selector_pane@world_section.selector_pane_content": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_world_section)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realm_selector_pane@realms_settings.selector_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_realm_section)",
          // 오버라이드 가능한 변수
          "$world_toggle_index": "$world_forced_index",
          // 오버라이드 가능한 변수
          "$members_toggle_index": "$members_forced_index",
          // 오버라이드 가능한 변수
          "$subscription_toggle_index": "$subscription_forced_index",
          // 오버라이드 가능한 변수
          "$backup_toggle_index": "$backup_forced_index",
          // 오버라이드 가능한 변수
          "$dev_options_toggle_index": "$dev_options_forced_index",
          // 오버라이드 가능한 변수
          "$invite_links_toggle_index": "$invite_links_forced_index"
        }
      },
      {
        // ???/?? ??
        "controls_and_settings_selector_pane": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_controls_and_settings_sections)",
          // 오버라이드 가능한 변수
          "$controls_section_header": "options.group.input",
          // 오버라이드 가능한 변수
          "$social_section_header": "options.social",
          // 오버라이드 가능한 변수
          "$general_section_header": "stat.generalButton",
          // 오버라이드 가능한 변수
          "$debug_section_header": "options.debug",
          // 오버라이드 가능한 변수
          "$spatialPatternsPadding": [ 0, 0 ], //Removes padding between buttons - Alien
          // 오버라이드 가능한 변수
          "$settingsHeaderSpace": [2, 8], //extra bit of padding on for headings to seperate sections - Alien
          // 이 안에 들어가는 부품 목록
          "controls": [

            // Controls Section //
            {
              // ???/?? ??
              "spacer_1": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$settingsHeaderSpace"
              }
            },
            {
              // ???/?? ??
              "spacer_1_no_spatial": {
                // 완전히 제거(공간도 없음)
                "ignored": "$settings_spatial_pattern_fix_enabled",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 2, 8 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "selector_group_label_1@settings_common.selector_group_label": {
                // 보여줄 글자
                "text": "$controls_section_header"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "keyboard_and_mouse_button@controls_section.keyboard_and_mouse_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $keyboard_and_mouse_supported)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$keyboard_and_mouse_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$controls_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_01": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $gamepad_supported or $nx_os or not $settings_spatial_pattern_fix_enabled)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "controller_button@controls_section.controller_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $gamepad_supported or $nx_os)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$controller_and_switch_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$controls_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_02": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $gamepad_supported or not $nx_os or not $settings_spatial_pattern_fix_enabled)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "switch_controller_button@controls_section.controller_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $gamepad_supported or not $nx_os)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$controller_and_switch_forced_index",
                // 오버라이드 가능한 변수
                "$glyph_texture": "textures/ui/controller_glyph_switch",
                // 오버라이드 가능한 변수
                "$glyph_color_texture": "textures/ui/controller_glyph_color_switch",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$controls_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_03": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $touch_supported or $nx_os or not $settings_spatial_pattern_fix_enabled)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "touch_button@controls_section.touch_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $touch_supported or $nx_os)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$touch_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$controls_section_header"
              }
            },
            // Social Section //
            {
              // ???/?? ??
              "spacer_04": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding",
                // 완전히 제거(공간도 없음)
                "ignored": "($education_edition or not $party_settings_enabled or not $settings_spatial_pattern_fix_enabled)"
              }
            },
            {
              // ???/?? ??
              "spacer_04_no_spatial": {
                // 완전히 제거(공간도 없음)
                "ignored": "($education_edition or not $party_settings_enabled or $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 2, 8 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "selector_group_label_2@settings_common.selector_group_label": {
                // 보여줄 글자
                "text": "$social_section_header",
                // 완전히 제거(공간도 없음)
                "ignored": "($education_edition or not $party_settings_enabled)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "party_button@social_section.party_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "($education_edition or not $party_settings_enabled)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$party_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$social_section_header"
              }
            },
            // General Section //
            {
              // ???/?? ??
              "spacer_05": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$settingsHeaderSpace",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $settings_spatial_pattern_fix_enabled)"
              }
            },
            {
              // ???/?? ??
              "spacer_05_no_spatial": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 2, 8 ],
                // 완전히 제거(공간도 없음)
                "ignored": "$settings_spatial_pattern_fix_enabled"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "selector_group_label_3@settings_common.selector_group_label": {
                // 보여줄 글자
                "text": "$general_section_header"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "general_button@general_section.general_button": {
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$general_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_06": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $settings_spatial_pattern_fix_enabled)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "video_button@general_section.video_button": {
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$video_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_07": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $settings_spatial_pattern_fix_enabled)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "sound_button@general_section.sound_button": {
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$sound_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_08": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding",
                // 완전히 제거(공간도 없음)
                "ignored": "(not $settings_spatial_pattern_fix_enabled)"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "account_button@general_section.account_button": {
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$account_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_09": {
                // 완전히 제거(공간도 없음)
                "ignored": "($is_editor_mode_enabled or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#should_show_subscription_tab",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "view_subscriptions_button@general_section.view_subscriptions_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "$is_editor_mode_enabled",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$view_subscriptions_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 가져올 값 이름
                    "binding_name": "#should_show_subscription_tab",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "#visible"
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "spacer_10": {
                // 완전히 제거(공간도 없음)
                "ignored": "($ignore_global_resources_section or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "global_texture_pack_button@general_section.global_texture_pack_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "$ignore_global_resources_section",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$global_texture_pack_forced_index",
                // 보이기/숨기기(공간 유지)
                "visible": "($is_global_texture_packs_visible)",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_11": {
                // 완전히 제거(공간도 없음)
                "ignored": "($ignore_storage_section or not $is_pregame or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "storage_management_button@general_section.storage_management_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "$ignore_storage_section",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$storage_management_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_12": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $education_edition or not $edu_save_to_cloud_on or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "edu_cloud_storage_button@general_section.edu_cloud_storage_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $education_edition or not $edu_save_to_cloud_on)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$edu_cloud_storage_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_13": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_pregame or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "language_button@general_section.language_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $is_pregame)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$language_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_14": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "creator_button@general_section.creator_button": {
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$creator_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_15": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $show_preview_button or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "preview_button@general_section.preview_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $show_preview_button)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$preview_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },

            // Debug Section //
            {
              // ???/?? ??
              "spacer_4": {
                // 완전히 제거(공간도 없음)
                "ignored": "($is_publish or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // ???/?? ??
              "spacer_4_no_spatial": {
                // 완전히 제거(공간도 없음)
                "ignored": "($is_publish or $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 2, 8 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "selector_group_label_4@settings_common.selector_group_label": {
                // 완전히 제거(공간도 없음)
                "ignored": "$is_publish",
                // 보여줄 글자
                "text": "$debug_section_header"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "debug_button@general_section.debug_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$debug_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_16": {
                // 완전히 제거(공간도 없음)
                "ignored": "($is_publish or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "discovery_debug_button@general_section.discovery_debug_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "$is_publish",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$discovery_debug_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_17": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "ui_debug_button@general_section.ui_debug_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$ui_debug_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_18": {
                // 완전히 제거(공간도 없음)
                "ignored": "((not $debug_settings) or $creator_build or (not $education_edition) or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "edu_debug_button@general_section.edu_debug_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "((not $debug_settings) or $creator_build or (not $education_edition))",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$edu_debug_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_19": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "marketplace_debug_button@general_section.marketplace_debug_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$marketplace_debug_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_20": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "gatherings_debug_button@general_section.gatherings_debug_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$gatherings_debug_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_21": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "flighting_debug_button@general_section.flighting_debug_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$flighting_debug_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_22": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "realms_debug_button@general_section.realms_debug_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $debug_settings)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$realms_debug_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            },
            {
              // ???/?? ??
              "spacer_23": {
                // 완전히 제거(공간도 없음)
                "ignored": "($is_publish or $test_infrastructure_disabled or not $settings_spatial_pattern_fix_enabled)",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": "$spatialPatternsPadding"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "automation_button@general_section.automation_button": {
                // 완전히 제거(공간도 없음)
                "ignored": "($is_publish or $test_infrastructure_disabled)",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": "$automation_forced_index",
                // 오버라이드 가능한 변수
                "$tts_section_header": "$general_section_header"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "spacer_24": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_world_section and (not $include_realm_section or not $realms_pack_feature_enabled) or not $settings_spatial_pattern_fix_enabled)",
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "addons_selector_panel@world_section.addons_selector_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_world_section and (not $include_realm_section or not $realms_pack_feature_enabled))",
          // 오버라이드 가능한 변수
          "$level_texture_pack_toggle_index": "$level_texture_pack_index",
          // 오버라이드 가능한 변수
          "$addon_toggle_index": "$addon_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "realms_invite_link_settings_pane@realms_invite_link_settings.selector_panel": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $include_realm_invite_link_settings)",
          // 오버라이드 가능한 변수
          "$general_toggle_index": "$general_invite_link_forced_index",
          // 오버라이드 가능한 변수
          "$advanced_toggle_index": "$advanced_invite_link_forced_index"
        }
      }
    ]
  }

}
```








### 기본
stonecutter_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: stonecutter_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "stonecutter",
	// 다른 템플릿을 가져와서 확장(상속)
	"toolbar_panel@common.root_panel": {
		// 가로/세로 크기
		"size": [
			"100%c",
			20
		],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"toolbar_background@stonecutter.toolbar_background": {
					// 가로/세로 크기
					"size": [
						"100%cm",
						"100% + 8px"
					],
					// 기준점에서 이동하는 거리
					"offset": [
						0,
						-3
					],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right",
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
								"size": [
									"default",
									"100% - 8px"
								],
								// 기준점에서 이동하는 거리
								"offset": [
									0,
									3
								],
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_middle",
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"padding_1": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												6,
												0
											]
										}
									},
									//{
									//  "help_button_panel": {
									//    "type": "panel",
									//    "size": [ "100%c", "100%" ],
									//    "controls": [
									//      { "help_button@stonecutter.help_button": {} }
									//    ]
									//  }
									//},
									//Hide how to play button - Alien
									{
										// ???/?? ??
										"close_button_panel": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												"100%c",
												"100%"
											],
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
														// 가로/세로 크기
														"size": [
															"100%cm",
															"100%cm"
														],
														// 기준점에서 이동하는 거리
														"offset": [
															0,
															0
														],
														// 기준점(어디에서 시작할지)
														"anchor_from": "center",
														// 붙일 위치(어디에 놓을지)
														"anchor_to": "center"
													}
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
											"size": [
												6,
												0
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








### 기본
trade_2_screen.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: trade_2_screen.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "trade2",
	// ???/?? ??
	"top_half_stack_panel": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 가로/세로 크기
		"size": [
			"100%c",
			"100%cm"
		],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"item_slots_holder": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": [
						"100%c",
						"100%c"
					],
					// ?? ??
					"inherit_max_sibling_height": true,
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_slots_stack_panel@trade2.item_slots_stack_panel": {}
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
					"size": [
						1,
						0
					]
				}
			},
			{
				// ???/?? ??
				"trade_button_holder": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": [
						"100%c",
						0
					],
					// ?? ??
					"inherit_max_sibling_height": true,
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"trade_button@trade2.trade_button": {}
						}
					]
				}
			}
			//{
			//  "how_to_play_button_holder": {
			//    "type": "panel",
			//    "size": [ "100%c - 1px", 0 ],
			//    "inherit_max_sibling_height": true,
			//    "controls": [
			//      {
			//        "how_to_play_button@trade2.how_to_play_button": {
			//          "anchor_from": "right_middle",
			//          "anchor_to": "right_middle"
			//        }
			//      }
			//    ]
			//  }
			//}
			//Hide how to play button - Alien
		]
	}
}
```








### 기본
trade_2_screen_pocket.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: trade_2_screen_pocket.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "trade2_pocket",
	// ???/?? ??
	"trade_and_help_buttons": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 가로/세로 크기
		"size": [
			"100%",
			32
		],
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"trade_button_holder": {
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
							"trade_button@trade2.trade_button": {
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
			//{
			//  "how_to_play_button_holder": {
			//    "type": "panel",
			//    "size": [ "100%c - 1px", "100%" ],
			//    "controls": [
			//      {
			//        "how_to_play_button@trade2.how_to_play_button": {
			//          "size": [ 32, "100%" ],
			//          "anchor_from": "right_middle",
			//          "anchor_to": "right_middle",
			//          "$button_font_size": "large",
			//          "$button_text_max_size": [ "100%", 16 ]
			//        }
			//      }
			//    ]
			//  }
			//}
			//Hide how to play button - Alien
		]
	}
}
```








### 기본
ui_common.json
기본 UI 모음 1 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: ui_common.json
// 분류: 기본 UI 모음 1 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "common",
    //---------------------------------------------------------------------------
    // Common controls
    //---------------------------------------------------------------------------
    "screen_background": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "textures/ui/screen_background",
        // 겹치는 순서(숫자 클수록 위)
        "layer": -10,
        // 완전히 제거(공간도 없음)
        "ignored": "$is_holographic",
        // 오버라이드 가능한 변수
        "$screen_background_alpha|default": 0.75,
        "alpha": 0 //Makes some backgrounds invisible (inventory background, pause screen background)
    }
}
```












### settings sections



[분할 목록으로 돌아가기](preview.html#example-view)

