let input_valor1 = document.querySelector('#Valor1')
let input_valor2 = document.querySelector('#Valor2')

let botao1 = document.querySelector('button1')
let botao2 = document.querySelector('button2')
let botao3 = document.querySelector('button3')
let botao4 = document.querySelector('button4')
let resposta = document.querySelector('.resposta')

botao1.addEventListener('click', somar)
botao2.addEventListener('click', multiplicar)
botao3.addEventListener('click', subtrair)
botao4.addEventListener('click', dividir)


function somar(){
    let valor1 = Number(input_valor1.value)
    let valor2 = Number(input_valor2.value)
    let resultado = valor1 + valor2

    resposta.textContent = 'Resultado: ' + resultado
}


function multiplicar(){
    let valor1 = Number(input_valor1.value)
    let valor2 = Number(input_valor2.value)
    let resultado = valor1 * valor2

    resposta.textContent = 'Resultado: ' + resultado
}


function subtrair(){
    let valor1 = Number(input_valor1.value)
    let valor2 = Number(input_valor2.value)
    let resultado = valor1 - valor2

    resposta.textContent = 'Resultado: ' + resultado
}


function dividir(){
    let valor1 = Number(input_valor1.value)
    let valor2 = Number(input_valor2.value)
    let resultado = valor1 / valor2

    resposta.textContent = 'Resultado: ' + resultado
}