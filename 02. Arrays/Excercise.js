//EXCERCISE 1

/*function arrayWithGivenDelimiter(input) {
    let delimiter = input.pop();
    console.log(input.join(delimiter));  
}

arrayWithGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function nThElementFromArray(input) {
    let step = +input.pop();
    for (let i = 0; i < input.length; i+=step) {
        console.log(input[i]);
    }
}

nThElementFromArray(['1', 
'2',
'3', 
'4', 
'5', 
'6'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

/*function addAndRemoveElement(input) {
    let n = 1;
    let arr = [];
    input.forEach(element => {
        element === 'add' ? arr.push(n) : arr.pop();
        n++;
    })    
    if(arr.length>0){
        console.log(arr.join('\n'));  
    } else {
        console.log('Empty');  
    }
}

addAndRemoveElement(['add', 
'add', 
'add', 
'add',
'remove'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

/*function rotateArray(input) {
    let rotateTimes = +input.pop()%input.length;
    for(let i = 1; i <= rotateTimes;i++) {
        let rotating = input.pop();
        input.unshift(rotating);
    };
    console.log(input.join(' ')); 
};

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 5

/*function subsequenceFromArray(input) {
    let asd = input[0];
    let result = [];

    input.map(x => {
        if(x >= asd){
            result.push(x);
            asd = x;
        }
    })
    console.log(result.join('\n'));
}

subsequenceFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 6

/*function sortArr(input) {
    let arr = input.slice();
    let result = arr.sort(sorting);

    function sorting(a, b) {
        let first = a.length;
        let seccond = b.length;
        let strFirst = a.toUpperCase();
        let strSeccond = b.toUpperCase();

        if (first > seccond) return 1; //if the length of the first word is longer than the seccond move it up
        if (first < seccond) return -1; // if the length of the first word is not longer than the seccond move it down

        if (strFirst > strSeccond) return 1; // if the first letter of the first word is in front of the first letter of the seccond word move it up
        if (strFirst < strSeccond) return -1; // if the first letter of the first word is in front of the first letter of the seccond word move it down
    }
    console.log(result.join('\n'));

}

sortArr(['test',
    'Deny',
    'omen',
    'Default'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 7

/*function magicMatrix(input) {
    let magical = [];
    let lastSumRow = 0;
    let lastSumCol = 0;
    for (let i = 0; i < input.length; i++) {
        let curSumRow = 0;
        let curSumCol = 0;
        for (let j = 0; j < input[i].length; j++) {
            curSumRow += input[i][j];
            curSumCol += input[j][i]
        }
        if (i != 0) {
            if (curSumRow === lastSumRow) {
                magical.push(0);
            } else {
                magical.push(1)
            }
            if(curSumCol === lastSumCol){
                magical.push(0);
            } else {
                magical.push(1)
            }
        }
        lastSumRow = curSumRow;
        curSumRow = 0;
        lastSumCol = curSumCol;
        curSumCol = 0;
    }
    magical.reduce((a,b) => a+b) === 0 ? console.log('true') : console.log('false');
}

magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])*/
    //-------------------------------------------------------------------------------------------------------------------------