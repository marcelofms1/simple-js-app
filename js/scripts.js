let pokemonRepository = (function () {
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
        }
    ];

    function getAll(){
        return pokemonList;
    }

    function add(pokemon){
        pokemonList.push(pokemon);
    }

    function myLoopFunction(pokemonList){
    document.write(`<h3>(${pokemonList.name})</h3>`);
    document.write(`<p>Height: ${pokemonList.height}.</p>`);
    document.write(`<p>Type: ${pokemonList.type}.</p>`);
    document.write(`<p>Abilities: ${pokemonList.abilities}.</p>`);
    }
    pokemonList.forEach(myLoopFunction);

    return {
        getAll: getAll,
        add: add,
        myLoopFunction: myLoopFunction
    };
})();



pokemonRepository.getAll().forEach(function(pokemonList) {
    pokemonRepository.myLoopFunction(pokemonList);
});







// let pokemonList = [
//     {name: 'Charizard',
//      height: 1.7,
//      type: ['Fire', ' Flying'],
//      abilities:['Blaze', ' Solar-Power']
//     },

//     {name: 'Zapdos',
//      height: 1.6,
//      type: ['Electric', ' Flying'],
//      abilities:['Lightningrod', ' Pressure']
//     },

//     {name: 'Gyarados',
//      height: 6.5,
//      type: ['Water', ' Flying'],
//      abilities:['Intimidate', ' Moxie']
//     },

//     {name: 'Tyranitar',
//      height: 2,
//      type: ['Dark', ' Rock'],
//      abilities:['Sand-stream', ' Unnerve']
//     },

//     {name: 'Galvantula',
//      height: 0.8,
//      type: ['Electric', ' Bug'],
//      abilities:['Compoundeyes', ' Swarm', ' Unnerve']
//     },

//     {name: 'Scyther',
//      height: 1.5,
//      type:['Grass', ' Flying'],
//      abilities:['Steadfast', ' Swarm', ' Technician']
//     },

//     {name:'Gengar',
//      height: 1.5,
//      type: ['Poison', ' Ghost'],
//      abilities:['Levitate', ' Psychic']
//     },

//     {name:'Aggron',
//      height: 2.1,
//      type:['Rock', ' Steel'],
//      abilities:['Rock-head', ' Heavy-metal']
//     },
// ];


// // This code creates a for loop using .forEach function
// function myLoopFunction(pokemonList){
//     document.write(`<br>(${pokemonList.name})<br>`);
//     document.write(`Height: ${pokemonList.height}.`);
//     document.write(`Type: ${pokemonList.type}.`);
//     document.write(`Abilities: ${pokemonList.abilities}.`);
// }
// pokemonList.forEach(myLoopFunction);