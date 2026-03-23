// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const imgs = Array.from(document.querySelectorAll('.comp-visual-placeholder img'));
let currentIndex = 0;

imgs.forEach((img, i) => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => openLightbox(i));
});

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = imgs[currentIndex].src;
  lightboxImg.alt = imgs[currentIndex].alt;
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
}

function navigate(dir) {
  currentIndex = (currentIndex + dir + imgs.length) % imgs.length;
  lightboxImg.src = imgs[currentIndex].src;
  lightboxImg.alt = imgs[currentIndex].alt;
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', e => { e.stopPropagation(); navigate(-1); });
document.getElementById('lightbox-next').addEventListener('click', e => { e.stopPropagation(); navigate(1); });

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigate(-1);
  if (e.key === 'ArrowRight') navigate(1);
});
