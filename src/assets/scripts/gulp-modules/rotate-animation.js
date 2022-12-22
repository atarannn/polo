gsap
  .timeline({
    scrollTrigger: {
      trigger: '.text-wrapper',
      scrub: 1,
      start: '-200% top',
    },
  })
  .to('.rotate', { rotate: 360, duration: 3 }, '<')

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.infrastucture-title',
      scrub: 1,
      start: '-200% top',
    },
  })
  .to('.rotate', { rotate: 360, duration: 3 }, '<')

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.characteristics',
      scrub: 1,
      start: '-200% top',
    },
  })
  .to('.rotate', { rotate: 360, duration: 3 }, '<')


gsap
  .timeline({
    scrollTrigger: {
      trigger: '.developer-top-title',
      scrub: 1,
      start: '-200% top',
    },
  })
  .to('.rotate', { rotate: 360, duration: 3 }, '<')

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.developer-other-projects-title',
      scrub: 1,
      start: '-200% top',
    },
  })
  .to('.rotate', { rotate: 360, duration: 3 }, '<')
