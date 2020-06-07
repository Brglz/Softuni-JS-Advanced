function solve() {

   const main = document.querySelector('main > section');
   document.querySelector('button.btn.create').addEventListener('click', createArticle);
   const archive = document.querySelector('.archive-section > ul');

   function createArticle(e) {
      e.preventDefault();
      const title = document.querySelector('#title').value;
      const creator = document.querySelector('#creator').value;
      const category = document.querySelector('#category').value;
      const content = document.querySelector('#content').value;

      const deleteBtn = elementCreate('button', 'Delete', { className: 'btn delete' })
      const archiveBtn = elementCreate('button', 'Archive', { className: 'btn archive' })

      deleteBtn.addEventListener('click', () => {
         main.removeChild(article);
      })

      archiveBtn.addEventListener('click', () => {
         main.removeChild(article);
         archive.appendChild(elementCreate('li', title));
         const items = [...archive.querySelectorAll('li')];
         archive.innerHTML = ''
            items.sort((a,b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => archive.appendChild(e));
      })

      const article = elementCreate('article', [
         elementCreate('h1', title),
         elementCreate('p', ['Category:', elementCreate('strong', category)]),
         elementCreate('p', ['Creator:', elementCreate('strong', creator)]),
         elementCreate('p', content),
         elementCreate('div', [deleteBtn,archiveBtn],{className: 'buttons'})
      ]);

      main.appendChild(article);
   }

   function elementCreate(type, content, attributes) {
      const result = document.createElement(type);

      if (attributes !== undefined) {
         Object.assign(result, attributes);
      }

      if (Array.isArray(content)) {
         content.forEach(append);
      } else {
         append(content);
      }

      function append(node) {
         if (typeof node === 'string') {
            node = document.createTextNode(node);
         }
         result.appendChild(node)
      }
      return result

   }
}
