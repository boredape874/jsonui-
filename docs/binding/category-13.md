---
title: 바인딩 목록 - 컬렉션/리스트
outline: false
---

# 컬렉션/리스트 {#binding-category}

총 1개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#collection_length</strong> - number (숫자)</summary>

**데이터 타입:** number (숫자)

**간단 설명**
동적 리스트의 아이템 개수

**자세한 설명**
이 바인딩은 반복되는 UI 요소(리스트)의 개수를 제어합니다.

예를 들어 인벤토리 슬롯, 플레이어 목록, 채팅 메시지 목록 등
동적으로 개수가 변하는 요소들에 사용됩니다.

이 값이 변경되면 UI가 자동으로 업데이트되어 요소가 추가되거나 제거됩니다.

**실제 사용 예**
예: 인벤토리 아이템 개수만큼 슬롯 생성, 접속 중인 플레이어 수만큼 리스트 항목 생성

**코드 예제**
```jsonc
{
  "item_grid": {
    "type": "panel",
    "factory": {
      "name": "items",
      "control_ids": {
        "item": "@namespace.item_slot"
      }
    },
    "collection_name": "inventory_items",
    "bindings": [
      {
        "binding_type": "collection",
        "binding_collection_name": "inventory_items",
        "binding_name": "#collection_length"
      }
    ]
  }
}
```

**사용 화면**
coin purchase screen, content log history screen, csb screen
외 31개 (총 34개 파일)

</details>

