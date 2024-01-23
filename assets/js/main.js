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

    // function convertPokemonTypesToLi(pokemonTypes) {
    //     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
    // }

    const pokemonList = document.getElementById('pokemonList')
    const loadMoreButton = document.getElementById('loadMoreButton')
    
    const maxRecords = 151
    const limit = 10
    let offset = 0;
    
    //regra de paginação abaixo
    //1, 2, 3, 4, 5          0 - 5
    //6, 7, 8, 9, 10         5 - 5
    //11                     10 - 5 (remove o botão)

//console.log(document.getElementsByClassName('pokemon'))
        //console.log(document.getElementsById('pokemonList'))

    function loadPokemonItens(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) => 
                //entre crases `` colocam-se as tags do html
                 `
                    <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name" >${pokemon.name}</span>

                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type" ${type}>${type}</li>`).join('')}

                            </ol>
            
                            <img src="${pokemon.photo}" 
                                alt="${pokemon.name}">
                        </div>

                    </li>
                 ` ).join('')

                 pokemonList.innerHTML += newHtml

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
    }       

    loadPokemonItens(offset, limit)

    loadMoreButton.addEventListener('click', () => {
        offset += limit
        //debugger
        const qtdRecordNexPage = offset + limit

        if (qtdRecordNexPage >= maxRecords) {
            const newLimit = maxRecords - offset
            loadPokemonItens(offset, newLimit)

            //linha para remover o botão de adicionar lista
            loadMoreButton.parentElement.removeChild(loadMoreButton)
        } else {

            loadPokemonItens(offset, limit)
        }

    })
        
        
        
        // const x = 10 + 10;
        // console.log(x)
        
        //Este fetch retorna uma "promise" para lidar com o assincronismo no js.
        //o retorno é uma promessa de resultado devido ao processo de requisição e resposta do servidor
        
        
        