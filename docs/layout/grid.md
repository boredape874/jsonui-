---
title: 그리드
---


## 그리드 {#grid}





칸칸이 배치하는 방식입니다. 인벤토리 슬롯처럼 일정한 배열이 필요할 때 씁니다.






3x3 그리드 예시


```
"my_grid": {
  "type": "grid",
  "grid_dimensions": [3, 3],
  "controls": [
    { "slot_0@common.button": { "grid_position": [0, 0] } },
    { "slot_1@common.button": { "grid_position": [1, 0] } },
    { "slot_2@common.button": { "grid_position": [2, 0] } }
  ]
}
```




- `grid_dimensions` 가로/세로 칸 수
- `grid_position` 각 요소의 위치 [x, y]
- 칸을 넘기면 화면 밖으로 밀립니다


      