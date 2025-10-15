// Basic JS: theme toggle, mobile nav, simple slider for projects
document.addEventListener('DOMContentLoaded', ()=>{
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  // initialize from localStorage
  const stored = localStorage.getItem('pramod_theme');
  if(stored) html.setAttribute('data-theme', stored);

  themeToggle?.addEventListener('click', ()=>{
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? '' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('pramod_theme', next);
  });

  // mobile menu
  const navbtn = document.getElementById('navBtn');
  const navlinks = document.getElementById('navLinks');
  navbtn?.addEventListener('click', ()=>{
    navlinks.classList.toggle('open');
  });

  // simple slider autoplay for portfolio (if present)
  const slider = document.querySelector('.portfolio-slider');
  if(slider){
    let idx=0;
    const slides = slider.querySelectorAll('.slide');
    function show(i){
      slides.forEach(s=>s.style.display='none');
      slides[i].style.display='block';
    }
    show(0);
    setInterval(()=>{
      idx = (idx+1) % slides.length;
      show(idx);
    },3000);
  }
});