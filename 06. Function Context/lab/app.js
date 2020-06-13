function solve() {

    const btn = document.getElementById('dropdown');
    const box = document.getElementById('box');
    const ul = document.getElementById('dropdown-ul');

    function showHide(e) {
        if(ul.style.display === ''){
            ul.style.display = 'block'
        } else {
            ul.style.display = 'none'
        }
    }

    function changeColor(e) {
        const target = e.target;
        const backgroundColor = target.innerText;
        box.style.backgroundColor = backgroundColor;
        box.style.color = 'black'        
    }

    btn.addEventListener('click', showHide);
    ul.addEventListener('click', changeColor);
}