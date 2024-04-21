document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Design and developed with love by NghiaDT.");
  console.log(
    "If you are reading this line, it means you are interested in me 🐧."
  );
  gsap.registerPlugin(ScrollTrigger);
  // gsap code
  // nav
  const showAnim = gsap
    .from(".main_nav", {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });
  // end nav
  const tl_preloader = gsap.timeline();
  tl_preloader
    .to("body", {
      overflow: "hidden",
    })
    .to(".preloader .text-container", {
      duration: 0,
      opacity: 0.7,
      ease: "power3.inOut",
    })
    .from(".preloader .text-container h1", {
      duration: 0.6,
      delay: 0.7,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "power3.inOut",
    })
    .to(".preloader .text-container h1", {
      duration: 0.6,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "power3.inOut",
    })
    .to(".preloader", {
      duration: 0.8,
      height: "0vh",
      borderBottomRightRadius: "90% 35%",
      borderBottomLeftRadius: "90% 35%",
      ease: "power3.inOut",
    })
    .to(
      "body",
      {
        overflow: "auto",
      },
      "-=2"
    )
    .to(".preloader", {
      display: "none",
    })
    .to(".hero_title, .hero_round", {
      duration: 1,
      y: 0,
      stagger: 0.2,
      delay: 0.2,
      opacity: 1,
      ease: "power3.inOut",
    })
    .to(".hero_heading_subtitle", {
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: "power3.inOut",
    })
    .to(".main_nav, .hero_p", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.inOut",
    });
  const hero_load = gsap.fromTo(
    ".hero_round",
    {
      y: 0,
      duration: 1,
      ease: "power3.out",
    },
    {
      y: -120,
      duration: 0.3,
      ease: "power3.out",
    }
  );
  ScrollTrigger.create({
    trigger: ".hero_section",
    scrub: true,
    animation: hero_load,
    start: "center 20%",
    end: "80% 20%",
  });
  const hero_heading = gsap.fromTo(
    ".hero_sub, .hero_heading_p, .hero_heading_title",
    {
      y: 0,
      duration: 0.2,
      ease: "power3.out",
    },
    {
      y: -120,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.3,
      ease: "power3.out",
    }
  );
  ScrollTrigger.create({
    trigger: ".hero_section",
    scrub: true,
    animation: hero_heading,
    start: "center 20%",
    end: "80% 20%",
    toggleActions: "play none reverse none",
    markers: false,
  });
  // about_section
  const about_text = gsap.to(".about_text", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "expoScale(0.5,7,none)",
  });
  ScrollTrigger.create({
    trigger: ".about_section",
    scub: true,
    markers: false,
    animation: about_text,
    start: "top center",
    end: "top top",
    toggleActions: "play none reverse reverse",
  });
  const about_Load = gsap.timeline();
  about_Load
    .to(".about_btn", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
    })
    .to(".about_line", {
      width: "100%",
      duration: 1,
      ease: "expoScale(0.5,7,none)",
    })
    .to(".skill_title, .about_card , .skill_line", {
      height: "100%",
      y: 0,
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
      stagger: 0.2,
      delay: 0.2,
    });
  ScrollTrigger.create({
    trigger: ".about_section",
    start: "top top",
    end: "center 30%",
    pin: ".about_section",
    markers: false,
    scrub: 1,
    animation: about_Load,
    toggleActions: "play none reverse reverse",
  });

  // works_section
  const worksTitle = gsap.to(".works_title_text, .works_btn", {
    y: 0,
    duration: 0.7,
    opacity: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.2,
  });
  ScrollTrigger.create({
    trigger: ".works_section",
    markers: false,
    scrub: true,
    animation: worksTitle,
    start: "top center",
    end: "top 10%",
  });
  const works_tl = gsap.timeline();
  works_tl.to("#works_1, #works_2, #works_3", {
    y: 0,
    opacity: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.2,
    duration: 1,
  });
  ScrollTrigger.create({
    trigger: ".works_section",
    markers: false,
    toggleActions: "play none reverse reverse",
    animation: works_tl,
    start: "top center",
    end: "top 10%",
  });
  const worksLoad = gsap.timeline();
  worksLoad.to(" #works_4, #works_5, #works_6", {
    y: 0,
    opacity: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.2,
    duration: 1,
  });
  ScrollTrigger.create({
    trigger: ".works_section",
    markers: false,
    toggleActions: "play none reverse reverse",
    animation: worksLoad,
    start: "top top",
    end: "center 30%",
    pin: ".works_section",
  });
  // contact_section
  contactTl = gsap.timeline();
  contactTl.to(".contact_title, .contact_btn, .contact_detail", {
    y: 0,
    opacity: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.2,
    duration: 0.5,
  });
  ScrollTrigger.create({
    trigger: ".contact_section",
    markers: false,
    scrub: true,
    animation: contactTl,
    start: "top 20%",
    end: "20% 10%",
  });

  // end contact_section
  // lenis

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 300);
  });

  gsap.ticker.lagSmoothing(0);

  // end gsap
});
