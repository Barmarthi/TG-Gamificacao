const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

  if (localStorage.getItem('contrasteAtivo') === 'true') {
    document.documentElement.classList.add('high-contrast');
  }

  function toggleContrast() {
    document.documentElement.classList.toggle('high-contrast');

    if (document.documentElement.classList.contains('high-contrast')) {
      localStorage.setItem('contrasteAtivo', 'true');
    } else {
      localStorage.setItem('contrasteAtivo', 'false');
    }
  }