---
title: 예제 미리보기 (1/12)
outline: false
search: false
---

# 예제 미리보기 (1/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### 기본


### 기본
compatibility.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: compatibility.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_compatibility_config",

  // Only override compatibility panels
  "compatibility_variables": {
    // 오버라이드 가능한 변수
    "$compatibility_target_version": 12111300,
    // 오버라이드 가능한 변수
    "$compatibility_max_version": 12111900,
    // 오버라이드 가능한 변수
    "$compatibility_min_version": 12111000
  }
}
```








### 기본
module_pack.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: module_pack.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_module_pack",

  // 다른 템플릿을 가져와서 확장(상속)
  "module_list@rainbowpie_ui_module_list.module_list_panel": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "chest_fastpick@rainbowpie_ui_module_list.module_item": {
          // 오버라이드 가능한 변수
          "$module_icon_texture": "($rainbowpie_ui_path_home + '/icon/module')",
          // 오버라이드 가능한 변수
          "$module_name": "Chest Fast Pickup",
          // 오버라이드 가능한 변수
          "$module_version": "1.5",
          // 오버라이드 가능한 변수
          "$module_author": "MintCoolMC",
          // 오버라이드 가능한 변수
          "$module_description": "Quickly pick items from chest",
          // 오버라이드 가능한 변수
          "$module_state_check": "$rainbowpie_ui_module_chest_fastpick",
          // 오버라이드 가능한 변수
          "$module_max_engine_version": "999999",
          // 오버라이드 가능한 변수
          "$module_max_engine_patch_version": "999999",
          // 오버라이드 가능한 변수
          "$module_min_engine_version": "0",
          // 오버라이드 가능한 변수
          "$module_min_engine_patch_version": "0",
          // 오버라이드 가능한 변수
          "$module_variable_display": true,
          // 오버라이드 가능한 변수
          "$module_variables": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "redstone_blocks@rainbowpie_ui_module_list.module_variable_item": {
                // 오버라이드 가능한 변수
                "$variable_name": "$rainbowpie_ui_moduleflag_chest_fastpick_redstone_blocks",
                // 오버라이드 가능한 변수
                "$variable_name_display": "rainbowpie_ui_moduleflag_chest_fastpick_redstone_blocks",
                // 오버라이드 가능한 변수
                "$variable_description": "Allow use fastpick in redstone blocks (hopper, dropper, dispenser, crafter)"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_block_counter@rainbowpie_ui_module_list.module_item": {
          // 오버라이드 가능한 변수
          "$module_icon_texture": "($rainbowpie_ui_path_home + '/module/hud_block_counter')",
          // 오버라이드 가능한 변수
          "$module_name": "HUD Block Counter",
          // 오버라이드 가능한 변수
          "$module_version": "2.1",
          // 오버라이드 가능한 변수
          "$module_author": "MintCoolMC",
          // 오버라이드 가능한 변수
          "$module_description": "Shows the total count of held blocks in the hotbar",
          // 오버라이드 가능한 변수
          "$module_state_check": "$rainbowpie_ui_module_hud_block_counter",
          // 오버라이드 가능한 변수
          "$module_max_engine_version": "999999",
          // 오버라이드 가능한 변수
          "$module_max_engine_patch_version": "999999",
          // 오버라이드 가능한 변수
          "$module_min_engine_version": "0",
          // 오버라이드 가능한 변수
          "$module_min_engine_patch_version": "0"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_bow_helper@rainbowpie_ui_module_list.module_item": {
          // 오버라이드 가능한 변수
          "$module_icon_texture": "($rainbowpie_ui_path_home + '/module/hud_bow_helper')",
          // 오버라이드 가능한 변수
          "$module_name": "HUD Bow Helper",
          // 오버라이드 가능한 변수
          "$module_version": "2.0",
          // 오버라이드 가능한 변수
          "$module_author": "MintCoolMC",
          // 오버라이드 가능한 변수
          "$module_description": "Shows the total count of arrows in the inventory",
          // 오버라이드 가능한 변수
          "$module_state_check": "$rainbowpie_ui_module_hud_bow_helper",
          // 오버라이드 가능한 변수
          "$module_max_engine_version": "999999",
          // 오버라이드 가능한 변수
          "$module_max_engine_patch_version": "999999",
          // 오버라이드 가능한 변수
          "$module_min_engine_version": "0",
          // 오버라이드 가능한 변수
          "$module_min_engine_patch_version": "0"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_compass@rainbowpie_ui_module_list.module_item": {
          // 오버라이드 가능한 변수
          "$module_icon_texture": "($rainbowpie_ui_path_home + '/module/hud_compass')",
          // 오버라이드 가능한 변수
          "$module_name": "HUD Compass",
          // 오버라이드 가능한 변수
          "$module_version": "1.0",
          // 오버라이드 가능한 변수
          "$module_author": "MintCoolMC",
          // 오버라이드 가능한 변수
          "$module_description": "Show clock & compass on the HUD when you have them in your inventory",
          // 오버라이드 가능한 변수
          "$module_state_check": "$rainbowpie_ui_module_hud_compass",
          // 오버라이드 가능한 변수
          "$module_max_engine_version": "999999",
          // 오버라이드 가능한 변수
          "$module_max_engine_patch_version": "999999",
          // 오버라이드 가능한 변수
          "$module_min_engine_version": "0",
          // 오버라이드 가능한 변수
          "$module_min_engine_patch_version": "0"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hud_selected_item_id@rainbowpie_ui_module_list.module_item": {
          // 오버라이드 가능한 변수
          "$module_icon_texture": "($rainbowpie_ui_path_home + '/module/hud_selected_item_id')",
          // 오버라이드 가능한 변수
          "$module_name": "HUD Selected Item ID",
          // 오버라이드 가능한 변수
          "$module_version": "1.0",
          // 오버라이드 가능한 변수
          "$module_author": "MintCoolMC",
          // 오버라이드 가능한 변수
          "$module_description": "DEBUG",
          // 오버라이드 가능한 변수
          "$module_state_check": "$rainbowpie_ui_module_hud_selected_item_id",
          // 오버라이드 가능한 변수
          "$module_max_engine_version": "999999",
          // 오버라이드 가능한 변수
          "$module_max_engine_patch_version": "999999",
          // 오버라이드 가능한 변수
          "$module_min_engine_version": "0",
          // 오버라이드 가능한 변수
          "$module_min_engine_patch_version": "0"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "inventory_actions@rainbowpie_ui_module_list.module_item": {
          // 오버라이드 가능한 변수
          "$module_icon_texture": "($rainbowpie_ui_path_home + '/icon/module')",
          // 오버라이드 가능한 변수
          "$module_name": "Inventory Actions",
          // 오버라이드 가능한 변수
          "$module_version": "1.7",
          // 오버라이드 가능한 변수
          "$module_author": "MintCoolMC",
          // 오버라이드 가능한 변수
          "$module_description": "More Actions in inventory.",
          // 오버라이드 가능한 변수
          "$module_state_check": "$rainbowpie_ui_module_inventory_actions",
          // 오버라이드 가능한 변수
          "$module_max_engine_version": "999999",
          // 오버라이드 가능한 변수
          "$module_max_engine_patch_version": "999999",
          // 오버라이드 가능한 변수
          "$module_min_engine_version": "0",
          // 오버라이드 가능한 변수
          "$module_min_engine_patch_version": "0",
          // 오버라이드 가능한 변수
          "$module_variable_display": true,
          // 오버라이드 가능한 변수
          "$module_variables": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "delete_item_enabled@rainbowpie_ui_module_list.module_variable_item": {
                // 오버라이드 가능한 변수
                "$variable_name": "$rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled",
                // 오버라이드 가능한 변수
                "$variable_name_display": "rainbowpie_ui_moduleflag_inventory_actions_delete_item_enabled",
                // 오버라이드 가능한 변수
                "$variable_description": "Enable delete item button in creative mode"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "delete_all_item_enabled@rainbowpie_ui_module_list.module_variable_item": {
                // 오버라이드 가능한 변수
                "$variable_name": "$rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled",
                // 오버라이드 가능한 변수
                "$variable_name_display": "rainbowpie_ui_moduleflag_inventory_actions_delete_all_item_enabled",
                // 오버라이드 가능한 변수
                "$variable_description": "Enable delete all items button in creative mode"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "drop_item_enabled@rainbowpie_ui_module_list.module_variable_item": {
                // 오버라이드 가능한 변수
                "$variable_name": "$rainbowpie_ui_moduleflag_inventory_actions_drop_item_enabled",
                // 오버라이드 가능한 변수
                "$variable_name_display": "rainbowpie_ui_moduleflag_inventory_actions_drop_item_enabled",
                // 오버라이드 가능한 변수
                "$variable_description": "Enable drop item button"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "drop_all_item_enabled@rainbowpie_ui_module_list.module_variable_item": {
                // 오버라이드 가능한 변수
                "$variable_name": "$rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled",
                // 오버라이드 가능한 변수
                "$variable_name_display": "rainbowpie_ui_moduleflag_inventory_actions_drop_all_item_enabled",
                // 오버라이드 가능한 변수
                "$variable_description": "Enable drop all items button"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "quick_craft_enabled@rainbowpie_ui_module_list.module_variable_item": {
                // 오버라이드 가능한 변수
                "$variable_name": "$rainbowpie_ui_moduleflag_inventory_actions_quick_craft_enabled",
                // 오버라이드 가능한 변수
                "$variable_name_display": "rainbowpie_ui_moduleflag_inventory_actions_quick_craft_enabled",
                // 오버라이드 가능한 변수
                "$variable_description": "Enable quick craft button"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "armor_switch_enabled@rainbowpie_ui_module_list.module_variable_item": {
                // 오버라이드 가능한 변수
                "$variable_name": "$rainbowpie_ui_moduleflag_inventory_actions_armor_switch_enabled",
                // 오버라이드 가능한 변수
                "$variable_name_display": "rainbowpie_ui_moduleflag_inventory_actions_armor_switch_enabled",
                // 오버라이드 가능한 변수
                "$variable_description": "Enable armor switching"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "bce3269f@rainbowpie_ui_module_list.module_variable_item": {
                // 오버라이드 가능한 변수
                "$variable_name": "$rainbowpie_ui_flag_bce3269f",
                // 오버라이드 가능한 변수
                "$variable_name_display": "rainbowpie_ui_flag_bce3269f",
                // 오버라이드 가능한 변수
                "$variable_description": "InventoryUI new touch mode drop"
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "lib_hud_item@rainbowpie_ui_module_list.module_item": {
          // 오버라이드 가능한 변수
          "$module_icon_texture": "($rainbowpie_ui_path_home + '/icon/module')",
          // 오버라이드 가능한 변수
          "$module_name": "HUD Item Lib",
          // 오버라이드 가능한 변수
          "$module_version": "2.1",
          // 오버라이드 가능한 변수
          "$module_author": "MintCoolMC, 衡川(Crosmover)",
          // 오버라이드 가능한 변수
          "$module_description": "module lib hud item",
          // 오버라이드 가능한 변수
          "$module_state_check": true,
          // 오버라이드 가능한 변수
          "$module_max_engine_version": "999999",
          // 오버라이드 가능한 변수
          "$module_max_engine_patch_version": "999999",
          // 오버라이드 가능한 변수
          "$module_min_engine_version": "0",
          // 오버라이드 가능한 변수
          "$module_min_engine_patch_version": "0"
        }
      }
    ]
  }
}
```








### 기본
pixelart.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: pixelart.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_pixelart",

  // ???/?? ??
  "transparent_pixel": {
    // 이미지 표시
    "type": "image",
    // 오버라이드 가능한 변수
    "$pixel_size|default": [ 1, 1 ],
    // 가로/세로 크기
    "size": "$pixel_size"
  },

  // ???/?? ??
  "color_pixel": {
    // 이미지 표시
    "type": "image",
    // 오버라이드 가능한 변수
    "$pixel_size|default": [ 1, 1 ],
    // 가로/세로 크기
    "size": "$pixel_size",
    // 사용할 이미지 경로
    "texture": "textures/ui/White"
  },

  // ???/?? ??
  "niko_oneshot": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%cm", "100%c" ], // 29x31 pixels
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "pixel_29x1": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x2": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x3": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5450980392156862,
                  0.2431372549019608,
                  0.4
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x4": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x5": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x6": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x7": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5529411764705883,
                  0.2509803921568628,
                  0.407843137254902
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x8": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x9": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x10": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4705882352941176,
                  0.1372549019607843,
                  0.3098039215686274
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.0666666666666667,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x11": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x12": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.396078431372549,
                  0.1019607843137255,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  1.0,
                  1.0
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.396078431372549,
                  0.1019607843137255,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  1.0,
                  1.0
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x13": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.396078431372549,
                  0.1019607843137255,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.396078431372549,
                  0.1019607843137255,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.2784313725490196,
                  0.1803921568627451,
                  0.5372549019607843
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x14": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.396078431372549,
                  0.1019607843137255,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3568627450980392,
                  0.2784313725490196,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.396078431372549,
                  0.1019607843137255,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.9647058823529412,
                  0.6470588235294118,
                  0.3647058823529412
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x15": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.415686274509804,
                  0.1176470588235294,
                  0.2745098039215686
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.415686274509804,
                  0.1176470588235294,
                  0.2745098039215686
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x16": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  1.0,
                  0.792156862745098,
                  0.2509803921568628
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.6784313725490196,
                  0.3450980392156862,
                  0.3568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x17": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.6784313725490196,
                  0.3450980392156862,
                  0.3568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.6784313725490196,
                  0.3450980392156862,
                  0.3568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x18": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.6784313725490196,
                  0.3450980392156862,
                  0.3568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.7019607843137254,
                  0.4470588235294118,
                  0.4549019607843137
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.6784313725490196,
                  0.3450980392156862,
                  0.3568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x19": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3647058823529412,
                  0.2745098039215686,
                  0.5882352941176471
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1333333333333333,
                  0.0588235294117647,
                  0.3294117647058824
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x20": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4117647058823529,
                  0.396078431372549,
                  0.8
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.196078431372549,
                  0.1098039215686274,
                  0.4196078431372549
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x21": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x22": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x23": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x24": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x25": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.5568627450980392,
                  0.2509803921568628,
                  0.4117647058823529
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x26": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x27": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x28": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x29": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4196078431372549,
                  0.1411764705882353,
                  0.3215686274509804
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x30": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3098039215686274,
                  0.2509803921568628,
                  0.7294117647058823
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "pixel_29x31": {
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
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_1@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_2@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_3@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_4@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_5@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_6@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_7@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_8@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_9@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_10@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_11@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_12@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_13@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_14@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.1686274509803922,
                  0.0509803921568627,
                  0.2235294117647059
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_15@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_16@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_17@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_18@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.0862745098039216,
                  0.0,
                  0.1568627450980392
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_19@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_20@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_21@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_22@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_23@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.3372549019607844,
                  0.1058823529411765,
                  0.2588235294117648
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_24@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_25@rainbowpieui_pixelart.color_pixel": {
                // ?? (R,G,B,A)
                "color": [
                  0.4431372549019608,
                  0.1803921568627451,
                  0.6274509803921569
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_26@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_27@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_28@rainbowpieui_pixelart.transparent_pixel": { }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "pixel_29@rainbowpieui_pixelart.transparent_pixel": { }
            }
          ]
        }
      }
    ]
  }
}
```








### 기본
rainbowpie_ui_animations.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_animations.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_animations",

  // ???/?? ??
  "container_panel_exit_animation_push": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_84df7492)",
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 시작 값
    "from": [ "100%", "100%" ],
    // 끝 값
    "to": [ "50%", "50%" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_3eb56fef",
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_animation_container_v2_transition_time": 0.0
      }
    ]
  },

  // ???/?? ??
  "container_panel_exit_animation_pop": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_84df7492)",
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 시작 값
    "from": [ "100%", "100%" ],
    // 끝 값
    "to": [ "50%", "50%" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_3eb56fef",
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_animation_container_v2_transition_time": 0.0
      }
    ]
  },

  // ???/?? ??
  "container_panel_entrance_animation_push": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_84df7492)",
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 시작 값
    "from": [ "50%", "50%" ],
    // 끝 값
    "to": [ "100%", "100%" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "container_panel_entrance_animation_pop": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_flag_84df7492)",
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_v2_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_v2_transition_time",
    // 시작 값
    "from": [ "50%", "50%" ],
    // 끝 값
    "to": [ "100%", "100%" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "container_screen_exit_animation_push": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "-3%", 0 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_3eb56fef",
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_animation_container_transition_time": 0.0
      }
    ]
  },

  // ???/?? ??
  "container_screen_exit_animation_pop": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, "6%" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_3eb56fef",
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_animation_container_transition_time": 0.0
      }
    ]
  },

  // ???/?? ??
  "container_screen_entrance_animation_push": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_transition_time",
    // 시작 값
    "from": [ 0, "6%" ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "container_screen_entrance_animation_pop": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_ui_flag_84df7492",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_container_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_container_transition_time",
    // 시작 값
    "from": [ "-3%", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "screen_exit_animation_push_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screen_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "-15%", 0 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "screen_exit_animation_pop_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screen_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "15%", 0 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "screen_entrance_animation_push_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screen_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "15%", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "screen_entrance_animation_pop_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screen_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "-15%", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "screen_exit_animation_push_offset_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screen_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, "15%"],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "screen_exit_animation_pop_offset_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screen_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, "15%" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "screen_entrance_animation_push_offset_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screen_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "15%" ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "screen_entrance_animation_pop_offset_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screen_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "15%" ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_exit_animation_push_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "-20%", 0 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_exit_animation_pop_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "20%", 0 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_entrance_animation_push_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "20%", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_entrance_animation_pop_offset": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ "-20%", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_exit_animation_push_offset_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_exit_animation_pop_offset_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_entrance_animation_push_offset_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_entrance_animation_pop_offset_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_exit_animation_push_offset_both": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_exit_animation_pop_offset_both": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_entrance_animation_push_offset_both": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_entrance_animation_pop_offset_both": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_exit_animation_push_offset_both_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, -24 ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_exit_animation_pop_offset_both_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ 0, -24 ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_entrance_animation_push_offset_both_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, -24 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_entrance_animation_pop_offset_both_ingame": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, -24 ],
    // 끝 값
    "to": [ 0, 0 ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // Header Background Animations

  "header_background_exit_animation_push_offset1": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 20px" ],
    // 끝 값
    "to": [ 0, "-100% + 20px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_background_exit_animation_push_offset2": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 20px" ],
    // 끝 값
    "to": [ 0, "100% - 20px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_background_exit_animation_pop_offset1": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 20px" ],
    // 끝 값
    "to": [ 0, "-100% + 20px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_background_exit_animation_pop_offset2": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 20px" ],
    // 끝 값
    "to": [ 0, "100% - 20px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_background_entrance_animation_push_offset1": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 20px" ],
    // 끝 값
    "to": [ 0, "-100% + 20px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_background_entrance_animation_push_offset2": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim1",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 20px" ],
    // 끝 값
    "to": [ 0, "100% - 20px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_background_entrance_animation_pop_offset1": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 20px" ],
    // 끝 값
    "to": [ 0, "-100% + 20px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_background_entrance_animation_pop_offset2": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_screenheader_ingame_anim2",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 20px" ],
    // 끝 값
    "to": [ 0, "100% - 20px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_background_exit_animation_push_offset_ingame1": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 20px" ],
    // 끝 값
    "to": [ 0, "-100% - 4px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_background_exit_animation_push_offset_ingame2": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 20px" ],
    // 끝 값
    "to": [ 0, "100% + 4px" ],
    // ?? ??
    "play_event": "screen.exit_push",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_background_exit_animation_pop_offset_ingame1": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% + 20px" ],
    // 끝 값
    "to": [ 0, "-100% - 4px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_background_exit_animation_pop_offset_ingame2": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_exit",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% - 20px" ],
    // 끝 값
    "to": [ 0, "100% + 4px" ],
    // ?? ??
    "play_event": "screen.exit_pop",
    // ?? ??
    "end_event": "screen.exit_end"
  },

  // ???/?? ??
  "header_background_entrance_animation_push_offset_ingame1": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% - 4px" ],
    // 끝 값
    "to": [ 0, "-100% + 20px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_background_entrance_animation_push_offset_ingame2": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim1)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% + 4px" ],
    // 끝 값
    "to": [ 0, "100% - 20px" ],
    // ?? ??
    "play_event": "screen.entrance_push",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_background_entrance_animation_pop_offset_ingame1": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "-100% - 4px" ],
    // 끝 값
    "to": [ 0, "-100% + 20px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },

  // ???/?? ??
  "header_background_entrance_animation_pop_offset_ingame2": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_screenheader_ingame_anim2)",
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "$rainbowpie_ui_animation_header_transition_effect_entrance",
    // 걸리는 시간(초)
    "duration": "$rainbowpie_ui_animation_transition_time",
    // 시작 값
    "from": [ 0, "100% + 4px" ],
    // 끝 값
    "to": [ 0, "100% - 20px" ],
    // ?? ??
    "play_event": "screen.entrance_pop",
    // ?? ??
    "end_event": "screen.entrance_end"
  },


  // 다른 템플릿을 가져와서 확장(상속)
  "background_entrance_animation_push_fade_long@rainbowpie_ui_animations.background_entrance_animation_push_fade": {
    // 완전히 제거(공간도 없음)
    "ignored": "$rainbowpie_localui_background_longer_anim",
    // 시작 값
    "from": 0.0
  },

  // ???/?? ??
  "background_entrance_animation_push_fade": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_background_longer_anim)",
    // 투명도 변화
    "anim_type": "alpha",
    // 걸리는 시간(초)
    "duration": "$transition_time_pop",
    // 시작 값
    "from": 1.0,
    // 끝 값
    "to": 0.0,
    // ?? ??
    "play_event": "screen.entrance_push"
  },

  // ???/?? ??
  "background_entrance_animation_pop_fade": {
    // 투명도 변화
    "anim_type": "alpha",
    // 걸리는 시간(초)
    "duration": "$transition_time_pop",
    // 시작 값
    "from": 1.0,
    // 끝 값
    "to": 0.0,
    // ?? ??
    "play_event": "screen.entrance_pop"
  },

  // ???/?? ??
  "background_exit_animation_push_fade": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": "$loading_bar_transition",
    // 시작 값
    "from": 1.0,
    // 끝 값
    "to": 1.0,
    // ?? ??
    "play_event": "screen.exit_push"
  },

  // ???/?? ??
  "background_exit_animation_pop_fade": {
    // 투명도 변화
    "anim_type": "alpha",
    // 걸리는 시간(초)
    "duration": "$transition_time_pop",
    // 시작 값
    "from": 1.0,
    // 끝 값
    "to": 0.0,
    // ?? ??
    "play_event": "screen.exit_pop"
  }
}
```








### 기본
rainbowpie_ui_controls.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_controls.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_controls",

  // ???/?? ??
  "scroll_background_image": {
    // 이미지 표시
    "type": "image",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "textures/ui/recipe_book_pane_bg"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "scroll_indent_image@common.scroll_indent_image": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_scrollbar_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_scrollbar_background_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "scrollbar_box_image@common.scrollbar_box_image": {
    // 가로/세로 크기
    "size": [ 3, "100%" ],
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_scrollbar_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_scrollbar_alpha"
  },

  // ???/?? ??
  "RainbowPieHeaderMask": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // ?? ????
    "clips_children": true,
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 완전히 제거(공간도 없음)
    "ignored": "($is_pregame)",
    // 오버라이드 가능한 변수
    "$BlurLayer|default": -50,
    // 겹치는 순서(숫자 클수록 위)
    "layer": "$BlurLayer",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "mask_layer@mintui_background.background_mask": {
          // 오버라이드 가능한 변수
          "$background_offset": [ 0, "-100% + 20px" ],
          // 오버라이드 가능한 변수
          "$background_children_offset": [ 0, "100% - 20px" ],
          // 오버라이드 가능한 변수
          "$background_layer": 2,
          // 오버라이드 가능한 변수
          "$background_anims": "$HeaderBlurAnims",
          // 오버라이드 가능한 변수
          "$HeaderBlurAnims|default": [
            "@rainbowpie_ui_animations.header_background_exit_animation_push_offset1",
            "@rainbowpie_ui_animations.header_background_exit_animation_pop_offset1",
            "@rainbowpie_ui_animations.header_background_entrance_animation_push_offset1",
            "@rainbowpie_ui_animations.header_background_entrance_animation_pop_offset1",
            "@rainbowpie_ui_animations.header_background_exit_animation_push_offset_ingame1",
            "@rainbowpie_ui_animations.header_background_exit_animation_pop_offset_ingame1",
            "@rainbowpie_ui_animations.header_background_entrance_animation_push_offset_ingame1",
            "@rainbowpie_ui_animations.header_background_entrance_animation_pop_offset_ingame1"
          ],
          // 오버라이드 가능한 변수
          "$background_children_anims": "$HeaderBlur2Anims",
          // 오버라이드 가능한 변수
          "$HeaderBlur2Anims|default": [
            "@rainbowpie_ui_animations.header_background_exit_animation_push_offset2",
            "@rainbowpie_ui_animations.header_background_exit_animation_pop_offset2",
            "@rainbowpie_ui_animations.header_background_entrance_animation_push_offset2",
            "@rainbowpie_ui_animations.header_background_entrance_animation_pop_offset2",
            "@rainbowpie_ui_animations.header_background_exit_animation_push_offset_ingame2",
            "@rainbowpie_ui_animations.header_background_exit_animation_pop_offset_ingame2",
            "@rainbowpie_ui_animations.header_background_entrance_animation_push_offset_ingame2",
            "@rainbowpie_ui_animations.header_background_entrance_animation_pop_offset_ingame2"
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "RainbowPieHeaderBlur": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // ?? ????
    "clips_children": true,
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $is_pregame)",
    // 보이기/숨기기(공간 유지)
    "visible": "$rainbowpie_ui_feature_background_blur",
    // 오버라이드 가능한 변수
    "$BlurLayer|default": 10,
    // 겹치는 순서(숫자 클수록 위)
    "layer": "$BlurLayer",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "blur_layer@mintui_background.background_blur": {
          // 오버라이드 가능한 변수
          "$background_offset": [ 0, "-100% + 20px" ],
          // 오버라이드 가능한 변수
          "$background_children_offset": [ 0, "100% - 20px" ],
          // 오버라이드 가능한 변수
          "$background_layer": 2,
          // 오버라이드 가능한 변수
          "$background_anims": "$HeaderBlurAnims",
          // 오버라이드 가능한 변수
          "$HeaderBlurAnims|default": [
            "@rainbowpie_ui_animations.header_background_exit_animation_push_offset1",
            "@rainbowpie_ui_animations.header_background_exit_animation_pop_offset1",
            "@rainbowpie_ui_animations.header_background_entrance_animation_push_offset1",
            "@rainbowpie_ui_animations.header_background_entrance_animation_pop_offset1",
            "@rainbowpie_ui_animations.header_background_exit_animation_push_offset_ingame1",
            "@rainbowpie_ui_animations.header_background_exit_animation_pop_offset_ingame1",
            "@rainbowpie_ui_animations.header_background_entrance_animation_push_offset_ingame1",
            "@rainbowpie_ui_animations.header_background_entrance_animation_pop_offset_ingame1"
          ],
          // 오버라이드 가능한 변수
          "$background_children_anims": "$HeaderBlur2Anims",
          // 오버라이드 가능한 변수
          "$HeaderBlur2Anims|default": [
            "@rainbowpie_ui_animations.header_background_exit_animation_push_offset2",
            "@rainbowpie_ui_animations.header_background_exit_animation_pop_offset2",
            "@rainbowpie_ui_animations.header_background_entrance_animation_push_offset2",
            "@rainbowpie_ui_animations.header_background_entrance_animation_pop_offset2",
            "@rainbowpie_ui_animations.header_background_exit_animation_push_offset_ingame2",
            "@rainbowpie_ui_animations.header_background_exit_animation_pop_offset_ingame2",
            "@rainbowpie_ui_animations.header_background_entrance_animation_push_offset_ingame2",
            "@rainbowpie_ui_animations.header_background_entrance_animation_pop_offset_ingame2"
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_uioverride_back_button@common.back_button": {
    // 오버라이드 가능한 변수
    "$button_state_panel": "rainbowpie_ui_controls.rainbowpie_uioverride_borderless_form_fitting_button_panel",
    // 오버라이드 가능한 변수
    "$button_content": "rainbowpie_ui_controls.back_button_content",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_backbutton_text_color|default": "$rainbowpie_ui_theme_topbar_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [],
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$touch",
        // 오버라이드 가능한 변수
        "$size": [ "100%c + 6px", "100%c + 6px" ],
        // 오버라이드 가능한 변수
        "$button_panel_offset": [ 3, 3 ]
      },
      {
        // 이 조건이 맞으면 적용
        "requires": "(not $touch)",
        // 오버라이드 가능한 변수
        "$size": [ "100%c", "100%c" ]
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_uioverride_borderless_form_fitting_button_panel@common_buttons.borderless_form_fitting_button_panel": {
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "($button_image = 'common_buttons.background_button_image')",
        // 오버라이드 가능한 변수
        "$button_image": "rainbowpie_ui_controls.background_button_image"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "$button_image@$button_image": {
          // 가로/세로 크기
          "size": [ "100%c + 4px", "100%c" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "button_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "100%c", "100%c" ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "$button_type_panel@$button_type_panel": {
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 3 ],
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
  },

  // ???/?? ??
  "background_button_image": {
    // 이미지 표시
    "type": "image",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 사용할 이미지 경로
    "texture": "textures/ui/button_borderless_imagelesshoverbg",
    // ???
    "alpha": 0.3
  },

  // ???/?? ??
  "back_button_content": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "100%c", 16 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 2 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "chevron_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "left_chevron@common.chevron_image": {
                // 사용할 이미지 경로
                "texture": "textures/ui/chevron_left",
                // 기준점에서 이동하는 거리
                "offset": [ 0, -1 ],
                // ?? (R,G,B,A)
                "color": "$rainbowpie_localui_backbutton_text_color"
              }
            }
          ]
        }
      },
      {
        // ???/?? ??
        "padding1": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 4, "100%" ]
        }
      },
      {
        // ???/?? ??
        "label_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%c", "100%c" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "label": {
                // 글자 표시
                "type": "label",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 2,
                // 보여줄 글자
                "text": "$button_text",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_localui_backbutton_text_color",
                // ??
                "font_type": "$rainbowpie_ui_theme_global_font_name",
                // ?? ?? ?
                "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
                // ?? ?? ?
                "font_size": "$button_font_size",
                // 오버라이드 가능한 변수
                "$button_font_scale_factor|default": 1.0,
                // ?? ?? ??
                "font_scale_factor": "$button_font_scale_factor",
                // 오버라이드 가능한 변수
                "$button_font_size|default": "normal",
                // 기준점에서 이동하는 거리
                "offset": [ 0, -2 ],
                // 오버라이드 가능한 변수
                "$anchor|default": "center",
                // 기준점(어디에서 시작할지)
                "anchor_from": "$anchor",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "$anchor",
                // ?? ??
                "shadow": false,
                // 오버라이드 가능한 변수
                "$button_text_size|default": [ "default", "default" ],
                // 가로/세로 크기
                "size": "$button_text_size",
                // 오버라이드 가능한 변수
                "$button_text_max_size|default": [ "100%", 10 ], // Per design buttons are single line text only
                // ?? ?? ?
                "max_size": "$button_text_max_size",
                // 오버라이드 가능한 변수
                "$text_alignment|default": "center",
                // ?? ??
                "text_alignment": "$text_alignment",
                // 오버라이드 가능한 변수
                "$tts_section_header|default": "",
                // ?? ??
                "tts_section_header": "$tts_section_header",
                // 게임 값과 연결하는 규칙 목록
                "bindings": "$rainbowpie_localui_backbutton_title_bindings",
                // 오버라이드 가능한 변수
                "$rainbowpie_localui_backbutton_title_bindings|default": [
                  {
                    // 바인딩 종류(변수로 관리되는 경우도 있음)
                    "binding_type": "$button_text_binding_type",
                    // ?? ???
                    "binding_condition": "$button_binding_condition",
                    // 목록 이름
                    "binding_collection_name": "$button_text_grid_collection_name",
                    // 가져올 값 이름
                    "binding_name": "$button_text",
                    // 가져온 값을 다른 속성으로 연결
                    "binding_name_override": "$button_text"
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
  "back_content_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "left_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "left_middle",
    // 오버라이드 가능한 변수
    "$back_button_text|default": "",
    // 오버라이드 가능한 변수
    "$back_button_text_binding_type|default": "none",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenheader_title_bindings|default": [],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "back_button@rainbowpie_ui_controls.rainbowpie_uioverride_back_button": {
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 오버라이드 가능한 변수
          "$button_text_binding_type": "$back_button_text_binding_type",
          // 오버라이드 가능한 변수
          "$button_text": "$back_button_text",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_backbutton_title_bindings": "$rainbowpie_localui_screenheader_title_bindings"
        }
      }
    ]
  }
}
```








### 기본
rainbowpie_ui_inventory_and_container.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_inventory_and_container.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_inventory_and_container",

  // ???/?? ??
  "cell_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "cell_image@rainbowpie_ui_common.cell_image": {}
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

  // 다른 템플릿을 가져와서 확장(상속)
  "container_item@common.container_item": {
    // 가로/세로 크기
    "size": [ "100%y", "100%" ],
    // 오버라이드 가능한 변수
    "$collection_index|default": -1,
    // 오버라이드 가능한 변수
    "$cell_image_size|default": [ "100%y", "100%" ],
    // 오버라이드 가능한 변수
    "$item_renderer_panel_size|default": [ "100%y", "100%" ],
    // 오버라이드 가능한 변수
    "$item_renderer_size|default": [ "100%y", "88.89%" ],
    // 오버라이드 가능한 변수
    "$background_images|default": "rainbowpie_ui_inventory_and_container.cell_panel"
  },

  // ???/?? ??
  "container_item_stack": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 목록 이름
    "collection_name": "$item_collection_name",

    // 오버라이드 가능한 변수
    "$item_collection_name|default": "",
    // 오버라이드 가능한 변수
    "$collection_index_start|default": 0,

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_0@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 0)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_1@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 1)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_2@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 2)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_3@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 3)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_4@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 4)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_5@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 5)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_6@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 6)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_7@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 7)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "container_item_8@rainbowpie_ui_inventory_and_container.container_item": {
          // 오버라이드 가능한 변수
          "$collection_index": "($collection_index_start + 8)",
          // ?? ??
          "collection_index": "$collection_index"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "hotbar_grid_template@rainbowpie_ui_inventory_and_container.container_item_stack": {
    // 오버라이드 가능한 변수
    "$item_collection_name": "hotbar_items",
    // 오버라이드 가능한 변수
    "$collection_index_start": 0
  },

  // ???/?? ??
  "inventory_panel_bottom_half": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "1@rainbowpie_ui_inventory_and_container.container_item_stack": {
          // 가로/세로 크기
          "size": [ "100%", "33.33333333333333%" ],
          // 오버라이드 가능한 변수
          "$item_collection_name": "inventory_items",
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
          "$item_collection_name": "inventory_items",
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
          "$item_collection_name": "inventory_items",
          // 오버라이드 가능한 변수
          "$collection_index_start": 18
        }
      }
    ]
  }
}
```








### 기본
rainbowpie_ui_module_list.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_module_list.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_module_list",

  // ???/?? ??
  "module_variable_display_button_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "control_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100% - 4px", "100%cm" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "button_text@rainbowpie_ui_common.text_label": {
                // 가로/세로 크기
                "size": [ "default", 10 ],
                // ?? ?? ?
                "max_size": [ "100% - 10px", 10 ],
                // 보여줄 글자
                "text": "rainbowpie.ui.module.moduleVariables",
                // ?? (R,G,B,A)
                "color": "$text_color",
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
              "middle_padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "fill", 0 ]
              }
            },
            {
              // ???/?? ??
              "chevron_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 10, 10 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // ???/?? ??
                    "chevron_down": {
                      // 이미지 표시
                      "type": "image",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/chevron_white_down",
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 가로/세로 크기
                      "size": [ 8, 8 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 보이기/숨기기(공간 유지)
                      "visible": false,
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
                    "chevron_up": {
                      // 이미지 표시
                      "type": "image",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 사용할 이미지 경로
                      "texture": "textures/ui/chevron_white_up",
                      // ?? (R,G,B,A)
                      "color": "$text_color",
                      // 가로/세로 크기
                      "size": [ 8, 8 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 보이기/숨기기(공간 유지)
                      "visible": false,
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
          ]
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "module_variable_display_toggle@common_toggles.light_ui_toggle": {
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
    "$button_content": "rainbowpie_ui_module_list.module_variable_display_button_content",

    // 오버라이드 가능한 변수
    "$button_type_panel": "common_buttons.new_ui_binding_button_label",
    // 오버라이드 가능한 변수
    "$button_text_binding_type": "none",
    // 오버라이드 가능한 변수
    "$button_binding_condition": "none",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "none",
    // 오버라이드 가능한 변수
    "$button_text": "VARIABLES",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$radio_toggle_group": false,
    // 오버라이드 가능한 변수
    "$toggle_name": "rainbowpie_settings_module_variable_display_toggle",
    // 오버라이드 가능한 변수
    "$toggle_group_default_selected": 0,

    // 오버라이드 가능한 변수
    "$toggle_group_forced_index": 0,

    // 오버라이드 가능한 변수
    "$toggle_view_binding_name": ""
  },

  // ???/?? ??
  "module_variable_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 4px" ],
    // 오버라이드 가능한 변수
    "$variable_name|default": false,
    // 오버라이드 가능한 변수
    "$variable_name_display|default": "variable_displayname",
    // 오버라이드 가능한 변수
    "$variable_description|default": "",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "control_stack_panel": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "top_driven@rainbowpieui_settings_common.driven": {}
            },
            {
              // ???/?? ??
              "padding_0": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 0, 2 ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "label_1@rainbowpie_ui_common.text_label": {
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100%", "default" ],
                // 오버라이드 가능한 변수
                "$value_color_format_symbol": "f",
                // 오버라이드 가능한 변수
                "$value_string_formatted": "('\"' + $variable_name + '\"')",
                // 보여줄 글자
                "text": "('§e$§f' + $variable_name_display + ' = ' + '§' + $value_color_format_symbol + $value_string_formatted)",
                // 조건에 따라 변수 값을 바꾸기
                "variables": [
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($value_string_formatted = 'true')",
                    // 오버라이드 가능한 변수
                    "$value_color_format_symbol": "a"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($value_string_formatted = 'false')",
                    // 오버라이드 가능한 변수
                    "$value_color_format_symbol": "c"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "(('1' + $variable_name + 1) > 10)",
                    // 오버라이드 가능한 변수
                    "$value_color_format_symbol": "e"
                  },
                  {
                    // 이 조건이 맞으면 적용
                    "requires": "($variable_name + '1' - 1 < -10)",
                    // 오버라이드 가능한 변수
                    "$value_color_format_symbol": "e"
                  }
                ]
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "label_2@rainbowpie_ui_common.text_label": {
                // 완전히 제거(공간도 없음)
                "ignored": "($variable_description = '')",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 가로/세로 크기
                "size": [ "100%", "default" ],
                // 보여줄 글자
                "text": "$variable_description",
                // ?? (R,G,B,A)
                "color": [ 0.776, 0.776, 0.776 ]
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "module_item": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c + 2px" ],
    // 오버라이드 가능한 변수
    "$module_icon_texture|default": "($rainbowpie_ui_path_home + '/icon/module')",
    // 오버라이드 가능한 변수
    "$module_name|default": "module_name",
    // 오버라이드 가능한 변수
    "$module_version|default": "module_version",
    // 오버라이드 가능한 변수
    "$module_author|default": "module_author",
    // 오버라이드 가능한 변수
    "$module_description|default": "module_description",
    // 오버라이드 가능한 변수
    "$module_state_check|default": false,
    // 오버라이드 가능한 변수
    "$module_max_engine_version|default": "999999",
    // 오버라이드 가능한 변수
    "$module_max_engine_patch_version|default": "999999",
    // 오버라이드 가능한 변수
    "$module_min_engine_version|default": "0",
    // 오버라이드 가능한 변수
    "$module_min_engine_patch_version|default": "0",
    // 오버라이드 가능한 변수
    "$module_variable_display|default": false,
    // 오버라이드 가능한 변수
    "$module_variables|default": [],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.text_background": {
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 가로/세로 크기
          "size": [ "100%", "100%cm" ],
          // ?? ?? ?
          "min_size": [ "100%", 50 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "icon_image": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 50, 50 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 사용할 이미지 경로
                "texture": "$module_icon_texture"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "variable_display_button@rainbowpie_ui_module_list.module_variable_display_toggle": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $module_variable_display)",
                // 가로/세로 크기
                "size": [ 60, 20 ],
                // 기준점에서 이동하는 거리
                "offset": [ -2, 28 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 20,
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_right",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_right",
                // 오버라이드 가능한 변수
                "$toggle_group_forced_index": 1000,
                // 오버라이드 가능한 변수
                "$toggle_view_binding_name": "('module_variable_display_' + $module_name)"
              }
            },
            {
              // ???/?? ??
              "control_stack_panel": {
                // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                "type": "stack_panel",
                // 가로/세로 크기
                "size": [ "100% - 114px", "100%c" ],
                // 기준점에서 이동하는 거리
                "offset": [ 52, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 이 안에 들어가는 부품 목록
                "controls": [
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
                    // 다른 템플릿을 가져와서 확장(상속)
                    "label_1@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "100%", 15 ],
                      // 보여줄 글자
                      "text": "('\"' + $module_name + ' [' + $module_state + ']' + $module_update_state + '\"')",
                      // ?? ?? ??
                      "font_scale_factor": 1.5,
                      // 오버라이드 가능한 변수
                      "$module_state|default": "§cINACTIVE§r",
                      // 오버라이드 가능한 변수
                      "$module_update_state|default": "",
                      // 조건에 따라 변수 값을 바꾸기
                      "variables": [
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "$module_state_check",
                          // 오버라이드 가능한 변수
                          "$module_state": "§aACTIVE§r"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "(($module_max_engine_version < $rainbowpieui_engine_version) or ($module_max_engine_patch_version < $rainbowpieui_patch_version))",
                          // 오버라이드 가능한 변수
                          "$module_update_state": " [§eNEEDUPDATE§r]"
                        },
                        {
                          // 이 조건이 맞으면 적용
                          "requires": "(($module_min_engine_version > $rainbowpieui_engine_version) or ($module_min_engine_patch_version > $rainbowpieui_patch_version))",
                          // 오버라이드 가능한 변수
                          "$module_update_state": " [§cUNSUPPORTED§r]"
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
                      "size": [ 0, 1 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "label_2@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "100%", 10 ],
                      // 보여줄 글자
                      "text": "('\"' + $module_version + ', §o§l' + $module_author + '\"')"
                    }
                  },
                  {
                    // ???/?? ??
                    "padding_2": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, 1 ]
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "label_3@rainbowpie_ui_common.text_label": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 1,
                      // 가로/세로 크기
                      "size": [ "100% - 44px", "default" ],
                      // 보여줄 글자
                      "text": "('\"' + $module_description + '\"')"
                    }
                  },
                  {
                    // ???/?? ??
                    "padding_3": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, 1 ]
                    }
                  },
                  {
                    // ???/?? ??
                    "padding_4": {
                      // 패널: 다른 부품을 담는 바닥판
                      "type": "panel",
                      // 가로/세로 크기
                      "size": [ 0, 4 ],
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $module_variable_display)",
                      // 보이기/숨기기(공간 유지)
                      "visible": false,
                      // 오버라이드 가능한 변수
                      "$toggle_view_binding_name": "('module_variable_display_' + $module_name)",
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
                  },
                  {
                    // ???/?? ??
                    "variable_panel": {
                      // 줄맞춤 컨테이너: 가로/세로로 자동 배치
                      "type": "stack_panel",
                      // 가로/세로 크기
                      "size": [ "100%", "100%c" ],
                      // 이 안에 들어가는 부품 목록
                      "controls": "$module_variables",
                      // 완전히 제거(공간도 없음)
                      "ignored": "(not $module_variable_display)",
                      // 보이기/숨기기(공간 유지)
                      "visible": false,
                      // 오버라이드 가능한 변수
                      "$toggle_view_binding_name": "('module_variable_display_' + $module_name)",
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
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "module_list_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ]
  }
}
```








### 기본
rainbowpie_ui_theme_preview.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_theme_preview.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_theme_preview",

  // ???/?? ??
  "theme_preview": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "background_preview": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ 230, "100%" ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "background@mintui_background.background_fullscreen": {
                // 완전히 제거(공간도 없음)
                "ignored": false,
                // 오버라이드 가능한 변수
                "$background_layer": 1
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_top@mintui_background.background_blur": {
                // 오버라이드 가능한 변수
                "$background_ingame": true,
                // 오버라이드 가능한 변수
                "$background_offset": [ 0, "-100% + 10px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ 0, "100% - 10px" ],
                // 오버라이드 가능한 변수
                "$background_layer": 2
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "blur_layer_bottom@mintui_background.background_blur": {
                // 오버라이드 가능한 변수
                "$background_ingame": true,
                // 오버라이드 가능한 변수
                "$background_offset": [ 0, "100% - 6px" ],
                // 오버라이드 가능한 변수
                "$background_children_offset": [ 0, "-100% + 6px" ],
                // 오버라이드 가능한 변수
                "$background_layer": 2
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "title_image@rainbowpie_ui_common.title_text": {
                // 오버라이드 가능한 변수
                "$title_text_scale": 1.8,
                // 기준점에서 이동하는 거리
                "offset": [ 2, 8 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_left",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_left",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3
              }
            },
            {
              // ???/?? ??
              "default_fake_button_1": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 60, 9 ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, -20 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_button_background_default_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_button_background_default_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_1@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 보여줄 글자
                      "text": "Play",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_text_default_color"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "hover_fake_button_2": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 60, 9 ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, -10 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_button_background_hover_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_button_background_hover_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_1@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 보여줄 글자
                      "text": "Settings",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_text_hover_color"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "default_fake_button_3": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 60, 9 ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_button_background_default_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_button_background_default_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_1@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 보여줄 글자
                      "text": "Marketplace",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_text_default_color"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "default_fake_button_4": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 60, 9 ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, 10 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_button_background_default_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_button_background_default_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_1@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 보여줄 글자
                      "text": "Music",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_text_default_color"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "default_fake_button_5": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 60, 9 ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, 20 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_button_background_default_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_button_background_default_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_1@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 보여줄 글자
                      "text": "Achievements",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_button_text_default_color"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "red_fake_button_6": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 60, 9 ],
                // 기준점에서 이동하는 거리
                "offset": [ 2, 30 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "left_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": [ 0.85098, 0.301961, 0.301961 ],
                // ???
                "alpha": 0.5,
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_1@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "center",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "center",
                      // 보여줄 글자
                      "text": "Exit",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": [ 1.0, 1.0, 1.0 ]
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "top_panel": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%", 10 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_topbar_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_topbar_background_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 6,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_1@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, 0 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 보여줄 글자
                      "text": "Theme Preview",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_topbar_text_color"
                    }
                  }
                ]
              }
            },
            {
              // ???/?? ??
              "bottom_panel": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%", 6 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "bottom_middle",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_text_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_text_background_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 6,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_1@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ 0.5, -0.5 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "left_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "left_middle",
                      // 보여줄 글자
                      "text": "Rainbow Pie UI Theme Preview",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_text_text_color"
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "mini_text_2@rainbowpie_ui_common.text_label_notheme": {
                      // 가로/세로 크기
                      "size": [ "default", 6 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ -0.5, -0.5 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "right_middle",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "right_middle",
                      // 보여줄 글자
                      "text": "v1.19.70",
                      // ?? ?? ??
                      "font_scale_factor": 0.6,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_ui_theme_text_text_color"
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
verified_pack.json
RainbowPie UI · 기본



필요한 부분만 참고해서 가져가세요.



```
// 예제: verified_pack.json
// 분류: RainbowPie UI / 기본
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpieui_verified_pack",

  // 다른 템플릿을 가져와서 확장(상속)
  "verified_pack_list@rainbowpieui_manifest_validation.verified_pack_list_panel": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_packverifiy_item": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "rainbowpie@rainbowpieui_manifest_validation.verified_pack_item": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packuuid": "$mintui_pack_uuid",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packname": "Rainbow Pie UI",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packauther": "Sunny Pokie"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "old_rainbowpie@rainbowpieui_manifest_validation.verified_pack_item": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packuuid": "2a6c2264-0401-4cd8-aad8-824fa7672084",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packname": "Rainbow Pie UI (Old)",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packauther": "MintCoolMC"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dabuui@rainbowpieui_manifest_validation.verified_pack_item": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packuuid": "4d24c49f-6893-408d-88d7-99b8cea7dce3",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packname": "护眼大补丸",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packauther": "黑山大叔 橘猫sama"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "verified_pack_description@rainbowpieui_manifest_validation.verified_pack_description_panel": {
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "rainbowpie@rainbowpieui_manifest_validation.verified_pack_description_item": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packuuid": "$mintui_pack_uuid",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packdesc": "Rainbow Pie UI\nAuthor: §bMintraspberry Cool §r(Aka. §dSunny Pokie§r)\nWebsite: §ehttps://mintraspberry.cool/rainbowpieui§r\nGitHub: §ehttps://github.com/MintCoolMC/MCBE_RainbowPieUI2§r\nSupport this project: §ehttps://mintraspberry.cool/donate§r"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "old_rainbowpie@rainbowpieui_manifest_validation.verified_pack_description_item": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packuuid": "2a6c2264-0401-4cd8-aad8-824fa7672084",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packdesc": "Rainbow Pie UI By Mintraspberry Cool\n§cDO NOT USE WITH NEW PACK!!!§r\nWebsite: §ehttps://mintraspberry.cool/rainbowpieui"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dabuui@rainbowpieui_manifest_validation.verified_pack_description_item": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packuuid": "4d24c49f-6893-408d-88d7-99b8cea7dce3",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_packverifiy_packdesc": "§b护眼大补丸§r\nB站作者@黑山大叔 @橘猫sama\n§7(此资源包与Rainbow Pie UI互相兼容)§r\n§7(This resource pack is compatible with Rainbow Pie ​​UI)§r"
        }
      }
    ]
  }
}
```












### common


### common
rainbowpie_ui_button.json
RainbowPie UI · common



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_button.json
// 분류: RainbowPie UI / common
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_button",

  // ???/?? ??
  "glint_border_base": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // ?? ????
    "clips_children": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_glint_size|default": [ 48, 48 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_glint_alpha|default": 0.5,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_glint_layer|default": 1,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "glint_dot": {
          // 마우스/커서 따라다니는 패널
          "type": "input_panel",
          // 가로/세로 크기
          "size": "$rainbowpie_localui_glint_size",
          // 기준점에서 이동하는 거리
          "offset": [ -1024, -1024 ],
          // ?? ??
          "consume_hover_events": false,
					// ?? ??
					"follows_cursor": true,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_99d9851a)",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "glint_texture": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // 사용할 이미지 경로
                "texture": "($rainbowpie_ui_path_home + '/glint')",
                // ???
                "alpha": "$rainbowpie_localui_glint_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "$rainbowpie_localui_glint_layer"
              }
            }
          ]
        }
      }
    ]
  },

  // ???/?? ??
  "rainbowpie_ui_button_default": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",

    // Rainbow Pie UI Variables
    "$rainbowpie_localui_button_text_default_color|default": "$rainbowpie_ui_theme_button_text_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_hover_color|default": "$rainbowpie_ui_theme_button_text_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_pressed_color|default": "$rainbowpie_ui_theme_button_text_pressed_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_locked_color|default": "$rainbowpie_ui_theme_button_text_locked_color",

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_color|default": "$rainbowpie_ui_theme_button_background_default_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_color|default": "$rainbowpie_ui_theme_button_background_hover_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_color|default": "$rainbowpie_ui_theme_button_background_pressed_color",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_color|default": "$rainbowpie_ui_theme_button_background_locked_color",

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_alpha|default": "$rainbowpie_ui_theme_button_background_default_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_alpha|default": "$rainbowpie_ui_theme_button_background_hover_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_alpha|default": "$rainbowpie_ui_theme_button_background_pressed_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_alpha|default": "$rainbowpie_ui_theme_button_background_locked_alpha",

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_default_offset|default": "$rainbowpie_ui_theme_button_default_offset",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_offset|default": "$rainbowpie_ui_theme_button_hover_offset",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_pressed_offset|default": "$rainbowpie_ui_theme_button_pressed_offset",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_locked_offset|default": "$rainbowpie_ui_theme_button_locked_offset",

    // Vanilla Variables
    "$button_image_visible|default": true,
    // 오버라이드 가능한 변수
    "$button_image_size|default": [ "100% - 1px", "100% - 1px" ],

    // 오버라이드 가능한 변수
    "$default_state|default": false,
    // 오버라이드 가능한 변수
    "$hover_state|default": false,
    // 오버라이드 가능한 변수
    "$pressed_state|default": false,
    // 오버라이드 가능한 변수
    "$locked_state|default": false,

    // Rainbow Pie UI Default Variables
    "$rainbowpie_localui_button_both_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_color|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_color|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_alpha|default": 1.0,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_panel_size|default": [ "default", "default" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_border_enabled|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_enabled|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text|default": "HoverText",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_bindings|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_size|default": [ "100%c + 8px", "100%c + 5px" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_offset|default": [ 10, -10 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_desc_text_anchor|default": "top_left",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_border_layer|default": 50,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_hover_border_always_visible|default": false,

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hover@common.focus_border_white": {
          // 가로/세로 크기
          "size": "$button_image_size",
          // 완전히 제거(공간도 없음)
          "ignored": "(((not $rainbowpie_localui_button_border_enabled) or (not $hover_state)) and (not $rainbowpie_localui_button_hover_border_always_visible))",
          // ???
          "alpha": 0.3,
          // 겹치는 순서(숫자 클수록 위)
          "layer": "$rainbowpie_localui_button_hover_border_layer"
        }
      },
      {
        // ???/?? ??
        "button_border_glint": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$button_image_size",
          // 완전히 제거(공간도 없음)
          "ignored": "(((not $rainbowpie_localui_button_border_enabled) and (not $rainbowpie_localui_button_hover_border_always_visible)) or (not $rainbowpie_ui_flag_99d9851a))",
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
                "size": [ "100% - 2px", "100% - 2px" ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "center",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "center",
                // 겹치는 순서(숫자 클수록 위)
                "layer": "($rainbowpie_localui_button_hover_border_layer - ($rainbowpie_localui_button_hover_border_layer * 2))"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "top@rainbowpie_ui_button.glint_border_base": {
                // 가로/세로 크기
                "size": [ "100% - 2px", 1 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "top_middle"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "bottom@rainbowpie_ui_button.glint_border_base": {
                // 가로/세로 크기
                "size": [ "100% - 2px", 1 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "bottom_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "bottom_middle"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "left@rainbowpie_ui_button.glint_border_base": {
                // 가로/세로 크기
                "size": [ 1, "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 기준점(어디에서 시작할지)
                "anchor_from": "left_middle",
								// 붙일 위치(어디에 놓을지)
								"anchor_to": "left_middle"
              }
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "right@rainbowpie_ui_button.glint_border_base": {
                // 가로/세로 크기
                "size": [ 1, "100%" ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
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
        "button_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$rainbowpie_localui_button_panel_size",

          // 조건에 따라 변수 값을 바꾸기
          "variables": [
            {
              // 이 조건이 맞으면 적용
              "requires": "$default_state",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_text_color": "$rainbowpie_localui_button_text_default_color",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_color": "$rainbowpie_localui_button_default_color",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_alpha": "$rainbowpie_localui_button_default_alpha",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_offset": "$rainbowpie_localui_button_default_offset"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$hover_state",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_text_color": "$rainbowpie_localui_button_text_hover_color",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_color": "$rainbowpie_localui_button_hover_color",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_alpha": "$rainbowpie_localui_button_hover_alpha",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_offset": "$rainbowpie_localui_button_hover_offset"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$pressed_state",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_text_color": "$rainbowpie_localui_button_text_pressed_color",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_color": "$rainbowpie_localui_button_pressed_color",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_alpha": "$rainbowpie_localui_button_pressed_alpha",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_offset": "$rainbowpie_localui_button_pressed_offset"
            },
            {
              // 이 조건이 맞으면 적용
              "requires": "$locked_state",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_text_color": "$rainbowpie_localui_button_text_locked_color",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_color": "$rainbowpie_localui_button_locked_color",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_alpha": "$rainbowpie_localui_button_locked_alpha",
              // 오버라이드 가능한 변수
              "$rainbowpie_localui_button_offset": "$rainbowpie_localui_button_locked_offset"
            }
          ],

          // Rainbow Pie UI Override
          "$button_offset": "$rainbowpie_localui_button_offset",
          // 오버라이드 가능한 변수
          "$text_color": "$rainbowpie_localui_button_text_color",
          // 오버라이드 가능한 변수
          "$glyph_color": "$rainbowpie_localui_button_text_color",
          // 오버라이드 가능한 변수
          "$label_color": "$rainbowpie_localui_button_text_color",
          // 오버라이드 가능한 변수
          "$content_alpha": 1,

          // 이 안에 들어가는 부품 목록
          "controls": "$rainbowpie_localui_button_controls"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_text_button@rainbowpie_ui_button_default": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_size|default": [ "default", "default" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_alignment|default": "center",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_border_enabled|default": true,
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
          // 기준점에서 이동하는 거리
          "offset": "$rainbowpie_localui_button_both_offset",
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
        // 다른 템플릿을 가져와서 확장(상속)
        "button_desc@rainbowpie_ui_button.button_desc": {}
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
          // 기준점에서 이동하는 거리
          "offset": "$rainbowpie_localui_button_both_offset",

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
                    "button_text@rainbowpie_ui_common.text_label_notheme": {
                      // 보여줄 글자
                      "text": "$button_text",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_localui_button_text_color",
                      // 기준점에서 이동하는 거리
                      "offset": "$rainbowpie_localui_button_text_offset",
                      // 가로/세로 크기
                      "size": "$rainbowpie_localui_button_text_size",
                      // ?? ??
                      "text_alignment": "$rainbowpie_localui_button_text_alignment",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 바인딩 종류(변수로 관리되는 경우도 있음)
                          "binding_type": "$button_text_binding_type",
                          // ?? ???
                          "binding_condition": "$button_binding_condition",
                          // 목록 이름
                          "binding_collection_name": "$button_text_grid_collection_name",
                          // 가져올 값 이름
                          "binding_name": "$button_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "$button_text"
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
  "rainbowpie_ui_content_button@rainbowpie_ui_button_default": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_border_enabled|default": true,
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
          // 기준점에서 이동하는 거리
          "offset": "$rainbowpie_localui_button_both_offset",
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
        // 다른 템플릿을 가져와서 확장(상속)
        "button_desc@rainbowpie_ui_button.button_desc": {}
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
          // 기준점에서 이동하는 거리
          "offset": "$rainbowpie_localui_button_both_offset",

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
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_form_fitting_button@rainbowpie_ui_button_default": {
    // 가로/세로 크기
    "size": "$button_size_override",
    // ?? ?? ?
    "min_size": "$form_fitting_min_size",

    // 오버라이드 가능한 변수
    "$form_fitting_min_size|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_size_override|default": [ "100%c", "100%c" ],
    // 오버라이드 가능한 변수
    "$focus_border_size_override|default": [ "100%c + 2px", "100%c + 2px" ],
    // 오버라이드 가능한 변수
    "$button_image_size_override|default": [ "100%c + 2px", "100%c + 2px" ],
    // 오버라이드 가능한 변수
    "$button_content_size_override|default": [ "100%c + 6px", "100%c + 6px" ],

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_panel_size": [ "100%c", "100%c" ],
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
          "size": "$button_image_size_override",
          // ?? ?? ?
          "min_size": "$form_fitting_min_size",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_button_color",
          // ???
          "alpha": "$rainbowpie_localui_button_alpha",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "button_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_localui_button_offset",
                // 가로/세로 크기
                "size": "$button_content_size_override",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "content@$button_type_panel": {
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4
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
  "rainbowpie_ui_text_form_fitting_button@rainbowpie_ui_button_default": {
    // 가로/세로 크기
    "size": "$button_size_override",
    // ?? ?? ?
    "min_size": "$form_fitting_min_size",

    // 오버라이드 가능한 변수
    "$form_fitting_min_size|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$button_size_override|default": [ "100%c", "100%c" ],
    // 오버라이드 가능한 변수
    "$focus_border_size_override|default": [ "100%c + 2px", "100%c + 2px" ],
    // 오버라이드 가능한 변수
    "$button_image_size_override|default": [ "100%c + 2px", "100%c + 2px" ],
    // 오버라이드 가능한 변수
    "$button_content_size_override|default": [ "100%c + 6px", "100%c + 6px" ],

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_panel_size": [ "100%c", "100%c" ],

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_size|default": [ "default", "default" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_button_text_alignment|default": "center",
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
          "size": "$button_image_size_override",
          // ?? ?? ?
          "min_size": "$form_fitting_min_size",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_button_color",
          // ???
          "alpha": "$rainbowpie_localui_button_alpha",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "button_content": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 기준점에서 이동하는 거리
                "offset": "$rainbowpie_localui_button_offset",
                // 가로/세로 크기
                "size": "$button_content_size_override",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 3,
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "button_text@rainbowpie_ui_common.text_label_notheme": {
                      // 보여줄 글자
                      "text": "$button_text",
                      // ?? (R,G,B,A)
                      "color": "$rainbowpie_localui_button_text_color",
                      // 기준점에서 이동하는 거리
                      "offset": "$rainbowpie_localui_button_text_offset",
                      // 가로/세로 크기
                      "size": "$rainbowpie_localui_button_text_size",
                      // ?? ??
                      "text_alignment": "$rainbowpie_localui_button_text_alignment",
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4,
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        {
                          // 바인딩 종류(변수로 관리되는 경우도 있음)
                          "binding_type": "$button_text_binding_type",
                          // ?? ???
                          "binding_condition": "$button_binding_condition",
                          // 목록 이름
                          "binding_collection_name": "$button_text_grid_collection_name",
                          // 가져올 값 이름
                          "binding_name": "$button_text",
                          // 가져온 값을 다른 속성으로 연결
                          "binding_name_override": "$button_text"
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
  "button_desc": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 보이기/숨기기(공간 유지)
    "visible": "$hover_state",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_localui_button_desc_enabled)",
    // 가로/세로 크기
    "size": "$button_image_size",
    // 기준점에서 이동하는 거리
    "offset": "$rainbowpie_localui_button_both_offset",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "custom_hover_text": {
          // 클릭 가능한 버튼
          "type": "button",
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
                      "size": "$rainbowpie_localui_button_desc_text_size",
                      // 기준점에서 이동하는 거리
                      "offset": "$rainbowpie_localui_button_desc_text_offset",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "$rainbowpie_localui_button_desc_text_anchor",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "$rainbowpie_localui_button_desc_text_anchor",
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
                                  "text": "$rainbowpie_localui_button_desc_text",
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": "$rainbowpie_localui_button_desc_text_bindings"
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








### common
rainbowpie_ui_common.json
RainbowPie UI · common



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_common.json
// 분류: RainbowPie UI / common
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_common",

  // ???/?? ??
  "editable_label": {
    // 텍스트 입력칸
    "type": "edit_box",
    // 포커스 가능 여부
    "focus_enabled": true,
    // ???/?? ??
    "enabled_newline": true,
    // ?? ?? ?
    "max_length": 32500,
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_select",
        // 어떤 동작을 실행할지
        "to_button_id": "button.text_edit_box_selected",
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
        "to_button_id": "button.text_edit_box_selected",
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
        "to_button_id": "button.text_edit_box_selected",
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
        "to_button_id": "button.text_edit_box_deselected",
        // ?? ??
        "handle_select": false,
        // ?? ??
        "handle_deselect": true,
        // 입력 시점(pressed 등)
        "mapping_type": "global"
      },
      {
        // 어떤 동작을 실행할지
        "to_button_id": "button.text_edit_box_hovered",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      }
    ]
  },

  // ???/?? ??
  "item_renderer": {
    // 특수 렌더러(그라디언트/플레이어 등)
    "type": "custom",
    // 커스텀 렌더러 종류
    "renderer": "inventory_item_renderer",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 5
  },

  // ???/?? ??
  "cell_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // ???/?? ??
  "container_scroll_background_image": {
    // 이미지 표시
    "type": "image",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_cell_default_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_cell_default_alpha"
  },

  // ???/?? ??
  "dialog_background_common": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_background_opaque@rainbowpie_ui_common.dialog_background_common": {
    // "texture": "($rainbowpie_ui_path_home + '/r_white')"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "inventory_background@rainbowpie_ui_common.dialog_background_opaque": {
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_theme_inventory_background_enabled)",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_background_alpha",
    // 조건에 따라 변수 값을 바꾸기
    "variables": [
      {
        // 이 조건이 맞으면 적용
        "requires": "$rainbowpie_ui_flag_inventory_oqaque",
        // 오버라이드 가능한 변수
        "$rainbowpie_ui_theme_inventory_background_alpha": 1.0
      }
    ]
  },

  // ???/?? ??
  "rainbowpie_gamepad_connect_tip_anim_start": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 0.8,
    // 시작 값
    "from": [ 0, "-100%y"  ],
    // 끝 값
    "to": [ 0, 22 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_common.rainbowpie_gamepad_connect_tip_anim_wait"
  },

  // ???/?? ??
  "rainbowpie_gamepad_connect_tip_anim_wait": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 5.0,
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_common.rainbowpie_gamepad_connect_tip_anim_end"
  },

  // ???/?? ??
  "rainbowpie_gamepad_connect_tip_anim_end": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // ?? ??
    "destroy_at_end": "rainbowpie_gamepad_connect_tip",
    // 걸리는 시간(초)
    "duration": 0.8,
    // 시작 값
    "from": [ 0, 22 ],
    // 끝 값
    "to": [ 0, "-100%y" ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "back_button@rainbowpie_ui_controls.back_content_panel": {
  },

  // ???/?? ??
  "close_button": {
    // 클릭 가능한 버튼
    "type": "button",
    // 가로/세로 크기
    "size": [ 21, 21 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 오버라이드 가능한 변수
    "$close_button_offset|default": [ -2, 2 ],
    // 기준점에서 이동하는 거리
    "offset": "$close_button_offset",
    // ?? ??
    "locked_control": "",
    // ?? ??
    "default_control": "default",
    // ?? ??
    "hover_control": "hover",
    // ?? ??
    "pressed_control": "pressed",
    // ??? ??
    "sound_name": "random.click",
    // ??? ?? ?
    "sound_volume": 1.0,
    // ??? ?? ?
    "sound_pitch": 1.0,
    // 오버라이드 가능한 변수
    "$close_button_panel_size|default": [ 15, 15 ],
    // 오버라이드 가능한 변수
    "$close_button_to_button_id|default": "button.menu_exit",
    // 오버라이드 가능한 변수
    "$default_button_alpha|default": 1,
    // 오버라이드 가능한 변수
    "$default_hover_alpha|default": 1,
    // 오버라이드 가능한 변수
    "$default_pressed_alpha|default": 1,
    // 오버라이드 가능한 변수
    "$close_button_visible_binding_name|default": "#close_button_visible",
    // 오버라이드 가능한 변수
    "$close_button_visible_binding_type|default": "none",

    // 오버라이드 가능한 변수
    "$button_tts_name|default": "",
    // 오버라이드 가능한 변수
    "$button_tts_header|default": "accessibility.button.close",
    // 오버라이드 가능한 변수
    "$tts_section_header|default": "",

    // ?? ??
    "tts_name": "$button_tts_name",
    // ?? ??
    "tts_control_header": "$button_tts_header",
    // ?? ??
    "tts_section_header": "$tts_section_header",

    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {
        // 바인딩 종류(변수로 관리되는 경우도 있음)
        "binding_type": "$close_button_visible_binding_type",
        // 가져올 값 이름
        "binding_name": "$close_button_visible_binding_name",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
      },
      {
        // 가져올 값 이름
        "binding_name": "#tts_enabled",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#focus_enabled"
      }
    ],
    // 입력 키/버튼과 동작 연결
    "button_mappings": [
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_select",
        // 어떤 동작을 실행할지
        "to_button_id": "$close_button_to_button_id",
        // 입력 시점(pressed 등)
        "mapping_type": "pressed"
      },
      {
        // 어떤 입력을 받을지
        "from_button_id": "button.menu_ok",
        // 어떤 동작을 실행할지
        "to_button_id": "$close_button_to_button_id",
        // 입력 시점(pressed 등)
        "mapping_type": "focused"
      }
    ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "default@rainbowpie_ui_common.close_button_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_icon_color": "$rainbowpie_ui_theme_closebutton_default_color",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_background_color": "$rainbowpie_ui_theme_closebutton_default_background_color",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_background_alpha": "$rainbowpie_ui_theme_closebutton_default_background_alpha"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "hover@rainbowpie_ui_common.close_button_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_icon_color": "$rainbowpie_ui_theme_closebutton_hover_color",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_background_color": "$rainbowpie_ui_theme_closebutton_hover_background_color",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_background_alpha": "$rainbowpie_ui_theme_closebutton_hover_background_alpha"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "pressed@rainbowpie_ui_common.close_button_panel": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_icon_color": "$rainbowpie_ui_theme_closebutton_pressed_color",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_background_color": "$rainbowpie_ui_theme_closebutton_pressed_background_color",
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_closebutton_background_alpha": "$rainbowpie_ui_theme_closebutton_pressed_background_alpha"
        }
      }
    ]
  },

  // ???/?? ??
  "close_button_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_closebutton_icon_color|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_closebutton_icon_alpha|default": 1.0,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_closebutton_background_color|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_closebutton_background_alpha|default": 0.0,
    // 가로/세로 크기
    "size": "$close_button_panel_size",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "close_button_icon": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 가로/세로 크기
          "size": [ 15, 15 ],
          // 사용할 이미지 경로
          "texture": "($rainbowpie_ui_path_theme + '/icon/global/close_button/close')",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_closebutton_icon_color",
          // ???
          "alpha": "$rainbowpie_localui_closebutton_icon_alpha"
        }
      },
      {
        // ???/?? ??
        "close_button_background": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_closebutton_background_color",
          // ???
          "alpha": "$rainbowpie_localui_closebutton_background_alpha"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "text_edit_box_label@common.text_edit_box_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_input_text_color"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "text_edit_box_place_holder_label@common.text_edit_box_place_holder_label": {
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_input_placeholder_color"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "default_indent@common.default_indent": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_input_default_background_color"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "edit_box_indent@common.edit_box_indent": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 가로/세로 크기
    "size": "$edit_box_indent_size",
    // 오버라이드 가능한 변수
    "$edit_box_indent_size|default": [ "100%", "100% - 2px" ],
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_input_default_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_input_default_background_alpha",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bottom_image": {
          // 이미지 표시
          "type": "image",
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
          "color": "$rainbowpie_ui_theme_input_default_btbar_color",
          // ???
          "alpha": "$rainbowpie_ui_theme_input_default_btbar_alpha"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "edit_box_indent_hover@common.edit_box_indent": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 가로/세로 크기
    "size": "$edit_box_indent_size",
    // 오버라이드 가능한 변수
    "$edit_box_indent_size|default": [ "100%", "100% - 2px" ],
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_input_hover_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_input_hover_background_alpha",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bottom_image": {
          // 이미지 표시
          "type": "image",
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
          "color": "$rainbowpie_ui_theme_input_hover_btbar_color",
          // ???
          "alpha": "$rainbowpie_ui_theme_input_hover_btbar_alpha"
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "edit_box_indent_locked@common.edit_box_indent": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 가로/세로 크기
    "size": "$edit_box_indent_size",
    // 오버라이드 가능한 변수
    "$edit_box_indent_size|default": [ "100%", "100% - 2px" ],
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_input_locked_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_input_locked_background_alpha",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "bottom_image": {
          // 이미지 표시
          "type": "image",
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
          "color": "$rainbowpie_ui_theme_input_locked_btbar_color",
          // ???
          "alpha": "$rainbowpie_ui_theme_input_locked_btbar_alpha"
        }
      }
    ]
  },

  // ???/?? ??
  "slider_step": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_step_progress_default_color",
    // 가로/세로 크기
    "size": [ 2, 6 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 4,
    // 기준점에서 이동하는 거리
    "offset": "$step_offset"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_step_hover@rainbowpie_ui_common.slider_step": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_step_default_hover_color"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_step_progress@rainbowpie_ui_common.slider_step": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_step_default_default_color"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_step_progress_hover@rainbowpie_ui_common.slider_step": {
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_step_progress_hover_color"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_button_state@common.slider_button_state": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_button_text_color": "$rainbowpie_ui_theme_slider_text_default_color",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "button_line1": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 2, "100% - 3px" ],
          // 기준점에서 이동하는 거리
          "offset": [ -2, 0 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_this_button_text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      },
      {
        // ???/?? ??
        "button_line2": {
          // 이미지 표시
          "type": "image",
          // 가로/세로 크기
          "size": [ 2, "100% - 3px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 2, 0 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_localui_this_button_text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_button_layout@rainbowpie_ui_common.slider_button_state": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_button_text_color": "$rainbowpie_ui_theme_slider_text_default_color",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_default_button_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_slider_default_button_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_button_hover_layout@rainbowpie_ui_common.slider_button_state": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_button_text_color": "$rainbowpie_ui_theme_slider_text_hover_color",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_hover_button_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_slider_hover_button_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_button_locked_layout@rainbowpie_ui_common.slider_button_state": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_button_text_color": "$rainbowpie_ui_theme_slider_text_locked_color",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_locked_button_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_slider_locked_button_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_button_indent_layout@rainbowpie_ui_common.slider_button_state": {
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_this_button_text_color": "$rainbowpie_ui_theme_slider_text_hover_color",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_hover_button_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_slider_hover_button_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_background@common.slider_background": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_default_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_slider_default_background_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_background_hover@common.slider_background_hover": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_hover_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_slider_hover_background_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_progress@common.slider_progress": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_default_progress_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_slider_default_progress_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "slider_progress_hover@common.slider_progress_hover": {
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_slider_hover_progress_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_slider_hover_progress_alpha"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "rainbowpie_ui_dropdown@common.dropdown": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_scrollbar_enabled": true,
    // 오버라이드 가능한 변수
    "$dropdown_background_control": "rainbowpie_ui_controls.scroll_background_image",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_show_button|default": "$rainbowpie_ui_flag_dropdown_default_show_button",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content|default": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "1@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#placeholder1",
          // 오버라이드 가능한 변수
          "$radio_label_text": "placeholder 1"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "2@rainbowpieui_settings_common.rainbowpie_ui_radio_with_label": {
          // 오버라이드 가능한 변수
          "$toggle_state_binding_name": "#placeholder2",
          // 오버라이드 가능한 변수
          "$radio_label_text": "placeholder 2"
        }
      }
    ],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_content_panel|default": "rainbowpie_ui_common.rainbowpie_dropdown_content_panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dropdown_type|default": "common.dropdown",
    // 기준점에서 이동하는 거리
    "offset": "$rainbowpie_localui_dropdown_offset",
    // 가로/세로 크기
    "size": "$rainbowpie_localui_dropdown_size",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "dropdown_button_stack_panel": {
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
              "dropdown_content@$rainbowpie_localui_dropdown_content_panel": {}
            },
            {
              // ???/?? ??
              "padding": {
                // 완전히 제거(공간도 없음)
                "ignored": "(not $rainbowpie_ui_flag_84d26622)",
                // 보이기/숨기기(공간 유지)
                "visible": "$rainbowpie_localui_dropdown_show_button",
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ "60%y", "100%" ],
                // ?? ?? ?
                "min_size": [ 20, "100%" ]
              }
            }
          ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "dropdown@$rainbowpie_localui_dropdown_type": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_84d26622)",
          // 보이기/숨기기(공간 유지)
          "visible": "$rainbowpie_localui_dropdown_show_button",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$anchor_dropdown_content_from": "top_right",
          // 오버라이드 가능한 변수
          "$anchor_dropdown_content_to": "top_right",
          // 오버라이드 가능한 변수
          "$dropdown_toggle": "rainbowpie_ui_common.options_dropdown_toggle_control",
          // 오버라이드 가능한 변수
          "$dropdown_background": "$dropdown_background_control",
          // 오버라이드 가능한 변수
          "$dropdown_content|default": "unset_dropdown_content",
          // 오버라이드 가능한 변수
          "$dropdown_name|default": "unset $dropdown_name",
          // 오버라이드 가능한 변수
          "$options_dropdown_toggle_label_binding|default": "unset $options_dropdown_toggle_label_text",
          // 오버라이드 가능한 변수
          "$locked_alpha": 0.5,
          // 오버라이드 가능한 변수
          "$toggle_tts_header": "$option_label"
        }
      }
    ]
  },

  // ???/?? ??
  "rainbowpie_dropdown_content_panel": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "horizontal",
    // 가로/세로 크기
    "size": [ "fill", "100%" ],
    // ?? ????
    "clips_children": true,
    // 이 안에 들어가는 부품 목록
    "controls": "$rainbowpie_localui_dropdown_content"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "options_dropdown_toggle_control@settings_common.options_dropdown_toggle_control": {
    // 오버라이드 가능한 변수
    "$button_type_panel": "rainbowpie_ui_common.options_dropdown_toggle_control_button_type_panel",
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
    "size": [ "60%y", "100%" ],
    // ?? ?? ?
    "min_size": [ 20, "100%" ],
    // 기준점에서 이동하는 거리
    "offset": [ "100% - 100%x", 0 ]
  },

  // ???/?? ??
  "options_dropdown_toggle_control_button_type_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "dropdown_chevron_image": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 사용할 이미지 경로
          "texture": "textures/ui/chevron_white_down",
          // ?? (R,G,B,A)
          "color": "$text_color",
          // 가로/세로 크기
          "size": [ 8, 8 ]
        }
      }
    ]
  },

  // ???/?? ??
  "screen_background": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_watermark|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ingame|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_ignored|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_override_ignored|default": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenbackground_blur|default": false,

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_common.global_background": {
          // 완전히 제거(공간도 없음)
          "ignored": "(((not $is_pregame) and (not $rainbowpie_localui_screenbackground_ingame)) or $rainbowpie_localui_screenbackground_override_ignored or $rainbowpie_localui_screenbackground_blur)",
          // 가로/세로 크기
          "size": [ "100%", "100%" ]
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@mintui_background.background_fullscreen": {
          // 완전히 제거(공간도 없음)
          "ignored": "(((not $is_pregame) and (not $rainbowpie_localui_screenbackground_ingame)) or $rainbowpie_localui_screenbackground_ignored or $rainbowpie_localui_screenbackground_blur)"
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background_blur@mintui_background.background_blur_fullscreen": {
          // 완전히 제거(공간도 없음)
          "ignored": "(((not $is_pregame) and (not $rainbowpie_localui_screenbackground_ingame)) or $rainbowpie_localui_screenbackground_ignored or (not $rainbowpie_localui_screenbackground_blur))",
          // 오버라이드 가능한 변수
          "$background_mask": false
        }
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "watermark_draw@rainbowpie_ui_common.watermark_draw": {
          // 완전히 제거(공간도 없음)
          "ignored": "(((($rainbowpie_ui_flag_watermark_awalys - $rainbowpieui_branch_type) = $rainbowpie_ui_flag_watermark_awalys) and (not $rainbowpie_localui_screen_watermark)) or $rainbowpie_localui_screenbackground_ignored)",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
        }
      }
    ]
  },

  // ???/?? ??
  "watermark_draw": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "watermark_draw_panel@rainbowpie_ui_common.watermark_draw_panel": {}
      }
    ]
  },

  // ???/?? ??
  "watermark_draw_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not (($rainbowpie_ui_flag_watermark_ignore - $rainbowpieui_branch_type) = $rainbowpie_ui_flag_watermark_ignore))",
    // 보이기/숨기기(공간 유지)
    "visible": "$rainbowpieui_watermark",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 기준점에서 이동하는 거리
    "offset": "$rainbowpie_ui_localui_watermark_offset",
    // 오버라이드 가능한 변수
    "$rainbowpie_ui_localui_watermark_offset|default": [ 0, -10 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "label_0": {
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$main_header_text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보여줄 글자
          "text": "($mintui_pack_name + ' ' + $rainbowpieui_branch_display_name)",
          // ??
          "font_type": "$rainbowpie_ui_theme_global_font_name",
          // ?? ?? ?
          "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 기준점에서 이동하는 거리
          "offset": [ -2, -2 ]
        }
      },
      {
        // ???/?? ??
        "label_1": {
          // 완전히 제거(공간도 없음)
          "ignored": "$rainbowpieui_ci",
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$main_header_text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보여줄 글자
          "text": "('\"' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version + '.' + $rainbowpieui_branch_name + '\"')",
          // ??
          "font_type": "$rainbowpie_ui_theme_global_font_name",
          // ?? ?? ?
          "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 기준점에서 이동하는 거리
          "offset": [ -2, -12 ]
        }
      },
      {
        // ???/?? ??
        "label_1_ci": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpieui_ci)",
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$main_header_text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보여줄 글자
          "text": "('\"' + $rainbowpieui_engine_version_name + '.' + $rainbowpieui_patch_version + '.' + $rainbowpieui_hotfix_version + '.' + $rainbowpieui_branch_name + '/' + $rainbowpieui_commit_id + '\"')",
          // ??
          "font_type": "$rainbowpie_ui_theme_global_font_name",
          // ?? ?? ?
          "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 기준점에서 이동하는 거리
          "offset": [ -2, -12 ]
        }
      },
      {
        // ???/?? ??
        "label_3": {
          // 완전히 제거(공간도 없음)
          "ignored": "($rainbowpieui_codename = '')",
          // 글자 표시
          "type": "label",
          // ?? (R,G,B,A)
          "color": "$main_header_text_color",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // 보여줄 글자
          "text": "($rainbowpieui_codename + '_' + $rainbowpieui_branch_type)",
          // ??
          "font_type": "$rainbowpie_ui_theme_global_font_name",
          // ?? ?? ?
          "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
          // 가로/세로 크기
          "size": [ "default", 10 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_right",
          // 기준점에서 이동하는 거리
          "offset": [ -2, -22 ]
        }
      }
    ]
  },

  // ???/?? ??
  "debug_draw": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 완전히 제거(공간도 없음)
    "ignored": "(not $rainbowpie_ui_debug)",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 20,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_debug_name|default": "debug_draw",
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "debug_draw_name@rainbowpie_ui_common.text_label": {
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 가로/세로 크기
          "size": [ "100%", 10 ],
          // 보여줄 글자
          "text": "$rainbowpie_localui_debug_name",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2
        }
      },
      {
        // ???/?? ??
        "debug_draw_image": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/RainbowPieUI/debug_green",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ???
          "alpha": 0.3
        }
      }
    ]
  },

  // ???/?? ??
  "anim_progress_loading_bars_1": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "in_out_quad",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": [ 0, 0 ],
    // 끝 값
    "to": [ "100% - 100%x", 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_common.anim_progress_loading_bars_2"
  },

  // ???/?? ??
  "anim_progress_loading_bars_2": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "in_out_quad",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": [ "100% - 100%x", 0 ],
    // 끝 값
    "to": [ 0, 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_common.anim_progress_loading_bars_1"
  },

  // Shared UI Common

  "progress_bar_inner1_anim_size": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "in_sine",
    // 걸리는 시간(초)
    "duration": 1.5,
    // 시작 값
    "from": [ "10%", "100%" ],
    // 끝 값
    "to": [ "120%", "100%" ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_common.progress_bar_inner2_anim_size"
  },

  // ???/?? ??
  "progress_bar_inner1_anim_offset": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "in_sine",
    // 걸리는 시간(초)
    "duration": 1.5,
    // 시작 값
    "from": [ "-10%", 0 ],
    // 끝 값
    "to": [ "100%", 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_common.progress_bar_inner2_anim_offset"
  },

  // ???/?? ??
  "progress_bar_inner2_anim_size": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 1.0,
    // 시작 값
    "from": [ "75%", "100%" ],
    // 끝 값
    "to": [ "5%", "100%" ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_common.progress_bar_inner1_anim_size"
  },

  // ???/?? ??
  "progress_bar_inner2_anim_offset": {
    // 위치 이동
    "anim_type": "offset",
    // 움직임 곡선
    "easing": "out_cubic",
    // 걸리는 시간(초)
    "duration": 1.0,
    // 시작 값
    "from": [ "-75%", 0 ],
    // 끝 값
    "to": [ "100%", 0 ],
    // 다음 애니메이션으로 연결
    "next": "@rainbowpie_ui_common.progress_bar_inner1_anim_offset"
  },

  // ???/?? ??
  "progress_loading_bars": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_progress_empty_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_progress_empty_alpha",
    // ?? ????
    "clips_children": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "progress_loading_bars_full": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 가로/세로 크기
          "size": [ "100%y", "100%" ],
          // 기준점에서 이동하는 거리
          "offset": "@rainbowpie_ui_common.anim_progress_loading_bars_1",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_progress_full_color",
          // ???
          "alpha": "$rainbowpie_ui_theme_progress_full_alpha",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 완전히 제거(공간도 없음)
          "ignored": "$rainbowpie_ui_flag_522748cc"
        }
      },
      {
        // ???/?? ??
        "android_style_progress_loading_bars_full": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? ??
          "fill": true,
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 가로/세로 크기
          "size": [ 0, "100%" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_common.progress_bar_inner1_anim_size",
            "@rainbowpie_ui_common.progress_bar_inner1_anim_offset"
          ],
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_progress_full_color",
          // ???
          "alpha": "$rainbowpie_ui_theme_progress_full_alpha",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_ui_flag_522748cc)"
        }
      }
    ]
  },

  // ???/?? ??
  "fancy_progress_loading_bars": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_progress_empty_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_progress_empty_alpha",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_loading_bars_bindings|default": [],
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // ???/?? ??
        "progress_loading_bars_full": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_progress_full_color",
          // ???
          "alpha": "$rainbowpie_ui_theme_progress_full_alpha",
          // ??? ??
          "clip_direction": "left",
          // ?? ??
          "clip_pixelperfect": false,
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 게임 값과 연결하는 규칙 목록
          "bindings": "$rainbowpie_localui_loading_bars_bindings"
        }
      }
    ]
  },

  // ???/?? ??
  "screen_content": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_content|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_ingame_anim1|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_ingame_anim2|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screen_anims|default": [
      "@rainbowpie_ui_animations.screen_exit_animation_push_offset",
      "@rainbowpie_ui_animations.screen_exit_animation_pop_offset",
      "@rainbowpie_ui_animations.screen_entrance_animation_push_offset",
      "@rainbowpie_ui_animations.screen_entrance_animation_pop_offset",
      "@rainbowpie_ui_animations.screen_exit_animation_push_offset_ingame",
      "@rainbowpie_ui_animations.screen_exit_animation_pop_offset_ingame",
      "@rainbowpie_ui_animations.screen_entrance_animation_push_offset_ingame",
      "@rainbowpie_ui_animations.screen_entrance_animation_pop_offset_ingame"
    ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 애니메이션 목록
    "anims": "$rainbowpie_localui_screen_anims",
    // ????? ?? ?
    "animation_reset_name": "screen_animation_reset",
    // 이 안에 들어가는 부품 목록
    "controls": "$rainbowpie_localui_screen_content"
  },

  // ???/?? ??
  "dialog_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_dialog_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_dialog_background_alpha"
  },

  // ???/?? ??
  "inventory_global_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_inventory_global_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_inventory_global_background_alpha"
  },

  // ???/?? ??
  "global_label": {
    // 글자 표시
    "type": "label",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_global_text_color"
  },

  // ???/?? ??
  "global_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_global_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_global_background_alpha"
  },

  // ???/?? ??
  "text_label_notheme": {
    // 글자 표시
    "type": "label",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name"
  },

  // ???/?? ??
  "text_label": {
    // 글자 표시
    "type": "label",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_text_color"
  },

  // ???/?? ??
  "text_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_text_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_text_background_alpha"
  },

  // ???/?? ??
  "title_label": {
    // 글자 표시
    "type": "label",
    // ??
    "font_type": "$rainbowpie_ui_theme_global_font_name",
    // ?? ?? ?
    "backup_font_type": "$rainbowpie_ui_theme_global_font_backup_name",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_title_text_color"
  },

  // ???/?? ??
  "title_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_title_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_title_background_alpha"
  },

  // ???/?? ??
  "title_text": {
    // 글자 표시
    "type": "label",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 12,
    // 보여줄 글자
    "text": "$rainbowpie_ui_theme_global_title_text",
    // ?? ??
    "shadow": false,
    // ??
    "font_type": "$rainbowpie_ui_theme_global_title_text_font",
    // ?? ?? ??
    "font_scale_factor": "$title_text_scale",
    // 오버라이드 가능한 변수
    "$title_text_scale|default": 5.0
  },

  // ???/?? ??
  "screen_header": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 50,

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenheader_title|default": "DEFAULT HEADER TITLE",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenheader_title_bindings|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenheader_content_panel|default": "common.empty_panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenheader_ingameblur|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenheader_ingame_anim1|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenheader_ingame_anim2|default": false,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_screenheader_show_close|default": true,

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "RainbowPieHeaderBlur@rainbowpie_ui_controls.RainbowPieHeaderMask": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "RainbowPieHeaderBlur@rainbowpie_ui_controls.RainbowPieHeaderBlur": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "RainbowPieHeaderBlurInGame@rainbowpie_ui_controls.RainbowPieHeaderBlur": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $rainbowpie_localui_screenheader_ingameblur)",
          // 오버라이드 가능한 변수
          "$background_ingame": true
        }
      },
      {
        // ???/?? ??
        "content_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", 20 ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",

          // 애니메이션 목록
          "anims": [
            "@rainbowpie_ui_animations.header_exit_animation_push_offset_both",
            "@rainbowpie_ui_animations.header_exit_animation_pop_offset_both",
            "@rainbowpie_ui_animations.header_entrance_animation_push_offset_both",
            "@rainbowpie_ui_animations.header_entrance_animation_pop_offset_both",
            "@rainbowpie_ui_animations.header_exit_animation_push_offset_both_ingame",
            "@rainbowpie_ui_animations.header_exit_animation_pop_offset_both_ingame",
            "@rainbowpie_ui_animations.header_entrance_animation_push_offset_both_ingame",
            "@rainbowpie_ui_animations.header_entrance_animation_pop_offset_both_ingame"
          ],
          // ????? ?? ?
          "animation_reset_name": "screen_animation_reset",
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "bottom_line": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 기준점에서 이동하는 거리
                "offset": [ 0, 19 ],
                // 가로/세로 크기
                "size": [ "100%", 1 ],
                // ???
                "alpha": "$rainbowpie_ui_theme_topbar_splitline_alpha",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_topbar_splitline_color",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 22,
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle"
              }
            },
            {
              // ???/?? ??
              "screen_header_background": {
                // 이미지 표시
                "type": "image",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ "100%", 20 ],
                // ???
                "alpha": "$rainbowpie_ui_theme_topbar_background_alpha",
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_topbar_background_color",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 21,
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle"
              }
            },
            {
              // ???/?? ??
              "screen_header_panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 붙일 위치(어디에 놓을지)
                "anchor_to": "top_middle",
                // 기준점(어디에서 시작할지)
                "anchor_from": "top_middle",
                // 가로/세로 크기
                "size": [ "100%", 20 ],
                // 기준점에서 이동하는 거리
                "offset": [ 0, 0 ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 22,
                // 애니메이션 목록
                "anims": [
                  "@rainbowpie_ui_animations.header_exit_animation_push_offset",
                  "@rainbowpie_ui_animations.header_exit_animation_pop_offset",
                  "@rainbowpie_ui_animations.header_entrance_animation_push_offset",
                  "@rainbowpie_ui_animations.header_entrance_animation_pop_offset",
                  "@rainbowpie_ui_animations.header_exit_animation_push_offset_ingame",
                  "@rainbowpie_ui_animations.header_exit_animation_pop_offset_ingame",
                  "@rainbowpie_ui_animations.header_entrance_animation_push_offset_ingame",
                  "@rainbowpie_ui_animations.header_entrance_animation_pop_offset_ingame"
                ],
                // ????? ?? ?
                "animation_reset_name": "screen_animation_reset",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "back_button_content_panel@rainbowpie_ui_controls.back_content_panel": {
                      // 오버라이드 가능한 변수
                      "$focus_enabled": false,
                      // 보이기/숨기기(공간 유지)
                      "visible": "$rainbowpie_localui_screenheader_show_close",
                      // 오버라이드 가능한 변수
                      "$back_button_text": "$rainbowpie_localui_screenheader_title",
                      // 기준점에서 이동하는 거리
                      "offset": [ 2, 0 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 2
                    }
                  },
                  {
                    // 다른 템플릿을 가져와서 확장(상속)
                    "$rainbowpie_localui_screenheader_content_panel@$rainbowpie_localui_screenheader_content_panel": {
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








### common
rainbowpie_ui_dialog.json
RainbowPie UI · common



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_dialog.json
// 분류: RainbowPie UI / common
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_dialog",

  // ???/?? ??
  "header_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_dialog_header_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_dialog_header_alpha"
  },

  // ???/?? ??
  "content_background": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // ?? (R,G,B,A)
    "color": "$rainbowpie_ui_theme_dialog_content_background_color",
    // ???
    "alpha": "$rainbowpie_ui_theme_dialog_content_background_alpha"
  },

  // ???/?? ??
  "header": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", 23 ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title|default": "Default Dialog Header Title",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_title_bindings|default": [],
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_show_close|default": true,
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialogheader_extra_controls|default": "common.empty_panel",

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "debug01@rainbowpie_ui_common.debug_draw": {
          // 오버라이드 가능한 변수
          "$rainbowpie_localui_debug_name": "dialog_header"
        }
      },
      {
        // ???/?? ??
        "popup_dialog_background_ingame": {
          // 이미지 표시
          "type": "image",
          // 완전히 제거(공간도 없음)
          "ignored": "$is_pregame",
          // 보이기/숨기기(공간 유지)
          "visible": "$rainbowpie_ui_flag_d36e5f2a",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // ?? (R,G,B,A)
          "color": "$rainbowpie_ui_theme_dialog_background_color",
          // ???
          "alpha": "$rainbowpie_ui_theme_dialog_background_alpha",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
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
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "title_background@rainbowpie_ui_dialog.header_background": {
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
                            "ignored": "(not $rainbowpie_ui_flag_3f247b1e)",
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
                            "size": [ "100%c", "100%" ],
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
                                  "color": "$rainbowpie_ui_theme_dialog_title_color",
                                  // 보여줄 글자
                                  "text": "$rainbowpie_localui_dialogheader_title",
                                  // 겹치는 순서(숫자 클수록 위)
                                  "layer": 10,
                                  // 게임 값과 연결하는 규칙 목록
                                  "bindings": "$rainbowpie_localui_dialogheader_title_bindings"
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
                            "size": [ "fill", "100%" ],
                            // ?? ?? ?
                            "min_size": [ "100%c", "100%" ],
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
                                      // 다른 템플릿을 가져와서 확장(상속)
                                      "$rainbowpie_localui_dialogheader_extra_controls@$rainbowpie_localui_dialogheader_extra_controls": {
                                        // 완전히 제거(공간도 없음)
                                        "ignored": "($rainbowpie_localui_dialogheader_extra_controls = 'common.empty_panel')"
                                      }
                                    },
                                    {
                                      // ???/?? ??
                                      "button_background": {
                                        // 패널: 다른 부품을 담는 바닥판
                                        "type": "panel",
                                        // 보이기/숨기기(공간 유지)
                                        "visible": "$rainbowpie_localui_dialogheader_show_close",
                                        // 가로/세로 크기
                                        "size": [ "100%y", "100%" ],
                                        // 이 안에 들어가는 부품 목록
                                        "controls": [
                                          {
                                            // 다른 템플릿을 가져와서 확장(상속)
                                            "close_button@rainbowpie_ui_common.close_button": {
                                              // 오버라이드 가능한 변수
                                              "$rainbowpie_ui_theme_closebutton_default_color": "$rainbowpie_ui_theme_dialog_title_color",
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
  "dialog_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",

    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_content|default": "common.empty_panel",
    // 오버라이드 가능한 변수
    "$rainbowpie_localui_dialog_show_background|default": true,

    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "header@rainbowpie_ui_dialog.header": {}
      },
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "background@rainbowpie_ui_dialog.content_background": {
          // 보이기/숨기기(공간 유지)
          "visible": "$rainbowpie_localui_dialog_show_background",
          // 가로/세로 크기
          "size": [ "100%", "100% - 23px" ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
        }
      },
      {
        // ???/?? ??
        "content_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100% - 23px" ],
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 8,
          // 이 안에 들어가는 부품 목록
          "controls": [
            {
              // ???/?? ??
              "popup_dialog_background_ingame": {
                // 이미지 표시
                "type": "image",
                // 완전히 제거(공간도 없음)
                "ignored": "$is_pregame",
                // 보이기/숨기기(공간 유지)
                "visible": "$rainbowpie_ui_flag_d36e5f2a",
                // 사용할 이미지 경로
                "texture": "textures/ui/White",
                // 가로/세로 크기
                "size": [ "100%", "100%" ],
                // ?? (R,G,B,A)
                "color": "$rainbowpie_ui_theme_dialog_background_color",
                // ???
                "alpha": "$rainbowpie_ui_theme_dialog_background_alpha",
                // 겹치는 순서(숫자 클수록 위)
                "layer": -10,
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
            },
            {
              // 다른 템플릿을 가져와서 확장(상속)
              "$rainbowpie_localui_dialog_content@$rainbowpie_localui_dialog_content": {}
            }
          ]
        }
      }
    ]
  }
}
```








### common
rainbowpie_ui_gameplay.json
RainbowPie UI · common



필요한 부분만 참고해서 가져가세요.



```
// 예제: rainbowpie_ui_gameplay.json
// 분류: RainbowPie UI / common
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
// VERSION: 2.11.10550.1 (v1.21.113)
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "rainbowpie_ui_gameplay"
}
```









[분할 목록으로 돌아가기](preview.html#example-view)

