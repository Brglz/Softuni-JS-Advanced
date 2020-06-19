//EXCERCISE 1

/*function solution(data) {
    const recPrototype = {
        area(){
            return this.height * this.width;
        },
        compareTo(otherRec){
            const currentRecArea = this.area();
            const otherRecArea = otherRec.area();

            return currentRecArea < otherRecArea ? 
            -1 : currentRecArea === otherRecArea ? 0 : 1;
        }
    }
    function createRec(width,height) {
        const result = Object.create(recPrototype);
        result.width = width;
        result.height = height;
        return result;
    }
    return data.reduce(function(acc,[width, height]) {
        return acc.concat(createRec(width,height))
    },[])
}

const data = [[10,5], [5,12]];
const [rec1, rec2] = solution(data);
console.log(rec1.area());
console.log(rec2.area());
console.log(rec1.compareTo(rec2));*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function solve(commands) {
    return commands.reduce(function(acc,currComand) {
        const [command, ...words] = currComand.split(' ');
        const word = words.join(' ');
        if(command === 'add'){
            return acc.concat(word)
        } else if(command === 'remove') {
            return acc.filter(i => i!==word)
        } else {
            console.log(acc);
            return acc;
        }

    }, []).join(',')
}

solve(['add JSFundamentals', 'print', 'add JSAdvanced', 'print','add JSApplications','print'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3