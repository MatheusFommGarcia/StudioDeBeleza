// Seleciona o menu hamburguer e o menu de navegação responsiva
const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

// Adiciona evento de clique
menuHamburguer.addEventListener('click', () => {
    // Alterna a classe "change" no ícone
    menuHamburguer.classList.toggle('change');
    
    // Alterna a classe "active" no menu
    nav.classList.toggle('active');
});
