var campo1 = document.getElementById('campo1');
var campo2 = document.getElementById('campo2');
var botao = document.getElementById('botao');
var resposta = document.getElementById('resposta');
var forms = document.getElementById('formulario-validacao')
var limpar = document.getElementById('limpar')

const mensagem ="B é maior que A, então, está válido"
const mensagem2 ="Campo A e B são iguais"
const mensagem3 ="A é maior que B, está inválido"




forms.addEventListener('submit', function(validar){
    validar.preventDefault();

    

    if(Number(campo1.value) < Number(campo2.value)){
        resposta.style.display = "block"
        let retorno = resposta.innerHTML = mensagem
        return retorno
        

    } else if(Number(campo1.value) === Number(campo2.value)){
        resposta.style.display = "block"
        let retorno = resposta.innerHTML = mensagem2
    }
    else{
        resposta.style.display = "block"
        let retorno = resposta.innerHTML = mensagem3
        return retorno
    }

    
})


limpar.addEventListener('submit', function(limpa){
    campo1.value ="";
    campo2.value="";
})