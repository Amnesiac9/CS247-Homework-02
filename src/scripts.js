

let today = new Date
today.getDate()

let bottomLeftDate = document.querySelector('.bottom-left-date')
bottomLeftDate.textContent = today.toDateString().slice(3)

// Just missing a comma from the date, could do this:
// https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript 
