//EXCERCISE 1

/*function fruits(fruit, weight, price) {
    weight = weight/1000;
    let money = price*weight;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
    
}

fruits('orange', 2500, 1.80)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function gCD(x,y) {
    while(y) {
        var t = y;
        y = x % y;
        x = t;
      }
    console.log(x);
    
}

gCD(458,2154)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

/*function sameNumbers(num) {
    let isTheSame = true;
    let string = num
        .toString()
        .split('');
        
    for (let i = 0; i<string.length-1;i++) {
        let next = string[i+1];
        if(string[i]===string[next]){
            isTheSame = true;
            
        } else {
            isTheSame = false;
            console.log('false');
            break;
        }
        
    };

    if(isTheSame){
        console.log('true');
    }
    let sum = string.map(Number).reduce((a,b) => a+b);
    console.log(sum);
};

sameNumbers(2222222);*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

// function timeToWalk(steps,lengthOfFootprint, speed) {
//     let distance = (steps*lengthOfFootprint)/1000; // in km
//     let time = distance/speed
//     let resting = Math.floor(distance/0.5);
//     console.log(resting);
    
// }

// timeToWalk(4000, 0.60, 5)
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 5

function roadRadar(input) {
    
}

roadRadar([40, 'city'])