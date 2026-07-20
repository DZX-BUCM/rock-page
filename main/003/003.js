/* =========================================================
   003：主工作台 / 搜索区交互
   包含搜索引擎、Hero 搜索和标题轮播
   ========================================================= */

/* =========================================================
   3) 搜索引擎配置
   改 Hero 搜索框里的搜索平台，看这里
   ========================================================= */
const ENGINES = [
  {
    id: "site",
    name: "站内",
    placeholder: "一般找不到的搜一下就找到了(●'◡'●)",
    action: (q) => {
      render(filter(q));

      // 如果顶部那个小搜索框存在，同步内容
      const topInput = document.getElementById("q");
      if (topInput) topInput.value = q;
    }
  },
  {
    id: "baidu",
    name: "百度",
    placeholder: "是的我什么都知道",
    url: (q) => `https://www.baidu.com/s?wd=${encodeURIComponent(q)}`
  },
  {
    id: "google",
    name: "Google",
    placeholder: "是不是又偷偷翻墙啦？？？",
    url: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`
  },
  {
    id: "taobao",
    name: "淘宝",
    placeholder: "来淘点宝贝吧~",
    url: (q) => `https://s.taobao.com/search?q=${encodeURIComponent(q)}`
  },
  {
    id: "bing",
    name: "Bing",
    placeholder: "嗨~今天有什么想问的？",
    url: (q) => `https://www.bing.com/search?q=${encodeURIComponent(q)}`
  }
];


/* =========================================================
   4) Hero 标题轮播文案
   改搜索框上面那句会切换的大字，看这里
   ========================================================= */
const HERO_ROTATING_LINES = [
  "小D 工作台",
  "走南闯北的一些经验哦 ૮&nbsp;˶ᵔ&nbsp;ᵕ&nbsp;ᵔ˶&nbsp;ა",
  "可以试着联系站长鸭 ♡",
  "call me hero of computer 嘿嘿 ᕦ(ò_óˇ)ᕤ"
];



/* =========================================================
   10) Hero 搜索初始化
   作用：中间大搜索框 + 搜索引擎 pills
   ========================================================= */
function initHeroSearch() {
  const input = document.getElementById("search-input");
  const btn = document.getElementById("search-btn");
  const pills = document.getElementById("engine-pills");

  if (!input || !btn || !pills) return;

  // 生成搜索引擎按钮
  pills.innerHTML = "";

  ENGINES.forEach((engine) => {
    const pill = document.createElement("button");
    pill.className = "engine-pill";
    pill.dataset.engine = engine.id;
    pill.textContent = engine.name;

    pill.addEventListener("click", () => {
      setActiveEngine(engine.id);
    });

    pills.appendChild(pill);
  });

  // 当前激活的搜索引擎
  function currentEngine() {
    const activeId =
      pills.querySelector(".engine-pill.active")?.dataset.engine || "bing";

    return ENGINES.find(engine => engine.id === activeId) || ENGINES[0];
  }

  // 设置当前激活搜索引擎
  function setActiveEngine(id) {
    pills.querySelectorAll(".engine-pill").forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.engine === id);
    });

    const engine = ENGINES.find(item => item.id === id) || ENGINES[0];
    input.placeholder = engine.placeholder || "搜索";
    input.focus();
  }

  // 执行搜索
  function runSearch() {
    const q = input.value.trim();
    if (!q) {
      input.focus();
      return;
    }

    const engine = currentEngine();

    if (engine.action) {
      engine.action(q); // 站内搜索
    } else if (engine.url) {
      window.open(engine.url(q), "_blank", "noopener"); // 外部搜索
    }
  }

  btn.addEventListener("click", runSearch);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      runSearch();
    }
  });

  // 默认激活 Bing（保持你原来的效果）
  setActiveEngine("bing");
}



/* =========================================================
   12) Hero 标题轮播
   作用：搜索框上面的动态文案切换
   ========================================================= */
function initHeroTitleRotate() {
  const el = document.getElementById("hero-rotating-text");
  if (!el) return;

  let current = 0;
  el.innerHTML = HERO_ROTATING_LINES[current];

  setInterval(() => {
    el.classList.add("is-changing");

    setTimeout(() => {
      current = (current + 1) % HERO_ROTATING_LINES.length;
      el.innerHTML = HERO_ROTATING_LINES[current];
      el.classList.remove("is-changing");
    }, 420);
  }, 8000);
}

/* =========================================================
   13) 顶部小搜索框
   作用：如果页面里有 #q，就支持实时搜索
   ========================================================= */
function initTopSearch() {
  const input = document.getElementById("q");
  if (!input) return;

  input.addEventListener("input", (e) => {
    render(filter(e.target.value));
  });

  input.placeholder = "搜索名称 / 描述 / 标签（JS OK）";
}


