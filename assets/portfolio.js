import { avitoUrl, projects, testimonials } from './content.js';

document.querySelectorAll('[data-avito]').forEach(link => { link.href = avitoUrl; });

function featureMarkup(project) {
  const kedo = project.id === 'kedo';
  const images = kedo
    ? `<figure class="screen-main"><img src="assets/images/kedo-preview.jpg" width="1440" height="900" alt="Созданное демо кадрового портала: список входящих документов" loading="lazy"><figcaption>Открытое демо с вымышленными данными</figcaption></figure><figure class="screen-detail"><img src="assets/images/kedo-document.jpg" width="1440" height="900" alt="Карточка документа в демонстрации кадрового портала" loading="lazy"><figcaption>Просмотр и согласование документа</figcaption></figure>`
    : `<figure class="screen-main"><img src="assets/images/autoservice-preview.jpg" width="1440" height="900" alt="Созданный демонстрационный сайт автосервиса Пост 1" loading="lazy"><figcaption>Демонстрационный проект. Вымышленный автосервис</figcaption></figure><figure class="screen-detail"><img src="assets/images/workshop-detail.webp" width="1536" height="1024" alt="Сгенерированная иллюстрация осмотра тормозного диска" loading="lazy"><figcaption>Изображения мастерской сгенерированы для демо</figcaption></figure>`;
  return `<article class="project feature ${kedo ? '' : 'auto-feature'}" data-category="sites"><div class="feature-head"><div><h3 class="motion">${project.title}</h3><p class="project-kind">${project.kind}</p></div><div class="project-description"><p class="motion">${project.task}</p><p class="motion">${project.solution}</p><a class="button" href="${project.url}">Посмотреть демо <span aria-hidden="true">↗</span></a></div></div><div class="screens motion">${images}</div></article>`;
}

function botMarkup(project) {
  return `<article class="bot-project" data-category="bots"><h3 class="motion">${project.title}</h3><p class="project-kind">${project.kind}</p><p class="motion">${project.task}</p><details><summary>Как работает</summary><p>${project.solution}</p><ol class="flow">${project.flow.map(step => `<li>${step}</li>`).join('')}</ol><p class="flow-caption">Описание выполненной работы. Данные и интерфейс заказчика не публикуются.</p></details></article>`;
}

document.querySelector('#project-list').innerHTML = featureMarkup(projects[0])
  + `<div class="bot-work">${projects.filter(project => project.category === 'bots').map(botMarkup).join('')}</div>`
  + featureMarkup(projects.at(-1));

document.querySelector('#review-list').innerHTML = testimonials.map(review => `<figure class="review"><blockquote class="motion">${review.text}</blockquote><figcaption><span class="review-name">${review.name}</span><br><time datetime="${review.datetime}">${review.date}</time> · Авито<br>Оценка: 5 из 5. Сделка состоялась</figcaption></figure>`).join('');

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    document.querySelectorAll('[data-category]').forEach(project => { project.hidden = category !== 'all' && project.dataset.category !== category; });
    document.querySelector('.bot-work').hidden = category === 'sites';
    const labels = { all: '6 проектов: 5 выполненных работ и 1 демонстрационный сайт.', sites: '2 сайта: кадровый портал и демонстрационный автосервис.', bots: '4 выполненных проекта с ботами и интеграциями.' };
    document.querySelector('#filter-count').textContent = labels[category];
  });
});

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.motion').forEach((element, index) => {
    element.style.animationDelay = `${index % 3 * 70}ms`;
    observer.observe(element);
  });
}
