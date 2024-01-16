//console.log("Sucesso!");

// const offset = 0;
// const limit = 10;

// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Usa-se o "Fetch para fazer a requisição" passa-se a URL ou Request
//fetch(url)
    /*.then(function(response){
        //console.log(response)
        response
            .json()
            .then(function (responseBody){
            console.log(responseBody)
            })
    })*/
    
    /* o "then" pode ser encadeado e o "then" seguinte aguarda a resposta do anterior*/
   
   /* .then(function (response){
        return response.json()
    }) esta função foi transformada em eron function!!! abaixo!
    */

    function convertPokemonTypesToLi(pokemonTypes) {
        return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
    }

    function convertPokemonToLi(pokemon) {
        //entre crases `` colocam-se as tags do html
        return `
            <li class="pokemon">
                <span class="number">#${pokemon.id}</span>
                <span class="name" >${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}" 
                        alt="${pokemon.name}">
                </div>
            
            </li>
        `
    }

//console.log(document.getElementsByClassName('pokemon'))
//console.log(document.getElementsById('pokemonList'))
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
    
    
    
    // const listItens = []

    //     for (let i = 0; i < pokemons.length; i++) {
    //         const pokemon = pokemons[i];
    //         //console.log(convertPokemonToLi(pokemon))
    //         //pokemonList.innerHTML += convertPokemonToLi(pokemon)
               //listItens.push(convertPokemonToLi(pokemon))
    //     }
        
    //     console.log(listItens)
    //     Este trecho testou o retorno de objetos em array da api.
    //     /*
    //     pokemonList = Array(10)
    //     debugger
    //     console.log(pokemonList)
    //     */
    })


// const x = 10 + 10;
// console.log(x)

//Este fetch retorna uma "promise" para lidar com o assincronismo no js.
//o retorno é uma promessa de resultado devido ao processo de requisição e resposta do servidor


