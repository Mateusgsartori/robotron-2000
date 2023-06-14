const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica");
const corRobo = document.getElementById("robotron");

let controleCor = 1;

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

const paths = [
  "img/robotron.png",
  "img/Robotron2000Amarelo.png",
  "img/Robotron2000Branco.png",
  "img/Robotron2000Preto.png",
  "img/Robotron2000Rosa.png",
  "img/Robotron2000Vermelho.png",
];

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(
      evento.target.dataset.pecas,
      evento.target.dataset.controle
    );
  });
});

corRobo.addEventListener("click", () => {
  corRobo.src = paths[controleCor];
  controleCor++;
  if (controleCor == paths.length) {
    controleCor = 0;
  }
});

function manipulaDados(op, controle) {
  const peca = controle.querySelector("[data-contador]");
  if (op === "+") {
    peca.value = parseInt(peca.value) + 1;
  } else {
    peca.value = parseInt(peca.value) - 1;
  }
}

function atualizaEstatisticas(peca, op) {
  if (op == "+") {
    estatisticas.forEach((elemento) => {
      elemento.textContent =
        parseInt(elemento.textContent) +
        pecas[peca][elemento.dataset.estatistica];
    });
  }
  if (op == "-") {
    estatisticas.forEach((elemento) => {
      elemento.textContent =
        parseInt(elemento.textContent) -
        pecas[peca][elemento.dataset.estatistica];
    });
  }
}
