const APIgithub = 'https://api.github.com/users/'
const formInput = document.querySelector('input')
const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const user = formInput.value

    if (user) {
        getUser(user)
    } else {
        alert('Insira um usuario')
    }
})

function getUser(user) {
    axios.get(APIgithub + user)
        .then(response => {
            const { data } = response
            createUser(data)
        })
        .catch(error => console.log(error))
}

function createUser(user) {
    const userInfos = document.querySelectorAll('[data-user]')

    const [ userProfile,
            userFoto,,
            userName,
            userCity,
            userBio] = userInfos

    userProfile.classList.add('active')

    userFoto.setAttribute('src', user.avatar_url)
    userName.textContent = user.name
    userCity.textContent = user.location
    userBio.textContent = user.bio
}