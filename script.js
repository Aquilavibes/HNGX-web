
        
let utc = document.getElementById('timing');
const today = new Date() 
setInterval(() {
        updateTime(utc);
    }, 1000);
utc.innerHTML = today.getTime();
        
