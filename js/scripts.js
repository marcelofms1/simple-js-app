let pokemonList = [
    {name: 'Charizard',
     height: 1.7,
     type: ['Fire', ' Flying'],
     abilities:['Blaze', ' Solar-Power']
    },

    {name: 'Zapdos',
     height: 1.6,
     type: ['Electric', ' Flying'],
     abilities:['Lightningrod', ' Pressure']
    },

    {name: 'Gyarados',
     height: 6.5,
     type: ['Water', ' Flying'],
     abilities:['Intimidate', ' Moxie']
    },

    {name: 'Tyranitar',
     height: 2,
     type: ['Dark', ' Rock'],
     abilities:['Sand-stream', ' Unnerve']
    },

    {name: 'Galvantula',
     height: 0.8,
     type: ['Electric', ' Bug'],
     abilities:['Compoundeyes', ' Swarm', ' Unnerve']
    },

    {name: 'Scyther',
     height: 1.5,
     type:['Grass', ' Flying'],
     abilities:['Steadfast', ' Swarm', ' Technician']
    },

    {name:'Gengar',
     height: 1.5,
     type: ['Poison', ' Ghost'],
     abilities:['Levitate', ' Psychic']
    },

    {name:'Aggron',
     height: 2.1,
     type:['Rock', ' Steel'],
     abilities:['Rock-head', ' Heavy-metal']
    },
];

// This creates a loop of strings with name, height and abilities of pokemon.

// for (let i = 0; i < pokemonList.length; i++){
//     document.write(` ${pokemonList[i].name}- (Height: ${pokemonList[i].height}) (Type: ${pokemonList[i].abilities})`);   
// } 

// This code creates two text messages:

let pokemonSize = [
    big = `Wow, that's a big pokemon.`,
    small = `Uh, this one is kind of small.`,
    huge = "That's the biggest pokemon I've ever seen!"
];


// This code creates a for loop with if and else statements:

function printArrayList(){
for (let i = 0; i < pokemonList.length; i++){

    if (pokemonList[i].height > 1.6){
        document.write(`<p id="pokemon_name">${pokemonList[i].name} - </p> `);
        document.write(`<p>(Height: ${pokemonList[i].height}) ${pokemonSize[0]}</p> <p>(Abilities: ${pokemonList[i].abilities})</p> <p>(Type: ${pokemonList[i].type})</p>`);
    } 
    else {
        document.write(`<p id="pokemon_name">${pokemonList[i].name} - </p>`);
        document.write(`<p>(Height: ${pokemonList[i].height}) ${pokemonSize[1]}</p> <p>(Abilities: ${pokemonList[i].abilities})</p> <p>(Type: ${pokemonList[i].type})</p>`)
    }
}
}

printArrayList();

