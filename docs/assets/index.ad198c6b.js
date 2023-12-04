(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&i(e)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();const l=()=>{let c=!1;s(),document.querySelectorAll(".js-card").forEach(e=>{e.addEventListener("click",function(r){r.target instanceof HTMLElement&&!c&&(d(r.target),i())})});function d(e){e.classList.contains("clear")||e.classList.add("is-open")}function i(){const e=document.querySelectorAll(".card.is-open");e.length===2&&(c=!0,setTimeout(()=>{const r=e[0].dataset.num,n=e[1].dataset.num;r===n?e.forEach(o=>{o.classList.remove("is-open"),o.classList.add("clear")}):e.forEach(o=>{o.classList.remove("is-open")})},1e3),c=!1)}function t(e){const r=[...e];for(let n=r.length-1;n>0;n--){const o=Math.floor(Math.random()*(n+1));[r[n],r[o]]=[r[o],r[n]]}return r}function s(){let e=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];e=t(e);const r=document.querySelector(".js-box");e.forEach(n=>{const o=`
      <div class="card js-card" data-num="`+n+`">
        <div class="card_back">
          <img src="./assets/img/card_back.png" alt=""/>
        </div>
        <div class="card_front">
          <img src="./assets/img/card_spade_`+n+`.png" alt=""/>
        </div>
      </div>
      `;r==null||r.insertAdjacentHTML("beforeend",o)})}};window.addEventListener("DOMContentLoaded",()=>{l()});
