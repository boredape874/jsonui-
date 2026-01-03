---
title: 바인딩 목록 - 플레이어 정보
outline: false
---

# 플레이어 정보 {#binding-category}

총 8개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#ingame_player_names</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
플레이어의 이름 (게임 태그)

**자세한 설명**
이 바인딩은 플레이어의 게임 내 이름을 제공합니다.

싱글플레이어에서는 현재 플레이어의 이름,
멀티플레이어에서는 특정 플레이어의 이름을 표시할 수 있습니다.

플레이어 목록, 채팅, 스코어보드 등에서 사용됩니다.

**실제 사용 예**
예: 플레이어 목록에 이름 표시, 채팅에서 발신자 이름 표시

**코드 예제**
```jsonc
{
  "player_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#ingame_player_names_enabled</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
플레이어의 이름 (게임 태그)

**자세한 설명**
이 바인딩은 플레이어의 게임 내 이름을 제공합니다.

싱글플레이어에서는 현재 플레이어의 이름,
멀티플레이어에서는 특정 플레이어의 이름을 표시할 수 있습니다.

플레이어 목록, 채팅, 스코어보드 등에서 사용됩니다.

**실제 사용 예**
예: 플레이어 목록에 이름 표시, 채팅에서 발신자 이름 표시

**코드 예제**
```jsonc
{
  "player_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#player_name</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
플레이어의 이름 (게임 태그)

**자세한 설명**
이 바인딩은 플레이어의 게임 내 이름을 제공합니다.

싱글플레이어에서는 현재 플레이어의 이름,
멀티플레이어에서는 특정 플레이어의 이름을 표시할 수 있습니다.

플레이어 목록, 채팅, 스코어보드 등에서 사용됩니다.

**실제 사용 예**
예: 플레이어 목록에 이름 표시, 채팅에서 발신자 이름 표시

**코드 예제**
```jsonc
{
  "player_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
credits screen, scoreboards, settings sections/general section (총 3개 파일)

</details>

<details>
<summary><strong>#player_name_enabled</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
플레이어의 이름 (게임 태그)

**자세한 설명**
이 바인딩은 플레이어의 게임 내 이름을 제공합니다.

싱글플레이어에서는 현재 플레이어의 이름,
멀티플레이어에서는 특정 플레이어의 이름을 표시할 수 있습니다.

플레이어 목록, 채팅, 스코어보드 등에서 사용됩니다.

**실제 사용 예**
예: 플레이어 목록에 이름 표시, 채팅에서 발신자 이름 표시

**코드 예제**
```jsonc
{
  "player_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#player_name_sidebar</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
플레이어의 이름 (게임 태그)

**자세한 설명**
이 바인딩은 플레이어의 게임 내 이름을 제공합니다.

싱글플레이어에서는 현재 플레이어의 이름,
멀티플레이어에서는 특정 플레이어의 이름을 표시할 수 있습니다.

플레이어 목록, 채팅, 스코어보드 등에서 사용됩니다.

**실제 사용 예**
예: 플레이어 목록에 이름 표시, 채팅에서 발신자 이름 표시

**코드 예제**
```jsonc
{
  "player_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
scoreboards (총 1개 파일)

</details>

<details>
<summary><strong>#playername</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
플레이어의 이름 (게임 태그)

**자세한 설명**
이 바인딩은 플레이어의 게임 내 이름을 제공합니다.

싱글플레이어에서는 현재 플레이어의 이름,
멀티플레이어에서는 특정 플레이어의 이름을 표시할 수 있습니다.

플레이어 목록, 채팅, 스코어보드 등에서 사용됩니다.

**실제 사용 예**
예: 플레이어 목록에 이름 표시, 채팅에서 발신자 이름 표시

**코드 예제**
```jsonc
{
  "player_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
pause screen, start screen (총 2개 파일)

</details>

<details>
<summary><strong>#splitscreen_ingame_player_names</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
플레이어의 이름 (게임 태그)

**자세한 설명**
이 바인딩은 플레이어의 게임 내 이름을 제공합니다.

싱글플레이어에서는 현재 플레이어의 이름,
멀티플레이어에서는 특정 플레이어의 이름을 표시할 수 있습니다.

플레이어 목록, 채팅, 스코어보드 등에서 사용됩니다.

**실제 사용 예**
예: 플레이어 목록에 이름 표시, 채팅에서 발신자 이름 표시

**코드 예제**
```jsonc
{
  "player_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

<details>
<summary><strong>#splitscreen_ingame_player_names_enabled</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
플레이어의 이름 (게임 태그)

**자세한 설명**
이 바인딩은 플레이어의 게임 내 이름을 제공합니다.

싱글플레이어에서는 현재 플레이어의 이름,
멀티플레이어에서는 특정 플레이어의 이름을 표시할 수 있습니다.

플레이어 목록, 채팅, 스코어보드 등에서 사용됩니다.

**실제 사용 예**
예: 플레이어 목록에 이름 표시, 채팅에서 발신자 이름 표시

**코드 예제**
```jsonc
{
  "player_label": {
    "type": "label",
    "text": "#player_name",
    "bindings": [
      {
        "binding_name": "#player_name",
        "binding_name_override": "#text",
        "binding_type": "global"
      }
    ]
  }
}
```

**사용 화면**
settings sections/general section (총 1개 파일)

</details>

