// —— 分类按钮数据 ——
const ROCK_ITEMS = [
    { cat:'crack',        title:'破解教程',    desc:'白嫖党的快乐' },   
    { cat:'research',     title:'学习资料',    desc:'一些学术论文和软件使用教程' },
    { cat:'troubleshoot', title:'电脑问题',    desc:'使用软硬件的时候会遇到的一些问题解决方案' },
    { cat:'download',     title:'下载专区',    desc:'我经常用的软件下载' },
    { cat:'classics',     title:'国学典籍',    desc:'记录了一些网上的数字典籍资源' },
    { cat:'tools',        title:'实用工具',    desc:'这是一些走南闯北积累的小脚本' },
    { cat:'KG',           title:'知识图谱',    desc:'我的主要研究方向' },
    { cat:'techology',    title:'技术专区',    desc:'主要是网站构建' },




  ];
  
  (function initRock(){
    const viewport = document.getElementById('rock-viewport');
    const list     = document.getElementById('rock-list');
    const prev     = document.querySelector('.rock-prev');
    const next     = document.querySelector('.rock-next');
    if (!viewport || !list) return;
  
    // 1) 渲染卡片
    list.innerHTML = ROCK_ITEMS.map(it => `
      <a class="rock-item" href="#" data-cat="${it.cat}">
        <div class="rock-title">${it.title}</div>
        <div class="rock-desc">${it.desc || ""}</div>
      </a>
    `).join('');
  
    // 2) 点击分类 -> 调用特效.js 的 applyCategory
    list.addEventListener('click', (e) => {
      const card = e.target.closest('.rock-item');
      if (!card) return;
      e.preventDefault();                           // 不跳转
      const cat = card.dataset.cat;
      if (window.applyCategory) window.applyCategory(cat);
      // 可选：把当前卡片滚到中间
      card.scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' });
    });
  
    // 3) 左右箭头
    const step = () => Math.max(viewport.clientWidth * 0.8, 300);
    if (prev) prev.addEventListener('click', () => viewport.scrollBy({ left:-step(), behavior:'smooth' }));
    if (next) next.addEventListener('click', () => viewport.scrollBy({ left: step(), behavior:'smooth' }));
  
    // 4) 纵向滚轮 -> 横向滚动
    viewport.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        viewport.scrollLeft += e.deltaY;
      }
    }, { passive:false });
  })();
  