
function openModal(){
document.getElementById('modal').style.display='flex';
}

function sendRsvp(){
const name=document.getElementById('name').value;
const guests=document.getElementById('guests').value||1;

if(!name){
document.getElementById('msg').innerText="Scrie numele";
return;
}

const email="mariuspublicite02@gmail.com";
const subject=encodeURIComponent("RSVP Nunta Marius & Sultana");
const body=encodeURIComponent(`Nume:${name}\nPersoane:${guests}`);

window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
document.getElementById('msg').innerText="Se deschide email...";
}

const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add('show');
});
});

document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

const wedding=new Date("2026-11-17").getTime();
setInterval(()=>{
const now=new Date().getTime();
const d=wedding-now;
document.getElementById('countdown').innerText=Math.floor(d/86400000)+" zile până la nuntă";
},1000);
