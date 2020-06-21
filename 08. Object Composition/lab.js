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

/*function solve(input) {
    const asd = JSON.parse(input);
    
    return asd.reduce(function(acc,curr) {
        const {canMove} = curr;
        console.log(canMove);
        

        console.log(acc);
        console.log(curr);
        
        
        
    }, {})
}

solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

function cars(commands) {
    const commandMap = {
        create: (acc, name, _, inheritName) => {
            if (!inheritName) {
                acc[name] = {};
                return acc;
            }
            const parrent = acc[inheritName];
            acc[name] = Object.create(parrent)
            return acc
        },
        set: (acc, name, propName, propValue) => {
            acc[name][propName] = propValue;
            return acc;
        },
        print: (acc,name) => {
            let result = '';

            Object.keys(acc[name]).forEach(item => console.log(item));
            
            // Object.keys(acc).forEach((item, index, items) => {
            //     for (let a in acc[item]) {
            //         result += `${a}:${acc[item][a]}`
            //     }
            //     if (index !== items.length - 1) {
            //         result += ', '

            //     }
            // })

            console.log(result);
            return acc
        },
    }

    return commands.reduce((acc, currCommand) => {
        const [op, v1, v2, v3] = currCommand.split(' ')
        return commandMap[op](acc, v1, v2, v3)
    }, {})
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)
