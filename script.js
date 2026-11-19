function qs(s){return document.querySelector(s)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
document.addEventListener('DOMContentLoaded',()=>{
 const year=qs('[data-year]'); if(year) year.textContent=new Date().getFullYear();
 const toggle=qs('.nav-toggle'), menu=qs('.menu');
 if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')))}
 const path=location.pathname.split('/').pop()||'index.html'; document.querySelectorAll('.menu a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
 // Application form submits natively to Netlify Forms; do not intercept it here.
 const verify=qs('#verifyForm'); if(verify){verify.addEventListener('submit',e=>{e.preventDefault();const number=qs('#certNumber').value.trim();const out=qs('#verifyResult');out.innerHTML=number?'<strong>Verification request recorded.</strong><br>This prototype cannot access an official certificate register. Contact the authorised records office to confirm certificate number <strong>'+escapeHtml(number)+'</strong>.':'Enter a certificate number.';out.classList.add('show');});}
 const back=qs('.backtop'); if(back){window.addEventListener('scroll',()=>back.classList.toggle('show',window.scrollY>500));back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
});
