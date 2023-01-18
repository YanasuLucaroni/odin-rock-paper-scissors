let AIChoose;
let player;
let AIOptions = ["piedra", "papel", "tijera"];

function playerChoose() {
  player = prompt("Ingrese su elección: Papel, Piedra o Tijera").toLowerCase();
  return;
}

function getComputerChoice() {
  console.log((AIChoose = AIOptions[Math.floor(Math.random() * 3)]));
  return AIChoose;
}

function vs() {
  switch (player) {
    case "piedra":
      if (AIChoose == "piedra") {
        console.log("Empate, va de nuevo");
        return "Empate, va de nuevo";
      } else if (AIChoose == "tijera") {
        console.log("Ganaste sos un anashe");
        score++;
        return "Ganaste sos un anashe";
      } else {
        console.log("Perdiste no sos un anashe");
        return "Perdiste no sos un anashe ";
      }
    case "tijera":
      if (AIChoose == "tijera") {
        console.log("Empate, va de nuevo");
        return "Empate, va de nuevo";
      } else if (AIChoose == "papel") {
        console.log("Ganaste sos un anashe");
        score++;
        return "Ganaste sos un anashe";
      } else {
        console.log("Perdiste no sos un anashe");
        return "Perdiste no sos un anashe ";
      }
    case "papel":
      if (AIChoose == "papel") {
        console.log("Empate, va de nuevo");
        return "Empate, va de nuevo";
      } else if (AIChoose == "piedra") {
        console.log("Ganaste sos un anashe");
        score++;
        return "Ganaste sos un anashe";
      } else {
        console.log("Perdiste no sos un anashe");
        return "Perdiste no sos un anashe ";
      }
  }
}

let score = 0;
for (let i = 0; i < 5; i++) {
  playerChoose();
  getComputerChoice();
  vs();
}
alert(`Ganaste ${score} rondas`);
