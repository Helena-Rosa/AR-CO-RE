
//1. lógica das páginas de projeto
function criarBotaoVoltar(){
    // criar o elemento botão
    const btnVoltar = document.createElement('button');

    // definir o estilo do botão
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px'

    // lógica do click 
   function navegar () {
        window.location.href = '../index.html'
   };

   btnVoltar.addEventListener('click', navegar);


//    btnVoltar.addEventListener('click', function())

   document.body.appendChild(btnVoltar);

};



window.onload = criarBotaoVoltar(); 
// carrega a pagina e cria um botao voltar na hora de carregar 
// window = objeto
// onload = metodo
