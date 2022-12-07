const paralaxPattern = document.querySelectorAll('.rotate');
paralaxPattern.forEach((image) => {
  gsap.set(image, { willChange: 'transform', rotate: 0 });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: image,
        scrub: 1.1,
        scroller: '.page__inner',
      },
    })
    .fromTo(
      image,
      {
        rotate: 30,
      },
      {
        rotate: -30,
      },
    );
});
