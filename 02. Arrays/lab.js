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