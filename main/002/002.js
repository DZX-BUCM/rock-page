/* =========================================================
   002：左侧边栏交互
   从原 sidebar.js 中独立拆分；功能保持不变
   ========================================================= */

// Toggle sidebar
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main-wrapper');
const btn = document.querySelector('.sidebar-toggle');

btn.addEventListener('click', () => {
  const isCollapsed = sidebar.classList.toggle('collapsed');

  main.classList.toggle('collapsed', isCollapsed);
  btn.classList.toggle('collapsed', isCollapsed);
});