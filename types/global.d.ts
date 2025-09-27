declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

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

export {};
