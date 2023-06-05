const container = document.querySelector('.container')
const counter = document.querySelector('.counter');
const loadingBar = document.querySelector('.loading-bar-front');
const img = document.querySelector('.img')

let i = 0;

loading();

function loading() {
    counter.innerText = `${i}%`;
    loadingBar.style.width = `${i}%`;
    img.style.width = `${i}%`;

    i++;

    if(i <= 100) {
        setTimeout(loading, 10)
    }
}

function page() {

    container.classList.add('hide');
}
setTimeout(page, 10000);
