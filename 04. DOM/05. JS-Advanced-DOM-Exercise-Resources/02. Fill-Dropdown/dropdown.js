function addItem() {
    let itemName = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.textContent = itemName;
    option.value = itemValue;

    let select = document.getElementById('menu');
    select.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}