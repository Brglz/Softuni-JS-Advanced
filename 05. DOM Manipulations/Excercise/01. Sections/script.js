function create(words) {

   const content = document.getElementById('content');
   function create(name) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.style.display = 'none'
      p.textContent = name;
      div.appendChild(p);
      content.appendChild(div);
   }
   words.forEach(e => create(e));
   content.addEventListener('click', function(e){
      const target = e.target
      target.firstChild.style.display = ''      
   })
}