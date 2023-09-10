document.addEventListener("DOMContentLoaded",
function(){
        
let utc = document.querySelector('[data-testid="currentDateAndTime"]');
const today = new Date() 
setInterval( function () {
        updateTime(utc);
    }, 1000);
utc.innerHTML = today.getTime();
        });
