interface ITerrain {
    name: string;
    type: string;
}

class Castle implements ITerrain {
    name = "Castle";
    type = "fortification";
}

class Grassland implements ITerrain {
    name = "Grassland";
    type = "Plain";
}

class TerrainContainer {
    private terrain: ITerrain;

    constructor(terrain: ITerrain) {
        this.terrain = terrain;
    }

    getTerrain() {
        return this.terrain;
    }
}

class Terrain {
    terrain: ITerrain;

    constructor(terrain: ITerrain) {
        this.terrain = terrain;
    }
}

const terrainContainer = new TerrainContainer(new Grassland());
const terrain = new Terrain(terrainContainer.getTerrain());
console.log(terrain.terrain.name); // Grassland
console.log(terrain.terrain.type); // Plain
