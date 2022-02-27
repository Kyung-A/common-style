const crudBtn = document.getElementById("jsCRUDModalBtn");
const modal = document.querySelector(".cmm-modal-crud");
const modalCrudDialog = modal.querySelector(".cmm-modal-crud-dialog");
const modalBg = modal.querySelector(".cmm-modal-crud-background");

const openCrudModal = () => {
  modal.style.visibility = "visible";
  modalCrudDialog.style.right = "0px";
};

const closeCrudModal = () => {
  modal.style.visibility = "hidden";
  modalCrudDialog.style.right = "-550px";
};

crudBtn.addEventListener("click", openCrudModal);
modalBg.addEventListener("click", closeCrudModal);
