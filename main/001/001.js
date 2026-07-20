/* =========================================================
   001：顶部导航区交互
   从原 main.js 中独立拆分；功能保持不变
   ========================================================= */

/* =========================================================
   11) 顶部题头交互
   作用：导航高亮 + 移动端菜单展开
   ========================================================= */
function initTopicBar() {
  const bar = document.getElementById("topic-bar");
  const menuBtn = document.getElementById("topic-menu-btn");
  const nav = document.getElementById("topic-nav");

  // 移动端菜单展开
  if (menuBtn && bar) {
    menuBtn.addEventListener("click", () => {
      bar.classList.toggle("open");
    });
  }

  // 点击导航项时切换 active
  if (nav) {
    nav.addEventListener("click", (e) => {
      const item = e.target.closest(".nav-item");
      if (!item) return;

      nav.querySelectorAll(".nav-item").forEach(navItem => {
        navItem.classList.remove("active");
      });

      item.classList.add("active");
    });
  }
}


