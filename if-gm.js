function toggleFullscreen(){const e=document.getElementById("gameContainer"),t=document.getElementById("gameFrame");document.fullscreenElement?document.exitFullscreen():(e.requestFullscreen(),t.style.width="100vw",t.style.height="100vh")}document.addEventListener("fullscreenchange",(function(){const e=document.getElementById("gameFrame");document.fullscreenElement||(e.style.width="100%",e.style.height="450px")}));
