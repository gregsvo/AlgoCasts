// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // Solution One:
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    // Solution Two:
    // let text = '';
    // debugger;
    // for (let i = str.split('').length - 1; i >= 0; i--) {
    //     text += str[i];
    // }
    // return text;

    // Solution Three:
    // let reversed = '';
    // for (let character of str){
    //     reversed = character + reversed;
    // }
    // return reversed;

    // Solution Four:
    // return str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');

    // Solution Five:
    // return str.split('').reduce((reversed, character) => character + reversed, '');
}

reverse('svoboda');

module.exports = reverse;
