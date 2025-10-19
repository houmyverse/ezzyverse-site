(function(){
  const navbar = document.getElementById('navbar');
  if(navbar){ window.addEventListener('scroll', ()=> navbar.classList.toggle('scrolled', window.scrollY > 60)); }
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if(hamburger && mobileMenu){
    hamburger.addEventListener('click', () => {
      const open = getComputedStyle(mobileMenu).display !== 'flex';
      mobileMenu.style.display = open ? 'flex' : 'none';
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflowY = open ? 'hidden' : '';
    });
    mobileMenu.addEventListener('click', (e)=>{ if(e.target.tagName==='A') { mobileMenu.style.display='none'; hamburger.setAttribute('aria-expanded','false'); document.body.style.overflowY=''; } });
  }
  const ourWorkBtn = document.getElementById('ourWorkBtn');
  const dropdown = ourWorkBtn ? ourWorkBtn.parentElement : null;
  if(ourWorkBtn && dropdown){
    ourWorkBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const menu = dropdown.querySelector('.menu');
      const open = getComputedStyle(menu).display === 'flex';
      menu.style.display = open ? 'none' : 'flex';
      ourWorkBtn.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('click', (e)=>{
      const menu = dropdown.querySelector('.menu');
      if(menu && !dropdown.contains(e.target)){ menu.style.display='none'; ourWorkBtn.setAttribute('aria-expanded','false'); }
    });
  }
})();