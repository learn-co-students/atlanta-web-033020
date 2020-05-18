const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers/`
const POKEMONS_URL = `${BASE_URL}/pokemons/`
const main = document.getElementById('main')

function fetchTrainers() {
    fetch(TRAINERS_URL)
    .then( res => res.json() )
    .then( trainersData => renderTrainersData(trainersData) )
}

function renderTrainersData(trainers) {
    trainers.forEach(trainer => {
        renderTrainer(trainer)
    });
}

function renderTrainer(trainer) {
    let div = document.createElement('div')
    div.className = 'card'
    main.appendChild(div)

    let trainerName = document.createElement('p')
    trainerName.innerText = trainer.name
    div.appendChild(trainerName)

    let addPokemonButton = document.createElement('button')
    addPokemonButton.innerText = 'Add Pokemon'
    div.appendChild(addPokemonButton)
    addPokemonButton.addEventListener('click', ()=> addPokemonToTeam(trainer, pokemonList))

    let pokemonList = document.createElement('ul')
    div.appendChild(pokemonList)

    trainer.pokemons.forEach( pokemon => renderPokemon(pokemon, pokemonList) )

}

function renderPokemon(pokemon, pokemonList) {
    let li = document.createElement('li')
    li.innerText = `${pokemon.nickname} (${pokemon.species})`

    let releasePokemonButton = document.createElement('button')
    releasePokemonButton.innerText = 'Release'
    releasePokemonButton.classList += 'release'
    li.appendChild(releasePokemonButton)
    releasePokemonButton.addEventListener('click', ()=> releasePokemonFromTeam(pokemon, li) )

    pokemonList.appendChild(li)
}

function addPokemonToTeam(trainer, pokemonList) {
    fetch(POKEMONS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            trainer_id: trainer.id
        })
    })
    .then( res => res.json() )
    .then( pokemon => {
        if (pokemon.errors)
            pokemon.errors.forEach( error => alert(error) )
        else
            renderPokemon(pokemon, pokemonList)
    })
}

function releasePokemonFromTeam(pokemon, li) {
    fetch(POKEMONS_URL + pokemon.id, {
        method: 'DELETE'
    })
    .then( res => res.json() )
    .then( pokemon => {
        if (pokemon.errors)
            pokemon.errors.forEach( error => alert(error) )
        else
            li.remove()
    })
}

fetchTrainers()