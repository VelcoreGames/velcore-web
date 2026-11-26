(() => {
  const root = document.documentElement;
  const store = { get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }, set(k,v){ try { localStorage.setItem(k,v); } catch(e){} } };
  const modeBtn = document.getElementById('mode-btn');
  const menuBtn = document.getElementById('menu-btn');
  const header = document.getElementById('site-header');
  const menu = document.getElementById('mobile-menu');
  function labels(){
    modeBtn.setAttribute('aria-label', root.dataset.mode === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
    menuBtn.setAttribute('aria-label', menu.hidden ? 'Abrir menú' : 'Cerrar menú');
  }
  function setMode(m){
    root.dataset.mode = m; store.set('velcore-mode', m);
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = m === 'light' ? '#ffffff' : '#050507';
    labels();
  }
  modeBtn.addEventListener('click', () => setMode(root.dataset.mode === 'light' ? 'dark' : 'light'));
  function toggleMenu(open){
    menu.hidden = !open;
    header.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    labels();
  }
  menuBtn.addEventListener('click', () => toggleMenu(menu.hidden));
  menu.addEventListener('click', e => { if (e.target.closest('a')) toggleMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) toggleMenu(false); });
  addEventListener('resize', () => { if (innerWidth > 1280 && !menu.hidden) toggleMenu(false); });
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive:true }); onScroll();
  const meta = document.querySelector('meta[name="theme-color"]'); if (meta && root.dataset.mode === 'light') meta.content = '#ffffff';
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  labels();
})();
