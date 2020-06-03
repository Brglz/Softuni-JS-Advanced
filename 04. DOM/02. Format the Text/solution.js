function solve() {
  //TODO...
  let output = document.getElementById('output')
  let text = (document.getElementById('input').innerText).split('. ').map(x => x+'.');
  let paragraphNumber = Math.ceil(text.length / 3)
  for (let p = 0; p < paragraphNumber; p++) {
    let paragraphText = text.splice(0,3);
    const createParagraph = document.createElement('p');
    createParagraph.innerText = paragraphText;
    output.appendChild(createParagraph);
    console.log(paragraphText);
  }
}


