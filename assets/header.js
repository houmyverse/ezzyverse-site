(function(){
  const nav=document.getElementById('navbar');
  if(nav){window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>50));}
  const hamburger=document.getElementById('hamburger');
  const menu=document.getElementById('mobileMenu');
  if(hamburger && menu){
    hamburger.addEventListener('click',()=>{
      const open=menu.style.display==='flex';
      menu.style.display=open?'none':'flex';
    });
  }
})();