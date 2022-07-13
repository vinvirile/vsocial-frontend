const avaUrlInput = document.querySelector('.avatar-url')
const settingsAvatar = document.querySelector('.settings-avatar')

avaUrlInput.addEventListener('input', () => {
  settingsAvatar.src = avaUrlInput.value
})
