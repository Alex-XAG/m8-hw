import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function markupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href=${original}>
         <img class="gallery__image" src=${preview} alt=${description} />
      </a>
   </li>
`;
    })
    .join('');
}
gallery.insertAdjacentHTML('beforeend', markupGalleryItems(galleryItems));

gallery.addEventListener('click', onSimpleLightboxOpen);

function onSimpleLightboxOpen(evt) {
  evt.preventDefault();

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  lightbox.on('show.lightbox');
}
