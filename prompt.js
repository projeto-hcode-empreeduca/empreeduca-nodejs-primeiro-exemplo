const readline = require("readline");

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

prompt.question("Qual é o seu nome? ", (nome) => {

    prompt.question("Qual é a sua idade? ", (idade) => {

        prompt.question("Onde você mora? ", (lugar) => {

            console.log(`Seu nome é ${nome}. Você tem ${idade} anos e mora em ${lugar}.`);

            prompt.close();

        });

    });

});