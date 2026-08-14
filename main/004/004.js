/* =========================================================
   004：快速导航 / 卡片区逻辑

   重新整理为三个部分：
   第一部分：基础设置
   第二部分：我的关键词
   第三部分：我积累的链接

   仅调整代码结构和注释位置，不改变原有功能与内容
   ========================================================= */


/* =========================================================
   第一部分：基础设置
   包含工具函数、Logo 逻辑、卡片渲染、搜索、分类栏和启动入口
   ========================================================= */

/* ------------------------- 1.1 基础工具函数 ------------------------- */

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
// 例如：node.js -> favicon/nodejs.svg 和 favicon/nodejs.png
function getDefaultLogoPaths(siteName) {
  const safeName = String(siteName || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  return {
    svg: `favicon/${safeName}.svg`,
    png: `favicon/${safeName}.png`
  };
}

// 所有图标都失败后，显示首字母
function setLogoFallback(box, siteName) {
  box.innerHTML = `
    <span class="fallback">
      ${String(siteName || "?")[0].toUpperCase()}
    </span>
  `;
}


/* ------------------------- 1.2 Logo 逻辑 ------------------------- */

// 给每个网站卡片生成左侧图标
function makeLogoBox(site) {
  const box = document.createElement("div");
  const img = new Image();

  box.className = "logo";
  img.alt = site.name;

  img.onerror = () => {
    setLogoFallback(box, site.name);
  };

  img.src = getSiteIconPath(site);

  box.appendChild(img);

  return box;
}

/* ------------------------- 1.3 卡片渲染 ------------------------- */

// 创建单个网站卡片
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
      <div class="name" title="${site.name}">
        ${site.name}
      </div>

      <div class="desc" title="${site.desc || ""}">
        ${site.desc || ""}
      </div>
    </div>

    <div class="host" title="${host}">
      ${host}
    </div>
  `;

  // 把 logo 插到卡片最前面
  el.insertBefore(makeLogoBox(site), el.firstChild);

  return el;
}

// 渲染整组网站卡片
function render(list) {
  const grid = $("#grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty">
        没有匹配到结果
      </div>
    `;

    return;
  }

  list.forEach((site, index) => {
    grid.appendChild(card(site, index + 1));
  });
}


/* ------------------------- 1.4 搜索过滤 ------------------------- */

function filter(keyword) {
  const q = String(keyword || "")
    .trim()
    .toLowerCase();

  if (!q) {
    return SITES;
  }

  function isDirectMatch(site) {
    const name = String(site.name || "").toLowerCase();
    const desc = String(site.desc || "").toLowerCase();
    const url = String(site.url || "").toLowerCase();
    const tags = Array.isArray(site.tags) ? site.tags : [];

    return (
      name.includes(q) ||
      desc.includes(q) ||
      url.includes(q) ||
      tags.some((tag) =>
        String(tag).toLowerCase().includes(q)
      )
    );
  }

  const matchedNames = new Set(
    SITES
      .filter(isDirectMatch)
      .map((site) =>
        String(site.name || "").trim().toLowerCase()
      )
      .filter(Boolean)
  );

  return SITES.filter((site) => {
    const name = String(site.name || "")
      .trim()
      .toLowerCase();

    return (
      isDirectMatch(site) ||
      matchedNames.has(name)
    );
  });
}


/* ------------------------- 1.5 横向分类栏初始化 ------------------------- */

function initRock() {
  const list = document.getElementById("rock-list");

  if (!list) {
    return;
  }

  list.innerHTML = `
    <button
      class="rock-panel rock-panel-side rock-panel-knowledge"
      type="button"
      data-cat="knowledge"
    >
      <span
        class="rock-main-icon"
        aria-hidden="true"
      >
        📖
      </span>

      <strong class="rock-panel-label">
        Knowledge
      </strong>

      <small class="rock-panel-caption">
        知识与学习
      </small>
    </button>

    <button
      class="rock-panel rock-panel-download"
      type="button"
      data-cat="download"
    >
      <span
        class="rock-download-icon"
        aria-hidden="true"
      >
        ⇩
      </span>

      <strong>
        Download
      </strong>

      <small>
        下载各类资料
      </small>
    </button>

    <button
      class="rock-panel rock-panel-side rock-panel-technology"
      type="button"
      data-cat="technology"
    >
      <span
        class="rock-main-icon rock-code-icon"
        aria-hidden="true"
      >
        &lt;/&gt;
      </span>

      <strong class="rock-panel-label">
        Technology
      </strong>

      <small class="rock-panel-caption">
        技术与工具
      </small>
    </button>
  `;

  list.addEventListener("click", (e) => {
    const item = e.target.closest("[data-cat]");

    if (!item || !list.contains(item)) {
      return;
    }

    list.querySelectorAll("[data-cat]").forEach((node) => {
      node.classList.remove("active");
    });

    item.classList.add("active");

    if (window.applyCategory) {
      window.applyCategory(item.dataset.cat);
    }

    const grid = document.getElementById("grid");

    if (grid) {
      grid.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
}


/* ------------------------- 1.6 页面启动入口 ------------------------- */

// 所有初始化都从这里开始
window.addEventListener("DOMContentLoaded", () => {
  render(SITES);

  // 下面这些函数保持原来的调用方式
  initTopSearch();
  initRock();
  initHeroSearch();
  initTopicBar();
  initHeroTitleRotate();
});

/* =========================================================
   第二部分：我的关键词

   页面上目前有三个主要分类：
   1. 下载 Download
   2. 知识 Knowledge
   3. 技术 Technology

   点击分类按钮后，程序会根据下面对应的关键词筛选链接
   ========================================================= */


/* =========================================================
   2.1 下载类关键词
   点击 Download 时使用这些关键词
   ========================================================= */

const DOWNLOAD_KEYWORDS = [
  "网盘",
  "下载",
  "安装",
  "云盘"
];


/* =========================================================
   2.2 知识类关键词
   点击 Knowledge 时使用这些关键词
   ========================================================= */

const KNOWLEDGE_KEYWORDS = [
  "学术",
  "论文",
  "文献",
  "TED",
  "小说",
  "喜马拉雅",
  "典籍",
  "红楼梦",
  "黄帝内经",
  "佛法",
  "Neo4j"

];


/* =========================================================
   2.3 技术类关键词
   点击 Technology 时使用这些关键词
   ========================================================= */

const TECHNOLOGY_KEYWORDS = [
  "工具",
  "Aizex",
  "技术",
  "问题",
  "SMS",
  "教程",
  "ppt",
  "破解",
  "系统封装",
  "visio"
];


/* =========================================================
   2.4 页面三个主要分类与关键词的对应关系
   ========================================================= */

const CATEGORY_MAP = {
  // 下载
  download: DOWNLOAD_KEYWORDS,

  // 知识
  knowledge: KNOWLEDGE_KEYWORDS,

  // 技术
  technology: TECHNOLOGY_KEYWORDS
};




/* =========================================================
   2.6 分类筛选功能
   保持 window.applyCategory 原来的调用方式不变
   ========================================================= */

window.applyCategory = function (cat) {
  // 优先读取三个主要分类
  // 如果以后调用细分类，则读取 DETAIL_CATEGORY_MAP
  const categoryWords =
    CATEGORY_MAP[cat] ||
    DETAIL_CATEGORY_MAP[cat] ||
    [];

  const expectedWords = categoryWords.map((word) =>
    String(word).toLowerCase()
  );

  // 第一种匹配方式：
  // 检查链接数据中是否直接写了 cats 分类
  function hitCats(site) {
    if (!Array.isArray(site.cats)) {
      return false;
    }

    return site.cats
      .map((item) => String(item))
      .includes(cat);
  }

  // 第二种匹配方式：
  // 检查链接数据中的 tags
  function hitTags(site) {
    const tags = Array.isArray(site.tags)
      ? site.tags.map((tag) => String(tag).toLowerCase())
      : [];

    return tags.some((tag) =>
      expectedWords.some((word) => tag.includes(word))
    );
  }

  // 第三种匹配方式：
  // 在网站名称和描述中搜索关键词
  function hitKeyword(site) {
    const name = String(site.name || "");
    const desc = String(site.desc || "");
    const text = `${name} ${desc}`.toLowerCase();

    return expectedWords.some((word) =>
      text.includes(word)
    );
  }

  // 筛选符合当前分类的网站
  const result = SITES.filter((site) => {
    return (
      hitCats(site) ||
      hitTags(site) ||
      hitKeyword(site)
    );
  });

  // 如果没有匹配结果，则显示全部网站
  // 避免页面变成空白
  render(result.length ? result : SITES);
};


/* =========================================================
   第三部分：分类图标自动匹配

   图标文件：
   ../pict/download_01.png ～ download_10.png
   ../pict/knowledge_01.png ～ knowledge_10.png
   ../pict/technology_01.png ～ technology_10.png
   ========================================================= */

const ICON_FILE_COUNT = 10;

const ICON_CATEGORY_ORDER = [
  "download",
  "knowledge",
  "technology"
];

const ICON_NUMBER_BAGS = {
  download: [],
  knowledge: [],
  technology: []
};

const SITE_ICON_CACHE = new WeakMap();


/* ------------------------- 3.1 判断链接所属类别 ------------------------- */

function getSiteCategory(site) {
  const text = `${site.name || ""} ${site.desc || ""}`
    .toLowerCase();

  return (
    ICON_CATEGORY_ORDER.find((category) => {
      const keywords = CATEGORY_MAP[category] || [];

      return keywords.some((word) =>
        text.includes(String(word).toLowerCase())
      );
    }) ||
    "technology"
  );
}


/* ------------------------- 3.2 生成随机且均衡的图标编号 ------------------------- */

function createShuffledIconNumbers() {
  const numbers = Array.from(
    { length: ICON_FILE_COUNT },
    (_, index) => index + 1
  );

  for (let i = numbers.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [
      numbers[i],
      numbers[randomIndex]
    ] = [
      numbers[randomIndex],
      numbers[i]
    ];
  }

  return numbers;
}

function getNextIconNumber(category) {
  if (!ICON_NUMBER_BAGS[category].length) {
    ICON_NUMBER_BAGS[category] =
      createShuffledIconNumbers();
  }

  return ICON_NUMBER_BAGS[category].pop();
}


/* ------------------------- 3.3 生成网站图标路径 ------------------------- */

function getSiteIconPath(site) {
  if (SITE_ICON_CACHE.has(site)) {
    return SITE_ICON_CACHE.get(site);
  }

  const category = getSiteCategory(site);

  const number = String(
    getNextIconNumber(category)
  ).padStart(2, "0");

  const iconPath = new URL(
    `./pict/${category}_${number}.png`,
    window.location.href
  ).href;

  SITE_ICON_CACHE.set(site, iconPath);

  return iconPath;
}


/* =========================================================
   第四部分：我积累的链接
   这里只存放网站内容数据
   以后新增网站，直接往 SITES 数组中添加

   每条链接只保留：
   name：名称
   desc：描述
   url：链接
   ========================================================= */
const SITES = [
  /* ========================= 技术积累 ========================= */

  {
    name: "office",
    url: "https://blog.csdn.net/huazn612/article/details/109289960",
    desc: "找不到注册类三联弹窗问题",

  },

  {
    name: "node.js",
    url: "https://blog.csdn.net/qq_45824905/article/details/130442691",
    desc: "cnpm不是可执行的文件问题",

  },

  {
    name: "系统问题",
    url: "https://blog.csdn.net/qngfeng/article/details/105932018",
    desc: "需要来自Trust的权限",

  },

  {
    name: "office",
    url: "https://blog.csdn.net/qq_38789150/article/details/117655181",
    desc: "word运行报错问题",

  },

  {
    name: "office",
    url: "https://www.a8u.net/k/ru-he-yong-word-gei-lun-wen-jia-ye-ma.html",
    desc: "word中怎么在指定位置开始统计页码问题",

  },

  {
    name: "windows问题",
    url: "https://www.win10d.com/jiaocheng/31079.html",
    desc: "文件夹底色变黑的处理办法",

  },

  {
    name: "网站搭建",
    url: "https://www.bilibili.com/video/BV1ts4y1f7Gu/?spm_id_from=333.337.search-card.all.click&vd_source=151ea1245ea510a36b1ff687d1ce2b87",
    desc: "构建个人网站的总体教程",

  },

  {
    name: "HEXO部署",
    url: "https://www.codeprj.com/blog/6a45771.html",
    desc: "个人网站技术栈",

  },

  {
    name: "npm install报错",
    url: "https://blog.csdn.net/qq_63358859/article/details/134920380",
    desc: "个人网站技术栈",

  },

  {
    name: "解决npm警告",
    url: "https://blog.csdn.net/tombosky/article/details/135819263",
    desc: "个人网站技术栈",

  },

  {
    name: "在线markdown编辑器",
    url: "https://markdown.com.cn/editor/",
    desc: "个人网站技术栈",

  },

  {
    name: "ppt-canvas-size",
    url: "https://blog.csdn.net/weixin_41529093/article/details/120921401",
    desc: "ppt怎么调整画布大小",

  },

  {
    name: "sms-rental",
    url: "https://sms-verification-number.com/en/home/",
    desc: "📲 SMS电话租赁",

  },

  {
    name: "huggingface注册不了418问题",
    url: "https://blog.csdn.net/yqmyqqys1/article/details/149528456",
    desc: "huggingface",

  },


  /* ========================= 学习资料 ========================= */

  {
    name: "中国知网",
    url: "https://xztg.cnki.net/",
    desc: "论文投稿网站",

  },

  {
    name: "托福单词",
    url: "https://blog.csdn.net/qq_33957603/article/details/130328628?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-130328628-blog-72852143.235%5ev43%5epc_blog_bottom_relevance_base6&spm=1001.2101.3001.4242.1&utm_relevant_index=3",
    desc: "单词学习",

  },

  {
    name: "TED音频01",
    url: "https://www.ted.com/talks/tarveen_forrester_let_your_ambition_light_you_up_not_burn_you_out",
    desc: "listening",

  },

  {
    name: "TED音频03",
    url: "https://www.ted.com/talks/wendy_macnaughton_the_art_of_paying_attention",
    desc: "listening",

  },

  {
    name: "TED音频02",
    url: "https://www.ted.com/talks/vittorio_loreto_need_a_new_idea_start_at_the_edge_of_what_is_known",
    desc: "listening",

  },

  {
    name: "TED音频04",
    url: "https://www.youtube.com/watch?v=Zz9aXCfTdhw",
    desc: "listening",

  },


  /* ========================= 下载专区 ========================= */

  {
    name: "字体下载",
    url: "https://www.fonts.net.cn/fonts-zh/tag-naibuerzz-1.html",
    desc: "fonts",

  },

  {
    name: "Europe PMC",
    url: "https://europepmc.org/article/MED/34725513",
    desc: "下载英文文献",

  },

  {
    name: "SCI-HUB",
    url: "https://sci-hub.usualwant.com/",
    desc: "下载英文文献",

  },

  {
    name: "谷歌学术人工智能",
    url: "https://typicalgame.com/",
    desc: "下载英文文献",

  },

  {
    name: "通用机场下载及使用教程",
    url: "https://wangpan.yfjc.my/",
    desc: "可以使用任何你想要的机场",

  },

  {
    name: "魔塔社区",
    url: "https://www.modelscope.cn/home",
    desc: "很多大语言模型这里都能找到",

  },

  {
    name: "24bit无损下载",
    url: "https://www.24bit.net/",
    desc: "下载母带级别的音乐，但是要收费哦",

  },

  {
    name: "阿里矢量图标库",
    url: "https://www.iconfont.cn/?spm=a313x.search_index.i3.d4d0a486a.4ffa3a81vKs7qJ",
    desc: "下载所需的图标",

  },

  {
    name: "moji-diary",
    url: "https://www.moji01.com/",
    desc: "🖋️ 墨记日记",

  },

  {
    name: "ffmpeg-install",
    url: "https://blog.csdn.net/2602_94958286/article/details/159333768",
    desc: "FFmpeg下载安装教程",

  },

  {
    name: "fetchv",
    url: "https://microsoftedge.microsoft.com/addons/detail/fetchv-m3u8hls%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD%E5%99%A8/dbepbhhcmhodojepbagfppgpieeplpik",
    desc: "M3U8/HLS网页视频下载工具",

  },


  /* ========================= 知识图谱 ========================= */

  {
    name: "Neo4j",
    url: "https://www.w3cschool.cn/neo4j/",
    desc: "知识图谱语言看不懂",

  },

  {
    name: "Neo4j",
    url: "https://blog.csdn.net/fengye_ls2022/article/details/128871264",
    desc: "命令代码不会编写",

  },

  {
    name: "Neo4j",
    url: "https://blog.csdn.net/weixin_39025362/article/details/109100383",
    desc: "删除节点",

  },

  {
    name: "Neo4j",
    url: "https://blog.csdn.net/qq_34045989/article/details/115458261",
    desc: "软件数据库红色感叹号删不掉",

  },

  {
    name: "Neo4j",
    url: "https://blog.csdn.net/misakivv/article/details/144620416?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-144620416-blog-140546061.235%5ev43%5epc_blog_bottom_relevance_base3&spm=1001.2101.3001.4242.1&utm_relevant_index=3",
    desc: "软件打开了但是窗口没有弹出",

  },

  {
    name: "Neo4j",
    url: "https://blog.csdn.net/jclian91/article/details/118685492",
    desc: "增加节点及关系",

  },

  {
    name: "Neo4j",
    url: "https://blog.csdn.net/quiet_girl/article/details/71155442",
    desc: "批量导入节点和关系",

  },


  /* ========================= 实用工具 ========================= */

  {
    name: "labelme",
    url: "https://blog.csdn.net/cenbug/article/details/124944291",
    desc: "稳定的图片标注工具",

  },

  {
    name: "Google 翻译",
    url: "https://translate.google.com/?hl=zh-CN&tab=TT&sl=auto&tl=en&op=translate",
    desc: "在线翻译工具",

  },

  {
    name: "pubmed pro",
    url: "https://medcite.cn/search/nature%20biomedical%20engineering?content=2&iFactor=0,7&threshold=0.8",
    desc: "文献检索工具",

  },

  {
    name: "freecompress",
    url: "https://freecompress.com/zh-cn/compress-image",
    desc: "图片压缩工具",

  },

  {
    name: "哲风壁纸",
    url: "https://haowallpaper.com/",
    desc: "免费壁纸工具",

  },

  {
    name: "OpenAI KG",
    url: "https://upchatgpt.com/",
    desc: "国内充值GPT工具",

  },

  {
    name: "Aizex",
    url: "https://aizex.net/usersDocument",
    desc: "各种模型的合租面板",

  },

  {
    name: "Vidu AI",
    url: "https://www.vidu.cn/create/img2video",
    desc: "把图片转化成视频的工具",

  },

  {
    name: "video to frames",
    url: "https://videotoframes.com/zh",
    desc: "视频逐帧转化工具",

  },

  {
    name: "deepseek API",
    url: "https://platform.deepseek.com/usage",
    desc: "deepseek API充值工具",

  },


  /* ========================= 国学典籍 ========================= */

  {
    name: "红楼梦",
    url: "https://hongloumeng.5000yan.com/",
    desc: "红楼梦电子书",

  },

  {
    name: "红楼梦",
    url: "https://www.guoxuemeng.com/guoxue/hongloumeng/",
    desc: "红楼梦电子书",

  },

  {
    name: "黄帝内经",
    url: "https://www.cngwzj.com/tangshi300/3403.html",
    desc: "黄帝内经素问（注音版）",

  },

  {
    name: "黄帝内经",
    url: "https://www.cngwzj.com/tangshi300/3436.html",
    desc: "黄帝内经灵枢（注音版）",

  },

  {
    name: "ximalaya",
    url: "https://www.ximalaya.com/",
    desc: "🎧 喜马拉雅",

  },


  /* ========================= 软件破解 ========================= */

  {
    name: "visio",
    url: "https://zhuanlan.zhihu.com/p/1896564817998877030",
    desc: "安装visio及激活教程",

  },

  {
    name: "diskgenius",
    url: "https://www.70soft.com/soft/814880.html",
    desc: "💿 DiskGenius完美破解版",

  },

  {
    name: "aida64",
    url: "https://www.downkuai.com/soft/182841.html",
    desc: "🧸 AIDA64破解版",

  },

  {
    name: "Xmind破解",
    url: "https://www.cnblogs.com/wushiyiwuzhong/p/17803638.html",
    desc: "软件破解",

  },

  {
    name: "win_11系统封装技术",
    url: "https://www.itsk.com/thread/434586",
    desc: "系统革新",

  },

  {
    name: "vercel托管域名",
    url: "https://blog.csdn.net/qq_57376018/article/details/160097635",
    desc: "域名托管技术",

  },


  {
    name: "文殊菩萨法会",
    url: "https://www.youtube.com/watch?v=4UYIN7CtEfw",
    desc: "大乘佛法",

  },
];