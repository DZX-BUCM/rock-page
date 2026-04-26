/* =========================================================
   1) 网站数据
   这里只放“内容数据”，以后你新增网站，直接往这里加
   ========================================================= */

// logo 可选：
// 1. 写本地路径，例如 "favicon/office.png"
// 2. 写完整网络地址
// 3. 不写 logo，就会自动尝试：本地图标 -> Google favicon -> 首字母
const SITES = [
  // ========================= 技术积累 =========================
  {
    name: "office",
    url: "https://blog.csdn.net/huazn612/article/details/109289960",
    desc: "找不到注册类三联弹窗问题",
    logo: "favicon/office.png"
  },
  {
    name: "node.js",
    url: "https://blog.csdn.net/qq_45824905/article/details/130442691",
    desc: "cnpm不是可执行的文件问题",
    logo: "https://nodejs.org/static/images/logo.svg"
  },
  {
    name: "系统问题",
    url: "https://blog.csdn.net/qngfeng/article/details/105932018",
    desc: "需要来自Trust的权限",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
  },
  {
    name: "office",
    url: "https://blog.csdn.net/qq_38789150/article/details/117655181",
    desc: "word运行报错问题",
    logo: "favicon/office.png"
  },
  {
    name: "office",
    url: "https://www.a8u.net/k/ru-he-yong-word-gei-lun-wen-jia-ye-ma.html",
    desc: "word中怎么在指定位置开始统计页码问题",
    logo: "favicon/office.png"
  },
  {
    name: "windows问题",
    url: "https://www.win10d.com/jiaocheng/31079.html",
    desc: "文件夹底色变黑的处理办法",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
  },
  {
    name: "网站搭建",
    url: "https://www.bilibili.com/video/BV1ts4y1f7Gu/?spm_id_from=333.337.search-card.all.click&vd_source=151ea1245ea510a36b1ff687d1ce2b87",
    desc: "构建个人网站的总体教程",
    logo: "favicon/tu2.png"
  },
  {
    name: "HEXO部署",
    url: "https://www.codeprj.com/blog/6a45771.html",
    desc: "个人网站技术栈",
    logo: "favicon/tu2.png"
  },
  {
    name: "npm install报错",
    url: "https://blog.csdn.net/qq_63358859/article/details/134920380",
    desc: "个人网站技术栈",
    logo: "favicon/tu2.png"
  },
  {
    name: "解决npm警告",
    url: "https://blog.csdn.net/tombosky/article/details/135819263",
    desc: "个人网站技术栈",
    logo: "favicon/tu2.png"
  },
  {
    name: "在线markdown编辑器",
    url: "https://markdown.com.cn/editor/",
    desc: "个人网站技术栈",
    logo: "favicon/tu2.png"
  },
  {
    name: "ppt-canvas-size",
    url: "https://blog.csdn.net/weixin_41529093/article/details/120921401",
    desc: "ppt怎么调整画布大小",
    logo: "favicon/office.png"
  },

  {
    name: "sms-rental",
    url: "https://sms-verification-number.com/en/home/",
    desc: "📲 SMS电话租赁",
    logo: "favicon/jichang.png"
  },
  {
    name: "huggingface注册不了418问题",
    url: "https://blog.csdn.net/yqmyqqys1/article/details/149528456",
    desc: "huggingface",
    logo: "✨"
  },


  // ========================= 学习资料 =========================
  {
    name: "中国知网",
    url: "https://xztg.cnki.net/",
    desc: "论文投稿网站",
    logo: "https://xztg.cnki.net/favicon.ico"
  },
  {
    name: "托福单词",
    url: "https://blog.csdn.net/qq_33957603/article/details/130328628?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-130328628-blog-72852143.235%5ev43%5epc_blog_bottom_relevance_base6&spm=1001.2101.3001.4242.1&utm_relevant_index=3",
    desc: "单词学习",
    logo: "favicon/tu9.png"
  },
  {
    name: "TED音频01",
    url: "https://www.ted.com/talks/tarveen_forrester_let_your_ambition_light_you_up_not_burn_you_out",
    desc: "listening",
    logo: "favicon/qiyiguo.png"
  },
  {
    name: "TED音频03",
    url: "https://www.ted.com/talks/wendy_macnaughton_the_art_of_paying_attention",
    desc: "listening",
    logo: "favicon/qiyiguo.png"
  },
  {
    name: "TED音频02",
    url: "https://www.ted.com/talks/vittorio_loreto_need_a_new_idea_start_at_the_edge_of_what_is_known",
    desc: "listening",
    logo: "favicon/qiyiguo.png"
  },
  {
    name: "TED音频04",
    url: "https://www.youtube.com/watch?v=Zz9aXCfTdhw",
    desc: "listening",
    logo: "favicon/qiyiguo.png"
  },


  // ========================= 下载专区 =========================
  {
    name: "字体下载",
    url: "https://www.fonts.net.cn/fonts-zh/tag-naibuerzz-1.html",
    desc: "fonts",
    logo: "🧁"
  },
  {
    name: "Europe PMC",
    url: "https://europepmc.org/article/MED/34725513",
    desc: "下载英文文献",
    logo: "favicon/tu10.png"
  },
  {
    name: "SCI-HUB",
    url: "https://sci-hub.usualwant.com/",
    desc: "下载英文文献",
    logo: "favicon/tu11.png"
  },
  {
    name: "谷歌学术人工智能",
    url: "https://typicalgame.com/",
    desc: "下载英文文献",
    logo: "favicon/google.png"
  },
  {
    name: "通用机场下载及使用教程",
    url: "https://wangpan.yfjc.my/",
    desc: "可以使用任何你想要的机场",
    logo: "favicon/jichang.png"
  },
  {
    name: "魔塔社区",
    url: "https://www.modelscope.cn/home",
    desc: "很多大语言模型这里都能找到",
    logo: "favicon/mota.png"
  },
  {
    name: "24bit无损下载",
    url: "https://www.24bit.net/",
    desc: "下载母带级别的音乐，但是要收费哦",
    logo: "favicon/music.png"
  },
  {
    name: "阿里矢量图标库",
    url: "https://www.iconfont.cn/?spm=a313x.search_index.i3.d4d0a486a.4ffa3a81vKs7qJ",
    desc: "下载所需的图标",
    logo: "favicon/lianwu.png"
  },
  {
    name: "moji-diary",
    url: "https://www.moji01.com/",
    desc: "🖋️ 墨记日记",
    logo: "favicon/jichang.png"
  },
  {
    name: "ffmpeg-install",
    url: "https://blog.csdn.net/2602_94958286/article/details/159333768",
    desc: "FFmpeg下载安装教程",
    logo: "favicon/bangbangtang.png"
  },
  {
    name: "fetchv",
    url: "https://microsoftedge.microsoft.com/addons/detail/fetchv-m3u8hls%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD%E5%99%A8/dbepbhhcmhodojepbagfppgpieeplpik",
    desc: "M3U8/HLS网页视频下载工具",
    logo: "favicon/bangbangtang.png"
  },


  // ========================= 知识图谱 =========================
  {
    name: "Neo4j",
    url: "https://www.w3cschool.cn/neo4j/",
    desc: "知识图谱语言看不懂",
    logo: "https://neo4j.com/favicon.ico"
  },
  {
    name: "Neo4j",
    url: "https://blog.csdn.net/fengye_ls2022/article/details/128871264",
    desc: "命令代码不会编写",
    logo: "https://neo4j.com/favicon.ico"
  },
  {
    name: "Neo4j",
    url: "https://blog.csdn.net/weixin_39025362/article/details/109100383",
    desc: "删除节点",
    logo: "https://neo4j.com/favicon.ico"
  },
  {
    name: "Neo4j",
    url: "https://blog.csdn.net/qq_34045989/article/details/115458261",
    desc: "软件数据库红色感叹号删不掉",
    logo: "https://neo4j.com/favicon.ico"
  },
  {
    name: "Neo4j",
    url: "https://blog.csdn.net/misakivv/article/details/144620416?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-144620416-blog-140546061.235%5ev43%5epc_blog_bottom_relevance_base3&spm=1001.2101.3001.4242.1&utm_relevant_index=3",
    desc: "软件打开了但是窗口没有弹出",
    logo: "https://neo4j.com/favicon.ico"
  },
  {
    name: "Neo4j",
    url: "https://blog.csdn.net/jclian91/article/details/118685492",
    desc: "增加节点及关系",
    logo: "https://neo4j.com/favicon.ico"
  },
  {
    name: "Neo4j",
    url: "https://blog.csdn.net/quiet_girl/article/details/71155442",
    desc: "批量导入节点和关系",
    logo: "https://neo4j.com/favicon.ico"
  },

  // ========================= 实用工具 =========================

  {
    name: "labelme",
    url: "https://blog.csdn.net/cenbug/article/details/124944291",
    desc: "稳定的图片标注工具",
    logo: "favicon/CSDN.png"
  },
  {
    name: "Google 翻译",
    url: "https://translate.google.com/?hl=zh-CN&tab=TT&sl=auto&tl=en&op=translate",
    desc: "在线翻译工具",
    logo: "favicon/tu14.png"
  },
  {
    name: "pubmed pro",
    url: "https://medcite.cn/search/nature%20biomedical%20engineering?content=2&iFactor=0,7&threshold=0.8",
    desc: "文献检索工具",
    logo: "favicon/TU12.png"
  },
  {
    name: "freecompress",
    url: "https://freecompress.com/zh-cn/compress-image",
    desc: "图片压缩工具",
    logo: "favicon/tu1.jpg"
  },
  {
    name: "哲风壁纸",
    url: "https://haowallpaper.com/",
    desc: "免费壁纸工具",
    logo: "favicon/zhefengbizhi.ico"
  },
  {
    name: "OpenAI KG",
    url: "https://upchatgpt.com/",
    desc: "国内充值GPT工具",
    logo: "favicon/chongzhi.png"
  },
  {
    name: "Aizex",
    url: "https://aizex.net/usersDocument",
    desc: "各种模型的合租面板",
    logo: "favicon/mogu.png"
  },
  {
    name: "Vidu AI",
    url: "https://www.vidu.cn/create/img2video",
    desc: "把图片转化成视频的工具",
    logo: "favicon/vidu ai.png"
  },
  {
    name: "video to frames",
    url: "https://videotoframes.com/zh",
    desc: "视频逐帧转化工具",
    logo: "favicon/video to frames.png"
  },
  {
    name: "deepseek API",
    url: "https://platform.deepseek.com/usage",
    desc: "deepseek API充值工具",
    logo: "favicon/shizi.png"
  },


  // ========================= 国学典籍 =========================
  {
    name: "红楼梦",
    url: "https://hongloumeng.5000yan.com/",
    desc: "红楼梦电子书",
    logo: "favicon/book.png"
  },
  {
    name: "红楼梦",
    url: "https://www.guoxuemeng.com/guoxue/hongloumeng/",
    desc: "红楼梦电子书",
    logo: "favicon/tu15.png"
  },
  {
    name: "黄帝内经",
    url: "https://www.cngwzj.com/tangshi300/3403.html",
    desc: "黄帝内经素问（注音版）",
    logo: "favicon/guwenzhijia.png"
  },
  {
    name: "黄帝内经",
    url: "https://www.cngwzj.com/tangshi300/3436.html",
    desc: "黄帝内经灵枢（注音版）",
    logo: "favicon/guwenzhijia.png"
  },
  {
    name: "ximalaya",
    url: "https://www.ximalaya.com/",
    desc: "🎧 喜马拉雅",
    logo: "favicon/jichang.png"
  },

  // ========================= 软件破解 =========================
  
  {
    name: "visio",
    url: "https://zhuanlan.zhihu.com/p/1896564817998877030",
    desc: "安装visio及激活教程",
    logo: "favicon/safe.png"
  },
  {
    name: "diskgenius",
    url: "https://www.70soft.com/soft/814880.html",
    desc: "💿 DiskGenius完美破解版",
    logo: "favicon/safe.png"
  },
  {
    name: "aida64",
    url: "https://www.downkuai.com/soft/182841.html",
    desc: "🧸 AIDA64破解版",
    logo: "favicon/safe.png"
  },
  {
    name: "Xmind破解",
    url: "https://www.cnblogs.com/wushiyiwuzhong/p/17803638.html",
    desc: "软件破解",
    logo: "favicon/safe.png"
  }
];


/* =========================================================
   2) 分类栏数据
   改 Hero 下方那排横向分类卡片，就看这里
   ========================================================= */
const ROCK_ITEMS = [
  { cat: "crack",        iconImg: "favicon/pojie.png", title: "破解教程", desc: "常用破解经验" },
  { cat: "research",     iconImg: "favicon/documentory.png", title: "学习资料", desc: "论文与软件教程" },
  { cat: "download",     iconImg: "favicon/clound.png", title: "下载专区", desc: "常用下载与资源入口" },
  { cat: "classics",     iconImg: "favicon/classic.png", title: "国学典籍", desc: "数字典籍资源整理" },
  { cat: "tools",        iconImg: "favicon/toolbox.png", title: "实用工具", desc: "日常高频工具合集" },
  { cat: "KG",           iconImg: "favicon/tupu.png", title: "知识图谱", desc: "我的主要研究方向" },
  { cat: "techology",    iconImg: "favicon/jishu.png", title: "技术积累", desc: "电脑日常操作涉及的技术问题" }
];

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
  "小Dの门面 ✦",
  "走南闯北的一些经验哦 ૮&nbsp;˶ᵔ&nbsp;ᵕ&nbsp;ᵔ˶&nbsp;ა",
  "可以试着联系站长鸭 ♡",
  "call me hero of computer 嘿嘿 ᕦ(ò_óˇ)ᕤ"
];


/* =========================================================
   5) 基础工具函数
   这些是“辅助函数”，一般不用频繁改
   ========================================================= */

// 更短的选择器写法
const $ = (selector) => document.querySelector(selector);

// 安全获取 host，例如：www.baidu.com
function getHost(url) {
  try {
    return new URL(url).host;
  } catch (err) {
    return "";
  }
}

// 生成本地默认图标文件名
// 例如：node.js -> /favicon/nodejs.svg 和 /favicon/nodejs.png
function getDefaultLogoPaths(siteName) {
  const safeName = String(siteName || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  return {
    svg: `/favicon/${safeName}.svg`,
    png: `/favicon/${safeName}.png`
  };
}

// 所有图标都失败后，显示首字母
function setLogoFallback(box, siteName) {
  box.innerHTML = `<span class="fallback">${String(siteName || "?")[0].toUpperCase()}</span>`;
}


/* =========================================================
   6) Logo 逻辑
   作用：给每个网站卡片生成左侧图标
   ========================================================= */

function makeLogoBox(site) {
  const box = document.createElement("div");
  const img = new Image();
  const host = getHost(site.url);
  const localLogo = getDefaultLogoPaths(site.name);

  box.className = "logo";
  img.alt = site.name;

  // 情况 1：用户自己写了 logo
  // 顺序：指定 logo -> 本地 svg -> 本地 png -> 首字母
  if (site.logo) {
    img.src = site.logo;

    img.onerror = () => {
      img.src = localLogo.svg;

      img.onerror = () => {
        img.src = localLogo.png;

        img.onerror = () => {
          setLogoFallback(box, site.name);
        };
      };
    };
  }
  // 情况 2：用户没写 logo
  // 顺序：本地 svg -> 本地 png -> Google favicon -> 首字母
  else {
    img.src = localLogo.svg;

    img.onerror = () => {
      img.src = localLogo.png;

      img.onerror = () => {
        img.src = `https://www.google.com/s2/favicons?domain=${host}&sz=64`;

        img.onerror = () => {
          setLogoFallback(box, site.name);
        };
      };
    };
  }

  box.appendChild(img);
  return box;
}


/* =========================================================
   7) 卡片渲染区
   作用：把 SITES 数据渲染成你页面上的网址卡片
   ========================================================= */

// 单个网站卡片
function card(site, idx) {
  const el = document.createElement("a");
  const host = getHost(site.url);

  el.className = "card";
  el.href = site.url;
  el.target = "_blank";
  el.rel = "noopener";

  el.innerHTML = `
    <span class="badge">${idx}</span>
    <div class="content">
      <div class="name" title="${site.name}">${site.name}</div>
      <div class="desc" title="${site.desc || ""}">${site.desc || ""}</div>
    </div>
    <div class="host" title="${host}">${host}</div>
  `;

  // 把 logo 插到卡片最前面
  el.insertBefore(makeLogoBox(site), el.firstChild);

  return el;
}

// 渲染整组卡片
function render(list) {
  const grid = $("#grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `<div class="empty">没有匹配到结果</div>`;
    return;
  }

  list.forEach((site, index) => {
    grid.appendChild(card(site, index + 1));
  });
}

// 搜索过滤
function filter(keyword) {
  const q = String(keyword || "").trim().toLowerCase();

  if (!q) return SITES;

  return SITES.filter((site) => {
    const name = String(site.name || "").toLowerCase();
    const desc = String(site.desc || "").toLowerCase();
    const url = String(site.url || "").toLowerCase();
    const tags = Array.isArray(site.tags) ? site.tags : [];

    return (
      name.includes(q) ||
      desc.includes(q) ||
      url.includes(q) ||
      tags.some(tag => String(tag).toLowerCase().includes(q))
    );
  });
}


/* =========================================================
   8) 分类过滤逻辑，就是怎么识别类别
   作用：点击横向分类栏时，筛选对应的网站卡片
   ========================================================= */

// 每个分类对应的“关键词命中规则”
// 优先 cats，再看 tags，最后用 name + desc 兜底匹配
const CATEGORY_MAP = {
  crack: ["破解","visio"],
  research: ["学术", "论文", "文献", "TED"],
  download: ["网盘", "下载", "安装", "云盘"],
  classics: ["小说", "喜马拉雅", "典籍", "红楼梦", "黄帝内经"],
  tools: ["工具", "Aizex",],
  KG: ["Neo4j"],
  techology: ["技术","问题", "SMS", "教程","ppt"]
};

// 提供给外部用，保持你原来的调用方式不变
window.applyCategory = function (cat) {
  const expectedWords = (CATEGORY_MAP[cat] || []).map(word => String(word).toLowerCase());

  function hitCats(site) {
    return Array.isArray(site.cats) && site.cats.map(String).includes(cat);
  }

  function hitTags(site) {
    const tags = (site.tags || []).map(tag => String(tag).toLowerCase());
    return tags.some(tag => expectedWords.some(word => tag.includes(word)));
  }

  function hitKeyword(site) {
    const text = `${site.name || ""} ${site.desc || ""}`.toLowerCase();
    return expectedWords.some(word => text.includes(word));
  }

  const result = SITES.filter(site => hitCats(site) || hitTags(site) || hitKeyword(site));

  // 没匹配到时，仍显示全部，避免页面空掉
  render(result.length ? result : SITES);
};


/* =========================================================
   9) 横向分类栏初始化
   作用：渲染 ROCK_ITEMS，并绑定点击、左右滚动、鼠标滚轮横移
   ========================================================= */
function initRock() {
  const viewport = document.getElementById("rock-viewport");
  const list = document.getElementById("rock-list");
  const prev = document.querySelector(".rock-prev");
  const next = document.querySelector(".rock-next");

  if (!viewport || !list) return;

  // 1. 渲染分类卡片
  list.innerHTML = ROCK_ITEMS.map(item => `
    <a class="rock-item" href="#" data-cat="${item.cat}">
      <div class="rock-head">
        <div class="rock-head-main">
          <div class="rock-icon">
            ${item.iconImg
              ? `<img class="rock-icon-img" src="${item.iconImg}" alt="${item.title}">`
              : (item.icon || "📁")}
          </div>
          <div class="rock-title">${item.title}</div>
        </div>
        <span class="rock-enter">↗</span>
      </div>
      <div class="rock-desc">${item.desc || ""}</div>
    </a>
  `).join("");

  // 2. 点击分类
  list.addEventListener("click", (e) => {
    const item = e.target.closest(".rock-item");
    if (!item) return;
  
    e.preventDefault();
  
    list.querySelectorAll(".rock-item").forEach(node => {
      node.classList.remove("active");
    });
    item.classList.add("active");
  
    const cat = item.dataset.cat;
    if (window.applyCategory) {
      window.applyCategory(cat);
    }
  
    item.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });

  // 3. 左右箭头滚动
  const step = () => Math.max(viewport.clientWidth * 0.8, 300);

  if (prev) {
    prev.addEventListener("click", () => {
      viewport.scrollBy({ left: -step(), behavior: "smooth" });
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      viewport.scrollBy({ left: step(), behavior: "smooth" });
    });
  }

  // 4. 鼠标滚轮：竖着滚 -> 横着滚
  viewport.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      viewport.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}


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


/* =========================================================
   14) 页面启动入口
   所有初始化都从这里开始，后面排查问题也最方便
   ========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  render(SITES);          // 先把全部网站卡片渲染出来
  initTopSearch();        // 顶部小搜索
  initRock();             // 横向分类栏
  initHeroSearch();       // Hero 搜索框
  initTopicBar();         // 顶部导航交互
  initHeroTitleRotate();  // Hero 标题轮播
});