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