---
title: 바인딩 목록 - 포커스/네비게이션
outline: false
search: false
---

# 포커스/네비게이션 {#binding-category}

총 2개 바인딩

[카테고리 목록으로 돌아가기](./index.html#binding-index)

<details>
<summary><strong>#focus_identifier</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
포커스 가능 요소의 고유 ID

**자세한 설명**
이 바인딩은 컨트롤러나 키보드로 UI를 탐색할 때 사용하는 고유 식별자입니다.

각 버튼, 입력 필드 등에 고유한 ID를 부여하여:
- 방향키로 요소 간 이동 가능
- Tab 키로 순서대로 이동 가능
- 컨트롤러의 D-pad로 탐색 가능

특히 콘솔 버전(Xbox, PlayStation, Switch)에서 필수적입니다.

**실제 사용 예**
예: 설정 화면의 버튼들을 방향키로 이동, 폼의 입력 필드 탐색

**코드 예제**
```jsonc
{
  "my_button": {
    "type": "button",
    "focus_identifier": "main_menu_button",
    "focus_change_down": "settings_button",
    "focus_change_up": "exit_button",
    "default_focus_precedence": 1
  }
}
```

**사용 화면**
bundle purchase warning screen, choose realm screen, display logged error screen
외 13개 (총 16개 파일)

</details>

<details>
<summary><strong>#world_button_focus_identifier</strong> - string (문자열)</summary>

**데이터 타입:** string (문자열)

**간단 설명**
포커스 가능 요소의 고유 ID

**자세한 설명**
이 바인딩은 컨트롤러나 키보드로 UI를 탐색할 때 사용하는 고유 식별자입니다.

각 버튼, 입력 필드 등에 고유한 ID를 부여하여:
- 방향키로 요소 간 이동 가능
- Tab 키로 순서대로 이동 가능
- 컨트롤러의 D-pad로 탐색 가능

특히 콘솔 버전(Xbox, PlayStation, Switch)에서 필수적입니다.

**실제 사용 예**
예: 설정 화면의 버튼들을 방향키로 이동, 폼의 입력 필드 탐색

**코드 예제**
```jsonc
{
  "my_button": {
    "type": "button",
    "focus_identifier": "main_menu_button",
    "focus_change_down": "settings_button",
    "focus_change_up": "exit_button",
    "default_focus_precedence": 1
  }
}
```

**사용 화면**
choose realm screen, play screen, select world screen (총 3개 파일)

</details>

