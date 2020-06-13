// BIND
// const queue = {
//     work: [],
//     add(fn,priority){
//         this.work.push(fn);
//     },
//     process() {
//         this.work.forEach(fn => fn());
//     }
// }


// const user1 = {
//     name: 'User 1',
//     logName() {console.log(this.name);
//     }
// }
// const user2 = {
//     name: 'User 2',
//     logName() {console.log(this.name);
//     }
// }
// const user3 = {
//     name: 'User 3',
//     logName() {console.log(this.name);
//     }
// }

// queue.add(user1.logName.bind(user1))
// queue.add(user2.logName.bind(user2))
// queue.add(user3.logName.bind(user3));

// queue.process()
//-------------------------------------------------------------------------------------------------------------------------

// CALL 

// const librery = {
//     logFullName(){
//         console.log(this.firstName + ' '+ this.lastName);
//     }
// }

// const obj = {
//     firstName: 'Pesho',
//     lastName: 'Petrov'
// }

// librery.logFullName.call(obj)

//-------------------------------------------------------------------------------------------------------------------------



//EXCERCISE 1

/*function area(){
    return this.x * this.y
}

function vol) {
    return this.x * this.y * this.z
}


function solve(area,vol,inputJson) {
    const objectArray = JSON.parse(inputJson);
    return objectArray.map(obj => {
        const a = area.call(obj);
        const v = vol.call(obj);
        return {area: a, volume: v};
    })
}

const jsonString = "[{\"x\":1, \"y\": 2, \"z\": 3}, {\"x\":4, \"y\":5, \"z\": 6}]"

solve(area, vol,jsonString);*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2


/*// ECMA SCRIPT 5 / suzdavane na obekti s funkciq ne s class / taka se pishe v reakt

// function Person(firstName,lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     Object.defineProperty(this, 'fullName', {
//         set(newFullName){
//             const nameArray = newFullName.split(' ');
//             this.firstName = nameArray[0];
//             this.lastName = nameArray[1];
//         },
//         get(){
//             return this.firstName + ' ' + this.lastName
//         }
//     })
// }

// ECMA Script 6 / suzdavane na obekti s klas

class Person {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;    
    }
    
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(newFullName){
        const nameArr = newFullName.split(' ');
        if(nameArr.length<2) {return}
        this.firstName = nameArr[0];  
        this.lastName = nameArr[1];  
    }
}

const ivan = new Person('Ivan', 'Petrov');
console.log(ivan.fullName);
ivan.fullName = 'test test';
console.log(ivan.fullName);*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

/*function arrayMap(arr, fn) {
    return arr.reduce(function(acc,curr) {
        return acc.concat(fn(curr));
    }, [])
}*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

    //app.js

//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 5

// SOLUTION WITH CLASS

// class Spy {
//     constructor(obj, methodName){
//         this.count = 0;
//         const method = obj[methodName]
//         if(!method) { throw new Error('no such method!')}
//         obj[methodName] = function (obj,...args){
//             this.count++
//             return method.apply(obj,args)
//         }.bind(this);
//     }
// }

//-------

// Solution with factory function

// function Spy(obj, methodName) {
//     const spy = { count: 0 };
//     const method = obj[methodName]
//     if (!method) { return }
//     obj[methodName] = function (...args) {
//         this.count++
//         return method.apply(obj, args);
//     }.bind(spy)
//     return spy;
// }

//--------

// Solution with construction function

// function Spy(obj, methodName) {
//     this.count = 0;
//     const method = obj[methodName]
//     if (!method) { return }
//     obj[methodName] = function (...args) {
//         this.count++
//         return method.apply(obj, args);
//     }.bind(this)
// }


// const obj = {test: function(a,b,c) {return this.data}, data: 1};
// const s = Spy(obj,'test');
// obj.test(1,2,3);
// obj.test(3);
// obj.test(2,2);
// console.log(s);
