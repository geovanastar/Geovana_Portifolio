//clique nos botões da janela
document.querySelectorAll(".window-buttons button").forEach((btn) => {
  btn.addEventListener(
    "mousedown",
    () => (btn.style.transform = "scale(0.92)"),
  );
  btn.addEventListener("mouseup", () => (btn.style.transform = "scale(1)"));
  btn.addEventListener("mouseleave", () => (btn.style.transform = "scale(1)"));
});

//Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
