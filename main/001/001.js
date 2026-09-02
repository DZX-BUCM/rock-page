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


/* =========================================================
   第一区入口图标
   ========================================================= */
function initSectionOneIcons() {
  const entries = [
    {
      label: "交流一下吧~",
      icon: "./pict/ico02.png",
      stacked: true
    },
    {
      label: "GPT便捷入口",
      icon: "./pict/ico05.png",
      stacked: false
    },
    {
      label: "数字北中医",
      icon: "./pict/ico01.png",
      stacked: false
    },
    {
      label: "大乘佛法",
      icon: "./pict/ico04.png",
      stacked: false
    },
    {
      label: "私密信息",
      icon: "./pict/ico03.png",
      stacked: false
    }
  ];

  const textNodes = [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  entries.forEach(({ label, icon, stacked }) => {
    const textNode = textNodes.find((node) => {
      return node.nodeValue.trim().includes(label);
    });

    if (!textNode) return;

    const textElement = textNode.parentElement;
    const clickableEntry = textElement.closest(
      "a, button, [role='button']"
    );

    let entry = clickableEntry || textElement;

    if (!clickableEntry) {
      while (
        entry.parentElement &&
        entry.parentElement !== document.body
      ) {
        const parent = entry.parentElement;
        const parentWidth = parent.getBoundingClientRect().width;
        const parentText = parent.textContent.replace(/\s+/g, " ").trim();

        if (!parentText.includes(label) || parentWidth > 360) break;

        entry = parent;
      }
    }

    if (entry.dataset.sectionOneIconReady === "true") return;

    const content = document.createElement("span");
    content.className = "section-one-entry-content";

    if (stacked) {
      content.classList.add("section-one-entry-content--stacked");
    }

    while (entry.firstChild) {
      content.appendChild(entry.firstChild);
    }

    const image = document.createElement("img");
    image.src = icon;
    image.alt = "";
    image.className = "section-one-icon";
    image.setAttribute("aria-hidden", "true");

    entry.classList.add("section-one-entry");
    entry.dataset.sectionOneIconReady = "true";
    entry.dataset.sectionOneLabel = label;

    entry.appendChild(image);
    entry.appendChild(content);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSectionOneIcons);
} else {
  initSectionOneIcons();
}
