
let today = new Date()        
let utc = document.getElementById('timing');
setInterval(function () {
        utc = utc++ }, 1000);

today.innerHTML = getTime();    
