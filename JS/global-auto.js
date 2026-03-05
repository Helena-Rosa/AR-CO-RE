//1. Logica Automatica para menu (index)
//buscamos todos os inputs do tipo botão dentro da classe .projeto_button-group
const botoesProjeto = document.querySelectorAll('.project_button-group input[type="button"]');
console.log(botoesProjeto);


if (botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            // o index começa com 0, enhtão somamos 1 para bater com "projeto01","projeto02"
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        })
        
    });
}


//2 Logica das paginas de projeto (botao voltar)
const criarBotaoVoltar = () => {
    const btnVoltar = document.createElement ('button');
    btnVoltar.innerText = 'Voltar';

    //hedará o estilo de 'button' do CSS
    btnVoltar.className = 'btn-navegacao';

        btnVoltar.addEventListener('click', () => {
            window.location.href = '../index.html';

        });

        document.body.appendChild(btnVoltar);
    }
    



// se não houver botões de projeto na pagina, assume-se que é uma pagina internaq 
if (botoesProjeto.lenght === 0) {
    /*adicionando um evento de escuta no navegador (objeto window).
    Após o carregamento da página a função sera invocada ()*/
    window.addEventListener('load', () => {
        criarBotaoVoltar();
    })
}