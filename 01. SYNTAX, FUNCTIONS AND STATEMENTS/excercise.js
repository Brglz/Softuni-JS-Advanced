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

/*function roadRadar(input) {
    let [speed, area] = input;
    switch (area) {
        case 'motorway':
            if(speed>130 && speed<=150){
                console.log('speeding');
            } else if(speed>150 && speed<=170){
                console.log('excessive speeding');
            } else if(speed>170){
                console.log('reckless driving');
            }
            break;
        case 'interstate':
            if(speed>90 && speed<=110){
                console.log('speeding');
            } else if(speed>110 && speed<=130){
                console.log('excessive speeding');
            } else if(speed>130){
                console.log('reckless driving');
            }
            break;
        case 'city':
            if(speed>50 && speed<=70){
                console.log('speeding');
            } else if(speed>70 && speed<=90){
                console.log('excessive speeding');
            } else if(speed>90){
                console.log('reckless driving');
            }
            break;
        case 'residential':
            if(speed>20 && speed<=40){
                console.log('speeding');
            } else if(speed>40 && speed<=60){
                console.log('excessive speeding');
            } else if(speed>60){
                console.log('reckless driving');
            }
            break;
    }
}

roadRadar([21, 'residential'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 6

/*function cookingByNumbers(input) {
    let number = input.shift();
    for (const command of input) {
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number++;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number -= number * 0.2;
                console.log(number);
                break;
        }
    }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 7