function addItem() {
    const inputText = document.getElementById('newText');
    const list = document.getElementById('items');

    const newLi = document.createElement('li');
    const a = document.createElement('a')
    a.innerHTML = '[Delete]';
    a.href = '#'
    newLi.innerHTML = inputText.value;
    newLi.appendChild(a);
    list.appendChild(newLi);
    inputText.value = ''

    a.addEventListener('click', (e) => {
        newLi.parentNode.removeChild(newLi)
    })

}

