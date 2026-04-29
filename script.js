
// COUNTDOWN (Chișinău)
const targetDate = new Date("2026-11-17T12:00:00+02:00").getTime();

function updateCountdown(){
const now = new Date().getTime();
const diff = targetDate - now;

if(diff <= 0){
document.getElementById("countdown").innerHTML = "💍 A venit ziua nunții!";
return;
}

const d = Math.floor(diff/(1000*60*60*24));
const h = Math.floor((diff/(1000*60*60))%24);
const m = Math.floor((diff/(1000*60))%60);
const s = Math.floor((diff/1000)%60);

document.getElementById("countdown").innerHTML =
`${d} zile ${h} ore ${m} min ${s} sec`;
}

setInterval(updateCountdown,1000);
updateCountdown();

// SCROLL ANIMATION
const obs = new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting) e.target.classList.add("show");
});
});

document.querySelectorAll(".section").forEach(el=>obs.observe(el));
