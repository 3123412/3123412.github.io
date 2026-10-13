(() => {
  const user = { id: 1, fullName: 'Мария Орлова', full_name: 'Мария Орлова', role: 'employee', roles: ['employee'], position: 'Специалист кадрового отдела', departmentId: 1, department_name: 'Кадровый отдел', hasAvatar: false, active: true, can_upload_documents: false, permissions: [] };
  const employees = [user, { id: 2, full_name: 'Алексей Воронов', position: 'Разработчик', department_name: 'Отдел разработки' }, { id: 3, full_name: 'Ирина Соколова', position: 'Специалист', department_name: 'Кадровый отдел' }];
  const documents = [
    { id: 101, title: 'Заявление на отпуск', document_number: 'ДК-101', author_id: 2, author_name: 'Алексей Воронов', department_name: 'Отдел разработки', document_type: 'OTHER', status: 'ON_APPROVAL', document_date: '2026-10-13' },
    { id: 102, title: 'Заявка на обучение', document_number: 'ДК-102', author_id: 3, author_name: 'Ирина Соколова', department_name: 'Кадровый отдел', document_type: 'MEMO', status: 'ON_APPROVAL', document_date: '2026-10-12' },
    { id: 103, title: 'Согласование командировки', document_number: 'ДК-103', author_id: 2, author_name: 'Алексей Воронов', department_name: 'Отдел разработки', document_type: 'MEMO', status: 'ON_APPROVAL', document_date: '2026-10-11' },
    { id: 104, title: 'Заявление о замещении', document_number: 'ДК-104', author_id: 3, author_name: 'Ирина Соколова', department_name: 'Кадровый отдел', document_type: 'OTHER', status: 'APPROVED', document_date: '2026-10-10' },
    { id: 105, title: 'Приказ об обучении', document_number: 'ДК-105', author_id: 1, author_name: 'Мария Орлова', department_name: 'Кадровый отдел', document_type: 'ORDER', status: 'DRAFT', document_date: '2026-10-09' },
  ].map(document => ({ ...document, filename: `demo-${document.id}.pdf`, file_hash: '0'.repeat(64), created_at: `${document.document_date}T09:00:00+05:00`, updated_at: `${document.document_date}T10:00:00+05:00`, approver_id: 1, approver_name: user.fullName, workflow_action: 'APPROVAL', active_step_type: document.status === 'ON_APPROVAL' ? 'APPROVAL' : null, workflow_state: document.status === 'APPROVED' ? 'COMPLETED' : 'ACTIVE', effective_state: 'NONE', folders: [], signatures: [], approved_file_path: document.status === 'APPROVED' ? 'demo-approved.pdf' : null, approved_filename: 'demo-approved.pdf', approved_at: document.status === 'APPROVED' ? '2026-10-10T12:00:00+05:00' : null }));
  const tasks = [
    { id: 201, title: 'Проверить входящие документы', description: 'Просмотреть демонстрационные заявления и согласовать их.', status: 'OPEN' },
    { id: 202, title: 'Проверить учебный приказ', description: 'Изучить демонстрационный документ ДК-105.', status: 'IN_PROGRESS' },
    { id: 203, title: 'Подготовить материалы обучения', description: 'Демонстрационное поручение кадрового отдела.', status: 'DONE' },
  ].map(task => ({ ...task, assignee_id: 1, assignee_type: 'USER', assignee_name: user.fullName, assignee_position: user.position, created_by: 2, creator_name: 'Алексей Воронов', created_at: '2026-10-13T10:00:00+05:00', due_date: '2026-12-01', priority: 'NORMAL', checklist: [], attachments: [], comments: [] }));
  const notes = [];
  const comments = new Map();
  const versions = id => [{ id: id * 10, version: 1, filename: `demo-${id}.pdf`, created_at: '2026-10-13T10:00:00+05:00', author_name: 'Демо-сотрудник', change_reason: 'Демонстрационный документ' }];
  const clone = value => JSON.parse(JSON.stringify(value));
  const inbox = () => {
    const activeTasks = tasks.filter(task => ['OPEN', 'IN_PROGRESS'].includes(task.status));
    const activeDocuments = documents.filter(document => document.status === 'ON_APPROVAL');
    const drafts = documents.filter(document => document.status === 'DRAFT');
    return { tasks: activeTasks, documents: activeDocuments, drafts, counts: { actionable: activeTasks.length + activeDocuments.length, tasks: activeTasks.length, documents: activeDocuments.length, drafts: drafts.length, overdue: 0 }, unread: 0 };
  };
  const originalFetch = window.fetch.bind(window);

  async function request(input, options = {}) {
    const url = new URL(input, location.origin);
    const path = url.pathname.replace(/\/$/, '');
    const method = (options.method || 'GET').toUpperCase();
    const body = typeof options.body === 'string' ? JSON.parse(options.body) : {};
    if (path === '/api/auth/me') return clone(user);
    if (path === '/api/auth/csrf') return { csrfToken: 'demo-local' };
    if (path === '/api/my-branch') return {};
    if (path === '/api/reports/access') return { level: 0 };
    if (path === '/api/notifications' || path === '/api/notifications/archive') return { items: [], unread: 0 };
    if (path === '/api/messages/unread-count') return { count: 0, unread: 0 };
    if (path === '/api/inbox') return clone(inbox());
    if (path === '/api/inbox/dashboard') return clone({ inbox: inbox(), workforce: { employee_count: employees.length, online_count: 1 } });
    if (path === '/api/directory/users' || path === '/api/documents/approvers') return clone(employees);
    if (path === '/api/directory/departments') return [{ id: 1, name: 'Кадровый отдел' }, { id: 2, name: 'Отдел разработки' }];
    if (path === '/api/directory/org-groups' || path === '/api/documents/signers' || path === '/api/documents/templates') return [];
    if (path === '/api/documents/folders' || path === '/api/documents/order-folders') return { items: [], canManage: false };
    if (path === '/api/documents/archive/stats') return { documents: documents.length, total: documents.length, folders: 0, active: 3, archived: 0, deleted: 0, recent: documents.length, files: documents.length, recycle: 0 };
    if (path === '/api/documents' || path === '/api/documents/archive') {
      const query = (url.searchParams.get('q') || '').toLocaleLowerCase('ru');
      const fileType = (url.searchParams.get('fileType') || '').toLowerCase();
      const items = documents.filter(document => `${document.title} ${document.document_number} ${document.author_name}`.toLocaleLowerCase('ru').includes(query) && (!fileType || document.filename.toLowerCase().endsWith(`.${fileType}`)));
      if (url.searchParams.get('sort') === 'title') items.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
      const pageSize = Math.min(100, Math.max(1, Number(url.searchParams.get('limit')) || 24));
      return clone({ items: items.slice(0, pageSize), total: items.length, page: 1, pages: Math.max(1, Math.ceil(items.length / pageSize)), pageSize });
    }
    if (path === '/api/documents/archive/recycle-bin') return { items: [], total: 0, page: 1, pages: 1 };
    const documentRoute = path.match(/^\/api\/documents\/(\d+)(?:\/(.+))?$/);
    if (documentRoute) {
      const document = documents.find(document => document.id === Number(documentRoute[1]));
      if (!document) throw Error('Демонстрационный документ не найден.');
      const action = documentRoute[2];
      if (!action) return clone(document);
      if (action === 'approve' && method === 'POST') {
        document.status = 'APPROVED'; document.workflow_state = 'COMPLETED'; document.active_step_type = null;
        document.approved_at = new Date().toISOString(); document.approved_file_path = 'demo-approved.pdf';
        return clone(document);
      }
      if (action === 'reject' && method === 'POST') { document.status = 'DRAFT'; return clone(document); }
      if (action === 'versions') return versions(document.id);
      if (action === 'comments') {
        if (!comments.has(document.id)) comments.set(document.id, []);
        if (method === 'POST') comments.get(document.id).push({ id: Date.now(), body: body.body || body.comment || '', author_name: user.fullName, full_name: user.fullName, created_at: new Date().toISOString() });
        return clone(comments.get(document.id));
      }
      if (action === 'access' || action === 'attachments' || action === 'links' || action === 'relations' || action === 'workflow-runs') return [];
      if (action === 'acknowledgement') return { required: false, acknowledged: false };
      if (action === 'archive-meta') return { folders: [], linkedFolders: [], canManage: false };
      if (action === 'favorite') return { favorite: true };
    }
    if (path.startsWith('/api/public-links/documents/')) return null;
    if (path === '/api/tasks/notes') {
      if (method === 'POST') { notes.push({ id: Date.now(), title: body.title, body: body.body, color: body.color || 'yellow', remind_at: null, is_done: false }); return clone(notes.at(-1)); }
      return clone(notes);
    }
    const noteRoute = path.match(/^\/api\/tasks\/notes\/(\d+)$/);
    if (noteRoute) {
      const index = notes.findIndex(note => note.id === Number(noteRoute[1]));
      if (index < 0) throw Error('Заметка не найдена.');
      if (method === 'DELETE') { notes.splice(index, 1); return { ok: true }; }
      Object.assign(notes[index], body, body.isDone === undefined ? {} : { is_done: body.isDone });
      return clone(notes[index]);
    }
    if (path === '/api/tasks') return clone(tasks.filter(task => url.searchParams.get('view') === 'archive' ? ['DONE', 'ACKNOWLEDGED'].includes(task.status) : ['OPEN', 'IN_PROGRESS'].includes(task.status)));
    const taskRoute = path.match(/^\/api\/tasks\/(\d+)(?:\/(.+))?$/);
    if (taskRoute) {
      const task = tasks.find(task => task.id === Number(taskRoute[1]));
      if (!task) throw Error('Демонстрационная задача не найдена.');
      if (method !== 'GET' && body.status) { task.status = body.status; return clone(task); }
      if (method !== 'GET') throw Error('Эта операция требует сервера и не входит в открытое демо.');
      if (taskRoute[2]) return [];
      return clone(task);
    }
    if (path === '/api/profile/overview') return clone({ user, personal: user, stats: {} });
    throw Error('Эта операция требует сервера и не входит в открытое демо.');
  }

  window.fetch = async (input, options = {}) => {
    const address = typeof input === 'string' ? input : input.url;
    const url = new URL(address, location.href);
    if (/^\/api\/documents\/\d+\/(?:versions\/\d+\/)?download$/.test(url.pathname)) return originalFetch(new URL('demo-document.pdf', document.baseURI));
    if (url.pathname.startsWith('/api/')) {
      try { return new Response(JSON.stringify(await request(url.href, options)), { headers: { 'Content-Type': 'application/json' } }); }
      catch (error) { return new Response(JSON.stringify({ message: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } }); }
    }
    if (url.pathname === '/build-info.json') return new Response(JSON.stringify({ version: 'Демо', commit: '', deployed_at: '' }), { headers: { 'Content-Type': 'application/json' } });
    return originalFetch(input, options);
  };
  window.kedoDemo = {
    request,
    download(id) {
      const link = document.createElement('a');
      link.href = new URL('demo-document.pdf', document.baseURI).href;
      link.download = `demo-${id}.pdf`;
      link.click();
    },
  };
})();
