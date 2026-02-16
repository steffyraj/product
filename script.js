// Theme toggle
const themeToggle=document.getElementById('themeToggle');
const root=document.documentElement;
function setTheme(t){root.setAttribute('data-theme',t);try{localStorage.setItem('sr-theme',t)}catch(e){}}
function getTheme(){try{return localStorage.getItem('sr-theme')}catch(e){return null}}
const saved=getTheme();
if(saved){setTheme(saved)}
else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme:light)').matches){setTheme('light')}
else{setTheme('dark')}
themeToggle.addEventListener('click',()=>{const current=root.getAttribute('data-theme');setTheme(current==='light'?'dark':'light')});

// Nav scroll
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>60)},{passive:true});

// Reveal on scroll
const ro=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const h=a.getAttribute('href');if(!h||h==='#'){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});return;}try{const t=document.querySelector(h);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}}catch(err){}})});

// Mobile nav
function toggleMobile(){
  const l=document.getElementById('navLinks');
  const o=l.classList.contains('mob');
  if(!o){
    Object.assign(l.style,{display:'flex',position:'fixed',top:'64px',left:'0',right:'0',bottom:'0',background:'var(--mobile-bg)',backdropFilter:'blur(20px)',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2rem',zIndex:'199'});
    l.classList.add('mob');
  }else{l.removeAttribute('style');l.classList.remove('mob')}
}

// Hero parallax
document.addEventListener('mousemove',e=>{const orbs=document.querySelectorAll('.hero-orb');if(!orbs.length)return;const x=(e.clientX/window.innerWidth-0.5)*20;const y=(e.clientY/window.innerHeight-0.5)*20;orbs.forEach((o,i)=>{const f=i===0?1:-0.6;o.style.transform=`translate(${x*f}px,${y*f}px)`})});
