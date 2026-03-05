const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');
const btnP4 = document.querySelector('#inputP4');





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




//2. metodo addEventListener com uma funçao anonima 

btnP1.addEventListener('click', function(){
    window.location.href='./pages/projeto01.html'
});

btnP2.addEventListener('click', function(){
    window.location.href='./pages/projeto02.html'
});


btnP3.addEventListener('click', function(){
    window.location.href='./pages/projeto03.html'
});


btnP4.addEventListener('click', function(){
    window.location.href='./pages/projeto04.html'
});
