//EXCERCISE 1

/*function solve(arr, method) {
    let arrr = arr;
    function sorting(method) {
        if(method==='asc'){
            arrr.sort((a,b) => a-b);
        } else {
            arrr.sort((a,b) => b-a)
        }

    }
    sorting(method)
    return arrr
}

console.log(solve([14, 7, 17, 6, 8], 'desc'))*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

function solve() {
    const counter = {}

    for (const arg of arguments) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        if(counter[type]===undefined){
            counter[type] = 0;
        } 
        counter[type]++;
    }

    Object.entries(counter).sort((a,b) => a-b).forEach(a => console.log(a.join(' = ')));    
}

solve('cat', 42, function () { console.log('Hello world!'); })