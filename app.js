

const maxPlayers = 6;
let activePlayersIds = [];
let players = []
let resetGameButton = document.querySelector(".reset-game")
let playerDeleteButton = document.querySelector(".player-delete-button")
let list = document.querySelector("#list")
let plusbutton = document.querySelector(".point-plus")
let minusbutton = document.querySelector(".point-minus")


const checkForMaxPlayers = () => (players.length === maxPlayers) ? true : false

const getNextId = () => (players.length === 0) ? 0 : players[players.length - 1].id + 1

const createPlayer = () => {
    if (checkForMaxPlayers()) {
        console.log("max players!!")
        return
    }
    newPlayer = new player(getNextId())
    console.log(getNextId())
    console.log(newPlayer)
    players.push(newPlayer)
    list.insertAdjacentHTML('afterbegin', newPlayer.getPlayerCardHTML())

}

const addPlayer = (ev) => {
    if (ev.target && ev.target.matches(".add-player-button")) {
        createPlayer()
    }
}

const deletePlayer = (ev) => {
    if (ev.target && ev.target.matches(".player-delete-button")) {
        let id = ev.target.id.replace("delete-button-", "")
        document.querySelector(`#card-${id}`).remove()

    }
}
list.addEventListener('click', (ev) => {
    addPlayer(ev)
    deletePlayer(ev)
})

resetGameButton.addEventListener('click', () => {
    let childrens = document.querySelectorAll('#list .col-player')
    for (let i = 0; i < childrens.length; i++) {
        childrens[i].remove()
    }
    players = []
    resetTimer()
})

const main = () => {
    startTimer()
    createPlayer()
    createPlayer()
}

window.onload = main
