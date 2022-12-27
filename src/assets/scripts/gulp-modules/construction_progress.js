function popupOpen(popup) {
  popup.forEach(el => {
    popupOpenAnim();
    document.querySelector('body').style.overflow = 'hidden';
  });
}

function popupClose(popup) {
  popup.forEach(el => {
    popupCloseAnim();
    document.querySelector('body').style.overflow = 'auto';
  });
}

function popupOpenAnim(evt, reverseArg) {
  const popup = document.querySelectorAll('[data-construction-progress]');
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    popup.forEach(el => {
      el.classList.add('active');
    });
  });
  tl.fromTo(popup, {autoAlpha: 0},
    {autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.4 }, '<');
  tl.play();
}

function popupCloseAnim(evt, reverseArg) {
  const popup = document.querySelector('[data-construction-progress]');
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(popup, {autoAlpha: 1},
    { ease: 'power4.easeInOut', duration: 0.2, autoAlpha: 0 }, '<');
  tl.add(() => {
    popup.classList.remove('active');
  });
  tl.play();
}

function popupInit() {
  const popup = document.querySelectorAll('[data-construction-progress]');
  document.querySelector('.construction_progress-list').addEventListener('click',function(evt){
    const target = evt.target.closest('[data-open-construction-progress]');
    if (target === null) return;
    popupOpen(popup)
  });
  document.querySelectorAll('[data-close-construction-progress]').forEach(elem => {
    elem.addEventListener('click', () => popupClose(popup));
  });
  window.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) {
      if (popup[0] && popup[0].classList.contains('active')) {
        popupClose(popup)
      }
    }
  })
}


function init() {
  popupInit();
}

window.addEventListener('DOMContentLoaded', init);

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: document.querySelector('[data-swiper-next]'),
    prevEl: document.querySelector('[data-swiper-prev]'),
  },
  pagination: {
    type: 'fraction',
  },
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,
});




function $card(data, index) {
  return `
    <li class="construction_progress-card" data-open-construction-progress="" data-index="${index}">
      <div class="left">
        <div class="date">
          <div class="day" data-day="">${data.data.day}</div>
          <div class="col">
            <div class="month" data-month="">${data.data.month}</div>
            <div class="year" data-year="">${data.data.year}</div>
          </div>
        </div>
        <div class="text" data-test="">${data.data.text}</div>
        <div class="bottom">
          <div class="photo-num">
            <p data-photo="">${data.data.count}</p>${data.data.btn['img']}
          </div>
          <div class="video-num">
            <p data-video="">${data.data.count_videos}</p>${data.data.btn['video']}
          </div>
        </div>
      </div>
      <div class="right"><img class="img" data-img="" src="${data.data.gallery[0] || '#'}"></div>
    </li>
  `;
}

function $popupSlide(data, img, isVideo) {

  const imageLayout = isVideo ?
    `<iframe
      src="${img}">
    </iframe>`:
    `<img src="${img}" alt="">`;

  return `
    <div class="swiper-slide">
      <div class="left">
        <div class="date">
          <div class="day" data-day>${data.data.day}</div>
          <div class="col">
            <div class="month" data-month>${data.data.month}</div>
            <div class="year" data-year>${data.data.year}</div>
          </div>
        </div>
        <div class="text" data-test>${data.data.text || ''}</div>
      </div>
      <div class="right">
        ${imageLayout}
      </div>
    </div>
  `
}

async function initBuildProgressLayout(config) {
  const state = {
    queryAction: 'constructions',
    cardsContainer: document.querySelector('.construction_progress-list'),
    cardSelector: '[data-open-construction-progress]',
    template: $card,
    cardsData: [],
    ...config
  }
  window.state = state;

  const fd = new FormData();
  fd.append('action', state.queryAction);

  const url = window.location.href.match(/localhost|(^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$)/) ? './static/build-test-data.json' : '/wp-admin/admin-ajax.php';
  let data = await fetch(url, {
    method: 'POST',
    body: fd
  });
  data = await data.json();
  state.cardsData = data.data;
  state.cardsContainer.innerHTML = Array.isArray(data.data) ? data.data.map((el, index) => state.template(el, index)).join('') : [''];
  
  state.cardsContainer.addEventListener('click',function(evt){
    const target = evt.target.closest(state.cardSelector);
    if (target === null) return;
    if (state.updateDetailPopup) {
      state.updateDetailPopup(state.cardsData[target.dataset.index]);
    }
    state.openDetail && state.openDetail();
  });
}
initBuildProgressLayout({
  popupForDetailInfo: document.querySelector('[data-construction-progress]'),
  openDetail: () => popupOpen(document.querySelectorAll('[data-construction-progress]')),
  updateDetailPopup: (data) => {
    const popup = document.querySelector('[data-construction-progress]');
    const swiper = popup.querySelector('.swiper').swiper;
    popup.querySelectorAll('[data-day]').forEach(el => el.textContent = data.data.day);
    popup.querySelectorAll('[data-month]').forEach(el => el.textContent = data.data.month);
    popup.querySelectorAll('[data-year]').forEach(el => el.textContent = data.data.year);
    popup.querySelector('.swiper-wrapper').innerHTML = data.data.gallery.map(el => $popupSlide(data, el, false)).join('');
    popup.querySelector('.swiper-wrapper').innerHTML += Array.isArray(data.data.videos) ? data.data.videos.map(el => $popupSlide(data, el, true)).join('') : '';
    swiper.update();
    swiper.slideTo(0);
  }
});