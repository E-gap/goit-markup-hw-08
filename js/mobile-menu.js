(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-mobile-open]"),
    closeModalBtn: document.querySelector("[menu-mobile-close]"),
    modal: document.querySelector("[menu-mobile]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-invisible");
  }
})();