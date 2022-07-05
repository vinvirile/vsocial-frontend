const form = document.querySelector('form')
const formUsername = document.querySelector('.form__username')
const formPassword = document.querySelector('.form__password')
const demoAccount = document.querySelector('.loginbox__form__demoaccount')
const signinBtn = document.querySelector('.loginbox__form__signinbtn')
const err = document.querySelector('.loginbox__form__err')

demoAccount.addEventListener('click', () => {
  formUsername.value = 'johndoe'
  formPassword.value = 'johndoe'
})

form.addEventListener('submit', e => {
  e.preventDefault()

  err.textContent = ''
  signinBtn.innerHTML =
    '<div class="loader"><div></div><div></div><div></div><div></div></div>'

  setTimeout(() => {
    if (formUsername.value === '' || formPassword.value === '') {
      signinBtn.textContent = 'Sign in'
      err.textContent = 'All fields are required!'
    } else {
      window.location.href = 'index.html'
    }
  }, 2000)
})
