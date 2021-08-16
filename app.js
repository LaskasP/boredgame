const maxPlayers = 6;
let activePlayers = 2;
let resetGameButton = document.querySelector(".reset-game")
let playerDeleteButton = document.querySelector(".player-delete-button")

const playerDelete = (ev) => {
    ev.target.closest(".col-player").remove()
}

resetGameButton.addEventListener('click', playerDelete)



playerDeleteButton.addEventListener('click', playerDelete)