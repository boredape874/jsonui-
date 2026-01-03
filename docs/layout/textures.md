---
title: 텍스처와 나인슬라이스
---


## 텍스처와 나인슬라이스 {#textures}





텍스처는 “그림 파일”이고, 나인슬라이스는 “모서리 모양을 유지한 채 늘리는 방법”입니다.







### 기본 텍스처

- `texture` 그림 경로
- `size` 표시 크기
- 확장자는 보통 생략






### 나인슬라이스

모서리는 고정, 가운데만 늘려 찌그러짐을 줄입니다.


- `nineslice_size` [왼, 위, 오른, 아래]
- `tiled` 반복 여부






### 아틀라스

큰 그림에서 필요한 조각만 잘라 씁니다.


- `texture`에 `atlas.terrain`
- `uv`, `uv_size`로 조각 지정






### 반복 패턴

배경을 바둑판처럼 반복할 때 사용합니다.


- `tiled` true
- `tiled_scale`로 크기 조정









나인슬라이스 배경 예시


```
"panel_bg": {
  "type": "image", // 배경 그림
  "texture": "textures/ui/panel", // 그림 경로
  "nineslice_size": [4, 4, 4, 4], // 모서리 고정
  "tiled": false,
  "size": ["100% - 8px", 40]
}
```






아틀라스에서 아이콘 뽑기


```
"block_icon": {
  "type": "image",
  "texture": "atlas.terrain", // 큰 그림(아틀라스)
  "uv": [0, 0], // 시작 좌표
  "uv_size": [16, 16], // 잘라낼 크기
  "size": [16, 16]
}
```





아이콘이 흐리면 size를 딱 맞게 맞추고, nineslice 값을 너무 크게 주지 마세요.


      
