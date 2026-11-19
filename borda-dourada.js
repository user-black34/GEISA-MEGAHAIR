const artigosDourados = document.querySelectorAll(
    "#inicio article, #imagens > div article"
);
const tonsDourados = [
    { borda: "#806F50", brilho: "rgba(128, 111, 80, 0.22)" },
    { borda: "#B08D3E", brilho: "rgba(176, 141, 62, 0.3)" },
    { borda: "#F0D77A", brilho: "rgba(240, 215, 122, 0.38)" },
    { borda: "#C9A84C", brilho: "rgba(201, 168, 76, 0.3)" },
];
const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (artigosDourados.length && !movimentoReduzido.matches) {
    let indiceTom = 0;

    function alternarTomDourado() {
        artigosDourados.forEach((artigo) => {
            artigo.style.setProperty(
                "--article-border-color",
                tonsDourados[indiceTom].borda
            );
            artigo.style.setProperty(
                "--article-glow-color",
                tonsDourados[indiceTom].brilho
            );
        });

        indiceTom = (indiceTom + 1) % tonsDourados.length;
    }

    alternarTomDourado();
    window.setInterval(alternarTomDourado, 850);
}
