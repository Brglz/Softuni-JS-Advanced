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

/*function solve() {
    const counter = {}

    for (const arg of arguments) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        if(counter[type]===undefined){
            counter[type] = 0;
        } 
        counter[type]++;
    }

    Object.entries(counter).sort((a,b) => b[1]-a[1]).forEach(a => console.log(a.join(' = ')));    
}

solve({ name: 'bob'}, 3.333, 9.999)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

function personalBMI(name1, age1, weight1, height1) {
    const object = {
        name: name1,
        personalInfo: {
            age: age1,
            weight: weight1,
            height: height1,
        },
    };

    const bmi = Math.round(object.personalInfo.weight / Math.pow((object.personalInfo.height/100),2))
    object.BMI = bmi    
    if (object.BMI < 18.5) {
        object.status = 'underweight'
    } else if (object.BMI >= 18.5 && object.BMI < 25) {
        object.status = 'normal'
    } else if (object.BMI >= 25 && object.BMI < 30) {
        object.status = 'overweight'
    } else if (object.BMI > 30) {
        object.status = 'obese'
        object.recommendation = 'admission required'
    }

    return object
}


console.log(personalBMI('Honey Boo Boo', 23, 76, 175))

//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

/*(function solve() {
    function add(a,b) {
        const x1 = a[0];
        const y1 = a[1];
        const x2 = b[0];
        const y2 = b[1];

        const x = x1 + x2;
        const y  = y1 + y2;

        return [x,y];
    }

    function multiply(a,s) {
        const x1 = a[0];
        const y1 = a[1];

        return [(x1*s),(y1*s)];
    }

    function length(a) {
        const x1 = a[0];
        const y1 = a[1];
        const result = Math.sqrt((x1*x1)+(y1*y1));
        return result
    }

    function dot(a,b) {
        const x1 = a[0]; //2
        const y1 = a[1]; //3
        const x2 = b[0]; //2
        const y2 = b[1]; //-1

        return x1 * y1 + x2 * y2;
    }

    function cross(a,b) {
        const x1 = a[0];
        const y1 = a[1];
        const x2 = b[0];
        const y2 = b[1];

        return (x1*y2) - (x2*y1);
    }

    const solution = {
        add,
        multiply,
        length,
        dot,
        cross,
    }
    return solution
})()



console.log(solve.add([1, 1], [1, 0]))
console.log(solve.multiply([3.5, -2], 2))
console.log(solve.length([3, -4]))
console.log(solve.dot([1, 0], [0, -1]))
console.log(solve.cross([3, 7], [1, 0]))*/
//-------------------------------------------------------------------------------------------------------------------------
