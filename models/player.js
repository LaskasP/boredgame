class player {
    constructor(name = 'Unknown', color) {
        this.name = name;
        this.color = color;
    }
    get Name() {
        return this.name;
    }
    get color() {
        return this.color;
    }
}