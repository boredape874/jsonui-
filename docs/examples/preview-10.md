---
title: 예제 미리보기 (10/12)
outline: false
search: false
---

# 예제 미리보기 (10/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### 단일 파일
hud_screen(4).json
추가 HUD 예제 · 단일 파일



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen(4).json
// 분류: 추가 HUD 예제 / 단일 파일
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "hud",

	//---------------------------------------------------------------------------
	// Hud Screen
	//---------------------------------------------------------------------------
	"hud_player_renderer": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [15, 15],

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

	// ???/?? ??
	"hotbar_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 오버라이드 가능한 변수
		"$hotbar_renderer_size|default": [20, 22],
		// 커스텀 렌더러 종류
		"renderer": "hotbar_renderer",
		// 가로/세로 크기
		"size": "$hotbar_renderer_size",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 목록 이름
				"binding_collection_name": "$hotbar_collection_name",
				// 목록 인덱스/현재 항목 정보 제공
				"binding_type": "collection_details"
			},
			{
				// 가져올 값 이름
				"binding_name": "#hotbar_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hotbar_slot_image@hotbar_slot_image": {
					// 오버라이드 가능한 변수
					"$hotbar_slot_image_size": "$hotbar_renderer_size"
				}
			}
		]
	},

	// ???/?? ??
	"cooldown_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "hotbar_cooldown_renderer",
		// 가로/세로 크기
		"size": [20, 22],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 목록 이름
				"binding_collection_name": "$hotbar_collection_name",
				// 목록 인덱스/현재 항목 정보 제공
				"binding_type": "collection_details"
			}
		]
	},

	// ???/?? ??
	"heart_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 가로/세로 크기
		"size": [1, 1],
		// 커스텀 렌더러 종류
		"renderer": "heart_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#show_survival_ui",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	},

	// ???/?? ??
	"horse_heart_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 가로/세로 크기
		"size": [1, 1],
		// 커스텀 렌더러 종류
		"renderer": "horse_heart_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1
	},

	// ???/?? ??
	"armor_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 가로/세로 크기
		"size": [1, 1],
		// 커스텀 렌더러 종류
		"renderer": "armor_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#is_armor_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	},

	// ???/?? ??
	"exp_progress_bar_and_hotbar": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["100%c", 31],
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_middle",
		// 기준점에서 이동하는 거리
		"offset": "$xp_control_offset",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"resizing_xp_bar_with_hotbar": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%c", 5],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"empty_progress_bar@empty_progress_bar": {
								// 가로/세로 크기
								"size": ["100%c", 5],
								// 겹치는 순서(숫자 클수록 위)
								"layer": 1,
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// 다른 템플릿을 가져와서 확장(상속)
										"full_progress_bar@full_progress_bar": {
											// 가로/세로 크기
											"size": ["100%c + 10px", 5],
											// 겹치는 순서(숫자 클수록 위)
											"layer": 2,
											// 이 안에 들어가는 부품 목록
											"controls": [
												{
													// 다른 템플릿을 가져와서 확장(상속)
													"progress_bar_nub@progress_bar_nub": {
														// 가로/세로 크기
														"size": [
															"100%c - 10px",
															5
														],
														// ?? ?? ?
														"max_size": [190, 5],
														// 겹치는 순서(숫자 클수록 위)
														"layer": 3,
														// 이 안에 들어가는 부품 목록
														"controls": [
															{
																// 다른 템플릿을 가져와서 확장(상속)
																"horse_jump_rend@horse_jump_renderer": {
																	// 기준점(어디에서 시작할지)
																	"anchor_from": "bottom_middle",
																	// 붙일 위치(어디에 놓을지)
																	"anchor_to": "bottom_middle",
																	// 가로/세로 크기
																	"size": [
																		"100%c",
																		5
																	],
																	// 겹치는 순서(숫자 클수록 위)
																	"layer": 7,
																	// 이 안에 들어가는 부품 목록
																	"controls": [
																		{
																			// 다른 템플릿을 가져와서 확장(상속)
																			"dash_rend@dash_renderer": {
																				// 기준점(어디에서 시작할지)
																				"anchor_from": "bottom_middle",
																				// 붙일 위치(어디에 놓을지)
																				"anchor_to": "bottom_middle",
																				// 가로/세로 크기
																				"size": [
																					"100%c",
																					5
																				],
																				// 겹치는 순서(숫자 클수록 위)
																				"layer": 7,
																				// 이 안에 들어가는 부품 목록
																				"controls": [
																					{
																						// 다른 템플릿을 가져와서 확장(상속)
																						"hotbar@hotbar_chooser": {
																							// 기준점에서 이동하는 거리
																							"offset": [
																								4,
																								16
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
							"progress_text_label@progress_text_label": {
								// 기준점에서 이동하는 거리
								"offset": [0, 0],
								// 겹치는 순서(숫자 클수록 위)
								"layer": 7
							}
						}
					],
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#hotbar_with_xp_bar",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible"
						}
					]
				}
			},
			// For when we hide the XP bar in Creative Move we still want to display the HUD
			{
				// ???/?? ??
				"resizing_hotbar_no_xp_bar": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%c", 5],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"horse_jump_rend@horse_jump_renderer": {
								// 기준점(어디에서 시작할지)
								"anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "bottom_middle",
								// 가로/세로 크기
								"size": ["100%c", 5],
								// 겹치는 순서(숫자 클수록 위)
								"layer": 7,
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#hotbar_no_xp_bar",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#visible"
									}
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// 다른 템플릿을 가져와서 확장(상속)
										"dash_rend@dash_renderer": {
											// 기준점(어디에서 시작할지)
											"anchor_from": "bottom_middle",
											// 붙일 위치(어디에 놓을지)
											"anchor_to": "bottom_middle",
											// 가로/세로 크기
											"size": ["100%c", 5],
											// 겹치는 순서(숫자 클수록 위)
											"layer": 7,
											// 이 안에 들어가는 부품 목록
											"controls": [
												{
													// 다른 템플릿을 가져와서 확장(상속)
													"hotbar@hotbar_chooser": {
														// 기준점에서 이동하는 거리
														"offset": [4, 16]
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
				"item_text_factory": {
					// 가로/세로 크기
					"size": [100, 10],
					// 리스트를 자동으로 생성하는 공장
					"type": "factory",
					// 팩토리 템플릿 매핑
					"control_ids": {
						// ??? ?? ?
						"item_text": "@hud.item_name_text",
						// ??? ?? ?
						"jukebox_text": "@hud.jukebox_popup_text"
					}
				}
			}
		]
	},

	// redo layout for exp and progress bar to work with the binding trick
	// without touching classic
	"exp_progress_bar_and_hotbar_pocket": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["100%", "100%"],
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_middle",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"resizing_xp_bar_with_hotbar": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%", 5],
					// 기준점(어디에서 시작할지)
					"anchor_from": "bottom_middle",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "bottom_middle",
					// ??/?? ?
					"use_anchored_offset": true,
					// 이 컨트롤 안에서 쓰는 임시 저장소
					"property_bag": {
						// ???/??? ?
						"#anchored_offset_value_y": 0.0,
						// ???/??? ?
						"#size_binding_x": 0.0,
						// ???/??? ?
						"#size_binding_y": 0.0
					},
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"empty_progress_bar@empty_progress_bar": {
								// 가로/세로 크기
								"size": ["100%", "100%"],
								// 겹치는 순서(숫자 클수록 위)
								"layer": 1,
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// 다른 템플릿을 가져와서 확장(상속)
										"full_progress_bar@full_progress_bar": {
											// 가로/세로 크기
											"size": ["100%", "100%"],
											// 겹치는 순서(숫자 클수록 위)
											"layer": 2,
											// 이 안에 들어가는 부품 목록
											"controls": [
												{
													// 다른 템플릿을 가져와서 확장(상속)
													"progress_bar_nub@progress_bar_nub": {
														// 가로/세로 크기
														"size": ["99%", "100%"],
														// 겹치는 순서(숫자 클수록 위)
														"layer": 3
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
							"progress_text_label@progress_text_label": {
								// 기준점에서 이동하는 거리
								"offset": [0, 0],
								// 겹치는 순서(숫자 클수록 위)
								"layer": 7
							}
						}
					],
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#hotbar_with_xp_bar",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible"
						},
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_and_text_offset_y",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#anchored_offset_value_y"
						},
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_size_x",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#size_binding_x"
						},
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_size_y",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#size_binding_y"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hotbar_panel@hotbar_panel_pocket": {}
			},
			{
				// ???/?? ??
				"item_text": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 기준점에서 이동하는 거리
					"offset": [0, 0],
					// 기준점(어디에서 시작할지)
					"anchor_from": "bottom_middle",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "bottom_middle",
					// ??/?? ?
					"use_anchored_offset": true,
					// 이 컨트롤 안에서 쓰는 임시 저장소
					"property_bag": {
						// ???/??? ?
						"#anchored_offset_value_y": 0.0
					},
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_and_text_offset_y",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#anchored_offset_value_y"
						}
					],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"item_text_factory": {
								// 가로/세로 크기
								"size": [100, 10],
								// 리스트를 자동으로 생성하는 공장
								"type": "factory",
								// 팩토리 템플릿 매핑
								"control_ids": {
									// ??? ?? ?
									"item_text": "@hud.item_name_text_root",
									// ??? ?? ?
									"jukebox_text": "@hud.jukebox_popup_text"
								}
							}
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"horse_jump_rend@horse_jump_renderer": {
					// 겹치는 순서(숫자 클수록 위)
					"layer": 7,
					// 가로/세로 크기
					"size": ["100%", 5],
					// 기준점(어디에서 시작할지)
					"anchor_from": "bottom_middle",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "bottom_middle",
					// ??/?? ?
					"use_anchored_offset": true,
					// 이 컨트롤 안에서 쓰는 임시 저장소
					"property_bag": {
						// ???/??? ?
						"#anchored_offset_value_y": 0.0,
						// ???/??? ?
						"#size_binding_x": 0.0,
						// ???/??? ?
						"#size_binding_y": 0.0
					},
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_and_text_offset_y",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#anchored_offset_value_y"
						},
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_size_x",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#size_binding_x"
						},
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_size_y",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#size_binding_y"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"dash_rend@dash_renderer": {
					// 겹치는 순서(숫자 클수록 위)
					"layer": 7,
					// 가로/세로 크기
					"size": ["100%", 5],
					// 기준점(어디에서 시작할지)
					"anchor_from": "bottom_middle",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "bottom_middle",
					// ??/?? ?
					"use_anchored_offset": true,
					// 이 컨트롤 안에서 쓰는 임시 저장소
					"property_bag": {
						// ???/??? ?
						"#anchored_offset_value_y": 0.0,
						// ???/??? ?
						"#size_binding_x": 0.0,
						// ???/??? ?
						"#size_binding_y": 0.0
					},
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_and_text_offset_y",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#anchored_offset_value_y"
						},
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_size_x",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#size_binding_x"
						},
						{
							// 가져올 값 이름
							"binding_name": "#exp_bar_size_y",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#size_binding_y"
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"full_progress_bar": {
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/experiencebarfull",
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
	},

	// ???/?? ??
	"empty_progress_bar": {
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/experiencebarempty"
	},

	// ???/?? ??
	"progress_bar_nub": {
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/experiencenub",
		// 이미지 반복 여부
		"tiled": "x"
	},

	// ???/?? ??
	"progress_text_label": {
		// 글자 표시
		"type": "label",
		// ?? ??
		"shadow": true,
		// 보여줄 글자
		"text": "#level_number",
		// ?? (R,G,B,A)
		"color": "$experience_text_color",
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_middle",
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
	},

	// ???/?? ??
	"horse_jump_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "horse_jump_renderer"
	},

	// ???/?? ??
	"dash_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "dash_renderer"
	},

	// ???/?? ??
	"hunger_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 가로/세로 크기
		"size": [1, 1],
		// 커스텀 렌더러 종류
		"renderer": "hunger_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#show_survival_ui",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	},

	// ???/?? ??
	"bubbles_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 가로/세로 크기
		"size": [1, 1],
		// 커스텀 렌더러 종류
		"renderer": "bubbles_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1
	},

	// ???/?? ??
	"mob_effects_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "mob_effects_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1
	},

	// ???/?? ??
	"vignette_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "vignette_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 0
	},

	// ???/?? ??
	"editor_gizmo_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "editor_gizmo_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1
	},

	// ???/?? ??
	"cursor_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 가로/세로 크기
		"size": [16, 16],
		// 커스텀 렌더러 종류
		"renderer": "cursor_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 4
	},

	// ???/?? ??
	"progress_indicator_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "progress_indicator_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 4
	},

	// ???/?? ??
	"camera_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "camera_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1
	},

	// ???/?? ??
	"editor_volume_highlight_renderer": {
		// 특수 렌더러(그라디언트/플레이어 등)
		"type": "custom",
		// 커스텀 렌더러 종류
		"renderer": "editor_volume_highlight_renderer",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 4
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"hotbar_hud_item_icon@common.item_renderer": {
		// 오버라이드 가능한 변수
		"$item_collection_name": "$hotbar_collection_name",
		// 이 컨트롤 안에서 쓰는 임시 저장소
		"property_bag": {
			// ?? ??
			"force_update": true
		}
	},

	// ???/?? ??
	"elipses_image": {
		// 이미지 표시
		"type": "image",
		// 오버라이드 가능한 변수
		"$elipses_image_size|default": [14, 4],
		// 사용할 이미지 경로
		"texture": "textures/ui/elipses",
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 가로/세로 크기
		"size": "$elipses_image_size",
		// 기준점에서 이동하는 거리
		"offset": [0.0, 0.5],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 30,
		// ???
		"alpha": 0.65
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"bound_button_label@button_label": {
		// 보여줄 글자
		"text": "$label_bind_name",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "$label_bind_name",
				// 게임이 주는 전역 값 연결
				"binding_type": "global"
			}
		]
	},

	// ???/?? ??
	"default_borderless_button_layout": {
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/button_borderless_light",
		// ???
		"alpha": 0.45
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"hover_borderless_button_layout@default_borderless_button_layout": {
		// 사용할 이미지 경로
		"texture": "textures/ui/button_borderless_lighthover"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"pressed_borderless_button_layout@default_borderless_button_layout": {
		// 사용할 이미지 경로
		"texture": "textures/ui/button_borderless_lightpressed"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"borderless_button@common.button": {
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"default@default_borderless_button_layout": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hover@hover_borderless_button_layout": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"pressed@pressed_borderless_button_layout": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"elipses@elipses_image": {}
			}
		]
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"hotbar_elipses_button@borderless_button": {
		// 오버라이드 가능한 변수
		"$pressed_button_name": "button.hotbar_inventory_button",
		// 오버라이드 가능한 변수
		"$hotbar_elipses_button_size|default": [16, 16],
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 가로/세로 크기
		"size": "$hotbar_elipses_button_size",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 3,
		// 포커스 가능 여부
		"focus_enabled": false,
		// 처음 포커스 우선순위
		"default_focus_precedence": 10,
		// 입력 키/버튼과 동작 연결
		"button_mappings": [
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.menu_select",
				// 어떤 동작을 실행할지
				"to_button_id": "$pressed_button_name",
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
	},

	// ???/?? ??
	"start_cap_image": {
		// 이미지 표시
		"type": "image",
		// 오버라이드 가능한 변수
		"$cap_image_size|default": [1, 22],
		// 사용할 이미지 경로
		"texture": "textures/ui/hotbar_start_cap",
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_left",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_left",
		// 가로/세로 크기
		"size": "$cap_image_size",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 4,
		// ???
		"alpha": 0.65,
		// 보이기/숨기기(공간 유지)
		"visible": true
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"end_cap_image@start_cap_image": {
		// 사용할 이미지 경로
		"texture": "textures/ui/hotbar_end_cap"
	},

	// ???/?? ??
	"hotbar_start_cap": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 오버라이드 가능한 변수
		"$cap_size|default": [1, 22],
		// 가로/세로 크기
		"size": "$cap_size",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"start_cap_image@start_cap_image": {
					// 오버라이드 가능한 변수
					"$cap_image_size": "$cap_size"
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
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"hotbar_end_cap@hotbar_start_cap": {
		// 오버라이드 가능한 변수
		"$cap_size|default": [1, 22],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"end_cap_image@end_cap_image": {
					// 오버라이드 가능한 변수
					"$cap_image_size": "$cap_size"
				}
			}
		]
	},

	// ???/?? ??
	"heart_image": {
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/heart_background",
		// 가로/세로 크기
		"size": [9, 9],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// ???
		"alpha": 0.65
	},

	// ???/?? ??
	"hotbar_slot_image": {
		// 오버라이드 가능한 변수
		"$hotbar_slot_image_size|default": [20, 22],
		// 이미지 표시
		"type": "image",
		// 기준점에서 이동하는 거리
		"offset": [0, 0],
		// 가로/세로 크기
		"size": "$hotbar_slot_image_size",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// ???
		"alpha": 1
	},

	// ???/?? ??
	"hotbar_slot_selected_image": {
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/selected_hotbar_slot",
		// 가로/세로 크기
		"size": [24, 24],
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
	"gui_hotbar_slot_button_prototype": {
		// 클릭 가능한 버튼
		"type": "button",

		// 오버라이드 가능한 변수
		"$hotbar_select|default": "button.hotbar_select",

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

		// 겹치는 순서(숫자 클수록 위)
		"layer": 2,
		// 입력 키/버튼과 동작 연결
		"button_mappings": [
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.menu_select",
				// 어떤 동작을 실행할지
				"to_button_id": "$hotbar_select",
				// 입력 시점(pressed 등)
				"mapping_type": "pressed",
				// ?? ?? ?
				"button_up_right_of_first_refusal": true
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.menu_ok",
				// 어떤 동작을 실행할지
				"to_button_id": "button.hotbar_ok",
				// 입력 시점(pressed 등)
				"mapping_type": "focused"
			},
			{
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_pressed",
				// 입력 시점(pressed 등)
				"mapping_type": "pressed"
			}
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 목록 이름
				"binding_collection_name": "$hotbar_collection_name",
				// 목록 인덱스/현재 항목 정보 제공
				"binding_type": "collection_details"
			}
		]
	},

	// Displays player's position in the form "Position: 0, 0, 0", as well as "Agent Pos: 0, 0, 0" if an owned agent is present
	"player_position": {
		// 이미지 표시
		"type": "image",
		// 가로/세로 크기
		"size": ["100%c + 6px", "100%c + 2px"],
		// 사용할 이미지 경로
		"texture": "textures/ui/Black",
		// ???
		"alpha": 0.7,
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
					// ??
					"font_type": "MinecraftTen",
					// 보여줄 글자
					"text": "By TrayePlays",
					// ?? ?? ??
					"font_scale_factor": 1.5,
					// 기준점에서 이동하는 거리
					"offset": [0, -2.5],
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
							"binding_condition": "always_when_visible",
							// 게임이 주는 전역 값 연결
							"binding_type": "global"
						}
					],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"trayeImage": {
								// 이미지 표시
								"type": "image",
								// 사용할 이미지 경로
								"texture": "textures/game/traye",
								// 가로/세로 크기
								"size": ["100%", "100%"],
								// 기준점에서 이동하는 거리
								"offset": [70, 1]
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
				"binding_name": "#player_position_visible",
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
		"size": ["100%c + 6px", "100%c + 2px"],
		// 사용할 이미지 경로
		"texture": "textures/ui/Black",
		// ???
		"alpha": 0.7,
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
				"binding_name": "#number_of_days_played_visible",
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
	"anim_chat_txt_alpha": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "in_quart",
		// 걸리는 시간(초)
		"duration": 1,
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
		"duration": "$chat_item_lifetime",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_chat_txt_alpha"
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
		"from": 0.7,
		// 끝 값
		"to": 0
	},

	// ???/?? ??
	"anim_chat_bg_wait": {
		// 잠시 대기
		"anim_type": "wait",
		// 걸리는 시간(초)
		"duration": "$chat_item_lifetime",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_chat_bg_alpha"
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
		"size": ["100%", "default"],
		// ?? ??
		"shadow": true,
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
		"anims": ["@hud.anim_chat_txt_wait"],
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

	// ???/?? ??
	"chat_grid_item": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 가로/세로 크기
		"size": ["100%-2px", "100%c+0.3px"], // Crafted to fit messages with neither gap or overlap
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
					// ???
					"alpha": 0.7,
					// 가로/세로 크기
					"size": ["100%", "100%c"],
					// 애니메이션 목록
					"anims": ["@hud.anim_chat_bg_wait"],
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
								"offset": [2, 0]
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
		//Uncomment when text formatting is being accounted for in word length
		//"clips_children": true,
		"anchor_from": "top_left",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_left",
		// 가로/세로 크기
		"size": ["100%", "100%c"],
		// ?? ?? ?
		"max_size": ["100%", "50%"],

		// 이 안에 들어가는 부품 목록
		"controls": [
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
						"max_children_size": 50,
						// 팩토리 템플릿 매핑
						"control_ids": {
							// ?? ??
							"chat_item": "chat_item@hud.chat_grid_item"
						}
					}
				}
			}
		]
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"item_durability@common.durability_bar": {
		// 오버라이드 가능한 변수
		"$durability_bar_required|default": true,
		// 오버라이드 가능한 변수
		"$item_collection_name": "$hotbar_collection_name"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"item_storage@common.storage_bar": {
		// 오버라이드 가능한 변수
		"$storage_bar_required|default": true,
		// 오버라이드 가능한 변수
		"$item_collection_name": "$hotbar_collection_name"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"container_item_lock_overlay@common.container_item_lock_overlay": {
		// 오버라이드 가능한 변수
		"$item_collection_name": "$hotbar_collection_name"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"item_lock_cell_image@common.item_lock_cell_image": {
		// 오버라이드 가능한 변수
		"$item_collection_name": "$hotbar_collection_name"
	},

	// ???/?? ??
	"gui_hotbar_grid_item": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 가로/세로 크기
		"size": [20, 22],
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
			{"hotbar_slot_selected_image@hotbar_slot_selected_image": {}},
			{"hotbar_renderer@hotbar_renderer": {}},
			{
				// ???/?? ??
				"hotbar_parent": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": [18, 18],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_icon@hotbar_hud_item_icon": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 3,
								// 가로/세로 크기
								"size": [16, 16]
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_count@common.stack_count_label": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 4,
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
									},
									{
										// 가져올 값 이름
										"binding_name": "#stack_count_visible",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#visible",
										// 목록 데이터를 반복 연결
										"binding_type": "collection",
										// 목록 이름
										"binding_collection_name": "$stack_count_collection_name"
									}
								]
							}
						},
						{"hotbar_hint@edu_common.hotbar_hint": {}},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_dura@item_durability": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 5
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_store@item_storage": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 5
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"container_item_lock_overlay@hud.container_item_lock_overlay": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 6,
								// 가로/세로 크기
								"size": [16, 16]
							}
						}
					]
				}
			},
			{"cooldown_renderer@cooldown_renderer": {"layer": 10}},
			{"hotbar_slot_button@gui_hotbar_slot_button_prototype": {}}
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
	},

	// redo layout for each hotbar grid item to work with the binding trick
	// without touching classic
	"gui_hotbar_grid_item_pocket": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 가로/세로 크기
		"size": ["11.11%", "100%"],
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
				// 다른 템플릿을 가져와서 확장(상속)
				"hotbar_slot_selected_image@hotbar_slot_selected_image": {
					// 가로/세로 크기
					"size": ["120%", "120%"]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hotbar_renderer@hotbar_renderer": {
					// 오버라이드 가능한 변수
					"$hotbar_renderer_size": ["105%", "105%"]
				}
			},
			{
				// ???/?? ??
				"hotbar_parent": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_icon@hotbar_hud_item_icon": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 3,
								// 가로/세로 크기
								"size": ["80%", "80%"]
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_count@common.stack_count_label": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 4,
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
									},
									{
										// 가져올 값 이름
										"binding_name": "#stack_count_visible",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#visible",
										// 목록 데이터를 반복 연결
										"binding_type": "collection",
										// 목록 이름
										"binding_collection_name": "$stack_count_collection_name"
									}
								]
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_dura@item_durability": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 5
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"item_store@item_storage": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 5
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"container_item_lock_overlay@hud.container_item_lock_overlay": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 6,
								// 가로/세로 크기
								"size": [16, 16]
							}
						}
					]
				}
			},
			{"cooldown_renderer@cooldown_renderer": {"layer": 10}},
			{"hotbar_slot_button@gui_hotbar_slot_button_prototype": {}}
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
	},

	// ???/?? ??
	"centered_gui_elements": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hud_player_rend_desktop@hud_player_renderer": {
					// 기준점에서 이동하는 거리
					"offset": "$hud_player_rend_desktop_offset",
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left"
				}
			}
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#hud_visible_centered_gui_elements",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible",
				// 게임이 주는 전역 값 연결
				"binding_type": "global"
			}
		]
	},

	// ???/?? ??
	"centered_gui_elements_at_bottom_middle": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_left",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_left",
		// 기준점에서 이동하는 거리
		"offset": [10, -10],
		// 가로/세로 크기
		"size": [180, 50],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"heart_rend@heart_renderer": {
					// 기준점에서 이동하는 거리
					"offset": [-1, -40],
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
					"offset": [180, -56],
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
					"offset": [180, -50],
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
					"offset": [-1, -40],
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
					"offset": [180, -40],
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
					"offset": [180, -50],
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
					"offset": [180, -50],
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
			{"exp_rend@exp_progress_bar_and_hotbar": {}} // for classic
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
	"centered_gui_elements_at_bottom_middle_touch": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_middle",
		// 가로/세로 크기
		"size": [200, 50],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"heart_rend@heart_renderer": {
					// 기준점에서 이동하는 거리
					"offset": [-1, -40],
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
					"offset": [200, -56],
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
					"offset": [200, -50],
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
					"offset": [-1, -40],
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
					"offset": [200, -40],
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
					"offset": [200, -50],
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
					"offset": [200, -50],
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
			{"exp_rend@exp_progress_bar_and_hotbar": {}} // for classic
		],
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
	},

	// ???/?? ??
	"not_centered_gui_elements": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"heart_rend@heart_renderer": {
					// 기준점에서 이동하는 거리
					"offset": [2, 2],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"horse_heart_rend@horse_heart_renderer": {
					// 기준점에서 이동하는 거리
					"offset": [-2, 2],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#horse_hearts_touch",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hunger_rend@hunger_renderer": {
					// 기준점에서 이동하는 거리
					"offset": [-2, 2],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"armor_rend@armor_renderer": {
					// 기준점에서 이동하는 거리
					"offset": [2, 2],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hud_player_rend_pocket@hud_player_renderer": {
					// 기준점에서 이동하는 거리
					"offset": [15, 15],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_left"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"bubbles_rend_0@bubbles_renderer": {
					// 기준점에서 이동하는 거리
					"offset": [-2, 12],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right",
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
					"offset": [-2, 12],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right",
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
			}
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
	},

	// ???/?? ??
	"hotbar_chooser": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["100%c", "100%c"],
		// 오버라이드 가능한 변수
		"$ignore_desktop": true,
		// 오버라이드 가능한 변수
		"$ignore_pocket": false,
		// 조건에 따라 변수 값을 바꾸기
		"variables": [
			{
				// 이 조건이 맞으면 적용
				"requires": "($desktop_screen and not $education_edition)",
				// 오버라이드 가능한 변수
				"$ignore_desktop": false,
				// 오버라이드 가능한 변수
				"$ignore_pocket": true
			}
		],

		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"desktop_hotbar@hotbar_panel": {
					// 완전히 제거(공간도 없음)
					"ignored": "$ignore_desktop",
					// 기준점에서 이동하는 거리
					"offset": [-4, 0]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"pocket_hotbar@hotbar_panel": {
					// 완전히 제거(공간도 없음)
					"ignored": "$ignore_pocket",
					// 기준점에서 이동하는 거리
					"offset": [-4, 0]
				}
			}
		]
	},

	// ???/?? ??
	"hotbar_elipses_panel_right_content": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 가로/세로 크기
		"size": [20, 22],
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{"elipses_content@hud.hotbar_elipses_panel_right_art": {}}
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#hotbar_elipses_right_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible",
				// 게임이 주는 전역 값 연결
				"binding_type": "global"
			}
		]
	},

	// ???/?? ??
	"hotbar_elipses_panel_right_art": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 오버라이드 가능한 변수
		"$hotbar_elipses_panel_right_art_size|default": [20, 22],
		// 가로/세로 크기
		"size": "$hotbar_elipses_panel_right_art_size",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 4,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"slot@hud.hotbar_slot_image": {
					// 오버라이드 가능한 변수
					"$hotbar_slot_image_size": "$hotbar_elipses_panel_right_art_size",
					// The layering is for cover the grid cap/black border when this panel is visible
					"layer": 2,
					//Grab the right hand end of the hotbar
					"texture": "textures/ui/hotbar_8"
				}
			},
			{"button@hud.hotbar_elipses_button": {}}
		]
	},

	// ???/?? ??
	"hotbar_elipses_panel_left_content": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 가로/세로 크기
		"size": [20, 22],
		// 이 안에 들어가는 부품 목록
		"controls": [{"button@hud.hotbar_elipses_panel_left_art": {}}],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#hotbar_elipses_left_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible",
				// 게임이 주는 전역 값 연결
				"binding_type": "global"
			}
		]
	},

	// ???/?? ??
	"hotbar_elipses_panel_left_art": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 오버라이드 가능한 변수
		"$hotbar_elipses_panel_left_art_size|default": [20, 22],
		// 가로/세로 크기
		"size": "$hotbar_elipses_panel_left_art_size",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 4,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"slot@hud.hotbar_slot_image": {
					// 겹치는 순서(숫자 클수록 위)
					"layer": 2,
					// 오버라이드 가능한 변수
					"$hotbar_slot_image_size": "$hotbar_elipses_panel_left_art_size",
					//Grab the left hand end of the hotbar
					"texture": "textures/ui/hotbar_0"
				}
			},
			{"button@hud.hotbar_elipses_button": {}}
		]
	},

	// ???/?? ??
	"hotbar_panel": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 가로/세로 크기
		"size": ["100%c", 22],
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_middle",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{"hotbar_start_cap@hud.hotbar_start_cap": {}},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hotbar_elipses_panel_left@hud.hotbar_elipses_panel_left_content": {}
			},
			{"hotbar_grid@hud.hotbar_grid": {}},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"hotbar_elipses_panel_right@hud.hotbar_elipses_panel_right_content": {}
			},
			{"hotbar_end_cap@hud.hotbar_end_cap": {}}
		]
	},

	// redo layout for hotbar panel to work with the binding trick
	// without touching classic
	"hotbar_panel_pocket": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 가로/세로 크기
		"size": ["100%", 40],
		// 기준점에서 이동하는 거리
		"offset": [0, 0],
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_left",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_left",
		// ??/?? ?
		"use_anchored_offset": true,
		// 이 컨트롤 안에서 쓰는 임시 저장소
		"property_bag": {
			// ???/??? ?
			"#anchored_offset_value_x": 0.0,
			// ???/??? ?
			"#anchored_offset_value_y": 0.0,
			// ???/??? ?
			"#size_binding_x": 0.0,
			// ???/??? ?
			"#size_binding_y": 0.0
		},
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"hotbar_start_cap_frame": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": [1, "100%"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"hotbar_start_cap@hud.hotbar_start_cap": {
								// 기준점에서 이동하는 거리
								"offset": [0, "-2.5%"],
								// 오버라이드 가능한 변수
								"$cap_size": [1, "105%"]
							}
						}
					]
				}
			},
			{
				// ???/?? ??
				"hotbar_elipses_panel_left": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["10%", "100%"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"hotbar_elipses_panel_left@hud.hotbar_elipses_panel_left_art": {
								// 오버라이드 가능한 변수
								"$hotbar_elipses_panel_left_art_size": [
									"105%",
									"105%"
								],
								// 오버라이드 가능한 변수
								"$hotbar_elipses_button_size": ["77%", "77%"],
								// 오버라이드 가능한 변수
								"$elipses_image_size": ["75%", "75%"]
							}
						}
					],
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#hotbar_elipses_left_visible",
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
				"hotbar_grid@hud.hotbar_grid": {
					// 가로/세로 크기
					"size": ["90%", "100%"],
					// ??? ?? ?
					"grid_item_template": "hud.gui_hotbar_grid_item_pocket"
				}
			},
			{
				// ???/?? ??
				"hotbar_elipses_panel_right": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["10%", "100%"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"hotbar_elipses_panel_right@hud.hotbar_elipses_panel_right_art": {
								// 오버라이드 가능한 변수
								"$hotbar_elipses_panel_right_art_size": [
									"105%",
									"105%"
								],
								// 오버라이드 가능한 변수
								"$hotbar_elipses_button_size": ["77%", "77%"],
								// 오버라이드 가능한 변수
								"$elipses_image_size": ["75%", "75%"]
							}
						}
					],
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#hotbar_elipses_right_visible",
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
				"hotbar_end_cap_frame": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": [1, "100%"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"hotbar_end_cap@hud.hotbar_end_cap": {
								// 기준점에서 이동하는 거리
								"offset": [0, "-2.5%"],
								// 오버라이드 가능한 변수
								"$cap_size": [1, "105%"]
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
				"binding_name": "#hotbar_offset_x",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#anchored_offset_value_x"
			},
			{
				// 가져올 값 이름
				"binding_name": "#hotbar_offset_y",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#anchored_offset_value_y"
			},
			{
				// 가져올 값 이름
				"binding_name": "#hotbar_size_x",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#size_binding_x"
			},
			{
				// 가져올 값 이름
				"binding_name": "#hotbar_size_y",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#size_binding_y"
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
		"grid_item_template": "hud.gui_hotbar_grid_item",
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
	"edu_hotbar_grid": {
		// 격자 컨테이너: 칸칸이 배치
		"type": "grid",
		// ??? ?? ?
		"grid_item_template": "hud.gui_hotbar_grid_item",
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
	"anim_item_name_text_alpha_in": {
		// 투명도 변화
		"anim_type": "alpha",
		// 걸리는 시간(초)
		"duration": 0,
		// 시작 값
		"from": 0.0,
		// 끝 값
		"to": 1.0,
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_item_name_text_alpha_stay"
	},

	// ???/?? ??
	"anim_item_name_text_alpha_stay": {
		// 잠시 대기
		"anim_type": "wait",
		// 걸리는 시간(초)
		"duration": "$wait_duration",
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
		"duration": 2,
		// 시작 값
		"from": 1.0,
		// 끝 값
		"to": 0
	},

	// ???/?? ??
	"anim_item_name_background_alpha_in": {
		// 투명도 변화
		"anim_type": "alpha",
		// 걸리는 시간(초)
		"duration": 0,
		// 시작 값
		"from": 0,
		// 끝 값
		"to": 0.6,
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_item_name_background_alpha_stay"
	},

	// ???/?? ??
	"anim_item_name_background_alpha_stay": {
		// 잠시 대기
		"anim_type": "wait",
		// 걸리는 시간(초)
		"duration": "$wait_duration",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_item_name_background_alpha_out"
	},

	// ???/?? ??
	"anim_item_name_background_alpha_out": {
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
	"item_name_text_root": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["100%cm", "100%cm"],
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
					"size": ["100%cm", "100%c"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"item_text_control": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": ["100%cm", "100%cm"],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"item_text_background": {
											// 완전히 제거(공간도 없음)
											"ignored": "(not $show_text_background)",

											// 이미지 표시
											"type": "image",
											// 가로/세로 크기
											"size": [
												"100%sm + 12px",
												"100%sm + 5px"
											],
											// 사용할 이미지 경로
											"texture": "textures/ui/hud_tip_text_background",
											// ???
											"alpha": "@hud.anim_item_name_background_alpha_in"
										}
									},
									{
										// ???/?? ??
										"item_text_label": {
											// 글자 표시
											"type": "label",
											// ?? ?? ?
											"max_size": [200, "default"],
											// ?? ??
											"text_alignment": "center",
											// 겹치는 순서(숫자 클수록 위)
											"layer": 31,
											// ?? (R,G,B,A)
											"color": "$text_color",
											// 보여줄 글자
											"text": "#text",
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
								"size": ["100%sm", 18],
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
								"size": ["100%sm", 17],
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

	// 다른 템플릿을 가져와서 확장(상속)
	"item_name_text@hud.item_name_text_root": {
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#item_name_text_offset",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#offset"
			}
		]
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"jukebox_popup_text@hud.item_name_text_root": {
		// 오버라이드 가능한 변수
		"$text_color": "$jukebox_text_color",
		// 오버라이드 가능한 변수
		"$text_binding": "#jukebox_text",
		// 기준점에서 이동하는 거리
		"offset": [0, -34]
	},

	// ???/?? ??
	"hud_tip_text": {
		// 이미지 표시
		"type": "image",
		// 가로/세로 크기
		"size": ["100%c + 12px", "100%c + 5px"],
		// 기준점에서 이동하는 거리
		"offset": [0, -42],
		// 사용할 이미지 경로
		"texture": "textures/ui/hud_tip_text_background",
		// ???
		"alpha": "@hud.anim_item_name_background_alpha_out",
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_middle",
		// 오버라이드 가능한 변수
		"$wait_duration|default": 1,
		// 오버라이드 가능한 변수
		"$destroy_id|default": "popup_tip_text",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"item_text_label": {
					// 글자 표시
					"type": "label",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 31,
					// ?? (R,G,B,A)
					"color": "$tool_tip_text",
					// 보여줄 글자
					"text": "#text",
					// ?? ??
					"shadow": true,
					// ???
					"alpha": "@hud.anim_item_name_text_alpha_out",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#tip_text",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#text"
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"anim_actionbar_text_alpha_out": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "in_expo",
		// 걸리는 시간(초)
		"duration": 3,
		// 시작 값
		"from": 1.0,
		// 끝 값
		"to": 0,
		// ?? ??
		"destroy_at_end": "hud_actionbar_text",
		// ?? ??
		"end_event": "hud_actionbar_text_complete"
	},

	// ???/?? ??
	"anim_actionbar_text_background_alpha_out": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "in_expo",
		// 걸리는 시간(초)
		"duration": 3,
		// 시작 값
		"from": "$actionbar_text_background_alpha",
		// 끝 값
		"to": 0,
		// ?? ??
		"destroy_at_end": "hud_actionbar_text",
		// ?? ??
		"end_event": "hud_actionbar_text_complete"
	},

	// ???/?? ??
	"auto_save_animation": {
		// 프레임 애니메이션
		"anim_type": "flip_book",
		// ?? ??
		"initial_uv": [0, 0],
		// ?? ??
		"frame_count": 9,
		// ?? ??
		"frame_step": 18,
		// ?? ??
		"fps": 10,
		// ?? ??
		"reversible": true,
		// 움직임 곡선
		"easing": "linear"
	},

	// ???/?? ??
	"auto_save": {
		// 이미지 표시
		"type": "image",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 31,
		// 사용할 이미지 경로
		"texture": "textures/ui/auto_save",
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_right",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_right",
		// 기준점에서 이동하는 거리
		"offset": [-15, 15],
		// 가로/세로 크기
		"size": [18, 30],
		// ???? ??
		"uv_size": [18, 30],
		// ???? ?? ??
		"uv": "@auto_save_animation",
		// ????? ?? ?
		"disable_anim_fast_forward": true,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#auto_save_animation_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	},

	// ???/?? ??
	"hud_actionbar_text": {
		// 이미지 표시
		"type": "image",
		// 가로/세로 크기
		"size": ["100%c + 12px", "100%c + 5px"],
		// 기준점에서 이동하는 거리
		"offset": [0, "50%-68px"],
		// 사용할 이미지 경로
		"texture": "textures/ui/hud_tip_text_background",
		// ???
		"alpha": "@hud.anim_actionbar_text_background_alpha_out",
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
					// ?? (R,G,B,A)
					"color": "$tool_tip_text",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 31,
					// 보여줄 글자
					"text": "$actionbar_text",
					// ?? ??
					"localize": false,
					// ???
					"alpha": "@hud.anim_actionbar_text_alpha_out"
				}
			}
		]
	},

	// ???/?? ??
	"anim_title_text_alpha_in": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "linear",
		// 걸리는 시간(초)
		"duration": "$title_fade_in_time",
		// 시작 값
		"from": 0,
		// 끝 값
		"to": 1,
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_title_text_alpha_stay"
	},

	// ???/?? ??
	"anim_title_text_alpha_stay": {
		// 잠시 대기
		"anim_type": "wait",
		// 걸리는 시간(초)
		"duration": "$title_stay_time",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_title_text_alpha_out"
	},

	// ???/?? ??
	"anim_title_text_alpha_out": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "linear",
		// 걸리는 시간(초)
		"duration": "$title_fade_out_time",
		// 시작 값
		"from": 1,
		// 끝 값
		"to": 0,
		// ?? ??
		"destroy_at_end": "hud_title_text",
		// ?? ??
		"end_event": "hud_title_text_complete"
	},

	// ???/?? ??
	"anim_title_background_alpha_in": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "linear",
		// 걸리는 시간(초)
		"duration": "$title_fade_in_time",
		// 시작 값
		"from": 0,
		// 끝 값
		"to": "$title_alpha",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_title_background_alpha_stay"
	},

	// ???/?? ??
	"anim_title_background_alpha_stay": {
		// 잠시 대기
		"anim_type": "wait",
		// 걸리는 시간(초)
		"duration": "$title_stay_time",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_title_background_alpha_out"
	},

	// ???/?? ??
	"anim_title_background_alpha_out": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "linear",
		// 걸리는 시간(초)
		"duration": "$title_fade_out_time",
		// 시작 값
		"from": "$title_alpha",
		// 끝 값
		"to": 0,
		// ?? ??
		"destroy_at_end": "hud_title_text",
		// ?? ??
		"end_event": "hud_title_text_complete"
	},

	// ???/?? ??
	"anim_subtitle_text_alpha_in": {
		// 투명도 변화
		"anim_type": "alpha",
		// ?? ??
		"play_event": "anim_subtitle_text_alpha_in_play_event",
		// 움직임 곡선
		"easing": "linear",
		// 걸리는 시간(초)
		"duration": "$title_fade_in_time",
		// 시작 값
		"from": 0,
		// 끝 값
		"to": 1,
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_subtitle_text_alpha_stay"
	},

	// ???/?? ??
	"anim_subtitle_text_alpha_stay": {
		// 잠시 대기
		"anim_type": "wait",
		// 걸리는 시간(초)
		"duration": "$title_stay_time",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_subtitle_text_alpha_out"
	},

	// ???/?? ??
	"anim_subtitle_text_alpha_out": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "linear",
		// 걸리는 시간(초)
		"duration": "$title_fade_out_time",
		// 시작 값
		"from": 1,
		// 끝 값
		"to": 0,
		// ?? ??
		"end_event": "hud_subtitle_text_complete"
	},

	// ???/?? ??
	"anim_subtitle_background_alpha_in": {
		// 투명도 변화
		"anim_type": "alpha",
		// ?? ??
		"play_event": "anim_subtitle_text_alpha_in_play_event",
		// 움직임 곡선
		"easing": "linear",
		// 걸리는 시간(초)
		"duration": "$title_fade_in_time",
		// 시작 값
		"from": 0,
		// 끝 값
		"to": "$title_alpha",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_subtitle_background_alpha_stay"
	},

	// ???/?? ??
	"anim_subtitle_background_alpha_stay": {
		// 잠시 대기
		"anim_type": "wait",
		// 걸리는 시간(초)
		"duration": "$title_stay_time",
		// 다음 애니메이션으로 연결
		"next": "@hud.anim_subtitle_background_alpha_out"
	},

	// ???/?? ??
	"anim_subtitle_background_alpha_out": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "linear",
		// 걸리는 시간(초)
		"duration": "$title_fade_out_time",
		// 시작 값
		"from": "$title_alpha",
		// 끝 값
		"to": 0,
		// ?? ??
		"end_event": "hud_subtitle_text_complete"
	},

	// ???/?? ??
	"hud_title_text": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "vertical",
		// 기준점에서 이동하는 거리
		"offset": [0, -19],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// ???
		"alpha": "@hud.anim_title_text_alpha_in",
		// ??? ?? ?
		"propagate_alpha": true,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"title_frame": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%", "100%cm"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"title_background": {
								// 이미지 표시
								"type": "image",
								// 가로/세로 크기
								"size": ["100%sm + 30px", "100%sm + 6px"],
								// 사용할 이미지 경로
								"texture": "textures/ui/hud_tip_text_background",
								// ???
								"alpha": "@hud.anim_title_background_alpha_in"
							}
						},
						{
							// ???/?? ??
							"title": {
								// 글자 표시
								"type": "label",
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_middle",
								// ?? (R,G,B,A)
								"color": "$title_command_text_color",
								// 보여줄 글자
								"text": "#text",
								// 겹치는 순서(숫자 클수록 위)
								"layer": 31,
								// ?? ??
								"localize": false,
								// ?? ?? ?
								"font_size": "extra_large",
								// 조건에 따라 변수 값을 바꾸기
								"variables": [
									{
										// 이 조건이 맞으면 적용
										"requires": "(not $title_shadow)",
										// 오버라이드 가능한 변수
										"$show_shadow": false
									},
									{
										// 이 조건이 맞으면 적용
										"requires": "$title_shadow",
										// 오버라이드 가능한 변수
										"$show_shadow": true
									}
								],
								// ?? ??
								"shadow": "$show_shadow",
								// ?? ??
								"text_alignment": "center",
								// 기준점에서 이동하는 거리
								"offset": [0, 6],
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#hud_title_text_string",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#text",
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
				"subtitle_frame": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%", "100%cm"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"subtitle_background": {
								// 이미지 표시
								"type": "image",
								// 가로/세로 크기
								"size": ["100%sm + 20px", "100%sm + 5px"],
								// 기준점에서 이동하는 거리
								"offset": [0, 16],
								// 사용할 이미지 경로
								"texture": "textures/ui/hud_tip_text_background",
								// 조건에 따라 변수 값을 바꾸기
								"variables": [
									{
										// 이 조건이 맞으면 적용
										"requires": "$subtitle_initially_visible",
										// 오버라이드 가능한 변수
										"$subtitle_bg": "@hud.anim_title_background_alpha_in"
									},
									{
										// 이 조건이 맞으면 적용
										"requires": "(not $subtitle_initially_visible)",
										// 오버라이드 가능한 변수
										"$subtitle_bg": "@hud.anim_subtitle_background_alpha_in"
									}
								],
								// ???
								"alpha": "$subtitle_bg"
							}
						},
						{
							// ???/?? ??
							"subtitle": {
								// 글자 표시
								"type": "label",
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_middle",
								// ?? (R,G,B,A)
								"color": "$title_command_text_color",
								// 보여줄 글자
								"text": "#text",
								// 겹치는 순서(숫자 클수록 위)
								"layer": 31,
								// ?? ??
								"localize": false,
								// ?? ?? ?
								"font_size": "large",
								// 조건에 따라 변수 값을 바꾸기
								"variables": [
									{
										// 이 조건이 맞으면 적용
										"requires": "$subtitle_initially_visible",
										// 오버라이드 가능한 변수
										"$anim_type": 1.0
									},
									{
										// 이 조건이 맞으면 적용
										"requires": "(not $subtitle_initially_visible)",
										// 오버라이드 가능한 변수
										"$anim_type": "@hud.anim_subtitle_text_alpha_in"
									},
									{
										// 이 조건이 맞으면 적용
										"requires": "(not $title_shadow)",
										// 오버라이드 가능한 변수
										"$show_shadow": false
									},
									{
										// 이 조건이 맞으면 적용
										"requires": "$title_shadow",
										// 오버라이드 가능한 변수
										"$show_shadow": true
									}
								],
								// ?? ??
								"shadow": "$show_shadow",
								// ???
								"alpha": "$anim_type",
								// ?? ??
								"text_alignment": "center",
								// 기준점에서 이동하는 거리
								"offset": [1, 19],
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#hud_subtitle_text_string",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#text",
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
	"boss_name_panel": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["100%", "100%c"],
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_middle",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"boss_name": {
					// 글자 표시
					"type": "label",
					// ?? (R,G,B,A)
					"color": "$boss_name_text_color",
					// 보여줄 글자
					"text": "#bossName",
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_middle",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_middle",
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
			}
		]
	},

	// ???/?? ??
	"tooltip_helper_icon_description": {
		// 글자 표시
		"type": "label",
		// 오버라이드 가능한 변수
		"$tooltip_helper_description_size|default": ["fill", "default"],
		// 가로/세로 크기
		"size": "$tooltip_helper_description_size",
		// 오버라이드 가능한 변수
		"$tooltip_helper_description_max_size|default": ["fill", "default"],
		// ?? ?? ?
		"max_size": "$tooltip_helper_description_max_size",

		// ?? (R,G,B,A)
		"color": "$gamepad_description_text_color",

		// 오버라이드 가능한 변수
		"$tooltip_helper_description_shadow|default": true,
		// ?? ??
		"shadow": "$tooltip_helper_description_shadow",

		// 오버라이드 가능한 변수
		"$tooltip_description_offset|default": [0, 0],
		// 기준점에서 이동하는 거리
		"offset": "$tooltip_description_offset",

		// 오버라이드 가능한 변수
		"$tooltip_anchor": "left_middle",
		// 기준점(어디에서 시작할지)
		"anchor_from": "$tooltip_anchor",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "$tooltip_anchor",

		// 오버라이드 가능한 변수
		"$tip_description_font|default": "default",
		// ??
		"font_type": "$tip_description_font",

		// 보여줄 글자
		"text": "#helper_description",

		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"label_background": {
					// 오버라이드 가능한 변수
					"$tip_description_background_offset|default": [0, 0],
					// 오버라이드 가능한 변수
					"$tip_description_background_visible|default": true,

					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/Black",
					// ???
					"alpha": 0.5,
					// 겹치는 순서(숫자 클수록 위)
					"layer": -1,
					// 기준점에서 이동하는 거리
					"offset": "$tip_description_background_offset",
					// 가로/세로 크기
					"size": ["100% + 2px", "100% + 2px"],
					// 보이기/숨기기(공간 유지)
					"visible": "$tip_description_background_visible"
				}
			}
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			// Duplicate binding necessary when toggling visibility
			// otherwise there is a delay when updating binds
			//
			// No condition has it update immediately when it
			// becomes visible but won't update if the tooltip
			// changes later.
			//
			// Always when visible condition lets it change but
			// has a delay in binding timing when it first becomes
			// visible.
			{
				// 가져올 값 이름
				"binding_name": "#helper_description",
				// 목록 데이터를 반복 연결
				"binding_type": "collection",
				// 목록 이름
				"binding_collection_name": "$tooltip_collection_name",
				// ?? ???
				"binding_condition": "always_when_visible"
			},
			{
				// 가져올 값 이름
				"binding_name": "#helper_description",
				// 목록 데이터를 반복 연결
				"binding_type": "collection",
				// 목록 이름
				"binding_collection_name": "$tooltip_collection_name",
				// ?? ???
				"binding_condition": "visible"
			}
		]
	},

	// ???/?? ??
	"tooltip_helper": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 가로/세로 크기
		"size": ["100%", "100%cm"],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 100,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{"icon@$icon_image_ref": {"layer": 2}},
			{"padding@common.empty_panel": {"size": [2, "100%sm"]}},
			{
				// ???/?? ??
				"centerer": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%", "100%sm"],
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// 이 안에 들어가는 부품 목록
					"controls": [
						{"desc@hud.tooltip_helper_icon_description": {}}
					]
				}
			}
		]
	},

	// ???/?? ??
	"tooltip_helper_form_fitting": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 가로/세로 크기
		"size": ["100%c", "100%cm"],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 100,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{"icon@$icon_image_ref": {"layer": 2}},
			{"padding@common.empty_panel": {"size": [2, "100%sm"]}},
			{
				// ???/?? ??
				"centerer": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%c", "100%sm"],
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// 이 안에 들어가는 부품 목록
					"controls": [
						{"desc@hud.tooltip_helper_icon_description": {}}
					]
				}
			}
		]
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"keyboard_tooltip_helper@hud.tooltip_helper": {
		// 완전히 제거(공간도 없음)
		"ignored": "(not $education_edition)",
		// 오버라이드 가능한 변수
		"$keyboard_description_offset|default": [0, 1],
		// 오버라이드 가능한 변수
		"$tooltip_description_offset": "$keyboard_description_offset"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"keyboard_tooltip_helper_form_fitting@hud.tooltip_helper_form_fitting": {
		// 완전히 제거(공간도 없음)
		"ignored": "(not $education_edition)",
		// 오버라이드 가능한 변수
		"$keyboard_description_offset|default": [0, 1],
		// 오버라이드 가능한 변수
		"$tooltip_description_offset": "$keyboard_description_offset"
	},

	// Wrap in panel so @mixed_tooltip_helper doesn't override binds
	"mixed_tooltip_helper": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["100%", "100%cm"],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"gamepad_tooltip@hud.tooltip_helper": {
					// 오버라이드 가능한 변수
					"$icon_image_ref": "hud.base_icon_image",
					// 보이기/숨기기(공간 유지)
					"visible": false,
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#is_gamepad_tip",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"keyboard_tooltip@hud.keyboard_tooltip_helper": {
					// 오버라이드 가능한 변수
					"$icon_image_ref": "hud.base_keyboard_icon",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "(not #is_gamepad_tip)",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible"
						}
					]
				}
			}
		],
		// 오버라이드 가능한 변수
		"$tooltip_collection_name|default": "",
		// 오버라이드 가능한 변수
		"$tooltip_collection_prefix|default": "",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			// Duplicate binding necessary when toggling visibility
			// otherwise there is a delay when updating binds
			//
			// No condition has it update immediately when it
			// becomes visible but won't update if the tooltip
			// changes later.
			//
			// Always condition lets it change but has a delay in
			// binding timing when it first becomes visible.
			{
				// 가져올 값 이름
				"binding_name": "#tooltip_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible",
				// 목록 데이터를 반복 연결
				"binding_type": "collection",
				// 목록 이름
				"binding_collection_name": "$tooltip_collection_name",
				// ?? ???
				"binding_condition": "always"
			},
			{
				// 가져올 값 이름
				"binding_name": "#tooltip_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible",
				// 목록 데이터를 반복 연결
				"binding_type": "collection",
				// 목록 이름
				"binding_collection_name": "$tooltip_collection_name"
			}
		]
	},

	// ???/?? ??
	"mixed_tooltip_helper_form_fitting": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["100%cm", "100%cm"],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"gamepad_tooltip@hud.tooltip_helper_form_fitting": {
					// 오버라이드 가능한 변수
					"$icon_image_ref": "hud.base_icon_image",
					// 보이기/숨기기(공간 유지)
					"visible": false,
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#is_gamepad_tip",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"keyboard_tooltip@hud.keyboard_tooltip_helper_form_fitting": {
					// 오버라이드 가능한 변수
					"$icon_image_ref": "hud.base_keyboard_icon",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "(not #is_gamepad_tip)",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible"
						}
					]
				}
			}
		],
		// 오버라이드 가능한 변수
		"$tooltip_collection_name|default": "",
		// 오버라이드 가능한 변수
		"$tooltip_collection_prefix|default": "",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			// Duplicate binding necessary when toggling visibility
			// otherwise there is a delay when updating binds
			//
			// No condition has it update immediately when it
			// becomes visible but won't update if the tooltip
			// changes later.
			//
			// Always condition lets it change but has a delay in
			// binding timing when it first becomes visible.
			{
				// 가져올 값 이름
				"binding_name": "#tooltip_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible",
				// 목록 데이터를 반복 연결
				"binding_type": "collection",
				// 목록 이름
				"binding_collection_name": "$tooltip_collection_name",
				// ?? ???
				"binding_condition": "always"
			},
			{
				// 가져올 값 이름
				"binding_name": "#tooltip_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible",
				// 목록 데이터를 반복 연결
				"binding_type": "collection",
				// 목록 이름
				"binding_collection_name": "$tooltip_collection_name"
			}
		]
	},

	// ???/?? ??
	"base_icon_image": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 가로/세로 크기
		"size": ["100%c", "100%cm"],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"icon": {
					// 이미지 표시
					"type": "image",
					// 가로/세로 크기
					"size": [26, 26],
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#gamepad_button_icon",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#texture",
							// 목록 데이터를 반복 연결
							"binding_type": "collection",
							// 목록 이름
							"binding_collection_name": "$tooltip_collection_name",
							// ?? ???
							"binding_condition": "visible"
						}
					]
				}
			},
			{
				// ???/?? ??
				"postfix_label_wrapper": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%c", "100%sm"],
					// ?? ?? ?
					"min_size": [9, "100%sm"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"label": {
								// 글자 표시
								"type": "label",
								// ??
								"font_type": "smooth",
								// ?? (R,G,B,A)
								"color": "$gamepad_description_text_color",
								// 보여줄 글자
								"text": "#gamepad_postfix_text",
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#gamepad_postfix_text",
										// 목록 데이터를 반복 연결
										"binding_type": "collection",
										// 목록 이름
										"binding_collection_name": "$tooltip_collection_name",
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
	},

	// ???/?? ??
	"base_keyboard_icon": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// Outer panel provides padding between neighboring tooltips
		"size": ["100%c + 2px", "100%c + 2px"],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"icon": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%cm", 17],
					// ?? ?? ?
					"min_size": [17, 17],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"key_backing": {
								// 이미지 표시
								"type": "image",
								// 사용할 이미지 경로
								"texture": "textures/ui/keyboard_tooltip_background",
								// 가로/세로 크기
								"size": ["100%cm + 10px", "100%"],
								// ?? ?? ?
								"min_size": [17, "100%"],
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "(not #is_mouse_button)",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#visible",
										// 목록 데이터를 반복 연결
										"binding_type": "collection",
										// 목록 이름
										"binding_collection_name": "$tooltip_collection_name"
									}
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"key_label": {
											// 글자 표시
											"type": "label",
											// 겹치는 순서(숫자 클수록 위)
											"layer": 1,
											// ??
											"font_type": "smooth",
											// 기준점(어디에서 시작할지)
											"anchor_from": "top_middle",
											// 붙일 위치(어디에 놓을지)
											"anchor_to": "top_middle",
											// 기준점에서 이동하는 거리
											"offset": [0, 1],
											// 보여줄 글자
											"text": "#keyboard_key_text",
											// ?? (R,G,B,A)
											"color": "$0_color_format",
											// 게임 값과 연결하는 규칙 목록
											"bindings": [
												{
													// 가져올 값 이름
													"binding_name": "#keyboard_key_text",
													// 목록 데이터를 반복 연결
													"binding_type": "collection",
													// 목록 이름
													"binding_collection_name": "$tooltip_collection_name"
												}
											]
										}
									}
								]
							}
						},
						{
							// ???/?? ??
							"mouse_buttons": {
								// 글자 표시
								"type": "label",
								// 겹치는 순서(숫자 클수록 위)
								"layer": 1,
								// 보여줄 글자
								"text": "#keyboard_key_text",
								// ?? (R,G,B,A)
								"color": "$dark_body_text_color",
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#keyboard_key_text",
										// 목록 데이터를 반복 연결
										"binding_type": "collection",
										// 목록 이름
										"binding_collection_name": "$tooltip_collection_name"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "key_backing",
										// 계산식/참조 값
										"source_property_name": "#visible",
										// 결과가 들어갈 속성
										"target_property_name": "#visible",
										// ?? ??
										"resolve_sibling_scope": true
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
	"left_helpers_edu": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_left",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_left",
		// 기준점에서 이동하는 거리
		"offset": [3, 0],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 100,
		// 가로/세로 크기
		"size": ["100%", "100%c"],
		// 오버라이드 가능한 변수
		"$tooltip_helper_description_shadow": false,

		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"tip_window@common.tooltip_background": {
					// 오버라이드 가능한 변수
					"$tooltip_background_texture": "#texture",
					// 오버라이드 가능한 변수
					"$tip_description_font": "smooth",
					// 오버라이드 가능한 변수
					"$keyboard_description_offset": [0, 0],

					// 가로/세로 크기
					"size": ["100%cm + 10px", "100%cm + 18px"],
					// ???
					"alpha": 0.7,
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"stack_panel": {
								// 줄맞춤 컨테이너: 가로/세로로 자동 배치
								"type": "stack_panel",
								// 가로/세로 크기
								"size": ["100%cm", "100%c"],
								// 기준점에서 이동하는 거리
								"offset": [0, -5],

								// 오버라이드 가능한 변수
								"$tooltip_collection_name": "left_helper_collection",
								// 오버라이드 가능한 변수
								"$tooltip_collection_prefix": "left_helpers",
								// 목록 이름
								"collection_name": "$tooltip_collection_name",
								// 오버라이드 가능한 변수
								"$tooltip_helper_description_size": [
									"default",
									10
								],
								// 목록 아이템을 자동으로 생성
								"factory": {
									// ?? ??
									"name": "left_tooltip_factory",
									// ??? ???
									"control_name": "hud.mixed_tooltip_helper_form_fitting"
								},
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#left_helper_count",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#collection_length"
									}
								]
							}
						}
					],
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#left_tips_visible",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible",
							// 목록 데이터를 반복 연결
							"binding_type": "collection",
							// 목록 이름
							"binding_collection_name": "controls_toggle",
							// ?? ???
							"binding_condition": "always"
						},
						{
							// 가져올 값 이름
							"binding_name": "#left_tip_background",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#texture",
							// 목록 데이터를 반복 연결
							"binding_type": "collection",
							// 목록 이름
							"binding_collection_name": "controls_toggle"
						}
					]
				}
			},
			{"tip_paddding@common.empty_panel": {"size": ["100%sm", 4]}},
			{
				// ???/?? ??
				"controls_toggle_label": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%", "100%cm"],

					// 오버라이드 가능한 변수
					"$tooltip_collection_name": "controls_toggle",
					// 오버라이드 가능한 변수
					"$gamepad_helper_visible_binding_type": "none",
					// 오버라이드 가능한 변수
					"$tip_description_background_visible": true,
					// 오버라이드 가능한 변수
					"$tip_description_background_offset": [0, 0],
					// 오버라이드 가능한 변수
					"$tooltip_helper_description_size": ["default", 10],

					// 이 안에 들어가는 부품 목록
					"controls": [{"tip@hud.mixed_tooltip_helper": {}}]
				}
			},
			{
				// ???/?? ??
				"controls_inventory_label": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%", "100%cm"],

					// 오버라이드 가능한 변수
					"$tooltip_collection_name": "controls_inventory_prompts_toggle",
					// 오버라이드 가능한 변수
					"$gamepad_helper_visible_binding_type": "none",
					// 오버라이드 가능한 변수
					"$tip_description_background_visible": true,
					// 오버라이드 가능한 변수
					"$tip_description_background_offset": [0, 0],
					// 오버라이드 가능한 변수
					"$tooltip_helper_description_size": ["default", 10],

					// 이 안에 들어가는 부품 목록
					"controls": [{"tip@hud.mixed_tooltip_helper": {}}]
				}
			},
			{
				// ???/?? ??
				"controls_menu_label": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%", "100%cm"],

					// 오버라이드 가능한 변수
					"$tooltip_collection_name": "controls_menu_prompts_toggle",
					// 오버라이드 가능한 변수
					"$gamepad_helper_visible_binding_type": "none",
					// 오버라이드 가능한 변수
					"$tip_description_background_visible": true,
					// 오버라이드 가능한 변수
					"$tip_description_background_offset": [0, 0],
					// 오버라이드 가능한 변수
					"$tooltip_helper_description_size": ["default", "default"],
					// 오버라이드 가능한 변수
					"$tooltip_helper_description_max_size": [
						"50% - 125px",
						"20px"
					],

					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"tip@hud.mixed_tooltip_helper": {}
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"left_helpers": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_left",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_left",
		// 기준점에서 이동하는 거리
		"offset": [10, 0],
		// 가로/세로 크기
		"size": ["100%", "100%c"],
		// ?? ?? ?
		"max_size": ["100%", "50%"],
		// 오버라이드 가능한 변수
		"$tooltip_description_offset": [-10, 0.5],

		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"stack_panel": {
					// 줄맞춤 컨테이너: 가로/세로로 자동 배치
					"type": "stack_panel",
					// 가로/세로 크기
					"size": ["100%", "100%c"],
					// 기준점(어디에서 시작할지)
					"anchor_from": "bottom_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "bottom_left",

					// 오버라이드 가능한 변수
					"$tooltip_collection_name": "left_helper_collection",
					// 오버라이드 가능한 변수
					"$tooltip_collection_prefix": "left_helpers",
					// 목록 이름
					"collection_name": "$tooltip_collection_name",
					// 오버라이드 가능한 변수
					"$tooltip_helper_description_size": ["default", 10],
					// 목록 아이템을 자동으로 생성
					"factory": {
						// ?? ??
						"name": "left_tooltip_factory",
						// ??? ???
						"control_name": "hud.mixed_tooltip_helper"
					},
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "(not #emote_tips_visible)",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible",
							// 게임이 주는 전역 값 연결
							"binding_type": "global"
						},
						{
							// 가져올 값 이름
							"binding_name": "#left_helper_count",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#collection_length"
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"emote_label_background": {
		// 이미지 표시
		"type": "image",
		// 가로/세로 크기
		"size": [100, 24],
		// 사용할 이미지 경로
		"texture": "textures/ui/Black",
		// ???
		"alpha": 0.7,
		// 겹치는 순서(숫자 클수록 위)
		"layer": 0
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"emote_tip@hud.emote_label_background": {
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"emote_keyboard_centerer": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": [100, 26],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"emote_keyboard_helper@common.keyboard_helper_keys": {
								// 겹치는 순서(숫자 클수록 위)
								"layer": 100,
								// 오버라이드 가능한 변수
								"$icon_size_panel": [17, "100%"],
								// 오버라이드 가능한 변수
								"$keyboard_helper_size": [96, 24], // 96 to create a small horizontal margin in the 100 size panel
								// 오버라이드 가능한 변수
								"$keyboard_character": "$keyboard_keyname",
								// 오버라이드 가능한 변수
								"$text_color": "$generic_button_text_color",
								// 오버라이드 가능한 변수
								"$description_bind": "$emote_tip_description",
								// 오버라이드 가능한 변수
								"$keyboard_description_max_size": [79, "100%"] // 79 To account for the size of the image
							}
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"emote_gamepad_helper@$gamepad_helper_button_name": {
					// 오버라이드 가능한 변수
					"$icon_description_bind": "$emote_tip_description",
					// 오버라이드 가능한 변수
					"$gamepad_description_max_size": [79, 24], // 79 To account for the size of the image
					// 기준점(어디에서 시작할지)
					"anchor_from": "left_middle",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "left_middle",
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
			}
		]
	},

	// ???/?? ??
	"emote_expediate_helpers": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_left",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_left",
		// 가로/세로 크기
		"size": ["100%", "100%c"],
		// ?? ?? ?
		"max_size": ["100%", "50%"],

		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"stack_panel": {
					// 줄맞춤 컨테이너: 가로/세로로 자동 배치
					"type": "stack_panel",
					// 가로/세로 크기
					"size": ["100%", "100%c"],
					// 기준점(어디에서 시작할지)
					"anchor_from": "bottom_left",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "bottom_left",

					// 오버라이드 가능한 변수
					"$gamepad_helper_visible_binding_type": "none",

					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"emote_tip_0@hud.emote_tip": {
								// 오버라이드 가능한 변수
								"$keyboard_keyname": "keyboard.keyname.1",
								// 오버라이드 가능한 변수
								"$emote_tip_description": "#button_emote_0_description",
								// 오버라이드 가능한 변수
								"$gamepad_helper_button_name": "common.gamepad_helper_y"
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"emote_tip_1@hud.emote_tip": {
								// 오버라이드 가능한 변수
								"$keyboard_keyname": "keyboard.keyname.2",
								// 오버라이드 가능한 변수
								"$emote_tip_description": "#button_emote_1_description",
								// 오버라이드 가능한 변수
								"$gamepad_helper_button_name": "common.gamepad_helper_b"
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"emote_tip_2@hud.emote_tip": {
								// 오버라이드 가능한 변수
								"$keyboard_keyname": "keyboard.keyname.3",
								// 오버라이드 가능한 변수
								"$emote_tip_description": "#button_emote_2_description",
								// 오버라이드 가능한 변수
								"$gamepad_helper_button_name": "common.gamepad_helper_a"
							}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"emote_tip_3@hud.emote_tip": {
								// 오버라이드 가능한 변수
								"$keyboard_keyname": "keyboard.keyname.4",
								// 오버라이드 가능한 변수
								"$emote_tip_description": "#button_emote_3_description",
								// 오버라이드 가능한 변수
								"$gamepad_helper_button_name": "common.gamepad_helper_x"
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
				"binding_name": "#emote_tips_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible",
				// 게임이 주는 전역 값 연결
				"binding_type": "global"
			}
		]
	},

	// ???/?? ??
	"right_helpers": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 기준점(어디에서 시작할지)
		"anchor_from": "bottom_right",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "bottom_right",
		// 가로/세로 크기
		"size": ["fill", "100%c"],
		// ?? ?? ?
		"max_size": ["100%", "50%"],
		// 오버라이드 가능한 변수
		"$tooltip_description_offset": [-10, 0.5],

		// 조건에 따라 변수 값을 바꾸기
		"variables": [
			{
				// 이 조건이 맞으면 적용
				"requires": "$education_edition",
				// 오버라이드 가능한 변수
				"$tip_description_background_visible": true,
				// 오버라이드 가능한 변수
				"$tip_description_background_offset": [0, 0],
				// 오버라이드 가능한 변수
				"$tooltip_helper_description_shadow": false
			}
		],

		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"stack_panel": {
					// 줄맞춤 컨테이너: 가로/세로로 자동 배치
					"type": "stack_panel",
					// 가로/세로 크기
					"size": ["100%cm", "100%c"],
					// ?? ?? ?
					"min_size": [75, "100%c"],
					// 기준점(어디에서 시작할지)
					"anchor_from": "bottom_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "bottom_right",

					// 오버라이드 가능한 변수
					"$tooltip_collection_name": "right_helper_collection",
					// 오버라이드 가능한 변수
					"$tooltip_collection_prefix": "right_helpers",
					// 목록 이름
					"collection_name": "$tooltip_collection_name",
					// 오버라이드 가능한 변수
					"$tooltip_helper_description_size": ["default", 10],
					// 목록 아이템을 자동으로 생성
					"factory": {
						// ?? ??
						"name": "right_tooltip_factory",
						// ??? ???
						"control_name": "hud.mixed_tooltip_helper_form_fitting"
					},
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#right_helper_count",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#collection_length"
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"boss_health_panel": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [182, 20],
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_middle",
		// 오버라이드 가능한 변수
		"$progress_bar_collection": "boss_bars",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"boss_name@boss_name_panel": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"progress_bar_for_collections@common.progress_bar_for_collections": {
					// 기준점에서 이동하는 거리
					"offset": [0, 10]
				}
			}
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#bar_visible",
				// 목록 데이터를 반복 연결
				"binding_type": "collection",
				// 목록 이름
				"binding_collection_name": "boss_bars",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	},

	// ???/?? ??
	"boss_health_grid": {
		// 격자 컨테이너: 칸칸이 배치
		"type": "grid",
		// ??? ?? ?
		"grid_dimension_binding": "#boss_grid_dimension",
		// ??? ?? ?
		"grid_item_template": "hud.boss_health_panel",
		// ??? ?? ?
		"grid_fill_direction": "vertical",
		// 목록 이름
		"collection_name": "boss_bars",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_middle",
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_middle",
		// 가로/세로 크기
		"size": [182, "30%"],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "(not #on_new_death_screen)",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"wysiwyg_reset_modal_ok@library_modal.modal_button": {
		// 오버라이드 가능한 변수
		"$button_mapping": "button.confirm_reset",
		// 오버라이드 가능한 변수
		"$button_text": "hudScreen.controlCustomization.resetConfirm"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"wysiwyg_reset_modal_cancel@library_modal.modal_button": {
		// 오버라이드 가능한 변수
		"$button_mapping": "button.cancel_reset",
		// 오버라이드 가능한 변수
		"$button_text": "hudScreen.controlCustomization.resetCancel"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"wysiwyg_close_without_saving_modal_ok@library_modal.modal_button": {
		// 오버라이드 가능한 변수
		"$button_mapping": "button.confirm_close_without_saving",
		// 오버라이드 가능한 변수
		"$button_text": "hudScreen.controlCustomization.closeWithoutSavingConfirm"
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"wysiwyg_close_without_saving_modal_cancel@library_modal.modal_button": {
		// 오버라이드 가능한 변수
		"$button_mapping": "button.cancel_close_without_saving",
		// 오버라이드 가능한 변수
		"$button_text": "hudScreen.controlCustomization.closeWithoutSavingCancel"
	},

/*
  Hi there!
  -
  I did my best to explain how UI actually works, hoping it will help anyone that is interested of how my UI elements works -
  So i hope you have learned something from my addon codes that could make you a better addons developer!
  -
  Make sure to join my discord server <  https://discord.com/invite/DfXSekP8T3  > if you have any suggestions for future addons.
  Also make sure to report all bugs you might find, so i can fix it as soon as possible!
  Keep in mind that most of the bugs is actually from the game and I don't have the ability to fix them.
  -
  Have a good day!
*/
//   "hud_title_text/title_frame/title":{"modifications":[{"array_name":"bindings","operation":"insert_back","value":[{"binding_type":"view","source_property_name":"((#text - 'xHydTB:' - 'xEhydTB:') = #text)","target_property_name":"#visible"}]}]},
  // ^ Used to hide a specific type of titles. ^
  // ^ Used to move up the rideable mobs health. ^

//   "centered_gui_elements_at_bottom_middle":{"modifications":[{"array_name":"controls","operation":"insert_front","value":[{"thirstbar_background@hud.thirstbar_background":{"anchor_from":"bottom_middle","anchor_to":"bottom_middle","offset":[50,-42.5]}},{"thirstbar_effect_panel@hud.thirstbar_effect_panel":{"anchor_from":"bottom_middle","anchor_to":"bottom_middle","offset":[50,-42.5]}}]}]},
  // ^ Used to render the UI elements correctly for pc users. ^

//   "thirstbar_background":{// Used to add the thirst bar background to the hud UI.
//     "type":"image",
//     "texture":"textures/ui/muck/hp_empty",
//     "size":[43,37],// Note* the image size needs to match the actual size of the texture, if it was 16×16, the image size needs to be [16,16] otherwise the progress bar will be glitched.
//     "bindings":[{"binding_name":"#show_survival_ui","binding_name_override":"#visible"}],// This will make the element visible only on survival.
//     "controls":[{"thirstbar_progress@thirstbar_progress":{}}]// Needed to render the thirst bar.
//   },
//   "thirstbar_progress":{
//     "type":"image",
//     "texture":"textures/ui/muck/hp_full",
//     "size":["100%","100%"],// Making sure that the thirst progress bar size will match the thirst background.
//     "layer":1,// Making it appear above the background.
//     "$max_health":20.0,// Used to update the filling quantity of the thirst bar, being 20 is a full bar, 10 is a half bar and 0 being empty.
//     "clip_direction":"right",
//     "clip_pixelperfect":false,
//     "bindings":[
//       {
//         "binding_type":"view",
//         "source_control_name":"thirstbar_control",// Needed to update the thirst bar quantity.
//         "source_property_name":"((#preserved_text - $update_string) * 1)",
//         "target_property_name":"#health"
//       },
//       {
//         "binding_type":"view",
//         "source_property_name":"(($max_health - #health) / $max_health)",
//         "target_property_name":"#clip_ratio"
//       }
//     ]
//   },
//   "thirstbar_effect_panel":{// Used to apply a new UI element to the screen after a specific title has been sent.
//     "type":"panel",
//     "size":[79,9],
//     "controls":[
//       {
//         "thirstbar_effect_background":{
//           "type":"image",
//           "texture":"textures/ui/Black",
//           "bindings":[// It's hidden by default.
//             {"binding_name":"#show_survival_ui"},
//             {
//               "binding_type":"view",
//               "source_control_name":"thirstbar_effect_control",
//               "source_property_name":"('@' + #preserved_text - $update_text = '@true')",// Showing up the effected bar when the title has the needed words along with 'true', so any titles that has the needed words but without 'true' will cause the effected bar to hide.
//               "target_property_name":"#is_visible"
//             },
//             {
//               "binding_type":"view",
//               "source_property_name":"(#show_survival_ui and #is_visible)",
//               "target_property_name":"#visible"
//             }
//           ],
//           "controls":[{"thirstbar_effect_progress@thirstbar_effect_progress":{}}]
//         }
//       },
//       {
//         "thirstbar_effect_control":{
//           "type":"panel",
//           "bindings":[
//             {"binding_name":"#hud_title_text_string"},
//             {
//               "binding_name":"#hud_title_text_string",
//               "binding_name_override":"#preserved_text",
//               "binding_condition":"visibility_changed"
//             },
//             {
//               "binding_type":"view",
//               "source_property_name":"(not ('@' + #hud_title_text_string = '@' + #preserved_text) and not (('@' + #hud_title_text_string - $update_text) = '@' + #hud_title_text_string))",
//               "target_property_name":"#visible"
//             }
//           ]
//         }
//       }
//     ]
//   },
//   "thirstbar_effect_progress":{// The same exact system as the thirst progress bar, but with the effected texture, there is a better way to do it by changing the image texture using bindings and controls, but i haven't figured out how.
//     "type":"image",
//     "texture":"textures/ui/Black",
//     "size":["100%","100%"],
//     "layer":2,
//     "$max_health":20.0,
//     "clip_direction":"right",
//     "clip_pixelperfect":false,
//     "bindings":[
//       {
//         "binding_type":"view",
//         "source_control_name":"thirstbar_control",
//         "source_property_name":"((#preserved_text - $update_string) * 1)",
//         "target_property_name":"#health"
//       },
//       {
//         "binding_type":"view",
//         "source_property_name":"(($max_health - #health) / $max_health)",
//         "target_property_name":"#clip_ratio"
//       }
//     ]
//   },
//   "thirstbar_renderer":{// Used to change the offset of the thirst bar depending on the screen panel type (desktop or pocket).
//     "type":"panel",
//     "$ignore_desktop":true,
//     "$ignore_pocket":false,// By default it's visible only for pocket users.
//     "variables":[
//       {
//         "requires":"$desktop_screen",
//         "$ignore_desktop":false,
//         "$ignore_pocket":true// Now it's visible only for desktop users.
//       }
//     ],
//     "bindings":[{"binding_name":"(not (#hud_visible_centered))","binding_name_override":"#visible"}],// Used to hide the mobile UI elements for pc users.
//     "controls":[// Used to change the offset of the thirst bar (desktop or pocket).
//       {"desktop_hud@thirstbar_background":{"ignored":"$ignore_desktop","anchor_from":"bottom_middle","anchor_to":"bottom_middle","offset":[60,-42.5]}},{"desktop_effect_hud@thirstbar_effect_panel":{"ignored":"$ignore_desktop","anchor_from":"bottom_middle","anchor_to":"bottom_middle","offset":[60,-42.5]}},
//       {"pocket_hud@thirstbar_background":{"ignored":"$ignore_pocket","anchor_from":"top_right","anchor_to":"top_right","offset":[-3,12.5]}},{"pocket_effect_hud@thirstbar_effect_panel":{"ignored":"$ignore_pocket","anchor_from":"top_right","anchor_to":"top_right","offset":[-3,12.5]}}
//     ]
//   },
	"hud_title_text/title_frame/title": {
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
						// 계산/조건 결과를 연결
						"binding_type": "view",
						// 계산식/참조 값
						"source_property_name": "(#text = 'hide title')",
						// 결과가 들어갈 속성
						"target_property_name": "#visible"
					}
				]
			}
		]
	},
	// ???/?? ??
	"root_panel": {
	// 	    "$update_string":"xHydTB:",// Needed to update the effected bar filling quantity.
    // "$update_text":"xEhydTB:",// Needed to hide/show the effected bar.
		"modifications": [
			{
				// ?? ?? ??
				"array_name": "controls",
				// ?? ??
				"operation": "insert_back",
				// ??? ?
				"value": [
					// {
					// 	"bars_factory@custom_hud.bars_factory": {}
					// }
					// ,
					// {
						// "bossbar_bar_factory@hud_bossbar.bossbar_bar_factory": {}
					// }
				]
			}
		],
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 오버라이드 가능한 변수
		"$xp_control_offset|default": [0, -13],
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
				"preserved_title_display": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 오버라이드 가능한 변수
					"$upd_str": "powerup_update",
					// 가로/세로 크기
					"size": ["100%c", "100%c"],
					// 기준점에서 이동하는 거리
					"offset": [-20, 20],
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right",
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"title_text": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control",
										// 계산식/참조 값
										"source_property_name": "(#preserved_text - $upd_str)",
										// 결과가 들어갈 속성
										"target_property_name": "#text",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control",
										// 계산식/참조 값
										"source_property_name": "(not (#preserved_text = $upd_str))",
										// 결과가 들어갈 속성
										"target_property_name": "#visible",
										// ?? ??
										"resolve_sibling_scope": true
									}
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"title_bg": {
											// 이미지 표시
											"type": "image",
											// 사용할 이미지 경로
											"texture": "textures/ui/hud_tip_text_background",
											// 가로/세로 크기
											"size": [
												"100% + 10px",
												"100% + 4px"
											],
											// ?? ??
											"fill": true,
											// ???
											"alpha": 0.5,
											// 겹치는 순서(숫자 클수록 위)
											"layer": -1
										}
									}
								]
							}
						},
						{
							// ???/?? ??
							"data_control": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": [0, 0],
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
										"source_property_name": "(not (#hud_title_text_string = #preserved_text) and not ((#hud_title_text_string - $upd_str) = #hud_title_text_string))",
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
				"preserved_title_display2": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 오버라이드 가능한 변수
					"$upd_str2": "scoreboard",
					// 가로/세로 크기
					"size": ["100%c", "100%c"],
					// 기준점에서 이동하는 거리
					"offset": [5, 0],
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "left_middle",
					// 기준점(어디에서 시작할지)
					"anchor_from": "left_middle",
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"title_text2": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control2",
										// 계산식/참조 값
										"source_property_name": "(#preserved_text2 - $upd_str2)",
										// 결과가 들어갈 속성
										"target_property_name": "#text",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control2",
										// 계산식/참조 값
										"source_property_name": "(not (#preserved_text2 = $upd_str2))",
										// 결과가 들어갈 속성
										"target_property_name": "#visible",
										// ?? ??
										"resolve_sibling_scope": true
									}
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"title_bg2": {
											// 이미지 표시
											"type": "image",
											// 사용할 이미지 경로
											"texture": "textures/ui/Black",
											// 가로/세로 크기
											"size": [
												"100% + 10px",
												"100% + 4px"
											],
											// ?? ??
											"fill": true,
											// ???
											"alpha": 0.5,
											// 겹치는 순서(숫자 클수록 위)
											"layer": -1
										}
									}
								]
							}
						},
						{
							// ???/?? ??
							"data_control2": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": [0, 0],
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
										"binding_name_override": "#preserved_text2",
										// ?? ???
										"binding_condition": "visibility_changed"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(not (#hud_title_text_string = #preserved_text2) and not ((#hud_title_text_string - $upd_str2) = #hud_title_text_string))",
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
				"preserved_title_display3": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 오버라이드 가능한 변수
					"$upd_str3": "top",
					// 가로/세로 크기
					"size": ["100%c", "100%c"],
					// 기준점에서 이동하는 거리
					"offset": [0, 20],
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_middle",
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_middle",
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"title_text3": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control3",
										// 계산식/참조 값
										"source_property_name": "(#preserved_text3 - $upd_str3)",
										// 결과가 들어갈 속성
										"target_property_name": "#text",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control3",
										// 계산식/참조 값
										"source_property_name": "(not (#preserved_text3 = $upd_str3))",
										// 결과가 들어갈 속성
										"target_property_name": "#visible",
										// ?? ??
										"resolve_sibling_scope": true
									}
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"title_bg3": {
											// 이미지 표시
											"type": "image",
											// 사용할 이미지 경로
											"texture": "textures/ui/hud_tip_text_background",
											// 가로/세로 크기
											"size": [
												"100% + 10px",
												"100% + 4px"
											],
											// ?? ??
											"fill": true,
											// ???
											"alpha": 0.5,
											// 겹치는 순서(숫자 클수록 위)
											"layer": -1
										}
									}
								]
							}
						},
						{
							// ???/?? ??
							"data_control3": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": [0, 0],
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
										"binding_name_override": "#preserved_text3",
										// ?? ???
										"binding_condition": "visibility_changed"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(not (#hud_title_text_string = #preserved_text3) and not ((#hud_title_text_string - $upd_str3) = #hud_title_text_string))",
										// 결과가 들어갈 속성
										"target_property_name": "#visible"
									}
								]
							}
						}
					]
				}
			},
			// {
			// 	"preserved_title_display4": {
			// 		"type": "panel",
			// 		"$upd_str4": "main_stats",
			// 		"size": ["100%c", "100%c"],
			// 		"offset": [0, 0],
			// 		"anchor_to": "bottom_right",
			// 		"anchor_from": "bottom_right",
			// 		"controls": [
			// 			{
			// 				"title_text4": {
			// 					"type": "label",
			// 					"text": "#text",
			// 					"bindings": [
			// 						{
			// 							"binding_type": "view",
			// 							"source_control_name": "data_control4",
			// 							"source_property_name": "(#preserved_text4 - $upd_str4)",
			// 							"target_property_name": "#text",
			// 							"resolve_sibling_scope": true
			// 						},
			// 						{
			// 							"binding_type": "view",
			// 							"source_control_name": "data_control4",
			// 							"source_property_name": "(not (#preserved_text4 = $upd_str4))",
			// 							"target_property_name": "#visible",
			// 							"resolve_sibling_scope": true
			// 						}
			// 					]
			// 					,
			// 					"controls": [
			// 						{
			// 							"title_bg4": {
			// 								"type": "image",
			// 								"texture": "textures/ui/hud_tip_text_background",
			// 								"size": [
			// 									"100% + 10px",
			// 									"100% + 4px"
			// 								],
			// 								"fill": true,
			// 								"alpha": 0.5,
			// 								"layer": -1
			// 							}
			// 						}
			// 					]
			// 				}
			// 			},
			// 			{
			// 				"data_control4": {
			// 					"type": "panel",
			// 					"size": [0, 0],
			// 					"bindings": [
			// 						{
			// 							"binding_name": "#hud_title_text_string"
			// 						},
			// 						{
			// 							"binding_name": "#hud_title_text_string",
			// 							"binding_name_override": "#preserved_text4",
			// 							"binding_condition": "visibility_changed"
			// 						},
			// 						{
			// 							"binding_type": "view",
			// 							"source_property_name": "(not (#hud_title_text_string = #preserved_text4) and not ((#hud_title_text_string - $upd_str4) = #hud_title_text_string))",
			// 							"target_property_name": "#visible"
			// 						}
			// 					]
			// 				}
			// 			}
			// 		]
			// 	}
			// },
			{
				// ???/?? ??
				"preserved_title_display5": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 오버라이드 가능한 변수
					"$upd_str5": "barbar",
					// 가로/세로 크기
					"size": ["100%c", "100%c"],
					// 기준점에서 이동하는 거리
					"offset": [0, -20],
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "bottom_middle",
					// 기준점(어디에서 시작할지)
					"anchor_from": "bottom_middle",
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"title_bg5": {
								// 이미지 표시
								"type": "image",
								// 겹치는 순서(숫자 클수록 위)
								"layer": -1,
								// 오버라이드 가능한 변수
								"$one": 1,
		// 가로/세로 크기
		"size": [
			162,
			13
		],
								// 오버라이드 가능한 변수
								"$max_bossbar": 100.0,
								// ??? ?? ?
								"allow_clipping": true,
								// ??? ??
								"clip_direction": "left",
								// ?? ??
								"clip_pixelperfect": false,
								// 사용할 이미지 경로
								"texture": "textures/ui/muck/hp_full"
								,
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control5",
										// 계산식/참조 값
										"source_property_name": "((#health) * $one)",
										// 결과가 들어갈 속성
										"target_property_name": "#num",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(($max_bossbar - #num) / $max_bossbar)",
										// 결과가 들어갈 속성
										"target_property_name": "#clip_ratio",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control5",
										// 계산식/참조 값
										"source_property_name": "(not (#preserved_text5 = $upd_str5))",
										// 결과가 들어갈 속성
										"target_property_name": "#visible",
										// ?? ??
										"resolve_sibling_scope": true
									}
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"background": {
													// 가로/세로 크기
													"size": [
			162,
			13
		],
											// 이미지 표시
											"type": "image",
											// 겹치는 순서(숫자 클수록 위)
											"layer": -2,
											// 사용할 이미지 경로
											"texture": "textures/ui/muck/hp_empty"
										}
									}
								]
							}
						},
							{
										// 보여줄 글자
										"text": {
											// 글자 표시
											"type": "label",
											// 겹치는 순서(숫자 클수록 위)
											"layer": 1,
											// 보여줄 글자
											"text": "#text"
											,
											// "font_type": "smooth",
											"bindings": [
																					{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control5",
										// 계산식/참조 값
										"source_property_name": "(#health_number)",
										// 결과가 들어갈 속성
										"target_property_name": "#num",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "#num",
										// 결과가 들어갈 속성
										"target_property_name": "#text",
										// ?? ??
										"resolve_sibling_scope": true
									}
											]
										}
									},
						{
							// ???/?? ??
							"title_bg6": {
								// 이미지 표시
								"type": "image",
								// 겹치는 순서(숫자 클수록 위)
								"layer": -1,
								// 오버라이드 가능한 변수
								"$one": 1,
		// 가로/세로 크기
		"size": [
			162,
			13
		],
								// 기준점에서 이동하는 거리
								"offset": [0, 15],
								// 오버라이드 가능한 변수
								"$max_bossbar": 100.0,
								// ??? ?? ?
								"allow_clipping": true,
								// ??? ??
								"clip_direction": "left",
								// ?? ??
								"clip_pixelperfect": false,
								// 사용할 이미지 경로
								"texture": "textures/ui/muck/hunger_full"
								,
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control5",
										// 계산식/참조 값
										"source_property_name": "((#hunger) * $one)",
										// 결과가 들어갈 속성
										"target_property_name": "#num",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(($max_bossbar - #num) / $max_bossbar)",
										// 결과가 들어갈 속성
										"target_property_name": "#clip_ratio",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control5",
										// 계산식/참조 값
										"source_property_name": "(not (#preserved_text5 = $upd_str5))",
										// 결과가 들어갈 속성
										"target_property_name": "#visible",
										// ?? ??
										"resolve_sibling_scope": true
									}
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"background": {
													// 가로/세로 크기
													"size": [
			162,
			13
		],
											// 이미지 표시
											"type": "image",
											// 겹치는 순서(숫자 클수록 위)
											"layer": -2,
											// 사용할 이미지 경로
											"texture": "textures/ui/muck/hunger_empty"
										}
									}
								]
							}
						},
						{
							// ???/?? ??
							"title_bg7": {
								// 이미지 표시
								"type": "image",
								// 겹치는 순서(숫자 클수록 위)
								"layer": -1,
								// 오버라이드 가능한 변수
								"$one": 1,
		// 가로/세로 크기
		"size": [
			162,
			13
		],
								// 기준점에서 이동하는 거리
								"offset": [0, 30],
								// 오버라이드 가능한 변수
								"$max_bossbar": 100.0,
								// ??? ?? ?
								"allow_clipping": true,
								// ??? ??
								"clip_direction": "left",
								// ?? ??
								"clip_pixelperfect": false,
								// 사용할 이미지 경로
								"texture": "textures/ui/muck/stamina_full"
								,
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control5",
										// 계산식/참조 값
										"source_property_name": "((#stamina) * $one)",
										// 결과가 들어갈 속성
										"target_property_name": "#num",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(($max_bossbar - #num) / $max_bossbar)",
										// 결과가 들어갈 속성
										"target_property_name": "#clip_ratio",
										// ?? ??
										"resolve_sibling_scope": true
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control5",
										// 계산식/참조 값
										"source_property_name": "(not (#preserved_text5 = $upd_str5))",
										// 결과가 들어갈 속성
										"target_property_name": "#visible",
										// ?? ??
										"resolve_sibling_scope": true
									}
								],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"background": {
													// 가로/세로 크기
													"size": [
			162,
			13
		],
											// 이미지 표시
											"type": "image",
											// 겹치는 순서(숫자 클수록 위)
											"layer": -2,
											// 사용할 이미지 경로
											"texture": "textures/ui/muck/hunger_empty"
										}
									}
								]
							}
						},
						{
							// ???/?? ??
							"data_control5": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": [0, 0],
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
										"binding_name_override": "#preserved_text5",
										// ?? ???
										"binding_condition": "visibility_changed"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_control5",
										// 계산식/참조 값
										"source_property_name": "(#preserved_text5 - $upd_str5)",
										// 결과가 들어갈 속성
										"target_property_name": "#text"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(#text - ':')",
										// 결과가 들어갈 속성
										"target_property_name": "#health"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(#text - (':' + #health + ', ')",
										// 결과가 들어갈 속성
										"target_property_name": "#hunger"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(#text - (':' + #health + ', ' + #hunger + ', ')",
										// 결과가 들어갈 속성
										"target_property_name": "#stamina"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(#text - (':' + #health + ', ' + #hunger + ', ' + #stamina + ', ')",
										// 결과가 들어갈 속성
										"target_property_name": "#health_number"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(not (#hud_title_text_string = #preserved_text5) and not ((#hud_title_text_string - $upd_str5) = #hud_title_text_string))",
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
				"layout_customization_reset": {
					// 이미지 표시
					"type": "image",
					// 가로/세로 크기
					"size": ["200%", "200%"],
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
								"size": [210, 160],
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
					"size": ["200%", "200%"],
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
								"size": [210, 160],
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
					"size": ["100%c+5px", "100%c+2px"],
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
					"size": ["100%c+5px", "100%c+2px"],
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
					"size": ["100%c+5px", "100%c+2px"],
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
			{"centered_gui_elements@centered_gui_elements": {}},
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
				"centered_ridingvr_gui_elements@centered_gui_elements_at_bottom_middle": {
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_middle",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_middle",
					// 기준점에서 이동하는 거리
					"offset": [0, 60],
					// 가로/세로 크기
					"size": [180, 50],
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#hud_visible_centered_ridingvr",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible",
							// 게임이 주는 전역 값 연결
							"binding_type": "global"
						}
					]
				}
			},
			{"not_centered_gui_elements@not_centered_gui_elements": {}},
			{
				// ???/?? ??
				"gamertag_label_for_splitscreen": {
					// 글자 표시
					"type": "label",
					// 가로/세로 크기
					"size": ["default", "default"],
					// 기준점(어디에서 시작할지)
					"anchor_from": "top_right",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_right",
					// 기준점에서 이동하는 거리
					"offset": [-4, 4],
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
				"exp_rend@exp_progress_bar_and_hotbar": {
					// for pocket
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
					"size": ["100%", "75%"],
					// 기준점에서 이동하는 거리
					"offset": [0, 24],
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
			{"vignette_rend@vignette_renderer": {}},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"curor_rend@cursor_renderer": {
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "(not #on_new_death_screen)",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"editor_volume_highlight_rend@editor_volume_highlight_renderer": {
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#is_editor_mode_paste_preview_visible",
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
					"offset": ["50%", "50%"]
				}
			},
			{
				//We need to be able to move chat down the screen when we are in VR and riding.
				//SO use a stack panel with a padding that we can ignore at runtime as needed
				"chat_stack": {
					// 줄맞춤 컨테이너: 가로/세로로 자동 배치
					"type": "stack_panel",
					// 쌓는 방향(가로/세로)
					"orientation": "vertical",
					// 가로/세로 크기
					"size": ["40%", "100%"],
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
								"size": ["100%", 50],
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
							"paper_doll_padding_living_room": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": ["100%", 30],
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#paper_doll_visible_living_room",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#visible"
									}
								]
							}
						},
						{
							// ???/?? ??
							"vr_riding_chat_padding": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": ["100%", 132],
								// 보이기/숨기기(공간 유지)
								"visible": "#vr_riding", //Make this visible to move the chat panel down
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#vr_riding",
										// 가져온 값을 다른 속성으로 연결
										"binding_name_override": "#visible"
									}
								]
							}
						},
						{
							// ???/?? ??
							"vr_chat_padding": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": ["100%", 30],
								// 보이기/숨기기(공간 유지)
								"visible": "#vr_non_riding", //Make this visible to move the chat panel down
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#vr_non_riding",
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
								"size": ["100%", 32],
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
						{"player_position@hud.player_position": {}},
						{"number_of_days_played@hud.number_of_days_played": {}},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"game_tip@game_tip.game_tip_chat_stack_factory": {
								// 가로/세로 크기
								"size": ["100%", "100%c"]
							}
						},
						{"chat_panel@hud.chat_panel": {}}
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
					"size": ["100%", "100%"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"boss_hud_padding": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": ["100%", 20],
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
								"size": ["100%", "15%"],
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
											"offset": [0, 2]
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
	},

	// 다른 템플릿을 가져와서 확장(상속)
	"hud_screen@common.base_screen": {
		// ?? ??
		"is_showing_menu": false,
		// ?? ??
		"should_steal_mouse": true,
		// ?? ??
		"low_frequency_rendering": true,
		// ?? ??
		"absorbs_input": false,
		// ?? ??
		"send_telemetry": false,

		// 오버라이드 가능한 변수
		"$screen_animations": [
			"@common.screen_exit_animation_push_fade",
			"@common.screen_exit_animation_pop_fade",
			"@common.screen_entrance_animation_push_fade",
			"@common.screen_entrance_animation_pop_fade"
		],

		// 입력 키/버튼과 동작 연결
		"button_mappings": [
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.scoreboard",
				// 어떤 동작을 실행할지
				"to_button_id": "button.scoreboard",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.inventory_left",
				// 어떤 동작을 실행할지
				"to_button_id": "button.hotbar_inventory_left",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.inventory_right",
				// 어떤 동작을 실행할지
				"to_button_id": "button.hotbar_inventory_right",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.hide_gui",
				// 어떤 동작을 실행할지
				"to_button_id": "button.hide_gui_all",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.hide_tooltips",
				// 어떤 동작을 실행할지
				"to_button_id": "button.hide_tooltips_hud",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.hide_paperdoll",
				// 어떤 동작을 실행할지
				"to_button_id": "button.hide_paperdoll_hud",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot1",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_1",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot2",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_2",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot3",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_3",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot4",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_4",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot5",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_5",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot6",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_6",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot7",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_7",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot8",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_8",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot9",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_9",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.slot0",
				// 어떤 동작을 실행할지
				"to_button_id": "button.slot_0",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.arrow_up",
				// 어떤 동작을 실행할지
				"to_button_id": "button.arrow_key",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.arrow_down",
				// 어떤 동작을 실행할지
				"to_button_id": "button.arrow_key",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.arrow_left",
				// 어떤 동작을 실행할지
				"to_button_id": "button.arrow_key",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			},
			{
				// 어떤 입력을 받을지
				"from_button_id": "button.arrow_right",
				// 어떤 동작을 실행할지
				"to_button_id": "button.arrow_key",
				// 입력 시점(pressed 등)
				"mapping_type": "global"
			}
		],
		// 오버라이드 가능한 변수
		"$screen_content": "hud.hud_content"
	},

	// ???/?? ??
	"hud_content": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 오버라이드 가능한 변수
		"$hud_size": ["100%", "100%"],
		// 오버라이드 가능한 변수
		"$hud_player_rend_desktop_offset|default": [15, 15],
		// 조건에 따라 변수 값을 바꾸기
		"variables": [
			{
				// 이 조건이 맞으면 적용
				"requires": "($is_holographic and not $is_living_room_mode)",
				// 오버라이드 가능한 변수
				"$hud_player_rend_desktop_offset": [100, 50]
			},
			{
				// 이 조건이 맞으면 적용
				"requires": "($compress_hud_width)",
				// 오버라이드 가능한 변수
				"$hud_size": ["90%", "100%"]
			}
		],
		// 가로/세로 크기
		"size": "$hud_size",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"root_panel@hud.root_panel": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"editor_gizmo_renderer@editor_gizmo_renderer": {
					// 완전히 제거(공간도 없음)
					"ignored": "(not $is_editor_mode_enabled)"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"camera_renderer@camera_renderer": {}
			}
		]
	},

	// ???/?? ??
	"layout_customization_main_panel_button": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["50%", "100%"],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"button@common_buttons.light_text_button": {
					// 오버라이드 가능한 변수
					"$new_ui_label_offset": [0, -1],
					// 가로/세로 크기
					"size": ["100%-4px", "100%-10px"],
					// 오버라이드 가능한 변수
					"$button_bindings|default": [],
					// 게임 값과 연결하는 규칙 목록
					"bindings": "$button_bindings"
				}
			}
		]
	},

	// ???/?? ??
	"layout_customization_main_panel": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 55,
		// 가로/세로 크기
		"size": [100, 100],
		// ??/?? ?
		"use_anchored_offset": true,
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_middle",
		// 이 컨트롤 안에서 쓰는 임시 저장소
		"property_bag": {
			// ???/??? ?
			"#anchored_offset_value_y": 0.0,
			// ???/??? ?
			"#size_binding_x": 0.0,
			// ???/??? ?
			"#size_binding_y": 0.0
		},
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"main_panel_frame": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/text_label_box",
					// ?? (R,G,B,A)
					"color": [0.6, 0.6, 0.6],
					// 가로/세로 크기
					"size": ["100%", "100%"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"main_panel_content": {
								// 줄맞춤 컨테이너: 가로/세로로 자동 배치
								"type": "stack_panel",
								// 가로/세로 크기
								"size": ["100%-6px", "100%"],
								// 쌓는 방향(가로/세로)
								"orientation": "horizontal",
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// 다른 템플릿을 가져와서 확장(상속)
										"reset_button@hud.layout_customization_main_panel_button": {
											// 오버라이드 가능한 변수
											"$button_text": "hudScreen.controlCustomization.reset",
											// 오버라이드 가능한 변수
											"$pressed_button_name": "button.reset",
											// 오버라이드 가능한 변수
											"$button_bindings": [
												{
													// 가져올 값 이름
													"binding_name": "#wysiwyg_reset_button_enabled",
													// 가져온 값을 다른 속성으로 연결
													"binding_name_override": "#enabled",
													// ?? ???
													"binding_condition": "visible"
												}
											],
											// 게임 값과 연결하는 규칙 목록
											"bindings": [
												{
													// 가져올 값 이름
													"binding_name": "#wysiwyg_no_control_selected",
													// 가져온 값을 다른 속성으로 연결
													"binding_name_override": "#visible"
												}
											]
										}
									},
									{
										// 다른 템플릿을 가져와서 확장(상속)
										"exit_button@hud.layout_customization_main_panel_button": {
											// 오버라이드 가능한 변수
											"$button_text": "hudScreen.controlCustomization.exit",
											// 오버라이드 가능한 변수
											"$pressed_button_name": "button.exit",
											// 게임 값과 연결하는 규칙 목록
											"bindings": [
												{
													// 가져올 값 이름
													"binding_name": "#wysiwyg_no_control_selected",
													// 가져온 값을 다른 속성으로 연결
													"binding_name_override": "#visible"
												}
											]
										}
									},
									{
										// 다른 템플릿을 가져와서 확장(상속)
										"opacity_button@hud.layout_customization_main_panel_button": {
											// 오버라이드 가능한 변수
											"$button_text": "hudScreen.controlCustomization.opacity",
											// 오버라이드 가능한 변수
											"$pressed_button_name": "button.opacity",
											// 게임 값과 연결하는 규칙 목록
											"bindings": [
												{
													// 가져올 값 이름
													"binding_name": "#wysiwyg_control_selected",
													// 가져온 값을 다른 속성으로 연결
													"binding_name_override": "#visible"
												}
											]
										}
									},
									{
										// 다른 템플릿을 가져와서 확장(상속)
										"size_button@hud.layout_customization_main_panel_button": {
											// 오버라이드 가능한 변수
											"$button_text": "hudScreen.controlCustomization.size",
											// 오버라이드 가능한 변수
											"$pressed_button_name": "button.size",
											// 게임 값과 연결하는 규칙 목록
											"bindings": [
												{
													// 가져올 값 이름
													"binding_name": "#wysiwyg_control_selected",
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
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#layout_customization_main_panel_offset_y",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#anchored_offset_value_y",
				// ?? ???
				"binding_condition": "visible"
			},
			{
				// 가져올 값 이름
				"binding_name": "#layout_customization_main_panel_size_x",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#size_binding_x",
				// ?? ???
				"binding_condition": "visible"
			},
			{
				// 가져올 값 이름
				"binding_name": "#layout_customization_main_panel_size_y",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#size_binding_y",
				// ?? ???
				"binding_condition": "visible"
			},
			{
				// 가져올 값 이름
				"binding_name": "#layout_customization_main_panel_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	},

	// ???/?? ??
	"layout_customization_option_slider": {
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
				"slider@settings_common.option_slider": {
					// 가로/세로 크기
					"size": ["fill", "100%"],
					// 오버라이드 가능한 변수
					"$label_offset": [6, 2],
					// 오버라이드 가능한 변수
					"$focus_override_right": "FOCUS_OVERRIDE_STOP",
					// 오버라이드 가능한 변수
					"$slider_binding_condition": "always_when_visible",
					// 오버라이드 가능한 변수
					"$label_bindings": [
						{
							// 가져올 값 이름
							"binding_name": "$option_label",
							// ?? ???
							"binding_condition": "always_when_visible"
						}
					]
				}
			},
			{
				// ???/?? ??
				"reset": {
					// 패널: 다른 부품을 담는 바닥판
					"type": "panel",
					// 가로/세로 크기
					"size": ["100%y", "80%"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"reset_button@common.button": {
								// 기준점에서 이동하는 거리
								"offset": [0, 5],
								// 가로/세로 크기
								"size": ["75%", "75%"],
								// 오버라이드 가능한 변수
								"$default_texture": "textures/ui/wysiwyg_reset",
								// 오버라이드 가능한 변수
								"$hover_texture": "textures/ui/wysiwyg_reset",
								// 오버라이드 가능한 변수
								"$pressed_texture": "textures/ui/wysiwyg_reset",
								// 오버라이드 가능한 변수
								"$pressed_button_name": "button.option_reset",
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"default": {
											// 이미지 표시
											"type": "image",
											// 사용할 이미지 경로
											"texture": "$default_texture"
										}
									},
									{
										// ???/?? ??
										"hover": {
											// 이미지 표시
											"type": "image",
											// 사용할 이미지 경로
											"texture": "$hover_texture"
										}
									},
									{
										// ???/?? ??
										"pressed": {
											// 이미지 표시
											"type": "image",
											// 사용할 이미지 경로
											"texture": "$pressed_texture"
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
	"layout_customization_option_content": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 기준점에서 이동하는 거리
		"offset": [0, 2],
		// 가로/세로 크기
		"size": ["100%-4px", "100%-4px"],
		// 오버라이드 가능한 변수
		"$customization_option_collection_name|default": "option_items",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"scale_option@layout_customization_option_slider": {
					// 오버라이드 가능한 변수
					"$option_label": "#scale_option_slider_label",
					// 오버라이드 가능한 변수
					"$slider_name": "scale_option",
					// 오버라이드 가능한 변수
					"$slider_value_binding_name": "#scale_option",
					// 오버라이드 가능한 변수
					"$slider_tts_text_value": "#scale_option_text_value",
					// 오버라이드 가능한 변수
					"$option_enabled_binding_name": "#scale_option_enabled",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#scale_option_visible",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible",
							// 목록 데이터를 반복 연결
							"binding_type": "collection",
							// 목록 이름
							"binding_collection_name": "$customization_option_collection_name"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"opacity_option@layout_customization_option_slider": {
					// 오버라이드 가능한 변수
					"$option_label": "#opacity_option_slider_label",
					// 오버라이드 가능한 변수
					"$slider_name": "opacity_option",
					// 오버라이드 가능한 변수
					"$slider_value_binding_name": "#opacity_option",
					// 오버라이드 가능한 변수
					"$slider_tts_text_value": "#opacity_option_text_value",
					// 오버라이드 가능한 변수
					"$option_enabled_binding_name": "#opacity_option_enabled",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 가져올 값 이름
							"binding_name": "#opacity_option_visible",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible",
							// 목록 데이터를 반복 연결
							"binding_type": "collection",
							// 목록 이름
							"binding_collection_name": "$customization_option_collection_name"
						}
					]
				}
			},
			{
				// ???/?? ??
				"apply_to_all_toggle": {
					// 줄맞춤 컨테이너: 가로/세로로 자동 배치
					"type": "stack_panel",
					// 기준점에서 이동하는 거리
					"offset": [0, -4],
					// 쌓는 방향(가로/세로)
					"orientation": "horizontal",
					// 가로/세로 크기
					"size": ["100%", "100%"],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"checkbox_frame": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": ["100%y", "100%"],
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"checkbox_unchecked": {
											// 이미지 표시
											"type": "image",
											// 가로/세로 크기
											"size": ["50%", "50%"],
											// 사용할 이미지 경로
											"texture": "textures/ui/radio_off",
											// 게임 값과 연결하는 규칙 목록
											"bindings": [
												{
													// 가져올 값 이름
													"binding_name": "(not #apply_to_all_selected)",
													// 가져온 값을 다른 속성으로 연결
													"binding_name_override": "#visible"
												}
											]
										}
									},
									{
										// ???/?? ??
										"checkbox_checked": {
											// 이미지 표시
											"type": "image",
											// 가로/세로 크기
											"size": ["50%", "50%"],
											// 사용할 이미지 경로
											"texture": "textures/ui/radio_checked_dark",
											// 게임 값과 연결하는 규칙 목록
											"bindings": [
												{
													// 가져올 값 이름
													"binding_name": "#apply_to_all_selected",
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
							"caption_frame": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// ???/?? ??
										"caption": {
											// 글자 표시
											"type": "label",
											// 기준점(어디에서 시작할지)
											"anchor_from": "left_middle",
											// 붙일 위치(어디에 놓을지)
											"anchor_to": "left_middle",
											// 보여줄 글자
											"text": "hudScreen.controlCustomization.applyToAll",
											// ?? (R,G,B,A)
											"color": "$f_color_format"
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
							"binding_name": "#apply_to_all_option_visible",
							// 가져온 값을 다른 속성으로 연결
							"binding_name_override": "#visible",
							// 목록 데이터를 반복 연결
							"binding_type": "collection",
							// 목록 이름
							"binding_collection_name": "$customization_option_collection_name"
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"layout_customization_option": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": ["100%", 1],
		// 오버라이드 가능한 변수
		"$customization_option_collection_name|default": "option_items",
		// 이 컨트롤 안에서 쓰는 임시 저장소
		"property_bag": {
			// ???/??? ?
			"#size_binding_y": 0.0
		},
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"content@layout_customization_option_content": {}
			}
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 가져올 값 이름
				"binding_name": "#layout_customization_option_size_y",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#size_binding_y",
				// ?? ???
				"binding_condition": "visible"
			}
		]
	},

	// ???/?? ??
	"layout_customization_sub_panel": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [1, 1],
		// ??/?? ?
		"use_anchored_offset": true,
		// 기준점(어디에서 시작할지)
		"anchor_from": "top_middle",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "top_middle",
		// 이 컨트롤 안에서 쓰는 임시 저장소
		"property_bag": {
			// ???/??? ?
			"#anchored_offset_value_y": 0.0,
			// ???/??? ?
			"#size_binding_x": 0.0,
			// ???/??? ?
			"#size_binding_y": 0.0
		},
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"background": {
					// 이미지 표시
					"type": "image",
					// 가로/세로 크기
					"size": ["100%", "100%"],
					// 사용할 이미지 경로
					"texture": "textures/ui/text_label_box",
					// ?? (R,G,B,A)
					"color": [0.6, 0.6, 0.6],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"sub_panel_content": {
								// 격자 컨테이너: 칸칸이 배치
								"type": "grid",
								// 가로/세로 크기
								"size": ["100%", "100%"],
								// ??? ?? ?
								"grid_item_template": "hud.layout_customization_option",
								// 오버라이드 가능한 변수
								"$customization_option_collection_name|default": "option_items",
								// 목록 이름
								"collection_name": "$customization_option_collection_name",
								// ??? ?? ?
								"grid_dimension_binding": "#layout_customization_dimension",
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 가져올 값 이름
										"binding_name": "#layout_customization_dimension",
										// ?? ???
										"binding_condition": "visible"
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
				"binding_name": "#layout_customization_sub_panel_offset_y",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#anchored_offset_value_y",
				// ?? ???
				"binding_condition": "visible"
			},
			{
				// 가져올 값 이름
				"binding_name": "#layout_customization_sub_panel_size_x",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#size_binding_x",
				// ?? ???
				"binding_condition": "visible"
			},
			{
				// 가져올 값 이름
				"binding_name": "#layout_customization_sub_panel_size_y",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#size_binding_y",
				// ?? ???
				"binding_condition": "visible"
			},
			{
				// 가져올 값 이름
				"binding_name": "#layout_customization_sub_panel_visible",
				// 가져온 값을 다른 속성으로 연결
				"binding_name_override": "#visible"
			}
		]
	}
}
```








### 단일 파일
hud_screen.json
추가 HUD 예제 · 단일 파일



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: 추가 HUD 예제 / 단일 파일
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // ???/?? ??
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

  // ???/?? ??
  "root_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [

          //usage
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
              "$multiplier": 0.02, // 1 / 50; 50 - max amount
              // 오버라이드 가능한 변수
              "$data_source": "preserved_title",
              // 오버라이드 가능한 변수
              "$progress_binding": "#progress",

              // 오버라이드 가능한 변수
              "$text_format": "('§z' + $progress_binding + '/50')"
            }
          },

          // usage with dynamic max value
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

              // "$multiplier": 0.02,  - no need for multiplier if you're using dynamic max value
              "$data_source": "preserved_title",
              // 오버라이드 가능한 변수
              "$progress_binding": "#progress",
              // 오버라이드 가능한 변수
              "$max_value_binding": "#max_value",

              // 오버라이드 가능한 변수
              "$text_format": "('§z' + $progress_binding + '/' + $max_value_binding)"
            }
          },

          {"preserved_title@hud.preserved_title": {}}
        ]
      }
    ]
  }
}
```













초보 예제 모음
22 개






[분할 목록으로 돌아가기](preview.html#example-view)


### Animated Progress Bar Template


### Animated Progress Bar Template
_ui_defs.json
초보 예제 모음 · Animated Progress Bar Template



필요한 부분만 참고해서 가져가세요.



```
// 예제: _ui_defs.json
// 분류: 초보 예제 모음 / Animated Progress Bar Template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // ???/?? ??
  "ui_defs": [
    "ui/animated_bar.json"
  ]
}
```








### Animated Progress Bar Template
animated_bar.json
초보 예제 모음 · Animated Progress Bar Template



필요한 부분만 참고해서 가져가세요.



```
// 예제: animated_bar.json
// 분류: 초보 예제 모음 / Animated Progress Bar Template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "animated_bar",

  // Notes: this is just generic template. Edit the code however you like to achieve what you want.
  // Or, if you don't wanna go through all that trouble just use it as-is :)

  "animated_progress_bar": {
    // animations
    "$duration|default": 0.2,
    // 오버라이드 가능한 변수
    "$trail_delay|default": 0.2,
    // 오버라이드 가능한 변수
    "$increase_easing|default": "out_expo", // recommended
    // 오버라이드 가능한 변수
    "$decrease_easing|default": "in_expo", // recommended

    // progress bar
    /*
      "" - a nineslice texture that can be stretched
      "fixed" - a texture that cannot be stretched (idk what to call it lol. see the example textures)
    */
    // 오버라이드 가능한 변수
    "$texture_type|default": "",
    // 오버라이드 가능한 변수
    "$fill_from|default": "left", // left, right, up, down
    // 오버라이드 가능한 변수
    "$background_size|default": [100, 10], // it's better to use your texture size
    // 오버라이드 가능한 변수
    "$background_texture|default": "textures/ui/bar_bg",
    // 오버라이드 가능한 변수
    "$background_alpha|default": 1,

    /*
      size of your progress texture
      100% is the width / height of background texture ($background_size)
      USE fixed size instead of %, if your texture isn't a nineslice texture or if it looks weird
    */
    // 오버라이드 가능한 변수
    "$bar_size|default": ["100% - 2px", "100% - 2px"],
    // 오버라이드 가능한 변수
    "$bar_texture|default": "textures/ui/bar",
    // 오버라이드 가능한 변수
    "$bar_offset|default": [1, 1], // offset from the background texture (always from top_left)
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
    "$data_source|default": "<preserved title or subtitle panel>", // see example
    // 오버라이드 가능한 변수
    "$max_value_binding|default": "", // keep this empty if you don't want the max value to be dynamic
    // 오버라이드 가능한 변수
    "$progress_binding|default": "#null", // name of the binding that will provide the value for this progress bar

    // progress bar text. these are pretty self-explanatory
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
    "$text_anchor|default": "center",
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

    // do not change :)
    "$_fixed|default": "",
    // 오버라이드 가능한 변수
    "$_direction|default": "",
    // 오버라이드 가능한 변수
    "$_anchor|default": "top_left",
    // 오버라이드 가능한 변수
    "$_size_binding|default": "#size_binding_x",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($texture_type = 'fixed')",
        // 오버라이드 가능한 변수
        "$_fixed": "__fixed"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "($fill_from = 'right')",
        // 오버라이드 가능한 변수
        "$_anchor": "top_right"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "($fill_from = 'up')",
        // 오버라이드 가능한 변수
        "$_size_binding": "#size_binding_y",
        // 오버라이드 가능한 변수
        "$_direction": "__vertical"
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "($fill_from = 'down')",
        // 오버라이드 가능한 변수
        "$_size_binding": "#size_binding_y",
        // 오버라이드 가능한 변수
        "$_direction": "__vertical",
        // 오버라이드 가능한 변수
        "$_anchor": "bottom_left"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {"progress_bar_text_cx0": {
        // 완전히 제거(공간도 없음)
        "ignored": "$ignore_text",
        // 글자 표시
        "type": "label",
        // 보여줄 글자
        "text": "#text",
        // 겹치는 순서(숫자 클수록 위)
        "layer": 2,
        // 기준점(어디에서 시작할지)
        "anchor_from": "$text_anchor",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "$text_anchor",
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
      }},
      {
        // ???/?? ??
        "bar_parent_panel_cx0": {
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
              "animated_bar_panel_cx1": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$_anchor",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // 오버라이드 가능한 변수
                "$control_name": "('animated_bar.animated_bar_image' + $_fixed)",
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
                    "source_property_name": "((#changed_value + #prev_value - #min) * #multiplier)",
                    // 결과가 들어갈 속성
                    "target_property_name": "$_size_binding"
                  }
                ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "anim_increase_cx2": {
                      // 데이터 목록을 반복 배치
                      "type": "collection_panel",
                      // 오버라이드 가능한 변수
                      "$size_anim": "('@animated_bar.increase_anim' + $_direction + $_fixed)",
                      // 오버라이드 가능한 변수
                      "$ignore_trail": true,
                      // 목록 아이템을 자동으로 생성
                      "factory": {
                        // ?? ??
                        "name": "anim_increase",
                        // ??? ???
                        "control_name": "$control_name"
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "animated_bar_panel_cx1",
                          // ?? ??
                          "resolve_sibling_scope": true,
                          // 계산식/참조 값
                          "source_property_name": "((#changed_value > #prev_value) * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#collection_length"
                        },
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#collection_length * 0 = 0)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                        }
                      ]
                    }
                  },
                  {
                    // ???/?? ??
                    "anim_decrease_cx2": {
                      // 데이터 목록을 반복 배치
                      "type": "collection_panel",
                      // 오버라이드 가능한 변수
                      "$size_anim": "('@animated_bar.decrease_anim' + $_direction + $_fixed)",
                      // 목록 아이템을 자동으로 생성
                      "factory": {
                        // ?? ??
                        "name": "anim_decrease",
                        // ??? ???
                        "control_name": "$control_name"
                      },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 계산/조건 결과를 연결
                          "binding_type": "view",
                          // ?? ??
                          "source_control_name": "animated_bar_panel_cx1",
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
              "bar_panel_cx1": {
                // 이미지 표시
                "type": "image",
                // ???
                "alpha": "$bar_alpha",
                // 사용할 이미지 경로
                "texture": "$bar_texture",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$_anchor",
                // 가로/세로 크기
                "size": ["100%", "100%"],
                // ??? ??
                "clip_direction": "$fill_from",
                // ?? ??
                "clip_pixelperfect": false,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  {
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "source_control_name": "animated_bar_panel_cx1",
                    // ?? ??
                    "resolve_sibling_scope": true,
                    // 계산식/참조 값
                    "source_property_name": "($one - #min * #multiplier)",
                    // 결과가 들어갈 속성
                    "target_property_name": "#clip_ratio"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "bar_bg_cx0": {
          // 이미지 표시
          "type": "image",
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

  "increase_anim__fixed": { // for fixed texture
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": [0, "200%"],
    // 끝 값
    "to": ["100%", "200%"],
    // 걸리는 시간(초)
    "duration": "$duration",
    // 움직임 곡선
    "easing": "$increase_easing"
  },

  // ???/?? ??
  "increase_anim__vertical": {
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": ["100%", 0],
    // 끝 값
    "to": ["100%", "100%"],
    // 걸리는 시간(초)
    "duration": "$duration",
    // 움직임 곡선
    "easing": "$increase_easing"
  },

  "increase_anim__vertical__fixed": { // for fixed texture
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": ["200%", 0],
    // 끝 값
    "to": ["200%", "100%"],
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

  "decrease_anim__fixed": { // for fixed texture
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": ["100%", "200%"],
    // 끝 값
    "to": [0, "200%"],
    // 걸리는 시간(초)
    "duration": "$duration",
    // 움직임 곡선
    "easing": "$decrease_easing"
  },

  // ???/?? ??
  "decrease_anim__vertical": {
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": ["100%", "100%"],
    // 끝 값
    "to": ["100%", 0],
    // 걸리는 시간(초)
    "duration": "$duration",
    // 움직임 곡선
    "easing": "$decrease_easing"
  },

  "decrease_anim__vertical__fixed": { // for fixed texture
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": ["200%", "100%"],
    // 끝 값
    "to": ["200%", 0],
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
    "next": "('@animated_bar.decrease_anim' + $_direction)"
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
        "bar_image_cx0": {
          // 이미지 표시
          "type": "image",
          // ???
          "alpha": "$bar_alpha",
          // 사용할 이미지 경로
          "texture": "$bar_texture",
          // 가로/세로 크기
          "size": "$size_anim",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 기준점(어디에서 시작할지)
          "anchor_from": "$_anchor",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$_anchor"
        }
      },
      {
        // ???/?? ??
        "trail_image_cx0": {
          // 완전히 제거(공간도 없음)
          "ignored": "$ignore_trail",
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 0,
          // 가로/세로 크기
          "size": "@animated_bar.trail_anim",
          // ???
          "alpha": "$trail_alpha",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$_anchor",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$_anchor",
          // 사용할 이미지 경로
          "texture": "$trail_texture"
        }
      }
    ]
  },

  "animated_bar_image__fixed": { // for fixed texture
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bar_image_cx0": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$size_anim",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 기준점(어디에서 시작할지)
          "anchor_from": "$_anchor",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$_anchor",
          // ?? ????
          "clips_children": true,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "image_cx1": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": "$bar_size",
                // ???
                "alpha": "$bar_alpha",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$_anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$_anchor",
                // 사용할 이미지 경로
                "texture": "$bar_texture"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "trail_image_cx0": {
          // 완전히 제거(공간도 없음)
          "ignored": "$ignore_trail",
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 0,
          // 가로/세로 크기
          "size": "@animated_bar.trail_anim",
          // ???
          "alpha": "$trail_alpha",
          // 기준점(어디에서 시작할지)
          "anchor_from": "$_anchor",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "$_anchor",
          // 사용할 이미지 경로
          "texture": "$trail_texture"
        }
      }
    ]
  }
}
```








### Animated Progress Bar Template
bar.json
초보 예제 모음 · Animated Progress Bar Template



필요한 부분만 참고해서 가져가세요.



```
// 예제: bar.json
// 분류: 초보 예제 모음 / Animated Progress Bar Template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 1,
  // ???/?? ??
  "base_size": [
    3,
    3
  ]
}
```








### Animated Progress Bar Template
bar_bg.json
초보 예제 모음 · Animated Progress Bar Template



필요한 부분만 참고해서 가져가세요.



```
// 예제: bar_bg.json
// 분류: 초보 예제 모음 / Animated Progress Bar Template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": [10, 3, 1, 3],
  // ???/?? ??
  "base_size": [
    15,
    10
  ]
}
```








### Animated Progress Bar Template
hud_screen.json
초보 예제 모음 · Animated Progress Bar Template



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: 초보 예제 모음 / Animated Progress Bar Template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // ???/?? ??
  "hud_title_text/title_frame": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "title",
        // 계산식/참조 값
        "source_property_name": "(#text - 'bar:' = #text)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  },

  "preserved_title": { // it's just an example. you can use it as-is or use your existing code
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


  // usage example. the variables you might need to change are described in the other file :)

  "root_panel": {
    // ?? ?? ??
    "modifications": [
      {
        // ?? ?? ??
        "array_name": "controls",
        // ?? ??
        "operation": "insert_back",
        // ??? ?
        "value": [
          { "bar_data@hud.preserved_title": {} },

          // if you want to hide the bar conditionally, you can define bindings in these
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "bar_1@animated_bar.animated_progress_bar": {
              // 오버라이드 가능한 변수
              "$background_size": [120, 10],
              // 오버라이드 가능한 변수
              "$bar_size": ["100% - 11px", "100% - 6px"],
              // 오버라이드 가능한 변수
              "$bar_offset": [10, 3],
              // 기준점에서 이동하는 거리
              "offset": [0, 50],

              // 오버라이드 가능한 변수
              "$multiplier": 0.02, // 1 / 50; 50 - max amount
              // 오버라이드 가능한 변수
              "$data_source": "bar_data", // we're getting our data from the preserved_title panel above named 'bar_data'
              // 오버라이드 가능한 변수
              "$progress_binding": "#progress", // see the bindings of preserved_title to understand better

              // 오버라이드 가능한 변수
              "$text_format": "('§z' + $progress_binding + '/50')"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "temp_bar@animated_bar.animated_progress_bar": {
              // 기준점(어디에서 시작할지)
              "anchor_from": "bottom_right",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "bottom_right",
              // 기준점에서 이동하는 거리
              "offset": [-10, -10],

              // 오버라이드 가능한 변수
              "$background_size": [7, 62],
              // 오버라이드 가능한 변수
              "$bar_size": [5, 51],
              // 오버라이드 가능한 변수
              "$bar_offset": [1, 0],
              // 오버라이드 가능한 변수
              "$bar_texture": "textures/ui/temp_bar_fixed",
              // 오버라이드 가능한 변수
              "$background_texture": "textures/ui/temp_bar_bg_fixed",

              // 오버라이드 가능한 변수
              "$texture_type": "fixed",
              // 오버라이드 가능한 변수
              "$fill_from": "down",
              // 오버라이드 가능한 변수
              "$ignore_trail": true,
              // 오버라이드 가능한 변수
              "$multiplier": 0.02, // 1 / 50
              // 오버라이드 가능한 변수
              "$data_source": "bar_data",
              // 오버라이드 가능한 변수
              "$progress_binding": "#progress",
              // 오버라이드 가능한 변수
              "$ignore_text": true
            }
          },
          // usage with dynamic max value
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "bar_2@animated_bar.animated_progress_bar": {
              // 기준점에서 이동하는 거리
              "offset": [0, 80],

              // 오버라이드 가능한 변수
              "$background_size": [120, 10],
              // 오버라이드 가능한 변수
              "$bar_size": ["100% - 11px", "100% - 6px"],
              // 오버라이드 가능한 변수
              "$bar_offset": [10, 3],

              // "$multiplier": 0.02,  - no need for multiplier if you're using dynamic max value
              "$data_source": "bar_data",
              // 오버라이드 가능한 변수
              "$progress_binding": "#progress",
              // 오버라이드 가능한 변수
              "$max_value_binding": "#max_value",

              // 오버라이드 가능한 변수
              "$text_format": "('§z' + $progress_binding + '/' + $max_value_binding)"
            }
          },
          {
            // 다른 템플릿을 가져와서 확장(상속)
            "health_bar@animated_bar.animated_progress_bar": {
              // 기준점(어디에서 시작할지)
              "anchor_from": "top_right",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "top_right",
              // 기준점에서 이동하는 거리
              "offset": [-10, 20],

              // 오버라이드 가능한 변수
              "$background_size": [80, 8],
              // 오버라이드 가능한 변수
              "$bar_size": [68, 4],
              // 오버라이드 가능한 변수
              "$bar_offset": [2, 2],
              // 오버라이드 가능한 변수
              "$bar_texture": "textures/ui/health_bar_fixed",
              // 오버라이드 가능한 변수
              "$background_texture": "textures/ui/health_bar_bg_fixed",

              // 오버라이드 가능한 변수
              "$texture_type": "fixed",
              // 오버라이드 가능한 변수
              "$fill_from": "right",
              // 오버라이드 가능한 변수
              "$multiplier": 0.025, // 1 / 40
              // 오버라이드 가능한 변수
              "$data_source": "bar_data",
              // 오버라이드 가능한 변수
              "$text_font_scale_factor": 0.7,
              // 오버라이드 가능한 변수
              "$text_offset": [0, -8],
              // 오버라이드 가능한 변수
              "$progress_binding": "#progress",
              // 오버라이드 가능한 변수
              "$text_format|default": "('§z' + $progress_binding + '/40')"
            }
          }
        ]
      }
    ]
  }
}
```












### chat notifications no examples


### chat notifications no examples
_global_variables.json
초보 예제 모음 · chat notifications no examples



필요한 부분만 참고해서 가져가세요.



```
// 예제: _global_variables.json
// 분류: 초보 예제 모음 / chat notifications no examples
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 오버라이드 가능한 변수
  "$notification_flag_0e34fd": "§N§O§T§I§F§I§C§A§T§I§O§N"
}
```








### chat notifications no examples
chat_screen.json
초보 예제 모음 · chat notifications no examples



필요한 부분만 참고해서 가져가세요.



```
// 예제: chat_screen.json
// 분류: 초보 예제 모음 / chat notifications no examples
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
        "source_property_name": "(('§␛' + #text + '§r') - ('§␛' + $notification_flag_0e34fd) = ('§␛' + #text + '§r'))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  }
}
```








### chat notifications no examples
hud_screen.json
초보 예제 모음 · chat notifications no examples



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: 초보 예제 모음 / chat notifications no examples
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
	"notification_factory": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 가로/세로 크기
		"size": [0, "100%c"],
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
			"control_ids": {"chat_item": "@hud.notification"}
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
		"from": ["100%c", "100%c"],
		// 끝 값
		"to": [0, "100%c"],
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
		"from": [0, "100%c"],
		// 끝 값
		"to": ["100%c", "100%c"],
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
		"from": ["100%c", "100%c"],
		// 끝 값
		"to": ["100%c", 0],
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
		"anims": ["@hud.noti_1"],
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
					"size": ["100%c + 18px", "100%cm + 12px"],
					// ?? ?? ?
					"min_size": ["100%c + 18px", 34],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"notification_text_panel": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": ["100%cm", "100%c"],
								// 겹치는 순서(숫자 클수록 위)
								"layer": 1,
								// 기준점(어디에서 시작할지)
								"anchor_from": "right_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "right_middle",
								// 기준점에서 이동하는 거리
								"offset": [-9, 1],
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
											"font_type": "MinecraftTen",
											// ?? ?? ?
											"backup_font_type": "MinecraftTen",
											// ?? ?? ??
											"font_scale_factor": 1.5,
											// 보여줄 글자
											"text": "#title",
											// 기준점(어디에서 시작할지)
											"anchor_from": "top_left",
											// 붙일 위치(어디에 놓을지)
											"anchor_to": "top_left",
											// 기준점에서 이동하는 거리
											"offset": [0, -2],
											// ?? ?? ?
											"max_size": [200, "default"],
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
											// 보여줄 글자
											"text": "#message",
											// 기준점(어디에서 시작할지)
											"anchor_from": "bottom_left",
											// 붙일 위치(어디에 놓을지)
											"anchor_to": "bottom_left",
											// ?? ?? ?
											"max_size": [200, "default"],
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
								"size": [16, 16],
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_left",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_left",
								// 기준점에서 이동하는 거리
								"offset": [9, 9],
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
								"size": [16, 16],
								// 기준점(어디에서 시작할지)
								"anchor_from": "top_left",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_left",
								// 기준점에서 이동하는 거리
								"offset": [9, 9],
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
								"size": [6, 0],
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
					"size": [0, 0],
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
		"size": [0, 0],
		// 애니메이션 목록
		"anims": ["@hud.immediate_destroy_anim"]
	},
	// ???/?? ??
	"chat_grid_item/chat_background": {
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// 계산식/참조 값
				"source_property_name": "(('§␛' + #text + '§r') - ('§␛' + $notification_flag_0e34fd) = ('§␛' + #text + '§r'))",
				// 결과가 들어갈 속성
				"target_property_name": "#visible"
			}
		]
	}
}
```








### chat notifications no examples
manifest.json
초보 예제 모음 · chat notifications no examples



필요한 부분만 참고해서 가져가세요.



```
// 예제: manifest.json
// 분류: 초보 예제 모음 / chat notifications no examples
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// ?? ??
	"format_version": 1,
	// ???/?? ??
	"header": {
		// ?? ??
		"name": "Chat Notifications RP",
		// ?? ??
		"uuid": "273a15d4-77a1-4a81-a82f-dbaa4c53abbf",
		// ?? ??
		"version": [0, 3, 1]
	},
	// ???/?? ??
	"modules": [
		{
			// 컨트롤 종류
			"type": "resources",
			// ?? ??
			"uuid": "50386810-a876-4852-bcd5-9a33ca7ca0f9",
			// ?? ??
			"version": [0, 3, 1]
		}
	],
	// ???/?? ??
	"dependencies": [
		{"uuid": "592315d1-e621-4869-9bac-00f3d17e533c", "version": [0, 3, 1]}
	]
}
```








### chat notifications no examples
manifest.json
초보 예제 모음 · chat notifications no examples



필요한 부분만 참고해서 가져가세요.



```
// 예제: manifest.json
// 분류: 초보 예제 모음 / chat notifications no examples
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// ?? ??
	"format_version": 1,
	// ???/?? ??
	"header": {
		// ?? ??
		"name": "Chat Notifications BP",
		// ?? ??
		"uuid": "592315d1-e621-4869-9bac-00f3d17e533c",
		// ?? ??
		"version": [0, 3, 1]
	},
	// ???/?? ??
	"modules": [
		{
			// 컨트롤 종류
			"type": "data",
			// ?? ??
			"uuid": "6084851f-76a2-47f8-a2e2-0226ca0dbbdd",
			// ?? ??
			"version": [0, 3, 1]
		},
		{
			// 컨트롤 종류
			"type": "script",
			// ?? ??
			"language": "javascript",
			// ?? ??
			"entry": "scripts/index.js",
			// ?? ??
			"uuid": "2712ef0d-c898-49a6-bf5a-8ca61035fe3f",
			// ?? ??
			"version": "1.6.0"
		}
	],
	// ???/?? ??
	"dependencies": [
		{"uuid": "273a15d4-77a1-4a81-a82f-dbaa4c53abbf", "version": [0, 3, 1]},
		{"module_name": "@minecraft/server", "version": "1.16.0"}
	]
}
```












### Custom Animated Toggle Template


### Custom Animated Toggle Template
debug_screen.json
초보 예제 모음 · Custom Animated Toggle Template



필요한 부분만 참고해서 가져가세요.



```
// 예제: debug_screen.json
// 분류: 초보 예제 모음 / Custom Animated Toggle Template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "debug_screen",
	// 다른 템플릿을 가져와서 확장(상속)
	"debug_screen@common.base_screen": {
		// 오버라이드 가능한 변수
		"$screen_content": "debug_screen.panelists"
	},
	// 다른 템플릿을 가져와서 확장(상속)
	"panelists@common.empty_panel": {
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"switch@common_toggles.animated_toggle": {
					// 가로/세로 크기
					"size": [
						64,
						32
					],
					// 오버라이드 가능한 변수
					"$toggle_view_binding_name": "Sw",
					// 오버라이드 가능한 변수
					"$toggle_text": "Switch state",
					// 오버라이드 가능한 변수
					"$toggle_type": "switch"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"button@common_toggles.animated_toggle": {
					// 기준점에서 이동하는 거리
					"offset": [
						0,
						32
					],
					// 가로/세로 크기
					"size": [
						128,
						32
					],
					// 오버라이드 가능한 변수
					"$toggle_view_binding_name": "Bt",
					// 오버라이드 가능한 변수
					"$toggle_text": "Button state",
					// 오버라이드 가능한 변수
					"$toggle_type": "button"
				}
			}
		]
	}
}
```








### Custom Animated Toggle Template
glow.json
초보 예제 모음 · Custom Animated Toggle Template



필요한 부분만 참고해서 가져가세요.



```
// 예제: glow.json
// 분류: 초보 예제 모음 / Custom Animated Toggle Template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// {
//   "nineslice_size": 0,
//   "base_size": [
//     256,
//     256
//   ]
// }
{
  // 테두리 늘림(9분할)
  "nineslice_size": 20,
  // ???/?? ??
  "base_size": [
    48,
    48
  ]
}
```








### Custom Animated Toggle Template
ui_template_toggles.json
초보 예제 모음 · Custom Animated Toggle Template



필요한 부분만 참고해서 가져가세요.



```
// 예제: ui_template_toggles.json
// 분류: 초보 예제 모음 / Custom Animated Toggle Template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "common_toggles",
	// 다른 템플릿을 가져와서 확장(상속)
	"pwgfrjenwkaoa@common.empty_image": {
		// 애니메이션 목록
		"anims": [
			{
				// ???/?? ??
				"InCol": {
					// 색상 변화
					"anim_type": "color",
					// 움직임 곡선
					"easing": "out_quart",
					// 걸리는 시간(초)
					"duration": 0.4,
					// 시작 값
					"from": [
						0.6,
						0.3,
						0.3,
						0.0
					],
					// 끝 값
					"to": [
						0.3,
						0.6,
						0.3,
						1.0
					]
				}
			}
		],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"bcg_shadow": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "glow",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 0,
					// 가로/세로 크기
					"size": [
						"100%+20px",
						"100%+20px"
					],
					// 애니메이션 목록
					"anims": [
						{
							// ???/?? ??
							"InCol": {
								// 색상 변화
								"anim_type": "color",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 시작 값
								"from": [
									0.6,
									0.3,
									0.3,
									0.0
								],
								// 끝 값
								"to": [
									0.3,
									0.6,
									0.3,
									1.0
								]
							}
						}
					]
				}
			},
			{
				// ???/?? ??
				"laiddibel": {
					// 글자 표시
					"type": "label",
					// 보여줄 글자
					"text": "$§",
					// 오버라이드 가능한 변수
					"$§": "($toggle_text + ': §aON')",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 3,
					// ?? ??
					"shadow": true
				}
			}
		],
		// 사용할 이미지 경로
		"texture": "textures/ui/white_background",
		// ?? ??
		"keep_ratio": false
	},
	// 다른 템플릿을 가져와서 확장(상속)
	"pwgfrjenwkaoa_exit@common.empty_image": {
		// 애니메이션 목록
		"anims": [
			{
				// ???/?? ??
				"InCol": {
					// 색상 변화
					"anim_type": "color",
					// 움직임 곡선
					"easing": "out_quart",
					// 걸리는 시간(초)
					"duration": 0.4,
					// 끝 값
					"to": [
						0.6,
						0.3,
						0.3,
						0.0
					],
					// 시작 값
					"from": [
						0.3,
						0.6,
						0.3,
						1.0
					]
				}
			}
		],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"bcg_shadow": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "glow",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 0,
					// 가로/세로 크기
					"size": [
						"100%+20px",
						"100%+20px"
					],
					// 애니메이션 목록
					"anims": [
						{
							// ???/?? ??
							"InCol": {
								// 색상 변화
								"anim_type": "color",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 끝 값
								"to": [
									0.6,
									0.3,
									0.3,
									0.0
								],
								// 시작 값
								"from": [
									0.3,
									0.6,
									0.3,
									1.0
								]
							}
						}
					]
				}
			},
			{
				// ???/?? ??
				"bg": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/white_background",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 2,
					// 가로/세로 크기
					"size": [
						"100%",
						"100%"
					],
					// ?? ??
					"keep_ratio": false,
					// 애니메이션 목록
					"anims": [
						{
							// ???/?? ??
							"InCol": {
								// 색상 변화
								"anim_type": "color",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 끝 값
								"to": [
									0.6,
									0.3,
									0.3,
									0.5
								],
								// 시작 값
								"from": [
									0.3,
									0.6,
									0.3,
									0.5
								]
							}
						}
					]
				}
			},
			{
				// ???/?? ??
				"fkdi": {
					// 글자 표시
					"type": "label",
					// 보여줄 글자
					"text": "$§",
					// 오버라이드 가능한 변수
					"$§": "($toggle_text + ': §cOFF')",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 3,
					// ?? ??
					"shadow": true
				}
			}
		],
		// 사용할 이미지 경로
		"texture": "textures/ui/white_background",
		// ?? ??
		"keep_ratio": false
	},
	// 다른 템플릿을 가져와서 확장(상속)
	"pwgfrjenwkaoa_sw@common.empty_panel": {
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"bcg_shadow": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "glow",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 0,
					// 가로/세로 크기
					"size": [
						"100%+20px",
						"100%+20px"
					],
					// 애니메이션 목록
					"anims": [
						{
							// ???/?? ??
							"InCol": {
								// 색상 변화
								"anim_type": "color",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 시작 값
								"from": [
									0.6,
									0.3,
									0.3,
									0.0
								],
								// 끝 값
								"to": [
									0.3,
									0.6,
									0.3,
									1.0
								]
							}
						}
					]
				}
			},
			{
				// ???/?? ??
				"nub": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/white_background",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 2,
					// 가로/세로 크기
					"size": [
						20,
						"100%"
					],
					// ?? ??
					"keep_ratio": false,
					// 애니메이션 목록
					"anims": [
						{
							// ???/?? ??
							"InCol": {
								// 색상 변화
								"anim_type": "color",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 시작 값
								"from": [
									0.6,
									0.3,
									0.3,
									0.0
								],
								// 끝 값
								"to": [
									0.3,
									0.6,
									0.3,
									1.0
								]
							}
						},
						{
							// ???/?? ??
							"OffsetIn": {
								// 위치 이동
								"anim_type": "offset",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 시작 값
								"from": [
									"-75%+25px",
									0
								],
								// 끝 값
								"to": [
									"75%-25px",
									0
								]
							}
						}
					]
				}
			},
			{
				// ???/?? ??
				"lavbel": {
					// 글자 표시
					"type": "label",
					// 보여줄 글자
					"text": "$§",
					// 오버라이드 가능한 변수
					"$§": "($toggle_text + ': §aON')",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 3,
					// ?? ??
					"shadow": true
				}
			}
		]
	},
	// 다른 템플릿을 가져와서 확장(상속)
	"pwgfrjenwkaoa_sw_exit@common.empty_panel": {
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"bcg_shadow": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "glow",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 0,
					// 가로/세로 크기
					"size": [
						"100%+20px",
						"100%+20px"
					],
					// 애니메이션 목록
					"anims": [
						{
							// ???/?? ??
							"InCol": {
								// 색상 변화
								"anim_type": "color",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 끝 값
								"to": [
									0.6,
									0.3,
									0.3,
									0.0
								],
								// 시작 값
								"from": [
									0.3,
									0.6,
									0.3,
									1.0
								]
							}
						}
					]
				}
			},
			{
				// ???/?? ??
				"by": {
					// 글자 표시
					"type": "label",
					// 보여줄 글자
					"text": "$§",
					// 오버라이드 가능한 변수
					"$§": "($toggle_text + ': §cOFF')",
					// ?? ??
					"shadow": true,
					// 겹치는 순서(숫자 클수록 위)
					"layer": 3
				}
			},
			{
				// ???/?? ??
				"nub": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/white_background",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 0,
					// 가로/세로 크기
					"size": [
						20,
						"100%"
					],
					// ?? ??
					"keep_ratio": false,
					// 애니메이션 목록
					"anims": [
						{
							// ???/?? ??
							"InCol": {
								// 색상 변화
								"anim_type": "color",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 끝 값
								"to": [
									0.6,
									0.3,
									0.3,
									0.0
								],
								// 시작 값
								"from": [
									0.3,
									0.6,
									0.3,
									1.0
								]
							}
						},
						{
							// ???/?? ??
							"OffsetIn": {
								// 위치 이동
								"anim_type": "offset",
								// 움직임 곡선
								"easing": "out_quart",
								// 걸리는 시간(초)
								"duration": 0.4,
								// 끝 값
								"to": [
									"-75%+25px",
									0
								],
								// 시작 값
								"from": [
									"75%-25px",
									0
								]
							}
						}
					]
				}
			}
		]
	},
	// 다른 템플릿을 가져와서 확장(상속)
	"animated_toggle@common_toggles.light_ui_toggle": {
		// 오버라이드 가능한 변수
		"$default_texture": "textures/ui/packs_border",
		// 오버라이드 가능한 변수
		"$hover_texture": "textures/ui/packs_border",
		// 오버라이드 가능한 변수
		"$pressed_texture": "textures/ui/packs_border",
		// 오버라이드 가능한 변수
		"$pressed_no_hover_texture": "textures/ui/packs_border",
		// 오버라이드 가능한 변수
		"$default_border_visible": false,
		// 오버라이드 가능한 변수
		"$hover_border_visible": false,
		// 오버라이드 가능한 변수
		"$toggle_type|default": "button",
		// 오버라이드 가능한 변수
		"$button_type_panel": "common.empty_panel",
		// 조건에 따라 변수 값을 바꾸기
		"variables": [
			{
				// 이 조건이 맞으면 적용
				"requires": "($toggle_type='button')",
				// 오버라이드 가능한 변수
				"$exit": "common_toggles.pwgfrjenwkaoa_exit",
				// 오버라이드 가능한 변수
				"$ent": "common_toggles.pwgfrjenwkaoa"
			},
			{
				// 이 조건이 맞으면 적용
				"requires": "($toggle_type='switch')",
				// 오버라이드 가능한 변수
				"$exit": "common_toggles.pwgfrjenwkaoa_sw_exit",
				// 오버라이드 가능한 변수
				"$ent": "common_toggles.pwgfrjenwkaoa_sw"
			}
		],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"background@common.empty_image": {
					// ???
					"alpha": 0.6,
					// 사용할 이미지 경로
					"texture": "textures/ui/Black"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"$toggle_view_binding_name@$template_toggle": {
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"unchecked@$unchecked_control": {}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"checked@$checked_control": {}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"unchecked_hover@$unchecked_hover_control": {}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"checked_hover@$checked_hover_control": {}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"unchecked_locked@$unchecked_locked_control": {}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"checked_locked@$checked_locked_control": {}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"unchecked_locked_hover@$unchecked_locked_hover_control": {}
						},
						{
							// 다른 템플릿을 가져와서 확장(상속)
							"checked_locked_hover@$checked_locked_hover_control": {}
						},
						{
							// ???/?? ??
							"('ent_'+$toggle_view_binding_name)": {
								// 데이터 목록을 반복 배치
								"type": "collection_panel",
								// 가로/세로 크기
								"size": [
									"100%-4px",
									"100%-4px"
								],
								// ??? ?? ?
								"propagate_alpha": true,
								// 겹치는 순서(숫자 클수록 위)
								"layer": 1,
								// 목록 아이템을 자동으로 생성
								"factory": {
									// ?? ??
									"name": "ieiriir8dsiwbbO9Xdw",
									// ??? ???
									"control_name": "$ent",
									// ?? ?? ?
									"max_children_size": 1
								},
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "$toggle_view_binding_name",
										// 계산식/참조 값
										"source_property_name": "#toggle_state",
										// 결과가 들어갈 속성
										"target_property_name": "#toggle_state"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(1 * #toggle_state)",
										// 결과가 들어갈 속성
										"target_property_name": "#alpha"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(1 * #toggle_state)",
										// 결과가 들어갈 속성
										"target_property_name": "#collection_length"
									}
								]
							}
						},
						{
							// ???/?? ??
							"('exit_'+$toggle_view_binding_name)": {
								// 데이터 목록을 반복 배치
								"type": "collection_panel",
								// 가로/세로 크기
								"size": [
									"100%-4px",
									"100%-4px"
								],
								// ??? ?? ?
								"propagate_alpha": true,
								// 겹치는 순서(숫자 클수록 위)
								"layer": 1,
								// 목록 아이템을 자동으로 생성
								"factory": {
									// ?? ??
									"name": "ieiriwbbO9Xdw",
									// ??? ???
									"control_name": "$exit",
									// ?? ?? ?
									"max_children_size": 1
								},
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "$toggle_view_binding_name",
										// 계산식/참조 값
										"source_property_name": "#toggle_state",
										// 결과가 들어갈 속성
										"target_property_name": "#toggle_state"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(1 * (not #toggle_state))",
										// 결과가 들어갈 속성
										"target_property_name": "#alpha"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(1 * (not #toggle_state))",
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
				"true": {
					// 클릭 가능한 버튼
					"type": "button",
					// ??? ??
					"sound_name": "random.pop",
					// ??? ?? ?
					"sound_volume": 1,
					// ??? ?? ?
					"sound_pitch": 1,
					// 겹치는 순서(숫자 클수록 위)
					"layer": 10,
					// ?? ??
					"consume_hover_events": false,
					// 입력 키/버튼과 동작 연결
					"button_mappings": "$mappings",
					// 오버라이드 가능한 변수
					"$mappings": [
						{
							// 어떤 입력을 받을지
							"from_button_id": "button.menu_select",
							// 어떤 동작을 실행할지
							"to_button_id": "random.pop",
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
							"source_control_name": "$toggle_view_binding_name",
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
				"false": {
					// 클릭 가능한 버튼
					"type": "button",
					// ??? ??
					"sound_name": "random.pop",
					// ??? ?? ?
					"sound_volume": 1,
					// ??? ?? ?
					"sound_pitch": 0.5,
					// 겹치는 순서(숫자 클수록 위)
					"layer": 10,
					// ?? ??
					"consume_hover_events": false,
					// 입력 키/버튼과 동작 연결
					"button_mappings": "$mappings",
					// 오버라이드 가능한 변수
					"$mappings": [
						{
							// 어떤 입력을 받을지
							"from_button_id": "button.menu_select",
							// 어떤 동작을 실행할지
							"to_button_id": "random.pop",
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
							"source_control_name": "$toggle_view_binding_name",
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












### loading anim template


### loading anim template
_global_variables.json
초보 예제 모음 · loading anim template



필요한 부분만 참고해서 가져가세요.



```
// 예제: _global_variables.json
// 분류: 초보 예제 모음 / loading anim template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 오버라이드 가능한 변수
  "$flag_for_loading_anim": "loading_anim"
}
```








### loading anim template
chat_screen.json
초보 예제 모음 · loading anim template



필요한 부분만 참고해서 가져가세요.



```
// 예제: chat_screen.json
// 분류: 초보 예제 모음 / loading anim template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
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
        "target_property_name": "#text_n"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text_n - $flag_for_loading_anim = #text_n)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
    ]
  }
}
```








### loading anim template
hud_screen.json
초보 예제 모음 · loading anim template



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: 초보 예제 모음 / loading anim template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // ???/?? ??
  "loading_animation_alpha_out": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_quart",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0,
    // ?? ??
    "destroy_at_end": "chat_grid_item"
  },

  // ???/?? ??
  "loading_animation_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "$loading_animation_wait_duration",
    // 다음 애니메이션으로 연결
    "next": "@hud.loading_animation_alpha_out"
  },

  // ???/?? ??
  "loading_animation_alpha_in": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": 0,
    // 끝 값
    "to": 1,
    // 다음 애니메이션으로 연결
    "next": "@hud.loading_animation_wait"
  },

  // ???/?? ??
  "anim_loading_bar": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "in_out_circ",
    // 걸리는 시간(초)
    "duration": "$loading_bar_duration",
    // 시작 값
    "from": [0, 16],
    // 끝 값
    "to": [200, 16]
  },

  // ???/?? ??
  "anim_loading_bar_again": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": "$loading_bar_duration",
    // 시작 값
    "from": [0, 16],
    // 끝 값
    "to": [200, 16]
  },

  // ???/?? ??
  "pick_axe_animation": {
    // 프레임 애니메이션
    "anim_type": "flip_book",
    // ?? ??
    "initial_uv": [ 0, 0 ],
    // ?? ??
    "frame_count": 91,
    // ?? ??
    "frame_step": 10,
    // ?? ??
    "fps": 30,
    // ?? ??
    "reversible": false,
    // 움직임 곡선
    "easing": "linear"
  },

  // ???/?? ??
  "portal_animation": {
    // 프레임 애니메이션
    "anim_type": "flip_book",
    // ?? ??
    "initial_uv": [ 0, 0 ],
    // ?? ??
    "frame_count": 16,
    // ?? ??
    "frame_step": 19,
    // ?? ??
    "fps": 10,
    // ?? ??
    "reversible": true,
    // 움직임 곡선
    "easing": "linear"
  },

  // ???/?? ??
  "spinner_animation": {
    // 프레임 애니메이션
    "anim_type": "flip_book",
    // ?? ??
    "initial_uv": [ 0, 0 ],
    // ?? ??
    "frame_count": 10,
    // ?? ??
    "frame_step": 7,
    // ?? ??
    "fps": 10
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
    "fps": 8,
    // ?? ??
    "looping": false,
    // 움직임 곡선
    "easing": "linear",
    // ?? ??
    "wait_until_rendered_to_play": true
  },

  // ???/?? ??
  "animation_generator": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "factory_for_anim": {
          // 데이터 목록을 반복 배치
          "type": "collection_panel",
          // 가로/세로 크기
          "size": ["100%", "100%"],

          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "loading_animation_generator",
            // ??? ???
            "control_name": "hud.loading_animation"
          },

          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#text - '<' - '>')",
              // 결과가 들어갈 속성
              "target_property_name": "#text_n"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(not (#text_n - $flag_for_loading_anim = #text_n) * 1)",
              // 결과가 들어갈 속성
              "target_property_name": "#collection_length"
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "loading_animation": {
    // 오버라이드 가능한 변수
    "$loading_animation_wait_duration": 2, //seconds
    // 오버라이드 가능한 변수
    "$loading_bar_duration": "$loading_animation_wait_duration",

    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": ["100%", "100%"],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "background": {
          // 특수 렌더러(그라디언트/플레이어 등)
          "type": "custom",
          // 커스텀 렌더러 종류
          "renderer": "gradient_renderer",
          // 가로/세로 크기
          "size": ["100%", "100%"],
          // 애니메이션 목록
          "anims": [
            "@hud.loading_animation_alpha_in"
          ],
          // ??? ?? ?
          "propagate_alpha": true,
          // ?? ?? ?
          "color1": [0, 0, 0],
          // ?? ?? ?
          "color2": [0.11, 0.01, 0.2],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "logo": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/title",
                // 가로/세로 크기
                "size": [300, 55],
                // 기준점에서 이동하는 거리
                "offset": [0, "-25%"]
              }
            },
            {
              // ???/?? ??
              "loading_bar_background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/loading_bar_background",
                // 가로/세로 크기
                "size": [200, 16],
                // 기준점에서 이동하는 거리
                "offset": [0, "20%"],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "loading_bar": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/loading_bar_filler",
                      // 가로/세로 크기
                      "size": [200, 16],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 애니메이션 목록
                      "anims": [
                        "@hud.anim_loading_bar"
                      ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "loading_bar_background_grass": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점에서 이동하는 거리
                "offset": [0, "15%"],
                // 가로/세로 크기
                "size": [200, 16],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "loading_bar": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 애니메이션 목록
                      "anims": [
                        "@hud.anim_loading_bar"
                      ],
                      // ?? ????
                      "clips_children": true,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "loading_bar_again": {
                            // 이미지 표시
                            "type": "image",
                            // 사용할 이미지 경로
                            "texture": "textures/ui/grass_bar",
                            // 가로/세로 크기
                            "size": [200, 16],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle"
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
              "loading_bar_background_grass_again": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점에서 이동하는 거리
                "offset": [0, "25%"],
                // 가로/세로 크기
                "size": [200, 16],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "loading_bar": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 애니메이션 목록
                      "anims": [
                        "@hud.anim_loading_bar"
                      ],
                      // ?? ????
                      "clips_children": true,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "loading_bar_again": {
                            // 이미지 표시
                            "type": "image",
                            // 사용할 이미지 경로
                            "texture": "textures/ui/another_grass",
                            // 가로/세로 크기
                            "size": [200, 16],
                            // 기준점(어디에서 시작할지)
                            "anchor_from": "left_middle",
                            // 붙일 위치(어디에 놓을지)
                            "anchor_to": "left_middle"
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
              "tip_maybe": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "Some text at the bottom",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점에서 이동하는 거리
                "offset": [0, -15]
              }
            },
            {
              // ???/?? ??
              "maybe_title": {
                // 글자 표시
                "type": "label",
                // 보여줄 글자
                "text": "Title(?)",
                // ??
                "font_type": "MinecraftTen",
                // ?? ?? ??
                "font_scale_factor": 1.5,
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 기준점에서 이동하는 거리
                "offset": [10, 10]
              }
            },
            {
              // ???/?? ??
              "lots_of_loading_anim": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 가로/세로 크기
                "size": ["100%c", "100%cm"],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_right",
                // 기준점에서 이동하는 거리
                "offset": [-10, -10],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    "loading_icon_pickaxe": { //my favorite
                      // 이미지 표시
                      "type": "image",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/mine_chop_dig_animation",
                      // 가로/세로 크기
                      "size": [ 30, 30 ],
                      // ???? ??
                      "uv_size": [ 10, 10 ],
                      // ???? ?? ??
                      "uv": "@hud.pick_axe_animation",
                      // ?? (R,G,B,A)
                      "color": [ 1, 1, 1, 1 ]
                    }
                  },
                  {
                    // ???/?? ??
                    "spacer": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [5, 0]
                    }
                  },
                  {
                    // ???/?? ??
                    "loading_icon_porlat": {
                      // 이미지 표시
                      "type": "image",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/realms_plus_hover",
                      // ???? ?? ??
                      "uv": "@hud.portal_animation",
                      // 가로/세로 크기
                      "size": [ 30, 30 ],
                      // ???? ??
                      "uv_size": [ 19, 19 ]
                    }
                  },
                  {
                    // ???/?? ??
                    "spacer": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [5, 0]
                    }
                  },
                  {
                    // ???/?? ??
                    "realms_stories_icon_animated": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/realmsStoriesIconAnimated",
                      // 가로/세로 크기
                      "size": [ 30, 30 ],
                      // ???? ??
                      "uv_size": [ 22, 22 ],
                      // ???? ?? ??
                      "uv": "@hud.anim_realms_stories_icon",
                      // ????? ?? ?
                      "disable_anim_fast_forward": true
                    }
                  },
                  {
                    // ???/?? ??
                    "spacer": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [5, 0]
                    }
                  },
                  {
                    // ???/?? ??
                    "loading_progress_spinner": {
                      // 이미지 표시
                      "type": "image",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/loading_spin",
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 6 ],
                      // ???? ??
                      "uv_size": [ 7, 7 ],
                      // 가로/세로 크기
                      "size": [ 20, 20 ],
                      // ???? ?? ??
                      "uv": "@hud.spinner_animation"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "test": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/icon_panda", //why not
                // 가로/세로 크기
                "size": [30, 30],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_right",
                // 기준점에서 이동하는 거리
                "offset": [-10, 10]
              }
            },
            {
              // ???/?? ??
              "chest": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/realms_particles",
                // 가로/세로 크기
                "size": [100, 100],
                // ???
                "alpha": 0.3,
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점에서 이동하는 거리
                "offset": ["-30%", "-28%"]
              }
            },
            {
              // ???/?? ??
              "chest": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/realms_particles",
                // 가로/세로 크기
                "size": [50, 50],
                // ???
                "alpha": 0.1,
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 기준점에서 이동하는 거리
                "offset": ["30%", "-18%"]
              }
            },
            {
              // ???/?? ??
              "loading_stack": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 쌓는 방향(가로/세로)
                "orientation": "horizontal",
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_left",
                // 기준점에서 이동하는 거리
                "offset": [10, -10],
                // 가로/세로 크기
                "size": ["100%c", "100%cm"],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "icon": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/worldsIcon",
                      // 가로/세로 크기
                      "size": [30, 30]
                    }
                  },
                  {
                    // ???/?? ??
                    "spacer": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [5, 0]
                    }
                  },
                  {
                    // ???/?? ??
                    "wrapper_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": ["100%c", "100%c"],
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // ???/?? ??
                          "loading_text": {
                            // 글자 표시
                            "type": "label",
                            // 보여줄 글자
                            "text": "Loading...",
                            // ??
                            "font_type": "MinecraftTen",
                            // 기준점에서 이동하는 거리
                            "offset": [0, 5],
                            // ?? ?? ??
                            "font_scale_factor": 1.4
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
  "chat_grid_item/chat_background": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text - '<' - '>')",
        // 결과가 들어갈 속성
        "target_property_name": "#text_n"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text_n - $flag_for_loading_anim = #text_n)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
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
        "operation": "insert_back",
        // ??? ?
        "value": [
          {
            // ???/?? ??
            "loading_animation_factory": {
              // 패널: 다른 부품을 담는 바닥판
              "type": "panel",
              // 목록 아이템을 자동으로 생성
              "factory": {
                // ?? ??
                "name": "chat_item_factory",
                // 팩토리 템플릿 매핑
                "control_ids": {
                  // ?? ??
                  "chat_item": "animation_generator@hud.animation_generator"
                }
              }
            }
          }
        ]
      }
    ]
  }
}
```








### loading anim template
loading_bar_filler.json
초보 예제 모음 · loading anim template



필요한 부분만 참고해서 가져가세요.



```
// 예제: loading_bar_filler.json
// 분류: 초보 예제 모음 / loading anim template
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    200,
    16
  ]
}
```












### 가로스크롤 예제


### 가로스크롤 예제
horizontal_scroll_view.json
초보 예제 모음 · 가로스크롤 예제



필요한 부분만 참고해서 가져가세요.



```
// 예제: horizontal_scroll_view.json
// 분류: 초보 예제 모음 / 가로스크롤 예제
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "common",
  // ???/?? ??
  "horizontal_scroll_view": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // ?? ????
    "clips_children": true,
    // 가로/세로 크기
    "size": [
      "100%",
      "100%"
    ],
    // 오버라이드 가능한 변수
    "$scrolling_content|default": "common.empty_panel",
    // 오버라이드 가능한 변수
    "$scrolling_size|default": [
      "200%c - 100%",
      "100%"
    ],
    // 오버라이드 가능한 변수
    "$bg_size|default": [
      "100%",
      "100%"
    ],
    // 오버라이드 가능한 변수
    "$use_background|default": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "scroll_track": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": -1,
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$scrolling_size",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "draggable_box": {
                // 컨트롤 종류
                "type": "scrollbar_box",
                // ??? ??
                "draggable": "horizontal",
                // ?? ??
                "contained": true,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 100,
                // 가로/세로 크기
                "size": [
                  "100%c",
                  "100%"
                ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // ?? ??
                "consume_hover_events": false,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "control_layer_panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [
                        "100%c",
                        "100%"
                      ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": -95,
                      // 이 안에 들어가는 부품 목록
                      "controls": [
                        {
                          // 다른 템플릿을 가져와서 확장(상속)
                          "scrolling_content@$scrolling_content": {}
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
                    "mapping_type": "pressed",
                    // ?? ??
                    "consume_event": false,
                    // ?? ?? ?
                    "button_up_right_of_first_refusal": true
                  }
                ]
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "bg@common.scroll_indent_image": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // 가로/세로 크기
          "size": "$bg_size",
          // 보이기/숨기기(공간 유지)
          "visible": "$use_background"
        }
      }
    ]
  },
  // ???/?? ??
  "hscroll_demo_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [
      80,
      80
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bg": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ???
          "alpha": 0.15,
          // 가로/세로 크기
          "size": [
            "100%",
            "100%"
          ]
        }
      },
      {
        // ???/?? ??
        "label": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "$text|default",
          // 기준점(어디에서 시작할지)
          "anchor_from": "center",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "center"
        }
      }
    ]
  },
  // ???/?? ??
  "hscroll_demo_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [
      "default",
      "100%"
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i01@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "1"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i02@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "2"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i03@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "3"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i04@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "4"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i05@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "5"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i06@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "6"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i07@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "7"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i08@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "8"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i09@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "9"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "i10@common.hscroll_demo_item": {
          // 오버라이드 가능한 변수
          "$text": "10"
        }
      }
    ]
  },
  // ???/?? ??
  "hscroll_demo_container": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [
      "100%",
      110
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hscroll@common.horizontal_scroll_view": {
          // 가로/세로 크기
          "size": [
            "100%",
            "100%"
          ],
          // 오버라이드 가능한 변수
          "$scrolling_content": "common.hscroll_demo_content",
          // 오버라이드 가능한 변수
          "$scrolling_size": [
            "200%c - 100%",
            "100%"
          ],
          // 오버라이드 가능한 변수
          "$use_background": true
        }
      }
    ]
  }
}
```











[분할 목록으로 돌아가기](preview.html#example-view)


### 예제1


### 예제1
_global_variables.json
초보 예제 모음 · 예제1



필요한 부분만 참고해서 가져가세요.



```
// 예제: _global_variables.json
// 분류: 초보 예제 모음 / 예제1
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// SCOREHUD | COMMISSION Creator @Nperma
{
  // 오버라이드 가능한 변수
  "$title_texture": "textures/ui/title",

  //SIDE SCOREHUD
  "$sideleft_texture": "textures/scorehud_background",
  // 오버라이드 가능한 변수
  "$sideleft_alpha": 1,
  // 오버라이드 가능한 변수
  "$sideright_texture": "textures/scorehud_background",
  // 오버라이드 가능한 변수
  "$sideright_alpha": 1,


  //BODY SCOREHUD
  "$body_texture": "textures/scorehud_background",
  // 오버라이드 가능한 변수
  "$body_alpha": 1,

  //BODY TEXT SCOREHUD
  "$body_label_shadow": true,

  //SCOREUP1
  "$scoreup1_texture": "textures/scorehud_background",
  // 오버라이드 가능한 변수
  "$scoreup1_alpha": 1,

  //SCOREUP2
  "$scoreup2_texture": "textures/scorehud_background",
  // 오버라이드 가능한 변수
  "$scoreup2_alpha": 1,

  //SCOREUP3
  "$scoreup3_texture": "textures/scorehud_background",
  // 오버라이드 가능한 변수
  "$scoreup3_alpha": 1
}
```








### 예제1
code.json
초보 예제 모음 · 예제1



필요한 부분만 참고해서 가져가세요.



```
// 예제: code.json
// 분류: 초보 예제 모음 / 예제1
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // ???/?? ??
  "string_modification": {
    // 기준점에서 이동하는 거리
    "offset": [0, 25],
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "#text",
    // 가로/세로 크기
    "size": ["default", "default"],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "input_box@common.text_edit_box": {
          // 기준점에서 이동하는 거리
          "offset": [0, -20],
          // 가로/세로 크기
          "size": [
            250,
            20
          ],
          // ?? ?? ?
          "max_length": 100,
          // 오버라이드 가능한 변수
          "$text_edit_text_control": "input_text",
          // 오버라이드 가능한 변수
          "$place_holder_text": "Placeholder...",
          // 오버라이드 가능한 변수
          "$text_alignment": "left"
        }
      },
      {
        // ???/?? ??
        "dynamic": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [0, 0],
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#iterator": 0,
            // ???/??? ?
            "#output": "§z",
            // ???/??? ?
            "# ": " ","#A": "a","#B": "b","#C": "c","#D": "d","#E": "e","#F": "f","#G": "g","#H": "h","#I": "i","#J": "j","#K": "k","#L": "l",
            // ???/??? ?
            "#M": "m","#N": "n","#O": "o","#P": "p","#Q": "q","#R": "r","#S": "s","#T": "t","#U": "u","#V": "v","#W": "w","#X": "x","#Y": "y",
            // ???/??? ?
            "#Z": "z","#a": "a","#b": "b","#c": "c","#d": "d","#e": "e","#f": "f","#g": "g","#h": "h","#i": "i","#j": "j","#k": "k","#l": "l",
            // ???/??? ?
            "#m": "m","#n": "n","#o": "o","#p": "p","#q": "q","#r": "r","#s": "s","#t": "t","#u": "u","#v": "v","#w": "w","#x": "x","#y": "y",
            // ???/??? ?
            "#z": "z","#0": "0","#1": "1","#2": "2","#3": "3","#4": "4","#5": "5","#6": "6","#7": "7","#8": "8","#9": "9","#.": ".","#,": ",",
            // ???/??? ?
            "#!": "!","#_": "_","#&": "&","#(": "(","#)": ")","#?": "?","#{": "{","#}": "}","#[": "[","#]": "]","#:": ":","#'": "'","#\"": "\""
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // ?? ??
              "source_control_name": "input_text",
              // 계산식/참조 값
              "source_property_name": "('§z' + #item_name)",
              // 결과가 들어갈 속성
              "target_property_name": "#string"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('%.' + (#iterator + 3) + 's') * #output + ('#' + (('%.' + (#iterator + 4) + 's') * #string - ('%.' + (#iterator + 3) + 's') * #string)))",
              // 결과가 들어갈 속성
              "target_property_name": "#output"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#iterator + 1 - (('%.' + (#iterator + 3) + 's') * #output = #output))",
              // 결과가 들어갈 속성
              "target_property_name": "#iterator"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#iterator * (1 - (('%.' + (#iterator + 2) + 's') * #string = #string)))",
              // 결과가 들어갈 속성
              "target_property_name": "#iterator"
            }
          ]
        }
      },
      {
        // ???/?? ??
        "static": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [0, 0],
          // 이 컨트롤 안에서 쓰는 임시 저장소
          "property_bag": {
            // ???/??? ?
            "#string": "§z123THIS IS A FULLY CAPITALIZED STRING. LOWERCASED USING BINDINGS.",
            // ???/??? ?
            "#iterator": 0,
            // ???/??? ?
            "#length": 0,
            // ???/??? ?
            "#output": "§z",
            // ???/??? ?
            "# ": " ","#A": "a","#B": "b","#C": "c","#D": "d","#E": "e","#F": "f","#G": "g","#H": "h","#I": "i","#J": "j","#K": "k","#L": "l",
            // ???/??? ?
            "#M": "m","#N": "n","#O": "o","#P": "p","#Q": "q","#R": "r","#S": "s","#T": "t","#U": "u","#V": "v","#W": "w","#X": "x","#Y": "y",
            // ???/??? ?
            "#Z": "z","#a": "a","#b": "b","#c": "c","#d": "d","#e": "e","#f": "f","#g": "g","#h": "h","#i": "i","#j": "j","#k": "k","#l": "l",
            // ???/??? ?
            "#m": "m","#n": "n","#o": "o","#p": "p","#q": "q","#r": "r","#s": "s","#t": "t","#u": "u","#v": "v","#w": "w","#x": "x","#y": "y",
            // ???/??? ?
            "#z": "z","#0": "0","#1": "1","#2": "2","#3": "3","#4": "4","#5": "5","#6": "6","#7": "7","#8": "8","#9": "9","#.": ".","#,": ",",
            // ???/??? ?
            "#!": "!","#_": "_","#&": "&","#(": "(","#)": ")","#?": "?","#{": "{","#}": "}","#[": "[","#]": "]","#:": ":","#'": "'","#\"": "\""
          },
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('%.' + (#iterator + 3) + 's') * #output + ('#' + (('%.' + (#iterator + 4) + 's') * #string - ('%.' + (#iterator + 3) + 's') * #string)))",
              // 결과가 들어갈 속성
              "target_property_name": "#output"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#iterator + 1 - (#output = #temp))",
              // 결과가 들어갈 속성
              "target_property_name": "#iterator"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "#output",
              // 결과가 들어갈 속성
              "target_property_name": "#temp"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#iterator * (1 - (('%.' + (#iterator + 2) + 's') * #string = #string)))",
              // 결과가 들어갈 속성
              "target_property_name": "#iterator"
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
        "source_control_name": "dynamic",
        // 계산식/참조 값
        "source_property_name": "('Dynamic: ' + #output + #iterator)",
        // 결과가 들어갈 속성
        "target_property_name": "#text1"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // ?? ??
        "source_control_name": "static",
        // 계산식/참조 값
        "source_property_name": "('\nStatic: ' + #output + #iterator)",
        // 결과가 들어갈 속성
        "target_property_name": "#text2"
      },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#text1 + #text2)",
        // 결과가 들어갈 속성
        "target_property_name": "#text"
      }
    ]
  }
}
```








### 예제1
hud_screen.json
초보 예제 모음 · 예제1



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: 초보 예제 모음 / 예제1
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "hud",
  // ???/?? ??
  "hud_title_text": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [{
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
        "source_property_name": "((not (('%.6s' * #text) = 'nperma')) and (not (#text = '')))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "nperma_root@common.empty_panel": {
    // 이 안에 들어가는 부품 목록
    "controls":[{
      // 다른 템플릿을 가져와서 확장(상속)
      "scorehud_layout@hud.scorehud": {}
    },
      {
        // ???/?? ??
        "scorehud_upper_layout": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size":["33.33%",
            16],
          // ???
          "alpha": 0.3,
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 기준점에서 이동하는 거리
          "offset":[-2,
            2],

          // 이 안에 들어가는 부품 목록
          "controls":[{
            // ???/?? ??
            "subhud": {
              // 줄맞춤 컨테이너: 가로/세로로 자동 배치
              "type": "stack_panel",
              // 쌓는 방향(가로/세로)
              "orientation": "horizontal",
              // 가로/세로 크기
              "size":["100%c",
                "100%"],
              // 기준점(어디에서 시작할지)
              "anchor_from": "top_right",
              // 붙일 위치(어디에 놓을지)
              "anchor_to": "top_right",
              // 이 안에 들어가는 부품 목록
              "controls":[{
                // ???/?? ??
                "scoreup1": {
                  // 패널: 다른 부품을 담는 바닥판
                  "type": "panel",
                  // 가로/세로 크기
                  "size":["250%y+2px",
                    "100%"],
                  // 게임 값과 연결하는 규칙 목록
                  "bindings":[{
                    // 계산/조건 결과를 연결
                    "binding_type": "view",
                    // ?? ??
                    "resolve_sibling_scope": true,
                    // ?? ??
                    "source_control_name": "subhud",
                    // 계산식/참조 값
                    "source_property_name": "(not (#text1=''))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                  }],
                  // 이 안에 들어가는 부품 목록
                  "controls":[{
                    // ???/?? ??
                    "background": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "$scoreup1_texture",
                      // ???
                      "alpha": "$scoreup1_alpha",
                      // 가로/세로 크기
                      "size":["100%-2px",
                        "100%"],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_right",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_right",
                      // 이 안에 들어가는 부품 목록
                      "controls":[{
                        // ???/?? ??
                        "label": {
                          // 글자 표시
                          "type": "label",
                          // 보여줄 글자
                          "text":"#text",
                          // ?? ??
                          "text_alignment": "center",
                          // ?? ??
                          "shadow": true,
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 114,
                          // 가로/세로 크기
                          "size":["100%-2px",
                            "100%-2px"],
                          // ?? ?? ??
                          "font_scale_factor": 0.85,
                          // 기준점에서 이동하는 거리
                          "offset":[0,
                            2],
                          // 게임 값과 연결하는 규칙 목록
                          "bindings":[{
                            // 가져올 값 이름
                            "binding_name": "#hud_title_text_string",
                            // 가져온 값을 다른 속성으로 연결
                            "binding_name_override": "#nperma",
                            // 게임이 주는 전역 값 연결
                            "binding_type": "global"
                          },
                            {
                              // 계산/조건 결과를 연결
                              "binding_type": "view",
                              // 계산식/참조 값
                              "source_property_name": "(#nperma-'nperma')",
                              // 결과가 들어갈 속성
                              "target_property_name": "#komisi"
                            },
                            {
                              // 계산/조건 결과를 연결
                              "binding_type": "view",
                              // 계산식/참조 값
                              "source_property_name": "(('§z')+('%.60s'*#komisi)-('%.40s'*#komisi)-'\t')",
                              // 결과가 들어갈 속성
                              "target_property_name": "#text"
                            }]
                        }
                      }]
                    }
                  }]
                }
              },
                {
                  // ???/?? ??
                  "scoreup2": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size":["250%y+2px",
                      "100%"],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings":[{
                      // 계산/조건 결과를 연결
                      "binding_type": "view",
                      // ?? ??
                      "resolve_sibling_scope": true,
                      // ?? ??
                      "source_control_name": "subhud",
                      // 계산식/참조 값
                      "source_property_name": "(not (#text2=''))",
                      // 결과가 들어갈 속성
                      "target_property_name": "#visible"
                    }],
                    // 이 안에 들어가는 부품 목록
                    "controls":[{
                      // ???/?? ??
                      "background": {
                        // 이미지 표시
                        "type": "image",
                        // 사용할 이미지 경로
                        "texture": "$scoreup2_texture",
                        // ???
                        "alpha": "$scoreup2_alpha",
                        // 가로/세로 크기
                        "size":["100%-2px",
                          "100%"],
                        // 기준점(어디에서 시작할지)
                        "anchor_from": "top_right",
                        // 붙일 위치(어디에 놓을지)
                        "anchor_to": "top_right",
                        // 이 안에 들어가는 부품 목록
                        "controls":[{
                          // ???/?? ??
                          "label": {
                            // 글자 표시
                            "type": "label",
                            // 보여줄 글자
                            "text":"#text",
                            // ?? ??
                            "text_alignment": "center",
                            // ?? ??
                            "shadow": true,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 114,
                            // 가로/세로 크기
                            "size":["100%-2px",
                              "100%-2px"],
                            // ?? ?? ??
                            "font_scale_factor": 0.85,
                            // 기준점에서 이동하는 거리
                            "offset":[0,
                              2],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings":[{
                              // 가져올 값 이름
                              "binding_name": "#hud_title_text_string",
                              // 가져온 값을 다른 속성으로 연결
                              "binding_name_override": "#nperma",
                              // 게임이 주는 전역 값 연결
                              "binding_type": "global"
                            },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(#nperma-'nperma')",
                                // 결과가 들어갈 속성
                                "target_property_name": "#komisi"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(('§z')+('%.80s'*#komisi)-('%.60s'*#komisi)-'\t')",
                                // 결과가 들어갈 속성
                                "target_property_name": "#text"
                              }]
                          }
                        }]
                      }
                    }]
                  }
                },
                {
                  // ???/?? ??
                  "scoreup3": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size":["250%y+2px",
                      "100%"],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings":[{
                      // 계산/조건 결과를 연결
                      "binding_type": "view",
                      // ?? ??
                      "resolve_sibling_scope": true,
                      // ?? ??
                      "source_control_name": "subhud",
                      // 계산식/참조 값
                      "source_property_name": "(not (#text3=''))",
                      // 결과가 들어갈 속성
                      "target_property_name": "#visible"
                    }],
                    // 이 안에 들어가는 부품 목록
                    "controls":[{
                      // ???/?? ??
                      "background": {
                        // 이미지 표시
                        "type": "image",
                        // 사용할 이미지 경로
                        "texture": "$scoreup3_texture",
                        // ???
                        "alpha": "$scoreup3_alpha",
                        // 가로/세로 크기
                        "size":["100%-2px",
                          "100%"],
                        // 기준점(어디에서 시작할지)
                        "anchor_from": "top_right",
                        // 붙일 위치(어디에 놓을지)
                        "anchor_to": "top_right",
                        // 이 안에 들어가는 부품 목록
                        "controls":[{
                          // ???/?? ??
                          "label": {
                            // 글자 표시
                            "type": "label",
                            // 보여줄 글자
                            "text":"#text",
                            // ?? ??
                            "text_alignment": "center",
                            // ?? ??
                            "shadow": true,
                            // 겹치는 순서(숫자 클수록 위)
                            "layer": 114,
                            // 가로/세로 크기
                            "size":["100%-2px",
                              "100%-2px"],
                            // ?? ?? ??
                            "font_scale_factor": 0.85,
                            // 기준점에서 이동하는 거리
                            "offset":[0,
                              2],
                            // 게임 값과 연결하는 규칙 목록
                            "bindings":[{
                              // 가져올 값 이름
                              "binding_name": "#hud_title_text_string",
                              // 가져온 값을 다른 속성으로 연결
                              "binding_name_override": "#nperma",
                              // 게임이 주는 전역 값 연결
                              "binding_type": "global"
                            },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(#nperma-'nperma')",
                                // 결과가 들어갈 속성
                                "target_property_name": "#komisi"
                              },
                              {
                                // 계산/조건 결과를 연결
                                "binding_type": "view",
                                // 계산식/참조 값
                                "source_property_name": "(('§z')+('%.100s'*#komisi)-('%.80s'*#komisi)-'\t')",
                                // 결과가 들어갈 속성
                                "target_property_name": "#text"
                              }]
                          }
                        }]
                      }
                    }]
                  }
                }],
              // 게임 값과 연결하는 규칙 목록
              "bindings":[{
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // ?? ??
                "resolve_sibling_scope": true,
                // ?? ??
                "source_control_name": "scorehud_upper_layout",
                // 계산식/참조 값
                "source_property_name": "#score1",
                // 결과가 들어갈 속성
                "target_property_name": "#text1"
              },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // ?? ??
                  "resolve_sibling_scope": true,
                  // ?? ??
                  "source_control_name": "scorehud_upper_layout",
                  // 계산식/참조 값
                  "source_property_name": "#score2",
                  // 결과가 들어갈 속성
                  "target_property_name": "#text2"
                },
                {
                  // 계산/조건 결과를 연결
                  "binding_type": "view",
                  // ?? ??
                  "resolve_sibling_scope": true,
                  // ?? ??
                  "source_control_name": "scorehud_upper_layout",
                  // 계산식/참조 값
                  "source_property_name": "#score3",
                  // 결과가 들어갈 속성
                  "target_property_name": "#text3"
                }]
            }
          }],

          // 게임 값과 연결하는 규칙 목록
          "bindings": [{
            // 가져올 값 이름
            "binding_name": "#hud_title_text_string",
            // 가져온 값을 다른 속성으로 연결
            "binding_name_override": "#nperma",
            // 게임이 주는 전역 값 연결
            "binding_type": "global"
          },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(#nperma-'nperma')",
              // 결과가 들어갈 속성
              "target_property_name": "#komisi"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('%.60s'*#komisi)-('%.40s'*#komisi)-'\t')",
              // 결과가 들어갈 속성
              "target_property_name": "#score1"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('%.80s'*#komisi)-('%.60s'*#komisi)-'\t')",
              // 결과가 들어갈 속성
              "target_property_name": "#score2"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('%.100s'*#komisi)-('%.80s'*#komisi)-'\t')",
              // 결과가 들어갈 속성
              "target_property_name": "#score3"
            },
            {
              // 계산/조건 결과를 연결
              "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "((('%.6s' * #nperma) = 'nperma') and (not (#score1='')) and (not (#score2='')) and (not (#score3='')))",
              // 결과가 들어갈 속성
              "target_property_name": "#visible"
            }]
        }
      }]
  },

  // ???/?? ??
  "scorehud": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size":[85,
      224],
    // 기준점(어디에서 시작할지)
    "anchor_from": "right_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "right_middle",
    // 기준점에서 이동하는 거리
    "offset":[-2,
      -18],
    // 이 안에 들어가는 부품 목록
    "controls":[{
      // ???/?? ??
      "layout": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size":["100%",
          "100%"],
        // 이 안에 들어가는 부품 목록
        "controls":[{
          // ???/?? ??
          "stacked_vertical": {
            // 줄맞춤 컨테이너: 가로/세로로 자동 배치
            "type": "stack_panel",
            // 쌓는 방향(가로/세로)
            "orientation": "vertical",
            // 가로/세로 크기
            "size":["100%",
              "100%c"],
            // 이 안에 들어가는 부품 목록
            "controls":[{
              // ???/?? ??
              "title_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size":["100%",
                  28],
                // 이 안에 들어가는 부품 목록
                "controls":[{
                  // ???/?? ??
                  "title": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "$title_texture",
                    // 가로/세로 크기
                    "size":["100%",
                      "100%"],
                    // 기준점에서 이동하는 거리
                    "offset":[0,
                      0]
                  }
                }]
              }
            },
              {
                // ???/?? ??
                "empty": {
                  // 패널: 다른 부품을 담는 바닥판
                  "type": "panel",
                  // 가로/세로 크기
                  "size":[0,
                    2]
                }
              },
              {
                // ???/?? ??
                "elements": {
                  // 패널: 다른 부품을 담는 바닥판
                  "type": "panel",
                  // 가로/세로 크기
                  "size":["100%",
                    16],
                  // 이 안에 들어가는 부품 목록
                  "controls":[{
                    // ???/?? ??
                    "stacked": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 쌓는 방향(가로/세로)
                      "orientation": "horizontal",
                      // 가로/세로 크기
                      "size":["100%",
                        "100%"],
                      // 이 안에 들어가는 부품 목록
                      "controls":[{
                        // ???/?? ??
                        "eb": {
                          // 이미지 표시
                          "type": "image",
                          // 가로/세로 크기
                          "size":["50%-1px",
                            "100%"],
                          // 사용할 이미지 경로
                          "texture": "$sideleft_texture",
                          // ???
                          "alpha": "$sideleft_alpha",
                          // 이 안에 들어가는 부품 목록
                          "controls":[{
                            // ???/?? ??
                            "label": {
                              // 글자 표시
                              "type": "label",
                              // 보여줄 글자
                              "text": "#text",
                              // 가로/세로 크기
                              "size": ["100%-2px",
                                "100%-2px"],
                              // 겹치는 순서(숫자 클수록 위)
                              "layer": 144,
                              // 기준점에서 이동하는 거리
                              "offset":[0,
                                2],
                              // ?? ?? ??
                              "font_scale_factor": 0.8,
                              // ?? ??
                              "text_alignment": "center",
                              // ?? ??
                              "shadow": true,
                              // 게임 값과 연결하는 규칙 목록
                              "bindings":[{
                                // 가져올 값 이름
                                "binding_name": "#hud_title_text_string",
                                // 게임이 주는 전역 값 연결
                                "binding_type": "global"
                              },
                                {
                                  // 계산/조건 결과를 연결
                                  "binding_type": "view",
                                  // 계산식/참조 값
                                  "source_property_name": "(('%.20s'*(#hud_title_text_string-'nperma'))-'\t')",
                                  // 결과가 들어갈 속성
                                  "target_property_name": "#text"
                                }]
                            }
                          }]
                        }
                      },
                        {
                          // ???/?? ??
                          "empty": {
                            // 패널: 다른 부품을 담는 바닥판
                            "type": "panel",
                            // 가로/세로 크기
                            "size":[2,
                              0]
                          }
                        },
                        {
                          // ???/?? ??
                          "ep": {
                            // 이미지 표시
                            "type": "image",
                            // 가로/세로 크기
                            "size":["50%-1px",
                              "100%"],
                            // 사용할 이미지 경로
                            "texture": "$sideright_texture",
                            // ???
                            "alpha": "$sideright_alpha",
                            // 이 안에 들어가는 부품 목록
                            "controls":[{
                              // ???/?? ??
                              "label": {
                                // 글자 표시
                                "type": "label",
                                // 보여줄 글자
                                "text": "#text",
                                // 가로/세로 크기
                                "size": ["100%-2px",
                                  "100%-2px"],
                                // 기준점에서 이동하는 거리
                                "offset":[0,
                                  2],
                                // ?? ??
                                "shadow": true,
                                // ?? ?? ??
                                "font_scale_factor": 0.85,
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 144,
                                // ?? ??
                                "text_alignment": "center",
                                // 게임 값과 연결하는 규칙 목록
                                "bindings":[{
                                  // 가져올 값 이름
                                  "binding_name": "#hud_title_text_string",
                                  // 게임이 주는 전역 값 연결
                                  "binding_type": "global"
                                },
                                  {
                                    // 계산/조건 결과를 연결
                                    "binding_type": "view",
                                    // 계산식/참조 값
                                    "source_property_name": "('§z'+('%.40s'*(#hud_title_text_string-'nperma')-('%.20s'*(#hud_title_text_string-'nperma')))-'\t')",
                                    // 결과가 들어갈 속성
                                    "target_property_name": "#text"
                                  }]
                              }
                            }]
                          }
                        }]
                    }
                  }]
                }
              },
              {
                // ???/?? ??
                "empty": {
                  // 패널: 다른 부품을 담는 바닥판
                  "type": "panel",
                  // 가로/세로 크기
                  "size":[0,
                    2]
                }
              },
              {
                // ???/?? ??
                "body": {
                  // 이미지 표시
                  "type": "image",
                  // 가로/세로 크기
                  "size":["100%",
                    "100%c"],
                  // ?? ?? ?
                  "min_size": ["100%",
                    80],
                  // 사용할 이미지 경로
                  "texture": "$body_texture",
                  // ???
                  "alpha": "$body_alpha",
                  // 이 안에 들어가는 부품 목록
                  "controls":[{
                    // ???/?? ??
                    "panel": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size":["100%",
                        "100%c-4px"],
                      // 기준점에서 이동하는 거리
                      "offset":[0,
                        2],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "top_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "top_left",
                      // 이 안에 들어가는 부품 목록
                      "controls":[{
                        // ???/?? ??
                        "label": {
                          // 글자 표시
                          "type": "label",
                          // 보여줄 글자
                          "text": "#text",
                          // ?? ??
                          "shadow": "$body_label_shadow",
                          // 가로/세로 크기
                          "size":["100%-4px",
                            "default"],
                          // 겹치는 순서(숫자 클수록 위)
                          "layer": 144,
                          // ?? ?? ??
                          "font_scale_factor": 0.8,
                          // ??/?? ?
                          "line_padding": 2,
                          // 게임 값과 연결하는 규칙 목록
                          "bindings":[{
                            // 가져올 값 이름
                            "binding_name": "#hud_title_text_string",
                            // 게임이 주는 전역 값 연결
                            "binding_type": "global"
                          },
                            {
                              // 계산/조건 결과를 연결
                              "binding_type": "view",
                              // 계산식/참조 값
                              "source_property_name": "('§z'+(((#hud_title_text_string-'nperma') - ('%.100s'*(#hud_title_text_string-'nperma')))-'\t')",
                              // 결과가 들어갈 속성
                              "target_property_name": "#text"
                            }]
                        }
                      }]
                    }
                  }]
                }
              }]
          }
        }]
      }
    }],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [{
      // 가져올 값 이름
      "binding_name": "#hud_title_text_string",
      // 가져온 값을 다른 속성으로 연결
      "binding_name_override": "#nperma",
      // 게임이 주는 전역 값 연결
      "binding_type": "global"
    },
      {
        // 계산/조건 결과를 연결
        "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('%.6s' * #nperma) = 'nperma')",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }]
  },

  // ???/?? ??
  "hud_screen": {
    // 오버라이드 가능한 변수
    "$additional_screen_content": "hud.nperma_root"
  }
}
```












### 예제3


### 예제3
inventory_screen.json
초보 예제 모음 · 예제3



필요한 부분만 참고해서 가져가세요.



```
// 예제: inventory_screen.json
// 분류: 초보 예제 모음 / 예제3
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "crafting",
    // Add custom ui to main panel
    "crafting_panel_top_half": {
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
                        "custom_table_ui@crafting.custom_table_ui": {} // add your custom panel here
                    }
                ]
            }
        ]
    },
    // Hide normal ui if we are inside our custom table
    "work_bench_panel_3x3": {
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#crafting_label_text",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#text"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "((#text - 'your_text_to_detect') = #text)", // if table_name has your_text_to_detect, then we don't want to show normal 3x3 crafting ui
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    },
    // Our custom ui for custom table
    "custom_table_ui": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "#crafting_label_text",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#text"
            },
            {
                // 계산/조건 결과를 연결
                "binding_type": "view",
                // 계산식/참조 값
                "source_property_name": "(not ((#text - 'your_text_to_detect') = #text))", // show this only if it has your_text_to_detect in it.
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    }
}
```













MagicWay UI
12 개







[분할 목록으로 돌아가기](preview.html#example-view)

### 기본


### 기본
_ui_defs.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: _ui_defs.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ???/?? ??
    "ui_defs": [
        "ui/magic_reinforcement_table_screen.json",
        "ui/magic_learning_station_screen.json",
        "ui/magic_ui_util.json",
        "ui/scrolls_item_ui.json",
        "ui/spell_binding_table_screen.json",
        "ui/magic_hud_screen.json",
        "ui/a_magic_way_custom_panel.json",
        "ui/fast_swap_scroll.json"
    ]
}
```








### 기본
a_magic_way_custom_panel.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: a_magic_way_custom_panel.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "a_magic_way_custom_panel",

    // ???/?? ??
    "long_form_replacement": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [0, 0],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "magic_learning_station_table@magic_learning_station.magic_learning_station_content": {
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
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "fast_swap_scroll_concent@fast_swap_scroll_screen.fast_swap_scroll_content": {
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#title_text = 'fast_swap_scroll.menu')",
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
chest_screen.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: chest_screen.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "chest",

    // ???/?? ??
    "small_chest_screen": {
        // 오버라이드 가능한 변수
        "$temp_container_title|default": "$container_title",
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
                        "requires": "($temp_container_title = 'amw:spell_binding_table')",
                        // 오버라이드 가능한 변수
                        "$screen_content": "spell_binding_table.spell_binding_table_panel",
                        // 오버라이드 가능한 변수
                        "$screen_bg_content": "common.screen_background"
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
                        "requires": "($temp_container_title = 'amw:magic_reinforcement_table')",
                        // 오버라이드 가능한 변수
                        "$screen_content": "magic_reinforcement_table.magic_reinforcement_table_panel",
                        // 오버라이드 가능한 변수
                        "$screen_bg_content": "common.screen_background"
                    }
                ]
            }
        ]
    }
}
```








### 기본
fast_swap_scroll.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: fast_swap_scroll.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 이 파일의 이름표(다른 파일에서 @로 참조)
    "namespace": "fast_swap_scroll_screen",

    // ???/?? ??
    "fast_swap_scroll_content": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ "100%", "100%" ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {

                // ???/?? ??
                "emote_wheel_touch_zone": {
                    // 클릭 가능한 버튼
                    "type": "button",
                    // 가로/세로 크기
                    "size": [ 4096, 4096 ],
                    // 입력 키/버튼과 동작 연결
                    "button_mappings": [
                      {
                        // 어떤 입력을 받을지
                        "from_button_id": "button.menu_select",
                        // 어떤 동작을 실행할지
                        "to_button_id": "button.menu_exit",
                        // 입력 시점(pressed 등)
                        "mapping_type": "global"
                      }
                    ],
                    // ???
                    "alpha": 0
                }
            },
            {
				// ???/?? ??
				"background": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/spell_wheel/change_slot_wheel",
					// 기준점(어디에서 시작할지)
					"anchor_from": "center",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "center",
					// ???
					"alpha": 0.9,
                    // 가로/세로 크기
                    "size": [ 256, 256 ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 가져올 값 이름
                            "binding_name": "(not #is_using_gamepad)",
                            // 가져온 값을 다른 속성으로 연결
                            "binding_name_override": "#visible"
                        }
                    ]
				}
			},
            {
				// 다른 템플릿을 가져와서 확장(상속)
				"scroll_sort@fast_swap_scroll_screen.scroll_sort": {}
			},
            {
				// 다른 템플릿을 가져와서 확장(상속)
				"gamepad_scroll_panel@fast_swap_scroll_screen.gamepad_scroll_panel": {}
			}

        ]
    },

    // ???/?? ??
    "gamepad_scroll_panel": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 가로/세로 크기
        "size": [ "100%c", 130 ],
        // 쌓는 방향(가로/세로)
        "orientation": "horizontal",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
				// 다른 템플릿을 가져와서 확장(상속)
				"gamepad_scroll_sort@fast_swap_scroll_screen.gamepad_scroll_sort": {}
			},
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "left_control@fast_swap_scroll_screen.scroll_small_background": {}
            },
            {
                // ???/?? ??
                "center_control": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ 60, 130 ],
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 가져올 값 이름
                            "binding_name": "(#form_button_length > 4)",
                            // 가져온 값을 다른 속성으로 연결
                            "binding_name_override": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "right_control@fast_swap_scroll_screen.scroll_small_background": {
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 가져올 값 이름
                            "binding_name": "(#form_button_length > 4)",
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
                "binding_name": "(#is_using_gamepad)",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#visible"
            }
        ]
    },

    // ???/?? ??
    "scroll_small_background": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ 130, 130 ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "image": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "textures/ui/spell_wheel/change_slot_wheel_small",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "center",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "center",
                    // ???
                    "alpha": 0.9,
                    // 가로/세로 크기
                    "size": [ 128, 128 ]
                }
            }
        ]
    },

    // ???/?? ??
    "gamepad_scroll_sort": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 가로/세로 크기
        "size": [ 0, 0 ],
        // 오버라이드 가능한 변수
        "$label_control": "fast_swap_scroll_screen.scroll_name_controller",
        // 오버라이드 가능한 변수
        "$helper_control": "fast_swap_scroll_screen.gamepad_helper",

        // 목록 아이템을 자동으로 생성
        "factory":{
            // ?? ??
            "name": "buttons",
            // ??? ???
            "control_name": "fast_swap_scroll_screen.gamepad_stacked_scroll"
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
    "scroll_sort": {
        // 줄맞춤 컨테이너: 가로/세로로 자동 배치
        "type": "stack_panel",
        // 가로/세로 크기
        "size": [ 0, 0 ],

        // 목록 아이템을 자동으로 생성
        "factory":{
            // ?? ??
            "name": "buttons",
            // ??? ???
            "control_name": "fast_swap_scroll_screen.stacked_scroll"
        },

        // 목록 이름
        "collection_name": "form_buttons",
        // 게임 값과 연결하는 규칙 목록
        "bindings": [
            {
                // 가져올 값 이름
                "binding_name": "(not #is_using_gamepad)",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#visible"
            },
            {
                // 가져올 값 이름
                "binding_name": "#form_button_length",
                // 가져온 값을 다른 속성으로 연결
                "binding_name_override": "#collection_length"
            }
        ]
    },

    // ???/?? ??
    "gamepad_stacked_scroll": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/generic_14x14_face_button_up",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.menu_up",
					// 기준점에서 이동하는 거리
					"offset": [ 65, 20 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
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
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/generic_14x14_face_button_right",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.menu_right",
					// 기준점에서 이동하는 거리
					"offset": [ 110, 65 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 1)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/generic_14x14_face_button_down",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.menu_down",
					// 기준점에서 이동하는 거리
					"offset": [ 65, 110 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 2)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/generic_14x14_face_button_left",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.menu_left",
					// 기준점에서 이동하는 거리
					"offset": [ 20, 65 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 3)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/generic_bumper_right",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.menu_tab_right",
					// 기준점에서 이동하는 거리
					"offset": [ 285, 35 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 4)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/generic_right_trigger",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.menu_alternate_tab_right",
					// 기준점에서 이동하는 거리
					"offset": [ 285, 95 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 5)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/generic_left_trigger",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.menu_alternate_tab_left",
					// 기준점에서 이동하는 거리
					"offset": [ 225, 95 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 6)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/generic_bumper_left",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.menu_tab_left",
					// 기준점에서 이동하는 거리
					"offset": [ 225, 35 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 7)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "textures/ui/xbox_face_button_left",
                    // 오버라이드 가능한 변수
                    "$gamepad_pressed": "button.controller_select",
					// 기준점에서 이동하는 거리
					"offset": [ 160, 130 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 8)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "stacked_scroll": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.1",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot1",
					// 기준점에서 이동하는 거리
					"offset": [ 0, -92 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
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
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.2",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot2",
					// 기준점에서 이동하는 거리
					"offset": [ 59, -70 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 1)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.3",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot3",
					// 기준점에서 이동하는 거리
					"offset": [ 91, -16 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 2)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.4",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot4",
					// 기준점에서 이동하는 거리
					"offset": [ 80, 46 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 3)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.5",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot5",
					// 기준점에서 이동하는 거리
					"offset": [ 31, 86 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 4)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.6",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot6",
					// 기준점에서 이동하는 거리
					"offset": [ -31, 86 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 5)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.7",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot7",
					// 기준점에서 이동하는 거리
					"offset": [ -80, 46 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 6)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.8",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot8",
					// 기준점에서 이동하는 거리
					"offset": [ -91, -16 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 7)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "scroll@fast_swap_scroll_screen.scroll_item": {
                    // 오버라이드 가능한 변수
                    "$keyboard_select": "keyboard.keyName.9",
                    // 오버라이드 가능한 변수
                    "$button_pressed": "button.slot9",
					// 기준점에서 이동하는 거리
					"offset": [ -59, -70 ],
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
                            "binding_name": "#collection_index",
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 8)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "spell_label": {
        // 이미지 표시
        "type": "image",
        // 가로/세로 크기
        "size": [ "100%c + 16px", "100%c + 2px" ],
        // 사용할 이미지 경로
        "texture": "textures/ui/hud_tip_text_background",
        // 기준점(어디에서 시작할지)
        "anchor_from": "bottom_middle",
        // 붙일 위치(어디에 놓을지)
        "anchor_to": "top_middle",
        // 오버라이드 가능한 변수
        "$max_size|default": "fill",
        // ???
        "alpha": 0.6,
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 보여줄 글자
                "text": {
                    // 글자 표시
                    "type": "label",
                    // 보여줄 글자
                    "text": "#text",
                    // ?? ?? ?
                    "max_size": "$max_size",
                    // ?? ??
                    "text_alignment": "center",
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
                }
            }
        ]
    },

    // ???/?? ??
    "scroll_name_single": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ "33.33%", "33.33%" ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "center_label@fast_swap_scroll_screen.spell_label": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "bottom_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_middle",
                    // 오버라이드 가능한 변수
                    "$max_size": [
                        "64px",
                        "default"
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
                "right_label@fast_swap_scroll_screen.spell_label": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "right_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "left_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index < 5 and #collection_index > 0)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "left_label@fast_swap_scroll_screen.spell_label": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "left_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index > 4)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "scroll_name_controller": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ "33.33%", "33.33%" ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "up_label@fast_swap_scroll_screen.spell_label": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
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
                "center_label@fast_swap_scroll_screen.spell_label": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "bottom_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 2 or #collection_index = 8)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "right_label@fast_swap_scroll_screen.spell_label": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "right_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "left_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 1 or #collection_index = 4 or #collection_index = 5)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "left_label@fast_swap_scroll_screen.spell_label": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "left_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 3 or #collection_index = 6 or #collection_index = 7)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "gamepad_helper_image": {
        // 이미지 표시
        "type": "image",
        // 사용할 이미지 경로
        "texture": "$keyboard_select",
        // 가로/세로 크기
        "size": [ 26, 26 ],
        // 겹치는 순서(숫자 클수록 위)
        "layer": 2
    },

    // ???/?? ??
    "gamepad_helper": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ "5%", "5%" ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "center_bottom@fast_swap_scroll_screen.gamepad_helper_image": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "bottom_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "top_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
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
                "center_top@fast_swap_scroll_screen.gamepad_helper_image": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 2 or #collection_index = 8)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "left@fast_swap_scroll_screen.gamepad_helper_image": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "left_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "right_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 1)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "right@fast_swap_scroll_screen.gamepad_helper_image": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "right_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "left_middle",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 3)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "left_top@fast_swap_scroll_screen.gamepad_helper_image": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_left",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_right",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 4 or #collection_index = 5)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "right_top@fast_swap_scroll_screen.gamepad_helper_image": {
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_right",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_left",
                    // 게임 값과 연결하는 규칙 목록
                    "bindings": [
                        {
                            // 목록 인덱스/현재 항목 정보 제공
                            "binding_type": "collection_details",
                            // 목록 이름
                            "binding_collection_name": "form_buttons"
                        },
                        {
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index = 6 or #collection_index = 7)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            }
        ]
    },

    // ???/?? ??
    "default_helper": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel",
        // 가로/세로 크기
        "size": [ "33.33%", "33.33%" ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "center_helper": {
                    // 글자 표시
                    "type": "label",
                    // 기준점에서 이동하는 거리
                    "offset": [ 0, 2 ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_middle",
                    // 보여줄 글자
                    "text": "$keyboard_select",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 3,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "bg": {
                                // 이미지 표시
                                "type": "image",
                                // 사용할 이미지 경로
                                "texture": "textures/ui/spell_wheel/button_helper",
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": -1,
                                // 가로/세로 크기
                                "size": [
                                    "100% + 8px",
                                    "100% + 4px"
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
                // ???/?? ??
                "right_helper": {
                    // 글자 표시
                    "type": "label",
                    // 기준점에서 이동하는 거리
                    "offset": [ 2, 6 ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_left",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_right",
                    // 보여줄 글자
                    "text": "$keyboard_select",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 3,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "bg": {
                                // 이미지 표시
                                "type": "image",
                                // 사용할 이미지 경로
                                "texture": "textures/ui/spell_wheel/button_helper",
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": -1,
                                // 가로/세로 크기
                                "size": [
                                    "100% + 8px",
                                    "100% + 4px"
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
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index < 5 and #collection_index > 0)",
                            // 결과가 들어갈 속성
                            "target_property_name": "#visible"
                        }
                    ]
                }
            },
            {
                // ???/?? ??
                "left_helper": {
                    // 글자 표시
                    "type": "label",
                    // 기준점에서 이동하는 거리
                    "offset": [ -2, 6 ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "top_right",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_left",
                    // 보여줄 글자
                    "text": "$keyboard_select",
                    // 겹치는 순서(숫자 클수록 위)
                    "layer": 3,
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "bg": {
                                // 이미지 표시
                                "type": "image",
                                // 사용할 이미지 경로
                                "texture": "textures/ui/spell_wheel/button_helper",
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": -1,
                                // 가로/세로 크기
                                "size": [
                                    "100% + 8px",
                                    "100% + 4px"
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
                            // 계산/조건 결과를 연결
                            "binding_type": "view",
                            // 계산식/참조 값
                            "source_property_name": "(#collection_index > 4)",
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
                // 계산식/참조 값
                "source_property_name": "#keyboard_button_visible",
                // 결과가 들어갈 속성
                "target_property_name": "#visible"
            }
        ]
    },

    // ???/?? ??
    "none": {
        // 패널: 다른 부품을 담는 바닥판
        "type": "panel"
    },

    // 다른 템플릿을 가져와서 확장(상속)
    "scroll_item@common.button": {
        // 오버라이드 가능한 변수
        "$label_control|default": "fast_swap_scroll_screen.scroll_name_single",
        // 오버라이드 가능한 변수
        "$helper_control|default": "fast_swap_scroll_screen.default_helper",
        // 오버라이드 가능한 변수
        "$pressed_button_name": "button.form_button_click",
        // 오버라이드 가능한 변수
        "$keyboard_select|default": "",
        // 오버라이드 가능한 변수
        "$button_pressed|default": "",
        // 오버라이드 가능한 변수
        "$gamepad_pressed|default": "",
        // 가로/세로 크기
        "size": [ 72, 72 ],
        // 조건에 따라 변수 값을 바꾸기
        "variables": [
            {
                // 이 조건이 맞으면 적용
                "requires": "$touch",
                // 오버라이드 가능한 변수
                "$helper_control": "fast_swap_scroll_screen.none"
            }
        ],
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "label_name@$label_control": {}
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "helper@$helper_control": {}
            },
            {
                // ???/?? ??
                "background": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "textures/ui/scroll_frame_wheel",
                    // 가로/세로 크기
                    "size": [ "33.33%", "33.33%" ]
                }
            },
            {
                // ???/?? ??
                "pressed": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "textures/ui/scroll_frame_wheel_pressed",
                    // 가로/세로 크기
                    "size": [ "33.33%", "33.33%" ]
                }
            },
            {
                // ???/?? ??
                "hover": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "image": {
                                // 이미지 표시
                                "type": "image",
                                // 사용할 이미지 경로
                                "texture": "textures/ui/focus_border_white",
                                // 가로/세로 크기
                                "size": [ "27.7%", "27.7%" ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "(not #is_using_gamepad)",
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
                "scroll_image": {
                    // 이미지 표시
                    "type": "image",
                    // 사용할 이미지 경로
                    "texture": "#texture",
                    // 가로/세로 크기
                    "size": [ "22.22%", "22.22%" ],
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
            }
        ],
        // 입력 키/버튼과 동작 연결
        "button_mappings": [
            {
                // 어떤 입력을 받을지
                "from_button_id": "$button_pressed",
                // 어떤 동작을 실행할지
                "to_button_id": "$pressed_button_name",
                // ?? ??
                "input_mode_condition": "not_gamepad",
                // 입력 시점(pressed 등)
                "mapping_type": "global"
            },
            {
                // 어떤 입력을 받을지
                "from_button_id": "$gamepad_pressed",
                // 어떤 동작을 실행할지
                "to_button_id": "$pressed_button_name",
                // ?? ??
                "input_mode_condition": "gamepad_and_not_gaze",
                // 입력 시점(pressed 등)
                "mapping_type": "global"
            },
            {
                // 어떤 입력을 받을지
                "from_button_id": "button.menu_select",
                // 어떤 동작을 실행할지
                "to_button_id": "$pressed_button_name",
                // ?? ??
                "input_mode_condition": "not_gamepad",
                // 입력 시점(pressed 등)
                "mapping_type": "pressed"
            },
            {
                // 어떤 입력을 받을지
                "from_button_id": "button.menu_ok",
                // 어떤 동작을 실행할지
                "to_button_id": "$pressed_button_name",
                // ?? ??
                "input_mode_condition": "not_gamepad",
                // 입력 시점(pressed 등)
                "mapping_type": "focused"
            }
        ]
    }
}
```








### 기본
hud_screen.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: hud_screen.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "hud",
	
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
						"magic_screen_panel@magic_hud.root_panel": {}
					}
				]
			}
		]
    }
}
```








### 기본
magic_hud_screen.json
MagicWay UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: magic_hud_screen.json
// 분류: MagicWay UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// 이 파일의 이름표(다른 파일에서 @로 참조)
	"namespace": "magic_hud",
	
	// ???/?? ??
	"custom_render": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 오버라이드 가능한 변수
		"$tiled|default": false,
		// 오버라이드 가능한 변수
		"$clip_direction|default": "up",
		// 오버라이드 가능한 변수
		"$fill_ratio|default": 15.0,
		// 오버라이드 가능한 변수
		"$size|default": [ 17, 17 ],
		// 오버라이드 가능한 변수
		"$uv_size|default": "$size",
		// 오버라이드 가능한 변수
		"$uv|default": [ 0, 0 ],
		// 오버라이드 가능한 변수
		"$target|default": "#roll",
		// 오버라이드 가능한 변수
		"$container|default": "roll_stamina_data_control",
		// 오버라이드 가능한 변수
		"$alpha|default": 1,
		// 오버라이드 가능한 변수
		"$background|default": "textures/ui/roll/default/empty",
		// 오버라이드 가능한 변수
		"$path|default": "textures/ui/roll/default/cooldown_",
		// 가로/세로 크기
		"size": "$size",
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"background": {
					// 이미지 표시
					"type": "image",
					// 가로/세로 크기
					"size": "$size",
					// ???? ?? ??
					"uv": "$uv",
					// ???? ??
					"uv_size": "$uv_size",
					// 사용할 이미지 경로
					"texture": "$background",
					// ???
					"alpha": "$alpha"
				}
			},
			{
				// ???/?? ??
				"image": {
					// 이미지 표시
					"type": "image",
					// 가로/세로 크기
					"size": "$size",
					// ???? ?? ??
					"uv": "$uv",
					// ???? ??
					"uv_size": "$uv_size",
					// ???
					"alpha": "$alpha",
					// 사용할 이미지 경로
					"texture": "$path",
					// ??? ??
					"clip_direction": "$clip_direction",
					// 이미지 반복 여부
					"tiled": "$tiled",
					// ?? ??
					"clip_pixelperfect": false,
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "$container",
							// 계산식/참조 값
							"source_property_name": "(1.0 - ($target / $fill_ratio))",
							// 결과가 들어갈 속성
							"target_property_name": "#clip_ratio"
						}
					]
				}
			}
		]
    },

	// ???/?? ??
	"magic_select_main": {
		// 오버라이드 가능한 변수
		"$update_id": "magic_main",
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "#texture",
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 가로/세로 크기
		"size": [ 16, 16 ],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// ???
		"alpha": 1,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// ?? ??
				"source_control_name": "data_control_magic_menu_main",
				// 계산식/참조 값
				"source_property_name": "(#stored_text - $update_id)",
				// 결과가 들어갈 속성
				"target_property_name": "#texture"
			}
		]
	},

	// ???/?? ??
	"magic_select_left": {
		// 오버라이드 가능한 변수
		"$update_id": "magic_left",
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "#texture",
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 가로/세로 크기
		"size": [ 16, 16 ],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// ???
		"alpha": 1,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// ?? ??
				"source_control_name": "data_control_magic_menu_left",
				// 계산식/참조 값
				"source_property_name": "(#stored_text - $update_id)",
				// 결과가 들어갈 속성
				"target_property_name": "#texture"
			}
		]
	},
	
	// ???/?? ??
	"magic_select_right": {
		// 오버라이드 가능한 변수
		"$update_id": "magic_right",
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "#texture",
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 가로/세로 크기
		"size": [ 16, 16 ],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// ???
		"alpha": 1,
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// ?? ??
				"source_control_name": "data_control_magic_menu_right",
				// 계산식/참조 값
				"source_property_name": "(#stored_text - $update_id)",
				// 결과가 들어갈 속성
				"target_property_name": "#texture"
			}
		]
	},

	// ???/?? ??
	"magic_cast_param": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 가로/세로 크기
		"size": [ 22, 22 ],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"start": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/magic_menu/magic_cooldown_start",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "magic_data_control_1",
							// 계산식/참조 값
							"source_property_name": "(#spell_cooldown = 53)",
							// 결과가 들어갈 속성
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				// ???/?? ??
				"finish": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/magic_menu/magic_cooldown_finish",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "magic_data_control_1",
							// 계산식/참조 값
							"source_property_name": "(#spell_cooldown = 51)",
							// 결과가 들어갈 속성
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				// ???/?? ??
				"locked": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/magic_menu/locked",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "magic_data_control_1",
							// 계산식/참조 값
							"source_property_name": "(#spell_cooldown = 52)",
							// 결과가 들어갈 속성
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"render@magic_hud.custom_render": {
					// 오버라이드 가능한 변수
					"$size": [ 22, 22 ],
					// 오버라이드 가능한 변수
					"$fill_ratio": 50.0,
					// 오버라이드 가능한 변수
					"$clip_direction": "down",
					// 오버라이드 가능한 변수
					"$background": "textures/ui/magic_menu/blank",
					// 오버라이드 가능한 변수
					"$path": "textures/ui/magic_menu/magic_duration/duration_full",
					// 오버라이드 가능한 변수
					"$container": "magic_data_control_1",
					// 오버라이드 가능한 변수
					"$target": "#spell_cooldown",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "magic_data_control_1",
							// 계산식/참조 값
							"source_property_name": "(#spell_cooldown < 51)",
							// 결과가 들어갈 속성
							"target_property_name": "#visible"
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"magic_cast_cooldown": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 오버라이드 가능한 변수
		"$size": [ 21, 5 ],
		// 오버라이드 가능한 변수
		"$fill_ratio": 99.0,
		// 오버라이드 가능한 변수
		"$clip_direction": "left",
		// 오버라이드 가능한 변수
		"$background": "textures/ui/magic_menu/cooldown_empty",
		// 오버라이드 가능한 변수
		"$path": "textures/ui/magic_menu/cooldown_full",
		// 오버라이드 가능한 변수
		"$container": "magic_data_control_1",
		// 오버라이드 가능한 변수
		"$target": "#casting_duration",
		// 가로/세로 크기
		"size": "$size",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"render_full": {
					// 가로/세로 크기
					"size": "$size",
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/magic_menu/cooldown_complete"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"render@magic_hud.custom_render": {
					// 오버라이드 가능한 변수
					"$size": [ 21, 5 ],
					// 오버라이드 가능한 변수
					"$fill_ratio": 99.0,
					// 오버라이드 가능한 변수
					"$clip_direction": "left",
					// 오버라이드 가능한 변수
					"$background": "textures/ui/magic_menu/cooldown_empty",
					// 오버라이드 가능한 변수
					"$path": "textures/ui/magic_menu/cooldown_full",
					// 오버라이드 가능한 변수
					"$container": "magic_data_control_1",
					// 오버라이드 가능한 변수
					"$target": "#casting_duration",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "magic_data_control_1",
							// 계산식/참조 값
							"source_property_name": "(#casting_duration < 99)",
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
				"source_control_name": "magic_data_control_1",
				// 계산식/참조 값
				"source_property_name": "(#casting_duration > 0)",
				// 결과가 들어갈 속성
				"target_property_name": "#visible"
			}
		]
	},

	// ???/?? ??
	"magic_name": {
		// 오버라이드 가능한 변수
		"$update_id": "magic_name_update",
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 이미지 표시
		"type": "image",
		// 가로/세로 크기
		"size": [ "100%c + 24px", "100%c + 2px" ],
		// 사용할 이미지 경로
		"texture": "textures/ui/hud_tip_text_background",
		// ???
		"alpha": 0.5,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 보여줄 글자
				"text": {
					// 글자 표시
					"type": "label",
					// 보여줄 글자
					"text": "#text",
					// ?? ??
					"text_alignment": "center",
					// ?? ?? ?
					"font_size": "normal",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_name",
							// 계산식/참조 값
							"source_property_name": "((#stored_text - $update_id)",
							// 결과가 들어갈 속성
							"target_property_name": "#text"
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"magic_panel_selected": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [ 64, 24 ],
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_select_left@magic_hud.magic_select_left": {
					// 기준점에서 이동하는 거리
					"offset": [ -10, 0 ],
					// 가로/세로 크기
					"size": [ 14, 14 ],
					// ??? ??
					"clip_direction": "left",
					// 진행 비율(잘라내기)
					"clip_ratio": 0.5,
					// ?? ??
					"clip_pixelperfect": true
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_select_right@magic_hud.magic_select_right": {
					// 기준점에서 이동하는 거리
					"offset": [ 10, 0 ],
					// 가로/세로 크기
					"size": [ 14, 14 ],
					// ??? ??
					"clip_direction": "right",
					// 진행 비율(잘라내기)
					"clip_ratio": 0.5,
					// ?? ??
					"clip_pixelperfect": true
				}
			},
			{
				// ???/?? ??
				"magic_menu":{
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/magic_menu/selected_magic",
					// 가로/세로 크기
					"size": [ 64, 24 ],
					// 기준점(어디에서 시작할지)
					"anchor_from": "center",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "center",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// ???
					"alpha": 1,
					// 오버라이드 가능한 변수
					"$update_left": "magic_left",
					// 오버라이드 가능한 변수
					"$update_right": "magic_right",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_right",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_right)",
							// 결과가 들어갈 속성
							"target_property_name": "#left_data"
						},
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_left",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_left)",
							// 결과가 들어갈 속성
							"target_property_name": "#right_data"
						},
						{
						  // 계산/조건 결과를 연결
						  "binding_type": "view",
						  // 계산식/참조 값
						  "source_property_name": "(not((#left_data = 'textures/ui/blank') and (#right_data = 'textures/ui/blank')))",
						  // 결과가 들어갈 속성
						  "target_property_name": "#visible"
						}
					]
				}
			},
			{
				// ???/?? ??
				"magic_menu_single":{
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/magic_menu/select_magic_single",
					// 가로/세로 크기
					"size": [ 64, 24 ],
					// 기준점(어디에서 시작할지)
					"anchor_from": "center",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "center",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// ???
					"alpha": 1,
					// 오버라이드 가능한 변수
					"$update_left": "magic_left",
					// 오버라이드 가능한 변수
					"$update_right": "magic_right",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_right",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_right)",
							// 결과가 들어갈 속성
							"target_property_name": "#left_data"
						},
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_left",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_left)",
							// 결과가 들어갈 속성
							"target_property_name": "#right_data"
						},
						{
						  // 계산/조건 결과를 연결
						  "binding_type": "view",
						  // 계산식/참조 값
						  "source_property_name": "((#left_data = 'textures/ui/blank') and (#right_data = 'textures/ui/blank'))",
						  // 결과가 들어갈 속성
						  "target_property_name": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_select_main@magic_hud.magic_select_main": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_cast_param@magic_hud.magic_cast_param": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_cast_cooldown@magic_hud.magic_cast_cooldown": {
					// 기준점에서 이동하는 거리
					"offset": [ 0, -20 ]
				}
			}
		]
    },

	// ???/?? ??
	"blink_cycle": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "in_sine",
		// 다음 애니메이션으로 연결
		"next": "@magic_hud.blink_cycle_end",
		// 걸리는 시간(초)
		"duration": 0.7,
		// 시작 값
		"from": 1,
		// 끝 값
		"to": 0.4
	},

	// ???/?? ??
	"blink_cycle_end": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "in_sine",
		// 다음 애니메이션으로 연결
		"next": "@magic_hud.blink_cycle",
		// 걸리는 시간(초)
		"duration": 0.4,
		// 시작 값
		"from": 0.4,
		// 끝 값
		"to": 1
	},

	// ???/?? ??
	"magic_panel_select": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [ 64, 24 ],
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_select_left@magic_hud.magic_select_left": {
					// 기준점에서 이동하는 거리
					"offset": [ -22, 0 ],
					// 가로/세로 크기
					"size": [ 14, 14 ]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_select_right@magic_hud.magic_select_right": {
					// 기준점에서 이동하는 거리
					"offset": [ 22, 0 ],
					// 가로/세로 크기
					"size": [ 14, 14 ]
				}
			},
			{
				// ???/?? ??
				"magic_menu":{
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/magic_menu/select_magic",
					// 가로/세로 크기
					"size": [ 64, 24 ],
					// 기준점(어디에서 시작할지)
					"anchor_from": "center",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "center",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// ???
					"alpha": 1,
					// 오버라이드 가능한 변수
					"$update_left": "magic_left",
					// 오버라이드 가능한 변수
					"$update_right": "magic_right",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_right",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_right)",
							// 결과가 들어갈 속성
							"target_property_name": "#left_data"
						},
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_left",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_left)",
							// 결과가 들어갈 속성
							"target_property_name": "#right_data"
						},
						{
						  // 계산/조건 결과를 연결
						  "binding_type": "view",
						  // 계산식/참조 값
						  "source_property_name": "(not((#left_data = 'textures/ui/blank') and (#right_data = 'textures/ui/blank')))",
						  // 결과가 들어갈 속성
						  "target_property_name": "#visible"
						}
					]
				}
			},
			{
				// ???/?? ??
				"magic_menu_single":{
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/magic_menu/select_magic_single",
					// 가로/세로 크기
					"size": [ 64, 24 ],
					// 기준점(어디에서 시작할지)
					"anchor_from": "center",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "center",
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// ???
					"alpha": 1,
					// 오버라이드 가능한 변수
					"$update_left": "magic_left",
					// 오버라이드 가능한 변수
					"$update_right": "magic_right",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_right",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_right)",
							// 결과가 들어갈 속성
							"target_property_name": "#left_data"
						},
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_control_magic_menu_left",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_left)",
							// 결과가 들어갈 속성
							"target_property_name": "#right_data"
						},
						{
						  // 계산/조건 결과를 연결
						  "binding_type": "view",
						  // 계산식/참조 값
						  "source_property_name": "((#left_data = 'textures/ui/blank') and (#right_data = 'textures/ui/blank'))",
						  // 결과가 들어갈 속성
						  "target_property_name": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_select_main@magic_hud.magic_select_main": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_cast_param@magic_hud.magic_cast_param": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_cast_cooldown@magic_hud.magic_cast_cooldown": {
					// 기준점에서 이동하는 거리
					"offset": [ 0, -20 ]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_name@magic_hud.magic_name": {
					// 기준점에서 이동하는 거리
					"offset": [ 0, -22 ]
				}
			}
		]
    },

	// ???/?? ??
	"magic_panel_none": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [ 64, 24 ],
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1
    },

	// ???/?? ??
	"magic_panel": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [ 64, 24 ],
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 겹치는 순서(숫자 클수록 위)
		"layer": 1,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_panel_none@magic_hud.magic_panel_none": {	
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "magic_data_control_1",
							// 계산식/참조 값
							"source_property_name": "(#spell_select = 0)",
							// 결과가 들어갈 속성
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_panel_select@magic_hud.magic_panel_select": {
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "magic_data_control_1",
							// 계산식/참조 값
							"source_property_name": "(#spell_select = 2)",
							// 결과가 들어갈 속성
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"magic_panel_selected@magic_hud.magic_panel_selected": {
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "magic_data_control_1",
							// 계산식/참조 값
							"source_property_name": "(#spell_select = 1)",
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
				"source_control_name": "magic_data_control_1",
				// 계산식/참조 값
				"source_property_name": "(#spell_wheel = 99)",
				// 결과가 들어갈 속성
				"target_property_name": "#visible"
			}
		]
    },

	// 다른 템플릿을 가져와서 확장(상속)
	"soul_panel@magic_hud.custom_render": {
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 오버라이드 가능한 변수
		"$size": [ 16, 16 ],
		// 오버라이드 가능한 변수
		"$fill_ratio": 99.0,
		// 오버라이드 가능한 변수
		"$clip_direction": "down",
		// 오버라이드 가능한 변수
		"$background": "textures/ui/soul/soul_empty",
		// 오버라이드 가능한 변수
		"$path": "textures/ui/soul/soul_full",
		// 오버라이드 가능한 변수
		"$container": "magic_data_control_1",
		// 오버라이드 가능한 변수
		"$target": "#soul_capacity"
	},

	// ???/?? ??
	"spell_render": {
		// 이미지 표시
		"type": "image",
		// 가로/세로 크기
		"size": [ "18.75%", "18.75%" ],
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 사용할 이미지 경로
		"texture": "textures/ui/scroll_frame_wheel",
		// 오버라이드 가능한 변수
		"$source_index": "spell_render_0",
		// 오버라이드 가능한 변수
		"$update_string": "spell_render_0_update",
		// ???
		"alpha": 0.6,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"background": {
					// 이미지 표시
					"type": "image",
					// 기준점(어디에서 시작할지)
					"anchor_from": "center",
					// 사용할 이미지 경로
					"texture": "#texture",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "center",
					// 가로/세로 크기
					"size": [ "66.667%", "66.667%" ],
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "$source_index",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - $update_string)",
							// 결과가 들어갈 속성
							"target_property_name": "#texture"
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
				"source_control_name": "$source_index",
				// 계산식/참조 값
				"source_property_name": "(not(((#stored_text - $update_string) = 'disable') or ((#stored_text - $update_string) = '')))",
				// 결과가 들어갈 속성
				"target_property_name": "#visible"
			}
		]
	},

	// ???/?? ??
	"spell_slot_render": {
		// 이미지 표시
		"type": "image",
		// 사용할 이미지 경로
		"texture": "#texture",
        // ??? ?? ?
        "allow_debug_missing_texture": false,
		// 기준점(어디에서 시작할지)
		"anchor_from": "center",
		// 붙일 위치(어디에 놓을지)
		"anchor_to": "center",
		// 가로/세로 크기
		"size": [ "15%", "100%x" ],
		// 겹치는 순서(숫자 클수록 위)
		"layer": 2,
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"background": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "textures/ui/spell_wheel/change_slot_wheel",
					// 기준점(어디에서 시작할지)
					"anchor_from": "center",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "center",
					// ???
					"alpha": 0.9,
					// 가로/세로 크기
					"size": [ "200%", "200%" ],
					// 이 안에 들어가는 부품 목록
					"controls": [
						{
							// ???/?? ??
							"label": {
								// 이미지 표시
								"type": "image",
								// 가로/세로 크기
								"size": [ "100%c + 24px", "100%c + 2px" ],
								// 사용할 이미지 경로
								"texture": "textures/ui/hud_tip_text_background",
								// 기준점(어디에서 시작할지)
								"anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_middle",
								// 기준점에서 이동하는 거리
								"offset": [ 0, 8 ],
								// ???
								"alpha": 0.5,
								// 이 안에 들어가는 부품 목록
								"controls": [
									{
										// 보여줄 글자
										"text": {
											// 글자 표시
											"type": "label",
											// 보여줄 글자
											"text": "#text",
											// 게임 값과 연결하는 규칙 목록
											"bindings": [
												{
													// 계산/조건 결과를 연결
													"binding_type": "view",
													// ?? ??
													"source_control_name": "spell_name_update_data",
													// 계산식/참조 값
													"source_property_name": "(#stored_text - 'spell_name_update')",
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
										"source_control_name": "spell_name_update_data",
										// 계산식/참조 값
										"source_property_name": "(not(#stored_text = 'spell_name_update'))",
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
				"spell_0@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["0%","-75%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_0",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_0_update"

				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"spell_1@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["47%","-56%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_1",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_1_update"

				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"spell_2@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["73%","-12%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_2",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_2_update"

				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"spell_3@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["64%","36%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_3",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_3_update"

				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"spell_4@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["25%","70%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_4",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_4_update"

				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"spell_5@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["-25%","70%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_5",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_5_update"

				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"spell_6@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["-64%","36%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_6",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_6_update"

				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"spell_7@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["-73%","-12%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_7",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_7_update"

				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"spell_8@magic_hud.spell_render": {
					// 기준점에서 이동하는 거리
					"offset": ["-47%","-56%"],
					// 오버라이드 가능한 변수
					"$source_index": "spell_render_8",
					// 오버라이드 가능한 변수
					"$update_string": "spell_render_8_update"

				}
			}
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// ?? ??
				"source_control_name": "magic_data_control_1",
				// 계산식/참조 값
				"source_property_name": "('textures/ui/spell_wheel/wand_direction_' + #spell_wheel)",
				// 결과가 들어갈 속성
				"target_property_name": "#texture"
			},
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// ?? ??
				"source_control_name": "magic_data_control_1",
				// 계산식/참조 값
				"source_property_name": "((#spell_wheel < 99) and (not(#stored_text = '')))",
				// 결과가 들어갈 속성
				"target_property_name": "#visible"
			}
		]
	},

	// ???/?? ??
	"anim_effect_start": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "in_sine",
		// 다음 애니메이션으로 연결
		"next": "@magic_hud.anim_effect_end",
		// 걸리는 시간(초)
		"duration": 0.25,
		// 시작 값
		"from": 1,
		// 끝 값
		"to": 0.2
	},

	// ???/?? ??
	"anim_effect_end": {
		// 투명도 변화
		"anim_type": "alpha",
		// 움직임 곡선
		"easing": "in_sine",
		// 다음 애니메이션으로 연결
		"next": "@magic_hud.anim_effect_start",
		// 걸리는 시간(초)
		"duration": 0.25,
		// 시작 값
		"from": 0.2,
		// 끝 값
		"to": 1
	},

	// ???/?? ??
	"effect_ui_blank": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [ "19px", "19px" ],
		// 오버라이드 가능한 변수
		"$effect_name|default": "blank",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// ?? ??
				"source_control_name": "custom_effect_data",
				// 계산식/참조 값
				"source_property_name": "(not((#stored_text - $effect_name) = #stored_text))",
				// 결과가 들어갈 속성
				"target_property_name": "#visible"
			}
		]
	},

	// ???/?? ??
	"effect_ui_template": {
		// 이미지 표시
		"type": "image",
		// 가로/세로 크기
		"size": [ "19px", "19px" ],
		// 사용할 이미지 경로
		"texture": "textures/ui/hud_mob_effect_background",
		// 오버라이드 가능한 변수
		"$effect_texture|default": "textures/ui/blank",
		// 오버라이드 가능한 변수
		"$effect_name|default": "blank",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"effect_image": {
					// 이미지 표시
					"type": "image",
					// 가로/세로 크기
					"size": [ "18px", "18px" ],
					// 사용할 이미지 경로
					"texture": "$effect_texture",
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "custom_effect_data",
							// 계산식/참조 값
							"source_property_name": "((#stored_text - ($effect_name + '_low')) = #stored_text)",
							// 결과가 들어갈 속성
							"target_property_name": "#visible"
						}
					]
				}
			},
			{
				// ???/?? ??
				"effect_image_low": {
					// 이미지 표시
					"type": "image",
					// 가로/세로 크기
					"size": [ "18px", "18px" ],
					// 사용할 이미지 경로
					"texture": "$effect_texture",
					// ???
					"alpha": "@magic_hud.anim_effect_start"
				}
			}
		],
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// ?? ??
				"source_control_name": "custom_effect_data",
				// 계산식/참조 값
				"source_property_name": "(not((#stored_text - $effect_name) = #stored_text))",
				// 결과가 들어갈 속성
				"target_property_name": "#visible"
			}
		]
	},

	// ???/?? ??
	"custom_effect_renderer": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "vertical",
		// 가로/세로 크기
		"size": [ "fill", "fill" ],
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"blank_0@magic_hud.effect_ui_blank": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "blank_0"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"blank_1@magic_hud.effect_ui_blank": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "blank_1"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"blank_2@magic_hud.effect_ui_blank": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "blank_2"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"blank_3@magic_hud.effect_ui_blank": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "blank_3"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"blank_4@magic_hud.effect_ui_blank": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "blank_4"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"blank_5@magic_hud.effect_ui_blank": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "blank_5"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"blank_6@magic_hud.effect_ui_blank": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "blank_6"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"blank_7@magic_hud.effect_ui_blank": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "blank_7"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"effect_0@magic_hud.effect_ui_template": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/alternate_damage",
					// 오버라이드 가능한 변수
					"$effect_name": "alternate_damage"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"effect_1@magic_hud.effect_ui_template": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/bubble",
					// 오버라이드 가능한 변수
					"$effect_name": "bubble"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"effect_2@magic_hud.effect_ui_template": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/floating",
					// 오버라이드 가능한 변수
					"$effect_name": "floating"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"effect_3@magic_hud.effect_ui_template": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/freeze",
					// 오버라이드 가능한 변수
					"$effect_name": "freeze"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"effect_4@magic_hud.effect_ui_template": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/heals",
					// 오버라이드 가능한 변수
					"$effect_name": "heals"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"effect_5@magic_hud.effect_ui_template": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/magic_lasso",
					// 오버라이드 가능한 변수
					"$effect_name": "magic_lasso"
				}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"effect_6@magic_hud.effect_ui_template": {
					// 오버라이드 가능한 변수
					"$effect_texture": "textures/ui/effect/magnetism",
					// 오버라이드 가능한 변수
					"$effect_name": "magnetism"
				}
			}
		]
	},

	// ???/?? ??
	"mob_effects_renderer": {
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
						"custom_effect_renderer@magic_hud.custom_effect_renderer": {
							// 기준점에서 이동하는 거리
							"offset": [ "-21px", "-8px" ],
							// 기준점(어디에서 시작할지)
							"anchor_from": "top_right",
							// 붙일 위치(어디에 놓을지)
							"anchor_to": "top_right"
						}
					}
				]
			}
		]
	},

	// ???/?? ??
	"fill": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 가로/세로 크기
		"size": [ 14, 14 ]
	},

	// ???/?? ??
	"stack_spell_fill": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",

		// 목록 이름
		"collection_name": "spell_fill",
		// 목록 아이템을 자동으로 생성
		"factory": {
			// ?? ??
			"name": "bar_factory",
			// ??? ???
			"control_name": "magic_hud.fill"
		},
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{
				// 계산/조건 결과를 연결
				"binding_type": "view",
				// ?? ??
				"source_control_name": "data_stack_spell",
				// 계산식/참조 값
				"source_property_name": "#amount",
				// 결과가 들어갈 속성
				"target_property_name": "#collection_length"
			}
		]
	},

	// ???/?? ??
	"stack_spell_render": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
		// 오버라이드 가능한 변수
		"$size": [ 140, 14 ],
		// 가로/세로 크기
		"size": "$size",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// ???/?? ??
				"cooldown": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "#texture",
					// 가로/세로 크기
					"size": "$size",
					// ???? ?? ??
					"uv": [ 28, 0 ],
					// ???? ??
					"uv_size": [ 14, 14 ],
					// 이미지 반복 여부
					"tiled": true,
					// ??? ??
					"clip_direction": "left",
					// ?? ??
					"clip_pixelperfect": false,
					// 겹치는 순서(숫자 클수록 위)
					"layer": 1,
					// 오버라이드 가능한 변수
					"$divisor": 10.0,
					// 오버라이드 가능한 변수
					"$divisor2": 99.0,
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_stack_spell",
							// 계산식/참조 값
							"source_property_name": "(#cooldown / $divisor2)",
							// 결과가 들어갈 속성
							"target_property_name": "#clip_ratio"
						},
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_stack_spell_texture",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - 'stack_spell_texture')",
							// 결과가 들어갈 속성
							"target_property_name": "#texture"
						}
					]
				}
			},
			{
				// ???/?? ??
				"active": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "#texture",
					// 가로/세로 크기
					"size": "$size",
					// ???? ?? ??
					"uv": [ 0, 0 ],
					// ???? ??
					"uv_size": [ 14, 14 ],
					// 이미지 반복 여부
					"tiled": true,
					// ??? ??
					"clip_direction": "left",
					// ?? ??
					"clip_pixelperfect": false,
					// 오버라이드 가능한 변수
					"$divisor": 10.0,
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_stack_spell",
							// 계산식/참조 값
							"source_property_name": "(#active / $divisor)",
							// 결과가 들어갈 속성
							"target_property_name": "#clip_ratio"
						},
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_stack_spell_texture",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - 'stack_spell_texture')",
							// 결과가 들어갈 속성
							"target_property_name": "#texture"
						}
					]
				}
			},
			{
				// ???/?? ??
				"bg": {
					// 이미지 표시
					"type": "image",
					// 사용할 이미지 경로
					"texture": "#texture",
					// 가로/세로 크기
					"size": "$size",
					// ???? ?? ??
					"uv": [ 14, 0 ],
					// ???? ??
					"uv_size": [ 14, 14 ],
					// 이미지 반복 여부
					"tiled": true,
					// ??? ??
					"clip_direction": "left",
					// ?? ??
					"clip_pixelperfect": false,
					// 겹치는 순서(숫자 클수록 위)
					"layer": -1,
					// 오버라이드 가능한 변수
					"$divisor": 10.0,
					// 게임 값과 연결하는 규칙 목록
					"bindings": [
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_stack_spell",
							// 계산식/참조 값
							"source_property_name": "(#amount / $divisor)",
							// 결과가 들어갈 속성
							"target_property_name": "#clip_ratio"
						},
						{
							// 계산/조건 결과를 연결
							"binding_type": "view",
							// ?? ??
							"source_control_name": "data_stack_spell_texture",
							// 계산식/참조 값
							"source_property_name": "(#stored_text - 'stack_spell_texture')",
							// 결과가 들어갈 속성
							"target_property_name": "#texture"
						}
					]
				}
			}
		]
	},

	// ???/?? ??
	"stack_spell_panel": {
		// 줄맞춤 컨테이너: 가로/세로로 자동 배치
		"type": "stack_panel",
		// 쌓는 방향(가로/세로)
		"orientation": "horizontal",
		// 이 안에 들어가는 부품 목록
		"controls": [
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"stack_spell_fill@magic_hud.stack_spell_fill": {}
			},
			{
				// 다른 템플릿을 가져와서 확장(상속)
				"stack_spell_render@magic_hud.stack_spell_render": {
					// 기준점에서 이동하는 거리
					"offset": [ "100%", "100%"]
				}
			}
			// ,
			// {
			// 	"test":{
			// 		"type": "label",
			// 		"text": "#text",
			// 		"bindings": [
			// 			{
			// 				"binding_type": "view",
			// 				"source_control_name": "data_stack_spell_texture",
			// 				"source_property_name": "(#stored_text - ' stack_spell_texture')",
			// 				"target_property_name": "#text"
			// 			}
			// 		]
			// 	}
			// }
		]
	},

    // ???/?? ??
    "root_panel": {
		// 패널: 다른 부품을 담는 바닥판
		"type": "panel",
        // 이 안에 들어가는 부품 목록
        "controls": [
            {
                // ???/?? ??
                "data_control_magic": {
					// 오버라이드 가능한 변수
					"$update_stack_spell": "stack_spell_panel",
					// 오버라이드 가능한 변수
					"$update_stack_spell_texture": "stack_spell_texture",
                    // 오버라이드 가능한 변수
                    "$update_main": "magic_main",
                    // 오버라이드 가능한 변수
                    "$update_left": "magic_left",
                    // 오버라이드 가능한 변수
                    "$update_right": "magic_right",
                    // 오버라이드 가능한 변수
                    "$update_magic_name": "magic_name_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_0": "spell_render_0_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_1": "spell_render_1_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_2": "spell_render_2_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_3": "spell_render_3_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_4": "spell_render_4_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_5": "spell_render_5_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_6": "spell_render_6_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_7": "spell_render_7_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_slot_8": "spell_render_8_update",
                    // 오버라이드 가능한 변수
                    "$update_spell_name": "spell_name_update",
                    // 오버라이드 가능한 변수
                    "$custom_effect": "custom_effect_update",
                    // 오버라이드 가능한 변수
                    "$update_magic_ui": "magic_ui_update",
                    // 오버라이드 가능한 변수
                    "$update_magic_ui_soul_text": "magic_ui_soul_text_update",
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 가로/세로 크기
                    "size": [ 0, 0 ],
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "data_magic_ui_soul_text": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_magic_ui_soul_text) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "data_stack_spell_texture": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_stack_spell_texture) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
						{
							//scriptevent ui_sub_load:stack_spell_panel a909996789stack_spell_panel
							//[0-9 amount][0-10 active][0-99 cooldown][6789 kosong]
							"data_stack_spell": {
								// 패널: 다른 부품을 담는 바닥판
								"type": "panel",
								// 가로/세로 크기
								"size": [ 0, 0 ],
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
										"binding_name_override": "#stored_text",
										// ?? ???
										"binding_condition": "visibility_changed"
									},
									{
									  // 계산/조건 결과를 연결
									  "binding_type": "view",
									  // 계산식/참조 값
									  "source_property_name": "(#stored_text - 'a')",
									  // 결과가 들어갈 속성
									  "target_property_name": "#data"
									},
									{
									  // 계산/조건 결과를 연결
									  "binding_type": "view",
									  // 계산식/참조 값
									  "source_property_name": "(#data/100000000)",
									  // 결과가 들어갈 속성
									  "target_property_name": "#amount"
									},
									{
									  // 계산/조건 결과를 연결
									  "binding_type": "view",
									  // 계산식/참조 값
									  "source_property_name": "(#data/1000000) - (#amount * 100)",
									  // 결과가 들어갈 속성
									  "target_property_name": "#active"
									},
									{
									  // 계산/조건 결과를 연결
									  "binding_type": "view",
									  // 계산식/참조 값
									  "source_property_name": "(#data/10000) - (#amount * 10000) - (#active * 100)",
									  // 결과가 들어갈 속성
									  "target_property_name": "#cooldown"
									},
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// 계산식/참조 값
										"source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_stack_spell) = #hud_title_text_string))",
										// 결과가 들어갈 속성
										"target_property_name": "#visible"
									}
								]
							}
						},
                        {
                            // ???/?? ??
                            "magic_data_control_1": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "#show_survival_ui",
                                        // 가져온 값을 다른 속성으로 연결
                                        "binding_name_override": "#survival_ui"
                                    },
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "#hud_title_text_string"
                                    },
                                    {
                                        // 가져올 값 이름
                                        "binding_name": "#hud_title_text_string",
                                        // 가져온 값을 다른 속성으로 연결
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#stored_text - ('%.1s' * #stored_text))",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#data"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "('%.1s' * #stored_text)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#header"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#data/100000000)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#spell_select"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#data / 1000000) - (#spell_select * 100)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#spell_cooldown"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#data / 10000) - (#spell_cooldown * 100) - (#spell_select * 10000)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#spell_wheel"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#data / 100) - (#spell_wheel * 100) - (#spell_cooldown * 10000) - (#spell_select * 1000000)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#casting_duration"
                                    },
                                    {
                                      // 계산/조건 결과를 연결
                                      "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "(#data / 1) - (#casting_duration * 100) - (#spell_wheel * 10000) - (#spell_cooldown * 1000000) - (#spell_select * 100000000)",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#soul_capacity"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_magic_ui) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "custom_effect_data": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $custom_effect) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_name_update_data": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_name) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_0": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_0) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_1": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_1) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_2": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_2) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_3": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_3) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_4": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_4) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_5": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_5) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_6": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_6) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_7": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_7) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "spell_render_8": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_spell_slot_8) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "data_control_magic_menu_name": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_magic_name) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "data_control_magic_menu_main": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_main) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "data_control_magic_menu_left": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_left) = #hud_title_text_string))",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // ???/?? ??
                            "data_control_magic_menu_right": {
                                // 패널: 다른 부품을 담는 바닥판
                                "type": "panel",
                                // 가로/세로 크기
                                "size": [ 0, 0 ],
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
                                        "binding_name_override": "#stored_text",
                                        // ?? ???
                                        "binding_condition": "visibility_changed"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // 계산식/참조 값
                                        "source_property_name": "(not (#hud_title_text_string = #stored_text) and not ((#hud_title_text_string - $update_right) = #hud_title_text_string))",
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
				"stack_spell_panel@magic_hud.stack_spell_panel": {
					// 기준점에서 이동하는 거리
					"offset": [ 0, "10%" ],
					// 기준점(어디에서 시작할지)
					"anchor_from": "center",
					// 붙일 위치(어디에 놓을지)
					"anchor_to": "top_middle"
				}
			},
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "magic_panel@magic_hud.magic_panel": {
                    // 오버라이드 가능한 변수
                    "$offset": [ -165, 0 ],
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "bottom_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_middle",
                    // 조건에 따라 변수 값을 바꾸기
                    "variables": [
                        {
                            // 이 조건이 맞으면 적용
                            "requires": "$pocket_edition",
                            // 오버라이드 가능한 변수
                            "$offset": [ 0, -56 ]
                        }
                    ],
                    // 기준점에서 이동하는 거리
                    "offset": "$offset"
                }
            },
            {
                // ???/?? ??
                "soul": {
                    // 패널: 다른 부품을 담는 바닥판
                    "type": "panel",
                    // 오버라이드 가능한 변수
                    "$offset": [ 98, -28 ],
                    // 가로/세로 크기
                    "size": [ 16, 16 ],
                    // 기준점(어디에서 시작할지)
                    "anchor_from": "bottom_middle",
                    // 붙일 위치(어디에 놓을지)
                    "anchor_to": "bottom_middle",
                    // 이 안에 들어가는 부품 목록
                    "controls": [
                        {
                            // ???/?? ??
                            "denied": {
                                // 이미지 표시
                                "type": "image",
                                // 사용할 이미지 경로
                                "texture": "textures/ui/soul/soul_denied",
                                // 가로/세로 크기
                                "size": [ 16, 16 ],
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 2,
                                // ???
                                "alpha": "@magic_hud.blink_cycle",
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "magic_data_control_1",
                                        // 계산식/참조 값
                                        "source_property_name": "(#header = 'b')",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
                            }
                        },
                        {
                            // 다른 템플릿을 가져와서 확장(상속)
                            "soul_panel@magic_hud.soul_panel": {}
                        },
						{
							// ???/?? ??
							"soul_text_denaid": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
                                // 가로/세로 크기
                                "size": [ 128, "default" ],
								// 기준점에서 이동하는 거리
								"offset": [ 2, 0 ],
								// 기준점(어디에서 시작할지)
								"anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "left_middle",
								// ?? (R,G,B,A)
								"color": [ 1.0, 0.1, 0.42 ],
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": 2,
                                // ???
                                "alpha": "@magic_hud.blink_cycle",
                                // 게임 값과 연결하는 규칙 목록
                                "bindings": [
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "data_magic_ui_soul_text",
                                        // 계산식/참조 값
                                        "source_property_name": "(#stored_text - 'magic_ui_soul_text_update')",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#text"
                                    },
                                    {
                                        // 계산/조건 결과를 연결
                                        "binding_type": "view",
                                        // ?? ??
                                        "source_control_name": "magic_data_control_1",
                                        // 계산식/참조 값
                                        "source_property_name": "(#header = 'b')",
                                        // 결과가 들어갈 속성
                                        "target_property_name": "#visible"
                                    }
                                ]
							}
						},
						{
							// ???/?? ??
							"soul_text": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
                                // 가로/세로 크기
                                "size": [ 128, "default" ],
								// 기준점에서 이동하는 거리
								"offset": [ 2, 0 ],
								// 기준점(어디에서 시작할지)
								"anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "left_middle",
								// ?? (R,G,B,A)
								"color": [ 0.43, 0.92, 0.92 ],
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_magic_ui_soul_text",
										// 계산식/참조 값
										"source_property_name": "(#stored_text - 'magic_ui_soul_text_update')",
										// 결과가 들어갈 속성
										"target_property_name": "#text"
									}
								]
							}
						},
						{
							// ???/?? ??
							"soul_text_0": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
                                // 가로/세로 크기
                                "size": [ 128, "default" ],
								// 기준점에서 이동하는 거리
								"offset": [ 3, 0 ],
								// 기준점(어디에서 시작할지)
								"anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "left_middle",
								// ?? (R,G,B,A)
								"color": [ 0.0, 0.0, 0.0 ],
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": -1,
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_magic_ui_soul_text",
										// 계산식/참조 값
										"source_property_name": "(#stored_text - 'magic_ui_soul_text_update')",
										// 결과가 들어갈 속성
										"target_property_name": "#text"
									}
								]
							}
						},
						{
							// ???/?? ??
							"soul_text_1": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
                                // 가로/세로 크기
                                "size": [ 128, "default" ],
								// 기준점에서 이동하는 거리
								"offset": [ 1, 0 ],
								// 기준점(어디에서 시작할지)
								"anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "left_middle",
								// ?? (R,G,B,A)
								"color": [ 0.0, 0.0, 0.0 ],
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": -1,
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_magic_ui_soul_text",
										// 계산식/참조 값
										"source_property_name": "(#stored_text - 'magic_ui_soul_text_update')",
										// 결과가 들어갈 속성
										"target_property_name": "#text"
									}
								]
							}
						},
						{
							// ???/?? ??
							"soul_text_2": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
                                // 가로/세로 크기
                                "size": [ 128, "default" ],
								// 기준점에서 이동하는 거리
								"offset": [ 2, 1 ],
								// 기준점(어디에서 시작할지)
								"anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "left_middle",
								// ?? (R,G,B,A)
								"color": [ 0.0, 0.0, 0.0 ],
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": -1,
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_magic_ui_soul_text",
										// 계산식/참조 값
										"source_property_name": "(#stored_text - 'magic_ui_soul_text_update')",
										// 결과가 들어갈 속성
										"target_property_name": "#text"
									}
								]
							}
						},
						{
							// ???/?? ??
							"soul_text_3": {
								// 글자 표시
								"type": "label",
								// 보여줄 글자
								"text": "#text",
                                // 가로/세로 크기
                                "size": [ 128, "default" ],
								// 기준점에서 이동하는 거리
								"offset": [ 2, -1 ],
								// 기준점(어디에서 시작할지)
								"anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "left_middle",
								// ?? (R,G,B,A)
								"color": [ 0.0, 0.0, 0.0 ],
                                // 겹치는 순서(숫자 클수록 위)
                                "layer": -1,
								// 게임 값과 연결하는 규칙 목록
								"bindings": [
									{
										// 계산/조건 결과를 연결
										"binding_type": "view",
										// ?? ??
										"source_control_name": "data_magic_ui_soul_text",
										// 계산식/참조 값
										"source_property_name": "(#stored_text - 'magic_ui_soul_text_update')",
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
                          "binding_name": "#is_not_riding",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "#visible"
                        }
                    ],
                    // 조건에 따라 변수 값을 바꾸기
                    "variables": [
                        {
                            // 이 조건이 맞으면 적용
                            "requires": "$pocket_edition",
                            // 오버라이드 가능한 변수
                            "$offset": [ 110, -28 ]
                        }
                    ],
                    // 기준점에서 이동하는 거리
                    "offset": "$offset"
                }
            },
            {
                // 다른 템플릿을 가져와서 확장(상속)
                "spell_slot_render@magic_hud.spell_slot_render": {}
            }
			// {
			// 	"testaaaaa": {
			// 		"type": "custom",
			// 		"layer": 4,
            //         "anchor_from": "center",
            //         "anchor_to": "center",
			// 		"renderer": "live_horse_renderer",
			// 		"$a": "-004294967295",
            //         "size": [ 64, 64 ],

			// 		"property_bag": {
			// 			"#entity_id": "$a"
			// 		}
			// 	}
			// }
        ]
    }
}
```









[분할 목록으로 돌아가기](preview.html#example-view)

