// para rodar o código acima, abra um terminal na pasta src e execute o comando abaixo:
// node exercicio2.js + <número>
// Exemplo: node exercicio2.js 13

function fibonacciSequence(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

function isInFibonacciSequence(number, sequence) {
    return sequence.includes(number);
}

const numberToCheck = parseInt(process.argv[2]);

if (isNaN(numberToCheck)) {
    console.log('Por favor, insira um número válido.');
    process.exit();
}

const fibonacci = fibonacciSequence(numberToCheck);

if (isInFibonacciSequence(numberToCheck, fibonacci)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}

