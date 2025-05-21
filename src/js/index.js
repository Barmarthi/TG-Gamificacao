const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const todosProjetos = document.querySelectorAll('.projeto');
let mostrandoTodos = false;

botaoMostrarProjetos.addEventListener('click', () => {
  if (!mostrandoTodos) {
    todosProjetos.forEach((projeto, index) => {
      setTimeout(() => {
        projeto.classList.add('ativo');
      }, index * 150); // Atraso de 150ms por projeto
    });
    botaoMostrarProjetos.textContent = 'Mostrar Menos';
    mostrandoTodos = true;
  } else {
    todosProjetos.forEach((projeto, index) => {
      if (index >= 4) {
        setTimeout(() => {
          projeto.classList.remove('ativo');
        }, index * 100);
      }
    });
    botaoMostrarProjetos.textContent = 'Mostrar Mais';
    mostrandoTodos = false;
  }
});


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