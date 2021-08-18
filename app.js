

const maxPlayers = 6;
let activePlayersIds = [];
let players = []
let resetGameButton = document.querySelector(".reset-game")
let playerDeleteButton = document.querySelector(".player-delete-button")
let list = document.querySelector("#list")
let plusbutton = document.querySelector(".point-plus")
let minusbutton = document.querySelector(".point-minus")


const checkForMaxPlayers = () => (players.length === maxPlayers) ? true : false

const getNextId = () => (players.length === 0) ? 0 : players[players.length - 1].getId() + 1

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
    if (checkForMaxPlayers()) {
        document.querySelector(".col-add-player").remove()
    }
}

const addplayerbutton = () => {
    list.insertAdjacentHTML('beforeend', `
            <div class="col d-flex justify-content-center align-items-center col-add-player">
                <div type="button" class="add-player-button">+</div>
            </div>`)
}

const addPlayer = (ev) => {
    if (ev.target && ev.target.matches(".add-player-button")) {
        createPlayer()
    }
}

const deletePlayer = (ev) => {
    if (ev.target && ev.target.matches(".player-delete-button")) {
        let id = parseInt(ev.target.id.replace("delete-button-", ""))
        document.querySelector(`#card-${id}`).remove()
        if (checkForMaxPlayers()) {
            addplayerbutton()
        }
        players = players.filter(player => player.getId() != id)
    }
}

const refreshPoints = (target) => {
    document.querySelector(`#points-${target.getId()}`).innerText = `${target.getPoints()}`
}

const addPoint = (ev) => {
    if (ev.target && ev.target.matches(".point-plus")) {
        let id = parseInt(ev.target.id.replace("plus-", ""))
        target = players.find(target => target.getId() === id)
        target.setPoints(target.getPoints() + 1)
        refreshPoints(target)
    }
}
const minusPoint = (ev) => {
    if (ev.target && ev.target.matches(".point-minus")) {
        let id = parseInt(ev.target.id.replace("minus-", ""))
        target = players.find(target => target.getId() === id)
        target.setPoints(target.getPoints() - 1)
        refreshPoints(target)
    }
}
list.addEventListener('click', (ev) => {
    addPlayer(ev)
    deletePlayer(ev)
    addPoint(ev)
    minusPoint(ev)
})

resetGameButton.addEventListener('click', () => {
    let childrens = document.querySelectorAll('#list .col-player')
    for (let i = 0; i < childrens.length; i++) {
        childrens[i].remove()
    }
    if (checkForMaxPlayers()) addplayerbutton()
    players = []
    resetTimer()
})

const main = () => {
    startTimer()
    createPlayer()
    createPlayer()
    addplayerbutton()
}

window.onload = main
