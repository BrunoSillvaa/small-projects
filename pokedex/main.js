checkInput()

function checkInput() {
    const input = document.querySelector('input')
    input.addEventListener('blur', () => {
        if (input.value) {
            getPokemon(input.value)
        } else {
            console.log('Insira o nome do Pokemon')
        }
    })
}

function getPokemon(input) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => {
            const { data } = response

            const pokemon = {
                id: data.id,
                name: data.name,
                img: data.sprites.other.dream_world.front_default,
                type: data.types[0].type.name
            }

            updateCard(pokemon)
            // console.log(data)
        })
        .catch(error => console.log(error))
}

function updateCard(pokemon) {
    const pokeInfos = document.querySelectorAll('.pokemon')
    const [
        pokemonName,
        pokemonImg
    ] = pokeInfos

    pokemonName.textContent = pokemon.name
    pokemonImg.setAttribute('src', pokemon.img)

}
