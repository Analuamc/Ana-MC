const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const btnReiniciar = document.querySelector(".btn-reiniciar");

const perguntas = [
    {
        enunciado: "Quais foram as duas cidades-estado italianas que se enfrentaram na famosa Guerra dos Baldes, em 1325?",
        alternativas: [
            { texto: "Bolonha e Módena", correta: true },
            { texto: "Florença e Veneza", correta: false },
            { texto: "Roma e Nápoles", correta: false }
        ]
    },
    {
        enunciado: "Apesar da lenda popular afirmar que a guerra começou pelo roubo de um balde de madeira, qual foi o verdadeiro motivo por trás do conflito?",
        alternativas: [
            { texto: "A rivalidade política e territorial entre Guelfos (pró-Papa) e Gibelinos (pró-Imperador)", correta: true },
            { texto: "Uma disputa comercial pelo monopólio da produção de azeite na região", correta: false },
            { texto: "O sequestro do governador de Bolonha durante um banquete medieval", correta: false }
        ]
    },
    {
        enunciado: "Qual foi o desfecho surpreendente da Batalha de Zappolino, o único grande confronto militar dessa guerra?",
        alternativas: [
            { texto: "Mesmo em grande desvantagem numérica, Módena derrotou o exército de Bolonha", correta: true },
            { texto: "Bolonha venceu facilmente e obrigou Módena a pagar mil moedas de ouro", correta: false },
            { texto: "Os dois exércitos recuaram sem lutar e decidiram tudo em uma corrida de cavalos", correta: false }
        ]
    },
    {
        enunciado: "Segundo os historiadores, em que momento o famoso balde de carvalho foi realmente levado pelos soldados de Módena?",
        alternativas: [
            { texto: "Após a batalha, retirado de um poço perto dos portões de Bolonha como troféu de humilhação", correta: true },
            { texto: "Meses antes da guerra, durante um assalto noturno ao palácio municipal", correta: false },
            { texto: "Durante a assinatura do tratado de paz, como um símbolo de reconciliação", correta: false }
        ]
    },
    {
        enunciado: "O que aconteceu com o balde que deu nome ao conflito de 1325?",
        alternativas: [
            { texto: "Ele foi queimado em praça pública logo após o fim da guerra", correta: false },
            { texto: "Foi devolvido a Bolonha no século XIX para selar a paz definitiva", correta: false },
            { texto: "Continua preservado até hoje em Módena, onde uma réplica fica exposta na Torre Ghirlandina", correta: true }
        ]
    }
];

let atual = 0; 
let pontuacao = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa.correta));
        caixaAlternativas.appendChild(botaoAlternativas);
    });
}

function respostaSelecionada(isCorreta) {
    if (isCorreta) {
        pontuacao++;
    }
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quiz Concluído!";
    
    let mensagem = "";
    if (pontuacao === perguntas.length) {
        mensagem = "Incrível! Você conhece cada detalhe dessa rivalidade medieval entre Bolonha e Módena!";
    } else if (pontuacao >= 3) {
        mensagem = "Muito bom! Você mandou bem nas curiosidades da Guerra dos Baldes.";
    } else {
        mensagem = "Parece que você caiu na lenda do balde! Jogue novamente para descobrir toda a história.";
    }
    
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas. \n${mensagem}`;
    caixaAlternativas.textContent = ""; 
    btnReiniciar.style.display = "block";
}

btnReiniciar.addEventListener("click", () => {
    atual = 0;
    pontuacao = 0;
    textoResultado.textContent = "";
    btnReiniciar.style.display = "none";
    mostraPergunta();
});

mostraPergunta();
