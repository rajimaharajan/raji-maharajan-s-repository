const readline = require('readline-sync');

// ===============================
// Pokémon Data Storage
// ===============================
let pokemonData = JSON.stringify([
    { id: 1, name: "Bulbasaur", type: ["Grass", "Poison"], hp: 45, attack: 49, defense: 49 },
    { id: 6, name: "Charizard", type: ["Fire", "Flying"], hp: 78, attack: 84, defense: 78 },
    { id: 9, name: "Blastoise", type: ["Water"], hp: 79, attack: 83, defense: 100 },
    { id: 25, name: "Pikachu", type: ["Electric"], hp: 35, attack: 55, defense: 40 },
    { id: 150, name: "Mewtwo", type: ["Psychic"], hp: 106, attack: 110, defense: 90, legendary: true }
], null, 2);

// ===============================
// Core Functions
// ===============================
function loadPokedex() {
    return JSON.parse(pokemonData);
}

function savePokedex(data) {
    pokemonData = JSON.stringify(data, null, 2);
}

function findLegendary() {
    let dex = loadPokedex();
    // Legendary logic: For this demo, we check a flag or high stats
    const legendaries = dex.filter(p => p.legendary === true || (p.hp + p.attack + p.defense) > 300);
    console.log("\n--- Legendary/High Tier Pokémon ---");
    console.table(legendaries);
}

function searchPokemon(id) {
    let dex = loadPokedex();
    const pokemon = dex.find(p => p.id === id);
    if (pokemon) {
        console.log("\nPokémon Found:", pokemon);
    } else {
        console.log("\nID not found in Pokédex.");
    }
}

// ===============================
// Main Menu (Switch Case)
// ===============================
function mainMenu() {
    let exit = false;

    while (!exit) {
        console.log("\n=== POKÉDEX DATA EXPLORER ===");
        console.log("1. Display All Pokémon");
        console.log("2. Search by ID");
        console.log("3. Find Legendary Pokémon");
        console.log("4. Exit");
        
        let choice = readline.question("Choose an option: ");

        switch (choice) {
            case '1':
                console.table(loadPokedex());
                break;
            case '2':
                let id = parseInt(readline.question("Enter Pokémon ID: "));
                searchPokemon(id);
                break;
            case '3':
                findLegendary();
                break;
            case '4':
                console.log("Closing Pokédex. Goodbye!");
                exit = true;
                break;
            default:
                console.log("Invalid option, try again.");
        }
    }
}

// Start the app
mainMenu();
