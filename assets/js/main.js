let listaSpesa = []; // inizializza un array vuoto per la lista della spesa
let input = ""; // inizializza una variabile vuota per l'input dell'utente

while (input !== "fine") {
  input = prompt("Inserisci un elemento per la lista della spesa (digita 'fine' per terminare):");
  
  // se l'utente ha inserito un elemento diverso da "fine", lo aggiungi alla lista della spesa
  if (input !== "fine") {
    listaSpesa.push(input);
  }
}

// stampa la lista della spesa
console.log("Lista della spesa:");
for (let i = 0; i < listaSpesa.length; i++) {
  document.write(" - " + listaSpesa[i]);
}