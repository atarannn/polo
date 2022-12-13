  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.apartments-section',
        scrub: 5,
        start: '-100% top',
        end: '-50% top',
        ease: "power1.inOut"
      },
    })
    .to('.apartments-section-left', { y: 150, x: -20,  duration: 3 }, '<')
    .to('.apartments-section-right', { y: 150, x: 20,  duration: 3 }, '<')



  if (document.documentElement.clientWidth > 1180) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.images-section-wrapper',
          scrub: 1,
          start: '-30% top',
        },
      })
      .to('.images-section-left', { y: -50,  duration: 5 }, '<')
      .to('.images-section-right', { y: 50,  duration: 5 }, '<')
      .to('.logo-svg', { y: -50,  duration: 5 }, '<')
  }
