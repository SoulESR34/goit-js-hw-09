const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(()=>{const e=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3);o.addEventListener("click",(()=>clearInterval(e)))}));
//# sourceMappingURL=01-color-switcher.ac69ca0c.js.map
