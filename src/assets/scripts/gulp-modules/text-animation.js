window.addEventListener('load', () => {
  function splitToLinesAndFadeUp(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: document.body,
            trigger: text,
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: 0.4, stagger: 0.05, duration: 1.3, ease: "power4.out" }
        );
    });
  }
  splitToLinesAndFadeUp('.main-text p, .apartments-section-center .title, .apartments-section-center .text, .contacts-title, .about-page-list-item h5, .infrastucture-title h3, .infrastucture-title-2 h3, .infrastructure-wrapper .title, .characteristics-wrapper .title, .characteristics-wrapper .text, .developer-top-title p, .developer-list-title, .developer-other-projects-title p, .developer-other-projects-list h5, .developer-map-title h5, .terms-card .title-dark, .construction_progress-top-left .title');
})
