let random = Math.floor(Math.random() * 21 - 10); // Includes -10 and 10
console.log('1:', random);
console.log(random > 0 ? 'Ye' : 'No');
console.log(random > 5 ? 'Winner' : random > 0 ? 'Ok' : 'Try again!');
let randomTwo = Math.floor(Math.random() * 21 - 10); // Includes -10 and 10
console.log('2:', randomTwo);
if (random > 5 && randomTwo > 5) {
    console.log('Good scores!');
} 
if (random < -9 || randomTwo < -9) {
    console.log('Minus nine!');
}
const message = random + randomTwo < 0 ? 'We have gone sub zero!' : null;
console.log('7:', message);