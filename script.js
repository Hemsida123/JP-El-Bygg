const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.mobile-nav');
function setMenu(open){toggle?.setAttribute('aria-expanded',String(open));if(nav)nav.hidden=!open;document.body.classList.toggle('nav-open',open);if(open)nav.querySelector('a')?.focus();else toggle?.focus()}
toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
nav?.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true')setMenu(false);if(e.key==='Tab'&&toggle?.getAttribute('aria-expanded')==='true'){const items=[toggle,...nav.querySelectorAll('a')];const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
const mql=matchMedia('(min-width:768px)');mql.addEventListener('change',e=>{if(e.matches&&toggle?.getAttribute('aria-expanded')==='true'){toggle.setAttribute('aria-expanded','false');nav.hidden=true;document.body.classList.remove('nav-open')}});
const box=document.querySelector('.lightbox');let lastImageLink=null;
document.querySelectorAll('[data-lightbox]').forEach(link=>link.addEventListener('click',e=>{if(!box?.showModal)return;e.preventDefault();lastImageLink=link;const img=box.querySelector('img');img.src=link.href;img.alt=link.dataset.caption||link.querySelector('img')?.alt||'';box.querySelector('p').textContent=img.alt;box.showModal()}));
box?.querySelector('button').addEventListener('click',()=>box.close());
box?.addEventListener('click',e=>{if(e.target===box){const r=box.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)box.close()}});
box?.addEventListener('close',()=>lastImageLink?.focus());
