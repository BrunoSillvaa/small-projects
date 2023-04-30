checkInput()

function checkInput() {
  const input = document.querySelector('input')
  input.addEventListener('blur', () => {
    if (input.value) getPokemon(input.value)
    else console.log('Insira o nome do Pokemon')
  })
}

function getPokemon(input) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then((response) => {
      const { data } = response

      const pokemon = {
        id: data.id,
        name: data.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        type: data.types[0].type.name,
        abilities: {
          ability1: {
            name: data.abilities[0].ability.name,
            url: data.abilities[0].ability.url
          },
          ability2: {
            name: data.abilities[1].ability.name,
            url: data.abilities[1].ability.url
          }
        }
      }

      const promises = []

      for (const key of Object.keys(pokemon.abilities)) {
        const promise = axios
          .get(pokemon.abilities[key].url)
          .then((response) => {
            const { data } = response

            pokemon.abilities[key].description = data.effect_entries[1].effect

          })
          .catch((error) => console.log(error))

        promises.push(promise)
      }

      Promise.all(promises).then(() => {
        updateCard(pokemon)
      })

    })
    .catch((error) => console.log(error))
}

function updateCard(pokemon) {
  const pokeInfos = document.querySelectorAll('.pokemon')
  const [pokemonName, pokemonImg, pokemonType, pokemonAbilities] = pokeInfos

  pokemonName.textContent = pokemon.name
  pokemonImg.setAttribute('src', pokemon.img)
  pokemonType.setAttribute('src', `./assets/types/${pokemon.type}.png`)

  for (const key of Object.keys(pokemon.abilities)) {
    const abilityWrapper = document.createElement('div')
    abilityWrapper.setAttribute('class', 'ability')

    const abilityName = document.createElement('p')
    abilityName.setAttribute('class', 'ability-name')
    const nameRevised = pokemon.abilities[key].name.replace('-', ' ')
    abilityName.textContent = nameRevised
    
    const abilityDesc = document.createElement('p')
    abilityDesc.setAttribute('class', 'ability-desc')
    abilityDesc.textContent = pokemon.abilities[key].description

    abilityWrapper.appendChild(abilityName)
    abilityWrapper.appendChild(abilityDesc)

    pokemonAbilities.appendChild(abilityWrapper)
  }
}
