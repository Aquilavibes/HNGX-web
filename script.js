
        
let utc = document.querySelector('[data-testid="currentDateAndTime"]');
const today = new Date() 
setInterval(() {
        updateTime(utc);
    }, 1000);
utc.innerHTML = today.getTime();
        
