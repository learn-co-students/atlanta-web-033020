const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', () => getTrainer().then(handleTrainers))

function handleTrainers(trainers){
    trainers.forEach((trainer) => {
        const trainerObj = new Trainer(trainer.id, trainer.name, trainer.pokemons)
        const card = trainerObj.renderCard()
        rendersCard(card)
    })
}

function rendersCard(card){
    const mainContainer = document.querySelector('main')
    mainContainer.appendChild(card)
}