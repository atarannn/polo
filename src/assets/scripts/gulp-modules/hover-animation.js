document.querySelector('.js-hover-animation').addEventListener('mouseover', () => {
  document.querySelector('.about-left-hover').classList.add('active');
});
document.querySelector('.js-hover-animation').addEventListener('mouseout', () => {
  document.querySelector('.about-left-hover').classList.remove('active');
});

document.querySelectorAll('#about .about-left').forEach( card => {
  card.addEventListener('mouseover', () => {
    document.querySelector('#about .about-left .subtitle').classList.add('visible');
    document.querySelector('#about .about-left .btn-circle').classList.add('visible');
  });
})

document.querySelectorAll('#about .about-left').forEach( card => {
  card.addEventListener('mouseout', () => {
    document.querySelector('#about .about-left .subtitle').classList.remove('visible');
    document.querySelector('#about .about-left .btn-circle').classList.remove('visible');
  });
})

document.querySelectorAll('#about .about-right').forEach( card => {
  card.addEventListener('mouseover', () => {
    document.querySelector('#about .about-right .subtitle').classList.add('visible');
    document.querySelector('#about .about-right .btn-circle').classList.add('visible');
  });
})

document.querySelectorAll('#about .about-right').forEach( card => {
  card.addEventListener('mouseout', () => {
    document.querySelector('#about .about-right .subtitle').classList.remove('visible');
    document.querySelector('#about .about-right .btn-circle').classList.remove('visible');
  });
})

document.querySelectorAll('#about-2 .about-right').forEach( card => {
  card.addEventListener('mouseover', () => {
    document.querySelector('#about-2 .about-right .subtitle').classList.add('visible');
    document.querySelector('#about-2 .about-right .btn-circle').classList.add('visible');
  });
})

document.querySelectorAll('#about-2 .about-right').forEach( card => {
  card.addEventListener('mouseout', () => {
    document.querySelector('#about-2 .about-right .subtitle').classList.remove('visible');
    document.querySelector('#about-2 .about-right .btn-circle').classList.remove('visible');
  });
})
