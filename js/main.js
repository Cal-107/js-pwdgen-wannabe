// Pasword Generator (Non sicuro)

// Ottieni nome visitatore
const firstName = prompt('Qual è il suo nome?')

// Ottieni cognome visitatore
const lastName = prompt('Qual è il suo cognome?')

// Ottieni colore preferito visitatore
const colorPref = prompt('Qual è il suo colore preferito?')

// Mostrare output a schermo
document.getElementById('password').innerHTML = `${firstName}${lastName}${colorPref}21`;