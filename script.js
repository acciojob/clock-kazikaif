//your JS code here. If required.
function updateTime() {
    const timer = document.getElementById('timer');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true
    };
    timer.textContent = now.toLocaleString('en-US', options);
}

setInterval(updateTime, 1000);
updateTime();
