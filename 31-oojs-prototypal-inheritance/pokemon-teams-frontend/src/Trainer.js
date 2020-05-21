class Trainer {

    constructor(id,name,pokemons){
        this.id = id
        this.name = name
        this.pokemons = pokemons
        this.element = document.createElement('div')
    }

    renderCard(){
        this.element.className = 'card'
        this.element.dataset.id = this.id

        const name = document.createElement('p')
        name.innerText = this.name

        const addPokemon = document.createElement('button')
        addPokemon.dataset.trainerId = this.id
        addPokemon.innerText = 'Add Pokemon'
        
        const pokemonList = document.createElement('ul')
        this.pokemons.forEach(function(pokemon){
            const pokemonObj = new Pokemon(pokemon.id,pokemon.species,pokemon.nickname)
            const pokeLi = pokemonObj.renderListItem()
            pokemonList.appendChild(pokeLi)
        })

        this.element.appendChild(name)
        this.element.appendChild(addPokemon)
        this.element.appendChild(pokemonList)

        return this.element
    }
}