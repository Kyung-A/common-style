function example2() {
  const categories = [
    "카테고리1",
    "카테고리2",
    "카테고리3",
    "카테고리4",
    "카테고리5",
    "카테고리6",
    "카테고리7",
    "카테고리8",
    "카테고리9",
    "카테고리10",
    "카테고리11",
    "카테고리12",
    "카테고리13",
    "카테고리14",
    "카테고리15",
  ];

  let categoryDomClassName = document.querySelector(
    ".category-example2 > div:nth-child(1)"
  );

  let categoryChildrenDiv =
    document.querySelector(".category-example2").children;

  // width, padding 동적으로 계산
  let buttonWidth = 1 / categories.length;
  let buttonPadding = (1 - buttonWidth) / categories.length;

  const categoryGroupItemDomString = categories.map((cate) => {
    // 좌:전체 카테고리 우:카테고리 그룹
    if (
      categoryDomClassName.className !=
      "cmm-category-group category-group-example2"
    ) {
      // 카테고리 그룹 버튼이 한개일경우
      if (categories.length < 2) {
        return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; margin-left:10px;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
      }

      return `
      <div class="cmm-category-button-wrapper" style="width:${
        buttonWidth * 100
      }%; padding-left: ${buttonPadding * 10}%;">
        <button class="cmm-button cmm-category-button">${cate}</button>
      </div>
      `;
    }

    // 전체 카테고리가 없는 경우
    if (categoryChildrenDiv.length < 2) {
      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding:${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }

    // 좌:카테고리 그룹 우:전체 카테고리
    if (
      categoryDomClassName.className ==
      "cmm-category-group category-group-example2"
    ) {
      if (categories.length < 2) {
        // 카테고리 그룹 버튼이 한개일 경우
        return `
          <div class="cmm-category-button-wrapper" style="width:${
            buttonWidth * 100
          }%; margin-right:10px;">
              <button class="cmm-button cmm-category-button">${cate}</button>
          </div>
          `;
      }

      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding-right: ${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }
  });

  const categoryGroupDom = document.querySelector(".category-group-example2");
  categoryGroupDom.innerHTML = categoryGroupItemDomString.join("");
}

function example3() {
  const categories = [
    "카테고리1",
    "카테고리2",
    "카테고리3",
    "카테고리4",
    "카테고리5",
  ];

  let categoryDomClassName = document.querySelector(
    ".category-example3 > div:nth-child(1)"
  );

  let categoryChildrenDiv =
    document.querySelector(".category-example3").children;

  // width, padding 동적으로 계산
  let buttonWidth = 1 / categories.length;
  let buttonPadding = (1 - buttonWidth) / categories.length;

  const categoryGroupItemDomString = categories.map((cate) => {
    // 좌:전체 카테고리 우:카테고리 그룹
    if (
      categoryDomClassName.className !=
      "cmm-category-group category-group-example3"
    ) {
      // 카테고리 그룹 버튼이 한개일경우
      if (categories.length < 2) {
        return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; margin-left:10px;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
      }

      return `
      <div class="cmm-category-button-wrapper" style="width:${
        buttonWidth * 100
      }%; padding-left: ${buttonPadding * 10}%;">
        <button class="cmm-button cmm-category-button">${cate}</button>
      </div>
      `;
    }

    // 전체 카테고리가 없는 경우
    if (categoryChildrenDiv.length < 2) {
      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding:${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }

    // 좌:카테고리 그룹 우:전체 카테고리
    if (
      categoryDomClassName.className ==
      "cmm-category-group category-group-example3"
    ) {
      if (categories.length < 2) {
        // 카테고리 그룹 버튼이 한개일 경우
        return `
          <div class="cmm-category-button-wrapper" style="width:${
            buttonWidth * 100
          }%; margin-right:10px;">
              <button class="cmm-button cmm-category-button">${cate}</button>
          </div>
          `;
      }

      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding-right: ${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }
  });

  const categoryGroupDom = document.querySelector(".category-group-example3");
  categoryGroupDom.innerHTML = categoryGroupItemDomString.join("");
}

function example4() {
  const categories = ["카테고리1"];

  let categoryDomClassName = document.querySelector(
    ".category-example4 > div:nth-child(1)"
  );

  let categoryChildrenDiv =
    document.querySelector(".category-example4").children;

  // width, padding 동적으로 계산
  let buttonWidth = 1 / categories.length;
  let buttonPadding = (1 - buttonWidth) / categories.length;

  const categoryGroupItemDomString = categories.map((cate) => {
    // 좌:전체 카테고리 우:카테고리 그룹
    if (
      categoryDomClassName.className !=
      "cmm-category-group category-group-example4"
    ) {
      // 카테고리 그룹 버튼이 한개일경우
      if (categories.length < 2) {
        return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; margin-left:10px;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
      }

      return `
      <div class="cmm-category-button-wrapper" style="width:${
        buttonWidth * 100
      }%; padding-left: ${buttonPadding * 10}%;">
        <button class="cmm-button cmm-category-button">${cate}</button>
      </div>
      `;
    }

    // 전체 카테고리가 없는 경우
    if (categoryChildrenDiv.length < 2) {
      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding:${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }

    // 좌:카테고리 그룹 우:전체 카테고리
    if (
      categoryDomClassName.className ==
      "cmm-category-group category-group-example4"
    ) {
      if (categories.length < 2) {
        // 카테고리 그룹 버튼이 한개일 경우
        return `
          <div class="cmm-category-button-wrapper" style="width:${
            buttonWidth * 100
          }%; margin-right:10px;">
              <button class="cmm-button cmm-category-button">${cate}</button>
          </div>
          `;
      }

      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding-right: ${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }
  });

  const categoryGroupDom = document.querySelector(".category-group-example4");
  categoryGroupDom.innerHTML = categoryGroupItemDomString.join("");
}

function example5() {
  const categories = ["카테고리1"];

  let categoryDomClassName = document.querySelector(
    ".category-example5 > div:nth-child(1)"
  );

  let categoryChildrenDiv =
    document.querySelector(".category-example5").children;

  // width, padding 동적으로 계산
  let buttonWidth = 1 / categories.length;
  let buttonPadding = (1 - buttonWidth) / categories.length;

  const categoryGroupItemDomString = categories.map((cate) => {
    // 좌:전체 카테고리 우:카테고리 그룹
    if (
      categoryDomClassName.className !=
      "cmm-category-group category-group-example5"
    ) {
      // 카테고리 그룹 버튼이 한개일경우
      if (categories.length < 2) {
        return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; margin-left:10px;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
      }

      // 전체 카테고리가 없는 경우
      if (categoryChildrenDiv.length < 2) {
        return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding:${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
      }

      return `
      <div class="cmm-category-button-wrapper" style="width:${
        buttonWidth * 100
      }%; padding-left: ${buttonPadding * 10}%;">
        <button class="cmm-button cmm-category-button">${cate}</button>
      </div>
      `;
    }

    // 좌:카테고리 그룹 우:전체 카테고리
    if (
      categoryDomClassName.className ==
      "cmm-category-group category-group-example5"
    ) {
      if (categories.length < 2) {
        // 카테고리 그룹 버튼이 한개일 경우
        return `
          <div class="cmm-category-button-wrapper" style="width:${
            buttonWidth * 100
          }%; margin-right:10px;">
              <button class="cmm-button cmm-category-button">${cate}</button>
          </div>
          `;
      }

      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding-right: ${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }
  });

  const categoryGroupDom = document.querySelector(".category-group-example5");
  categoryGroupDom.innerHTML = categoryGroupItemDomString.join("");
}

function example6() {
  const categories = [
    "카테고리1",
    "카테고리2",
    "카테고리3",
    "카테고리4",
    "카테고리5",
    "카테고리6",
    "카테고리7",
    "카테고리8",
    "카테고리9",
    "카테고리10",
    "카테고리11",
    "카테고리12",
    "카테고리13",
    "카테고리14",
    "카테고리15",
    "카테고리16",
    "카테고리17",
    "카테고리18",
    "카테고리19",
    "카테고리20",
    "카테고리21",
    "카테고리22",
    "카테고리23",
    "카테고리24",
    "카테고리25",
    "카테고리26",
    "카테고리27",
    "카테고리28",
    "카테고리29",
    "카테고리30",
    "카테고리31",
    "카테고리32",
    "카테고리33",
    "카테고리34",
    "카테고리35",
    "카테고리36",
    "카테고리37",
    "카테고리38",
    "카테고리39",
    "카테고리40",
  ];

  let categoryDomClassName = document.querySelector(
    ".category-example6 > div:nth-child(1)"
  );

  let categoryChildrenDiv =
    document.querySelector(".category-example6").children;

  // width, padding 동적으로 계산
  let buttonWidth = 1 / categories.length;
  let buttonPadding = (1 - buttonWidth) / categories.length;

  const categoryGroupItemDomString = categories.map((cate) => {
    // 좌:전체 카테고리 우:카테고리 그룹
    if (
      categoryDomClassName.className !=
      "cmm-category-group category-group-example6"
    ) {
      // 카테고리 그룹 버튼이 한개일경우
      if (categories.length < 2) {
        return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; margin-left:10px;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
      }

      return `
      <div class="cmm-category-button-wrapper" style="width:${
        buttonWidth * 100
      }%; padding-left: ${buttonPadding * 10}%;">
        <button class="cmm-button cmm-category-button">${cate}</button>
      </div>
      `;
    }

    // 전체 카테고리가 없는 경우
    if (categoryChildrenDiv.length < 2) {
      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding:${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }

    // 좌:카테고리 그룹 우:전체 카테고리
    if (
      categoryDomClassName.className ==
      "cmm-category-group category-group-example6"
    ) {
      if (categories.length < 2) {
        // 카테고리 그룹 버튼이 한개일 경우
        return `
          <div class="cmm-category-button-wrapper" style="width:${
            buttonWidth * 100
          }%; margin-right:10px;">
              <button class="cmm-button cmm-category-button">${cate}</button>
          </div>
          `;
      }

      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding-right: ${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }
  });

  const categoryGroupDom = document.querySelector(".category-group-example6");
  categoryGroupDom.innerHTML = categoryGroupItemDomString.join("");
}

function example7() {
  const categories = [
    "카테고리1",
    "카테고리2",
    "카테고리3",
    "카테고리4",
    "카테고리5",
    "카테고리6",
    "카테고리7",
    "카테고리8",
    "카테고리9",
    "카테고리10",
  ];

  let categoryDomClassName = document.querySelector(
    ".category-example7 > div:nth-child(1)"
  );

  let categoryChildrenDiv =
    document.querySelector(".category-example7").children;

  // width, padding 동적으로 계산
  let buttonWidth = 1 / categories.length;
  let buttonPadding = (1 - buttonWidth) / categories.length;

  const categoryGroupItemDomString = categories.map((cate) => {
    // 좌:전체 카테고리 우:카테고리 그룹
    if (
      categoryDomClassName.className !=
      "cmm-category-group category-group-example7"
    ) {
      // 카테고리 그룹 버튼이 한개일경우
      if (categories.length < 2) {
        return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; margin-left:10px;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
      }

      return `
      <div class="cmm-category-button-wrapper" style="width:${
        buttonWidth * 100
      }%; padding-left: ${buttonPadding * 10}%;">
        <button class="cmm-button cmm-category-button">${cate}</button>
      </div>
      `;
    }

    // 전체 카테고리가 없는 경우
    if ((categoryChildrenDiv.length = 1)) {
      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding:${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }

    // 좌:카테고리 그룹 우:전체 카테고리
    if (
      categoryDomClassName.className ==
      "cmm-category-group category-group-example7"
    ) {
      if (categories.length < 2) {
        // 카테고리 그룹 버튼이 한개일 경우
        return `
          <div class="cmm-category-button-wrapper" style="width:${
            buttonWidth * 100
          }%; margin-right:10px;">
              <button class="cmm-button cmm-category-button">${cate}</button>
          </div>
          `;
      }

      return `
        <div class="cmm-category-button-wrapper" style="width:${
          buttonWidth * 100
        }%; padding-right: ${buttonPadding * 10}%;">
             <button class="cmm-button cmm-category-button">${cate}</button>
        </div>
        `;
    }
  });

  const categoryGroupDom = document.querySelector(".category-group-example7");
  categoryGroupDom.innerHTML = categoryGroupItemDomString.join("");
}

example2();
example3();
example4();
example5();
example6();
example7();
