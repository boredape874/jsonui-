---
title: 실전 케이스 스터디
---


## 실전 케이스 스터디 {#examples}





실제 예제를 기반으로 핵심 패턴을 요약했습니다. 초보자는 구조만 이해해도 충분합니다.








### 커스텀 제작대 감지
UI 분기



제작대 이름에 특정 문자열이 있으면 기본 UI를 숨기고 커스텀 패널을 표시합니다.




```
{
  // 제작대 이름에 특정 문자열이 있으면
  "binding_type": "view",
  "source_property_name": "((#text - 'your_text_to_detect') = #text)",
  "target_property_name": "#visible"
}
```




- **핵심:** #crafting_label_text를 #text로 받아 문자열 검출
- **주의:** 문자열이 바뀌면 감지 로직도 수정 필요







### HUD 문자열 분해
문자열 파싱



HUD 타이틀 문자열에 데이터를 넣고 고정 길이로 분할해 여러 줄을 구성합니다.




```
{
  // prefix가 맞을 때만 보이기
  "binding_type": "view",
  "source_property_name": "(('%.6s' * #nperma) = 'nperma')",
  "target_property_name": "#visible"
},
{
  // 특정 길이만 잘라서 score1에 넣기
  "binding_type": "view",
  "source_property_name": "(('%.60s' * #komisi) - ('%.40s' * #komisi) - '\t')",
  "target_property_name": "#score1"
}
```




- **핵심:** prefix 체크 + 고정 길이 슬라이싱
- **주의:** 텍스트 길이 변경 시 전체 규칙 수정







### 애니메이션 진행 바 템플릿
진행 바



이전 값과 현재 값을 비교해 증가/감소 애니메이션을 분리합니다.




```
"animated_bar_panel": {
  "property_bag": { "#prev_value": 0 }, // 이전 값을 기억
  "bindings": [
    { "binding_type": "view", "source_property_name": "(#changed_value > #prev_value)", "target_property_name": "#collection_length" }
  ]
}
```




- **핵심:** property_bag + collection_panel 조합
- **주의:** 텍스처 타입(fixed) 처리 분기 필요







### 가로 스크롤 메뉴
scroll_view



가로로 이동하는 스크롤을 만들어 아이콘 줄을 넘길 수 있습니다.




```
{
  "type": "scroll_view", // 스크롤 영역
  "scrolling_direction": "horizontal", // 가로 스크롤
  "scrolling_content": "my_row" // 실제로 움직일 패널
}
```




- **핵심:** scrolling_direction을 horizontal로 지정
- **주의:** scrolling_content의 가로 크기를 넉넉히 설정







### 애니메이션 토글 스위치
toggle



토글이 켜질 때 색이 변하면서 반짝이는 효과를 줄 수 있습니다.




```
"toggle_glow": {
  "type": "image", // 빛 효과 이미지
  "texture": "glow",
  "anims": [
    {
      "InCol": {
        "anim_type": "color", // 색 변화 애니메이션
        "duration": 0.4,
        "from": [0.6, 0.3, 0.3, 0.0],
        "to": [0.3, 0.6, 0.3, 1.0]
      }
    }
  ]
}
```




- **핵심:** anim_type: color로 토글 느낌을 강조
- **주의:** 과한 효과는 성능에 부담







### 로딩 오버레이 트리거
로딩 연출



채팅 텍스트에 특정 플래그가 포함되면 로딩 UI를 생성합니다.




```
{
  // 플래그가 있으면 컬렉션 생성
  "binding_type": "view",
  "source_property_name": "(not (#text_n - $flag_for_loading_anim = #text_n) * 1)",
  "target_property_name": "#collection_length"
}
```




- **핵심:** 텍스트 플래그 감지 + factory
- **주의:** 채팅 화면에서는 동일 플래그를 숨김 처리






### 채팅 알림 시스템
HUD 알림



채팅 문자열을 고정 길이로 나눠 제목/본문/아이콘 정보를 전달합니다.




```
{
  // 아이콘이 aux:로 시작하면 아이템 렌더러 사용
  "binding_type": "view",
  "source_property_name": "((#notification_icon_texture - 'aux:') * 1)",
  "target_property_name": "#item_id_aux"
}
```




- **핵심:** 센티넬 문자열로 알림 메시지 구분
- **주의:** aux 아이템 렌더는 일부 상황에서 시각 문제 가능







### 서버 폼 교체 & 제목 분기
server_form



long_form을 교체하고 title_text 값으로 서로 다른 패널을 보여줍니다.




```
{
  // 제목이 같을 때만 보이기
  "binding_type": "view",
  "source_property_name": "(#title_text = 'magic_learning_station.menu')",
  "target_property_name": "#visible"
}
```




- **핵심:** factory + title_text 기반 분기
- **주의:** 제목 문자열은 스크립트와 반드시 일치







### NPC 대화창 UI
NPC 인터랙션



라이브 렌더러와 form_buttons 컬렉션을 사용해 대화창과 선택지를 구성합니다.




```
"npc_model": {
  "type": "custom",
  "renderer": "live_player_renderer" // 캐릭터 표시
},
"buttons_stack": {
  "factory": { "name": "buttons", "control_name": "npc_interact.button_item" },
  "collection_name": "form_buttons"
}
```




- **핵심:** 스크롤 패널 + form_buttons 컬렉션
- **주의:** 버튼 템플릿은 collection_details 필수







### Actionbar 대화 프로토콜
텍스트 프로토콜



actionbar 텍스트에 접두어와 고정 길이 데이터를 넣어 배경/아이콘/대사를 분해합니다.




```
{
  // 접두어가 dialog:일 때만 표시
  "binding_type": "view",
  "source_property_name": "(('%.7s' * #actt) = 'dialog:')",
  "target_property_name": "#visible"
},
{
  // 데이터 슬라이스
  "binding_type": "view",
  "source_property_name": "(('%.200s' * #dialogue_data) - '\t')",
  "target_property_name": "#background"
}
```




- **핵심:** 접두어 체크 + 데이터 슬라이스
- **주의:** 필드 길이를 늘리면 전체 파서 수정







### 클리어 채팅 필터
메시지 필터



특정 문자열을 가진 채팅 라인을 숨기고, 바인딩을 한 번만 실행합니다.




```
{
  "binding_type": "collection",
  "binding_collection_name": "chat_text_grid",
  "binding_condition": "once" // 한 번만 실행
},
{
  "binding_type": "view",
  "source_property_name": "(not (#text = 'clearchat-nperma'))",
  "target_property_name": "#visible"
}
```




- **핵심:** binding_condition으로 성능 최적화
- **주의:** 센티넬 문자열 변경 시 동기화 필요





      
