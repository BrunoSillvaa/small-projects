const gunsList = document.querySelectorAll('.gun')
const bulletClass = document.querySelectorAll('td')

gunsList.forEach(gun => {
    gun.addEventListener('click', () => {
        gun.classList.toggle('active')
    })
})

bulletClass.forEach(bullet => {
    let bulletName = bullet.textContent
    switch (bulletName) {
        case '0': 
            bullet.style.backgroundColor = '#CF0B04'
            break
        case '1': 
            bullet.style.backgroundColor = '#DC3B07'
            break
        case '2': 
            bullet.style.backgroundColor = '#EA6B0A'
            break
        case '3': 
            bullet.style.backgroundColor = '#F99D10'
            break
        case '4': 
            bullet.style.backgroundColor = '#C0B825'
            break
        case '5': 
            bullet.style.backgroundColor = '#87D43D'
            break
        case '6': 
            bullet.style.backgroundColor = '#4CF057'
            break
    }
})