const services = [
  // 邮箱
  {
    name: "Gmail",
    type: "mail",
    url: "https://mail.google.com/",
    desc: "Google 旗下全球主流邮箱服务，简洁高效，生态完整。",
    tags: ["Google", "全球", "邮箱"],
    region: "Global",
    badge: "GM",
    color: "linear-gradient(135deg, #ea4335, #4285f4)"
  },
  {
    name: "Outlook",
    type: "mail",
    url: "https://outlook.live.com/",
    desc: "微软邮箱服务，适合办公协作与企业日常使用。",
    tags: ["Microsoft", "办公", "邮箱"],
    region: "Global",
    badge: "OL",
    color: "linear-gradient(135deg, #0a66ff, #00b7ff)"
  },
  {
    name: "Yahoo Mail",
    type: "mail",
    url: "https://mail.yahoo.com/",
    desc: "老牌国际邮箱服务，覆盖范围广，辨识度高。",
    tags: ["Yahoo", "国际", "邮箱"],
    region: "Global",
    badge: "YH",
    color: "linear-gradient(135deg, #6e00ff, #a54cff)"
  },
  {
    name: "iCloud Mail",
    type: "mail",
    url: "https://www.icloud.com/mail",
    desc: "Apple 生态邮箱，适合多设备同步与苹果用户使用。",
    tags: ["Apple", "iCloud", "邮箱"],
    region: "Global",
    badge: "IC",
    color: "linear-gradient(135deg, #4aa8ff, #7de3ff)"
  },
  {
    name: "Proton Mail",
    type: "mail",
    url: "https://mail.proton.me/",
    desc: "主打隐私与加密体验的高安全邮箱服务。",
    tags: ["隐私", "安全", "加密"],
    region: "Global",
    badge: "PM",
    color: "linear-gradient(135deg, #6d4aff, #8d7dff)"
  },
  {
    name: "Zoho Mail",
    type: "mail",
    url: "https://mail.zoho.com/",
    desc: "适合企业与团队场景的商务邮箱服务。",
    tags: ["企业", "商务", "团队"],
    region: "Global",
    badge: "ZH",
    color: "linear-gradient(135deg, #ff5f45, #ffb347)"
  },
  {
    name: "QQ 邮箱",
    type: "mail",
    url: "https://mail.qq.com/",
    desc: "国内高频使用邮箱之一，和腾讯生态衔接紧密。",
    tags: ["腾讯", "中国", "邮箱"],
    region: "China",
    badge: "QQ",
    color: "linear-gradient(135deg, #0f8cff, #5cc6ff)"
  },
  {
    name: "163 邮箱",
    type: "mail",
    url: "https://mail.163.com/",
    desc: "网易旗下经典邮箱，国内用户基础广。",
    tags: ["网易", "中国", "邮箱"],
    region: "China",
    badge: "16",
    color: "linear-gradient(135deg, #ff4d4f, #ff8a65)"
  },
  {
    name: "126 邮箱",
    type: "mail",
    url: "https://mail.126.com/",
    desc: "网易系常用邮箱服务，适合个人日常使用。",
    tags: ["网易", "中国", "个人"],
    region: "China",
    badge: "12",
    color: "linear-gradient(135deg, #ff6a00, #ff9f43)"
  },
  {
    name: "GMX Mail",
    type: "mail",
    url: "https://www.gmx.com/",
    desc: "欧洲常见邮箱服务之一，界面清晰，覆盖多地区。",
    tags: ["欧洲", "国际", "邮箱"],
    region: "Europe",
    badge: "GX",
    color: "linear-gradient(135deg, #21409a, #4c73ff)"
  },
  {
    name: "Mail.com",
    type: "mail",
    url: "https://www.mail.com/",
    desc: "提供多种域名选择的国际邮箱服务。",
    tags: ["国际", "域名", "邮箱"],
    region: "Global",
    badge: "MC",
    color: "linear-gradient(135deg, #00a86b, #52d681)"
  },

  // 网盘
  {
    name: "Google Drive",
    type: "cloud",
    url: "https://drive.google.com/",
    desc: "Google 云盘服务，适合文件同步、分享与在线协作。",
    tags: ["Google", "协作", "云盘"],
    region: "Global",
    badge: "GD",
    color: "linear-gradient(135deg, #0f9d58, #34a853)"
  },
  {
    name: "OneDrive",
    type: "cloud",
    url: "https://onedrive.live.com/",
    desc: "微软云盘，与 Office 办公生态联动紧密。",
    tags: ["Microsoft", "Office", "云盘"],
    region: "Global",
    badge: "OD",
    color: "linear-gradient(135deg, #0078d4, #33b1ff)"
  },
  {
    name: "Dropbox",
    type: "cloud",
    url: "https://www.dropbox.com/",
    desc: "老牌国际云盘，文件分享与同步体验成熟稳定。",
    tags: ["共享", "同步", "云盘"],
    region: "Global",
    badge: "DB",
    color: "linear-gradient(135deg, #0061ff, #4aa3ff)"
  },
  {
    name: "iCloud Drive",
    type: "cloud",
    url: "https://www.icloud.com/iclouddrive",
    desc: "Apple 云端文件服务，适合苹果生态用户统一管理文件。",
    tags: ["Apple", "文件", "云盘"],
    region: "Global",
    badge: "ID",
    color: "linear-gradient(135deg, #4aa8ff, #8ae8ff)"
  },
  {
    name: "Box",
    type: "cloud",
    url: "https://www.box.com/",
    desc: "偏企业协同和内容管理的国际云存储平台。",
    tags: ["企业", "协同", "内容管理"],
    region: "Global",
    badge: "BX",
    color: "linear-gradient(135deg, #0061d5, #4b8dff)"
  },
  {
    name: "MEGA",
    type: "cloud",
    url: "https://mega.io/",
    desc: "以隐私、安全和大文件传输著称的云盘平台。",
    tags: ["隐私", "加密", "大文件"],
    region: "Global",
    badge: "MG",
    color: "linear-gradient(135deg, #ff1f43, #ff6a6a)"
  },
  {
    name: "pCloud",
    type: "cloud",
    url: "https://www.pcloud.com/",
    desc: "界面干净、偏个人和专业用户使用的国际云盘。",
    tags: ["专业", "个人", "同步"],
    region: "Global",
    badge: "PC",
    color: "linear-gradient(135deg, #00b37a, #55e6a5)"
  },
  {
    name: "Sync",
    type: "cloud",
    url: "https://www.sync.com/",
    desc: "注重隐私与加密分享体验的文件云存储服务。",
    tags: ["隐私", "分享", "安全"],
    region: "Global",
    badge: "SY",
    color: "linear-gradient(135deg, #5a67ff, #8b95ff)"
  },
  {
    name: "百度网盘",
    type: "cloud",
    url: "https://pan.baidu.com/",
    desc: "国内主流网盘平台之一，覆盖文件存储、分享、在线播放等场景。",
    tags: ["百度", "中国", "网盘"],
    region: "China",
    badge: "BD",
    color: "linear-gradient(135deg, #1f6bff, #4fb3ff)"
  },
  {
    name: "阿里云盘",
    type: "cloud",
    url: "https://www.alipan.com/",
    desc: "阿里旗下云盘服务，整体体验简洁，速度与分享能力不错。",
    tags: ["阿里", "中国", "网盘"],
    region: "China",
    badge: "AL",
    color: "linear-gradient(135deg, #ff7a00, #ffb347)"
  },
  {
    name: "夸克网盘",
    type: "cloud",
    url: "https://pan.quark.cn/",
    desc: "夸克生态下的网盘服务，界面现代，适合轻量文件管理。",
    tags: ["夸克", "中国", "云存储"],
    region: "China",
    badge: "QK",
    color: "linear-gradient(135deg, #5c7cff, #78d4ff)"
  },
  {
    name: "115 网盘",
    type: "cloud",
    url: "https://115.com/",
    desc: "国内较早期网盘产品之一，适合资源归档和长期存储。",
    tags: ["115", "中国", "存储"],
    region: "China",
    badge: "11",
    color: "linear-gradient(135deg, #00a7ff, #53d2ff)"
  }
];

const mailGrid = document.getElementById("mailGrid");
const cloudGrid = document.getElementById("cloudGrid");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");

const totalCount = document.getElementById("totalCount");
const mailCount = document.getElementById("mailCount");
const cloudCount = document.getElementById("cloudCount");
const mailVisible = document.getElementById("mailVisible");
const cloudVisible = document.getElementById("cloudVisible");
const currentKeyword = document.getElementById("currentKeyword");
const panelMailVisible = document.getElementById("panelMailVisible");
const panelCloudVisible = document.getElementById("panelCloudVisible");
const quickChips = document.querySelectorAll(".quick-chip");
const focusSearchBtn = document.querySelector('[data-action="focus-search"]');


function getTypeText(type) {
  return type === "mail" ? "邮箱" : "网盘";
}

function updateQuickChipState(keyword) {
  quickChips.forEach(chip => {
    const chipValue = (chip.dataset.filter || "").toLowerCase();
    chip.classList.toggle("active", chipValue === keyword);
  });
}

function applyQuickFilter(keyword) {
  searchInput.value = keyword;
  renderAll();
  searchInput.focus();
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "service-card";

  const tagsHtml = item.tags
    .map(tag => `<span class="meta-tag">${tag}</span>`)
    .join("");

  card.innerHTML = `
    <span class="service-glow"></span>

    <div class="service-top">
      <div class="logo-badge" style="background:${item.color}">
        ${item.badge}
      </div>
      <span class="type-pill">${getTypeText(item.type)}</span>
    </div>

    <h4 class="service-name">${item.name}</h4>
    <p class="service-desc">${item.desc}</p>

    <div class="service-meta">
      ${tagsHtml}
    </div>

    <div class="service-bottom">
      <span class="service-region">${item.region}</span>
      <a class="service-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
        立即打开
      </a>
    </div>
  `;

  return card;
}

function createEmptyState(text) {
  const box = document.createElement("div");
  box.className = "empty-state";
  box.innerHTML = `
    <h4>没有找到匹配内容</h4>
    <p>${text}</p>
  `;
  return box;
}

function renderSection(grid, list, emptyText) {
  grid.innerHTML = "";

  if (!list.length) {
    grid.appendChild(createEmptyState(emptyText));
    return;
  }

  list.forEach(item => {
    grid.appendChild(createCard(item));
  });
}

function renderAll() {
  const rawKeyword = searchInput.value.trim();
  const keyword = rawKeyword.toLowerCase();

  const filtered = services.filter(item => {
    const fullText = [
      item.name,
      item.desc,
      item.region,
      ...item.tags
    ].join(" ").toLowerCase();

    return !keyword || fullText.includes(keyword);
  });

  const mailList = filtered.filter(item => item.type === "mail");
  const cloudList = filtered.filter(item => item.type === "cloud");

  renderSection(
    mailGrid,
    mailList,
    "你可以换个关键词试试，比如 Outlook、QQ、中国、隐私。"
  );

  renderSection(
    cloudGrid,
    cloudList,
    "你可以换个关键词试试，比如 Drive、百度、云盘、同步。"
  );

  mailVisible.textContent = mailList.length;
  cloudVisible.textContent = cloudList.length;
  if (currentKeyword) currentKeyword.textContent = rawKeyword || "全部";
  if (panelMailVisible) panelMailVisible.textContent = mailList.length;
  if (panelCloudVisible) panelCloudVisible.textContent = cloudList.length;

  updateQuickChipState(keyword);



}

function initCounts() {
  const mailTotal = services.filter(item => item.type === "mail").length;
  const cloudTotal = services.filter(item => item.type === "cloud").length;

  totalCount.textContent = services.length;
  mailCount.textContent = mailTotal;
  cloudCount.textContent = cloudTotal;
}

quickChips.forEach(chip => {
  chip.addEventListener("click", () => {
    applyQuickFilter(chip.dataset.filter || "");
  });
});

if (focusSearchBtn) {
  focusSearchBtn.addEventListener("click", () => {
    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
    searchInput.focus();
  });
}

searchInput.addEventListener("input", renderAll);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

initCounts();
renderAll();