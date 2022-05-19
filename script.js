// var welcome = parseInt(prompt('Veuillez entrez votre âge :'));
// if(welcome <= 0){
//     alert('Vraiment ! Ce n\'est pas crédible que vous ayez un âge négatif !');
// } else if(welcome >= 1 && welcome <= 17){
//     alert('Vous n\'êtes pas encore majeur !');
// } else if(welcome >= 18 && welcome <= 49){
//     alert('Vous êtes major mais pas encore senior !');
// } else if(welcome >= 50 && welcome <= 59){
//     alert('Vous êtes senior mais pas encore retraité !');
// } else if(welcome >= 60 && welcome <= 120){
//     alert('Vous êtes retraité, profitez de votre temps libre !');
// } else if(welcome > 120){
//     alert('RIP');
// } else {
//     alert('Vous n\'avez pas entrez d\'âge !'); //conseil: il faut penser à toutes les éventualité même si cela n'a pas été évoqué dans le sujet
// }

// ==============================================================

// var nicks = [],
//     nick;
// while(nick = prompt('Entrez un prénom:')){
//     nicks.push(nick);
// }
// if(nicks.length > 0){
//     alert("Il y a " + nicks.length + " prénom(s):\n" + nicks.join(' '));
// } else {
//     alert("Il n'y a pas de prénom en mémoire !");
// }

// ==============================================================

/*PROGREMME QUI PERMET DE CONVERTIR UN CHIFFRE EN LETTRE*/
// function num2Letters(number){
//     if(isNaN(number) || number < 0 || number > 999){
//         return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
//     }

//     var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
//         tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
    
//     var units = number % 10,
//         tens = (number % 100 - units) / 10,
//         hundreds = (number % 1000 - number % 100) / 100;
    
//     var unitsOut, tensOut, hundredsOut;

//     if(number === 0){
//         return 'zéro';
//     } else {
//         //traitement des unités
//         unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];

//         //traitement des dizaines
//         if(tens === 1 && units > 0){
//             tensOut = units2Letters[10 + units];
//             unitsOut = '';
//         } else if(tens === 7 || tens === 9){
//             tensOut = tens2Letters[tens] + '-' + (tens === 7 && units === 1 ? 'et' : '') + units2Letters[10 + units];
//             unitsOut = '';
//         } else {
//             tensOut = tens2Letters[tens];
//         }

//         tensOut += (units === 0 && tens === 8 ? 's' : '');

//         //traitement des centaines
//         hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

//         //retour du total
//         return hundredsOut + (hundredsOut && tensOut ? '-' : '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '') + unitsOut;
//     }
// }

// var userEntry;

// while(userEntry = prompt('Indiquez le nombre entier à ecrire en toute lettres (entre 0 et 999):')){
//     alert(num2Letters(parseInt(userEntry, 10)));
// }

// ==============================================================

// let x;

// function xd(){
//     x = parseInt(prompt('Entrez un chiffre compris entre 1 et 3: '));
// }
// xd();

// while (x < 1 || x > 3) {
//     alert('Non !');
//     xd();
// };

// alert('Enfin !');

// ==============================================================

// let z;

// function well() {
//     z = parseInt(prompt('Entrez un chiffre compris entre 10 et 20: '));
// }
// well();

// while (z < 10 || z > 20) {
//     if(z < 10) {
//         alert ('Plus grand !');
//     } else if (z > 20) {
//         alert('Plus petit !')
//     }
//     well();
// }
// alert('Là, ça va !')

// ==============================================================

// let number;
// let i;

// number = parseInt(prompt('Entrez un nombre :'))
// i = 0

// while (i < 10) {
//     i++
//     number += 1
//     alert(`${number}`)
// }

// ==============================================================

// let number, numb;
// numb = [];

// function valeur(){
//     number = parseInt(prompt('Entrez un nombre pour afficher les 10 autres suivants:'))
// }
// valeur()

// while(isNaN(number)) {
//     alert('Impossible !');
//     valeur()
// }

// for(i = 0; i < 10; i++) {
//     number += 1
//     numb.push(number);
// }
// alert(numb.join('-'));

// ==============================================================

// let N, myArray;

// N = parseInt(prompt('Entrez un nombre à multiplier : '));
// myArray = [`La table de multiplication de ${N} est:`];

// for(i = 0; i <= 10; i++) {
//     myArray.push(`${N} x ${i} = ${N*i}`)
// }
// alert(myArray.join('\n'));

// ==============================================================

// let N, result, som;
// N = parseInt(prompt('Entrez un nombre:'));
// som = 1;

// for(i = 1; i <= N; i++) {
//     som *= i;
// }
// alert(som);

// ==============================================================

let N, PG, IPG, i;
PG = 0;

for(i = 1; i <= 4; i++) {
    N = parseInt(prompt('Entrez un nombre'));
    if (i == 1 || N > PG) {
        PG = N;
        IPG = i;
    };
};
alert(`Le plus grand nombre que vous avez entré est ${PG}, c'était au ${IPG}ème saisie !`);
























