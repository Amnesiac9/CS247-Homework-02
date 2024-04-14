
let today = new Date
today.getDate()

let day = today.getDate() // returns just the day of the month

let bottomLeftDate = document.querySelector('.bottom-left-date')
// Add a comma and remove the extra day of the week text
bottomLeftDate.textContent = today.toDateString().slice(3).replace(day, day + ",")

// Just to fix the missing a comma from the date, could do this:
// https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript 
