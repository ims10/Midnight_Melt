// Midnight Melt — responsive navigation, reveal motion, gallery and enquiry demo
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));}
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});revealItems.forEach(item=>observer.observe(item));}else revealItems.forEach(item=>item.classList.add('visible'));
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
const lightbox=document.querySelector('.lightbox');
if(lightbox){const img=lightbox.querySelector('img');const closeBtn=lightbox.querySelector('button');document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{const thumb=item.querySelector('img');img.src=item.dataset.full||thumb.src;img.alt=thumb.alt;lightbox.classList.add('open');document.body.style.overflow='hidden';}));const close=()=>{lightbox.classList.remove('open');document.body.style.overflow='';};closeBtn.addEventListener('click',close);lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});}
// Demo only: this form prepares an email-style confirmation locally; no data is sent or stored.
const form=document.querySelector('#enquiryForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const name=document.querySelector('#name').value.trim();const product=document.querySelector('#product').value;document.querySelector('#formMsg').textContent=`Thank you, ${name}! Your ${product} enquiry is ready. Connect this form to a messaging service to receive real orders.`;form.reset();});}
