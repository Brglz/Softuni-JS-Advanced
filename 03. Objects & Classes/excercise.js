//EXCERCISE 1

/*function heroicInventory(input) {
    let fighters = [];
    for (const line of input) {
        let [name,lvl,weapons] = line.split(' / ');
        console.log(name,lvl,weapons);
        let tempObj = {}
        if(){
            tempObj[name] = name;
            tempObj[lvl] = lvl;
            tempObj[weapons] = weapons;
            
        }
    }
    

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

function storeCataloge(input) {
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
            console.log(`  ${product} : ${catalog[key][product]}`);
            
        }
        
        
    }

    // read input
    // get name and price of the element
    // ako ne sushtestvuva bukvata suzdavame q (prazen obekt)
    // dostupvame stoinosta zad bukvata
    // zapazvame obrabotenata stoinost v obekta

    // sortirame kataloga po nachalna bukva
    // otpechatvame bukvata
    // sortirame obekta zad bukvata
    // otpechatvame obekta
}

storeCataloge(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)