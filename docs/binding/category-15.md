---
title: 바인딩 목록 - 토글/스위치
outline: false
---

# 토글/스위치 {#binding-category}

총 1개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#toggle_state</strong> - boolean (true/false)</summary>

**데이터 타입:** boolean (true/false)

**간단 설명**
토글 버튼의 ON/OFF 상태

**자세한 설명**
이 바인딩은 토글 스위치(toggle)의 현재 상태를 나타냅니다.

- true일 때: 토글이 켜진 상태 (ON)
- false일 때: 토글이 꺼진 상태 (OFF)

설정 화면의 ON/OFF 스위치 등에서 사용됩니다.

**실제 사용 예**
예: 소리 켜기/끄기, 자막 표시 ON/OFF, 자동 저장 활성화/비활성화

**코드 예제**
```jsonc
{
  "sound_toggle": {
    "type": "toggle",
    "toggle_name": "sound_enabled",
    "bindings": [
      {
        "binding_name": "#sound_enabled",
        "binding_name_override": "#toggle_state",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
beacon screen, beacon screen pocket, day one experience intro screen
외 21개 (총 24개 파일)

</details>

