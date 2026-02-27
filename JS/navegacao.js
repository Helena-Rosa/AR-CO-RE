
//1. lógica das páginas de projeto
function criarBotaoVoltar(){
    // criar o elemento botão
    const btnVoltar = document.createElement('button');

    // definir o estilo do botão
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px'

    // lógica do click 
    btnVoltar.addEventListener('click', function(){
        window.location.href = '../index.html'
    });
       
    // adicionar o botão no final do bady
    document.body.appendChild(btnVoltar);


};



window.onload = criarBotaoVoltar(); 
// carrega a pagina e cria um botao voltar na hora de carregar 
// window = objeto
// onload = metodo
