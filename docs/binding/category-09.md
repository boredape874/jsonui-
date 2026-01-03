---
title: 바인딩 목록 - 색상
outline: false
---

# 색상 {#binding-category}

총 1개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#color</strong> - color (RGBA 배열 [R, G, B, A])</summary>

**데이터 타입:** color (RGBA 배열 [R, G, B, A])

**간단 설명**
요소의 색상 값

**자세한 설명**
이 바인딩은 UI 요소의 색상을 동적으로 변경할 때 사용합니다.

색상은 [빨강, 초록, 파랑, 투명도] 형식의 배열입니다.
각 값은 0.0(없음)부터 1.0(최대)까지입니다.

예시:
- [1.0, 0.0, 0.0, 1.0] = 빨강 (불투명)
- [0.0, 1.0, 0.0, 0.5] = 초록 (반투명)
- [1.0, 1.0, 1.0, 1.0] = 흰색 (불투명)

**실제 사용 예**
예: 체력에 따라 색상 변경(빨강/노랑/초록), 팀 색상 표시, 상태 표시 색상

**코드 예제**
```jsonc
{
  "health_bar": {
    "type": "image",
    "texture": "textures/ui/bar",
    "color": "#health_color",
    "bindings": [
      {
        "binding_name": "#health_color",
        "binding_name_override": "#color",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
chat settings menu screen, coin purchase screen, command block screen
외 17개 (총 20개 파일)

</details>

