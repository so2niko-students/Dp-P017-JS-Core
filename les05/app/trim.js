function trim(str = '') {
    if (str == '') {
        return "";
    }
    const strLen = str.length;
    let answ = '';
    let start = 0;
    let end = strLen - 1;
    let notStart = true, notEnd = true;

    for (let i = 0; i < strLen; i++) {
        if (!(notEnd || notStart)) {
            break;
        }

        if (notStart && isSpace(str[i])) {
            start = i + 1;
        } else {
            notStart = false;
        }
        if (notEnd && isSpace(str[strLen - i - 1])) {
            end = strLen - i - 2;
        } else {
            notEnd = false;
        }
    }

    answ = substr(str, start, end);
    return answ;
}
function isSpace(sym = "") {
    const spaces = ["\t", " ", "\n"];
    for (let i = 0; i < 3; i++) {
        if (spaces[i] == sym) {
            return true;
        }
    };
    return false;
}

function substr(str, start, end) {
    let answ = '';
    for (let i = start; i <= end; i++) {
        answ += str[i];
    }
    return answ;
}

console.log('Пустая строка',
    ''.trim(),
    ''.trim() == trim(''));

console.log("'   text   '",
    `'${'   text   '.trim()}'`,
    '   text   '.trim() == trim('   text   '));


console.log(`'   text  
 '`,
    `'${`   text  
    `.trim()}'`,
    `   text  
    `.trim() == trim(`   text  
      `));