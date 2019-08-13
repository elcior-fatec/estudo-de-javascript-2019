// CODIGO EXECUTADO NO CONSOLE DO BROWSER

function f1() {
    console.log(this === window)
}

f1() // true : this referencia o elemento window (global do browser)


document.getElementsByTagName('body')[0].onclick = f1 // false
/************************/


function f2() {
    console.log(this === document)
}

f2() // false : this não refencia o elemento 'document' => this === window


document.getElementsByTagName('body')[0].onclick = f2 // false
/************************/


const body = document.getElementsByTagName('body')[0]

function f2() {
    console.log(this === body)
}

document.getElementsByTagName('body')[0].onclick = f2 // true

f2() // false
/***************************/


const f3 = () => console.log(this === window)

f3() // true

document.getElementsByTagName('body')[0].onclick = f3 // true