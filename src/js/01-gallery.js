// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const galleryItemMarkup = creatGalleryCardMarkup(galleryItems);

function creatGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', galleryItemMarkup);
new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: 250 });
