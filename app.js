

const maxPlayers = 6;
let activePlayersIds = [];
let players = []
let resetGameButton = document.querySelector(".reset-game")
let playerDeleteButton = document.querySelector(".player-delete-button")
let addPlayerButton = document.querySelector(".add-player-button")
let list = document.querySelector("#list")
let plusbutton = document.querySelector(".point-plus")
let minusbutton = document.querySelector(".point-minus")


const checkForMaxPlayers = () => {
    return (activePlayersIds.length === maxPlayers) ? true : false
}
const getNextId = () => {
    if (activePlayersIds.length === 0) {
        activePlayersIds.push(0)
        return 0;
    } else {
        nextId = activePlayersIds[activePlayersIds.length - 1] + 1
        activePlayersIds.push(nextId)
        return nextId;
    }
}
const createPlayer = () => {
    if (checkForMaxPlayers()) {
        console.log("max players!!")
        return
    }
    newPlayer = new player(getNextId())
    players.push(newPlayer)
    console.log(newPlayer.getId())
}
addPlayerButton.addEventListener('click', () => {
    createPlayer()
})
plusbutton.addEventListener('click', (ev) => {
    //console.log(ev.target.closest(".points").innerText)
})

minusbutton.addEventListener('click', (ev) => {
    //console.log(ev.target.closest(".points").innerText)
})

playerDeleteButton.addEventListener('click', (ev) => {
    ev.target.closest(".col-player").remove()
})


resetGameButton.addEventListener('click', () => {
    let childrens = document.querySelectorAll('#list .col-player')
    for (let i = 0; i < childrens.length; i++) {
        childrens[i].remove()
    }
    activePlayersIds = []
    resetTimer()
})

