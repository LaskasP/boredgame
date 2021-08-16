class Game {
    constructor(name, players = 2) {
        this.name = name;
        this.players = players;
    }
    get name() {
        return this.name;
    }
    get numberOfPlayers() {
        return this.players;
    }
}