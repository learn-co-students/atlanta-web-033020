function getTrainer(){
    return fetch(TRAINERS_URL)
    .then((res) => res.json())
}