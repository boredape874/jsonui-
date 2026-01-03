---
title: 예제 미리보기 (12/12)
outline: false
search: false
---

# 예제 미리보기 (12/12)

[분할 목록으로 돌아가기](preview.html#example-view)

### .runeui
fletching_table.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: fletching_table.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-fletching_table",
  // ???/?? ??
  "element_modal": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'PLACEHOLDER') = #title_text))",
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
          "$custom_background": "runeui-fletching_table.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-fletching_table.scrolling_panel_modal",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-fletching_table.background",
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
    "$runeui:form_condition": "(not((#title_text - 'PLACEHOLDER') = #title_text))",
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
      { "form_stacking": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%c", "100%cm" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "panel": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 150, 200 ],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "filter@runeui-form.main_panel_no_buttons": {
                      // 가로/세로 크기
                      "size": [ 150, 146 ],
                      // 오버라이드 가능한 변수
                      "$runeuiDEBUGGER:filter_button_limit": 5, // ( 4 buttons - 1 padding )

                      // 오버라이드 가능한 변수
                      "$title_text_color": [ 0.756, 0.466, 0.929 ],
                      // 오버라이드 가능한 변수
                      "$title_text": "Filter",
                      // 오버라이드 가능한 변수
                      "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
                      // 오버라이드 가능한 변수
                      "$panel_indent_offset": [ 0, 23 ],
                      // 오버라이드 가능한 변수
                      "$custom_background": "runeui-fletching_table.dialog_filter",
                      // 오버라이드 가능한 변수
                      "$rc_template": "runeui-fletching_table.scrolling_panel_filter",
                      // 오버라이드 가능한 변수
                      "$rc_custom_background": "runeui-fletching_table.background_filter",
                      // 오버라이드 가능한 변수
                      "$rc_custom_background_size": [ "100%", "100%" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 4
                  }}
            ]}},
            { "form@runeui-form.main_panel_no_buttons": {
                // 가로/세로 크기
                "size": [ 236, 200 ],
                // 오버라이드 가능한 변수
                "$runeuiDEBUGGER:grid_button_hider": 4, // ( 4 buttons )

                // 오버라이드 가능한 변수
                "$title_text_color": [ 0.756, 0.466, 0.929 ],
                // 오버라이드 가능한 변수
                "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
                // 오버라이드 가능한 변수
                "$panel_indent_offset": [ 0, 23 ],
                // 오버라이드 가능한 변수
                "$custom_background": "runeui-fletching_table.dialog",
                // 오버라이드 가능한 변수
                "$rc_template": "runeui-fletching_table.scrolling_panel",
                // 오버라이드 가능한 변수
                "$rc_custom_background": "runeui-fletching_table.background",
                // 오버라이드 가능한 변수
                "$rc_custom_background_size": [ "100%", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4
            }}
      ]}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-fletching_table.dialog_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-fletching_table.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_filter@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-fletching_table.dialog_filter_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background_filter@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-fletching_table.background_filter_core",
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
          "$runeui:help_button": false
      }},
      { "styler@runeui-form.form_style_main": {}}
  ]},
  // ???/?? ??
  "background_filter_core": {
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
  "dialog_filter_core": {
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
      { "styler@runeui-form.form_style_main": {}}
  ]},
  // ???/?? ??
  "fletching_fliter": {
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
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-fletching_table.fletching_button"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "fletching_button@common_buttons.light_text_button": {
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "#form_button_text",
    // 오버라이드 가능한 변수
    "$button_text_binding_type": "collection",
    // 오버라이드 가능한 변수
    "$button_text_grid_collection_name": "form_buttons",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$border_visible": false,
    // 오버라이드 가능한 변수
    "$border_alpha": 0,
    // 오버라이드 가능한 변수
    "$button_image_fill": true,
    // 오버라이드 가능한 변수
    "$default_button_texture": "textures/ui/form_tab_left",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_left_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_left_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_left",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // ?? ??
    "collection_index": "#collection_index_test",
    // 게임 값과 연결하는 규칙 목록
    "bindings":[
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#collection_length - $runeuiDEBUGGER:filter_button_limit)",
        // 결과가 들어갈 속성
        "target_property_name": "#collection_limit"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#collection_index > #collection_limit)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      }]
  },
  // ???/?? ??
  "fletching_fliter_element": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 목록 이름
    "collection_name": "form_buttons",
    // 이 안에 들어가는 부품 목록
    "controls": [
       { "panel_stacking": {
          // 데이터 목록을 반복 배치
          "type": "collection_panel",
          // 가로/세로 크기
          "size": [ "100%", 120 ],
          // 목록 이름
          "collection_name": "form_buttons",
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "fletching_fliter@fletching_fliter": {}}
      ]}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel_filter@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-fletching_table.scrolling_content_filter"
  },
  // ???/?? ??
  "scrolling_content_filter": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "fletching_fliter_element@runeui-fletching_table.fletching_fliter_element": {}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-fletching_table.scrolling_content"
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
                "$runeui:panel_control": "runeui-fletching_table.grid_button_panel_padding",
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
        "source_property_name": "(#form_button_length - $runeuiDEBUGGER:grid_button_hider)",
        // 결과가 들어갈 속성
        "target_property_name": "#maximum_grid_items"
      }
	]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel_modal@runeui-form.custom_form_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-fletching_table.scrolling_modal"
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
fuel_selection.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: fuel_selection.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-fuel_selection",
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'fuel.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 1.000, 0.333, 0.000, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 1.000, 0.333, 0.000, 0.7 ]
      }},
      { "form@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 1.000, 0.333, 0.000 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$pos": "%.7s",
          // 오버라이드 가능한 변수
          "$title_alignment": "left",
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-fuel_selection.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-fuel_selection.scrolling_panel",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-fuel_selection.background",
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
    "$runeui:panel_control": "runeui-fuel_selection.dialog_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-fuel_selection.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 1.000, 0.333, 0.000, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 1.000, 0.333, 0.000, 0.7 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$title_text_color",
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
          "$rc_hover_word": "runeui.help.fuel"
      }},
      { "styler@runeui-form.form_style_main": {}},
      { "debug_text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#output",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // ?? ??
          "shadow": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ -54, 6 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#title_text" },
            { "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('§z') + (#title_text - ('%.3s' * #title_text)))",
              // 결과가 들어갈 속성
              "target_property_name": "#output"
          }]
      }},
      { "fuel_icon": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/blocks/runecraft_furnace_active",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ -38, 4.5 ],
          // 가로/세로 크기
          "size": [ 12, 12 ]
      }},
      { "salvage_button@runeui-fuel_selection.salvage_button": {}},
      { "smelting_button@runeui-fuel_selection.smelting_button": {}},
      { "selected_tab@runeui-fuel_selection.selected_tab": {}}
  ]},
  // ???/?? ??
  "selected_tab": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -19 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "locked_button@common_buttons.light_text_button": {
          // ??/???
          "enabled": false,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$button_text": "fuel.title",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$locked_text_color": [ 0.5, 0.5, 0.5 ]
      }},
      { "outline": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.5,
          // 가로/세로 크기
          "size": [ "100% + 2px", "100% - 1px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -1.5 ],
          // ?? (R,G,B,A)
          "color": "$title_text_color",
          // 애니메이션 목록
          "anims": [ "@runeui-common.outline_fade_starter" ]
      }}
  ]},
  // ???/?? ??
  "smelting_button": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-fuel_selection.smelting_button_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "smelting_button_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "smelting.title",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$border_visible": false,
    // 오버라이드 가능한 변수
    "$border_alpha": 0,
    // 오버라이드 가능한 변수
    "$button_image_fill": true,
    // 오버라이드 가능한 변수
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'smelting.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // ???/?? ??
  "salvage_button": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-fuel_selection.salvage_button_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "salvage_button_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "salvage.title",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$border_visible": false,
    // 오버라이드 가능한 변수
    "$border_alpha": 0,
    // 오버라이드 가능한 변수
    "$button_image_fill": true,
    // 오버라이드 가능한 변수
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'salvage.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-fuel_selection.scrolling_content"
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
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#form_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#form_text = ''))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100% + 6px", "100% + 6px" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": -1,
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/solid_textbox"
                  }}
            ]}}
      ]}},
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
                "$runeui:panel_control": "runeui-fuel_selection.grid_button_panel_padding",
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
        "source_property_name": "(#form_button_length - 2)",
        // 결과가 들어갈 속성
        "target_property_name": "#maximum_grid_items"
      }
	]}
}
```








### .runeui
gameplay.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: gameplay.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "namespace": "runeui-gameplay",
  // ???/?? ??
  "core_hud_element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#show_survival_ui",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "huds@runeui-gameplay.element_huds": {}},
      { "debugger@runeui-gameplay.debugger": {}}

  ]},
  // ???/?? ??
  "debugger": {
    // 완전히 제거(공간도 없음)
    "ignored": true,
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "#textdebug",
    // ?? ??
    "debug": "red",
    // 오버라이드 가능한 변수
    "$clip_texture_preserved": "%.24s",
    // 오버라이드 가능한 변수
    "$clip_preserved": "%.13s",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§z') + ('textures/ui/health_orb_fg' + (#preserved_text - ($clip_texture_preserved * #preserved_text))))",
        // 결과가 들어갈 속성
        "target_property_name": "#textures"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§z') + ('%.2s' * ((#preserved_text - ('%.13s' * #preserved_text))))",
        // 결과가 들어갈 속성
        "target_property_name": "#texture"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - ($clip_preserved * #preserved_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio_value"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#clip_ratio_value / 20)",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§z') + ( #textures ))",
        // 결과가 들어갈 속성
        "target_property_name": "#textdebug"
      }
    ]
  },
  // ???/?? ??
  "element_huds": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "health": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 사용할 이미지 경로
          "texture": "textures/ui/hud_bg",
          // 가로/세로 크기
          "size": [ 28, 28 ],
          // ???? ??
          "uv_size": [ 28, 28 ],
          // ???? ?? ??
          "uv": [ 0, 0 ],
          // 기준점에서 이동하는 거리
          "offset": [ -140, -22 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "foreground@element_foreground_renderer_adv": {
                // 오버라이드 가능한 변수
                "$clip_max": 20.0,
                // 오버라이드 가능한 변수
                "$clip_texture_source": "textures/ui/health_orb_fg",
                // 오버라이드 가능한 변수
                "$clip_texture_preserved": "%.24s",
                // 오버라이드 가능한 변수
                "$clip_preserved": "%.13s"
            }},
            { "label@element_label_color_renderer": {
                // 기준점에서 이동하는 거리
                "offset": [ 0.5, -19 ],
                // 오버라이드 가능한 변수
                "$clip_preserved": "%.13s",
                // 오버라이드 가능한 변수
                "$label_preserved": "%.3s"
            }}
      ]}},
      { "armor": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 사용할 이미지 경로
          "texture": "textures/ui/hud_bg",
          // 가로/세로 크기
          "size": [ 28, 28 ],
          // ???? ??
          "uv_size": [ 28, 28 ],
          // ???? ?? ??
          "uv": [ 28, 0 ],
          // 기준점에서 이동하는 거리
          "offset": [ -115, -3 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "foreground@element_foreground_renderer": {
                // 오버라이드 가능한 변수
                "$clip_max": 20.0,
                // 오버라이드 가능한 변수
                "$clip_texture_source": "textures/ui/armor_orb_fg",
                // 오버라이드 가능한 변수
                "$clip_preserved": "%.45s"
            }},
            { "label@element_label_renderer": {
              // 기준점에서 이동하는 거리
              "offset": [ 0.5, -19 ],
              // 오버라이드 가능한 변수
              "$label_preserved": "%.31s",
              // ?? (R,G,B,A)
              "color": [ 0.8196, 0.8588, 0.8509 ]
            }}
      ]}},
      { "prayer": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 사용할 이미지 경로
          "texture": "textures/ui/hud_bg",
          // 가로/세로 크기
          "size": [ 28, 28 ],
          // ???? ??
          "uv_size": [ 28, 28 ],
          // ???? ?? ??
          "uv": [ 56, 0 ],
          // 기준점에서 이동하는 거리
          "offset": [ 115, -3 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "foreground@element_foreground_renderer_adv": {
                // 오버라이드 가능한 변수
                "$clip_max": 20.0,
                // 오버라이드 가능한 변수
                "$clip_texture_source": "textures/ui/prayer_orb_fg",
                // 오버라이드 가능한 변수
                "$clip_texture_preserved": "%.83s",
                // 오버라이드 가능한 변수
                "$clip_preserved": "%.68s"
            }},
            { "label@element_label_color_renderer": {
              // 기준점에서 이동하는 거리
              "offset": [ 0.5, -19 ],
              // 오버라이드 가능한 변수
              "$clip_preserved": "%.68s",
              // 오버라이드 가능한 변수
              "$label_preserved": "%.54s"
            }}
      ]}},
      { "stamina": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 사용할 이미지 경로
          "texture": "textures/ui/hud_bg",
          // 가로/세로 크기
          "size": [ 28, 28 ],
          // ???? ??
          "uv_size": [ 28, 28 ],
          // ???? ?? ??
          "uv": [ 84, 0 ],
          // 기준점에서 이동하는 거리
          "offset": [ 140, -22 ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "foreground@element_foreground_renderer_adv": {
                // 오버라이드 가능한 변수
                "$clip_max": 20.0,
                // 오버라이드 가능한 변수
                "$clip_texture_source": "textures/ui/stamina_orb_fg",
                // 오버라이드 가능한 변수
                "$clip_texture_preserved": "%.144s",
                // 오버라이드 가능한 변수
                "$clip_preserved": "%.131s"
            }},
            { "label@element_label_color_renderer": {
              // 기준점에서 이동하는 거리
              "offset": [ 0.5, -19 ],
              // 오버라이드 가능한 변수
              "$clip_preserved": "%.131s",
              // 오버라이드 가능한 변수
              "$label_preserved": "%.118s"
            }}
      ]}},
      { "prayer_buff_1@element_image_renderer": {
          // 오버라이드 가능한 변수
          "$image_texture_preserved": "%.87s",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ -16, -38 ]
      }},
      { "prayer_buff_2@element_image_renderer": {
          // 오버라이드 가능한 변수
          "$image_texture_preserved": "%.92s",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, -38 ]
      }},
      { "prayer_buff_3@element_image_renderer": {
          // 오버라이드 가능한 변수
          "$image_texture_preserved": "%.97s",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 16, -38 ]
      }},
      { "thieving_state_1@element_image_renderer_adv": {
          // 오버라이드 가능한 변수
          "$image_size": [ 52, 5 ],
          // 오버라이드 가능한 변수
          "$image_texture_source": "textures/ui/thieving_bar",
          // 오버라이드 가능한 변수
          "$image_texture_preserved": "%.148s",
          // 오버라이드 가능한 변수
          "$image_preserved": "%.148s",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ -52, -60 ]
      }},
      { "thieving_state_2@element_image_renderer_adv": {
          // 오버라이드 가능한 변수
          "$image_size": [ 52, 5 ],
          // 오버라이드 가능한 변수
          "$image_texture_source": "textures/ui/thieving_bar",
          // 오버라이드 가능한 변수
          "$image_texture_preserved": "%.152s",
          // 오버라이드 가능한 변수
          "$image_preserved": "%.152s",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, -60 ]
      }},
      { "thieving_state_3@element_image_renderer_adv": {
          // 오버라이드 가능한 변수
          "$image_size": [ 52, 5 ],
          // 오버라이드 가능한 변수
          "$image_texture_source": "textures/ui/thieving_bar",
          // 오버라이드 가능한 변수
          "$image_texture_preserved": "%.156s",
          // 오버라이드 가능한 변수
          "$image_preserved": "%.156s",
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 52, -60 ]
      }}
  ]},
  // ???/?? ??
  "element_foreground_renderer": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "$clip_texture_source",
    // ??? ??
    "clip_direction": "down",
    // ?? ??
    "clip_pixelperfect": false,
    // 가로/세로 크기
    "size": "$clip_size",
    // 오버라이드 가능한 변수
    "$clip_size|default": [ 20, 20 ],
    // 오버라이드 가능한 변수
    "$clip_max|default": 20.0,
    // 오버라이드 가능한 변수
    "$clip_texture_source|default": "textures/ui/health_orb_fg",
    // 오버라이드 가능한 변수
    "$clip_preserved|default": "%.13s",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - ($clip_preserved * #preserved_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio_value"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#clip_ratio_value / $clip_max)",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio"
      }
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "element_foreground_renderer_adv@runeui-gameplay.element_foreground_renderer": {
    // 사용할 이미지 경로
    "texture": "#texture",
    // 오버라이드 가능한 변수
    "$clip_texture_preserved|default": "%.24s",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§z') + ($clip_texture_source + (#preserved_text - ($clip_texture_preserved * #preserved_text))))",
        // 결과가 들어갈 속성
        "target_property_name": "#texture"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - ($clip_preserved * #preserved_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio_value"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#clip_ratio_value / $clip_max)",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio"
      }
  ]},
  // ???/?? ??
  "element_foreground_label": {
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "#text",
    // 가로/세로 크기
    "size": [ "default", 10 ],
    // ?? (R,G,B,A)
    "color": "$experience_text_color",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - ($label_preserved * #preserved_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#value"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - ($clip_preserved * #preserved_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#check"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('§z' + #value)",
        // 결과가 들어갈 속성
        "target_property_name": "#text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#check < $min_value)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
  ]},
  // ???/?? ??
  "element_label_color_renderer": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%c", "100%c" ],
    // 오버라이드 가능한 변수
    "$label_preserved|default": "%.3s",
    // 오버라이드 가능한 변수
    "$min_value|default": 15,
    // 오버라이드 가능한 변수
    "$clip_preserved|default": "%.13s",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "green@runeui-gameplay.element_foreground_label": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // ?? (R,G,B,A)
          "color": "$experience_text_color",
          // 오버라이드 가능한 변수
          "$min_value": 5
      }},
      { "yellow@runeui-gameplay.element_foreground_label": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 3,
          // ?? (R,G,B,A)
          "color": [ 0.9254, 0.9137, 0.1843 ],
          // 오버라이드 가능한 변수
          "$min_value": 10
      }},
      { "orange@runeui-gameplay.element_foreground_label": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 2,
          // ?? (R,G,B,A)
          "color": [ 0.9254, 0.6705, 0.1843 ],
          // 오버라이드 가능한 변수
          "$min_value": 15
      }},
      { "red@runeui-gameplay.element_label_renderer": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": [ 0.9254, 0.2941, 0.1843 ]
      }}
  ]},
  // ???/?? ??
  "element_label_color_renderer_core": {
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "#text",
    // ?? ??
    "shadow": true,
    // ?? (R,G,B,A)
    "color": "$experience_text_color",
    // 오버라이드 가능한 변수
    "$label_preserved|default": "%.3s",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('§z' + (#preserved_text - ($label_preserved * #preserved_text)))",
        // 결과가 들어갈 속성
        "target_property_name": "#text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - ($image_preserved * #preserved_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - ($clip_preserved * #preserved_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio_value"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#clip_ratio_value / $clip_max)",
        // 결과가 들어갈 속성
        "target_property_name": "#clip_ratio"
      }
  ]},
  // ???/?? ??
  "element_label_renderer": {
    // 글자 표시
    "type": "label",
    // 보여줄 글자
    "text": "#text",
    // ?? (R,G,B,A)
    "color": "$experience_text_color",
    // ?? ??
    "shadow": true,
    // 오버라이드 가능한 변수
    "$label_preserved|default": "%.3s",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "('§z' + (#preserved_text - ($label_preserved * #preserved_text)))",
        // 결과가 들어갈 속성
        "target_property_name": "#text"
      }
  ]},
  // ???/?? ??
  "element_image_renderer": {
    // 이미지 표시
    "type": "image",
    // 가로/세로 크기
    "size": "$image_size",
    // 오버라이드 가능한 변수
    "$image_size|default": [ 14, 14 ],
    // 오버라이드 가능한 변수
    "$image_texture_source|default": "textures/ui/prayers/",
    // 오버라이드 가능한 변수
    "$image_texture_preserved|default": "%.87s",
    // 오버라이드 가능한 변수
    "$image_preserved|default": "%.107s",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§z') + ($image_texture_source + (#preserved_text - ($image_texture_preserved * #preserved_text))))",
        // 결과가 들어갈 속성
        "target_property_name": "#texture"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#preserved_text - ($image_preserved * #preserved_text)) = 1",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "element_image_renderer_adv@runeui-gameplay.element_image_renderer": {
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§z') + ( $image_texture_source + ( #preserved_text - ($image_texture_preserved * #preserved_text))) )",
        // 결과가 들어갈 속성
        "target_property_name": "#texture"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§z') + ( #preserved_text - ($image_preserved * #preserved_text)) ) < 3",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      }
  ]},
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
      { "item_text_aligner": {
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
            { "exp_toast@runeui-exp_toast.root_panel": {}},
            { "craft_bg": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 82, 10 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_type": "view",
                    // ?? ??
                    "source_control_name": "koala_title_data_control",
                    // 계산식/참조 값
                    "source_property_name": "#preserved_text",
                    // 결과가 들어갈 속성
                    "target_property_name": "#preserved_text"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(('§z') + ( #preserved_text - ('%.172s' * #preserved_text)) > 0 )",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ 82, 4 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_type": "view",
                          // ?? ??
                          "source_control_name": "koala_title_data_control",
                          // 계산식/참조 값
                          "source_property_name": "#preserved_text",
                          // 결과가 들어갈 속성
                          "target_property_name": "#preserved_text"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(('§z') + ('textures/ui/craft_bg_' + (#preserved_text - ('%.172s' * #preserved_text))))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#texture"
                      }]
                  }},
                  { "foreground@element_foreground_renderer": {
                      // ??? ??
                      "clip_direction": "right",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 기준점에서 이동하는 거리
                      "offset": [ 1, -1 ],
                      // 오버라이드 가능한 변수
                      "$clip_max": 40.0,
                      // 오버라이드 가능한 변수
                      "$clip_texture_source": "textures/ui/craft_fg",
                      // 오버라이드 가능한 변수
                      "$clip_preserved": "%.186s",
                      // 오버라이드 가능한 변수
                      "$clip_size": [ 80, 2 ]
                  }},
                  { "craft_count": {
                      // 글자 표시
                      "type": "label",
                      // 보여줄 글자
                      "text": "#text",
                      // 기준점에서 이동하는 거리
                      "offset": [ 84, 3 ],
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_type": "view",
                          // ?? ??
                          "source_control_name": "koala_title_data_control",
                          // 계산식/참조 값
                          "source_property_name": "#preserved_text",
                          // 결과가 들어갈 속성
                          "target_property_name": "#preserved_text"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "('x' + '§z' + (#preserved_text - ('%.202s' * #preserved_text)))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#text"
                      }]
                  }},
                  { "craft_icon": {
                      // 이미지 표시
                      "type": "image",
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 가로/세로 크기
                      "size": [ 16, 16 ],
                      // 기준점에서 이동하는 거리
                      "offset": [ -10, 5 ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_type": "view",
                          // ?? ??
                          "source_control_name": "koala_title_data_control",
                          // 계산식/참조 값
                          "source_property_name": "#preserved_text",
                          // 결과가 들어갈 속성
                          "target_property_name": "#preserved_text"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(('§z') + ('textures/ui/crafting_icon_' + ( #preserved_text - ('%.172s' * #preserved_text) )) )",
                          // 결과가 들어갈 속성
                          "target_property_name": "#texture"
                      }]
                  }}
            ]}},
            { "item_text_factory": {
                // 리스트를 자동으로 생성하는 공장
                "type": "factory",
                // 가로/세로 크기
                "size": [ 100, 10 ],
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
      }
    ]
  }
}
```








### .runeui
notif_toast.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: notif_toast.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-notif_toast",
  // ???/?? ??
  "root_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 가로/세로 크기
    "size": [ 200, "100%c" ],
    // ?? ?? ?
    "max_size": [ 200, "75%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "factory_stack": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 목록 아이템을 자동으로 생성
          "factory": {
            // ?? ??
            "name": "chat_item_factory",
            // ?? ?? ?
            "max_children_size": 50,
            // 팩토리 템플릿 매핑
            "control_ids": {
              // ?? ??
              "chat_item": "arx-notif_toast@runeui-notif_toast.element"
          }}
      }}
  ]},
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 999,
    // 가로/세로 크기
    "size": [ "100%cm", "100%cm" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "@runeui-notif_toast.notification_toast": {}}
  ]},
  /* [prefix]*/
  /* §3§r*/
  // ???/?? ??
  "check_factory": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 오버라이드 가능한 변수
    "$runeui:binding_name|default": "#title_text",
    // 오버라이드 가능한 변수
    "$runeui:panel_control|default": "",
    // 오버라이드 가능한 변수
    "$runeui:condition|default": "",
    // 목록 아이템을 자동으로 생성
    "factory": { "name": "void", "control_name": "runeui-notif_toast.notification_toast", "max_children_size": 1 },
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
        "source_property_name": "(not((#output - '\ue1ff') = #output))",
        // 결과가 들어갈 속성
        "target_property_name": "#condition"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#condition * 1)",
        // 결과가 들어갈 속성
        "target_property_name": "#collection_length"
    }]
  },
  // ???/?? ??
  "notification_toast": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 200, 42 ],
    // ??? ?? ?
    "propagate_alpha": true,
    // 겹치는 순서(숫자 클수록 위)
    "layer": 10,
    // 애니메이션 목록
    "anims": [
      "@runeui-notif_toast.anim_chat_stack_in",
      "@runeui-notif_toast.anim_chat_bg_pop"
    ],
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ???/??? ?
      "#separator": ";"
    },
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "toast_bg@toast_image_template": {
          // 사용할 이미지 경로
          "texture": "textures/ui/notif",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 5,
          // 게임 값과 연결하는 규칙 목록
          "bindings": []
      }},
      { "toast_reveal@toast_image_template": {
          // 사용할 이미지 경로
          "texture": "textures/ui/notif_reveal",
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 30,
          // 애니메이션 목록
          "anims": [
            "@runeui-notif_toast.reveal_phase_out"
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": []
      }},
      { "background": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // ???
          "alpha": 0.75,
          // 기준점(어디에서 시작할지)
          "anchor_from": "left_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "left_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 8, 0 ],
          // 가로/세로 크기
          "size": [ 25, 25 ],
          // 사용할 이미지 경로
          "texture": "textures/ui/notif_icon_background",
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "texture_icon": {
                // 이미지 표시
                "type": "image",
                // 가로/세로 크기
                "size": [ 16, 16 ],
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
                    "source_property_name": "('textures/' + (#text - '<' - '>' - '\ue1ff'))",
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
                    "source_property_name": "((('%.'+#search+'s') * #output) - ';')",
                    // 결과가 들어갈 속성
                    "target_property_name": "#texture"
                  }]
            }}]
        }},
      { "progress_bar@toast_image_template": {
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 가로/세로 크기
          "size": [ "100% - 8px", 1 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // 기준점에서 이동하는 거리
          "offset": [ 4, -4 ],
          // 기준점(어디에서 시작할지)
          "anchor_from": "bottom_left",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "bottom_left",
          // 애니메이션 목록
          "anims": [
            "@runeui-notif_toast.progress_bar_anim",
            "@runeui-notif_toast.progress_bar_anim_fade"
          ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": []
      }},
      { "labels@toast_label_template": {
          // 글자 표시
          "type": "label",
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 가로/세로 크기
          "size": [ "100% - 44px", "100% - 12px" ],
          // 보여줄 글자
          "text": "#displaytext",
          // 기준점에서 이동하는 거리
          "offset": [ -6, 0 ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 10,
          // ?? ??
          "shadow": true,
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
              "source_property_name": "('§z' + (#text - '<' - '>' - '\ue1ff'))",
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
              "source_property_name": "(#output - ( ('%.'+#search+'s') * #output))",
              // 결과가 들어갈 속성
              "target_property_name": "#mask_2"
            },
            { "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('§z') + (#mask_2 - ('%.4s' * #mask_2)))",
              // 결과가 들어갈 속성
              "target_property_name": "#displaytext"
          }]
      }}
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
        "source_property_name": "(not((#output - '\ue1ff') = #output))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
  }]},
  // ???/?? ??
  "progress_bar_anim": {
    // 크기 변화
    "anim_type": "size",
    // 시작 값
    "from": [ "0%", 1 ],
    // 끝 값
    "to": [ "100% - 8px", 1 ],
    // 걸리는 시간(초)
    "duration": "($chat_item_lifetime + 1.25)"
  },
  // ???/?? ??
  "progress_bar_anim_fade": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "($chat_item_lifetime + 1)",
    // 다음 애니메이션으로 연결
    "next": "@runeui-notif_toast.progress_bar_anim_fade_out"
  },
  // ???/?? ??
  "progress_bar_anim_fade_out": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 0.75,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0
  },
  // ???/?? ??
  "text_phase_prep": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "($chat_item_lifetime / 2)",
    // 다음 애니메이션으로 연결
    "next": "@runeui-notif_toast.text_phase_prep_out"
  },
  // ???/?? ??
  "text_phase_prep_out": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "in_out_expo",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0
  },
  // ???/?? ??
  "reveal_phase": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": 1,
    // 다음 애니메이션으로 연결
    "next": "@runeui-notif_toast.reveal_phase_out"
  },
  // ???/?? ??
  "reveal_phase_out": {
    // 투명도 변화
    "anim_type": "alpha",
    // 움직임 곡선
    "easing": "linear",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": 1,
    // 끝 값
    "to": 0
  },
  // ???/?? ??
  "anim_chat_stack_ins": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "out_expo",
    // 걸리는 시간(초)
    "duration": 0.5,
    // 시작 값
    "from": [ 200, 0 ],
    // 끝 값
    "to": [ 200, 42 ],
    // 다음 애니메이션으로 연결
    "next": "@runeui-notif_toast.anim_chat_stack_wait"
  },
  // ???/?? ??
  "anim_chat_stack_in": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "($chat_item_lifetime + 2)",
    // 다음 애니메이션으로 연결
    "next": "@runeui-notif_toast.anim_chat_stack_out"
  },
  // ???/?? ??
  "anim_chat_stack_out": {
    // 크기 변화
    "anim_type": "size",
    // 움직임 곡선
    "easing": "in_out_expo",
    // 걸리는 시간(초)
    "duration": 1,
    // 시작 값
    "from": [ 200, 42 ],
    // 끝 값
    "to": [ 200, 0 ],
    // ?? ??
    "destroy_at_end": "element"
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
    "next": "@runeui-notif_toast.anim_chat_bg_wait_push"
  },
  // ???/?? ??
  "anim_chat_bg_wait_push": {
    // 잠시 대기
    "anim_type": "wait",
    // 걸리는 시간(초)
    "duration": "$chat_item_lifetime",
    // 다음 애니메이션으로 연결
    "next": "@runeui-notif_toast.anim_chat_bg_push"
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
    "to": [ "100%", 0 ]
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








### .runeui
noting.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: noting.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-noting",
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'noting_table.note.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.7686, 0.7098, 0.5137, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.7686, 0.7098, 0.5137, 0.7 ]
      }},
      { "form@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.7686, 0.7098, 0.5137 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-noting.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-noting.scrolling_panel",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-noting.background",
          // 오버라이드 가능한 변수
          "$rc_custom_background_size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
      }}
  ]},
  // ???/?? ??
  "dialog": {
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
      { "main@runeui-form.element_factory": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$runeui:panel_control": "runeui-noting.dialog_core",
          // 오버라이드 가능한 변수
          "$runeui:condition": "$runeui:form_condition"
      }}
  ]},

  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-noting.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_modal@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-noting.dialog_modal_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.7686, 0.7098, 0.5137, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.7686, 0.7098, 0.5137, 0.7 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$title_text_color",
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
      // Change your question mark string here (noting)
      // don't forget to delete this comment after you done with it -harlow
      { "toolbar@runeui-form.form_style_toolbar": {
          // 오버라이드 가능한 변수
          "$rc_hover_word": "runeui.help.smithing"
      }},
      { "styler@runeui-form.form_style_main": {}},
      { "noting@runeui-noting.noting": {}},
      { "unnote_all@runeui-noting.unnote_all": {}},
      { "divider@runeui-common.title_bar_divider": {}},
      { "selected_tab@runeui-noting.selected_tab": {}}
  ]},
  // ???/?? ??
  "dialog_modal_core": {
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
          "$runeui:help_button": false
      }},
      { "styler@runeui-form.form_style_main": {}}
  ]},
  // ???/?? ??
  "selected_tab": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "50%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -19 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "locked_button@common_buttons.light_text_button": {
          // ??/???
          "enabled": false,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$button_text": "noting_table.note.title",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$locked_text_color": [ 0.5, 0.5, 0.5 ]
      }},
      { "outline": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.5,
          // 가로/세로 크기
          "size": [ "100% + 2px", "100% - 1px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -1.5 ],
          // ?? (R,G,B,A)
          "color": "$title_text_color",
          // 애니메이션 목록
          "anims": [ "@runeui-common.outline_fade_starter" ]
      }}
  ]},
  // ???/?? ??
  "unnote_all": {
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
      "control_name": "runeui-noting.unnote_all_core"
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
  "unnote_all_core": {
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
        "source_property_name": "(not ((#form_button_text - 'noting_table.note.note_all') = #form_button_text))",
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
          "$button_type_panel": "runeui-noting.unnote_all_icon",
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
  "unnote_all_icon@runeui-common.help_button_default": {
    // 사용할 이미지 경로
    "texture": "textures/ui/noting/note",
    // 가로/세로 크기
    "size": [ 12, 12 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
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
  // ???/?? ??
  "noting": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "50%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-noting.noting_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "noting_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "noting_table.unnote.title",
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
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'noting_table.unnote.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-noting.scrolling_content"
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
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#form_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#form_text = ''))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100% + 6px", "100% + 6px" ],
                      // ?? ??
                      "clip_pixelperfect": true,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": -1,
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/solid_textbox"
                  }}
            ]}}
      ]}},
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
                "$runeui:panel_control": "runeui-noting.grid_button_panel_padding",
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
    "grid_item_template": "runeui-noting.grid_button_core",
		// ??? ?? ?
		"grid_rescaling_type": "horizontal",
		// 목록 이름
		"collection_name": "form_buttons",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{	"binding_name": "#form_button_length" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#form_button_length - 2)",
        // 결과가 들어갈 속성
        "target_property_name": "#maximum_grid_items"
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
                "size": [ 32, 32 ],
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
                // 가로/세로 크기
                "size": [ 32, 32 ],
                // 사용할 이미지 경로
                "texture": "textures/ui/noting/default_frame"
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
                            // 가로/세로 크기
                            "size": [ 32, 32 ],
                            // 사용할 이미지 경로
                            "texture": "textures/ui/noting/hover_frame"
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
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel_modal@runeui-form.custom_form_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-noting.scrolling_modal"
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
          "$button_text": "Smith!",
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
noting_amount.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: noting_amount.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-noting_amount",
  // ???/?? ??
  "element_modal": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'noting_table.amount_selection') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.7686, 0.7098, 0.5137, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.7686, 0.7098, 0.5137, 0.7 ]
      }},
      { "modal@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.7686, 0.7098, 0.5137 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-noting_amount.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-noting_amount.scrolling_panel_modal",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-noting_amount.background",
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
    "$runeui:panel_control": "runeui-noting_amount.dialog_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-noting_amount.background_core",
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
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.7686, 0.7098, 0.5137, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.7686, 0.7098, 0.5137, 0.7 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$title_text_color",
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
          "$runeui:help_button": false
      }},
      { "styler@runeui-form.form_style_main": {}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel_modal@runeui-form.custom_form_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-noting_amount.scrolling_modal"
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
          "$button_text": "Note!",
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
prayer_menu.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: prayer_menu.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-prayer",
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition|default": "(not((#title_text - 'prayer.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.756, 0.886, 0.894, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.756, 0.886, 0.894, 0.7 ]
      }},
      { "form@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.756, 0.886, 0.894 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-prayer.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-prayer.scrolling_panel",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-prayer.background",
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
    "$runeui:panel_control": "runeui-prayer.dialog_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-prayer.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.756, 0.886, 0.894, 0.5 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.756, 0.886, 0.894, 0 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": [ 0.098, 0.533, 0.764 ],
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
          "$rc_hover_word": "runeui.help.prayermenu"
      }},
      { "styler@runeui-form.form_style_main": {}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-prayer.scrolling_content"
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
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel@runeui-common.dialog_box": {}},
      { "padding_01": { "type": "panel", "size": [ "100%", 10 ]}},
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
                "$runeui:panel_control": "runeui-common.grid_button_panel",
                // 오버라이드 가능한 변수
                "$runeui:condition": "$runeui:form_condition"
            }}
      ]}}
  ]}
}
```








### .runeui
preload.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: preload.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "namespace": "runeui-preload",
  // ???/?? ??
  "root_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 16, 16 ],
    // 기준점에서 이동하는 거리
    "offset": [ -2048, -2048 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "health_orb_fg0": { "type": "image", "texture": "textures/ui/health_orb_fg0" }},
      { "health_orb_fg1": { "type": "image", "texture": "textures/ui/health_orb_fg1" }},
      { "health_orb_fg2": { "type": "image", "texture": "textures/ui/health_orb_fg2" }},
      { "health_orb_fg3": { "type": "image", "texture": "textures/ui/health_orb_fg3" }},
      { "health_orb_fg4": { "type": "image", "texture": "textures/ui/health_orb_fg4" }},
      { "prayer_orb_fg0": { "type": "image", "texture": "textures/ui/prayer_orb_fg0" }},
      { "prayer_orb_fg1": { "type": "image", "texture": "textures/ui/prayer_orb_fg1" }},
      { "stamina_orb_fg0": { "type": "image", "texture": "textures/ui/stamina_orb_fg0" }},
      { "stamina_orb_fg1": { "type": "image", "texture": "textures/ui/stamina_orb_fg1" }},
      { "armor_orb_fg": { "type": "image", "texture": "textures/ui/armor_orb_fg" }},
      { "prayer_0": { "type": "image", "texture": "textures/ui/prayers/0" }},
      { "prayer_1": { "type": "image", "texture": "textures/ui/prayers/1" }},
      { "prayer_2": { "type": "image", "texture": "textures/ui/prayers/2" }},
      { "prayer_3": { "type": "image", "texture": "textures/ui/prayers/3" }},
      { "prayer_4": { "type": "image", "texture": "textures/ui/prayers/4" }},
      { "prayer_5": { "type": "image", "texture": "textures/ui/prayers/5" }},
      { "prayer_6": { "type": "image", "texture": "textures/ui/prayers/6" }},
      { "prayer_7": { "type": "image", "texture": "textures/ui/prayers/7" }},
      { "prayer_8": { "type": "image", "texture": "textures/ui/prayers/8" }},
      { "prayer_9": { "type": "image", "texture": "textures/ui/prayers/9" }},
      { "prayer_10": { "type": "image", "texture": "textures/ui/prayers/10" }},
      { "prayer_11": { "type": "image", "texture": "textures/ui/prayers/11" }},
      { "prayer_12": { "type": "image", "texture": "textures/ui/prayers/12" }},
      { "prayer_13": { "type": "image", "texture": "textures/ui/prayers/13" }},
      { "prayer_14": { "type": "image", "texture": "textures/ui/prayers/14" }},
      { "prayer_15": { "type": "image", "texture": "textures/ui/prayers/15" }},
      { "prayer_16": { "type": "image", "texture": "textures/ui/prayers/16" }},
      { "prayer_17": { "type": "image", "texture": "textures/ui/prayers/17" }},
      { "prayer_18": { "type": "image", "texture": "textures/ui/prayers/18" }},
      { "prayer_19": { "type": "image", "texture": "textures/ui/prayers/19" }},
      { "prayer_20": { "type": "image", "texture": "textures/ui/prayers/20" }},
      { "prayer_21": { "type": "image", "texture": "textures/ui/prayers/21" }},
      { "prayer_22": { "type": "image", "texture": "textures/ui/prayers/22" }},
      { "prayer_23": { "type": "image", "texture": "textures/ui/prayers/11" }},
      { "prayer_24": { "type": "image", "texture": "textures/ui/prayers/24" }},
      { "prayer_25": { "type": "image", "texture": "textures/ui/prayers/25" }},
      { "prayer_26": { "type": "image", "texture": "textures/ui/prayers/26" }},
      { "prayer_27": { "type": "image", "texture": "textures/ui/prayers/27" }},
      { "prayer_28": { "type": "image", "texture": "textures/ui/prayers/28" }},
      { "prayer_29": { "type": "image", "texture": "textures/ui/prayers/29" }},
      { "prayer_30": { "type": "image", "texture": "textures/ui/prayers/30" }},
      { "prayer_31": { "type": "image", "texture": "textures/ui/prayers/31" }},
      { "prayer_32": { "type": "image", "texture": "textures/ui/prayers/32" }},
      { "prayer_33": { "type": "image", "texture": "textures/ui/prayers/33" }},
      { "prayer_34": { "type": "image", "texture": "textures/ui/prayers/34" }},
      { "prayer_35": { "type": "image", "texture": "textures/ui/prayers/35" }},
      { "prayer_36": { "type": "image", "texture": "textures/ui/prayers/36" }},
      { "prayer_37": { "type": "image", "texture": "textures/ui/prayers/37" }},
      { "thieving_bar_0": { "type": "image", "texture": "textures/ui/thieving_bar0" }},
      { "thieving_bar_1": { "type": "image", "texture": "textures/ui/thieving_bar1" }},
      { "thieving_bar_2": { "type": "image", "texture": "textures/ui/thieving_bar2" }},
      { "craft_bg": { "type": "image", "texture": "textures/ui/craft_bg" }},
      { "craft_fg": { "type": "image", "texture": "textures/ui/craft_fg" }}
  ]}
}
```








### .runeui
repair.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: repair.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-repair",
  // ???/?? ??
  "element_modal": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'repair_amount.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.521, 0.541, 0.6, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.521, 0.541, 0.6, 0.7 ]
      }},
      { "modal@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.521, 0.541, 0.6 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-repair.dialog_modal",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-repair.scrolling_panel_modal",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-repair.background",
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
    "$runeui:form_condition": "(not((#title_text - 'repair.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.521, 0.541, 0.6, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.521, 0.541, 0.6, 0.7 ]
      }},
      { "form@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.521, 0.541, 0.6 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-repair.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-repair.scrolling_panel",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-repair.background",
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
    "$runeui:panel_control": "runeui-repair.dialog_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_modal@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-repair.dialog_modal_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-repair.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.521, 0.541, 0.6, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.521, 0.541, 0.6, 0.7 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$title_text_color",
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
          "$rc_hover_word": "runeui.help.repairing"
      }},
      { "styler@runeui-form.form_style_main": {}},
      { "smithing@runeui-repair.smithing": {}},
      { "selected_tab@runeui-repair.selected_tab": {}}
  ]},
  // ???/?? ??
  "dialog_modal_core": {
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
          "$runeui:help_button": false
      }},
      { "styler@runeui-form.form_style_main": {}}
  ]},
  // ???/?? ??
  "selected_tab": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ 118, 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -19 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "locked_button@common_buttons.light_text_button": {
          // ??/???
          "enabled": false,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$button_text": "repair.title",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$locked_text_color": [ 0.5, 0.5, 0.5 ]
      }},
      { "outline": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.5,
          // 가로/세로 크기
          "size": [ "100% + 2px", "100% - 1px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -1.5 ],
          // ?? (R,G,B,A)
          "color": "$title_text_color",
          // 애니메이션 목록
          "anims": [ "@runeui-common.outline_fade_starter" ]
      }}
  ]},
  // ???/?? ??
  "smithing": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "50%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-repair.smithing_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "smithing_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "smith.title",
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
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'repair.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-repair.scrolling_content"
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
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#form_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#form_text = ''))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100% + 6px", "100% + 6px" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": -1,
                      // ?? ??
                      "clip_pixelperfect": true,
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/solid_textbox"
                  }}
            ]}}
      ]}},
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
                "$runeui:panel_control": "runeui-repair.grid_button_panel_padding",
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
    "grid_item_template": "runeui-repair.grid_button_core",
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
    "$scrolling_content": "runeui-repair.scrolling_modal"
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
          "$button_text": "Repair!",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#submit_button_visible",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
          }]
      }}
  ]},
  // ???/?? ??
  "durability_temp": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 가로/세로 크기
    "size": [ "100%", 2 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 4,
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_left",
    // ?? (R,G,B,A)
    "color": "$color",
    // 오버라이드 가능한 변수
    "$clip_max": 100.0,
    // 오버라이드 가능한 변수
    "$color|default": "$experience_text_color",
    // 오버라이드 가능한 변수
    "$max|default": 100,
    // 오버라이드 가능한 변수
    "$min|default": 80,
    // 오버라이드 가능한 변수
    "$string_pos|default": "%.2s",
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ???/??? ?
      "#size_binding_x": 0.0
    },
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#form_button_text - ($string_pos * #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#size_progress"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#size_progress > $min - 1) and (#size_progress < $max) and (not (#size_progress = 100)))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#size_progress / $clip_max)",
        // 결과가 들어갈 속성
        "target_property_name": "#size_binding_x"
    }]
  },
  // ???/?? ??
  "gradient_temp": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이미지 표시
    "type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/glint",
		// ???? ??
		"uv_size": [64, 64],
		// ???? ?? ??
		"uv": "@runeui-repair.image_uv_animation"
  },
   // ???/?? ??
   "outline_temp": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이미지 표시
    "type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/outline",
		// ???? ??
		"uv_size": [64, 64],
		// ???? ?? ??
		"uv": "@runeui-repair.image_uv_animation"
  },
	// ???/?? ??
	"image_uv_animation": {
		// Aseprite 프레임 애니메이션
		"anim_type": "aseprite_flip_book",
		// ?? ??
		"initial_uv": [0, 0]
	},
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
                "layer": 3,
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
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "enchantment": {
                      // 데이터 목록을 반복 배치
                      "type": "collection_panel",
                      // 목록 아이템을 자동으로 생성
                      "factory": { "name": "void", "control_name": "runeui-salvaging.gradient_temp", "max_children_size": 1 },
                      // 오버라이드 가능한 변수
                      "$rc_gradient_color1": [ 1.0, 0.333, 1.0, 0 ],
                      // 오버라이드 가능한 변수
                      "$rc_gradient_color2": [ 1.0, 0.333, 1.0, 0.7 ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#form_button_text - ('%.6s' * #form_button_text) * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#collection_length"
                      }]
                  }},
                  { "durability_bg": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/Black",
                      // 가로/세로 크기
                      "size": [ "100%", 2 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 3,
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#form_button_text - ('%.2s' * #form_button_text) * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#size_progress"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (#size_progress = 100))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                      }]
                  }},
                  { "durability_green@durability_temp": {}},
                  { "durability_yellow@durability_temp": {
                      // 오버라이드 가능한 변수
                      "$color": [ 0.9254, 0.9137, 0.1843 ],
                      // 오버라이드 가능한 변수
                      "$max": 80,
                      // 오버라이드 가능한 변수
                      "$min": 60
                  }},
                  { "durability_orange@durability_temp": {
                      // 오버라이드 가능한 변수
                      "$color": [ 0.9254, 0.6705, 0.1843 ],
                      // 오버라이드 가능한 변수
                      "$max": 60,
                      // 오버라이드 가능한 변수
                      "$min": 30
                  }},
                  { "durability_red@durability_temp": {
                      // 오버라이드 가능한 변수
                      "$color": [ 0.9254, 0.2941, 0.1843 ],
                      // 오버라이드 가능한 변수
                      "$max": 30,
                      // 오버라이드 가능한 변수
                      "$min": 0
                  }}
            ]}},
            { "outline": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "selected": {
                      // 데이터 목록을 반복 배치
                      "type": "collection_panel",
                      // 목록 아이템을 자동으로 생성
                      "factory": { "name": "void", "control_name": "runeui-salvaging.outline_temp", "max_children_size": 1 },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#form_button_text - ('%.8s' * #form_button_text) * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#check"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#check = 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#condition"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#condition * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#collection_length"
                      }]
                  }}]
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
                            "layer": 1,
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
                                  "text": "#text",
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
                                    },
                                    { "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "('§z' + (#form_button_text - (%.10s * #form_button_text)))",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#text"
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
  ]}
}
```








### .runeui
runecraft_form.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: runecraft_form.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-form",
  // ???/?? ??
  "custom_form": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$child_control": "runeui-form.long_form_panel_rewrite",
    // 오버라이드 가능한 변수
    "$show_close_button": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "bg@runeui-common.background": {}},
      { "brewing@runeui-brewing_table.element_modal": {}},
      { "noting@runeui-noting_amount.element_modal": {}},
      { "repair@runeui-repair.element_modal": {}},
      { "smelting@runeui-smelting.element_modal": {}},
      { "smithing@runeui-smithing.element_modal": {}}
  ]},
  // ???/?? ??
  "long_form": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$child_control": "runeui-form.long_form_panel_rewrite",
    // 오버라이드 가능한 변수
    "$show_close_button": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "bg@runeui-common.background": {}},
      { "brewing@runeui-brewing_table.element": {}},
      { "noting@runeui-noting.element": {}},
      { "unnoting@runeui-unnoting.element": {}},
      { "prayer@runeui-prayer.element": {}},
      { "smelting@runeui-smelting.element": {}},
      { "salvaging@runeui-salvaging.element": {}},
      { "fletching@runeui-fletching_table.element": {}},
      { "fuel_selection@runeui-fuel_selection.element": {}},
      { "smithing@runeui-smithing.element": {}},
      { "repair@runeui-repair.element": {}}
  ]},
  // ???/?? ??
  "main_panel_no_buttons": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 기준점(어디에서 시작할지)
    "anchor_from": "center",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "center",
    // 오버라이드 가능한 변수
    "$text_name|default": "",
    // 오버라이드 가능한 변수
    "$panel_indent_size|default": [ "100% - 16px", "100% - 31px" ],
    // 오버라이드 가능한 변수
    "$panel_indent_offset|default": [ 0, 23 ],
    // 오버라이드 가능한 변수
    "$custom_background|default": "dialog_background_hollow_3",
    // 오버라이드 가능한 변수
    "$title_offset|default": [ 0, 9 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "common_panel@runeui-form.common_panel": { "$dialog_background": "$custom_background" }},
      { "title_label@runeui-common.standard_title_label": {}},
      { "panel_indent": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": "$panel_indent_size",
          // 기준점에서 이동하는 거리
          "offset": "$panel_indent_offset",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "inside_header_panel@$child_control": {} }
      ]}}
  ]},
  // ???/?? ??
  "common_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$dialog_background|default": "common.dialog_background_opaque",
    // 오버라이드 가능한 변수
    "$show_close_button|default": true,
    // 오버라이드 가능한 변수
    "$close_button_visible_binding_name|default": "#close_button_visible",
    // 오버라이드 가능한 변수
    "$close_button_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$close_button_layer|default": 2,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "bg_image@$dialog_background": {
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1
      }},
      { "close@runeui-common.close_button": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $show_close_button)",
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "$close_button_visible_binding_name",
              // 가져온 값을 다른 속성으로 연결
              "binding_name_override": "#visible"
          }]
      }}
  ]},
  // ???/?? ??
  "long_form_panel_rewrite": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 오버라이드 가능한 변수
    "$rc_template|default": "runeui-form.long_form_scrolling_panel",
    // 오버라이드 가능한 변수
    "$rc_custom_background|default": "common.empty_panel",
    // 오버라이드 가능한 변수
    "$rc_custom_background_size|default": [ "100%", "100%" ],
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "template@$rc_template": {}},
      { "custom_background@$rc_custom_background": {
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_left",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_left",
          // 가로/세로 크기
          "size": "$rc_custom_background_size"
      }}
  ]},
  // ???/?? ??
  "scrolling_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$scrolling_pane_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_offset|default": [ 0, 0 ],

    // 오버라이드 가능한 변수
    "$scroll_view_control_size|default": [ "100%", "100%" ],

    // 오버라이드 가능한 변수
    "$background_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$background_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_view_port_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_view_port_max_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_view_port_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$view_port_size|default": [ "fill", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_bar_contained|default": true,
    // 오버라이드 가능한 변수
    "$scroll_size|default": [ 4, "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_box_size|default": [ "100%", "100%" ],

    // 오버라이드 가능한 변수
    "$allow_scrolling_even_when_content_fits|default": true,

    // 오버라이드 가능한 변수
    "$scroll_box_visible|default": true,
    // 오버라이드 가능한 변수
    "$use_touch_mode|default": false,
    // 오버라이드 가능한 변수
    "$show_background|default": false,
    // 이 안에 들어가는 부품 목록
    "controls": [
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "scroll_mouse@common.scrolling_panel_base": {
          // 가로/세로 크기
          "size": "$scrolling_pane_size",
          // 기준점에서 이동하는 거리
          "offset": "$scrolling_pane_offset"
        }
      }
    ]
  },
  // ???/?? ??
  "container_scroll_background_image": {
    // 이미지 표시
    "type": "image",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 2,
    // 사용할 이미지 경로
    "texture": "textures/ui/form_scrolling_pane_bg",
    // ??? ?? ?
    "allow_clipping": false
  },
  // ???/?? ??
  "container_scroll_box_image": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/form_scrolling_box",
    // ??? ?? ?
    "allow_clipping": false
  },
  // ???/?? ??
  "container_scrollbar_track": {
    // 이미지 표시
    "type": "image",
    // 겹치는 순서(숫자 클수록 위)
    "layer": 1,
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ -2, 0 ],
    // ??? ?? ?
    "allow_clipping": false,
    // 가로/세로 크기
    "size": [ "100% + 4px", "100%" ],
    // 사용할 이미지 경로
    "texture": "textures/ui/form_scrolling_box_bg"
  },

  // 다른 템플릿을 가져와서 확장(상속)
  "long_form_scrolling_panel@runeui-form.scrolling_panel": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 50,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 오버라이드 가능한 변수
    "$show_background": false,
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    //"debug": "red",
    "$scrolling_pane_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_size|default": [ "100% + 0.5px", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_view_port_size|default": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_view_port_offset|default": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_size|default": [ 8, "100%" ],

    // Enable element inside the scrolling bar if we want a static instead of dynamic.
    "$scroll_bar_contained|default": false,

    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 1, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "runeui-form.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$scroll_track_image_control": "runeui-form.container_scrollbar_track",
    // 오버라이드 가능한 변수
    "$scroll_box_mouse_image_control": "runeui-form.container_scroll_box_image",
    // 오버라이드 가능한 변수
    "$scroll_box_touch_image_control": "runeui-form.container_scroll_box_image",
    // 오버라이드 가능한 변수
    "$allow_scrolling_even_when_content_fits": false,

    // 오버라이드 가능한 변수
    "$scrolling_content": "server_form.long_form_scrolling_content"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "custom_form_panel@runeui-form.scrolling_panel": {
    // 겹치는 순서(숫자 클수록 위)
    "layer": 50,
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 오버라이드 가능한 변수
    "$show_background": false,
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scrolling_pane_size": [ "100% + 0.5px", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_view_port_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$scroll_view_port_offset": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_size": [ 8, "100%" ],

    // 오버라이드 가능한 변수
    "$scroll_bar_right_padding_size": [ 0, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_bar_left_padding_size": [ 1, 0 ],
    // 오버라이드 가능한 변수
    "$scroll_background_image_control": "runeui-form.container_scroll_background_image",
    // 오버라이드 가능한 변수
    "$scroll_track_image_control": "runeui-form.container_scrollbar_track",
    // 오버라이드 가능한 변수
    "$scroll_box_mouse_image_control": "runeui-form.container_scroll_box_image",
    // 오버라이드 가능한 변수
    "$scroll_box_touch_image_control": "runeui-form.container_scroll_box_image",
    // 오버라이드 가능한 변수
    "$allow_scrolling_even_when_content_fits": false,

    // 오버라이드 가능한 변수
    "$scrolling_content": "server_form.custom_form_scrolling_content"
  },
  // ???/?? ??
  "generated_contents": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100% - 10px", "100%c" ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // ?? ??
    "use_child_anchors": true,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // 팩토리 템플릿 매핑
      "control_ids": {
        // ?? ??
        "label": "@server_form.custom_label",
        // ?? ??
        "toggle": "@server_form.custom_toggle",
        // ?? ??
        "slider": "@server_form.custom_slider",
        // ?? ??
        "step_slider": "@server_form.custom_step_slider",
        // ?? ??
        "dropdown": "@server_form.custom_dropdown",
        // ?? ??
        "input": "@runeui-form.custom_input",
        // ?? ??
        "header": "@server_form.custom_header"
    }},
    // 목록 이름
    "collection_name": "custom_form",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#custom_form_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
      }
  ]},
  // ???/?? ??
  "custom_input": {
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ "100% + 10px", "100%c" ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#custom_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings":[
                  { "binding_name": "#custom_text",
                    // 목록 데이터를 반복 연결
                    "binding_type": "collection",
                    // 목록 이름
                    "binding_collection_name": "custom_form"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100% + 6px", "100% + 6px" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": -1,
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/solid_textbox"
                  }}
            ]}}
      ]}},
      { "padding": { "type": "panel", "size": [ 6, 6 ]}}
  ]},
  // ???/?? ??
  "element_factory": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 오버라이드 가능한 변수
    "$runeui:binding_name|default": "#title_text",
    // 오버라이드 가능한 변수
    "$runeui:panel_control|default": "",
    // 오버라이드 가능한 변수
    "$runeui:condition|default": "",
    // 목록 아이템을 자동으로 생성
    "factory": { "name": "void", "control_name": "$runeui:panel_control", "max_children_size": 1 },
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "$runeui:binding_name" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "$runeui:condition",
        // 결과가 들어갈 속성
        "target_property_name": "#renderer_state"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#renderer_state * 1)",
        // 결과가 들어갈 속성
        "target_property_name": "#collection_length"
    }]
  },
  // ???/?? ??
  "form_style_main": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "form_shadow": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/Black",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.25,
          // 기준점에서 이동하는 거리
          "offset": [ 2, 2 ]
      }},
      { "outline": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.5,
          // 가로/세로 크기
          "size": [ "100% + 2px", "100% + 2px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ],
          // ?? (R,G,B,A)
          "color": "$title_text_color",
          // 애니메이션 목록
          "anims": [ "@runeui-common.outline_fade_starter" ]
      }},
      { "form_border": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/general_form",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 30
      }},
      { "form_divider": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/general_form",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 35,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_middle",
          // 기준점에서 이동하는 거리
          "offset": [ 0, 19 ],
          // 가로/세로 크기
          "size": [ "100%", 4 ]
      }},
      { "background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/general_form_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // 이미지 반복 여부
          "tiled": true
      }}
  ]},
  // ???/?? ??
  "form_style_toolbar": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$rc_hover_word|default": "Placeholder.",
    // 오버라이드 가능한 변수
    "$runeui:custom_toolbar|default": false,
    // 오버라이드 가능한 변수
    "$runeui:custom_toolbar_content|default": "",
    // 오버라이드 가능한 변수
    "$runeui:help_button|default": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "exit@runeui-common.off_dialog": {
          // 오버라이드 가능한 변수
          "$rc_offdialog_content": "runeui-common.close_button"
      }},
      { "help@runeui-common.off_dialog": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $runeui:help_button)",
          // 오버라이드 가능한 변수
          "$rc_offdialog_offset": [ -19, 3 ],
          // 오버라이드 가능한 변수
          "$rc_offdialog_content": "runeui-common.help_button"
      }},
      { "extra@$runeui:custom_toolbar_content": {
          // 완전히 제거(공간도 없음)
          "ignored": "(not $runeui:custom_toolbar)"
      }}
    ]
  }
}
```








### .runeui
salvaging.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: salvaging.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-salvaging",
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'salvage.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 1.000, 0.333, 0.000, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 1.000, 0.333, 0.000, 0.7 ]
      }},
      { "form_stacking": {
          // 줄맞춤 컨테이너: 가로/세로로 자동 배치
          "type": "stack_panel",
          // 쌓는 방향(가로/세로)
          "orientation": "horizontal",
          // 가로/세로 크기
          "size": [ "100%c", "100%cm" ],
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "form@runeui-form.main_panel_no_buttons": {
                // 가로/세로 크기
                "size": [ 236, 200 ],
                // 오버라이드 가능한 변수
                "$title_text_color": [ 1.000, 0.333, 0.000 ],
                // 오버라이드 가능한 변수
                "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
                // 오버라이드 가능한 변수
                "$panel_indent_offset": [ 0, 23 ],
                // 오버라이드 가능한 변수
                "$pos": "%.7s",
                // 오버라이드 가능한 변수
                "$title_alignment": "left",
                // 오버라이드 가능한 변수
                "$custom_background": "runeui-salvaging.dialog",
                // 오버라이드 가능한 변수
                "$rc_template": "runeui-salvaging.scrolling_panel",
                // 오버라이드 가능한 변수
                "$rc_custom_background": "runeui-salvaging.background",
                // 오버라이드 가능한 변수
                "$rc_custom_background_size": [ "100%", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4
            }},
            { "padding": {
                // 패널: 다른 부품을 담는 바닥판
                "type": "panel",
                // 가로/세로 크기
                "size": [ 4, 4 ],
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not((#form_text - 'salvage.yield') = #form_text))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }]
            }},
            { "selected@runeui-form.main_panel_no_buttons": {
                // 가로/세로 크기
                "size": [ 150, 165 ],
                // 오버라이드 가능한 변수
                "$title_text_color": [ 1.000, 0.333, 0.000 ],
                // 오버라이드 가능한 변수
                "$title_text": "Selected",
                // 오버라이드 가능한 변수
                "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
                // 오버라이드 가능한 변수
                "$panel_indent_offset": [ 0, 23 ],
                // 오버라이드 가능한 변수
                "$custom_background": "runeui-salvaging.dialog_selected",
                // 오버라이드 가능한 변수
                "$rc_template": "runeui-salvaging.scrolling_panel_selected",
                // 오버라이드 가능한 변수
                "$rc_custom_background": "runeui-salvaging.background_selected",
                // 오버라이드 가능한 변수
                "$rc_custom_background_size": [ "100%", "100%" ],
                // 겹치는 순서(숫자 클수록 위)
                "layer": 4,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not((#form_text - 'salvage.yield') = #form_text))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }]
            }}
      ]}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-salvaging.dialog_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-salvaging.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_selected@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-salvaging.dialog_selected_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background_selected@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-salvaging.background_selected_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 1.000, 0.333, 0.000, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 1.000, 0.333, 0.000, 0.7 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$title_text_color",
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
          "$rc_hover_word": "runeui.help.salvaging"
      }},
      { "styler@runeui-form.form_style_main": {}},
      { "debug_text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#output",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // ?? ??
          "shadow": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ -54, 6 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#title_text" },
            { "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('§z') + (#title_text - ('%.3s' * #title_text)))",
              // 결과가 들어갈 속성
              "target_property_name": "#output"
          }]
      }},
      { "fuel_icon": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/blocks/runecraft_furnace_active",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ -38, 4.5 ],
          // 가로/세로 크기
          "size": [ 12, 12 ]
      }},
      { "smelting_button@runeui-salvaging.smelting_button": {}},
      { "fuel_selection@runeui-salvaging.fuel_selection": {}},
      { "selected_tab@runeui-salvaging.selected_tab": {}},
      { "button_is_empty@runeui-salvaging.button_is_empty_core": {}}
  ]},
  // ???/?? ??
  "dialog_selected_core": {
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
      { "styler@runeui-form.form_style_main": {}},
      { "salvage_button@runeui-salvaging.salvaging_button": {}}
  ]},
  // ???/?? ??
  "background_selected_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background": {
          // 이미지 표시
          "type": "image",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // 사용할 이미지 경로
          "texture": "textures/ui/solid_textbox"
      }}
  ]},
  // ???/?? ??
  "selected_tab": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -19 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "locked_button@common_buttons.light_text_button": {
          // ??/???
          "enabled": false,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$button_text": "salvage.title",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
          // 오버라이드 가능한 변수
          "$pressed_button_name": "",
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$locked_text_color": [ 0.5, 0.5, 0.5 ]
      }},
      { "outline": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.5,
          // 가로/세로 크기
          "size": [ "100% + 2px", "100% - 1px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -1.5 ],
          // ?? (R,G,B,A)
          "color": "$title_text_color",
          // 애니메이션 목록
          "anims": [ "@runeui-common.outline_fade_starter" ]
      }}
  ]},
  // ???/?? ??
  "fuel_selection": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-salvaging.fuel_selection_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "fuel_selection_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "fuel.title",
    // "$button_text_binding_type": "collection",
    // "$button_text_grid_collection_name": "form_buttons",
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
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'fuel.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // ???/?? ??
  "smelting_button": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-salvaging.smelting_button_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "smelting_button_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "smelting.title",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$border_visible": false,
    // 오버라이드 가능한 변수
    "$border_alpha": 0,
    // 오버라이드 가능한 변수
    "$button_image_fill": true,
    // 오버라이드 가능한 변수
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'smelting.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // ???/?? ??
  "salvaging_button": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "100%", 30 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, 34 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 100,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-salvaging.salvaging_button_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "salvaging_button_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "salvage.title",
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
    "$button_offset": [ 0, 0 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'salvage.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-salvaging.scrolling_content"
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
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('§z' + #form_text)",
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
                    "source_property_name": "((('%.'+#search+'s') * #output) - ';')",
                    // 결과가 들어갈 속성
                    "target_property_name": "#text"
                  },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#text = ''))",
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
                      // ?? ??
                      "clip_pixelperfect": true,
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/solid_textbox"
                  }}
            ]}}
      ]}},
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
                "$runeui:panel_control": "runeui-salvaging.grid_button_panel_padding",
                // 오버라이드 가능한 변수
                "$runeui:condition": "$runeui:form_condition"
            }}
      ]}}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel_selected@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-salvaging.scrolling_content_selected"
  },
  // ???/?? ??
  "scrolling_content_selected": {
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
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#text",
                // ?? ?? ??
                "font_scale_factor": 0.75,
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "('§z' + #form_text)",
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
                    "source_property_name": "(#output - ( ('%.'+#search+'s') * #output))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#text"
                }]
            }}
      ]}},
      { "padding_00": { "type": "panel", "size": [ "100%", 6 ]}}
  ]},
  // ???/?? ??
  "grid_button_panel_padding": {
    // 격자 컨테이너: 칸칸이 배치
    "type": "grid",
    // 가로/세로 크기
    "size": [ "100%", "100%c" ],
    // ??? ?? ?
    "grid_item_template": "runeui-salvaging.grid_button_core",
		// ??? ?? ?
		"grid_rescaling_type": "horizontal",
		// 목록 이름
		"collection_name": "form_buttons",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{	"binding_name": "#form_button_length" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#form_button_length - 3)",
        // 결과가 들어갈 속성
        "target_property_name": "#maximum_grid_items"
      }
	]},
  // ???/?? ??
  "button_is_empty_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      {	"binding_name": "#form_button_length" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not(#form_button_length > 3))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "mask_8": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "Nothing to salvage...",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 200,
          // 이 안에 들어가는 부품 목록
          "controls": [
            { "background": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": -10,
                // ???
                "alpha": 0.75,
                // 가로/세로 크기
                "size": [ "100% + 8px", "100% + 8px" ],
                // 사용할 이미지 경로
                "texture": "textures/ui/hud_tip_text_background"
            }}
      ]}}
  ]},
  // ???/?? ??
  "durability_temp": {
    // 이미지 표시
    "type": "image",
    // 사용할 이미지 경로
    "texture": "textures/ui/White",
    // 가로/세로 크기
    "size": [ "100%", 2 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": 4,
    // 기준점(어디에서 시작할지)
    "anchor_from": "bottom_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "bottom_left",
    // ?? (R,G,B,A)
    "color": "$color",
    // 오버라이드 가능한 변수
    "$clip_max": 100.0,
    // 오버라이드 가능한 변수
    "$color|default": "$experience_text_color",
    // 오버라이드 가능한 변수
    "$max|default": 100,
    // 오버라이드 가능한 변수
    "$min|default": 80,
    // 오버라이드 가능한 변수
    "$string_pos|default": "%.2s",
    // 이 컨트롤 안에서 쓰는 임시 저장소
    "property_bag": {
      // ???/??? ?
      "#size_binding_x": 0.0
    },
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#form_button_text - ($string_pos * #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#size_progress"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#size_progress > $min - 1) and (#size_progress < $max) and (not (#size_progress = 100)))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#size_progress / $clip_max)",
        // 결과가 들어갈 속성
        "target_property_name": "#size_binding_x"
    }]
  },
  // ???/?? ??
  "gradient_temp": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이미지 표시
    "type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/glint",
		// ???? ??
		"uv_size": [ 64, 64 ],
		// ???? ?? ??
		"uv": "@runeui-salvaging.image_uv_animation"
  },
   // ???/?? ??
   "outline_temp": {
    // 가로/세로 크기
    "size": [ "100% + 2px", "100% + 2px" ],
    // 이미지 표시
    "type": "image",
		// 사용할 이미지 경로
		"texture": "textures/ui/outline",
		// ???? ??
		"uv_size": [ 64, 64 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -5,
		// ???? ?? ??
		"uv": "@runeui-salvaging.image_uv_animation"
  },
	// ???/?? ??
	"image_uv_animation": {
		// Aseprite 프레임 애니메이션
		"anim_type": "aseprite_flip_book",
		// ?? ??
		"initial_uv": [0, 0]
	},
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
                "layer": 3,
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
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "enchantment": {
                      // 데이터 목록을 반복 배치
                      "type": "collection_panel",
                      // 목록 아이템을 자동으로 생성
                      "factory": { "name": "void", "control_name": "runeui-salvaging.gradient_temp", "max_children_size": 1 },
                      // 오버라이드 가능한 변수
                      "$rc_gradient_color1": [ 1.0, 0.333, 1.0, 0 ],
                      // 오버라이드 가능한 변수
                      "$rc_gradient_color2": [ 1.0, 0.333, 1.0, 0.7 ],
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#form_button_text - ('%.6s' * #form_button_text))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#collection_length"
                      }]
                  }},
                  { "durability_bg": {
                      // 이미지 표시
                      "type": "image",
                      // 사용할 이미지 경로
                      "texture": "textures/ui/Black",
                      // 가로/세로 크기
                      "size": [ "100%", 2 ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": 3,
                      // 기준점(어디에서 시작할지)
                      "anchor_from": "bottom_left",
                      // 붙일 위치(어디에 놓을지)
                      "anchor_to": "bottom_left",
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#form_button_text - ('%.2s' * #form_button_text))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#size_progress"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(not (#size_progress = 100))",
                          // 결과가 들어갈 속성
                          "target_property_name": "#visible"
                      }]
                  }},
                  { "durability_green@durability_temp": {}},
                  { "durability_yellow@durability_temp": {
                      // 오버라이드 가능한 변수
                      "$color": [ 0.9254, 0.9137, 0.1843 ],
                      // 오버라이드 가능한 변수
                      "$max": 80,
                      // 오버라이드 가능한 변수
                      "$min": 60
                  }},
                  { "durability_orange@durability_temp": {
                      // 오버라이드 가능한 변수
                      "$color": [ 0.9254, 0.6705, 0.1843 ],
                      // 오버라이드 가능한 변수
                      "$max": 60,
                      // 오버라이드 가능한 변수
                      "$min": 30
                  }},
                  { "durability_red@durability_temp": {
                      // 오버라이드 가능한 변수
                      "$color": [ 0.9254, 0.2941, 0.1843 ],
                      // 오버라이드 가능한 변수
                      "$max": 30,
                      // 오버라이드 가능한 변수
                      "$min": 0
                  }}
            ]}},
            { "outline": {
                // 이미지 표시
                "type": "image",
                // 겹치는 순서(숫자 클수록 위)
                "layer": 1,
                // 사용할 이미지 경로
                "texture": "textures/ui/Black",
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "selected": {
                      // 데이터 목록을 반복 배치
                      "type": "collection_panel",
                      // 목록 아이템을 자동으로 생성
                      "factory": { "name": "void", "control_name": "runeui-salvaging.outline_temp", "max_children_size": 1 },
                      // 게임 값과 연결하는 규칙 목록
                      "bindings": [
                        { "binding_name": "#form_button_text",
                          // 목록 데이터를 반복 연결
                          "binding_type": "collection",
                          // 목록 이름
                          "binding_collection_name": "form_buttons"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#form_button_text - ('%.8s' * #form_button_text) * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#check"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#check = 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#condition"
                        },
                        { "binding_type": "view",
                          // 계산식/참조 값
                          "source_property_name": "(#condition * 1)",
                          // 결과가 들어갈 속성
                          "target_property_name": "#collection_length"
                      }]
                  }}]
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
                            "layer": 1,
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
                                  "text": "#text",
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
                                    },
                                    { "binding_type": "view",
                                      // 계산식/참조 값
                                      "source_property_name": "('§z' + (#form_button_text - (%.10s * #form_button_text)))",
                                      // 결과가 들어갈 속성
                                      "target_property_name": "#text"
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
  ]}
}
```








### .runeui
skill_interface.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: skill_interface.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-skill_interface",
  // ???/?? ??
  "root_panel": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "core@runeui-skill_interface.core": {}}
  ]},
  // ???/?? ??
  "core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "view",
        // ?? ??
        "source_control_name": "koala_title_data_control",
        // 계산식/참조 값
        "source_property_name": "#preserved_text",
        // 결과가 들어갈 속성
        "target_property_name": "#preserved_text"
      },
      // Apparently this doesn't show up without spacing???
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(('§z') + ( #preserved_text - ('%.211s' * #preserved_text)) ) = 1",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "skill_interface_image": {
          // 이미지 표시
          "type": "image",
          // 기준점(어디에서 시작할지)
          "anchor_from": "right_middle",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "right_middle",
          // 사용할 이미지 경로
          "texture": "textures/ui/skill_interface_NEW",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -10,
          // 가로/세로 크기
          "size": [ 110, 99 ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, 0 ]
      }},
      { "agility_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -78, -28.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.231s"
      }},
      { "attack_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -42, -28.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.241s"
      }},
      { "constitution_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -6, -28.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.250s"
      }},
      { "defense_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -78, -14.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.261s"
      }},
      { "digging_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -42, -14.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.272s"
      }},
      { "farming_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -6, -14.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.283s"
      }},
      { "herblore_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -42, -0.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.295s"
      }},
      { "mining_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -6, -0.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.305s"
      }},
      { "prayer_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -78, 13.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.315s"
      }},
      { "ranged_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -42, 13.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.325s"
      }},
      //woodcutting
      { "woodcutting_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -78, 27 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.337s"
      }},
      //thieving
      { "thieving_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -42, 27 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.352s"
      }},
      //smithing
      { "smelting_level@runeui-skill_interface.element_level": {
          // 기준점에서 이동하는 거리
          "offset": [ -6, 13.5 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.374s"
      }},
      { "total_level@runeui-skill_interface.element_level": {
          // ?? (R,G,B,A)
          "color": [ 0.85, 0.85, 0.85 ],
          // 가로/세로 크기
          "size": [ 24, 8 ],
          // 기준점에서 이동하는 거리
          "offset": [ -52, 41 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.218s"
      }},
      {
        // 다른 템플릿을 가져와서 확장(상속)
        "fletching_level@runeui-skill_interface.element_level": {
            // 기준점에서 이동하는 거리
            "offset": [ -78, -0.5],
            // 오버라이드 가능한 변수
            "$label_preserved": "%.384s"
        }
      },
      { "combat_level@runeui-skill_interface.element_level": {
          // ?? (R,G,B,A)
          "color": [ 0.85, 0.85, 0.85 ],
          // 기준점에서 이동하는 거리
          "offset": [ -17, 41 ],
          // 오버라이드 가능한 변수
          "$label_preserved": "%.362s"
      }}
  ]},
  // 다른 템플릿을 가져와서 확장(상속)
  "element_level@runeui-gameplay.element_label_renderer": {
    // ?? ??
    "text_alignment": "center",
    // ?? ??
    "shadow": true,
    // 기준점(어디에서 시작할지)
    "anchor_from": "right_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "right_middle",
    // 가로/세로 크기
    "size": [ 18, 8 ],
    // ?? (R,G,B,A)
    "color": [ 0.89, 0.67, 0.17 ]
  }
}
```








### .runeui
smelting.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: smelting.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-smelting",
  // ???/?? ??
  "element_modal": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'smelting.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 1.000, 0.333, 0.000, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 1.000, 0.333, 0.000, 0.7 ]
      }},
      { "modal@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 1.000, 0.333, 0.000 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-smelting.dialog_modal",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-smelting.scrolling_panel_modal",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-smelting.background",
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
    "$runeui:form_condition": "(not((#title_text - 'smelting.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 1.000, 0.333, 0.000, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 1.000, 0.333, 0.000, 0.7 ]
      }},
      { "form@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 1.000, 0.333, 0.000 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$pos": "%.7s",
          // 오버라이드 가능한 변수
          "$title_alignment": "left",
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-smelting.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-smelting.scrolling_panel",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-smelting.background",
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
    "$runeui:panel_control": "runeui-smelting.dialog_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_modal@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-repair.dialog_modal_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-smelting.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 1.000, 0.333, 0.000, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 1.000, 0.333, 0.000, 0.7 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$title_text_color",
          // 이미지 반복 여부
          "tiled": true
      }}
  ]},
  // ???/?? ??
  "dialog_modal_core": {
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
          "$runeui:help_button": false
      }},
      { "styler@runeui-form.form_style_main": {}}
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
          "$rc_hover_word": "runeui.help.smelting"
      }},
      { "styler@runeui-form.form_style_main": {}},
      { "debug_text": {
          // 글자 표시
          "type": "label",
          // 보여줄 글자
          "text": "#output",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4,
          // ?? ??
          "shadow": true,
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ -54, 6 ],
          // 게임 값과 연결하는 규칙 목록
          "bindings": [
            { "binding_name": "#title_text" },
            { "binding_type": "view",
              // 계산식/참조 값
              "source_property_name": "(('§z') + (#title_text - ('%.3s' * #title_text)))",
              // 결과가 들어갈 속성
              "target_property_name": "#output"
          }]
      }},
      { "fuel_icon": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/blocks/runecraft_furnace_active",
          // 기준점(어디에서 시작할지)
          "anchor_from": "top_right",
          // 붙일 위치(어디에 놓을지)
          "anchor_to": "top_right",
          // 기준점에서 이동하는 거리
          "offset": [ -38, 4.5 ],
          // 가로/세로 크기
          "size": [ 12, 12 ]
      }},
      { "salvage_button@runeui-smelting.salvage_button": {}},
      { "fuel_selection@runeui-smelting.fuel_selection": {}},
      { "selected_tab@runeui-smelting.selected_tab": {}}
  ]},
  // ???/?? ??
  "selected_tab": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -19 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "locked_button@common_buttons.light_text_button": {
          // ??/???
          "enabled": false,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$button_text": "smelting.title",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$locked_text_color": [ 0.5, 0.5, 0.5 ]
      }},
      { "outline": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.5,
          // 가로/세로 크기
          "size": [ "100% + 2px", "100% - 1px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -1.5 ],
          // ?? (R,G,B,A)
          "color": "$title_text_color",
          // 애니메이션 목록
          "anims": [ "@runeui-common.outline_fade_starter" ]
      }}
  ]},
  // ???/?? ??
  "fuel_selection": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-smelting.fuel_selection_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "fuel_selection_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "fuel.title",
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
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'fuel.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // ???/?? ??
  "salvage_button": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "33.333%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_middle",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_middle",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-smelting.salvage_button_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "salvage_button_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "salvage.title",
    // 오버라이드 가능한 변수
    "$button_image_size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$border_visible": false,
    // 오버라이드 가능한 변수
    "$border_alpha": 0,
    // 오버라이드 가능한 변수
    "$button_image_fill": true,
    // 오버라이드 가능한 변수
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'salvage.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-smelting.scrolling_content"
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
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#form_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#form_text = ''))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100% + 6px", "100% + 6px" ],
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": -1,
                      // ?? ??
                      "clip_pixelperfect": true,
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/solid_textbox"
                  }}
            ]}}
      ]}},
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
                "$runeui:panel_control": "runeui-smelting.grid_button_panel_padding",
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
        "source_property_name": "(#form_button_length - 2)",
        // 결과가 들어갈 속성
        "target_property_name": "#maximum_grid_items"
      }
	]},
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel_modal@runeui-form.custom_form_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-smelting.scrolling_modal"
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
          "$button_text": "Smelt!",
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
smithing.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: smithing.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-smithing",
  // ???/?? ??
  "element_modal": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'smith.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.658, 0.690, 0.709, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.658, 0.690, 0.709, 0.7 ]
      }},
      { "modal@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.658, 0.690, 0.709 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-smithing.dialog_modal",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-smithing.scrolling_panel_modal",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-smithing.background",
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
    "$runeui:form_condition": "(not((#title_text - 'smith.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.658, 0.690, 0.709, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.658, 0.690, 0.709, 0.7 ]
      }},
      { "form@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.658, 0.690, 0.709 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-smithing.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-smithing.scrolling_panel",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-smithing.background",
          // 오버라이드 가능한 변수
          "$rc_custom_background_size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
      }}
  ]},
  // ???/?? ??
  "dialog": {
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
      { "main@runeui-form.element_factory": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$runeui:panel_control": "runeui-smithing.dialog_core",
          // 오버라이드 가능한 변수
          "$runeui:condition": "$runeui:form_condition"
      }}
  ]},

  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-smithing.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_modal@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-smithing.dialog_modal_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.658, 0.690, 0.709, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.658, 0.690, 0.709, 0.7 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$title_text_color",
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
          "$rc_hover_word": "runeui.help.smithing"
      }},
      { "styler@runeui-form.form_style_main": {}},
      { "repair@runeui-smithing.repair": {}},
      { "selected_tab@runeui-smithing.selected_tab": {}}
  ]},
  // ???/?? ??
  "dialog_modal_core": {
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
          "$runeui:help_button": false
      }},
      { "styler@runeui-form.form_style_main": {}}
  ]},
  // ???/?? ??
  "selected_tab": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "50%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -19 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "locked_button@common_buttons.light_text_button": {
          // ??/???
          "enabled": false,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$button_text": "smith.title",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$locked_text_color": [ 0.5, 0.5, 0.5 ]
      }},
      { "outline": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.5,
          // 가로/세로 크기
          "size": [ "100% + 2px", "100% - 1px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -1.5 ],
          // ?? (R,G,B,A)
          "color": "$title_text_color"
      }}
  ]},
  // ???/?? ??
  "repair": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "50%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-smithing.repair_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "repair_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "repair.title",
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
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'repair.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-smithing.scrolling_content"
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
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#form_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#form_text = ''))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100% + 6px", "100% + 6px" ],
                      // ?? ??
                      "clip_pixelperfect": true,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": -1,
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/solid_textbox"
                  }}
            ]}}
      ]}},
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
                "$runeui:panel_control": "runeui-smithing.grid_button_panel_padding",
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
    "$scrolling_content": "runeui-smithing.scrolling_modal"
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
          "$button_text": "Smith!",
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
unnoting.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: unnoting.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 이 파일의 이름표(다른 파일에서 @로 참조)
  "namespace": "runeui-unnoting",
  // ???/?? ??
  "element": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 오버라이드 가능한 변수
    "$runeui:form_condition": "(not((#title_text - 'noting_table.unnote.title') = #title_text))",
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
      { "gradient@runeui-common.gradient_background": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.7686, 0.7098, 0.5137, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.7686, 0.7098, 0.5137, 0.7 ]
      }},
      { "form@runeui-form.main_panel_no_buttons": {
          // 가로/세로 크기
          "size": [ 236, 200 ],
          // 오버라이드 가능한 변수
          "$title_text_color": [ 0.7686, 0.7098, 0.5137 ],
          // 오버라이드 가능한 변수
          "$panel_indent_size": [ "100% - 6px", "100% - 26px" ],
          // 오버라이드 가능한 변수
          "$panel_indent_offset": [ 0, 23 ],
          // 오버라이드 가능한 변수
          "$custom_background": "runeui-unnoting.dialog",
          // 오버라이드 가능한 변수
          "$rc_template": "runeui-unnoting.scrolling_panel",
          // 오버라이드 가능한 변수
          "$rc_custom_background": "runeui-unnoting.background",
          // 오버라이드 가능한 변수
          "$rc_custom_background_size": [ "100%", "100%" ],
          // 겹치는 순서(숫자 클수록 위)
          "layer": 4
      }}
  ]},
  // ???/?? ??
  "dialog": {
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
      { "main@runeui-form.element_factory": {
          // 가로/세로 크기
          "size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$runeui:panel_control": "runeui-unnoting.dialog_core",
          // 오버라이드 가능한 변수
          "$runeui:condition": "$runeui:form_condition"
      }}
  ]},

  // 다른 템플릿을 가져와서 확장(상속)
  "background@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-unnoting.background_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "dialog_modal@runeui-form.element_factory": {
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 오버라이드 가능한 변수
    "$runeui:panel_control": "runeui-unnoting.dialog_modal_core",
    // 오버라이드 가능한 변수
    "$runeui:condition": "$runeui:form_condition"
  },
  // ???/?? ??
  "background_core": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "100%", "100%" ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "background_gradient@runeui-common.gradient_background_black": {
          // 오버라이드 가능한 변수
          "$rc_gradient_color1": [ 0.7686, 0.7098, 0.5137, 0 ],
          // 오버라이드 가능한 변수
          "$rc_gradient_color2": [ 0.7686, 0.7098, 0.5137, 0.7 ]
      }},
      { "panel_background": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/form_body_background",
          // 겹치는 순서(숫자 클수록 위)
          "layer": 1,
          // ?? (R,G,B,A)
          "color": "$title_text_color",
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
      // Change your question mark string here (unnoting)
      // don't forget to delete this comment after you done with it -harlow
      { "toolbar@runeui-form.form_style_toolbar": {
          // 오버라이드 가능한 변수
          "$rc_hover_word": "runeui.help.smithing"
      }},
      { "styler@runeui-form.form_style_main": {}},
      { "noting@runeui-unnoting.noting": {}},
      { "unnote_all@runeui-unnoting.unnote_all": {}},
      { "divider@runeui-common.title_bar_divider": {}},
      { "selected_tab@runeui-unnoting.selected_tab": {}}
  ]},
  // ???/?? ??
  "dialog_modal_core": {
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
          "$runeui:help_button": false
      }},
      { "styler@runeui-form.form_style_main": {}}
  ]},
  // ???/?? ??
  "selected_tab": {
    // 패널: 다른 부품을 담는 바닥판
    "type": "panel",
    // 가로/세로 크기
    "size": [ "50%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_right",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_right",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -19 ],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "locked_button@common_buttons.light_text_button": {
          // ??/???
          "enabled": false,
          // 오버라이드 가능한 변수
          "$button_image_size": [ "100%", "100%" ],
          // 오버라이드 가능한 변수
          "$border_visible": false,
          // 오버라이드 가능한 변수
          "$border_alpha": 0,
          // 오버라이드 가능한 변수
          "$button_image_fill": true,
          // 오버라이드 가능한 변수
          "$button_text": "noting_table.unnote.title",
          // 오버라이드 가능한 변수
          "$pressed_button_name": "",
          // 오버라이드 가능한 변수
          "$button_text_max_size": [ "100%", 20 ],
          // 오버라이드 가능한 변수
          "$default_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$hover_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$pressed_button_texture": "textures/ui/form_tab_front_hover",
          // 오버라이드 가능한 변수
          "$locked_button_texture": "textures/ui/form_tab_front",
          // 오버라이드 가능한 변수
          "$locked_text_color": [ 0.5, 0.5, 0.5 ]
      }},
      { "outline": {
          // 이미지 표시
          "type": "image",
          // 사용할 이미지 경로
          "texture": "textures/ui/White",
          // 겹치는 순서(숫자 클수록 위)
          "layer": -2,
          // ???
          "alpha": 0.5,
          // 가로/세로 크기
          "size": [ "100% + 2px", "100% - 1px" ],
          // 기준점에서 이동하는 거리
          "offset": [ 0, -1.5 ],
          // ?? (R,G,B,A)
          "color": "$title_text_color",
          // 애니메이션 목록
          "anims": [ "@runeui-common.outline_fade_starter" ]
      }}
  ]},
  // ???/?? ??
  "unnote_all": {
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
      "control_name": "runeui-unnoting.unnote_all_core"
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
  "unnote_all_core": {
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
        "source_property_name": "(not ((#form_button_text - 'noting_table.unnote.unnote_all') = #form_button_text))",
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
          "$button_type_panel": "runeui-unnoting.unnote_all_icon",
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
  "unnote_all_icon@runeui-common.help_button_default": {
    // 사용할 이미지 경로
    "texture": "textures/ui/noting/note",
    // 가로/세로 크기
    "size": [ 12, 12 ],
    // 기준점에서 이동하는 거리
    "offset": [ 0, 0 ],
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
  // ???/?? ??
  "noting": {
    // 데이터 목록을 반복 배치
    "type": "collection_panel",
    // 가로/세로 크기
    "size": [ "50%", 20 ],
    // 기준점(어디에서 시작할지)
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // 기준점에서 이동하는 거리
    "offset": [ 0, -16 ],
    // 겹치는 순서(숫자 클수록 위)
    "layer": -8,
    // 목록 아이템을 자동으로 생성
    "factory":{
      // ?? ??
      "name": "buttons",
      // ??? ???
      "control_name": "runeui-unnoting.noting_core"
    },
    // 목록 이름
    "collection_name": "form_buttons",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#form_button_length",
        // 가져온 값을 다른 속성으로 연결
        "binding_name_override": "#collection_length"
  }]},
  // 다른 템플릿을 가져와서 확장(상속)
  "noting_core@common_buttons.light_text_button": {
    // 오버라이드 가능한 변수
    "$pressed_button_name": "button.form_button_click",
    // 오버라이드 가능한 변수
    "$button_text": "noting_table.note.title",
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
    "$default_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$hover_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$pressed_button_texture": "textures/ui/form_tab_back_hover",
    // 오버라이드 가능한 변수
    "$locked_button_texture": "textures/ui/form_tab_back",
    // 오버라이드 가능한 변수
    "$default_text_color": [ 0.85, 0.85, 0.85 ],
    // 오버라이드 가능한 변수
    "$hover_text_color": "$dark_button_hover_text_color",
    // 오버라이드 가능한 변수
    "$pressed_text_color": "$dark_button_pressed_text_color",
    // 오버라이드 가능한 변수
    "$locked_text_color": "$dark_button_locked_text_color",
    // 오버라이드 가능한 변수
    "$button_offset": [ 0, -1 ],
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_type": "collection_details",
        // 목록 이름
        "binding_collection_name": "form_buttons"
      },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(not ((#form_button_text - 'noting_table.note.title') = #form_button_text))",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
      },
      { "binding_name": "#form_button_text",
        // 목록 데이터를 반복 연결
        "binding_type": "collection",
        // 목록 이름
        "binding_collection_name": "form_buttons"
    }]
  },
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel@runeui-form.long_form_scrolling_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-unnoting.scrolling_content"
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
    "anchor_from": "top_left",
    // 붙일 위치(어디에 놓을지)
    "anchor_to": "top_left",
    // ?? ??
    "use_child_anchors": true,
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "padding_00": { "type": "panel", "size": [ "100%", 3 ]}},
      { "label_offset_panel": {
          // 패널: 다른 부품을 담는 바닥판
          "type": "panel",
          // 가로/세로 크기
          "size": [ "100%", "100%c" ],
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
                "text": "#form_text",
                // 게임 값과 연결하는 규칙 목록
                "bindings": [
                  { "binding_name": "#form_text" },
                  { "binding_type": "view",
                    // 계산식/참조 값
                    "source_property_name": "(not (#form_text = ''))",
                    // 결과가 들어갈 속성
                    "target_property_name": "#visible"
                }],
                // 이 안에 들어가는 부품 목록
                "controls": [
                  { "background": {
                      // 이미지 표시
                      "type": "image",
                      // 가로/세로 크기
                      "size": [ "100% + 6px", "100% + 6px" ],
                      // ?? ??
                      "clip_pixelperfect": true,
                      // 겹치는 순서(숫자 클수록 위)
                      "layer": -1,
                      // 기준점에서 이동하는 거리
                      "offset": [ -2, 0 ],
                      // 사용할 이미지 경로
                      "texture": "textures/ui/solid_textbox"
                  }}
            ]}}
      ]}},
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
                "$runeui:panel_control": "runeui-unnoting.grid_button_panel_padding",
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
    "grid_item_template": "runeui-unnoting.grid_button_core",
		// ??? ?? ?
		"grid_rescaling_type": "horizontal",
		// 목록 이름
		"collection_name": "form_buttons",
		// 게임 값과 연결하는 규칙 목록
		"bindings": [
			{	"binding_name": "#form_button_length" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "(#form_button_length - 2)",
        // 결과가 들어갈 속성
        "target_property_name": "#maximum_grid_items"
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
                "size": [ 32, 32 ],
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
                // 가로/세로 크기
                "size": [ 32, 32 ],
                // 사용할 이미지 경로
                "texture": "textures/ui/noting/default_frame"
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
                            // 가로/세로 크기
                            "size": [ 32, 32 ],
                            // 사용할 이미지 경로
                            "texture": "textures/ui/noting/hover_frame"
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
  // 다른 템플릿을 가져와서 확장(상속)
  "scrolling_panel_modal@runeui-form.custom_form_panel": {
    // 오버라이드 가능한 변수
    "$scrolling_content": "runeui-unnoting.scrolling_modal"
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
          "$button_text": "Smith!",
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
warning.json
UI 재료 모음 · .runeui



필요한 부분만 참고해서 가져가세요.



```
// 예제: warning.json
// 분류: UI 재료 모음 / .runeui
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "namespace": "runeui-warning",
  // Put those text in a lang by yourself lol
  "root_panel": {
    // 완전히 제거(공간도 없음)
    "ignored": true,
    // 줄맞춤 컨테이너: 가로/세로로 자동 배치
    "type": "stack_panel",
    // 가로/세로 크기
    "size": [ 320, "100%c" ],
    // 쌓는 방향(가로/세로)
    "orientation": "vertical",
    // 게임 값과 연결하는 규칙 목록
    "bindings": [
      { "binding_name": "#hud_title_text_string" },
      { "binding_type": "view",
        // 계산식/참조 값
        "source_property_name": "((#hud_title_text_string - 'Hp:') = #hud_title_text_string)",
        // 결과가 들어갈 속성
        "target_property_name": "#visible"
    }],
    // 이 안에 들어가는 부품 목록
    "controls": [
      { "dialog_box@runeui-common.dialog_box": {
          // 오버라이드 가능한 변수
          "$dialog_text": "WARNING - Your game is incompatible with this version of RuneCraft.\nWhy this might be?"
      }},
      { "padding_01": { "type": "panel", "size": [ 2, 16 ]}},
      { "dialog_box@runeui-common.dialog_box": {
          // 오버라이드 가능한 변수
          "$dialog_text": "1. You are not using the correct version of Minecraft for this add-on (mention current version for the add-on)"
      }},
      { "padding_02": { "type": "panel", "size": [ 2, 16 ]}},
      { "dialog_box@runeui-common.dialog_box": {
          // 오버라이드 가능한 변수
          "$dialog_text": "2. You do not have the following toggles enabled\n  - Custom Biomes\n  - Upcoming Creator Features\n  - Beta-APIs"
      }}
    ]
    // Crashes issue, had to start over for now...
}}
```












### textures


### textures
copper_spear.texture_set.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: copper_spear.texture_set.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ?? ??
    "format_version": "1.21.30",
    // ???/?? ??
    "minecraft:texture_set": {
        // ?? (R,G,B,A)
        "color": "copper_spear",
        // ?? ??
        "metalness_emissive_roughness_subsurface": "copper_spear_mers"
    }
}
```








### textures
diamond_spear.texture_set.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: diamond_spear.texture_set.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ?? ??
    "format_version": "1.21.30",
    // ???/?? ??
    "minecraft:texture_set": {
        // ?? (R,G,B,A)
        "color": "diamond_spear",
        // ?? ??
        "metalness_emissive_roughness_subsurface": "diamond_spear_mers"
    }
}
```








### textures
experiencebarempty.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: experiencebarempty.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 테두리 늘림(9분할)
    "nineslice_size": [
        1,
        0,
        1,
        0
    ],
    // ???/?? ??
    "base_size": [
        182,
        5
    ]
}
```








### textures
experiencebarfull.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: experiencebarfull.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 테두리 늘림(9분할)
    "nineslice_size": [
        1,
        0,
        1,
        0
    ],
    // ???/?? ??
    "base_size": [
        182,
        5
    ]
}
```








### textures
flipbook_textures.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: flipbook_textures.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
[
    {
        // ?? ??
        "atlas_tile": "group_display_herbs",
        // ??? ?? ?
        "flipbook_texture": "textures/items/group_display_herbs",
        // ?? ??
        "ticks_per_frame": 20,
		// ?? ??
		"blend_frames": false
    },
    {
        // ?? ??
        "atlas_tile": "group_display_sponges",
        // ??? ?? ?
        "flipbook_texture": "textures/items/group_display_sponges",
        // ?? ??
        "ticks_per_frame": 20,
		// ?? ??
		"blend_frames": false
    },
    {
        // ?? ??
        "atlas_tile": "group_display_fragments",
        // ??? ?? ?
        "flipbook_texture": "textures/items/group_display_fragments",
        // ?? ??
        "ticks_per_frame": 20,
		// ?? ??
		"blend_frames": false
    },
    {
        // ?? ??
        "atlas_tile": "group_display_buriables",
        // ??? ?? ?
        "flipbook_texture": "textures/items/group_display_buriables",
        // ?? ??
        "ticks_per_frame": 20,
		// ?? ??
		"blend_frames": false
    },
    {
        // ?? ??
        "atlas_tile": "group_display_potions",
        // ??? ?? ?
        "flipbook_texture": "textures/items/group_display_potions",
        // ?? ??
        "ticks_per_frame": 20,
		// ?? ??
		"blend_frames": false
    },
    {
        // ?? ??
        "atlas_tile": "runecraft_furnace_active",
        // ??? ?? ?
        "flipbook_texture": "textures/blocks/furnace_active",
        // ?? ??
        "ticks_per_frame": 20,
		// ?? ??
		"blend_frames": true
    },
    {
        // ?? ??
        "atlas_tile": "fan_spinning_1",
        // ??? ?? ?
        "flipbook_texture": "textures/blocks/fan_spinning_1",
        // ?? ??
        "ticks_per_frame": 1,
		// ?? ??
		"blend_frames": true
    }
]
```








### textures
form_button.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_button.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 5,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_button_pressed.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_button_pressed.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 5,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_scrolling_box.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_scrolling_box.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 3,
  // ???/?? ??
  "base_size": [
    6,
    6
  ]
}
```








### textures
form_scrolling_box_bg.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_scrolling_box_bg.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 3,
  // ???/?? ??
  "base_size": [
    6,
    6
  ]
}
```








### textures
form_scrolling_pane_bg.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_scrolling_pane_bg.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 1,
  // ???/?? ??
  "base_size": [
    1,
    1
  ]
}
```








### textures
form_tab_back.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_back.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_back_full.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_back_full.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_back_hover.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_back_hover.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_back_hover_full.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_back_hover_full.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_front.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_front.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_front_hover.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_front_hover.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_left.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_left.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_left_front.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_left_front.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_left_front_hover.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_left_front_hover.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
form_tab_left_hover.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: form_tab_left_hover.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": 4,
  // ???/?? ??
  "base_size": [
    12,
    11
  ]
}
```








### textures
general_form.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: general_form.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 테두리 늘림(9분할)
    "nineslice_size": 4,
    // ???/?? ??
    "base_size": [
        10,
        10
    ]
}
```








### textures
general_textbox.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: general_textbox.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 테두리 늘림(9분할)
    "nineslice_size": 4,
    // ???/?? ??
    "base_size": [
        12,
        12
    ]
}
```








### textures
glint.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: glint.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "frames": [
   {
    // ?? ??
    "filename": "glint 0.ase",
    // ?? ??
    "frame": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 1.ase",
    // ?? ??
    "frame": { "x": 64, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 2.ase",
    // ?? ??
    "frame": { "x": 128, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 3.ase",
    // ?? ??
    "frame": { "x": 192, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 4.ase",
    // ?? ??
    "frame": { "x": 256, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 5.ase",
    // ?? ??
    "frame": { "x": 320, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 6.ase",
    // ?? ??
    "frame": { "x": 384, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 7.ase",
    // ?? ??
    "frame": { "x": 448, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 8.ase",
    // ?? ??
    "frame": { "x": 512, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 9.ase",
    // ?? ??
    "frame": { "x": 576, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 10.ase",
    // ?? ??
    "frame": { "x": 640, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 11.ase",
    // ?? ??
    "frame": { "x": 704, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 12.ase",
    // ?? ??
    "frame": { "x": 768, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 13.ase",
    // ?? ??
    "frame": { "x": 832, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 14.ase",
    // ?? ??
    "frame": { "x": 896, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 15.ase",
    // ?? ??
    "frame": { "x": 960, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   },
   {
    // ?? ??
    "filename": "glint 16.ase",
    // ?? ??
    "frame": { "x": 1024, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 150
   }
 ],
 // ???/?? ??
 "meta": {
  // ?? ??
  "app": "http://www.aseprite.org/",
  // ?? ??
  "version": "1.3.14.4-dev",
  // ?? ??
  "image": "glint.png",
  // ?? ??
  "format": "RGBA8888",
  // 가로/세로 크기
  "size": { "w": 1088, "h": 64 },
  // ?? ??
  "scale": "1",
  // ???/?? ??
  "frameTags": [
  ],
  // ???/?? ??
  "layers": [
   { "name": "Layer 1", "opacity": 255, "blendMode": "normal" }
  ],
  // ???/?? ??
  "slices": [
  ]
 }
}
```








### textures
gold_spear.texture_set.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: gold_spear.texture_set.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ?? ??
    "format_version": "1.21.30",
    // ???/?? ??
    "minecraft:texture_set": {
        // ?? (R,G,B,A)
        "color": "gold_spear",
        // ?? ??
        "metalness_emissive_roughness_subsurface": "gold_spear_mers"
    }
}
```








### textures
iron_spear.texture_set.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: iron_spear.texture_set.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ?? ??
    "format_version": "1.21.30",
    // ???/?? ??
    "minecraft:texture_set": {
        // ?? (R,G,B,A)
        "color": "iron_spear",
        // ?? ??
        "metalness_emissive_roughness_subsurface": "iron_spear_mers"
    }
}
```








### textures
item_texture.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: item_texture.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // ?? ??
  "resource_pack-name": "vanilla",
  // ??? ?? ?
  "texture_name": "atlas.items",
  // ???/?? ??
  "texture_data": {
    // ???/?? ??
    "pharaoh_tomb": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/pharaoh_tomb"
    },
    // ???/?? ??
    "pharaoh_tomb_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/pharaoh_tomb_fragment"
    },
    // ???/?? ??
    "adventure": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/adventure"
    },
    // ???/?? ??
    "adventure_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/adventure_fragment"
    },
    // ???/?? ??
    "barbarianism": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/barbarianism"
    },
    // ???/?? ??
    "barbarianism_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/barbarianism_fragment"
    },
    // ???/?? ??
    "beneath_the_stronghold": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/beneath_the_stronghold"
    },
    // ???/?? ??
    "beneath_the_stronghold_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/beneath_the_stronghold_fragment"
    },
    // ???/?? ??
    "dogs_of_war": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/dogs_of_war"
    },
    // ???/?? ??
    "dogs_of_war_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/dogs_of_war_fragment"
    },
    // ???/?? ??
    "end": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/end"
    },
    // ???/?? ??
    "end_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/end_fragment"
    },
    // ???/?? ??
    "jungle_trouble": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/jungle_trouble"
    },
    // ???/?? ??
    "jungle_trouble_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/jungle_trouble_fragment"
    },
    // ???/?? ??
    "medieval": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/medieval"
    },
    // ???/?? ??
    "medieval_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/medieval_fragment"
    },
    // ???/?? ??
    "nether_realm": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/nether_realm"
    },
    // ???/?? ??
    "nether_realm_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/nether_realm_fragment"
    },
    // ???/?? ??
    "out_at_the_mines": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/out_at_the_mines"
    },
    // ???/?? ??
    "out_at_the_mines_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/out_at_the_mines_fragment"
    },
    // ???/?? ??
    "sea_shanty": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/sea_shanty"
    },
    // ???/?? ??
    "sea_shanty_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/sea_shanty_fragment"
    },
    // ???/?? ??
    "spooky": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/spooky"
    },
    // ???/?? ??
    "spooky_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/spooky_fragment"
    },
    // ???/?? ??
    "stratosphere": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/stratosphere"
    },
    // ???/?? ??
    "stratosphere_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/stratosphere_fragment"
    },
    // ???/?? ??
    "village": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/village"
    },
    // ???/?? ??
    "village_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/village_fragment"
    },
    // ???/?? ??
    "zamorak_zoo": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/zamorak_zoo"
    },
    // ???/?? ??
    "zamorak_zoo_fragment": {
      // ??? ?? ?
      "textures": "textures/items/exploration/records/zamorak_zoo_fragment"
    },
    // ???/?? ??
    "ranged_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/ranged_skillcape"
    },
    // ???/?? ??
    "agility_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/agility_skillcape"
    },
    // ???/?? ??
    "thieving_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/thieving_skillcape"
    },
    // ???/?? ??
    "defense_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/defense_skillcape"
    },
    // ???/?? ??
    "attack_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/attack_skillcape"
    },
    // ???/?? ??
    "prayer_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/prayer_skillcape"
    },
    // ???/?? ??
    "constitution_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/constitution_skillcape"
    },
    // ???/?? ??
    "farming_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/farming_skillcape"
    },
    // ???/?? ??
    "mining_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/mining_skillcape"
    },
    // ???/?? ??
    "woodcutting_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/woodcutting_skillcape"
    },
    // ???/?? ??
    "digging_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/digging_skillcape"
    },
    // ???/?? ??
    "herblore_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/herblore_skillcape"
    },
    // ???/?? ??
    "smithing_skillcape": {
      // ??? ?? ?
      "textures": "textures/items/skillcapes/smithing_skillcape"
    },
    // ???/?? ??
    "graceful_boots": {
      // ??? ?? ?
      "textures": "textures/items/agility/graceful_boots"
    },
    // ???/?? ??
    "graceful_leggings": {
      // ??? ?? ?
      "textures": "textures/items/agility/graceful_leggings"
    },
    // ???/?? ??
    "graceful_top": {
      // ??? ?? ?
      "textures": "textures/items/agility/graceful_top"
    },
    // ???/?? ??
    "graceful_hood": {
      // ??? ?? ?
      "textures": "textures/items/agility/graceful_hood"
    },
    // ???/?? ??
    "iron_helm": {
      // ??? ?? ?
      "textures": "textures/items/defense/iron_helm"
    },
    // ???/?? ??
    "iron_platebody": {
      // ??? ?? ?
      "textures": "textures/items/defense/iron_platebody"
    },
    // ???/?? ??
    "iron_platelegs": {
      // ??? ?? ?
      "textures": "textures/items/defense/iron_platelegs"
    },
    // ???/?? ??
    "iron_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/iron_boots"
    },
    // ???/?? ??
    "steel_helm": {
      // ??? ?? ?
      "textures": "textures/items/defense/steel_helm"
    },
    // ???/?? ??
    "steel_platebody": {
      // ??? ?? ?
      "textures": "textures/items/defense/steel_platebody"
    },
    // ???/?? ??
    "steel_platelegs": {
      // ??? ?? ?
      "textures": "textures/items/defense/steel_platelegs"
    },
    // ???/?? ??
    "steel_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/steel_boots"
    },
    // ???/?? ??
    "black_helm": {
      // ??? ?? ?
      "textures": "textures/items/defense/black_helm"
    },
    // ???/?? ??
    "black_platebody": {
      // ??? ?? ?
      "textures": "textures/items/defense/black_platebody"
    },
    // ???/?? ??
    "black_platelegs": {
      // ??? ?? ?
      "textures": "textures/items/defense/black_platelegs"
    },
    // ???/?? ??
    "black_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/black_boots"
    },
    // ???/?? ??
    "gold_helm": {
      // ??? ?? ?
      "textures": "textures/items/defense/gold_helm"
    },
    // ???/?? ??
    "gold_platebody": {
      // ??? ?? ?
      "textures": "textures/items/defense/gold_platebody"
    },
    // ???/?? ??
    "gold_platelegs": {
      // ??? ?? ?
      "textures": "textures/items/defense/gold_platelegs"
    },
    // ???/?? ??
    "gold_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/gold_boots"
    },
    // ???/?? ??
    "mithril_helm": {
      // ??? ?? ?
      "textures": "textures/items/defense/mithril_helm"
    },
    // ???/?? ??
    "mithril_platebody": {
      // ??? ?? ?
      "textures": "textures/items/defense/mithril_platebody"
    },
    // ???/?? ??
    "mithril_platelegs": {
      // ??? ?? ?
      "textures": "textures/items/defense/mithril_platelegs"
    },
    // ???/?? ??
    "mithril_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/mithril_boots"
    },
    // ???/?? ??
    "adamant_helm": {
      // ??? ?? ?
      "textures": "textures/items/defense/adamant_helm"
    },
    // ???/?? ??
    "adamant_platebody": {
      // ??? ?? ?
      "textures": "textures/items/defense/adamant_platebody"
    },
    // ???/?? ??
    "adamant_platelegs": {
      // ??? ?? ?
      "textures": "textures/items/defense/adamant_platelegs"
    },
    // ???/?? ??
    "adamant_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/adamant_boots"
    },
    // ???/?? ??
    "rune_helm": {
      // ??? ?? ?
      "textures": "textures/items/defense/rune_helm"
    },
    // ???/?? ??
    "rune_platebody": {
      // ??? ?? ?
      "textures": "textures/items/defense/rune_platebody"
    },
    // ???/?? ??
    "rune_platelegs": {
      // ??? ?? ?
      "textures": "textures/items/defense/rune_platelegs"
    },
    // ???/?? ??
    "rune_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/rune_boots"
    },
    // ???/?? ??
    "wooden_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/wooden_sword"
    },
    // ???/?? ??
    "steel_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/steel_sword"
    },
    // ???/?? ??
    "iron_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/iron_sword"
    },
    // ???/?? ??
    "gold_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/gold_sword"
    },
    // ???/?? ??
    "black_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/black_sword"
    },
    // ???/?? ??
    "mithril_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/mithril_sword"
    },
    // ???/?? ??
    "adamant_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/adamant_sword"
    },
    // ???/?? ??
    "rune_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/rune_sword"
    },
    // ???/?? ??
    "wooden_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/wooden_hoe"
    },
    // ???/?? ??
    "steel_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/steel_hoe"
    },
    // ???/?? ??
    "iron_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/iron_hoe"
    },
    // ???/?? ??
    "gold_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/gold_hoe"
    },
    // ???/?? ??
    "black_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/black_hoe"
    },
    // ???/?? ??
    "mithril_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/mithril_hoe"
    },
    // ???/?? ??
    "adamant_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/adamant_hoe"
    },
    // ???/?? ??
    "rune_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/rune_hoe"
    },
    // ???/?? ??
    "wooden_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/wooden_shovel"
    },
    // ???/?? ??
    "steel_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/steel_shovel"
    },
    // ???/?? ??
    "iron_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/iron_shovel"
    },
    // ???/?? ??
    "gold_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/gold_shovel"
    },
    // ???/?? ??
    "black_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/black_shovel"
    },
    // ???/?? ??
    "mithril_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/mithril_shovel"
    },
    // ???/?? ??
    "adamant_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/adamant_shovel"
    },
    // ???/?? ??
    "rune_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/rune_shovel"
    },
    // ???/?? ??
    "wooden_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/wooden_axe"
    },
    // ???/?? ??
    "steel_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/steel_axe"
    },
    // ???/?? ??
    "iron_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/iron_axe"
    },
    // ???/?? ??
    "gold_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/gold_axe"
    },
    // ???/?? ??
    "black_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/black_axe"
    },
    // ???/?? ??
    "mithril_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/mithril_axe"
    },
    // ???/?? ??
    "adamant_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/adamant_axe"
    },
    // ???/?? ??
    "rune_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/rune_axe"
    },
    // ???/?? ??
    "wooden_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/wooden_pickaxe"
    },
    // ???/?? ??
    "steel_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/steel_pickaxe"
    },
    // ???/?? ??
    "iron_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/iron_pickaxe"
    },
    // ???/?? ??
    "gold_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/gold_pickaxe"
    },
    // ???/?? ??
    "black_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/black_pickaxe"
    },
    // ???/?? ??
    "mithril_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/mithril_pickaxe"
    },
    // ???/?? ??
    "adamant_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/adamant_pickaxe"
    },
    // ???/?? ??
    "rune_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/rune_pickaxe"
    },
    // ???/?? ??
    "rogue_boots": {
      // ??? ?? ?
      "textures": "textures/items/thieving/rogue_boots"
    },
    // ???/?? ??
    "rogue_mask": {
      // ??? ?? ?
      "textures": "textures/items/thieving/rogue_mask"
    },
    // ???/?? ??
    "rogue_top": {
      // ??? ?? ?
      "textures": "textures/items/thieving/rogue_top"
    },
    // ???/?? ??
    "rogue_trousers": {
      // ??? ?? ?
      "textures": "textures/items/thieving/rogue_trousers"
    },
    // ???/?? ??
    "purple_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/thieving/purple_party_hat"
    },
    // ???/?? ??
    "royal_blue_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/exploration/royal_blue_party_hat"
    },
    // ???/?? ??
    "forest_green_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/exploration/forest_green_party_hat"
    },
    // ???/?? ??
    "silver_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/exploration/silver_party_hat"
    },
    // ???/?? ??
    "ore_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/exploration/ore_party_hat"
    },
    // ???/?? ??
    "tree_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/exploration/tree_party_hat"
    },
    // ???/?? ??
    "dirt_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/exploration/dirt_party_hat"
    },
    // ???/?? ??
    "stat_tracker": {
      // ??? ?? ?
      "textures": "textures/items/exploration/stat_tracker"
    },
    // ???/?? ??
    "options": {
      // ??? ?? ?
      "textures": "textures/items/exploration/options_icon"
    },
    // ???/?? ??
    "blood_red_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/tools/blood_red_party_hat"
    },
    // ???/?? ??
    "bones": {
      // ??? ?? ?
      "textures": "textures/items/prayer/bones"
    },
    // ???/?? ??
    "big_bones": {
      // ??? ?? ?
      "textures": "textures/items/prayer/big_bones"
    },
    // ???/?? ??
    "burnt_bones": {
      // ??? ?? ?
      "textures": "textures/items/prayer/burnt_bones"
    },
    // ???/?? ??
    "dragon_bones": {
      // ??? ?? ?
      "textures": "textures/items/prayer/dragon_bones"
    },
    // ???/?? ??
    "warden_core": {
      // ??? ?? ?
      "textures": "textures/items/prayer/warden_core"
    },
    // ???/?? ??
    "wither_spine": {
      // ??? ?? ?
      "textures": "textures/items/prayer/wither_spine"
    },
    // ???/?? ??
    "shade_remains": {
      // ??? ?? ?
      "textures": "textures/items/prayer/shade_remains"
    },
    // ???/?? ??
    "stats_viewer": {
      // ??? ?? ?
      "textures": "textures/items/stats/stats_icon"
    },
    // ???/?? ??
    "magma_cube_remains": {
      // ??? ?? ?
      "textures": "textures/items/prayer/magma_cube_remains"
    },
    // ???/?? ??
    "ghast_remains": {
      // ??? ?? ?
      "textures": "textures/items/prayer/ghast_remains"
    },
    // ???/?? ??
    "slime_remains": {
      // ??? ?? ?
      "textures": "textures/items/prayer/slime_remains"
    },
    // ???/?? ??
    "gilded_altar_centerpiece": {
      // ??? ?? ?
      "textures": "textures/items/prayer/gilded_altar_centerpiece"
    },
    // ???/?? ??
    "dark_green_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/exploration/dark_green_party_hat"
    },
    // ???/?? ??
    "leather_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/leather_boots.png"
    },
    // ???/?? ??
    "leather_boots_dyed": {
      // ??? ?? ?
      "textures": "textures/items/defense/leather_boots.tga"
    },
    // ???/?? ??
    "leather_body": {
      // ??? ?? ?
      "textures": "textures/items/defense/leather_body.png"
    },
    // ???/?? ??
    "leather_body_dyed": {
      // ??? ?? ?
      "textures": "textures/items/defense/leather_body.tga"
    },
    // ???/?? ??
    "leather_leggings": {
      // ??? ?? ?
      "textures": "textures/items/defense/leather_leggings.png"
    },
    // ???/?? ??
    "leather_leggings_dyed": {
      // ??? ?? ?
      "textures": "textures/items/defense/leather_leggings.tga"
    },
    // ???/?? ??
    "leather_cap": {
      // ??? ?? ?
      "textures": "textures/items/defense/leather_cap.png"
    },
    // ???/?? ??
    "leather_cap_dyed": {
      // ??? ?? ?
      "textures": "textures/items/defense/leather_cap.tga"
    },
    // ???/?? ??
    "iron_ingot": {
      // ??? ?? ?
      "textures": "textures/items/ingots/iron_ingot"
    },

    // ???/?? ??
    "adamant_ingot": {
      // ??? ?? ?
      "textures": "textures/items/ingots/adamant_ingot"
    },
    // ???/?? ??
    "rune_ingot": {
      // ??? ?? ?
      "textures": "textures/items/ingots/rune_ingot"
    },
    // ???/?? ??
    "mithril_ingot": {
      // ??? ?? ?
      "textures": "textures/items/ingots/mithril_ingot"
    },
    // ???/?? ??
    "steel_ingot": {
      // ??? ?? ?
      "textures": "textures/items/ingots/steel_ingot"
    },
    // ???/?? ??
    "black_ingot": {
      // ??? ?? ?
      "textures": "textures/items/ingots/black_ingot"
    },
    // ???/?? ??
    "copper_ingot": {
      // ??? ?? ?
      "textures": "textures/items/ingots/copper_ingot"
    },
    // ???/?? ??
    "copper_helm": {
      // ??? ?? ?
      "textures": "textures/items/defense/copper_helm"
    },
    // ???/?? ??
    "copper_platebody": {
      // ??? ?? ?
      "textures": "textures/items/defense/copper_platebody"
    },
    // ???/?? ??
    "copper_platelegs": {
      // ??? ?? ?
      "textures": "textures/items/defense/copper_platelegs"
    },
    // ???/?? ??
    "copper_boots": {
      // ??? ?? ?
      "textures": "textures/items/defense/copper_boots"
    },
    // ???/?? ??
    "copper_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/copper_sword"
    },
    // ???/?? ??
    "copper_pickaxe": {
      // ??? ?? ?
      "textures": "textures/items/tools/copper_pickaxe"
    },
    // ???/?? ??
    "copper_axe": {
      // ??? ?? ?
      "textures": "textures/items/tools/copper_axe"
    },
    // ???/?? ??
    "copper_shovel": {
      // ??? ?? ?
      "textures": "textures/items/tools/copper_shovel"
    },
    // ???/?? ??
    "copper_hoe": {
      // ??? ?? ?
      "textures": "textures/items/tools/copper_hoe"
    },
    // ???/?? ??
    "fancy_boots": {
      // ??? ?? ?
      "textures": "textures/items/exploration/fancy_boots"
    },
    // ???/?? ??
    "fighting_boots": {
      // ??? ?? ?
      "textures": "textures/items/exploration/fighting_boots"
    },
    // ???/?? ??
    "adamant_ore": {
      // ??? ?? ?
      "textures": "textures/items/ores/adamant_ore"
    },
    // ???/?? ??
    "raw_copper": {
      // ??? ?? ?
      "textures": "textures/items/ores/copper_ore"
    },
    // ???/?? ??
    "raw_iron": {
      // ??? ?? ?
      "textures": "textures/items/ores/iron_ore"
    },
    // ???/?? ??
    "mithril_ore": {
      // ??? ?? ?
      "textures": "textures/items/ores/mithril_ore"
    },
    // ???/?? ??
    "rune_ore": {
      // ??? ?? ?
      "textures": "textures/items/ores/rune_ore"
    },
    // ???/?? ??
    "gold_nugget": {
      // ??? ?? ?
      "textures": "textures/items/ingots/gold_nugget"
    },
    // ???/?? ??
    "gold_ingot": {
      // ??? ?? ?
      "textures": "textures/items/ingots/gold_ingot"
    },
    // ???/?? ??
    "iron_nugget": {
      // ??? ?? ?
      "textures": "textures/items/ingots/iron_nugget"
    },
    // ???/?? ??
    "uncut_emerald": {
      // ??? ?? ?
      "textures": "textures/items/ores/uncut_emerald_gem"
    },
    // ???/?? ??
    "uncut_jade": {
      // ??? ?? ?
      "textures": "textures/items/ores/uncut_jade_gem"
    },
    // ???/?? ??
    "uncut_opal": {
      // ??? ?? ?
      "textures": "textures/items/ores/uncut_opal_gem"
    },
    // ???/?? ??
    "uncut_red_topaz": {
      // ??? ?? ?
      "textures": "textures/items/ores/uncut_red_topaz_gem"
    },
    // ???/?? ??
    "uncut_diamond": {
      // ??? ?? ?
      "textures": "textures/items/ores/uncut_diamond_gem"
    },
    // ???/?? ??
    "uncut_ruby": {
      // ??? ?? ?
      "textures": "textures/items/ores/uncut_ruby_gem"
    },
    // ???/?? ??
    "uncut_sapphire": {
      // ??? ?? ?
      "textures": "textures/items/ores/uncut_sapphire_gem"
    },
    // ???/?? ??
    "emerald": {
      // ??? ?? ?
      "textures": "textures/items/ingots/emerald_gem"
    },
    // ???/?? ??
    "jade": {
      // ??? ?? ?
      "textures": "textures/items/ingots/jade_gem"
    },
    // ???/?? ??
    "opal": {
      // ??? ?? ?
      "textures": "textures/items/ingots/opal_gem"
    },
    // ???/?? ??
    "red_topaz": {
      // ??? ?? ?
      "textures": "textures/items/ingots/red_topaz_gem"
    },
    // ???/?? ??
    "diamond": {
      // ??? ?? ?
      "textures": "textures/items/ingots/diamond_gem"
    },
    // ???/?? ??
    "ruby": {
      // ??? ?? ?
      "textures": "textures/items/ingots/ruby_gem"
    },
    // ???/?? ??
    "sapphire": {
      // ??? ?? ?
      "textures": "textures/items/ingots/sapphire_gem"
    },
    // ???/?? ??
    "bag_full_of_gems": {
      // ??? ?? ?
      "textures": "textures/items/ingots/bag_full_of_gems"
    },
    // ???/?? ??
    "prayer_book": {
      // ??? ?? ?
      "textures": "textures/items/prayer/prayer_book"
    },
    // ???/?? ??
    "prayer_book_dyed": {
      // ??? ?? ?
      "textures": "textures/items/prayer/prayer_book.tga"
    },
    //mob heads
    "witch_head": {
      // ??? ?? ?
      "textures": "textures/items/mob_heads/witch_head"
    },
    // ???/?? ??
    "panda_head": {
      // ??? ?? ?
      "textures": "textures/items/mob_heads/panda_head"
    },
    // ???/?? ??
    "panda_head_brown": {
      // ??? ?? ?
      "textures": "textures/items/mob_heads/panda_head_brown"
    },
    // ???/?? ??
    "llama_head_brown": {
      // ??? ?? ?
      "textures": "textures/items/mob_heads/llama_head_brown"
    },
    // ???/?? ??
    "llama_head_cream": {
      // ??? ?? ?
      "textures": "textures/items/mob_heads/llama_head_cream"
    },
    // ???/?? ??
    "llama_head_white": {
      // ??? ?? ?
      "textures": "textures/items/mob_heads/llama_head_white"
    },
    // ???/?? ??
    "llama_head_gray": {
      // ??? ?? ?
      "textures": "textures/items/mob_heads/llama_head_gray"
    },
    // ???/?? ??
    "skillmasters_sword": {
      // ??? ?? ?
      "textures": "textures/items/tools/skillmaster/skillmasters_sword"
    },
    // ???/?? ??
    "leather_horse_armor": {
      // ??? ?? ?
      "textures": "textures/items/defense/horse/leather_horse_armor"
    },
    // ???/?? ??
    "iron_horse_armor": {
      // ??? ?? ?
      "textures": "textures/items/defense/horse/iron_horse_armor"
    },
    // ???/?? ??
    "black_horse_armor": {
      // ??? ?? ?
      "textures": "textures/items/defense/horse/black_horse_armor"
    },
    // ???/?? ??
    "steel_horse_armor": {
      // ??? ?? ?
      "textures": "textures/items/defense/horse/steel_horse_armor"
    },
    // ???/?? ??
    "adamant_horse_armor": {
      // ??? ?? ?
      "textures": "textures/items/defense/horse/adamant_horse_armor"
    },
    // ???/?? ??
    "mithril_horse_armor": {
      // ??? ?? ?
      "textures": "textures/items/defense/horse/mithril_horse_armor"
    },
    // ???/?? ??
    "rune_horse_armor": {
      // ??? ?? ?
      "textures": "textures/items/defense/horse/rune_horse_armor"
    },
    //Fishing
    "small_fishing_net": {
      // ??? ?? ?
      "textures": "textures/items/fishing/small_fishing_net"
    },
    //Farming
    "low_grade_fertilizer": {
      // ??? ?? ?
      "textures": "textures/items/farming/low_grade_fertilizer"
    },
    // ???/?? ??
    "mid_grade_fertilizer": {
      // ??? ?? ?
      "textures": "textures/items/farming/mid_grade_fertilizer"
    },
    // ???/?? ??
    "high_grade_fertilizer": {
      // ??? ?? ?
      "textures": "textures/items/farming/high_grade_fertilizer"
    },
    // ???/?? ??
    "compost_bucket_empty": {
      // ??? ?? ?
      "textures": "textures/items/farming/compost_bucket_empty"
    },
    // ???/?? ??
    "plant_cure": {
      // ??? ?? ?
      "textures": "textures/items/farming/plant_cure"
    },
    //Herblore
    "fireflax": {
      // ??? ?? ?
      "textures": "textures/items/herblore/fireflax"
    },
    // ???/?? ??
    "grimy_bubblo": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_bubblo"
    },
    // ???/?? ??
    "grimy_endurill": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_endurill"
    },
    // ???/?? ??
    "grimy_enhantoe": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_enhantoe"
    },
    // ???/?? ??
    "grimy_jumia": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_jumia"
    },
    // ???/?? ??
    "grimy_reveril": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_reveril"
    },
    // ???/?? ??
    "grimy_shiftar": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_shiftar"
    },
    // ???/?? ??
    "grimy_slowent": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_slowent"
    },
    // ???/?? ??
    "grimy_strontar": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_strontar"
    },
    // ???/?? ??
    "grimy_swiftine": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_swiftine"
    },
    // ???/?? ??
    "grimy_telerit": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_telerit"
    },
    // ???/?? ??
    "grimy_windrill": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_windrill"
    },
    // ???/?? ??
    "grimy_shapis": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_shapis"
    },
    // ???/?? ??
    "grimy_visadyme": {
      // ??? ?? ?
      "textures": "textures/items/herblore/grimy_visadyme"
    },
    // ???/?? ??
    "shapis": {
      // ??? ?? ?
      "textures": "textures/items/herblore/shapis"
    },
    // ???/?? ??
    "shapis_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/shapis_seeds"
    },
    // ???/?? ??
    "visadyme_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/visadyme_seeds"
    },
    // ???/?? ??
    "bubblo": {
      // ??? ?? ?
      "textures": "textures/items/herblore/bubblo"
    },
    // ???/?? ??
    "endurill": {
      // ??? ?? ?
      "textures": "textures/items/herblore/endurill"
    },
    // ???/?? ??
    "enhantoe": {
      // ??? ?? ?
      "textures": "textures/items/herblore/enhantoe"
    },
    // ???/?? ??
    "jumia": {
      // ??? ?? ?
      "textures": "textures/items/herblore/jumia"
    },
    // ???/?? ??
    "reveril": {
      // ??? ?? ?
      "textures": "textures/items/herblore/reveril"
    },
    // ???/?? ??
    "shiftar": {
      // ??? ?? ?
      "textures": "textures/items/herblore/shiftar"
    },
    // ???/?? ??
    "slowent": {
      // ??? ?? ?
      "textures": "textures/items/herblore/slowent"
    },
    // ???/?? ??
    "visadyme": {
      // ??? ?? ?
      "textures": "textures/items/herblore/visadyme"
    },
    // ???/?? ??
    "strontar": {
      // ??? ?? ?
      "textures": "textures/items/herblore/strontar"
    },
    // ???/?? ??
    "swiftine": {
      // ??? ?? ?
      "textures": "textures/items/herblore/swiftine"
    },
    // ???/?? ??
    "telerit": {
      // ??? ?? ?
      "textures": "textures/items/herblore/telerit"
    },
    // ???/?? ??
    "windrill": {
      // ??? ?? ?
      "textures": "textures/items/herblore/windrill"
    },
    // ???/?? ??
    "bubblo_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/bubblo_seeds"
    },
    // ???/?? ??
    "endurill_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/endurill_seeds"
    },
    // ???/?? ??
    "enhantoe_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/enhantoe_seeds"
    },
    // ???/?? ??
    "jumia_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/jumia_seeds"
    },
    // ???/?? ??
    "reveril_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/reveril_seeds"
    },
    // ???/?? ??
    "shiftar_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/shiftar_seeds"
    },
    // ???/?? ??
    "slowent_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/slowent_seeds"
    },
    // ???/?? ??
    "strontar_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/strontar_seeds"
    },
    // ???/?? ??
    "swiftine_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/swiftine_seeds"
    },
    // ???/?? ??
    "telerit_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/telerit_seeds"
    },
    // ???/?? ??
    "windrill_seeds": {
      // ??? ?? ?
      "textures": "textures/items/farming/windrill_seeds"
    },
    //potions
    "potion_bottle_empty": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/glass_bottle"
    },
    // ???/?? ??
    "honey_bottle": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/honey_bottle"
    },
    // ???/?? ??
    "potion_bottle_drinkable": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/water_bottle"
    },
    // ???/?? ??
    "jump_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/jump_potion_4"
    },
    // ???/?? ??
    "jump_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/jump_potion_3"
    },
    // ???/?? ??
    "jump_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/jump_potion_2"
    },
    // ???/?? ??
    "jump_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/jump_potion_1"
    },
    // ???/?? ??
    "blindness_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/blindness_potion_4"
    },
    // ???/?? ??
    "blindness_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/blindness_potion_3"
    },
    // ???/?? ??
    "blindness_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/blindness_potion_2"
    },
    // ???/?? ??
    "blindness_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/blindness_potion_1"
    },
    // ???/?? ??
    "leap_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/leap_potion_4"
    },
    // ???/?? ??
    "leap_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/leap_potion_3"
    },
    // ???/?? ??
    "leap_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/leap_potion_2"
    },
    // ???/?? ??
    "leap_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/leap_potion_1"
    },
    // ???/?? ??
    "fire_resistance_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/fire_resistance_potion_4"
    },
    // ???/?? ??
    "fire_resistance_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/fire_resistance_potion_3"
    },
    // ???/?? ??
    "fire_resistance_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/fire_resistance_potion_2"
    },
    // ???/?? ??
    "fire_resistance_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/fire_resistance_potion_1"
    },
    // ???/?? ??
    "stamina_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/stamina_potion_4"
    },
    // ???/?? ??
    "stamina_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/stamina_potion_3"
    },
    // ???/?? ??
    "stamina_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/stamina_potion_2"
    },
    // ???/?? ??
    "stamina_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/stamina_potion_1"
    },
    // ???/?? ??
    "cure_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/cure_potion_4"
    },
    // ???/?? ??
    "cure_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/cure_potion_3"
    },
    // ???/?? ??
    "cure_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/cure_potion_2"
    },
    // ???/?? ??
    "cure_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/cure_potion_1"
    },
    // ???/?? ??
    "grow_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/grow_potion_4"
    },
    // ???/?? ??
    "grow_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/grow_potion_3"
    },
    // ???/?? ??
    "grow_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/grow_potion_2"
    },
    // ???/?? ??
    "grow_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/grow_potion_1"
    },
    // ???/?? ??
    "haste_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/haste_potion_4"
    },
    // ???/?? ??
    "haste_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/haste_potion_3"
    },
    // ???/?? ??
    "haste_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/haste_potion_2"
    },
    // ???/?? ??
    "haste_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/haste_potion_1"
    },
    // ???/?? ??
    "invisibility_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/invisibility_potion_4"
    },
    // ???/?? ??
    "invisibility_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/invisibility_potion_3"
    },
    // ???/?? ??
    "invisibility_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/invisibility_potion_2"
    },
    // ???/?? ??
    "invisibility_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/invisibility_potion_1"
    },
    // ???/?? ??
    "levitation_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/levitation_potion_4"
    },
    // ???/?? ??
    "levitation_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/levitation_potion_3"
    },
    // ???/?? ??
    "levitation_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/levitation_potion_2"
    },
    // ???/?? ??
    "levitation_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/levitation_potion_1"
    },
    // ???/?? ??
    "night_vision_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/night_vision_potion_4"
    },
    // ???/?? ??
    "night_vision_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/night_vision_potion_3"
    },
    // ???/?? ??
    "night_vision_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/night_vision_potion_2"
    },
    // ???/?? ??
    "night_vision_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/night_vision_potion_1"
    },
    // ???/?? ??
    "prayer_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/prayer_potion_4"
    },
    // ???/?? ??
    "prayer_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/prayer_potion_3"
    },
    // ???/?? ??
    "prayer_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/prayer_potion_2"
    },
    // ???/?? ??
    "prayer_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/prayer_potion_1"
    },
    // ???/?? ??
    "shrink_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/shrink_potion_4"
    },
    // ???/?? ??
    "shrink_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/shrink_potion_3"
    },
    // ???/?? ??
    "shrink_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/shrink_potion_2"
    },
    // ???/?? ??
    "shrink_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/shrink_potion_1"
    },
    // ???/?? ??
    "slow_falling_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/slow_falling_potion_4"
    },
    // ???/?? ??
    "slow_falling_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/slow_falling_potion_3"
    },
    // ???/?? ??
    "slow_falling_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/slow_falling_potion_2"
    },
    // ???/?? ??
    "slow_falling_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/slow_falling_potion_1"
    },
    // ???/?? ??
    "strength_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/strength_potion_4"
    },
    // ???/?? ??
    "strength_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/strength_potion_3"
    },
    // ???/?? ??
    "strength_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/strength_potion_2"
    },
    // ???/?? ??
    "strength_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/strength_potion_1"
    },
    // ???/?? ??
    "swiftness_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/swiftness_potion_4"
    },
    // ???/?? ??
    "swiftness_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/swiftness_potion_3"
    },
    // ???/?? ??
    "swiftness_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/swiftness_potion_2"
    },
    // ???/?? ??
    "swiftness_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/swiftness_potion_1"
    },
    // ???/?? ??
    "teleport_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/teleport_potion_4"
    },
    // ???/?? ??
    "teleport_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/teleport_potion_3"
    },
    // ???/?? ??
    "teleport_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/teleport_potion_2"
    },
    // ???/?? ??
    "teleport_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/teleport_potion_1"
    },
    // ???/?? ??
    "transformation_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/transformation_potion_4"
    },
    // ???/?? ??
    "transformation_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/transformation_potion_3"
    },
    // ???/?? ??
    "transformation_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/transformation_potion_2"
    },
    // ???/?? ??
    "transformation_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/transformation_potion_1"
    },
    // ???/?? ??
    "water_breathing_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/water_breathing_potion_4"
    },
    // ???/?? ??
    "water_breathing_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/water_breathing_potion_3"
    },
    // ???/?? ??
    "water_breathing_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/water_breathing_potion_2"
    },
    // ???/?? ??
    "water_breathing_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/water_breathing_potion_1"
    },
    // ???/?? ??
    "self_destruct_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/self_destruct_potion_4"
    },
    // ???/?? ??
    "self_destruct_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/self_destruct_potion_3"
    },
    // ???/?? ??
    "self_destruct_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/self_destruct_potion_2"
    },
    // ???/?? ??
    "self_destruct_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/self_destruct_potion_1"
    },
    // ???/?? ??
    "resistance_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/resistance_potion_4"
    },
    // ???/?? ??
    "resistance_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/resistance_potion_3"
    },
    // ???/?? ??
    "resistance_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/resistance_potion_2"
    },
    // ???/?? ??
    "resistance_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/resistance_potion_1"
    },
    // ???/?? ??
    "darkness_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/darkness_potion_4"
    },
    // ???/?? ??
    "darkness_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/darkness_potion_3"
    },
    // ???/?? ??
    "darkness_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/darkness_potion_2"
    },
    // ???/?? ??
    "darkness_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/darkness_potion_1"
    },
    // ???/?? ??
    "infested_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/infested_potion_4"
    },
    // ???/?? ??
    "infested_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/infested_potion_3"
    },
    // ???/?? ??
    "infested_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/infested_potion_2"
    },
    // ???/?? ??
    "infested_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/infested_potion_1"
    },
    // ???/?? ??
    "oozing_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/oozing_potion_4"
    },
    // ???/?? ??
    "oozing_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/oozing_potion_3"
    },
    // ???/?? ??
    "oozing_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/oozing_potion_2"
    },
    // ???/?? ??
    "oozing_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/oozing_potion_1"
    },
    // ???/?? ??
    "poison_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/poison_potion_4"
    },
    // ???/?? ??
    "poison_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/poison_potion_3"
    },
    // ???/?? ??
    "poison_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/poison_potion_2"
    },
    // ???/?? ??
    "poison_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/poison_potion_1"
    },
    // ???/?? ??
    "slowness_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/slowness_potion_4"
    },
    // ???/?? ??
    "slowness_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/slowness_potion_3"
    },
    // ???/?? ??
    "slowness_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/slowness_potion_2"
    },
    // ???/?? ??
    "slowness_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/slowness_potion_1"
    },
    // ???/?? ??
    "weakness_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/weakness_potion_4"
    },
    // ???/?? ??
    "weakness_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/weakness_potion_3"
    },
    // ???/?? ??
    "weakness_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/weakness_potion_2"
    },
    // ???/?? ??
    "weakness_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/weakness_potion_1"
    },
    // ???/?? ??
    "weaving_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/weaving_potion_4"
    },
    // ???/?? ??
    "weaving_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/weaving_potion_3"
    },
    // ???/?? ??
    "weaving_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/weaving_potion_2"
    },
    // ???/?? ??
    "weaving_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/weaving_potion_1"
    },
    // ???/?? ??
    "wind_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/wind_potion_4"
    },
    // ???/?? ??
    "wind_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/wind_potion_3"
    },
    // ???/?? ??
    "wind_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/wind_potion_2"
    },
    // ???/?? ??
    "wind_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/wind_potion_1"
    },
    // ???/?? ??
    "below_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/below_potion_4"
    },
    // ???/?? ??
    "below_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/below_potion_3"
    },
    // ???/?? ??
    "below_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/below_potion_2"
    },
    // ???/?? ??
    "below_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/below_potion_1"
    },
    // ???/?? ??
    "surface_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/surface_potion_4"
    },
    // ???/?? ??
    "surface_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/surface_potion_3"
    },
    // ???/?? ??
    "surface_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/surface_potion_2"
    },
    // ???/?? ??
    "surface_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/surface_potion_1"
    },
    // ???/?? ??
    "roar_potion_4": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/roar_potion_4"
    },
    // ???/?? ??
    "roar_potion_3": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/roar_potion_3"
    },
    // ???/?? ??
    "roar_potion_2": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/roar_potion_2"
    },
    // ???/?? ??
    "roar_potion_1": {
      // ??? ?? ?
      "textures": "textures/items/herblore/potions/roar_potion_1"
    },
    // ???/?? ??
    "totem_of_preservation": {
      // ??? ?? ?
      "textures": "textures/items/totem_of_preservation"
    },
    // ???/?? ??
    "leather_chestplate": {
      // ??? ?? ?
      "textures": "textures/items/leather_chestplate"
    },
    // ???/?? ??
    "white_rose": {
      // ??? ?? ?
      "textures": "textures/blocks/farming/white_rose"
    },
    // ???/?? ??
    "uncharged_wither_core": {
      // ??? ?? ?
      "textures": "textures/items/uncharged_wither_core"
    },
    // ???/?? ??
    "charged_wither_core": {
      // ??? ?? ?
      "textures": "textures/items/charged_wither_core"
    },
    // ???/?? ??
    "adamant_nugget": {
      // ??? ?? ?
      "textures": "textures/items/ingots/adamant_nugget"
    },
    // ???/?? ??
    "steel_nugget": {
      // ??? ?? ?
      "textures": "textures/items/ingots/steel_nugget"
    },
    // ???/?? ??
    "rune_nugget": {
      // ??? ?? ?
      "textures": "textures/items/ingots/rune_nugget"
    },
    // ???/?? ??
    "mithril_nugget": {
      // ??? ?? ?
      "textures": "textures/items/ingots/mithril_nugget"
    },
    // ???/?? ??
    "black_nugget": {
      // ??? ?? ?
      "textures": "textures/items/ingots/black_nugget"
    },
    // ???/?? ??
    "copper_nugget": {
      // ??? ?? ?
      "textures": "textures/items/ingots/copper_nugget"
    },
    // ???/?? ??
    "beginner_bow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/beginner_bow_standby"
    },
    // ???/?? ??
    "dark_oak_bow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/dark_oak_bow_standby"
    },
    // ???/?? ??
    "cherry_bow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/cherry_bow_standby"
    },
    // ???/?? ??
    "pale_bow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/pale_bow_standby"
    },
    // ???/?? ??
    "mangrove_bow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/mangrove_bow_standby"
    },
    // ???/?? ??
    "warped_bow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/warped_bow_standby"
    },
    // ???/?? ??
    "crimson_bow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/crimson_bow_standby"
    },
    // ???/?? ??
    "flint_arrow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/flint_arrow"
    },
    // ???/?? ??
    "copper_arrow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/copper_arrow"
    },
    // ???/?? ??
    "iron_arrow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/iron_arrow"
    },
    // ???/?? ??
    "steel_arrow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/steel_arrow"
    },
    // ???/?? ??
    "mithril_arrow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/mithril_arrow"
    },
    // ???/?? ??
    "adamant_arrow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/adamant_arrow"
    },
    // ???/?? ??
    "rune_arrow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/rune_arrow"
    },
    // ???/?? ??
    "flint_arrow_tips": {
      // ??? ?? ?
      "textures": "textures/items/ranged/flint_arrow_tips"
    },
    // ???/?? ??
    "copper_arrow_tips": {
      // ??? ?? ?
      "textures": "textures/items/ranged/copper_arrow_tips"
    },
    // ???/?? ??
    "iron_arrow_tips": {
      // ??? ?? ?
      "textures": "textures/items/ranged/iron_arrow_tips"
    },
    // ???/?? ??
    "steel_arrow_tips": {
      // ??? ?? ?
      "textures": "textures/items/ranged/steel_arrow_tips"
    },
    // ???/?? ??
    "mithril_arrow_tips": {
      // ??? ?? ?
      "textures": "textures/items/ranged/mithril_arrow_tips"
    },
    // ???/?? ??
    "adamant_arrow_tips": {
      // ??? ?? ?
      "textures": "textures/items/ranged/adamant_arrow_tips"
    },
    // ???/?? ??
    "rune_arrow_tips": {
      // ??? ?? ?
      "textures": "textures/items/ranged/rune_arrow_tips"
    },
    // ???/?? ??
    "smithing_party_hat": {
      // ??? ?? ?
      "textures": "textures/items/exploration/smithing_party_hat"
    },
    // ???/?? ??
    "acacia_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/acacia_chest_boat_note"
    },
    // ???/?? ??
    "adamant_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_axe_note"
    },
    // ???/?? ??
    "adamant_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_boots_note"
    },
    // ???/?? ??
    "adamant_helm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_helm_note"
    },
    // ???/?? ??
    "adamant_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_hoe_note"
    },
    // ???/?? ??
    "adamant_horse_armor_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_horse_armor_note"
    },
    // ???/?? ??
    "adamant_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_pickaxe_note"
    },
    // ???/?? ??
    "adamant_platebody_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_platebody_note"
    },
    // ???/?? ??
    "adamant_platelegs_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_platelegs_note"
    },
    // ???/?? ??
    "adamant_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_shovel_note"
    },
    // ???/?? ??
    "adamant_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_sword_note"
    },
    // ???/?? ??
    "adventure_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adventure_note"
    },
    // ???/?? ??
    "agility_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/agility_skillcape_note"
    },
    // ???/?? ??
    "attack_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/attack_skillcape_note"
    },
    // ???/?? ??
    "bamboo_chest_raft_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/bamboo_chest_raft_note"
    },
    // ???/?? ??
    "bamboo_raft_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/bamboo_raft_note"
    },
    // ???/?? ??
    "barbarianism_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/barbarianism_note"
    },
    // ???/?? ??
    "below_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/below_potion_1_note"
    },
    // ???/?? ??
    "below_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/below_potion_2_note"
    },
    // ???/?? ??
    "below_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/below_potion_3_note"
    },
    // ???/?? ??
    "below_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/below_potion_4_note"
    },
    // ???/?? ??
    "beneath_the_stronghold_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/beneath_the_stronghold_note"
    },
    // ???/?? ??
    "birch_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/birch_chest_boat_note"
    },
    // ???/?? ??
    "black_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_axe_note"
    },
    // ???/?? ??
    "black_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_boots_note"
    },
    // ???/?? ??
    "black_helm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_helm_note"
    },
    // ???/?? ??
    "black_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_hoe_note"
    },
    // ???/?? ??
    "black_horse_armor_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_horse_armor_note"
    },
    // ???/?? ??
    "black_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_pickaxe_note"
    },
    // ???/?? ??
    "black_platebody_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_platebody_note"
    },
    // ???/?? ??
    "black_platelegs_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_platelegs_note"
    },
    // ???/?? ??
    "black_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_shovel_note"
    },
    // ???/?? ??
    "black_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_sword_note"
    },
    // ???/?? ??
    "blindness_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/blindness_potion_1_note"
    },
    // ???/?? ??
    "blindness_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/blindness_potion_2_note"
    },
    // ???/?? ??
    "blindness_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/blindness_potion_3_note"
    },
    // ???/?? ??
    "blindness_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/blindness_potion_4_note"
    },
    // ???/?? ??
    "blood_red_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/blood_red_party_hat_note"
    },
    // ???/?? ??
    "boat_acacia_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/boat_acacia_note"
    },
    // ???/?? ??
    "boat_birch_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/boat_birch_note"
    },
    // ???/?? ??
    "boat_darkoak_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/boat_darkoak_note"
    },
    // ???/?? ??
    "boat_dark_oak_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/boat_dark_oak_note"
    },
    // ???/?? ??
    "boat_jungle_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/boat_jungle_note"
    },
    // ???/?? ??
    "boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/boat_note"
    },
    // ???/?? ??
    "boat_oak_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/boat_oak_note"
    },
    // ???/?? ??
    "boat_spruce_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/boat_spruce_note"
    },
    // ???/?? ??
    "bordure_indented_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/bordure_indented_banner_pattern_note"
    },
    // ???/?? ??
    "bronze_horse_armor_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/bronze_horse_armor_note"
    },
    // ???/?? ??
    "charged_wither_core_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/charged_wither_core_note"
    },
    // ???/?? ??
    "cherry_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/cherry_boat_note"
    },
    // ???/?? ??
    "cherry_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/cherry_chest_boat_note"
    },
    // ???/?? ??
    "constitution_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/constitution_skillcape_note"
    },
    // ???/?? ??
    "copper_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_axe_note"
    },
    // ???/?? ??
    "copper_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_boots_note"
    },
    // ???/?? ??
    "copper_helm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_helm_note"
    },
    // ???/?? ??
    "copper_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_hoe_note"
    },
    // ???/?? ??
    "copper_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_pickaxe_note"
    },
    // ???/?? ??
    "copper_platebody_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_platebody_note"
    },
    // ???/?? ??
    "copper_platelegs_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_platelegs_note"
    },
    // ???/?? ??
    "copper_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_shovel_note"
    },
    // ???/?? ??
    "copper_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_sword_note"
    },
    // ???/?? ??
    "creeper_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/creeper_banner_pattern_note"
    },
    // ???/?? ??
    "cure_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/cure_potion_1_note"
    },
    // ???/?? ??
    "cure_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/cure_potion_2_note"
    },
    // ???/?? ??
    "cure_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/cure_potion_3_note"
    },
    // ???/?? ??
    "cure_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/cure_potion_4_note"
    },
    // ???/?? ??
    "darkness_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/darkness_potion_1_note"
    },
    // ???/?? ??
    "darkness_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/darkness_potion_2_note"
    },
    // ???/?? ??
    "darkness_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/darkness_potion_3_note"
    },
    // ???/?? ??
    "darkness_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/darkness_potion_4_note"
    },
    // ???/?? ??
    "dark_green_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/dark_green_party_hat_note"
    },
    // ???/?? ??
    "dark_oak_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/dark_oak_chest_boat_note"
    },
    // ???/?? ??
    "defense_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/defense_skillcape_note"
    },
    // ???/?? ??
    "digging_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/digging_skillcape_note"
    },
    // ???/?? ??
    "dirt_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/dirt_party_hat_note"
    },
    // ???/?? ??
    "dogs_of_war_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/dogs_of_war_note"
    },
    // ???/?? ??
    "end_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/end_note"
    },
    // ???/?? ??
    "fancy_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/fancy_boots_note"
    },
    // ???/?? ??
    "farming_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/farming_skillcape_note"
    },
    // ???/?? ??
    "field_masoned_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/field_masoned_banner_pattern_note"
    },
    // ???/?? ??
    "fighting_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/fighting_boots_note"
    },
    // ???/?? ??
    "fire_resistance_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/fire_resistance_potion_1_note"
    },
    // ???/?? ??
    "fire_resistance_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/fire_resistance_potion_2_note"
    },
    // ???/?? ??
    "fire_resistance_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/fire_resistance_potion_3_note"
    },
    // ???/?? ??
    "fire_resistance_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/fire_resistance_potion_4_note"
    },
    // ???/?? ??
    "flower_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/flower_banner_pattern_note"
    },
    // ???/?? ??
    "flow_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/flow_banner_pattern_note"
    },
    // ???/?? ??
    "forest_green_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/forest_green_party_hat_note"
    },
    // ???/?? ??
    "glass_bottle_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/glass_bottle_note"
    },
    // ???/?? ??
    "globe_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/globe_banner_pattern_note"
    },
    // ???/?? ??
    "gold_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_axe_note"
    },
    // ???/?? ??
    "gold_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_boots_note"
    },
    // ???/?? ??
    "gold_helm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_helm_note"
    },
    // ???/?? ??
    "gold_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_hoe_note"
    },
    // ???/?? ??
    "gold_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_pickaxe_note"
    },
    // ???/?? ??
    "gold_platebody_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_platebody_note"
    },
    // ???/?? ??
    "gold_platelegs_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_platelegs_note"
    },
    // ???/?? ??
    "gold_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_shovel_note"
    },
    // ???/?? ??
    "gold_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_sword_note"
    },
    // ???/?? ??
    "graceful_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/graceful_boots_note"
    },
    // ???/?? ??
    "graceful_hood_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/graceful_hood_note"
    },
    // ???/?? ??
    "graceful_leggings_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/graceful_leggings_note"
    },
    // ???/?? ??
    "graceful_top_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/graceful_top_note"
    },
    // ???/?? ??
    "grow_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/grow_potion_1_note"
    },
    // ???/?? ??
    "grow_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/grow_potion_2_note"
    },
    // ???/?? ??
    "grow_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/grow_potion_3_note"
    },
    // ???/?? ??
    "grow_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/grow_potion_4_note"
    },
    // ???/?? ??
    "guster_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/guster_banner_pattern_note"
    },
    // ???/?? ??
    "haste_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/haste_potion_1_note"
    },
    // ???/?? ??
    "haste_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/haste_potion_2_note"
    },
    // ???/?? ??
    "haste_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/haste_potion_3_note"
    },
    // ???/?? ??
    "haste_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/haste_potion_4_note"
    },
    // ???/?? ??
    "health_regeneration_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/health_regeneration_potion_1_note"
    },
    // ???/?? ??
    "health_regeneration_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/health_regeneration_potion_2_note"
    },
    // ???/?? ??
    "health_regeneration_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/health_regeneration_potion_3_note"
    },
    // ???/?? ??
    "health_regeneration_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/health_regeneration_potion_4_note"
    },
    // ???/?? ??
    "herblore_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/herblore_skillcape_note"
    },
    // ???/?? ??
    "honey_bottle_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/honey_bottle_note"
    },
    // ???/?? ??
    "infested_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/infested_potion_1_note"
    },
    // ???/?? ??
    "infested_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/infested_potion_2_note"
    },
    // ???/?? ??
    "infested_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/infested_potion_3_note"
    },
    // ???/?? ??
    "infested_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/infested_potion_4_note"
    },
    // ???/?? ??
    "invisibility_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/invisibility_potion_1_note"
    },
    // ???/?? ??
    "invisibility_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/invisibility_potion_2_note"
    },
    // ???/?? ??
    "invisibility_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/invisibility_potion_3_note"
    },
    // ???/?? ??
    "invisibility_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/invisibility_potion_4_note"
    },
    // ???/?? ??
    "iron_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_axe_note"
    },
    // ???/?? ??
    "iron_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_boots_note"
    },
    // ???/?? ??
    "iron_helm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_helm_note"
    },
    // ???/?? ??
    "iron_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_hoe_note"
    },
    // ???/?? ??
    "iron_horse_armor_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_horse_armor_note"
    },
    // ???/?? ??
    "iron_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_pickaxe_note"
    },
    // ???/?? ??
    "iron_platebody_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_platebody_note"
    },
    // ???/?? ??
    "iron_platelegs_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_platelegs_note"
    },
    // ???/?? ??
    "iron_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_shovel_note"
    },
    // ???/?? ??
    "iron_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_sword_note"
    },
    // ???/?? ??
    "jump_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/jump_potion_1_note"
    },
    // ???/?? ??
    "jump_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/jump_potion_2_note"
    },
    // ???/?? ??
    "jump_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/jump_potion_3_note"
    },
    // ???/?? ??
    "jump_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/jump_potion_4_note"
    },
    // ???/?? ??
    "jungle_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/jungle_chest_boat_note"
    },
    // ???/?? ??
    "jungle_trouble_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/jungle_trouble_note"
    },
    // ???/?? ??
    "leap_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/leap_potion_1_note"
    },
    // ???/?? ??
    "leap_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/leap_potion_2_note"
    },
    // ???/?? ??
    "leap_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/leap_potion_3_note"
    },
    // ???/?? ??
    "leap_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/leap_potion_4_note"
    },
    // ???/?? ??
    "levitation_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/levitation_potion_1_note"
    },
    // ???/?? ??
    "levitation_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/levitation_potion_2_note"
    },
    // ???/?? ??
    "levitation_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/levitation_potion_3_note"
    },
    // ???/?? ??
    "levitation_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/levitation_potion_4_note"
    },
    // ???/?? ??
    "mangrove_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mangrove_boat_note"
    },
    // ???/?? ??
    "mangrove_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mangrove_chest_boat_note"
    },
    // ???/?? ??
    "medieval_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/medieval_note"
    },
    // ???/?? ??
    "minecart_chest_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/minecart_chest_note"
    },
    // ???/?? ??
    "minecart_furnace_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/minecart_furnace_note"
    },
    // ???/?? ??
    "minecart_hopper_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/minecart_hopper_note"
    },
    // ???/?? ??
    "minecart_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/minecart_note"
    },
    // ???/?? ??
    "mining_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mining_skillcape_note"
    },
    // ???/?? ??
    "mithril_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_axe_note"
    },
    // ???/?? ??
    "mithril_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_boots_note"
    },
    // ???/?? ??
    "mithril_helm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_helm_note"
    },
    // ???/?? ??
    "mithril_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_hoe_note"
    },
    // ???/?? ??
    "mithril_horse_armor_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_horse_armor_note"
    },
    // ???/?? ??
    "mithril_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_pickaxe_note"
    },
    // ???/?? ??
    "mithril_platebody_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_platebody_note"
    },
    // ???/?? ??
    "mithril_platelegs_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_platelegs_note"
    },
    // ???/?? ??
    "mithril_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_shovel_note"
    },
    // ???/?? ??
    "mithril_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_sword_note"
    },
    // ???/?? ??
    "mojang_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mojang_banner_pattern_note"
    },
    // ???/?? ??
    "music_disc_11_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_11_note"
    },
    // ???/?? ??
    "music_disc_13_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_13_note"
    },
    // ???/?? ??
    "music_disc_5_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_5_note"
    },
    // ???/?? ??
    "music_disc_blocks_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_blocks_note"
    },
    // ???/?? ??
    "music_disc_cat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_cat_note"
    },
    // ???/?? ??
    "music_disc_chirp_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_chirp_note"
    },
    // ???/?? ??
    "music_disc_creator_music_box_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_creator_music_box_note"
    },
    // ???/?? ??
    "music_disc_creator_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_creator_note"
    },
    // ???/?? ??
    "music_disc_far_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_far_note"
    },
    // ???/?? ??
    "music_disc_lava_chicken_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_lava_chicken_note"
    },
    // ???/?? ??
    "music_disc_mall_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_mall_note"
    },
    // ???/?? ??
    "music_disc_mellohi_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_mellohi_note"
    },
    // ???/?? ??
    "music_disc_otherside_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_otherside_note"
    },
    // ???/?? ??
    "music_disc_pigstep_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_pigstep_note"
    },
    // ???/?? ??
    "music_disc_stal_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_stal_note"
    },
    // ???/?? ??
    "music_disc_strad_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_strad_note"
    },
    // ???/?? ??
    "music_disc_tears_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_tears_note"
    },
    // ???/?? ??
    "music_disc_wait_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_wait_note"
    },
    // ???/?? ??
    "music_disc_ward_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/music_disc_ward_note"
    },
    // ???/?? ??
    "nether_realm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/nether_realm_note"
    },
    // ???/?? ??
    "nether_star_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/nether_star_note"
    },
    // ???/?? ??
    "night_vision_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/night_vision_potion_1_note"
    },
    // ???/?? ??
    "night_vision_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/night_vision_potion_2_note"
    },
    // ???/?? ??
    "night_vision_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/night_vision_potion_3_note"
    },
    // ???/?? ??
    "night_vision_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/night_vision_potion_4_note"
    },
    // ???/?? ??
    "oak_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/oak_chest_boat_note"
    },
    // ???/?? ??
    "oozing_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/oozing_potion_1_note"
    },
    // ???/?? ??
    "oozing_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/oozing_potion_2_note"
    },
    // ???/?? ??
    "oozing_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/oozing_potion_3_note"
    },
    // ???/?? ??
    "oozing_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/oozing_potion_4_note"
    },
    // ???/?? ??
    "options_icon_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/options_icon_note"
    },
    // ???/?? ??
    "ore_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/ore_party_hat_note"
    },
    // ???/?? ??
    "out_at_the_mines_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/out_at_the_mines_note"
    },
    // ???/?? ??
    "pale_oak_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/pale_oak_boat_note"
    },
    // ???/?? ??
    "pale_oak_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/pale_oak_chest_boat_note"
    },
    // ???/?? ??
    "pharaoh_tomb_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/pharaoh_tomb_note"
    },
    // ???/?? ??
    "piglin_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/piglin_banner_pattern_note"
    },
    // ???/?? ??
    "poison_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/poison_potion_1_note"
    },
    // ???/?? ??
    "poison_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/poison_potion_2_note"
    },
    // ???/?? ??
    "poison_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/poison_potion_3_note"
    },
    // ???/?? ??
    "poison_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/poison_potion_4_note"
    },
    // ???/?? ??
    "prayer_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/prayer_potion_1_note"
    },
    // ???/?? ??
    "prayer_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/prayer_potion_2_note"
    },
    // ???/?? ??
    "prayer_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/prayer_potion_3_note"
    },
    // ???/?? ??
    "prayer_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/prayer_potion_4_note"
    },
    // ???/?? ??
    "prayer_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/prayer_skillcape_note"
    },
    // ???/?? ??
    "purple_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/purple_party_hat_note"
    },
    // ???/?? ??
    "ranged_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/ranged_skillcape_note"
    },
    // ???/?? ??
    "resistance_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/resistance_potion_1_note"
    },
    // ???/?? ??
    "resistance_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/resistance_potion_2_note"
    },
    // ???/?? ??
    "resistance_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/resistance_potion_3_note"
    },
    // ???/?? ??
    "resistance_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/resistance_potion_4_note"
    },
    // ???/?? ??
    "roar_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/roar_potion_1_note"
    },
    // ???/?? ??
    "roar_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/roar_potion_2_note"
    },
    // ???/?? ??
    "roar_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/roar_potion_3_note"
    },
    // ???/?? ??
    "roar_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/roar_potion_4_note"
    },
    // ???/?? ??
    "rogue_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rogue_boots_note"
    },
    // ???/?? ??
    "rogue_mask_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rogue_mask_note"
    },
    // ???/?? ??
    "rogue_top_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rogue_top_note"
    },
    // ???/?? ??
    "rogue_trousers_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rogue_trousers_note"
    },
    // ???/?? ??
    "royal_blue_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/royal_blue_party_hat_note"
    },
    // ???/?? ??
    "rune_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_axe_note"
    },
    // ???/?? ??
    "rune_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_boots_note"
    },
    // ???/?? ??
    "rune_helm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_helm_note"
    },
    // ???/?? ??
    "rune_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_hoe_note"
    },
    // ???/?? ??
    "rune_horse_armor_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_horse_armor_note"
    },
    // ???/?? ??
    "rune_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_pickaxe_note"
    },
    // ???/?? ??
    "rune_platebody_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_platebody_note"
    },
    // ???/?? ??
    "rune_platelegs_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_platelegs_note"
    },
    // ???/?? ??
    "rune_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_shovel_note"
    },
    // ???/?? ??
    "rune_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_sword_note"
    },
    // ???/?? ??
    "sea_shanty_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/sea_shanty_note"
    },
    // ???/?? ??
    "self_destruct_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/self_destruct_potion_1_note"
    },
    // ???/?? ??
    "self_destruct_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/self_destruct_potion_2_note"
    },
    // ???/?? ??
    "self_destruct_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/self_destruct_potion_3_note"
    },
    // ???/?? ??
    "self_destruct_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/self_destruct_potion_4_note"
    },
    // ???/?? ??
    "shears_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/shears_note"
    },
    // ???/?? ??
    "shrink_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/shrink_potion_1_note"
    },
    // ???/?? ??
    "shrink_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/shrink_potion_2_note"
    },
    // ???/?? ??
    "shrink_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/shrink_potion_3_note"
    },
    // ???/?? ??
    "shrink_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/shrink_potion_4_note"
    },
    // ???/?? ??
    "silver_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/silver_party_hat_note"
    },
    // ???/?? ??
    "skillmasters_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/skillmasters_sword_note"
    },
    // ???/?? ??
    "skull_banner_pattern_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/skull_banner_pattern_note"
    },
    // ???/?? ??
    "slowness_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/slowness_potion_1_note"
    },
    // ???/?? ??
    "slowness_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/slowness_potion_2_note"
    },
    // ???/?? ??
    "slowness_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/slowness_potion_3_note"
    },
    // ???/?? ??
    "slowness_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/slowness_potion_4_note"
    },
    // ???/?? ??
    "slow_falling_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/slow_falling_potion_1_note"
    },
    // ???/?? ??
    "slow_falling_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/slow_falling_potion_2_note"
    },
    // ???/?? ??
    "slow_falling_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/slow_falling_potion_3_note"
    },
    // ???/?? ??
    "slow_falling_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/slow_falling_potion_4_note"
    },
    // ???/?? ??
    "smithing_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/smithing_party_hat_note"
    },
    // ???/?? ??
    "smithing_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/smithing_skillcape_note"
    },
    // ???/?? ??
    "spooky_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/spooky_note"
    },
    // ???/?? ??
    "spruce_chest_boat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/spruce_chest_boat_note"
    },
    // ???/?? ??
    "stamina_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/stamina_potion_1_note"
    },
    // ???/?? ??
    "stamina_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/stamina_potion_2_note"
    },
    // ???/?? ??
    "stamina_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/stamina_potion_3_note"
    },
    // ???/?? ??
    "stamina_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/stamina_potion_4_note"
    },
    // ???/?? ??
    "steel_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_axe_note"
    },
    // ???/?? ??
    "steel_boots_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_boots_note"
    },
    // ???/?? ??
    "steel_helm_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_helm_note"
    },
    // ???/?? ??
    "steel_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_hoe_note"
    },
    // ???/?? ??
    "steel_horse_armor_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_horse_armor_note"
    },
    // ???/?? ??
    "steel_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_pickaxe_note"
    },
    // ???/?? ??
    "steel_platebody_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_platebody_note"
    },
    // ???/?? ??
    "steel_platelegs_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_platelegs_note"
    },
    // ???/?? ??
    "steel_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_shovel_note"
    },
    // ???/?? ??
    "steel_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_sword_note"
    },
    // ???/?? ??
    "stratosphere_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/stratosphere_note"
    },
    // ???/?? ??
    "strength_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/strength_potion_1_note"
    },
    // ???/?? ??
    "strength_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/strength_potion_2_note"
    },
    // ???/?? ??
    "strength_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/strength_potion_3_note"
    },
    // ???/?? ??
    "strength_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/strength_potion_4_note"
    },
    // ???/?? ??
    "surface_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/surface_potion_1_note"
    },
    // ???/?? ??
    "surface_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/surface_potion_2_note"
    },
    // ???/?? ??
    "surface_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/surface_potion_3_note"
    },
    // ???/?? ??
    "surface_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/surface_potion_4_note"
    },
    // ???/?? ??
    "swiftness_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/swiftness_potion_1_note"
    },
    // ???/?? ??
    "swiftness_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/swiftness_potion_2_note"
    },
    // ???/?? ??
    "swiftness_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/swiftness_potion_3_note"
    },
    // ???/?? ??
    "swiftness_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/swiftness_potion_4_note"
    },
    // ???/?? ??
    "teleport_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/teleport_potion_1_note"
    },
    // ???/?? ??
    "teleport_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/teleport_potion_2_note"
    },
    // ???/?? ??
    "teleport_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/teleport_potion_3_note"
    },
    // ???/?? ??
    "teleport_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/teleport_potion_4_note"
    },
    // ???/?? ??
    "thieving_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/thieving_skillcape_note"
    },
    // ???/?? ??
    "totem_of_undying_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/totem_of_undying_note"
    },
    // ???/?? ??
    "transformation_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/transformation_potion_1_note"
    },
    // ???/?? ??
    "transformation_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/transformation_potion_2_note"
    },
    // ???/?? ??
    "transformation_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/transformation_potion_3_note"
    },
    // ???/?? ??
    "transformation_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/transformation_potion_4_note"
    },
    // ???/?? ??
    "tree_party_hat_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/tree_party_hat_note"
    },
    // ???/?? ??
    "uncharged_wither_core_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/uncharged_wither_core_note"
    },
    // ???/?? ??
    "village_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/village_note"
    },
    // ???/?? ??
    "water_bottle_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/water_bottle_note"
    },
    // ???/?? ??
    "water_breathing_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/water_breathing_potion_1_note"
    },
    // ???/?? ??
    "water_breathing_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/water_breathing_potion_2_note"
    },
    // ???/?? ??
    "water_breathing_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/water_breathing_potion_3_note"
    },
    // ???/?? ??
    "water_breathing_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/water_breathing_potion_4_note"
    },
    // ???/?? ??
    "weakness_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/weakness_potion_1_note"
    },
    // ???/?? ??
    "weakness_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/weakness_potion_2_note"
    },
    // ???/?? ??
    "weakness_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/weakness_potion_3_note"
    },
    // ???/?? ??
    "weakness_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/weakness_potion_4_note"
    },
    // ???/?? ??
    "weaving_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/weaving_potion_1_note"
    },
    // ???/?? ??
    "weaving_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/weaving_potion_2_note"
    },
    // ???/?? ??
    "weaving_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/weaving_potion_3_note"
    },
    // ???/?? ??
    "weaving_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/weaving_potion_4_note"
    },
    // ???/?? ??
    "wind_potion_1_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wind_potion_1_note"
    },
    // ???/?? ??
    "wind_potion_2_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wind_potion_2_note"
    },
    // ???/?? ??
    "wind_potion_3_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wind_potion_3_note"
    },
    // ???/?? ??
    "wind_potion_4_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wind_potion_4_note"
    },
    // ???/?? ??
    "woodcutting_skillcape_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/woodcutting_skillcape_note"
    },
    // ???/?? ??
    "wooden_axe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wooden_axe_note"
    },
    // ???/?? ??
    "wooden_hoe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wooden_hoe_note"
    },
    // ???/?? ??
    "wooden_pickaxe_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wooden_pickaxe_note"
    },
    // ???/?? ??
    "wooden_shovel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wooden_shovel_note"
    },
    // ???/?? ??
    "wooden_sword_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wooden_sword_note"
    },
    // ???/?? ??
    "zamorak_zoo_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/zamorak_zoo_note"
    },
    // ???/?? ??
    "bow_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/bow_note"
    },
    // ???/?? ??
    "cod_bucket_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/cod_bucket_note"
    },
    // ???/?? ??
    "crossbow_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/crossbow_note"
    },
    // ???/?? ??
    "elytra_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/elytra_note"
    },
    // ???/?? ??
    "fishing_rod_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/fishing_rod_note"
    },
    // ???/?? ??
    "flint_and_steel_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/flint_and_steel_note"
    },
    // ???/?? ??
    "gold_horse_armor_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_horse_armor_note"
    },
    // ???/?? ??
    "lava_bucket_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/lava_bucket_note"
    },
    // ???/?? ??
    "milk_bucket_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/milk_bucket_note"
    },
    // ???/?? ??
    "powder_snow_bucket_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/powder_snow_bucket_note"
    },
    // ???/?? ??
    "pufferfish_bucket_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/pufferfish_bucket_note"
    },
    // ???/?? ??
    "saddle_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/saddle_note"
    },
    // ???/?? ??
    "salmon_bucket_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/salmon_bucket_note"
    },
    // ???/?? ??
    "shield_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/shield_note"
    },
    // ???/?? ??
    "tadpole_bucket_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/tadpole_bucket_note"
    },
    // ???/?? ??
    "water_bucket_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/water_bucket_note"
    },
    // ???/?? ??
    "copper_crossbow": {
      // ??? ?? ?
      "textures": "textures/items/ranged/copper_crossbow_standby"
    },
    // ???/?? ??
    "copper_crossbow_loaded": {
      // ??? ?? ?
      "textures": "textures/items/ranged/copper_crossbow_loaded"
    },
    // ???/?? ??
    "wooden_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/wooden_spear"
    },
    // ???/?? ??
    "copper_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/copper_spear"
    },
    // ???/?? ??
    "iron_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/iron_spear"
    },
    // ???/?? ??
    "gold_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/gold_spear"
    },
    // ???/?? ??
    "steel_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/steel_spear"
    },
    // ???/?? ??
    "black_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/black_spear"
    },
    // ???/?? ??
    "mithril_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/mithril_spear"
    },
    // ???/?? ??
    "adamant_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/adamant_spear"
    },
    // ???/?? ??
    "rune_spear": {
      // ??? ?? ?
      "textures": "textures/items/spears/rune_spear"
    },
    // ???/?? ??
    "wooden_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/wooden_spear_note"
    },
    // ???/?? ??
    "copper_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/copper_spear_note"
    },
    // ???/?? ??
    "iron_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/iron_spear_note"
    },
    // ???/?? ??
    "gold_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/gold_spear_note"
    },
    // ???/?? ??
    "steel_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/steel_spear_note"
    },
    // ???/?? ??
    "black_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/black_spear_note"
    },
    // ???/?? ??
    "mithril_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/mithril_spear_note"
    },
    // ???/?? ??
    "adamant_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/adamant_spear_note"
    },
    // ???/?? ??
    "rune_spear_note": {
      // ??? ?? ?
      "textures": "textures/items/note_items/rune_spear_note"
    }
  }
}
```








### textures
netherite_spear.texture_set.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: netherite_spear.texture_set.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ?? ??
    "format_version": "1.21.30",
    // ???/?? ??
    "minecraft:texture_set": {
        // ?? (R,G,B,A)
        "color": "netherite_spear",
        // ?? ??
        "metalness_emissive_roughness_subsurface": "netherite_spear_mers"
    }
}
```








### textures
notif_icon_background.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: notif_icon_background.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
  // 테두리 늘림(9분할)
  "nineslice_size": [
    2,
    2,
    2,
    2
  ],
  // ???/?? ??
  "base_size": [
    6,
    6
  ]
}
```








### textures
outline.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: outline.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{ "frames": [
   {
    // ?? ??
    "filename": "Sprite-0006 0.",
    // ?? ??
    "frame": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 1.",
    // ?? ??
    "frame": { "x": 64, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 2.",
    // ?? ??
    "frame": { "x": 128, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 3.",
    // ?? ??
    "frame": { "x": 192, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 4.",
    // ?? ??
    "frame": { "x": 256, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 5.",
    // ?? ??
    "frame": { "x": 320, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 6.",
    // ?? ??
    "frame": { "x": 384, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 7.",
    // ?? ??
    "frame": { "x": 448, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 8.",
    // ?? ??
    "frame": { "x": 512, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 9.",
    // ?? ??
    "frame": { "x": 576, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 10.",
    // ?? ??
    "frame": { "x": 640, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   },
   {
    // ?? ??
    "filename": "Sprite-0006 11.",
    // ?? ??
    "frame": { "x": 704, "y": 0, "w": 64, "h": 64 },
    // ?? ??
    "rotated": false,
    // ?? ??
    "trimmed": false,
    // ?? ?? ?
    "spriteSourceSize": { "x": 0, "y": 0, "w": 64, "h": 64 },
    // ?? ?? ?
    "sourceSize": { "w": 64, "h": 64 },
    // 걸리는 시간(초)
    "duration": 200
   }
 ],
 // ???/?? ??
 "meta": {
  // ?? ??
  "app": "http://www.aseprite.org/",
  // ?? ??
  "version": "1.3.14.4-dev",
  // ?? ??
  "image": "outline_form.png",
  // ?? ??
  "format": "RGBA8888",
  // 가로/세로 크기
  "size": { "w": 768, "h": 64 },
  // ?? ??
  "scale": "1",
  // ???/?? ??
  "frameTags": [
  ],
  // ???/?? ??
  "layers": [
   { "name": "Layer 1", "opacity": 255, "blendMode": "normal" }
  ],
  // ???/?? ??
  "slices": [
  ]
 }
}
```








### textures
solid_textbox.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: solid_textbox.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // 테두리 늘림(9분할)
    "nineslice_size": 4,
    // ???/?? ??
    "base_size": [
        12,
        12
    ]
}
```








### textures
stone_spear.texture_set.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: stone_spear.texture_set.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ?? ??
    "format_version": "1.21.30",
    // ???/?? ??
    "minecraft:texture_set": {
        // ?? (R,G,B,A)
        "color": "stone_spear",
        // ?? ??
        "metalness_emissive_roughness_subsurface": "stone_spear_mers"
    }
}
```








### textures
terrain_texture.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: terrain_texture.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
	// ?? ??
	"resource_pack_name": "tut",
	// ??? ?? ?
	"texture_name": "atlas.terrain",
	// ??/?? ?
	"padding": 8,
	// ?? ??
	"num_mip_levels": 4,
	// ???/?? ??
	"texture_data": {
		// ???/?? ??
		"jukebox": {
			// ??? ?? ?
			"textures": "textures/blocks/jukebox"
		},
		// ???/?? ??
		"gilded_altar": {
			// ??? ?? ?
			"textures": "textures/blocks/gilded_altar"
		},
		// ???/?? ??
		"chaos_altar": {
			// ??? ?? ?
			"textures": "textures/blocks/chaos_altar"
		},
		// ???/?? ??
		"chaos_altar_remover": {
			// ??? ?? ?
			"textures": "textures/blocks/chaos_altar"
		},
		// ???/?? ??
		"empty": {
			// ??? ?? ?
			"textures": "textures/blocks/empty"
		},
		// ???/?? ??
		"adamant_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/adamant_ore_block"
		},
		// ???/?? ??
		"deepslate_adamant_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_adamant_ore_block"
		},
		// ???/?? ??
		"nether_adamant_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_adamant_ore_block"
		},
		// ???/?? ??
		"end_adamant_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_adamant_ore_block"
		},
		// ???/?? ??
		"copper_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/copper_ore_block"
		},
		// ???/?? ??
		"deepslate_copper_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_copper_ore_block"
		},
		// ???/?? ??
		"nether_copper_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_copper_ore_block"
		},
		// ???/?? ??
		"end_copper_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_copper_ore_block"
		},
		// ???/?? ??
		"iron_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/iron_ore_block"
		},
		// ???/?? ??
		"deepslate_iron_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_iron_ore_block"
		},
		// ???/?? ??
		"nether_iron_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_iron_ore_block"
		},
		// ???/?? ??
		"end_iron_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_iron_ore_block"
		},
		// ???/?? ??
		"mithril_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/mithril_ore_block"
		},
		// ???/?? ??
		"deepslate_mithril_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_mithril_ore_block"
		},
		// ???/?? ??
		"nether_mithril_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_mithril_ore_block"
		},
		// ???/?? ??
		"end_mithril_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_mithril_ore_block"
		},
		// ???/?? ??
		"rune_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/rune_ore_block"
		},
		// ???/?? ??
		"deepslate_rune_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_rune_ore_block"
		},
		// ???/?? ??
		"nether_rune_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_rune_ore_block"
		},
		// ???/?? ??
		"end_rune_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_rune_ore_block"
		},
		// ???/?? ??
		"adamant_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/adamant_block"
		},
		// ???/?? ??
		"black_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/black_block"
		},
		// ???/?? ??
		"block_of_adamant_ore": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/block_of_adamant_ore"
		},
		// ???/?? ??
		"raw_iron_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/block_of_iron_ore"
		},
		// ???/?? ??
		"block_of_mithril_ore": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/block_of_mithril_ore"
		},
		// ???/?? ??
		"block_of_rune_ore": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/block_of_rune_ore"
		},
		// ???/?? ??
		"coal_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/coal_ore_block"
		},
		// ???/?? ??
		"deepslate_coal_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_coal_ore_block"
		},
		// ???/?? ??
		"deepslate_gold_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_gold_ore_block"
		},
		// ???/?? ??
		"deepslate_redstone_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_redstone_ore_block"
		},
		// ???/?? ??
		"end_coal_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_coal_ore_block"
		},
		// ???/?? ??
		"end_gold_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_gold_ore_block"
		},
		// ???/?? ??
		"end_redstone_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_redstone_ore_block"
		},
		// ???/?? ??
		"gold_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/gold_ore_block"
		},
		// ???/?? ??
		"iron_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/iron_block"
		},
		// ???/?? ??
		"mithril_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/mithril_block"
		},
		// ???/?? ??
		"nether_coal_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_coal_ore_block"
		},
		// ???/?? ??
		"nether_gold_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_gold_ore_block"
		},
		// ???/?? ??
		"nether_redstone_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_redstone_ore_block"
		},
		// ???/?? ??
		"redstone_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/redstone_ore_block"
		},
		// ???/?? ??
		"rune_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/rune_block"
		},
		// ???/?? ??
		"steel_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/steel_block"
		},
		// ???/?? ??
		"opal_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/opal_block"
		},
		// ???/?? ??
		"jade_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/jade_block"
		},
		// ???/?? ??
		"ruby_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/ruby_block"
		},
		// ???/?? ??
		"sapphire_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/sapphire_block"
		},
		// ???/?? ??
		"emerald_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/emerald_block"
		},
		// ???/?? ??
		"diamond_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/diamond_block"
		},
		// ???/?? ??
		"red_topaz_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/red_topaz_block"
		},
		// ???/?? ??
		"nether_lapis_lazuli_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_lapis_lazuli_ore_block"
		},
		// ???/?? ??
		"end_lapis_lazuli_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_lapis_lazuli_ore_block"
		},
		// ???/?? ??
		"deepslate_lapis_lazuli_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_lapis_lazuli_ore_block"
		},
		// ???/?? ??
		"lapis_lazuli_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/lapis_lazuli_ore_block"
		},
		// ???/?? ??
		"nether_gemstone_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/nether_gemstone_ore_block"
		},
		// ???/?? ??
		"end_gemstone_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/end_gemstone_ore_block"
		},
		// ???/?? ??
		"deepslate_gemstone_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_gemstone_ore_block"
		},
		// ???/?? ??
		"gemstone_ore_block": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/gemstone_ore_block"
		},
		// ???/?? ??
		"witch_head_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/witch_head_block"
		},
		// ???/?? ??
		"panda_head_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/panda_head_block"
		},
		// ???/?? ??
		"panda_head_brown_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/panda_head_brown_block"
		},
		// ???/?? ??
		"llama_head_white_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/llama_head_white_block"
		},
		// ???/?? ??
		"llama_head_cream_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/llama_head_cream_block"
		},
		// ???/?? ??
		"llama_head_brown_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/llama_head_brown_block"
		},
		// ???/?? ??
		"llama_head_gray_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/llama_head_gray_block"
		},
		// ???/?? ??
		"koala_head_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/koala_head_block"
		},
		// ???/?? ??
		"arxance_head_block": {
			// ??? ?? ?
			"textures": "textures/blocks/mob_heads/arxance_head_block"
		},
		//farming
		"reveril_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/reveril_0"
		},
		// ???/?? ??
		"reveril_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/reveril_1"
		},
		// ???/?? ??
		"reveril_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/reveril_2"
		},
		// ???/?? ??
		"reveril_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/reveril_3"
		},
		// ???/?? ??
		"bubblo_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/bubblo_0"
		},
		// ???/?? ??
		"bubblo_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/bubblo_1"
		},
		// ???/?? ??
		"bubblo_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/bubblo_2"
		},
		// ???/?? ??
		"bubblo_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/bubblo_3"
		},
		// ???/?? ??
		"telerit_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/telerit_0"
		},
		// ???/?? ??
		"telerit_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/telerit_1"
		},
		// ???/?? ??
		"telerit_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/telerit_2"
		},
		// ???/?? ??
		"telerit_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/telerit_3"
		},
		// ???/?? ??
		"visadyme_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/visadyme_0"
		},
		// ???/?? ??
		"visadyme_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/visadyme_1"
		},
		// ???/?? ??
		"visadyme_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/visadyme_2"
		},
		// ???/?? ??
		"visadyme_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/visadyme_3"
		},
		// ???/?? ??
		"endurill_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/endurill_0"
		},
		// ???/?? ??
		"endurill_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/endurill_1"
		},
		// ???/?? ??
		"endurill_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/endurill_2"
		},
		// ???/?? ??
		"endurill_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/endurill_3"
		},
		// ???/?? ??
		"enhantoe_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/enhantoe_0"
		},
		// ???/?? ??
		"enhantoe_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/enhantoe_1"
		},
		// ???/?? ??
		"enhantoe_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/enhantoe_2"
		},
		// ???/?? ??
		"enhantoe_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/enhantoe_3"
		},
		// ???/?? ??
		"jumia_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/jumia_0"
		},
		// ???/?? ??
		"jumia_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/jumia_1"
		},
		// ???/?? ??
		"jumia_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/jumia_2"
		},
		// ???/?? ??
		"jumia_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/jumia_3"
		},
		// ???/?? ??
		"shapis_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/shapis_0"
		},
		// ???/?? ??
		"shapis_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/shapis_1"
		},
		// ???/?? ??
		"shapis_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/shapis_2"
		},
		// ???/?? ??
		"shapis_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/shapis_3"
		},
		// ???/?? ??
		"strontar_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/strontar_0"
		},
		// ???/?? ??
		"strontar_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/strontar_1"
		},
		// ???/?? ??
		"strontar_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/strontar_2"
		},
		// ???/?? ??
		"strontar_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/strontar_3"
		},
		// ???/?? ??
		"swiftine_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/swiftine_0"
		},
		// ???/?? ??
		"swiftine_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/swiftine_1"
		},
		// ???/?? ??
		"swiftine_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/swiftine_2"
		},
		// ???/?? ??
		"swiftine_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/swiftine_3"
		},
		// ???/?? ??
		"windrill_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/windrill_0"
		},
		// ???/?? ??
		"windrill_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/windrill_1"
		},
		// ???/?? ??
		"windrill_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/windrill_2"
		},
		// ???/?? ??
		"windrill_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/windrill_3"
		},
		// ???/?? ??
		"slowent_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/slowent_0"
		},
		// ???/?? ??
		"slowent_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/slowent_1"
		},
		// ???/?? ??
		"slowent_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/slowent_2"
		},
		// ???/?? ??
		"slowent_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/slowent_3"
		},
		//CROPS
		"cabbage_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/cabbage_0"
		},
		// ???/?? ??
		"cabbage_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/cabbage_1"
		},
		// ???/?? ??
		"cabbage_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/cabbage_2"
		},
		// ???/?? ??
		"cabbage_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/cabbage_3"
		},
		// ???/?? ??
		"carrot_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/carrot_0"
		},
		// ???/?? ??
		"carrot_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/carrot_1"
		},
		// ???/?? ??
		"carrot_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/carrot_2"
		},
		// ???/?? ??
		"carrot_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/carrot_3"
		},
		// ???/?? ??
		"onion_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/onion_0"
		},
		// ???/?? ??
		"onion_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/onion_1"
		},
		// ???/?? ??
		"onion_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/onion_2"
		},
		// ???/?? ??
		"onion_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/onion_3"
		},
		// ???/?? ??
		"potato_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/potato_0"
		},
		// ???/?? ??
		"potato_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/potato_1"
		},
		// ???/?? ??
		"potato_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/potato_2"
		},
		// ???/?? ??
		"potato_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/potato_3"
		},
		// ???/?? ??
		"strawberry_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/strawberry_0"
		},
		// ???/?? ??
		"strawberry_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/strawberry_1"
		},
		// ???/?? ??
		"strawberry_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/strawberry_2"
		},
		// ???/?? ??
		"strawberry_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/strawberry_3"
		},
		// ???/?? ??
		"sweetcorn_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/sweetcorn_0"
		},
		// ???/?? ??
		"sweetcorn_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/sweetcorn_1"
		},
		// ???/?? ??
		"sweetcorn_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/sweetcorn_2"
		},
		// ???/?? ??
		"sweetcorn_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/sweetcorn_3"
		},
		// ???/?? ??
		"tomato_0": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/tomato_0"
		},
		// ???/?? ??
		"tomato_1": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/tomato_1"
		},
		// ???/?? ??
		"tomato_2": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/tomato_2"
		},
		// ???/?? ??
		"tomato_3": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/tomato_3"
		},
		// ???/?? ??
		"brewing_table": {
			// ??? ?? ?
			"textures": "textures/blocks/brewing_table"
		},
		// ???/?? ??
		"decanting_table": {
			// ??? ?? ?
			"textures": "textures/blocks/decanting_table"
		},
		// ???/?? ??
		"cure_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/cure_soaked_sponge"
		},
		// ???/?? ??
		"fire_resistance_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/fire_resistance_soaked_sponge"
		},
		// ???/?? ??
		"grow_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/grow_soaked_sponge"
		},
		// ???/?? ??
		"haste_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/haste_soaked_sponge"
		},
		// ???/?? ??
		"invisibility_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/invisibility_soaked_sponge"
		},
		// ???/?? ??
		"jump_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/jump_soaked_sponge"
		},
		// ???/?? ??
		"leap_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/leap_soaked_sponge"
		},
		// ???/?? ??
		"levitation_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/levitation_soaked_sponge"
		},
		// ???/?? ??
		"night_vision_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/night_vision_soaked_sponge"
		},
		// ???/?? ??
		"prayer_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/prayer_soaked_sponge"
		},
		// ???/?? ??
		"shrink_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/shrink_soaked_sponge"
		},
		// ???/?? ??
		"slow_falling_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/slow_falling_soaked_sponge"
		},
		// ???/?? ??
		"stamina_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/stamina_soaked_sponge"
		},
		// ???/?? ??
		"strength_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/strength_soaked_sponge"
		},
		// ???/?? ??
		"swiftness_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/swiftness_soaked_sponge"
		},
		// ???/?? ??
		"teleportation_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/teleportation_soaked_sponge"
		},
		// ???/?? ??
		"transformation_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/transformation_soaked_sponge"
		},
		// ???/?? ??
		"water_breathing_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/water_breathing_soaked_sponge"
		},
		// ???/?? ??
		"self_destruct_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/self_destruct_soaked_sponge"
		},
		// ???/?? ??
		"darkness_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/darkness_soaked_sponge"
		},
		// ???/?? ??
		"blindness_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/blindness_soaked_sponge"
		},
		// ???/?? ??
		"infested_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/infested_soaked_sponge"
		},
		// ???/?? ??
		"oozing_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/oozing_soaked_sponge"
		},
		// ???/?? ??
		"poison_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/poison_soaked_sponge"
		},
		// ???/?? ??
		"slowness_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/slowness_soaked_sponge"
		},
		// ???/?? ??
		"weakness_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/weakness_soaked_sponge"
		},
		// ???/?? ??
		"weaving_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/weaving_soaked_sponge"
		},
		// ???/?? ??
		"wind_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/wind_soaked_sponge"
		},
		// ???/?? ??
		"below_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/below_soaked_sponge"
		},
		// ???/?? ??
		"surface_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/surface_soaked_sponge"
		},
		// ???/?? ??
		"roar_soaked_sponge": {
			// ??? ?? ?
			"textures": "textures/blocks/potion_soaked_sponges/roar_soaked_sponge"
		},
		// ???/?? ??
		"fertile_soil": {
			// ??? ?? ?
			"textures": "textures/blocks/fertile_soil"
		},
		// ???/?? ??
		"rich_soil": {
			// ??? ?? ?
			"textures": "textures/blocks/rich_soil"
		},
		// ???/?? ??
		"pristine_soil": {
			// ??? ?? ?
			"textures": "textures/blocks/pristine_soil"
		},
		// ???/?? ??
		"white_rose": {
			// ??? ?? ?
			"textures": "textures/blocks/farming/white_rose"
		},
		// ???/?? ??
		"deepslate_iron_ore": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_iron_ore_block"
		},
		// ???/?? ??
		"iron_ore": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/iron_ore_block"
		},
		// ???/?? ??
		"deepslate_copper_ore": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/deepslate_copper_ore_block"
		},
		// ???/?? ??
		"copper_ore": {
			// ??? ?? ?
			"textures": "textures/blocks/ore_blocks/copper_ore_block"
		},
		// ???/?? ??
		"smithing_anvil": {
			// ??? ?? ?
			"textures": "textures/blocks/smithing_anvil"
		},
		// ???/?? ??
		"smithing_anvil_base": {
			// ??? ?? ?
			"textures": "textures/blocks/smithing_anvil_base"
		},
		// ???/?? ??
		"fan_side": {
			// ??? ?? ?
			"textures": "textures/blocks/fan_side"
		},
		// ???/?? ??
		"fan_bottom": {
			// ??? ?? ?
			"textures": "textures/blocks/fan_bottom"
		},
		// ???/?? ??
		"fan_top": {
			// ??? ?? ?
			"textures": "textures/blocks/fan_top"
		},
		// ???/?? ??
		"fan_spinning_1": {
			// ??? ?? ?
			"textures": "textures/blocks/fan_spinning_1"
		},
		// ???/?? ??
		"runecraft_furnace_inactive": {
			// ??? ?? ?
			"textures": "textures/blocks/runecraft_furnace_inactive"
		},
		// ???/?? ??
		"runecraft_furnace_side": {
			// ??? ?? ?
			"textures": "textures/blocks/runecraft_furnace_side"
		},
		// ???/?? ??
		"runecraft_furnace_top_bottom": {
			// ??? ?? ?
			"textures": "textures/blocks/runecraft_furnace_top_bottom"
		},
		// ???/?? ??
		"runecraft_furnace_active": {
			// ??? ?? ?
			"textures": "textures/blocks/furnace_active"
		},
		// ???/?? ??
		"group_display_herbs": {
			// ??? ?? ?
			"textures": "textures/items/group_display_herbs"
		},
		// ???/?? ??
		"group_display_sponges": {
			// ??? ?? ?
			"textures": "textures/items/group_display_sponges"
		},
		// ???/?? ??
		"group_display_fragments": {
			// ??? ?? ?
			"textures": "textures/items/group_display_fragments"
		},
		// ???/?? ??
		"group_display_buriables": {
			// ??? ?? ?
			"textures": "textures/items/group_display_buriables"
		},
		// ???/?? ??
		"group_display_potions": {
			// ??? ?? ?
			"textures": "textures/items/group_display_potions"
		},
		// ???/?? ??
		"noting_table": {
			// ??? ?? ?
			"textures": "textures/blocks/noting_table"
		}
	}
}
```








### textures
wooden_spear.texture_set.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: wooden_spear.texture_set.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ?? ??
    "format_version": "1.21.30",
    // ???/?? ??
    "minecraft:texture_set": {
        // ?? (R,G,B,A)
        "color": "wooden_spear",
        // ?? ??
        "metalness_emissive_roughness_subsurface": "wooden_spear_mers"
    }
}
```








### textures
wooden_spear.texture_set.json
UI 재료 모음 · textures



필요한 부분만 참고해서 가져가세요.



```
// 예제: wooden_spear.texture_set.json
// 분류: UI 재료 모음 / textures
// 참고: JSON UI는 // 주석을 허용합니다.
// 읽는법: namespace=이름표, controls=화면에 올리는 부품 목록
{
    // ?? ??
    "format_version": "1.21.30",
    // ???/?? ??
    "minecraft:texture_set": {
        // ?? (R,G,B,A)
        "color": "wooden_spear",
        // ?? ??
        "metalness_emissive_roughness_subsurface": "wooden_spear_mers"
    }
}
```

[분할 목록으로 돌아가기](preview.html#example-view)


[분할 목록으로 돌아가기](preview.html#example-view)


[분할 목록으로 돌아가기](preview.html#example-view)

