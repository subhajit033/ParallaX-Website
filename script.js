let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let btn = document.getElementById('btn');
let forest = document.getElementById('forest');
let header = document.getElementById('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    text.style.top = value * -0.4 + 'px';
    bird1.style.left = value * 0.8 + 'px';
    bird1.style.top = value * -0.7 + 'px';
    bird2.style.left = value * -0.8 + 'px';
    btn.style.marginTop = value * 0.8 + 'px';
    rocks.style.top = value * -0.17 + 'px';
    forest.style.top = value * -0.15 + 'px';
    water.style.top = value * -0.09 + 'px';
})