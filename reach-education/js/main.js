// main.js - خفيف للتفاعل البسيط
document.addEventListener('DOMContentLoaded', function(){

  // اختيار مبالغ سريعة
  document.querySelectorAll('.amount-btn').forEach(btn=>{
    btn.addEventListener('click', function(){
      document.querySelectorAll('.amount-btn').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Navbar shrink on scroll
  const nav = document.querySelector('.navbar');
  const shrinkOn = 30;
  window.addEventListener('scroll', () => {
    if(window.scrollY > shrinkOn) nav.classList.add('navbar-shrink');
    else nav.classList.remove('navbar-shrink');
  });
});
