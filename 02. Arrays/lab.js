//EXCERCISE 1

/*function sumFirstAndLast(input) {
    let first = +input[0];
    let last = +input[input.length-1];
    console.log(first+last);  
}

sumFirstAndLast(['40'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function evenPossitionElements(input) {
    let result = []
    for (let i = 0; i < input.length; i++) {
        if(i%2===0){
            result.push(input[i])
        }
    }
    console.log(result.join(' ')); 
}

evenPossitionElements([1,2,3,4])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

/*function negativeOrPossitiveNumbers(input) {
    let negative = input.filter(a => a<0).sort((a,b) => b-a);
    let positive = input.filter(a => a>0).sort((a,b) => a-b);
    let nulls = input.filter(a => a==0);
    console.log(negative.concat(positive,nulls).join('\n'));

    // let negative = [];
    // let positive = [];
    // let nulls = [];
    // for (const num of input) {
    //     if(num<0){
    //         negative.push(num)
    //     } else if(num>0) {
    //         positive.push(num)
    //     } else {
    //         nulls.push(num)
    //     }
    // }
    // positive.sort((a,b) => a-b);
    // negative.sort((a,b) => b-a);
    // console.log((negative.concat(positive,nulls)).join('\n'));
    
}

negativeOrPossitiveNumbers(['asdsad',2,'3',-1,-0])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

/*function lastKNumberSequence(n,k) {
    let arr = [1];
    for (let i = 0; i < n-1; i++) {
        let cur = 0;
        for (let j = i; j > i-k ; j--) {
            if(arr[j]=== undefined){
                continue;
            } else {
                cur += arr[j];
            }
            
        }
        arr.push(cur)
    }
    console.log(arr);
    
}

lastKNumberSequence(6,3)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 5

/*function processOddNumbers(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if(i%2!==0){
            let curr = input[i]*2;
            result.unshift(curr)
        }
    }
    console.log(result.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 6

/*function smallestTwoNumbers(input) {
   let result = [...new Set(input)].sort((a,b) => a-b).slice(0,2);
   console.log(result.join('\n'));   
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 7 

/*function biggestElement(input) {
    let biggest = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < input.length;i++){
        for (let j = 0; j < input[i].length; j++) {
            let cur = input[i][j];
            if(cur>=biggest){
                biggest = cur
            }
        }
    }
    console.log(biggest);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 8

/*function diagonalSums(input) {
    let left = 0;
    let right = 0;

    for (let i = 0; i < input.length; i++) {
        let asd = input[i][i]
        left += asd;
    }
    let counter = input.length-1;
    for (let i = 0; i < input.length; i++) {
        let asd = input[i][counter];
        right += asd;
        counter--;   
    }
    console.log(left,right); 
}

diagonalSums([[20, 40],
    [10, 60]]
   );*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 9

/*function equalNeighbors(input) {
    let equal = 0;
    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < input[i].length - 1; j++) {
            const curr = input[i][j];
            const next = input[i][j + 1];
            let currDown;
            let lastDown;
            if(i!==input.length-1){
                currDown = input[i + 1][j];
                lastDown = input[i + 1][input[i + 1].length - 1]
            } else {
                currDown = false;
                lastDown = false
            }
            if (curr === next) {
                equal++
            } else if (curr === currDown) {
                equal++
            } else if (j===input[i].length-2) {
                if (next === lastDown) {
                    equal++
                }
            }

        };
    };
    console.log(equal);

};

equalNeighbors([['2', '2', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]
)
equalNeighbors([['2', '2', '5', '7', '4'],
                ['4', '0', '5', '3', '4'],
                ['2', '5', '5', '4', '2']])*/
//-------------------------------------------------------------------------------------------------------------------------