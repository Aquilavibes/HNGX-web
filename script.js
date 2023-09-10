let utc = document.getElementById('timing');
const today = new Date() 
setInterval( {
        updateTime(today);
    }, 1000);
utc.innerHTML = today.getTime();
