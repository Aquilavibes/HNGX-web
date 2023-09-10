
        

const today = new Date()
let utc = document.getElementById('timing');
setInterval(function () {
        utc = utc++ }, 1000);

utc.innerHTML = today.getTime();
        
