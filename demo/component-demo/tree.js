function tree() {
  let ptgTree = document.getElementById("jsPtgTree");
  let ul = ptgTree.querySelectorAll(".cmm-tree-item-group");

  for (let i = 0; i < ul.length; i++) {
    ul[i].style.display = "none";
  }

  let button = document.querySelectorAll(".cmm-tree-item-click");

  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      let depthGroup = this.parentElement.querySelector(".cmm-tree-item-group");

      if (depthGroup.style.display == "none") {
        depthGroup.style.display = "block";
      } else {
        depthGroup.style.display = "none";
      }

      this.classList.toggle("cmm-tree-item-open");
    });
  }
}

tree();
