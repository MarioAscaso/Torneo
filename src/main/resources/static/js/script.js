// Activar pestañas y elementos de menú de forma básica

document.querySelectorAll(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

document.querySelectorAll(".sidebar-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".sidebar-item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

document.querySelectorAll(".content-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".content-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});