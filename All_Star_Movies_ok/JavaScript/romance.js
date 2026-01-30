const generosBtn = document.querySelector('.generos_btn');
const menuGeneros = document.querySelector('.menu_generos');

generosBtn.addEventListener('click', () => {
  menuGeneros.classList.toggle('ativo');
});