// modal
const button_bar = document.querySelector(".button_bar")
const button_close = document.querySelector(".button_close")
const modal = document.querySelector(".modal")

// button_bar.addEventListener("click", (event) =>{
//     event.preventDefault()

// })

function chamarModal(){
    modal.style.display = "block"
    modal.style.opacity = "1";
}
button_close.addEventListener("click", (event) =>{
    // event.preventDefault()
    modal.style.opacity = "0";
    modal.style.display = "none"
})

// menu dorpdow
document.addEventListener("DOMContentLoaded", function() {
    const esportesButton = document.querySelector(".open_button_esportes");
    const jogosButton = document.querySelector(".open_button_jogos");

    const contentJogos = document.querySelector(".content_jogos")
    const contentEsportes = document.querySelector(".content_esportes");
    
    esportesButton.addEventListener("click", function(event) {
      event.preventDefault();
      contentEsportes.classList.toggle("show");
      contentJogos.classList.remove("show")
    });

    jogosButton.addEventListener("click", function(event) {
        event.preventDefault();
        contentJogos.classList.toggle("show")
        contentEsportes.classList.remove("show");
    });
});


// troca de conteudo
 // Um array de objetos "logos", cada objeto representa informações sobre um logotipo e sua animação associada
 const logos = [
    {
        id: "1",
        titulo: 'Retorna à escuridão com o game Diablo IV',
        paragrafo: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
        imagemFundo: 'assets/banner-hero/games/diablo-bg.png',
        capaGif: 'assets/banner-hero/games/diablo-animation-cover.png',
        srcGif: 'assets/banner-hero/games/diablo-animation.gif',
        button: 'Jogue agora',
        logoItem: "assets/banner-hero/games/diablo-logo.png",
    },
    {
        id: "2",
        titulo: 'Novo pacote de expansão de Hearthstone',
        paragrafo: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
        imagemFundo: 'assets/banner-hero/games/hearthstone-bg.png',
        capaGif: 'assets/banner-hero/games/hearthstone-animation-cover.png',
        srcGif: 'assets/banner-hero/games/hearthstone-animation.gif',
        button: 'Reserve agora na pré-venda',
        logoItem: "assets/banner-hero/games/hearthstone-logo.png",
    },
    {
        id: "3",
        titulo: 'Desbrave as Terras Sombrias em Shadowlands! ',
        paragrafo: 'O que jaz além do mundo que você conhece?',
        imagemFundo: 'assets/banner-hero/games/wow-bg.png',
        capaGif: 'assets/banner-hero/games/wow-animation-cover.png',
        srcGif: 'assets/banner-hero/games/wow-animation.gif',
        button: 'Reserve agora na pré-venda',
        logoItem: "assets/banner-hero/games/wow-logo.png",
    },
    // ... Outros objetos semelhantes representando diferentes logotipos e informações
];

// Função "mudarConteudo" é responsável por atualizar o conteúdo da página com base no objeto de logotipo fornecido
function mudarConteudo(logo) {
    // Atualizar o título e parágrafo com informações do logotipo
    document.getElementById('titulo').textContent = logo.titulo;
    document.getElementById('paragrafo').textContent = logo.paragrafo;

    const mainElement = document.querySelector("header");
    // Atualizar o plano de fundo da página com a imagem de fundo do logotipo
    // document.body.style.backgroundImage = `url('${logo.imagemFundo}')`;

    mainElement.style.backgroundImage = `url('${logo.imagemFundo}')`;
    mainElement.style.backgroundPosition = "center center;"

    // Selecionar elementos HTML relacionados à animação do logotipo
    const container = document.querySelector('.container');
    const overlay = container.querySelector('.overlay');
    const overlayImg = overlay.querySelector('img');
    const capa = document.querySelector(".capaGif");
    const imgLogo = document.querySelector(".logo_app")

    // Configurar a imagem de sobreposição com a capa da animação do logotipo
    overlayImg.src = logo.capaGif;
    overlayImg.alt = logo.capaGif;
    


    // Atualizar a capa da animação do logotipo e a imagem do logotipo
    capa.src = logo.capaGif;
    imgLogo.src = logo.logoItem;

    // Adicionar eventos de mouseover e mouseout para controlar a animação
    container.addEventListener('mouseover', function () {
        overlay.style.opacity = 1;
        overlayImg.src = logo.srcGif;
    });

    container.addEventListener('mouseout', function () {
        overlay.style.opacity = 0;
        overlayImg.src = logo.capaGif;
    });
}


// Quando o DOM (Document Object Model) estiver pronto, adicione eventos de clique a cada logotipo
document.addEventListener('DOMContentLoaded', function () {
    logos.forEach(function (logoObj) {
        console.log(logoObj)// esse logoObj rece 3 numero  se eu clicar no button com o id ex 2 vai inserio os dados o  logos com o id 2
        // seleciona o id do button que for clicado 
        const logo = document.getElementById(logoObj.id);
        console.log(logo)

        // Quando um logotipo for clicado, chame a função "mudarConteudo" com o objeto de logotipo correspondente
        logo.addEventListener('click', function () {
            // , e adiciona um ouvinte de evento de clique a ele. Quando o botão de logotipo é clicado
            mudarConteudo(logoObj);
            console.log(logoObj)
        });
    });
});

// Resto do seu código ...
let currentLogoIndex = 0;
// Função para trocar o conteúdo e plano de fundo
function trocarConteudoAutomaticamente() {
    // Obtém um índice aleatório para selecionar um logotipo diferente
    // Obtém o logotipo com base no índice atual
    const logoObj = logos[currentLogoIndex];

    // Chama a função para mudar o conteúdo com o logotipo atual
    mudarConteudo(logoObj);

    // Reinicia a barra de progresso
    startProgess();

    // Atualiza o índice atual para o próximo logotipo (circular)
    currentLogoIndex = (currentLogoIndex + 1) % logos.length;
    // setInterval(startProgess, 5000)
    function startProgess(){
        const progresContainer = document.querySelector(".progres");
        let width = 0;
    
        const interval = setInterval(function(){
            if (width >= 100){
                clearInterval(interval);
            } else{
                width++
                progresContainer.style.width = width + "%"
            }
        }, 50); // 50ms interval for smooth progress, you can adjust this
    }
}

// Inicia a troca de conteúdo automaticamente a cada 10 segundos
setInterval(trocarConteudoAutomaticamente, 5000); // 10000 milissegundos = 10 segundos



// Função para buscar dados da API
async function fetchGameData() {
    try {
      const response = await fetch('https://api.brchallenges.com/api/blizzard/games');
      
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
  
      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  }
  
  // Chama a função para buscar os dados
  fetchGameData().then(data => {
    if (data) {
      console.log('Dados da API:', data);
      // Faça algo com os dados aqui

      data.forEach((element, index) => {
        console.log(index)
        console.log(element);
      });

      for (const element of data) {
        // Código a ser executado para cada elemento
        console.log(element)
      }
    }
  });
  