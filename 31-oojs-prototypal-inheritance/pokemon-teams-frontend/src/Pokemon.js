class Pokemon {
    
    constructor(id,species,nickname){
        this.id = id
        this.species = species
        this.nickname = nickname
        this.element = document.createElement('li')
    }

    renderListItem(){
        this.element.innerText = `${this.nickname} (${this.species})`

        const releaseBtn = document.createElement('button')
        releaseBtn.class = 'release'
        releaseBtn.innerText = 'Release'
        releaseBtn.dataset.pokemonId = this.id

        this.element.appendChild(releaseBtn)
        
        return this.element        
    }
}