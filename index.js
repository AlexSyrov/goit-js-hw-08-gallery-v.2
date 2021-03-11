import imgs from './gallery-items.js';


const list = document.querySelector('.gallery');

imgs.forEach(el => {
    const { preview, original, description } = el;
    list.insertAdjacentHTML('beforeend',`<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
})