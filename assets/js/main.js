//console.log("Sucesso!");

const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Usa-se o "Fetch para fazer a requisição" passa-se a URL ou Request
fetch(url)
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
    }) esta função foi transformada em eron function!!! abaixo*/

    .then((response) => response.json())

    .then((jsonBody) => console.log(jsonBody))
    
    .catch((error) => console.error(error))

    .finally(function(){
        console.log('Requisição concluída')
    })


const x = 10 + 10;
console.log(x)
//Este fetch retorna uma "promise" para lidar com o assincronismo no js.
//o retorno é uma promessa de resultado devido ao processo de requisição e resposta do 
//servidor


