const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    let code, decode = '';

    for (let i = 0; i < expr.length; i += 10) {
        code = expr.slice(i, i + 10);

        if (code == '**********') {
            result += ' ';
        } else {

            for (let i = 0; i < 10; i += 2) {

                if (code.slice(i, i + 2) == '10') {
                    decode += '.';
                }

                else if (code.slice(i, i + 2) == '11') {
                    decode += '-';
                }
            }
            result += MORSE_TABLE[decode];
            decode = '';
        }
    }
    return result;

}

module.exports = {
    decode
}