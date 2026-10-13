if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('main h1, main h2, main h3, main p, main figure, main .service, main .booking-summary').forEach((element, index) => {
    element.classList.add('motion');
    element.style.animationDelay = `${index % 3 * 70}ms`;
    observer.observe(element);
  });
}
