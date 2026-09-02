const serviceGroups = {
  email: [
    {
      name: "163 邮箱",
      domain: "mail.163.com",
      url: "https://mail.163.com/",
      mark: "163",
      color: "linear-gradient(145deg, #f06c5c, #d74335)"
    },
    {
      name: "QQ 邮箱",
      domain: "mail.qq.com",
      url: "https://mail.qq.com/",
      mark: "QQ",
      color: "linear-gradient(145deg, #53b7f3, #2582cf)"
    },
    {
      name: "谷歌邮箱",
      domain: "mail.google.com",
      url: "https://mail.google.com/",
      mark: "G",
      color: "linear-gradient(145deg, #ea4335, #4285f4)"
    }
  ],

  cloud: [
    {
      name: "阿里云盘",
      domain: "alipan.com",
      url: "https://www.alipan.com/",
      mark: "ALI",
      color: "linear-gradient(145deg, #ffad49, #ff6f21)"
    },
    {
      name: "腾讯网盘",
      domain: "weiyun.com",
      url: "https://www.weiyun.com/",
      mark: "TX",
      color: "linear-gradient(145deg, #55c5ff, #287ee6)"
    },
    {
      name: "百度网盘",
      domain: "pan.baidu.com",
      url: "https://pan.baidu.com/",
      mark: "BD",
      color: "linear-gradient(145deg, #518fff, #3159df)"
    },
    {
      name: "夸克网盘",
      domain: "pan.quark.cn",
      url: "https://pan.quark.cn/",
      mark: "QK",
      color: "linear-gradient(145deg, #766cff, #4d4cd8)"
    },
    {
      name: "123 云盘",
      domain: "123pan.com",
      url: "https://www.123pan.com/",
      mark: "123",
      color: "linear-gradient(145deg, #56d89f, #1ca66f)"
    },
    {
      name: "小飞机网盘",
      domain: "feijipan.com",
      url: "https://www.feijipan.com/",
      mark: "✈",
      color: "linear-gradient(145deg, #5ccde7, #3489ce)"
    }
  ]
};

function createServiceCard(service) {
  const card = document.createElement("a");

  card.className = "service-card";
  card.href = service.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", `打开${service.name}`);

  card.innerHTML = `
    <span
      class="service-mark"
      style="background: ${service.color}"
      aria-hidden="true"
    >
      ${service.mark}
    </span>

    <span class="service-copy">
      <strong class="service-name">${service.name}</strong>
      <span class="service-domain">${service.domain}</span>
    </span>

    <span class="service-arrow" aria-hidden="true">→</span>
  `;

  return card;
}

function renderServiceGroup(containerId, services) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const fragment = document.createDocumentFragment();

  services.forEach((service) => {
    fragment.appendChild(createServiceCard(service));
  });

  container.replaceChildren(fragment);
}

renderServiceGroup("email-list", serviceGroups.email);
renderServiceGroup("cloud-list", serviceGroups.cloud);
