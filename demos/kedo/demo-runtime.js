state.soundEnabled = false;
state.archiveV2 = { mode: 'all', folderId: null, page: 1, pageSize: 24, view: 'cards', q: '', fileType: '', sort: 'updated' };
document.querySelector('#logout').textContent = 'Сбросить демо';
document.querySelector('#logout').onclick = () => location.reload();
document.querySelector('#userCaption').disabled = true;
document.querySelector('#userCaption').onclick = null;
document.querySelector('.top-brand strong').textContent = 'КЭДО · демо';
const showOriginalApp = showApp;
showApp = async function (...args) {
  await showOriginalApp(...args);
  const caption = document.querySelector('#userCaption');
  caption.onclick = null;
  caption.disabled = true;
  caption.setAttribute('title', 'Вымышленный сотрудник для открытой демонстрации');
};

document.addEventListener('click', event => {
  const control = event.target.closest('[data-page], [data-action]');
  const allowedPages = new Set(['dashboard', 'inbox', 'documents', 'tasks']);
  if (control?.dataset.page && !allowedPages.has(control.dataset.page)) {
    event.preventDefault();
    event.stopImmediatePropagation();
    kedoAlert('Открытое демо показывает главную страницу, входящие, документы и задачи. Остальные разделы работают в полной серверной версии.');
  }
  if (control?.dataset.action === 'prepareSigningKey') {
    event.preventDefault();
    event.stopImmediatePropagation();
    kedoAlert('Электронная подпись доступна в полной серверной версии. В открытом демо можно просматривать и согласовывать вымышленные документы.');
  }
}, true);
const previewId = Number(new URLSearchParams(location.search).get('document'));
if (previewId) {
  const previewObserver = new MutationObserver(() => {
    if (document.querySelector('.inbox-page') && state.user) {
      previewObserver.disconnect();
      window.openDocument(previewId);
    }
  });
  if (document.querySelector('.inbox-page') && state.user) window.openDocument(previewId);
  else previewObserver.observe(document.querySelector('#main'), { childList: true });
}
