//EXCERCISE 1

/*function stringLength(firstWord,secondWord,thirdWord) {
    
    let wordsLength = firstWord.length + secondWord.length + thirdWord.length;
    console.log(wordsLength);
    console.log(Math.floor(wordsLength/3));
}

stringLength("chocolate", "ice cream", 'cake')*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function mathOperations(num1, num2, op) {
    let result = 0;
    switch (op) {
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '**':
            result = num1 ** num2
            break;
        case '%':
            result = num1 % num2
            break;
    }
    console.log(result);
    
}

mathOperations(5,6,'*')*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

/*function sumOfNumbers(num1,num2) {
    let result = 0;
    for (let i = +num1; i <= +num2; i++) {
        result+= i;
    }
    console.log(result);
    
}

sumOfNumbers('1','5')*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

/*function largestNumber(...nums) {
    let asd = Math.max(...nums)
    console.log(`The largest number is ${asd}.`);
}

largestNumber(5, -3, 6)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 5

/*function circleArea(input) {
    let type = typeof input;
    if(type === 'number'){
        let area = (Math.PI * (input**2)).toFixed(2);
        console.log(area);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
        
    }
}

circleArea([5])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 6

/*function squareOfStars(input) {
    for (let i = 0; i < input; i++) {
        console.log('* '.repeat(input));
    }
}

squareOfStars(5)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 7

/*function dayOfWeek(input) {
    switch (input) {
        case 'Monday':
            console.log(1);
            break;
        case 'Tuesday':
            console.log(2);
            break;
        case 'Wednesday':
            console.log(3);
            break;
        case 'Thursday':
            console.log(4);
            break;
        case 'Friday':
            console.log(5);
            break;
        case 'Saturday':
            console.log(6);
            break;
        case 'Sunday':
            console.log(7);
            break;

        default:
            console.log('error');
            break;
    }
}

dayOfWeek(6222)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 8

/*function aggregateElements(input) {
    let agg1 = input.reduce((a,b) => a+b);
    let agg2 = input.map(a => 1/a).reduce((a,b) => a + b)
    let agg3 = input.join('');
    console.log(agg1);
    console.log(agg2);
    console.log(agg3);   
}

aggregateElements([2, 4, 8, 16])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 9

function wordsUppercase(input) {
    let reg = /\W/
    let ads = input.split(reg)
    .filter(a => {
        if(!(a==='')){
            return a
        }
    })
    .map(a => a.toUpperCase())
    .join(', ')
    
    console.log(ads);
    
}

wordsUppercase('Hi, how are you?')