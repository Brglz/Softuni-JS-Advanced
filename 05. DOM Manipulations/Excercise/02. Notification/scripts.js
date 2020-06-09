function notify(message) {

    const notify = document.getElementById('notification');
    notify.textContent = message;
    notify.style.display = 'block';
    setTimeout(function(){
        notify.style.display = 'none';
    },2000)
}