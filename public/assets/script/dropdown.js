const dropdown = document.querySelector('.dropdown')
const dropdownButton = document.querySelector('.nav__userdropbutton')

dropdownButton.addEventListener('click', () => {
  dropdown.classList.toggle('active')
  dropdownButton.classList.toggle('active')
})
