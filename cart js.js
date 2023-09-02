let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let product = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1..jpg',
        price: 1200
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2..jpg',
        price: 1300
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '1..jpg',
        price: 1400
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4..jpg',
        price: 1200
    },
    {
        id:5,
        name: 'PRODUCT NAME 5',
        image: '5..jpg',
        price: 1200
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6..jpg',
        price: 1200
    },
];
let listCards = [];
function initApp(){
    product.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <img src="images/${value.image}"/>
            <div class="title">${value.name}</div>

        `;
        list.appendChild(newDiv);
    })
}
initApp();