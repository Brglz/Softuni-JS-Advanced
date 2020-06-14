//EXCERCISE 1

/*function addNumber(num1) {
    return function(num2){
        num1+num2
    };
}

let add5 = addNumber(5);
console.log(add5(2));
console.log(add5(3));

let add7 = addNumber(7);
console.log(add7(2));
console.log(add7(3));*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}


function solution(currencyFormatter) {
    return function(value) {
        return currencyFormatter(',','$',true,value);
    }
}

let dollarFormatter = solution(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

/*function solution(string, criteria) {
    let data = JSON.parse(string)
    let propName, propValue;
    const isNotAll = criteria !== 'all';
    if (isNotAll) {
        [propName, propValue] = criteria.split('-')
    }
    data.filter(function (i) {
        return isNotAll ? i[propName] === propValue : true
    }).forEach((x, i) => {
            console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`);
    })
}

let ds = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`



console.log(solution(ds, 'last_name-Johnson'));*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

/*function solution() {
    let str = '';
    function append(string) {
        str += string
    }
    function removeStart(n) {
        str = str.substr(n);
    }

    function removeEnd(n) {
        str = str.substring(0,str.length-n);
    }
    function print() {
        console.log(str);
    }
    return {
        append,
        removeStart,
        removeEnd,
        print
    }
};

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();*/
//-------------------------------------------------------------------------------------------------------------------------

// Curry function


/*function curry(fn) {
    return function helper(...args) {
        if(args.length===fn.length){
            return fn(...args)
        }
        return function(...newArgs) {
            return helper(...args.concat(newArgs))
        }
    }
}


function sum(a,b,c) {
    return a+b+c;
}

const cSum = curry(sum);

function sum(a) {
    return function (b) {
        return function (c) {
            return a+b+c
        };
    };
};*/
//-------------------------------------------------------------------------------------------------------------------------

// Compose Function

const addThree = cSum(1)(2);
const addFour = cSum(2)(2);

function compose(...fns) {
    return function (value) {
        return fns.reduceRight(function(acc,curFn) {
            return curFn(acc);
        },value)
    }
    
}

const operation = compose(addThree,addFour)
operation(10)

