const sendStatus = document.querySelector('.statusform__send')

sendStatus.addEventListener('click', () => {
  alert('Status sent')
  document.querySelector('.statusform__field').value = ''
})
