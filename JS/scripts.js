document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');

  // Verifica el estado del tema en el almacenamiento local
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true; // Mantiene el checkbox en estado "checked"
  }

  themeToggle.addEventListener('change', () => {
    // Alterna la clase en el body
    document.body.classList.toggle('dark-mode');

    // Guarda el estado del tema en el almacenamiento local
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});