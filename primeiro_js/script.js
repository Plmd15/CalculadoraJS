//alert('O arquivo JS está funcionando')

console.log('Ola Mundo . . .')

//

let input_login = document.querySelector('#login')
let input_senha = document.querySelector('#senha')
let btn = document.querySelector('button')

//console.log(input_login)
//console.log(input_senha)
//console.log(btn)

//console.log(document)

btn.addEventListener('click', validarAcesso)



function validarAcesso(){
    let login = input_login.value
    let senha = input_senha.value
    let resposta = document.querySelector('.resposta')

    if (login == 'abc' && senha == '123'){
        resposta.textContent = 'Login e senha estão corretos'
    } else {
        resposta.textContent = 'Login e senha estão incorretos'
    }
}
