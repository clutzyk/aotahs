const $ = (s,ctx=document)=>ctx.querySelector(s);
const $$ = (s,ctx=document)=>Array.from(ctx.querySelectorAll(s));

const toggle = $('.nav-toggle');
const menu = $('#nav-menu');
if(toggle){
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scroll for anchor links
$$('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length > 1){
      const el = $(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});