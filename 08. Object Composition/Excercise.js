//EXCERCISE 1

// Tip - factory function

/*function solve() {
    return {
        mage(name){
            return {
                name: name,
                health: 100,
                mana: 100,
                
                cast(spell){
                    this.mana--;
                    console.log(`${name} cast ${spell}`);
                }
            }
        }, 
        fighter(name){
            return {
                name: name,
                health: 100,
                stamina: 100,

                fight(){
                    this.stamina--;
                    console.log(`${name} slashes at the foe!`);
                    
                }
            }
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function solve(worker) {
    if(worker.dizziness===true) {
        let hydratation = worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated += hydratation;
        worker.dizziness = false;
    }
    return worker
    
}

console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }  
  ))*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

//   function solve(obj) {
//       function wheels(){
//         let wheel = obj.wheelsize
//         const arr = new Array(4);
//         if(wheel%2===0){
//             wheel--
//             arr.fill(wheel,0,4);
//         } 
//         arr.fill(wheel,0,4);
//         return arr    
//     }

//     function engine() {
//         const powerObj = obj.power;
//         if(powerObj <= 90){
//             return engines.smallEngine;
//         } else if(powerObj>90 && powerObj <= 120){
//             return engines.normalEngine;
//         } else {
//             return engines.monsterEngine;
//         }

//     }

//     function carriage() {
//         return {
//             type: obj.carriage,
//             color: obj.color
//         }
//     }

//     wheels(14);
//       const engines = {
//             smallEngine: { power: 90, volume: 1800 },
//             normalEngine: { power: 120, volume: 2400 },
//             monsterEngine: { power: 200, volume: 3500 },
//       }

//       const newObj = {
//         model: obj.model,
//         engine: engine(),
//         carriage: carriage(),
//         wheels: wheels()

//     }
//     return newObj

//   }
/*function solve(obj) {
    
    const engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }

    const car = {
        model: obj.model,
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
    }
    car.wheels = (new Array(4))
        .fill(obj.wheelsize % 2 ? obj.wheesize : obj.wheelsize--)

    for (const engine in engines) {
       if(engines[engine].power>=obj.power){
           car.engine = Object.assign(engines[engine])
           break;
       }
    }
    return car

}

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))*/
  //-------------------------------------------------------------------------------------------------------------------------

  //EXCERCISE 4

  /*function solve() {
      const proto = {};

      const instance = Object.create(proto);

      instance.extend = function (template) {
          for (const prop in template) {
              if(typeof template[prop] === 'function'){
                proto[prop] = template[prop];
              } else {
                instance[prop] = template[prop]
              }
          }
      }

      return instance;
  }


  const myInst = solve();

  myInst.extend({
    extensionMethod: function () {},
    extensionProperty: 'someString'
  })
  console.log(myInst);*/
  //-------------------------------------------------------------------------------------------------------------------------
  
//EXCERCISE 5
(function solve() {
    String.prototype.ensureStart = function(str) {
        if(!this.startsWith(str)){
            return str + this
        }
        return this.toString();
    } 

    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)){
            return str + this
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        if(this===''){
            return true
        }

        return false;
    }

    String.prototype.truncate = function (n) {
        
    }
})()
    
let asd = 'asdw'
console.log(asd);
asd = asd.ensureStart('str');
console.log(asd);

