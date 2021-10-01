gsap.registerPlugin(ScrollTrigger);

const a = document.querySelectorAll(".about-section-element");

a.forEach(a => {
  gsap.fromTo(a.children, {y: "+=100", opacity: 0}, {y: 0, opacity: 1, stagger: .5, duration: 1, ease: "easeInOut",
  scrollTrigger: {
  trigger: a,
  start: "top 70%",
}});  
});

const b = document.querySelector('nav');

gsap.to(b,{y: "-=100", opacity: 0, duration: 0.5, ease: "easeInOut",
scrollTrigger: {
  trigger: b,
  start: "500px top",
  scrub: 1,
}});
