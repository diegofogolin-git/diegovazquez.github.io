const modoEscuro = document.getElementById('toggleDark'); //declaração de variavél resgatando elemento por ID
const body = document.querySelector('body');//declaração de variavél uma query específica
const container = document.getElementById('container');
const caixa = document.getElementsByClassName('caixa'); //declaração de variavél resgatando elemento por classe
 const home = document.getElementById('sobremimoculto');
       const toggleHome = document.getElementById('sobremim');
 const formacao = document.getElementById('formacaooculto');
       const toggleForm = document.getElementById('formacao');
 const portifolio = document.getElementById('portifoliooculto');
       const togglePort = document.getElementById('portifolio');
 const contato = document.getElementById('contatooculto');
       const toggleCont = document.getElementById('contato');




toggleHome.addEventListener('click', () => { //adiciona um evento ao clicar em "sobre mim"
      if (home.style.display === 'none') { //condicional
           home.style.display = 'block'; //caracteristica de como a caixa aparece
           home.style.position = 'relative';
           home.style.marginLeft = 'auto';
           home.style.marginRight = 'auto';

      } 
      else {
            home.style.display = 'none';
      }
       
 });
 toggleForm.addEventListener('click', () => {
      if(formacao.style.display === 'none') { 
           formacao.style.display = 'block';
           formacao.style.position = 'relative';
           formacao.style.marginLeft = 'auto';
           formacao.style.marginRight = 'auto';

      } 
      else {
            formacao.style.display = 'none';
      }
       
 });
      

 togglePort.addEventListener('click', () => {
      if (portifolio.style.display === 'none') {
           portifolio.style.display = 'block';
           portifolio.style.position = 'relative';
           portifolio.style.marginLeft = 'auto';
           portifolio.style.marginRight = 'auto';

      } 
      else {
            portifolio.style.display = 'none';
      }
       
 });

 toggleCont.addEventListener('click', () => {
      if (contato.style.display === 'none') {
           contato.style.display = 'block';
           contato.style.position = 'relative';
           contato.style.marginLeft = 'auto';
           contato.style.marginRight = 'auto';

      } 
      else {
            contato.style.display = 'none';
      }
});

modoEscuro.addEventListener('click', () => { //registra um evento ao clicar
      modoEscuro.classList.toggle('escuro'); //enquanto estiver ativado, chama uma nova classe específica para determinada variavél
      body.classList.toggle('escuro');
      container.classList.toggle('escuro');
      caixa.classList.toggle('escuro');
});
