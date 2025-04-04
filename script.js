// 1. Creo una lista di email invitate alla festa
// 2. Prendo l'email inserita dall'utente cliccando il bottone
// 3. Uso un ciclo for per confrontare ogni email della lista con quella inserita
// 4. Se trovo una corrispondenza, l'utente può entrare
// 5. Altrimenti, l'accesso è negato
// 6. Mostro il risultato nel paragrafo sotto al bottone


const listaEmail = [
    "   ",
    "luigi@example.com",
    "peach@example.com",
    "danny@example.com",
    "toad@example.com"
  ];
  
  const emailInput = document.getElementById("userEmail");
  const checkButton = document.getElementById("checkEmailBtn");
  const risultato = document.getElementById("emailResult");


  checkButton.addEventListener("click", function() {
    const emailUtente = emailInput.value;
  
    // Variabile di partenza: supponiamo che l'email non sia trovata
    let emailTrovata = false;
  
    // Controllo ogni email della lista
    for (let i = 0; i < listaEmail.length; i++) {
      if (emailUtente === listaEmail[i]) {
        emailTrovata = true;
      }
    }
  
    // Mostro il risultato
    if (emailTrovata) {
      risultato.textContent = "Benvenuto alla festa! 🎉";
    } else {
      risultato.textContent = "Spiacente, non sei nella lista. 😔";
    }
  });
  
  
  const rollButton = document.getElementById("rollDiceBtn");
const diceResult = document.getElementById("diceResult");

rollButton.addEventListener("click", function() {
    const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
const numeroComputer = Math.floor(Math.random() * 6) + 1;

let messaggio = `Hai tirato ${numeroGiocatore}, il computer ha tirato ${numeroComputer}. `;

if (numeroGiocatore > numeroComputer) {
    messaggio += "Hai vinto! 🎉";
  } else if (numeroGiocatore < numeroComputer) {
    messaggio += "Hai perso! 😢";
  } else {
    messaggio += "Pareggio! 😐";
  }

  // Mostro il risultato nel paragrafo
  diceResult.textContent = messaggio;
});


  