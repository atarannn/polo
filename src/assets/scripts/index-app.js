import i18next from 'i18next';
import gsap from 'gsap';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import ScrollTrigger from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';
import motionHoverEffect from './modules/effects/motionHoverEffects';

global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;


if(document.documentElement.clientWidth > 1180) {
  motionHoverEffect(
    document.querySelector('.menu'),
    document.querySelector('.menu-list')
  )
}

var myAnimation = new hoverEffect({
  parent: document.querySelector('#about .about-left.card-style.js-hover-card-animation'),
  intensity: 0.3,
  image1: './assets/images/home/section-2/1.png',
  image2: './assets/images/home/section-2/1-hover.png',
  displacementImage: './assets/images/home/section-2/1-hover.png'
});

var myAnimation2 = new hoverEffect({
  parent: document.querySelector('#about .about-right.card-style.js-hover-card-animation'),
  intensity: 0.3,
  image1: './assets/images/home/section-2/2.png',
  image2: './assets/images/home/section-2/2-hover.png',
  displacementImage: './assets/images/home/section-2/2-hover.png'
});

var myAnimation2 = new hoverEffect({
  parent: document.querySelector('#about-2 .about-right.card-style.js-hover-card-animation'),
  intensity: 0.3,
  image1: './assets/images/home/section-5/2.png',
  image2: './assets/images/home/section-5/2-hover.png',
  displacementImage: './assets/images/home/section-5/2-hover.png'
});

const form = [
  '[data-form]',
];

form.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const callContent = document.querySelector('[data-form]');
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
              callContent.classList.add('not-active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
                callContent.classList.remove('not-active');
              });
            });
          }
          callThanksPopup('[data-btn-submit]','[data-thanks]','[data-close-form]');
          },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          mail: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-mail]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('mail'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
          comment: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-comment]') }),
            defaultMessage: i18next.t('comment'),
            valid: false,
            error: [],
          },
        },
      },
    });

    $form.querySelector('.js-mask-absolute').addEventListener('click', () => {
      $form.querySelector('[name="phone"]').focus();
      $form.querySelector('.js-mask-absolute').style.display = 'none';
    }, false);
  }
});

