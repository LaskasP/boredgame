class player {
    constructor(id, name = 'Unknown', color = "default") {
        this.name = name;
        this.color = color;
        this.id = id
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
    getId() {
        return this.id;
    }
}

