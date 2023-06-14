let inputId = document.getElementById('inputId')

function showWelcome() {
    let title1 = document.getElementById('title1')
    title1.innerHTML = createWelcomeMessage(inputId.value)

    let title2 = document.getElementById('title2')
    title2.innerHTML = createWelcomeMessage(inputId.value)

    let title3 = document.getElementById('title3')
    title3.innerHTML = createWelcomeMessage(inputId.value)
}

function createWelcomeMessage(name) {
    return 'Welcome, ' + name + '! Thank you for visiting, you are great!'
}
