document.addEventListener("DOMContentLoaded", () => {
  /* ===== POPUP WELCOME WINDOW: START ===== */
  const modal = document.getElementById("greeting-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  let closeTimer;

  const closeModal = () => {
    window.clearTimeout(closeTimer);
    modal.classList.remove("is-open");
    modal.classList.add("is-leaving");

    window.setTimeout(() => {
      modal.classList.remove("is-leaving");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }, 800);
  };

  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });

  closeBtn.addEventListener("click", closeModal);
  closeTimer = window.setTimeout(closeModal, 5000);
  /* ===== POPUP WELCOME WINDOW: END ===== */
});