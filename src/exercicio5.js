function revertString(str) {
    let revertStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        revertStr += str[i];
    }

    return revertStr;
}

const string = process.argv[2]

if (!string) {
    console.log('Por favor, insira uma string.');
    process.exit();
}

const stringInvertida = revertString(string);
console.log('String original:', string);
console.log('String invertida:', stringInvertida);

// para rodar o código acima, abra um terminal na pasta src e execute o comando abaixo:
// node exercicio5.js + <string>
// Exemplo: node exercicio5.js 'teste'

