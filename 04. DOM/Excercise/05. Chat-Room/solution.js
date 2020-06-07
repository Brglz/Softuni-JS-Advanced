function solve() {

   const text = document.getElementById('chat_input');
   const chat_messages = document.getElementById('chat_messages');
   document.getElementById('send').addEventListener('click', () => {
      let message = document.createElement('div');
      message.innerHTML = text.value;
      message.classList.add("my-message");
      message.classList.add("message");
      chat_messages.appendChild(message);
      document.getElementById('chat_input').value = '';
   })
}


