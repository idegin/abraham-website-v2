import { useEffect } from 'react';

declare global {
  interface Window {
    $: any;
    jQuery: any;
    WOW: any;
    Swiper: any;
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
  }
}

export const useTemplateScripts = () => {
  useEffect(() => {
    const initializeScripts = () => {
      if (typeof window !== 'undefined' && window.$) {
        
        if (window.WOW) {
          new window.WOW().init();
        }

        window.$('.nice-select').niceSelect?.();
        
        window.$('[data-background]').each(function() {
          //@ts-ignore
          const bg = window.$(this).data('background');
          if (bg) {
            //@ts-ignore
            window.$(this).css('background-image', `url(${bg})`);
          }
        });

        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          if (window.ScrollSmoother) {
            window.gsap.registerPlugin(window.ScrollSmoother);
          }
        }

        if (window.Swiper) {
          const swipers = document.querySelectorAll('.swiper');
          swipers.forEach(swiperEl => {
            new window.Swiper(swiperEl, {
              loop: true,
              autoplay: {
                delay: 3000,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          });
        }

        window.$('.scroll-up').on('click', function() {
          window.$('html, body').animate({ scrollTop: 0 }, 800);
        });

        window.$(window).on('scroll', function() {
          //@ts-ignore
          if (window.$(this).scrollTop() > 100) {
            window.$('.scroll-up').fadeIn();
          } else {
            window.$('.scroll-up').fadeOut();
          }
        });

        window.$(window).on('load', function() {
          window.$('#preloader').fadeOut(500);
        });
      }
    };

    const timer = setTimeout(() => {
      initializeScripts();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
};
