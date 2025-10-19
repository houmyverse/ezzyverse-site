(function(){
  // Header scroll background
  const navbar=document.getElementById('navbar');
  if(navbar){ window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>60)); }

  // Desktop dropdown
  const ourWorkBtn=document.getElementById('ourWorkBtn');
  const dropdown=ourWorkBtn?ourWorkBtn.parentElement:null;
  document.addEventListener('click',e=>{
    if(!dropdown) return;
    const menu=dropdown.querySelector('.menu');
    if(menu && !dropdown.contains(e.target)){ menu.style.display='none'; ourWorkBtn.setAttribute('aria-expanded','false'); }
  });
  ourWorkBtn && ourWorkBtn.addEventListener('click',e=>{
    e.stopPropagation();
    const menu=dropdown.querySelector('.menu');
    const open=getComputedStyle(menu).display==='flex';
    menu.style.display=open?'none':'flex';
    ourWorkBtn.setAttribute('aria-expanded',String(!open));
  });

  // Mobile hamburger + submenu
  const hamburger=document.getElementById('hamburger');
  const mobileMenu=document.getElementById('mobileMenu');
  const mwBtn=document.getElementById('mwBtn');
  const mwSub=document.getElementById('mwSub');

  function setMobileMenu(open){
    if(!mobileMenu || !hamburger) return;
    mobileMenu.hidden=!open;
    mobileMenu.style.display=open?'flex':'none';
    hamburger.setAttribute('aria-expanded',String(open));
    document.body.style.overflowY=open?'hidden':'';
  }
  hamburger && hamburger.addEventListener('click',()=> setMobileMenu(mobileMenu.hidden));
  mwBtn && mwBtn.addEventListener('click',()=>{
    const expanded=mwBtn.getAttribute('aria-expanded')==='true';
    mwBtn.setAttribute('aria-expanded',String(!expanded));
    mwSub.style.display=expanded?'none':'block';
  });
  mobileMenu && mobileMenu.addEventListener('click',e=>{ if(e.target.tagName==='A') setMobileMenu(false); });
})();