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
    // Different solution 
    return input.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n')
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

//EXCERCISE 8

/*function ticTacToe(input) {
    let arr = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let player = 'X';

    for (let line of input) {
        let thereIsFalse = false;
        // 1. read the input
        let [currRow, currCol] = line.split(' ').map(Number);
        // 2. check if the table is full
        for (let row = 0; row < arr.length; row++) {
            if (arr[row].includes(false)) {
                thereIsFalse = true;
            }
        }
        // 3. if its full end the game and print 'The game ended! Nobody wins :('
        if (!thereIsFalse) {
            console.log('The game ended! Nobody wins :(');
            endGame();
            return;
        }
        // 4. check if the place on the table is already taken and place it or if it is taken print a message
        if (arr[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        arr[currRow][currCol] = player;
        // 5. check horizontaly for winners
        for (let i = 0; i < 3; i++) {
            if (arr[i][0] === player && arr[i][1] === player && arr[i][2] === player) {
                console.log(`Player ${player} wins!`);
                endGame();
                return;
            }
        }
        // 6. check verticaly for winners
        for (let i = 0; i < 3; i++) {
            if (arr[0][i] === player && arr[1][i] === player && arr[2][i] === player) {
                console.log(`Player ${player} wins!`);
                endGame()
                return
            }
        }
        // 7. check left to right diagonal for winners
        for(let i = 0; i<3;i++){
            if(arr[0][0]===player && arr[1][1]===player && arr[2][2]===player){
                console.log(`Player ${player} wins!`);
                endGame();
                return
            }
        }
        // 8. check right to left diagonal for winners
        for(let i =0; i<3;i++){
            if(arr[0][2]===player && arr[1][1]===player && arr[2][0] === player){
                console.log(`Player ${player} wins!`);
                endGame()
                return
            }
        }
        // 9. change players
        player = player === "X" ? "O" : "X";
    }

    // 10. print if there is a winner
    function endGame() {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].join('\t'));
        }
    }
    

}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 9

/*function diagonalAtack(input) {
    // 1.read the input 
    // transform it to array matrix
    // add boolean for verifying if sums are equal
    let matrix = []
    input.forEach(element => {
        let asd = element.split(' ').map(Number)
        matrix.push(asd)
    });

    let isEqualDiagonals = false;
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let nums = [];

    // 2. sum both diagonals
    // for loop that sums the 2 diagonals
    for (let i = 0; i < matrix.length; i++) {
        leftDiagonal += matrix[i][i];
        nums.push(matrix[i][i])
        rightDiagonal += matrix[i][(+matrix.length - 1) - i];
    }
    // 3. check if sums are equal
    //change the boolean
    isEqualDiagonals = leftDiagonal === rightDiagonal;

    // 4. transform the matrix with the sum of the diagonals
    if (isEqualDiagonals) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col) {
                    matrix[row][col] = leftDiagonal;
                }
            }
        }
        matrix.reverse()
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][row] = nums[row];
            
        }
    }

    // 5. print 
    for (const element of matrix) {
        console.log(element.join(' '));   
    }
}

// diagonalAtack(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']
// )
diagonalAtack(['1 1 1',
    '1 1 1',
    '1 1 0']
);*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 10

function orbit(params) {
    let width = params.shift();
    let height = params.shift();
    let r = params.shift();
    let c = params.shift();

    //1. make the matrix
    let matrix = [];
    for (let row = 0; row < width; row++) {
        let asd = '1'.repeat(height)
        let cols = new Array(asd)
        matrix.push(cols)
    };

    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = matrix[row][0].split('').map(Number);        
    }
    
    //2. fill it
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = Math.max(Math.abs(r - row),Math.abs(c - col)) + 1
            
        }
        
    }


    //3. print it
    console.log(matrix);

}

orbit([4, 4, 0, 0])
orbit([5, 5, 2, 2])
//output
/*  1 2 3 4
    2 2 3 4
    3 3 3 4
    4 4 4 4
*/
