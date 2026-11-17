const faixaCarrossel = document.querySelector("#carrossel article");

if (faixaCarrossel) {
    const imagensOriginais = [...faixaCarrossel.children];
    let carrosselPausado = false;

    imagensOriginais.forEach((imagem) => {
        faixaCarrossel.append(imagem.cloneNode(true));
    });

    faixaCarrossel.addEventListener("mouseenter", () => {
        carrosselPausado = true;
    });

    faixaCarrossel.addEventListener("mouseleave", () => {
        carrosselPausado = false;
    });

    function moverCarrossel() {
        if (!carrosselPausado) {
            faixaCarrossel.scrollLeft += 0.7;

            const limite = faixaCarrossel.scrollWidth / 2;
            if (faixaCarrossel.scrollLeft >= limite) {
                faixaCarrossel.scrollLeft -= limite;
            }
        }

        requestAnimationFrame(moverCarrossel);
    }

    requestAnimationFrame(moverCarrossel);
}
