/* 展新模型 ZHANXIN MODEL — shared interactions */
document.documentElement.classList.add('js');

// progress bar + nav shrink
(function(){
  var prog=document.getElementById('prog'),nav=document.getElementById('nav');
  addEventListener('scroll',function(){
    var h=document.documentElement,sc=h.scrollHeight-h.clientHeight;
    if(prog)prog.style.width=(sc>0?h.scrollTop/sc*100:0)+'%';
    if(nav)nav.classList.toggle('shrink',h.scrollTop>30);
  },{passive:true});
})();

// mobile menu
(function(){
  var burger=document.getElementById('burger'),sheet=document.getElementById('sheet');
  if(!burger||!sheet)return;
  function toggle(){burger.classList.toggle('on');sheet.classList.toggle('on');
    document.body.style.overflow=sheet.classList.contains('on')?'hidden':'';}
  burger.addEventListener('click',toggle);
  sheet.querySelectorAll('a').forEach(function(a){a.addEventListener('click',toggle);});
})();

// reveal on scroll (fallback: show all if IO unsupported)
(function(){
  var rvs=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},
      {threshold:.15,rootMargin:'0px 0px -8% 0px'});
    rvs.forEach(function(el){io.observe(el);});
  }else{rvs.forEach(function(el){el.classList.add('in');});}
})();

// count up
(function(){
  function fmt(n){return n>=1000?n.toLocaleString('en-US'):n;}
  function setFinal(el){el.innerHTML=fmt(+el.dataset.count)+'<span class="u">'+(el.dataset.suffix||'')+'</span>';}
  var counters=document.querySelectorAll('[data-count]');
  if(!counters.length)return;
  if('IntersectionObserver' in window){
    var cio=new IntersectionObserver(function(es){es.forEach(function(e){
      if(!e.isIntersecting)return;var el=e.target,end=+el.dataset.count,t0=null,dur=1400;
      function tick(t){if(!t0)t0=t;var p=Math.min((t-t0)/dur,1),ease=1-Math.pow(1-p,3);
        el.textContent=fmt(Math.round(end*ease));if(p<1)requestAnimationFrame(tick);else setFinal(el);}
      requestAnimationFrame(tick);cio.unobserve(el);});},{threshold:.6});
    counters.forEach(function(el){cio.observe(el);});
  }else{counters.forEach(setFinal);}
})();

// card glow follows pointer
document.querySelectorAll('.card-in').forEach(function(c){
  c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();
    c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
    c.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');});
});
