
        
let utc = document.getElementById('timing');
const today = new Date() 


setInterval(function () {
    utc = ++utc
}, 1000);
utc.innerHTML = today.getTime();
        
