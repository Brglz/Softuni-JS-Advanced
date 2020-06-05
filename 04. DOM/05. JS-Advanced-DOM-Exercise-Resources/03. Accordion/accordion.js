function toggle() {
    let extra = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];
    if(button.innerHTML === 'More'){
        button.innerHTML = 'Less'
    } else {
        button.innerHTML = 'More'
    }
    
    if(extra.style["display"] === "block") {
        extra.style["display"] = "none"
    } else {
        extra.style["display"] = "block"
    }
 }