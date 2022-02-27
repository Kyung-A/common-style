# common-style

공통 UI 저장소

---

## 사용법

`<head>` 태그 안에 파일 경로에 맞게 CSS 링크를 걸어주시면 됩니다.
`<link>` 순서는 아래와 같은 순서로 선언해주세요.

```html
<link rel="stylesheet" type="text/css" href="common-element.css" />
<link rel="stylesheet" type="text/css" href="common-component.css" />
<link rel="stylesheet" type="text/css" href="common-layout.css" />
```

---

## common-style 파일 구조

```
common-style/
├── demo/
│   ├── component-demo/
│   │   ├── carousel.html
│   │   ├── category.html
│   │   ├── crud-modal.html
│   │   ├── detail-view.html
│   │   ├── editing.html
│   │   ├── graph-list-option.html
│   │   ├── list-board.html
│   │   ├── modal.html
│   │   ├── pagination.html
│   │   ├── search-bar.html
│   │   ├── thumbnail-list-grid.html
│   │   ├── thumbnail-list.html
│   │   ├── tree.html
│   │   ├── crud-modal.js
│   │   ├── example-category.js
│   │   ├── modal.js
│   │   └── tree.js
│   ├── element-demo/
│   │   ├── button.html
│   │   ├── form.html
│   │   ├── input.html
│   │   ├── select.html
│   │   ├── table.html
│   │   ├── thumbnail.html
│   │   ├── toggle.html
│   │   └── typography.html
│   └── page-demo/
└── src/
    ├── css/
    │   ├── custom/
    │   ├── common-component.css
    │   ├── common-element.css
    │   └── common-layout.css
    ├── fonts/
    ├── images/
    └── scss/
        ├── custom/
        ├── common-component.scss
        ├── common-element.scss
        └── common-layout.scss

```

---

## 중요 폴더 및 파일 설명

| 이름                 | 설명                                               |
| -------------------- | -------------------------------------------------- |
| common-element.css   | HTML 태그 및 초기화, 기본 스타일 정의              |
| common-component.css | element를 조합한 컴포넌트                          |
| common-layout.css    | 레이아웃 관련된 스타일 정의                        |
| element-demo         | element 스타일을 적용한 HTML 데모 파일 모음 폴더   |
| component-demo       | component 스타일을 적용한 HTML 데모 파일 모음 폴더 |
| page-demo            | 스타일을 실제 적용한 데모 페이지 모음 폴더         |
| css/custom           | demo에 사용된 커스텀 CSS 파일 모음 폴더            |

---

## custom CSS

style 수정이 필요한 부분은 해당 페이지의 CSS 파일을 따로 작성해서 오버라이딩하기를 권합니다.
custom CSS `<link>`는 가장 마지막에 선언해주세요.

```html
<link rel="stylesheet" type="text/css" href="common-element.css" />
<link rel="stylesheet" type="text/css" href="common-component.css" />
<link rel="stylesheet" type="text/css" href="common-layout.css" />
<!-- custom CSS -->
<link rel="stylesheet" type="text/css" href="signIn.css" />
```
