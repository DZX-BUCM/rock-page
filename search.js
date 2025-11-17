// —— 搜索引擎配置 ——
const ENGINES = [
    {
      id: "site",
      name: "站内",
      placeholder: "站内搜索（筛选下面的卡片）",
      action: (q) => {
        // 复用你现有的筛选逻辑（来自特效.js）
        if (typeof render === "function" && typeof filter === "function") {
          render(filter(q));
          // 同步顶栏小搜索框（如果没隐藏）
          const topInput = document.querySelector("#q");
          if (topInput) topInput.value = q;
        } else {
          console.warn("未找到 render/filter，无法站内搜索");
        }
      },
    },
    {
      id: "baidu",
      name: "百度",
      placeholder: "百度一下你就知道",
      url: (q) => `https://www.baidu.com/s?wd=${encodeURIComponent(q)}`
    },
    {
      id: "google",
      name: "Google",
      placeholder: "Google 搜索",
      url: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`
    },
    {
      id: "taobao",
      name: "淘宝",
      placeholder: "淘宝商品搜索",
      url: (q) => `https://s.taobao.com/search?q=${encodeURIComponent(q)}`
    },
    {
      id: "bing",
      name: "Bing",
      placeholder: "微软Bing搜索",
      url: (q) => `https://www.bing.com/search?q=${encodeURIComponent(q)}`
    },
  ];
  
  (function initHeroSearch(){
    const input = document.getElementById("search-input");
    const btn   = document.getElementById("search-btn");
    const pills = document.getElementById("engine-pills");
  
    if (!input || !btn || !pills) return;
  
    // 生成引擎 Pills
    ENGINES.forEach((e, idx) => {
      const pill = document.createElement("button");
      pill.className = "engine-pill" + (e.id === "bing" ? " active" : "");
      pill.dataset.engine = e.id;
      pill.textContent = e.name;
      pill.addEventListener("click", () => setActiveEngine(e.id));
      pills.appendChild(pill);
      if (idx === ENGINES.length - 1) setActiveEngine("bing"); // 默认 Bing
    });
  
    function currentEngine(){
      const id = pills.querySelector(".engine-pill.active")?.dataset.engine || "bing";
      return ENGINES.find(e => e.id === id) || ENGINES[0];
    }
  
    function setActiveEngine(id){
      pills.querySelectorAll(".engine-pill").forEach(p => p.classList.toggle("active", p.dataset.engine === id));
      const eng = ENGINES.find(e => e.id === id) || ENGINES[0];
      input.placeholder = eng.placeholder || "搜索";
      input.focus();
    }
  
    function runSearch(){
      const q = input.value.trim();
      if (!q) { input.focus(); return; }
      const eng = currentEngine();
      if (eng.action) {
        eng.action(q);              // 站内
      } else if (eng.url) {
        window.open(eng.url(q), "_blank", "noopener");  // 外部搜索
      }
    }
  
    btn.addEventListener("click", runSearch);
    input.addEventListener("keydown", e => { if (e.key === "Enter") runSearch(); });
  })();
  