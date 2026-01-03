---
title: 첫 UI 만들기
---

# 첫 UI 만들기 {#first-ui}

가장 작은 형태의 UI를 만들어 보며 구조에 익숙해집니다.

## 핵심 순서

1. namespace를 지정한다.
2. panel 하나를 만든다.
3. label을 추가한다.
4. HUD 화면에 붙인다.

## 주의할 점

- panel 크기가 0이면 아무것도 보이지 않습니다.
- anchor가 잘못되면 화면 밖으로 나갈 수 있습니다.
- #visible이 false이면 화면에 표시되지 않습니다.

## 가장 작은 HUD 예제

```json
{
  "namespace": "hello", // 파일 이름표

  "hello_root": {
    "type": "panel", // 투명한 상자
    "size": ["100%", "100%"],
    "controls": [
      {
        "title": {
          "type": "label", // 스티커 글씨
          "text": "안녕하세요 JSON UI!",
          "anchor_from": "center",
          "anchor_to": "center",
          "shadow": true // 글자 그림자
        }
      }
    ]
  },

  "hud_screen": {
    // HUD 화면에 내 패널을 추가
    "$additional_screen_content": "hello.hello_root"
  }
}
```
