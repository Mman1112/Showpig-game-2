document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const gameText = document.getElementById("gameText");

  function startGame() {
    gameText.textContent = "The game has started! Raise your showpig!";
    // More features can go here
  }

  if (startButton) {
    startButton.addEventListener("click", startGame);
  }
});
