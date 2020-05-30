//EXCERCISE 1

/*function townsToJSON(input) {
  let asd = input.shift();
  function wp(obj) {
    obj = obj.split('').filter(x => x !== '|');
    obj.shift();
    obj.pop();
    obj = obj.join('').split('  ');
    return obj
  }
  let obj = [];
  for (const line of input) {
    let temp = wp(line);
    let [city,lat,lon] = temp;
    lat = +lat;
    lat = lat.toFixed(2);
    lat = +lat;
    lon = +lon;
    lon = lon.toFixed(2)   
    lon = +lon     
    let objInSide = {};

    objInSide.Town = city;
    objInSide.Latitude = lat;
    objInSide.Longitude = lon;
    
    obj.push(objInSide)
  }

  console.log(JSON.stringify(obj));
  
}

townsToJSON(['| Town York | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |']
)

townsToJSON(['| Town | Latitude | Longitude |',
  '| Delhi |  28.38 | 77.12 |',
  '| Is it a real town? | 71.42 | -13.91 |'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 2

/*function sumByTown(params) {
  let obj = {};
  for (let i = 0; i < params.length; i++) {
    if (i % 2 == 0) {
      if(obj[params[i]]===undefined){
        obj[params[i]] = +params[i+1];
      } else {
        obj[params[i]] += +params[i+1]
      }
    }

  }
  console.log(JSON.stringify(obj));
  
};

sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4'])*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 3

/*function populationInTowns(input) {
  let obj = {};
  for (const line of input) {
    let [town, pop] = line.split(' <-> ');
    if (obj[town] === undefined) {
      obj[town] = +pop;
    } else {
      obj[town] += +pop;
    }

  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} : ${obj[key]}`);
    }
  }

}

populationInTowns(['Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000',
  'Las Vegas <-> 1000099']
)*/
//-------------------------------------------------------------------------------------------------------------------------

//EXCERCISE 4

function JSON_TO_HTML(jsonString) {
  let result = '<table>'
  const arr = JSON.parse(jsonString);
  const titles = Array.from(new Set(arr.map(items => Object.keys(items)).flat()))
  result += '<tr><th>' + titles.join('</th><th>') + '</th></tr>';

  result = arr.reduce((acc, currItem) => {
    let innerResult = titles.reduce((titleAcc, currTitle) => {
      const value = currItem[currTitle]
      if (value === undefined) { return titleAcc }
      return titleAcc + '<td>' + value + '</td>';
    }, '')
    if (innerResult === "") { return acc }
    return acc + '<tr>' + innerResult + '</tr>'
  }, result)

  return result + '</table>'
}

console.log(JSON_TO_HTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']))