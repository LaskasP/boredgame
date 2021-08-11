class game {
    constructor(name, players = 2) {
        this.name = name;
        this.players = players;
    }
    get Name() {
        return this.name;
    }
    get NumberOfPlayers() {
        return this.players;
    }
}