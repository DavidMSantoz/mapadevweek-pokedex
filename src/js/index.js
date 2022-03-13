/*
Quando clicar no pokemon da lista tem que esconder o cartao aberto e mostrar cartão correspondente a seleção do momento 

Sendo necessario trabalhar com dois elementos :

1- listagem
2- Cartão do pokemon

precisa criar duas variaveis no JS para trabalhar com os elementos da tela

trabalhar com evento de clique realizado pelo usuário na listagem de pokémons

- remover a classe aberto do cartão em destaque

-ao clicar em um pokémon da listagem pegar o ID para saber qual card mostrar 
- remover a classe ativo que marca o pokemon selecionado 
- adicionar a classe ativo no item selecionado
*/


const listaselecaopokemons = document.querySelectorAll('.pokemon')
const pokemonscard = document.querySelectorAll('.cartao-pokemon')

listaselecaopokemons.forEach(pokemon => {
    
    // precisa criar duas var no JS para trabalhar com os elementos da tela

    pokemon.addEventListener('click', () => {
        const cartaopokemonaberto = document.querySelector('.aberto')
        cartaopokemonaberto.classList.remove('aberto')
    // remover a class aberto do card em destaque 
    const idpokemonselecionado = pokemon.attributes.id.value
    const iddocartaopokemonparaabrir = 'cartao-'+ idpokemonselecionado
    const cartaopokemonparaabrir = document.getElementById( iddocartaopokemonparaabrir)
    cartaopokemonparaabrir.classList.add('aberto')

    //remover class ativo do selecionado
    const pokemonativonalistagem = document.querySelector('.ativo')
    pokemonativonalistagem.classList.remove('ativo')    

    // adicionar class ativo
    const pokemonselecionadonalistagem = document.getElementById(idpokemonselecionado)
    pokemonselecionadonalistagem.classList.add('ativo')

    })
})
