
let nome = prompt ('Dimmi il tuo nome');
let cognome = prompt ('Dimmi il tuo cognome');
let colore = prompt ('Dimmi il tuo colore preferito');
let numero = ('21');

console.log(nome + " " + cognome + " "  + colore  + " " + numero);

let password = nome + cognome + colore + numero;

let text = `
<h1>La tua password &egrave;</h1> 
${password}
`;

document.getElementById("conteinerinfo").innerHTML = text;




