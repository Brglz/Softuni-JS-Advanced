function solve() {

    let name = document.querySelector('article input')
    document.querySelector('article button')
        .addEventListener('click', function () {            
            if(!name.value){
                return
            }
            let letter = (name.value[0]).toUpperCase();
            let possition = (letter.charCodeAt(0))-65;
            var temp = document.querySelectorAll('div')[2];
            let listedItems = temp.querySelectorAll('ol li'); 
            if(listedItems[possition].innerHTML === ""){
                listedItems[possition].innerHTML = name.value;
            } else {
                document.querySelectorAll('ol li')[possition].innerHTML += ', ' + name.value; //add the name to the list item
            }
            document.querySelector('article input').value = "";   
        });
    
}

// A = 65