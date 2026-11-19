const botoesSociais = document.querySelectorAll("#redes-sociais a");
const amplitude = 6;
const velocidade = 0.002;
const inicio = performance.now();

botoesSociais.forEach((botao, indice) => {
    botao.addEventListener("mouseenter", () => {
        botao.classList.add("flutuacao-pausada");
    });

    botao.addEventListener("mouseleave", () => {
        botao.classList.remove("flutuacao-pausada");
    });
});

function animarBotoes(tempoAtual) {
    botoesSociais.forEach((botao, indice) => {
        if (botao.classList.contains("flutuacao-pausada")) {
            return;
        }

        const deslocamento = Math.sin((tempoAtual - inicio) * velocidade + indice * 1.5) * amplitude;
        botao.style.setProperty("--float-y", `${deslocamento}px`);
    });

    requestAnimationFrame(animarBotoes);
}

requestAnimationFrame(animarBotoes);
