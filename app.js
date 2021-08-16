const maxPlayers = 6;
let activePlayers = 2;
let resetGameButton = document.querySelector(".reset-game")
let playerDeleteButton = document.querySelector(".player-delete-button")
const list = document.querySelector("#list")


playerDeleteButton.addEventListener('click', (ev) => {
    ev.target.closest(".col-player").remove()
})


resetGameButton.addEventListener('click', () => {
    let childrens = document.querySelectorAll('#list .col-player')
    for (let i = 0; i < childrens.length; i++) {
        childrens[i].remove()
    }
})



