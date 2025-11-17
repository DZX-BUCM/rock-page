// 轻量交互：切换激活项 & 移动端展开
(function(){
    const bar = document.getElementById('topic-bar');
    const menuBtn = document.getElementById('topic-menu-btn');
    const nav = document.getElementById('topic-nav');
  
    if (menuBtn && bar) {
      menuBtn.addEventListener('click', () => bar.classList.toggle('open'));
    }
  
    if (nav) {
      nav.addEventListener('click', (e) => {
        const a = e.target.closest('.nav-item');
        if (!a) return;
        nav.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        a.classList.add('active');
        // 这里可以按需要触发你的对应内容切换
      });
    }
  })();
  