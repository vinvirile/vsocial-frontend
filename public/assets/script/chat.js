// grabbing DOM elements
const chatBox = document.querySelector('.chatbox__messages')
const inputMessage = document.querySelector('.chatbox__formbox__field')
const sendBtn = document.querySelector('.chatbox__formbox__send')
const chatImg = document.querySelector('.avatar__sm')
const chatHeading = document.querySelector('.chatbox__headingbox__name')
const threads = document.querySelectorAll('.chat__threads__thread')

function sanitize(string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  const reg = /[&<>"'/]/gi
  return string.replace(reg, match => map[match])
}

// This is for sending messages
sendBtn.addEventListener('click', () => {
  let message = inputMessage.value

  // gets rid of whitespaces
  message = sanitize(message.trim())

  inputMessage.value = ''

  // makes sures that the message isn't empty
  if (
    message === undefined ||
    message === false ||
    message === null ||
    message === ''
  ) {
    return
  }

  chatBox.prepend(newChat(message, false))
})

// Creates a Chat Bubble Element and "returns" the "element". This is not already prepended!
const newChat = (message, receiver, id) => {
  const messageLine = document.createElement('div')
  messageLine.classList.add('chatbox__messages__line')

  // Checks to see if the message is from you or the other person. If its from the other person and you are receiving the message, this makes the chat bubble go to the left
  if (receiver === true) messageLine.classList.add('left')

  messageLine.innerHTML = `<div class="chatbox__messages__line__spacer c-${id}"></div>
  <div class="chatbox__messages__bubble">
    <p class="chatbox__messages__bubble__text">
      ${message}
    </p>
  </div>
`

  return messageLine
}

// setInterval(() => {
//   chatBox.prepend(newChat('Hi, Im carl', false))
// }, 3000)

// Premade chat test messages being loaded from demodatabase.js
chatMessages.forEach(message => {
  chatBox.prepend(newChat(message.message, message.incoming, message.id))
})

const displayChat = id => {
  chatBox.innerHTML = ''
  if (!id) return

  if (!messages[id]) return

  if (!messages[id]['messages']) return

  // chatImg.src = 'IMAGE URL'
  chatHeading.textContent = id

  messages[id]['messages'].forEach(message => {
    chatBox.prepend(newChat(message.message, message.incoming, message.id))
  })
}

threads.forEach(thread => {
  thread.addEventListener('click', ele => {
    let [type, arr, element, classNames] = decipherClass(ele)

    console.log(type, arr)

    const chatID = arr[1]
    displayChat(chatID)
  })
})

// displayChat('mackenzie')
