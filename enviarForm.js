const nome = document.getElementById('inputnome'); 
const email = document.getElementById('inputemail');
const mnsg = document.getElementById('inputmnsg');
const botao = document.getElementById('botao');


botao.addEventListener("click", () => {
    
    if(nome.value && email.value && mnsg.value ) {
        alert("Formulário enviado com sucesso!") 
    } 
    else {
        alert('Preencha os campos corretamente!')

    }
});
