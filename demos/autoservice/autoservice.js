const services = [
  { id: 'diagnostics', title: 'Диагностика', description: 'Проверка автомобиля и поиск причины неисправности.', price: 1500 },
  { id: 'oil', title: 'Замена масла', description: 'Пример планового обслуживания двигателя.', price: 1800 },
  { id: 'brakes', title: 'Тормозная система', description: 'Осмотр дисков, колодок и компонентов тормозной системы.', price: 2500 },
  { id: 'suspension', title: 'Подвеска', description: 'Проверка ходовой части и её компонентов.', price: 2000 },
];
const form = document.querySelector('#booking-form');
const serviceSelect = document.querySelector('#service');
const dateInput = document.querySelector('#date');
const carInput = document.querySelector('#car');
const timeSelect = document.querySelector('#time');
const result = document.querySelector('#booking-result');
const money = new Intl.NumberFormat('ru-RU');
const localDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Yekaterinburg', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
const dateParts = Object.fromEntries(localDate.filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
dateInput.min = `${dateParts.year}-${dateParts.month}-${dateParts.day}`;

document.querySelector('#service-list').innerHTML = services.map(service => `<article class="service"><h3>${service.title}</h3><p>${service.description}</p><div class="service-bottom"><span class="service-price">от ${money.format(service.price)} ₽</span><button class="button" data-service="${service.id}">Выбрать</button></div></article>`).join('');
services.forEach(service => { serviceSelect.add(new Option(service.title, service.id)); });

function updateSummary() {
  const service = services.find(service => service.id === serviceSelect.value);
  document.querySelector('#summary-service').textContent = service?.title ?? 'Пока не выбрана';
  document.querySelector('#summary-car').textContent = carInput.value.trim() || 'Укажите модель';
  document.querySelector('#summary-price').textContent = service ? `от ${money.format(service.price)} ₽ (пример)` : 'Зависит от услуги';
  const date = dateInput.value ? new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${dateInput.value}T12:00:00`)) : '';
  document.querySelector('#summary-date').textContent = [date, timeSelect.value].filter(Boolean).join(', ') || 'Выберите удобное время';
  result.hidden = true;
}

document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  serviceSelect.value = button.dataset.service;
  updateSummary();
  document.querySelector('#booking').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  serviceSelect.focus({ preventScroll: true });
}));
form.addEventListener('input', updateSummary);
carInput.addEventListener('input', () => { carInput.setCustomValidity(''); });
form.addEventListener('submit', event => {
  event.preventDefault();
  carInput.setCustomValidity(carInput.value.trim() ? '' : 'Укажите автомобиль.');
  if (!form.reportValidity()) return;
  updateSummary();
  result.hidden = false;
  result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
});
updateSummary();
await import('../../assets/motion.js');
