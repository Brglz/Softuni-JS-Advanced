function addItem() {

    const inputText = document.getElementById('newItemText');
    const list = document.getElementById('items');

    const newLi = document.createElement('li');
    newLi.innerHTML = inputText.value;
    list.appendChild(newLi);
    inputText.value = ''

}