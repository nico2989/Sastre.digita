function showSection(sectionId) {
  // Oculta todas las secciones
  const sections = document.querySelectorAll('main section');
  sections.forEach(sec => sec.classList.remove('active'));

  // Muestra la sección seleccionada
  const selected = document.getElementById(sectionId);
  if (selected) {
    selected.classList.add('active');
  }
}

// Mostrar solo "inicio" al cargar la página
window.onload = () => showSection('inicio');