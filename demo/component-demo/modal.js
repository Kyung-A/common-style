const defaultBtn = document.getElementById("jsModalBtn");
const modal = document.querySelector(".cmm-modal");
const modalBg = modal.querySelector(".cmm-modal-background");

const openDefaultModal = () => {
  modal.style.visibility = "visible";
};

const closeDefaultModal = () => {
  modal.style.visibility = "hidden";
};

defaultBtn.addEventListener("click", openDefaultModal);
modalBg.addEventListener("click", closeDefaultModal);
