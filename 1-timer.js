import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".btn-start"),i=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");o.disabled=!0;let a,c;f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=new Date;a=e[0],a<=n?(h.error({message:"Please choose a date in the future",position:"topRight"}),o.disabled=!0):o.disabled=!1}});o.addEventListener("click",()=>{const e=a.getTime();o.disabled=!0,i.disabled=!0,c=setInterval(()=>{const n=Date.now(),s=e-n;if(s<=0){clearInterval(c),o.disabled=!1,i.disabled=!1;return}const t=T(s);q(t.days,t.hours,t.minutes,t.seconds)},1e3)});function T(e){const d=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:l,seconds:m}}function q(e,n,s,t){y.textContent=r(e),p.textContent=r(n),b.textContent=r(s),S.textContent=r(t)}function r(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
