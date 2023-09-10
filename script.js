
        
let utc = document.getElementById('timing');
const today = new Date() 


setInterval(function () {
    utc = ++utc% 360 + 1; // SET { 1-360 }
}, 1000);
utc.innerHTML = today.getTime();
        
