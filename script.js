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

// let N, PG, IPG, i, result;
// PG = 0;
// result = [];
// function error() {
//     alert('Impossible de continuer vous n\'avez pas entré un nombre !');
// }
// for(i = 1; i <= 4; i++) {
//     N = parseInt(prompt('Entrez un nombre'));
//     if(isNaN(N)) {
//         error();
//         break;
//     };
//     if (i == 1 || N > PG) {
//         PG = N;
//         IPG = i;
//     };
//     result.push(N);
// };
// alert(`Vous avez entré ${result.join(' - ')}\nParmis eux le plus grand nombre est ${PG}. \nIl a été saisie en position n°${IPG} !`);

// ==============================================================

// let N, PG, IPG, i, result;
// PG = 0;
// i = 0;
// result = [];

// do {
//     N = parseInt(prompt('Entrez un nombre (appuyer sur ESPACE pour arrêter) :'));
//     i++;
//     if(i == 1 || N > PG ) {
//         PG = N;
//         IPG = i;
//     };
//     result.push(N);
// } while (!isNaN(N));
// alert(`Vous avez entré : ${result.join(' - ')}\nParmis eux le plus grand nombre est ${PG}. \nIl a été saisie en position n°${IPG} !`);

// ==============================================================

// function transaction(){
//     let N1,N2, somdue, reste, NB10E, NB5E, result;
//     N1 = 1;
//     somdue = 0;
//     result = [];
//     do{
//         N1 = parseInt(prompt('Entrez le montant d\'un produit (entrez 0 s\'il y en a plus):'));
//         somdue += N1;
//         result.push(N1);
//     } while (N1 != 0);
//     alert('Maintenant entrez la somme de votre argent !')

//     N2 = parseInt(prompt('Vous avez versé :'))
//     reste = N2 - somdue;


//     if(reste < 0){
//         return alert('Votre argent est insuffisant pour l\'achat que vous tentez d\'effectuer');
//     };

//     alert(`La somme que nous devons vous rendre est: ${reste} €`);

//     NB10E = 0;
//     while (reste >= 10) {
//         NB10E++;
//         reste -= 10;
//     }
//     NB5E = 0;
//     if (reste >= 5) {
//         NB5E = 1;
//         reste -= 5;
//     }

//     alert(`La somme de votre achat est: ${somdue} € \nEn détail c'était: \n${result.join(' €\n')} \nVous avez versé : ${N2} € \nDétail de la rendue : \n${NB10E} billet(s) de 10 € \n${NB5E} billet de 5 € \n${reste} pièce(s) de 1 €`)
// }
// transaction();


// function transaction(){
//     let N1, N2, somdue, reste, NB5000A, NB2000A, NB1000A, NB500A, NB200A, NB100A, result, resteF;
//     N1 = 1;
//     somdue = 0;
//     result = [];
//     do{
//         N1 = parseInt(prompt(`Entrez le prix en AR d\'un produit que vous avez acheté (entrez 0 s\'il y en a plus) - ${somdue} AR:`));
//         somdue += N1;
//         result.push(N1);
//     } while (N1 != 0);

//     alert(`La somme à payer pour votre achat est ${somdue} AR \nMaintenant entrez la somme de votre argent !`);

//     N2 = parseInt(prompt(`Vous devez payer ${somdue} AR \nSomme de votre argent :`));
//     reste = N2 - somdue;


//     if(reste < 0){
//         return alert(`Votre argent est insuffisant pour l\'achat que vous tentez d\'effectuer \nDétail: \nSomme versée: ${N2} AR < Total à payer: ${somdue} AR`);
//     };

//     alert(`La somme que nous devons vous rendre est: ${reste} AR`);

//     NB5000A = 0;
//     while (reste >= 5000) {
//         NB5000A++;
//         reste -= 5000;
//     }
//     NB2000A = 0;
//     while (reste >= 2000 && reste < 5000) {
//         NB2000A++;
//         reste -= 2000;
//     }
//     NB1000A = 0;
//     while (reste >= 1000 && reste < 2000) {
//         NB1000A++;
//         reste -= 1000;
//     }
//     NB500A = 0;
//     while (reste >= 500 && reste < 1000) {
//         NB500A++;
//         reste -= 500;
//     }

//     NB200A = 0;
//     while(reste >= 200 && reste < 500) {
//         NB200A++;
//         reste -= 200;
//     }

//     NB100A = 0;
//     if (reste >= 100 && reste < 200) {
//         NB100A = 1;
//         reste -= 100;
//     }
//     resteF = NB5000A*5000 + NB2000A*2000 + NB1000A*1000 + NB500A*500 + NB200A*200 + NB100A*100

//     alert(`============= RESUME DE VOTRE ACHAT ============= \n${result.join(' AR\n')} \n\nTOTALE A PAYER : ${somdue} AR \nTOTALE VERSEE : ${N2} AR \nA RENDRE : ${resteF} AR \n\nDétail de la rendue : \n${NB5000A} billet(s) de 5000 AR \n${NB2000A} billet(s) de 2000 AR \n${NB1000A} billet(s) de 1000 AR \n${NB500A} billet(s) de 500 AR \n${NB200A} billet(s) de 200 AR \n${NB100A} billet de 100 AR`);
//     alert('Merci de votre visite. A bientôt !')
// }
// transaction();

// ==============================================================

// let mois;
// const saison1 = 'ÉTÉ';
// const saison2 = 'PRINTEMPS';
// const saison3 = 'HIVER';

// function numbmonth() {
//     mois = parseInt(prompt('Afin de connaître les différentes saisons du temps à Madagascar, \nEntrez un numéro de mois compris entre 1 et 12:'));
// }
// numbmonth();

// while(mois < 1 || mois > 12) {
//     alert(`${mois} ?? Ce numéro n'existe pas ! Recommencez la saisie`);
//     numbmonth();
// };

// switch (mois) {
//     case 1:
//         alert(`Nous sommes en Janvier c'est l'${saison1} !`);
//         break;

//     case 2:
//         alert(`Nous sommes en Février c'est l'${saison1} !`);
//         break;

//     case 3:
//         alert(`Nous sommes en Mars l'${saison1} prend fin et le ${saison2} commence !`);
//         break;

//     case 4:
//         alert(`Nous sommes en Avril c'est le ${saison2} !`);
//         break;

//     case 5:
//         alert(`Nous sommes en Mai le ${saison2} prend fin et l'${saison3} commence !`);
//         break;

//     case 6:
//         alert(`Nous sommes en Juin c'est l'${saison3} !`);
//         break;

//     case 7:
//         alert(`Nous sommes en Juillet c'est l'${saison3} !`);
//         break;

//     case 8:
//         alert(`Nous sommes en Aoùt c'est l'${saison3} !`);
//         break;

//     case 9:
//         alert(`Nous sommes en Septembre l'${saison3} prend fin et l'${saison1} commence !`);
//         break;

//     case 10:
//         alert(`Nous sommes en Octobre c'est l'${saison1} !`);
//         break;

//     case 11:
//         alert(`Nous sommes en Novembre c'est l'${saison1} !`);
//         break;

//     case 12:
//         alert(`Nous sommes en Décembre c'est l'${saison1} !`);
//         break;
// }


// let x, y;
// x = 4;
// y = 3;

// console.log(x%y);

// let a, b, q, r;

// a = 10;
// b = 3;
// q = 1;
// r = a;

// while(r >= b) {
//     r %= b;
//     q++;
// }
// console.log(`Le quotient ${q} et le reste ${r}`);

// ==============================================================

let caractere;
let NBA;
function saisie() {
    caractere = prompt('Entrez une lettre (appuyer sur " * " pour arrêter)');
}
NBA = 0;
do {
    saisie();
    if(caractere === 'a') {
        NBA += 1;
    }
} while (caractere != '*');

alert(`La lettre "a" est apparue ${NBA} fois !`);

// ==============================================================

// let x, r, p, bin, result;
// x = prompt('Entrez un nombre :'); 
// console.log(typeof(x));
// p = 1;
// bin = 0;
// result = [];

// do {
//     r = x%2;
//     bin += (r*p);
//     p *= 10;
//     x /= 2;
//     parseInt(x);
//     result.push(bin);
// } while (x != 0);
// z = typeof(bin)
// alert(result.join(''));
























