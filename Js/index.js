// Relógio com Data + Hora
function updateClock() {
  const now = new Date();
  const dia = String(now.getDate()).padStart(2, "0");
  const mes = String(now.getMonth() + 1).padStart(2, "0");
  const ano = now.getFullYear();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${dia}/${mes}/${ano} ${h}:${m}:${s}`;
}

updateClock();
setInterval(updateClock, 1000);

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
