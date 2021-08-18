

const maxPlayers = 6;
let activePlayersIds = [];
let players = []
let resetGameButton = document.querySelector(".reset-game")
let playerDeleteButton = document.querySelector(".player-delete-button")
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

plusbutton.addEventListener('click', (ev) => {
    //console.log(ev.target.closest(".points").innerText)
})

minusbutton.addEventListener('click', (ev) => {
    //console.log(ev.target.closest(".points").innerText)
})

playerDeleteButton.addEventListener('click', (ev) => {


})


resetGameButton.addEventListener('click', () => {
    let childrens = document.querySelectorAll('#list .col-player')
    for (let i = 0; i < childrens.length; i++) {
        childrens[i].remove()
    }
    activePlayersIds = []
    resetTimer()
})

