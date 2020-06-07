function solve() {

  const anchors = Array.from(document.querySelector("a"));
  const counter = new Array(anchors.length).fill(0);
  const container = document.querySelector("#page1 .middled");

  container.addEventListener('click',function (e){
    const target = e.target;
    const parrent = e.target.parentElement;
    const notTargetAnchor = target.localName !== 'a';
    const notTargetParentAnchor = (parrent && parrent.localName !== 'a')
    if(notTargetAnchor && notTargetParentAnchor){ return }
    const targetAnchor = notTargetParentAnchor ? parrent : target
    const counterIndex = anchors.indexOf(targetAnchor);
    if(counter===-1){ return};
    counter[counterIndex]++
    const paragraph = targetAnchor.nextElementSibling;
    paragraph.innerText = `visited ${counter[counterIndex]} times`;
    console.log(counterIndex);
    
  })
  
}