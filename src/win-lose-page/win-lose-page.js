let gameModeToRematch = null;
let resultInformations = null;
const standardRematchUrl = "./../standard-mode/standard_mode.html"
const againstTimeRematchUrl = "./../against-time-mode/against_time_mode.html"

const showMatchResult = (result, gameMode) => {
  gameModeToRematch = gameMode;

  const resultMapper = {
    defeat: {
      image: "../assets/icons/fail.svg",
      message: "Ops, nao foi dessa vez!"
    },
    victory: {
      image: "../assets/icons/trophy.svg",
      message: "Parabéns, você ganhou!"
    }
  };

  resultInformations = resultMapper[result];

  document.body.innerHTML += `
    <div class="modal-aviso-fundo">
      <div class="modal-aviso-janela">
        <img src="${resultInformations.image}" alt="${resultInformations.message}" class="modal-aviso-icone">
        <div style="margin: 1rem 0;">${resultInformations.message}</div>
        <div class="modal-aviso-botoes">
        <input class="default-button botao-sair" type="submit" value="Sair" onclick="closeMatchResult()">
        <input class="default-button botao-jogar" type="submit" value="Jogar novamente" onclick="startRematch()">
        </div>
      </div>
    </div>
    `;
}

const closeMatchResult = () => {
  document.querySelector(".modal-aviso-fundo").remove();
  backToMenu()
}

const startRematch = () => {
  gameModeToRematch === 'standard'
    ? window.open(standardRematchUrl, "_self")
    : window.open(againstTimeRematchUrl, "_self")
}