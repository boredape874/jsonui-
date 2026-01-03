---
title: 실제 파일에서 많이 쓰는 것
---


## 실제 파일에서 많이 쓰는 것 {#realworld}





프로젝트 안 JSON UI 파일을 모두 훑어보고, 자주 나오는 것만 아주 쉽게 요약했습니다.







            ### 가장 많이 보이는 상자

- `panel` 큰 상자
- `stack_panel` 줄맞춤 상자
- `image` 그림 상자






            ### 바인딩 3형제

- `view` 조건/계산
- `collection` 반복 목록
- `global` 게임이 주는 값


            collection에는 `collection_details`가 자주 붙습니다.




            ### 자주 쓰는 바인딩 이름

- `#visible` 보이기/숨기기
- `#texture` 그림 바꾸기
- `#enabled` 버튼 활성화
- `#text` 글씨 변경
- `#collection_length` 목록 길이






            ### 애니메이션 4형제

- `offset` 위치 이동
- `alpha` 투명도
- `size` 크기 변화
- `wait` 잠시 대기






            ### 자주 쓰는 렌더러

- `gradient_renderer` 그라데이션
- `live_player_renderer` 캐릭터 모델
- `inventory_item_renderer` 아이템 렌더






            ### 자주 쓰는 목록 이름

- `form_buttons` 버튼 목록
- `container_items` 아이템 칸
- `hotbar_items` 핫바 슬롯






            ### 자주 바꾸는 화면

- `hud_screen` 화면 위 표시
- `server_form` 서버 폼
- `npc_interact` NPC 대화








          이 6가지를 먼저 익히면, 화면을 읽고 고치는 속도가 훨씬 빨라집니다.


      