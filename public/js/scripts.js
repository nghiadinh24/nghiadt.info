document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
  console.log("Design and develop with love by Nghia DT");
  const preloaderTl = gsap.timeline({
    delay: 0.2,
    duration: 1.2,
  });
  preloaderTl
    .to(".hero_line, .hero_heading_text, .hero_sub_text", {
      duration: 1,
      y: 0,
      opacity: 1,
      height: "100%",
      ease: "power3.out",
    })
    .to(".hero_p_text", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    })
    .to(".hero_link", {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      delay: 0.2,
      duration: 0.5,
      ease: "power3.out",
    })
    .to(".main_nav, .contact_row", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
  // about_section
  const aboutTl = gsap.timeline();
  aboutTl.to(".about_title_text, .about_text_p, .skill_card, .about_btn", {
    opacity: 1,
    y: 0,
    x: 0,
    stagger: 0.2,
    delay: 0.2,
    duration: 0.6,
    ease: "power3.out",
  });
  ScrollTrigger.create({
    trigger: ".about_section",
    markers: true,
    animation: aboutTl,
    scrub: true,
    start: "top center",
    end: "center center",
  });
  // lenis scroll
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});
