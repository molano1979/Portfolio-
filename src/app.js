const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementByID('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)