import imgs from './gallery-items.js';


const list = document.querySelector('.js-gallery');


// part #1

imgs.forEach(el => {
  const { preview, original, description } = el;
  list.insertAdjacentHTML('beforeend', `<li class="gallery__item">
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
});

// part #2

list.addEventListener('click', clickOnImg);

function clickOnImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  } else { 
    const target = event.target;
    console.log(target.dataset.source);
    modalIsOpen();
    srcInModal(event);
  }
};

// part #3

const modal = document.querySelector('.js-lightbox');
function modalIsOpen () {
  modal.classList.add('is-open');
};

// part #4

const imgInModal = document.querySelector(".lightbox__image");
function srcInModal(event) {
  imgInModal.src = event.target.dataset.source;
  imgInModal.alt = event.target.alt;
};

// part #5

const modalBtnClose = document.querySelector('button');
modalBtnClose.addEventListener('click', closeModal);
function closeModal() {
  modal.classList.remove('is-open');
  // part #6
  imgInModal.src = '';
}



