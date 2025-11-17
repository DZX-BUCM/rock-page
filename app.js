
// —— 数据：可继续往下加；logo 可选（不填会自动用站点 favicon；失败则使用首字母） ——
const SITES = [

// ----------------------------------------------------------------------------------------电脑问题 ---------------------------------------------------------------------------------------------------------------——

  {
    name: "office",
    url: "https://blog.csdn.net/huazn612/article/details/109289960",
    desc: "找不到注册类三联弹窗问题",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
  },
  {
    name: "node.js",
    url: "https://blog.csdn.net/qq_45824905/article/details/130442691",
    desc: "cnpm不是可执行的文件问题",
    logo: "https://nodejs.org/static/images/logo.svg"
  },
  {
    name: "需要来自Trust的权限",
    url: "https://blog.csdn.net/qngfeng/article/details/105932018",
    desc: "一些电脑常见问题",
  },
  {
    name: "word运行错误",
    url: "https://blog.csdn.net/qq_38789150/article/details/117655181",
    desc: "解决运行报错问题",
  },









// ----------------------------------------------------------------------------------------学习资料 ---------------------------------------------------------------------------------------------------------------——

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
  },











// ----------------------------------------------------------------------------------------下载专区---------------------------------------------------------------------------------------------------------------——
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
    logo: "favicon/google.png"
  },








// ----------------------------------------------------------------------------------------知识图谱 ---------------------------------------------------------------------------------------------------------------——

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








  


// ----------------------------------------------------------------------------------------实用工具 ---------------------------------------------------------------------------------------------------------------——

  {
    name: "Bigjpg",
    url: "https://bigjpg.com/zh",
    desc: "图片清晰化工具",
  },
  {
    name: "labelme",
    url: "https://blog.csdn.net/cenbug/article/details/124944291",
    desc: "图片标注工具",
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
    logo: "favicon/pubmed.svg"
  },
  {
    name: "免费图床",
    url: "https://sm.ms/",
    desc: "图床工具",
  },






// ----------------------------------------------------------------------------------------国学典籍 ---------------------------------------------------------------------------------------------------------------——

  {
    name: "红楼梦电子书",
    url: "https://hongloumeng.5000yan.com/",
    desc: "满纸荒唐言，一把辛酸泪",
    logo: "favicon/book.png"
  },
  {
    name: "红楼梦电子书",
    url: "https://www.guoxuemeng.com/guoxue/hongloumeng/",
    desc: "好风凭借力，送我上青云",
  },















// ----------------------------------------------------------------------------------------技术专区 ---------------------------------------------------------------------------------------------------------------——

  {
    name: "个人网站教程",
    url: "https://www.bilibili.com/video/BV1ts4y1f7Gu/?spm_id_from=333.337.search-card.all.click&vd_source=151ea1245ea510a36b1ff687d1ce2b87",
    desc: "个人网站技术栈",
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
    name: "压缩图片",
    url: "https://freecompress.com/zh-cn/compress-image",
    desc: "个人网站技术栈",
  },
  {
    name: "在线markdown编辑器",
    url: "https://markdown.com.cn/editor/",
    desc: "个人网站技术栈",
  },













// ----------------------------------------------------------------------------------------软件破解 ---------------------------------------------------------------------------------------------------------------——

  {
    name: "Xmind破解",
    url: "https://www.cnblogs.com/wushiyiwuzhong/p/17803638.html",
    desc: "软件破解",
  },












  


];

const $ = s => document.querySelector(s);
const grid = $("#grid");
const input = $("#q"); // 现在可能为 null

// 只有存在时才加监听
if (input) {
  input.addEventListener("input", e => render(filter(e.target.value)));
}

window.addEventListener("DOMContentLoaded", () => {
  render(SITES);
  if (input) input.placeholder = "搜索名称 / 描述 / 标签（JS OK）";
});



// 获取本地图标的函数
function getDefaultLogo(siteName) {
  const safeSiteName = siteName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const iconPathSvg = `/favicon/${safeSiteName}.svg`;  // 使用相对路径
  const iconPathPng = `/favicon/${safeSiteName}.png`;  // 使用相对路径
  
  return iconPathSvg; // 优先返回 svg
}

// 修改 makeLogoBox 函数，添加回退逻辑
function makeLogoBox(site) {
  const host = new URL(site.url).host;
  const box = document.createElement("div");
  box.className = "logo";
  const img = new Image();
  img.alt = site.name;

  // 如果没有指定logo，优先尝试本地图标
  if (!site.logo) {
    const localLogoSvg = getDefaultLogo(site.name);
    const localLogoPng = localLogoSvg.replace('.svg', '.png');
    
    img.src = localLogoSvg;
    
    img.onerror = () => {
      // 如果 SVG 加载失败，尝试加载 PNG 图标
      img.src = localLogoPng;
      img.onerror = () => {
        // 如果 PNG 也加载失败，使用 Google 的 favicon
        img.src = `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
        img.onerror = () => {
          // 如果所有加载失败，显示站点首字母
          box.innerHTML = `<span class="fallback">${site.name[0].toUpperCase()}</span>`;
        };
      };
    };
  } else {
    // 如果已经指定了logo，直接使用指定的logo
    img.src = site.logo;
    
    img.onerror = () => {
      // 指定 logo 加载失败后，回退到本地图标
      const localLogoSvg = getDefaultLogo(site.name);
      const localLogoPng = localLogoSvg.replace('.svg', '.png');
      
      img.src = localLogoSvg;
      img.onerror = () => {
        img.src = localLogoPng;
        img.onerror = () => {
          // 如果本地图标也加载失败，显示首字母
          box.innerHTML = `<span class="fallback">${site.name[0].toUpperCase()}</span>`;
        };
      };
    };
  }

  box.appendChild(img);
  return box;
}






function card(site, idx) {
  const el = document.createElement("a");
  el.className = "card";
  el.href = site.url;
  el.target = "_blank";
  el.rel = "noopener";

  const host = new URL(site.url).host;

  el.innerHTML = `
    <span class="badge">${idx}</span>
    <div class="content">
      <div class="name" title="${site.name}">${site.name}</div>
      <div class="desc" title="${site.desc || ""}">${site.desc || ""}</div>
    </div>
    <div class="host" title="${host}">${host}</div>
  `;

  // 把图标插到最前面
  el.insertBefore(makeLogoBox(site), el.firstChild);
  return el;
}

function render(list) {
  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML = `<div class="empty">没有匹配到结果</div>`;
    return;
  }
  list.forEach((s, i) => grid.appendChild(card(s, i + 1)));
}

function filter(q) {
  q = q.trim().toLowerCase();
  if (!q) return SITES;
  return SITES.filter(s =>
    s.name.toLowerCase().includes(q) ||
    (s.desc || "").toLowerCase().includes(q) ||
    (s.url || "").toLowerCase().includes(q) ||
    (s.tags || []).some(t => String(t).toLowerCase().includes(q))
  );
}


// —— 分类过滤：优先 cats，其次 tags，最后用关键词兜底 ——
window.applyCategory = function(cat){
  // 每个分类对应会命中的 tag/关键词（大小写不敏感）
  const MAP = {
    crack:       ['破解'],
    research:    ['学术','论文','安装','教程'],
    troubleshoot:['技术','问题'],
    download:    ['网盘','下载','云盘'],
    classics:    ['小说','喜马拉雅','典籍','红楼梦'],
    tools:       ['工具'],
    KG:          ['Neo4j'],
    techology:   ['技术'],
  };

  function hitCats(s){ return Array.isArray(s.cats) && s.cats.map(String).includes(cat); }
  function hitTags(s){
    const expect = (MAP[cat]||[]).map(x=>String(x).toLowerCase());
    const tags   = (s.tags||[]).map(x=>String(x).toLowerCase());
    return tags.some(t => expect.some(e => t.includes(e)));
  }
  function hitKW(s){
    const hay = (s.name + ' ' + (s.desc||'')).toLowerCase();
    return (MAP[cat]||[]).some(w => hay.includes(String(w).toLowerCase()));
  }

  const list = SITES.filter(s => hitCats(s) || hitTags(s) || hitKW(s));
  render(list.length ? list : SITES); // 没命中就显示全部，避免空白
};


  