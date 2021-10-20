// Pasword Generator (Non sicuro)

// Ottieni nome visitatore
// - memorizza in variabile
const firstName = prompt('Qual è il suo nome?')
console.log(firstName)

// Ottieni cognome visitatore
// - memorizza in variabile
const lastName = prompt('Qual è il suo cognome?')
console.log(lastName)

// Ottieni colore preferito visitatore
// - memorizza in variabile
const colorPref = prompt('Qual è il suo colore preferito?')
console.log(colorPref)

// Mostrare output a schermo
// - impostare elemento
// - impostare il valore all'elemento selezionato
document.getElementById('password').innerHTML = firstName + lastName + colorPref + '21';