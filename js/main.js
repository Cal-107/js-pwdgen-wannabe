// Pasword Generator (Non sicuro)

// Ottieni nome visitatore
const firstName = prompt('Qual è il suo nome?')
console.log(firstName)

// Ottieni cognome visitatore
const lastName = prompt('Qual è il suo cognome?')
console.log(lastName)

// Ottieni colore preferito visitatore
const colorPref = prompt('Qual è il suo colore preferito?')
console.log(colorPref)

// Mostrare output a schermo
document.getElementById('password').innerHTML = `${firstName}${lastName}${colorPref}21`;