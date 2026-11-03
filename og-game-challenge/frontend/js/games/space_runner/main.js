import { Game } from "./game.js";
import { setupInput } from "./input.js";

const canvas = document.getElementById("gameCanvas");
const scoreElement = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const gameMessage = document.getElementById("gameMessage");
const levelElement = document.getElementById("level");
const retryBtn = document.getElementById("retryBtn");
const keybindsBtn = document.getElementById("keybindsBtn");
const keybindsPanel = document.getElementById("keybindsPanel");
const victoryCredits = document.getElementById("victoryCredits");
const victoryFinalScore = document.getElementById("victoryFinalScore");
const victoryAccuracy = document.getElementById("victoryAccuracy");

function resetVictoryCredits() {
  victoryCredits.hidden = true;
  victoryFinalScore.textContent = "0";
  victoryAccuracy.textContent = "0%";
}

setupInput();

const game = new Game(canvas, scoreElement, levelElement, gameMessage);

// Keep the portfolio API score flow while exposing the standalone victory UI.
const submitPortfolioScore = window.handleGameOver;

window.handleGameOver = function (gameId, finalScore, accuracy = 0) {
  if (game.victoryFinished) {
    gameMessage.textContent = `FINAL SCORE: ${finalScore}`;
    victoryFinalScore.textContent = finalScore;
    victoryAccuracy.textContent = `${accuracy}%`;
    victoryCredits.hidden = false;
  }

  return submitPortfolioScore(gameId, finalScore, accuracy, {
    showVictoryCredits: game.victoryFinished
  });
};

document.addEventListener("keydown", (event) => {
  if (event.repeat) {
      return;
    }

    const key = event.key.toLowerCase();

  if (key === "p") {
      event.preventDefault();
      game.togglePause();
    }
});
startBtn.addEventListener("click", function () {
  resetVictoryCredits();
  game.start();
});

retryBtn.addEventListener("click", function () {
  resetVictoryCredits();
  retryBtn.hidden = true;
  startBtn.hidden = false;
  game.start();
});

keybindsBtn.addEventListener("click", function () {
  const willOpen = keybindsPanel.hidden;

  keybindsPanel.hidden = !willOpen;
  keybindsBtn.setAttribute("aria-expanded", String(willOpen));
});

game.intro.drawPreview(game.ctx);

// ═══════════════════════════════════════
// EXPAND MODE
// ═══════════════════════════════════════

const gameLayout = document.querySelector(".space-runner-layout");
const expandBtn = document.getElementById("expandBtn");
const exitExpandBtn = document.getElementById("exitExpandBtn");

if (expandBtn && exitExpandBtn && gameLayout) {
  expandBtn.addEventListener("click", () => {
    document.body.classList.add("space-runner-expanded");
    gameLayout.classList.add("space-runner-layout--expanded");

    expandBtn.hidden = true;
    exitExpandBtn.hidden = false;
  });

  exitExpandBtn.addEventListener("click", () => {
    document.body.classList.remove("space-runner-expanded");
    gameLayout.classList.remove("space-runner-layout--expanded");

    expandBtn.hidden = false;
    exitExpandBtn.hidden = true;
  });

  document.addEventListener("keydown", (event) => {
    if (event.repeat) {
      return;
    }

    // Passer la cinématique d'introduction
    if (event.code === "Space" && game.introActive) {
      event.preventDefault();
      game.skipIntro();
    }

    if (
      event.key === "Escape" &&
      !keybindsPanel.hidden
    ) {
      event.preventDefault();
      keybindsPanel.hidden = true;
      keybindsBtn.setAttribute("aria-expanded", "false");
      return;
    }

    if (
      event.key === "Escape" &&
      gameLayout.classList.contains("space-runner-layout--expanded")
    ) {
      event.preventDefault();
      document.body.classList.remove("space-runner-expanded");
      gameLayout.classList.remove("space-runner-layout--expanded");
      expandBtn.hidden = false;
      exitExpandBtn.hidden = true;
    }
  });
}
