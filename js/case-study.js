// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.comp-visual-placeholder img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
