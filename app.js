// Variaveis
let numSecret = gerarNumAleatorio();

// Função alterar texto
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
}

// Gerar número aleatório
function gerarNumAleatorio(){
    return parseInt(Math.random() * 100 + 1);
 }

 exibirTextoNaTela(`h1`,'Jogo do Número Secreto')
 exibirTextoNaTela('p','Selecione um número entre 1 e 100');

// Verificar chute
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    while (chute != numSecret) {
        exibirTextoNaTela(`h1`,'Jogo do Número Secreto')
        if (chute < numSecret){
            exibirTextoNaTela(`p`,`Chute um número mais alto`);
        } else{
            exibirTextoNaTela(`p`,`Chute um número mais baixo`);
        }
    }

    // if (chute == numSecret){
    //     exibirTextoNaTela(`h1`,`Acertou!`);
    //     exibirTextoNaTela(`p`,`Parabéns! Voce descobriu o número secreto!`);
    // } else if(chute < numSecret){
    //     exibirTextoNaTela(`p`,`Faça um chute mais alto`);
    // } else{
    //     exibirTextoNaTela(`p`,`Faça um chute mais baixo`);
    // }
}


// alert('Bem Vindo! Você acabou de iniciar O JOGO DO NÚMERO SECRETO!');
// alert('Caso esteja se questionando, NÃO você não tem escolha a opção de sair! MAS...');
// alert('Você pode escolher ou PEREÇER COMPLETAMENTE SEM NEM MESMO TENTAR... Sim, tentar, porque conseguir SERIA LUXO DEMAIS PARA ALGUÉM QUE MAL[...]');
// alert('[....]');
// alert('(limpa a voz) Acho que deu para entender certo?');
// let kick = prompt('Então vamos lá, faça seu primeiro chute de 0 até 100 criança: ');

// let numMax = 100;
// // Gera um número pseudo aleatório de 0 a 100
// let numSecret = Math.floor(Math.random() * numMax + 1);
// // Informa o n.s. ao desenvolvedor
// console.log(numSecret);
// let tryy = 1;

// // Enquanto chute for diferente do número secreto
// while (kick != numSecret) {
//     kick = prompt(`Hahaha (ri de maneira sarcastica) você é péssimo! Tente de novo, de 0 até ${numMax}: `);
//     tryy++;
//     if (kick == numSecret) {
//         break;
//     } else {
//         if (kick > numSecret) {
//             alert(`Parece que seu chute foi ALTO demais!`);
//         } else {
//             alert(`Parece que seu chute foi BAIXO demais!`);
//         }
//     }
// }

// let wordTryy = tryy < 1 ? `Número de tentativas: ${tryy}` : `Com apenas uma tentativa!`;
// alert(`É... Parece que você ACERTOU o número secreto! >:/ ${wordTryy}`);