const cep = document.querySelector('#cep')

cep.addEventListener('blur', event => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, options)
        .then(response => response.json())
        .then(data => {
            for (let item in data) {
                if (document.querySelector('#'+item)) {
                    document.querySelector('#'+item).value = data[item]
                }
            }
        })
        .catch(error => console.log(erro))
})