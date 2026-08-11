/*
    HISTÓRIA EM JOGO
    Fascismo e Nazismo

    Projeto educativo para Ensino Médio.
*/


// ============================================
// BANCO DE PERGUNTAS
// ============================================

const perguntas = [

    {
        fase: 1,
        categoria: "CONTEXTO HISTÓRICO",
        pergunta: "Qual acontecimento contribuiu fortemente para a crise política e econômica que atingiu a Europa após 1918?",
        alternativas: [
            "A Primeira Guerra Mundial",
            "A Revolução Industrial",
            "A Guerra Fria",
            "A chegada do homem à Lua"
        ],
        correta: 0,
        explicacao: "A Primeira Guerra Mundial deixou enormes perdas humanas, destruição econômica e instabilidade política na Europa."
    },

    {
        fase: 1,
        categoria: "CONTEXTO HISTÓRICO",
        pergunta: "Em qual país o fascismo chegou ao poder na década de 1920?",
        alternativas: [
            "França",
            "Itália",
            "Alemanha",
            "Espanha"
        ],
        correta: 1,
        explicacao: "O fascismo italiano chegou ao poder com Benito Mussolini após a Marcha sobre Roma, em 1922."
    },

    {
        fase: 2,
        categoria: "FASCISMO",
        pergunta: "Quem foi o principal líder do regime fascista italiano?",
        alternativas: [
            "Benito Mussolini",
            "Adolf Hitler",
            "Joseph Stalin",
            "Winston Churchill"
        ],
        correta: 0,
        explicacao: "Benito Mussolini foi o principal líder do fascismo italiano e governou como ditador."
    },

    {
        fase: 2,
        categoria: "FASCISMO",
        pergunta: "Qual característica esteve associada ao fascismo italiano?",
        alternativas: [
            "Defesa do pluralismo político",
            "Fortalecimento do Estado autoritário",
            "Abolição do nacionalismo",
            "Fim da propaganda política"
        ],
        correta: 1,
        explicacao: "O fascismo defendia um Estado autoritário, nacionalista e contrário ao pluralismo político."
    },

    {
        fase: 3,
        categoria: "NAZISMO",
        pergunta: "Em que país o nazismo chegou ao poder em 1933?",
        alternativas: [
            "Itália",
            "Alemanha",
            "Polônia",
            "França"
        ],
        correta: 1,
        explicacao: "Adolf Hitler foi nomeado chanceler da Alemanha em janeiro de 1933."
    },

    {
        fase: 3,
        categoria: "NAZISMO",
        pergunta: "Qual era uma característica central da ideologia nazista?",
        alternativas: [
            "Defesa da igualdade racial",
            "Defesa do pluralismo partidário",
            "Racismo e antissemitismo",
            "Descentralização do poder"
        ],
        correta: 2,
        explicacao: "O nazismo defendia uma visão racial hierarquizada e promoveu o antissemitismo, levando à perseguição e ao genocídio de milhões de pessoas."
    },

    {
        fase: 4,
        categoria: "COMPARE",
        pergunta: "Qual característica pode ser encontrada tanto no fascismo italiano quanto no nazismo alemão?",
        alternativas: [
            "Defesa da democracia liberal",
            "Autoritarismo e culto ao líder",
            "Fim da propaganda estatal",
            "Separação completa entre Estado e política"
        ],
        correta: 1,
        explicacao: "Ambos os regimes apresentavam forte autoritarismo, propaganda política e concentração de poder em torno de uma liderança."
    },

    {
        fase: 4,
        categoria: "COMPARE",
        pergunta: "Qual diferença é importante destacar entre fascismo e nazismo?",
        alternativas: [
            "O nazismo incorporou uma política racial e antissemita especialmente central e radical",
            "O fascismo italiano nunca foi autoritário",
            "O nazismo defendia democracia multipartidária",
            "O fascismo italiano não utilizava propaganda"
        ],
        correta: 0,
        explicacao: "Embora compartilhassem características autoritárias e nacionalistas, o racismo biológico e o antissemitismo tiveram papel central na ideologia e nas políticas nazistas."
    },

    {
        fase: 5,
        categoria: "CONSEQUÊNCIAS",
        pergunta: "O que foi o Holocausto?",
        alternativas: [
            "Um tratado econômico europeu",
            "O genocídio sistemático de judeus e a perseguição de diversos outros grupos pelo regime nazista e seus colaboradores",
            "Uma eleição alemã",
            "Uma aliança militar entre países"
        ],
        correta: 1,
        explicacao: "O Holocausto foi o genocídio sistemático de cerca de seis milhões de judeus europeus pelos nazistas e seus colaboradores, além da perseguição e assassinato de outros grupos."
    },

    {
        fase: 5,
        categoria: "CONSEQUÊNCIAS",
        pergunta: "Em que ano terminou a Segunda Guerra Mundial na Europa?",
        alternativas: [
            "1939",
            "1941",
            "1945",
            "1950"
        ],
        correta: 2,
        explicacao: "A Alemanha nazista se rendeu em maio de 1945, encerrando a guerra na Europa."
    }

];


// ============================================
// VARIÁVEIS
// ============================================

let perguntaAtual = 0;
let pontuacao = 0;
let vidas = 3;
let acertos = 0;
let erros = 0;
let respondeu = false;


// ============================================
// ELEMENTOS
// ============================================

const telaInicio = document.getElementById("telaInicio");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");
const telaCronologia = document.getElementById("telaCronologia");

const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");
const feedbackElemento = document.getElementById("feedback");

const pontuacaoElemento = document.getElementById("pontuacao");
const vidasElemento = document.getElementById("vidas");

const faseAtualElemento = document.getElementById("faseAtual");
const tituloFaseElemento = document.getElementById("tituloFase");
const categoriaElemento = document.getElementById("categoria");

const numeroPerguntaElemento = document.getElementById("numeroPergunta");
const totalPerguntasElemento = document.getElementById("totalPerguntas");
const questaoNumeroElemento = document.getElementById("questaoNumero");

const progressElemento = document.getElementById("progress");

const btnProxima = document.getElementById("btnProxima");


// ============================================
// INICIAR
// ============================================

function iniciarJogo() {

    perguntaAtual = 0;
    pontuacao = 0;
    vidas = 3;
    acertos = 0;
    erros = 0;

    atualizarCabecalho();

    mostrarTela(telaJogo);

    carregarPergunta();
}


// ============================================
// CARREGAR PERGUNTA
// ============================================

function carregarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    const numero = perguntaAtual + 1;

    const porcentagem =
        (numero / perguntas.length) * 100;


    // Informações da pergunta

    perguntaElemento.textContent =
        pergunta.pergunta;

    categoriaElemento.textContent =
        pergunta.categoria;

    tituloFaseElemento.textContent =
        `Fase ${pergunta.fase}`;

    numeroPerguntaElemento.textContent =
        numero;

    totalPerguntasElemento.textContent =
        perguntas.length;

    questaoNumeroElemento.textContent =
        String(numero).padStart(2, "0");

    progressElemento.style.width =
        `${porcentagem}%`;


    // Limpa respostas anteriores

    alternativasElemento.innerHTML = "";

    feedbackElemento.className =
        "feedback";

    feedbackElemento.innerHTML = "";


    btnProxima.classList.remove("enabled");

    btnProxima.disabled = true;


    // Criar alternativas

    pergunta.alternativas.forEach(
        (alternativa, indice) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.innerHTML = `
                <span class="answer-letter">
                    ${String.fromCharCode(65 + indice)}
                </span>

                <span>
                    ${alternativa}
                </span>
            `;

            button.onclick = () =>
                responder(indice, button);

            alternativasElemento.appendChild(button);
        }
    );
}


// ============================================
// RESPONDER
// ============================================

function responder(indice, botao) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".answer");


    botoes.forEach(button => {
        button.classList.add("disabled");
    });


    // RESPOSTA CORRETA

    if (indice === pergunta.correta) {

        botao.classList.add("correct");

        pontuacao += 100;

        acertos++;

        feedbackElemento.className =
            "feedback show correct";

        feedbackElemento.innerHTML = `
            <strong>✓ CORRETO!</strong><br>
            ${pergunta.explicacao}
        `;

    }

    // RESPOSTA ERRADA

    else {

        botao.classList.add("wrong");

        botoes[pergunta.correta]
            .classList.add("correct");

        vidas--;

        erros++;

        feedbackElemento.className =
            "feedback show wrong";

        feedbackElemento.innerHTML = `
            <strong>✕ INCORRETO!</strong><br>
            ${pergunta.explicacao}
        `;
    }


    atualizarCabecalho();

    btnProxima.classList.add("enabled");

    btnProxima.disabled = false;
}


// ============================================
// PRÓXIMA PERGUNTA
// ============================================

function proximaPergunta() {

    if (!respondeu) {
        return;
    }

    perguntaAtual++;

    if (
        perguntaAtual >= perguntas.length ||
        vidas <= 0
    ) {

        finalizarJogo();

        return;
    }

    carregarPergunta();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================
// ATUALIZAR CABEÇALHO
// ============================================

function atualizarCabecalho() {

    pontuacaoElemento.textContent =
        pontuacao;

    vidasElemento.textContent =
        "❤️".repeat(vidas) +
        "🖤".repeat(3 - vidas);

    if (perguntas[perguntaAtual]) {

        faseAtualElemento.textContent =
            perguntas[perguntaAtual].fase;
    }
}


// ============================================
// FINALIZAR
// ============================================

function finalizarJogo() {

    mostrarTela(telaFinal);

    document.getElementById(
        "pontuacaoFinal"
    ).textContent = pontuacao;

    document.getElementById(
        "acertosFinal"
    ).textContent = acertos;

    document.getElementById(
        "errosFinal"
    ).textContent = erros;


    const percentual =
        Math.round(
            (acertos / perguntas.length) * 100
        );


    document.getElementById(
        "percentualFinal"
    ).textContent = `${percentual}%`;


    const titulo =
        document.getElementById(
            "resultadoTitulo"
        );

    const mensagem =
        document.getElementById(
            "resultadoMensagem"
        );

    const icone =
        document.getElementById(
            "resultadoIcone"
        );


    if (vidas <= 0) {

        icone.textContent = "!";
        titulo.textContent = "Fim de jogo";
        mensagem.textContent =
            "Suas vidas acabaram. Revise o conteúdo e tente novamente.";

    }

    else if (percentual >= 80) {

        icone.textContent = "★";
        titulo.textContent = "Excelente!";
        mensagem.textContent =
            "Você demonstrou um ótimo domínio do conteúdo histórico.";

    }

    else if (percentual >= 60) {

        icone.textContent = "✓";
        titulo.textContent = "Muito bem!";
        mensagem.textContent =
            "Você conseguiu compreender boa parte do conteúdo.";

    }

    else {

        icone.textContent = "?";
        titulo.textContent = "Continue estudando";
        mensagem.textContent =
            "Você concluiu o desafio. Aproveite para revisar os acontecimentos históricos.";
    }
}


// ============================================
// REINICIAR
// ============================================

function reiniciarJogo() {

    iniciarJogo();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================
// CRONOLOGIA
// ============================================

function mostrarCronologia() {

    mostrarTela(telaCronologia);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================
// VOLTAR AO INÍCIO
// ============================================

function voltarInicio() {

    mostrarTela(telaInicio);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================
// TROCAR TELA
// ============================================

function mostrarTela(tela) {

    const telas = [
        telaInicio,
        telaJogo,
        telaFinal,
        telaCronologia
    ];

    telas.forEach(item => {

        item.classList.remove("active");

    });

    tela.classList.add("active");
}


// ============================================
// TECLADO
// ============================================

document.addEventListener(
    "keydown",
    event => {

        if (!telaJogo.classList.contains("active")) {
            return;
        }

        const botoes =
            document.querySelectorAll(".answer");

        // A, B, C ou D

        if (
            ["a", "b", "c", "d"]
                .includes(event.key.toLowerCase())
        ) {

            const indice =
                event.key.toLowerCase()
                    .charCodeAt(0) - 97;

            if (botoes[indice]) {

                botoes[indice].click();
            }
        }

        // Enter = próxima

        if (
            event.key === "Enter" &&
            respondeu
        ) {

            proximaPergunta();
        }
    }
);