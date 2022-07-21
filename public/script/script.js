const account = document.querySelector('.account');
const menu = document.querySelector('.memu');
const aside = document.querySelector('aside');

menu.addEventListener('click', (e) => {
    if (aside.style.transform == 'translate(-250px) translateY(-10px)') {
        aside.style.transform = 'translate(0px) translateY(-10px)'
        aside.style.transition = '.3s'
    } else {
        aside.style.transform = 'translate(-250px) translateY(-10px)'
    }
})

account.addEventListener('click', (e) => {
    alert('msg')
})

