const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:0.15});
reveals.forEach(r=>io.observe(r));

let lastScroll = window.scrollY;
const header = document.querySelector('header');
window.addEventListener('scroll', ()=>{
  const cur = window.scrollY;
  if(cur > 80 && cur > lastScroll){
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  header.style.transition = 'transform .35s ease';
  lastScroll = cur;
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
    }
  });
});