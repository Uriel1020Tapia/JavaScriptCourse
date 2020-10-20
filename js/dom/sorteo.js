const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      randomNumber = Math.floor(Math.random() * $players.length),
      winner = $players[randomNumber];

    return `🎉🎉El ganador es: <b>${winner.textContent}<b> 🎉🎉`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      const $resultsDrawModal = document.getElementById("resultsDraw"),
        $winnerPlayer = d.getElementById("winner-player"),
        $closeModalSelector = d.querySelectorAll("[data-dismiss]");

      $resultsDrawModal.style.visibility = "visible";
      $resultsDrawModal.style.opacity = 1;
      $winnerPlayer.innerHTML = result;

      $closeModalSelector.forEach((el) => {
        el.addEventListener("click", (e) => {
          $resultsDrawModal.style.visibility = "hidden";
          $resultsDrawModal.style.opacity = 0;
        });
      });
    }
  });
}
