//EXCERCISE 1

/*function heroicInventory(input) {
    let fighters = [];

    for (const line of input) {
        let [name, lvl, weapons] = line.split(' / ');
        weapons = weapons.split(', ')
        let temp = {};
        temp.name = name;
        temp.level = Number(lvl);
        temp.items = weapons;
        fighters.push(temp);
    }
    return JSON.stringify(fighters);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function JSON_Table(input) {
    let result = '<table>';

    for (const line of input) {
        let obj = JSON.parse(line);

        let tempString = '\n\t<tr>';
        let asd = `\n\t\t<td>${obj.name}</td>\n\t\t<td>${obj.position}</td>\n\t\t<td>${obj.salary}</td>`;
        result += tempString + asd + '\n\t</tr>'

    }
    result += '\n</table>'
    return result

}

JSON_Table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

/*function cappyJuice(input) {
    let obj = {};
    let bottles = [];

    for (const line of input) {
        let [name,quantity] = line.split(' => ');
        if(obj[name]===undefined){
            obj[name] = Number(quantity);
        } else {
            obj[name] += Number(quantity);
        }

    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            if(Math.floor(obj[key]/1000) > 0){
                console.log(`${key} => ${Math.floor(obj[key]/1000)}`);
            }

        }
    }

}

cappyJuice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

/*function storeCataloge(input) {
    const catalog = {};

    for (const line of input) {
        let [product,price] = line.split(' : ');
        const letter = product[0];
        if(catalog.hasOwnProperty(letter) === false) {
            catalog[letter] = {};
        }
        catalog[letter][product] = price;
    }

    const sortedKeys = Object.keys(catalog).sort((a,b) => a.localeCompare(b))
    for (const key of sortedKeys) {
        console.log(key);
        const sortedProducts = Object.keys(catalog[key]).sort((a,b) => a.localeCompare(b))
        for (const product of sortedProducts) {
            console.log(`  ${product}: ${catalog[key][product]}`);
        }
    }
}

storeCataloge(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 5

function engineeringCompany(input) {
    let cars = {};

    for (const line of input) {
        let [brand,model,producedCars] = line.split(' | ');
        if(cars.hasOwnProperty(brand)===false){
            cars[brand] = {}
        }
        if(cars[brand].hasOwnProperty(model)===false){
            cars[brand][model] = Number(producedCars);
        } else {
            cars[brand][model] += Number(producedCars)
        }
        
        
        
    }
    for (const car in cars) {
        console.log(car);
        for (const model in cars[car]) {
            console.log(`###${model} -> ${cars[car][model]}`)
        
        }
    }
    
}

engineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)

//-------------------------------------------------------------------------------------------------------------------------
//EXCERCISE 6

/*function systemComponents(input) {
    const catalog = {}
    for (const line of input) {
        let [system,component,sub] = line.split(' | ');
        if(catalog.hasOwnProperty(system) === false) {
            catalog[system] = {}
        }
        if(catalog[system].hasOwnProperty(component)===false){
            catalog[system][component] = []
        }

        catalog[system][component].push(sub);
    }

    Object.entries(catalog).sort((a,b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system,component]) => {
        console.log(system);
        Object.entries(component)
            .sort((a,b) => b[1].length - a[1].length)
            .forEach(([name,sub]) => {
                console.log('|||' + name);
                sub.forEach(s => {
                    console.log('||||||' + s);

                })

            })

    })

}

systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 7

/*function ticketSS(tickets,criteria) {
    class Ticket {
        constructor(descriptor){
            const [destination,price,status] = descriptor.split('|')
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    // ONE WAY
    // const comparator = {
    //     destination: (a,b) => a.destination.localeCompare(b.destination),
    //     price: (a,b) => a-b,
    //     status: (a,b) => a.status.localeCompare(b.status),
    // };

    // return tickets.map(t=>new Ticket(t)).sort((comparator[criteria]));

    // OTHER WAY

    return tickets.map(t=>new Ticket(t)).sort(comparator);

    function comparator(a,b) {
        try {
            return a[criteria].localeCompare(b[criteria]);
        } catch(e) {
            return a[criteria] - b[criteria]
        }
    }

}

console.log(ticketSS(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))*/
//-------------------------------------------------------------------------------------------------------------------------