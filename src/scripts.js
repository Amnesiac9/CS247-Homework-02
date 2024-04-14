

let today = new Date
today.getDate()

let bottomLeftDate = document.querySelector('.bottom-left-date')
bottomLeftDate.textContent = today.toDateString()
