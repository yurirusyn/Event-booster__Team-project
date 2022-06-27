import Notiflix from 'notiflix';
import fetchModalInfo from './main';
import renderModalInfo from './renderModalInfo';

const refs = {
  gallery: document.querySelector('.gallery'),
};
// let btn = refs.gallery.closest('.photo-card')

refs.gallery.addEventListener('click', getData);
function getData(e) {
  if (e.target.closest('.photo-card').dataset.div === 'event') {
    const dataId = e.target.closest('.photo-card').getAttribute('data-id');
    fetchModalInfo(dataId)
      .then(name => {
        refs.gallery.insertAdjacentHTML('beforebegin', renderModalInfo(name));
        const modalJs = document.querySelector('.modal-js');

        if (modalJs) {
          modalJs.classList.add('is-open');
          const closeModalBtn = document.querySelector('[data-modal-close]');
          const backdrop = document.querySelector('.backdrop');
          closeModalBtn.addEventListener('click', () => {
            modalJs.remove();
            backdrop.remove();
          });
        }
      })
      .catch(err => {
        if (err) {
          Notiflix.Notify.failure('no info');
        }
      });
  }
}
