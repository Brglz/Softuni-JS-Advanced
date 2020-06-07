function solve() {
    const screan = document.querySelector('#expressionOutput');
    const output = document.getElementById('resultOutput');
    const memory = {
        first: '',
        second: '',
        operand: ''
    }

    const operators = {
        '+': () => { },
        '-': () => { },
        '*': () => { },
        '/': () => { },
        '=': () => { },
    }
    document.querySelector('.clear').addEventListener('click', (e) => {
        memory.first = '';
        memory.second = '';
        memory.operand = '';
        screan.textContent = '';
        output.textContent = '';

    })
    document.querySelector('.keys').addEventListener('click', (e) => {
        const value = e.target.value;
        if (operators.hasOwnProperty(value)) {
            if (value === '=') {
                output.textContent = eval(`${memory.first}${memory.operand}${memory.second}`)
                memory.first = '';
                memory.second = '';
                memory.operand = '';
            } else {
                memory.operand = value;
            }
        } else {
            if (memory.operand === '') {
                memory.first += value;
            } else {
                memory.second += value;
            }
        }

        screan.textContent = `${memory.first} ${memory.operand} ${memory.second}`

    })

};