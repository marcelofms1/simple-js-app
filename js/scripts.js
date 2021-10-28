let pokemonList = [
    {name: 'Charizard',
     height: 1.7,
     type: ['fire', 'flying'],
     abilities:['Blaze', 'Solar-Power']
    },

    {name: 'Zapdos',
     height: 1.6,
     type: ['electric', 'flying'],
     abilities:['Lightningrod', 'Pressure']
    },

    {name: 'Gyarados',
     height: 6.5,
     type: ['water', 'flying'],
     abilities:['Intimidate', 'Moxie']
    },

    {name: 'Tyranitar',
     height: 2,
     type: ['dark', 'rock'],
     abilities:['Sand-stream', 'Unnerve']
    },

    {name: 'Galvantula',
     height: 0.8,
     type: ['electric', 'bug'],
     abilities:['Compoundeyes', 'Swarm', 'Unnerve']
    },

    {name: 'Scyther',
     height: 1.5,
     type:['grass', 'flying'],
     abilities:['Steadfast', 'Swarm', 'Technician']
    },

    {name:'Gengar',
     height: 1.5,
     type: ['poison', 'ghost'],
     abilities:['levitate', 'Psychic']
    },

    {name:'Aggron',
     height: 2.1,
     type:['rock', 'steel'],
     abilities:['Rock-head', 'Heavy-metal']
    },
];

// This creates a loop of strings with name, height and types of pokemon.

for (let i = 0; i < pokemonList.length; i++){
    document.write(`${pokemonList[i].name}- (Height: ${pokemonList[i].height}) (Type: ${pokemonList[i].abilities})`);   
}