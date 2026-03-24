// Toggle sidebar
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main-wrapper');
const btn = document.querySelector('.sidebar-toggle');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  main.classList.toggle('collapsed');
});
