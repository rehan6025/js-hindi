const clockResult = document.getElementById('clock')



setInterval(() => {
    
    let date = new Date()
    clockResult.innerHTML = `${date.toLocaleTimeString()}`

}, 1000);