'use strict;'

console.log(document.getElementsByTagName('input')[0].getAttribute('id'));
console.log(document.getElementsByTagName('input')[0].id)

for (let i = 0; i < document.getElementsByTagName('input').length(); i++) {
    console.log(document.getElementsByTagName('input')[i].getAttribute("id"))
    
}
console.log(document.getElementsByTagName('input')[0].getAttribute('type'));
console.log(document.getElementsByTagName('input')[0].getAttribute('size'));

console.log(document.getElementsByTagName('input')[1].getAttribute('id'));
console.log(document.getElementsByTagName('input')[1].getAttribute('type'));
console.log(document.getElementsByTagName('input')[1].getAttribute('size'));

console.log(document.getElementsByTagName('input')[2].getAttribute('id'));
console.log(document.getElementsByTagName('input')[2].getAttribute('type'));
console.log(document.getElementsByTagName('input')[2].getAttribute('size'));

console.log(document.getElementsByTagName('input')[3].getAttribute('type'));
console.log(document.getElementsByTagName('input')[3].getAttribute('name'));
console.log(document.getElementsByTagName('input')[3].getAttribute('value'));

console.log(document.getElementsByTagName('input')[4].getAttribute('type'));
console.log(document.getElementsByTagName('input')[4].getAttribute('name'));
console.log(document.getElementsByTagName('input')[4].getAttribute('value'));

console.log(document.getElementsByTagName('input')[5].getAttribute('type'));
console.log(document.getElementsByTagName('input')[5].getAttribute('id'));
console.log(document.getElementsByTagName('input')[5].getAttribute('value'));

console.log(document.getElementsByTagName('input')[6].getAttribute('type'));
console.log(document.getElementsByTagName('input')[6].getAttribute('id'));
console.log(document.getElementsByTagName('input')[6].getAttribute('value'));

document.getElementsByTagName('input')[0].setAttribute('size',40)
console.log(document.getElementsByTagName('input')[0].getAttribute('size'));

document.getElementsByTagName('input')[1].setAttribute('size',40)
console.log(document.getElementsByTagName('input')[1].getAttribute('size'));

document.getElementsByTagName('input')[2].setAttribute('size',40)
console.log(document.getElementsByTagName('input')[2].getAttribute('size'));

let li1 = document.getElementsByTagName('li')[0].classList

let li2 = document.getElementsByTagName('li')[2].classList

let li3 = document.getElementsByTagName('li')[3].classList

let li1 = document.getElementsByTagName('li')[0].classList.add("destacado")

let li2 = document.getElementsByTagName('li')[2].classList.remove("important")

let li3 = document.getElementsByTagName('li')[3].classList.replace('important', 'destacado'); 