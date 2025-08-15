/*accordions gerais*/
const accordionBtns = document.querySelectorAll('.btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
  /*accordion do exemplo prático de accordion*/
document.querySelectorAll('.exemplo-accordion .accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});


const audioAbrir = new Audio('thumbs_up.mp3');
const audioFechar = new Audio('thumbs_up.mp3');
document.querySelectorAll('.accordion-btn').forEach(btn => {
  const img = btn.querySelector('img');
  btn.addEventListener('click', function() {
    const accordion = btn.parentElement.nextElementSibling;
    const aberto = accordion.classList.toggle('active');
    if (aberto) {
      img.src = 'imagem-aberta.png';
      audioAbrir.play();
    } else {
      img.src = 'imagem-fechada.png';
      audioFechar.play();
    }
  });
});
