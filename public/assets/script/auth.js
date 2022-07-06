// GRABBING DOM ELEMENTS
const formSignIn = document.querySelector('.signinform') || ''
const formSignUp = document.querySelector('.signupform') || ''
const formEmail = document.querySelector('.form__email')
const formUsername = document.querySelector('.form__username')
const formPassword = document.querySelector('.form__password')
const formRePassword = document.querySelector('.form__repassword')
const demoAccount = document.querySelector('.loginbox__form__demoaccount') || ''
const signinBtn = document.querySelector('.loginbox__form__signinbtn')
const err = document.querySelector('.loginbox__form__err')

if (demoAccount !== '') {
  demoAccount.addEventListener('click', () => {
    formUsername.value = 'johndoe'
    formPassword.value = 'johndoe'
  })
}

if (formSignIn !== '') {
  formSignIn.addEventListener('submit', e => {
    e.preventDefault()

    err.textContent = ''
    signinBtn.innerHTML =
      '<div class="loader"><div></div><div></div><div></div><div></div></div>'

    setTimeout(() => {
      if (formUsername.value === '' || formPassword.value === '') {
        signinBtn.textContent = 'Sign in'
        err.textContent = 'All fields are required!'
        return
      }
      window.location.href = 'index.html'
    }, 2000)
  })
}

if (formSignUp !== '') {
  formSignUp.addEventListener('submit', e => {
    e.preventDefault()

    err.textContent = ''
    signinBtn.innerHTML =
      '<div class="loader"><div></div><div></div><div></div><div></div></div>'

    setTimeout(() => {
      if (
        formEmail.value === '' ||
        formUsername === '' ||
        formPassword === '' ||
        formRePassword === ''
      ) {
        signinBtn.textContent = 'Sign in'
        err.textContent = 'All fields are required!'
        return
      }
      window.location.href = 'index.html'
    }, 3000)
  })
}
