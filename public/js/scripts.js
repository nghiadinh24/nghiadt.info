document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
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

  console.log("Design and develop with love by Nghia DT");
  const preloaderTl = gsap.timeline({
    delay: 0.2,
    duration: 1,
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
    scale: 1,
    stagger: 0.2,
    delay: 0.2,
    duration: 0.6,
    ease: "power3.out",
  });
  ScrollTrigger.create({
    trigger: ".about_section",
    markers: false,
    animation: aboutTl,
    scrub: true,
    start: "top center",
    end: "center center",
  });
  const aboutRound = gsap.to(".about_round", {
    opacity: 1,
    scale: 5,
    y: -320,
    ease: "power3.out",
    duration: 1,
  });
  ScrollTrigger.create({
    trigger: ".about_section",
    markers: false,
    animation: aboutRound,
    scrub: true,
    start: "20% center",
    end: "80% 30%,",
  });
  // works_section
  const worksLeftcir = gsap.to(".works_circle_left", {
    y: -370,
    ease: "power3.out",
    duration: 2,
  });
  ScrollTrigger.create({
    trigger: ".works_section",
    markers: false,
    scrub: 3,
    start: "3% center",
    end: "20% center",
    animation: worksLeftcir,
  });
  const worksRightcir = gsap.to(".works_circle_right", {
    y: -670,
    x: -150,
    scale: 0.5,
    ease: "power3.out",
    duration: 2,
  });
  ScrollTrigger.create({
    trigger: ".works_section",
    markers: false,
    scrub: 4,
    start: "30% center",
    end: "80% center",
    animation: worksRightcir,
  });
  // store
  const storecardExpand = gsap.to("#storecake", {
    scale: 1,
    ease: "power3.out",
    duration: 1,
    opacity: 1,
  });
  ScrollTrigger.create({
    trigger: "#store_card",
    markers: false,
    start: "20% center",
    end: "80% center",
    animation: storecardExpand,
    toggleActions: "restart reverse restart reverse",
  });
  const storeContent = gsap.to("#store_title, #store_p", {
    y: 0,
    stagger: 0.2,
    opacity: 1,
    delay: 0.2,
    duration: 1,
    ease: "power3.out",
  });
  ScrollTrigger.create({
    trigger: "#store_card",
    markers: false,
    start: "20% center",
    end: "80% center",
    animation: storeContent,
    toggleActions: "restart reverse restart reverse",
  });

  // web
  const webcardExpand = gsap.to("#webcake", {
    scale: 1,
    ease: "power3.out",
    duration: 1,
    opacity: 1,
  });
  ScrollTrigger.create({
    trigger: "#web_card",
    markers: false,
    start: "20% center",
    end: "80% center",
    animation: webcardExpand,
    toggleActions: "restart reverse restart reverse",
  });
  const webContent = gsap.to("#web_title, #web_p", {
    y: 0,
    stagger: 0.2,
    opacity: 1,
    delay: 0.2,
    duration: 1,
    ease: "power3.out",
  });
  ScrollTrigger.create({
    trigger: "#web_card",
    markers: false,
    start: "20% center",
    end: "80% center",
    animation: webContent,
    toggleActions: "restart reverse restart reverse",
  });
  // tikop
  const tikopcardExpand = gsap.to("#tikop", {
    scale: 1,
    ease: "power3.out",
    duration: 1,
    opacity: 1,
  });
  ScrollTrigger.create({
    trigger: "#tikop_card",
    markers: false,
    start: "20% center",
    end: "80% center",
    animation: tikopcardExpand,
    toggleActions: "restart reverse restart reverse",
  });
  const tikopContent = gsap.to("#tikop_title, #tikop_p", {
    y: 0,
    stagger: 0.2,
    opacity: 1,
    delay: 0.2,
    duration: 1,
    ease: "power3.out",
  });
  ScrollTrigger.create({
    trigger: "#tikop_card",
    markers: false,
    start: "20% center",
    end: "80% center",
    animation: tikopContent,
    toggleActions: "restart reverse restart reverse",
  });
});

// spline
