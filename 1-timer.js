import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector("[data-start]"),i=document.querySelector("#datetime-picker"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),T=document.querySelector("[data-seconds]");o.disabled=!0;let a,c;h("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=new Date;a=e[0],a<=n?(y.error({message:"Please choose a date in the future",position:"topRight"}),o.disabled=!0):o.disabled=!1}});o.addEventListener("click",()=>{const e=a.getTime();o.disabled=!0,i.disabled=!0,c=setInterval(()=>{const n=Date.now(),s=e-n;if(s<=0){clearInterval(c),d(0,0,0,0),o.disabled=!1,i.disabled=!1;return}const t=q(s);d(t.days,t.hours,t.minutes,t.seconds)},1e3)});function q(e){const u=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:m,seconds:f}}function d(e,n,s,t){p.textContent=r(e),S.textContent=r(n),b.textContent=r(s),T.textContent=r(t)}function r(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
