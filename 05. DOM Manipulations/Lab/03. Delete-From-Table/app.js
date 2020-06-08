function deleteByEmail() {
const result = document.getElementById('result');
const input = document.querySelector('body input');
const emailTds = Array.from(document.querySelectorAll('#customers td:last-child'))
    .map(td => td.innerHTML);    

const index = emailTds.indexOf(input.value);
if(index !== -1){
    document.querySelector('tbody').deleteRow(index);
    result.textContent = 'Deleted.'
} else {
    result.textContent = 'Not found.'

}

input.value = '';   

}


//document.getElementById("myTable").deleteRow(0);


// var row = btn.parentNode.parentNode;
// row.parentNode.removeChild(row);