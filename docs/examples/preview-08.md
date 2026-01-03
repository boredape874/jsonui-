---
title: 예제 미리보기 (8/12)
outline: false
search: false
---

# 예제 미리보기 (8/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### settings sections
general_section.json
기본 UI 모음 1 · settings sections



필요한 부분만 참고해서 가져가세요.



```
// 예제: general_section.json
// 분류: 기본 UI 모음 1 / settings sections
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
/********************************************************
+*   (c) Mojang. All rights reserved                       *
+*   (c) Microsoft. All rights reserved.                   *
+*********************************************************/

{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "general_section",

  // ???/?? ??
  "sound_section": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 오버라이드 가능한 변수
    "$spatialPatternsPadding": [ 20, 20 ], // Less padding between sliders - Alien
    // 오버라이드 가능한 변수
    "$audioSlidersSize": [ "75% - 2px", 16 ],
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
        "source_control_name": "sound_button_toggle",
        // 계산식/참조 값
        "source_property_name": "(#toggle_state and not $use_ore_ui_settings_audio)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingMainVolume": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_0@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#main_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "main_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#main_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#main_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#main_volume_enabled",
          // 오버라이드 가능한 변수
          "$focus_override_up": "FOCUS_OVERRIDE_STOP",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      //Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingDividerAudioSettings": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [5, 5] // Slightly extra padding to seperate main volume from individuals - Alien
        }
      },

      {
        // ???/?? ??
        "dividerAudioSettings": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c + 14px" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "section_divider": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100% - 30px", 1 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "center",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 사용할 이미지 경로
                "texture": "textures/ui/list_item_divider_line_light"
              }
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingMusic": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [5, 5]
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_1@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#music_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "music_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#music_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#music_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#music_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingSound": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_2@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#sound_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "sound_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#sound_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#sound_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#sound_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingAmbient": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_3@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#ambient_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "ambient_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#ambient_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#ambient_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#ambient_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingBlockVolume": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_4@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#block_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "block_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#block_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#block_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#block_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingHostile": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_5@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#hostile_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "hostile_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#hostile_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#hostile_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#hostile_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingNeutralVolume": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_6@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#neutral_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "neutral_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#neutral_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#neutral_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#neutral_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingPlayervolume": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_7@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#player_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "player_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#player_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#player_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#player_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]

        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingRecordVolume": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_8@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#record_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "record_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#record_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#record_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#record_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingWeatherVolume": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_9@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#weather_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "weather_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#weather_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#weather_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#weather_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingTTSVolume": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "option_slider_10@settings_common.option_slider": {
          // 가로/세로 크기
          "size": "$audioSlidersSize",
          // 오버라이드 가능한 변수
          "$option_label": "#texttospeech_volume_slider_label",
          // 오버라이드 가능한 변수
          "$slider_name": "texttospeech_volume",
          // 오버라이드 가능한 변수
          "$slider_value_binding_name": "#texttospeech_volume",
          // 오버라이드 가능한 변수
          "$slider_tts_text_value": "#texttospeech_volume_text_value",
          // 오버라이드 가능한 변수
          "$option_enabled_binding_name": "#texttospeech_volume_enabled",
          // 오버라이드 가능한 변수
          "$label_bindings": [
            {
              // 가져올 값 이름
              "binding_name": "$option_label"
            }
          ]
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingResetVolumes": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      },

      {
        // 다른 템플릿을 가져와서 확장(상속)
        "reset_button@settings_common.action_button": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $is_pregame)",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "button.reset_settings",
          // 오버라이드 가능한 변수
          "$button_text": "options.resetSettings",
          // 오버라이드 가능한 변수
          "$focus_override_down": "FOCUS_OVERRIDE_STOP",
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ?? ??
            "reset_group": "audio"
          }
        }
      },

      // Add some padding between the buttons/toggles to reduce the impression upon the eyes. (ADO:515619)
      {
        // ???/?? ??
        "paddingEndOfList": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$spatialPatternsPadding"
        }
      }

    ]
  }

}
```








### settings sections
settings_common.json
기본 UI 모음 1 · settings sections



필요한 부분만 참고해서 가져가세요.



```
// 예제: settings_common.json
// 분류: 기본 UI 모음 1 / settings sections
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "settings_common",
	// ???/?? ??
	"settings_content": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 이 안에 들어가는 부품 목록
		"controls": [
			// Adding fill background color for all settings.
			{
				// ???/?? ??
				"background": {
					// 오버라이드 가능한 변수
					"$layer|default": -1,
					// 조건에 따라 변수 값을 바꾸기
					"variables": [
						{
							// 이 조건이 맞으면 적용
							"requires": "($is_realm_slot or $realm_no_world_edit)",
							// 오버라이드 가능한 변수
							"$layer": -2
						}
					],
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/White",
					// ?? ??
					"keep_ratio": false,
					// 가로/세로 크기
					"size": [
						"100%",
						"100%sm"
					],
					// ?? (R,G,B,A)
					"color": [
						0.192,
						0.196,
						0.2
					], // First test: [0.239, 0.204, 0.204]
					// 기준점에서 이동하는 거리
					"offset": [
						0,
						0
					],
					// 겹치는 순서(숫자 클수록 위)
					"layer": "$layer",
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left",
					"alpha": 0 //Makes texture transparent - Alien
				}
			},
			{
				// ???/?? ??
				"stack_panel": {
					// 줄맞춤 컨테이너: 가로/세로로 자동 배치
					"type": "stack_panel",
					// 가로/세로 크기
					"size": [
						"100%",
						"100%"
					],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"content_panel": {
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
										"common_panel@common.fullscreen_header": {
											// 오버라이드 가능한 변수
											"$dialog_background": "dialog_background_hollow_3"
										}
									},
									{
										// ???/?? ??
										"container": {
											// 패널: 다른 부품을 담는 바닥판
											"type": "panel",
											// 가로/세로 크기
											"size": [
												"100%",
												"100% - 4px"
											],
											// 이 안에 들어가는 부품 목록
											"controls": [
												{
													// 다른 템플릿을 가져와서 확장(상속)
													"$dialog_content@$dialog_content": {}
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
				"popup_dialog_factory": {
					// 리스트를 자동으로 생성하는 공장
					"type": "factory",
					// 팩토리 템플릿 매핑
					"control_ids": {
						// ?? ??
						"purchase_failed": "@realms_create.popup_dialog__purchase_failed",
						// ?? ??
						"purchase_in_progress": "@realms_create.popup_dialog__purchase_in_progress",
						// ?? ??
						"share_by_link": "@realms_allowlist.popup_dialog__share_by_link",
						// ?? ??
						"options_modal": "@realms_allowlist.popup_dialog__options",
						// ?? ??
						"backups_modal": "@realms_settings.popup_dialog__backups",
						// ?? ??
						"sign_out_fail": "@general_section.sign_out_fail_popup",
						// ?? ??
						"edu_onedrive_error": "@general_section.edu_cloud_onedrive_error_popup"
					}
				}
			}
		]
	}
}
```













기본 UI 모음 2
92 개







[분할 목록으로 돌아가기](preview.html#example-view)

### 기본


### 기본
_global_variables.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: _global_variables.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 오버라이드 가능한 변수
  "$rainbowpieui_ci": false,
  // 오버라이드 가능한 변수
  "$rainbowpieui_commit_id": "local~hash",
  // 오버라이드 가능한 변수
  "$rainbowpieui_branch_type": "release",
  // 오버라이드 가능한 변수
  "$rainbowpieui_branch_name": "local~branch",
  // 오버라이드 가능한 변수
  "$rainbowpieui_branch_display_name": "Release",

  // 오버라이드 가능한 변수
  "$rainbowpieui_engine_version": "211000",
  // 오버라이드 가능한 변수
  "$rainbowpieui_patch_version": "10550",
  // 오버라이드 가능한 변수
  "$rainbowpieui_hotfix_version": "1",
  // 오버라이드 가능한 변수
  "$rainbowpieui_engine_version_name": "2.11",
  // 오버라이드 가능한 변수
  "$rainbowpieui_full_version_name": "2.11.10550.master",
  // 오버라이드 가능한 변수
  "$rainbowpieui_codename": "cookiecat",
  // 오버라이드 가능한 변수
  "$rainbowpieui_watermark": true,
  // 오버라이드 가능한 변수
  "$rainbowpieui_bool": true,

  // 오버라이드 가능한 변수
  "$rainbowpieui_version_minecraft_subpacks": "v1.21.11x",
  // 오버라이드 가능한 변수
  "$rainbowpieui_version_minecraft_target": "v1.21.113",
  // 오버라이드 가능한 변수
  "$rainbowpieui_version_minecraft_bigver": "v1.21",
  // 오버라이드 가능한 변수
  "$rainbowpieui_version_minecraft_max": "v1.21.119",
  // 오버라이드 가능한 변수
  "$rainbowpieui_version_minecraft_min": "v1.21.110",

  // 오버라이드 가능한 변수
  "$mintui_bool": true,
  // 오버라이드 가능한 변수
  "$mintui_base_name": "MintUI",
  // 오버라이드 가능한 변수
  "$mintui_base_branch": "cookiecat",
  // 오버라이드 가능한 변수
  "$mintui_base_major_version": "3",
  // 오버라이드 가능한 변수
  "$mintui_base_minor_version": "2",
  // 오버라이드 가능한 변수
  "$mintui_base_version": "3172",
  // 오버라이드 가능한 변수
  "$mintui_pack_name": "Rainbow Pie UI",
  // 오버라이드 가능한 변수
  "$mintui_pack_description": "Minecraft UI Pack\n§ehttps://mintraspberry.cool/rainbowpieui",
  // 오버라이드 가능한 변수
  "$mintui_pack_uuid": "82d610e8-0968-4c0a-a47e-38e6663ee6ff",
  // 오버라이드 가능한 변수
  "$mintui_pack_version": "2.11.10550",

  // String
  "$rainbowpie_ui_string_about_description": "This UI made by Mintraspberry Cool with VSCode.\nOpen source so that everyone can use it freely.\nGithub: §ehttps://github.com/MintCoolMC/MCBE_RainbowPieUI2§r\nIf you want to support me, check out the link below.\n§ehttps://mintraspberry.cool/donate§r",

  // Alert
  "$rainbowpie_ui_alert_enabled": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_alert_title": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_alert_text": "",

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_container_transition_time": 0.25,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_container_transition_effect_exit": "out_quart",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_container_transition_effect_entrance": "out_quart",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_container_v2_transition_time": 0.25,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_container_v2_transition_effect_exit": "out_quart",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_container_v2_transition_effect_entrance": "out_quart",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_transition_time": 0.25,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_header_transition_effect_exit": "out_quart",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_header_transition_effect_entrance": "out_quart",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_transition_effect_exit": "out_quart",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_transition_effect_entrance": "out_quart",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_animation_chat_transition_time": 0.25,

  // Flags
  "$rainbowpie_ui_flag_resourcepack_identifier": "", // 兼容其他资源包时的标记
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_resourcepack_displayname": "", // 兼容其他资源包时的显示名称
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_identifier": "", // 兼容服务器时的标记
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_displayname": "", // 兼容服务器时的显示名称
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_notification_features_disabled": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_notification_features_disabled_reason": "", // resourcepack; server
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_infomation_enabled": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_infomation_logo_name": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_infomation_server_name": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_infomation_link_website": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_infomation_link_support": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_infomation_description": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_custom_server_icon": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_custom_server_icon_name": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_bg_mask_ingame": true, // 在游戏内是否显示mask
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_bg_mask": true, // 在游戏外是否显示mask
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_overlay_screen": "toast_screen.toast_screen_content,debug_screen.content_panel,hud.hud_content,", // 覆盖界面
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_overlay_screen_alias": "debug_screen,toast_screen,hud,", // 覆盖界面
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_watermark_ignore": "release,prerelease",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_watermark_awalys": "dev",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_settings_account_panel": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_settings_quick_perspective": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_tablist_selfTag": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_play_bottom_panel": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_about_verison_infomation": true,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_pause_myinfo_disabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_pause_tab_scoreboard": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_pause_quit_doubleclick": true,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_hud_hotbar_mode": 1,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_hud_hidehud_clickspace": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_hud_chat_halfscreen": true, // Chat Panel Half Screen
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_hud_hotbar_rounded": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_hud_expbar_empty_text": "o.0", // When exp is empty, display this text

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_icon_maker": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_input_enable_profanity_filter": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_dropdown_default_show_button": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_disconnect_ui_modified": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_inventory_debug": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_persona_debug": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_disable_spatial_pattern_fix": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_inventory_cell_highlight_border": true,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_splash_text": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_pause_splash_text": false,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_dialog_ingame_oqaque": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_inventory_oqaque": false,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_chat_use_ui_font": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_server_form_force": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_host_options_advanced": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_chat_message_profanity_filter": true,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_dialog_alert": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_dialog_alert_title": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_dialog_alert_text": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_dialog_alert_button": "gui.ok",

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_design02_gradient": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_pixelart": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_gathering_panel_ignored": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_start_gathering_denylist": "SoulSteel,", // hide gathering panel for these button texts

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_durabilityview_title": true,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_screenbackground_gradient": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_ingamebackground_gradient": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_inventorybackground_gradient": true,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_scoreboard_default_font": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_chatui_default_font": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_hudtitle_default_font": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_huditemname_default_font": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_hudbossname_default_font": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_flying_item_renderer": false, // Use flying_item_renderer on mouse mode
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_sign_edit_preview_enabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_hud_durability_warning": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_inventory_compass_postion": 1, // 0:TOP 1:BOTTOM
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_inventory_stack_count_font": "OldSmoothFont",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_disable_custom_chat_ui": false,

  // Item ID Flags
  "$rainbowpie_ui_flag_item_clock_id": 419,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_item_compass_id": 417,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_item_recovery_compass_id": 682,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_item_chest": 54,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_item_hopper": 560,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_item_dropper": 125,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_item_dispenser": 23,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_item_crafter": -313,

  // Unnamed Flags
  "$rainbowpie_ui_flag_71042f58": false, // Disable background on selector
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_54edd49d": true, // Resource Packs Tab Mode
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_840d1a5c": true, // Resource Packs Hide More
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_8dcce82d": true, // StartV2 UI
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_6d2ac350": true, // New chat for touch
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_6bb756a3": true, // New dialog style for popup dialog
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_b3c44822": true, // Rainbow Pie UI Chat Settings
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_0ffd0593": false, // HUD Paper doll
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_d9ed3763": true, // New HUD Tab list
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_82f66bc6": false, // Chat Extra Message Panel Animation
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_84d26622": true, // Show All dropdown
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_688c902f": true, // All dropdown using rainbowpie style
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_d39385b8": false, // Dialog style DisconnectUI
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_05aab186": true, // Hide Recommended Skin Packs
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_d28dfac0": true, // Persona Screen Blur Panel
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_ca81cc28": true, // Trade2 Result Item Name Panel
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_e9c6dfdb": true, // Storage management Tab
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_d36e5f2a": false, // InGame dialog background
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_86c54726": true, // Custom HoverText
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_a3a3e4ee": true, // Background Noise
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_1dc354bd": false, // InGame Background Noise
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_3f247b1e": false, // Dialog Title Center
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_3f611894": false, // Inventory Title Center
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_9ce040c1": true, // Inventory Durability Panel
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_84df7492": true, // New UI animation for inventory and containers (InventoryUI)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_149baa36": true, // Set hud chat max line to 10
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_fbadd01f": false, // StartV2 UI animations
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_be13f8d7": true, // StartV2 UI Get Started Button
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_135972c6": true, // UI Error Check
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_82d2c0e7": true, // Background Information
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_1c167cde": false, // Start V2 Topbar
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_282dd0a5": true, // StartUI Back To Vanilla Button
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_56cd0456": true, // PauseUI Back To Vanilla Button
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_3e35fb2e": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_3520da91": true, // EASTER EGGS
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_9920f05c": true, // Inventory UI Compass Panel
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_2f8a5e27": true, // StartUI Play button more option
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_50d7b9e9": true, // StartUI Servers Button
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_1d6d26cc": true, // StartUI Store Button Art
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_d6bb54d8": true, // InventoryUI Global Item Search
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_c448d476": false, // ProgressUI World loading background blur
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_72873fec": true, // InventoryUI new recipe book ui animaion
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_ef158e0f": true, // InventoryUI vanilla search bar button
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_29bdcf8a": true, // InventoryUI Global Item Fastplace
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_a012c161": true, // Chat Message Edit and Copy (Experimental)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_ae054b5d": false, // New player joined world (Experimental)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_99d9851a": true, // Button border glint
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_522748cc": true, // Android style Progress Bar (from ElytraUI)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_111d8c96": true, // Pause UI Profile Button (Mouse only)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_31e1a20e": false, // ProgressUI Dimension background disabled; set false by default, Because the game flickers when switching dimensions
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_c48fd864": true, // Disconnect Text Edit
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_b00b6372": true, // PauseUI Skin Button Next Profile Button
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_79f6bcad": true, // Language Selector Flags (WorldTown)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_317055aa": true, // PauseUI Total Players (Player Count)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_1597ee9b": true, // Advanced Host Time Tweaker
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_6a8911d5": true, // Features Disabled Notification
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_1fa7dfd7": true, // NEW HUD TabList Header
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_75ad0b10": true, // HUD Boss Health Percentage
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_dc165cd2": true, // Hidden Boss Health Percentage When Percentage is 100.0%
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_73085b33": true, // Crafting Helper
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_5354b722": true, // Only display locator_bar when holding [TAB] key (Keyboard Only)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_19efcc11": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_988450b0": true, // Independent Time Tweaker
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_fb3b5106": true, // Independent Cmd Helper
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_64fd7c05": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_f733129c": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_a3e3c9d0": true, // Force disable title text background
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_64981341": true, // Color Picker (Type ".color" in your chat but don't send it)
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_3eb56fef": false, // InventoryUI animation quick exit
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_5e1f3f4e": true, // HUD Hotbar Animation

  // Debug
  "$rainbowpie_ui_debug": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_screen_animation": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_screen_content": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_errcheck_debug": false,
  // 仅控制不同的UI显示，不会影响bindings中的判定，留空保持默认
  "$rainbowpie_ui_debug_ui_device_override": "", // windows;windows_arm;windows_mobile;android;apple_ios;apple_osx;apple_tv;console;console_xboxone;console_ps4
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_input_override": "", // touch;mouse;game_pad
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_new_video_settings": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_debug": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_var_override": false, // 启用后将使用下面的值
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_var_override_file_picking_supported": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_var_override_world_archive_support": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_var_override_is_low_memory_device": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_var_override_pre_release": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_var_override_trial": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_var_override_is_publish": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_debug_ui_var_override_education_edition": false,

  // Path
  "$rainbowpie_ui_path_home": "textures/RainbowPieUI",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_path_theme": "textures/RainbowPieUI/theme",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_path_overrides": "textures/RainbowPieUI/overrides",

  // Rainbow Pie UI Features
  "$rainbowpie_ui_feature_markbest": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_background_mask": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_background_blur": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_settings_themedIcon": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_hud_tablist": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_gamepad_connect_tip": false, // 暂时没有做完
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_musicplayer": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_command_chat": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_inventory_durability": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_feature_hud_durability": true,

  // Rainbow Pie UI Internal Modules
  "$rainbowpie_ui_module_chest_fastpick": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_module_hud_block_counter": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_module_hud_bow_helper": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_module_hud_compass": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_module_hud_selected_item_id": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_module_inventory_actions": true,

  // Rainbow Pie UI ModuleFlags
  "$rainbowpie_ui_moduleflag_chest_fastpick_redstone_blocks": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_hud_block_counter_blockids": "id1,id2,id3,id4,id5,id35,id-552,id-553,id-554,id-555,id-556,id-557,id-558,id-559,id-560,id-561,id-562,id-563,id-564,id-565,id-566,id236,id-635,id-634,id-642,id-639,id-641,id-628,id-631,id-632,id-640,id-636,id-630,id-638,id-637,id-629,id-633,id-722,id-719,id172,id159,id-731,id-730,id-738,id-735,id-737,id-724,id-727,id-728,id-736,id-732,id-726,id-734,id-733,id-725,id-729,id20,id241,id-680,id-679,id-687,id-684,id-686,id-673,id-676,id-677,id-685,id-681,id-675,id-683,id-682,id-674,id-678,",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_hud_bow_helper_bowids": "id324,id608,",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_hud_bow_helper_arrowids": "id325,",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_drop_item_enabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_quick_craft_enabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_armor_switch_enabled": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_armor_ids_helmet": "id360,id364,id368,id376,id372,id646,",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_armor_ids_chestplate": "id361,id365,id369,id377,id373,id647,",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_armor_ids_leggings": "id362,id366,id370,id378,id374,id648,",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_moduleflag_inventory_actions_armor_ids_boots": "id363,id367,id371,id379,id375,id649,",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_flag_bce3269f": true, // InventoryUI new touch mode drop

  // Theme System //
  "$rainbowpie_ui_themesystem_version": "1095",

  // Theme Info //
  "$rainbowpie_ui_theme_icon": "textures/MintUI/pack_icon",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_name": "rainbowpie.ui.theme.default_name",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_author": "rainbowpie.ui.theme.default_auther",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_desc": "rainbowpie.ui.theme.default_description",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_description": "rainbowpie.ui.theme.default_description",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_background_name": "Mushisland",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_background_description": "Minecraft Java v1.21.4\nBliss Shader with Distant Horizons\nWorld: Terra Bukkit Plugin\n§eShot by Mintraspberry Cool",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_version": "1095",

  // Theme Background //
  "$rainbowpie_ui_theme_background_mask_texture_ingame": "textures/MintUI/background/background_mask",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_background_mask_texture": "", // 如需使用请添加，默认不使用。default: "textures/MintUI/background/background_mask"
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_background_noise_texture": "textures/MintUI/background/background_noise",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_background_blur_texture": "textures/MintUI/background/background_blur",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_background_texture": "textures/MintUI/background/background",

  // Theme Global Variables //
  "$rainbowpie_ui_theme_global_title_text": "§4R§ca§6i§en§ab§bo§5w §6Pie§r",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_global_title_text_font": "MinecraftTen",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_global_title_text_scale": 3.0,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_global_text_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_global_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_global_background_alpha": 0.3,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_global_font_name": "SmoothFontLatin",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_global_font_backup_name": "default",

  // Theme Driven Variables //
  "$rainbowpie_ui_theme_driven_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_driven_alpha": 0.25,

  // Theme HoverText Variables //
  "$rainbowpie_ui_theme_hovertext_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_background_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_text_color": [ 1.0, 1.0, 1.0 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_bgicon_enabled": false,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_bgicon_texture": "textures/items/apple",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_bgicon_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_bgicon_size": [ 14, "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_bgicon_offset": [ -4, 0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_bgicon_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hovertext_bgicon_fill": false,

  // Theme HUD Item Name Variables //
  "$rainbowpie_ui_theme_hud_itemname_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hud_itemname_background_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_hud_itemname_text_color": [ 1.0, 1.0, 1.0 ],

  // Theme Toast Variables //
  "$rainbowpie_ui_theme_toast_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toast_background_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toast_text_color": [ 1.0, 1.0, 1.0 ],

  // Theme Sidebar Variables //
  "$rainbowpie_ui_theme_sidebar_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_background_alpha": 0.2,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_oqaque_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_oqaque_background_alpha": 0.3,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_verbose_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_verbose_background_alpha": 0.3,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_verbose_button_text_color": [ 1.0, 1.0, 1.0 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_verbose_oqaque_background_color": [ 0.12941176470588237, 0.12941176470588237, 0.12941176470588237 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_verbose_oqaque_background_alpha": 1,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_sidebar_verbose_oqaque_button_text_color": [ 1.0, 1.0, 1.0 ],

  // Theme Dialog Variables //
  "$rainbowpie_ui_theme_dialog_header_color": [ 0.12941176470588237, 0.12941176470588237, 0.12941176470588237 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_dialog_header_alpha": 0.3,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_dialog_background_color": [ 0.12941176470588237, 0.12941176470588237, 0.12941176470588237 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_dialog_background_alpha": 0.7,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_dialog_title_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_dialog_content_background_color": [ 0.0, 0.0, 0.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_dialog_content_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_dialog_content_color": [ 1.0, 1.0, 1.0 ],

  // Theme Close Button Variables //
  "$rainbowpie_ui_theme_closebutton_default_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_closebutton_default_background_alpha": 0.0,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_closebutton_default_color": [ 1.0, 1.0, 1.0 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_closebutton_hover_background_color": [ 0.9019607843137256, 0.10196078431372548, 0.10196078431372548 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_closebutton_hover_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_closebutton_hover_color": [ 1.0, 1.0, 1.0 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_closebutton_pressed_background_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_closebutton_pressed_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_closebutton_pressed_color": [ 0.9019607843137256, 0.10196078431372548, 0.10196078431372548 ],

  // Theme Topbar Variables //
  "$rainbowpie_ui_theme_topbar_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_topbar_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_topbar_splitline_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_topbar_splitline_alpha": 0.0,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_topbar_text_color": [ 1.0, 1.0, 1.0 ],

  // Theme Background and Text Variables //
  "$rainbowpie_ui_theme_text_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_text_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_text_text_color": [ 1.0, 1.0, 1.0 ],

  // Theme Background and Title Variables //
  "$rainbowpie_ui_theme_title_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_title_background_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_title_text_color": [ 1.0, 1.0, 1.0 ],

  // Theme Text Edit Box Variables //
  "$rainbowpie_ui_theme_input_default_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_default_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_default_btbar_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_default_btbar_alpha": 0.4,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_hover_background_color": [ 0.1725490196078431, 0.1725490196078431, 0.1725490196078431 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_hover_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_hover_btbar_color": [ 0.4862745098039216, 0.5686274509803922, 0.7607843137254902 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_hover_btbar_alpha": 1,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_locked_background_color": [ 0.1725490196078431, 0.1725490196078431, 0.1725490196078431 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_locked_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_locked_btbar_color": [ 0.7, 0.7, 0.7 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_locked_btbar_alpha": 0.4,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_text_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_input_placeholder_color": [ 0.8510, 0.8510, 0.8510 ],

  // Theme Scrollbar Variables //
  "$rainbowpie_ui_theme_scrollbar_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_scrollbar_background_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_scrollbar_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_scrollbar_alpha": 1,

  // Theme Slider Variables //
  "$rainbowpie_ui_theme_slider_default_background_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_default_background_alpha": 0.4,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_hover_background_color": [ 0.4862745098039216, 0.5686274509803922, 0.7607843137254902 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_hover_background_alpha": 0.2,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_locked_background_color": [ 0.8, 0.8, 0.8 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_locked_background_alpha": 0.4,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_default_progress_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_default_progress_alpha": 0.7,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_hover_progress_color": [ 0.623529411764706, 0.670588235294118, 0.780392156862745 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_hover_progress_alpha": 0.7,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_locked_progress_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_locked_progress_alpha": 0.7,


  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_default_button_color": [ 0.8470588235294118, 0.8588235294117647, 0.8588235294117647 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_default_button_alpha": 1.0,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_hover_button_color": [ 0.623529411764706, 0.670588235294118, 0.780392156862745 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_hover_button_alpha": 1.0,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_locked_button_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_locked_button_alpha": 0.7,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_text_default_color": [ 0.5, 0.5, 0.5 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_text_hover_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_text_locked_color": [ 0.7, 0.7, 0.7 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_step_default_default_color": [ 0.623529411764706, 0.670588235294118, 0.780392156862745 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_step_progress_default_color": [ 0.4, 0.4, 0.4 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_step_default_hover_color": [ 0.3, 0.3, 0.3 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_slider_step_progress_hover_color": [ 0.4862745098039216, 0.5686274509803922, 0.7607843137254902 ],

  // Theme Progress Loading Bar Variables //
  "$rainbowpie_ui_theme_progress_empty_color": [ 0.141176, 0.396078, 0.129411 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_progress_full_color": [ 0.129411, 0.694117, 0.211764 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_progress_empty_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_progress_full_alpha": 0.4,

  // Theme Experience Bar Variables //
  "$rainbowpie_ui_theme_experience_empty_color": [ 0.141176, 0.396078, 0.129411 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_experience_full_color": [ 0.129411, 0.694117, 0.211764 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_experience_empty_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_experience_full_alpha": 0.6,

  // Theme Button Variables //
  "$rainbowpie_ui_theme_button_background_default_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_background_hover_color": [ 0.4862745098039216, 0.5686274509803922, 0.7607843137254902 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_background_pressed_color": [ 0.4862745098039216, 0.5686274509803922, 0.7607843137254902 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_background_locked_color": [ 0.4588235294117647, 0.4588235294117647, 0.4588235294117647 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_background_default_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_background_hover_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_background_pressed_alpha": 0.3,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_background_locked_alpha": 0.3,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_default_offset": [ 0, 0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_hover_offset": [ 0, 0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_pressed_offset": [ 0, 0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_locked_offset": [ 0, 0 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_text_default_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_text_hover_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_text_pressed_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_text_locked_color": [ 0.7, 0.7, 0.7 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_border_default_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_button_border_default_alpha": 0.5,

  // Theme Toggle Variables //
  "$rainbowpie_ui_theme_toggle_background_default_default_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_locked_default_color": [ 0.4588235294117647, 0.4588235294117647, 0.4588235294117647 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_locked_checked_color": [ 0.4588235294117647, 0.4588235294117647, 0.4588235294117647 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_locked_checked_btbar_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_checked_default_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_color": [ 0.4862745098039216, 0.5686274509803922, 0.7607843137254902 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_checked_hover_color": [ 0.1725490196078431, 0.1725490196078431, 0.1725490196078431 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_checked_hover_btbar_color": [ 0.4862745098039216, 0.5686274509803922, 0.7607843137254902 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_unchecked_default_color": [ 0.011, 0.011, 0.011 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_unchecked_hover_color": [ 0.1725490196078431, 0.1725490196078431, 0.1725490196078431 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_color": [ 1.0, 1.0, 1.0 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_default_default_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_locked_default_alpha": 0.3,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_locked_checked_alpha": 0.3,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_locked_checked_btbar_alpha": 1.0,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_checked_default_alpha": 0.4,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_checked_default_btbar_alpha": 1.0,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_checked_hover_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_checked_hover_btbar_alpha": 1.0,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_unchecked_default_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_unchecked_hover_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_background_unchecked_hover_btbar_alpha": 1.0,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_text_default_default_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_text_checked_default_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_text_checked_hover_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_text_unchecked_hover_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_toggle_text_locked_checked_color": [ 0.7, 0.7, 0.7 ],

  // Theme Inventory Variables //
  "$rainbowpie_ui_theme_inventory_global_background_color": [ 0.0, 0.0, 0.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_global_background_alpha": 0.2,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_background_enabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_background_color": [ 0.12941176470588237, 0.12941176470588237, 0.12941176470588237 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_background_alpha": 0.5,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_title_color": [ 1.0, 1.0, 1.0 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_content_background_color": [ 0.0, 0.0, 0.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_content_background_alpha": 0.4,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_header_color": [ 0.12941176470588237, 0.12941176470588237, 0.12941176470588237 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_header_alpha": 0.3,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_header_title_color": [ 1.0, 1.0, 1.0 ],

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_cell_default_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_cell_default_alpha": 0.4,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_cell_red_color": [ 0.8509803921568627, 0.3019607843137255, 0.3019607843137255 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_cell_red_alpha": 0.4,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_cell_highlight_color": [ 0.3843137254901961, 0.7098039215686275, 0.192156862745098 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_cell_highlight_alpha": 0.4,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_cell_highlight_border_color": [ 1.0, 1.0, 1.0 ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_cell_highlight_border_alpha": 0.5,

  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_enabled": true,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_texture_inventory": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_texture_container": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_size": [ "42%", "100%x" ], // Please always use % ; Since the X-axis is fixed, it is recommended to use the percentage of the X-axis on the Y-axis
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_offset": [ 0, "-8.503401360544218%y" ], // Please always use % ; Since the X-axis is fixed, it is recommended to use the percentage of the X-axis on the Y-axis
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_fill": false,

  // Inventory Background Icon Variables //

  // Crafting (Player Inventory)
  "$rainbowpie_ui_theme_inventory_bgicon_crafting_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_crafting_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_crafting_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_crafting_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_crafting_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_crafting_fill": false,

  // Crafting (CraftingTable)
  "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_craftingtable_fill": false,

  // Chest (Small)
  "$rainbowpie_ui_theme_inventory_bgicon_chest_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chest_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chest_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chest_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chest_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chest_fill": false,

  // Chest (Large)
  "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestlarge_fill": false,

  // Ender Chest
  "$rainbowpie_ui_theme_inventory_bgicon_chestender_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestender_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestender_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestender_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestender_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestender_fill": false,

  // Shulker Box
  "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestshulkerbox_fill": false,

  // Barrel
  "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_chestbarrel_fill": false,

  // Furnace
  "$rainbowpie_ui_theme_inventory_bgicon_furnace_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnace_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnace_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnace_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnace_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnace_fill": false,

  // Blast Furnace
  "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnaceblast_fill": false,

  // Smoker
  "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_furnacesmoker_fill": false,

  // Brewing Stand
  "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_brewingstand_fill": false,

  // Anvil
  "$rainbowpie_ui_theme_inventory_bgicon_anvil_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_anvil_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_anvil_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_anvil_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_anvil_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_anvil_fill": false,

  // Grindstone
  "$rainbowpie_ui_theme_inventory_bgicon_grindstone_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_grindstone_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_grindstone_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_grindstone_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_grindstone_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_grindstone_fill": false,

  // Enchanting
  "$rainbowpie_ui_theme_inventory_bgicon_enchanting_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_enchanting_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_enchanting_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_enchanting_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_enchanting_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_enchanting_fill": false,

  // Smithing Table 2
  "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_texture": "",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_anchor": "bottom_right",
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_size": [ "42%", "100%x" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_offset": [ 0, "-8.503401360544218%y" ],
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_alpha": 0.8,
  // 오버라이드 가능한 변수
  "$rainbowpie_ui_theme_inventory_bgicon_smithingtable2_fill": false,

  // Theme End

  // Compatibility
  // Modify bbui's default mod settings
  "$rainbowpie_ui_compatibility_var_override_d5e1b7c2": true
}
```








### 기본
_ui_defs.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: _ui_defs.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // ???/?? ??
  "ui_defs": [
    // MintUI
    "ui/MintUI/mintui_background.json",
    // RainbowPieUI
    "ui/RainbowPieUI/common/rainbowpie_ui_button.json",
    "ui/RainbowPieUI/common/rainbowpie_ui_common.json",
    "ui/RainbowPieUI/common/rainbowpie_ui_dialog.json",
    "ui/RainbowPieUI/common/rainbowpie_ui_gameplay.json",
    "ui/RainbowPieUI/common/rainbowpie_ui_inventory.json",
    "ui/RainbowPieUI/common/rainbowpie_ui_store_common.json",
    "ui/RainbowPieUI/common/rainbowpie_ui_tab.json",
    "ui/RainbowPieUI/common/rainbowpie_ui_toggle.json",
    // Removeable Module
    // 在这里移除即可，不要删除文件
    "ui/RainbowPieUI/module/chest_fastpick.json",
    "ui/RainbowPieUI/module/hud_block_counter.json",
    "ui/RainbowPieUI/module/hud_bow_helper.json",
    "ui/RainbowPieUI/module/hud_compass.json",
    "ui/RainbowPieUI/module/hud_selected_item_id.json",
    "ui/RainbowPieUI/module/inventory_actions.json",

    "ui/RainbowPieUI/module_lib/hud_item.json",
    "ui/RainbowPieUI/screen/music_player_screen.json",
    "ui/RainbowPieUI/ui_extras/settings_sections/general_section_controls.json",
    "ui/RainbowPieUI/ui_extras/settings_sections/settings_common_controls.json",
    "ui/RainbowPieUI/ui_extras/settings_sections/world_section_controls.json",
    "ui/RainbowPieUI/ui_extras/add_external_server_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/anvil_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/book_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/brewing_stand_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/cartography_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/chat_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/chest_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/command_block_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/content_log_controls.json",
    "ui/RainbowPieUI/ui_extras/content_log_history_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/credits_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/disconnect_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/enchanting_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/furnace_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/grindstone_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/horse_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/host_options_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/how_to_play_controls.json",
    "ui/RainbowPieUI/ui_extras/online_safety_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/hud_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/in_bed_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/inventory_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/invite_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/manifest_validation_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/mob_effect_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/npc_interact_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/pack_settings_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/pause_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/permissions_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/persona_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/play_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/popup_dialog_controls.json",
    "ui/RainbowPieUI/ui_extras/profile_card_controls.json",
    "ui/RainbowPieUI/ui_extras/profile_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/progress_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/realms_pending_invitations_controls.json",
    "ui/RainbowPieUI/ui_extras/realms_plus_ended_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/realmsplus_upgrade_notice_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/redstone_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/resource_packs_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/safe_zone_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/scoreboards_controls.json",
    "ui/RainbowPieUI/ui_extras/screenshot_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/server_form_controls.json",
    "ui/RainbowPieUI/ui_extras/sidebar_navigation_controls.json",
    "ui/RainbowPieUI/ui_extras/sign_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/smithing_table_2_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/start_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/stonecutter_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/storage_management_controls.json",
    "ui/RainbowPieUI/ui_extras/structure_editor_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/toast_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/trade_2_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/world_templates_screen_controls.json",
    "ui/RainbowPieUI/ui_extras/xbl_friend_finder_controls.json",
    "ui/RainbowPieUI/compatibility.json",
    "ui/RainbowPieUI/module_pack.json",
    "ui/RainbowPieUI/pixelart.json",
    "ui/RainbowPieUI/rainbowpie_ui_animations.json",
    "ui/RainbowPieUI/rainbowpie_ui_controls.json",
    "ui/RainbowPieUI/rainbowpie_ui_inventory_and_container.json",
    "ui/RainbowPieUI/rainbowpie_ui_module_list.json",
    "ui/RainbowPieUI/rainbowpie_ui_theme_preview.json",
    "ui/RainbowPieUI/verified_pack.json"
  ]
}
```








### 기본
add_external_server_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: add_external_server_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "add_external_server",

  // ???/?? ??
  "text_edit_group/name_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "text_edit_group/edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true
  },

  // ???/?? ??
  "save_button": {
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
      }
    ]
  },

  // ???/?? ??
  "add_external_server_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "add_external_server",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_add_external_server.add_external_server_screen_content"
  }
}
```








### 기본
anvil_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: anvil_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "anvil",

  // ???/?? ??
  "cost_label/gray": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "anvil_panel": {
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
            "maximized_input_dialog_panel@rainbowpieui_anvil.maximized_input_dialog_panel": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "anvil_root_panel@rainbowpieui_anvil.anvil_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "text_edit_panel": {
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
            "maximized_input_button@rainbowpieui_anvil.maximized_input_toggle_base": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100% - 2px", "100% - 2px" ],
              // 기준점(어디에서 시작할지)
              "anchor_from": "right_middle",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "right_middle",
              // 가로/세로 크기
              "size": [ "100%y", "100%" ],
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
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "text_edit_panel/text_edit_control": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 가로/세로 크기
    "size": [ "100% - 100%y", "100%" ],
    // 오버라이드 가능한 변수
    "$enable_profanity_filter": "$rainbowpie_ui_flag_input_enable_profanity_filter"
  },

  // ???/?? ??
  "plus_sign_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/anvil-plus')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "arrow_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "cross_out_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/crossout')"
  },

  // ???/?? ??
  "anvil_title_and_text_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "text_edit_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true
  },

  // ???/?? ??
  "icon_and_text_panel/anvil_icon_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "anvil_title_and_text_panel/title_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "generic_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "top_half_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 7, 15 ]
  },

  // ???/?? ??
  "anvil_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "anvil_panel/root_panel/common_panel": {
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
  "anvil_panel/root_panel/anvil_screen_inventory": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "container.repair"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
anvil_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: anvil_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "anvil_pocket",

  // ???/?? ??
  "anvil_title_and_text_panel/text_edit_control": {
    // 오버라이드 가능한 변수
    "$enable_profanity_filter": "$rainbowpie_ui_flag_input_enable_profanity_filter"
  },

  // ???/?? ??
  "anvil_panel": {
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
            "maximized_input_dialog_panel@rainbowpieui_anvil.maximized_input_dialog_panel": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "anvil_title_and_text_panel": {
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
            "maximized_input_button@rainbowpieui_anvil.maximized_input_toggle_base": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100% - 4px", "100% - 4px" ],
              // 기준점(어디에서 시작할지)
              "anchor_from": "right_middle",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "right_middle",
              // 가로/세로 크기
              "size": [ "100%y", 20 ],
              // 기준점에서 이동하는 거리
              "offset": [ 0, -8 ],
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
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "slots_panel/plus_sign": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "slots_panel/arrow": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_inactive')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "slots_panel/arrow/cross_out": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/crossout')"
  },

  // ???/?? ??
  "slots_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "text_edit_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true
  },

  // ???/?? ??
  "inventory_content/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "generic_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "anvil_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel/header": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel": {
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
            "inventory_header@rainbowpie_ui_inventory.header_pocket": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_single_title": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "tile.anvil.name"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
beacon_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: beacon_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "beacon",

  // ???/?? ??
  "beacon_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "beacon_panel/root_panel/common_panel": {
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
    "size": [ "100% - 38px", "100% - 3px" ]
  },

  // ???/?? ??
  "beacon_panel/root_panel/beacon_inventory": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  }
}
```








### 기본
beacon_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: beacon_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "beacon_pocket",

  // ???/?? ??
  "beacon_contents_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "inventory_content/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "generic_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "beacon_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel/header": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel": {
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
            "inventory_header@rainbowpie_ui_inventory.header_pocket": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_single_title": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "tile.anvil.name"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
book_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: book_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "book",

  // ???/?? ??
  "book_buttons_panel/sign_export_buttons/export_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button"
  },

  // ???/?? ??
  "cover_buttons_stack_panel_holder/cover_buttons_stack_panel": {
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
            "maximized_input_button_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 0, 20 ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "maximized_input_button@rainbowpieui_book.maximized_input_toggle_base": {
                    // 오버라이드 가능한 변수
                    "$button_image_size": [ "100%", "100%" ],
                    // 가로/세로 크기
                    "size": [ "100%y", 18 ],
                    // 기준점에서 이동하는 거리
                    "offset": [ 12, 0 ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_middle",
                    // 오버라이드 가능한 변수
                    "$toggle_group_forced_index": 1000,
                    // 오버라이드 가능한 변수
                    "$toggle_view_binding_name": "maximized_input"
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
  "cover_buttons_stack_panel_holder/cover_buttons_stack_panel/finalize_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button"
  },

  // ???/?? ??
  "cover_buttons_stack_panel_holder/cover_buttons_stack_panel/cancel_sign_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button"
  },

  // ???/?? ??
  "book_buttons_panel/sign_export_buttons/sign_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button"
  },

  // ???/?? ??
  "author_text_box": {
    // 오버라이드 가능한 변수
    "$place_holder_text_font_type": "$rainbowpie_ui_theme_global_font_name",
    // 오버라이드 가능한 변수
    "$place_holder_text_backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "title_text_box": {
    // 오버라이드 가능한 변수
    "$place_holder_text_font_type": "$rainbowpie_ui_theme_global_font_name",
    // 오버라이드 가능한 변수
    "$place_holder_text_backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "warning_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "author_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "title_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "page_number_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "header": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "page_text_edit": {
    // 오버라이드 가능한 변수
    "$place_holder_text_font_type": "$rainbowpie_ui_theme_global_font_name",
    // 오버라이드 가능한 변수
    "$place_holder_text_backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // "base_button/hover": {
  //   "controls": [
  //     {
  //       "hover_text@common.hover_text": {
  //         "layer": 30,
  //         "property_bag": {
  //           "#hover_text": "base_button"
  //         }
  //       }
  //     }
  //   ]
  // },

  // "page_content_panel/edit_page": {
  //   "ignored": true
  // },

  // "page_buttons_panel": {
  //   "modifications": [
  //     {
  //       "array_name": "bindings",
  //       "operation": "remove",
  //       "where": {
  //         "binding_name_override": "#visible"
  //       }
  //     }
  //   ]
  // },

  "book_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "book",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_book.book_screen_content",
    // ?? ??
    "force_render_below": true,
    // ?? ??
    "close_on_player_hurt": false
  }
}
```








### 기본
brewing_stand_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: brewing_stand_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "brewing_stand",

  // ???/?? ??
  "brewing_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "brewing_pipes": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_pipes')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "brewing_fuel_pipes": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_fuel_pipes')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // "bottle_empty_image": {
  //   "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/bottle_empty')",
  //   "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
  //   "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  // },

  // "fuel_empty_image": {
  //   "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_fuel_empty')",
  //   "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
  //   "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  // },

  "bubbles_empty_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/bubbles_empty')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "bubbles_full_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/bubbles_full')"
  },

  // ???/?? ??
  "brewing_arrow_empty_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_arrow_empty')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "brewing_arrow_full_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_arrow_full')"
  },

  // ???/?? ??
  "brewing_fuel_bar_empty_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_fuel_bar_empty')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "brewing_fuel_bar_full_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_fuel_bar_full')"
  },

  // ???/?? ??
  "brewing_panel_top_half": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 16 ]
  },

  // ???/?? ??
  "brewing_panel_top_half/brewing_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "brewing_stand_panel": {
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
            "brewing_stand_root_panel@rainbowpieui_brewing_stand.brewing_stand_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "brewing_stand_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "brewing_stand_panel/root_panel/common_panel": {
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
    "size": [ "100% - 8px", "100% - 25px" ]
  },

  // ???/?? ??
  "brewing_stand_panel/root_panel/furnace_screen_inventory": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title",
              // 기준점에서 이동하는 거리
              "offset": [ 0, 0 ]
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
brewing_stand_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: brewing_stand_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "brewing_stand_pocket",

  // ???/?? ??
  "slots_panel/brewing_pipes": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_pipes_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "slots_panel/brewing_arrow_panel/brewing_arrow_empty_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_arrow_large_empty')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "slots_panel/brewing_arrow_panel/brewing_arrow_full_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/brewing_arrow_large_full')"
  },

  // ???/?? ??
  "slots_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "inventory_content/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "generic_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "brewing_stand_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel/header": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel": {
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
            "inventory_header@rainbowpie_ui_inventory.header_pocket": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_single_title": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
cartography_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: cartography_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "cartography",

  // ???/?? ??
  "cartography_panel": {
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
            "maximized_input_dialog_panel@rainbowpieui_cartography.maximized_input_dialog_panel": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "text_box_panel": {
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
            "maximized_input_button_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ "100%", 0 ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "maximized_input_button@rainbowpieui_cartography.maximized_input_toggle_base": {
                    // 오버라이드 가능한 변수
                    "$button_image_size": [ "100% - 1px", "100% - 1px" ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "bottom_right",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_right",
                    // 가로/세로 크기
                    "size": [ "100%y", "20px" ],
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
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "text_box_panel/text_edit_control": {
    // 가로/세로 크기
    "size": [ "100% - 20px", 20 ]
  },

  // ???/?? ??
  "arrow_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "plus_sign_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/anvil-plus')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "text_edit_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,
    // 오버라이드 가능한 변수
    "$edit_box_indent_size": [ "100% - 2px", "100% - 1px" ]
  },

  // ???/?? ??
  "output_description_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "text_box_panel/map_name_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "title_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "cartography_panel/root_panel/tab_close_and_help_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "top_half_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 18 ]
  },

  // ???/?? ??
  "top_half_panel/title_panel/title_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "cartography_panel/root_panel/common_panel": {
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
  "cartography_panel/root_panel/cartography_screen_inventory": {
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
              "$rainbowpie_localui_inventoryheader_title": "tile.cartography_table.name"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
cartography_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: cartography_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "cartography_pocket",

  // ???/?? ??
  "cartography_panel": {
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
            "maximized_input_dialog_panel@rainbowpieui_cartography.maximized_input_dialog_panel": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "right_navigation_tabs/pocket_tab_close_and_help_button": {
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
  "vertical_arrow_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_down_small')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "cartography_content_stack_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
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
  "inventory_panel/inventory_title_label_centerer/inventory_title_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "right_tab_cartography": {
    // 오버라이드 가능한 변수
    "$checked_bar_anchor": "right",
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_image_size": [ "100% - 4px", "100%" ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor": "right_middle",
    // 오버라이드 가능한 변수
    "$tab_content_size": [ "100% - 4px", "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor": "right_middle",
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
  "right_panel/content/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
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
chat_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: chat_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "chat",

  // ???/?? ??
  "messages_stack_panel": {
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "messages_factory",
      // ?? ?? ?
      "max_children_size": 100,
      // 팩토리 템플릿 매핑
      "control_ids": {
        // ?? ??
        "chat_screen_messages": "chat_screen_messages@chat.message_tts_wrapper"
      },
      // ???/?? ??
      "factory_variables": [
        "$rainbowpie_ui_theme_global_font_name",
        "$rainbowpie_ui_theme_global_font_backup_name",
        "$rainbowpie_ui_flag_chat_use_ui_font",
        "$rainbowpie_ui_flag_chatui_default_font"
      ]
    }
  },

  // ???/?? ??
  "chat_screen_content/autocomplete_commands_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "chat_screen_content/messages_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "chat_screen_content/popup_factory": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_control_ids": {
      // ?? ??
      "chat_setting_popup": "@chat_settings.chat_settings_popup"
    },
    // 팩토리 템플릿 매핑
    "control_ids": "$rainbowpie_localui_this_control_ids",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_b3c44822",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_this_control_ids": {
          // ?? ??
          "chat_setting_popup": "@rainbowpieui_chat.chat_settings_panel"
        }
      }
    ]
  },

  // ???/?? ??
  "auto_complete_panel_contents_with_item/auto_complete_item_renderer": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "auto_complete_panel_contents_with_item/text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "auto_complete_panel_contents_with_item/autocomplete_button": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "remove",
        // ???/?? ??
        "where": {
          // 가져올 값 이름
          "binding_name": "#is_autocomplete_suggestion"
        }
      },
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 가져올 값 이름
            "binding_name": "(not #chat_visible)",
            // 가져온 값을 다른 속성으로 연결
            "binding_name_override": "#visible"
          },
          {
            // 목록 데이터를 반복 연결
            "binding_type": "collection",
            // 가져올 값 이름
            "binding_name": "#auto_complete_text",
            // 목록 이름
            "binding_collection_name": "auto_complete"
          },
          {
            // 가져올 값 이름
            "binding_name": "#host_teleport_main_visible"
          },
          {
            // 가져올 값 이름
            "binding_name": "#host_time_visible"
          },
          {
            // 가져올 값 이름
            "binding_name": "#host_weather_visible"
          },
          {
            // 계산/조건 결과를 연결
            "binding_type": "view",
            // 계산식/참조 값
            "source_property_name": "(not (#auto_complete_text = '') and not #host_teleport_main_visible and not #host_time_visible and not #host_weather_visible)",
            // 결과가 들어갈 속성
            "target_property_name": "#enabled"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "chat_background": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "message_tts_wrapper": {
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
            "requires": "$rainbowpie_ui_flag_a012c161",
            // 오버라이드 가능한 변수
            "$tts_label_panel": "rainbowpieui_chat.editable_message_text"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "messages_text": {
    // 애니메이션 목록
    "anims": ["@rainbowpieui_chat.chat_message_panel_size_animation"],
    // ?? ????
    "clips_children": true,
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
            "requires": "$rainbowpie_ui_flag_chatui_default_font",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_name": "default",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_backup_name": "default"
          }
        ]
      },
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "replace",
        // ???/?? ??
        "where": {
          // 가져올 값 이름
          "binding_name": "#chat_visible",
          // 가져온 값을 다른 속성으로 연결
          "binding_name_override": "#visible"
        },
        // ??? ?
        "value": {
          // 가져올 값 이름
          "binding_name": "#chat_visible"
        }
      },
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
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
        ]
      }
    ]
  },

  // ???/?? ??
  "messages_text/text": {
    // ?? ??
    "enable_profanity_filter": "$rainbowpie_ui_flag_chat_message_profanity_filter",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 애니메이션 목록
    "anims": ["@rainbowpieui_chat.chat_message_panel_animation"],
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
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
            "requires": "($rainbowpie_ui_flag_chat_use_ui_font and ($chat_font_type = 'default'))",
            // 오버라이드 가능한 변수
            "$chat_font_type": "$rainbowpie_ui_theme_global_font_name"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "messages_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 1, 0 ],
    // 가로/세로 크기
    "size": [ "100%-2px", "100%-47px" ]
  },

  // ???/?? ??
  "send_button": {
    // 오버라이드 가능한 변수
    "$button_size_override": [ "100%c + 1px", "100%c" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_form_fitting_button"
  },

  // ???/?? ??
  "text_edit_box": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true,
    // 오버라이드 가능한 변수
    "$edit_box_indent_size": [ "100% - 1px", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$enable_profanity_filter": "$rainbowpie_ui_flag_input_enable_profanity_filter"
  },

  // ???/?? ??
  "keyboard_image": {
    // 사용할 이미지 경로
    "texture": "textures/ui/chat_keyboard_hover",
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "small_button": {
    // 가로/세로 크기
    "size": [ 26, 27 ],
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100% - 1px", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "chat_screen_content": {
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
            "messages_stack_panel": {
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
                  "messages_parent_panel": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ "fill", "100%" ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "messages_panel@chat.messages_scrolling_panel": {}
                      },
                      { "autocomplete_commands_panel@chat.commands_panel": { "layer": 3 } }
                    ]
                  }
                },
                {
                  // ???/?? ??
                  "chat_messages_padding": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ 150, "100%" ],
                    // 완전히 제거(공간도 없음)
                    "ignored": "(not $rainbowpie_ui_feature_command_chat)",
                    // 보이기/숨기기(공간 유지)
                    "visible": false,
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
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "chat_settings_animation_panel@rainbowpieui_chat.chat_settings_animation_panel": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "maximized_input_dialog_panel@rainbowpieui_chat.maximized_input_dialog_panel": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "chat_messages_and_playerlist@rainbowpieui_chat.chat_messages_and_playerlist": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "rainbowpie_chat_header@rainbowpieui_chat.chat_header": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "mask_layer@mintui_background.background_mask": {
              // 오버라이드 가능한 변수
              "$background_offset": [ 0, "100% - 27px" ],
              // 오버라이드 가능한 변수
              "$background_children_offset":  [ 0, "-100% + 27px" ],
              // 오버라이드 가능한 변수
              "$background_layer": -3,
              // 오버라이드 가능한 변수
              "$background_anims": [
                "@rainbowpieui_chat.chat_bottom_background_back_animation1",
                "@rainbowpieui_chat.chat_bottom_background_back_animation_pop1",
                "@rainbowpieui_chat.chat_bottom_background_animation1",
                "@rainbowpieui_chat.chat_bottom_background_animation_pop1"
              ],
              // 오버라이드 가능한 변수
              "$background_children_anims": [
                "@rainbowpieui_chat.chat_bottom_background_back_animation2",
                "@rainbowpieui_chat.chat_bottom_background_back_animation_pop2",
                "@rainbowpieui_chat.chat_bottom_background_animation2",
                "@rainbowpieui_chat.chat_bottom_background_animation_pop2"
              ]
            }
          },
          {
            // ???/?? ??
            "chat_bottom_panel_background": {
              // 이미지 표시
              "type": "image",
              // 사용할 이미지 경로
              "texture": "textures/ui/White",
              // 기준점(어디에서 시작할지)
              "anchor_from": "bottom_middle",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "bottom_middle",
              // 가로/세로 크기
              "size": [ "100%", 27 ],
              // ?? (R,G,B,A)
              "color": "$rainbowpie_ui_theme_text_background_color",
              // ???
              "alpha": "$rainbowpie_ui_theme_text_background_alpha",
              // ????? ?? ?
              "animation_reset_name": "screen_animation_reset",
              // 애니메이션 목록
              "anims": [
                "@rainbowpieui_chat.chat_bottom_panel_back_animation",
                "@rainbowpieui_chat.chat_bottom_panel_back_animation_pop",
                "@rainbowpieui_chat.chat_bottom_panel_animation",
                "@rainbowpieui_chat.chat_bottom_panel_animation_pop"
              ],
              // 겹치는 순서(숫자 클수록 위)
              "layer": 1
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "chat_bottom_panel/host_main_button": {
    // 가로/세로 크기
    "size": [ 26, 27 ],
    // 오버라이드 가능한 변수
    "$button_size_override": [ "100%c + 1px", "100%c" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_form_fitting_button"
  },

  // ???/?? ??
  "chat_bottom_panel": {
    // 가로/세로 크기
    "size": [ "100% - 1px", 27 ],
    // ?? ?? ?
    "min_size": [ "100% - 1px", 27 ],
    // ????? ?? ?
    "animation_reset_name": "screen_animation_reset",
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_chat.chat_bottom_panel_back_animation",
      "@rainbowpieui_chat.chat_bottom_panel_back_animation_pop",
      "@rainbowpieui_chat.chat_bottom_panel_animation",
      "@rainbowpieui_chat.chat_bottom_panel_animation_pop"
    ],
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "keyboard_button",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "autocompleteback@common_buttons.light_text_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100% - 1px", "100% - 2px" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
              // 오버라이드 가능한 변수
              "$button_text": "TAB▲",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.chat_autocomplete_back",
              // 가로/세로 크기
              "size": [ 26, 27 ],
              // 완전히 제거(공간도 없음)
              "ignored": "(not $touch)"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "autocomplete@common_buttons.light_text_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100% - 1px", "100% - 2px" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
              // 오버라이드 가능한 변수
              "$button_text": "TAB▼",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.chat_autocomplete",
              // 가로/세로 크기
              "size": [ 26, 27 ],
              // 완전히 제거(공간도 없음)
              "ignored": "(not $touch)"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "previous@common_buttons.light_text_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100% - 1px", "100% - 2px" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
              // 오버라이드 가능한 변수
              "$button_text": "▲",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.chat_previous_message",
              // 가로/세로 크기
              "size": [ 26, 27 ],
              // 완전히 제거(공간도 없음)
              "ignored": "(not $touch)"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "next@common_buttons.light_text_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100% - 1px", "100% - 2px" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
              // 오버라이드 가능한 변수
              "$button_text": "▼",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.chat_next_message",
              // 가로/세로 크기
              "size": [ 26, 27 ],
              // 완전히 제거(공간도 없음)
              "ignored": "(not $touch)"
            }
          }
        ]
      },
      {
        // ??? ???
        "control_name": "text_box",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "maximized_input_button@rainbowpieui_chat.maximized_input_toggle_base": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100% - 1px", "100% - 2px" ],
              // 가로/세로 크기
              "size": [ 26, 27 ],
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
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "chat_header": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "chat_screen": {
    // ?? ??
    "close_on_player_hurt": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_watermark": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "chat",
    // 오버라이드 가능한 변수
    "$rainbowpie_ui_theme_global_background_alpha": 0.5,
    // 오버라이드 가능한 변수
    "$screen_bg_content": "common.empty_panel"
  }
}
```








### 기본
chat_settings_menu_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: chat_settings_menu_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "chat_settings",

  // ???/?? ??
  "typeface_dropdown_content/mojangles": {
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
            "requires": "$rainbowpie_ui_flag_chat_use_ui_font",
            // 오버라이드 가능한 변수
            "$radio_label_text": "UI Font",
            // 오버라이드 가능한 변수
            "$radio_label_font_type": "$rainbowpie_ui_theme_global_font_name"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "colors_dropdown_base": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_rainbowpiebutton_enabled": true,
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_688c902f",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dropdown_content_item_size": [ 38, "default" ],
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dropdown_show_button": true,
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dropdown_enabled": true,
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dropdown_content_panel": "rainbowpieui_chat.chat_color_dropdown_content",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_dropdown_content": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "0@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
              // ?? ??
              "collection_index": 0,
              // 오버라이드 가능한 변수
              "$toggle_state_binding_name": "('#' + $color_prefix + '_0'",
              // 오버라이드 가능한 변수
              "$focus_id": "($color_prefix + 'option_0')",
              // 오버라이드 가능한 변수
              "$focus_override_up": "($color_prefix + 'option_6')",
              // 오버라이드 가능한 변수
              "$focus_override_down": "($color_prefix + 'option_1')"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "1@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
              // ?? ??
              "collection_index": 1,
              // 오버라이드 가능한 변수
              "$toggle_state_binding_name": "('#' + $color_prefix + '_1'",
              // 오버라이드 가능한 변수
              "$focus_id": "($color_prefix + 'option_1')",
              // 오버라이드 가능한 변수
              "$focus_override_up": "($color_prefix + 'option_0')",
              // 오버라이드 가능한 변수
              "$focus_override_down": "($color_prefix + 'option_2')"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "2@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
              // ?? ??
              "collection_index": 2,
              // 오버라이드 가능한 변수
              "$toggle_state_binding_name": "('#' + $color_prefix + '_2'",
              // 오버라이드 가능한 변수
              "$focus_id": "($color_prefix + 'option_2')",
              // 오버라이드 가능한 변수
              "$focus_override_up": "($color_prefix + 'option_1')",
              // 오버라이드 가능한 변수
              "$focus_override_down": "($color_prefix + 'option_3')"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "3@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
              // ?? ??
              "collection_index": 3,
              // 오버라이드 가능한 변수
              "$toggle_state_binding_name": "('#' + $color_prefix + '_3')",
              // 오버라이드 가능한 변수
              "$focus_id": "($color_prefix + 'option_3')",
              // 오버라이드 가능한 변수
              "$focus_override_up": "($color_prefix + 'option_2')",
              // 오버라이드 가능한 변수
              "$focus_override_down": "($color_prefix + 'option_4')"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "4@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
              // ?? ??
              "collection_index": 4,
              // 오버라이드 가능한 변수
              "$toggle_state_binding_name": "('#' + $color_prefix + '_4'",
              // 오버라이드 가능한 변수
              "$focus_id": "($color_prefix + 'option_4')",
              // 오버라이드 가능한 변수
              "$focus_override_up": "($color_prefix + 'option_3')",
              // 오버라이드 가능한 변수
              "$focus_override_down": "($color_prefix + 'option_5')"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "5@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
              // ?? ??
              "collection_index": 5,
              // 오버라이드 가능한 변수
              "$toggle_state_binding_name": "('#' + $color_prefix + '_5'",
              // 오버라이드 가능한 변수
              "$focus_id": "($color_prefix + 'option_5')",
              // 오버라이드 가능한 변수
              "$focus_override_up": "($color_prefix + 'option_4')",
              // 오버라이드 가능한 변수
              "$focus_override_down": "($color_prefix + 'option_6')"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "6@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
              // ?? ??
              "collection_index": 6,
              // 오버라이드 가능한 변수
              "$toggle_state_binding_name": "('#' + $color_prefix + '_6'",
              // 오버라이드 가능한 변수
              "$focus_id": "($color_prefix + 'option_6')",
              // 오버라이드 가능한 변수
              "$focus_override_up": "($color_prefix + 'option_5')",
              // 오버라이드 가능한 변수
              "$focus_override_down": "($color_prefix + 'option_0')"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "reset_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ]
  },

  // ???/?? ??
  "typeface_dropdown": {
    // 오버라이드 가능한 변수
    "$option_dropdown_size": [ "100%", 20 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "mojangles@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#typeface_radio_mojangles",
          // 오버라이드 가능한 변수
          "$radio_label_text": "typeface.mojangles",
          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$rainbowpie_ui_flag_chat_use_ui_font",
              // 오버라이드 가능한 변수
              "$radio_label_text": "UI Font"
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "noto_sans@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#typeface_radio_notoSans",
          // 오버라이드 가능한 변수
          "$radio_label_text": "typeface.notoSans",
          // 오버라이드 가능한 변수
          "$radio_label_font_type": "smooth"
        }
      }
    ]
  },

  // ???/?? ??
  "line_break/line_break_image": {
    // ?? (R,G,B,A)
    "color": [ 1.0, 1.0, 1.0 ],
    // ???
    "alpha": 0.4
  },

  // ???/?? ??
  "chat_settings_scrolling_content": {
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ]
  },

  // ???/?? ??
  "chat_settings_scrolling_content/chat_settings_content_area": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center"
  }
}
```








### 기본
chest_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: chest_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "chest",

  // ???/?? ??
  "small_chest_screen": {
    // 오버라이드 가능한 변수
    "$is_ender_chest": false,
    // 오버라이드 가능한 변수
    "$is_shulker_box": false,
    // 오버라이드 가능한 변수
    "$is_barrel": false
  },

  // ???/?? ??
  "ender_chest_screen": {
    // 오버라이드 가능한 변수
    "$is_ender_chest": true,
    // 오버라이드 가능한 변수
    "$is_shulker_box": false,
    // 오버라이드 가능한 변수
    "$is_barrel": false
  },

  // ???/?? ??
  "shulker_box_screen": {
    // 오버라이드 가능한 변수
    "$is_shulker_box": true
  },

  // ???/?? ??
  "barrel_screen": {
    // 오버라이드 가능한 변수
    "$is_barrel": true
  },

  // ???/?? ??
  "chest_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "large_chest_panel_top_half": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 19 ]
  },

  // ???/?? ??
  "large_chest_panel_top_half/chest_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "large_chest_panel/root_panel/common_panel": {
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
  "large_chest_panel": {
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
            "large_chest_root_panel@rainbowpieui_chest.large_chest_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "large_chest_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "large_chest_panel/root_panel/chest_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "chest_fastpick@rainbowpie_module_chest_fastpick.chest_fastpick": {
              // 오버라이드 가능한 변수
              "$large_chest": true
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "live_player_renderer@rainbowpie_ui_inventory.live_player_renderer": {}
          }
        ]
      }
    ]
  },

  // small_chest_panel

  "small_chest_panel": {
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
            "small_chest_root_panel@rainbowpieui_chest.small_chest_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "small_chest_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "small_chest_panel_top_half": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 20 ]
  },

  // ???/?? ??
  "small_chest_panel_top_half/chest_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "small_chest_panel/root_panel/common_panel": {
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
  "small_chest_panel/root_panel/chest_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "chest_fastpick@rainbowpie_module_chest_fastpick.chest_fastpick": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "live_player_renderer@rainbowpie_ui_inventory.live_player_renderer": {}
          }
        ]
      }
    ]
  }
}
```








### 기본
command_block_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: command_block_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "command_block",

  // ???/?? ??
  "command_block_text_edit_box": {
    // 오버라이드 가능한 변수
    "$enable_profanity_filter": "$rainbowpie_ui_flag_input_enable_profanity_filter"
  },

  // ???/?? ??
  "left_scroll_panel_content/content_stack_panel/offset2/hover_note_text": {
    // 오버라이드 가능한 변수
    "$enable_profanity_filter": "$rainbowpie_ui_flag_input_enable_profanity_filter"
  },

  // ???/?? ??
  "plus_icon": {
    // 가로/세로 크기
    "size": [ 18, 18 ],
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/global/maximize_icon')"
  },

  // ???/?? ??
  "right_scroll_panel_content": {
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
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
            "spacer_bottom": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 0, 3 ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "previous_command_block_info_stack/start_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "previous_command_block_info_stack/start_label_dynamic_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "right_scroll_panel_content/command_block_previous_output_panel/command_output_text_centering_panel/command_output_text": {
    // 가로/세로 크기
    "size": [ "100% - 4px", 60 ]
  },

  // ???/?? ??
  "right_scroll_panel_content/command_block_previous_output_panel/previous_output_label_stack_centering_panel/previous_output_label_stack/option_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "command_block_helper_stack/text_": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "right_scroll_panel_content/command_block_commands_panel/centering_panel1/command_block_commands_panel/paste_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_scroll_panel_content/command_block_commands_panel/centering_panel1/command_block_commands_panel/plus_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_scroll_panel_content/command_block_commands_panel/centering_panel1/command_block_commands_panel": {
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "paste_button",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "spacer": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 0.5, 0 ]
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "paste_button_rainbowpie@rainbowpieui_command_block.paste_button": {
              // 겹치는 순서(숫자 클수록 위)
              "layer": 2
            }
          }
        ]
      },
      {
        // ??? ???
        "control_name": "plus_button",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "plus_button_rainbowpie@rainbowpieui_command_block.plus_button": {
              // 겹치는 순서(숫자 클수록 위)
              "layer": 2
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "right_scroll_panel_content/command_block_commands_panel/centering_panel/option_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "left_scroll_panel_content/content_stack_panel/option_label_tick_delay": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "left_scroll_panel_content/content_stack_panel/option_label_execute_on_first_tick": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "left_scroll_panel_content/content_stack_panel/offset8": {
    // 가로/세로 크기
    "size": [ "100%", 2 ]
  },

  // ???/?? ??
  "cancel_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "block_type_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "command_impulse_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#command_impulse_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "commandBlockScreen.blockType.impulse"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "command_chain_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#command_chain_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "commandBlockScreen.blockType.chain"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "command_repeat_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#command_repeat_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "commandBlockScreen.blockType.repeat"
        }
      }
    ]
  },

  // ???/?? ??
  "condition_mode_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "command_conditional_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#command_conditional_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "commandBlockScreen.condition.conditional"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "command_unconditional_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#command_unconditional_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "commandBlockScreen.condition.unconditional"
        }
      }
    ]
  },

  // ???/?? ??
  "redstone_mode_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "command_always_on_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#command_always_on_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "commandBlockScreen.redstone.always_on"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "command_needs_redstone_mode@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#command_needs_redstone_mode",
          // 오버라이드 가능한 변수
          "$radio_label_text": "commandBlockScreen.redstone.needs_redstone"
        }
      }
    ]
  },

  // ???/?? ??
  "right_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 1, 0 ]
  },

  // ???/?? ??
  "left_scroll_panel_content": {
    // 가로/세로 크기
    "size": [ "100% - 3px", "100%c" ],
    // 기준점에서 이동하는 거리
    "offset": [ 2, 0 ]
  },

  // ???/?? ??
  "left_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 1, 0 ]
  },

  // ???/?? ??
  "command_block_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "command_block",
    // ?? ??
    "force_render_below": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_command_block.command_block_screen_content"
  }
}
```








### 기본
content_log.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: content_log.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "content_log",

  // ???/?? ??
  "content_log_panel/stack_panel": {
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "content_log_item_factory",
      // ?? ?? ?
      "max_children_size": 50,
      // 팩토리 템플릿 매핑
      "control_ids": {
        // ?? ??
        "content_log_item": "content_log_item@content_log.content_log_grid_item"
      },
      // ???/?? ??
      "factory_variables": [
        "$rainbowpie_ui_theme_global_font_name",
        "$rainbowpie_ui_theme_global_font_backup_name"
      ]
    }
  },

  // ???/?? ??
  "content_log_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "anim_content_log_bg_alpha": {
    // 시작 값
    "from": 0.3
  },

  // ???/?? ??
  "content_log_grid_item/content_log_background": {
    // ???
    "alpha": 0.3,
    // 애니메이션 목록
    "anims": [
      "@content_log.anim_content_log_bg_wait",
      "@rainbowpieui_content_log.anim_content_log_offset"
    ]
  }
}
```








### 기본
content_log_history_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: content_log_history_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "content_log_history",

  // ???/?? ??
  "content_log_message": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "clipboard_icon_wrapper/stack_panel/label_panel/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_localui_button_text_color"
  },

  // ???/?? ??
  "clear_icon_wrapper/stack_panel/label_panel/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_localui_button_text_color"
  },

  // ???/?? ??
  "horizontal_button_stack_panel/clipboard_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 가로/세로 크기
    "size": [ "25%", "100%" ]
  },

  // ???/?? ??
  "horizontal_button_stack_panel/clear_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 가로/세로 크기
    "size": [ "25%", "100%" ]
  },

  // ???/?? ??
  "messages_stack_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content_anchor_from": "bottom_right",
    // 오버라이드 가능한 변수
    "$scrolling_content_anchor_to": "bottom_right",
    // 가로/세로 크기
    "size": [ "100% - 4px", "default" ],
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "messages_factory",
      // ??? ???
      "control_name": "content_log_message@content_log_history.content_log_message_panel",
      // ???/?? ??
      "factory_variables": [
        "$rainbowpie_ui_theme_global_font_name",
        "$rainbowpie_ui_theme_global_font_backup_name"
      ]
    }
  },

  // ???/?? ??
  "content_log_history_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "content_log_history",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_content_log_history.content_log_history_panel"
  }
}
```








### 기본
create_world_upsell_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: create_world_upsell_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "create_world_upsell"
}
```








### 기본
credits_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: credits_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "credits",

  // ???/?? ??
  "skip_panel": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "rainbowpieui_skip_panel@rainbowpieui_credits.rainbowpieui_skip_panel": {}
      }
    ]
  },

  // ???/?? ??
  "fade_in_image": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "credits_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "credits"
  }
}
```








### 기본
death_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: death_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "death",

  // ???/?? ??
  "you_died_panel/you_died_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "death_reason_panel/death_reason_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "buttons_panel/respawn_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "remove",
        // ???/?? ??
        "where": {
          // 가져올 값 이름
          "binding_name": "#respawn_visible"
        }
      }
    ]
  },

  // ???/?? ??
  "buttons_panel/main_menu_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "remove",
        // ???/?? ??
        "where": {
          // 가져올 값 이름
          "binding_name": "#quit_visible"
        }
      }
    ]
  },

  // ???/?? ??
  "death_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "death"
  }
}
```








### 기본
debug_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: debug_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "debug_screen",

  // ???/?? ??
  "debug_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ignored": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "debug_screen"
  }
}
```








### 기본
disconnect_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: disconnect_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "disconnect",

  // ???/?? ??
  "disconnect_screen_content": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "rainbowpie_title_panel@rainbowpieui_disconnect.title_panel": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "disconnect_screen_content/title_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_c48fd864"
  },

  // ???/?? ??
  "disconnect_text": {
    // "text": "disconnect_text"
  },

  // ???/?? ??
  "disconnect_title_text": {
    // "text": "disconnect_title_text"
  },

  // ???/?? ??
  "disconnect_screen_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? ??
    "text_alignment": "center"
  },

  // ???/?? ??
  "menu_button_template": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "open_account_setting_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "disconnect_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": "$rainbowpie_ui_flag_disconnect_ui_modified",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_disconnect_dialog_buttons": "rainbowpieui_disconnect.button_panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_blur": "(not $rainbowpie_ui_flag_d39385b8)",
    // 오버라이드 가능한 변수
    "$is_pregame": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_disconnect.disconnect_screen_content"
  },

  // ???/?? ??
  "realms_disconnect_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_disconnect_dialog_buttons": "rainbowpieui_disconnect.realms_disconnect_button_panel"
  },

  // ???/?? ??
  "realms_warning_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_disconnect_dialog_buttons": "rainbowpieui_disconnect.realms_warning_button_panel"
  }
}
```








### 기본
enchanting_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: enchanting_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "enchanting",

  // ???/?? ??
  "enchant_runes": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // 보여줄 글자
    "text": "#text",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 이름
        "binding_collection_name": "#enchant_buttons",
        // 가져올 값 이름
        "binding_name": "#hover_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#hover_text - '§o')",
        // 결과가 들어갈 속성
        "target_property_name": "#text"
      }
    ]
  },

  // ???/?? ??
  "unselectable_button": {
  },

  // ???/?? ??
  "dark_background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_button_background_locked_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_button_background_locked_alpha"
  },

  // ???/?? ??
  "dark_background_with_hover_text": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_button_background_locked_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_button_background_hover_alpha"
  },

  // ???/?? ??
  "active_background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_button_background_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_button_background_default_alpha"
  },

  // ???/?? ??
  "active_background_with_hover_text": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_button_background_hover_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_button_background_hover_alpha"
  },

  // ???/?? ??
  "enchanting_panel_top_half/grid_panel/indent": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "enchanting_panel_top_half/grid_panel/dust_panel": {
  },

  // ???/?? ??
  "enchanting_panel_top_half/grid_panel": {
  },

  // ???/?? ??
  "enchanting_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "enchanting_panel_top_half": {
    // 기준점에서 이동하는 거리
    "offset": [ 1, 15 ]
  },

  // ???/?? ??
  "enchanting_panel_top_half/enchanting_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "enchanting_panel": {
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
            "enchanting_root_panel@rainbowpieui_enchanting.enchanting_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "enchanting_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "enchanting_panel/root_panel/common_panel": {
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
    "size": [ "100% - 8px", "100% - 21px" ]
  },

  // ???/?? ??
  "enchanting_panel/root_panel/enchanting_screen_inventory": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title",
              // 기준점에서 이동하는 거리
              "offset": [ 0, -4 ]
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
enchanting_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: enchanting_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "enchanting_pocket",

  // ???/?? ??
  "enchanting_slots_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "inventory_content/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "generic_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "enchanting_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel/header": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel": {
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
            "inventory_header@rainbowpie_ui_inventory.header_pocket": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_single_title": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
furnace_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: furnace_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "furnace",

  // ???/?? ??
  "furnace_screen": {
    // 오버라이드 가능한 변수
    "$is_blast_furnace": false,
    // 오버라이드 가능한 변수
    "$is_smoker": false,
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
            "requires": "($container_title = 'tile.blast_furnace.name')",
            // 오버라이드 가능한 변수
            "$is_blast_furnace": true
          },
          {
            // 이 조건이 맞으면 적용
            "requires": "($container_title = 'tile.smoker.name')",
            // 오버라이드 가능한 변수
            "$is_smoker": true
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "furnace_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "furnace_arrow_empty_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_inactive')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "furnace_arrow_full_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_active')"
  },

  // ???/?? ??
  "flame_empty_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/flame_empty_image')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "flame_full_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/flame_full_image')"
  },

  // ???/?? ??
  "furnace_panel_top_half": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 20 ]
  },

  // ???/?? ??
  "furnace_panel_top_half/furnace_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "furnace_panel": {
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
            "furnace_root_panel@rainbowpieui_furnace.furnace_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "furnace_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "furnace_panel/root_panel/common_panel": {
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
    "size": [ "100% - 8px", "100% - 27px" ]
  },

  // ???/?? ??
  "furnace_panel/root_panel/furnace_screen_inventory": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title",
              // 기준점에서 이동하는 거리
              "offset": [ 0, 2 ]
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
furnace_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: furnace_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "furnace_pocket",

  // ???/?? ??
  "furnace_content": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "inventory_content/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "generic_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "furnace_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel/header": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel": {
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
            "inventory_header@rainbowpie_ui_inventory.header_pocket": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_single_title": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
gameplay_common.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: gameplay_common.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "gameplay"
}
```








### 기본
gamma_calibration_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: gamma_calibration_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "gamma_calibration",

  // ???/?? ??
  "image_panel/centering_panel/image_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "message_panel/message_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "calibration_slider/centering_panel/slider_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "calibration_slider/slider_control/slider": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_sliderbar_enabled": true
  },

  // ???/?? ??
  "continue_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color": [ 0.196078431372549, 0.6588235294117647, 0.3215686274509804 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_color": [ 0.196078431372549, 0.6588235294117647, 0.301961 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_color": [ 0.196078431372549, 0.6588235294117647, 0.301961 ],
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
  "gamma_calibration_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "gamma_calibration",
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
    "$container_transition_time_pop": "$rainbowpie_ui_animation_transition_time",
    // 오버라이드 가능한 변수
    "$screen_animations": [
      "@common.screen_exit_animation_push_fade",
      "@common.screen_exit_animation_pop_fade",
      "@common.screen_entrance_animation_push_fade",
      "@common.screen_entrance_animation_pop_fade"
    ]
  }
}
```








### 기본
grindstone_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: grindstone_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "grindstone",

  // ???/?? ??
  "arrow_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "title_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "cross_out_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/crossout')"
  },

  // ???/?? ??
  "top_half_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 4, 14 ]
  },

  // ???/?? ??
  "top_half_panel/title_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "grindstone_panel": {
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
            "grindstone_root_panel@rainbowpieui_grindstone.grindstone_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "grindstone_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "grindstone_panel/root_panel/common_panel": {
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
  "grindstone_panel/root_panel/grindstone_screen_inventory": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "container.repairAndDisenchant"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
grindstone_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: grindstone_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "grindstone_pocket",

  // ???/?? ??
  "slots_panel/arrow": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "slots_panel/arrow/cross_out": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/crossout')"
  },

  // ???/?? ??
  "slots_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "inventory_content/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "repair_title_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "grindstone_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel/header": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "header_and_content_stack_panel": {
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
            "inventory_header@rainbowpie_ui_inventory.header_pocket": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_single_title": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "tile.grindstone.name"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
horse_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: horse_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "horse",

  // ???/?? ??
  "inv_bg_panel/cell_image": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "inv_bg_panel": {
  },

  // ???/?? ??
  "renderer_bg": {
    // 사용할 이미지 경로
    "texture": "textures/ui/Black",
    // ???
    "alpha": 0.4
  },

  // ???/?? ??
  "horse_panel/root_panel/equipment": {
    // 기준점에서 이동하는 거리
    "offset": [ 7, 29 ]
  },

  // ???/?? ??
  "horse_panel/root_panel/renderer": {
    // 기준점에서 이동하는 거리
    "offset": [ 25, 29 ]
  },

  // ???/?? ??
  "horse_panel/root_panel/horse_section_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "horse_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "inv_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 79, 29 ]
  },

  // ???/?? ??
  "horse_panel": {
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
            "horse_root_panel@rainbowpieui_horse.horse_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "horse_panel/root_panel/common_panel": {
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
  "horse_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
horse_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: horse_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "horse_pocket",

  // ???/?? ??
  "close_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "visual_tabs_equip": {
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
            "close_background@rainbowpie_ui_inventory.header_background": {
              // 기준점(어디에서 시작할지)
              "anchor_from": "top_left",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "top_left",
              // 가로/세로 크기
              "size": [ 29, 32 ],
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
          },
          {
            // ???/?? ??
            "rainbowpie_chest": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 기준점(어디에서 시작할지)
              "anchor_from": "bottom_left",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "bottom_left",
              // 가로/세로 크기
              "size": [ 29, 32 ],
              // 기준점에서 이동하는 거리
              "offset": [ 0, -36 ],
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "#is_chested",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible"
                }
              ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "background@rainbowpie_ui_inventory.header_background": {
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "chest_icon@horse_pocket.chest_icon_front": {}
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            // ???/?? ??
            "rainbowpie_equip": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 기준점(어디에서 시작할지)
              "anchor_from": "bottom_left",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "bottom_left",
              // 가로/세로 크기
              "size": [ 29, 32 ],
              // 기준점에서 이동하는 거리
              "offset": [ 0, -2 ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "background@rainbowpie_ui_common.inventory_background": {
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // ???/?? ??
                        "checked_left": {
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
                        // 다른 템플릿을 가져와서 확장(상속)
                        "equip_icon@horse_pocket.saddle_icon_front": {}
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
  "visual_tabs_equip/close_tab": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "visual_tabs_equip/chest": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "visual_tabs_equip/equip": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "visual_tabs_chest": {
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
            "close_background@rainbowpie_ui_inventory.header_background": {
              // 기준점(어디에서 시작할지)
              "anchor_from": "top_left",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "top_left",
              // 가로/세로 크기
              "size": [ 29, 32 ],
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
          },
          {
            // ???/?? ??
            "rainbowpie_chest": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 기준점(어디에서 시작할지)
              "anchor_from": "bottom_left",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "bottom_left",
              // 가로/세로 크기
              "size": [ 29, 32 ],
              // 기준점에서 이동하는 거리
              "offset": [ 0, -36 ],
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "#is_chested",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible"
                }
              ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "background@rainbowpie_ui_common.inventory_background": {
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // ???/?? ??
                        "checked_left": {
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
                        // 다른 템플릿을 가져와서 확장(상속)
                        "chest_icon@horse_pocket.chest_icon_front": {}
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            // ???/?? ??
            "rainbowpie_equip": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 기준점(어디에서 시작할지)
              "anchor_from": "bottom_left",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "bottom_left",
              // 가로/세로 크기
              "size": [ 29, 32 ],
              // 기준점에서 이동하는 거리
              "offset": [ 0, -2 ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "background@rainbowpie_ui_inventory.header_background": {
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "equip_icon@horse_pocket.saddle_icon_front": {}
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
  "visual_tabs_chest/close_tab": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "visual_tabs_chest/chest": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "visual_tabs_chest/equip": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "renderer_bg": {
    // 사용할 이미지 경로
    "texture": "textures/ui/Black",
    // ???
    "alpha": 0.4
  },

  // ???/?? ??
  "equip_item_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "base_grid_panel/panel_outline": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "base_grid_panel/dark_bg": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_content_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_content_background_alpha"
  },

  // ???/?? ??
  "base_grid_panel/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "horse_panel/base_panel/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  }
}
```








### 기본
host_options_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: host_options_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "host_options",

  // ???/?? ??
  "host_panel": {
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
            "advanced_host_time_tweaker@rainbowpieui_host_options.independent_advanced_host_time_tweaker": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "command_helper@rainbowpieui_host_options.independent_command_helper": { }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "color_picker@rainbowpieui_host_options.color_picker": { }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "host_time_buttons/sub_tab": {
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
            "time_grid@scrolling_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_host_options_advanced)",
              // 기준점에서 이동하는 거리
              "offset": "$offset_sub_tabs",
              // 오버라이드 가능한 변수
              "$main_scrolling_content": "rainbowpieui_host_options.host_time_panel"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "advanced_host_time_tweaker@rainbowpieui_host_options.host_options_advanced_host_time_tweaker": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "host_time_buttons/sub_tab/scrolli_scrolli_ravioli": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_host_options_advanced"
  },

  // ???/?? ??
  "host_weather_buttons/sub_tab": {
    // 가로/세로 크기
    "size": [ "100%", "90px" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_left",
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
            "weather_grid@scrolling_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_host_options_advanced)",
              // 기준점에서 이동하는 거리
              "offset": "$offset_sub_tabs",
              // 오버라이드 가능한 변수
              "$main_scrolling_content": "rainbowpieui_host_options.host_weather_panel"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "host_weather_buttons/sub_tab/host_main_grid": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_host_options_advanced"
  },

  // ???/?? ??
  "host_teleport_player_list_buttons": {
    // 가로/세로 크기
    "size": "$panel_size",
    // 오버라이드 가능한 변수
    "$panel_size": [ "default", "default" ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_host_options_advanced"
      }
    ]
  },

  // ???/?? ??
  "host_teleport_player_list_buttons/toggle": {
    // 가로/세로 크기
    "size": "$inner_panel_size",
    // 오버라이드 가능한 변수
    "$inner_panel_size": [ "100%", "90px" ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_host_options_advanced",
        // 오버라이드 가능한 변수
        "$inner_panel_size": [ "100%", "210px" ]
      }
    ]
  },

  // ???/?? ??
  "host_friends_tab": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "advanced_host_friends_tab@rainbowpieui_host_options.advanced_host_friends_tab": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "player_pic_panel/player_gamer_pic": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "player_pic_panel": {
    // 가로/세로 크기
    "size": [ "100%y", "100%" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "player_button_content": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "player_pic_panel",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "padding_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 5, 0 ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "host_sub_command_grid_item/host_option_banner": {
    // 오버라이드 가능한 변수
    "$glyph_size": [ "100%y", "100%" ],
    // 오버라이드 가능한 변수
    "$button_content_offset_glyph": [ 0, 0 ]
  },

  // ???/?? ??
  "button_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "host_teleport_grid_item/host_option_toggle": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
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
    "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked"
  },

  // ???/?? ??
  "scrollable_selector_area": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true
  },

  // ???/?? ??
  "scrolling_panel": {
    // 오버라이드 가능한 변수
    "$main_offset_scrollable_panel|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$main_size_scrollable_panel|default": [ "100% - 2px", "100%" ]
  },

  // ???/?? ??
  "scrolling_panel/background": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "main_light_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "main_dark_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  }
}
```








### 기본
how_to_play_common.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: how_to_play_common.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "how_to_play_common",

  // ???/?? ??
  "glyph_button_control/tab_button_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "dynamic_dialog_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "how_to_play",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_how_to_play.how_to_play_content"
  },

  // ???/?? ??
  "header_background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_title_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_title_background_alpha"
  },

  // ???/?? ??
  "header_background/header_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_title_text_color"
  },

  // ???/?? ??
  "paragraph_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_global_text_color"
  },

  // ???/?? ??
  "action_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_size": [ "100% - 20px", "default" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_alignment": "left",
    // 가로/세로 크기
    "size": [ "100%", 28 ]
  },

  // ???/?? ??
  "topic_category": {
    // 가로/세로 크기
    "size": [ "100%", 16 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "list_title@rainbowpie_ui_common.title_background": {
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
                      "text": "('howtoplay.category.' + $category)",
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
  "section_toggle_button": {
    // 가로/세로 크기
    "size": [ "100%", "25px" ]
  },

  // ???/?? ??
  "section_toggle_button/section_toggle_button": {
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
  "toggle_button_control/tab_button_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  }
}
```








### 기본
how_to_play_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: how_to_play_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "how_to_play",

  // ???/?? ??
  "how_to_play_selector_stack_panel/how_to_play_selector_pane/padding_1": {
    // 가로/세로 크기
    "size": [ 0, 1 ]
  }
}
```








### 기본
hud_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "hud",

  // ???/?? ??
  "hud_title_text": {
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
            "requires": "$rainbowpie_ui_flag_a3e3c9d0",
            // 오버라이드 가능한 변수
            "$title_alpha": 0.0,
            // 오버라이드 가능한 변수
            "$title_shadow": true
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "root_panel/centered_gui_elements_at_bottom_middle_touch": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "boss_health_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "boss_name_panel@rainbowpieui_hud.boss_name_panel": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "boss_health_panel/boss_name": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_75ad0b10"
  },

  // ???/?? ??
  "exp_progress_bar_and_hotbar_pocket/item_text/item_text_factory": {
    // ???/?? ??
    "factory_variables": [
      "$rainbowpie_ui_theme_global_font_name",
      "$rainbowpie_ui_theme_global_font_backup_name",
      "$rainbowpie_ui_flag_huditemname_default_font"
    ]
  },

  // ???/?? ??
  "exp_progress_bar_and_hotbar/item_text_factory": {
    // ???/?? ??
    "factory_variables": [
      "$rainbowpie_ui_theme_global_font_name",
      "$rainbowpie_ui_theme_global_font_backup_name",
      "$rainbowpie_ui_flag_huditemname_default_font"
    ]
  },

  // ???/?? ??
  "root_panel/hud_title_text_area": {
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "hud_title_text_factory",
      // 팩토리 템플릿 매핑
      "control_ids": {
        // ??? ?? ?
        "hud_title_text": "hud_title_text@hud.hud_title_text"
      },
      // ???/?? ??
      "factory_variables": [
        "$rainbowpie_ui_theme_global_font_name",
        "$rainbowpie_ui_theme_global_font_backup_name",
        "$rainbowpie_ui_flag_hudtitle_default_font"
      ]
    }
  },

  // ???/?? ??
  "root_panel/hud_actionbar_text_area": {
    // 목록 아이템을 자동으로 생성
    "factory": {
      // ?? ??
      "name": "hud_actionbar_text_factory",
      // 팩토리 템플릿 매핑
      "control_ids": {
        // ??? ?? ?
        "hud_actionbar_text": "hud_actionbar_text@hud.hud_actionbar_text"
      },
      // ???/?? ??
      "factory_variables": [
        "$rainbowpie_ui_theme_global_font_name",
        "$rainbowpie_ui_theme_global_font_backup_name",
        "$rainbowpie_ui_flag_hudtitle_default_font"
      ]
    }
  },

  // ???/?? ??
  "root_panel/hud_tip_text_factory": {
    // ???/?? ??
    "factory_variables": [
      "$rainbowpie_ui_theme_global_font_name",
      "$rainbowpie_ui_theme_global_font_backup_name",
      "$rainbowpie_ui_flag_hudtitle_default_font"
    ]
  },

  // ???/?? ??
  "vignette_renderer": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "root_panel/layout_customization_close_without_saving/layout_customization_close_without_saving_modal": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "root_panel/layout_customization_close_without_saving": {
    // ???
    "alpha": 0.3,
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "rainbowpie_layout_customization_close_without_saving@rainbowpieui_hud.layout_customization_close_without_saving": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "root_panel/layout_customization_reset/layout_customization_reset_modal": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "root_panel/layout_customization_reset": {
    // ???
    "alpha": 0.3,
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "rainbowpie_layout_customization_reset_modal@rainbowpieui_hud.layout_customization_reset_modal": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "layout_customization_option_content/apply_to_all_toggle/caption_frame/caption": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 3
  },

  // ???/?? ??
  "layout_customization_option_slider/slider": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_sliderbar_enabled": true
  },

  // ???/?? ??
  "layout_customization_sub_panel/background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "layout_customization_sub_panel": {
    // 보이기/숨기기(공간 유지)
    "visible": false
  },

  // ???/?? ??
  "root_panel/layout_customization_hint_drag_frame": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // 가로/세로 크기
    "size": [ "100%c + 12px", "100%c + 5px" ],
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "root_panel/layout_customization_hint_drag_frame/layout_customization_hint_drag": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "root_panel/layout_customization_hint_deselect_frame": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // 가로/세로 크기
    "size": [ "100%c + 12px", "100%c + 5px" ],
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "root_panel/layout_customization_hint_deselect_frame/layout_customization_hint_deselect": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "root_panel/layout_customization_hint_saved": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // 가로/세로 크기
    "size": [ "100%c + 12px", "100%c + 5px" ],
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "root_panel/layout_customization_hint_saved/layout_customization_hint_saved": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "layout_customization_main_panel_button/button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "layout_customization_main_panel/main_panel_frame": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "boss_name_panel": {
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
            "requires": "$rainbowpie_ui_flag_hudbossname_default_font",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_name": "default",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_backup_name": "default"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "boss_name_panel/boss_name": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "hud_actionbar_text": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_black')",
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
            "requires": "$rainbowpie_ui_flag_hudtitle_default_font",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_name": "default",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_backup_name": "default"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "hud_actionbar_text/actionbar_message": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "hud_tip_text": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_black')",
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
            "requires": "$rainbowpie_ui_flag_hudtitle_default_font",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_name": "default",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_backup_name": "default"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "hud_tip_text/item_text_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "anim_item_name_background_alpha_out": {
    // 시작 값
    "from": "$rainbowpie_ui_theme_hud_itemname_background_alpha"
  },

  // ???/?? ??
  "anim_item_name_background_alpha_in": {
    // 끝 값
    "to": "$rainbowpie_ui_theme_hud_itemname_background_alpha"
  },

  // ???/?? ??
  "item_name_text_root/item_text_aligner/item_text_control/item_text_background": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_home + '/r_white')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_hud_itemname_background_color",
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
            "requires": "$rainbowpie_ui_flag_huditemname_default_font",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_name": "default",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_backup_name": "default"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "item_name_text_root/item_text_aligner/item_text_control/item_text_label": {
    // ?? ?? ?
    "max_size": [ 200, 100 ],
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_hud_itemname_text_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? ??
    "shadow": false
  },

  // ???/?? ??
  "hud_player_renderer/hud_player": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_0ffd0593)"
  },

  // ???/?? ??
  "hud_player_renderer": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "live_player_renderer@rainbowpieui_hud.live_player_renderer": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "player_position": {
    // Ignore player_position when using HotbarMode 2
    "ignored": "(not $rainbowpie_ui_flag_disable_custom_chat_ui and (($rainbowpie_ui_flag_hud_hotbar_mode = 2) or (not $touch) or $rainbowpie_ui_flag_6d2ac350))"
  },

  // ???/?? ??
  "number_of_days_played": {
    // Ignore number_of_days_played when using HotbarMode 2
    "ignored": "(not $rainbowpie_ui_flag_disable_custom_chat_ui and (($rainbowpie_ui_flag_hud_hotbar_mode = 2) or (not $touch) or $rainbowpie_ui_flag_6d2ac350))"
  },

  // ???/?? ??
  "chat_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_disable_custom_chat_ui and ((not $touch) or $rainbowpie_ui_flag_6d2ac350))"
  },

  // ???/?? ??
  "exp_progress_bar_and_hotbar/resizing_xp_bar_with_hotbar": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not ($rainbowpie_ui_flag_hud_hotbar_mode = 0))"
  },

  // ???/?? ??
  "hotbar_chooser": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not ($rainbowpie_ui_flag_hud_hotbar_mode = 0))"
  },

  // ???/?? ??
  "exp_progress_bar_and_hotbar/resizing_hotbar_locator_bar": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not ($rainbowpie_ui_flag_hud_hotbar_mode = 0))"
  },

  // ???/?? ??
  "root_panel": {
    // ????? ?? ?
    "animation_reset_name": "screen_animation_reset",
    // 애니메이션 목록
    "anims": [
      "@rainbowpieui_hud.hud_root_panel_back_animation",
      "@rainbowpieui_hud.hud_root_panel_back_animation_pop",
      "@rainbowpieui_hud.hud_root_panel_animation",
      "@rainbowpieui_hud.hud_root_panel_animation_pop"
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
          { "rainbowpie_root_panel@rainbowpieui_hud.rainbowpie_root_panel": {} }
        ]
      },
      {
        // ??? ???
        "control_name": "centered_gui_elements_at_bottom_middle_touch",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "centered_gui_elements_at_bottom_middle_touch2@centered_gui_elements_at_bottom_middle": {
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "#hud_visible_centered_touch",
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
    ]
  },

  // ???/?? ??
  "hud_content": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "rainbowpie_hud_panel@rainbowpieui_hud.rainbowpie_hud_panel": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "hud_screen": {
    // 오버라이드 가능한 변수
    "$use_loading_bars": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_watermark": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "hud"
  }
}
```








### 기본
in_bed_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: in_bed_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "bed",

  // ???/?? ??
  "in_bed_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "bed",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_bed.in_bed_screen_content"
  },

  // ???/?? ??
  "in_bed_screen_content/wake_up_button_panel/wake_up_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button"
  },

  // ???/?? ??
  "in_bed_screen_content/wake_up_button_panel/chat_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button"
  },

  // ???/?? ??
  "in_bed_screen_content/wake_up_label_panel": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  }
}
```








### 기본
inventory_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: inventory_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "crafting",

  // ???/?? ??
  "tab_content/tab_content_search_bar_panel/vertical_padding_2": {
    // 가로/세로 크기
    "size": [ 0, 2 ]
  },

  // ???/?? ??
  "tab_content/tab_content_search_bar_panel/vertical_padding_3": {
    // 가로/세로 크기
    "size": [ 0, 1 ]
  },

  // ???/?? ??
  "tab_content/tab_content_search_bar_panel/search_and_filter_panel": {
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ???/??? ?
      "#toggle_state": true
    },
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#is_left_tab_search"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "show_search_box_vanilla",
        // 계산식/참조 값
        "source_property_name": "#toggle_state",
        // 결과가 들어갈 속성
        "target_property_name": "#toggle_state",
        // 완전히 제거(공간도 없음)
        "ignored": "($search_button_ignored or (not $rainbowpie_ui_flag_ef158e0f))"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#is_left_tab_search and #toggle_state)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  // ???/?? ??
  "tab_content/tab_content_search_bar_panel": {
    // 가로/세로 크기
    "size": [ "100% - 6px", "100% - 6px" ],
    // 오버라이드 가능한 변수
    "$search_button_ignored|default": true,
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "search_and_filter_panel",
        // ?? ??
        "operation": "insert_before",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "search_and_filter_button_panel": {
              // 줄맞춤 컨테이너: 가로/세로로 자동 배치
              "type": "stack_panel",
              // 쌓는 방향(가로/세로)
              "orientation": "horizontal",
              // 가로/세로 크기
              "size": [ "100% + 1px", 16 ],
              // 겹치는 순서(숫자 클수록 위)
              "layer": 2,
              // 오버라이드 가능한 변수
              "$focus_id": "recipe_search_bar",
              // 오버라이드 가능한 변수
              "$focus_override_right": "craftable_toggle",
              // 오버라이드 가능한 변수
              "$focus_override_up": "construction_tab",
              // 완전히 제거(공간도 없음)
              "ignored": "($search_button_ignored or (not $rainbowpie_ui_flag_ef158e0f))",
              // 보이기/숨기기(공간 유지)
              "visible": true,
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 가져올 값 이름
                  "binding_name": "#is_left_tab_search"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // ?? ??
                  "source_control_name": "show_search_box_vanilla",
                  // 계산식/참조 값
                  "source_property_name": "#toggle_state",
                  // 결과가 들어갈 속성
                  "target_property_name": "#toggle_state"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // 계산식/참조 값
                  "source_property_name": "(#is_left_tab_search and (not #toggle_state))",
                  // 결과가 들어갈 속성
                  "target_property_name": "#visible"
                }
              ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "search_button@rainbowpieui_crafting.vanilla_search_button_toggle_base": {
                    // 오버라이드 가능한 변수
                    "$button_image_size": [ "100%", "100% - 2px" ],
                    // 가로/세로 크기
                    "size": [ "fill", "100%" ],
                    // 오버라이드 가능한 변수
                    "$toggle_group_forced_index": 1000,
                    // 오버라이드 가능한 변수
                    "$toggle_view_binding_name": "show_search_box_vanilla",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 10
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
                  // ???/?? ??
                  "filter_toggle_holder": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ "100%c", "100%" ],

                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                      {
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
                        "filter_toggle@crafting.filter_toggle": {
                          // 기준점에서 이동하는 거리
                          "offset": [ 1, 0 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "right_middle",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "right_middle",

                          // 오버라이드 가능한 변수
                          "$focus_id": "craftable_toggle",
                          // 오버라이드 가능한 변수
                          "$focus_override_left": "recipe_search_bar",
                          // 오버라이드 가능한 변수
                          "$default_border_visible": false,
                          // 오버라이드 가능한 변수
                          "$hover_border_visible": false
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
  "recipe_inventory_screen_content": {
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
            "crafting_helper_controller@rainbowpieui_crafting.crafting_helper_controller": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "compass_panel@rainbowpieui_crafting.compass_panel": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "player_inventory": {
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
            "inventory_actions_inventory@rainbowpie_module_inventory_actions.inventory_actions_inventory": {
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "recipe_inventory_screen_content/content_stack_panel/recipe_book": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 게임이 주는 전역 값 연결
        "binding_type": "global",
        // 가져올 값 이름
        "binding_name": "#is_survival_layout"
      },
      {
        // 게임이 주는 전역 값 연결
        "binding_type": "global",
        // 가져올 값 이름
        "binding_name": "#is_recipe_book_layout"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not #is_survival_layout and not #is_recipe_book_layout)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible",
        // 완전히 제거(공간도 없음)
        "ignored": "(not $rainbowpie_ui_flag_72873fec)"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not #is_survival_layout)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible",
        // 완전히 제거(공간도 없음)
        "ignored": "$rainbowpie_ui_flag_72873fec"
      }
    ]
  },

  // ???/?? ??
  "recipe_inventory_screen_content/content_stack_panel": {
    // 가로/세로 크기
    "size": "$inventory_screen_size",
    // 오버라이드 가능한 변수
    "$inventory_screen_size": [ 326, 166 ],
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "player_inventory",
        // ?? ??
        "operation": "insert_before",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "recipe_book_animated": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ "150px", "100%" ],
              // 애니메이션 목록
              "anims": [
                "@rainbowpieui_crafting.recipe_book_exit_animation_push",
                "@rainbowpieui_crafting.recipe_book_exit_animation_pop",
                "@rainbowpieui_crafting.recipe_book_entrance_animation_push",
                "@rainbowpieui_crafting.recipe_book_entrance_animation_pop"
              ],
              // ????? ?? ?
              "animation_reset_name": "screen_animation_reset",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_72873fec)",
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 게임이 주는 전역 값 연결
                  "binding_type": "global",
                  // 가져올 값 이름
                  "binding_name": "#is_recipe_book_layout",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible"
                }
              ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "recipe_book@crafting.recipe_book": {
                    // 오버라이드 가능한 변수
                    "$search_button_ignored": false,
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "right_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 가로/세로 크기
                    "size": [ "146px", "100%" ],
                    // 기준점에서 이동하는 거리
                    "offset": [ -8, 0 ]
                  }
                }
              ]
            }
          },
          {
            // ???/?? ??
            "center_padding": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492 or $rainbowpie_ui_flag_72873fec)",
              // 가로/세로 크기
              "size": [ 4, 0 ],
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 게임이 주는 전역 값 연결
                  "binding_type": "global",
                  // 가져올 값 이름
                  "binding_name": "#is_recipe_book_layout",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible"
                }
              ]
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "player_inventory_root_panel@rainbowpieui_crafting.player_inventory": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492 or $rainbowpie_ui_flag_72873fec)",
              // 오버라이드 가능한 변수
              "$animation_ignored": true,
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_search_ignored": true,
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 게임이 주는 전역 값 연결
                  "binding_type": "global",
                  // 가져올 값 이름
                  "binding_name": "#is_recipe_book_layout",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible"
                }
              ]
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "player_inventory_root_panel_animated@rainbowpieui_crafting.player_inventory": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)",
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 게임이 주는 전역 값 연결
                  "binding_type": "global",
                  // 가져올 값 이름
                  "binding_name": "#is_recipe_book_layout"
                },
                {
                  // 게임이 주는 전역 값 연결
                  "binding_type": "global",
                  // 가져올 값 이름
                  "binding_name": "#is_survival_layout"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // 계산식/참조 값
                  "source_property_name": "(#is_survival_layout or #is_recipe_book_layout)",
                  // 결과가 들어갈 속성
                  "target_property_name": "#visible",
                  // 완전히 제거(공간도 없음)
                  "ignored": "(not $rainbowpie_ui_flag_72873fec)"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // 계산식/참조 값
                  "source_property_name": "(#is_survival_layout)",
                  // 결과가 들어갈 속성
                  "target_property_name": "#visible",
                  // 완전히 제거(공간도 없음)
                  "ignored": "$rainbowpie_ui_flag_72873fec"
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
        "operation": "insert_front",
        // ??? ?
        "value": [
          {
            // 이 조건이 맞으면 적용
            "requires": "$rainbowpie_ui_flag_84df7492",
            // 오버라이드 가능한 변수
            "$inventory_screen_size": [ 326, 156 ]
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "recipe_inventory_screen_content/content_stack_panel/player_inventory": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "survival_panel_top_half": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "armor_durability_panel@rainbowpieui_crafting.armor_durability_panel": {} }
        ]
      }
    ]
  },

  // ???/?? ??
  "work_bench_panel_3x3/inventory_label": {
    // 기준점에서 이동하는 거리
    "offset": [ -21, 74 ]
  },

  // ???/?? ??
  "inventory_container_item/item_cell/item/stack_count_label": {
  },

  // ???/?? ??
  "creative_hotbar_panel/creative_hotbar_background": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 5 ],
    // 가로/세로 크기
    "size": [ "100%c + 6px", "100%c + 3px" ],
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_background_alpha"
  },

  // ???/?? ??
  "creative_hotbar_panel/creative_hotbar_background/hotbar_grid": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, -3 ],
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },


  // ???/?? ??
  "layout_toggle_content/icon": {
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center"
  },

  // ???/?? ??
  "recipe_inventory_screen_content/content_stack_panel/toolbar_anchor": {
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
            "rainbowpie_toolbar": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ "100%c", 23 ],
              // 기준점(어디에서 시작할지)
              "anchor_from": "top_right",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "bottom_right",
              // 게임 값과 연결하는 규칙 목록
              "bindings": [
                {
                  // 게임이 주는 전역 값 연결
                  "binding_type": "global",
                  // 가져올 값 이름
                  "binding_name": "#is_creative_layout",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#visible",
                  // 완전히 제거(공간도 없음)
                  "ignored": "(not $rainbowpie_ui_flag_84df7492)"
                }
              ],
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
                    // 기준점에서 이동하는 거리
                    "offset": [ 0, 0 ],
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
                                "size": [ 25, "100%" ],
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
                          "size": [ 25, "100%" ],
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
                                "size": [ 25, "100%" ],
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
                                "size": [ 25, "100%" ],
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
                                "size": [ 25, "100%" ],
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
                              "button_stack_panel": {
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
                      },
                      {
                        // ???/?? ??
                        "right_trigger_anchor": {
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
                              "gamepad_helper_right_trigger@common.gamepad_helper_right_trigger": {
                                // 기준점에서 이동하는 거리
                                "offset": [ -2, -2 ],
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
    ]
  },

  // ???/?? ??
  "recipe_inventory_screen_content/content_stack_panel/toolbar_anchor/toolbar_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "crafting_arrow": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "crafting_arrow_large": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "player_armor_panel/offhand_grid": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "player_armor_panel/armor_grid": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "player_armor_panel/player_bg": {
    // 가로/세로 크기
    "size": [ 54, 72 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 25, 7 ],
    // ???
    "alpha": 0.4
  },

  // ???/?? ??
  "player_armor_panel/player_preview_border": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "tab_content/tab_content_search_bar_panel/search_and_filter_panel/text_edit_control": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_editbox_enabled": true
  },

  // ???/?? ??
  "grid_item_for_recipe_book": {
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
            "$background_images": "rainbowpieui_crafting.recipe_cell_panel"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "recipe_container_cell_images": {
    // ???
    "alpha": 0.4,
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#container_item_background_texture",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "$item_collection_name",
        // ?? ???
        "binding_condition": "$cell_images_binding_condition"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#container_item_background_texture - 'textures/ui/')",
        // 결과가 들어갈 속성
        "target_property_name": "#container_item_background_texture_filename"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(($rainbowpie_ui_path_overrides + '/ui/') + #container_item_background_texture_filename)",
        // 결과가 들어갈 속성
        "target_property_name": "#texture"
      }
    ]
  },

  // ???/?? ??
  "cell_image_classic": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "cell_image_normal": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "cell_image_invert": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "cell_image_red": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_red_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_red_alpha"
  },

  // ???/?? ??
  "cell_image_selected": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_highlight_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_highlight_alpha"
  },

  // ???/?? ??
  "cell_image_darkgrey": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "inventory_container_item": {
  },

  // ???/?? ??
  "scroll_panel": {
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image"
  },

  // ???/?? ??
  "recipe_book_scroll_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true
  },

  // ???/?? ??
  "creative_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "crafting_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "inventory_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "top_tab": {
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_image_size": [ "100%", "100% - 4px" ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor": "top_middle",
    // 오버라이드 가능한 변수
    "$tab_content_size": [ "100% - 4px", "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset": [ 0, 2 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor": "top_middle",
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
  "recipe_book/tab_navigation_panel": {
  },

  // ???/?? ??
  "center_fold/center_bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "player_inventory/common_panel": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  },

  // ???/?? ??
  "recipe_book/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  }
}
```








### 기본
inventory_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: inventory_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "crafting_pocket",

  // ???/?? ??
  "crafting_arrow_down": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_down')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "scroll_panel_pocket": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true
  },

  // ???/?? ??
  "right_tab_navigation_panel_pocket/content": {
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
  "right_tab_navigation_panel_pocket/content/close": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "pocket_armor_tab_content/label_and_renderer/label_panel/armor_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "pocket_armor_tab_content/label_and_renderer/renderer_panel": {
  },

  // ???/?? ??
  "pocket_armor_tab_content/equipment_and_renderer/armor_panel/armor_and_player/player_preview_border/player_bg": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ???
    "alpha": 0.4
  },

  // ???/?? ??
  "pocket_armor_tab_content/equipment_and_renderer/armor_panel/armor_and_player/player_preview_border": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "pocket_armor_tab_content/equipment_and_renderer/equipment/offhand_grid": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "pocket_armor_tab_content/equipment_and_renderer/equipment/armor_grid": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "hotbar_panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_tab_content/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true,
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  },

  // ???/?? ??
  "right_tab": {
    // 오버라이드 가능한 변수
    "$checked_bar_anchor": "right",
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_image_size": [ "100% - 4px", "100%" ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor": "right_middle",
    // 오버라이드 가능한 변수
    "$tab_content_size": [ "100% - 4px", "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor": "right_middle",
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
  "right_panel/right_background": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  },

  // ???/?? ??
  "both_panels/offset_panel/center_bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "left_tab": {
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
  "left_panel/left_background": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  }
}
```








### 기본
invite_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: invite_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "invite",

  // Fix layout on v1.21.44
  "online_xbox_live_friend_list_grid": {
    // ??? ?? ?
    "grid_item_template": "invite.online_xbox_live_friend_grid_item"
  },

  // ???/?? ??
  "offline_xbox_live_friend_list_grid": {
    // ??? ?? ?
    "grid_item_template": "invite.offline_xbox_live_friend_grid_item"
  },

  // ???/?? ??
  "online_platform_friend_list_grid": {
    // ??? ?? ?
    "grid_item_template": "invite.online_platform_friend_grid_item"
  },

  // ???/?? ??
  "offline_platform_friend_list_grid": {
    // ??? ?? ?
    "grid_item_template": "invite.offline_platform_friend_grid_item"
  },

  // ???/?? ??
  "online_linked_account_friend_list_grid": {
    // ??? ?? ?
    "grid_item_template": "invite.online_linked_account_friend_grid_item"
  },

  // ???/?? ??
  "offline_linked_account_friend_list_grid": {
    // ??? ?? ?
    "grid_item_template": "invite.offline_linked_account_friend_grid_item"
  },

  // ???/?? ??
  "msa_friend_button_layout/friend_grid_label_layout/spacer_01": {
    // 가로/세로 크기
    "size": [ "100%", 1.5 ]
  },

  // ???/?? ??
  "msa_friend_button_layout/spacer_02": {
    // 가로/세로 크기
    "size": [ 5, "100%" ]
  },

  // ???/?? ??
  "msa_friend_button_layout/spacer01": {
    // 가로/세로 크기
    "size": [ 23, "100%" ]
  },

  // ???/?? ??
  "gamerpic_panel": {
    // 가로/세로 크기
    "size": [ "100%y", "100%" ]
  },

  // ???/?? ??
  "gamerpic_panel/gamerpic": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "template_msa_friend_button_layout": {
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
            "friend_background_hover@invite.friend_background_hover": {
              // 보이기/숨기기(공간 유지)
              "visible": "(($check_state_panel = 'invite.checked_hover_panel') or ($check_state_panel = 'invite.unchecked_hover_panel'))"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "template_platform_friend_button_layout": {
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
            "friend_background_hover@invite.friend_background_hover": {
              // 보이기/숨기기(공간 유지)
              "visible": "(($check_state_panel = 'invite.checked_hover_panel') or ($check_state_panel = 'invite.unchecked_hover_panel'))"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "template_linked_friend_button_layout": {
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
            "friend_background_hover@invite.friend_background_hover": {
              // 보이기/숨기기(공간 유지)
              "visible": "(($check_state_panel = 'invite.checked_hover_panel') or ($check_state_panel = 'invite.unchecked_hover_panel'))"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "template_msa_friend_button_layout/friend_background": {
    // 완전히 제거(공간도 없음)
    "ignored": "(($check_state_panel = 'invite.checked_hover_panel') or ($check_state_panel = 'invite.unchecked_hover_panel'))"
  },

  // ???/?? ??
  "template_platform_friend_button_layout/friend_background": {
    // 완전히 제거(공간도 없음)
    "ignored": "(($check_state_panel = 'invite.checked_hover_panel') or ($check_state_panel = 'invite.unchecked_hover_panel'))"
  },

  // ???/?? ??
  "template_linked_friend_button_layout/friend_background": {
    // 완전히 제거(공간도 없음)
    "ignored": "(($check_state_panel = 'invite.checked_hover_panel') or ($check_state_panel = 'invite.unchecked_hover_panel'))"
  },

  // ???/?? ??
  "black_border": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "black_border_hover": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_button_background_hover_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_button_background_hover_alpha"
  },

  // ???/?? ??
  "frame_label": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "label": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "friends_pagination_controls/center_panel/page_counter": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "friend_label": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "panel_text": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "invite_button_content/button_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "invite_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "invite",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_invite.invite_screen_content"
  }
}
```








### 기본
loom_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: loom_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "loom",

  // ???/?? ??
  "arrow_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "pattern_book_panel/scroll_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 가로/세로 크기
    "size": [ "100% - 13px", "100% - 11px" ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -5 ]
  },

  // ???/?? ??
  "pattern_book_panel/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -2 ],
    // 가로/세로 크기
    "size": [ "100% - 8px", "100% - 5px" ]
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
  "loom_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "top_half_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 25 ]
  },

  // ???/?? ??
  "right_panel/loom_screen_inventory/loom_label": {
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
  "right_panel/loom_screen_inventory": {
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
              "$rainbowpie_localui_inventoryheader_title": "container.loom"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
loom_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: loom_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "loom_pocket",

  // ???/?? ??
  "right_navigation_tabs/pocket_tab_close_and_help_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_navigation_tabs/fill": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_navigation_tabs/right_tab_loom": {
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
  "pattern_scroll_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image"
  },

  // ???/?? ??
  "loom_content_stack_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
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
  "right_tab_loom": {
    // 오버라이드 가능한 변수
    "$checked_bar_anchor": "right",
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_image_size": [ "100% - 4px", "100%" ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor": "right_middle",
    // 오버라이드 가능한 변수
    "$tab_content_size": [ "100% - 4px", "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor": "right_middle",
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
  "right_panel/content/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  },

  // ???/?? ??
  "left_tab_patterns": {
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
manifest_validation_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: manifest_validation_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "manifest_validation",

  // ???/?? ??
  "manifest_validation_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_blur": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "manifest_validation",
    // ?? ??
    "force_render_below": false,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_manifest_validation.manifest_validation_screen_content"
  }
}
```








### 기본
mob_effect_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: mob_effect_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "mob_effect",

  // ???/?? ??
  "mob_effect_screen": {
    // ?? ??
    "close_on_player_hurt": false
  }
}
```








### 기본
npc_interact_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: npc_interact_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "npc_interact",

  // ???/?? ??
  "npc_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "npc_interact",
    // ?? ??
    "force_render_below": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_npc_interact.npc_screen_contents",
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

  // ???/?? ??
  "basic_stack_panel/name_label": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_dialog_content_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "basic_stack_panel/appearance_label": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_dialog_content_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "npc_message/label": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_dialog_content_color",
    // ?? ?? ?
    "locked_color": "$rainbowpie_ui_theme_dialog_content_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "student_message_bubble": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "student_message_section/point": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "message_model/model": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 15 ]
  },

  // ???/?? ??
  "message_model_window": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "student_button_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "student_button/button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 오버라이드 가능한 변수
    "$button_content": "npc_interact.student_button_label_panel"
  },

  // ???/?? ??
  "basic_stack_panel/dialog_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "basic_stack_panel/dialog_post_padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "basic_stack_panel/dialog__padding": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "basic_stack_panel/dialog_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  }
}
```








### 기본
online_safety_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: online_safety_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "online_safety",

  // ???/?? ??
  "ip_safety_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "ip_safety",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_background_animations": [
      "@rainbowpieui_online_safety.exit_animation_push",
      "@rainbowpieui_online_safety.exit_animation_pop"
    ],
    // 오버라이드 가능한 변수
    "$screen_animations": [
      "@rainbowpieui_online_safety.exit_animation_push",
      "@rainbowpieui_online_safety.exit_animation_pop"
    ],
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "button.back",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_ok",
        // 어떤 동작을 실행할지
        "to_button_id": "button.proceed",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      }
    ],
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_online_safety.ip_safety_screen_content",
    // 오버라이드 가능한 변수
    "$text_name": "onlinePlay.untrustedIp.title",
    // 오버라이드 가능한 변수
    "$description_text": "onlinePlay.untrustedIp.message"
  },

  // ???/?? ??
  "do_not_show_checkbox/header_description_stack_panel/checkbox_visuals": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "do_not_show_checkbox/header_description_stack_panel/buffer_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "do_not_show_checkbox/header_description_stack_panel/another_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "online_safety_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingame": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "online_safety",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_background_animations": [
      "@rainbowpieui_online_safety.exit_animation_push",
      "@rainbowpieui_online_safety.exit_animation_pop"
    ],
    // 오버라이드 가능한 변수
    "$screen_animations": [
      "@rainbowpieui_online_safety.exit_animation_push",
      "@rainbowpieui_online_safety.exit_animation_pop"
    ],
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_cancel",
        // 어떤 동작을 실행할지
        "to_button_id": "button.back",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_ok",
        // 어떤 동작을 실행할지
        "to_button_id": "button.proceed",
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      }
    ],
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_online_safety.online_safety_screen_content"
  }
}
```








### 기본
pack_settings_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: pack_settings_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "pack_settings",

  // ???/?? ??
  "pack_scroll_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "rainbowpieui_pack_settings.scrolling_content"
  },

  // ???/?? ??
  "content_tiering_panel/slider_panel/content_tier_slider": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_sliderbar_enabled": true,
    // 가로/세로 크기
    "size": [ "100% - 10px", 10 ]
  },

  // ???/?? ??
  "content_tiering_panel/label_panel/content_tier_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 2 ]
  },

  // ???/?? ??
  "content_tiering_panel/label_panel/unsupported_content_tier_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 2 ]
  },

  // ???/?? ??
  "content_tiering_panel/incompatible_label_panel/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // 가로/세로 크기
    "size": [ "100%", "default" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, -2 ]
  },

  // ???/?? ??
  "scrolling_content/generated_form": {
  },

  // ??? ??
  "scrolling_content": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_blur": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "pack_settings",
    // ?? ??
    "force_render_below": false,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_pack_settings.main_screen_content"
  }
}
```








### 기본
pause_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: pause_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "pause",

  // ???/?? ??
  "quit_button": {
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
            "requires": "$is_on_3p_server",
            // 오버라이드 가능한 변수
            "$button_text": "menu.disconnect"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "pause_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_watermark": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "pause",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen_content": "rainbowpieui_pause.pause_screen_content",
    // ?? ??
    "force_render_below": true
  },

  // ???/?? ??
  "player_gamertag": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$text_color"
  },

  // ???/?? ??
  "player_button_content/player_pic_panel": {
    // 가로/세로 크기
    "size": [ 24, "100%" ]
  },

  // ???/?? ??
  "player_gamer_pic": {
    // 가로/세로 크기
    "size": [ 20, 20 ]
  },

  // ???/?? ??
  "player_gamer_pic/player_panel_black_border": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "player_button_content": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "player_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 목록 인덱스/현재 항목 정보 제공
        "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "players_collection"
      }
    ]
  },

  // ???/?? ??
  "player_permission_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
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
            // 가져올 값 이름
            "binding_name": "#permissions_button_visible",
            // 가져온 값을 다른 속성으로 연결
            "binding_name_override": "#enabled"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "player_grid_item_content/player_button_panel/player_permission_button_padding": {
    // 가로/세로 크기
    "size": [ 29, "100%" ],
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "remove",
        // ???/?? ??
        "where": {
          // 가져올 값 이름
          "binding_name": "#permissions_button_visible"
        }
      }
    ]
  },

  // ???/?? ??
  "player_grid_item_content/player_button_panel/player_button_banner/player_banner": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "player_grid_item_content/player_button_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "player_grid_item_content/player_permission_button_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "bindings",
        // ?? ??
        "operation": "remove",
        // ???/?? ??
        "where": {
          // 가져올 값 이름
          "binding_name": "#permissions_button_visible"
        }
      }
    ]
  }
}
```








### 기본
pdp_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: pdp_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "pdp",

  // ???/?? ??
  "price_panel/offer_prompt_panel/offer_status_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_inner_panel/description_stack_panel/languages_panel/label_text_panel/label_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel/note_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel/player_count_button_panel/player_count_range_panel/player_count_range_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_inner_panel/description_stack_panel/players_panel/label_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_inner_panel/description_stack_panel/genre_panel/text_panel/text_stack_panel/slash_divider": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_inner_panel/description_stack_panel/genre_panel/label_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_inner_panel/description_stack_panel/tags_panel/label_text_panel/label_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_inner_panel/description_stack_panel/title_stack_panel/title_text_panel/title_panel/title_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "language_button_panel/comma": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "player_count_button_panel/comma": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "tag_button_panel/button/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "appearance_status_content/last_update_panel/last_update_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_incompatable_content/realms_content_stack_panel/realms_incompatable_button_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "glyph_count_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "warning_stack_panel/warning_text_panel/warning_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "csb_expiration/background/content_stack_panel/text_wrapper/text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "ratings_interact_panel/fill_pad/text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "ratings_interact_panel/title_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "ratings_chart_panel/ratings_chart_content/count_panel/count": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "ratings_chart_panel/ratings_chart_content/rating_text_panel/rating_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "ratings_chart_panel/ratings_chart_content/title/title_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "chart_section/stack/percent": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "chart_section/stack/star_number_panel/star_number": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "section_header/header_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "price_markdown_panel/offer_price": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "coin_purchase_label_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "discount_label/label_panel/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "smooth_currency_purchase_label/currency_purchase_label_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "currency_purchase_label/currency_purchase_label_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "interact_label_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "download_progress_small/stacker/sizer_text/download_progress_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "interaction_button_content/line1_panel/upsell_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "download_progress/stacker/sizer_text/download_progress_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  }
}
```








### 기본
permissions_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: permissions_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "permissions",

  // ???/?? ??
  "permissions_options_grid_item/option_toggle": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_offset": [ 0, 2 ],
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
  },

  // ???/?? ??
  "permissions_options_stack_panel/permission_level_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "permission_level_radio_visitor@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#permission_level_radio_visitor",
          // 오버라이드 가능한 변수
          "$radio_label_text": "permissions.level.visitor"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "permission_level_radio_member@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#permission_level_radio_member",
          // 오버라이드 가능한 변수
          "$radio_label_text": "permissions.level.member"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "permission_level_radio_operator@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#permission_level_radio_operator",
          // 오버라이드 가능한 변수
          "$radio_label_text": "permissions.level.operator"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "permission_level_radio_custom@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#permission_level_radio_custom",
          // 오버라이드 가능한 변수
          "$radio_label_text": "permissions.level.custom"
        }
      }
    ]
  },

  // ???/?? ??
  "banner_background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_global_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_global_background_alpha"
  },

  // ???/?? ??
  "player_button_content/gamertag_panel/gamertag_label": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "player_local_icon": {
    // 가로/세로 크기
    "size": [ 20, 20 ],
    // 사용할 이미지 경로
    "texture": "textures/ui/icon_steve"
  },

  // ???/?? ??
  "player_gamer_pic/player_panel_black_border": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "player_gamer_pic": {
    // 가로/세로 크기
    "size": [ 20, 20 ]
  },

  // ???/?? ??
  "player_button_content": {
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 가로/세로 크기
		"size": [ "100% - 4px", "100% - 4px" ]
  },

  // ???/?? ??
  "selector_area/player_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 1, 0 ]
  },

  // ???/?? ??
  "player_grid_item/player_toggle": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "player_toggle": {
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
    "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked"
  },

  // ???/?? ??
  "title_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "ip_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "world_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "gamertag_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "option_state_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "option_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "radio_title_and_icon/radio_title": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "radio_content_with_title_bar/helper_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "permissions_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "permissions",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_permissions.permissions_screen_content"
  }
}
```








### 기본
persona_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: persona_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "persona",

  // ???/?? ??
  "persona_screen_content": {
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
            "background_blur_panel@rainbowpieui_persona.background_blur_panel": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "right_side_stack_debug_control": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 가져올 값 이름
        "binding_name": "#is_using_dressing_room_debugging",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible",
        // 완전히 제거(공간도 없음)
        "ignored": "$rainbowpie_ui_flag_persona_debug"
      }
    ]
  },

  // ???/?? ??
  "persona_classic_skin_paper_doll": {
    // ?? ??
    "camera_tilt_degrees": 0
  },

  // ???/?? ??
  "popup_dialog_skin_model/paper_doll": {
    // ?? ??
    "camera_tilt_degrees": 0
  },

  // ???/?? ??
  "skin_viewer_panel_skin_model/skin_model": {
    // ?? ??
    "camera_tilt_degrees": 0,
    // ?? ??
    "starting_rotation": 0
  },

  // ???/?? ??
  "popup_dialog__restricted_content_popup": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // 가로/세로 크기
          "size": [ 204, 132 ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "dr.modal.restricted_content_title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_persona.restricted_content_popup_dialog_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false,
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_show_close": false
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background2@rainbowpieui_profile.background_panel_design2": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
        }
      }
    ]
  },

  // ???/?? ??
  "equip_button_content": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ]
  },

  // ???/?? ??
  "cape_button_content/stack_content/content_label_panel/content_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "button_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "persona_skin_pack_panel/pack_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "skin_pack_expand_pack": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "switch_persona_and_classic_repeat_check_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "switch_persona_and_classic_message": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "switch_persona_and_classic_title": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "custom_skin_info_panel_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "limb_side_switcher/title/limb_title": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "piece_section_title_panel/title": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "label_image_button_content/content_label_panel/content_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "sub_category_label_image_button_content/stack_content/content_label_panel/content_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "skin_info_label_panel_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "color_picker_panel/top_bar/title/skin_title": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "loading_progress_bars/loading_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "body_size_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "arm_size_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "usage_limited_right_panel_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "to_realms_plus_screen_realms_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_extra_info_panel_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "appearance_status_panel/appearance_status/label_panel/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "info_text_box_description_stack_description_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "persona_getting_started_description": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "right_side_stack_debug_control/debug_preview_skin_name": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "right_side_stack_debug_control/debug_skin_names/debug_active_name": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "right_side_stack_debug_control/debug_skin_names/debug_current_name": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "special_offer_banner/banner_info/special_banner_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "title_rarity_right_title": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "title_rarity_positionable_title": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "equip_piece_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_redeem_button_content/realms_text_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_savings_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "roamable_status_notification_panel/appearance_status_notification": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_05aab186"
  },

  // ???/?? ??
  "appearance_status_panel": {

  },

  // ???/?? ??
  "persona_getting_started_title": {
    // 기준점에서 이동하는 거리
    "offset": [ 2, 2 ],
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_title_text_color"
  },

  // ???/?? ??
  "right_panel_classic_skins_title/title_panel/title": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_title_text_color"
  },

  // ???/?? ??
  "right_panel_classic_skins_title/author_panel/author": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_title_text_color"
  },

  // ???/?? ??
  "select_custom_skin_stack": {
    // 가로/세로 크기
    "size": [ "100% - 2px", 20 ]
  },

  // ???/?? ??
  "select_custom_skin": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_form_fitting_button"
  },

  // ???/?? ??
  "cape_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "subcategory_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "realms_redeem_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "realms_subscription_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "offer_coin_purchase_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "equip_piece_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "right_realms_pack_button_more_info": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "info_popup_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "info_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "preview_skin_full": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "color_picker_right_cycle": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "color_picker_left_cycle": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "leave_color_picker": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "left_limb_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "right_limb_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "skin_color_picker": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "color_grid_item": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "popup_dialog_choose_skin_type_panel/choose_skin_type_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "persona_skin_pack_panel/pack_body/skin_pack_panel/expand_view_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "get_more_skins_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "offer_real_money_purchase_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "achievement_text_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "popup_dialog_close_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "see_skin_pack_in_store": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "none_piece_option_panel/none_piece_option_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "usage_limited_settings_profile_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "differences_popup_ok_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "see_more_skins_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "purchase_buttons/emote_play_again_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "emote_offer_section_panel/remove_emote_option_panel/none_emote_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "scroll_section": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_size": [ 4, "100% - 6px" ]
  },

  // ???/?? ??
  "right_side_classic_skin_featured_panel": {
    // 오버라이드 가능한 변수
    "$right_side_dialog_bg_size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "persona_getting_started_panel": {
    // 오버라이드 가능한 변수
    "$right_side_dialog_bg_size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "piece_list_right_side_section": {
    // 오버라이드 가능한 변수
    "$dialog_bg_size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "right_side_dialog_panel": {
    // 오버라이드 가능한 변수
    "$right_side_dialog_bg_size|default": [ "100%", "100%" ]
  },

  // ???/?? ??
  "dialog_background_object_content": {
    // 오버라이드 가능한 변수
    "$dialog_bg_size|default": [ "100%", "100%" ],
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "dialog_background_object": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "persona_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "persona",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_blur": "(not $rainbowpie_ui_flag_d28dfac0)",
    // 오버라이드 가능한 변수
    "$screen_bg_content": "common.empty_panel",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_d28dfac0",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_screen_anims": []
      }
    ]
  }
}
```








### 기본
play_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: play_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "play",

  // ???/?? ??
  "play_screen": {
    // 오버라이드 가능한 변수
    "$is_pregame": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingame": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "play",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_play.play_screen_content"
  },

  // REF

  "third_party_server_info_panel/server_info_stack_panel/join_server_button": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_play_bottom_panel and (not $game_pad))",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "additional_server_info_panel/server_info_stack_panel/join_server_button": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_play_bottom_panel and (not $game_pad))",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "server_scroll_panel/stack_panel/add_server_button": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_play_bottom_panel and (not $game_pad))"
  },

  // ???/?? ??
  "add_server_toggle_button": {
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
    "$checked_locked_hover_control": "rainbowpie_ui_toggle.toggle_button_checked_locked_hover"
  },

  // ???/?? ??
  "manually_added_servers_scrolling_content/padding_3": {
    // 가로/세로 크기
    "size": [ "100%", 1 ]
  },

  // ???/?? ??
  "more_servers_world_item/additional_server_toggle_base": {
    // 가로/세로 크기
    "size": [ "fill", "100%" ]
  },

  // ???/?? ??
  "more_servers_world_item/network_server_world_edit_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "more_servers_world_item": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "network_server_world_edit_button",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "padding_0": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 1, 1 ],
              // 완전히 제거(공간도 없음)
              "ignored": "$ignore_add_servers"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "network_server_world_edit_button2@common_buttons.dark_content_button": {
              // 오버라이드 가능한 변수
              "$focus_id": "edit_server",
              // 오버라이드 가능한 변수
              "$focus_override_right": "right_side",
              // 완전히 제거(공간도 없음)
              "ignored": "$ignore_add_servers",
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100%", "100%" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.menu_network_server_world_edit",
              // 오버라이드 가능한 변수
              "$button_content": "play.edit_icon",
              // 오버라이드 가능한 변수
              "$button_tts_header": "accessibility.play.editServer",
              // 가로/세로 크기
              "size": [ "100%y - 1px", "100%" ],
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
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "manually_added_servers_scrolling_content/padding_0": {
    // 가로/세로 크기
    "size": [ "100%", 0.5 ]
  },

  // ???/?? ??
  "manually_added_servers_scrolling_content/padding_1": {
    // 가로/세로 크기
    "size": [ "100%", 1 ]
  },

  // ???/?? ??
  "manually_added_servers_scrolling_content/more_servers_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "manually_added_servers_scrolling_content": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "more_servers_label",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "more_servers_title@rainbowpieui_play.list_title": {
              // 가로/세로 크기
              "size": [ "100%", 14 ],
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_list_title_text": "thirdPartyWorld.Additional"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "featured_server_world_item": {
    // 가로/세로 크기
    "size": [ "100%", 38 ]
  },

  // ???/?? ??
  "server_toggle_base": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$border_texture": "",
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
    "$checked_locked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_locked"
  },

  // ???/?? ??
  "servers_content_panel/more_servers_divider": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "server_scroll_panel/stack_panel/padding_1": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "servers_content_panel/featured_servers_panel/padding_3": {
    // 가로/세로 크기
    "size": [ "100%", 0.5 ]
  },

  // ???/?? ??
  "servers_content_panel/featured_servers_panel/padding_2": {
    // 가로/세로 크기
    "size": [ "100%", 1 ]
  },

  // ???/?? ??
  "servers_content_panel/featured_servers_panel/padding_1": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "servers_content_panel/featured_servers_panel/featured_servers_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "servers_content_panel/featured_servers_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "featured_servers_label",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "featured_servers_title@rainbowpieui_play.list_title": {
              // 가로/세로 크기
              "size": [ "100%", 14 ],
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_list_title_text": "thirdPartyWorld.Featured"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "server_scroll_panel/stack_panel": {
    // 가로/세로 크기
    "size": [ "100% - 2px", "100%c + 1px" ]
  },

  // ???/?? ??
  "crossplatform_disabled_panel": {
    // "bindings": []
  },

  // ???/?? ??
  "server_scroll_panel/stack_panel/padding_0": {
    // 가로/세로 크기
    "size": [ "100%", 1.5 ]
  },

  // ???/?? ??
  "show_servers_panel/divider_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "realm_warning_tip": {
  },

  // ???/?? ??
  "server_scroll_content/severs_panel/offset_panel": {
  },

  // ???/?? ??
  "server_scroll_content/feature_server_message_panel": {
  },

  // ???/?? ??
  "server_scroll_content": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "network_world_item": {
    // 가로/세로 크기
    "size": [ "100%", 29 ]
  },

  // ???/?? ??
  "network_world_item/network_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "label_content_template/label_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "label_content_template": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "label_panel",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "friends_realms_title@rainbowpieui_play.list_title": {
              // 보이기/숨기기(공간 유지)
              "visible": "$label_panel_visible",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_list_title_text": "$label_content_label"
            }
          },
          {
            // ???/?? ??
            "padding_title": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 1, 0.5 ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/joinable_realms_panel/padding_1": {
    // 가로/세로 크기
    "size": [ "100%", 1 ]
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/joinable_realms_panel/no_realms_grid": {
  },

  // ???/?? ??
  "sign_in_to_view_realms_button_friends": {
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "friends_crossplatform_disabled_panel",
        // ?? ??
        "operation": "insert_before",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "friends_crossplatform_disable_spacer2@play.crossplatform_disable_spacer": {
              // 가로/세로 크기
              "size": [ 1, 0.5 ],
              // 완전히 제거(공간도 없음)
              "ignored": "(not $is_realms_enabled)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/joinable_realms_panel/sign_in_to_view_realms_button_friends": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ]
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/joinable_realms_panel/friends_realms_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/joinable_realms_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "friends_realms_label",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "friends_realms_title@rainbowpieui_play.list_title": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_list_title_text": "$tts_section_header",
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
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/friends_crossplatform_disabled_panel": {
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/friends_crossplatform_disable_spacer": {
    // 가로/세로 크기
    "size": [ 1, 0.5 ]
  },

  // ???/?? ??
  "notification_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "add_friend_and_invite_panel/padding_2": {

  },
  // ???/?? ??
  "add_friend_and_invite_panel/notification_button_panel": {

  },

  // ???/?? ??
  "add_friend_and_invite_panel/join_by_code_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ]
  },

  // ???/?? ??
  "add_friend_and_invite_panel/add_friend_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ]
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/padding_0": {
    // 가로/세로 크기
    "size": [ "100%", 1 ]
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/header_button": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_play_bottom_panel and (not $game_pad))"
  },

  // ???/?? ??
  "version": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "development_version": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "copyright": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "high_ping_popup_content_stack_panel/text_line_2": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "high_ping_popup_content_stack_panel/text_line_1": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "join_by_code_popup_help_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "join_by_code_popup_header_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "server_scroll_content/feature_server_message_panel/feature_server_message_panel/label_panel_layout/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "friends_scroll_panel/stack_panel/joinable_realms_panel/placeholder_loading_friends_panel/loading_friends_realms_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "world_list_label_with_color_panel/list_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "world_list_label_panel/list_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "loading_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "light_loading_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "light_centered_loading_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "game_tip_item_panel/label_panel/realms_warning_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "notification_button_label_panel/notification_button_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "common_button_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "legacy_world_content_status_area_panel/world_storage_content_panel/world_storage_information/legacy_world_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "news_section_panel/read_more_panel/text_stack_panel/news_title_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "news_section_panel/news_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "news_text_panel/contents_news": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "games_section_panel/description_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "games_factory_object/games_factory_panel/bottom_panel/bottom_panel": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "games_factory_object/games_factory_panel/top_panel/game_title_panel/game_subtitle": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "games_factory_object/games_factory_panel/top_panel/game_title_panel/game_title": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_section_panel/description_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "description_text_panel/contents_description": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "screenshots_section_panel/screenshots_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "text_icon_number_panel/stack_panel/number": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "text_icon_number_panel/text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "add_server_info_panel/server_info_stack_panel/add_server_description": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "add_server_info_panel/server_info_stack_panel/add_server_title": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "ping_rate_panel/concurrency_stack/player_count": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "more_servers_label_panel/list_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "blocked_multiplayer_privileges_panel/background/label_panel_layout/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "information_panel/background/label_panel_layout/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "label_content_template/label_panel/label_panel_layout/label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "network_world_type_icon": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "unread_story_count_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_list_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_sign_in_prompt_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "collection_world_screenshot/screenshot_picture/gradient_container_stacked_panel/solid_image_realmsplus_expired/exclamationmark": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "worlds_stack_panel/realms_multiplayer_blocked_panel/open_uri_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "worlds_stack_panel/realms_multiplayer_blocked_panel/open_account_setting_button_gamecore": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "worlds_stack_panel/padding_0": {
    // 가로/세로 크기
    "size": [ "100%", 1 ]
  },

  // ???/?? ??
  "worlds_stack_panel/realms_panel/padding_1": {
    // 가로/세로 크기
    "size": [ "100%", 1 ]
  },

  // ???/?? ??
  "label_background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "dark_label_background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "worlds_stack_panel/realms_panel/placeholder_personal_realms_panel/loading_friends_realms_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "worlds_stack_panel/realms_panel/realms_nintendo_first_realm_purchase_panel": {
  },


  // ???/?? ??
  "worlds_stack_panel/realms_panel/realms_trial_panel": {
  },

  // ???/?? ??
  "common_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_pane_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 0, 0 ]
  },

  // ???/?? ??
  "realms_world_item/leave_realm_panel/leave_friends_realm_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "realms_world_item/leave_realm_panel": {
    // 가로/세로 크기
    "size": [ "100%c + 1px", "100% + 1px" ],
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "leave_friends_realm_button",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "leave_friends_realm_button2@common_buttons.dark_content_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100%", "100% - 1px" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.menu_realms_world_item_remove",
              // 오버라이드 가능한 변수
              "$button_content": "play.realms_remove_icon",
              // 오버라이드 가능한 변수
              "$button_tts_header": "accessibility.play.leaveRealm",
              // 가로/세로 크기
              "size": [ "100%y - 1px", "100%" ],
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
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "realms_world_item": {
    // 가로/세로 크기
    "size": [ "100%", 29 ]
  },

  // ???/?? ??
  "realms_world_item/feed_panel_with_unread_count/feed_panel/realms_feed_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "realms_world_item/feed_panel_with_unread_count": {
    // 가로/세로 크기
    "size": [ "100%y + 1px", "100%" ],
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
            "realms_feed_button2@common_buttons.dark_content_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100%", "100% - 1px" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.menu_realms_feed",
              // 오버라이드 가능한 변수
              "$button_content": "play.realms_feed_button_content",
              // 오버라이드 가능한 변수
              "$button_tts_header": "#realms_feed_button_tts_header",
              // 가로/세로 크기
              "size": [ "100%y - 1px", "100% + 1px" ],
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
                  "binding_name": "#menu_realms_feed_enabled",
                  // 가져온 값을 다른 속성으로 연결
                  "binding_name_override": "#enabled",
                  // 목록 이름
                  "binding_collection_name": "$realms_worlds_collection_name",
                  // 목록 데이터를 반복 연결
                  "binding_type": "collection"
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
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "realms_world_item/edit_panel": {
    // 가로/세로 크기
    "size": [ "100%y", "100% + 1px" ],
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "realms_world_edit_button",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "realms_world_edit_button2@common_buttons.dark_content_button": {
              // 오버라이드 가능한 변수
              "$button_image_size": [ "100%", "100% - 1px" ],
              // 오버라이드 가능한 변수
              "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button",
              // 오버라이드 가능한 변수
              "$pressed_button_name": "button.menu_realms_world_item_edit",
              // 오버라이드 가능한 변수
              "$button_content": "play.realms_slots_edit_icon",
              // 오버라이드 가능한 변수
              "$button_tts_header": "accessibility.play.editRealm",
              // 가로/세로 크기
              "size": [ "100%y - 1px", "100%" ],
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
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "realms_world_item/edit_panel/realms_world_edit_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "realms_world_item/realms_button_panel/realms_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ]
  },

  // ???/?? ??
  "create_on_realms_button_panel/create_on_realms_button": {
  },

  // ???/?? ??
  "worlds_stack_panel/realms_panel/realms_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "sign_in_realms_image": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "worlds_stack_panel/realms_panel/sign_in_to_view_realms_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ]
  },

  // ???/?? ??
  "worlds_stack_panel/realms_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "realms_label",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "realms_title@rainbowpieui_play.list_title": {
              // 완전히 제거(공간도 없음)
              "ignored": "$world_picker_screen",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_list_title_text": "$tts_section_header",
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
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "worlds_stack_panel/worlds_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "worlds_stack_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "worlds_label",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "worlds_title@rainbowpieui_play.list_title": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_list_title_text": "playscreen.worlds",
              // 조건에 따라 변수 값을 바꾸기
              "variables": [
                {
                  // 이 조건이 맞으면 적용
                  "requires": "($pre_release and not $is_editor_mode_enabled)",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_list_title_text": "playscreen.beta_worlds"
                },
                {
                  // 이 조건이 맞으면 적용
                  "requires": "$is_editor_mode_enabled",
                  // 오버라이드 가능한 변수
                  "$rainbowpie_localui_list_title_text": "playscreen.editor.worlds"
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "world_list_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "local_world_text_panel/text_indent": {
    // 기준점에서 이동하는 거리
    "offset": [ 2, 0 ],
    // 가로/세로 크기
    "size": [ "100% - 6px", "100% - 6px" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle"
  },

  // ???/?? ??
  "world_screenshot_base": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "local_world_item": {
    // 가로/세로 크기
    "size": [ "100%", 30 ]
  },

  // ???/?? ??
  "local_world_item/header_button_panel": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$secondary_header_button": "rainbowpieui_play.cloud_upload_and_edit_world_stack_panel"
  },

  // ???/?? ??
  "worlds_stack_panel/header_button/buttons": {
    // 오버라이드 가능한 변수
    "$primary_header_button": "rainbowpieui_play.create_new_world_button_panel",
    // 오버라이드 가능한 변수
    "$secondary_header_button": "rainbowpieui_play.quick_play_button_panel",
    // 오버라이드 가능한 변수
    "$ternary_header_button": "rainbowpieui_play.import_world_button"
  },

  // ???/?? ??
  "header_button_panel/buttons/primary_panel/primary": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "header_button_panel/buttons": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "header_button_panel_opt_in/buttons/primary_panel/primary": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "header_button_panel_opt_in/buttons": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ]
  },

  // ???/?? ??
  "worlds_stack_panel/header_button": {
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 완전히 제거(공간도 없음)
    "ignored": "(($rainbowpie_ui_flag_play_bottom_panel and (not $game_pad)) or $local_world_upload)"
  },

  // ???/?? ??
  "sign_in_to_view_realms_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "realms_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "network_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "local_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_content_size": [ "100% - 1px", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "legacy_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "beta_retail_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "worlds_stack_panel/realms_panel/realms_trial_panel/realms_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "worlds_stack_panel/realms_panel/realms_nintendo_first_realm_purchase_panel/realms_world_item_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "quick_play_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "create_new_world_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "sync_legacy_worlds_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "open_account_setting_button_gamecore": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "no_local_worlds_launch_help": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "join_by_code_popup_join_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "high_ping_popup_join_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "high_ping_popup_cancel_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "add_friend_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "join_by_code_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  }
}
```








### 기본
pocket_containers.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: pocket_containers.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "pocket_containers",

  // ???/?? ??
  "inventory_panel/scrolling_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "generic_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "panel/header": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "panel/bg": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "panel": {
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
            "inventory_header@rainbowpie_ui_inventory.header_pocket": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_inventory_title": "chestScreen.header.player",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_container_title": "$container_title"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
popup_dialog.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: popup_dialog.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "popup_dialog",

  // ???/?? ??
  "modal_label_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scrolling_pane_size": [ "100% - 1px", "100%" ]
  },

  // ???/?? ??
  "modal_dialog_popup/modal_input/modal_bg_buttons": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_6bb756a3",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100
  },

  // ???/?? ??
  "modal_label_text/text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_dialog_content_color"
  },

  // ???/?? ??
  "modal_dialog_with_buttons": {
    // 가로/세로 크기
    "size": [ 200, 120 ],
    // 오버라이드 가능한 변수
    "$button": "common.empty_panel",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$three_buttons_visible",
        // 오버라이드 가능한 변수
        "$button": "rainbowpie_popup_dialog.three_buttons_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$destructive_three_buttons_visible",
        // 오버라이드 가능한 변수
        "$button": "rainbowpie_popup_dialog.three_buttons_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$two_buttons_visible",
        // 오버라이드 가능한 변수
        "$button": "rainbowpie_popup_dialog.two_buttons_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$destructive_two_buttons_visible",
        // 오버라이드 가능한 변수
        "$button": "rainbowpie_popup_dialog.two_buttons_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$single_button_visible",
        // 오버라이드 가능한 변수
        "$button": "rainbowpie_popup_dialog.single_button_panel"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "$no_buttons_visible",
        // 오버라이드 가능한 변수
        "$button": "rainbowpie_popup_dialog.no_button_panel"
      }
    ],
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
          // 겹치는 순서(숫자 클수록 위)
          "layer": 50,
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_dialog_background_color",
          // ???
          "alpha": "$rainbowpie_ui_theme_dialog_background_alpha",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "title_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 가로/세로 크기
                "size": [ "100% - 8px", 18 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_text@popup_dialog.modal_title_text": {
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 1 ],
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // ?? ??
                      "text_alignment": "center",
                      // 가로/세로 크기
                      "size": [ "100% - 30px", "default" ],
                      // ??
                      "font_type": "$rainbowpie_ui_theme_global_font_name",
                      // ?? ?? ?
                      "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_title_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "title_text_default@popup_dialog.modal_title_text": {
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 1 ],
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // ?? ??
                      "text_alignment": "center",
                      // 가로/세로 크기
                      "size": [ "100% - 30px", "default" ],
                      // ??
                      "font_type": "$rainbowpie_ui_theme_global_font_name",
                      // ?? ?? ?
                      "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_dialog_title_color",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 보여줄 글자
                      "text": "rainbowpie.ui.dialog.title_default",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "$visibility_source_control_name",
                          // 계산식/참조 값
                          "source_property_name": "(#modal_title_text = '')",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
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
                      "size": [ 15, 15 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 1 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
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
                            // 기준점에서 이동하는 거리
                            "offset": [ 0, 0 ],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "center",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "center",
                            // 오버라이드 가능한 변수
                            "$close_button_to_button_id": "$popup_dialog_escape_button_name"
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
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 가로/세로 크기
                "size": [ "100% - 8px", "100% - 44px" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 18 ],
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_dialog_content_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "text@popup_dialog.modal_label_panel": {
                      // 오버라이드 가능한 변수
                      "$rainbowpie_localui_scrollbar_enabled": true,
                      // 오버라이드 가능한 변수
                      "$scrolling_pane_size": [ "100% - 1px", "100%" ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 가로/세로 크기
                      "size": [ "100%", "100%" ]
                    }
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "button@$button": {
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 가로/세로 크기
                "size": [ "100% - 7px", 22 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, -3.5 ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "modal_dialog_popup/modal_input": {
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
            "rainbowpie_dialog@rainbowpie_popup_dialog.modal_dialog_with_buttons": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_6bb756a3)",
              // 오버라이드 가능한 변수
              "$visibility_source_control_name|default": "rainbowpie_dialog",
              // 겹치는 순서(숫자 클수록 위)
              "layer": 100
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "background2@rainbowpie_popup_dialog.background_panel_design2": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_6bb756a3)"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "background@rainbowpie_popup_dialog.background_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "$rainbowpie_ui_flag_6bb756a3"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
profile_card.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: profile_card.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "profile_card",

  // ???/?? ??
  "dialog_content_with_skin/skin_pane/paper_doll_panel/paper_doll": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "skin_pane",
        // 계산식/참조 값
        "source_property_name": "#gesture_delta_source",
        // 결과가 들어갈 속성
        "target_property_name": "#gesture_delta_source"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "skin_pane",
        // 계산식/참조 값
        "source_property_name": "#gesture_mouse_delta_x",
        // 결과가 들어갈 속성
        "target_property_name": "#gesture_mouse_delta_x"
      },
      {
        // 가져올 값 이름
        "binding_name": "#player_uuid"
      }
    ]
  },

  // ???/?? ??
  "xbl_dialog_scrolling_content/add_friend_button": {
    // 가로/세로 크기
    "size": [ "100%", 27 ],
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "toggle_option": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_toggle_enabled": true
  },

  // ???/?? ??
  "xbl_dialog_scrolling_content/report_button": {
    // 가로/세로 크기
    "size": [ "100%", 27 ],
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "xbl_dialog_scrolling_content/dropdown_visibility_panel/friends_dropdown": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_rainbowpiebutton_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_enabled": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "friend@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#friend_option",
          // 오버라이드 가능한 변수
          "$radio_label_text": "xbox.profile.friend"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "favorite@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#favorite_option",
          // 오버라이드 가능한 변수
          "$radio_label_text": "xbox.profile.favorite"
        }
      }
    ]
  },

  // ???/?? ??
  "xbl_dialog_scrolling_content/remove_friend_button": {
    // 가로/세로 크기
    "size": [ "100%", 27 ],
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 2px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
    // 완전히 제거(공간도 없음)
    "ignored": "$is_current_profile"
  },

  // ???/?? ??
  "player_gamer_pic/player_panel_black_border": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "player_gamer_pic": {
    // 가로/세로 크기
    "size": [ 34, 34 ]
  },

  // ???/?? ??
  "unfriend_button_panel/text_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "report_button_content/report_label/report_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "toggle_option/label_panel/toggle_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "xbl_dialog_scrolling_content/real_name_message": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "xbl_dialog_scrolling_content/title_presence_info": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "platform_dialog_scrolling_content/title_presence_info": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "platform_info/platform_labels/platform_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "profile_labels/gamertag_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "gamer_score_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "x_radio_visuals/label_panel/radio_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "profile_card_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_blur": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "profile_card",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_profile_card.profile_card_screen_content"
  }
}
```








### 기본
profile_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: profile_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "profile",

  // ???/?? ??
  "popup_dialog__delete_persona": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dialog_panel@rainbowpie_ui_dialog.dialog_panel": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // 가로/세로 크기
          "size": [ 204, 132 ],
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialogheader_title": "dr.modal.persona_delete_confirm_title",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_content": "rainbowpieui_profile.delete_persona_dialog_content",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_dialog_show_background": false,
          // 오버라이드 가능한 변수
          "$close_button_to_button_id": "button.close_dialog"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background2@rainbowpieui_profile.background_panel_design2": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
        }
      }
    ]
  },

  // ???/?? ??
  "lower_button_label_section/persona_label": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_05aab186"
  },

  // ???/?? ??
  "lower_button_section/differences_info_button": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_05aab186"
  },

  // ???/?? ??
  "edit_appearance_preset_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "delete_appearance_preset_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "preset_arrow_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "skin_retry_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "edit_appearance_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "delete_appearance_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "differences_information_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "settings_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "differences_popup_ok_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "select_default_character_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "skin_model_renderer": {
    // ?? ??
    "camera_tilt_degrees": 0,
    // ?? ??
    "starting_rotation": 0
  },

  // ???/?? ??
  "profile_screen_main_content/featured_section": {
    // 완전히 제거(공간도 없음)
    "ignored": "($store_disabled or $rainbowpie_ui_flag_05aab186)"
  },

  // ???/?? ??
  "profile_screen_main_content/featured_section_disabled_padding": {
    // 완전히 제거(공간도 없음)
    "ignored": "((not $store_disabled) or $rainbowpie_ui_flag_05aab186)"
  },

  // ???/?? ??
  "profile_screen_background_content": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "profile_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "profile",
    // "$rainbowpie_localui_screenbackground_blur": true,
    "$screen_bg_content": "common.empty_panel"
  }
}
```








### 기본
progress_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: progress_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "progress",

  // ???/?? ??
  "overworld_loading_progress_screen": {
    // 오버라이드 가능한 변수
    "$use_loading_bars": false,
    // ?? ??
    "render_only_when_topmost": false,
    // 오버라이드 가능한 변수
    "$is_showing_menu": false,
    // 오버라이드 가능한 변수
    "$force_render_below": false,
    // ?? ??
    "is_showing_menu": "$is_showing_menu",
    // ?? ??
    "force_render_below": "$force_render_below",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_31e1a20e",
        // 오버라이드 가능한 변수
        "$is_showing_menu": false,
        // 오버라이드 가능한 변수
        "$force_render_below": true,
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_feature_background_blur": false,
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_screenbackground_ingame": false
      }
    ]
  },

  // ???/?? ??
  "nether_loading_progress_screen": {
    // 오버라이드 가능한 변수
    "$use_loading_bars": false,
    // ?? ??
    "render_only_when_topmost": false,
    // 오버라이드 가능한 변수
    "$is_showing_menu": false,
    // 오버라이드 가능한 변수
    "$force_render_below": false,
    // ?? ??
    "is_showing_menu": "$is_showing_menu",
    // ?? ??
    "force_render_below": "$force_render_below",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_31e1a20e",
        // 오버라이드 가능한 변수
        "$is_showing_menu": false,
        // 오버라이드 가능한 변수
        "$force_render_below": true,
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_feature_background_blur": false,
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_screenbackground_ingame": false
      }
    ]
  },

  // ???/?? ??
  "theend_loading_progress_screen": {
    // 오버라이드 가능한 변수
    "$use_loading_bars": false,
    // ?? ??
    "render_only_when_topmost": false,
    // 오버라이드 가능한 변수
    "$is_showing_menu": false,
    // 오버라이드 가능한 변수
    "$force_render_below": false,
    // ?? ??
    "is_showing_menu": "$is_showing_menu",
    // ?? ??
    "force_render_below": "$force_render_below",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_31e1a20e",
        // 오버라이드 가능한 변수
        "$is_showing_menu": false,
        // 오버라이드 가능한 변수
        "$force_render_below": true,
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_feature_background_blur": false,
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_screenbackground_ingame": false
      }
    ]
  },

  // ???/?? ??
  "realms_stories_enabled_loading_progress_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingame": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_progress.world_loading_progress_screen"
  },

  // ???/?? ??
  "world_convert_modal_progress_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingame": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_progress.world_loading_progress_screen"
  },

  // ???/?? ??
  "simple_popup_dialog_base": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // ?? ?? ?
    "max_size": [ "100%", "100%" ],
    // ?? ?? ?
    "min_size": [ "100%", "100%" ],
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
            "rainbowpieui_progress_dialog@rainbowpieui_progress.simple_popup_dialog_base": {}
          }
        ]
      },
      {
        // ?? ?? ??
        "array_name": "button_mappings",
        // ?? ??
        "operation": "replace",
        // ???/?? ??
        "where": {
          // 어떤 입력을 받을지
          "from_button_id": "button.menu_cancel",
          // 어떤 동작을 실행할지
          "to_button_id": "modal.escape",
          // 입력 시점(pressed 등)
          "mapping_type": "global"
        },
        // ??? ?
        "value": {
          // 어떤 입력을 받을지
          "from_button_id": "button.menu_cancel",
          // 어떤 동작을 실행할지
          "to_button_id": "button.leave",
          // 입력 시점(pressed 등)
          "mapping_type": "global"
        }
      }
    ]
  },

  // ???/?? ??
  "simple_popup_dialog_base/dialog_background_hollow_3": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "modal_progress_screen": {
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_progress.modal_screen_content"
  },

  // ???/?? ??
  "progress_screen_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "modal_progress_panel_with_cancel/common_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "progress_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "progress",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingamebg_ignored": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ignored": "$force_render_below",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_override_ignored": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_background_bsf_need": "(not $force_render_below)"
  },

  // ???/?? ??
  "mobile_data_icon_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "cancel_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "retry_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "abort_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button"
  },

  // ???/?? ??
  "world_loading_progress_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingame": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_progress.world_loading_progress_screen"
  },

  // ???/?? ??
  "world_saving_progress_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_background_animations": [
      "@common.screen_exit_animation_push_fade",
      "@common.screen_exit_animation_pop_fade"
    ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingame": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_progress.world_saving_progress_screen",
    // 조건에 따라 변수 값을 바꾸기
    "variables": []
  }
}
```








### 기본
realms_pending_invitations.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: realms_pending_invitations.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "realms_pending_invitations",

  // ???/?? ??
  "banner_panel": {
    // 오버라이드 가능한 변수
    "$banner_image": "rainbowpieui_realms_pending_invitations.dark_banner"
  },

  // ???/?? ??
  "banner_panel_hover": {
    // 오버라이드 가능한 변수
    "$banner_image": "rainbowpieui_realms_pending_invitations.dark_banner_hover"
  },

  // ???/?? ??
  "panel_text": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "realms_pending_invitations_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "realms_pending_invitations",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_blur": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_realms_pending_invitations.realms_invitation_screen_content"
  }
}
```








### 기본
realms_plus_ended_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: realms_plus_ended_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "realms_plus_ended",

  // ???/?? ??
  "main_content_panel/main_content_stack_panel/text_panel/text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "subscription_ended_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "realms_plus_ended",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_realms_plus_ended.subscription_ended_screen_content"
  }
}
```








### 기본
realmsplus_upgrade_notice_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: realmsplus_upgrade_notice_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "realmsplus_upgrade_notice_screen",

  // ???/?? ??
  "content/wall_of_text/the_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "content/buttons_row": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "realmsplus_upgrade_notice_screen",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_realmsplus_upgrade_notice_screen.main_content"
  }
}
```








### 기본
redstone_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: redstone_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "redstone",

  // ???/?? ??
  "panel_crafter": {
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
            "crafter_root_panel@rainbowpieui_redstone.crafter_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "panel_crafter/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "item_dropper_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "redstone_panel_top_half": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 19 ]
  },

  // ???/?? ??
  "panel": {
    // 오버라이드 가능한 변수
    "$container_type|default": "null",
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
            "redstone_root_panel@rainbowpieui_redstone.redstone_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_flag_84df7492) or ($container_type = 'hopper'))"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "hopper_root_panel@rainbowpieui_redstone.hopper_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "((not $rainbowpie_ui_flag_84df7492) or (not ($container_type = 'hopper')))"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "panel/root_panel/common_panel": {
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
  "panel/root_panel/redstone_screen_inventory": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "$container_title"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "hopper_screen": {
    // 오버라이드 가능한 변수
    "$container_type": "hopper"
  },

  // ???/?? ??
  "dropper_screen": {
    // 오버라이드 가능한 변수
    "$container_type": "dropper"
  },

  // ???/?? ??
  "dispenser_screen": {
    // 오버라이드 가능한 변수
    "$container_type": "dispenser"
  },

  // ???/?? ??
  "crafter_screen": {
    // 오버라이드 가능한 변수
    "$container_type": "crafter"
  }
}
```








### 기본
resource_packs_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: resource_packs_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "resource_packs",

  // ???/?? ??
  "panel_bg/black_background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/Black",
    // ???
    "alpha": 0.5
  },

  // ???/?? ??
  "panel_bg/gray": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "selected_stack_panel/offset_3": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_840d1a5c"
  },

  // ???/?? ??
  "selected_stack_panel/realms_packs_title_button": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_840d1a5c"
  },

  // ???/?? ??
  "selected_stack_panel/realms_packs_section": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_840d1a5c"
  },

  // ???/?? ??
  "selected_stack_panel/offset_4": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_840d1a5c"
  },

  // ???/?? ??
  "selected_stack_panel/unowned_packs_title_button": {
    // 완전히 제거(공간도 없음)
    "ignored": "($education_edition or $rainbowpie_ui_flag_840d1a5c)"
  },

  // ???/?? ??
  "selected_stack_panel/unowned_packs_section": {
    // 완전히 제거(공간도 없음)
    "ignored": "($education_edition or $rainbowpie_ui_flag_840d1a5c)"
  },

  // ???/?? ??
  "selected_pack_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control|default": "rp_search_text_box_display_text",
    // 보이기/숨기기(공간 유지)
    "visible": true,
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
        "source_property_name": "('\"' + #name - '§0' - '§1' - '§2' - '§3' - '§4' - '§5' - '§6' - '§7' - '§8' - '§9' - '§a' - '§b' - '§c' - '§d' - '§e' - '§f' - '§g' - '§h' - '§i' - '§j' - '§k' - '§l' - '§m' - '§n' - '§o' - '§p' - '§q' - '§r' - '§s' - '§t' - '§u' - '§v' - '§w' - '§x' - '§y' - '§z' + '\"')",
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
  "available_pack_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_search_box_control|default": "rp_search_text_box_display_text",
    // 보이기/숨기기(공간 유지)
    "visible": true,
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
        "source_property_name": "('\"' + #name - '§0' - '§1' - '§2' - '§3' - '§4' - '§5' - '§6' - '§7' - '§8' - '§9' - '§a' - '§b' - '§c' - '§d' - '§e' - '§f' - '§g' - '§h' - '§i' - '§j' - '§k' - '§l' - '§m' - '§n' - '§o' - '§p' - '§q' - '§r' - '§s' - '§t' - '§u' - '§v' - '§w' - '§x' - '§y' - '§z' + '\"')",
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
  "selected_stack_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_resource_packs_type|default": "null",
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "top_panel",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "rainbowpie_resource_packs_screen@rainbowpieui_resource_packs.resource_packs_screen": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "selected_stack_panel/world_template_option_lock_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "(($rainbowpie_ui_flag_54edd49d and (not ($rainbowpie_localui_resource_packs_type = 'null'))) or (not $is_world_create and not $is_template_create and not $is_world_edit))",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  },

  // ???/?? ??
  "selected_stack_panel/top_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_54edd49d and (not ($rainbowpie_localui_resource_packs_type = 'null')))",
    // 가로/세로 크기
    "size": [ "100%", 25 ]
  },

  // ???/?? ??
  "selected_stack_panel/offset_0": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_54edd49d and (not ($rainbowpie_localui_resource_packs_type = 'null')))"
  },

  // ???/?? ??
  "selected_stack_panel/selected_packs_title_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_54edd49d and (not ($rainbowpie_localui_resource_packs_type = 'null')))"
  },

  // ???/?? ??
  "selected_stack_panel/selected_pack_section": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_54edd49d and (not ($rainbowpie_localui_resource_packs_type = 'null')))"
  },

  // ???/?? ??
  "selected_stack_panel/offset_1": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_54edd49d and (not ($rainbowpie_localui_resource_packs_type = 'null')))"
  },

  // ???/?? ??
  "selected_stack_panel/available_packs_title_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_54edd49d and (not ($rainbowpie_localui_resource_packs_type = 'null')))"
  },

  // ???/?? ??
  "selected_stack_panel/available_packs_section": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_flag_54edd49d and (not ($rainbowpie_localui_resource_packs_type = 'null')))"
  },

  // ???/?? ??
  "resource_packs_toggle_button_control": {
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
    // 오버라이드 가능한 변수
    "$state_collection_name|default": "null",
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
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "tooltip_image_wrapper@resource_packs.tooltip_image_wrapper": {
              // 완전히 제거(공간도 없음)
              "ignored": "($state_collection_name = 'null')",
              // 기준점(어디에서 시작할지)
              "anchor_from": "right_middle",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "right_middle",
              // 오버라이드 가능한 변수
              "$button_collection_name": "$state_collection_name"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "resource_packs_toggle_button_control/icon_border": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_feature_settings_themedIcon"
  },

  // ???/?? ??
  "resource_packs_toggle_button_control/cycling_icon": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_feature_settings_themedIcon"
  },

  // ???/?? ??
  "resource_packs_toggle_button_control/tab_button_text": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // 기준점에서 이동하는 거리
    "offset": "$rainbowpie_localui_this_offset",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_offset": [ 34, 0 ],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_feature_settings_themedIcon",
        // 오버라이드 가능한 변수
        "$rainbowpie_localui_this_offset": [ 28, 0 ]
      }
    ]
  },

  // ???/?? ??
  "resource_packs_section_toggle_base": {
    // 오버라이드 가능한 변수
    "$icon_texture_name": "global_texture",
    // 오버라이드 가능한 변수
    "$icon_group_name": "general",
    // 오버라이드 가능한 변수
    "$unchecked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked",
    // 오버라이드 가능한 변수
    "$checked_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked",
    // 오버라이드 가능한 변수
    "$unchecked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_unchecked_hover",
    // 오버라이드 가능한 변수
    "$checked_hover_control": "rainbowpieui_settings_common.rainbowpie_ui_toggle_checked_hover",
    // 가로/세로 크기
    "size": [ "100%", "25px" ]
  }
}
```








### 기본
safe_zone_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: safe_zone_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "safe_zone",

  // ???/?? ??
  "instructions_text/inner_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "safe_zone_screen/main_content_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "safe_zone_screen": {
    // 오버라이드 가능한 변수
    "$is_publish": false,
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_front",
        // ??? ?
        "value": [
          { "background_panel@rainbowpieui_safe_zone.background_panel": {} },
          { "dialog_panel@rainbowpieui_safe_zone.dialog_panel": {} }
        ]
      }
    ]
  }
}
```








### 기본
scoreboards.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: scoreboards.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "scoreboard",

  // ???/?? ??
  "scoreboard_sidebar": {
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
            "requires": "$rainbowpie_ui_flag_scoreboard_default_font",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_name": "default",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_theme_global_font_backup_name": "default"
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "player_icon_panel/player_icon": {
    // 가로/세로 크기
    "size": [ "80% + 4px", "80% + 4px" ]
  },

  // ???/?? ??
  "player_icon_panel/player_icon/player_panel_black_border": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "player_score": {
    // ?? ??
    "shadow": false,
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "player_name": {
    // ?? ??
    "shadow": false,
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "list_objective_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "scoreboard_sidebar/main/displayed_objective": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "scoreboard_sidebar_player": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "scoreboard_sidebar_score": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "player_rank_panel/player_rank_bg/player_rank": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, -1 ],
    // ?? ?? ??
    "font_scale_factor": 1.2,
    // ??
    "font_type": "MinecraftTen",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "player_rank_panel/player_rank_bg": {
    // 가로/세로 크기
    "size": [ "100%y", "100% - 1px" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "player_panel/rank_base": {
    // 가로/세로 크기
    "size": [ "100%y", "100%" ]
  },

  // ???/?? ??
  "base_player_button": {
    // 가로/세로 크기
    "size": [ "fill", "100%" ],
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100% - 1px" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  }
}
```








### 기본
screenshot_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: screenshot_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "screenshot",

  // ???/?? ??
  "screenshot_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "screenshot",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_screenshot.screenshot_screen_content",
    // 오버라이드 가능한 변수
    "$use_loading_bars": false,
    // ?? ??
    "force_render_below": true,
    // ?? ??
    "is_showing_menu": false,
    // ?? ??
    "should_steal_mouse": true,
    // ?? ??
    "absorbs_input": true
  }
}
```








### 기본
server_form.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: server_form.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "server_form",

  // 다른 템플릿을 가져와서 확장(상속)
  "long_form@rainbowpieui_server_form.long_form": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen": false
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "custom_form@rainbowpieui_server_form.custom_form": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen": false
  },

  // ???/?? ??
  "third_party_server_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "server_form",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen": true,
    // ?? ??
    "force_render_below": true,
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_server_form.main_screen_content",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen_content": "rainbowpieui_server_form.main_screen_content"
  }
}
```








### 기본
settings_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: settings_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "settings",

  // ???/?? ??
  "selector_stack_panel": {
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
            "xbox_live_panel": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $include_controls_and_settings_sections or not $is_xboxlive_enabled or not $rainbowpie_ui_flag_settings_account_panel)",
              // 가로/세로 크기
              "size": [ "100%", 50 ],
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // ???/?? ??
                  "background": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "textures/ui/White",
                    // 가로/세로 크기
                    "size": [ "100%", "100%" ],
                    // ???
                    "alpha": "$rainbowpie_ui_theme_text_background_alpha",
                    // ?? (R,G,B,A)
                    "color": "$rainbowpie_ui_theme_text_background_color",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": -1,
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
                          "size": [ 48, 48 ],
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
                          "size": [ 48, 48 ],
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
                        "gamertag_label@rainbowpie_ui_common.text_label": {
                          // 기준점에서 이동하는 거리
                          "offset": [ 51, 6 ],
                          // 가로/세로 크기
                          "size": [ "100% - 51px", 20 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "top_left",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "top_left",
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 1,
                          // 보여줄 글자
                          "text": "#gamertag_label",
                          // ?? ?? ??
                          "font_scale_factor": 1.5,
                          // 게임 값과 연결하는 규칙 목록
                          "bindings": [
                            {
                              // 가져올 값 이름
                              "binding_name": "#gamertag_label"
                            },
                            {
                              // 가져올 값 이름
                              "binding_name": "#logged_in",
                              // 가져온 값을 다른 속성으로 연결
                              "binding_name_override": "#visible"
                            }
                          ]
                        }
                      },
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "manage_account_button@settings_common.action_button": {
                          // 오버라이드 가능한 변수
                          "$button_image_size": [ "100% - 1px", "100% - 1px" ],
                          // 오버라이드 가능한 변수
                          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                          // 완전히 제거(공간도 없음)
                          "ignored": "($is_ios or $is_android)",
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "top_left",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "top_left",
                          // 오버라이드 가능한 변수
                          "$pressed_button_name": "manage_account_button",
                          // 오버라이드 가능한 변수
                          "$button_text": "options.manageAccount",
                          // 가로/세로 크기
                          "size": [ "100% - 50px", 23 ],
                          // 기준점에서 이동하는 거리
                          "offset": [ 49.5, 26.5 ],
                          // 게임 값과 연결하는 규칙 목록
                          "bindings": [
                            {
                              // 가져올 값 이름
                              "binding_name": "#logged_in",
                              // 가져온 값을 다른 속성으로 연결
                              "binding_name_override": "#visible"
                            }
                          ]
                        }
                      },
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "sign_out_action_button@settings_common.action_button": {
                          // 오버라이드 가능한 변수
                          "$button_image_size": [ "100% - 1px", "100% - 1px" ],
                          // 오버라이드 가능한 변수
                          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                          // 완전히 제거(공간도 없음)
                          "ignored": "(not $is_ios and not $is_android)",
                          // ??/???
                          "enabled": "$is_pregame",
                          // 오버라이드 가능한 변수
                          "$pressed_button_name": "sign_out_button",
                          // 오버라이드 가능한 변수
                          "$button_text": "xbox.signOutLong",
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "top_left",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "top_left",
                          // 가로/세로 크기
                          "size": [ "100% - 50px", 23 ],
                          // 기준점에서 이동하는 거리
                          "offset": [ 49.5, 26.5 ],
                          // 게임 값과 연결하는 규칙 목록
                          "bindings": [
                            {
                              // 가져올 값 이름
                              "binding_name": "#logged_in",
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
                          "offset": [ 51, 6 ],
                          // 가로/세로 크기
                          "size": [ "100% - 51px", 20 ],
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "top_left",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "top_left",
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 1,
                          // 보여줄 글자
                          "text": "#player_name",
                          // ?? ?? ??
                          "font_scale_factor": 1.5,
                          // 게임 값과 연결하는 규칙 목록
                          "bindings": [
                            {
                              // 가져올 값 이름
                              "binding_name": "#player_name"
                            },
                            {
                              // 가져올 값 이름
                              "binding_name": "#not_logged_in",
                              // 가져온 값을 다른 속성으로 연결
                              "binding_name_override": "#visible"
                            }
                          ]
                        }
                      },
                      {
                        // 다른 템플릿을 가져와서 확장(상속)
                        "sign_in_action_button@settings_common.action_button": {
                          // 오버라이드 가능한 변수
                          "$button_image_size": [ "100% - 1px", "100% - 1px" ],
                          // 오버라이드 가능한 변수
                          "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                          // ??/???
                          "enabled": "$is_pregame",
                          // 오버라이드 가능한 변수
                          "$pressed_button_name": "sign_in_button",
                          // 오버라이드 가능한 변수
                          "$button_text": "xbox.signin",
                          // 기준점(어디에서 시작할지)
                          "anchor_from": "top_left",
                          // 붙일 위치(어디에 놓을지)
                          "anchor_to": "top_left",
                          // 가로/세로 크기
                          "size": [ "100% - 50px", 23 ],
                          // 기준점에서 이동하는 거리
                          "offset": [ 49.5, 26.5 ],
                          // 게임 값과 연결하는 규칙 목록
                          "bindings": [
                            {
                              // 가져올 값 이름
                              "binding_name": "#not_logged_in",
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
            "rp_spacer_1": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 완전히 제거(공간도 없음)
              "ignored": "(not $include_controls_and_settings_sections or not $is_xboxlive_enabled or not $rainbowpie_ui_flag_settings_account_panel)",
              // 가로/세로 크기
              "size": [ 1, 1 ]
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "perspective_dropdown@settings_common.option_dropdown": {
              // 오버라이드 가능한 변수
              "$option_generic_panel_size": [ "100%", 25 ],
              // 오버라이드 가능한 변수
              "$show_option_label": false,
              // 오버라이드 가능한 변수
              "$option_dropdown_size": [ "100%", 25 ],
              // 보이기/숨기기(공간 유지)
              "visible": "($include_controls_and_settings_sections and $touch)",
              // 완전히 제거(공간도 없음)
              "ignored": "($is_holographic and $is_reality_mode or $is_pregame or not $rainbowpie_ui_flag_settings_quick_perspective)",
              // 오버라이드 가능한 변수
              "$dropdown_content": "general_section.third_person_dropdown_content",
              // 오버라이드 가능한 변수
              "$dropdown_area": "content_area",
              // 오버라이드 가능한 변수
              "$dropdown_name": "third_person_dropdown",
              // 오버라이드 가능한 변수
              "$option_enabled_binding_name": "#third_person_dropdown_enabled",
              // 오버라이드 가능한 변수
              "$options_dropdown_toggle_label_binding": "#third_person_dropdown_toggle_label",
              // 오버라이드 가능한 변수
              "$dropdown_scroll_content_size": [ "100%", "200%" ],

              // 오버라이드 가능한 변수
              "$rainbowpie_localui_dropdown_show_button": false,
              // 오버라이드 가능한 변수
              "$option_dropdown_type": "rainbowpie_ui_common.rainbowpie_ui_dropdown",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_dropdown_offset": [ 0, 2 ],
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_dropdown_content": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_dropdown_radio_image": true,
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_dropdown_radio_image_texture": "($rainbowpie_ui_path_theme + '/icon/settings/firstperson')",
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
                    "$rainbowpie_localui_dropdown_radio_image": true,
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_dropdown_radio_image_texture": "($rainbowpie_ui_path_theme + '/icon/settings/thirdpersonback')",
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
                    "$rainbowpie_localui_dropdown_radio_image": true,
                    // 오버라이드 가능한 변수
                    "$rainbowpie_localui_dropdown_radio_image_texture": "($rainbowpie_ui_path_theme + '/icon/settings/thirdpersonfront')",
                    // 오버라이드 가능한 변수
                    "$toggle_state_binding_name": "#thirdperson_radio_third_front",
                    // 오버라이드 가능한 변수
                    "$radio_label_text": "options.thirdperson.thirdpersonfront"
                  }
                }
              ]
            }
          },
          {
            // ???/?? ??
            "rp_spacer_2": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 보이기/숨기기(공간 유지)
              "visible": "($include_controls_and_settings_sections and $touch)",
              // 완전히 제거(공간도 없음)
              "ignored": "($is_holographic and $is_reality_mode or $is_pregame or not $rainbowpie_ui_flag_settings_quick_perspective)",
              // 가로/세로 크기
              "size": [ 1, 1 ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "video_button",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "graphics_button@rainbowpieui_general_section.graphics_button": {
              // 오버라이드 가능한 변수
              "$toggle_group_forced_index": 3504
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "raytracing_button@rainbowpieui_general_section.raytracing_button": {
              // 오버라이드 가능한 변수
              "$toggle_group_forced_index": 3503
            }
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
            // ???/?? ??
            "rainbowpie_spacer_1": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 1, 1 ]
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "rainbowpie_selector_group_label_1@settings_common.selector_group_label": {
              // 완전히 제거(공간도 없음)
              "ignored": "($rainbowpie_ui_feature_markbest)",
              // 보여줄 글자
              "text": "rainbowpie.ui.global.title"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "uitest_button@rainbowpieui_general_section.uitest_button": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_debug)",
              // 오버라이드 가능한 변수
              "$toggle_group_forced_index": 3201
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "theme_button@rainbowpieui_general_section.theme_button": {
              // 오버라이드 가능한 변수
              "$toggle_group_forced_index": 3501
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "module_button@rainbowpieui_general_section.module_button": {
              // 오버라이드 가능한 변수
              "$toggle_group_forced_index": 3502
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "about_button@rainbowpieui_general_section.about_button": {
              // 오버라이드 가능한 변수
              "$toggle_group_forced_index": 3503
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "section_content_panels/general_and_controls_sections": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "video_section",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "graphics_section@rainbowpieui_general_section.graphics_section": {}
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "raytracing_section@rainbowpieui_general_section.raytracing_section": {}
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
          { "uitest_tab_section@rainbowpieui_general_section.uitest_tab_section": { "ignored": "(not $rainbowpie_ui_debug)", "visible": false } },
          { "theme_section@rainbowpieui_general_section.theme_section": { "visible": false } },
          { "module_section@rainbowpieui_general_section.module_section": { "visible": false } },
          { "about_section@rainbowpieui_general_section.about_section": { "visible": false } }
        ]
      }
    ]
  },

  // ???/?? ??
  "section_header_panels/general_and_controls_sections": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          { "global_texture_pack_header@rainbowpieui_general_section.global_texture_pack_header": { "visible": false } }
        ]
      }
    ]
  },

  // ???/?? ??
  "section_header_panels/world_sections": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          { "level_texture_pack_header@rainbowpieui_world_section.level_texture_pack_header": { "visible": false } },
          { "addon_header@rainbowpieui_world_section.addon_header": { "visible": false } }
        ]
      }
    ]
  },

  // ???/?? ??
  "section_content_panels/general_and_controls_sections/language_section": {
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane/language_button": {
    // 완전히 제거(공간도 없음)
    "ignored": false
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane/selector_group_label_2": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_feature_markbest)"
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane/spacer_04_no_spatial": {
    // 가로/세로 크기
    "size": [ 1, 1 ]
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane/spacer_05_no_spatial": {
    // 가로/세로 크기
    "size": [ 1, 1 ]
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane/selector_group_label_1": {
    // 완전히 제거(공간도 없음)
    "ignored": "($rainbowpie_ui_feature_markbest)"
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane/spacer_1_no_spatial": {
    // 가로/세로 크기
    "size": [ 1, 1 ]
  },

  // ???/?? ??
  "selector_stack_panel/spacer_0": {
    // 완전히 제거(공간도 없음)
    "ignored": "((not $include_world_section) or $rainbowpie_ui_feature_markbest)"
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane/selector_group_label_3": {
    // 가로/세로 크기
    "size": [ 1, 1 ],
    // 완전히 제거(공간도 없음)
    "ignored": "($is_publish or $rainbowpie_ui_feature_markbest)"
  },

  // ???/?? ??
  "selector_stack_panel/controls_and_settings_selector_pane/spacer_4_no_spatial": {
    // 가로/세로 크기
    "size": [ 1, 1 ]
  }
}
```








### 기본
sidebar_navigation.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: sidebar_navigation.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "sidebar_navigation",

  // ???/?? ??
  "content_view/content_view_stack/sidebar_view_stack": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "divider",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "padding": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $is_sidebar_navigation_enabled)",
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 가로/세로 크기
              "size": [ 2, 2 ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "sidebar_views/sidebar_view_conent/verbose_side_bar_view_modal/verbose_sidebar_view": {
    // 오버라이드 가능한 변수
    "$sidebar_view_size": [ 143, "100%" ]
  },

  // ???/?? ??
  "sidebar_section_scroll_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_size": [ 0, "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 0, 0 ]
  },

  // ???/?? ??
  "verbose_toggle": {
    // 오버라이드 가능한 변수
    "$content_toggle_label_font_type": "$rainbowpie_ui_theme_global_font_name"
  },

  // ???/?? ??
  "verbose_button_content/button_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "verbose_screen_nav_button": {
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_content_button"
  },

  // ???/?? ??
  "sidebar_view_content_panel/verbose_view_exit": {
    // 오버라이드 가능한 변수
    "$search_filter_sort_bg_alpha": 0
  },

  // ???/?? ??
  "sidebar_view_content_panel": {
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
            "sidebar_and_blur_background_panel@rainbowpieui_sidebar_navigation.sidebar_and_blur_background_panel": {}
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "sidebar_divider": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "sidebar_toggle": {
    // 오버라이드 가능한 변수
    "$unchecked_locked_texture": "",
    // 오버라이드 가능한 변수
    "$checked_locked_texture": "",
    // 오버라이드 가능한 변수
    "$default_texture": "",

    // 오버라이드 가능한 변수
    "$default_checked_texture_color": [ 1.0, 1.0, 1.0 ],
    // 오버라이드 가능한 변수
    "$default_checked_texture_alpha": 0.4,
    // 오버라이드 가능한 변수
    "$hover_texture": "textures/ui/White",
    // 오버라이드 가능한 변수
    "$hover_texture_color": [ 1.0, 1.0, 1.0 ],
    // 오버라이드 가능한 변수
    "$hover_texture_alpha": 0.4,
    // 오버라이드 가능한 변수
    "$hover_checked_texture_color": [ 1.0, 1.0, 1.0 ],
    // 오버라이드 가능한 변수
    "$hover_checked_texture_alpha": 0.5
  },

  // ???/?? ??
  "edge_bar": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "verbose_sidebar_expand_section_bg": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "sidebar_view_content_panel/view_stack_panel/sidebar_view": {
    // 사용할 이미지 경로
    "texture": ""
  },

  // ???/?? ??
  "sidebar_views/sidebar_view_conent/simple_sidebar_view": {
    // 오버라이드 가능한 변수
    "$sidebar_view_size": [ 32, "100%" ]
  },

  // ???/?? ??
  "content_view/content_view_stack/sidebar_view_stack/divider": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "sidebar_view": {
    // ?? ?? ??
    "modifications": [
      {
        // ??? ???
        "control_name": "sidebar_content",
        // ?? ??
        "operation": "insert_after",
        // ??? ?
        "value": [
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "screen_content@rainbowpie_ui_common.screen_content": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_screen_content": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "content_view@sidebar_navigation.content_view": {}
                }
              ]
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "sidebar_view/content_view": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  }
}
```








### 기본
sign_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: sign_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "sign",

  // ???/?? ??
  "sign_background": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, -5 ]
  },

  // ???/?? ??
  "sign_screen_content": {
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
            "button_panel": {
              // 줄맞춤 컨테이너: 가로/세로로 자동 배치
              "type": "stack_panel",
              // 쌓는 방향(가로/세로)
              "orientation": "horizontal",
              // 가로/세로 크기
              "size": [ 185, 30 ],
              // 기준점에서 이동하는 거리
              "offset": [ 0, 68 ],
              // 기준점(어디에서 시작할지)
              "anchor_from": "center",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "center",
              // 이 안에 들어가는 부품 목록
              "controls": [
                {
                  // 다른 템플릿을 가져와서 확장(상속)
                  "done_button@common_buttons.light_text_button": {
                    // 오버라이드 가능한 변수
                    "$button_state_panel": "rainbowpie_ui_button.rainbowpie_ui_text_button",
                    // 오버라이드 가능한 변수
                    "$pressed_button_name": "button.menu_exit",
                    // 오버라이드 가능한 변수
                    "$button_text": "gui.done",
                    // 가로/세로 크기
                    "size": [ "fill", "100%" ]
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
  "base_sign_text_multiline": {
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
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
      }
    ]
  },

  // ???/?? ??
  "sign_screen_content/invisible_exit_background": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "sign_screen": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "sign",
    // 오버라이드 가능한 변수
    "$screen_content": "rainbowpieui_sign.sign_screen_content",
    // ?? ??
    "force_render_below": true,
    // ?? ??
    "close_on_player_hurt": false
  }
}
```








### 기본
smithing_table_2_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: smithing_table_2_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "smithing_table_2",

  // ???/?? ??
  "arrow_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "cross_out_icon_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/crossout')"
  },

  // ???/?? ??
  "upgrade_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "icon_and_text_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "smithing_table_panel": {
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
            "smithing_table_root_panel@rainbowpieui_smithing_table_2.smithing_table_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "smithing_table_panel/root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492"
  },

  // ???/?? ??
  "smithing_table_panel/root_panel/toolbar_anchor": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "smithing_table_panel/root_panel/common_panel": {
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
  "smithing_table_panel/root_panel/smithing_table_screen_inventory": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "container.smithing_table.upgrade"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
smithing_table_2_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: smithing_table_2_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "smithing_table_2_pocket",

  // ???/?? ??
  "crafting_arrow": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_inactive')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "cross_out_image": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/crossout')"
  },

  // ???/?? ??
  "right_navigation_tabs/pocket_tab_close_and_help_button": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_navigation_tabs/fill": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_navigation_tabs/right_tab_smithing_table": {
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
  "smithing_table_contents_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
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
  "upgrade_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "right_tab_smithing_table": {
    // 오버라이드 가능한 변수
    "$checked_bar_anchor": "right",
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_image_size": [ "100% - 4px", "100%" ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor": "right_middle",
    // 오버라이드 가능한 변수
    "$tab_content_size": [ "100% - 4px", "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor": "right_middle",
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
  "right_panel/content/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
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
start_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: start_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "start",

  // ???/?? ??
  "start_screen": {
    // 오버라이드 가능한 변수
    "$is_pregame": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingame": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_watermark": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_modified": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_alias": "start",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backup_screen_content": "rainbowpieui_start.start_screen_content",
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
            "requires": "($rainbowpie_ui_flag_8dcce82d)",
            // 오버라이드 가능한 변수
            "$rainbowpie_ui_localui_watermark_offset": [ 0, -50 ]
          }
        ]
      }
    ]
  }
}
```








### 기본
stonecutter_screen.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: stonecutter_screen.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "stonecutter",

  // ???/?? ??
  "arrow_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "stone_book_panel/scroll_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 가로/세로 크기
    "size": [ "100% - 13px", "100% - 11px" ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -5 ]
  },

  // ???/?? ??
  "stone_book_panel/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -2 ],
    // 가로/세로 크기
    "size": [ "100% - 8px", "100% - 5px" ]
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
  "stonecutter_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "top_half_panel": {
    // 기준점에서 이동하는 거리
    "offset": [ 0, 25 ]
  },

  // ???/?? ??
  "right_panel/stonecutter_screen_inventory/stonecutter_label": {
    // 완전히 제거(공간도 없음)
    "ignored": true
  },

  // ???/?? ??
  "right_panel": {
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
            "stonecutter_inventory_root_panel@rainbowpieui_stonecutter.stonecutter_inventory_root_panel": {
              // 완전히 제거(공간도 없음)
              "ignored": "(not $rainbowpie_ui_flag_84df7492)"
            }
          }
        ]
      }
    ]
  },

  // ???/?? ??
  "right_panel/common_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492",
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
  "right_panel/stonecutter_screen_inventory": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image",
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
            "inventory_header@rainbowpie_ui_inventory.header": {
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_inventoryheader_title": "container.stonecutter"
            }
          }
        ]
      }
    ]
  }
}
```








### 기본
stonecutter_screen_pocket.json
기본 UI 모음 2 · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: stonecutter_screen_pocket.json
// 분류: 기본 UI 모음 2 / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "stonecutter_pocket",

  // ???/?? ??
  "vertical_arrow_icon": {
    // 사용할 이미지 경로
    "texture": "($rainbowpie_ui_path_theme + '/icon/inventory/arrow_down_large')",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "right_navigation_tabs/close": {
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
  "stonecutter_content_stack_panel": {
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
  },

  // ???/?? ??
  "pattern_scroll_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "rainbowpie_ui_common.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$background_images": "rainbowpie_ui_common.cell_image"
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
  "inventory_panel/inventory_title_label_centerer/inventory_title_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_title_color"
  },

  // ???/?? ??
  "right_tab_stonecutter": {
    // 오버라이드 가능한 변수
    "$checked_bar_anchor": "right",
    // 오버라이드 가능한 변수
    "$tab_panel": "rainbowpie_ui_tab.tab_panel",
    // 오버라이드 가능한 변수
    "$tab_image_size": [ "100% - 4px", "100%" ],
    // 오버라이드 가능한 변수
    "$tab_image_anchor": "right_middle",
    // 오버라이드 가능한 변수
    "$tab_content_size": [ "100% - 4px", "100% - 8px" ],
    // 오버라이드 가능한 변수
    "$tab_content_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$tab_content_anchor": "right_middle",
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
  "right_panel/content/bg": {
    // 오버라이드 가능한 변수
    "$dialog_background": "rainbowpie_ui_common.inventory_background"
  },

  // ???/?? ??
  "left_tab_stones": {
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









[분할 목록으로 돌아가기](preview.html#example-view)

