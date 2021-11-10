let pokemonRepository = (function () {
    let repository = [
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

    function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "types" in pokemon
        ) {
          repository.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
      }
      function getAll() {
        return repository;
      }

      function showDetails(pokemon){
          console.log(pokemon)
      }

    //   This loop will go over my pokemon and show them of the page inside buttons
    
      function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);

        button.addEventListener('click', function(event){   console.log(pokemon)
            showDetails(pokemon)
        });
      }

    //   This code returns function
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
      };
    })();
    
    pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
    
    console.log(pokemonRepository.getAll());
    
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
    
