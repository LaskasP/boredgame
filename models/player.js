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
    getPlayerCardHTML() {
        return `<div class="col d-flex justify-content-center col-player" id = "card-${this.id}">
        <div class="card border-secondary mb-3">
            <div class="card-header">
                <div class="row row-cols-2 align-items-center ">
                    <div class="col-10">
                        <h1 class="card-title text-start display-5 " contenteditable="true">Player</h1>
                    </div>
                    <div class="col-2"><button type="button" class="btn-close btn-danger player-delete-button"
                    id = "delete-button-${this.id}"
                            aria-label="Close"></button></div>
                </div>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h3 class="bolded-points">Points: <span class="points" id = "points-${this.id}">0</span></h3>
                    </li>
                    <li class="list-group-item">
                        <div class="form-group">
                            <label for="Textarea">Notes</label>
                            <textarea class="form-control" id="Textarea" rows="4"></textarea>
                        </div>
                    </li>
                </ul>

            </div>

            <div class="footer">
                <div class="btn-group btn-group-lg d-flex" role="group">
                    <button type="button " class="btn btn-success button point-plus">+1</button>
                    <button type="button " class="btn btn-danger point-minus">-1</button>
                </div>
            </div>
        </div>
    </div>`
    }
}

