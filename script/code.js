let btnDisplay = document.querySelector('[data-btn]')
let output = document.querySelector('[data-output]')

function ageToDays (){
    let age = document.getElementById('input').value 
    let days = age*365
    output.textContent = days + ' days old'
}

btnDisplay.addEventListener('click', ageToDays)