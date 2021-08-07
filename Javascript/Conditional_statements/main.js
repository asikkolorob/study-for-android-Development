// > , < , >= , <=   this operetor for number
// == , ===        and this is for streng

// var Age = 19;

// if (Age >= 21) {
//     console.log('Cheleder biyer boyos hoyeche');
// }
// else if (Age >= 18) {
//     console.log('meyder biyer boyos hoyeche',', but cheleder hoyni');
// }
// else {
//     console.log('mey and chele karo biyer boyos hoyni');
// }

//tarrary operator
const age = 19;
const gender = 'Female';

(age >= 21 && gender == 'Male') || (age >= 18 && gender == 'Female') 
? console.log('biyer boyosh hoyeche') 
: console.log('karo biyer boyosh hoyni');