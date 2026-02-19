


const bubble = document.getElementById('chat-bubble');

bubble.addEventListener('click', () => {
  const chatWindow = document.getElementById('chat-box');    
  const messages = document.getElementById('messages');
  const wasClosed = chatWindow.style.display !== 'block';
  const customersName = document.getElementById('customers-name').innerText;
  chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
  // Show greeting only when opening
  if (wasClosed && chatWindow.style.display === 'block' && messages.innerHTML.trim() === '') {
    messages.innerHTML = `<div class="bot-message"><div class="bot-response">Hi ${customersName}, how can I help?</div><div class="bot-icon"></div></div>`;
  }
});



async function sendMessage() {
    const pageContent = document.body.innerText
    const input = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-box');
    const message = input.value;

    // 1. Display user message
    messages.innerHTML += `<div class="user-message"><div class="user-icon"></div><div class="user-question">${message}</div></div>`;
    input.value = '';

    // 2. Fetch from your Node server
    const response = await fetch('http://localhost:3500/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, pageContent })
    });
    
    const data = await response.json();

    // 3. Display bot reply
    messages.innerHTML += `<div class="bot-message"><div class="bot-response">${data.reply}</div><div class="bot-icon"></div></div>`;
    messages.scrollTop = messages.scrollHeight;
  }