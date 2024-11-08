document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Verifica si hay una preferencia guardada en localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === "dark-mode") {
      themeToggle.checked = true;
    }
  } else {
    // Si no hay preferencia guardada, verifica la preferencia del sistema
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      body.classList.add("dark-mode");
      themeToggle.checked = true;
      localStorage.setItem("theme", "dark-mode");
    }
  }

  // Función para cambiar el tema
  function toggleTheme() {
    if (themeToggle.checked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light-mode");
    }
  }

  // Evento para el interruptor
  themeToggle.addEventListener("change", toggleTheme);

  // Escuchar cambios en la preferencia del sistema
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          body.classList.add("dark-mode");
          themeToggle.checked = true;
        } else {
          body.classList.remove("dark-mode");
          themeToggle.checked = false;
        }
      }
    });
});
