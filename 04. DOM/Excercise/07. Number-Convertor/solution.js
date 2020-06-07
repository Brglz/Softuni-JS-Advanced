function solve() {

    const input = document.getElementById('input');
    const output = document.getElementById('result');

    const transformTo = document.getElementById('selectMenuTo');
    let optionDec = document.createElement("option");
    let optionHex = document.createElement("option");
    optionDec.value = 'binary'
    optionDec.innerText = 'Binary';
    transformTo.appendChild(optionDec);
    optionHex.value = 'hexadecimal';
    optionHex.innerText = 'Hexadecimal';
    transformTo.appendChild(optionHex);


    
    document.querySelector('button').addEventListener('click', () => {
        let numTransformed;
        if(transformTo.value === 'binary'){
            numTransformed = (input.value >>> 0).toString(2)
            output.value = numTransformed;
        }
        if(transformTo.value === 'hexadecimal'){
            numTransformed = Number(input.value).toString(16);
            output.value = numTransformed;
        }
    })
    document.getElementById('input').value = ''

}